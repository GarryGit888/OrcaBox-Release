# Release Notes

## 1.4.0 - 2026-10-31

- HEIC AI 擦除：iPhone/相机直出的 HEIC/HEIF 照片可直接涂抹擦除。
- 透明通道保留：AI 擦除结果始终带着原始 alpha 通道写回，覆盖保存 PNG/WebP 不会再把透明区域变成实底。
- SonicLab 音频标签：带 SONICLAB 元数据的音频素材（流派/BPM/调性）自动映射进标签面板的受控词表，空标签素材扫描或导入后自动落标，详情栏「AI 识别（外部）」卡片同步呈现。
- 网格 LUT 缩略图：视频卡片缩略图直接呈现当前 LUT 调色效果，悬停胶片条与内联悬停视频逐帧同步上色（WebGL）；LUT 色彩配置轻量加载，逐像素采样移入 worker 线程，滚动大批 LUT 视频不再阻塞界面；解析缓存带内容指纹并扩容，同名替换的 LUT 不再串色。
- 音频波形与队列：波形位图加载与缓存链路提速，队列切换不重复生成已缓存波形；悬停指示线、时间提示与拖动试听改为按帧合并更新，指针移动不再触发整卡重绘。
- 插件失败可见化：插件激活失败在插件中心显示错误原因与「重新加载」入口，列表加载失败提供可重试错误态；停用或卸载插件时自动关闭其独立窗口；插件窗口打开入口校验启用状态；快捷键触发插件命令失败给出 toast 提示。
- AI 擦除覆盖保存丢透明通道：解码与写回管线保留原始 alpha 通道，带透明 PNG/WebP 覆盖保存不再造成不可逆的数据丢失；HEIC 素材继续强制另存 JPG 副本。
- AI 擦除临时文件入库：覆盖保存的临时文件不再被文件监视器索引成垃圾资产（写入前抑制、失败后清理半成品）。
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

## 1.3.9 - 2026-10-30

- 视频 LUT 调色：视频预览顶部工具栏新增 LUT 弹层，直接加载 .cube 文件实时套色，附强度滑条、批量套用与达芬奇式缩略图面板。
- 照片 AI 语义蒙版：一键识别画面主体生成选区，新增颜色范围与明度范围蒙版按取样自动扩展；蒙版编辑升级为三层渲染管线，拖参数实时刷新。
- AI 打标签批量化：详情栏点击即可打标，多选批量识别在后台运行、切换选中不中断，网格卡片显示进度徽标；设置中可调置信度阈值（默认 95%），低于阈值的候选标签不自动写入。
- Pinterest 区域框选识图：大图查看器拖出矩形选区即可只搜局部相似；瀑布流显示「已采集」去重角标，采集自动回链来源并按看板分类，右栏支持滚动无限加载与色系筛选。
- 照片调色插件批次：磨皮等人像精修能力上线，插件中心支持远程安装，台词工作台提供独立窗口。
- 图像对比工具：插件中心新增并排/滑动对比两种查看方式。
- 调色引擎 GPU 加速：显影预览接入 WebGL2，滑杆拖拽即时出图，大图也能实时刷新；调色面板重构为 Camera Raw 式右侧竖栏（调整/预设/蒙版/人像/裁剪/修复/液化）。
- 预设体系：预设分组「热门 / 我的」，我的预设本地保存并带参数缩略图；按 C 直接进入图片裁剪工具。
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

## 1.3.8 - 2026-10-23

- 英文字幕按单词数断行：台词工作台的行宽预算按字幕实际使用的文字切换。
- 拆分提示词升级到 v4：新默认提示词按拉丁文字规则重写（每行单词/字符上限、不得以冠词/介词/连词/助动词结尾、不留单词尾巴、不改写原文），并迁移到独立存储键。
- HTML 预览复制排版（含图片）：HTML 预览工具栏新增「复制排版」按钮，按当前显示效果把整篇文章复制为富文本，可直接粘贴到公众号、知乎、Notion 等编辑器的正文中。
- Pinterest 以图搜图（内置插件）：在资料库选中一张图片，点工具栏「Pinterest 识图」或资产右键菜单，独立面板会用这张图自动发起 Pinterest Lens 识图，结果以瀑布流展示，滚动自动加载更多相似图。
- Pinterest 看板浏览与关键词搜索：面板标题栏可切换「识图 / 看板 / 搜索」三个数据源。
- 大图缩放与相似推荐：点开任意一张图，左侧为大图、右侧为「更多像这样的」相似图瀑布流，点击右栏图片直接切换查看。
- 应用级账号登录（小红书 / 抖音）：设置 → 网络新增「账号登录」分区。
- 字幕碎片合并：窗口化语音识别按发声段切窗，连续英文常被切出「This is Oppo's」「brand new Find X」这类 2–3 词碎片，每条停留不到一秒。
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

## 1.3.7 - 2026-10-19

- Lightroom and Bridge rating sync: OrcaBox keeps ratings aligned with both creative tools through XMP metadata.
- Reverse image prompts: generate Chinese, English, negative-prompt, and JSON views with quality hints, editable saving, and privacy guidance.
- The browser extension can use the current browser session only after the user selects materials, with host-permission, size, and verification-page limits; HTML pages are never saved as assets.
- Batch rename now uses draggable custom labels, with stronger HTML preview isolation, AI request handling, and large-library processing.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

