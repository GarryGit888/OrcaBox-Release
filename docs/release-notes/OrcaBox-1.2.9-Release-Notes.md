# OrcaBox 1.2.9 更新说明

发布日期: 2026-09-30

## 本次更新

- macOS 应用内自动更新全链路：检测到新版本后可在应用内直接下载并安装（差分下载、架构匹配的 ZIP 更新载荷），不再需要手动下载 DMG。
- 修复 Windows 设置窗口标题栏关闭按钮不响应点击的问题。
- 扩展状态变化即时推送至设置界面；更新 feed 新增双架构合并与发布前校验工具。

## 下载与安装

- CNB 是主要下载渠道；GitHub Release 提供备用下载。
- Windows x64 提供支持自定义安装目录的安装器及 Portable 免安装版。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.2.9)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.9)

## 平台说明

- macOS 提供 Apple Silicon 与 Intel 两份 DMG；对应架构的 ZIP 保留为应用自动更新载荷。当前包未签名，首次打开可能需要在“隐私与安全性”中确认。
- Windows x64 安装包和 Portable 包均已提供；安装器默认按当前用户安装，并允许更改目录。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-win-x64-Portable.exe) |
