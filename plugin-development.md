# OrcaBox 插件开发指南

本文档是 OrcaBox 第三方插件 API v1 的开发契约。插件运行在 OrcaBox 渲染进程的隔离上下文中，通过 `PluginContext` 注册 UI，通过受权限控制的 `ctx.api` 访问素材与系统能力。

## 1. 当前支持范围

API v1 支持：

- 工具栏动作：`toolbar-action`
- 素材右键菜单：`context-menu`，目标只能是 `asset`
- Inspector 面板：`panel`，位置只能是 `inspector`
- 自定义格式缩略图：`format`，配合 `registerAssetFormat`
- 命令与快捷键：`registerCommand`
- 独立插件键值存储、日志和插件内事件
- 素材查询、素材元数据更新、缩略图/波形读取
- 文件选择、剪贴板、明确的本地文件/URL 导入
- 用户主动的视频导出、网络视频下载

以下能力目前不属于公开 API v1：`tool`、folder 右键菜单、sidebar/window/workspace 面板、插件自定义 preview surface、thumbnail generator、直接 Node/Electron API。

### 1.1 独立面板与宿主接入边界

当前公开 API v1 **不支持第三方插件创建或打开自己的独立窗口**。`panel` 的 `location: "window"` 即使能通过类型检查，也不代表 OrcaBox 已提供通用窗口宿主；`ctx.registerPanel()` 只注册渲染组件，不会创建 `BrowserWindow`。因此，第三方插件不能只靠 `plugin.json` 声明 window 面板就获得可用的独立面板。

现在开发有界面需求的外部插件，请使用本指南已公开的 Inspector 面板（`location: "inspector"`）。如果产品必须使用独立窗口，需要 OrcaBox 宿主先提供并发布稳定的通用面板窗口 API。宿主接入至少需要覆盖：

1. 在共享插件契约中定义窗口能力声明、面板 ID 和可选的初始数据。
2. 提供通用的打开/聚焦/关闭入口；入口必须确认插件已启用、面板已在 manifest 中声明。
3. 通过安全的插件加载路径渲染注册组件，并保持 `contextIsolation`、sandbox 和 Node 禁用状态。
4. 只向插件窗口暴露公开 API 白名单中的能力；权限校验和 IPC sender 校验必须在宿主侧生效。
5. 停用、卸载或重载插件时清理它创建的窗口，并覆盖多窗口、加载失败和跨平台生命周期测试。
6. 更新 API 参考、校验器、插件开发指南和可运行示例后，才把该能力标为可供第三方使用。

OrcaBox 可能为特定工具提供白名单中的专用窗口入口，但这些入口只打开对应工具自己的界面，不会加载调用方自行注册的面板，也不构成通用窗口 API。插件作者不要依赖宿主内部的 IPC、窗口路由或插件 ID 特例；独立插件项目无法自行补上主进程、preload 和窗口生命周期支持。

## 2. 插件目录

安装目录必须包含已经构建好的 JavaScript 入口：

```text
my-plugin/
├── plugin.json       # 必需
├── main.js           # 必需，ESM，构建产物
├── icon.svg          # 可选
└── README.md         # 可选
```

清单文件名是 `plugin.json`，不是 `manifest.json`。`main` 必须指向插件目录内的 `.js` 或 `.mjs` 文件，不能填写 `.ts`、`.tsx` 或目录外路径。

## 3. plugin.json

最小清单：

```json
{
  "apiVersion": 1,
  "id": "com.example.copy-name",
  "name": { "zh": "复制素材名", "en": "Copy Asset Name" },
  "version": "1.0.0",
  "description": { "zh": "复制选中素材名", "en": "Copy selected asset names" },
  "author": "Example",
  "icon": "icon.svg",
  "main": "main.js",
  "capabilities": [
    {
      "type": "context-menu",
      "itemId": "copy-name",
      "target": "asset",
      "label": { "zh": "复制素材名", "en": "Copy name" },
      "icon": "Copy",
      "order": 30
    }
  ],
  "permissions": ["clipboard"]
}
```

字段规则：

