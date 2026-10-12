# MODEL 2.9 — Ghost Livery Workshop

**Primary project workspace for the 2024+ Tesla Model 3 Performance (M3P) stealth-texture wrap.**

This folder is separate from the Tesla-sourced templates. Original `model3-2024-performance/template.png` remains unchanged and is an on-screen preview UV atlas, *not a full-scale vinyl cutter outline*.

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

## Technical boundaries

- Tesla Paint Shop lets us check visual 3D mapping; it does **not** validate optical reflection, film adhesive behavior or physical dimensions.
- UV previews are not measured cutters; cutter exports require per-panel geometry verification, seam/sensor clearances and sample tests.
- Night concepts are **simulations** until actual film is measured under selected lighting angles.
- Keep every iteration independently reproducible. Do not rewrite a frozen version to hide earlier decisions.

Reference Tesla template: [2024+ M3P](../model3-2024-performance/template.png). Original vehicle documentation: [README](../model3-2024-performance/README.md).
