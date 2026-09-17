import { createHmac, randomBytes, randomUUID } from 'node:crypto'
import { createReadStream } from 'node:fs'
import { mkdir, readdir, rm, stat, writeFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  buildFeishuFeedbackCard,
  buildFeishuFeedbackText,
} from './feedback-format.mjs'

const websiteRoot = resolve(fileURLToPath(new URL('.', import.meta.url)))
const repositoryRoot = resolve(websiteRoot, '..')
const feedbackStorageRoot = resolve(
  process.env.ORCABOX_FEEDBACK_STORAGE_DIR
  ?? fileURLToPath(new URL('.feedback-data', import.meta.url)),
)
const port = Number.parseInt(process.env.PORT ?? '8686', 10)

const MAX_REQUEST_BODY_BYTES = 44 * 1024 * 1024
const MAX_ATTACHMENT_COUNT = 5
const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024
const MAX_TOTAL_ATTACHMENT_BYTES = 30 * 1024 * 1024
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 6
const MAX_RATE_LIMIT_ENTRIES = 10_000
const FEEDBACK_RETENTION_MS = 30 * 24 * 60 * 60 * 1000
const FEEDBACK_MAX_STORAGE_BYTES = 800 * 1024 * 1024
const FEEDBACK_CLEANUP_INTERVAL_MS = 15 * 60 * 1000
const feedbackRateLimits = new Map()

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.m4v': 'video/x-m4v',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webm': 'video/webm',
  '.webmanifest': 'application/manifest+json',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
}

function resolveRequestPath(url) {
  const pathname = decodeURIComponent(new URL(url, 'http://localhost').pathname)

  if (pathname === '/' || pathname === '/index.html') {
    return resolve(websiteRoot, 'index.html')
  }

  if (pathname === '/website' || pathname === '/website/') {
    return resolve(websiteRoot, 'index.html')
  }

  const relativePath = pathname.replace(/^\/+/, '')
  const websitePath = resolve(websiteRoot, relativePath)
  const websitePrefix = `${websiteRoot}${sep}`

  if (websitePath.startsWith(websitePrefix)) {
    return websitePath
  }

  if (relativePath.startsWith('assets/')) {
    return null
  }

  const filePath = resolve(repositoryRoot, relativePath)
  const repositoryPrefix = `${repositoryRoot}${sep}`

  if (filePath !== repositoryRoot && !filePath.startsWith(repositoryPrefix)) {
    return null
  }

  if (
    !filePath.startsWith(`${websiteRoot}${sep}`)
    && !filePath.startsWith(`${resolve(repositoryRoot, 'ui design')}${sep}`)
  ) {
    return null
  }

  return filePath
}

const server = createServer(async (request, response) => {
  setSecurityHeaders(response)

  let requestUrl
  try {
    requestUrl = new URL(request.url ?? '/', 'http://localhost')
  } catch {
    sendJson(response, 400, { success: false, message: 'Bad Request' })
    return
  }

  if (requestUrl.pathname === '/api/feedback') {
    await handleFeedbackRequest(request, response)
    return
  }

  if (requestUrl.pathname === '/api/feedback/health') {
    await handleFeedbackHealthRequest(request, response)
    return
  }

  if (requestUrl.pathname.startsWith('/feedback-assets/')) {
    await serveFeedbackAsset(requestUrl.pathname, request, response)
    return
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' })
    response.end('Method Not Allowed')
    return
  }

  let filePath
  try {
    filePath = resolveRequestPath(request.url ?? '/')
  } catch {
    response.writeHead(400)
    response.end('Bad Request')
    return
  }

  if (!filePath) {
    response.writeHead(404)
    response.end('Not Found')
    return
  }

  await serveFile(filePath, request, response, {
    cacheControl: 'auto',
  })
})