| 字段 | 规则 |
| --- | --- |
| `apiVersion` | 当前填写 `1`；省略时按 v1 处理。 |
| `id` | 1 至 128 个字符，只允许字母、数字、`.`、`_`、`-`，建议使用反向域名。 |
| `name` / `description` | 必须同时提供非空的 `zh` 和 `en`。 |
| `version` | Semver，例如 `1.0.0`。 |
| `main` | 插件目录内已经构建的 `.js`/`.mjs` ESM 入口。 |
| `icon` | Lucide 图标名，或插件目录内的 `.svg`/`.png`/`.jpg`/`.webp`。 |
| `capabilities` | 声明插件将注册的 UI 能力；同一插件内不能重复注册同类 ID。 |
| `permissions` | 只声明实际需要的权限，见第 8 节。 |
| `platforms` | 可选，值为 `darwin`、`win32`、`linux`；省略表示跨平台。 |
| `minAppVersion` | 可选，声明最低 OrcaBox 版本。 |

清单声明是注册许可的一部分。外部插件尝试注册未声明的 toolbar、context-menu、panel 或 format 时，该注册会被忽略。

## 4. 多语言

外置插件独立开发、构建和分发，不需要打包进 OrcaBox。插件可以通过公开的语言 API 读取当前界面语言，并在用户切换语言时实时更新；切换语言不需要重启 OrcaBox 或插件。

React 插件可以直接使用 `usePluginI18n`：

```tsx
import { usePluginI18n } from '@shared/plugins/public'

function Panel() {
  const { locale, t, formatNumber, formatDateTime } = usePluginI18n()

  return (
    <div>
      <h2>{t('插件面板', 'Plugin panel')}</h2>
      <span>{formatNumber(12345)}</span>
      <time>{formatDateTime(Date.now())}</time>
    </div>
  )
}
```

非 React 代码可以使用 `ctx.api.locale`：

```ts
const locale = await ctx.api.locale.get()
const unsubscribe = ctx.api.locale.onChanged((nextLocale) => {
  // 更新插件状态，并重新渲染用户可见文本
})

// 插件停用时取消订阅
unsubscribe()
```

所有用户可见文本都应提供中文和英文，包括 `plugin.json`、toolbar、context-menu、panel、command 的 `name`、`description` 和 `label`，以及空状态、确认框、文件选择器标题、通知和错误提示。日期和数字优先使用 `formatDateTime` 与 `formatNumber`，避免直接拼接固定语言格式。底层 API 返回的动态错误也必须经过本地化或英文兜底，不能在英文界面直接显示中文。

## 5. 能力声明与注册

### 5.1 工具栏动作

清单：

```json
{
  "type": "toolbar-action",
  "actionId": "open-tool",
  "label": { "zh": "打开工具", "en": "Open Tool" },
  "icon": "Wand2",
  "order": 100
}
```

代码：

```ts
ctx.registerToolbarAction({
  actionId: 'open-tool',
  label: { zh: '打开工具', en: 'Open Tool' },
  icon: 'Wand2',
  order: 100,
  handler: () => {
    ctx.logger.info('tool opened')
  },
})
```

`pluginId` 由 OrcaBox 运行时注入，第三方插件不需要填写。

### 5.2 素材右键菜单

```ts
ctx.registerContextMenuItem({
  itemId: 'copy-name',
  target: 'asset',
  label: { zh: '复制素材名', en: 'Copy name' },
  icon: 'Copy',
  handler: async ({ assetIds }) => {
    const names = await Promise.all((assetIds ?? []).map(async (id) => {
      const asset = await ctx.api.asset.getById(id)
      return asset?.name
    }))
    await ctx.api.system.copyText(names.filter(Boolean).join('\n'))
  },
})
```

handler 收到的是当前选择的 `assetIds`。没有选中素材时应直接返回。API v1 不支持 folder 目标。

### 5.3 Inspector 面板

清单：

```json
{
  "type": "panel",
  "panelId": "asset-info",
  "location": "inspector",
  "label": { "zh": "附加信息", "en": "Extra Info" },
  "icon": "Info"
}
```

代码：

```tsx
import type { FC } from 'react'
import type { PanelProps, ExternalPluginContext } from '@shared/plugins/public'

const Panel: FC<PanelProps> = ({ assets }) => (
  <div>{assets?.map((asset) => <div key={asset.id}>{asset.name}</div>)}</div>
)

export default function activate(ctx: ExternalPluginContext) {
  ctx.registerPanel('asset-info', Panel)
}
```

