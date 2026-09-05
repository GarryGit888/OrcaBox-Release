# Release Notes

## 1.2.6 - 2026-09-04

- 新增多比例图片调整画布节点和完整画布 AI 工作流、检查器选择流程。
- 改进素材预览、媒体交互与播放工作流；索引阶段延后视频探测并缓存颜色提取。
- 视频预览继续使用原始媒体、缩略图和胶片帧，不生成视频代理文件；可见 Lottie / JSON 素材保持连续实时预览。
- 发布 macOS Apple Silicon / Intel x64 DMG 与 ZIP、Windows x64 安装器与免安装版，以及 Chrome 扩展 1.2.6。
- CNB 与 GitHub Release 同步提供全部安装包和更新清单；官网 GitHub Pages 已同步至 1.2.6。
- macOS 包为未签名测试包，首次打开可能需要在系统设置中允许；Windows 包为 x64 内测分发版本。

## 1.2.5 - 2026-08-31

- 优化素材预览加载和元数据处理，减少大目录首次打开时的等待感。
- 改进音频、视频、Lottie 等媒体预览与选中播放状态同步。
- 保持视频原始文件播放，不生成视频代理文件。
- 增加资源卡片显示控制与质量重新分析批量处理。
- 增强锁定文件夹保护和密码验证流程。
- 发布 macOS Apple Silicon / Intel 安装包、Windows x64 安装器与免安装版，以及 Chrome 扩展 1.2.5。
- Windows 包已完成云端打包、发行包校验和启动冒烟测试；CNB 与 GitHub 同步提供下载。

## 1.2.4 - 2026-08-15

- 优化素材网格浏览、缩略图加载与预览调度，降低大量素材场景下的等待与视觉跳动。
- 视频预览继续使用原始媒体文件、缩略图和胶片帧，不生成视频代理文件。
- 改进选中音频播放在素材卡片、详情面板和预览工作区之间的状态同步。
- 可见的 Lottie / JSON 素材保持连续实时预览。
- 发布 macOS Apple Silicon 与 Intel x64 的 DMG / ZIP 内测包、Windows x64 安装器与免安装版，以及 Chrome 扩展 1.2.4。
- CNB 与 GitHub 同步 Windows 安装器、Portable 包、blockmap 和 `latest.yml` 自动更新清单。

## 1.2.3 - 2026-08-07

- 新增可持久化无限画布，支持素材引用、移动、缩放、旋转、分组、锁定和隐藏。
- 优化资料库索引、源目录树、媒体预览、拖拽和 AI 按需初始化。
- 视频预览继续使用原始文件、缩略图和胶片帧，不生成视频代理文件。
- 发布 macOS Apple Silicon 与 Intel x64 的 DMG / ZIP 内测包、Windows x64 安装器、Windows x64 免安装版，以及 Chrome 扩展 1.2.3。
- macOS 包尚未完成 Developer ID 签名与公证；Windows x64 包为内测分发版本。

## 1.2.1 - 2026-07-30

- 视频预览坚持原始文件优先，不生成视频代理文件。
- 加强跨磁盘复制、移动、替换文件和桌面壁纸设置。
- 增加 Windows x64 发布准备流程与原生依赖检查。
- 修复 Windows system-share 原生模块与当前 Windows SDK 的编译兼容性。
- macOS Apple Silicon 与 Intel 安装包已生成。
- Windows x64 安装器已生成；Portable 包和完整 Windows 分发门禁仍待 Windows 主机验证。
- macOS 安装包当前为未签名测试包，首次打开可能需要手动允许。

## 1.1.2 - 2026-07-21

完成 OrcaBox 1.1.2 macOS Apple Silicon 与 Windows x64 发布包。

## 1.0.0 - 2026-07-17

首个公开发行版本。
