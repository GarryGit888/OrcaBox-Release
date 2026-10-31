<p align="center"><img src="./assets/orcabox-icon.png" width="104" alt="OrcaBox icon"></p>
<h1 align="center">OrcaBox</h1>
<p align="center"><strong>クリエイターのためのローカル優先・マルチフォーマット素材管理アプリ</strong></p>
<p align="center">元ファイルを移動せず、複数のディスクやプロジェクトフォルダーに散らばった素材を検索・プレビュー・再利用できるライブラリにまとめます。</p>

<p align="center">
  <a href="./README.md"><img src="https://img.shields.io/badge/简体中文-2B2F38?style=for-the-badge&labelColor=15171C" alt="简体中文"></a>
  <a href="./README_EN.md"><img src="https://img.shields.io/badge/English-2B2F38?style=for-the-badge&labelColor=15171C" alt="English"></a>
  <a href="./README_JA.md"><img src="https://img.shields.io/badge/日本語-7C6FF7?style=for-the-badge&labelColor=15171C" alt="日本語"></a>
  <a href="./README_KO.md"><img src="https://img.shields.io/badge/한국어-2B2F38?style=for-the-badge&labelColor=15171C" alt="한국어"></a>
</p>
<p align="center"><img src="https://img.shields.io/badge/Release-v1.4.0-7C6FF7?style=flat-square" alt="Version 1.4.0"> <img src="https://img.shields.io/badge/macOS-12%2B-111318?style=flat-square&logo=apple" alt="macOS 12+"> <img src="https://img.shields.io/badge/Windows-10%2F11_x64-111318?style=flat-square&logo=windows11" alt="Windows 10/11 x64"> <img src="https://img.shields.io/badge/Local--first-Data_stays_local-1F9D75?style=flat-square" alt="Local-first"></p>
<p align="center"><a href="https://garrygit888.github.io/OrcaBox-Release/">公式サイト</a> · <a href="https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.0">CNB ダウンロード</a> · <a href="https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.0">GitHub ダウンロード</a> · <a href="./OrcaBox-1.4.0-Release-Notes.JA.md">リリースノート</a></p>


<img src="./assets/product-1.2.7-hero.webp" width="100%" alt="OrcaBox ローカル素材ライブラリ">

## OrcaBox について

OrcaBox は映像編集者、デザイナー、モーションアーティスト、写真家、クリエイティブチーム向けのデスクトップアプリです。既存フォルダーを追加すると、元の構成を保ったままローカル索引を作成し、プレビュー、検索、タグ、コレクション、評価、カラー絞り込み、AI 整理を一つの画面に集約します。

| 方針 | 内容 |
| --- | --- |
| ローカル優先 | 索引、データベース、主要な分析を端末内で処理します。 |
| ゼロコピー | 元ファイルを移動・複製せず、現在の保存場所をそのまま利用します。 |
| マルチフォーマット | 画像、動画、音声、Lottie、3D、フォント、文書、制作ファイルをまとめて閲覧できます。 |
| 制作フロー重視 | Web 収集、検索、整理、編集ソフトへの受け渡しを短い導線でつなぎます。 |

## 主な機能

- 内蔵ディスク、外付けディスク、マウント済みストレージ、複数プロジェクトのローカル索引。
- 画像、音声、動画、モーション、3D、フォント、文書など 40 以上の形式をプレビュー。
- キーワード、種類、評価、タグ、色、日付、フォルダーを組み合わせた検索。
- コレクション、スマートフォルダー、評価、お気に入り、メモ、タグ、一括操作。
- 端末内 AI による画像分析、スマートタグ、カラー検索と、任意の外部 API 接続。
- 安定した Lottie ライブプレビュー、音声波形、連続再生。
- プラグイン管理、ブラウザー収集、変換ツール、DaVinci Resolve 連携。
- Apple Silicon、Intel Mac、Windows x64 に対応。

## 最近のハイライト

以下は v1.4.0 – v1.4.0 でリリース済みの主な追加機能です。詳細は[リリースノート](./OrcaBox-1.4.0-Release-Notes.JA.md)をご覧ください。