面板会收到 `assets`、`asset`、`onClose`、`onOpen`、`requestRefresh` 和 `inspector`。Inspector 面板随当前选择变化而重新渲染；插件不要保存已经失效的 Asset 对象作为唯一状态。

### 5.4 自定义格式缩略图

```json
{
  "type": "format",
  "kind": "my-format",
  "extensions": ["foo", ".bar"]
}
```

```tsx
ctx.registerAssetFormat({
  kind: 'my-format',
  extensions: ['foo', '.bar'],
  previewComponent: ({ asset }) => <div>{asset.name}</div>,
})
```

扩展名会自动去掉开头的 `.` 并按小写匹配。插件格式缩略图必须是轻量、可重复渲染的 React 组件。

### 5.5 命令与快捷键

```ts
ctx.registerCommand({
  commandId: 'run',
  label: { zh: '运行插件', en: 'Run Plugin' },
  description: { zh: '运行插件的主要操作', en: 'Run the main plugin action' },
  defaultKey: 'Cmd+Shift+R',
  handler: () => runPlugin(),
})
```

命令的实际 ID 是 `${pluginId}:${commandId}`。命令会出现在快捷键管理中；停用或重新加载插件时会自动移除。

## 6. 入口和生命周期

入口模块必须默认导出激活函数：

```ts
import type { ExternalPluginContext } from '@shared/plugins/public'

export default async function activate(ctx: ExternalPluginContext) {
  ctx.logger.info(`${ctx.pluginId} activated`, { apiVersion: ctx.apiVersion })
}

export async function deactivate(ctx: ExternalPluginContext) {
  ctx.logger.info(`${ctx.pluginId} deactivated`)
}
```

生命周期规则：

- 启用时调用默认导出函数一次。
- 停用、卸载、重新加载时调用 `deactivate`（如果存在）。
- 注册表、插件内事件和插件快捷键由 OrcaBox 自动清理。
- 插件自己的 timer、AbortController、第三方订阅和外部资源必须在 `deactivate` 中清理。
- 激活失败应抛出错误；插件会保持未激活状态，错误显示在插件管理器中。

## 7. PluginContext

```ts
interface ExternalPluginContext {
  pluginId: string
  manifest: PluginManifest
  readonly apiVersion: 1
  api: PluginApi
  logger: PluginLogger
  storage: PluginStorage
  registerPanel(id: string, component: FC<PanelProps>): void
  registerToolbarAction(action: PluginToolbarAction): void
  registerAssetFormat(format: PluginAssetFormat): void
  registerContextMenuItem(item: PluginContextMenuItem): void
  registerCommand(command: PluginCommand): void
  on(event: string, handler: (...args: unknown[]) => void): void
  off(event: string, handler: (...args: unknown[]) => void): void
  emit(event: string, ...args: unknown[]): void
}
```

事件总线是插件私有的。同一个插件可以用它在不同组件之间通信，不能用它监听 OrcaBox 内部事件。

### 存储

```ts
await ctx.storage.set('settings', { enabled: true })
const settings = await ctx.storage.get<{ enabled: boolean }>('settings')
await ctx.storage.delete('settings')
const keys = await ctx.storage.keys()
```

### 日志

```ts
ctx.logger.info('message', data)
ctx.logger.warn('recoverable problem')
ctx.logger.error('operation failed', error)
```

## 8. PluginApi 与权限

`ctx.api` 是 v1 的公开 API 白名单，不等于应用内部的完整 `OrcaBoxApi`。第三方代码不能访问 Node、Electron、IPC 或未列出的 namespace。

| 命名空间 | 代表接口 | 权限 |
| --- | --- | --- |
| `asset` | `list`、`getById`、`update`、`reveal`、`open`、复制/导出 | 读取类接口需要 `fs-read`；`update`、导出需要 `fs-write`；复制路径/文件还需要 `clipboard`。 |
| `preview` | Lottie、缩略图、图片/文档播放源、音频波形 | `fs-read`。 |
| `system` | 选择文件/目录、剪贴板、导入、网络视频、浏览器扩展状态 | 按方法需要 `fs-read`、`fs-write`、`clipboard` 或 `network`。 |
| `media` | `trimVideo`、取消和进度事件 | `fs-read` + `fs-write`。 |

常用权限：

