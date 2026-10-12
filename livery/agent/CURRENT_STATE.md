# MODEL 2.9 — Current State / 2026-10-12

**状态：** Image-first 视觉探索；#19 仍为待改进的审美基线；**#20 已生成并获助手评分 6.5/10，但并未获得用户认可；第 20 版评价已存 GitHub，原始 PNG GitHub 上传待完成**。原始 19 张 AI PNG 已归档在 [0004 图集](../iterations/0004-2026-10-12-ai-render-journal/README.md)；完整反馈见 [ITERATION_NOTES_zh](../iterations/0004-2026-10-12-ai-render-journal/ITERATION_NOTES_zh.md)。此前 V1/V2 工程预览与 V3 的 G0/几何计划都保留；代码优先/物理裁切阶段暂缓。

## 关键图和用户反馈
| 编号 | 价值 / 缺点 |
|---|---|
| [#11 A+C](../iterations/0004-2026-10-12-ai-render-journal/renders/11_A_plus_C_fusion.png) | 清楚的 A 运动结构 + C 细密 Tesla T 是意图，警惕滑向 B+C 碎片噪声 |
| [#12 Constructible](../iterations/0004-2026-10-12-ai-render-journal/renders/12_constructible_A_plus_C.png) | 实色可切比 frosted mesh 更实际 |
| [#15 Sparse Ridge](../iterations/0004-2026-10-12-ai-render-journal/renders/15_sparse_ridge_texture.png) | 负空间和细小 T 改善，但色块/T 仍分区 |
| [#16 Ridge Transition](../iterations/0004-2026-10-12-ai-render-journal/renders/16_ridge_transition_v2.png) | 必须利用后轮拱与车顶/C 柱，但避免 Z 形长线框 |
| [#17 Sketch Contour](../iterations/0004-2026-10-12-ai-render-journal/renders/17_design_sketch_contour.png) | 汽车设计手稿轮廓优于刚硬折线，仍要保留性能张力 |
| [#18 Too Full](../iterations/0004-2026-10-12-ai-render-journal/renders/18_sculpted_velocity.png) | **用户否定：太满、鬼火感** |
| [#19 Ghost Sculpture](../iterations/0004-2026-10-12-ai-render-journal/renders/19_ghost_sculpture_full_reveal.png) | **审美参考基线、未定稿**，留白改善；肩线仍可能过长似 LED、T 过渡生硬、红色欠统一 |
| [#20 Ghost Sculpture](../iterations/0005-2026-10-12-v20-ghost-sculpture/NOTES_zh.md) | **2026-10-12 新渲染，助手评价 6.5/10；尚无用户审美批准。** 前门留白与上扬动势可取；GT 式下沿平行线、过密规则 T、过渡生硬、红标不足、车型细节有误。**原 PNG 存 Library，GitHub 图片待补传。** |

## 最新进度 2026-10-12：#21–#24
- [#21](../iterations/0006-2026-10-12-v21-sculpted-tension/)：助手评价 7.6/10，运动张力提升，但仍“太漂亮”；用户后来也认可这一评价。
- [#22](../iterations/0007-2026-10-12-v22-biomechanical-growth/)：用户尝试把尾翼/后唇“从车上长出来”的生物性引入车身；助手评价 7.2/10，用户认为仍“太漂亮”、力量不足，明确反对任何反光亮度/颜色渐变。
- [#23](../iterations/0008-2026-10-12-v23-overcorrection/)：助手评价 6.9/10，强度明显但过碎、过硬，偏机甲与街头改装；主次与前门留白退步。用户尚未正式确认这一版评价。
- **#24 仅有设计简报，尚未生成图片或获得用户对具体配色方案的确认**：[Tesla Experimental / Biomechanical Performance](../design-briefs/24-tesla-experimental-color-and-form.md)。用户明确将“让人觉得像 Tesla 官方设计的实验原型车”作为至关重要的衡量指标；并要求权衡最近数版缺少其他颜色的问题。助手提出黑/深钛灰/极少量红色，属于**建议，尚未获具体颜色方案批准**。
- #20–#23 的原始 PNG 全部已保存在 ChatGPT Library 的 `/MODEL-2.9/livery/` 中；**截至此次检查，四张原始 PNG 均未证实成功上传 GitHub**。当前 GitHub 仅归档相应说明、哈希与用户意见，不要声称完整图片已同步。

## 已明确确认
**DAY 黑对黑；NIGHT FULL REVEAL 所有反光部件同时亮起的最坏视觉压力测试**；同一版图案/同一侧面车身日夜对照；手绘形体曲线 + 有性能张力；留白；主色块→小 T 的宽广连续转场；轮拱/C 柱贴合；功能化而适当大胆的红色；形状尽量为实色可切的视觉语法，避免大量碎片和 mesh。

**2026-10-12 用户对 #20 最新反馈：** 同意此前评价，进一步指出“线条有点偏软”，希望先研究 AMG、Aston Martin、Bugatti、Pagani 等高性能车的运动拉花，**学习设计技巧而不是照抄**。研究笔记见 [Performance Line Language](../research/2026-10-12-performance-line-language.md)。研究还不是用户对任何下一版图案的批准。

**没有任何一张图获批为实际可生产贴膜。** 用户批准过设计方向，不等于批准车辆几何、选材或施工。

## 下一步设计建议（非批准）
以 #19 的克制方向、#20 的实际问题和[四个超跑品牌的运动设计参考](../research/2026-10-12-performance-line-language.md)为输入：保持前门空白与运动主势；**提升主要曲线曲率张力、局部收缩/突然收尖，避免第 20 版的匀速柔软丝带感**；删除 #20 下沿多条平行长线；将后门实色结构到后轮拱微 T 做真正的连续密度转化；只保留 1–2 个功能性红色 datum。**这些是助手建议，非用户确认。**

## 未验证事项
- 黑反光材料的真实日间黑度、光泽与 NIGHT 的角度相关强度。
- 对已有 Apterix matte PPF 的胶兼容、可移除性、耐久和施工难度。
- 精确实车 3D/UV、用户车辆升级外观件、轮拱/C 柱贴膜尺寸。
- 微型 T 的最低可切/排废尺寸、法规与安全要求。
- [Tesla Paint Shop UV 模板](../../model3-2024-performance/template.png) 只是屏幕贴图，不能直接当施工裁膜坐标。

**其他技术文件：** [DECISIONS](../DECISIONS.md) · [MATERIALS](../MATERIALS.md) · [V1](../iterations/0001-2026-10-11-ghost-reflective/) · [V2](../iterations/0002-2026-10-11-ghost-aerodynamics/) · [V3](../iterations/0003-2026-10-11-track-kinetics/) · [Tesla T SVG 来源](../assets/README.md)。
