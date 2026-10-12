# MODEL 2.9 — Current State / 2026-10-12

## 最新 #28 — Precision Ridge Refinement（2026-10-12）
- [#28 原图+评价](../iterations/0013-2026-10-12-v28-precision-ridge-refinement/) 已一并提交 GitHub：**1672×941，1,867,423 bytes，Git blob `87de690cd9c7f48fd6adeb0e98a795142d8367fe`**，与原始 PNG SHA 一致。ChatGPT Library 同时留存原图。
- 助手主观评分 **8.5/10**（#27 为 8.3）；**用户尚未给 #28 本人评分**。前翼子板短楔更收敛、整体结构相对完整，前门空白得以保留。但上部横向亮线仍过长、后轮拱/T/尾部略满、局部装饰尾楔仍需删减。
- **#29 助手建议、非用户批准：**以 #28 硬朗脊线为基线；实体缩短/结构性断开上部长反光线（不能夜间变暗）；后轮拱与尾部削掉一处抢眼亮片，真实零件边界为优先。不要添加 GT 丝带、生物性轮拱或机甲碎片。
- **原图归档已验证：**#20–#28 的 PNG 都在 GitHub 迭代目录的 `renders/`，旧版正文中的 pending 提示已过期。查看[综合图集](../visual-archive/RENDER_GALLERY_20_ONWARD.md)。



## 2026-10-12 图片补传验收完成（高优先级最新状态）
- GitHub 已有 **#20–#27 共八张原始 PNG**，分别位于独立迭代目录 `renders/`。仓库中文图集：[RENDER_GALLERY_20_ONWARD.md](../visual-archive/RENDER_GALLERY_20_ONWARD.md)。
- 核对 GitHub 文件 size / Git Blob SHA-1 **8/8 与原始清单一致**。上传提交：[c68ab65](https://github.com/DMinghao/custom-wraps/commit/c68ab652e91f9b4c030663f2caa146ef86b482c4)。
- 本文早期所有“PNG 尚未上传 / pending”字样，是**此前状态的历史记录**，不再适用于 #20–#27。
- 批量上传工具：[sync_livery_pngs.py](../tools/sync_livery_pngs.py)；下一次新渲染必须执行真实上传、远端校验、更新图集，不能只提交文字。


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
- **#24 已生成**：[Tesla Experimental / Biomechanical Performance](../iterations/0009-2026-10-12-v24-tesla-experimental/)。助手 7.3/10：比 #23 更克制、前门留白恢复；但主弧仍柔软偏 GT、后轮拱过密、T 区域仍像分区贴纸、红色工程作用不足。夜间大体全亮，但局部灰白混合未通过严格等亮检查。**用户尚未对 #24 发表评价，也未批准具体配色方案。** [原设计简报](../design-briefs/24-tesla-experimental-color-and-form.md) 保留。
- #20–#27 的原始 PNG 全部已保存在 ChatGPT Library 的 `/MODEL-2.9/livery/` 中；**截至此次检查，这八张原始 PNG 均未证实成功上传 GitHub**。当前 GitHub 仅归档相应说明、哈希与用户意见，不要声称完整图片已同步。

## 最新 #25 进度（2026-10-12）
- [#25 Force Path 渲染及评价](../iterations/0010-2026-10-12-v25-force-path/NOTES_zh.md)：助手评价 **7.0/10**，相较 #24 的 7.3 未进步。保持黑色留白，但“主曲线→轮拱白圈→后翼子板 T→尾端三道白楔形”的构图出现固化；尾部像后期改装，红色未形成工程语义，受力蓄势仍不足。
- 用户这轮仅要求评价，**尚未发表针对 #25 的审美判断**，不可将助手的主观分数视为用户同意。
- 原始 PNG 已保存在 ChatGPT Library `/MODEL-2.9/livery/25_day_night_full_reveal_original.png`；**GitHub 二进制 PNG 仍待成功上传**。
- **对 #26 的助手建议（非批准）：**从真实改装实车结构重新建立形体锚点，而非不断局部修改重复图案；删去后轮拱装饰性白圈和尾部多道悬空楔形，增强局部压缩受力点；T 纹理用离散图形/密度、红色只服务工程含义；夜间所有反光元素统一全亮且无任何渐变。

## 最新 #26 进度：硬朗脊线成为新的审美基线（2026-10-12）
- **用户正式放弃“生物式/肌肉生长”贴花路线**，转向**坚实、贴合车身实际 shoulder/ridge/折线的短促硬朗结构图形**，保持高级工程原型感；不能用机甲碎片代替结构。
- [#26 原始渲染的用户反馈及助手评价](../iterations/0011-2026-10-12-v26-ridge-led-prototype/NOTES_zh.md)：用户给 **约 80 分**，认为前翼子板可能缺少一些设计；助手评价 **8.1/10**，目前比前几版更值得沿用，建议前翼子板只加一笔局部脊线呼应，前弱后强、保留中段留白。
- **显著的视觉生成错误：#26 PNG 左下角误标 `VERSION 25`；实际版本仍为 #26。** 原始 PNG 不应被无声覆盖，下一版必须写正确编号。
- 原始 #26 文件已保存于 ChatGPT Library `/MODEL-2.9/livery/26_day_night_full_reveal_original.png`；**GitHub 二进制图片仍待上传**。用户并未批准真实施工。

## 最新 #27 状态（2026-10-12）
- [#27 Front Ridge Refinement + 助手评价](../iterations/0012-2026-10-12-v27-front-ridge-refinement/NOTES_zh.md)：助手 **8.3/10**（高于 #26 的 8.1），前翼子板新增局部楔形，和后侧脊线有了呼应；硬朗、黑色前门静区得以保持。但新增楔形略厚，夜间上部长直线略像 LED/GT pinstripe，后轮拱/T/尾部还略显拥挤。**用户尚未对 #27 表态**，不要冒充他确认 8.3。
- 目前先把 #26–#27 作为值得保留的**脊线硬朗方向**。下一轮只改少数部位：缩窄前翼子板楔形、缩短或结构性断开上部亮线、减掉后轮附近冗余轮拱亮边/尾部装饰。
- **#27 PNG 左下角版本正确为 VERSION 27**（#26 上的版本错标问题未在 #27 重现）。#27 原图保存于 ChatGPT Library `/MODEL-2.9/livery/27_day_night_full_reveal_original.png`，GitHub 图片二进制上传依然 pending。

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