## 1.3.6 - 2026-10-18

- Lightroom and Bridge rating sync: OrcaBox keeps ratings aligned with both creative tools through XMP metadata.
- Reverse image prompts: generate Chinese, English, negative-prompt, and JSON views with quality hints, editable saving, and privacy guidance.
- The browser extension can use the current browser session only after the user selects materials, with host-permission, size, and verification-page limits; HTML pages are never saved as assets.
- Batch rename now uses draggable custom labels, with stronger HTML preview isolation, AI request handling, and large-library processing.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

## 1.3.5 - 2026-10-15

- Lightroom and Bridge rating sync: OrcaBox keeps ratings aligned with both creative tools through XMP metadata.
- Reverse image prompts: generate Chinese, English, negative-prompt, and JSON views with quality hints, editable saving, and privacy guidance.
- The browser extension can use the current browser session only after the user selects materials, with host-permission, size, and verification-page limits; HTML pages are never saved as assets.
- Batch rename now uses draggable custom labels, with stronger HTML preview isolation, AI request handling, and large-library processing.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

## 1.3.4 - 2026-10-12

- Move panel scrolling stability: move progress now lives in a dedicated store with the progress bar subscribing locally, so scrolling the Move Assets / Move Folder panels on large libraries no longer flickers the whole window.
- Middle-button scrolling no longer zooms the asset grid (MX thumb-wheel zoom is unchanged).
- Intel Mac auto-update fix: when the bundle swap is blocked, the updater no longer silently falls back to the system updater, which can never validate an unsigned build — it keeps the verified payload and states the concrete reason with DMG guidance.
- DaVinci import diagnostics: when reverse-DNS lookups hang, the plugin shows the cause and fix instead of a misleading "Resolve is not running"; the What's-new version dropdown can select older releases again.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

## 1.3.3 - 2026-10-10

- Move target breadcrumb bar: the Move Assets / Move Folder dialogs show the full destination trail — click any parent segment to jump there and clear search; long trails auto-scroll.
- Windows fixes: videos missing thumbnails (bundled FFmpeg lacked a filter argument) and the embedded AI engine exiting at startup (missing llama.dll/ggml.dll/mtmd.dll) are resolved; Windows builds 1.2.9–1.3.2 were affected.
- Windows native playback stalls (audio with a frozen picture) now fall back to the built-in player automatically; large-library scroll freezes fixed; WeChat drag-in imports and DaVinci Resolve diagnostics improved.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

## 1.3.2 - 2026-10-04

- macOS in-app update fix: the final swap no longer depends on the system updater signature gate — the app re-verifies the update hash and swaps itself with rollback protection.
- In-app "What's new" guide: after an update, the help button shows a bubble and badge, with paged feature cards describing each release.
- Inspector card visibility settings, the in-app what's-new guide, linear grid wheel scrolling, native playback self-healing, and model download fixes all ship in this version.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

## 1.3.1 - 2026-10-04

- Inspector card visibility settings: hide or restore the single-selection info card block with one switch; multi-selection batch cards can each be toggled separately (Settings > Browse > Inspector panel cards).
- In-app "What's new" guide: after an update, the help button shows a bubble and badge, with paged feature cards describing each release.
- The asset grid now scrolls linearly with the mouse wheel for precise fast scrolling; trackpad and keyboard navigation are unchanged.
- Native playback self-healing: stalled loading falls back to the browser engine automatically and can switch back once recovered; Windows mpv black-surface routing is fixed.
- Model downloads: aggregated multi-file progress that no longer resets when switching mirrors; manually placed models are detected correctly.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

## 1.3.0 - 2026-10-01

- Video review workflow: frame-by-frame timeline, point/box/brush/arrow/text markers, multi-version feedback with DaVinci Resolve sync.
- Reworked Windows auxiliary panel window buttons: settings keeps only Close, other panels get Close + Minimize, maximize is gone everywhere.
- MKV/Matroska and similar formats now play embedded in-app on Windows instead of opening a separate player window.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

## 1.2.9 - 2026-09-30

- Full in-app auto-update on macOS: once a new version is detected it downloads and installs in-app with differential downloads and architecture-matched ZIP payloads — no more manual DMG downloads.
- Fixed the Windows settings window caption Close button not responding to clicks.
- Extension status changes now push instantly to Settings; the update feed gains dual-architecture merge and pre-publish validation tooling.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

ZIP payloads — no more manual DMG downloads.
- Fixed the Windows settings window caption Close button not responding to clicks.
- Extension status changes now push instantly to Settings; the update feed gains dual-architecture merge and pre-publish validation tooling.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

## 1.2.8 - 2026-09-26

- Improves generation checks for library background work. Refresh, analyze, and scan requests made while long audio is decoding or loading can no longer replace the active folder with stale root-state results.
- Improves media preview and playback routing while retaining original-file playback. Video preview never creates proxy video files.
- Improves reliability across local speech recognition, subtitle editing, AI tag review, and creator workflows.
- macOS ships separate Apple Silicon and Intel DMGs. macOS ZIP files are no longer published. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

ZIP files are no longer published. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

## Earlier releases

See the CNB release history for earlier versions.

