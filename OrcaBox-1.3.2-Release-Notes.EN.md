# OrcaBox 1.3.2 Release Notes

Release date: 2026-10-04

## What's new

- macOS in-app update fix: the final swap no longer depends on the system updater signature gate — the app re-verifies the update hash and swaps itself with rollback protection.
- In-app "What's new" guide: after an update, the help button shows a bubble and badge, with paged feature cards describing each release.
- Inspector card visibility settings, the in-app what's-new guide, linear grid wheel scrolling, native playback self-healing, and model download fixes all ship in this version.

## Download and installation

- CNB is the primary download source. GitHub Release remains the backup source.
- Windows x64 includes an installer with a selectable installation directory and a portable build.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.2)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.2)

## Platform notes

- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.2/OrcaBox-1.3.2-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.2/OrcaBox-1.3.2-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.2/OrcaBox-1.3.2-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.2/OrcaBox-1.3.2-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.2/OrcaBox-1.3.2-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.2/OrcaBox-1.3.2-win-x64-Portable.exe) |
