<p align="center"><img src="./assets/orcabox-icon.png" width="104" alt="OrcaBox icon"></p>
<h1 align="center">OrcaBox</h1>
<p align="center"><strong>为Everyone打造的本地优先多格式素材管理器</strong></p>
<p align="center">不搬动原文件，把分散在磁盘、移动硬盘和项目目录中的素材整理成可搜索、可预览、可复用的创作资料库。</p>

<p align="center">
  <a href="./README.md"><img src="https://img.shields.io/badge/简体中文-7C6FF7?style=for-the-badge&labelColor=15171C" alt="简体中文"></a>
  <a href="./README_EN.md"><img src="https://img.shields.io/badge/English-2B2F38?style=for-the-badge&labelColor=15171C" alt="English"></a>
  <a href="./README_JA.md"><img src="https://img.shields.io/badge/日本語-2B2F38?style=for-the-badge&labelColor=15171C" alt="日本語"></a>
  <a href="./README_KO.md"><img src="https://img.shields.io/badge/한국어-2B2F38?style=for-the-badge&labelColor=15171C" alt="한국어"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/当前版本-v1.3.9-7C6FF7?style=flat-square" alt="Version 1.3.9">
  <img src="https://img.shields.io/badge/macOS-12%2B-111318?style=flat-square&logo=apple" alt="macOS 12+">
  <img src="https://img.shields.io/badge/Windows-10%2F11_x64-111318?style=flat-square&logo=windows11" alt="Windows 10/11 x64">
  <img src="https://img.shields.io/badge/Local--first-Data_stays_local-1F9D75?style=flat-square" alt="Local-first">
</p>

<p align="center"><a href="https://garrygit888.github.io/OrcaBox-Release/">产品官网</a> · <a href="https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.9">CNB 下载</a> · <a href="https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.9">GitHub 下载</a> · <a href="./OrcaBox-1.3.9-Release-Notes.md">更新说明</a> · <a href="https://github.com/GarryGit888/OrcaBox-Release/issues">问题反馈</a></p>


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

- **本地素材索引**：管理内置磁盘、移动硬盘、NAS 映射目录和多个项目路径，文件监听与增量索引自动跟进新增与变更。
- **40+ 格式预览**：覆盖图片、音视频、动效、3D、字体、文档和创意工程格式。
- **搜索与筛选**：组合使用关键词、文件类型、评分、标签、颜色、时间和目录条件，AI 语义搜索支持用一句话描述画面找到素材。
- **整理系统**：通过合集、智能文件夹、标签、评分、收藏、备注、批量重命名和移动工具建立素材知识库。
- **端侧 AI**：在本机进行视觉分析、智能标签、语义检索和字幕生成，也可按需连接用户配置的远端 API。
- **动态素材体验**：Lottie / JSON 动效保持实时预览，Live 图常驻动效，音频支持波形与连续播放。
- **插件与创作联动**：插件中心按工作流启用能力；网页采集、网络视频下载、Pinterest 识图、听歌识曲等插件即装即用；DaVinci Resolve 一键导入、Lightroom / Bridge 星级同步。
- **跨平台桌面端**：提供 macOS Apple Silicon、macOS Intel 和 Windows x64 版本。

## 近期重磅更新

以下能力均已随 v1.3.9 – v1.3.9 正式发布，完整变更见 [更新说明](./OrcaBox-1.3.9-Release-Notes.md)。

**网络素材采集**

- **网络视频下载器** — 独立磨砂玻璃面板，批量粘贴 YouTube / Bilibili / 抖音 / 小红书 / Instagram 链接即可下载；逐卡选择分辨率，可落位到系统目录、自定义文件夹或任意来源目录并自动入库。下载引擎自动安装校验，支持断点续传、过期链接重解析与 4K 原画下载。
- **小红书笔记批量导入** — 粘贴完整笔记链接，整篇笔记的全部图片与 Live 图一次入库；移动端分享页与桌面版页面多条解析路径互为兜底。
- **应用内账号登录** — 设置中一键登录小红书 / 抖音。登录后小红书笔记保存无水印原图、私密笔记可导入；抖音解锁仅登录可见视频与更高清晰度档位。登录态存于 OrcaBox 独立持久化分区，不触碰系统浏览器。

**AI 整理与检索**

- **端侧智能标签** — 本地视觉分析批量生成标签与描述，审核后写回素材，全程不需要联网。
- **语义搜索** — 用自然语言描述画面内容即可检索素材，本地向量索引，适合没有打标签的大库冷启动。
- **AI 插件创建器** — 用一句话描述生成自定义插件，内置 API 速查注入提示词，代码预览与草稿管理一应俱全。

**播放与预览**

- **沉浸式全屏播放** — 全屏时标题栏、工具栏与进度条随播放渐隐，画面平滑铺满整窗；浏览器直连画面以渐进模糊融合标题栏，原生后端与浏览器后端手感一致。
- **原文件直接播放** — 4K VP9 + Opus、HEVC、ProRes、MKV 等格式走浏览器直读或系统原生媒体栈（AVPlayer / libVLC / mpv），预览过程从不生成视频代理文件。
- **动态素材常驻** — Lottie / JSON 动效在网格中保持实时播放，Live 图动效与音频波形连续呈现。

**字幕与台词工作台**

- **本地智能字幕** — 语音识别生成字幕，碎片自动合并，时间轴边界吸附波形上的真实停顿；英文按单词数断行（默认每行 8 词）、中日韩按字数，两套预算独立可调，一键导出 SRT / VTT。

**创作工具联动**

- **DaVinci Resolve 导入** — 面板直达当前工程，选中素材一键入库到时间线。
- **Lightroom / Bridge 星级同步** — 星级经 XMP 元数据与 Adobe 工具双向对齐，跨软件整理不再重复打星。

## 插件与扩展

OrcaBox 内置插件中心，能力按工作流启用，常用内置插件包括：

| 插件 | 能做什么 |
| --- | --- |
| 网络视频下载 | YouTube / Bilibili / 抖音 / 小红书 / Instagram 链接批量下载，独立面板、分辨率选择、断点续传 |
| Pinterest 以图搜图 | 选中库内图片一键找相似图；瀑布流浏览、大图缩放，支持看板浏览与关键词搜索，批量下载自动按看板归档 |
| 听歌识曲 | 多点采样识别正在播放的音乐，识别结果与封面直接落库 |
| AI 插件创建器 | 自然语言生成自定义插件，配 API 速查、代码预览与草稿管理 |
| 网页内容采集 | 拖拽网页图片与内容直接进入资料库 |

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
4. 按需启用 AI、浏览器采集、网络视频下载、Pinterest 识图或剪辑软件联动功能。

## 下载 OrcaBox 1.3.9

| 平台 | 主下载 | 备用下载 |
| --- | --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-arm64.dmg) | [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.9) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-x64.dmg) | [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.9) |
| Windows x64 | [安装器](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-win-x64-Setup.exe) / [免安装版](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-win-x64-Portable.exe) | [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.9) |

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
