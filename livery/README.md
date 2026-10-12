# MODEL 2.9 — Ghost Livery Workshop

<!-- AUTO_PNG_ARCHIVE_START -->
**原始图像已上传并校验：** [查看 #20–#28 原始 DAY/NIGHT 图集](visual-archive/RENDER_GALLERY_20_ONWARD.md)。#20–#27 八张 PNG 的远端大小及 Git Blob SHA 与原始文件匹配；#28 图片已以相同严格方式原样提交。上传提交：[c68ab65](https://github.com/DMinghao/custom-wraps/commit/c68ab652e91f9b4c030663f2caa146ef86b482c4)。旧版本说明里的“PNG pending”是补传前的历史记录，不代表现在的实际状态。
<!-- AUTO_PNG_ARCHIVE_END -->

**Primary project workspace for the 2024+ Tesla Model 3 Performance (M3P) stealth-texture wrap.**

This folder is separate from the Tesla-sourced templates. Original `model3-2024-performance/template.png` remains unchanged and is an on-screen preview UV atlas, *not a full-scale vinyl cutter outline*.

## Resume in a new session

- [**Agent pickup prompt / 新会话直接复制**](agent/PICKUP_PROMPT.md) — paste into a new ChatGPT session and continue DAY / NIGHT FULL REVEAL rendering.
- [**Agent handoff folder**](agent/README.md) — current baseline, design guardrails, render QA and GitHub archive protocol.
- [Current status / 当前进度](agent/CURRENT_STATE.md) — #19 remains an aesthetic baseline; #20 has a new review, not final approval.
- [**#20 review / 第 20 版评价**](iterations/0005-2026-10-12-v20-ghost-sculpture/) — **PNG GitHub upload pending**; original preserved in ChatGPT Library.
- [**Performance Line Language / 超跑运动线条研究**](research/2026-10-12-performance-line-language.md) — AMG / Aston Martin / Bugatti / Pagani design techniques; no copying; #21 proposed brief.
- [**#24 Prototype Color & Tesla DNA brief**](design-briefs/24-tesla-experimental-color-and-form.md) — official-prototype plausibility becomes a core evaluation criterion; limited red + dark titanium proposed.
- [**#24 rendered review**](iterations/0009-2026-10-12-v24-tesla-experimental/NOTES_zh.md) — 7.3/10 assistant critique, **GitHub PNG pending; original backed up in Library**.
- [**#25 rendered review**](iterations/0010-2026-10-12-v25-force-path/NOTES_zh.md) — 7.0/10 assistant critique; recommends breaking away from the repeated ribbon/arch/T/rear-blades formula. GitHub PNG pending.
- [**#26 Ridge-led Prototype + owner feedback**](iterations/0011-2026-10-12-v26-ridge-led-prototype/NOTES_zh.md) — owner ~80/100, front-fender refinement requested, new visual baseline. Original PNG only in Library; GitHub PNG pending.
- [**#28 Precision Ridge — image and review**](iterations/0013-2026-10-12-v28-precision-ridge-refinement/) — assistant 8.5/10; original full-resolution PNG present and SHA-verified.
- [**#27 Front Ridge refinement & review**](iterations/0012-2026-10-12-v27-front-ridge-refinement/NOTES_zh.md) — assistant 8.3/10, review not yet owner-confirmed; GitHub PNG pending.

## AI rendering archive (2026-10-11 → 2026-10-12)

- **[Original full-resolution render gallery — 19 PNGs](iterations/0004-2026-10-12-ai-render-journal/)**. Exact original bytes, no resizing/recompression.
- **[中文审美与技术迭代笔记](iterations/0004-2026-10-12-ai-render-journal/ITERATION_NOTES_zh.md)** — user feedback, failures, constraints and accepted direction.
- **[Git SHA and byte-level manifest](iterations/0004-2026-10-12-ai-render-journal/ORIGINAL_FILE_MANIFEST.md)**.
- Current aesthetic study: **Ghost Sculpture + Night Full Reveal**; **not production geometry or physically verified reflectance**.
- Code-first G0 temporarily paused by owner's request: tune reference images before fitting programmatically.

## V3 current action

- [Independent V2 technical and aesthetic audit](reviews/V2_REVIEW_2026-10-11.md) — important owner-confirmed critique: too many calm luxury pinstripes and inaccurate vehicle silhouette.
- [G0 blank M3P study](iterations/0003-2026-10-11-track-kinetics/g0/) — first photo-informed 4724mm / 2875mm geometry study; not yet verified against owner's car.
- [V3 Track Kinetics plan](iterations/0003-2026-10-11-track-kinetics/PLAN.md) — no new graphics until calibrated M3P base; three sportier candidate graphic grammars.
- [Tesla T SVG asset provenance](assets/README.md) — vector sourced rather than hand-drawn.

## Core design principles

- Existing matte-black Apterix PPF stays dominant; additional textured film or tested optical materials must preserve daytime stealth.
- Avoid large blocks/stripes; build **fine linework, controlled negative space**, and geometry-guided reveals.
- **Iteration 0002 direction confirmed:** Aero Flow follows actual M3P shapes; parametric fade uses Tesla T micro-symbols; limited engineering details center on `MODEL 2.9`. Specific parameters, adhesive materials, body mapping and fabrication geometry are **not yet approved**.

## Navigate

| File | Purpose |
|---|---|
| [DECISIONS.md](DECISIONS.md) | User-confirmed choices, proposals and unresolved matters |
| [WORKFLOW.md](WORKFLOW.md) | Version lifecycle and QA |
| [MATERIALS.md](MATERIALS.md) | Black/transparent/reflective candidate materials |
| [0002 DESIGN_SPEC](iterations/0002-2026-10-11-ghost-aerodynamics/DESIGN_SPEC.md) | Unified design language and textile/material behavior |
| [0002 PANEL_PLAN](iterations/0002-2026-10-11-ghost-aerodynamics/PANEL_PLAN.md) | Hood, fenders, doors, rear and exclusion map |
| [0002 ARCHITECTURE](iterations/0002-2026-10-11-ghost-aerodynamics/ARCHITECTURE.md) | Design generator plan and validation gates |

## Design iteration history

| Version | Stage | Description | View |
|---|---|---|---|
| [0001 — Ghost Reflective](iterations/0001-2026-10-11-ghost-reflective/) | Preserved exploratory designs | Three independent textures; six UV PNG and six SVG concept previews | [V1 gallery](iterations/0001-2026-10-11-ghost-reflective/README.md) |
| [0002 — Ghost Aerodynamics](iterations/0002-2026-10-11-ghost-aerodynamics/) | **First integrated 2D side-study complete; no owner sign-off** | One coded scene, 28 guided paths, 78 provisional Tesla T marks, engineering identifiers; five SVG + five PNG previews; geometric validation still open | [V2 gallery, code & review](iterations/0002-2026-10-11-ghost-aerodynamics/) |

| [0003 — Track Kinetics](iterations/0003-2026-10-11-track-kinetics/) | **Plan / geometry gate paused** | Preliminary body tracing and sourced Tesla T; visual ideation temporarily takes priority | [V3 geometry and plan](iterations/0003-2026-10-11-track-kinetics/) |
| [0004 — AI Design Journal](iterations/0004-2026-10-12-ai-render-journal/) | **19 original PNGs + chronological critique, no approval** | Black-on-black daytime vs night full reveal, ridge curves, fine Tesla T, functional red, solid-cut constraints | [V4 gallery and notes](iterations/0004-2026-10-12-ai-render-journal/) |
| [0005 — Version #20 Ghost Sculpture](iterations/0005-2026-10-12-v20-ghost-sculpture/) | **Review archived; PNG upload pending** | 6.5/10 assessment; parallel lines and oversized T texture need simplification; original in Library | [#20 notes](iterations/0005-2026-10-12-v20-ghost-sculpture/NOTES_zh.md) |
| [0006 — #21 Sculpted Tension](iterations/0006-2026-10-12-v21-sculpted-tension/) | **Review; PNG only in Library** | 7.6/10 — improved tension and negative space, but still too pretty | [#21 notes](iterations/0006-2026-10-12-v21-sculpted-tension/) |
| [0007 — #22 Biomechanical Growth](iterations/0007-2026-10-12-v22-biomechanical-growth/) | **Review; PNG only in Library** | 7.2/10 — organic continuity, still too soft; reflective gradients rejected | [#22 notes](iterations/0007-2026-10-12-v22-biomechanical-growth/) |
| [0008 — #23 Overcorrection](iterations/0008-2026-10-12-v23-overcorrection/) | **Review; PNG only in Library** | 6.9/10 — stronger but fragmented, mecha-like, negative space compromised | [#23 notes](iterations/0008-2026-10-12-v23-overcorrection/) |
| [0009 — #24 Tesla Experimental](iterations/0009-2026-10-12-v24-tesla-experimental/) | **Render generated; review archived, original PNG only in Library** | 7.3/10 — stronger overall restraint, but still soft GT curves; rear quarter crowded; red underused | [#24 assessment](iterations/0009-2026-10-12-v24-tesla-experimental/NOTES_zh.md) |
| [0010 — #25 Force Path](iterations/0010-2026-10-12-v25-force-path/) | **Render generated; review archived, PNG in Library** | 7.0/10 — same visual formula repeated; wheel-arch white border and rear blades still too decorative | [#25 review](iterations/0010-2026-10-12-v25-force-path/NOTES_zh.md) |
| [0011 — #26 Ridge-led Prototype](iterations/0011-2026-10-12-v26-ridge-led-prototype/) | **Render/review archived; original PNG only in Library** | Owner rated ~80/100; assistant 8.1/10. Hard ridge-led graphics are new aesthetic baseline; front fender may need modest detail; image itself mislabels VERSION 25. | [#26 review](iterations/0011-2026-10-12-v26-ridge-led-prototype/NOTES_zh.md) |
| [0012 — #27 Front Ridge Refinement](iterations/0012-2026-10-12-v27-front-ridge-refinement/) | **Render/review archived; Original PNG in GitHub + Library** | Assistant 8.3/10: front fender improved, but triangle thick, upper luminous line long, rear-quarter still crowded; no owner review yet | [#27 notes](iterations/0012-2026-10-12-v27-front-ridge-refinement/NOTES_zh.md) |
| [0013 — #28 Precision Ridge Refinement](iterations/0013-2026-10-12-v28-precision-ridge-refinement/) | **Original PNG + review archived and verified** | Assistant 8.5/10 — fender structure refined; upper line still long, rear wheel zone slightly crowded. User hasn't rated #28. | [#28 image / notes](iterations/0013-2026-10-12-v28-precision-ridge-refinement/) |

## Technical boundaries

- Tesla Paint Shop lets us check visual 3D mapping; it does **not** validate optical reflection, film adhesive behavior or physical dimensions.
- UV previews are not measured cutters; cutter exports require per-panel geometry verification, seam/sensor clearances and sample tests.
- Night concepts are **simulations** until actual film is measured under selected lighting angles.
- Keep every iteration independently reproducible. Do not rewrite a frozen version to hide earlier decisions.

Reference Tesla template: [2024+ M3P](../model3-2024-performance/template.png). Original vehicle documentation: [README](../model3-2024-performance/README.md).
