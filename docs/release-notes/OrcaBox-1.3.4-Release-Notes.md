# OrcaBox 1.3.4 更新说明

发布日期: 2026-10-12

## 本次更新

- 移动面板滚动稳定性：移动进度状态抽离为独立 store、进度条局部订阅，大资料库下「移动资源 / 移动文件夹」面板滚动不再整窗闪烁。
- 鼠标中键滚动不再误触网格缩放（MX 侧键缩放手势不变）。
- Intel Mac 自动更新修复：换包受阻时不再静默回退到必然失败的系统更新器，保留已校验的更新载荷并明确告知原因与手动安装 DMG 的指引。
- 达芬奇导入连接诊断：反向 DNS 解析挂起时给出具体原因与修复步骤，不再误报「Resolve 未运行」；「新增功能」面板的版本下拉可正常选择历史版本。

## 下载与安装

- CNB 是主要下载渠道；GitHub Release 提供备用下载。
- Windows x64 提供支持自定义安装目录的安装器及 Portable 免安装版。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.4)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.4)

## 平台说明

- macOS 提供 Apple Silicon 与 Intel 两份 DMG；对应架构的 ZIP 保留为应用自动更新载荷。当前包未签名，首次打开可能需要在“隐私与安全性”中确认。
- Windows x64 安装包和 Portable 包均已提供；安装器默认按当前用户安装，并允许更改目录。如遇「推理引擎无法启动」报错，请反馈完整错误文本（含退出码）。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-win-x64-Portable.exe) |
