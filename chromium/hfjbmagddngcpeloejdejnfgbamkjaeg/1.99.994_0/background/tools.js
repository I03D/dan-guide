"use strict"
;__filename="background/tools.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./run_commands","./open_urls","./tab_commands"],function(n,t,e,r,o,u,i,a,l,c,f,s,v,d){
function _(n){var t,r,u=n.tabId,i=e.a.get(u)
;i&&512&i.d&&l.po(i,0),n.windowId===e._n?((t=performance.now())-w>666&&(r=1===e.G?Date.now():t,h.set(e.hn,r)),e.hn=u,
w=t):o.Nn.get(n.windowId,m)}function m(n){if(!n||!n.focused)return o.m();var t=n.id;t!==e._n&&(e.yu=e._n,e._n=t),
o.gn.query({windowId:t,active:true},function(n){n&&n.length>0&&t===e._n&&p(n)})}function p(n){
if(!n||0===n.length)return o.m();var r=n[0],u=r.windowId,i=e._n;u!==i&&(e._n=u,e.yu=i),e.cn=r.incognito?2:1,t.Bn.iu(),
_({tabId:r.id,windowId:u})}var g,y,b,h,w;Object.defineProperty(t,"__esModule",{value:true}),
t.Bn=t.tl=t.dn=t.pn=t.fn=void 0,t.fn={Mo:function(n,t){return"vimiumContent|"+n+(t?"|"+t:"")},Co:function(n,t){
var u=o.t.contentSettings;try{u&&u.images.get({primaryUrl:"https://127.0.0.1/"},o.m)}catch(n){u=null}
return u?u[n]&&!/^[A-Z]/.test(n)&&u[n].get?!(!t.startsWith("read:")&&r.eu.test(t)&&!t.startsWith(e.Q.U))&&(l.complainLimits(f.A("changeItsCS")),
true):(l.showHUD(f.A("unknownCS",[n])),true):(l.showHUD("Has not permitted to set contentSettings"),true)},
Ao:function(n,t){var o,i,a,c,s,v,d,_,m,p
;if(n.startsWith("file:"))return(o=e.kn>=56?1:t>1?2:0)?(l.complainLimits(1===o?f.A("setFileCS",[56]):f.A("setFolderCS")),
[]):[n.split(/[?#]/,1)[0]];if(n.startsWith("ftp"))return l.complainLimits(f.A("setFTPCS")),[]
;if(i=n.match(/^([^:]+:\/\/)([^\/]+)/),a=u.mi.exec(i[2]),c=[(n=i[1])+(s=a[3]+(a[4]||""))+"/*"],
t<2||r.mu(a[3],0))return c;for(a=null,d=(v=r.Kr(s))[0],_=v[1],m=Math.min(d.length-_,t-1),
p=0;p<m;p++)s=s.slice(d[p].length+1),c.push(n+s+"/*");return c.push(n+"*."+s+"/*"),
m===d.length-_&&"http://"===n&&c.push("https://*."+s+"/*"),c},Oo:function(n){var t,e,r;for(e of n.W){
if(r=new URL(e.s.mr).host,t&&t!==r)return true;t=r}return false},Ro:function(n,e){var r=o.t.contentSettings[n]
;null==e?(r.clear({scope:"regular"}),r.clear({scope:"incognito_session_only"},o.m),a.nl(t.fn.Mo(n),null)):r.clear({
scope:e?"incognito_session_only":"regular"})},ln:function(n,r){var o=n.type?""+n.type:"images"
;return!t.fn.Co(o,"http://a.cc/")&&(t.fn.Ro(o,r?r.s.an:2===e.cn),
l.showHUDEx(r,"csCleared",0,[[o[0].toUpperCase()+o.slice(1)]]),true)},qn:function(n,e,r,o){
var u=n.type?""+n.type:"images",i=r[0];n.incognito?t.fn.Uo(e,u,i,o):t.fn.Go(u,e,i,"reopen"===n.action,o)},
Go:function(n,r,i,l,c){var f=u.ri(i.url);t.fn.Co(n,f)?c(0):o.t.contentSettings[n].get({primaryUrl:f,
incognito:i.incognito},function(u){t.fn.Wo(n,f,r,{scope:i.incognito?"incognito_session_only":"regular",
setting:u&&"allow"===u.setting?"block":"allow"},function(r){var u,f,v;r?c(0):(i.incognito||(u=t.fn.Mo(n),
1!==a.xo(u)&&a.nl(u,1)),v=!o.jn()||e.kn>=70&&(f=e.a.get(i.id))&&f.W.length>1&&t.fn.Oo(f),
i.incognito||l?d.$n(i):i.index>0?d.$n(i,v?0:2):o.getCurWnd(true,function(n){
return n&&"normal"===n.type?d.$n(i,v?0:n.tabs.length>1?2:1):o.gn.reload(s.getRunNextCmdBy(0)),o.m()}))})})},
Uo:function(n,r,i,a){if(e.Q.wn)return l.complainLimits(f.A("setIncogCS")),void a(0);var c=u.ri(i.url)
;t.fn.Co(r,c)?a(0):o.t.contentSettings[r].get({primaryUrl:c,incognito:true},function(e){
return o.m()?(o.t.contentSettings[r].get({primaryUrl:c},function(e){e&&"allow"===e.setting?a(1):o.Nn.create({
type:"normal",incognito:true,focused:false,url:"about:blank"},function(e){var u=e.tabs[0].id
;return t.fn.Fo(n,r,i,c,e.id,true,function(){o.gn.remove(u)})})
}),o.m()):e&&"allow"===e.setting&&i.incognito?t.fn.Jo(i):void o.Nn.getAll(function(o){var u,a,l
;if((o=o.filter(function(n){return n.incognito&&"normal"===n.type})).length)return u=v.preferLastWnd(o),
e&&"allow"===e.setting?t.fn.Jo(i,u.id):(a=i.windowId,l=i.incognito&&o.some(function(n){return n.id===a}),
t.fn.Fo(n,r,i,c,l?void 0:u.id))
;console.log("%cContentSettings.ensure","color:red","get incognito content settings",e," but can not find an incognito window.")
})})},Fo:function(n,e,r,u,i,a,l){var c=t.fn.Qo.bind(null,r,i,l);return t.fn.Wo(e,u,n,{scope:"incognito_session_only",
setting:"allow"},a&&i!==r.windowId?function(n){if(n)return c(n);o.Nn.get(r.windowId,c)}:c)},Wo:function(n,e,u,i,a){
var l,c=false,f=o.t.contentSettings[n],s=function(){var n=o.m();return n&&console.log("[%o]",Date.now(),n),c||(--d,
((c=!!n)||0===d)&&setTimeout(a,0,c)),n},v=t.fn.Ao(e,0|u),d=v.length;if(d<=0)return a(true);for(l of(r.Eu(i),
v))f.set(Object.assign({primaryPattern:l},i),s)},Qo:function(n,e,r,u){true!==u&&t.fn.Jo(n,e),r&&r(),
true!==u?e&&o.Nn.update(e,{focused:true,state:u?u.state:void 0}):s.runNextCmd(0)},Jo:function(n,t){n.active=true,
"number"==typeof t&&n.windowId!==t&&(n.index=void 0,n.windowId=t),d.$n(n)}},t.pn={ga:function(n,r,o){
var u,i,l,c,f=n.l,s=n.n,v=n.s,d=n.u
;f&&0===v[0]&&0===v[1]&&(2===v.length?(u=d.indexOf("#"))>0&&u<d.length-1&&(v=[0,0,d.slice(u)]):(v[2]||"").length<2&&(v=[0,0])),
o=o>=0?o:-1,
i=r?v:2!==v.length||v[0]||v[1]?2!==v.length||v[1]>524287||v[0]>8191?v:Math.max(0,v[0])|Math.max(0,v[1])<<13:0,
l=t.pn.Do(s,f?d:""),c=f?i:i?{s:i,t:o,u:d.slice(0,8192)}:{t:o,u:d.slice(0,8192)},r?(e._a||(g.Ko(),
e._a=new Map)).set(l,c):a.nl(l,c)},Po:function(n,u,i,c){
var f,d,_,m,p,g,y,b,h,w=u.n,M=t.pn.Do(w,u.l?u.u:""),C=i.s.an&&(null==e._a?void 0:e._a.get(M))||a.xo(M),I="number"==typeof C?[8191&C,C>>>13]:"string"==typeof C?JSON.parse(C):C?C instanceof Array?C.slice(0):{
url:C.u,tabId:C.t,scroll:"number"!=typeof C.s?C.s||[0,0]:[8191&C.s,C.s>>>13]}:C;if("string"==typeof C&&t.pn.ga({l:u.l,
n:w,s:I instanceof Array?I:I.scroll||[0,0],u:u.u},false,i.s.b),!I&&u.s)try{
(f=JSON.parse(u.s))&&"object"==typeof f&&(_=+f.scrollY,(d=+f.scrollX)>=0&&_>=0&&(I=[0|d,0|_,""+(f.hash||"")]))
}catch(n){}return I?(m=s.parseFallbackOptions(n),I instanceof Array?(m&&(m.$else=null),
void t.pn.Ho(i.s.b,null,i,true,w,I,0,m,c)):(m&&(m.$else=m.$then),p=I.tabId,g=n.wait,y=n.prefix,b=I.url,(h={n:w,
a:!!n.parent&&!y,p:true,q:v.parseOpenPageUrlOptions(n),s:I.scroll||[0,0],t:p,u:b,f:m,
w:"number"==typeof g?Math.min(Math.max(0,g||0),2e3):g
}).p=!!y||null==y&&!h.a&&0===h.s[1]&&0===h.s[0]&&!!r.Bt(b)&&(!b.includes("#")||u.u.startsWith(b)),
void(t.pn.Zo(u.u,b,h)?t.pn.Ho(i.s.b,null,i,false,w,h.s,0,m,c):p>=0&&e.a.has(p)?o.tabsGet(p,t.pn.Bo.bind(0,h,c)):v.vi(h)))):(l.showHUDEx(i,"noMark",0,[[u.l?"Local":"Global"],w]),
void s.runNextCmdBy(0,n))},Zo:function(n,t,e){var r=n.split("#",1)[0],o=t.split("#",1)[0]
;return r===o||!!e.p&&r.startsWith(o.endsWith("/")||o.includes("?")?o:o+"/")||!!e.a&&o.startsWith(r.endsWith("/")||r.includes("?")?r:r+"/")
},Bo:function(n,r,u){var i,a=o.getTabUrl(u);t.pn.Zo(a,n.u,n)?((i=u.id===e.hn)||o.selectTab(u.id,o.selectWndIfNeed),
t.pn.hi(n,u.id,i?r:0,true)):v.vi(n)},Do:function(n,t){
return t?"vimiumMark|"+i.$i(t.slice(0,499).split("#",1)[0])+(t.length>1?"|"+n:""):"vimiumGlobalMark|"+n},
Ho:function(n,t,r,u,i,a,l,c,v){if(r=!t||!t.j||512&t.j.s.d?r:t.j){var d={g:!u,s:a,t:"",f:c||{},w:l||0}
;Promise.resolve(i&&f.Yu("mNormalMarkTask",[["mJumpTo"],[u?"Local":"Global"],i])).then(function(n){d.t=n||"",v?(e.Dn=v,
e.jo(r,19,d,1,1)):s.portSendFgCmd(r,19,true,d,1)})}else o.p(n,0,null,function(n,t){window.scrollTo(n,t)
},[a[0],a[1]],c?function(){return s.runNextCmdBy(1,c),o.m()}:null)},hi:function(n,r,o,u){var i=e.a.get(r),a=n.w
;l.Ku(i).then(function(){t.pn.Ho(r,i,null,false,n.n,n.s,u||false===a?0:"number"!=typeof a?200:a,n.f,o)}),
n.t!==r&&n.n&&t.pn.ga({l:false,n:n.n,s:n.s,u:n.u},2===e.cn,r)},mn:function(n){var r,o=t.pn.Do("",n),u=0
;return e.il.forEach(function(n,t){t.startsWith(o)&&(u++,a.nl(t,null))}),(r=e._a)&&r.forEach(function(n,t){
t.startsWith(o)&&(u++,r.delete(t))
}),l.showHUDEx(e.O,"markRemoved",0,[u,["#"===n?"allLocal":n?"Local":"Global"],[1!==u?"have":"has"]]),u}},t.dn={Eo:null,
tt:0,Vo:function(){var n=e.il.get("findModeRawQueryList")||"";t.dn.Eo=n?n.split("\n"):[],t.dn.Vo=null},
Vt:function(n,o,u){var i,l,c=t.dn;if(c.Vo&&c.Vo(),i=n?e.ha||(g.Ko(),e.ha=c.Eo.slice(0)):c.Eo,
!o)return(i[i.length-(u||1)]||"").replace(/\r/g,"\n");o=o.replace(/\n/g,"\r"),n?c.Xo(o,i,true):(o=r.nt(o,0,99),
(l=c.Xo(o,i))&&a.nl("findModeRawQueryList",l),e.ha&&c.Xo(o,e.ha,true))},Xo:function(n,t,e){var r=t.lastIndexOf(n)
;if(r>=0){if(r===t.length-1)return;t.splice(r,1)}else t.length>=50&&t.shift();if(t.push(n),!e)return t.join("\n")},
sn:function(n){n?e.ha&&(e.ha=[]):(t.dn.Vo=null,t.dn.Eo=[],a.nl("findModeRawQueryList",""))}},g={Yo:false,tt:0,
Ko:function(){g.Yo||(o.Nn.onRemoved.addListener(g.Mi),g.Yo=true)},Mi:function(){g.Yo&&(g.tt=g.tt||setTimeout(g.Ci,34))},
Ci:function(){var n;if(g.tt=0,e.kn>51)for(n of e.a.values())if(n.c.s.an)return;o.Nn.getAll(function(n){
n.some(function(n){return n.incognito})||g.Ii()})},Ii:function(){e.ha=null,e._a=null,
o.Nn.onRemoved.removeListener(g.Mi),g.Yo=false}},b=(y=false)?-1:0,t.tl={Ti:[1,1],Si:function(n){var e=t.tl.Ti[n]
;return"object"==typeof e?e.matches:null},ji:function(n,e){
var r,o=2===e,u=t.tl,i=u.Ti,a=i[n],l=n?"prefers-color-scheme":"prefers-reduced-motion"
;1===a&&o&&(i[n]=a=matchMedia("(".concat(l,")")).matches?2:0),
o&&2===a?((r=matchMedia("(".concat(l,": ").concat(n?"dark":"reduce",")"))).onchange=u.Li,i[n]=r,
0!==b&&-2!==b||(b=setInterval(t.tl.rl,6e4))):o||"object"!=typeof a||(a.onchange=null,i[n]=2,
(b>0||-2===b)&&i.every(function(n){return"object"!=typeof n})&&(b>0&&clearInterval(b),b=0))},Ut:function(n,r,o){
var u,i,l,f,s=t.tl.Ti[n]
;u=n?"dark":"less-motion",f=a.E(l=n?"d":"m",i="object"==typeof s?s.matches:null!=o?o:1===(0===n?e.z.autoReduceMotion:e.z.autoDarkMode)),
e.B[l]!==f&&(e.B[l]=f,r||a.$u({N:6,d:[l]})),c.An({t:u,
e:i||" ".concat(e.z.vomnibarOptions.styles," ").includes(" ".concat(u," ")),b:!r})},rl:function(){var n,e
;for(b>0&&performance.now()-w>27e4&&(clearInterval(b),
b=-2),e=(n=t.tl.Ti).length;0<=--e;)"object"==typeof n[e]&&t.tl.Ut(e)},Ai:function(){t.tl.rl(),b=setInterval(t.tl.rl,6e4)
},Li:function(){y||(b>0&&clearInterval(b),b=-1,y=true);var n=t.tl.Ti.indexOf(this);n>=0&&t.tl.Ut(n)}},h=e.Hn,t.Bn={
Kn:function(n,t){return h.get(t.id)-h.get(n.id)},iu:e.l},w=0,o.gn.onActivated.addListener(_),
o.Nn.onFocusChanged.addListener(function(n){-1!==n&&o.gn.query({windowId:n,active:true},p)}),
o.gn.onRemoved.addListener(function(n){e.a.delete(n),h.delete(n)}),a.st.then(function(){var n,r
;for(r of(o.getCurTab(function(n){w=performance.now();var t=n&&n[0];if(!t)return o.m();e.hn=t.id,e._n=t.windowId,
e.cn=t.incognito?2:1}),n=[],["images","plugins","javascript","cookies"]))null!=e.il.get(t.fn.Mo(r))&&n.push(r)
;n.length&&o.t.contentSettings&&setTimeout(function(){for(var e of n)t.fn.Ro(e)},100)}),
e.at.autoDarkMode=e.at.autoReduceMotion=function(n,e){var r=e.length>12?0:1;t.tl.ji(r,n="boolean"==typeof n?n?2:0:n),
t.tl.Ut(r,0,2===n?null:n>0)},e.at.vomnibarOptions=function(n){
var r,o,u,i,l,c,f,s=a.V.vomnibarOptions,v=e.Xt,d=true,_=s.actions,m=s.maxMatches,p=s.queryInterval,g=s.styles,y=s.sizes
;n!==s&&n&&"object"==typeof n&&(r=Math.max(3,Math.min(0|n.maxMatches||m,25)),
u=(o=n.actions)?o.replace(/[,\s]+/g," ").trim():"",i=+n.queryInterval,l=((n.sizes||"")+"").trim(),
c=((n.styles||"")+"").trim(),f=Math.max(0,Math.min(i>=0?i:p,1200)),(d=m===r&&p===f&&l===y&&_===u&&g===c)||(m=r,p=f,y=l,
g=c),e.Ru.actions=u?u.split(" "):[],n.actions=u,n.maxMatches=r,n.queryInterval=f,n.sizes=l,n.styles=c),
e.z.vomnibarOptions=d?s:n,v.n=m,v.i=p,v.s=y,v.t=g,t.tl.Ut(0,1),t.tl.Ut(1,1),a.ka({N:47,d:{n:m,i:p,s:y,t:v.t}})}});