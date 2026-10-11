# V3 iteration plan — MODEL 2.9 / Track Kinetics

## A. Redefined character

**Objective:** aggressive but restrained track-prototype visual language. NOT soft luxury pinstripes; NOT fake race-car decal slabs.

**Design grammar:** 2–4 main directional *events* per side (shorter tension-bearing sweeps, aggressive compressions, angular clipping, breaks and dispersal); Tesla T symbols evolve from the movement and share the same spatial field; MODEL 2.9 geometry annotations sit at deliberate feature anchors. Most of the car remains matte black.

We retain the three user-confirmed layers:
- **Aero Flow** — no longer means equidistant long smooth lines; instead guided movement constrained by actual upper/lower creases.
- **Tesla T Parametric Fade** — import actual vector path, non-grid adaptive particle field, oriented to a meaningful path tangent; selective fragments.
- **MODEL 2.9 Engineering** — minimal purposeful identity marks and test metadata (not pseudo-CFD measurements).

The 60:25:15 V2 visual weight was a proposal, NOT a design invariant. V3 should explicitly compare more aggressive distributions.

## B. Execution sequence (do not skip geometry)

### Stage G0 — Build truthful blank car and land-mark map (blocking)

1. Select **2024+ Model 3 Performance** side reference (near-perpendicular, no wide-angle distortion). Prefer owner photo of actual matte-black car and 3/4 reference to capture existing PPF and any installed aero bits. A web Tesla media-gallery asset can be inspected but not republished in public repo without rights.
2. Calibrate wheel centers and global length using Tesla manual: 4724 mm length, 2875 mm wheelbase, 1430 mm height, 872 mm front/977 mm rear overhang (approximate factory figures).
3. Trace body outer silhouette plus **actual wheel wells (cutout, not overpainted circles)**, window/B/C pillar geometry, headlights/taillights, front bumper/splitter, rocker/side skirt and Performance rear spoiler/diffuser silhouette; draw panel seams and camera/door handle exclusion regions.
4. Side reference and traced geometry are **separate** assets with known origin. Add a side-by-side overlay/checkpoints; keep any third-party protected photos out of public repo if not licensed.
5. **Before adding livery:** owner reviews a fully clean, correctly recognizable M3P side profile. A bad silhouette fails the gate.

**Initial precision target (internal visual QA, not factory tolerances):** normalized front/rear wheel-center x position within ±1% of total vehicle length, mean traced key-contour displacement ≤1% of length in an appropriate orthographic reference image. Manually inspect local silhouette at rear spoiler and wheel-arch transitions. Targets may tighten after source quality assessment.

### Stage G1 — Three performance-oriented side compositions

Same accurate blank car, exact same lighting, identical three-layer semantics. Compare:

**A / Shear Vector** (likely front-runner): 2–3 short focused flow wedges emerge behind front wheel/lower door and accelerate diagonally into sharp breakup near rear haunch; T shards in the wake; maximum perceived speed with modest area.

**B / Fractured Aero:** broken short 'cut' strokes aligned to different volume changes; deliberate intervals/rejoins, strong negative space, fewer continuous lines. Avoid random scratch marks and flame graphics.

**C / Kinetic T Field:** near-absence of continuous striping; Tesla T is primary visible microtexture, density and orientation changes form a broad *diagonal movement silhouette* without large solid patches. Use brand identity as texture rather than billboard.

**Deliverables:** one side comparison board containing all three, both daylight and illustrative directed-light view, plus 100% crop showing glyph detail. **Do not generate separate vehicle silhouettes per candidate.**

### Stage G2 — Authenticated vector integration & manufacturable micro-geometry

1. Load [Tesla T Simple Icons SVG](../../assets/tesla-t-simple-icons.svg) as source reference, preserve original immutable copy and upstream SHA; optionally compare to Wikimedia Tesla.com-attributed version.
2. Fit a custom transform with **uniform** scaling and intact topology. No horizontal mirror or fake text glyph.
3. Use variable-density, variable-radius Poisson/rejection sampling in meaningful calibrated panel coordinates; connect release of glyphs to main flow endpoints, with quiet zones and panel edges.
4. Produce a physical print/cut sample card with multiple motif sizes (example trials: 15 / 20 / 30 / 40 mm high), plus representative strip width variants. **Examples are test specimens, not approved minima**.
5. Test small T cap/stem retention, transfer film/installation efficiency, cleaning and removal on existing PPF. Sparse, larger logos may need preference over thousands of micro-logos.

### Stage G3 — ID and lighting material differentiation

- Prioritize `MODEL 2.9` as a 1–2 location signature anchored to a feature/technical datum, not a broad lower-door title.
- Add `EVT-2.9-0001`, minor event/witness ticks, geometric reference arcs, and any fictional engineering descriptions only where deliberately legible.
- Trial `SHADOW` low-contrast black vs `REVEAL` black reflective *independently*; actual matte/gloss daytime discrepancy must be evaluated in sunlight.
- Simulate daylight overcast, daylight glancing glare, night front illumination and night oblique illumination; label the result ARTISTIC simulation until real material photometry exists.

### Stage G4 — Registered UV and 3D review

1. Once side/front/back panel concept is selected, map through calibrated panel topology into the existing Tesla UV atlas; verify left and right are **normal-reading** at all angles.
2. Output `1024×1024` Paint Shop PNG per Tesla specs and a separate *design master* vector (not yet 1:1 cut pattern).
3. Verify Tesla Paint Shop 3D, hood/doors/rear-quarter seams and sponsor/color compliance as relevant.
4. Only after physically measured outlines and installer checks, produce cut-ready vectors.

## C. Source/tool architecture improvements

- One correct car body geometry master (`body.json`, with control point provenance and review state).
- One immutable Tesla T SVG master, referenced by hash.
- One graphic scene (`scene.json` / deterministic renderer), and separate material-tagged layers.
- All three candidate designs generate from the same body, but own parameters and seeded sampling.
- Geo alignment before aesthetics: no random placement in global canvas x/y detached from panel/feature.
- Rendering: side, 3/4 if mesh/projective reference available, 100% crop, day/angle-light; use transparent export layers.
- Lint rules: no visual material outside painting surfaces; T minimum internal gap checks in **physical** units; no reflective white rear-facing layout without review; all repeated motifs properly oriented.
- Publish PNG and SVG into `previews/` only when corresponding source/config can regenerate them.

## D. Project decisions and review sequence

| Review gate | User-visible output | Approval |
|---|---|---|
| 1. Geometry lock | Blank calibrated M3P side + landmarks overlay | Owner confirms recognizability before design |
| 2. Art direction lock | A/B/C comparison board on **same** vehicle + side detail crops | Owner chooses or merges |
| 3. Motif lock | Tesla T macro/micro size and spacing sheet | Owner approval after physical samples |
| 4. Material/UV lock | Day/realistic illumination refs + Tesla Paint Shop angle checks | Installer/material tests and owner |
| 5. Production lock | Measured vectors + installation plan | Installer + owner |

V3 is **not** authorized to use unverified Tesla-owned photos on publicly redistributed preview sheets, or to claim measured aerodynamic performance from decorative graphics.

## E. Open questions (not blockers to plan)

- Which exact owner's aftermarket spoiler/rocker/front lip are installed vs conceptual?
- Is it aesthetically preferable to peak motion at rear **door** vs rear **quarter** once true panel split geometry is registered?
- How visible should near-black decals be at 1 meter in bright sunlight?
- Which material/adhesive will be practical over Apterix matte PPF?

No guesses on these will be silently recorded as decisions.
