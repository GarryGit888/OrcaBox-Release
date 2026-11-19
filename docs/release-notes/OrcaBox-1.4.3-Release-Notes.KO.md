# OrcaBox 1.4.3 릴리스 노트

릴리스 날짜: 2026-11-19

## 주요 업데이트

- 素材面板回到顶部按钮：快速向上滚动时，素材面板底部居中会出现回到顶部按钮，点击直接回到列表顶部；静止约 1.5 秒后自动隐藏，不遮挡内容。
- 素材卡片名称更完整：卡片名称现在会显示文件扩展名并按可用宽度自适应换行（最多两行），长文件名不再被无提示地截断。
- 代码类素材彩色预览：代码文件的卡片预览带语法着色，浏览时更容易区分文件类型。
- Office 文档预览加速：Excel、Word、PowerPoint 的预览文件按需生成并缓存，重复打开同一文档明显更快；组件下载与预览状态提示更清楚。
- 来源文件夹卡片：卡片按面板宽度自适应排列，数量多时不再挤压；文件夹磨砂与斜切边缘表现更自然；文件夹内切换子目录的响应速度提升。
- 文件夹搜索记录最近访问：在文件夹选择与搜索中会记住最近访问位置，减少重复定位。
- 大素材库启动更快：优化了启动阶段的查询与后台任务调度，素材量很大的库启动等待更短，后台索引不再与界面争抢。
- 浅色主题与音频预览界面：浅色主题下的面板层次与对比度修正，音频预览界面细节对齐统一设计语言。

## 다운로드 및 설치

- CNB가 기본 다운로드 채널이며 GitHub Release는 보조 다운로드 채널입니다.
- Windows x64에는 설치 경로를 선택할 수 있는 설치 프로그램과 포터블 버전이 제공됩니다.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.3)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.3)

## 플랫폼 안내

- macOS는 Apple Silicon 및 Intel용 DMG를 각각 제공합니다. 대응 ZIP은 앱 내 자동 업데이트용 페이로드로 유지합니다. 현재 패키지는 서명되지 않았으므로 첫 실행 시 개인 정보 보호 및 보안 설정에서 허용해야 할 수 있습니다.
- Windows x64 설치 프로그램과 포터블 버전을 제공합니다. 설치 프로그램은 기본적으로 현재 사용자용으로 설치되며 경로를 변경할 수 있습니다.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.3/OrcaBox-1.4.3-win-x64-Portable.exe) |
