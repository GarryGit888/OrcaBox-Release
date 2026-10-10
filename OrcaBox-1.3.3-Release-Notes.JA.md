# OrcaBox 1.3.3 リリースノート

リリース日: 2026-10-10

## 主な更新

- 移動ダイアログにパンくずリストを追加：「素材を移動 / フォルダを移動」の上部に完全な移動先パスを表示し、上位のパス segment をクリックして直接ジャンプできます。
- Windows 修正：内蔵 FFmpeg のフィルター引数不足でサムネイルが生成されない問題と、埋め込み AI 推論エンジンが起動直後に終了する問題（llama.dll/ggml.dll/mtmd.dll 不足）を修正。1.2.9〜1.3.2 の Windows パッケージが対象です。
- Windows のネイティブ再生が停止した場合（音のみで画面が固まる）は内蔵プレーヤーへ自動切替；大規模ライブラリのスクロール凍結を修正；WeChat ドラッグ取り込みと DaVinci 診断を改善。

## ダウンロードとインストール

- CNB を主なダウンロード先とし、GitHub Release を予備のダウンロード先として提供します。
- Windows x64 では、インストール先を選べるインストーラーとポータブル版を提供します。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.3)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.3)

## プラットフォームについて

- macOS では Apple Silicon 用と Intel 用の DMG を提供します。対応する ZIP はアプリ内自動更新の載荷として保持します。現在のパッケージは未署名のため、初回起動時に「プライバシーとセキュリティ」で許可が必要になる場合があります。
- Windows x64 ではインストーラーとポータブル版を提供します。インストーラーは既定でユーザー単位のインストールで、保存先を変更できます。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.3/OrcaBox-1.3.3-win-x64-Portable.exe) |
