# OrcaBox 1.3.8 リリースノート

リリース日: 2026-10-23

## 主な更新

- 英文字幕按单词数断行：台词工作台的行宽预算按字幕实际使用的文字切换。
- 拆分提示词升级到 v4：新默认提示词按拉丁文字规则重写（每行单词/字符上限、不得以冠词/介词/连词/助动词结尾、不留单词尾巴、不改写原文），并迁移到独立存储键。
- HTML 预览复制排版（含图片）：HTML 预览工具栏新增「复制排版」按钮，按当前显示效果把整篇文章复制为富文本，可直接粘贴到公众号、知乎、Notion 等编辑器的正文中。
- Pinterest 以图搜图（内置插件）：在资料库选中一张图片，点工具栏「Pinterest 识图」或资产右键菜单，独立面板会用这张图自动发起 Pinterest Lens 识图，结果以瀑布流展示，滚动自动加载更多相似图。
- Pinterest 看板浏览与关键词搜索：面板标题栏可切换「识图 / 看板 / 搜索」三个数据源。
- 大图缩放与相似推荐：点开任意一张图，左侧为大图、右侧为「更多像这样的」相似图瀑布流，点击右栏图片直接切换查看。
- 应用级账号登录（小红书 / 抖音）：设置 → 网络新增「账号登录」分区。
- 字幕碎片合并：窗口化语音识别按发声段切窗，连续英文常被切出「This is Oppo's」「brand new Find X」这类 2–3 词碎片，每条停留不到一秒。

## ダウンロードとインストール

- CNB を主なダウンロード先とし、GitHub Release を予備のダウンロード先として提供します。
- Windows x64 では、インストール先を選べるインストーラーとポータブル版を提供します。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.8)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.8)

## プラットフォームについて

- macOS では Apple Silicon 用と Intel 用の DMG を提供します。対応する ZIP はアプリ内自動更新の載荷として保持します。現在のパッケージは未署名のため、初回起動時に「プライバシーとセキュリティ」で許可が必要になる場合があります。
- Windows x64 ではインストーラーとポータブル版を提供します。インストーラーは既定でユーザー単位のインストールで、保存先を変更できます。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-win-x64-Portable.exe) |
