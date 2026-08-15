# Release Notes

## 1.2.4 - 2026-08-15

- 优化素材网格浏览、缩略图加载与预览调度，降低大量素材场景下的等待与视觉跳动。
- 视频预览继续使用原始媒体文件、缩略图和胶片帧，不生成视频代理文件。
- 改进选中音频播放在素材卡片、详情面板和预览工作区之间的状态同步。
- 可见的 Lottie / JSON 素材保持连续实时预览。
- 修复锁定文件夹状态文字在侧栏内可能换行的问题，保持单行显示。
- 发布 macOS Apple Silicon 与 Intel x64 的 DMG / ZIP 内测包，以及 Chrome 扩展 1.2.4。
- macOS 包尚未完成 Developer ID 签名与公证；Windows x64 下载继续提供 1.2.3 版本。

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
