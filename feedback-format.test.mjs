import assert from 'node:assert/strict'
import test from 'node:test'
import {
  buildFeishuFeedbackCard,
  buildFeishuFeedbackText,
} from './feedback-format.mjs'

const sampleFeedback = {
  category: 'bug',
  content: '点击预览后出现 <at user_id="all">异常</at>。',
  contact: 'user@example.com',
  app: {
    version: '1.2.0',
    platform: 'darwin',
    arch: 'arm64',
    osRelease: '27.0.0',
    packaged: true,
    libraryOpen: true,
  },
  diagnostics: [
    {
      level: 'warn',
      action: 'preview.open',
      message: 'Preview failed',
    },
  ],
}

test('builds a structured Feishu feedback card', () => {
  const payload = buildFeishuFeedbackCard({
    feedbackId: 'FB-20260727-ABC12345',
    feedback: sampleFeedback,
    attachmentUrls: [
      'https://orcabox.app/feedback-assets/a.png',
      'https://orcabox.app/feedback-assets/b.png',
      'https://orcabox.app/feedback-assets/c.png',
    ],
    receivedAt: '2026-07-27T04:00:00.000Z',
  })

  assert.equal(payload.msg_type, 'interactive')
  assert.equal(payload.card.header.template, 'red')
  assert.match(payload.card.header.title.content, /问题反馈/)

  const serialized = JSON.stringify(payload)
  assert.match(serialized, /FB-20260727-ABC12345/)
  assert.match(serialized, /OrcaBox 版本/)
  assert.match(serialized, /查看图片 3/)
  assert.doesNotMatch(serialized, /<at user_id=/)
})

test('builds a text fallback with attachment links', () => {
  const payload = buildFeishuFeedbackText({
    feedbackId: 'FB-20260727-ABC12345',
    feedback: sampleFeedback,
    attachmentUrls: ['https://orcabox.app/feedback-assets/a.png'],
  })

  assert.equal(payload.msg_type, 'text')
  assert.match(payload.content.text, /问题反馈/)
  assert.match(payload.content.text, /图片附件（1 张）/)
  assert.match(payload.content.text, /公开版本/)
})
