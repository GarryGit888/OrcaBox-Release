# OrcaBox 1.2.8 リリースノート

リリース日: 2026-09-26

## 主な更新

- ライブラリのバックグラウンド処理に世代チェックを追加しました。長い音声のデコード・読み込み中に更新、解析、スキャンを実行しても、古い結果で現在のフォルダーがルート表示に置き換わりません。
- 元ファイル再生を維持したまま、メディアプレビューと再生ルーティングを改善しました。動画プレビュー用のプロキシ動画は生成しません。
- ローカル音声認識、字幕編集、AI タグレビュー、クリエイター向けワークフローの安定性を改善しました。

## ダウンロードとインストール

- CNB を主なダウンロード先とし、GitHub Release を予備のダウンロード先として提供します。
- Windows x64 では、インストール先を選べるインストーラーとポータブル版を提供します。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.2.8)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.2.8)

## プラットフォームについて

- macOS では Apple Silicon 用と Intel 用の DMG を提供します。macOS ZIP は公開しません。現在のパッケージは未署名のため、初回起動時に「プライバシーとセキュリティ」で許可が必要になる場合があります。
- Windows x64 ではインストーラーとポータブル版を提供します。インストーラーは既定でユーザー単位のインストールで、保存先を変更できます。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.8/OrcaBox-1.2.8-arm64.dmg) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.8/OrcaBox-1.2.8-x64.dmg) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.8/OrcaBox-1.2.8-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.2.8/OrcaBox-1.2.8-win-x64-Portable.exe) |
| Chrome extension | [ZIP](https://github.com/GarryGit888/OrcaBox-Release/releases/download/v1.2.8/OrcaBox-Chrome-Extension-1.2.8.zip) |
