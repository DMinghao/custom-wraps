// MODEL 2.9 Ghost Aerodynamics — Iteration 0002 prototype-01
// Usage: node render-concept.mjs (Node 18+, no dependencies). 
// This SIDE-NORM scene is illustrative. It is not a real 3D model, Tesla UV registration, or a physical cutting pattern.
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
function seeded(seed){let x=seed>>>0;return()=>((x=(1664525*x+1013904223)>>>0)/4294967296);}
function pointsD(points){return points.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");}
function makeScene(){
 const rand=seeded(290011), curves=[],particles=[],annotations=[],layers=["shadow","reveal"];
 // Two ridge-linked flow families: upper shoulder and lower sculpted door volume, normalized to a measured-length schematic.
 for(let i=0;i<11;i++){
   const pts=[],start=482+i*6.8,end=1173+i*13.8;
   for(let j=0;j<=180;j++){
     const u=j/180,x=start+(end-start)*u;
     const y=501+i*5.25 + 2.7*Math.sin(u*Math.PI) - 15.4*Math.sin(u*Math.PI*.86) + Math.pow(u,3)*(-2.2+((i-4)/5)*1.6);
     pts.push([x,y]);
   }
   curves.push({id:"S1-"+i,pts,mat:i%3===0?"reveal":"shadow",width:i%3===0?1.5:.95,alpha:i%3===0?.85:.69,style:"upper"});
 }
 for(let i=0;i<6;i++){
   let pts=[],start=510+i*4.4,end=1100+i*17;
   for(let j=0;j<=170;j++){
     let u=j/170,x=start+(end-start)*u, y=615+i*4.65+12.5*Math.sin(u*Math.PI*.7)-16.8*Math.sin(u*Math.PI*1.4)+8*u*u;
     pts.push([x,y]);
   }
   curves.push({id:"S2-"+i,pts,mat:i===1||i===4?"reveal":"shadow",width:i===1||i===4?1.45:.84,alpha:.63,style:"lower"});
 }
 // Fender wake strokes (front wheel rear zone), modest and tapered.
 for(let i=0;i<6;i++){
   let pts=[];
   for(let j=0;j<=80;j++){let u=j/80,x=490+i*5+116*u,y=541+i*5-27*u+13*u*u;pts.push([x,y]);}
   curves.push({id:"F-"+i,pts,mat:i===2?"reveal":"shadow",width:1.1,alpha:.78,style:"front-fender"});
 }
 // Rear haunch acceleration, peel-away; deliberately leaves tail blank.
 for(let i=0;i<5;i++){
   let pts=[];
   for(let j=0;j<=120;j++){let u=j/120,x=1030+17*i+(343-i*13)*u,y=479+i*5.6 - 26*Math.sin(u*Math.PI*.76) + 2.8*u*u;pts.push([x,y]);}
   curves.push({id:"R1-"+i,pts,mat:i%2===0?"reveal":"shadow",width:i===0?1.7:1.1,alpha:.74,style:"haunch"});
 }
 // Deterministic variable-radius dart-throwing. Tesla T inspired glyph; canonical vector still required preproduction.
 let tries=0;
 while(tries++<21000 && particles.length<156){
   const x=rand()*345+955, y=rand()*135+465;
   if(x>1230 && y>535)continue; // rear wheel envelope
   if(x<1000 && y<484)continue; // preserve sweep
   const gauss=Math.exp(-.5*((x-1153)/125)**2-.5*((y-532)/46)**2);
   const fadeIn=Math.min(1,Math.max(0,(x-940)/138));
   const fadeOut=Math.min(1,Math.max(0,(1320-x)/110));
   const density=gauss*fadeIn*fadeOut;
   if(rand()>.70*density)continue;
   const scale=.52+.65*rand()*(.35+.65*density), r=7+7*scale;
   if(particles.some(p=>Math.hypot(x-p.x,y-p.y)<r+p.r*.78))continue;
   particles.push({id:"T-"+String(particles.length+1).padStart(3,"0"),x,y,scale,rotation:-12+13*rand(),mat:rand()<.73?"reveal":"shadow",alpha:.43+rand()*.4,r});
 }
 // Small front-fender echo T marks to make visual motif deliberate.
 let added=0;
 for(let k=0;k<1000&&added<11;k++){
   const x=518+rand()*120,y=490+rand()*74;
   if(Math.hypot(x-554,y-510)<26)continue;
   if(rand()<.90)continue;
   particles.push({id:"TF-"+added,x,y,scale:.54+rand()*.2,rotation:-6+rand()*12,mat:added%3===0?"reveal":"shadow",alpha:.5,r:7});
   added++;
 }
 annotations.push({id:"id-title",x:689,y:651,txt:"MODEL 2.9",size:21,tracking:3,mat:"shadow"});
 annotations.push({id:"id-serial",x:690,y:671,txt:"EVT-2.9-0001 // AERO SURFACE STUDY",size:9,tracking:1.4,mat:"reveal"});
 annotations.push({id:"id-ticks",x:675,y:642,txt:"",size:1,tracking:0,mat:"reveal"});
 annotations.push({id:"nose-note",x:520,y:585,txt:"FS-01 / REF",size:8.5,tracking:1.3,mat:"shadow"});
 annotations.push({id:"haunch-note",x:1150,y:594,txt:"SURFACE // 2.9",size:8.5,tracking:1.2,mat:"shadow"});
 return {curves,particles,annotations,version:"0002-prototype-01",seed:290011};
}
function modelStyles(mode){
 return mode==="day"?{bg:"#090d13",bg2:"#11171f",paint:"#171b1e",shade:"#121518",edge:"#343c43",thin:"#353c41",glass:"#080e16",glass2:"#131c25",wheels:"#090d11",wheelRim:"#49505a",floor:"#080b0f",shadow:"#30373a",reveal:"#3b454a",annotation:"#465055",marker:"#616a70",glow:0}
 :{bg:"#080e19",bg2:"#101e2c",paint:"#151a20",shade:"#10151b",edge:"#42505a",thin:"#323e47",glass:"#070d15",glass2:"#142232",wheels:"#070a0d",wheelRim:"#5a6572",floor:"#060a10",shadow:"#303b44",reveal:"#a5d4e4",annotation:"#748e9b",marker:"#b4d2dc",glow:1};
}
function wheel(cx,mode,c){
  const spokes=[];
  for(let i=0;i<10;i++){const a=(i*36+10)*Math.PI/180,xx=cx+70*Math.cos(a),yy=627+70*Math.sin(a);
   spokes.push(`<path d="M ${cx+22*Math.cos(a)} ${627+22*Math.sin(a)} L ${xx} ${yy}" stroke="${mode==="night"?"#535c66":"#3c434b"}" stroke-width="10" stroke-linecap="round"/>`);}
  return `<g><circle cx="${cx}" cy="627" r="102" fill="#05070a" stroke="${c.wheelRim}" stroke-width="6"/><circle cx="${cx}" cy="627" r="78" fill="${c.wheels}" stroke="#343b42" stroke-width="2"/>${spokes.join("")}<circle cx="${cx}" cy="627" r="31" fill="#252a30" stroke="#666e75" stroke-width="2"/><circle cx="${cx}" cy="627" r="12" fill="#696f73"/><path d="M ${cx+31} 590 Q ${cx+54} 612 ${cx+41} 643" fill="none" stroke="#7b2029" stroke-width="9" stroke-linecap="round" opacity=".74"/></g>`;
}
function buildCar(scene,mode,opts={}){
 const c=modelStyles(mode), night=mode==="night";
 const body=`M 121 605 Q 130 574 179 554 L 326 530 Q 419 527 488 478 L 616 380 Q 687 320 815 304 C 972 277 1074 314 1170 374 L 1344 457 Q 1418 479 1557 510 L 1655 558 Q 1687 578 1680 640 L 1673 684 Q 1659 703 1628 707 L 1458 707 C 1453 557 1239 550 1232 707 L 520 707 C 514 554 296 548 286 707 L 170 707 Q 123 700 116 671 Z`;
 const clipName="skin-"+mode+"-"+(opts.suffix||"primary");
 const under=`<path d="${body}" fill="${c.paint}" stroke="${c.edge}" stroke-width="3"/>`;
 const pathPaint=[];
 for(const cv of scene.curves){
  let sections=8; // tapered direction and local exit transparency.
  for(let section=0;section<sections;section++){
   const a=Math.floor((cv.pts.length-1)*section/sections),b=Math.ceil((cv.pts.length-1)*(section+1)/sections);
   const opacity=cv.alpha*(section===0?.24+section*.18:section>5?(8-section)*.28:1);
   const color=cv.mat==="reveal"?c.reveal:c.shadow;
   pathPaint.push(`<path data-element="${cv.id}" data-material="${cv.mat}" d="${pointsD(cv.pts.slice(a,b+1))}" stroke="${color}" stroke-width="${cv.width}" stroke-linecap="round" fill="none" opacity="${Math.max(.08,Math.min(1,opacity)).toFixed(2)}"${night&&cv.mat==="reveal"?" filter=\"url(#softGlow)\"":""}/>`);
  }
 }
 const tMaster=`<path d="M -5.2 -3.6 C -1.9 -5.4 1.9 -5.4 5.2 -3.6 L 4.7 -1.8 C 2.2 -3.0 -2.2 -3.0 -4.7 -1.8 Z M -1.23 -1.7 Q 0 -2.2 1.23 -1.7 L .72 4.8 Q 0 5.8 -.72 4.8 Z"/>`;
 for(const p of scene.particles){const col=p.mat==="reveal"?c.reveal:c.shadow;
 pathPaint.push(`<g data-element="${p.id}" data-material="${p.mat}" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${p.rotation.toFixed(1)}) scale(${p.scale.toFixed(2)})" fill="${col}" opacity="${p.alpha.toFixed(2)}"${night&&p.mat==="reveal"?" filter=\"url(#softGlow)\"":""}>${tMaster}</g>`);
 }
 for(const a of scene.annotations){if(!a.txt)continue;
 const ink=a.mat==="reveal"?c.annotation:c.shadow;
 pathPaint.push(`<text data-element="${a.id}" data-material="${a.mat}" x="${a.x}" y="${a.y}" font-family="Arial,Helvetica,sans-serif" font-size="${a.size}" letter-spacing="${a.tracking}" fill="${ink}" font-weight="${a.id==="id-title"?600:400}">${a.txt}</text>`);
 }
 pathPaint.push(`<g stroke="${c.reveal}" fill="none" opacity=".50" stroke-width="1"><path d="M 676 640 L 676 673 L 686 673 M 682 640 L 671 640 M 1000 625 L 1017 625 L 1027 615" stroke-linecap="round"/></g>`);
 const windows = `<g>
 <path d="M 626 408 Q 717 322 821 324 Q 859 327 913 336 L 921 444 L 598 448 Z" fill="${c.glass}" stroke="#4b5864" stroke-width="2"/>
 <path d="M 933 339 Q 1082 360 1181 415 L 1305 468 L 936 447 Z" fill="${c.glass}" stroke="#4b5864" stroke-width="2"/>
 <path d="M 923 336 L 935 447" stroke="#404c56" stroke-width="10"/>
 <path d="M 590 451 L 1321 473" stroke="${c.edge}" stroke-width="3" fill="none"/>
 <path d="M 638 407 Q 730 326 827 333" stroke="#86919c" stroke-opacity=".16" stroke-width="4" fill="none"/>
 <path d="M 969 354 Q 1091 374 1192 422" stroke="#8292a0" stroke-opacity=".12" stroke-width="3" fill="none"/>
 </g>`;
 const seams=`<g stroke="${c.thin}" stroke-width="2" fill="none" opacity=".85">
  <path d="M 536 464 L 552 561 L 548 703"/>
  <path d="M 922 446 L 918 704"/>
  <path d="M 1217 468 Q 1228 527 1232 550"/>
  <path d="M 477 512 C 806 475 1172 484 1464 501" stroke-width="2" opacity=".6"/>
  <path d="M 556 613 Q 849 634 1174 617" opacity=".5" stroke-width="4"/>
  </g>`;
 const handles=`<g fill="#080b0f" stroke="#46515a" stroke-width="1.3">
 <path d="M 757 499 l 45 -2 l -5 6 l -40 2 Z"/>
 <path d="M 1080 507 l 41 -2 l -4 6 l -36 2 Z"/>
 </g>`;
 const details=`<g><path d="M 460 490 Q 496 486 515 498 L 487 516 L 447 513Z" fill="#0b1017" stroke="#51616b" stroke-width="1"/>
 <path d="M 515 475 L 536 460 L 561 466 L 567 484 L 543 485 Z" fill="#101821" stroke="#3d4953" stroke-width="2"/>
 <path d="M 151 599 L 207 582 L 234 586" stroke="#a5b1b9" opacity=".18" stroke-width="4" fill="none"/>
 <path d="M 1599 575 L 1668 593" stroke="#911d29" opacity=".55" stroke-width="5" fill="none"/>
 <path d="M 1520 507 L 1595 515" stroke="#11171f" stroke-width="7"/>
 <path d="M 166 705 L 1667 705" stroke="#090d11" stroke-width="7"/>
 <path d="M 1512 504 Q 1585 506 1642 558" stroke="${c.edge}" fill="none"/>
 </g>`;
 const all=`<defs><clipPath id="${clipName}"><path d="${body}"/></clipPath><filter id="softGlow"><feGaussianBlur stdDeviation="0.6"/></filter></defs>
 <path d="${body}" fill="${c.paint}" stroke="${c.edge}" stroke-width="3"/>
 <g clip-path="url(#${clipName})">${pathPaint.join("")}</g>
 ${windows}${seams}${handles}${details}
 ${wheel(405,mode,c)}${wheel(1347,mode,c)}`;
 return all;
}
function renderSvg(mode,scene,kind="side"){
 const c=modelStyles(mode),night=mode==="night";
 const label=night?"ACTIVE / DIRECTED REFLECTION STUDY":"PASSIVE / DAYLIGHT STEALTH";
 const left=kind==="annotated";
 const diagrams=buildCar(scene,mode,{suffix:kind});
 const notes=left?`<g fill="#89a0b0" font-family="Arial,Helvetica,sans-serif" letter-spacing="1.5" font-size="13">
 <path d="M 668 516 L 556 221 L 365 221" fill="none" stroke="#5e8092" stroke-width="1.2"/><text x="225" y="209">01 / RIDGE-LINKED FLOW</text>
 <path d="M 1151 520 L 1300 243 L 1455 243" fill="none" stroke="#5e8092" stroke-width="1.2"/><text x="1310" y="232">02 / TESLA T FIELD</text>
 <path d="M 733 657 L 811 756 L 1096 756" fill="none" stroke="#5e8092" stroke-width="1.2"/><text x="1106" y="761">03 / MODEL 2.9 ID</text>
 <circle cx="668" cy="516" r="4" fill="#a4c2cf"/><circle cx="1151" cy="520" r="4" fill="#a4c2cf"/><circle cx="733" cy="657" r="4" fill="#a4c2cf"/>
 </g>`:"";
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 860" width="1800" height="860">
 <title>MODEL 2.9 / GHOST AERODYNAMICS / ${mode}${left?" / anatomy":""}</title>
 <desc>Second-iteration 2024+ Tesla Model 3 Performance inspired schematic side profile, not a photogrammetric/physical cut model. Tesla T-inspired placeholder glyph pending canonical-logo asset approval.</desc>
 <defs><linearGradient id="background" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${c.bg2}"/><stop offset="1" stop-color="${c.bg}"/></linearGradient><radialGradient id="luma"><stop stop-color="${night?"#22394d":"#171e26"}" stop-opacity=".30"/><stop offset="1" stop-color="${c.bg}" stop-opacity="0"/></radialGradient></defs>
 <rect width="1800" height="860" fill="url(#background)"/>
 <ellipse cx="1040" cy="570" rx="1000" ry="330" fill="url(#luma)"/>
 <path d="M 100 740 L 1700 740" stroke="#394854" stroke-width="1" opacity=".35"/>
 <g font-family="Arial,Helvetica,sans-serif">
 <text x="105" y="108" font-size="32" fill="#e7eff3" font-weight="500" letter-spacing="5">MODEL 2.9</text>
 <text x="108" y="139" font-size="15" fill="#9caeba" letter-spacing="2.3">GHOST AERODYNAMICS  /  CONCEPT 0002</text>
 <text x="1697" y="113" text-anchor="end" font-size="15" fill="${night?"#94bece":"#7f909a"}" letter-spacing="2">${label}</text>
 </g>
 <ellipse cx="903" cy="711" rx="790" ry="36" fill="#020509" opacity=".74"/>
 ${diagrams}
 ${notes}
 <g font-family="Arial,Helvetica,sans-serif">
 <text x="110" y="816" font-size="13" fill="#8699a6" letter-spacing="1.6">AERO FLOW  /  TESLA T MICROTEXTURE  /  ENGINEERING ID</text>
 <text x="1695" y="816" text-anchor="end" font-size="11" fill="#647784" letter-spacing="1.3">SCHEMATIC GEOMETRY • MATERIAL EFFECT ILLUSTRATIVE • NO CUTTER SCALE</text>
 </g></svg>`;
}
function renderSheet(scene){
 const day=renderSvg("day",scene).replace(/<svg[^>]*>/,"").replace(/<\/svg>\s*$/,"");
 const night=renderSvg("night",scene).replace(/<svg[^>]*>/,"").replace(/<\/svg>\s*$/,"");
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1800 1720" width="1800" height="1720">
 <title>MODEL 2.9 V2 first compositional side study / daytime and nighttime</title>
 <g>${day}</g><g transform="translate(0 860)">${night}</g></svg>`;
}
function renderDetail(scene){
 return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="760" viewBox="0 0 1400 760">
 <title>MODEL 2.9 - T microtexture and aft ridge / macro detail preview</title>
 <rect width="1400" height="760" fill="#0a111b"/>
 <text x="85" y="83" font-family="Arial" font-size="29" fill="#e2edf1" letter-spacing="3">MICROTEXTURE / REAR QUARTER</text>
 <text x="87" y="115" font-family="Arial" font-size="14" fill="#94acbb" letter-spacing="2">MODEL 2.9 / ITERATION 0002 / FIRST INTEGRATED STUDY</text>
 <rect x="70" y="159" width="1258" height="465" rx="9" fill="#121a22" stroke="#405262" stroke-width="1"/>
 <svg x="85" y="171" width="1229" height="440" viewBox="890 436 510 244">
 ${buildCar(scene,"night",{suffix:"detail"})}
 </svg>
 <g font-family="Arial" fill="#aac9d5" font-size="15">
 <text x="90" y="676">28 GUIDED PATHS  /  ${scene.particles.length} PROVISIONAL T MICRO-GLYPHS  /  SHADOW + REVEAL MATERIAL TAGS</text>
 <text x="90" y="705" font-size="12" fill="#7f9aaa">ILLUSTRATIVE ZOOM — TESLA T OUTLINE NOT YET VERIFIED AS A CANONICAL BRAND ASSET</text>
 </g></svg>`;
}
const here=path.dirname(fileURLToPath(import.meta.url)), out=path.join(here,"previews");
fs.mkdirSync(out,{recursive:true});
const design=makeScene();
for(const mode of ["day","night"])fs.writeFileSync(path.join(out,"ghost-aero-"+mode+".svg"),renderSvg(mode,design));
fs.writeFileSync(path.join(out,"ghost-aero-anatomy.svg"),renderSvg("day",design,"annotated"));
fs.writeFileSync(path.join(out,"ghost-aero-comparison.svg"),renderSheet(design));
fs.writeFileSync(path.join(out,"ghost-aero-detail.svg"),renderDetail(design));
console.log("rendered 5 SVG previews",design.curves.length,"flow paths",design.particles.length,"T motifs");
// The glyph here is a clearly labeled approximate T motif; replace only after a verified canonical Tesla T SVG is sourced.
