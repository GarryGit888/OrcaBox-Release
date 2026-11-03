# OrcaBox 1.4.1 发行说明

发布日期：2026-11-02

> 本版本新增可自动附带环境信息的独立反馈面板，反馈可直接推送到飞书渠道；同时修复超大图片缩略图争用、XLSX/PPTX 封面重复解析、音频详情栏重复的 AI 识别入口，以及插件安装与服务生命周期中的异常状态。

## 新增功能

- **独立反馈面板**：从「帮助与支持 → 反馈建议」打开应用内面板，选择反馈类型、填写描述，并自动附带当前窗口截图（可删除或补充图片）。应用版本、系统版本、平台架构与资料库状态会自动整理，近期诊断消息可选择是否附带，无需跳转外部网页即可提交。
- **飞书反馈通道**：提交内容发送到维护者配置的反馈服务并推送到飞书反馈渠道，便于快速跟进；反馈服务由维护者按需配置，客户端不保存仓库或飞书访问令牌。此流程不要求自动创建 GitHub/CNB Issue。
- **Issue 同步结果可见**：当反馈服务配置了 GitHub/CNB Issue 同步时，提交结果会返回已创建的 Issue 链接或同步失败原因，面板内直接展示，不再静默失败。

## 优化改进

- **超大图片缩略图错峰生成**：约 2000 万像素以上的常见栅格图片使用独立低并发队列，避免多张超大图片同时解码争用 CPU 与内存；网格缩略图与打开大图不再互相拖慢。缩略图可能分批出现，原始文件与预览质量不变。
- **表格封面缓存优先**：XLSX/PPTX 卡片先检查新鲜且可用的封面缓存，已有有效缓存时直接显示，不再重复解析工作簿或转换 PDF；没有可用缓存时才进入原有生成流程。
- **音频详情栏入口收敛**：合并音频属性栏中重复出现的 AI 识别页签，只保留一个入口，避免同一能力出现两个相似按钮。

## 问题修复

- **表格缩略图长时间加载**：修复 XLSX 卡片在已存在有效封面时仍先解析源文件、导致封面长时间停留在加载状态的问题；PDF 预览缓存也会在源文件解析前优先复用。
- **反馈面板提交失败**：修复反馈服务返回 Issue 同步结果或非预期响应时面板提交报错的问题，提交结果与错误信息现在可以被正确解析和展示。
- **插件安装与服务生命周期**：修正插件安装、启用/停用及服务清理过程中的状态不同步问题，减少插件已安装但服务未就绪、停用后仍占用服务等情况。
- **开发环境 CSP 记录**：补齐开发环境 CSP 配置记录，便于排查开发态与生产态脚本策略差异（不影响正式包策略）。

## 平台差异与构建状态

| 项目 | macOS（Apple Silicon / Intel） | Windows x64 |
| --- | --- | --- |
| 反馈面板 | 共享渲染层，系统/版本信息自动采集 | 共享渲染层，系统/版本信息自动采集 |
| 截图附带 | 当前窗口截图，可删除或补充 | 当前窗口截图，可删除或补充 |
| 超大图片缩略图 | 独立低并发队列，原生解码 | 独立低并发队列，原生解码 |
| 表格封面 | 缓存优先，PDF 预览复用 | 缓存优先，PDF 预览复用 |
| 当前发布版本 | 1.4.1 Apple Silicon / Intel 双架构 | 1.4.1 Windows x64 |
| 自动更新 | DMG 人工安装 + 双架构 ZIP 更新载荷 | NSIS 安装器 + blockmap（Portable 为手动下载，不参与更新） |

- 反馈面板、缩略图调度与音频详情栏均为共享渲染层/主进程逻辑，macOS 与 Windows 同步生效；本次未引入平台专属分支。
- macOS 双架构与 Windows x64 安装包均已构建；Windows 产物通过 Windows 主机原生分发门禁。
- macOS 与 Windows 的构建产物、签名状态及验收结果分别见 `doc/release/builds/v1.4.1-2026-11-02.md` 与 `doc/release/builds/v1.4.1-2026-11-03.md`。

## 反馈与已知问题

- 应用内：右下角「帮助与支持」→「反馈建议」，面板会自动整理环境信息并支持附带截图。
- 飞书为当前反馈主通道；GitHub/CNB Issue 同步取决于反馈服务端配置，未配置时不会创建 Issue。
- 已知问题与安装包安全拦截绕过说明见 `doc/release/known-issues.md` 与 `doc/release/external-beta-install.md`。

## 获取更新

- [CNB 安装包发行页](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.1)
- [GitHub 安装包发行页](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.1)
- [OrcaBox Chrome 浏览器插件](https://github.com/GarryGit888/OrcaBox-Release/releases/download/v1.4.1/OrcaBox-Chrome-Extension-1.4.1.zip)

| 平台 | 安装包 |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-arm64.dmg) / [自动更新 ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-x64.dmg) / [自动更新 ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-x64-mac.zip) |
| Windows x64 | [安装器](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-win-x64-Setup.exe) / [免安装版](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-win-x64-Portable.exe) |

macOS 应用内更新通过 `latest-mac.yml`（arm64 / x64 ZIP）；Windows 应用内更新通过 `latest.yml`（NSIS + blockmap）。DMG 与 Portable 是人工安装渠道，不是自动更新载荷。