- `fs-read`：通过 OrcaBox API 读取本地素材、预览或文件信息。
- `fs-write`：写入、导入或导出本地文件。
- `clipboard`：读写系统剪贴板。
- `network`：探测或下载网络资源。
- `ai`：仅用于 AI/本地模型 API；当前 v1 公共 `PluginApi` 不提供 AI namespace，第三方不应声明此权限来假定 AI 接口可用。

未声明权限的调用会抛出错误。权限不是对任意路径的 Node 文件系统授权，插件仍只能通过公开 API 操作。

### 网络视频下载

网络下载必须由用户明确发起：

```ts
const result = await ctx.api.system.downloadNetworkVideo({
  pluginId: ctx.pluginId,
  url,
  outputDirectory: null,
  mode: 'video',
  quality: 'best',
  executablePath: null,
  cookiesFromBrowser: 'none',
})
```

通过 `onNetworkVideoDownloadProgress` 订阅进度，通过 `cancelNetworkVideoDownload(jobId, ctx.pluginId)` 取消。下载器由插件或用户提供；OrcaBox 不会把 yt-dlp、ffmpeg 或其他下载运行时打进主应用。

视频预览禁止生成代理视频文件。下载结果是用户主动保存的媒体，不得作为后台预览代理使用。

## 9. 类型与构建

当前仓库提供稳定的类型入口：

```ts
import type {
  Asset,
  ExternalPluginContext,
  PanelProps,
  PluginApi,
  PluginManifest,
} from '@shared/plugins/public'
```

第三方项目可以将 OrcaBox 源码作为开发依赖并把 `@shared` 指向 `src`，或复制 `src/shared/plugins/public.ts` 及其依赖类型到自己的 SDK 包。生产产物必须是 ESM；推荐在插件 bundle 中内联 React 依赖。

Vite 最小配置：

```ts
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@shared': resolve(__dirname, '../orcabox/src/shared') } },
  build: {
    lib: { entry: 'src/main.tsx', formats: ['es'], fileName: () => 'main.js' },
    rollupOptions: { external: [] },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
```

构建后把 `plugin.json`、`main.js` 和图标复制到同一个 `dist` 目录，再安装这个目录。

## 10. 校验、打包和安装

校验一个已构建插件：

```bash
npm run validate:plugin -- --plugin=/absolute/path/to/plugin
```

校验器会检查清单字段、API v1 能力、权限、入口路径、入口文件存在性和图标路径。仓库内示例插件可以使用：

```bash
npm run package:plugin:network-video-downloader
```

产物位于 `output/plugin-packages/<plugin-id>/package` 和对应的 zip 文件。打包流程会自动运行同一个校验器。

在 OrcaBox 中安装：

1. 打开插件管理器。
2. 选择“从本地安装”。
3. 选择包含 `plugin.json` 和构建入口的目录。
4. 安装后在插件管理器中启用。

外部插件默认不会自动启用。修改代码后重新构建，再在插件管理器点击重新加载；当前不提供外部插件热模块替换。

## 11. AI 一键创建并接入

OrcaBox 支持在插件管理器中根据自然语言生成第三方插件草稿。该流程是“生成后审核，再安装启用”，AI 生成的代码不会绕过用户确认直接接入。

### 11.1 使用步骤

1. 打开插件管理器，点击“AI 创建”。
2. 用自然语言描述插件的入口、操作对象和期望结果，例如“在素材右键菜单中复制选中素材的文件名”。
3. 点击“生成草稿”。OrcaBox 使用已配置的本地模型或外接 AI 端点生成结构化插件文件。
4. 检查插件名称、ID、版本、能力、权限和文件列表。生成结果不通过校验时不能安装。
5. 确认权限和代码用途后点击“确认并接入”。插件会被安装到 OrcaBox 私有插件目录，并启用该插件。

AI 草稿暂存于应用私有目录的 `.ai-drafts` 下，生成阶段不会出现在正式插件列表中。安装接口只接受由本次生成流程创建的草稿路径，不能通过渲染进程传入任意本地目录。

### 11.2 AI 生成契约

生成器要求模型返回以下结构：

```json
{
  "manifest": {
    "apiVersion": 1,
    "id": "com.example.copy-name",
    "name": { "zh": "复制素材名", "en": "Copy Asset Name" },
    "version": "1.0.0",
    "description": { "zh": "复制素材名", "en": "Copy selected asset names" },
    "main": "main.js",
    "capabilities": [],
    "permissions": []
  },
  "files": [
    { "path": "main.js", "content": "export default function activate(ctx) {}" },
    { "path": "README.md", "content": "..." }
  ]
}
```

