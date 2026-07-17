import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('.', import.meta.url)))
const port = Number.parseInt(process.env.PORT ?? '8686', 10)

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
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
  const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '')
  const filePath = resolve(root, relativePath)
  const rootPrefix = `${root}${sep}`

  if (filePath !== root && !filePath.startsWith(rootPrefix)) {
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
    response.writeHead(200, {
      'Cache-Control': contentType.startsWith('image/') ? 'public, max-age=86400' : 'no-cache',
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
  console.log(`OrcaBox release website listening on http://0.0.0.0:${port}`)
})
