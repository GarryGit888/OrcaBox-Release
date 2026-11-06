# OrcaBox 1.3.6 发行说明

发布日期：2026-10-18

> 本版本聚焦 网络视频下载插件全面重做、媒体管线可靠性修复，并持续完善来源目录与资产整理体验。

## 新增功能

- 「网络视频下载」升级为独立面板窗口：磨砂玻璃质感、拖拽移动、边缘缩放、最小化与关闭，支持批量粘贴队列与两路并发下载（`224c043a`、`9073e92a`）。
- 下载引擎自动供给：首次使用自动下载官方 yt-dlp 并校验安装，无需手动准备二进制（`eea0b491`）。
- yt-dlp 不支持的平台（抖音等）自动回退 OrcaBox 自带解析器下载，抖音无水印直链恢复可用。
- 下载位置三选一：系统下载目录 / 自定义文件夹 / 来源目录；来源目录提供树形选择器，逐层展开选定，文件落位后自动进入资料库（`9df45daa`、`9dacfe60`）。
- 锁定文件夹支持解锁浏览后右键「立即锁定」重新受口令保护（`9095c627`）。
- 扩展口语化查询变体（如"女孩子"自动匹配"女孩、女生"等）并将音频纳入 AI 批量分析（`ca441514`）。

## 优化改进

- 语义索引覆盖率查询增加 TTL 缓存并放宽空闲轮询，降低大库下的主进程占用（`e92501bc`）。
- Instagram VP9/AV1/VP8 编码 MP4 直读浏览器播放，下载优先 H.264（`a0d0309f`、`addc6ea3`）。
- 源码风格统一回仓库单引号规范并锁定 Prettier 配置，登记 blame 豁免清单（`76768597`）。

## 问题修复

- 修复模型下载断点续传失效：连接超时不再误杀超过 2 分钟的正常传输；同一模型在不同镜像地址间切换不再丢弃已下载部分；下载中断后点「续传」从原进度继续而不是重头下载。模型下载的中断与恢复过程写入诊断日志（`bed6ab8c`）。
- 修复小红书 SSR 解析断链导致粘贴导入失败的问题，并补齐 Instagram 粘贴导入（`eca02c67`）。
- libVLC 预热移出渲染主线程并加超时生命周期锁，修复点开下载视频时全应用冻结（`05da26c9`）。
- 媒体进程改用非登录 shell，规避损坏的用户 profile 拖垮视频帧缩略图管线、导致 Live 图卡静帧的问题（`ee2d2797`）。
- 修复 AI 标签分析阻塞并提升长图缩略图清晰度（`dee6a56b`）。

## 变更范围

- `src/`：70+ 个文件（含新增独立面板窗口、来源目录树选择器与解析器回退链路）
- `plugins-dev/`：网络视频下载插件 0.3.0
- `scripts/`、`docs/`、`website/`：配套更新

## 获取更新

- [CNB 安装包发行页](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.6)
- [GitHub 备用发行页](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.6)
- [OrcaBox Chrome 浏览器插件](https://github.com/GarryGit888/OrcaBox-Release/releases/download/v1.3.6/OrcaBox-Chrome-Extension-1.3.6.zip)

| 平台 | 安装包 |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.6/OrcaBox-1.3.6-arm64.dmg) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.6/OrcaBox-1.3.6-x64.dmg) |
| Windows x64 | [安装器](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.6/OrcaBox-1.3.6-win-x64-Setup.exe) / [免安装版](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.6/OrcaBox-1.3.6-win-x64-Portable.exe) |

## 平台与自动更新说明

- macOS 的 DMG 用于人工安装；架构匹配的 Apple Silicon / Intel ZIP 是应用内自动更新载荷，不是普通安装包。
- Windows 自动更新使用 NSIS Setup 安装器与 blockmap；Portable 仅用于手动运行。
- 保留差量下载与 CNB 单范围请求配置；下载需要用户确认，不在应用退出时自动安装。
- 网络视频下载插件（0.3.0）随本版发布，需 OrcaBox 1.3.6+；首次下载会自动获取 yt-dlp 引擎。
- 本批打包和原生升级验收的完成情况单独记录于发布审查，不以静态测试或交叉打包代替真实升级验证。