async function handleFeedbackRequest(request, response) {
  if (request.method !== 'POST') {
    sendJson(response, 405, {
      success: false,
      message: 'Method Not Allowed',
    }, { Allow: 'POST' })
    return
  }

  const clientAddress = getClientAddress(request)
  if (!consumeFeedbackRateLimit(clientAddress)) {
    sendJson(response, 429, {
      success: false,
      message: 'Too many feedback submissions. Please try again later.',
    })
    return
  }

  let feedbackDirectory = null
  let persisted = false
  try {
    const payload = await readJsonBody(request)
    const feedback = validateFeedbackPayload(payload)
    const feedbackId = createFeedbackId()
    feedbackDirectory = resolve(feedbackStorageRoot, feedbackId)
    await mkdir(feedbackDirectory, { recursive: true })

    const attachmentUrls = []
    const attachmentRecords = []
    const publicBaseUrl = resolvePublicBaseUrl(request)

    for (const [index, attachment] of feedback.attachments.entries()) {
      const bytes = Buffer.from(attachment.dataBase64, 'base64')
      const detected = detectImageType(bytes)
      if (!detected) {
        throw createHttpError(400, `Attachment ${index + 1} is not a supported image.`)
      }
      if (bytes.byteLength > MAX_ATTACHMENT_BYTES) {
        throw createHttpError(413, `Attachment ${index + 1} exceeds 10 MB.`)
      }

      const token = randomBytes(20).toString('hex')
      const fileName = `${token}-${index + 1}.${detected.extension}`
      const filePath = resolve(feedbackDirectory, fileName)
      await writeFile(filePath, bytes, { flag: 'wx' })
      const publicUrl = `${publicBaseUrl}/feedback-assets/${encodeURIComponent(feedbackId)}/${encodeURIComponent(fileName)}`
      attachmentUrls.push(publicUrl)
      attachmentRecords.push({
        originalName: attachment.name,
        storedName: fileName,
        mimeType: detected.mimeType,
        sizeBytes: bytes.byteLength,
        publicUrl,
      })
    }

    const manifestPath = resolve(feedbackDirectory, 'feedback.json')
    const storedAt = new Date().toISOString()
    const storedRecord = {
      feedbackId,
      storedAt,
      category: feedback.category,
      content: feedback.content,
      contact: feedback.contact,
      app: feedback.app,
      diagnostics: feedback.diagnostics,
      attachments: attachmentRecords,
      delivery: 'stored',
    }
    await writeFile(manifestPath, `${JSON.stringify(storedRecord, null, 2)}\n`, 'utf8')

    let delivery = 'stored'
    let notificationError = null
    try {
      if (process.env.ORCABOX_FEEDBACK_FEISHU_WEBHOOK?.trim()) {
        await sendFeedbackToFeishu({
          feedbackId,
          feedback,
          attachmentUrls,
        })
        delivery = 'delivered'
      }
    } catch (error) {
      notificationError = error instanceof Error ? error.message : String(error)
      console.error(`[feedback] ${feedbackId} stored but Feishu notification failed:`, error)
    }

    await writeFile(manifestPath, `${JSON.stringify({
      ...storedRecord,
      delivery,
      notificationError,
    }, null, 2)}\n`, 'utf8')
    persisted = true

    sendJson(response, 200, {
      success: true,
      feedbackId,
      delivery,
      message: delivery === 'delivered'
        ? 'Feedback received and delivered.'
        : 'Feedback received and stored.',
    })
  } catch (error) {
    if (feedbackDirectory && !persisted) {
      await rm(feedbackDirectory, { recursive: true, force: true }).catch(() => undefined)
    }
    const statusCode = Number.isInteger(error?.statusCode) ? error.statusCode : 500
    const message = error instanceof Error ? error.message : 'Feedback submission failed.'
    if (statusCode >= 500) {
      console.error('[feedback] request failed:', error)
    }
    sendJson(response, statusCode, {
      success: false,
      message,
    })
  }
}

