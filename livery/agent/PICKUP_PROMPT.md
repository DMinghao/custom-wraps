# MODEL 2.9 — 新 Session Pickup Prompt

复制以下内容到新 ChatGPT session；这是直接要求生成下一版图像的工作指令，而不是要新 agent 仅仅修改这些文字。

---

## PROMPT START

请继续我的长期汽车第二层贴膜项目 **MODEL 2.9 — Ghost Sculpture / Sculpted Velocity**。我们已经迭代了多轮，我希望在已经确定的审美原则上继续**实际生成一版新的日夜对照渲染图**，而不是重新开始讨论项目或者生成可施工切膜文件。

仓库：https://github.com/DMinghao/custom-wraps
项目工作区：https://github.com/DMinghao/custom-wraps/tree/master/livery
Agent 交接包：https://github.com/DMinghao/custom-wraps/tree/master/livery/agent
原始 19 图图库：https://github.com/DMinghao/custom-wraps/tree/master/livery/iterations/0004-2026-10-12-ai-render-journal
全部迭代笔记：https://github.com/DMinghao/custom-wraps/blob/master/livery/iterations/0004-2026-10-12-ai-render-journal/ITERATION_NOTES_zh.md
当前审美基线 #19：https://github.com/DMinghao/custom-wraps/blob/master/livery/iterations/0004-2026-10-12-ai-render-journal/renders/19_ghost_sculpture_full_reveal.png
过满反例 #18：https://github.com/DMinghao/custom-wraps/blob/master/livery/iterations/0004-2026-10-12-ai-render-journal/renders/18_sculpted_velocity.png
汽车设计手稿方向 #17：https://github.com/DMinghao/custom-wraps/blob/master/livery/iterations/0004-2026-10-12-ai-render-journal/renders/17_design_sketch_contour.png

请先读取仓库的 `livery/agent/CURRENT_STATE.md`、`DESIGN_GUARDRAILS.md`、`RENDER_QA.md` 与 `livery/DECISIONS.md`。如果无法访问 GitHub 或看不到原图，请明确说无法读取的内容，必要时请我直接上传 #19 作为视觉参考。**不要声称看过实际上未看到的图。**

### 项目背景
- 实车是 **2024+ Tesla Model 3 Performance (Highland)**，已有全车 **Apterix matte-black PPF**；只在现有底膜上叠加第二层图案。外形尽可能忠于真实车头灯、车窗、侧裙、轮拱、C 柱、Performance 轮毂与车身比例。
- 身份代号：`MODEL 2.9`，可加入极克制的 `EVT-2.9-0001` 工程编号。它们是概念车艺术语言，不是 Tesla 官方工程车认证。
- 气质：**高性能实验原型车、低调的隐形雕塑、汽车设计师的手绘线条**，不能成为鬼火街头改装、LED 灯条、豪华 GT 平行装饰线、赞助商品牌满贴的赛车。
- DAY：第二层黑反光膜依旧是黑色/近黑色，不要渲染出大面积亮银白贴纸；白天应该仍以哑光黑车身为主。
- NIGHT：必须保留 **NIGHT FULL REVEAL 最坏情况审美压力测试**，让**所有设计的反光图形同时清楚高亮显影**，而不能以选择性照明、阴影、部分弱显影来隐藏过满。这个测试不代表实际黑反光膜的物理光度响应。
- 日夜必须是**同一台车、同一完整侧视角、同样位置和几何的全部贴膜、相同红色标记和相同 T 区域**，唯一改变的是环境照明与反光膜可见亮度。

### 核心设计原则：持续做减法
1. **留白和主次比数量更重要**。优先一条有张力的主肩线与一条更短更弱的局部下部体块线，保持前门和中部有真正干净的黑色静区。即使全亮也不能过满。
2. **汽车设计手稿勾勒形体**：线条顺真实肩线、侧裙/门下折线、后轮拱、后翼子板和 C 柱/车顶走势变化，长弧线舒展但在关键节点曲率迅速收紧、收尖或自然中断。避免等粗超长亮条、直尺式折线、Z 形框架、豪华 GT 的多条平行 pinstripes。
3. **轮拱与 C 柱应真正参与结构**，而不是添加随意环绕轮拱的一道发光圆弧。通过少量线与微型 T 的密度场揭示真实车身体块。不能让红、亮弧与 T 在同一处三重抢戏，也不要将摄影的自然高光当作贴膜。
4. **Tesla T 微纹理**：后门→后翼子板的纹理覆盖区可以更广，但每个 T 较小、近看能识别，远处变成细密表面肌理；排列随真实体块方向形成分散/密度变化，不能是整齐矩形边界的 Logo 墙。
5. **主结构向微型 T 的长距离自然渐变**：从实色主图形边缘逐渐出现 T / 少量可切的小元素，主线收窄，T 变密并接管，末端自然渐隐。不能在主色块结束后才突然多出一块 T 贴纸。AMG 式品牌微纹理仅作为视觉逻辑参考，不复制其图案。
6. **施工思路上尽量实色简单**：不要利用 mesh/microperforation、雾化噪声、复杂磨砂/渐层印刷和大面积微孔形成效果。小 T 的实际可切/排废尺寸目前尚未测试，AI 概念不是可直接施工文件。
7. **红色可以更大胆但必须有功能语义**：可模拟视觉参考点 datum、流线起点、形体转换/纹理释放节点、极简工程标签。取消毫无意义的红三斜杠、红三角及随机红点，红色应形成一套统一语言。
8. 用户明确拒绝 #18 那种“**有点太满了，有点鬼火感**”，最新 #19 值得以其克制程度为基础，但**尚非定稿**：仍有上方主线略似 LED、纹理过渡不够自然和红色语义不明确等问题。

### 技术范围与边界
项目目前是**先审美图像，再适配真实几何，再做施工测试**。官方 Tesla Paint Shop `template.png` 是车机 UV 可视化图，不是按毫米测绘的裁切模具。还未确认黑反光膜实际亮度、对 Apterix PPF 粘胶兼容性、日间光泽差、贴合弧度、Tesla T 最小尺寸或法规。不要输出自称 cut-ready 的 SVG/DXF，不要假定 ImageGen 夜间发亮可在现实完全复现。

### 这次直接执行
- 用中文简洁说明你准备在 #19 的基础上**保留什么、删掉什么、强化什么**（不必重述一长串历史）。
- **调用图像生成工具**生成一版新渲染：相同真实 Highland M3P 的 DAY / NIGHT FULL REVEAL 对照，完整侧视、白天全车照明可见、夜间所有反光元素都清晰亮起；尽量真实可信、不太满。
- 重点尝试更短但有张力的雕塑主线、更自然的后轮拱/C 柱关系、更广且过渡流畅的小 T 渐变、更统一的红色工程化语言。
- 图片出来之后等待我反馈，不要擅自反复生成或自动把图片上传 GitHub；我要求同步时再归档。
- 如果无法看到 #19 原图，请先让我附图再做基于原图的定向迭代；不要凭想象冒充直接参考。

## PROMPT END
