# OrcaBox 1.3.3 Release Notes

Release date: 2026-10-10

## What's new

- Move target breadcrumb bar: the Move Assets / Move Folder dialogs show the full destination trail — click any parent segment to jump there and clear search; long trails auto-scroll.
- Windows fixes: videos missing thumbnails (bundled FFmpeg lacked a filter argument) and the embedded AI engine exiting at startup (missing llama.dll/ggml.dll/mtmd.dll) are resolved; Windows builds 1.2.9–1.3.2 were affected.
- Windows native playback stalls (audio with a frozen picture) now fall back to the built-in player automatically; large-library scroll freezes fixed; WeChat drag-in imports and DaVinci Resolve diagnostics improved.

## Download and installation

- CNB is the primary download source. GitHub Release remains the backup source.
- Windows x64 includes an installer with a selectable installation directory and a portable build.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.3)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.3)

## Platform notes

- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-win-x64-Portable.exe) |
