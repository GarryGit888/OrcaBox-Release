# OrcaBox 1.3.1 リリースノート

リリース日: 2026-10-03

## 主な更新

- インスペクター情報カードの表示設定：単一選択では情報カード領域を丸ごと表示/非表示でき、複数選択では各バッチカードを個別に切り替えられます（設定 → ブラウズ → インスペクターカード）。
- アプリ内「新機能」ガイド：更新後にヘルプボタンにバッジとバブルが表示され、ページ送りできる機能カードで更新内容を紹介します。
- アセットグリッドのマウスホイールをリニアスクロールに変更し、高速スクロールがより追従するように。トラックパッドとキーボード操作は従来どおりです。
- ネイティブ再生のセルフヒーリング：読み込みが停滞すると自動でブラウザエンジンに切り替え、回復後はネイティブに戻れます。Windows の mpv ブラック画面で再生経路を占有し続ける問題を修正。
- モデルダウンロード：複数ファイルの進捗を集約表示し、ミラー切替でリセットされなくなりました。手動で配置したモデルも正しく認識されます。

## ダウンロードとインストール

- CNB を主なダウンロード先とし、GitHub Release を予備のダウンロード先として提供します。
- Windows x64 では、インストール先を選べるインストーラーとポータブル版を提供します。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.1)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.1)

## プラットフォームについて

- macOS では Apple Silicon 用と Intel 用の DMG を提供します。対応する ZIP はアプリ内自動更新の載荷として保持します。現在のパッケージは未署名のため、初回起動時に「プライバシーとセキュリティ」で許可が必要になる場合があります。
- Windows x64 ではインストーラーとポータブル版を提供します。インストーラーは既定でユーザー単位のインストールで、保存先を変更できます。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.1/OrcaBox-1.3.1-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.1/OrcaBox-1.3.1-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.1/OrcaBox-1.3.1-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.1/OrcaBox-1.3.1-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.1/OrcaBox-1.3.1-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.1/OrcaBox-1.3.1-win-x64-Portable.exe) |
