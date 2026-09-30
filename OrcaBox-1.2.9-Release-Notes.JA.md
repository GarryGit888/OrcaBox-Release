# OrcaBox 1.2.9 リリースノート

リリース日: 2026-09-30

## 主な更新

- macOS のアプリ内自動アップデートを完全対応：新しいバージョンを検出すると、差分ダウンロードとアーキテクチャ別の ZIP 更新ペイロードでアプリ内から直接ダウンロード・インストールでき、DMG の手動ダウンロードが不要になりました。
- Windows の設定ウィンドウでタイトルバーの閉じるボタンが反応しない問題を修正しました。
- 拡張機能の状態変化が設定画面へ即時反映されます。更新フィードにはデュアルアーキテクチャのマージと公開前検証ツールを追加しました。

## ダウンロードとインストール

- CNB を主なダウンロード先とし、GitHub Release を予備のダウンロード先として提供します。
- Windows x64 では、インストール先を選べるインストーラーとポータブル版を提供します。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.2.9)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.9)

## プラットフォームについて

- macOS では Apple Silicon 用と Intel 用の DMG を提供します。対応する ZIP はアプリ内自動更新の載荷として保持します。現在のパッケージは未署名のため、初回起動時に「プライバシーとセキュリティ」で許可が必要になる場合があります。
- Windows x64 ではインストーラーとポータブル版を提供します。インストーラーは既定でユーザー単位のインストールで、保存先を変更できます。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.9/OrcaBox-1.2.9-win-x64-Portable.exe) |