async function handleFeedbackHealthRequest(request, response) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    sendJson(response, 405, {
      status: 'error',
      message: 'Method Not Allowed',
    }, { Allow: 'GET, HEAD' })
    return
  }

  try {
    await mkdir(feedbackStorageRoot, { recursive: true })
    const payload = {
      status: 'ok',
      service: 'orcabox-feedback',
      timestamp: new Date().toISOString(),
    }
    if (request.method === 'HEAD') {
      response.writeHead(200, {
        'Cache-Control': 'no-store',
        'Content-Type': 'application/json; charset=utf-8',
      })
      response.end()
      return
    }
    sendJson(response, 200, payload)
  } catch (error) {
    console.error('[feedback] health check failed:', error)
    sendJson(response, 503, {
      status: 'error',
      service: 'orcabox-feedback',
    })
  }
}

export async function sendFeedbackToFeishu({ feedbackId, feedback, attachmentUrls }) {
  const webhook = process.env.ORCABOX_FEEDBACK_FEISHU_WEBHOOK?.trim()
  if (!webhook) return

  const webhookUrl = new URL(webhook)
  if (webhookUrl.protocol !== 'https:') {
    throw new Error('Feishu webhook must use HTTPS.')
  }

  const secret = process.env.ORCABOX_FEEDBACK_FEISHU_SECRET?.trim()
  const cardBody = buildFeishuFeedbackCard({
    feedbackId,
    feedback,
    attachmentUrls,
  })

  try {
    await postFeishuWebhook(webhookUrl, cardBody, secret)
    return
  } catch (error) {
    if (error?.feishuRejected !== true) {
      throw error
    }
    console.warn(`[feedback] ${feedbackId} card rejected by Feishu, falling back to text:`, error.message)
  }

  await postFeishuWebhook(
    webhookUrl,
    buildFeishuFeedbackText({
      feedbackId,
      feedback,
      attachmentUrls,
    }),
    secret,
  )
}

async function postFeishuWebhook(webhookUrl, messageBody, secret) {
  const body = { ...messageBody }
  if (secret) {
    const timestamp = Math.floor(Date.now() / 1000)
    const stringToSign = `${timestamp}\n${secret}`
    body.timestamp = String(timestamp)
    body.sign = createHmac('sha256', stringToSign).update('').digest('base64')
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(12_000),
  })
  const payload = await response.json().catch(() => ({}))
  const responseCode = payload.code ?? payload.StatusCode ?? payload.status_code
  if (!response.ok || (responseCode !== undefined && Number(responseCode) !== 0)) {
    const error = new Error(
      payload.msg
      ?? payload.StatusMessage
      ?? `Feishu webhook returned HTTP ${response.status}.`,
    )
    error.feishuRejected = true
    throw error
  }
}

