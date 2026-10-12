# MODEL 2.9 — Session & GitHub Handoff Protocol

## 迭代
1. 查看 #19 原图、[当前状态](CURRENT_STATE.md)和[设计边界](DESIGN_GUARDRAILS.md)；看不到图请让用户提供，勿假装已看。
2. 每次只改 1–3 个核心视觉变量（线条张力、T 过渡、红色 datum、轮拱/C 柱），保证 DAY/NIGHT Full Reveal 图案同源。
3. 渲染后等用户反馈；确认设计方向 ≠ 批准施工。
4. **用户已在 2026-10-12 明确授权：以后每一版渲染和每轮意见都同步到 GitHub，无须每次再次确认。** 保留原始图片、新评论、用户反馈的先后顺序；禁止把助手评价写成用户确认。提交成功后验证远端 PNG 大小/SHA/预览；如果二进制传输失败，优先把原图保存在 ChatGPT Library 并在 GitHub 记录明确的 pending 状态，待能获取原始字节时再补传，切勿声称成功。

## 新版本的归档结构示例
```text
livery/iterations/0005-YYYY-MM-DD-ghost-sculpture/
  README.md
  NOTES_zh.md
  renders/
    01_day_night_full_reveal.png
```
保留旧的 0001–0004 文件，不覆盖原图；在审美探索阶段不虚构可复现 ImageGen 脚本/seed，也不以未经测量的几何生成 cutter 轮廓。

## Notes 模板
```md
- 输入原图/版本：
- 本轮要解决的问题：
- 修改（1–3 项）：
- DAY 和 NIGHT FULL REVEAL 观察：
- 用户反馈、明确保留、明确否决：
- 施工及材料未验证项目：
- 原始 PNG 文件名、字节数、Git blob SHA：
- 批准状态：未批准 / 用户认可审美方向 / 用户明确批准设计
```

## GitHub 上传和验收
- 先读取 `master` 当前 HEAD，新增独立目录。
- 原始 PNG 以 **无损 Base64 编码传送原字节**，不能压缩为 JPEG、缩小图尺寸或覆盖历史图。
- 用一次 Git tree/commit 更新相应图和文档；更新项目索引与交接文件。
- 提交后从 GitHub 再读每个文件 SHA 和大小，实际数量以及 README 内嵌的 **全部图片预览**；不仅有链接，更应能在 GitHub 直接看全图集。
- 过去曾出现“19 文件存在但首页只预览部分图片”的体验问题；必须分别核验**上传完整**与**图集完整可见**。
- 只有 GitHub 验证后才报告成功。材料亮度、底膜兼容、实车几何、T 最小可切尺寸未通过实验前，不称施工可行。
