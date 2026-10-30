<p align="center"><img src="./assets/orcabox-icon.png" width="104" alt="OrcaBox icon"></p>
<h1 align="center">OrcaBox</h1>
<p align="center"><strong>A local-first, multi-format asset manager for creators</strong></p>
<p align="center">Turn files scattered across disks, external drives, and project folders into a searchable, previewable, reusable creative library without moving the originals.</p>

<p align="center">
  <a href="./README.md"><img src="https://img.shields.io/badge/简体中文-2B2F38?style=for-the-badge&labelColor=15171C" alt="简体中文"></a>
  <a href="./README_EN.md"><img src="https://img.shields.io/badge/English-7C6FF7?style=for-the-badge&labelColor=15171C" alt="English"></a>
  <a href="./README_JA.md"><img src="https://img.shields.io/badge/日本語-2B2F38?style=for-the-badge&labelColor=15171C" alt="日本語"></a>
  <a href="./README_KO.md"><img src="https://img.shields.io/badge/한국어-2B2F38?style=for-the-badge&labelColor=15171C" alt="한국어"></a>
</p>
<p align="center"><img src="https://img.shields.io/badge/Release-v1.3.9-7C6FF7?style=flat-square" alt="Version 1.3.9"> <img src="https://img.shields.io/badge/macOS-12%2B-111318?style=flat-square&logo=apple" alt="macOS 12+"> <img src="https://img.shields.io/badge/Windows-10%2F11_x64-111318?style=flat-square&logo=windows11" alt="Windows 10/11 x64"> <img src="https://img.shields.io/badge/Local--first-Data_stays_local-1F9D75?style=flat-square" alt="Local-first"></p>
<p align="center"><a href="https://garrygit888.github.io/OrcaBox-Release/">Website</a> · <a href="https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.9">CNB Download</a> · <a href="https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.9">GitHub Download</a> · <a href="./OrcaBox-1.3.9-Release-Notes.EN.md">Release Notes</a> · <a href="https://github.com/GarryGit888/OrcaBox-Release/issues">Feedback</a></p>


<img src="./assets/product-1.2.7-hero.webp" width="100%" alt="OrcaBox local asset library">

## What is OrcaBox?

OrcaBox is built for editors, designers, motion artists, photographers, and creative teams. Add your existing folders and OrcaBox creates a local index while preserving the original structure. Preview, search, tag, rate, group, filter by color, and use AI-assisted organization from one desktop workspace.

| Principle | What it means |
| --- | --- |
| Local-first | Indexes, databases, and primary analysis stay on your device. |
| Zero-copy organization | Original files remain where they are, with no duplicate library storage. |
| Unified preview | Browse images, video, audio, Lottie, 3D, fonts, documents, and project files together. |
| Creative workflow focus | Move from web capture and search to organization and editor handoff with fewer tool switches. |

## Highlights

- Local indexing across internal disks, external drives, mapped storage, and multiple project roots, with file watching and incremental indexing built in.
- 40+ preview formats for images, media, motion, 3D, fonts, documents, and creative projects.
- Search and filters for keywords, file type, rating, tags, color, dates, and folders — plus AI semantic search that finds assets from a plain-language description.
- Collections, smart folders, favorites, ratings, notes, tags, batch rename, and batch move tools.
- On-device AI for visual analysis, smart tags, semantic retrieval, and subtitle generation, with optional user-configured remote APIs.
- Live Lottie previews, persistent Live Photo motion, and continuous audio waveforms.
- Plugin Center with workflow-scoped capabilities: network video downloading, Pinterest visual search, song recognition, web capture, and DaVinci Resolve / Lightroom / Bridge integrations.
- Desktop builds for Apple Silicon, Intel Mac, and Windows x64.

## Recent Releases Highlights

Everything below has shipped in v1.3.9 – v1.3.9. See the [release notes](./OrcaBox-1.3.9-Release-Notes.EN.md) for full details.

**Web asset capture**

- **Network video downloader** — A standalone frosted-glass panel: batch-paste YouTube / Bilibili / Douyin / Xiaohongshu / Instagram links to download. Pick the resolution per card, land files in the system folder, a custom folder, or any source folder, and they join the library automatically. The download engine installs and verifies itself; resumable downloads, link re-resolution, and 4K original-quality downloads are supported.
- **Xiaohongshu note import** — Paste a full note link and import every image and Live Photo in the note at once, with mobile and desktop resolution paths backing each other up.
- **In-app account logins** — Sign in to Xiaohongshu / Douyin from Settings. Xiaohongshu imports save watermark-free originals and gain access to private notes; Douyin unlocks login-only videos and higher quality tiers. Credentials live in OrcaBox's own isolated partitions and never touch your system browser.

**AI organization & retrieval**

- **On-device smart tags** — Local visual analysis generates tags and descriptions in batches; review and write them back without an internet connection.
- **Semantic search** — Find assets by describing the scene in plain language. The vector index is fully local, ideal for large libraries that haven't been tagged yet.
- **AI plugin builder** — Describe a plugin in one sentence and generate it, with a built-in API reference, code preview, and draft management.

**Playback & preview**

