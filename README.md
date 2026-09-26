<p align="center"><img src="./assets/orcabox-icon.png" width="104" alt="OrcaBox icon"></p>
<h1 align="center">OrcaBox</h1>
<p align="center"><strong>为创作者打造的本地优先多格式素材管理器</strong></p>
<p align="center">不搬动原文件，把分散在磁盘、移动硬盘和项目目录中的素材整理成可搜索、可预览、可复用的创作资料库。</p>

<p align="center">
  <a href="./README.md"><img src="https://img.shields.io/badge/简体中文-7C6FF7?style=for-the-badge&labelColor=15171C" alt="简体中文"></a>
  <a href="./README_EN.md"><img src="https://img.shields.io/badge/English-2B2F38?style=for-the-badge&labelColor=15171C" alt="English"></a>
  <a href="./README_JA.md"><img src="https://img.shields.io/badge/日本語-2B2F38?style=for-the-badge&labelColor=15171C" alt="日本語"></a>
  <a href="./README_KO.md"><img src="https://img.shields.io/badge/한국어-2B2F38?style=for-the-badge&labelColor=15171C" alt="한국어"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/当前版本-v1.2.8-7C6FF7?style=flat-square" alt="Version 1.2.8">
  <img src="https://img.shields.io/badge/macOS-12%2B-111318?style=flat-square&logo=apple" alt="macOS 12+">
  <img src="https://img.shields.io/badge/Windows-10%2F11_x64-111318?style=flat-square&logo=windows11" alt="Windows 10/11 x64">
  <img src="https://img.shields.io/badge/Local--first-Data_stays_local-1F9D75?style=flat-square" alt="Local-first">
</p>

<p align="center"><a href="https://garrygit888.github.io/OrcaBox-Release/">产品官网</a> · <a href="https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.2.8">CNB 下载</a> · <a href="https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.8">GitHub 下载</a> · <a href="./OrcaBox-1.2.8-Release-Notes.md">更新说明</a> · <a href="https://github.com/GarryGit888/OrcaBox-Release/issues">问题反馈</a></p>

<img src="./assets/product-1.2.7-hero.webp" width="100%" alt="OrcaBox 本地素材库主界面">

## OrcaBox 是什么

OrcaBox 面向剪辑师、设计师、动效师、摄影师和创意团队。添加现有素材文件夹后，OrcaBox 会在不改变原始目录结构的前提下建立本地索引，并把预览、搜索、标签、合集、评分、颜色筛选与 AI 辅助整理集中到同一个桌面工作流中。

| 核心原则 | 说明 |
| --- | --- |
| 本地优先 | 索引、数据库与主要分析流程保留在本机，适合私有素材和大型项目库。 |
| 零复制管理 | 直接关联原始文件，不为了建库重复占用磁盘空间。 |
| 多格式预览 | 图片、视频、音频、Lottie、3D、字体、文档和工程文件集中浏览。 |
| 创作流程导向 | 从网页采集、快速检索、批量整理到剪辑软件导入，减少工具间往返。 |

## 主要能力

- **本地素材索引**：管理内置磁盘、移动硬盘、NAS 映射目录和多个项目路径。
- **40+ 格式预览**：覆盖图片、音视频、动效、3D、字体、文档和创意工程格式。
- **搜索与筛选**：组合使用关键词、文件类型、评分、标签、颜色、时间和目录条件。
- **整理系统**：通过合集、智能文件夹、标签、评分、收藏、备注和批量工具建立素材知识库。
- **端侧 AI**：在本机进行视觉分析、智能标签和颜色辅助检索，也可按需连接用户配置的远端 API。
- **动态素材体验**：可见的 Lottie / JSON 动效保持实时预览，音频支持波形和连续播放。
- **插件与创作联动**：提供插件管理、网页采集、格式处理和 DaVinci Resolve 导入等扩展流程。
- **跨平台桌面端**：提供 macOS Apple Silicon、macOS Intel 和 Windows x64 版本。

## 产品预览

