# OrcaBox 1.3.4 リリースノート

リリース日: 2026-10-12

## 主な更新

- 移動パネルのスクロール安定性：移動の進捗状態を専用 store に分離し、進捗バーをローカル購読に変更。大規模ライブラリでも「素材を移動 / フォルダを移動」パネルのスクロールで画面全体がちらつかなくなりました。
- 中ボタンのスクロールで素材グリッドが誤って拡大縮小されなくなりました（MX サイドホイールのズームは従来どおり）。
- Intel Mac 自動更新の修正：バンドル入れ替えができない場合に必ず失敗するシステムアップデータへの暗黙のフォールバックを廃止し、検証済みペイロードを保持したまま具体的な理由と DMG 手動インストールの案内を表示します。
- DaVinci 取り込みの診断：逆引き DNS が応答しない場合に原因と修復手順を表示し、「Resolve 未起動」という誤表示を解消。「新機能」パネルのバージョン選択も修正しました。

## ダウンロードとインストール

- CNB を主なダウンロード先とし、GitHub Release を予備のダウンロード先として提供します。
- Windows x64 では、インストール先を選べるインストーラーとポータブル版を提供します。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.4)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.4)

## プラットフォームについて

- macOS では Apple Silicon 用と Intel 用の DMG を提供します。対応する ZIP はアプリ内自動更新の載荷として保持します。現在のパッケージは未署名のため、初回起動時に「プライバシーとセキュリティ」で許可が必要になる場合があります。
- Windows x64 ではインストーラーとポータブル版を提供します。インストーラーは既定でユーザー単位のインストールで、保存先を変更できます。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.4/OrcaBox-1.3.4-win-x64-Portable.exe) |
