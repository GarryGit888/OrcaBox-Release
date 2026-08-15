# OrcaBox 1.2.4 发行说明

发布日期：2026-08-15

> 本版本聚焦素材浏览与预览性能、原始媒体播放稳定性，以及 macOS 双架构分发。

## 发布内容

- 发布 macOS Apple Silicon（arm64）与 Intel（x64）DMG / ZIP 内测包。
- Chrome 浏览器扩展同步至 1.2.4。

## 优化改进

- 优化素材网格浏览、缩略图加载与预览调度，降低大量素材场景下的等待与视觉跳动。（`f8e33ce`）
- 持续使用原始媒体文件、缩略图与胶片帧进行视频预览，不生成视频代理文件。（`425150a`）
- 改进选中音频播放在素材卡片、详情面板和预览工作区之间的位置与状态同步。（`9f14903`）
- Lottie / JSON 动效在可见网格项中保持连续实时预览。（`425150a`）

## 问题修复

- 修复锁定文件夹状态文字在侧栏内可能换行的问题，保持文件夹名称和限制状态单行显示。（`38481a5`）
- 提升原生视频播放与跨平台媒体处理的稳定性。（`6dcd300`）

## 工程与文档

- 官网下载页、发行记录和浏览器扩展版本号同步至 1.2.4。
- 本次 macOS 包未完成 Developer ID 签名与公证；首次打开时可能需要在系统设置中手动允许。

## 变更范围

- `src/`：112 个文件
- `resources/`：9 个文件
- `doc/`：6 个文件
- `extensions/`：6 个文件
- `plugins-dev/`：4 个文件
- `scripts/`：4 个文件
- `docs/`：3 个文件
- `website/`：3 个文件
- `native/`：2 个文件
- `.codex-tmp/`：1 个文件
- `.gitignore/`：1 个文件
- `electron.vite.config.ts/`：1 个文件

## macOS 安装包

- Apple Silicon DMG：[OrcaBox-1.2.4-arm64.dmg](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.4/OrcaBox-1.2.4-arm64.dmg)
- Apple Silicon ZIP：[OrcaBox-1.2.4-arm64-mac.zip](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.4/OrcaBox-1.2.4-arm64-mac.zip)
- Intel DMG：[OrcaBox-1.2.4.dmg](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.4/OrcaBox-1.2.4.dmg)
- Intel ZIP：[OrcaBox-1.2.4-mac.zip](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.4/OrcaBox-1.2.4-mac.zip)

SHA-256：

- `OrcaBox-1.2.4-arm64.dmg`：`b2a7d236870a1425810233c12dcbc759035518dfe6f48ec4fb4d3a5916c249cc`
- `OrcaBox-1.2.4-arm64-mac.zip`：`d63678d6dc31e5430ceb07d65874380a2bf9a3fa2777c7e6dad5931eba358a96`
- `OrcaBox-1.2.4.dmg`：`fc5c1b87e5dbb99cf5e5257335d947ffaadd121c91d9d3b0fbdeb440a588ca41`
- `OrcaBox-1.2.4-mac.zip`：`5f18d9376b38fff31ce60ba84d819484e2159d03dfd8891c36d4a6fc97c04705`

## 获取更新

- [CNB 安装包发行页](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.2.4)
- [GitHub 备用发行页](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.4)
- [OrcaBox Chrome 浏览器插件](https://github.com/GarryGit888/OrcaBox-Release/releases/download/v1.2.4/OrcaBox-Chrome-Extension-1.2.4.zip)

## 生成信息

- 生成范围：`v1.2.3..HEAD`
- 生成分支：`1.2.4`
- 提交数量：10
- 变更文件数量：155
