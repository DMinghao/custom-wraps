# G0 reference and geometric limits

## Status

**G0 PROVISIONAL — NOT VERIFIED OR OWNER APPROVED.** This is a photo-informed *blank* 2024+ Model 3 Performance (not V2 hand-drawn contour and no livery), anchored to official chassis dimensions. An uncorrected reference photo is not a calibrated 3D or orthographic CAD view.

## Photo reference — NOT redistributed

J.D. Power studio image: [2024 Tesla Model 3 Performance white side view](https://cdn.jdpower.com/JDP_2024%20Tesla%20Model%203%20Performance%20White%20Side%20View.jpg), described on [their article](https://www.jdpower.com/cars/new-car-previews/2024-tesla-model-3-performance-preview).

The photo is copyrighted; **do not commit or redistribute the actual photograph**. For private review, overlay the generated SVG on the original viewed directly from the linked source. Control point coordinates (1000×750 source rendition) were manually read by visual inspection, so contour confidence is low. This is not automated image registration.

## Official size constraints

Tesla [2024+ Model 3 manual (Performance)](https://www.tesla.com/ownersmanual/model3/en_eu/Owners_Manual.pdf): approximate 4724mm length, 2875mm wheelbase, 1430–1431mm height (manual edition difference), 872mm front overhang and 977/978mm rear overhang (rounded by edition). The coherent axis set chosen here: **872+2875+977 = 4724mm**. Do not pretend the 978 alternative adds to 4724 without rounding reconciliation.

Tesla [2024+ service manual tires](https://service.tesla.com/docs/Model3/ServiceManual/2024/en-au/air/GUID-92AB1F42-7358-45AD-BACC-90A41BB3E715.html): front 235/35R20; rear 275/30R20. Nominal tire diameter calculated from sizing, not measured: front ~672.5mm, rear ~673mm.

## Correction method

- Axle X positions set from the **factory measurements**, rather than an arbitrary generic Tesla drawing.
- Photo x coords are mapped piecewise through approximate bumper/axle anchors (source x=[166,269,719,841]; mm=[0,872,3747,4724]). **This makes anchor lengths match specs but does NOT fully remove camera perspective.**
- Roof, hood, windows, B/C pillars, and shoulder are roughly traced from the photo. This is much more specific than a synthetic generic shape but still a preliminary approximation.
- Upper body is not fully physical: a seam or curve can be displaced; compared against a user-supplied perpendicular photograph before accepting design on it.
- Front/rear wheel openings drawn as nominal rounded apertures (clearance margin vs tire radii); not an OEM measured aperture.

## Unresolved G0 gate

1. Align **user's actual M3P**, ideally near-orthographic photo shot level with door handles from a distance, front and rear wheel centered, with no extreme wide-angle distortion; any fitted front lips, spoiler, side skirts should be in view.
2. Overlay the SVG on the photo, annotate wheel center offsets, roof apex, hood leading edge, A/B/C pillars, bumper ends and both arches.
3. Require width, wheelbase, height checks and close human silhouette match with explicit coordinate overlay metrics.
4. Have owner approve blank side before any Track Kinetics livery work.

Only then set `geometryLocked=true` for the relevant *photographic side elevation*. This would still not imply known 3D UV or fabrication geometry.

## Regenerate

```sh
node livery/iterations/0003-2026-10-11-track-kinetics/g0/generate.mjs
```

CI rasterizes SVGs to PNG. No source photo is present, no production SVG/plotter outputs are claimed.
