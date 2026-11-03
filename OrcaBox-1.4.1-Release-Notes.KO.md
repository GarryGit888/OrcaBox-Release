# OrcaBox 1.4.1 릴리스 노트

릴리스 날짜: 2026-11-02

## 주요 업데이트

- 独立反馈面板：从「帮助与支持 → 反馈建议」打开应用内面板，选择反馈类型、填写描述，并自动附带当前窗口截图（可删除或补充图片）。
- 飞书反馈通道：提交内容发送到维护者配置的反馈服务并推送到飞书反馈渠道，便于快速跟进；反馈服务由维护者按需配置，客户端不保存仓库或飞书访问令牌。
- Issue 同步结果可见：当反馈服务配置了 GitHub/CNB Issue 同步时，提交结果会返回已创建的 Issue 链接或同步失败原因，面板内直接展示，不再静默失败。
- 超大图片缩略图错峰生成：约 2000 万像素以上的常见栅格图片使用独立低并发队列，避免多张超大图片同时解码争用 CPU 与内存；网格缩略图与打开大图不再互相拖慢。
- 表格封面缓存优先：XLSX/PPTX 卡片先检查新鲜且可用的封面缓存，已有有效缓存时直接显示，不再重复解析工作簿或转换 PDF；没有可用缓存时才进入原有生成流程。
- 音频详情栏入口收敛：合并音频属性栏中重复出现的 AI 识别页签，只保留一个入口，避免同一能力出现两个相似按钮。
- 表格缩略图长时间加载：修复 XLSX 卡片在已存在有效封面时仍先解析源文件、导致封面长时间停留在加载状态的问题；PDF 预览缓存也会在源文件解析前优先复用。
- 反馈面板提交失败：修复反馈服务返回 Issue 同步结果或非预期响应时面板提交报错的问题，提交结果与错误信息现在可以被正确解析和展示。

## 다운로드 및 설치

- CNB가 기본 다운로드 채널이며 GitHub Release는 보조 다운로드 채널입니다.
- Windows x64 1.4.1은 NSIS 설치 프로그램과 포터블 버전으로 제공됩니다.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.1)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.1)

## 플랫폼 안내

- macOS는 Apple Silicon 및 Intel용 DMG를 각각 제공합니다. 대응 ZIP은 앱 내 자동 업데이트용 페이로드로 유지합니다. 현재 패키지는 서명되지 않았으므로 첫 실행 시 개인 정보 보호 및 보안 설정에서 허용해야 할 수 있습니다.
- Windows 1.4.1의 NSIS 설치 프로그램과 blockmap은 자동 업데이트에 사용하며 포터블 버전은 수동 다운로드용입니다.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.1/OrcaBox-1.4.1-win-x64-Portable.exe) |
