"use strict"
;__filename="background/ui_css.js",define(["require","exports","./store","./utils","./browser","./settings","./ports"],function(n,i,r,t,e,o,u){
var f,s,c,a,l,d;Object.defineProperty(i,"__esModule",{value:true}),i.An=i.mergeCSS=i.ul=void 0,c=function(n,e){
if(-1===n)return i.mergeCSS(e,-1);2===n&&(r.oo=null);var u=void 0;if(0===n&&(u=r.il.get("findCSS")))return s=null,
r.Ca=l(u),r.bo=e.slice(f.length),void(r.Xt.c=r.il.get("omniCSS")||"");t.Ju("vimium-c.css").then(function(t){
var e,u,s,c,l;f.slice(f.indexOf(",")+1),r.kn<54&&(t=t.replace(/user-select\b/g,"-webkit-$&")),
r.kn<62&&(t=t.replace(/#[\da-f]{4}([\da-f]{4})?\b/gi,function(n){
n=5===n.length?"#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+n[4]+n[4]:n
;var i=parseInt(n.slice(1),16),r=i>>16&255,t=i>>8&255,e=(255&i)/255+""
;return"rgba(".concat(i>>>24,",").concat(r,",").concat(t,",").concat(e.slice(0,4),")")})),
51===r.kn&&(t=t.replace(/layout /g,"")),u=(t=(e=a(t)).ui).indexOf("all:"),s=t.lastIndexOf("{",u),
c=r.kn>=53?t.indexOf(";",u):t.length,t=t.slice(0,s+1)+t.slice(u,c+1)+t.slice(t.indexOf("\n",c)+1||t.length),
r.kn>64&&true?(u=t.indexOf("display:"),
s=t.lastIndexOf("{",u),t=t.slice(0,s+1)+t.slice(u)):t=t.replace("contents","block"),
r.kn<73&&(t=t.replace("3px 5px","3px 7px")),r.kn<69&&(t=t.replace(".LH{",".LH{box-sizing:border-box;")),
r.kn<112&&(t=t.replace(/\n\.PO\{[^}]+\}/,"")),r.Xn&&r.kn<89&&(t=t.replace("forced-colors","-ms-high-contrast")),
t=t.replace(/\n/g,""),r.kn<85&&(t=t.replace(/0\.01|\/\*!DPI\*\/ ?[\d.]+/g,"/*!DPI*/"+(r.kn<48?1:.5))),
o.nl("innerCSS",f+t),o.nl("findCSS",(l=e.find).length+"\n"+l),i.mergeCSS(r.z.userDefinedCss,n)})},i.ul=c,a=function(n){
var i,r,t=n?n.split(/^\/\*\s?#!?([A-Za-z:]+)\s?\*\//m):[""],e={ui:t[0].trim()}
;for(i=1;i<t.length;i+=2)e[r=t[i].toLowerCase()]=(e[r]||"")+t[i+1].trim();return e},l=function(n){
var i=(n=n.slice(n.indexOf("\n")+1)).indexOf("\n")+1,r=n.indexOf("\n",i);return{c:n.slice(0,i-1).replace("  ","\n"),
s:n.slice(i,r).replace("  ","\n"),i:n.slice(r+1)}},d=function(n,t){
var s,c,d,S,v,b,g,m,p,C,x,_=r.il.get("innerCSS"),k=_.indexOf("\n");if(_=k>0?_.slice(0,k):_,c=(s=a(n)).ui?_+"\n"+s.ui:_,
d=s["find:host"],S=s["find:selection"],v=s.find,b=s.omni,g="omniCSS",k=(_=r.il.get("findCSS")).indexOf("\n"),
m=(_=_.slice(0,k+1+ +_.slice(0,k))).indexOf("\n",k+1),p=_.slice(0,m).indexOf("  "),S=S?"  "+S.replace(/\n/g," "):"",
(p>0?_.slice(p,m)!==S:S)&&(_=_.slice(k+1,p=p>0?p:m)+S+_.slice(m),m=p-(k+1)+S.length,k=-1),C=_.indexOf("\n",m+1),
x=_.slice(0,C).indexOf("  ",m),
d=d?"  "+d.replace(/\n/g," "):"",(x>0?_.slice(x,C)!==d:d)&&(_=_.slice(k+1,x>0?x:C)+d+_.slice(C),k=-1),
k<0&&(_=_.length+"\n"+_),v=v?_+"\n"+v:_,_=(r.il.get(g)||"").split("\n",1)[0],b=b?_+"\n"+b:_,-1===t)return{
ui:c.slice(f.length),find:l(v),omni:b};o.nl("innerCSS",c),o.nl("findCSS",v),o.nl(g,b||null),i.ul(0,c),
0!==t&&1!==t&&(u.v(16384,function(n){var i;for(i of n.W)8&i.s.d&&i.postMessage({N:11,H:r.bo,f:32&i.s.d?e.k(i.s):void 0})
}),o.ka({N:47,d:{c:r.Xt.c}}))},i.mergeCSS=d,i.An=function(n,i){var e,o,u,f,s,c,a=r.Xt.t
;!n.o&&r.Pa||(o=" ".concat(n.t," "),
f=(u=a&&" ".concat(a," ")).includes(o),e=(e=(s=null!=n.e?n.e:f)?f?a:a+o:u.replace(o," ")).trim().replace(t.F," "),
false!==n.b?(n.o&&(r.Pa=s!==" ".concat(r.z.vomnibarOptions.styles," ").includes(o)),e!==a&&(r.Xt.t=e,c={N:47,d:{t:e}},
t.ko(r.zn.slice(0),function(n){return n!==i&&r.zn.includes(n)&&n.postMessage(c),1}))):r.Xt.t=e)},e.k=function(n){
var i=r.Ca;return r.kn<86&&n.mr.startsWith("file://")?s||(s={
c:i.c+"\n.icon.file { -webkit-user-select: auto !important; user-select: auto !important; }",s:i.s,i:i.i}):i},
o.st.then(function(){
f=r.Q.pa+","+r.kn+";",r.bo=r.il.get("innerCSS")||"",r.bo&&!r.bo.startsWith(f)?(r.il.set("vomnibarPage_f",""),
i.ul(1)):(i.ul(0,r.bo),r.te&&r.te.then(function(n){return n&&i.ul(1)})),r.at.userDefinedCss=i.mergeCSS})});