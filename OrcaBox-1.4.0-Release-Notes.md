# OrcaBox 1.4.0 发行说明

发布日期：2026-10-31

> 本版本让 AI 擦除覆盖到 HEIC/HEIF 素材并保住透明通道，网格视频缩略图实时呈现 LUT 调色，音频波形与队列切换全面提速，SonicLab 第三方音频标签自动落标；同时把插件激活失败从「静默无反应」变成可见可重试，并完成一轮全项目质量审查的集中修复。

## 新增功能

- **HEIC AI 擦除**：iPhone/相机直出的 HEIC/HEIF 照片可直接涂抹擦除。macOS 走系统解码，Windows 安装 HEIF 图像扩展后可用；HEIC 擦除结果保存为 JPG 副本（覆盖原图仅限普通格式），超过 8192px 的素材会明确提示先缩小，不再静默降采样。
- **透明通道保留**：AI 擦除结果始终带着原始 alpha 通道写回，覆盖保存 PNG/WebP 不会再把透明区域变成实底。
- **SonicLab 音频标签**：带 SONICLAB 元数据的音频素材（流派/BPM/调性）自动映射进标签面板的受控词表，空标签素材扫描或导入后自动落标，详情栏「AI 识别（外部）」卡片同步呈现。

## 优化改进

- **网格 LUT 缩略图**：视频卡片缩略图直接呈现当前 LUT 调色效果，悬停胶片条与内联悬停视频逐帧同步上色（WebGL）；LUT 色彩配置轻量加载，逐像素采样移入 worker 线程，滚动大批 LUT 视频不再阻塞界面；解析缓存带内容指纹并扩容，同名替换的 LUT 不再串色。
- **音频波形与队列**：波形位图加载与缓存链路提速，队列切换不重复生成已缓存波形；悬停指示线、时间提示与拖动试听改为按帧合并更新，指针移动不再触发整卡重绘。
- **插件失败可见化**：插件激活失败在插件中心显示错误原因与「重新加载」入口，列表加载失败提供可重试错误态；停用或卸载插件时自动关闭其独立窗口；插件窗口打开入口校验启用状态；快捷键触发插件命令失败给出 toast 提示。

## 问题修复

- **AI 擦除覆盖保存丢透明通道**：解码与写回管线保留原始 alpha 通道，带透明 PNG/WebP 覆盖保存不再造成不可逆的数据丢失；HEIC 素材继续强制另存 JPG 副本。
- **AI 擦除临时文件入库**：覆盖保存的临时文件不再被文件监视器索引成垃圾资产（写入前抑制、失败后清理半成品）。
- **AI 擦除解码缓存膨胀**：HEIC 解码 PNG 缓存按 mtime 淘汰 7 天未用条目，不再无限占用系统盘空间。
- **预览崩溃整窗白屏**：预览舞台补齐区域级错误边界，任一格式预览面渲染异常只降级该区域并可重试，不再拖垮整个窗口。
- **插件启用死状态**：入口文件损坏的插件被重新启用时重新校验并保留错误提示，不再变成「启用但已死」。
- **生产 CSP 收紧**：生产构建 script-src 移除 `unsafe-inline`（构建产物确认无内联脚本依赖），恢复说明注释与实际策略一致。

## 平台差异与构建状态

| 项目 | macOS（Apple Silicon / Intel） | Windows x64 |
| --- | --- | --- |
| HEIC AI 擦除 | 系统 sips 解码，开箱可用 | 需安装系统 HEIF 图像扩展后可用 |
| 视频 LUT | 原生 CIColorCube 管线 + 网格 WebGL 缩略图 | mpv 注入 GLSL hook + 网格 WebGL 缩略图 |
| 视频播放 | AVPlayer / libVLC / 浏览器直连三轨 | Media Foundation / mpv / 浏览器直连 |
| 窗口控件 | 系统红绿灯 | 自绘三键（主窗口原生 WCO） |
| 自动更新 | DMG 人工安装 + 双架构 ZIP 更新载荷 | NSIS 安装器 + blockmap（Portable 为手动下载，不参与更新） |

- 平台相关行为（HEIC 解码路径、LUT 渲染管线、窗口控件）在同一交付中逐一核对双平台分支。
- **Windows x64 本次构建携带内嵌视频宿主 addon**：使用 Windows 主机上的 VS 2022 / MSVC 针对 Electron 43.4.1 编译，并通过加载验证。播放可使用内嵌宿主、mpv 与浏览器直连路径。
- macOS 打包产物在出包后必须运行 `ensure:macos-avplayer` 校验内嵌原生播放插件在位。
- 构建与签名口径同 1.3.9；详细构建记录见 `doc/release/builds/`。

## 反馈与已知问题

- 应用内：右下角「帮助与支持」菜单 → 「问题反馈」；或帮助按钮气泡进入新增功能指南。
- 已知问题与安装包安全拦截绕过说明见 `doc/release/known-issues.md` 与 `doc/release/external-beta-install.md`。

## 获取更新

- [CNB 安装包发行页](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.0)
- [GitHub 备用发行页](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.0)

| 平台 | 安装包 |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-arm64.dmg) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-x64.dmg) |
| Windows x64 | [安装器](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-win-x64-Setup.exe) / [免安装版](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.0/OrcaBox-1.4.0-win-x64-Portable.exe) |

macOS 应用内更新通过 `latest-mac.yml`（arm64 / x64 ZIP）；Windows 应用内更新通过 `latest.yml`（NSIS + blockmap）。DMG 与 Portable 是人工安装渠道，不是自动更新载荷。

## 生成信息

- 生成范围：`v1.3.9..HEAD`
- 生成分支：`1.4.0`
