# Iteration 0002 — MODEL 2.9 / Ghost Aerodynamics

**Date:** 2026-10-11  
**Stage:** Design specification + per-panel plan + implementation architecture (**no new rendered preview has been generated in this iteration**).  
**Target vehicle:** Tesla Model 3 Performance (2024+) with existing matte-black Apterix PPF.

## Creative direction

**One integrated system, not three competing skins:**

1. **Aero Flow** — follow *verified* body shape/ridge landmarks; converge, diverge, end intentionally.
2. **Tesla T Parametric Fade** — micro-T emblems inherit the local flow direction and move from continuous lines into dispersed fragments.
3. **MODEL 2.9 Engineering Blueprint** — sparse engineering annotations and visual datum marks serve prototype identity; never a full-body grid.

Confirmed direction comes from the owner. **Locations, densities, proportions, materials and dimensions are proposals, not approved fabrication specifications.**

## Read in order

1. [DESIGN_SPEC.md](DESIGN_SPEC.md) — the creative and material-layer design system.
2. [PANEL_PLAN.md](PANEL_PLAN.md) — hood/front fender/front door/rear door/rear quarter/tail layout and exclusion zones.
3. [ARCHITECTURE.md](ARCHITECTURE.md) — technical solution and V2 code/module/data contract.
4. [config.json](config.json) — versioned, machine-readable proposed parameters and unresolved requirements.

## What changed from 0001

| 0001 | 0002 |
|---|---|
| Three isolated graphic candidates | Unified, complementary visual hierarchy |
| Arbitrary lines on approximate UV coordinates | Geometry-anchored concept before UV projection |
| Random diamond dots | Directional Tesla T glyph sampling / flow-to-symbol transition |
| Large blueprint grid | Limited, intentional MODEL 2.9 identification system |
| Independent SVG and PNG generators | Proposed **single authoritative scene model** shared by every export |
| Uniformly bright "night" palette | Material-tagged artwork + explicitly illustrative exposure previews |

## Gates before implementation

- **G0:** Get acceptable front/side/rear/high-three-quarter view references; identify true ridge landmarks and panel seams (do **not** infer 3D surface topology from a 2D Paint Shop atlas).
- **G1:** Generate a full-side composition and confirm proportions, story, negative space with owner.
- **G2:** Establish a controlled UV map with left/right orientation; verify in actual Tesla Paint Shop.
- **G3:** Sample-test vinyl on an inconspicuous Apterix PPF area and verify cutting/weeding at physical sizes; assess rules on color and reflector appearance.
- **G4:** Only then create actual full-size vectors for installer checking.

Reference UV atlas: [official repo template](../../../model3-2024-performance/template.png). Prior work: [Iteration 0001](../0001-2026-10-11-ghost-reflective/).

### Production disclaimer

Tesla's 1024×1024 UV PNG is **a visualization texture**. It has neither physical length scale nor safe knife paths. All night brightness in concepts is artistic simulation and is not a measurement of retroreflectivity.