- **ネット動画ダウンロード** — 独立パネルに YouTube / Bilibili / 抖音（Douyin）/ 小紅書 / Instagram のリンクをまとめて貼り付けてダウンロード。解像度をカードごとに選択でき、ダウンロードしたファイルは自動でライブラリに追加されます。エンジンは自動インストール、中断からの再開と 4K ダウンロードに対応。
- **小紅書ノート一括取り込み** — ノートのリンクを貼るだけで、全画像と Live Photo を一度に取り込み。ログイン後はウォーターマークなしの元画像を保存できます。
- **アカウントログイン** — 設定から小紅書 / 抖音にログイン。認証情報は OrcaBox 独自の分離領域に保存され、システムブラウザーには影響しません。
- **オンデバイス AI** — スマートタグ、セマンティック検索、AI プラグイン生成をすべてローカルで実行。
- **没入型フルスクリーン再生** — 再生中は UI がフェードアウトし、画面がウィンドウ全体に広がります。4K VP9/Opus、HEVC、ProRes、MKV など元ファイルを直接再生し、プロキシ動画は生成しません。
- **台詞ワークベンチ** — ローカル音声認識で字幕を生成。断片は自動マージ、字幕の境界は波形の無音部分にスナップし、SRT / VTT として書き出せます。
- **制作ツール連携** — DaVinci Resolve へワンクリック取り込み、Lightroom / Bridge との評価（XMP）同期。

## プラグイン

プラグインセンターから、制作フローに合わせて内蔵プラグインを有効化できます。

| プラグイン | 機能 |
| --- | --- |
| ネット動画ダウンロード | YouTube / Bilibili / 抖音 / 小紅書 / Instagram のリンクを一括ダウンロード。独立パネル、解像度選択、再開対応 |
| Pinterest 類似画像検索 | ライブラリの画像から Pinterest で類似画像を検索。ボード閲覧・キーワード検索・一括ダウンロードに対応 |
| 楽曲認識 | 再生中の音楽をマルチポイントサンプリングで認識し、結果とカバーをライブラリに保存 |
| AI プラグイン生成 | 自然言語からカスタムプラグインを生成。API リファレンスとコードプレビュー付き |
| Web 収集 | Web 画像やコンテンツをドラッグ＆ドロップでライブラリへ |

## 製品プレビュー

<table>
  <tr><td width="50%"><img src="./assets/ai-tag-review.webp" alt="AI タグ確認"><br><strong>AI スマートタグ</strong><br>素材を一括分析し、確認してタグを書き込みます。</td><td width="50%"><img src="./assets/plugin-manager.webp" alt="プラグイン管理"><br><strong>プラグインセンター</strong><br>制作フローに合わせて機能を管理します。</td></tr>
  <tr><td width="50%"><img src="./assets/product-1.2.1-audio.webp" alt="音声ライブラリ"><br><strong>音声ライブラリ</strong><br>波形、再生、検索、一括整理に対応。</td><td width="50%"><img src="./assets/product-1.2.1-3d.webp" alt="3D プレビュー"><br><strong>インタラクティブ 3D</strong><br>モデル、マテリアル、基本情報を確認できます。</td></tr>
</table>
<p align="center"><img src="./assets/product-1.2.1-lottie.gif" width="720" alt="Lottie ライブプレビュー"><br><sub>Lottie / JSON 素材はグリッド内でもライブ表示を維持します。</sub></p>

## 対応素材

画像・デザイン（PNG / JPG / WEBP / SVG / PSD / AI / EPS / HEIC）、動画（MP4 / MOV / MKV / WebM）、音声（MP3 / WAV / FLAC / AAC）、Lottie / `.lottie`、3D（GLB / GLTF / OBJ / FBX / USDZ）、フォント、PDF、Markdown、Office 文書、Premiere Pro / After Effects / DaVinci Resolve / Final Cut Pro / Sketch などの制作ファイルに対応します。

対応範囲は形式、OS、端末のメディア環境によって異なります。動画は元ファイルを安全なブラウザー直接再生または OS / ネイティブ機能で再生し、プレビュー用の動画プロキシは生成しません。

## ダウンロード

| プラットフォーム | ダウンロード |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-arm64.dmg) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-x64.dmg) |
| Windows x64 | [インストーラー](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-win-x64-Setup.exe) / [ポータブル版](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-win-x64-Portable.exe) |

## 使用言語と技術スタック

<p><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111111" alt="JavaScript"> <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"> <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python"> <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white" alt="C++"> <img src="https://img.shields.io/badge/Objective--C%2B%2B-111318?style=flat-square&logo=apple" alt="Objective-C++"></p>
<p><img src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white" alt="Electron"> <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React"> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"> <img src="https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white" alt="SQLite"></p>

**この公開リリースリポジトリには OrcaBox の非公開ソースコードは含まれません。** インストーラー情報、公開文書、Web サイト、製品画像のみを掲載しています。問題報告は、バージョン、OS、CPU、再現手順、必要な画像やログを添えて [GitHub Issues](https://github.com/GarryGit888/OrcaBox-Release/issues) へお寄せください。

---
<p align="center">Copyright 2024-2026 OrcaBox. All rights reserved.</p>
