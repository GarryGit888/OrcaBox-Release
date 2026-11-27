# OrcaBox 1.4.4 发行说明

发布日期：2026-11-27

> 本版本完善素材管理、媒体预览与跨平台体验，并新增独立窗口拼图图插件；同时修复 AI 标签显示和资产库切换面板在不同窗口尺寸下的稳定性。

## 新增功能

- **拼图图（外置插件）**：通过插件中心安装「拼图图」，将选中图片排列为网格拼图或横向、纵向长图。独立面板支持拖动排序、替换、位置与缩放变换，并可导出 PNG、JPG、WebP。导出可保存到资产库来源目录、插件闪存资源目录或外部文件夹。插件独立安装和更新，不随 OrcaBox 安装器捆绑。
- 支持右键批量旋转素材（`70ab853`）
- 增强网页备注与阅读整理（`42da217`）
- add film response controls（`3612e9f`）
- 支持来源目录拖拽排序并完善 Affinity 预览（`b03fbd1`）
- 新增主题高亮色自定义与紧凑主题布局（`731748d`）
- 添加折叠导航流体提示（`67250ac`）
- 优化画布选择弹层与添加节点菜单（`ff54d8a`）
- 添加回到顶部按钮，快速向上滚动时显示在素材面板底部居中（`00c1b3f`）
- add notes to Windows update feed（`6633361`）
- 新增媒体文案插件及 ASR 模型指定功能（`cd1b49f`）
- use plugin icons for Windows auxiliary windows（`76c4cf4`）

## 优化改进

- 优化来源文件夹卡片玻璃质感与动效（`72a3573`）
- 优化素材搜索、预览与任务处理（`a25e896`）
- 优化素材预览转场与全屏背景动效（`bdd01d5`）
- 调整顶部网格缩放滑杆样式（`8bfd36b`）
- 优化来源文件夹磨砂玻璃质感（`4324e78`）
- 优化听歌识曲本地曲库回退（`227c984`）
- 优化回收站主题标签对比度（`4d269b3`）
- 优化多选素材牌组切换效果（`bcdc516`）
- 优化 3D 模型预览与贴图加载（`d8a6f7f`）
- 优化侧栏展开收起交互（`2f07757`）
- 优化大型资料库切换与缩略图加载（`5cb4d37`）
- 调整深色素材与详情面板底色（`b15a14a`）
- 优化素材浏览与预览性能（`6a3b1a8`）
- 优化大库启动与素材浏览性能（`54ecd40`）
- 优化启动与浏览性能：减少主线程同步 IO 与全表聚合（`6b8d18b`）
- 优化素材浏览：滚动流畅度与各类素材的加载速度（`f7f15fb`）
- 优化素材滚动浏览与预览加载（`931d457`）
- 优化预览设置与浏览布局（`ba0759b`）
- 优化文件夹切换的响应速度（`f04c501`）
- 优化文件夹磨砂与斜切边缘效果（`d085a56`）
- 优化多选详情、素材网格与新手引导的渲染开销（`873e1ae`）
- 加速 Office 文档预览加载（`357779d`）
- 优化封面加载占位符设计（`ef39333`）
- refine: 素材卡片选中边框从 2px 细化为 1.5px（`882a221`）
- 优化来源文件夹卡片自适应布局（`41c7b1d`）
- 优化 AI 画布生成产物命名（`eab4b3e`）
- 优化文件夹搜索并记录最近访问（`b6eff35`）
- 优化素材卡片名称并预览彩色代码（`a3a0d86`）
- 优化浅色主题与音频预览界面（`689f126`）
- 优化大素材库启动与后台查询（`963c2a2`）
- 优化来源目录加载与任务中心（`33fed4c`）

## 问题修复

