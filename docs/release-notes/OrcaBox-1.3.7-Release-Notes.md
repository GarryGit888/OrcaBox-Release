# OrcaBox 1.3.7 发行说明

发布日期：2026-10-19

> 本版本聚焦 扫描队列冻结的根治、媒体索引链路的韧性加固，以及资料库刷新的性能优化；不改变既有功能与交互方式。

## 问题修复

- **修复重新扫描长时间无响应（重要）**：开启「Adobe 评分同步」后，打包版本内置的图片元数据工具（exiftool）未能正确解包，读取星级时会永久等待，导致扫描协程挂死。由于扫描全局同时只允许一个任务，一个挂死任务会把之后所有来源目录的扫描堵在队列里，进度长期停在「等待扫描队列 4%」。本版修复打包配置，并为外部工具调用增加 8 秒超时与会话级熔断：超时后本次会话的星级同步自动停用，索引照常继续（`82c7c502`）。
- 扫描连续 10 分钟没有任何进度时会自动停止并释放队列，后续扫描立即接上；取消扫描后若协程未在 5 秒内退出，同样强制释放队列，避免任何组件挂死拖垮全局扫描（`82c7c502`）。
- 修复 XMP 旁车（`.xmp`）星级同步在外部工具不可用时会误将资产评分清零的问题：读不到星级不再等于「0 星」，而是跳过本次同步（`82c7c502`）。
- 文件监听触发的增量索引增加 120 秒硬超时：索引偶发卡住时增量管线不再永久停摆，超时批次自动重新排队重试（索引按指纹幂等）（`913788f4`）。
- 修复索引任务在应用退出（数据库已关闭）时可能产生未处理异常的问题（`82c7c502`、`913788f4`）。
- 已排队状态下再次点击重新扫描时，提示文案由误导性的「扫描已在进行」改为「等待扫描队列」（`82c7c502`）。

## 优化改进

- **扫描目录快照持续上报进度**：扫描首尾的目录树遍历在慢速外置盘或网络盘上可能耗时数分钟，这段过程现在持续刷新进度心跳，不会被看门狗误判为卡死（`913788f4`）。
- **资料库上下文按类别分层缓存**：标签、合集、筛选器各自独立快照并独立失效，任务列表改为实时读取。缓存命中时上下文刷新由数百毫秒降至约 1 毫秒，过期续期约 20-25 毫秒（`a56e15d7`、`fabfc4db`）。
- 修复 light 来源目录快照的缓存顺序问题：原实现先执行一次按根全表聚合（大库实测约 500 毫秒）再比对签名，导致缓存实际失效；改为先计算廉价签名，命中即完全跳过聚合（`a56e15d7`）。
- 资料库上下文、活动与健康汇总等重聚合 IPC 在计算前让出一次事件循环，已排队的界面请求可先得到响应（`e2ab0022`）。
- 实测效果（11.4 万资产库，连续滚动测试）：滚动保持 60fps 满帧（p50 16.7ms、零丢帧），滚动期长任务由 4 次/最重 167ms 降至 2 次/最重 159ms；主进程事件循环最大延迟 6.1ms（`a56e15d7`）。

## 新增功能

- **文档卡片背景色**：Markdown、TXT 等文字素材的预览卡片新增六档配色（跟随主题、卡其纸、米杏、亚麻灰、石墨、纯黑），网格卡片与详情卡片同步应用，正文/链接/引用/代码底纹/文件名渐隐整套联动，立即生效并自动保存（`20730d89`）。入口：设置 → 界面外观 → 卡片背景色。
- **详情面板折叠记忆**：标签、合集、属性、位置、文件五个区块的折叠状态会被记住，重启后保持；区块内的「+」按钮仅在本次交互中展开，不覆盖已记住的偏好（`20730d89`）。
- **随安装包分发的网络视频下载插件（0.3.0）**：首次启动自动准备好该插件，与自行安装的插件完全一致——可停用、可卸载、可替换为自己更新的版本；应用不会把它当作内置插件，也不会覆盖你已安装的版本（`stage-bundled-plugins`）。

## 变更范围

- `src/main/services/index-service.ts`、`watch-service.ts`、`xmp-rating-service.ts`、`library-service.ts`、`src/main/ipc-handlers.ts`
- `electron-builder.yml`、`electron-builder.mac-x64.yml`（exiftool 解包规则）
- 新增测试：扫描看门狗、exiftool 超时熔断、增量索引硬超时、上下文缓存失效

## 获取更新

- [CNB 安装包发行页](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.7)
- [GitHub 备用发行页](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.7)
- [OrcaBox Chrome 浏览器插件](https://github.com/GarryGit888/OrcaBox-Release/releases/download/v1.3.7/OrcaBox-Chrome-Extension-1.3.7.zip)

| 平台 | 安装包 |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.7/OrcaBox-1.3.7-arm64.dmg) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.7/OrcaBox-1.3.7-x64.dmg) |
| Windows x64 | [安装器](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.7/OrcaBox-1.3.7-win-x64-Setup.exe) / [免安装版](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.7/OrcaBox-1.3.7-win-x64-Portable.exe) |

## 平台与自动更新说明

- macOS 的 DMG 用于人工安装；架构匹配的 Apple Silicon / Intel ZIP 是应用内自动更新载荷，不是普通安装包。
- Windows 自动更新使用 NSIS Setup 安装器与 blockmap；Portable 仅用于手动运行。
- 保留差量下载与 CNB 单范围请求配置；下载需要用户确认，不在应用退出时自动安装。
- 本批打包和原生升级验收的完成情况单独记录于发布审查，不以静态测试或交叉打包代替真实升级验证。
