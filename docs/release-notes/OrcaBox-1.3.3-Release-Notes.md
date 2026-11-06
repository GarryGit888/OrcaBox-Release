# OrcaBox 1.3.3 更新说明

发布日期: 2026-10-10

## 本次更新

- 移动目标路径栏：「移动资源 / 移动文件夹」对话框顶部显示完整目标路径，点任意上级段直达目标层级并清空搜索，长路径自动滚动跟随。
- Windows 修复：视频缩略图无法生成（内置 FFmpeg 缺少滤镜参数）与内嵌 AI 推理引擎启动即退出（缺少 llama.dll/ggml.dll/mtmd.dll 运行库）两个高影响缺陷已修复，1.2.9–1.3.2 的 Windows 包均受影响。
- Windows 原生播放「有声无画」停滞时自动回退内置播放器；大资料库滚动冻结与任务轮询开销优化；微信拖入导入与达芬奇导入诊断增强。

## 下载与安装

- CNB 是主要下载渠道；GitHub Release 提供备用下载。
- Windows x64 提供支持自定义安装目录的安装器及 Portable 免安装版。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.3)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.3)

## 平台说明

- macOS 提供 Apple Silicon 与 Intel 两份 DMG；对应架构的 ZIP 保留为应用自动更新载荷。当前包未签名，首次打开可能需要在“隐私与安全性”中确认。
- Windows x64 安装包和 Portable 包均已提供；安装器默认按当前用户安装，并允许更改目录。如遇「推理引擎无法启动」报错，请反馈完整错误文本（含退出码）。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-win-x64-Portable.exe) |
