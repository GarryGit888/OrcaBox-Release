# OrcaBox 1.4.2 릴리스 노트

릴리스 날짜: 2026-11-08

## 주요 업데이트

- 资产库图标与显示名称可自定义：切换面板“...”菜单「更改图标与名称…」上传图标（拖拽/选择/粘贴，缩放平移取景，正方形固定圆角显示）并修改显示名称（仅显示名，不重命名文件夹）。
- 图片批量裁剪插件：新的内置插件打开独立面板——左侧图片队列、中间裁剪舞台、右侧比例预设。
- 视频质检插件：新的外部插件为单个或多个视频做交付前体检。
- AI 打标签与描述可切换云端模型：两项功能可分别选择本地或云端视觉端点与模型，配置入口同时位于“设置 → AI 智能 → 素材识别模型”和“帮助与支持 → 模型与用量 → 模型管理 → 素材识别模型”。
- AI 模型与用量面板：新增「模型与用量」独立面板（帮助与支持菜单 →「模型与用量」），把各 AI 功能的调用量、Token 消耗、耗时与预估费用汇总到同一口径：可按功能、模型与供应商筛选，查看每日趋势与功能归因，「请求日志」逐条列出时间、模型、Token 与费用，数据每 5 秒自动刷新。
- 跨应用拖入导入（macOS）：macOS 上可以直接把微信、照片等其他桌面应用里尚未保存到磁盘的文件拖进 OrcaBox：应用会以「文件承诺」方式在拖放结束时接收原始文件，并按普通导入流程处理入库。
- Shift+空格 快速搜索插件：主窗口按 Shift+空格 直接弹出插件搜索框，打开时只是一个输入框，输入关键词后才出结果，不会一上来铺满插件列表。
- 插件独立分发：自 1.4.2 起，外部插件不再随安装包捆绑（`resources/bundled-plugins` 不再随包拷贝），改为独立开发、独立供应：通过插件目录 feed（`plugin-index.json` + 远程 zip，安装时做 https/SHA-256/解压限额校验）或手动安装 zip 获取，后续在插件中心独立升级。

## 다운로드 및 설치

- CNB가 기본 다운로드 채널이며 GitHub Release는 보조 다운로드 채널입니다.
- Windows x64에는 설치 경로를 선택할 수 있는 설치 프로그램과 포터블 버전이 제공됩니다.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.2)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.2)

## 플랫폼 안내

- macOS는 Apple Silicon 및 Intel용 DMG를 각각 제공합니다. 대응 ZIP은 앱 내 자동 업데이트용 페이로드로 유지합니다. 현재 패키지는 서명되지 않았으므로 첫 실행 시 개인 정보 보호 및 보안 설정에서 허용해야 할 수 있습니다.
- Windows x64 설치 프로그램과 포터블 버전을 제공합니다. 설치 프로그램은 기본적으로 현재 사용자용으로 설치되며 경로를 변경할 수 있습니다.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.2/OrcaBox-1.4.2-win-x64-Portable.exe) |
