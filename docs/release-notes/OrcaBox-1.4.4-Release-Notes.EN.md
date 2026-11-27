# OrcaBox 1.4.4 Release Notes

Release date: 2026-11-27

## What's new

- 拼图图（外置插件）：通过插件中心安装「拼图图」，将选中图片排列为网格拼图或横向、纵向长图。
- 资产库切换面板稳定性：面板按窗口剩余高度自适应，资产库列表独立滚动，标题与底部操作在矮窗口中仍保持可见；打开面板时同步修复侧栏背景磨砂合成，macOS 与 Windows 行为一致。
- AI 标签状态同步：修复 AI 标签生成与卡片「重新分析」完成后，数据库已写入而卡片、详情面板或多选检查器仍短暂显示 0 的缓存竞态。

## Download and installation

- CNB is the primary download source. GitHub Release remains the backup source.
- Windows x64 includes an installer with a selectable installation directory and a portable build.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.4)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.4)

## Platform notes

- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-win-x64-Portable.exe) |