function validateFeedbackPayload(payload) {
  if (!payload || typeof payload !== 'object') {
    throw createHttpError(400, 'Invalid feedback payload.')
  }

  const category = String(payload.category ?? '')
  if (!['bug', 'feature', 'experience', 'other'].includes(category)) {
    throw createHttpError(400, 'Invalid feedback category.')
  }

  const content = String(payload.content ?? '').trim()
  if (content.length < 4 || content.length > 5000) {
    throw createHttpError(400, 'Feedback content must contain 4 to 5000 characters.')
  }

  const contact = String(payload.contact ?? '').trim()
  if (contact.length > 200) {
    throw createHttpError(400, 'Contact information is too long.')
  }

  const attachments = Array.isArray(payload.attachments) ? payload.attachments : []
  if (attachments.length > MAX_ATTACHMENT_COUNT) {
    throw createHttpError(400, `Attach up to ${MAX_ATTACHMENT_COUNT} images.`)
  }

  let totalAttachmentBytes = 0
  const normalizedAttachments = attachments.map((attachment, index) => {
    if (!attachment || typeof attachment !== 'object') {
      throw createHttpError(400, `Attachment ${index + 1} is invalid.`)
    }
    const dataBase64 = String(attachment.dataBase64 ?? '')
    if (!/^[A-Za-z0-9+/]*={0,2}$/.test(dataBase64) || dataBase64.length === 0) {
      throw createHttpError(400, `Attachment ${index + 1} has invalid data.`)
    }
    const sizeBytes = Buffer.from(dataBase64, 'base64').byteLength
    if (sizeBytes <= 0 || sizeBytes > MAX_ATTACHMENT_BYTES) {
      throw createHttpError(413, `Attachment ${index + 1} exceeds 10 MB.`)
    }
    totalAttachmentBytes += sizeBytes
    return {
      name: String(attachment.name ?? `feedback-image-${index + 1}`).slice(0, 180),
      dataBase64,
    }
  })

  if (totalAttachmentBytes > MAX_TOTAL_ATTACHMENT_BYTES) {
    throw createHttpError(413, 'The combined image size exceeds 30 MB.')
  }

  const appInfo = payload.app && typeof payload.app === 'object' ? payload.app : {}
  const diagnostics = Array.isArray(payload.diagnostics)
    ? payload.diagnostics.slice(-24).map((entry) => ({
        timestamp: String(entry?.timestamp ?? '').slice(0, 40),
        category: String(entry?.category ?? '').slice(0, 80),
        action: String(entry?.action ?? '').slice(0, 160),
        level: String(entry?.level ?? 'info').slice(0, 20),
        message: entry?.message ? String(entry.message).slice(0, 600) : null,
      }))
    : []

  return {
    category,
    content,
    contact: contact || null,
    attachments: normalizedAttachments,
    app: {
      name: String(appInfo.name ?? 'OrcaBox').slice(0, 80),
      version: String(appInfo.version ?? 'unknown').slice(0, 40),
      packaged: appInfo.packaged === true,
      platform: String(appInfo.platform ?? 'unknown').slice(0, 40),
      arch: String(appInfo.arch ?? 'unknown').slice(0, 40),
      osRelease: String(appInfo.osRelease ?? 'unknown').slice(0, 80),
      locale: String(appInfo.locale ?? 'unknown').slice(0, 20),
      libraryOpen: appInfo.libraryOpen === true,
    },
    diagnostics,
  }
}

async function serveFeedbackAsset(pathname, request, response) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' })
    response.end('Method Not Allowed')
    return
  }

  const relativePath = pathname.replace(/^\/feedback-assets\/+/, '')
  if (!/^[A-Za-z0-9%._/-]+$/.test(relativePath)) {
    response.writeHead(404)
    response.end('Not Found')
    return
  }

  let decodedPath
  try {
    decodedPath = decodeURIComponent(relativePath)
  } catch {
    response.writeHead(404)
    response.end('Not Found')
    return
  }
  const [feedbackId, fileName, ...extraSegments] = decodedPath.split('/')
  if (
    extraSegments.length > 0
    || !/^FB-\d{8}-[A-F0-9]{8}$/i.test(feedbackId ?? '')
    || !/^[A-F0-9]{40}-\d+\.(?:png|jpg|webp)$/i.test(fileName ?? '')
  ) {
    response.writeHead(404)
    response.end('Not Found')
    return
  }

  let filePath
  try {
    filePath = resolve(feedbackStorageRoot, feedbackId, fileName)
  } catch {
    response.writeHead(404)
    response.end('Not Found')
    return
  }
  if (!filePath.startsWith(`${feedbackStorageRoot}${sep}`)) {
    response.writeHead(404)
    response.end('Not Found')
    return
  }

  await serveFile(filePath, request, response, {
    cacheControl: 'private, max-age=86400',
  })
}

function parseByteRange(rangeHeader, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(String(rangeHeader ?? '').trim())
  if (!match) {
    return null
  }

  const [, rawStart, rawEnd] = match
  if (!rawStart && !rawEnd) {
    return null
  }

  let start
  let end
  if (!rawStart) {
    // 后缀范围：bytes=-500 表示最后 500 字节
    const suffixLength = Number(rawEnd)
    if (!Number.isFinite(suffixLength) || suffixLength <= 0) {
      return null
    }
    start = Math.max(0, size - suffixLength)
    end = size - 1
  } else {
    start = Number(rawStart)
    end = rawEnd ? Number(rawEnd) : size - 1
  }

  if (!Number.isFinite(start) || !Number.isFinite(end) || start > end || start >= size) {
    return null
  }

  return { start, end: Math.min(end, size - 1) }
}

