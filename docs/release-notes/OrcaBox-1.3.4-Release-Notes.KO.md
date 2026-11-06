# OrcaBox 1.3.4 릴리스 노트

릴리스 날짜: 2026-10-12

## 주요 업데이트

- 이동 패널 스크롤 안정성: 진행 상태를 전용 store로 분리하고 진행 표시줄을 로컬 구독으로 변경해, 대규모 라이브러리에서도 "에셋 이동 / 폴더 이동" 패널 스크롤 시 창 전체가 깜빡이지 않습니다.
- 마우스 가운데 버튼 스크롤이 더 이상 그리드 확대/축소를 잘못 트리거하지 않습니다(MX 사이드 휠 줌은 그대로).
- Intel Mac 자동 업데이트 수정: 번들 교체가 막힐 때 반드시 실패하는 시스템 업데이터로의 조용한 폴백을 제거하고, 검증된 페이로드를 유지한 채 구체적인 원인과 DMG 수동 설치 안내를 표시합니다.
- DaVinci 가져오기 진단: 역방향 DNS 조회가 멈출 때 원인과 해결 안내를 표시하고 "Resolve 미실행" 오표기를 없앴습니다. "새 기능" 패널의 버전 선택도 정상화했습니다.

## 다운로드 및 설치

- CNB가 기본 다운로드 채널이며 GitHub Release는 보조 다운로드 채널입니다.
- Windows x64에는 설치 경로를 선택할 수 있는 설치 프로그램과 포터블 버전이 제공됩니다.
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.4)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.4)

## 플랫폼 안내

- macOS는 Apple Silicon 및 Intel용 DMG를 각각 제공합니다. 대응 ZIP은 앱 내 자동 업데이트용 페이로드로 유지합니다. 현재 패키지는 서명되지 않았으므로 첫 실행 시 개인 정보 보호 및 보안 설정에서 허용해야 할 수 있습니다.
- Windows x64 설치 프로그램과 포터블 버전을 제공합니다. 설치 프로그램은 기본적으로 현재 사용자용으로 설치되며 경로를 변경할 수 있습니다.

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-win-x64-Portable.exe) |
