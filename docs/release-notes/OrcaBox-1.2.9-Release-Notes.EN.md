# OrcaBox 1.2.9 Release Notes

Release date: 2026-09-30

## What's new

- Full in-app auto-update on macOS: once a new version is detected it downloads and installs in-app with differential downloads and architecture-matched ZIP payloads — no more manual DMG downloads.
- Fixed the Windows settings window caption Close button not responding to clicks.
- Extension status changes now push instantly to Settings; the update feed gains dual-architecture merge and pre-publish validation tooling.

## Download and installation

- CNB is the primary download source. GitHub Release remains the backup source.
- Windows x64 includes an installer with a selectable installation directory and a portable build.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.2.9)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.9)

## Platform notes

- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-win-x64-Portable.exe) |
