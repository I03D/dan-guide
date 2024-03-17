"use strict"
;__filename="background/page_handlers.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./exclusions","./ui_css","./key_mappings","./run_commands","./tools","./open_urls","./frame_commands"],function(n,u,r,t,l,e,o,i,f,c,s,a,v,d,m,p){
var _,b,g,k;Object.defineProperty(u,"__esModule",{value:true}),u.onReq=void 0,_=[function(){return[i.V,r.G,r.Q.da]
},function(n){var u,t,l;if(r.go)return r.go.then(_[1].bind(null,n,null));for(t in u={},i.V)(l=r.z[t])!==i.V[t]&&(u[t]=l)
;return u},function(n){var u,t,l,e,o;return r.go?r.go.then(_[2].bind(null,n,null)):(l=n.key,
e=null!==(t=null!==(u=n.val)&&void 0!==u?u:i.V[l])&&void 0!==t?t:null,i.ga(l,e),(o=r.z[l])!==e?o:null)},function(n){
var u=i.E(n.key,n.val);return u!==n.val?u:null},function(n){i.$u({N:6,d:n})},function(n){return r.z[n.key]},function(n){
r.a.has(n)||l.s(n)},function(){var n,u,t=a.Gu;return!(!(1&r.B.l)||t||(u=(n=function(n){
return/[^ -\xff]/.test(n.join(""))
})(Object.keys(r.gu))?1:0,!(u|=r.ba&&n(Object.keys(r.ba))?2:0)||!(2&(u|=2&u||!r.ba||!n(Object.values(r.ba))?0:4))&&4&u))||(t?(function(n){
var u,r,t=n.length>1?n.length+" Errors:\n":"Error: ";for(r of n)u=0,t+=r[0].replace(/%([a-z])/g,function(n,t){return++u,
"c"===t?"":"s"===t||"d"===t?r[u]:JSON.stringify(r[u])}),u+1<r.length&&(t+=" "+r.slice(u+1).map(function(n){
return"object"==typeof n&&n?JSON.stringify(n):n}).join(" ")),t+=".\n";return t})(t):"")},function(n){
var u=f.indexFrame(n[1],0);return u&&u.s&&(u.s.d|=44),s.mergeCSS(n[0],-1)},function(n){n&&i.nl("isHC_f",n.hc?"1":null),
s.ul(2)},function(n){return[e.Ir(n[0],null,n[1]),e.Pr]},function(){d.tl.rl()},function(){
var n=r.Nu.get("?"),u=n&&8===n.ju&&n.Iu?"?":"";return u||r.Nu.forEach(function(n,r){
8===n.ju&&n.Iu&&(u=u&&u.length<r.length?u:r)}),u},function(n){var u
;return[n=e.Ir(n,null,0),null!==(u=r.Qn.get(n))&&void 0!==u?u:null]},function(n){var u,r,t,l=new Map
;return o.ll("k:"+n,l),
null==(u=l.get("k"))?null:(r=e.Ir(u.mr,null,-2),[!(t=e.Pr>2),t?u.mr:r.replace(/\s+/g,"%20")+(u.zt&&"k"!==u.zt?" "+u.zt:"")])
},function(n){m.vi(n)},function(n){var u=null;return n.startsWith("vimium://")&&(u=r.yt(n.slice(9),1,true)),
"string"==typeof(u=null!==u?u:e.Ir(n,null,-1))&&(u=o.yi(u,"whole"),u=e.ei(u)),u},function(){return r.gi&&r.gi()
},function(n){return r.R(n[0],n[1])},function(n){return m.pi(n)},function(){
var n=r.hn>=0&&r.a.get(r.hn)||null,u=n?r.hn:-1,e=n?n.c.s.J:-1,o=e>=0&&l.N()||null
;return Promise.all([l.yn(l.getCurTab).then(function(n){
return n&&n.length?n:u<0?null:l.yn(l.tabsGet,u).then(function(n){return n&&[n]})}),o?l.yn(o.getFrame,{tabId:u,frameId:e
}):null,r.go]).then(function(n){
var o,f,s,a,v,d,m,p,_=n[0],b=n[1],g=_&&_[0]||null,w=g?g.id:r.hn,O=null!==(o=r.a.get(w))&&void 0!==o?o:null
;return b&&b.url&&u===w&&O.c.s.J===e&&(O.c.s.mr=b.url),f=g?l.getTabUrl(g):O&&(O.j||O.c).s.mr||"",
g&&O&&O.j&&(O.j.s.mr=f),
s=!O||O.c.s.J&&!t.eu.test(O.c.s.mr)?null:O.c.s,a=!(O||g&&f&&"loading"===g.status&&/^(ht|s?f)tp/.test(f)),v=k(O),
p=(m=(d=!a&&!v)?null:v||!f?v:f.startsWith(location.protocol)&&!f.startsWith(r.Yn)?new URL(f).host:null)?r.el.get(m):null,
d||null==p||true===p?m=null:O&&(O.ol=-1),{ver:r.Q.no,runnable:d,url:f,tabId:w,frameId:O&&(s||O.j)?(s||O.j.s).J:0,
topUrl:s&&s.J&&O.j?O.j.s.mr:null,frameUrl:s&&s.mr,lock:O&&O.ss?O.ss.f:null,status:s?s.f:0,unknownExt:m,exclusions:d?{
rules:r.z.exclusionRules,onlyFirst:r.z.exclusionOnlyFirstMatch,matchers:c.cu(null),defaults:i.V.exclusionRules}:null,
os:r.G,reduceMotion:r.B.m}})},function(n){var u,e,o=n[0],f=n[1],c=r.z.extAllowList,s=c.split("\n")
;return s.indexOf(f)<0&&(u=s.indexOf("# "+f)+1||s.indexOf("#"+f)+1,s.splice(u?u-1:s.length,u?1:0,f),c=s.join("\n"),
i.ga("extAllowList",c)),(e=r.a.get(o))&&(e.ol=null),l.yn(l.t.tabs.get,o).then(function(n){var u=t.Gn(),r=function(){
return v.runNextOnTabLoaded({},n,u.Ln),l.t.runtime.lastError};return n?l.t.tabs.reload(n.id,r):l.t.tabs.reload(r),u.Jn})
},function(n){var u,t,l=n[1],e=n[2]
;return r.yt("status/"+n[0],3),t=(u=f.indexFrame(l,e)||f.indexFrame(l,0))?r.a.get(l).ss:null,u&&!t&&r.pu[10]({u:u.s.mr
},u),[u?u.s.f:0,t?t.f:null]},function(n){return c.cu(n)[0]},function(n,u){return p.initHelp({f:true},u)},function(n){
var u,r,t,e=n.module,o=n.name,i=b[e];return b.hasOwnProperty(e)&&i.includes(o)?(r=n.args,t=(u=l.t[e])[o],
new Promise(function(n){r.push(function(u){var r=l.m();return n(r?[void 0,r]:[g(u),void 0]),r}),t.apply(u,r)
})):[void 0,{message:"refused"}]},function(n,u){return u.s.b},function(n){var u,l=t.i();return n?(u=r.il.get(n),
l[n]=null!=u?u:null):r.il.forEach(function(n,u){l[u]=n}),l},function(n){var u=n.key,r=n.val;u.includes("|")&&i.nl(u,r)
},function(n,u){var t,l=n.key,e=n.val,o=u&&u.s&&u.s.b||r.hn,i=r.zn.find(function(n){return n.s.b===o})
;i&&i.postMessage({N:47,d:(t={},t[l]=e,t)})},function(){r.z.vimSync&&r.at.vimSync(true,"vimSync")},function(){return{
os:r.G}},function(n){l.tabsCreate({url:n.url}),l.t.tabs.remove(n.tabId)}],b={
permissions:["contains","request","remove"],tabs:["update"]},g=function(n){return{
message:n&&n.message?n.message+"":JSON.stringify(n)}},u.onReq=function(n,u){return _[n.n](n.q,u)},k=function(n){
return n&&"string"==typeof n.ol&&true!==r.el.get(n.ol)?n.ol:null}});