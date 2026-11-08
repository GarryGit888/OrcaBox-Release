# OrcaBox 1.4.2 リリースノート

リリース日: 2026-11-08

## 主な更新

- 资产库图标与显示名称可自定义：切换面板“...”菜单「更改图标与名称…」上传图标（拖拽/选择/粘贴，缩放平移取景，正方形固定圆角显示）并修改显示名称（仅显示名，不重命名文件夹）。
- 图片批量裁剪插件：新的内置插件打开独立面板——左侧图片队列、中间裁剪舞台、右侧比例预设。
- 视频质检插件：新的外部插件为单个或多个视频做交付前体检。
- AI 打标签与描述可切换云端模型：两项功能可分别选择本地或云端视觉端点与模型，配置入口同时位于“设置 → AI 智能 → 素材识别模型”和“帮助与支持 → 模型与用量 → 模型管理 → 素材识别模型”。
- AI 模型与用量面板：新增「模型与用量」独立面板（帮助与支持菜单 →「模型与用量」），把各 AI 功能的调用量、Token 消耗、耗时与预估费用汇总到同一口径：可按功能、模型与供应商筛选，查看每日趋势与功能归因，「请求日志」逐条列出时间、模型、Token 与费用，数据每 5 秒自动刷新。
- 跨应用拖入导入（macOS）：macOS 上可以直接把微信、照片等其他桌面应用里尚未保存到磁盘的文件拖进 OrcaBox：应用会以「文件承诺」方式在拖放结束时接收原始文件，并按普通导入流程处理入库。
- Shift+空格 快速搜索插件：主窗口按 Shift+空格 直接弹出插件搜索框，打开时只是一个输入框，输入关键词后才出结果，不会一上来铺满插件列表。
- 插件独立分发：自 1.4.2 起，外部插件不再随安装包捆绑（`resources/bundled-plugins` 不再随包拷贝），改为独立开发、独立供应：通过插件目录 feed（`plugin-index.json` + 远程 zip，安装时做 https/SHA-256/解压限额校验）或手动安装 zip 获取，后续在插件中心独立升级。

## ダウンロードとインストール

- CNB を主なダウンロード先とし、GitHub Release を予備のダウンロード先として提供します。
- Windows x64 では、インストール先を選べるインストーラーとポータブル版を提供します。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.2)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.2)

## プラットフォームについて

- macOS では Apple Silicon 用と Intel 用の DMG を提供します。対応する ZIP はアプリ内自動更新の載荷として保持します。現在のパッケージは未署名のため、初回起動時に「プライバシーとセキュリティ」で許可が必要になる場合があります。
- Windows x64 ではインストーラーとポータブル版を提供します。インストーラーは既定でユーザー単位のインストールで、保存先を変更できます。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-win-x64-Portable.exe) |
