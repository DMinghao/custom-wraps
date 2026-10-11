# Versioning and Review Workflow

Keep every design iteration **immutable**. New experiments go to a new folder; don't replace old preview files in place.

## Folder format

`iterations/NNNN-YYYY-MM-DD-short-name/`

Each iteration should contain:
- `README.md` (goal, what's changed, alternatives, decision status, caveats)
- `config.json` (inputs, materials, palettes, seed and other parameters)
- `render-uv.py` or another complete generation script
- `previews/` (committed images: at minimum day and night for each candidate)
- `renders/` (optional Paint Shop-ready 1024×1024 PNG files; must be checked in Tesla visualization)
- `source/` for physical plotter SVG/DXF, **only after actual measured panel geometry is verified**

Use descriptive file names. Don't label simulated night effects as tested reflectivity.

## Workflow

1. **Brief** — Define what to change and assign a new sequential number.
2. **Generate** — Commit preview artwork + complete generation source + settings.
3. **Check** — Review at full side-view, UV seams, daylight subtlety, light-driven contrast, and feasibility for small vinyl pieces.
4. **Verify** — When possible, test the Paint Shop PNG in 3D. Any real film cut uses installer-verified geometry, never the display UV atlas.
5. **Decide** — Update `DECISIONS.md` only with explicitly confirmed conclusions. Keep open questions visible.
6. **Archive** — Preserve prior files and include them in the iteration table.

## Review checklist

- [ ] Matte-black daytime appearance remains understated
- [ ] Texture uses lines/particles, not a broad filled color field
- [ ] Front/rear fenders and both door UV panels reviewed separately
- [ ] Small decals survive realistic cutting/weeding/washing
- [ ] Side pair mirror/orientation inspected on Tesla 3D model
- [ ] No cameras, sensors, lights, plate or mandated reflectors obstructed
- [ ] New film over Apterix PPF adhesive / removal tested
- [ ] Proposed design vs owner-confirmed final choice clearly distinguished
