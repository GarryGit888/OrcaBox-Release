import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { test } from 'node:test'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const read = (file) => readFileSync(resolve(root, file), 'utf8')
const docs = read('website/docs.html')
const home = read('website/index.html')
const releases = read('website/releases.html')

test('the public guide has navigable, unique sections and substantive modules', () => {
  const sectionIds = [...docs.matchAll(/<section class="doc-section" id="([^"]+)"/g)].map((match) => match[1])
  const sidebarIds = [...docs.matchAll(/<a href="#([^"]+)"/g)].map((match) => match[1])
  const subsectionIds = [...docs.matchAll(/<h3 id="([^"]+)">([^<]+)<\/h3>/g)].map((match) => match[1])
  assert.equal(sectionIds.length, 15)
  assert.deepEqual(sidebarIds, sectionIds)
  assert.equal(new Set([...sectionIds, ...subsectionIds]).size, sectionIds.length + subsectionIds.length)
  for (const id of sectionIds) {
    const section = docs.split(`<section class="doc-section" id="${id}"`)[1]?.split('</section>')[0]
    assert.ok(section?.includes('<h2>') && section.length > 220, `${id} needs usage guidance`)
    if (id !== 'faq') assert.ok((section.match(/<h3 id="/g) ?? []).length >= 2, `${id} needs named subsections`)
  }
  assert.match(docs, /parentLink\.after|previousLink\.after\(link\)/)
  assert.match(docs, /const targets = sections\.flatMap/)
  assert.match(docs, /id: heading\.id, title: chapter/)
})

test('the homepage, release page, deployment and crawler all link to the guide', () => {
  assert.match(home, /href="docs\.html" data-i18n="nav\.docs"/)
  assert.match(home, /href="docs\.html" data-i18n="footer\.r1"/)
  assert.match(releases, /id="nav-docs" href="docs\.html"/)
  assert.match(read('website/Dockerfile.feedback'), /COPY website\/docs\.html \.\/docs\.html/)
  assert.match(read('website/sitemap.xml'), /https:\/\/orcabox\.app\/docs\.html/)
  assert.match(read('website/robots.txt'), /Allow: \/docs\.html/)
})

test('release documentation verifies feature guide updates', () => {
  const script = read('scripts/release-docs.mjs')
  assert.match(script, /groups\.features\.length && !changedFiles\.includes\('website\/docs\.html'\)/)
})

test('guide screenshots keep intrinsic dimensions and are not cropped', () => {
  const images = [...docs.matchAll(/<img class="doc-shot"[^>]+>/g)].map((match) => match[0])
  assert.equal(images.length, 9)
  for (const image of images) {
    assert.match(image, /width="\d+" height="\d+"/)
    assert.doesNotMatch(image, /srcset=|style=/)
    const source = image.match(/src="([^"]+)"/)?.[1]
    assert.ok(source && existsSync(resolve(root, 'website', source)), `${source} must be deployed`)
  }
  assert.match(docs, /\.doc-shot \{[^}]*height: auto; object-fit: contain;/)
})

test('the public guide does not list hidden FX or canvas features', () => {
  assert.doesNotMatch(docs, /FX 特效库|plugins-creative|智能抠图|画布等可能调用/)
  assert.match(docs, /DaVinci Resolve 工作流/)
})
