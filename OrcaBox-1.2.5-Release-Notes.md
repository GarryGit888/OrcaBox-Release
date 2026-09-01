# OrcaBox 1.2.5 发行说明

发布日期：2026-08-31

> 本版本围绕 新增功能、优化改进、问题修复 持续完善素材管理、媒体预览与跨平台使用体验。

## 新增功能

- Add packaged app runtime smoke to Windows release pipeline（`efb8ef3`）
- 添加资源卡片显示控制和质量重新分析批量处理功能（`4d75d9c`）
- add password-authenticated folder lock removal and improve locked folder protections（`b060459`）

## 优化改进

- Optimize media preview loading and metadata workflows（`12fa71c`）
- Improve media previews and standardize release artifacts（`33d8083`）
- Improve media preview and synchronized asset playback（`f496a4d`）
- Improve OrcaBox desktop workflows and media previews（`22b558c`）

## 问题修复

- Fix release artifact names to include extension dot（`8243c08`）
- Merge worktree branch fix-display-options-bug-K1DSLK（`927e1d8`）

## 工程与文档

- Harden 1.2.5 and unblock media metadata/thumbnail pipelines（`c3b4f8f`）
- Align Windows artifact checks with standardized artifact names（`6ab2b60`）
- Pass GitHub token via env for FFmpeg asset lookup（`e032256`）
- Resolve FFmpeg win64-lgpl-shared asset dynamically in Windows pipeline（`80f9b98`）
- Upgrade Electron to 43.4.1 for native macOS 26+ window styling（`dc556df`）
- Use system default macOS traffic light position（`71661dd`）
- sync OrcaBox 1.2.5 updates（`d47f060`）
- Merge worktree branch code-review-opt-feedback-nIdPF5（`2d2ff42`）

## 变更范围

- `src/`：143 个文件
- `scripts/`：8 个文件
- `doc/`：5 个文件
- `extensions/`：3 个文件
- `plugins-dev/`：3 个文件
- `.github/`：2 个文件
- `website/`：2 个文件
- `.gitignore/`：1 个文件
- `dev-app-update.yml/`：1 个文件
- `electron-builder.mac-x64.yml/`：1 个文件
- `electron-builder.yml/`：1 个文件
- `index-B67Mgf6a.js/`：1 个文件

## 获取更新

- [CNB 安装包发行页](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.2.5)
- [GitHub 备用发行页](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.5)
- [OrcaBox Chrome 浏览器插件](https://github.com/GarryGit888/OrcaBox-Release/releases/download/v1.2.5/OrcaBox-Chrome-Extension-1.2.5.zip)

## 生成信息

- 生成范围：`v1.2.4..HEAD`
- 生成分支：`1.2.5`
- 提交数量：17
- 变更文件数量：176
