"use strict"
;__filename="background/open_urls.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./exclusions","./i18n","./key_mappings","./run_commands","./tools","./clipboard","./filter_tabs"],function(n,u,r,e,i,l,t,o,f,a,c,d,s,v,p){
var m,w,g,y,b,h,_,k,I,$,T,P,x,M,U,j,q,z,A,L;Object.defineProperty(u,"__esModule",{value:true}),
u.vi=u.openUrlReq=u.openUrl=u.goToNextUrl=u.openUrlWithActions=u.openShowPage=u.openJSUrl=u.parseReuse=u.pi=u.parseOpenPageUrlOptions=u.preferLastWnd=u.newTabIndex=void 0,
m={current:0,reuse:1,newwnd:2,frame:3,newbg:-2,lastwndfg:-5,lastwnd:-5,lastwndbg:-6,iflastwnd:-7,reuseincurwnd:-3,
lastwndbgbg:-8,lastwndbginactive:-8},u.newTabIndex=function(n,u,r,e){
return"before"===u||"left"===u||"prev"===u||"previous"===u?n.index:"after"===u||"next"===u||"right"===u?n.index+1:"default"===u?void 0:false!==e&&null!=i.getGroupId(n)?"start"===u||"begin"===u?n.index:"end"===u?void 0:n.index+1:"start"===u||"begin"===u?0:"end"===u?r?3e4:void 0:n.index+1
},u.preferLastWnd=function(n){return n.find(function(n){return n.id===r.yu})||n[n.length-1]},
u.parseOpenPageUrlOptions=function(n,u){return{d:(u=n.decoded,null!=u?u:n.decode),g:n.group,i:n.incognito,k:n.keyword,
m:n.replace,o:n.opener,p:n.position,r:n.reuse,s:v.P(n),t:n.testUrl,w:n.window}},w=function(n){
return"boolean"==typeof n?n:n?"force"===n||("reverse"===n?2!==r.cn:"same"===n||"keep"===n?2===r.cn:null):null},
g=function(n){return"popup"===n||"normal"===n?n:void 0},u.pi=function(n,u){
n=n.slice(0,128).split("?")[0].replace(/\\/g,"/")
;var e=r.G>1&&/\/globalroot\/device\/condrv|\bdevice\/condrv\/kernelconnect/.test(n);return e&&(r.O=u||r.O,
o.showHUD(a.A("harmfulURL"))),e},y=function(n,t,f,a){var s,v,p,m,w;switch(e._r(),s=function(n){d.replaceCmdOptions(t),
d.overrideCmdOptions({urls:n,url:null,url_f:null,copied:null,keyword:null},true)},a[1]){case 1:o.showHUD(a[0],15),
d.runNextCmdBy(1,t);break;case 5:case 7:s(null),7===a[1]||t.$p?n=0:d.overrideOption("$p",1),
u.openUrlWithActions(l.Ir(a[0]),n,false,f);break;case 4:n>=3&&a[0]&&d.runNextCmdBy(1,t);break;case 6:if(p=r.hn,
"openUrls"===(v=a[0])[0]){for(w of(m=[],v.slice(1)))"string"==typeof w||5!==w[1]&&7!==w[1]||(w=l.Ir(a[0],null,n)),
"string"!=typeof w?Promise.resolve(w).then(function(u){6===u[1]&&"openUrls"===u[0][0]||y(n,t,f,u)}):m.push(w)
;if(0===m.length)return;return s(m),void(f&&f.length>0?U(f):i.getCurTab(U))}setTimeout(function(){
var n=r.a.get(p),u=n?n.c:null,i=e.Eu({keys:[v[1]]});r.wi=null,"run1"===v[0]?r.I(v[1],u,{c:t.$f,r:t.$retry,u:0,w:0
}):d.executeCommand(c.na("runKey",i),1,0,u,0,null)},0)}},b=function(n,u,r){
n?d.runNextOnTabLoaded(u,r):d.runNextCmdBy(0,u)},h=function(n,u,e,l,t){var o,f=function(u){return b(u,n,u),i.m()};if(t){
if(t.length>0&&t[0].incognito&&i.Pn(e))return void i.tabsCreate({url:e},f)
}else if(i.Pn(e)&&true!==l)return void i.getCurTab(h.bind(null,n,u,e,true));if(3===u&&r.O&&r.O.s.J)return o={id:r.O.s.b
},d.sendFgCmd(18,false,{r:1,u:e}),void setTimeout(function(){return b(true,n,o)},100);t?i.tabsUpdate(t[0].id,{url:e
},f):i.tabsUpdate({url:e},f)},_=function(n,u,r,e,l,t){i.makeWindow({url:n,focused:u,incognito:r,
type:"string"==typeof n||1===n.length?g(e.window):void 0,left:l.left,top:l.top,width:l.width,height:l.height
},null!=l.state?l.state:t&&"minimized"!==t.state?t.state:"",function(n){b(n,e,n&&n.tabs[0])})},k=function(n,e,l,t,o){
var f,a,c=-2!==e,d=t?t.windowId:r._n,s=o.find(function(n){return n.id===d}),v=null!=s&&s.incognito
;!l.window&&2!==e&&(v||(o=o.filter(function(n){return n.incognito&&"normal"===n.type})).length>0)?(f={url:n[0],active:c,
windowId:v?d:u.preferLastWnd(o).id},v&&(f.index=u.newTabIndex(t,l.position,a=true===l.opener,l.group),
a&&(f.openerTabId=t.id)),i.openMultiTabs(f,r.x,true,n,v&&l.group,t,function(n){!v&&c&&i.selectWnd(n),b(n,l,n)
})):_(n,true,true,l,l,s)},u.parseReuse=function(n){
return null==n?-1:"string"!=typeof n?"boolean"==typeof n?n?1:-1:isNaN(n=+n&&0|n)||n>3||n<-8?-1:n:(n=n.toLowerCase().replace("window","wnd").replace(/-/g,""))in m?m[n]:-1
},I=function(n,u,l){
var t,o,f,a,c,d,s,v,p=u&&u.length>0?i.getTabUrl(u[0]):"",m=[true!==l?false===l?"":l:(/[%$]s/i.exec(n)||["${url_mask}"])[0],r.g.host_mask||r.g.host_mark,r.g.tabid_mask||r.g.tabId_mask||r.g.tabid_mark||r.g.tabId_mark,r.g.title_mask||r.g.title_mark,r.g.id_mask||r.g.id_mark||r.g.id_marker],w=[]
;for(t=0;t<m.length;t++)if((f=(o=null!=m[t]?m[t]+"":"")?n.indexOf(o):-1)>=0){for(c of(a=f+o.length,w));
w.push([f,a,0===t?/^[%$]S|^\$\{S:/.test(o)?p:e.gr(p):1===t?e.gr(new URL(p).host):2===t?p&&""+u[0].id:3===t?p&&""+e.gr(u[0].title):i.t.runtime.id])
}if(w.length){for(v of(d="",s=0,w.sort(function(n,u){return n[0]-u[0]}),w))d=d+n.slice(s,v[0])+v[2],s=v[1]
;n=d+n.slice(s)}return n},$=function(n,e,l,t){var o=w(t.incognito);(e>-4?new Promise(function(n){
i.getCurWnd(false,function(u){return n(u||null),i.m()})}):p.hu(g(t.window),true,o,r._n)).then(function(n){
return n&&new Promise(function(u){i.gn.query({active:true,windowId:n.id},function(r){return n.tabs=r,u(n),i.m()})})
}).then(function(f){var a,c=!!f&&!f.focused&&f.id!==r._n,s=-7===e&&!c
;if(f&&(c||-7===e&&(null==o||f.incognito===!!o)))a=f.tabs&&f.tabs.length>0?i.selectFrom(f.tabs):null,i.openMultiTabs({
url:n[0],active:e>-6||s,windowId:f.id,pinned:!!t.pinned,index:a?u.newTabIndex(a,t.position,false,t.group):void 0
},r.x,!!t.incognito&&"string"==typeof t.incognito,n,t.group,a,function(n){
e>-6?c&&i.selectWnd(n):n&&e>-8&&!s&&i.selectTab(n.id),b(n,t,e>-6&&-2!==e&&n)});else{
if(-7===e&&d.runNextCmdBy(0,t))return;_(n,e>-8,null!=o?!!o:l,t,t,f)}})},T=function(n,e,l,t){
var o,f,a=t&&t[0],c=!!a&&a.incognito||2===r.cn,d=-2!==e&&-8!==e,s=2===e||e<-3||!!l.window,v=w(l.incognito),p=null!=v&&"string"==typeof l.incognito
;if(!p&&n.some(i.Pn))s=c||s;else if(c)s=false===v||s;else if(v&&e>-4)return void i.Nn.getAll(k.bind(null,n,e,l,a))
;s?$(n,e,c,l):(f={url:n[0],active:d,windowId:a?a.windowId:void 0,openerTabId:o=l.opener&&a?a.id:void 0,
pinned:!!l.pinned,index:a?u.newTabIndex(a,l.position,null!=o,l.group):void 0
},i.openMultiTabs(f,r.x,p,n,l.group,a,function(n){d&&n&&i.selectWndIfNeed(n),b(n,l,d&&n)}))},P=function(n,e,l,t,o,a){
var c,s=l?"string"==typeof l?f.cr(l):"object"==typeof l&&l.t&&l.v?l:null:null,v=2===e||1===e,m=1===e||-3===e,y=m&&o.q||{},h=g(m?y.w:t.window),_=w(m?y.i:t.incognito),k=true===(m?y.g:t.group)
;r.x=1,m?(y.m=null,y.g=k):(d.overrideOption("group",k,t),null!=t.replace&&d.overrideOption("replace",s,t)),
c=e<-3&&s?p.hu(h,-7===e,_,r._n).then(function(n){return!n||n instanceof Array?null:n}):Promise.resolve(!v&&r._n>=0?{
id:r._n}:null),Promise.all([c,!k||a?null:new Promise(function(n){i.getCurTab(function(u){a=u||[],n()})
})]).then(function(n){var u=n[0];return s&&(u||v)?new Promise(function(n){i.gn.query(u?{windowId:u.id}:{
windowType:h||void 0},function(u){var l,t,o=null!=_?!_:e>-4?2!==r.cn:-2,c=(u||[]).filter(function(n){
return f.sr(s,n.url)&&n.incognito!==o});return k&&c.length>0&&a.length>0&&(l=i.getGroupId(a[0]),
u&&(c=c.filter(function(n){return i.getGroupId(n)===l}))),c.sort(function(n,u){var e=r.Hn.get(u.id),i=r.Hn.get(n.id)
;return i?e?e-i:1:e?-1:u.id-n.id}),1===e&&(t=c.filter(function(n){return n.windowId===r._n}),c=t.length>0?t:c),
n(c.length?c[0]:null),i.m()})}):null}).then(function(l){var f,c
;null==l||l.id===r.hn&&!m?m?u.vi(o):d.runNextCmdBy(0,t)||(a?T([n],e,t,a):i.getCurTab(T.bind(null,[n],e,t))):r.gi&&l.url.startsWith(r.Q.Du)?M(m?o.f||{}:t,l):(f=-2!==e&&-8!==e,
c=l.windowId!==r._n&&e>-6,i.tabsUpdate(l.id,{url:n},function(n){return n&&(f&&(i.selectTab(n.id),n.active=true),
c&&i.selectWnd(n)),b(n,m?o.f||{}:t,-2!==e&&e>-6&&n),i.m()}))})},u.openJSUrl=function(n,u,l,t){var f,a
;if(/^(void|\(void\))? ?(0|\(0\))?;?$/.test(n.slice(11).trim()))d.runNextCmdBy(1,u);else{if(!l&&r.O){
if(0===t&&(r.O=(null===(f=o.C())||void 0===f?void 0:f.j)||r.O),o.safePost(r.O,{N:5,u:n,f:d.parseFallbackOptions(u)
}))return;if(-1!==t)return void d.runNextCmdBy(0,u);r.O=null}a=function(r){if(-1===r||i.m()){var t=e.Zn(n.slice(11))
;return i.yn(i.gn.executeScript,{code:t}).then(function(n){void 0===n&&l&&l(),b(!!n,u,null)}),i.m()}
d.runNextOnTabLoaded(u,null)},r.kn<71?i.tabsUpdate({url:n},a):a(-1)}},x=function(n,e,l,t){var o,f,a=r.Q.Du
;return!(n.length<a.length+3||!n.startsWith(a))&&(void 0===t?(i.getCurTab(function(r){
return u.openShowPage(n,r&&r.length>0||-2===e?e:-1,l,r&&r[0]||null),i.m()}),true):(n=n.slice(a.length),
o=t?t.incognito:2===r.cn,n.startsWith("#!image ")&&o&&(n="#!image incognito=1&"+n.slice(8).trim()),
r.gi=(f=[n,null,0])[1]=function(){return clearTimeout(f[2]),r.gi=null,f[0]},f[2]=setTimeout(function(){
f[0]="#!url vimium://error (vimium://show: sorry, the info has expired.)",f[2]=setTimeout(function(){
r.gi===f[1]&&(r.gi=null),f[0]="",f[1]=null},2e3)},1200),r.x=1,0===e||3===e||o&&(-2===e||-1===e)?o?i.tabsCreate({url:a,
active:-2!==e},function(n){b(n,l,n)}):M(l,t):(l.incognito=false,1===e||-3===e?P(n,e,l.replace,null,{u:a,a:l.parent,
p:l.prefix,q:u.parseOpenPageUrlOptions(l),f:d.parseFallbackOptions(l)},t?[t]:void 0):T([a],e,l,t?[t]:void 0)),true))},
u.openShowPage=x,M=function(n,u){var l=r.Q.Du,t=r.kn>=54&&!u.url.split("#",2)[1]?i.t.extension.getViews({tabId:u.id}):[]
;t.length>0&&t[0].location.href.startsWith(l)&&t[0].onhashchange?(t[0].onhashchange(),
i.selectTab(u.id)):i.tabsUpdate(u.id,{url:l,active:true}),e.uo(function(){d.runNextOnTabLoaded(n,null)})},U=function(n){
var e,t,o,f,a=r.g,c=a.urls;if(2!==a.$fmt){if(1!==a.$fmt)for(e=0;e<c.length;e++)c[e]=l.Ir(c[e]+"")
;d.overrideCmdOptions({},true),d.overrideOption("urls",c),d.overrideOption("$fmt",2)}for(t of c)if(u.pi(t))return i.m()
;f=1===(o=u.parseReuse(a.reuse))||0===o||3===o||-3===o?-1:o,r.g=null,T(c,f,a,n)},j=function(n,t,o,f){
var a,c,s,p,m,w,g,b,_,k,$,x,M
;"string"!=typeof n||(n||9!==t?(p={},(s=d.fillOptionWithMask(n,r.g.mask,"value",["url","url_mask","url_mark","value"],r.x)).ok&&(n=s.result,
s.useCount&&(r.x=1)),w=r.g.url_mark,null==(m=r.g.url_mask)&&null==w||(n=I(n,f,null!=m?m:w)),o&&(g=v.P(r.g),
n=r.R(n,0,g,p)),9!==t&&(b=null!==(a=p.S)&&void 0!==a?a:(r.g.keyword||"")+"",_=null!==(c=r.g.testUrl)&&void 0!==c?c:!b,
k=!!p.S||!!p.xr||!!b&&"~"!==b,n=_?l.Ir(n,b,t):l.D(n.trim().split(e.F),b,k?-2:t),
n=_||!k?n:l.Ir(n,null,l.ui&&n.startsWith("vimium:")?3:t)),($=r.g.goNext)&&n&&"string"==typeof n&&(n=r.R(n,8192,null,{}),
n=u.goToNextUrl(n,r.x,"absolute"===$)[1],p.S&&(n=l.D(n.trim().split(e.F),p.S,3))),
n="string"==typeof n?l.ei(n):n):n=r.newTabUrl_f),M=u.parseReuse((x=r.g).reuse),r.g=null,e._r(),
"string"!=typeof n?Promise.resolve(n).then(y.bind(0,t,x,f)):u.openShowPage(n,M,x)||(e.jr(n)?u.openJSUrl(n,x,null,M):u.pi(n)?d.runNextCmdBy(0,x):1===M||-3===M?P(n,M,x.replace,null,{
u:n,a:x.parent,p:x.prefix,q:u.parseOpenPageUrlOptions(x),f:d.parseFallbackOptions(x)
},f):0===M||3===M?h(x,M,n):x.replace?P(n,M,x.replace,x,null,f):f?T([n],M,x,f):i.getCurTab(T.bind(null,[n],M,x)))},
u.openUrlWithActions=j,q=function(n,f,c){var s,v,p,m,w,g,y,b,h,_,k,I,$
;if(null===c)return o.complainLimits(a.A("readClipboard")),void d.runNextCmd(0)
;if(!(c=c.trim()))return o.showHUD(a.A("noCopied")),void d.runNextCmd(0);if(s="string"==typeof n&&n.includes("any"),
("urls"===n||s)&&(v=c.split(/[\r\n]+/g)).length>1){for(y of(p=[],w=(m=s&&r.g.keyword)?m+"":null,g=false,
v))if(y=y.trim()){if(y=l.Ir(y,w,0),!(s||l.Pr<=2)){p.length=0,g=true;break}p.push(y)}
if(p.length>1)return r.g=d.copyCmdOptions(e.i(),r.g),r.g.urls=p,r.g.$fmt=1,void(f&&f.length>0?U(f):i.getCurTab(U))
;if(g)return void(d.runNextCmd(0)||o.showHUD("The copied lines are not URLs"))}
l.es.test(c)?c=c.slice(1,-1):(null!=(b=r.g.testUrl)?b:!r.g.keyword)&&(c=t.yi(c,b)),
(h=c.indexOf("://")+3)>3&&e.eu.test(c)&&(_=void 0,k=(c=/^ttps?:/i.test(c)?"h"+c:c).indexOf("/",h)+1||c.length,
I=c.slice(h,k),
c=($=I.startsWith("0.0.0.0")?7:I.includes(":::")&&(_=/^(\[?::\]?):\d{2,5}$/.exec(I))?_[1].length:0)?c.slice(0,h)+($>6?"127.0.0.1":"[::1]")+c.slice(h+$):c),
u.openUrlWithActions(c,2,false,f)},u.goToNextUrl=function(n,u,r){var e=false
;return n=n.replace(/\$(?:\{([\da-zA-Z_-]+)(?:[,\/#@](\d*)(?::(\d*)(:-?\d*)?)?(?:[,\/#@]([^}]+))?)?\}|\$)/g,function(n,i,l,t,o,f){
var a,c,d,s,v,p,m,w,g,y,b,h;if("$$"===n)return"$";for(v of(e=true,c=10,d=1,s=false,f?f.split("&").map(function(n){
return n.split("=")
}):[]))m=v[1],"min_len"===(p=v[0])||"len"===p?d=+m||1:"radix"===p?c=(c=+m||0)>=2&&c<=36?c:10:"reverse"!==p&&"negative"!==p||(s="1"===m||"true"===m.toLowerCase())
;return w=i&&parseInt(i,c)||1,
g=l&&parseInt(l)||0,y=t&&parseInt(t)||0,(b=o&&parseInt(o.slice(1))||1)<0&&(g=(a=[Math.min(g,y),Math.max(g,y)])[0],
y=a[1]),u*=s?-b:b,w=r?u>0?g+u-1:u<0?y+u:w:w+u,"0".repeat(d-(h=""+Math.max(g||1,Math.min(w,y?y-1:w))).length)+h}),[e,n]},
z=function(n){var e,l,t,o,f;if(r.g.urls)r.g.urls instanceof Array&&(n&&n.length>0?U(n):i.getCurTab(U));else{
if((null!=r.g.url_mask||null!=r.g.url_mark)&&!n)return i.m()||void i.getCurTab(u.openUrl)
;(e=r.g.url)?u.openUrlWithActions(e+"",3,true,n):r.g.copied?(o={},
f=void 0,(t="string"!=typeof(l=r.g.copied)?null:l.includes("<")?l.split("<")[1]:l.includes(">")?l.split(">")[0]:null)?(l=l.includes("<")?l.split("<")[0]:l.split(">")[1],
f=r.ir.get(t)||"",f=r.R(f,32768,v.P(r.g),o)):f=r.hr(v.P(r.g),0,o),null!=o.S&&d.overrideCmdOptions({keyword:o.S}),
f instanceof Promise?f.then(q.bind(null,l,n)):q(l,n,f)):u.openUrlWithActions(r.g.url_f||"",9,false,n)}},u.openUrl=z,
A=function(n,i){var f,a,c,s,v,p,m,g,y,b,h,_,k,I,$,T,P;if(e.Eu(n),c=null!=i&&o.isNotVomnibarPage(i,true),
r.O=c?i:o.findCPort(i)||r.O,
s=n.u||"",v=n.n&&d.parseFallbackOptions(n.n)||{},m=((p=n.o||n.n&&u.parseOpenPageUrlOptions(n.n)||{}).k||"")+"",
g=null!==(f=p.t)&&void 0!==f?f:!m,y=p.s,h=(b=n.m||0)<64?-17&b:b,_=null!=n.f?n.f:45===h||46===h,v.group=!c||p.g,
v.incognito=null!=w(p.i)?p.i:45===h||null,
v.replace=p.m,v.position=p.p,v.reuse=null!=p.r?p.r:b?"window"===n.t?2:(16&b?-2:-1)+("last-window"===n.t?-4:0):n.r,
v.window=p.w,s||!c)":"===s[0]&&!c&&/^:[bhtwWBHdso]\s/.test(s)&&(s=n.u=s.slice(2).trim()),k=s,I={},
$=c?_?1048576:524288:g?16384:0,s=g?t.bi(s,_):s,s=r.R(s,$,y,I),T=void 0,P=null!==(a=I.S)&&void 0!==a?a:m,
_?s=(T=s!==k)?l.Ir(s,null,-1):s:(T=!!g||!c&&!P)?(s=g?t.yi(s,g):s,
s=l.Ir(s,P,c?-1:3)):(s=l.D(s.trim().split(e.F),P,P&&"~"!==P?-1:0),
s=(T=l.ui)?l.Ir(s,null,s.startsWith("vimium:")?3:0):s),
T&&(2!==l.Pr&&1!==l.Pr||null==n.h?3===l.Pr&&s.startsWith("vimium:")&&!k.startsWith("vimium://")&&(s=l.Ir(s,null,l.ui||s.startsWith("vimium://run")?3:0)):s=(n.h?"https":"http")+s.slice("s"===s[4]?5:4)),
v.opener=c?false!==p.o:r.Ru.actions.includes("opener"),v.url_f=s;else{if(!n.c)return r.O=i||o.findCPort(null),
void(d.runNextCmdBy(0,v)||o.showHUD("",14));v.copied=n.c,v.keyword=m,v.testUrl=p.t,v.sed=y}r.x=1,d.replaceCmdOptions(v),
u.openUrl()},u.openUrlReq=A,L=function(n,t){var o,f,a,c=function(e){
var l,c,s,m,y=null!==(l=w(f.i))&&void 0!==l?l:2===r.cn&&null;return e=e||[],null!==y&&(e=e.filter(function(n){
return n.incognito===y})),f.g&&o.length>0&&(c=i.getGroupId(o[0]),e=e.filter(function(n){return i.getGroupId(n)===c})),
e.length>0?(s=e.filter(function(n){return n.windowId===r._n}),void v(s.length>0?s:e)):(m=2===r.cn&&i.Pn(n.u),
n.f&&d.runNextCmdBy(0,n.f)||(o.length<=0||f.w||2===r.cn&&!o[0].incognito||2===a?i.makeWindow({url:n.u,type:g(f.w),
incognito:!m&&2===r.cn},"",function(n){p(n&&n.tabs&&n.tabs.length>0?n.tabs[0]:null)}):m?i.openMultiTabs({url:n.u,
active:true},1,null,[null],f.g,null,p):0===a||3===a?(h({},a,n.u),3===a&&t&&t.s.J?(d.sendFgCmd(18,false,{r:1,u:n.u}),
p(o[0])):i.tabsUpdate(o[0].id,{url:n.u},p)):i.openMultiTabs({url:n.u,index:u.newTabIndex(o[0],f.p,false,true),
openerTabId:f.o&&o[0]?o[0].id:void 0,windowId:o[0].windowId,active:true},1,null,[null],f.g,o[0],p)),i.m())
},v=function(u){var e,l,t,o=n.u,f=!!n.p,a=f?1:n.a?-1:0;a&&u.sort(function(n,u){return(n.url.length-u.url.length)*a}),
e=i.selectFrom(u),
a&&e.url.length>u[0].url.length===f&&(e=u[0]),!o.startsWith(r.Q.Dt)||r.a.get(e.id)||n.s?r.gi&&e.url.startsWith(r.Q.Du)?(M(n.f||{},e),
i.selectWndIfNeed(e)):(l=r.Xn?e.url.replace(/^edge:/,"chrome:"):e.url,t=r.Xn?o.replace(/^edge:/i,"chrome:"):o,
m=f?l.startsWith(t):n.a?t.startsWith(l):t===l,i.tabsUpdate(e.id,{url:m?void 0:o,active:true},p),
i.selectWndIfNeed(e)):(i.tabsCreate({url:o},p),i.gn.remove(e.id))},p=function(u){
if(!u)return n.f&&d.runNextCmdBy(0,n.f),i.m();d.runNextOnTabLoaded(n.f||{},u,n.s&&function(){s.pn.hi(n,u.id,0,m)})
},m=false,y=l.ei(n.u.split("#",1)[0]);u.pi(y,t)||((null==(f=n.q||(n.q={})).g||y.startsWith(r.Q.Dt))&&(f.g=false),
a=null!=f.r?u.parseReuse(f.r):1,f.m?P(n.u,3!==a&&0!==a?a:1,f.m,null,n):i.yn(i.getCurTab).then(function(u){
return __awaiter(void 0,void 0,void 0,function*(){var l,t,d,s,v,p,m,w,b,h;for(b of(o=u,l=[],
t=-3===a&&r._n>=0?r._n:void 0,d=y,s=g(f.w)||"normal",e.eu.test(y)&&(v=y.indexOf("/")+2,p=y.indexOf("/",v+1),
m=y.slice(v,p>0?p:void 0),n.a&&(d=y=(y=y.slice(0,p>0?p+1:void 0)).endsWith("/")?y:y+"/"),
m&&m.includes("@")&&(d=y=y.slice(0,v)+m.split("@")[1]+y.slice(p))),w=!!(n.p||n.a),
!y.startsWith("file:")&&!y.startsWith("ftp")||y.includes(".",y.lastIndexOf("/")+1)||l.push(d+(w?"/*":"/")),
l.push(w?d+"*":d),l))if((h=yield i.yn(i.gn.query,{url:b,windowType:s,windowId:t
}))&&n.a&&(r.Xn&&(y=y.replace(/^chrome:/i,"edge:")),h=h.filter(function(n){return y.startsWith(n.url.split(/[#?]/,1)[0])
})),h&&h.length>0)return c(h);c([])})}))},u.vi=L});