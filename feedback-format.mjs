const CATEGORY_PRESENTATION = {
  bug: {
    label: '问题反馈',
    headerTemplate: 'red',
  },
  feature: {
    label: '功能建议',
    headerTemplate: 'blue',
  },
  experience: {
    label: '体验问题',
    headerTemplate: 'turquoise',
  },
  other: {
    label: '其他反馈',
    headerTemplate: 'grey',
  },
}

export function buildFeishuFeedbackCard({
  feedbackId,
  feedback,
  attachmentUrls,
  receivedAt = new Date().toISOString(),
}) {
  const category = CATEGORY_PRESENTATION[feedback.category] ?? CATEGORY_PRESENTATION.other
  const app = feedback.app ?? {}
  const diagnostics = Array.isArray(feedback.diagnostics) ? feedback.diagnostics : []
  const urls = Array.isArray(attachmentUrls) ? attachmentUrls.filter(Boolean) : []
  const elements = [
    {
      tag: 'div',
      fields: [
        buildShortField('反馈编号', feedbackId),
        buildShortField('反馈类型', category.label),
        buildShortField('OrcaBox 版本', app.version || 'unknown'),
        buildShortField('系统环境', formatSystemLabel(app)),
      ],
    },
    { tag: 'hr' },
    {
      tag: 'div',
      text: {
        tag: 'lark_md',
        content: `**反馈内容**\n${escapeLarkMarkdown(feedback.content || '未填写')}`,
      },
    },
  ]

  if (feedback.contact) {
    elements.push({
      tag: 'div',
      text: {
        tag: 'lark_md',
        content: `**联系方式**\n${escapeLarkMarkdown(feedback.contact)}`,
      },
    })
  }

  if (urls.length > 0) {
    elements.push(
      { tag: 'hr' },
      {
        tag: 'div',
        text: {
          tag: 'lark_md',
          content: `**图片附件 · ${urls.length} 张**\n点击下方按钮查看用户上传的截图。`,
        },
      },
      ...buildAttachmentActionRows(urls),
    )
  }

  if (diagnostics.length > 0) {
    elements.push(
      { tag: 'hr' },
      {
        tag: 'div',
        text: {
          tag: 'lark_md',
          content: `**诊断摘要 · ${diagnostics.length} 条**\n${formatDiagnosticSummary(diagnostics)}`,
        },
      },
    )
  }

  elements.push({
    tag: 'note',
    elements: [
      {
        tag: 'plain_text',
        content: `接收时间 ${formatReceivedAt(receivedAt)} · ${app.packaged ? '公开版本' : '开发版本'} · ${app.libraryOpen ? '资料库已打开' : '未打开资料库'}`,
      },
    ],
  })

  return {
    msg_type: 'interactive',
    card: {
      config: {
        wide_screen_mode: true,
        enable_forward: true,
      },
      header: {
        template: category.headerTemplate,
        title: {
          tag: 'plain_text',
          content: `OrcaBox ${category.label}`,
        },
      },
      elements,
    },
  }
}

export function buildFeishuFeedbackText({
  feedbackId,
  feedback,
  attachmentUrls,
}) {
  const category = CATEGORY_PRESENTATION[feedback.category] ?? CATEGORY_PRESENTATION.other
  const app = feedback.app ?? {}
  const diagnostics = Array.isArray(feedback.diagnostics) ? feedback.diagnostics : []
  const urls = Array.isArray(attachmentUrls) ? attachmentUrls.filter(Boolean) : []
  const lines = [
    `【OrcaBox ${category.label}】`,
    `编号：${feedbackId}`,
    `版本：${app.version ?? 'unknown'}`,
    `系统：${formatSystemLabel(app)}`,
    `来源：${app.packaged ? '公开版本' : '开发版本'}`,
    `联系方式：${feedback.contact || '未填写'}`,
    '',
    '反馈内容：',
    String(feedback.content || '未填写'),
  ]

  if (urls.length > 0) {
    lines.push('', `图片附件（${urls.length} 张）：`)
    urls.forEach((url, index) => {
      lines.push(`${index + 1}. ${url}`)
    })
  }

  if (diagnostics.length > 0) {
    lines.push('', `诊断摘要（${diagnostics.length} 条）：`)
    diagnostics.slice(-6).forEach((entry) => {
      lines.push(`- ${entry.level || 'info'}/${entry.action || 'unknown'}${entry.message ? `：${entry.message}` : ''}`)
    })
  }

  return {
    msg_type: 'text',
    content: {
      text: lines.join('\n').slice(0, 18_000),
    },
  }
}

function buildShortField(label, value) {
  return {
    is_short: true,
    text: {
      tag: 'lark_md',
      content: `**${label}**\n${escapeLarkMarkdown(value || '—')}`,
    },
  }
}

function buildAttachmentActionRows(urls) {
  const rows = []
  for (let index = 0; index < urls.length; index += 2) {
    rows.push({
      tag: 'action',
      actions: urls.slice(index, index + 2).map((url, rowIndex) => ({
        tag: 'button',
        type: rowIndex === 0 && index === 0 ? 'primary' : 'default',
        text: {
          tag: 'plain_text',
          content: `查看图片 ${index + rowIndex + 1}`,
        },
        url,
      })),
    })
  }
  return rows
}

function formatSystemLabel(app) {
  const parts = [
    app.platform || 'unknown',
    app.arch || 'unknown',
    app.osRelease || 'unknown',
  ]
  return parts.join(' · ')
}

function formatDiagnosticSummary(diagnostics) {
  return diagnostics
    .slice(-6)
    .map((entry) => {
      const level = escapeLarkMarkdown(entry.level || 'info')
      const action = escapeLarkMarkdown(entry.action || 'unknown')
      const message = entry.message ? ` · ${escapeLarkMarkdown(entry.message)}` : ''
      return `- \`${level}\` ${action}${message}`
    })
    .join('\n')
}

function formatReceivedAt(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return String(value || 'unknown')
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)
}

function escapeLarkMarkdown(value) {
  return String(value ?? '')
    .replaceAll('\\', '\\\\')
    .replace(/([*_`~[\]])/g, '\\$1')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}
