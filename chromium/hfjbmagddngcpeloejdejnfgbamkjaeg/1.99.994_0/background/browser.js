"use strict";__filename="background/browser.js",define(["require","exports","./store","./utils"],function(n,e,r,t){
var u,o,i,f,l,c,a,s,d,v,m,p,b,g,w,h;Object.defineProperty(e,"__esModule",{value:true}),
e.import2=e.s=e.p=e.w=e.Pn=e.removeTempTab=e.downloadFile=e.makeTempWindow_r=e.makeWindow=e.openMultiTabs=e.tabsCreate=e.selectWndIfNeed=e.selectWnd=e.selectTab=e.h=e.k=e.Rn=e.Tn=e.yn=e.H=e.selectIndexFrom=e.selectFrom=e.getCurWnd=e.On=e.tn=e.getCurTabs=e.getCurTab=e.isTabMuted=e.getTabUrl=e.getGroupId=e.tabsUpdate=e.tabsGet=e.m=e.N=e.jn=e.Nn=e.gn=e.t=void 0,
e.t=chrome,e.gn=e.t.tabs,e.Nn=e.t.windows,e.jn=function(){return e.t.sessions},e.N=function(){return e.t.webNavigation},
e.m=function(){return e.t.runtime.lastError},e.tabsGet=e.gn.get,e.tabsUpdate=e.gn.update,e.getGroupId=function(n){
var e=n.groupId;return-1!==e&&null!=e?e:null},e.getTabUrl=function(n){return n.url||n.pendingUrl||""},
e.isTabMuted=function(n){return n.mutedInfo.muted},e.getCurTab=e.gn.query.bind(null,{active:true,lastFocusedWindow:true
}),e.getCurTabs=e.gn.query.bind(null,{lastFocusedWindow:true}),e.tn=e.getCurTabs,e.On=function(){return true},
e.getCurWnd=function(n,t){var u={populate:n};return r._n>=0?e.Nn.get(r._n,u,t):e.Nn.getCurrent(u,t)},u=function(n){
return n[e.selectIndexFrom(n)]},e.selectFrom=u,e.selectIndexFrom=function(n){
for(var e=n.length;0<--e;)if(n[e].active)return e;return 0},e.H=function(n){
return/^(edge-)?extension:/.test(n)?r.Q.U+"-"+n.slice(n.indexOf("ext")):n},e.yn=function(n){
var r=[].slice.call(arguments,1),u=t.Gn(),o=u.Jn,i=u.Ln;return r.push(function(n){var r=e.m()
;return i(r?void 0:null!=n?n:null),r}),n.apply(void 0,r),o},o=function(n){return n!==r.l?function(){var r=e.m()
;return n(!r),r}:e.m},e.Tn=o,e.Rn=function(n){var e=[].slice.call(arguments,1);return new Promise(function(r){e.push(r),
n.apply(0,e)})},i=function(n,e){var t=r.Qn.get(n);return 1===t||2===t&&!(!r.Xn&&!e)},f=function(n){e.k=n},e.h=f,
l=function(n,r){e.tabsUpdate(n,{active:true},r)},e.selectTab=l,c=function(n){return n&&e.Nn.update(n.windowId,{
focused:true}),e.m()},e.selectWnd=c,a=function(n){return n&&n.windowId!==r._n&&e.selectWnd(n),e.m()},
e.selectWndIfNeed=a,s=function(n,t,u){var o=n.url;return o?i(o,2===r.cn)&&delete n.url:(o=r.newTabUrl_f,
2===r.cn&&(-1===u?o.includes("pages/blank.html")&&o.startsWith(r.Yn):!u&&o.startsWith(location.protocol))||i(o,2===r.cn)||(n.url=o),
n.url||delete n.url),e.gn.create(n,t)},e.tabsCreate=s,d=function(n,r,t,u,o,i,f){var l;o=false!==o,
l=null!=i?e.getGroupId(i):null,o||null==l||delete n.index,l=o&&null!=l&&e.gn.group?l:void 0,e.tabsCreate(n,function(t){
var o,i,c,a,s;if(e.m())return f&&f(),e.m();for(n.index=t.index,n.windowId=t.windowId,null!=l&&e.gn.group({tabIds:t.id,
groupId:l}),f&&f(t),n.active=false,o=null!=n.index,i=u?u.length:1,c=null!=l?function(n){return n&&e.gn.group({
tabIds:n.id,groupId:l}),e.m()}:e.m,u.length>1&&(u[0]=n.url),a=0;a<r;a++)for(s=a>0?0:1;s<i;s++)u.length>1&&(n.url=u[s]),
o&&++n.index,e.gn.create(n,c)},t)},e.openMultiTabs=d,v=function(n,t,u){var o,f=false!==n.focused
;(t=t?"minimized"===t===f||"popup"===n.type||"normal"===t||"docked"===t?"":t:"")&&!t.includes("fullscreen")&&(n.state=t,
t=""),
n.focused=true,(o=n.url)||null!=n.tabId||(o=n.url=r.newTabUrl_f),"string"==typeof o&&i(o,n.incognito)&&delete n.url,
e.Nn.create(n,t||!f||u?function(n){if(u&&u(n),!(t||!f)||!n)return e.m();var r=f?{}:{focused:false};t&&(r.state=t),
e.Nn.update(n.id,r)}:e.m)},e.makeWindow=v,m=function(n,r,t){e.Nn.create({type:"normal",focused:false,incognito:r,
state:"minimized",tabId:n},t)},e.makeTempWindow_r=m,p=function(n,r){return e.yn(e.t.permissions.contains,{
permissions:["downloads"]}).then(function(u){var o,i,f;return!!u&&(o={url:n},r&&(i=/\.[a-z\d]{1,4}(?=$|[?&])/i,
r=(r="#"===(r=t.Zn(r))[0]?r.slice(1):r).replace(/[\r\n]+/g," ").replace(/[/\\?%*:|"<>_]+/g,"_"),i.test(r)||(f=i.exec(n),
r+=f?f[0]:n.includes(".")?"":".bin"),o.filename=r),e.yn(e.t.downloads.download,o).then(function(){return true}))})},
e.downloadFile=p,b=function(n){e.gn.remove(n,e.m)},e.removeTempTab=b,e.Pn=function(n){
return n=n.slice(0,99).toLowerCase(),
1!==r.Qn.get(n)&&(n.startsWith("about:")?"about:blank"!==n:n.startsWith("chrome:")?!n.startsWith("chrome://downloads"):n.startsWith(r.Q.U)&&!("string"!=typeof r.Q.ne?r.Q.ne.test(n):n.startsWith(r.Q.ne))||r.Xn&&/^(edge|extension):/.test(n)&&!n.startsWith("edge://downloads"))
},g=function(n,r){var t,u,o=e.t.permissions;t=Promise.all(n.map(function(n){return n&&e.yn(e.t.permissions.contains,n)
})),u=n.map(function(n){return n&&(n.permissions||n.origins)[0]}),t.then(function(n){
var e=false,t=false,i=function(i,c){var a,s,d,v,m=!c;if(c){for(s of(a=c.permissions)||[])(d=u.indexOf(s))>=0&&(n[d]=i,
m=true);for(v of(!a||a.length<=0)&&c.origins||[])if("chrome://*/*"!==v)(d=u.indexOf(v))>=0&&(n[d]=i,
m=true);else for(d=0;d<u.length;d++)(u[d]||"").startsWith("chrome://")&&(n[d]=i,m=true)}
m&&(false===r(n,true)&&(e=t=false),e!==n.includes(false)&&o.onAdded[(e=!e)?"addListener":"removeListener"](f),
t!==n.includes(true)&&o.onRemoved[(t=!t)?"addListener":"removeListener"](l))},f=i.bind(null,true),l=i.bind(null,false)
;n.includes(false)||n.includes(true)?i(true):r(n,false)})},e.w=g,w=function(n,t,u,o,i,f){var l;(l=t>=0?{frameId:t}:{
allFrames:true,matchAboutBlank:true
}).runAt="document_start",o?l.code="".concat((o+"").split("{")[1].split("(")[0].trim(),"(").concat(i?i.join(","):"",")"):l.file=u[0],
r.kn<50&&(delete l.frameId,delete l.matchAboutBlank),e.gn.executeScript(n,l,f||e.m)};e.p=w,h=function(n){
var t,u=r.Yn.length-1;for(t of r.Q.ee.slice(0,-1))e.p(n,-1,[t.slice(u)])},e.s=h,e.import2=function(e){
return new Promise(function(r,t){n([e],r,t)}).then(function(n){return n})},r.re<6&&(r.te=new Promise(function(n){
var r=e.t.runtime.onInstalled,t=function(e){var u=t;u&&(t=null,n(e),r.removeListener(u))};r.addListener(t),
setTimeout(t,6e3,null)}))});