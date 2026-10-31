# OrcaBox 1.4.0 リリースノート

リリース日: 2026-10-31

## 主な更新

- HEIC AI 擦除：iPhone/相机直出的 HEIC/HEIF 照片可直接涂抹擦除。
- 透明通道保留：AI 擦除结果始终带着原始 alpha 通道写回，覆盖保存 PNG/WebP 不会再把透明区域变成实底。
- SonicLab 音频标签：带 SONICLAB 元数据的音频素材（流派/BPM/调性）自动映射进标签面板的受控词表，空标签素材扫描或导入后自动落标，详情栏「AI 识别（外部）」卡片同步呈现。
- 网格 LUT 缩略图：视频卡片缩略图直接呈现当前 LUT 调色效果，悬停胶片条与内联悬停视频逐帧同步上色（WebGL）；LUT 色彩配置轻量加载，逐像素采样移入 worker 线程，滚动大批 LUT 视频不再阻塞界面；解析缓存带内容指纹并扩容，同名替换的 LUT 不再串色。
- 音频波形与队列：波形位图加载与缓存链路提速，队列切换不重复生成已缓存波形；悬停指示线、时间提示与拖动试听改为按帧合并更新，指针移动不再触发整卡重绘。
- 插件失败可见化：插件激活失败在插件中心显示错误原因与「重新加载」入口，列表加载失败提供可重试错误态；停用或卸载插件时自动关闭其独立窗口；插件窗口打开入口校验启用状态；快捷键触发插件命令失败给出 toast 提示。
- AI 擦除覆盖保存丢透明通道：解码与写回管线保留原始 alpha 通道，带透明 PNG/WebP 覆盖保存不再造成不可逆的数据丢失；HEIC 素材继续强制另存 JPG 副本。
- AI 擦除临时文件入库：覆盖保存的临时文件不再被文件监视器索引成垃圾资产（写入前抑制、失败后清理半成品）。

## ダウンロードとインストール

- CNB を主なダウンロード先とし、GitHub Release を予備のダウンロード先として提供します。
- Windows x64 では、インストール先を選べるインストーラーとポータブル版を提供します。
- [CNB](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.0)
- [GitHub Release](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.0)

## プラットフォームについて

- macOS では Apple Silicon 用と Intel 用の DMG を提供します。対応する ZIP はアプリ内自動更新の載荷として保持します。現在のパッケージは未署名のため、初回起動時に「プライバシーとセキュリティ」で許可が必要になる場合があります。
- Windows x64 ではインストーラーとポータブル版を提供します。インストーラーは既定でユーザー単位のインストールで、保存先を変更できます。

| Platform | Download |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-arm64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-arm64-mac.zip) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-x64.dmg) / [Updater ZIP](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-x64-mac.zip) |
| Windows x64 | [Installer](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-win-x64-Setup.exe) / [Portable](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-win-x64-Portable.exe) |
