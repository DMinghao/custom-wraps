// Deterministic concept SVG previews. Node.js 18+; no npm dependencies.
// Render: node render-preview.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const makeSvg = function makeSvg(kind,night) {
  const ink=night?"#d5eaf1":"#343b41", mid=night?"#8db7c8":"#262e33", strong=night?"#f3f8fa":"#49515a", bg=night?"#070e14":"#101214", body=night?"#151e25":"#16191c";
  const id="body-clip", pieces=[];
  function p(d,clr=ink,sw=1.4,opacity=1){pieces.push(`<path d="${d}" fill="none" stroke="${clr}" stroke-width="${sw}" opacity="${opacity}" stroke-linecap="round"/>`)}
  let seed=397;function rnd(){seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;}
  if(kind==="aero-flow"){
    for(let j=0;j<36;j++){let y=258+j*3.95;let k=j-18;
      let d=`M ${138+(j%6)*6} ${y.toFixed(1)} C 285 ${(y-54+k*.23).toFixed(1)}, 430 ${(y+37-k*.2).toFixed(1)}, 595 ${(y-13).toFixed(1)} S 839 ${(y+31+k*.10).toFixed(1)}, ${913-j*.8} ${(y-9).toFixed(1)}`;
      p(d,j%8===0?strong:j%3===0?mid:ink,j%9===0?2.1:1.0,j%6===0?0.92:0.69);
    }
    for(let j=0;j<8;j++){p(`M ${610+j*8} ${230+j*3} C ${687+j*10} ${215+j*7}, ${794+j*3} ${255+j*6}, ${935-j*7} ${239+j*7}`,mid,1.2,.82)}
  } else if(kind==="parametric-fade"){
    for(let y=232;y<391;y+=10)for(let x=145;x<929;x+=12){
      let fade=Math.max(0,Math.min(1, (x-385)/440)), wave=0.18*Math.sin(x/64+y/43), prob=.08+.78*fade+wave;
      if(rnd()>prob) continue;
      let r=1.3+2.25*fade, xx=x+(y%20?3:0);
      pieces.push(`<path d="M${xx} ${y-r}l${r*1.2} ${r}l-${r*1.2} ${r}l-${r*1.2} -${r}Z" fill="${rnd()>.87?strong:ink}" opacity="${(.48+fade*.42).toFixed(2)}"/>`);
    }
    for(let j=0;j<12;j++)p(`M ${160+j*4} ${325+j*4} Q 420 ${289+j*3}, ${758+j*9} ${300+j*3}`,mid,0.7,.5)
  }else if(kind==="blueprint"){
    for(let j=0;j<25;j++) p(`M ${175+j*21} 240 L ${186+j*21} 385`,mid,.55,.42);
    for(let j=0;j<12;j++)p(`M 140 ${247+j*13} L 934 ${247+j*13}`,mid,.55,.40);
    for(let j=0;j<9;j++) {let x=315+j*57;p(`M ${x} 285 l 0 66 l 20 0`,ink,1.2,.76);p(`M ${x-8} 354 l 12 -7 l -9 -9`,strong,1.0,.8);}
    p("M 175 349 C 380 282, 618 316, 902 261",strong,1.5,.86);
    p("M 170 370 L 920 370 M 185 364 L 185 377 M 915 364 L 915 377",ink,1.0,.85);
    for(let x=205;x<900;x+=47)p(`M ${x} 368 L ${x} 374`,ink,.9,.8);
    pieces.push(`<text x="670" y="288" font-family="monospace" font-size="13" fill="${strong}">EVT-2.9-0001</text>`);
    pieces.push(`<text x="340" y="332" font-family="monospace" font-size="11" fill="${ink}">MODEL 2.9 // SURFACE STUDY</text>`);
  }
  const carBody="M 74 334 Q 90 295 148 283 L 265 263 Q 340 205 411 176 Q 453 155 533 157 L 687 168 Q 739 172 784 214 L 838 249 L 903 255 Q 947 262 965 293 L 982 328 L 969 381 L 935 387 L 901 386 Q 886 327 837 321 Q 773 312 752 387 L 323 387 Q 302 321 245 319 Q 183 320 170 383 L 94 380 Q 67 365 74 334 Z";
  const glass="M 351 254 Q 412 202 455 189 Q 502 177 533 182 L 553 256 Z M 570 183 L 678 194 Q 706 201 744 239 L 757 259 L 570 257 Z";
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1100" height="560" viewBox="0 0 1100 560">
<title>MODEL 2.9 / ${kind} / ${night?"night reflectivity visualization":"day stealth visualization"}</title>
<defs><clipPath id="${id}"><path d="${carBody}"/></clipPath><linearGradient id="floor" x1="0" x2="0" y1="0" y2="1"><stop stop-color="${bg}"/><stop offset="1" stop-color="#030608"/></linearGradient></defs>
<rect width="1100" height="560" fill="url(#floor)"/>
<g font-family="monospace"><text x="73" y="71" fill="${strong}" font-size="25" letter-spacing="4">MODEL 2.9</text>
<text x="75" y="99" fill="#77828a" font-size="14" letter-spacing="2">EXPERIMENTAL PROTOTYPE VEHICLE  /  ITERATION 0001</text>
<text x="74" y="458" fill="${strong}" font-size="19">${kind.toUpperCase().replaceAll("-"," ")}</text>
<text x="74" y="483" fill="#82909a" font-size="14">${night?"HEADLIGHT / FLASH REFLECTION SIMULATION":"DAYLIGHT / LOW-VISIBILITY FINISH SIMULATION"}</text>
<text x="75" y="516" fill="#697782" font-size="11">SCHEMATIC SIDE VIEW. NOT A CUTTER PATTERN OR PHOTOMETRIC PREDICTION.</text>
<text x="975" y="72" fill="#71838e" font-size="14" text-anchor="end">GHOST LIVERY / ${night?"N":"D"}</text></g>
<ellipse cx="518" cy="392" rx="464" ry="29" fill="#050708" opacity=".8"/>
<path d="${carBody}" fill="${body}" stroke="#4a5157" stroke-width="2.8"/>
<g clip-path="url(#${id})">${pieces.join("")}</g>
<path d="${glass}" fill="#080d12" stroke="#39464f" stroke-width="2.2"/>
<path d="M554 179 L565 259 M 344 260 L 759 265" stroke="#596169" stroke-width="1.5" opacity=".65"/>
<path d="M 321 265 L 320 378 M 758 265 L 750 383" stroke="#343a3e" stroke-width="2.0"/>
<path d="M92 343 L145 343 M 913 346 L 969 343" stroke="#8798a2" stroke-width="5" opacity=".6"/>
<g><circle cx="248" cy="381" r="61" fill="#07090b" stroke="#555d64" stroke-width="5"/>
<circle cx="248" cy="381" r="40" fill="#282c31" stroke="#90979e" stroke-width="1.2"/>
<circle cx="835" cy="381" r="61" fill="#07090b" stroke="#555d64" stroke-width="5"/>
<circle cx="835" cy="381" r="40" fill="#282c31" stroke="#90979e" stroke-width="1.2"/></g>
<g stroke="#606a71" stroke-width="4">${Array.from({length:10},(_,j)=>{let a=j*Math.PI/5;return [248,835].map(cx=>`<path d="M ${cx+11*Math.cos(a)} ${381+11*Math.sin(a)} L ${cx+37*Math.cos(a)} ${381+37*Math.sin(a)}"/>`).join("");}).join("")}</g>
<circle cx="248" cy="381" r="11" fill="#777e84"/><circle cx="835" cy="381" r="11" fill="#777e84"/>
</svg>`;
};
const out=path.join(path.dirname(fileURLToPath(import.meta.url)),"previews");
fs.mkdirSync(out,{recursive:true});
for(const name of ["aero-flow","parametric-fade","engineering-blueprint"]){
  const kind=name==="engineering-blueprint"?"blueprint":name==="parametric-fade"?"parametric-fade":"aero-flow";
  for(const mode of ["day","night"]){const fname=name+"-"+mode+".svg";fs.writeFileSync(path.join(out,fname),makeSvg(kind,mode==="night"),"utf8");console.log("wrote "+fname);}
}
