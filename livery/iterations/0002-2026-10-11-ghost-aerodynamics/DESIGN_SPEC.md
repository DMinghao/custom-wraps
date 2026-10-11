# Design Specification — MODEL 2.9 / Ghost Aerodynamics

**Iteration:** 0002 · **Status:** direction approved, execution geometry/materials proposed · **Date:** 2026-10-11

## 1. Narrative and aesthetic thesis

**"Invisible at a glance; readable on inspection; revealed under illumination."**

Design the 2024+ M3P as a believable experimental prototype, **not** as a generic race-car wrap. Preserve the existing matte-black Apterix PPF as the dominant surface. Daytime reads as one restrained vehicle silhouette; at arm's length the owner discovers fine technical traces. Under headlights or flash, *selected* reflective features become visible. The material alone never claims real self-luminescence.

Do not imitate a mass-production stripe kit, large geometric color blocks, broad chessboard patterns, or a full-vehicle fake engineering wireframe. Leave deliberately blank zones.

### Approval semantics

**Confirmed by owner**
- Three languages must coexist in one system.
- Aero Flow should follow the M3P's body **ridges and defining shapes**, not an arbitrary UV grid.
- Parametric Fade should feature the **Tesla T** logo as a recurring motif, inspired by AMG's repeated-brand pattern principle.
- Engineering Blueprint revolves around the **MODEL 2.9** prototype identity.
- Daytime should remain black/transparent and visually restrained; reflective or luminous effects may be tested.

**Proposed only**
- Distribution per panel, typography, graphics density, line width, material ratio, color and final placement.
- Use of the ID `EVT-2.9-0001` as a supporting serial: from the broader project identity, but final positioning and frequency are open.

## 2. Visual hierarchy

Three interlocking systems, proposed *attention weight*, **not coverage percentage**:

| Layer | Proposed attention weight | Meaning | Rules |
|---|---:|---|---|
| A — **Aero Flow** | ~60% | Vehicle contour / controlled airflow | Sparse families of guided curves, local line-width and spacing changes; end lines gracefully |
| B — **Tesla T Fade** | ~25% | Brand-coded energy diffusion | Micro-T glyphs released from flow lines, progressive density/scale/orientation changes |
| C — **MODEL 2.9 Blueprint** | ~15% | Prototype/engineering provenance | Tiny typographic identifiers, datum ticks and a few measuring arcs; **no background grid** |

Prioritize **A as the structure**, **B as the transition**, and **C as a semantic accent**. The three layers must not all peak in the same location.

### Visual rhythm

- **Front:** quiet initiation; few flowing elements, high negative space.
- **Middle:** clean, continuous direction; little particle noise.
- **Rear door to rear quarter:** single composition climax. Curves separate into T fragments, peak *locally*, then dissolve before the tail.
- **Tail:** purposeful cessation. Do not wrap a continuous white-reflective banner around the rear.
- Suggested starting coverage *for visual trials only*: >80% perceived matte-black negative space at side-view distance. Quantify after geometry and materials are known, not by multiplying UV pixels.

## 3. Aero Flow grammar

**Core design rule:** line family **follows a reference contour on the real body**, then reacts to neighboring convexity/concavity, wheel-arch volume and panel transitions.

Required anchor families (geometry to be measured/verified):
- **H1 / hood:** paired longitudinal hood volume or edge highlight paths; minimize crossing the center logo.
- **S1 / upper-side:** an interpreted shoulder/upper-door volume, not a fabricated continuous hard crease.
- **S2 / lower-side:** lower door sculpting and sill-adjacent form.
- **R1 / rear haunch:** the increase in volume above/forward of the rear wheel.
- **Wf / Wr:** front/rear wheel-arch exclusion and curvature landmarks.

Proposed line syntax:
- Separate **primary** strands from **secondary** field lines: vary width and spacing in a locally coherent way.
- At least one noticeable **compression**, one **splitting/peeling** event, and a gradual **fade-out** before the rear edge.
- Avoid perfect sine waves, equidistant strips across all doors, mechanical repetition of the same Bézier offset, and paths that visually "jump" at door seams.
- Reserve a seam-exclusion band, then split physical strips into separate cut objects per body panel. A **visible continuous impression** does not require a physically continuous decal.
- Avoid strong contours directly on door handles, trim, glass, cameras, lights or required reflectors.

## 4. Parametric Fade: authentic Tesla T glyph field

The motif must be a **recognizable Tesla T on close inspection**, but from several meters should resolve into directional technical texture — not a "wallpaper of logos".

