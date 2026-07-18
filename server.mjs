import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const websiteRoot = resolve(fileURLToPath(new URL('.', import.meta.url)))
const repositoryRoot = resolve(websiteRoot, '..')
const port = Number.parseInt(process.env.PORT ?? '8686', 10)

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
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
    !filePath.startsWith(`${websiteRoot}${sep}`) &&
    !filePath.startsWith(`${resolve(repositoryRoot, 'ui design')}${sep}`)
  ) {
    return null
  }

  return filePath
}

const server = createServer(async (request, response) => {
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

  try {
    const fileStat = await stat(filePath)
    if (!fileStat.isFile()) {
      throw new Error('Not a file')
    }

    const contentType = contentTypes[extname(filePath).toLowerCase()] ?? 'application/octet-stream'
    const cacheControl = contentType.startsWith('image/') ? 'public, max-age=3600' : 'no-cache'

    response.writeHead(200, {
      'Cache-Control': cacheControl,
      'Content-Length': fileStat.size,
      'Content-Type': contentType,
      'X-Content-Type-Options': 'nosniff',
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
})

server.listen(port, '0.0.0.0', () => {
  console.log(`OrcaBox website preview listening on http://0.0.0.0:${port}`)
})
