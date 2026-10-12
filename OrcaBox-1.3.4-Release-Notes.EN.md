# OrcaBox 1.3.4 Release Notes

Release date: 2026-10-12

## What's new

- Move panel scrolling stability: move progress now lives in a dedicated store with the progress bar subscribing locally, so scrolling the Move Assets / Move Folder panels on large libraries no longer flickers the whole window.
- Middle-button scrolling no longer zooms the asset grid (MX thumb-wheel zoom is unchanged).
- Intel Mac auto-update fix: when the bundle swap is blocked, the updater no longer silently falls back to the system updater, which can never validate an unsigned build — it keeps the verified payload and states the concrete reason with DMG guidance.
- DaVinci import diagnostics: when reverse-DNS lookups hang, the plugin shows the cause and fix instead of a misleading "Resolve is not running"; the What's-new version dropdown can select older releases again.

## Download and installation

- CNB is the primary download source. GitHub Release remains the backup source.
- Windows x64 includes an installer with a selectable installation directory and a portable build.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.4)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.4)

## Platform notes

- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-win-x64-Portable.exe) |