当前生成文件白名单为 `main.js`、`README.md` 和 `icon.svg`。`plugin.json` 始终由 OrcaBox 根据模型返回并通过校验的 manifest 生成，AI 不得覆盖它。入口必须是 `main.js`，代码必须是 ESM 并默认导出 `activate(ctx)`。生成器会拒绝无效 manifest、缺少入口、超大文件以及包含 `require`、`eval`、`Function`、Node/Electron 模块或动态 import 的入口代码。

### 11.3 适合 AI 生成的插件

第一版最适合以下无外部依赖插件：

- 素材工具栏动作
- 素材右键菜单动作
- 使用 `ctx.api` 读取素材、复制文本、更新元数据或发起用户主动导入
- 简单的 Inspector 面板

AI 不应被要求生成未公开的内部接口、直接访问 Node/Electron、后台生成视频代理、绕过权限读取任意文件，或依赖未打包进插件的第三方运行时。复杂 React 面板、自定义预览渲染器、原生扩展和需要服务端的功能仍应由开发者手动实现并按普通插件流程构建。

### 11.4 接入前检查清单

- 能力声明与 `ctx.register*` 注册 ID 一致。
- 权限只包含实际调用所需的权限。
- 没有把用户输入直接拼接为文件路径、命令或 HTML。
- 所有 timer、订阅、事件监听和下载任务都能在 `deactivate` 中清理。
- 使用 `npm run validate:plugin -- --plugin=/absolute/path/to/plugin` 做最终校验。
- macOS 和 Windows 都执行一次核心工作流检查；涉及路径、原生播放器或下载器时分别验证平台行为。

## 12. 调试与兼容性

- 使用 OrcaBox 开发者工具查看渲染进程 Console。
- 先运行 `npm run validate:plugin`，再检查插件管理器中的错误字段。
- 不要直接操作 OrcaBox 主界面 DOM；升级后 DOM 结构不属于兼容契约。
- 不要依赖 `src/shared/contracts.ts` 中未通过 `PluginApi` 暴露的方法。
- `ctx.apiVersion` 用于运行时能力判断；v1 插件应只依赖 `apiVersion === 1` 的接口。
- `PluginManifest.platforms` 要与实际使用的原生能力一致，并同时检查 macOS 与 Windows 行为。

## 13. 完整最小示例

`main.ts`：

```ts
import type { ExternalPluginContext } from '@shared/plugins/public'

export default function activate(ctx: ExternalPluginContext) {
  ctx.registerContextMenuItem({
    itemId: 'copy-name',
    target: 'asset',
    label: { zh: '复制素材名', en: 'Copy name' },
    icon: 'Copy',
    handler: async ({ assetIds }) => {
      const names = []
      for (const id of assetIds ?? []) {
        const asset = await ctx.api.asset.getById(id)
        if (asset) names.push(asset.name)
      }
      if (names.length) await ctx.api.system.copyText(names.join('\n'))
    },
  })
}

export function deactivate(ctx: ExternalPluginContext) {
  ctx.logger.info('deactivated')
}
```

对应 `plugin.json`：

```json
{
  "apiVersion": 1,
  "id": "com.example.copy-name",
  "name": { "zh": "复制素材名", "en": "Copy Asset Name" },
  "version": "1.0.0",
  "description": { "zh": "复制选中素材名", "en": "Copy selected asset names" },
  "main": "main.js",
  "capabilities": [
    {
      "type": "context-menu",
      "itemId": "copy-name",
      "target": "asset",
      "label": { "zh": "复制素材名", "en": "Copy name" },
      "icon": "Copy"
    }
  ],
  "permissions": ["fs-read", "clipboard"]
}
```

## 14. 源码参考

- 公开类型入口：`src/shared/plugins/public.ts`
- 插件类型实现：`src/shared/plugins/types.ts`
- 清单校验：`src/shared/plugins/manifest-validation.ts`
- 运行时权限与 API 白名单：`src/renderer/plugins/plugin-runtime.ts`、`src/renderer/plugins/plugin-permissions.ts`
- UI 注册表：`src/renderer/plugins/registries.ts`
- 外部插件示例：`plugins-dev/`
