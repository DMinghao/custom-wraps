# G0 preliminary preview QA — 2026-10-11

**Scope:** technical review of `blank-m3p-side.png` and `dimension-check.png`, created by `generate.mjs`. **Status: NOT APPROVED / NOT GEOMETRY LOCK.**

## Implemented & verified

- Repeatable SVG + PNG render via GitHub Actions (2200×1040), source control and geometry JSON.
- Official nominal body X proportions: 4724mm length; 872mm front overhang, 2875mm axle spacing, 977mm rear overhang; sum is consistent.
- Factory staggered 20-inch tire dimensions: 235/35R20 front; 275/30R20 rear, nominal OD ~672.5/673.0mm; axle/dimension check is programmatically asserted.
- Restored wheel-arch voids (fixed an earlier render masking issue), removed false floating rear-side triangle window, corrected long Catmull-Rom rocker interpolation and split the rocker visual line at wheel openings.
- No Tesla T particles, flow lines or real-world cutter vectors have been added before G0 geometry review.

## Deficiencies found — do not silently accept

1. **No registered photo overlay P0:** profile points were manually read from a near-side J.D. Power photo rather than extracted from a calibrated camera or near-perfect orthogonal side view. The X piecewise correction forces chassis anchor lengths but does NOT accurately unwarp every panel.
2. **Body silhouette remains uncertain P0:** nose radius/bumper, rear bumper, exact C-pillar, hidden roof/glass edges and rear spoiler are traced only approximately; wheel arches use trial circular clearances rather than measured openings.
3. **No surface mesh P0:** a correct silhouette would still not give the doors' compound curvature, shoulder volume and actual UV island mapping.
4. **User-car differences P0:** the pictured vehicle is stock studio white; the target has matte-black Apterix PPF, and the user's as-installed spoiler, front lip, wheel/tire and suspension stance must be confirmed. No inferential part installation claims.
5. **Wheel illustration schematic P1:** wheel spokes and brake-caliper graphics are decorative references, NOT the OEM Warp wheel geometry nor the actual photo trace. They should not anchor body measurements.
6. **Vertical scale approximation P1:** height uses 1430mm manual value; camera pitch, tyre loading and picture ground pixel location can bias local roof/wheel coordinates.

## G0 pass requirement

Acquire one near-perpendicular, near-waist-height actual-car full-side photo from a distance (telephoto preferred), no very wide-angle phone lens, car on level ground, whole body visible including both bumpers and wheels. Measure wheel centers and bumper extrema; perform overlay with a saved residual/landmark audit; verify window and actual aero/PPF finishes. If the photo is not available, acquire a demonstrably orthographic licensed 3D side render and mark unknown stock-vs-as-installed differences. Only with user approval may `geometryLocked` be set true.

## Recommendation

**Do not proceed to Track Kinetics body-aligned linework yet.** Present current preliminary reference, disclose exact validation limits, request as-installed photo and then register G0 before generating A/B/C trial designs.
