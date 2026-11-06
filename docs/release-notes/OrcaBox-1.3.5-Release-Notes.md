# OrcaBox 1.3.5 发行说明

发布日期：2026-10-15

> 本版本围绕 新增功能、问题修复 持续完善素材管理、媒体预览与跨平台使用体验。

## 新增功能

- 打通 Lightroom 与 Bridge 星级评分同步（`44ef811`）
- 新增图片反推提示词工作流：支持中文、英文、反向词与 JSON 结果，并提供质量提示与可编辑保存。
- 浏览器扩展新增基于当前会话的可选素材获取能力，仍保留站点权限、大小和验证页限制。

## 优化改进

- 批量重命名改为“自定义”标签组合：支持原文件名、文件夹名称、序号、下划线和自定义文字，标签可拖拽排序。
- HTML 预览加强路径和网络隔离；AI 请求、音频处理、资料库基础结构和大资料库索引流程得到整理。

## 问题修复

- support Ctrl+Y in transcript workbench（`e3bcb02`）
- 修复真实图片效果测试在全量测试负载下的超时门禁，不改变图片效果断言。

## 工程与文档

- 完善 1.3.5 素材管理与跨平台工作流（`c5972a1`）

## 变更范围

- `src/`：60 个文件
- `extensions/`：5 个文件
- `docs/`：2 个文件
- `.github/`：1 个文件
- `electron-builder.mac-x64.yml/`：1 个文件
- `electron-builder.yml/`：1 个文件
- `package-lock.json/`：1 个文件
- `package.json/`：1 个文件
- `resources/`：1 个文件
- `scripts/`：1 个文件
- `website/`：1 个文件

## 获取更新

- [CNB 安装包发行页](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.5)
- [GitHub 备用发行页](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.5)
- [OrcaBox Chrome 浏览器插件](https://github.com/GarryGit888/OrcaBox-Release/releases/download/v1.3.5/OrcaBox-Chrome-Extension-1.3.5.zip)

| 平台 | 安装包 |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.5/OrcaBox-1.3.5-arm64.dmg) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.5/OrcaBox-1.3.5-x64.dmg) |
| Windows x64 | [安装器](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.5/OrcaBox-1.3.5-win-x64-Setup.exe) / [免安装版](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.5/OrcaBox-1.3.5-win-x64-Portable.exe) |

## 平台与自动更新说明

- macOS 的 DMG 用于人工安装；架构匹配的 Apple Silicon / Intel ZIP 是应用内自动更新载荷，不是普通安装包。
- Windows 自动更新使用 NSIS Setup 安装器与 blockmap；Portable 仅用于手动运行。
- 保留差量下载与 CNB 单范围请求配置；下载需要用户确认，不在应用退出时自动安装。
- 本批打包和原生升级验收的完成情况单独记录于发布审查，不以静态测试或交叉打包代替真实升级验证。

## 生成信息

- 生成范围：`0419faba..HEAD`
- 生成分支：`1.3.5`
- 提交数量：3
- 变更文件数量：75