async function serveFile(filePath, request, response, options) {
  try {
    const fileStat = await stat(filePath)
    if (!fileStat.isFile()) {
      throw new Error('Not a file')
    }

    const contentType = contentTypes[extname(filePath).toLowerCase()] ?? 'application/octet-stream'
    const cacheControl = options.cacheControl === 'auto'
      ? contentType.startsWith('image/') || contentType.startsWith('video/')
        ? 'public, max-age=3600'
        : 'no-cache'
      : options.cacheControl

    const baseHeaders = {
      'Cache-Control': cacheControl,
      'Content-Type': contentType,
      'X-Content-Type-Options': 'nosniff',
    }

    // 视频需要 206 分段响应，Safari 等浏览器否则可能直接拒绝播放
    const range = parseByteRange(request.headers.range, fileStat.size)
    if (range) {
      response.writeHead(206, {
        ...baseHeaders,
        'Accept-Ranges': 'bytes',
        'Content-Length': range.end - range.start + 1,
        'Content-Range': `bytes ${range.start}-${range.end}/${fileStat.size}`,
      })

      if (request.method === 'HEAD') {
        response.end()
        return
      }

      createReadStream(filePath, { start: range.start, end: range.end }).pipe(response)
      return
    }

    response.writeHead(200, {
      ...baseHeaders,
      'Accept-Ranges': 'bytes',
      'Content-Length': fileStat.size,
    })

    if (request.method === 'HEAD') {
      response.end()
      return
    }

    createReadStream(filePath).pipe(response)
  } catch {
    response.writeHead(404)
    response.end('Not Found')
  }
}

async function readJsonBody(request) {
  const chunks = []
  let totalBytes = 0
  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
    totalBytes += buffer.byteLength
    if (totalBytes > MAX_REQUEST_BODY_BYTES) {
      throw createHttpError(413, 'Feedback request is too large.')
    }
    chunks.push(buffer)
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'))
  } catch {
    throw createHttpError(400, 'Feedback request must be valid JSON.')
  }
}

function detectImageType(bytes) {
  if (
    bytes.length >= 8
    && bytes[0] === 0x89
    && bytes[1] === 0x50
    && bytes[2] === 0x4e
    && bytes[3] === 0x47
  ) {
    return { extension: 'png', mimeType: 'image/png' }
  }
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return { extension: 'jpg', mimeType: 'image/jpeg' }
  }
  if (
    bytes.length >= 12
    && bytes.subarray(0, 4).toString('ascii') === 'RIFF'
    && bytes.subarray(8, 12).toString('ascii') === 'WEBP'
  ) {
    return { extension: 'webp', mimeType: 'image/webp' }
  }
  return null
}

function resolvePublicBaseUrl(request) {
  const configured = process.env.ORCABOX_PUBLIC_BASE_URL?.trim()
  if (configured) {
    const url = new URL(configured)
    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      throw createHttpError(500, 'ORCABOX_PUBLIC_BASE_URL must use HTTP or HTTPS.')
    }
    return url.toString().replace(/\/+$/, '')
  }

  const forwardedProtocol = String(request.headers['x-forwarded-proto'] ?? '').split(',')[0].trim()
  const protocol = forwardedProtocol === 'https' ? 'https' : 'http'
  const host = request.headers.host
  if (!host) {
    throw createHttpError(500, 'Unable to resolve the public feedback URL.')
  }
  return `${protocol}://${host}`
}

function getClientAddress(request) {
  const forwarded = String(request.headers['x-forwarded-for'] ?? '').split(',')[0].trim()
  return forwarded || request.socket.remoteAddress || 'unknown'
}

