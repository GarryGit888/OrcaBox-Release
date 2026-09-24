# OrcaBox 产品网站

## 完成内容

基于 OrcaBox 项目（Electron + React + TypeScript 本地素材管理器），构建了完整的产品单页网站。

## 网站架构（10 个区块）

| 区块 | 内容 |
|------|------|
| **导航栏** | Logo、平滑锚点导航、明暗主题切换、下载 CTA |
| **Hero** | Three.js 粒子海洋背景、主标题、副标题、双 CTA |
| **数据统计** | 40+ 格式、本地优先、AI 驱动、全平台 |
| **核心功能** | Bento Grid 布局展示 6 大核心能力 |
| **格式滚动** | 无限循环滚动展示支持的 30+ 文件格式 |
| **Lottie 专区** | 核心优势展示 — SVG 虎鲸动画 + 功能列表 |
| **AI 能力** | 智能标签、以图搜图、颜色搜索三卡片 |
| **工作流** | 四步流程：添加源 → 索引 → 预览 → 导出 |
| **全平台** | macOS / Windows / Linux 下载卡片 + Chrome 扩展 |
| **CTA & Footer** | 底部行动号召 + 四列页脚导航 |

## 技术特点

- **纯静态 HTML** — 零依赖构建，可直接部署到任何静态托管
- **Three.js** — Hero 区域粒子海洋背景（虎鲸主题），GPU 加速
- **玻璃态效果** — backdrop-blur + 细腻边框 + 径向光晕
- **明暗主题** — 完整双主题，localStorage 持久化，平滑过渡
- **响应式** — 移动端 / 平板 / 桌面全适配
- **动效** — Scroll Reveal、Magnetic 卡片、格式滚动条、导航动效
- **无障碍** — prefers-reduced-motion 支持、语义化 HTML、ARIA 标签

## 设计决策

- 色彩：海洋蓝 (#0284c7 / #38bdf8) 呼应 "Orca" 虎鲸品牌
- 字体：Geist + Geist Mono（现代几何风格）
- 布局：Bento Grid 不对称布局 (DESIGN_VARIANCE=7)
- 动效强度：中等 (MOTION_INTENSITY=5)，确保性能

## 文件位置

`website/index.html` — 单文件完整产品站
