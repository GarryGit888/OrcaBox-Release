# OrcaBox 1.3.9 릴리스 노트

릴리스 날짜: 2026-10-30

## 주요 업데이트

- 视频 LUT 调色：视频预览顶部工具栏新增 LUT 弹层，直接加载 .cube 文件实时套色，附强度滑条、批量套用与达芬奇式缩略图面板。
- 照片 AI 语义蒙版：一键识别画面主体生成选区，新增颜色范围与明度范围蒙版按取样自动扩展；蒙版编辑升级为三层渲染管线，拖参数实时刷新。
- AI 打标签批量化：详情栏点击即可打标，多选批量识别在后台运行、切换选中不中断，网格卡片显示进度徽标；设置中可调置信度阈值（默认 95%），低于阈值的候选标签不自动写入。
- Pinterest 区域框选识图：大图查看器拖出矩形选区即可只搜局部相似；瀑布流显示「已采集」去重角标，采集自动回链来源并按看板分类，右栏支持滚动无限加载与色系筛选。
- 照片调色插件批次：磨皮等人像精修能力上线，插件中心支持远程安装，台词工作台提供独立窗口。
- 图像对比工具：插件中心新增并排/滑动对比两种查看方式。
- 调色引擎 GPU 加速：显影预览接入 WebGL2，滑杆拖拽即时出图，大图也能实时刷新；调色面板重构为 Camera Raw 式右侧竖栏（调整/预设/蒙版/人像/裁剪/修复/液化）。
- 预设体系：预设分组「热门 / 我的」，我的预设本地保存并带参数缩略图；按 C 直接进入图片裁剪工具。

## 다운로드 및 설치

- CNB가 기본 다운로드 채널이며 GitHub Release는 보조 다운로드 채널입니다.
- Windows x64에는 설치 경로를 선택할 수 있는 설치 프로그램과 포터블 버전이 제공됩니다.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.9)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.9)

## 플랫폼 안내

- macOS는 Apple Silicon 및 Intel용 DMG를 각각 제공합니다. 대응 ZIP은 앱 내 자동 업데이트용 페이로드로 유지합니다. 현재 패키지는 서명되지 않았으므로 첫 실행 시 개인 정보 보호 및 보안 설정에서 허용해야 할 수 있습니다.
- Windows x64 설치 프로그램과 포터블 버전을 제공합니다. 설치 프로그램은 기본적으로 현재 사용자용으로 설치되며 경로를 변경할 수 있습니다.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-win-x64-Portable.exe) |
