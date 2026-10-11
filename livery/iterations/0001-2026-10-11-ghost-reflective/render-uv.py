#!/usr/bin/env python3
"""Generate Paint Shop UV mockups using the ORIGINAL Tesla template in this repository.
Run from anywhere: python livery/iterations/0001-2026-10-11-ghost-reflective/render-uv.py
Install: python -m pip install Pillow
Design study, NOT a physical decal cutting template or measured reflective model.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageChops
import argparse, math, random

HERE = Path(__file__).resolve().parent
REPO = HERE.parents[2]
TEMPLATE = REPO / "model3-2024-performance" / "template.png"
SIZE = (1024, 1024)
SIDES = ((90, 236), (790, 936))

def body_mask(template):
    im = Image.open(template).convert("RGBA")
    if im.size != SIZE:
        raise ValueError(f"Expected official 1024x1024 UV template, got {im.size}")
    # Official Tesla atlas uses white paintable regions against a black background.
    r, g, b, a = im.split()
    return r.point(lambda v: 255 if v > 180 else 0) if False else Image.merge("RGB",(r,g,b)).convert("L").point(lambda v: 255 if v > 210 else 0)

def stroke(draw, coords, color, width=1):
    draw.line([(int(x), int(y)) for x,y in coords], fill=color, width=width, joint="curve")

def draw_texture(draw, concept, palette, seed):
    ink, strong, subtle = palette
    rnd = random.Random(seed)
    if concept == "aero-flow":
        for left, (lo,hi) in enumerate(SIDES):
            sign = 1 if left == 0 else -1
            for j in range(25):
                x0=lo+5+j*5.25
                points=[(x0+sign*(15*math.sin((y-290)/145+j*.09+.6)
                        +7*math.sin((y-370)/67+j*.04)),y)
                        for y in range(327,794,3)]
                for a,b in ([(335,795)] if j%5 else [(342,513),(534,655),(683,782)]):
                    stroke(draw,[(x,y) for x,y in points if a<=y<=b],
                           strong if j%9==0 else ink, 2 if j%9==0 else 1)
        for j in range(8):
            x=377+j*20
            stroke(draw,[(x+22*math.sin(y/74+j*.22),y)
                         for y in range(179,406,3)],subtle,1)
    elif concept == "parametric-fade":
        for side,(lo,hi) in enumerate(SIDES):
            for y in range(320,800,11):
                for x in range(lo-8,hi+14,12):
                    transition=480+80*math.sin((x-lo)/90+0.4)
                    fade=max(0,min(1,(y-transition)/140))
                    if rnd.random()>.04+.78*fade:
                        continue
                    dx=6*math.sin(y/110+side*.4)
                    h=1.2+fade*2.6
                    p=[(x+dx,y-h),(x+dx+h*1.2,y),(x+dx,y+h),(x+dx-h*1.2,y)]
                    draw.polygon(p, fill=strong if rnd.random()>.90 else ink)
    elif concept == "engineering-blueprint":
        for lo,hi in SIDES:
            for x in range(lo,hi,14):
                stroke(draw,[(x,320),(x,798)],subtle)
            for y in range(324,794,16):
                stroke(draw,[(lo,y),(hi,y)],subtle)
            for j in range(11):
                x=lo+10+j*10
                stroke(draw,[(x,390),(x+17,420),(x+6,505),(x+13,590),(x,675)],strong if j%4==0 else ink)
        draw.arc((393,190,627,374),0,180,fill=strong,width=2)
        draw.arc((414,211,608,393),0,180,fill=ink,width=1)
        stroke(draw,[(396,345),(624,345)],ink,1)
        draw.text((428,300),"MODEL 2.9 / EVT-2.9-0001",fill=strong)
    else:
        raise ValueError(concept)

def render(concept, mode, mask, out_dir):
    night=mode=="night"
    background=(8,12,16) if night else (8,9,10)
    body=(20,26,31) if night else (20,22,23)
    palette=((168,201,215),(227,239,243),(95,135,153)) if night \
            else ((49,54,57),(72,77,81),(37,42,45))
    im=Image.new("RGB",SIZE,background)
    im.paste(body,(0,0),mask)
    overlay=Image.new("RGBA",SIZE,(0,0,0,0))
    draw=ImageDraw.Draw(overlay)
    draw_texture(draw,concept,palette,seed=20261011)
    overlay.putalpha(ImageChops.multiply(overlay.getchannel("A"),mask))
    result=Image.alpha_composite(im.convert("RGBA"),overlay).convert("RGB")
    output=out_dir / f"{concept}-{mode}.png"
    result.save(output,optimize=True)
    print(f"{output} ({output.stat().st_size} bytes)")
    return result

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument("--template",type=Path,default=TEMPLATE)
    parser.add_argument("--output",type=Path,default=HERE/"renders")
    args=parser.parse_args()
    args.output.mkdir(parents=True,exist_ok=True)
    mask=body_mask(args.template)
    for concept in ("aero-flow","parametric-fade","engineering-blueprint"):
        for mode in ("day","night"):
            render(concept,mode,mask,args.output)
    # A day-mode PNG is the recommended starting point for a Paint Shop 3D placement check.
    print("Use day PNGs for initial Paint Shop checking; validate every UV seam and mirror.")

if __name__=="__main__":
    main()
