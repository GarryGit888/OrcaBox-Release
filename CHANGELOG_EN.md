# Release Notes

## 1.3.3 - 2026-10-10

- Move target breadcrumb bar: the Move Assets / Move Folder dialogs show the full destination trail — click any parent segment to jump there and clear search; long trails auto-scroll.
- Windows fixes: videos missing thumbnails (bundled FFmpeg lacked a filter argument) and the embedded AI engine exiting at startup (missing llama.dll/ggml.dll/mtmd.dll) are resolved; Windows builds 1.2.9–1.3.2 were affected.
- Windows native playback stalls (audio with a frozen picture) now fall back to the built-in player automatically; large-library scroll freezes fixed; WeChat drag-in imports and DaVinci Resolve diagnostics improved.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory. If you see "推理引擎无法启动", please report the full error text including the exit code.

## 1.3.2 - 2026-10-04

- macOS in-app update fix: the final swap no longer depends on the system updater signature gate — the app re-verifies the update hash and swaps itself with rollback protection.
- In-app "What's new" guide: after an update, the help button shows a bubble and badge, with paged feature cards describing each release.
- Inspector card visibility settings, the in-app what's-new guide, linear grid wheel scrolling, native playback self-healing, and model download fixes all ship in this version.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

## 1.3.1 - 2026-10-04

- Inspector card visibility settings: hide or restore the single-selection info card block with one switch; multi-selection batch cards can each be toggled separately (Settings > Browse > Inspector panel cards).
- In-app "What's new" guide: after an update, the help button shows a bubble and badge, with paged feature cards describing each release.
- The asset grid now scrolls linearly with the mouse wheel for precise fast scrolling; trackpad and keyboard navigation are unchanged.
- Native playback self-healing: stalled loading falls back to the browser engine automatically and can switch back once recovered; Windows mpv black-surface routing is fixed.
- Model downloads: aggregated multi-file progress that no longer resets when switching mirrors; manually placed models are detected correctly.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

## 1.3.0 - 2026-10-01

- Video review workflow: frame-by-frame timeline, point/box/brush/arrow/text markers, multi-version feedback with DaVinci Resolve sync.
- Reworked Windows auxiliary panel window buttons: settings keeps only Close, other panels get Close + Minimize, maximize is gone everywhere.
- MKV/Matroska and similar formats now play embedded in-app on Windows instead of opening a separate player window.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

## 1.2.9 - 2026-09-30

- Full in-app auto-update on macOS: once a new version is detected it downloads and installs in-app with differential downloads and architecture-matched ZIP payloads — no more manual DMG downloads.
- Fixed the Windows settings window caption Close button not responding to clicks.
- Extension status changes now push instantly to Settings; the update feed gains dual-architecture merge and pre-publish validation tooling.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

ZIP payloads — no more manual DMG downloads.
- Fixed the Windows settings window caption Close button not responding to clicks.
- Extension status changes now push instantly to Settings; the update feed gains dual-architecture merge and pre-publish validation tooling.
- macOS ships separate Apple Silicon and Intel DMGs; matching ZIP packages are retained as the in-app automatic updater payload. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

## 1.2.8 - 2026-09-26

- Improves generation checks for library background work. Refresh, analyze, and scan requests made while long audio is decoding or loading can no longer replace the active folder with stale root-state results.
- Improves media preview and playback routing while retaining original-file playback. Video preview never creates proxy video files.
- Improves reliability across local speech recognition, subtitle editing, AI tag review, and creator workflows.
- macOS ships separate Apple Silicon and Intel DMGs. macOS ZIP files are no longer published. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

ZIP files are no longer published. The current packages are unsigned and may require approval in Privacy & Security on first launch.
- Windows x64 installer and portable builds are available. The installer is per-user by default and permits a custom directory.

## Earlier releases

See the CNB release history for earlier versions.

