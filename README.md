# OrcaBox

OrcaBox 是面向创作者与创意团队的本地素材管理器，支持图片、视频、音频、Lottie、3D 模型、字体和文档等多种格式的索引、预览、检索与整理。

> 本仓库是 OrcaBox 的公开发行仓库，仅提供官网、使用说明和安装包。应用核心源代码不在此仓库中。

## 官网

[访问 OrcaBox 在线官网](https://garrygit888.github.io/OrcaBox-Release/)

官网由 GitHub Pages 提供公开访问，页面中的主要下载按钮仍连接到 CNB Release；GitHub Release 仅作为备用镜像。

## 下载

当前版本：**1.0.0**

| 平台 | 系统要求 | 安装包 |
| --- | --- | --- |
| macOS Apple Silicon | macOS 12.0 或更高版本 | [CNB 下载 DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.0.0/OrcaBox-1.0.0-macOS-arm64.dmg) |
| Windows x64 | Windows 10 或 Windows 11 | [CNB 下载 EXE](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.0.0/OrcaBox-1.0.0-Windows-x64.exe) |

完整发行页面：

- [CNB Releases（主要下载源）](https://cnb.cool/garrykai/orcabox-release/-/releases)
- [GitHub Releases（备用镜像）](https://github.com/GarryGit888/OrcaBox-Release/releases)

## 主要能力

- 直接索引本地文件，不复制或移动原始素材
- 40+ 文件格式预览与元数据读取
- 图片、音频、视频、Lottie 和 3D 模型工作流
- 标签、合集、评分、搜索与批量整理
- 本地 AI 分析与颜色搜索
- macOS 与 Windows 桌面版本

## 安装说明

### macOS

1. 下载并打开 DMG。
2. 将 OrcaBox 拖入“应用程序”文件夹。
3. 当前安装包为 ad-hoc 签名，尚未完成 Apple Developer ID 公证。如果系统阻止首次打开，请进入“系统设置 → 隐私与安全性”，确认打开 OrcaBox。

### Windows

1. 下载并运行 EXE 安装程序。
2. 如果 Windows SmartScreen 显示提示，请确认文件来源为本仓库后再继续安装。

## 文件校验

```text
OrcaBox-1.0.0-macOS-arm64.dmg
SHA-256: 2de32e9f7229819050fab3994ce42e94e9b2e724e7a8ab38c1a8d0a7f0f10b56

OrcaBox-1.0.0-Windows-x64.exe
SHA-256: 7d0a01237a1740c585c5257fe4529332277a2ed92b3e6137cd9e3e8d8c216ce5
```

macOS 可使用以下命令校验：

```bash
shasum -a 256 OrcaBox-1.0.0-macOS-arm64.dmg
```

Windows PowerShell 可使用：

```powershell
Get-FileHash .\OrcaBox-1.0.0-Windows-x64.exe -Algorithm SHA256
```

## 仓库内容

```text
.
├── assets/          # 官网展示图片
├── index.html       # OrcaBox 产品官网
├── README.md        # 下载与安装说明
├── CHANGELOG.md     # 版本更新记录
└── .cnb.yml         # CNB 网页预览配置
```

本仓库不会包含：

- Electron 主进程与渲染器源代码
- 数据库、索引和媒体处理核心实现
- 原生播放模块及平台适配代码
- AI 模型、密钥或内部构建配置

## 隐私

OrcaBox 以本地素材管理为核心。素材索引、预览和本地分析数据默认保存在用户设备中。安装包中不包含用户素材或用户数据库。

## 反馈

问题与建议请通过 [GitHub Issues](https://github.com/GarryGit888/OrcaBox-Release/issues) 提交，并附上操作系统版本、OrcaBox 版本和可复现步骤。

Copyright 2024-2026 OrcaBox. All rights reserved.