- Use one consistent, reviewed **vector master glyph** rather than drawing a generic "T" font glyph.
- Keep glyph aspect ratio invariant; rotate the whole glyph with flow tangent, do **not** shear or distort individual T geometry to fake streamline direction.
- Convert *some* end regions of flow lines into particles: start with very sparse symbols; build locally toward the rear-quarter crest; diminish rapidly beyond that region.
- Density is conditioned on location, ridge curvature, distance from boundaries and surrounding line strength. Use seeded Poisson-disc sampling / rejection to control gaps and prevent grid/checkerboard artifacts.
- Scale and relative rotation may vary within an approved band; cap angle deviation from local flow so the motif remains intentional.
- Reserve at least two visually quiet gaps in particle fields to preserve form definition and prevent reflective massing.
- Left/right graphic flow should visually balance. The letterform/logo must not be unintentionally mirrored; text should remain readable on both sides.
- Use the actual Tesla mark only for this personal concept; do not imply Tesla endorsement or use an unverified raster approximation as a licensed production asset. Confirm any external vector asset provenance before committing it.

**Trial size (not approved cutting spec):** sample several motif sizes and stroke/feature widths in physical millimeters *after* panel measurements. Do not convert a 1px UV line into a guessed physical 1mm line.

## 5. MODEL 2.9 / Engineering Blueprint identity

**Role:** tell a fictional R&D vehicle story with discreet, internally consistent visual metadata.

Proposed text hierarchy:
- **Primary title**: `MODEL 2.9` — at most one subtle signature per side; optionally a second tiny hood identifier, pending owner review.
- **Serial**: `EVT-2.9-0001` — supporting identifier, visually subordinate.
- **Category notes** (choose a few, never all): `EXPERIMENTAL PROTOTYPE VEHICLE`, `AERO SURFACE STUDY`, `FLOW FIELD REFERENCE`, `SURFACE PACKAGE / 2.9`.
- **Graphic**: three-to-five short datum ticks near a reference curve, one annotated tangent or normal, one restrained radius/measurement arc, **not arbitrary grids covering the doors**.

Treat names and engineering words as *design fiction*, not as verified Tesla production specifications. Do not label fake torque/power/aerodynamic coefficients as factual values.

Proposed composition rule: typography should be readable only at close viewing distance in daylight; if nighttime reflections make it large and loud, reduce the reflective part or move text to nonreflective near-black film.

## 6. Day/night material grammar

| Surface/material class | Proposed artwork | Day behavior | Under vehicle lights |
|---|---|---|---|
| **BASE** | Original matte-black Apterix PPF | Unchanged | Unchanged; reference surface |
| **SHADOW** | Main sparse Aero lines, selected data marks | Black/near-black; finish must be sample-matched to PPF | Low visibility (not self-emissive) |
| **REVEAL** | A selected subset of flow highlights / Tesla T fragments | Black film, potentially visibly glossier than BASE | Headlight/flash reflection from appropriate geometry |
| **SPECIAL** (optional) | Very small test-only area | Transparent UV/reactive or glow candidate | Only responds to its actual excitation/charging conditions |

**No supplier or material is approved.** A shiny black reflective film can be quite conspicuous on matte-black PPF in sunlight, even if the printed color matches. Test adhesive compatibility and safe removal on Apterix PPF before any large application. Do not overlay matte film on reflectors without verifying any loss in retroreflection; no guarantee of visual match. Consider rear-facing reflectivity/color limits and do not obstruct required visibility equipment.

Material tags belong to vector elements from creation onward, not reconstructed by color after exporting.

## 7. Quality bar / review protocol

A proposal passes concept review only when:
1. At 5–10m, the car reads as **mostly clean matte black**; livery does not create a broad racing-stripe silhouette.
2. At ~1m, the main flow lines follow visible mass and geometry, and Tesla T symbols can be discovered but do not dominate.
3. At headlight/flash exposure, there is a **hierarchy of revealed features**, rather than every line becoming uniformly white.
4. `MODEL 2.9` text is legible at deliberate close distance and not mistaken for a decal advertisement.
5. The same master design can generate coherent plan/side/3-quarter views and UV output.
6. There are no seams, wheel arches, cameras, lamps, handles or safety/required-reflector collisions.
7. The eventual cut sample survives weeding, adhesion and removal tests; the production export uses **measured** geometry.

## 8. Explicitly not yet done

No side elevation with approved ridge control points, 3D mesh registration, verified UV anchor mapping, material reflectivity measurements, or physical cutter paths. Those are gates for the next execution stage and cannot be inferred from the Tesla Paint Shop UV PNG alone.
