# MODEL 2.9 — Performance Line Language / 高性能拉花视觉语言研究
日期：2026-10-12 ｜ **状态：视觉参考研究，非新渲染，非实车设计批准**

## 用户确认的方向（必须与助手解释分开）
2026-10-12，用户评价 #20：“我同意 此外我觉得线条有点偏软了 我觉得我们应该多看看别的赛车/概念车（特别是amg 奥斯顿马丁 布加迪 帕加尼这种做豪华超跑的 没有刻意地去展示豪华感 反而去传递运动的感觉）的拉花线条设计 然后学习技巧而不是照抄”。

明确提炼：
- #20 的线条**偏软**；用户认可上一轮关于 GT 风格、后翼子板过密 T 纹理等问题的评价。
- 在生成下一张图片前，研究高性能赛车／赛道概念车的**运动视觉逻辑**。
- **只学习设计方法，不复制现有车的标志性图形、涂装或颜色方案**。
- 用户未批准 #20 设计，也未指示本回合立刻生成 #21。

## 四组可核实的设计参考（厂商资料及实车照片）
### 1) Mercedes-AMG GT Track Series
- 官方：https://www.mercedes-amg.com/en/mercedes-amg-gt-track-series
- 官方文档说明银灰哑光、anthracite 深色与红色图形组合。照片可见在车侧局部运用**短促、高反差、重复的楔形视觉节奏**，而不是若干贯穿整辆车的等间距长弧线。
- 可借鉴：*Staccato rhythm*——局部缩短、迅速收尖、有限的重复节奏；红色扮演功能强调。
- 不照搬：AMG 进气口侧面的斜向刀片/具体重复数量、独特 AMG 品牌布局。
- 外部实车侧面资料：https://rmsothebys.com/auctions/id25/lots/r0043-2022-mercedesamg-gt-track-series/

### 2) Aston Martin Valkyrie AMR Pro / Valkyrie LMH
- 官方 https://media.astonmartin.com/valkyrie-takes-the-ultimate-hypercar-from-the-road-to-the-track-as-new-quest-for-le-mans-glory-begins/?lang=eng&view=cp
- 官方 https://media.astonmartin.com/f1-car-for-the-road-delivered-to-f1-driver-fernando-alonso/?lang=eng&view=cp
- 对照实车：AMR Pro 的绿/黑主分区、仅在关键转折处点出荧光黄；LMH 的整体深绿主色与轮拱、进排风结构。应区分**实体碳纤／空气动力表面**与真正的贴花印刷线条。
- 可借鉴：**一处高对比转换点 + 大面积静区**；贴花揭示真实体块分界，不用“再多画一条”表现性能。
- 不照搬：赛车编号、颜色、具体孔道轮廓，尤其不能把 Model 3 画出不存在的超跑侧进气口。

### 3) Bugatti Bolide
- 官方 https://newsroom.bugatti.com/en/press-releases/bugatti-developing-production-version-of-the-bolide-experimental-hyper-sports-car
- 官方 https://newsroom.bugatti.com/press-releases/bugatti-bolide-a-customers-first-track-experience
- 厂方明确以高占比裸露碳纤和双色分区强调车身结构；Bolide 的 X 主题也是整车车灯/机械形态语汇，**不是随便涂一条 X 就能有性能感**。
- 可借鉴：**强弱两种表面区域明确分段**；形体拐点处分区，而不是用缓慢的大 S 型线条长距离装饰。
- 不照搬：Bugatti 经典的 X、双色图案切分或碳纤纹路。

### 4) Pagani Huayra R Evo Roadster
- 官方 https://www.pagani.com/press/huayra-r-evo-roadster/
- 官方设计说明将腰线、侧裙、导风与空气释放统一到连续体块中；白/金漆面和底部深色空气动力部件有明确主次。它说明**线条可以流畅，但拐点及尾端仍然非常有决断力**。
- 可借鉴：以真实轮拱、侧裙、C 柱和体积转折为依据；单条线有不同段的曲率与视觉重量。
- 不照搬：金色边条、圆形号码板、Pagani 车身肌肉/长尾比例。

## 跨品牌的视觉技术 — 助手提出的归纳，而非厂商术语

| 观察技巧 | #20 问题 | MODEL 2.9 可能的转换 |
|---|---|---|
| 节奏与停顿 / staccato | 长、软、近似平行，像 GT 丝带 | 只保留一处明显压缩／突然收尖／留白的主要姿态 |
| 曲率突变与方向感 | 曲线大多数段落匀速起伏 | 长弧进入后门/后翼子板时逐渐加快曲率，形成清楚的出力点 |
| 截面与厚薄变化 | 图形整体均匀、过于光滑 | 局部实体楔形逐步削薄，终止为尖点/小 T，非等粗 LED 长条 |
| 实际车身地形 | 图形与轮拱分离、填满轮拱 | 围绕真实 Highland 后轮拱肩线作局部转折和消散，而非画假进气道 |
| 黑色静区 | 部分线条虽少，仍上下包围前门 | 前门大范围纯黑，不加附属细纹 |
| 微结构过渡 | T 太大、太规则、像贴了一堵墙 | 实色主线在末端提早释放微小 T，密度随曲率变化，逐渐消失 |
| 功能性红色 | #20 红色存在感太低 | 1–2 个工程 datum，坐标/应力转折标记，且有明确主次 |
| 黑对黑／夜间全显影 | 仅深色拍摄弱化拥挤 | 同车同图 DAY & NIGHT，NIGHT 所有反光位置同时亮，**不得以局部黑暗掩饰过满** |

## #21 草案（尚未请求渲染、尚未批准）

**概念命名：Sculpted Tension / 雕塑张力**。不是把软曲线替换成粗硬直线，而是**连续的长弧上有局部快速曲率变化、清晰收尖、少数方向断点**。

仅三项核心实验变量：
1. **一条结构主势线**：保持主曲线但消除 #20 的缓软匀速感。让一段有压力的“短楔形→收紧→尖端”靠近真实后门/后轮拱结构；不可添加 AMG 标志性斜纹，也不可变成 LED 灯带。
2. **删除下沿 GT 式长平行线**：仅以一小段局部侧裙体块语言呼应，前门的大块留白优先。
3. **重新设计微型 T 密度转场**：主结构与小 T 在更长的区域重叠/交接，从真实肩线过渡到轮拱附近表面；微型 T 可制造性暂未验证，不能用 mesh/nonsolid simulated noise。

功能性红色 datum 是全局既定规则，保持 1–2 处。DAY 黑反光材料必须仍黑，NIGHT Full Reveal 不借选择性暗光隐藏全部图案。不要称概念图片为可施工贴膜；尊重现有 Apterix matte PPF 与真实 Highland Performance 几何。

## 研究区分与档案状态
- 实车上的深色碳纤切换区、气道、分色漆面和真正的 decals 是不同层次；我们只能**提炼视觉原理**，不能声称单靠膜就能复制物理空气动力效果。
- 不复制厂商现成图案、受保护标识或设计文件；保留原创 MODEL 2.9 Tesla T 身份语汇。
- #20 原图 **GitHub 上传仍未成功**；仅保存在 ChatGPT Library 的 `/MODEL-2.9/livery/20_day_night_full_reveal_original.png`，不能谎称已完成整个 PNG 归档。
- 本回合未生成 #21 PNG；用户授予今后每版渲染和意见自动同步 GitHub 的持续授权。
