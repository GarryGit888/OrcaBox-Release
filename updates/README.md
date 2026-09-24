# OrcaBox 官方更新目录

本目录（部署后对应 `https://orcabox.app/updates/`）供应用内 `electron-updater` 读取。

## 一键准备上传包

打包完成后在仓库根目录执行：

```bash
npm run update:prepare
```

脚本会：

1. 读取 `dist/latest.yml`、`dist/latest-mac.yml`
2. 复制 yml 及其引用的安装包 / blockmap
3. 输出到 `output/update-feed/`（可直接 rsync 到 CDN）

若 `dist` 里没有 `latest*.yml`，请先用带 `publish` 配置的 `electron-builder` 重新打包。

## 需要上传的文件

### Windows
- `latest.yml`
- `OrcaBox Setup <version>.exe`
- `OrcaBox Setup <version>.exe.blockmap`

### macOS
- `latest-mac.yml`（用于检测新版和展示发行说明）
- `OrcaBox-<version>-arm64.dmg`
- `OrcaBox-<version>-x64.dmg`
- macOS 客户端发现新版后会打开 CNB 发行页；DMG 需要用户完成拖拽安装，不能作为应用内静默更新载荷

## 校验

打开：

- https://orcabox.app/updates/latest.yml
- https://orcabox.app/updates/latest-mac.yml

应能直接下载 YAML，且其中的 `path` / `files[].url` 与同目录安装包文件名一致。

## 客户端行为

- 启动约 20 秒后静默检查；之后每 6 小时检查一次
- 有更新时侧栏「设置」右侧显示更新图标
- Windows 用户点击后下载；完成后弹窗「立即重启 / 稍后」
- macOS 用户点击后打开 CNB 的 DMG 下载页并手动完成安装
- 设置 → 概览 顶部也有「关于与更新」面板（手动检查 / 下载 / 重启）
