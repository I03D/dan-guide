"use strict"
;__filename="background/request_handlers.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./exclusions","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./tools","./open_urls","./frame_commands","./tab_commands"],function(n,t,u,r,o,e,i,l,f,a,c,s,v,d,m,p,b,g,y){
var _,k,N,I,w,P;Object.defineProperty(t,"__esModule",{value:true}),_=-1,u.pu=[function(n,t){var r=n.handler
;r&&"string"==typeof r&&("focus"===r?(4&t.s.d||(t.s.d|=4,t.postMessage({N:8
})),u.pu[12]({},t)):"command"===r?d.executeExternalCmd(n,null,t):"tip"===r&&(u.O=f.indexFrame(t.s.b,0)||t,
f.showHUD(n.tip||"Error: Lack .tip")))},function(){return 0},function(n,t){var r,o,e=n.k,i=l.yo
;if(!(e>=0&&e<i.length))return u.O=t,f.complainLimits(s.A("notModify",[e]));o=u.go,
u.z[r=i[e]]!==n.v&&(o?o.then(function(){l.ga(r,n.v)}):l.ga(r,n.v))},function(n,t){var u="object"==typeof n
;return p.dn.Vt(t.s.an,u?n.q:"",u?1:n)},function(n,t){var u=i.Sn(n);if(null==n.i)return u;t.postMessage({N:44,i:n.i,s:u
})},function(n,t){var e=n.u,l=n.e,a=i._i(n)
;r._r(),n.e=a,null==a.p?(u.O=t,f.showHUD(a.u)):l||e!==a.u?!t||"file://"===a.u.slice(0,7).toLowerCase()&&"file://"!==e.slice(0,7).toLowerCase()?o.tabsUpdate({
url:a.u}):d.sendFgCmd(18,false,{r:1,u:a.u}):(u.O=t,f.showHUD("Here is just root"),n.e={p:null,u:"(just root)"})
},function(n,t){var r,o,e,l=i.Sn(n);if(!l||!l.k)return u.O=t,f.showHUD(s.A("noEngineFound")),
void(n.n&&d.runNextCmdBy(0,n.n))
;o=n.o||b.parseOpenPageUrlOptions(n.n),e={},r=n.t.trim()&&u.R(n.t.trim(),524288,o.s,e).trim()||(n.c?u.hr(o.s,0,e={}):""),
Promise.resolve(r).then(function(r){
var i,a=null===r?"It's not allowed to read clipboard":(r=r.trim())?"":s.A("noSelOrCopied");if(a)return u.O=t,
f.showHUD(a),void(n.n&&d.runNextCmdBy(0,n.n));o.k=null!==(i=e.S)&&void 0!==i?i:null==o.k?l.k:o.k,u.pu[8]({u:r,o:o,r:0,
n:d.parseFallbackOptions(n.n)||{}},t)})},function(n,t){var r,e,i=n.s,l=0!==n.a,a=2===n.a,c=u._n;u.O=f.findCPort(t),
"number"!=typeof i?o.jn()?(r=t.s.b>=0?t.s.b:u.hn>=0?u.hn:null,e=l?null:r,o.jn().restore(i[1],function(n){var t=o.m()
;return t?f.showHUD(s.A("noSessionItem")):y.Cn(c,n,e).then(function(n){a&&r&&n&&n.windowId!==c&&o.tabsGet(r,function(t){
o.gn.move(n.id,{windowId:c,index:t?t.index+1:-1},o.m),o.tabsUpdate(n.id,{active:true})})}),t}),
e&&o.selectTab(e,o.m)):f.complainNoSession():o.selectTab(i,function(n){
return o.m()?f.showHUD(s.A("noTabItem")):o.selectWnd(n),o.m()})},b.openUrlReq,function(n,t){var r,o,e,i
;(o=u.a.get(r=t.s.b))?t!==(i=o.c)&&(o.c=t,u.o&&(e=t.s.f)!==i.s.f&&u.r(r,e)):u.o&&u.r(r,t.s.f)},function(n,t){
var r,o,e,i,l,c,s,v=t;if(v||(v=f.indexFrame(n.tabId,n.frameId))){if(e=(o=v.s).mr,i=u.a.get(o.b),l=o.mr=t?n.u:n.url,
!i||!i.ss){
if(c=a.ns?a.rs(l,o):null,o.f!==(s=null===c?0:c?1:2))o.f=s,u.o&&i.c===v&&u.r(o.b,s);else if(!c||c===a.rs(e,o))return
;v.postMessage({N:1,p:c,f:0})}}else(r=u.a.get(n.tabId))&&512&r.d&&(r.d|=4096)},function(n,t){var r,o=n.t||0;u.O=t,
u.x=o||u.x>0?1:-1,
u.Dn=n.k,d.replaceCmdOptions(n.f||{}),2!==o?1===o?g.parentFrame():g.nextFrame():(r=f.Hu(t))?g.focusFrame(r.c,r.W.length<=2,n.o?1:2):f.safePost(t,{
N:45,l:u.Dn})},function(n,t){var u,r,o,e=f.Hu(t);if(e&&(t.s.d|=4,e.d|=4,!(e.W.length<2)))for(r of(u={N:8},e.W))o=r.s.d,
r.s.d|=4,4&o||r.postMessage(u)},function(n,t,r){var e,i,l=t.s.b,a=f.Hu(t),c=n.u;if(!a||a.W.length<2)return false
;for(i of a.W)if(i.s.mr===c&&i!==a.j){if(e){e=null;break}e=i}return e&&e!==t?(u.Dn=n.k,I(n,t,e,1),
true):!!o.N()&&(o.N().getAllFrames({tabId:t.s.b},function(r){var o,e,i=0,a=t.s.J;for(o of r)if(o.parentFrameId===a){
if(i){i=0;break}i=o.frameId}(e=i&&f.indexFrame(l,i))&&(u.Dn=n.k,I(n,t,e,1))}),!!r&&t)},g.initHelp,function(n,t){
f.Hu(t).d|=4,t.s.d|=12,t.postMessage({N:11,H:u.bo})},function(n,t){var o,e,l,f,a,c,s=n.i;if(u.Dn=0,null!=n.u)l=n.t,
a=n.u,c={},a=(f=(e=n.m)>=42&&e<=64)?i.bi(a,true):a,a=u.R(a,f?1048576:524288,n.o&&n.o.s,c),d.replaceCmdOptions({url:a,
newtab:null!=l?!!l:!f,keyword:null!==(o=c.S)&&void 0!==o?o:n.o.k}),w(n.f),u.x=1;else{if(true!==n.r)return
;if(null==u.g||"omni"!==u.g.k){if(s)return;u.g=r.i(),u.x=1}else if(s&&u.g.v===u.Q.qu)return}u.O=t,g.showVomnibar(s)
},function(n,t){f.isNotVomnibarPage(t,false)||u.vt.Mr(n.q,n,N.bind(t,0|n.i))},function(n,t){
var o,e,l,a,c,m,p,y,_,k,N,I,w,P,j,T,G;if(null!=n.i)return e=n.i,l=(o=(n.r||"")+"").includes("name")?n.u:"",
void Promise.all([/^data:/i.test(e)?Promise.resolve(e):r.Io(e||n.u),null]).then(function(n){
var e,i,a,c,v,d,m,p=n[0],b="string"==typeof p,y=b?p:p?p[1]:"";u.O=t,e=y.indexOf(",")+1,
a=(i=y.slice(5,Math.max(5,e)).toLowerCase()).split(";")[0],p&&!a.startsWith("text/")?(c=y.slice(e,e+8),
c=i.includes("base64")?r.Zn(c,"atob"):c.slice(0,6),
v=c.startsWith("\x89PNG")?"PNG":c.startsWith("\xff\xd8\xff")?"JPEG":/^GIF8[79]a/.test(c)?"GIF":(a.split("/")[1]||"").toUpperCase()||a,
d=l&&/^(http|ftp|file)/i.test(l)?l:"",m=o.includes("safe")&&"GIF"!==v||o.includes("force"),
g.handleImageUrl(b?p:"",b?null:p[0],m&&"PNG"!==v?9:1,function(n){
f.showHUD(s.A(n?"imgCopied":"failCopyingImg",[1===n?"HTML":m?"PNG":v]))},l,d,null,false),
r._r()):p?f.showHUD("",74):f.showHUD(s.A(0===p?"downloadTimeout":"downloadFail"))});if(a=n.n,
c=n.o||a&&b.parseOpenPageUrlOptions(a)||{},y=(m=!!(a&&a.copy&&a.o))?null:c.s,_=m?null:c.k,
k=(p=null!=n.s&&n.m||0)>=42&&p<=64&&(!y||false!==y.r),
N=n.d?false!==c.d:!!c.d,!n.s&&a&&null!=a.type&&"frame"!==a.type)return w=d.concatOptions(a,r.Eu({url:null,
type:"tab"===(I=a.type)&&a.url||"tab-url"===I?null:"tab-title"===I?"title":I})),u.O=t,u.x=1,
void d.executeCommand(v.na("copyWindowInfo",w),1,u.Dn,t,1,a.$f&&{c:a.$f,r:a.$retry,u:0,w:0});if(P=n.u||n.s||"",
N)if("string"!=typeof P)for(j=P.length;0<=--j;)k&&(P[j]=i.bi(P[j]+"")),P[j]=r.pr(P[j]+"");else k&&(P=i.bi(P)),
P=r.pr(P);else"string"==typeof P&&P.length<4&&!P.trim()&&" "===P[0]&&(P="");T=!!P,G=P&&u.wr(P,n.j,y,_),
G=n.s&&"object"==typeof n.s?"[".concat(n.s.length,"] ")+n.s.slice(-1)[0]:G,Promise.resolve(G).then(function(r){u.O=t,
a&&d.runNextCmdBy(T?1:0,a)||f.showHUD(N?r.replace(/%[0-7][\dA-Fa-f]/g,decodeURIComponent):r,n.u?14:15)})},function(n,t){
var o,e,i,l,a,c,s=null!=t?t.s:null;null===s||4&s.d||(s.d|=4,(o=f.Hu(t))&&(o.d|=4)),i=1,
null!=(l=/^\d+|^-\d*/.exec(e=n.k))?(e=e.slice((a=l[0]).length),
i="-"!==a?parseInt(a,10)||1:-1):e.length>6&&e.startsWith("<".concat("c-v-").concat(e[5],">"))&&(e=e[5]+e.slice(7)),
(c=u.Nu.get(e))||(l=e.match(v.sa),i=1,c=u.Nu.get(e=l[l.length-1])),r._r(),c&&(38===c.ju&&c.Iu&&u.ro(c),n.e&&(u.wi={
element:r.wo(n.e)}),d.executeCommand(c,i,n.l,t,0,null))},d.waitAndRunKeyReq,function(n,t){var r,o,e,i
;if(2===n.c)return r=p.pn.mn(n.u),void(n.f&&d.runNextCmdBy(r>0?1:0,n.f));e=n.c.o,(o=!!n.f)||(u.O=t),
i=!o&&g.vn(t,e.type,n.l)||t,Promise.resolve(i).then(function(u){if(!(o||u===t&&n.u)){var r=n
;return r.U=(e.extUrl?1:0)|(n.c.a?2:0),r.f=true,void f.bn(r,true,1,u)}1===n.c.a?(p.pn.ga(n,t.s.an,t.s.b),
f.showHUDEx(t,"mNormalMarkTask",1,[["mCreate"],[n.l?"Local":"Global"],n.n]),
d.runNextCmdBy(1,e)):p.pn.Po(e,n,t,n.l&&o?n.k:0)})},b.vi,d.onBeforeConfirm,d.onConfirmResponse,function(n,t){
var r,e,i,l,a,c,v,d;"e"!==n.t?(i=n.s,l=n.u,c="tab"===(a="history"===(e=n.t)&&null!=i?"session":e)?a:a+" item",
v=function(n){Promise.resolve(s.A("sugs")).then(function(t){f.showHUD(s.A(n?"delSug":"notDelSug",[t&&s.Xu(t,a[0])||c]))
})
},u.O=f.findCPort(t),"tab"===a&&u.hn===i?f.showHUD(s.A("notRemoveCur")):"session"!==a?u.vt.mt("tab"===a?i:l,a,v):(null===(r=o.jn())||void 0===r?void 0:r.forgetClosedTab)&&(d=i,
o.jn().forgetClosedTab(d[0],d[1]).then(function(){return 1},u.l).then(v))):f.showHUD(s.A("cannotDelSug"))
},g.openImgReq,function(n,t){u.O=null,b.openJSUrl(n.u,{},function(){u.O=t,f.showHUD(s.A("jsFail"))})},function(n,t){
var u
;2!==n.c&&4!==n.c?I(n,t,(null===(u=f.Hu(t))||void 0===u?void 0:u.j)||null,n.f):f.getParentFrame(t.s.b,t.s.J,1).then(function(u){
var r;I(n,t,u||(null===(r=f.Hu(t))||void 0===r?void 0:r.j)||null,n.f)})},c.An,function(n,t){d.replaceCmdOptions({
active:true,returnToViewport:true,extend:!!(1&n.c),direction:n.c>=56?"before":null}),u.O=t,u.x=1,g.performFind()
},g.framesGoBack,function(){return s.Qu&&s.Qu(),s.Zu},function(n,t){t.s.d|=8},function(n,t){d.replaceCmdOptions({
mode:n.c?"caret":"",start:true}),w(n.f),u.O=t,u.x=1,g.enterVisualMode()},function(n){if(performance.now()-n.r.n<500){
var t=n.r.c;t.element=r.wo(n.e),m.runKeyWithCond(t)}},function(n,t){
var r,l=n.o||{},a={},c=u.R(i.bi(n.u,true),1048576,l.s,a),s=null!==(r=a.S)&&void 0!==r?r:l.k;c=c!==n.u||s?e.Ir(c,s,0):c,
u.O=t,f.showHUD(c,78),o.downloadFile(c,n.f,n.r||"").then(n.m<44?function(r){r||u.pu[26]({m:37,f:n.f,u:c},t)}:void 0)
},function(n,t,u){return setTimeout(function(){f.sendResponse(t,u,9)},n),t},function(n){var t=n.v,u=t!==!!t
;f.showHUD(s.A(u?"useVal":t?"turnOn":"turnOff",[n.k,u?JSON.stringify(t):""]))},function(n,t){u.pu[19](n,f.findCPort(t))
},function(n,t,r){return!(false!==t.s&&!t.s.mr.startsWith(u.Yn))&&(P(n.q,n.i,t).then(function(n){t.postMessage(r?{N:4,
m:r,r:n}:n)}),t)},function(n,t){var r=n.u,o=r.indexOf("://")
;r=(r=o>0?r.slice(r.indexOf("/",o+4)+1):r).length>40?r.slice(0,39)+"\u2026":r,u.O=t,f.showHUD(r,78)},function(n,t){
var o=n.t,e=r.pr(n.u),i=o&&e?(u.Ru.actions.find(function(n){return n.startsWith("itemJoin=")})||"").slice(9):""
;i=i?i.includes("\\")?r.tryParse('"'===i[0]?i:'"'.concat(i,'"')):r.Zn(i):"\n",u.pu[18]({s:o&&e?o+i+e:e||o,d:false,m:0
},f.findCPort(t))},function(n,t){u.O=f.findCPort(t),f.showHUD(n.t,15)},function(n,t){
f.showHUDEx(t,"mLocalMarkTask",1,[[n.n?"mCreate":"mJumpTo"],n.i>1?n.i:["mLastMark"]]),u.O=t,d.runNextCmdBy(1,n.c.o)
},function(){var n=u._u(null,null);return n&&(clearTimeout(n.i),n.r&&n.r(false)),!n},function(n,t){
var r=n>0&&f.indexFrame(t.s.b,n);return r?(g.focusFrame(r,false,2,1),2):(n<=0&&u.pu[45](),n?4:2)
},f.OnFreeze,function(n,t){var r,o,e,i=n.s,l=i[0],a=i[2],c=a&&(i[1]?"^ ":"")+a.join(" "),s={N:1,p:c,f:l}
;if(t.postMessage(s),o=3===l?2:0,(r=f.Hu(t))&&(!r.ss||r.ss.f!==o||r.ss.as!==c))for(e of(r.ss={f:o,as:c},
u.o&&r.c.s.f!==o&&u.r(t.s.b,o),r.W))e.s.f=o,512&e.s.d||e.postMessage(s)},function(n,t){
var r=t.s.b,e=0,i=setInterval(function(){var n=u.a.get(r);r!==u.hn&&n?(clearInterval(i),
(n.W.includes(t)||512&t.s.d)&&o.selectTab(r,o.selectWndIfNeed)):(++e>=12||!n)&&clearInterval(i)},17)}],
N=function(n,t,o,e,i,l,a,c){var s,v,d,m,p,b=this.s.mr,g=2===n?2:0
;if(1===n&&u.kn>=58)if(b=b.slice(0,b.indexOf("/",b.indexOf("://")+3)+1),
null!=(m=-1!==_?null===(s=u.a.get(_))||void 0===s?void 0:s.j:null)&&(m.s.mr.startsWith(b)?g=1:_=-1),
g);else for(p of u.a.values())if((d=(v=p.j)&&v.s)&&d.mr.startsWith(b)){g=1,_=d.b;break}f.safePost(this,{N:43,a:o,c:c,
i:g,l:t,m:e,r:a,s:i,t:l}),r._r()},u.jo=function(n,t,r,o,e){n.postMessage({N:7,H:e||4!==t?f.ensureInnerCSS(n.s):null,
m:e?5:0,k:e?u.Dn:0,f:{},c:t,n:o||0,a:r})},I=function(n,t,r,o){r&&2!==r.s.f?u.jo(r,n.c,n.a,n.n,o):(n.a.$forced=1,
d.portSendFgCmd(t,n.c,false,n.a,n.n||0))},w=function(n){n&&("string"==typeof n&&(n=m.parseEmbeddedOptions(n)),
n&&"object"==typeof n&&Object.assign(u.g,r.Eu(n)))},P=function(n,t,u){
return k||(k=o.import2("/background/sync.js").then(function(){return l.st}).then(function(){
return o.import2("/background/page_handlers.js")})),k.then(function(t){return Promise.all(n.map(function(n){
return t.onReq(n,u)}))}).then(function(n){return{i:t,a:n.map(function(n){return void 0!==n?n:null})}})},
window.onPagesReq=function(n){var t;return-3===n.i?((t=u._u(null,null))&&clearTimeout(t.i),t):P(n.q,n.i,null)}});