- **资产库切换面板稳定性**：面板按窗口剩余高度自适应，资产库列表独立滚动，标题与底部操作在矮窗口中仍保持可见；打开面板时同步修复侧栏背景磨砂合成，macOS 与 Windows 行为一致。
- **AI 标签状态同步**：修复 AI 标签生成与卡片「重新分析」完成后，数据库已写入而卡片、详情面板或多选检查器仍短暂显示 0 的缓存竞态。现在会按素材即时同步实际写入标签，并刷新标签词典、统计和 AI 候选。
- 修复资源库切换面板磨砂模糊与矮窗口高度自适应（`db7c122`）
- 修复拼图图保存与目录选择（`128a7da`）
- 完善拼图图插件并修复AI标签显示（`14bda19`）
- 修复大素材库滚回顶部卡死，优化文件夹操作与大库浏览性能（`4297f28`）
- sync Chrome extension version for 1.4.4（`3379a23`）
- 延后大型素材库上下文加载（`06ad728`）
- 修复字体文件夹封面显示（`f0f99b2`）
- 修复主题切换面板英文预设名称裁剪（`c5ac9c6`）
- 修复浏览来源目录定位（`ce38222`）
- 修复浏览来源目录定位（`4187566`）
- 落地 1.4.4 全面审查修复批次与资产网格滚动优化（`b5ec063`）
- 修复 HEIC 图片文字编辑并优化文本对齐吸附（`fc0b393`）
- 修复图片批量裁剪的 HEIC 导出与运行状态（`930671e`）
- 修复 MXF 原片预览启动卡顿（`bef7dbf`）
- 修复素材搜索目录范围（`587a670`）
- 修复 HTML 卡片预览内容显示（`fd3eeb7`）
- 修复超高分辨率视频裁剪导出失败（`f625fc9`）
- 统一说明提示悬停延迟（`40bf0b6`）
- 修复素材删除目标并优化模型计价输入（`259b0bd`）
- 修复来源目录同步清理已删除素材（`e09ca3c`）
- 修复原生视频拖拽后播放竞态（`e0a759d`）
- 修复视频预览切换错位与播放源串用（`13c8ffd`）
- 修复网页收藏封面缓存与缩略图显示（`2f829cc`）
- 修复视频预览卡顿并更新设置界面（`1606f05`）
- 修复视频悬停预览在难解码或慢盘素材上卡住（`fa701c4`）
- 修复编码器探测、书签查询与临时目录的残留问题（`38a02bb`）
- 修复语音识别与 AI 擦除后台进程的失败恢复（`afeaa02`）
- 修复外置硬盘素材监听恢复（`4803b22`）
- 修复素材拖拽导入状态残留（`53c2009`）
- 修复任务中心返回全部素材卡顿（`5e61988`）
- 修复全部素材面板刷新闪烁（`2a0ac99`）
- 优化来源文件夹卡片与封面稳定性（`42edd85`）
- 将正在更新结果提示移至素材面板右下角，复选框改为扁平样式（`1dc7de1`）
- 将“正在更新结果”提示移至顶部工具栏，避免遮挡显示子文件夹内容开关（`b8d0088`）
- 修复官网首页布局与图片比例（`f1bdade`）
- 修复拖拽导入与画布多选拖放链路（`d41b40c`）
- 修复反推面板状态恢复（`9b5b065`）
- 修复 AI 标签中英文界面切换（`b797424`）
- 修复批量裁剪导出格式判断（`1999d3b`）
- 修复资源库启动加载竞态（`6d4fff9`）
- 记录 1.4.2 macOS 修复重打包（`9a26d4b`）
- 记录 1.4.2 macOS 修复重打包（`64b926e`）
- polish library path and panel surfaces（`5105db0`）
- 修复子文件夹卡片封面发虚与占位遮挡（`e182887`）
- allow Windows Open With launch（`96b59ca`）
- blend shortcuts panel caption controls（`fd9e9ea`）
- resolve Windows Open With applications（`d6ca1df`）
- blend Windows panel caption controls（`8f9d170`）
- keep Windows folder cover cards crisp（`cf40f0f`）
- keep Windows folder cover cards crisp（`b498857`）

