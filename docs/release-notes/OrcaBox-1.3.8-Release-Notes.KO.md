# OrcaBox 1.3.8 릴리스 노트

릴리스 날짜: 2026-10-23

## 주요 업데이트

- 英文字幕按单词数断行：台词工作台的行宽预算按字幕实际使用的文字切换。
- 拆分提示词升级到 v4：新默认提示词按拉丁文字规则重写（每行单词/字符上限、不得以冠词/介词/连词/助动词结尾、不留单词尾巴、不改写原文），并迁移到独立存储键。
- HTML 预览复制排版（含图片）：HTML 预览工具栏新增「复制排版」按钮，按当前显示效果把整篇文章复制为富文本，可直接粘贴到公众号、知乎、Notion 等编辑器的正文中。
- Pinterest 以图搜图（内置插件）：在资料库选中一张图片，点工具栏「Pinterest 识图」或资产右键菜单，独立面板会用这张图自动发起 Pinterest Lens 识图，结果以瀑布流展示，滚动自动加载更多相似图。
- Pinterest 看板浏览与关键词搜索：面板标题栏可切换「识图 / 看板 / 搜索」三个数据源。
- 大图缩放与相似推荐：点开任意一张图，左侧为大图、右侧为「更多像这样的」相似图瀑布流，点击右栏图片直接切换查看。
- 应用级账号登录（小红书 / 抖音）：设置 → 网络新增「账号登录」分区。
- 字幕碎片合并：窗口化语音识别按发声段切窗，连续英文常被切出「This is Oppo's」「brand new Find X」这类 2–3 词碎片，每条停留不到一秒。

## 다운로드 및 설치

- CNB가 기본 다운로드 채널이며 GitHub Release는 보조 다운로드 채널입니다.
- Windows x64에는 설치 경로를 선택할 수 있는 설치 프로그램과 포터블 버전이 제공됩니다.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.8)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.8)

## 플랫폼 안내

- macOS는 Apple Silicon 및 Intel용 DMG를 각각 제공합니다. 대응 ZIP은 앱 내 자동 업데이트용 페이로드로 유지합니다. 현재 패키지는 서명되지 않았으므로 첫 실행 시 개인 정보 보호 및 보안 설정에서 허용해야 할 수 있습니다.
- Windows x64 설치 프로그램과 포터블 버전을 제공합니다. 설치 프로그램은 기본적으로 현재 사용자용으로 설치되며 경로를 변경할 수 있습니다.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.8/OrcaBox-1.3.8-win-x64-Portable.exe) |
