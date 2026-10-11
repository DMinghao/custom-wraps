// G0 photo-referenced, dimension-anchored M3P BASE (PROVISIONAL).
// Node 18+. No npm packages. The reference photo is not redistributed.
// THIS IS NOT verified orthographic geometry or production cutter artwork.
import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";
const M={length:4724,frontOverhang:872,wheelbase:2875,rearOverhang:977,height:1430,
tires:{front:[20,235,.35],rear:[20,275,.30]}};
const photo={size:[1000,750],left:166,frontWheel:269,rearWheel:719,right:841,roofY:269,groundY:476};
const segments=[[166,0],[269,872],[719,3747],[841,4724]];
const xMap=x=>{for(let i=0;i<3;i++){if(x<=segments[i+1][0]||i===2){let a=segments[i],b=segments[i+1];return a[1]+(x-a[0])*(b[1]-a[1])/(b[0]-a[0]);}}};
const yMap=y=>(y-photo.roofY)*M.height/(photo.groundY-photo.roofY);
const f=n=>Number(n).toFixed(1);
const xy=p=>[f(xMap(p[0])),f(yMap(p[1]))];
const cmd=(pts,closed=false)=>pts.map((p,i)=>(i?" L ":"M ")+xy(p).join(" ")).join("")+(closed?" Z":"");
const smooth=(pts,closed=false)=>{const P=pts.map(xy),out=["M "+P[0].join(" ")];for(let i=0;i<P.length-1;i++){const a=P[Math.max(0,i-1)],b=P[i],c=P[i+1],d=P[Math.min(P.length-1,i+2)];const c1=[Number(b[0])+(c[0]-a[0])/6,Number(b[1])+(c[1]-a[1])/6];const c2=[Number(c[0])-(d[0]-b[0])/6,Number(c[1])-(d[1]-b[1])/6];out.push("C "+c1.map(f).join(" ")+" "+c2.map(f).join(" ")+" "+c.join(" "));}return out.join(" ")+(closed?" Z":"");};
const roof=[[166,383],[188,371],[222,357],[280,347],[339,340],[357,334],[403,302],[456,282],[504,272],[546,269],[591,274],[643,287],[690,303],[737,316],[787,327],[817,326],[830,323],[835,349],[842,394],[841,440],[833,455],[179,456],[167,439],[166,383]];
const windows=[[[358,339],[406,300],[449,288],[526,283],[540,286],[535,332]],
[[548,286],[612,292],[675,307],[728,321],[713,332],[543,329]]];
const doorLines=[[[357,338],[354,394],[359,454]],
[[535,287],[535,386],[531,454]],
[[698,310],[675,399],[647,457]]];
const flank=[[[350,430],[435,427],[530,423],[602,418]],
[[571,421],[631,415],[668,403],[696,362]],
[[355,453],[473,454],[625,450],[670,416]]];
const diameter=a=>a[0]*25.4+2*a[1]*a[2];
const tireR={front:diameter(M.tires.front)/2,rear:diameter(M.tires.rear)/2};
const wheelY=M.height-tireR.front,wheels=[M.frontOverhang,M.frontOverhang+M.wheelbase];
function wheel(cx,r){
 let s='<circle cx="'+f(cx)+'" cy="'+f(wheelY)+'" r="'+f(r)+'" fill="#080b0d" stroke="#48545f" stroke-width="8"/>';
 s+='<circle cx="'+f(cx)+'" cy="'+f(wheelY)+'" r="'+f(r*.82)+'" fill="#20272c" stroke="#778591" stroke-width="5"/>';
 for(let i=0;i<10;i++){let a=i*Math.PI/5-.22;
 s+='<path d="M '+f(cx+Math.cos(a)*90)+' '+f(wheelY+Math.sin(a)*90)+' L '+f(cx+Math.cos(a)*(r-57))+' '+f(wheelY+Math.sin(a)*(r-57))+'" stroke="#515d69" stroke-width="29" stroke-linecap="round"/>';}
 s+='<circle cx="'+f(cx)+'" cy="'+f(wheelY)+'" r="56" fill="#232b33" stroke="#76818b" stroke-width="7"/>';
 s+='<circle cx="'+f(cx)+'" cy="'+f(wheelY)+'" r="24" fill="#76818b"/>';return s;
}
function base(){
 const leftCut=wheels.map(cx=>" M "+f(cx+362)+" "+f(wheelY)+" A 362 362 0 1 0 "+f(cx-362)+" "+f(wheelY)+" A 362 362 0 1 0 "+f(cx+362)+" "+f(wheelY)+" Z").join("");
 const roofTop=roof.slice(0,-4);
 const lower=" L "+xy([833,455]).join(" ")+" L "+xy([179,456]).join(" ")+" L "+xy([167,439]).join(" ")+" Z";
 const outline=smooth(roofTop,false)+lower+leftCut;
 let s=wheel(wheels[0],tireR.front)+wheel(wheels[1],tireR.rear);
 s+='<path d="'+outline+'" fill-rule="evenodd" fill="#1a2025" stroke="none"/>';
 s+='<path d="'+smooth(roofTop,false)+'" fill="none" stroke="#707d88" stroke-width="10"/>';
 for(const cx of wheels){s+='<path d="M '+f(cx-362)+' '+f(wheelY)+' A 362 362 0 0 1 '+f(cx+362)+' '+f(wheelY)+'" fill="none" stroke="#707d88" stroke-width="9"/>';}
 const yR=f(yMap(456)),xL=f(wheels[0]-305),xML=f(wheels[0]+305),xMR=f(wheels[1]-305),xR=f(wheels[1]+305);
 s+='<path d="M 0 '+yR+' L '+xL+' '+yR+' M '+xML+' '+yR+' H '+xMR+' M '+xR+' '+yR+' H '+M.length+'" stroke="#596772" stroke-width="7" fill="none"/>';
 for(const pts of windows)s+='<path d="'+smooth(pts,true)+'" fill="#09121c" stroke="#5c6974" stroke-width="9"/>';
 for(const pts of doorLines)s+='<path d="'+smooth(pts)+'" fill="none" stroke="#58656e" stroke-width="5" opacity=".75"/>';
 for(const pts of flank)s+='<path d="'+smooth(pts)+'" fill="none" stroke="#67737d" stroke-width="7" opacity=".28"/>';
 s+='<path d="'+smooth([[815,324],[833,324],[841,326]])+'" stroke="#8995a0" stroke-width="11" fill="none"/>';
 s+='<path d="'+smooth([[343,367],[357,355],[369,351],[384,355]])+'" fill="#0e151c" stroke="#61717c" stroke-width="5"/>';
 s+='<path d="'+cmd([[489,356],[516,353],[521,359],[491,361]],true)+'" fill="#090e13"/>';
 s+='<path d="'+cmd([[652,349],[675,347],[682,350],[655,355]],true)+'" fill="#090e13"/>';
 s+='<path d="'+smooth([[184,382],[220,372],[252,370]])+'" stroke="#8696a1" stroke-width="9" fill="none"/>';
 s+='<path d="'+smooth([[823,350],[840,363]])+'" stroke="#933842" stroke-width="16" fill="none"/>';
 return s;
}
function dimensionStroke(a,b,Y,label){
 return '<path d="M '+a+' '+(Y-25)+' v50 M '+a+' '+Y+' H '+b+' M '+b+' '+(Y-25)+' v50" fill="none" stroke="#9bb5c4" stroke-width="6"/>'
 +'<text x="'+f((a+b)/2)+'" y="'+(Y-32)+'" fill="#b8d2dc" text-anchor="middle" font-family="Arial" font-size="50">'+label+'</text>';
}
function render(mode){
 let dim=mode==="dimensions";
 let svg='<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="2200" height="1040" viewBox="-210 -240 5170 2440">';
 svg+='<title>MODEL 2.9 V3 G0 - '+(dim?"DIMENSION CHECK":"CLEAN M3P BASE")+' - preliminary</title>';
 svg+='<rect x="-210" y="-240" width="5170" height="2440" fill="#0c131b"/>';
 svg+='<text x="0" y="-102" fill="#e3edf3" font-family="Arial" font-size="70" letter-spacing="10">MODEL 2.9 / G0</text>';
 svg+='<text x="4700" y="-104" fill="#8ca6b6" font-family="Arial" font-size="40" text-anchor="end">'+(dim?"DIMENSION-CHECK":"BLANK BODY / NO LIVERY")+'</text>';
 svg+=base();
 svg+='<path d="M 0 '+M.height+' H '+M.length+'" stroke="#4c6474" stroke-width="6"/>';
 if(dim){
  for(const cx of wheels)svg+='<path d="M '+cx+' 0 V 1870" fill="none" stroke="#8cb4c7" stroke-dasharray="25 25" stroke-width="4"/>';
  svg+=dimensionStroke(0,M.length,1640,"4724 MM OVERALL");
  svg+=dimensionStroke(wheels[0],wheels[1],1840,"2875 MM WHEELBASE");
 }
 svg+='<text x="0" y="1990" fill="#98b1bd" font-family="Arial" font-size="42">2024+ MODEL 3 PERFORMANCE / PHOTO-REFERENCED STUDY</text>';
 svg+='<text x="0" y="2065" fill="#8a9ba6" font-family="Arial" font-size="31">AXLE SPACING LOCKED TO TESLA SPECS / BODY OUTLINE TRACED APPROXIMATELY / G0 NOT APPROVED</text>';
 svg+='</svg>';return svg;
}
if(M.frontOverhang+M.wheelbase+M.rearOverhang!==M.length)throw Error("Length parts mismatch");
if(Math.abs(diameter(M.tires.front)-diameter(M.tires.rear))>1)throw Error("Tires should have near-identical OD");
const here=path.dirname(fileURLToPath(import.meta.url)),out=path.join(here,"previews");
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,"blank-m3p-side.svg"),render("blank"),"utf8");
fs.writeFileSync(path.join(out,"dimension-check.svg"),render("dimensions"),"utf8");
const data={status:"G0-PRELIMINARY-NOT-VERIFIED",officialDimensionsMm:M,referencePhoto:photo,sourceUrl:"https://cdn.jdpower.com/JDP_2024%20Tesla%20Model%203%20Performance%20White%20Side%20View.jpg",sourcePixelLandmarks:{upperBody:roof,windows,doorLines},dataQuality:"visual photo tracing with piecewise horizontal warping, no camera calibration",wheelCentersMm:[wheels[0],wheels[1]],tireDiametersMm:[diameter(M.tires.front),diameter(M.tires.rear)],blankOnly:true,geometryLocked:false,approved:false,cuttingAllowed:false};
fs.writeFileSync(path.join(out,"geometry.json"),JSON.stringify(data,null,2)+"\n");
console.log("G0 complete as provisional study; axial checks passed. This is NOT a G0 geometry lock.");
