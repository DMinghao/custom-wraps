# Decision Register — MODEL 2.9 Ghost Livery

Last updated: **2026-10-11**. Only mark something *Confirmed* when the vehicle owner explicitly decides it; assistant suggestions are not approvals.

| ID | Status | Decision / question | Basis / next validation |
|---|---|---|---|
| D-001 | **Confirmed** | Use the existing **matte-black Apterix PPF** as the background. | Existing vehicle finish |
| D-002 | **Confirmed** | Add a **second-layer livery** without replacing the current PPF. | Project requirement |
| D-003 | **Confirmed** | Favor **fine textures and linework**, not big colored blocks. | Project requirement |
| D-004 | **Confirmed** | Keep daytime appearance **black or nearly invisible/transparent**. | Project requirement |
| D-005 | **Confirmed** | Either **retroreflective or photoluminescent/UV effects** may be evaluated. | Project requirement; no winning material yet |
| D-006 | **Confirmed** | Project workbench is this GitHub repo and its `livery/` folder; retain design decisions, versioned images and source code. | Repository workflow |
| D-007 | **Proposed** | Mix Aero Flow + Parametric Fade with restrained Blueprint telemetry details. | Design recommendation, **not approved** |
| D-008 | **Proposed** | Use `MODEL 2.9` and `EVT-2.9-0001` as hidden microtype. | Existing prototype theme; placement TBD |
| D-009 | **Open** | Pick exact black reflective/transparent material (incl. gloss differential). | Request samples; inspect daylight, headlight reflectance |
| D-010 | **Open** | Verify vinyl adhesive compatibility with Apterix matte PPF and removal process. | Ask film maker + wrap installer; patch-test inconspicuous spot |
| D-011 | **Open** | Confirm individual panel placements/seams and sizing with Tesla 3D Paint Shop. | Run `render-uv.py` and verify in vehicle |
| D-012 | **Open** | Confirm physical cutting and local visibility/color requirements. | Installer, applicable rules and manual measurements |

## Why there are only proposals for the final design

Iteration 0001 is a visual exploration. Neither its UV pattern nor any supplier is a final purchasing/production specification.

## Record format for every future decision

`D-### | status | what was decided | date | evidence/iteration | reason | supersedes`.
Retain superseded choices for traceability rather than silently deleting history.
