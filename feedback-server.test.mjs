import assert from 'node:assert/strict'
import test from 'node:test'
import { sendFeedbackToFeishu } from './server.mjs'

const sampleInput = {
  feedbackId: 'FB-20260727-ABC12345',
  feedback: {
    category: 'feature',
    content: '希望增加批量操作。',
    contact: null,
    app: {
      version: '1.2.0',
      platform: 'darwin',
      arch: 'arm64',
      osRelease: '27.0.0',
      packaged: true,
      libraryOpen: true,
    },
    diagnostics: [],
  },
  attachmentUrls: [],
}

test('falls back to text when Feishu explicitly rejects the card', async () => {
  const previousFetch = globalThis.fetch
  const previousWebhook = process.env.ORCABOX_FEEDBACK_FEISHU_WEBHOOK
  const previousSecret = process.env.ORCABOX_FEEDBACK_FEISHU_SECRET
  const messages = []

  process.env.ORCABOX_FEEDBACK_FEISHU_WEBHOOK = 'https://example.test/hook'
  delete process.env.ORCABOX_FEEDBACK_FEISHU_SECRET
  globalThis.fetch = async (_url, options) => {
    messages.push(JSON.parse(options.body))
    if (messages.length === 1) {
      return new Response(JSON.stringify({ code: 19001, msg: 'card rejected' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }
    return new Response(JSON.stringify({ code: 0 }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    await sendFeedbackToFeishu(sampleInput)
    assert.deepEqual(messages.map((message) => message.msg_type), ['interactive', 'text'])
  } finally {
    globalThis.fetch = previousFetch
    restoreEnv('ORCABOX_FEEDBACK_FEISHU_WEBHOOK', previousWebhook)
    restoreEnv('ORCABOX_FEEDBACK_FEISHU_SECRET', previousSecret)
  }
})

test('does not duplicate notifications after an uncertain network failure', async () => {
  const previousFetch = globalThis.fetch
  const previousWebhook = process.env.ORCABOX_FEEDBACK_FEISHU_WEBHOOK
  let requestCount = 0

  process.env.ORCABOX_FEEDBACK_FEISHU_WEBHOOK = 'https://example.test/hook'
  globalThis.fetch = async () => {
    requestCount += 1
    throw new Error('connection reset')
  }

  try {
    await assert.rejects(() => sendFeedbackToFeishu(sampleInput), /connection reset/)
    assert.equal(requestCount, 1)
  } finally {
    globalThis.fetch = previousFetch
    restoreEnv('ORCABOX_FEEDBACK_FEISHU_WEBHOOK', previousWebhook)
  }
})

function restoreEnv(key, value) {
  if (value === undefined) {
    delete process.env[key]
  } else {
    process.env[key] = value
  }
}