## 工程与文档

- 准备1.4.4发布文档与插件包（`376d1b2`）
- 发布插件开发指南（`db68226`）
- 提高资产库切换面板不透明度（`d78cf7c`）
- 完善预览播放并接入脚本镜头 Agent（`eef37e7`）
- 补齐视频预览波形时间线模块的未跟踪源文件（`e6e10a2`）
- 小红书笔记导入默认保存无水印图片（`b56bc4d`）
- 统一来源文件夹数量标签样式（`6660e4e`）
- 提交当前全部未提交改动（`5505167`）
- 打通抖音图文(图集)导入：aweme-detail解析器提取图集+账号分区优先+批量导入（`d64d666`）
- 固定音频试听全局音量（`ed773e7`）
- 提交当前未提交的裁切与预览改动（`9c2ed61`）
- 修正 1.4.3 发布文案（`20ca6b1`）
- 发布 OrcaBox 1.4.3 双平台安装包（`e913955`）
- 完善插件发现与工作区面板能力（`da9a165`）
- 完善视频裁剪与转码的导出保护和批量操作（`4ed901f`）
- 忽略本地安装验证和内部打包产物（`33bb141`）
- 清理旧版界面设计截图（`adaa6a6`）
- 发布 1.4.3：手写发行说明、What's New 条目与官网文案（`05ad2a7`）
- 下载器：yt-dlp 自动安装失败时回报脱敏后的真实原因（`8d8d2c9`）
- 提交当前全部未提交修改（`02e3f69`）
- 素材卡片文件名显示扩展名并自适应换行（`6a17995`）
- 完善 AI 素材处理与媒体预览链路（`95cb5a7`）
- 同步应用版本至 1.4.3（`d308213`）
- 刷新发行记录页 releases.json 缓存键（`4a502b0`）
- 官网更新为 macOS 与 Windows 1.4.2 双平台（`7060b59`）
- 记录 Windows 1.4.2 资产已补齐到 CNB（`d28bce7`）
- record Windows 1.4.2 package（`a0fc45a`）

## 变更范围

- `src/`：404 个文件
- `plugins-dev/`：12 个文件
- `website/`：10 个文件
- `doc/`：8 个文件
- `scripts/`：7 个文件
- `ui design/`：7 个文件
- `backup/`：4 个文件
- `.agents/`：3 个文件
- `docs/`：3 个文件
- `.github/`：2 个文件
- `.gitignore/`：1 个文件
- `.zcode/`：1 个文件

## 获取更新

- [CNB 安装包发行页](https://cnb.cool/garrykai/orcabox-release/-/releases/tag/v1.4.4)
- [GitHub 备用发行页](https://github.com/GarryGit888/OrcaBox-Release/releases/tag/v1.4.4)
- [OrcaBox Chrome 浏览器插件](https://github.com/GarryGit888/OrcaBox-Release/releases/download/v1.4.4/OrcaBox-Chrome-Extension-1.4.4.zip)

| 平台 | 安装包 |
| --- | --- |
| macOS Apple Silicon | [DMG 人工安装](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-arm64.dmg) / [ZIP 应用内更新载荷](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-arm64-mac.zip) |
| macOS Intel | [DMG 人工安装](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-x64.dmg) / [ZIP 应用内更新载荷](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-x64-mac.zip) |
| Windows x64 | [NSIS 安装器与应用内更新载荷](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-win-x64-Setup.exe) / [Portable 免安装版](https://cnb.cool/garrykai/orcabox-release/-/releases/download/v1.4.4/OrcaBox-1.4.4-win-x64-Portable.exe) |

macOS ZIP 仅供 electron-updater 按架构执行应用内更新，不作为常规手动安装包；Windows Portable 是单独的手动下载版本，不是更新器载荷。

## 生成信息

- 生成范围：`v1.4.2..HEAD`
- 生成分支：`1.4.4`
- 提交数量：119
- 变更文件数量：471
