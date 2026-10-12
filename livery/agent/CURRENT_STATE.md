# MODEL 2.9 — Current State / 2026-10-12

**状态：** Image-first 视觉探索；#19 是目前审美基线而非最终施工批准。原始 19 张 AI PNG 已归档在 [0004 图集](../iterations/0004-2026-10-12-ai-render-journal/README.md)；完整反馈见 [ITERATION_NOTES_zh](../iterations/0004-2026-10-12-ai-render-journal/ITERATION_NOTES_zh.md)。此前 V1/V2 工程预览与 V3 的 G0/几何计划都保留；代码优先/物理裁切阶段暂缓。

## 关键图和用户反馈
| 编号 | 价值 / 缺点 |
|---|---|
| [#11 A+C](../iterations/0004-2026-10-12-ai-render-journal/renders/11_A_plus_C_fusion.png) | 清楚的 A 运动结构 + C 细密 Tesla T 是意图，警惕滑向 B+C 碎片噪声 |
| [#12 Constructible](../iterations/0004-2026-10-12-ai-render-journal/renders/12_constructible_A_plus_C.png) | 实色可切比 frosted mesh 更实际 |
| [#15 Sparse Ridge](../iterations/0004-2026-10-12-ai-render-journal/renders/15_sparse_ridge_texture.png) | 负空间和细小 T 改善，但色块/T 仍分区 |
| [#16 Ridge Transition](../iterations/0004-2026-10-12-ai-render-journal/renders/16_ridge_transition_v2.png) | 必须利用后轮拱与车顶/C 柱，但避免 Z 形长线框 |
| [#17 Sketch Contour](../iterations/0004-2026-10-12-ai-render-journal/renders/17_design_sketch_contour.png) | 汽车设计手稿轮廓优于刚硬折线，仍要保留性能张力 |
| [#18 Too Full](../iterations/0004-2026-10-12-ai-render-journal/renders/18_sculpted_velocity.png) | **用户否定：太满、鬼火感** |
| [#19 Ghost Sculpture](../iterations/0004-2026-10-12-ai-render-journal/renders/19_ghost_sculpture_full_reveal.png) | **最新审美参考基线、未定稿**，留白改善；肩线仍可能过长似 LED、T 过渡生硬、红色欠统一 |

## 已明确确认
**DAY 黑对黑；NIGHT FULL REVEAL 所有反光部件同时亮起的最坏视觉压力测试**；同一版图案/同一侧面车身日夜对照；手绘形体曲线 + 有性能张力；留白；主色块→小 T 的宽广连续转场；轮拱/C 柱贴合；功能化而适当大胆的红色；形状尽量为实色可切的视觉语法，避免大量碎片和 mesh。

**没有任何一张图获批为实际可生产贴膜。** 用户批准过设计方向，不等于批准车辆几何、选材或施工。

## 下一步设计建议（非批准）
从 #19 继续：适度缩短与断开上部反光主线，弱化/缩短次线，保留前门空白；让后门的实色线逐渐融入后轮拱形态的微 T 密度场；使用少数红色 reference/transition 标识，删除重复改装车红斜杠。

## 未验证事项
- 黑反光材料的真实日间黑度、光泽与 NIGHT 的角度相关强度。
- 对已有 Apterix matte PPF 的胶兼容、可移除性、耐久和施工难度。
- 精确实车 3D/UV、用户车辆升级外观件、轮拱/C 柱贴膜尺寸。
- 微型 T 的最低可切/排废尺寸、法规与安全要求。
- [Tesla Paint Shop UV 模板](../../model3-2024-performance/template.png) 只是屏幕贴图，不能直接当施工裁膜坐标。

**其他技术文件：** [DECISIONS](../DECISIONS.md) · [MATERIALS](../MATERIALS.md) · [V1](../iterations/0001-2026-10-11-ghost-reflective/) · [V2](../iterations/0002-2026-10-11-ghost-aerodynamics/) · [V3](../iterations/0003-2026-10-11-track-kinetics/) · [Tesla T SVG 来源](../assets/README.md)。
