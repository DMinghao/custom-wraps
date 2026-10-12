# Decision Register — MODEL 2.9 Ghost Livery

Last updated: **2026-10-11**. This file separates **owner-confirmed direction** from design proposals; agreeing to a direction is not fabrication approval.

| ID | Status | Decision / question | Basis / next validation |
|---|---|---|---|
| D-001 | **Confirmed** | Keep existing **matte-black Apterix PPF** as the base. | Owner vehicle finish |
| D-002 | **Confirmed** | Add a **second-layer texture livery** rather than removing the current wrap. | Owner requirement |
| D-003 | **Confirmed** | Prefer **fine textures and linework**, not broad color blocks. | Owner requirement |
| D-004 | **Confirmed** | Preserve an understated **black/transparent daytime appearance**. | Owner requirement |
| D-005 | **Confirmed** | Reflective or luminescent mechanisms may be investigated; no final material selected. | Owner requirement |
| D-006 | **Confirmed** | This GitHub repo's `livery/` is the project workbench with design decision, code and visual history. | Owner requirement |
| D-007 | **Confirmed (updated)** | V2 combines **Aero Flow + Parametric Fade + Engineering Blueprint** in one design, not three independent competing options. | Owner explicitly accepted V2 integrated direction |
| D-008 | **Confirmed (concept)** | Blueprint/identity revolves around **MODEL 2.9**. `EVT-2.9-0001` may be supporting text; placement not approved. | Owner's explicit design instruction |
| D-009 | **Open** | Pick exact black retroreflective / transparent or glow material, assess daylight matte/gloss differential. | Physical samples |
| D-010 | **Open** | Verify adhesive compatibility, long-term behavior and safe removal on Apterix matte PPF. | Film maker/installer + inconspicuous patch test |
| D-011 | **Open** | Validate every mapped UV island and left/right panel position on vehicle. | Actual Paint Shop test |
| D-012 | **Open** | Define verified physical panel geometry, tolerances, cut test and legally permissible reflector appearance. | Measurements/installer/regulatory review |
| D-013 | **Confirmed (concept)** | Follow M3P **body ridges and major volume changes** with Aero Flow, instead of arbitrary UV grid patterns. | Owner explicitly requested |
| D-014 | **Confirmed (concept)** | Use the **Tesla T logo** as a parametric repeated motif, inspired by AMG repeated-tristar texture technique. | Owner explicitly requested |
| D-015 | **Proposed** | Place the main Tesla T density crest at rear door → rear quarter and keep front door/hood mostly calm. | V2 panel-study recommendation, owner review pending |
| D-016 | **Proposed** | Material-tagged `SHADOW` near-black linework plus selected `REVEAL` black retroreflective accents. | V2 materials hypothesis; feasibility unknown |
| D-017 | **Proposed** | Use a unified scene model, separate concept/UV/physical coordinates, and block unmeasured cutter export. | V2 engineering architecture; implementation pending |
| D-018 | **Open** | Establish reviewed/canonical Tesla T vector provenance and minimum physical viable symbol sizes. | Asset selection + sample testing |

| D-019 | **Confirmed (owner critique)** | V2's many long narrow parallel streamlines look **luxurious rather than sporty**; future graphics must emphasize dynamic performance, directional energy and graphic tension. | 2026-10-11 V2 feedback; V3 review |
| D-020 | **Confirmed (owner correction)** | The V2 full side outline is inaccurate; do **not** use it as the basis for V3 physical styling. | 2026-10-11 feedback; blank true M3P geometry first |
| D-021 | **Confirmed (owner request)** | Use an externally sourced Tesla T **SVG**, not the V2 hand-drawn approximation. | Simple Icons exact source captured as research asset; visual signoff still pending |
| D-022 | **Proposed** | Design `Track Kinetics` with 2–4 strong directional gesture groups + distributed Tesla T fade, rather than dozens of near-parallel pinstripes. | V3 conceptual direction; owner approval pending |
| D-023 | **Open** | Acquire perpendicular, appropriately reusable M3P photo/mesh with accurate contour registration. | Geometry-first V3 milestone |

| D-024 | **Confirmed** | Change to image-first creative exploration; pause geometry/UV code-first iteration until an acceptable render direction has been chosen. | Owner agreement in design conversation |
| D-025 | **Confirmed** | All intended black retroreflective elements must be **black/near-black in DAY views**, not bright white; night appearances remain simulated. | Owner explicitly corrected material/color logic |
| D-026 | **Confirmed** | Prioritize **solid-color cuttable shapes**; avoid simulated frosted/mesh-texture cutouts and excessive tiny cut features. | Owner repeatedly raised build complexity |
| D-027 | **Confirmed** | True **body ridge/volume** directions including roof/C-pillar, shoulder, lower doors, front/rear arches should inform all highlight graphics. | Owner's primary visual requirement |
| D-028 | **Confirmed** | T motif area can be larger while individual logo symbols remain small/fine and dense; require a **gradual structure-to-microtexture transition** rather than a hard border. | Owner's AMG-style transition feedback |
| D-029 | **Confirmed** | Retain strong **negative space**, avoid overly full/highly fragmented "street tuner" visuals and GT-like uniform parallel pinstripes. | Owner's recurring critique |
| D-030 | **Confirmed** | Use styling-sketch-inspired **curves with tension** to reinforce real vehicle form; avoid too-hard graphic bars. | Owner explicitly requested design sketch lines |
| D-031 | **Confirmed** | Red may be bolder but **function-coded** (datum, trajectory, release/transformation point), not random slashes/triangles. | Owner repeated preference |
| D-032 | **Confirmed** | Keep **NIGHT FULL REVEAL** — show all intended retroreflective graphics bright together as a *worst-case visual density stress test*; don't hide clutter through selective lighting. | Owner explicit clarification |
| D-033 | **Open** | Night material bright-color/response and geometry are **not physically verified** by AI render; no view is a cut-ready or true CAD map. | Actual PPF/material tests and dimensional mapping |

## Iterations

- [0001 — Ghost Reflective](iterations/0001-2026-10-11-ghost-reflective/): archived exploration; not production-ready.
- [0002 — Ghost Aerodynamics](iterations/0002-2026-10-11-ghost-aerodynamics/): agreed conceptual direction; panel distribution/implementation designs still **proposed**.

- [0003 — Track Kinetics](iterations/0003-2026-10-11-track-kinetics/): planning and geometry calibration; no approved V3 render yet.

- [0004 — AI Design Journal](iterations/0004-2026-10-12-ai-render-journal/): 19 original generated PNGs with detailed owner-feedback notes; **aesthetic reference archive, no final approval**.

## Decision-record format

`D-### | status | question/choice | timestamp | relevant iteration/evidence | reason | supersedes`

Preserve history. Never mark an illustrative night render, a 2D template or an untested adhesive as physically validated.