function consumeFeedbackRateLimit(key) {
  const now = Date.now()
  for (const [entryKey, entry] of feedbackRateLimits) {
    if (now - entry.startedAt >= RATE_LIMIT_WINDOW_MS) {
      feedbackRateLimits.delete(entryKey)
    }
  }
  while (feedbackRateLimits.size >= MAX_RATE_LIMIT_ENTRIES && !feedbackRateLimits.has(key)) {
    const oldestKey = feedbackRateLimits.keys().next().value
    if (oldestKey === undefined) break
    feedbackRateLimits.delete(oldestKey)
  }
  const existing = feedbackRateLimits.get(key)
  if (!existing || now - existing.startedAt >= RATE_LIMIT_WINDOW_MS) {
    feedbackRateLimits.set(key, { startedAt: now, count: 1 })
    return true
  }
  existing.count += 1
  return existing.count <= RATE_LIMIT_MAX_REQUESTS
}

async function pruneFeedbackStorage() {
  await mkdir(feedbackStorageRoot, { recursive: true })
  const entries = await readdir(feedbackStorageRoot, { withFileTypes: true })
  const directories = []

  for (const entry of entries) {
    if (!entry.isDirectory() || !/^FB-\d{8}-[A-F0-9]{8}$/i.test(entry.name)) continue
    const directoryPath = resolve(feedbackStorageRoot, entry.name)
    const directoryStat = await stat(directoryPath).catch(() => null)
    const files = await readdir(directoryPath, { withFileTypes: true }).catch(() => [])
    let sizeBytes = 0
    let newestMtimeMs = directoryStat?.mtimeMs ?? 0
    for (const file of files) {
      if (!file.isFile()) continue
      const fileStat = await stat(resolve(directoryPath, file.name)).catch(() => null)
      if (!fileStat) continue
      sizeBytes += fileStat.size
      newestMtimeMs = Math.max(newestMtimeMs, fileStat.mtimeMs)
    }
    directories.push({ directoryPath, sizeBytes, newestMtimeMs })
  }

  const retentionCutoff = Date.now() - FEEDBACK_RETENTION_MS
  for (const directory of directories) {
    if (directory.newestMtimeMs > 0 && directory.newestMtimeMs < retentionCutoff) {
      await rm(directory.directoryPath, { recursive: true, force: true })
    }
  }

  const remaining = directories
    .filter((directory) => directory.newestMtimeMs >= retentionCutoff)
    .sort((left, right) => left.newestMtimeMs - right.newestMtimeMs)
  let totalBytes = remaining.reduce((sum, directory) => sum + directory.sizeBytes, 0)
  for (const directory of remaining) {
    if (totalBytes <= FEEDBACK_MAX_STORAGE_BYTES) break
    await rm(directory.directoryPath, { recursive: true, force: true })
    totalBytes -= directory.sizeBytes
  }
}

function createFeedbackId() {
  const date = new Date().toISOString().slice(0, 10).replaceAll('-', '')
  return `FB-${date}-${randomUUID().replaceAll('-', '').slice(0, 8).toUpperCase()}`
}

function createHttpError(statusCode, message) {
  const error = new Error(message)
  error.statusCode = statusCode
  return error
}

function setSecurityHeaders(response) {
  response.setHeader('Referrer-Policy', 'no-referrer')
  response.setHeader('X-Content-Type-Options', 'nosniff')
  response.setHeader('X-Frame-Options', 'DENY')
}

function sendJson(response, statusCode, payload, headers = {}) {
  response.writeHead(statusCode, {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
    ...headers,
  })
  response.end(JSON.stringify(payload))
}

const directEntryPath = process.argv[1] ? resolve(process.argv[1]) : ''
if (directEntryPath === fileURLToPath(import.meta.url)) {
  void pruneFeedbackStorage().catch((error) => {
    console.warn('[feedback] initial storage cleanup failed:', error)
  })
  const cleanupTimer = setInterval(() => {
    void pruneFeedbackStorage().catch((error) => {
      console.warn('[feedback] scheduled storage cleanup failed:', error)
    })
  }, FEEDBACK_CLEANUP_INTERVAL_MS)
  cleanupTimer.unref()
  server.listen(port, '0.0.0.0', () => {
    console.log(`OrcaBox website preview listening on http://0.0.0.0:${port}`)
  })
}
