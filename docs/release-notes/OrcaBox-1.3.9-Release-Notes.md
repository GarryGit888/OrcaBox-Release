# OrcaBox 1.3.9 发行说明

发布日期：2026-10-29

> 本版本把「调色」做成了主角：视频 LUT 实时套色、照片 AI 语义蒙版与 GPU 实时显影全面落地，AI 打标签支持批量与置信度阈值，Pinterest 识图升级区域框选，并修复了切换视频卡死等多个稳定性问题。

## 新增功能

- **视频 LUT 调色**：视频预览顶部工具栏新增 LUT 弹层，直接加载 .cube 文件实时套色，附强度滑条、批量套用与达芬奇式缩略图面板。macOS 优先使用系统级 CIColorCube 原生管线，Windows 通过 mpv 注入生成的 GLSL hook；浏览器直连等无 GPU 通道的场景自动回退 WebGL 实现。全程在原始码流上实时计算，不生成任何代理文件。
- **照片 AI 语义蒙版**：一键识别画面主体生成选区，新增颜色范围与明度范围蒙版按取样自动扩展；蒙版编辑升级为三层渲染管线，拖参数实时刷新。另增白平衡取样工具与参考图追色 v1。
- **AI 打标签批量化**：详情栏点击即可打标，多选批量识别在后台运行、切换选中不中断，网格卡片显示进度徽标；设置中可调置信度阈值（默认 95%），低于阈值的候选标签不自动写入。视频按原始文件名参与视觉识别，品牌/产品名识别更准。
- **Pinterest 区域框选识图**：大图查看器拖出矩形选区即可只搜局部相似；瀑布流显示「已采集」去重角标，采集自动回链来源并按看板分类，右栏支持滚动无限加载与色系筛选。
- **照片调色插件批次**：磨皮等人像精修能力上线，插件中心支持远程安装，台词工作台提供独立窗口。
- **图像对比工具**：插件中心新增并排/滑动对比两种查看方式。

## 优化改进

- **调色引擎 GPU 加速**：显影预览接入 WebGL2，滑杆拖拽即时出图，大图也能实时刷新；调色面板重构为 Camera Raw 式右侧竖栏（调整/预设/蒙版/人像/裁剪/修复/液化）。
- **预设体系**：预设分组「热门 / 我的」，我的预设本地保存并带参数缩略图；按 C 直接进入图片裁剪工具。
- **移动对话框最近常用**：「移动文件 / 移动文件夹」对话框顶部新增最近常用目标芯片条，点选即选中并在树内定位展开；确认移动时才记录，两个对话框相互独立。
- **预览性能**：预览管线提速约 1.5×，代理帧按显示尺寸自适应，滑杆拖拽不再全分辨率硬算；大库刷新与视频预览体验优化。
- **界面统一**：界面密度与控件质感统一，设置侧栏切换微交互；「资料库」文案统一更名为「资产库」。

## 问题修复

- **切换视频整应用卡死**：libVLC 的停止与释放移出主线程，修复打开/切换某些视频时整个应用永久无响应（含 HEVC 长视频）。
- **浏览器回退停在暂停帧**：原生会话结束后自动恢复浏览器播放进度，回退切换不再卡在暂停帧；浏览器兜底进原生时按探测数据选 AVPlayer，避开 libVLC 冷起播延迟。
- **Windows 黑屏预览**：无内嵌播放宿主时不再黑屏，并建立宿主分发门禁防止同类问题回流；视频输出等待仅限 wid 嵌入面，修复 dock 模式误判启动失败。
- **PDF 正文全白**：修复阅读器页面不栅格化导致正文空白。
- **其他**：下载落盘命名清洗 URL 敏感字符（修 3D 模型路径 `#` 截断）；小红书笔记图片下载改走 referrer 选项修复 ERR_BLOCKED_BY_CLIENT 全灭；音频卡片静态预览统一为撑满矢量波形；液化清空圆外像素、AI 蒙版第二次推理崩溃、单文件索引后网格不刷新等修复。

## 平台差异与构建状态

| 项目 | macOS（Apple Silicon / Intel） | Windows x64 |
| --- | --- | --- |
| 视频 LUT | 原生 CIColorCube 管线（AVVideoComposition + CIColorCubeWithColorSpace） | mpv 注入 GLSL hook |
| 视频播放 | AVPlayer / libVLC / 浏览器直连三轨 | Media Foundation / mpv / 浏览器直连 |
| HEIC | sips 转 PNG 回退可用 | 部分场景降级 |
| 窗口控件 | 系统红绿灯 | 自绘三键（主窗口原生 WCO） |
| 自动更新 | DMG 人工安装 + 双架构 ZIP 更新载荷 | NSIS 安装器 + blockmap（Portable 为手动下载，不参与更新） |

- 本次交付 macOS Apple Silicon、macOS Intel、Windows x64 三个安装包目标均已构建；Windows 包在 macOS 上本地构建并完成结构/资源校验，Windows 主机上的原生视频播放、窗口行为实测由发布管线继续执行。
- **Windows 本次构建未携带内嵌视频宿主 addon**（该二进制只能由 MSVC 在 Windows 主机构建，本次发布窗口内 GitHub Actions 构建通道受阻）。1.3.9 已修复无宿主时的黑屏预览，Windows 播放走浏览器直连与 mpv 路径，能力与 1.3.8 持平且更稳定；内嵌宿主将在后续版本补发。
- 未签名分发与 macOS 签名/公证警告按内测口径接受；详细构建记录见 `doc/release/builds/`。

## 反馈与已知问题

- 应用内：右下角「帮助与支持」菜单 → 「问题反馈」；或帮助按钮气泡进入新增功能指南。
- 已知问题与安装包安全拦截绕过说明见 `doc/release/known-issues.md` 与 `doc/release/external-beta-install.md`。

## 获取更新

- [CNB 安装包发行页](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.3.9)
- [GitHub 备用发行页](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.3.9)
- [OrcaBox Chrome 浏览器插件](https://github.com/GarryGit888/OrcaBox-Release/releases/download/v1.3.9/OrcaBox-Chrome-Extension-1.3.9.zip)

| 平台 | 安装包 |
| --- | --- |
| macOS Apple Silicon | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-arm64.dmg) |
| macOS Intel | [DMG](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-x64.dmg) |
| Windows x64 | [安装器](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-win-x64-Setup.exe) / [免安装版](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.3.9/OrcaBox-1.3.9-win-x64-Portable.exe) |

macOS 应用内更新通过 `latest-mac.yml`（arm64 / x64 ZIP）；Windows 应用内更新通过 `latest.yml`（NSIS + blockmap）。DMG 与 Portable 是人工安装渠道，不是自动更新载荷。

## 生成信息

- 生成范围：`v1.3.8..HEAD`
- 生成分支：`1.3.9`
- 提交数量：44
- 变更文件数量：265
