# MODEL 2.9 — Ghost Livery Workshop

**Primary project workspace for the 2024+ Tesla Model 3 Performance (M3P) stealth-texture wrap.**

This folder is separate from the upstream Tesla templates. We keep the original `model3-2024-performance/template.png` unchanged and use it for UV layout checks.

## Design brief

- Vehicle: 2024+ Tesla Model 3 Performance / matte-black Apterix color PPF.
- Goal: a second-layer **texture livery**, low visibility during the day and striking when illuminated at night.
- Acceptable candidates: black retroreflective film or a tested transparent/special-effect film; material **not yet selected**.
- Avoid: broad opaque color blocks, conspicuous daytime graphics, large conventional racing stripes.
- Visual direction: hairline aero contours, fine parametric fade, sparse engineering labels; prototype identity `MODEL 2.9 / EVT-2.9-0001`.
- No final layout, material, or physical installation has been approved.

## Navigate

| File | Purpose |
|---|---|
| [DECISIONS.md](DECISIONS.md) | Confirmed decisions vs proposed ideas vs open questions |
| [WORKFLOW.md](WORKFLOW.md) | New-iteration naming, approval & review checklist |
| [MATERIALS.md](MATERIALS.md) | Material candidates and PPF compatibility checks |
| [iterations/0001-2026-10-11-ghost-reflective/](iterations/0001-2026-10-11-ghost-reflective/) | First exploratory design study, images, parameter file and code |

## Design iterations

| Version | Status | Description | View |
|---|---|---|---|
| [0001 — Ghost Reflective](iterations/0001-2026-10-11-ghost-reflective/) | Exploratory / no approval | Aero Flow, Parametric Fade, Engineering Blueprint, day/night previews | [Preview gallery](iterations/0001-2026-10-11-ghost-reflective/README.md) |

## Technical truthfulness

- Tesla's [official UV atlas](../model3-2024-performance/template.png) is for **on-screen vehicle preview**, not a 1:1 plotter/cutter file.
- SVGs here are **concept side-view illustrations**, not measured photos.
- Generated night versions approximate a flash/retroreflection appearance, **not real-world reflectance**.
- Validate UV placement in the actual Tesla Paint Shop and physical cut patterns with the installer; never cut on existing PPF.

## Source

Based on this repo's Tesla 2024+ Model 3 Performance UV template. See [original vehicle guidance](../model3-2024-performance/README.md).