<table>
  <tr><td width="50%"><img src="./assets/ai-tag-review.webp" alt="AI 智能标签审核"><br><strong>AI 智能标签</strong><br>批量分析、审核并写入素材标签。</td><td width="50%"><img src="./assets/plugin-manager.webp" alt="OrcaBox 插件中心"><br><strong>插件中心</strong><br>按工作流启用、管理和扩展能力。</td></tr>
  <tr><td width="50%"><img src="./assets/product-1.2.1-audio.webp" alt="音频波形素材库"><br><strong>音频素材库</strong><br>波形预览、播放、搜索与批量整理。</td><td width="50%"><img src="./assets/product-1.2.1-3d.webp" alt="3D 模型预览"><br><strong>交互式 3D 预览</strong><br>查看模型、材质与基础属性。</td></tr>
</table>

<p align="center"><img src="./assets/product-1.2.1-lottie.gif" width="720" alt="Lottie 动效实时预览"><br><sub>Lottie / JSON 动效在素材网格中保持实时播放</sub></p>

## 支持的素材类型

| 类别 | 示例格式 |
| --- | --- |
| 图片与设计 | PNG, JPG, WEBP, GIF, SVG, PSD, PSB, AI, EPS, TIFF, HEIC, ICO, ICNS |
| 视频 | MP4, MOV, MKV, WebM, AVI, M4V 及常见专业媒体封装 |
| 音频 | MP3, WAV, FLAC, AAC, M4A, OGG |
| 动效与 3D | Lottie JSON, `.lottie`, Live Photo, GLB, GLTF, OBJ, FBX, USDZ |
| 字体与文档 | TTF, OTF, PDF, Markdown, 文本与常见 Office 文档 |
| 创意工程 | Premiere Pro, After Effects, DaVinci Resolve, Final Cut Pro, Sketch 等工程或归档文件 |

具体能力会随格式、操作系统和本机媒体运行时而有所不同。视频通过原文件与安全的浏览器直读或系统/原生媒体能力播放，预览过程不会生成视频代理文件。

## 快速开始

1. 下载并安装与你的系统和处理器匹配的 OrcaBox。
2. 添加一个或多个素材源文件夹，原始文件不会被复制或移动。
3. 等待本地索引完成，通过搜索、筛选、标签和合集开始整理。
4. 按需启用 AI、浏览器采集、格式处理或剪辑软件联动功能。

## 下载 OrcaBox 1.2.8

| 平台 | 主下载 | 备用下载 |
| --- | --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.8/OrcaBox-1.2.8-arm64.dmg) | [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.8) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.8/OrcaBox-1.2.8-x64.dmg) | [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.8) |
| Windows x64 | [安装器](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.8/OrcaBox-1.2.8-win-x64-Setup.exe) / [免安装版](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.8/OrcaBox-1.2.8-win-x64-Portable.exe) | [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.8) |
| Chrome 扩展 | [ZIP](https://github.com/GarryGit888/OrcaBox-Release/releases/download/v1.2.8/OrcaBox-Chrome-Extension-1.2.8.zip) | [发行页](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.8) |

> macOS 当前提供未签名测试包，首次启动时可能需要在“系统设置 - 隐私与安全性”中确认打开。请从上方官方发行页下载，并核对发行页中的校验信息。

## 技术语言与桌面技术栈

<p><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111111" alt="JavaScript"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python"> <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white" alt="C++"> <img src="https://img.shields.io/badge/Objective--C%2B%2B-111318?style=flat-square&logo=apple" alt="Objective-C++"></p>
<p><img src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white" alt="Electron"> <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React"> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"> <img src="https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white" alt="SQLite"></p>

这些徽章用于说明 OrcaBox 产品采用的主要开发语言与技术方向。**本仓库是公开发行仓库，不包含 OrcaBox 私有源代码**；这里只保存安装包发行信息、公开文档、官网文件和产品展示资源。

## 隐私与数据

- OrcaBox 以本地索引和本地数据库为核心，不需要上传整个素材库。
- 本地 AI 在设备端运行；只有用户主动配置并调用远端 API 时，相关请求才会发送到对应服务。
- 启用第三方插件、模型或 API 前，请阅读对应服务的隐私政策与许可条款。

## 反馈与支持

提交问题时请附上 OrcaBox 版本、操作系统与处理器、可复现步骤，以及必要的截图或日志片段：

- [GitHub Issues](https://github.com/GarryGit888/OrcaBox-Release/issues)
- [完整发行历史](https://github.com/GarryGit888/OrcaBox-Release/releases)
- [CNB 发行页](https://cnb.cool/garrykai/orcabox-release/-/releases)

---
<p align="center">Copyright 2024-2026 OrcaBox. All rights reserved.</p>
