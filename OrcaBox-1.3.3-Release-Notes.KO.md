# OrcaBox 1.3.3 릴리스 노트

릴리스 날짜: 2026-10-10

## 주요 업데이트

- 이동 대상 경로 표시줄: "에셋 이동 / 폴더 이동" 대화 상자 상단에 전체 대상 경로가 표시되며, 상위 경로 세그먼트를 클릭해 바로 이동할 수 있습니다.
- Windows 수정: 내장 FFmpeg의 필터 인자 부족으로 썸네일이 생성되지 않던 문제와 내장 AI 추론 엔진이 시작 직후 종료되던 문제(llama.dll/ggml.dll/mtmd.dll 누락)를 수정했습니다. 1.2.9–1.3.2의 Windows 패키지가 해당됩니다.
- Windows 네이티브 재생이 멈출 때(소리만 나고 화면 정지) 내장 플레이어로 자동 전환; 대규모 라이브러리 스크롤 정지 수정; WeChat 드래그 가져오기와 DaVinci 진단 개선.

## 다운로드 및 설치

- CNB가 기본 다운로드 채널이며 GitHub Release는 보조 다운로드 채널입니다.
- Windows x64에는 설치 경로를 선택할 수 있는 설치 프로그램과 포터블 버전이 제공됩니다.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.3)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.3)

## 플랫폼 안내

- macOS는 Apple Silicon 및 Intel용 DMG를 각각 제공합니다. 대응 ZIP은 앱 내 자동 업데이트용 페이로드로 유지합니다. 현재 패키지는 서명되지 않았으므로 첫 실행 시 개인 정보 보호 및 보안 설정에서 허용해야 할 수 있습니다.
- Windows x64 설치 프로그램과 포터블 버전을 제공합니다. 설치 프로그램은 기본적으로 현재 사용자용으로 설치되며 경로를 변경할 수 있습니다.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-win-x64-Portable.exe) |
