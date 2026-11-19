# OrcaBox 1.4.3 リリースノート

リリース日: 2026-11-19

## 主な更新

- 素材面板回到顶部按钮：快速向上滚动时，素材面板底部居中会出现回到顶部按钮，点击直接回到列表顶部；静止约 1.5 秒后自动隐藏，不遮挡内容。
- 素材卡片名称更完整：卡片名称现在会显示文件扩展名并按可用宽度自适应换行（最多两行），长文件名不再被无提示地截断。
- 代码类素材彩色预览：代码文件的卡片预览带语法着色，浏览时更容易区分文件类型。
- Office 文档预览加速：Excel、Word、PowerPoint 的预览文件按需生成并缓存，重复打开同一文档明显更快；组件下载与预览状态提示更清楚。
- 来源文件夹卡片：卡片按面板宽度自适应排列，数量多时不再挤压；文件夹磨砂与斜切边缘表现更自然；文件夹内切换子目录的响应速度提升。
- 文件夹搜索记录最近访问：在文件夹选择与搜索中会记住最近访问位置，减少重复定位。
- 大素材库启动更快：优化了启动阶段的查询与后台任务调度，素材量很大的库启动等待更短，后台索引不再与界面争抢。
- 浅色主题与音频预览界面：浅色主题下的面板层次与对比度修正，音频预览界面细节对齐统一设计语言。

## ダウンロードとインストール

- CNB を主なダウンロード先とし、GitHub Release を予備のダウンロード先として提供します。
- Windows x64 では、インストール先を選べるインストーラーとポータブル版を提供します。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.3)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.3)

## プラットフォームについて

- macOS では Apple Silicon 用と Intel 用の DMG を提供します。対応する ZIP はアプリ内自動更新の載荷として保持します。現在のパッケージは未署名のため、初回起動時に「プライバシーとセキュリティ」で許可が必要になる場合があります。
- Windows x64 ではインストーラーとポータブル版を提供します。インストーラーは既定でユーザー単位のインストールで、保存先を変更できます。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-win-x64-Portable.exe) |