- **Immersive fullscreen playback** — The title bar, toolbar, and timeline fade away together, and the picture smoothly takes the whole window; the header melts into the picture with a progressive blur, with identical feel across browser-direct and native backends.
- **Original-file playback** — 4K VP9 + Opus, HEVC, ProRes, MKV and more play through browser-direct or the OS media stack (AVPlayer / libVLC / mpv). No proxy video files are ever generated for preview.
- **Always-alive motion** — Lottie / JSON assets keep playing live in the grid, with persistent Live Photo motion and continuous audio waveforms.

**Subtitles & transcript workbench**

- **Local smart subtitles** — Speech recognition generates subtitles, merges fragments, and snaps cue boundaries onto real pauses in the waveform. English lines break on word counts (8 words per line by default) while Chinese, Japanese, and Korean use character counts; export to SRT / VTT in one click.

**Creative tool integrations**

- **DaVinci Resolve import** — Jump straight to the current project and bring selected assets in with one click.
- **Lightroom / Bridge rating sync** — Ratings align bidirectionally through XMP metadata, so cross-tool curation never means rating twice.

## Plugins & Extensions

OrcaBox ships with a Plugin Center where capabilities are enabled around your workflow. Built-in plugins include:

| Plugin | What it does |
| --- | --- |
| Network video downloader | Batch-download YouTube / Bilibili / Douyin / Xiaohongshu / Instagram links in a standalone panel with resolution picking and resume support |
| Pinterest visual search | Find visually similar images from any library image; masonry browsing, zoomable detail, boards and keyword search, downloads auto-sorted into board folders |
| Song recognition | Multi-point sampling recognizes the music you are playing; results and cover art land in the library |
| AI plugin builder | Generate custom plugins from natural language, with an API reference, code preview, and draft management |
| Web capture | Drag web images and content straight into the library |

## Product Tour

<table>
  <tr><td width="50%"><img src="./assets/ai-tag-review.webp" alt="AI tag review"><br><strong>AI Smart Tags</strong><br>Analyze, review, and apply tags in batches.</td><td width="50%"><img src="./assets/plugin-manager.webp" alt="Plugin manager"><br><strong>Plugin Center</strong><br>Enable and manage tools around your workflow.</td></tr>
  <tr><td width="50%"><img src="./assets/product-1.2.1-audio.webp" alt="Audio library"><br><strong>Audio Library</strong><br>Waveforms, playback, search, and batch organization.</td><td width="50%"><img src="./assets/product-1.2.1-3d.webp" alt="3D preview"><br><strong>Interactive 3D Preview</strong><br>Inspect models, materials, and essential metadata.</td></tr>
</table>
<p align="center"><img src="./assets/product-1.2.1-lottie.gif" width="720" alt="Live Lottie preview"><br><sub>Lottie and JSON motion assets remain live inside the asset grid.</sub></p>

## Supported Asset Families

| Category | Examples |
| --- | --- |
| Images and design | PNG, JPG, WEBP, GIF, SVG, PSD, PSB, AI, EPS, TIFF, HEIC, ICO, ICNS |
| Video | MP4, MOV, MKV, WebM, AVI, M4V, and common professional containers |
| Audio | MP3, WAV, FLAC, AAC, M4A, OGG |
| Motion and 3D | Lottie JSON, `.lottie`, Live Photo, GLB, GLTF, OBJ, FBX, USDZ |
| Fonts and documents | TTF, OTF, PDF, Markdown, text, and common Office documents |
| Creative projects | Premiere Pro, After Effects, DaVinci Resolve, Final Cut Pro, Sketch, and related archives |

Capabilities vary by format, operating system, and local media runtime. Video preview uses original media with safe browser-direct or native/system playback; OrcaBox does not generate proxy video files for preview.

## Quick Start

1. Download the build that matches your operating system and processor.
2. Add one or more source folders. Original files are not copied or moved.
3. Let the local index complete, then organize with search, filters, tags, and collections.
4. Enable AI, web capture, video downloading, Pinterest visual search, or editor integrations when needed.

## Download OrcaBox 1.3.9

| Platform | Primary download | Mirror |
| --- | --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-arm64.dmg) | [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.9) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-x64.dmg) | [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.9) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-win-x64-Portable.exe) | [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.9) |

> Current macOS packages are unsigned test builds. On first launch, macOS may require approval in System Settings > Privacy & Security. Download only from the official release pages above and verify checksums when available.

## Languages and Desktop Stack

<p><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111111" alt="JavaScript"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python"> <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white" alt="C++"> <img src="https://img.shields.io/badge/Objective--C%2B%2B-111318?style=flat-square&logo=apple" alt="Objective-C++"></p>
<p><img src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white" alt="Electron"> <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React"> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"> <img src="https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white" alt="SQLite"></p>

These badges describe the main languages and technologies used to build OrcaBox. **This public binary release repository does not contain OrcaBox's private source code.** It contains release information, public documentation, website files, and product media only.

## Privacy and Support

- OrcaBox centers on a local index and local database; your full asset library does not need to be uploaded.
- On-device AI runs locally. Data reaches a remote service only when you explicitly configure and use its API.
- Review the privacy policy and license of any third-party plugin, model, or API before enabling it.

Report issues with the OrcaBox version, operating system and processor, reproduction steps, and relevant screenshots or log excerpts: [GitHub Issues](https://github.com/GarryGit888/OrcaBox-Release/issues) · [Release history](https://github.com/GarryGit888/OrcaBox-Release/releases) · [CNB releases](https://cnb.cool/garrykai/orcabox-release/-/releases)

---
<p align="center">Copyright 2024-2026 OrcaBox. All rights reserved.</p>
