"use strict"
;__filename="background/frame_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./ports","./exclusions","./i18n","./key_mappings","./run_commands","./open_urls","./tools"],function(n,t,e,u,i,o,l,r,f,a,c,s,v){
var d,m,p,g,b,h,y,k,T,_;Object.defineProperty(t,"__esModule",{value:true
}),t.blurInsertOnTabChange=t.xn=t.focusFrame=t.framesGoNext=t.toggleZoom=t.mainFrame=t.framesGoBack=t.openImgReq=t.captureTab=t.handleImageUrl=t.enterVisualMode=t.L=t.vn=t.showVomnibar=t.initHelp=t.performFind=t.parentFrame=t.nextFrame=void 0,
e.Tu=function(n,t,o){var r,f,a,s,v,d=e.a.get(e.hn)||e.O&&l.C(),m=d?d.c:e.O
;return!d||!d.j||m===d.j||512&d.j.s.d||u.eu.test(d.j.s.mr)&&!(512&m.s.d)&&m.s.mr.startsWith((null!==(f=null===(r=u.xu(d.j.s.mr))||void 0===r?void 0:r.origin)&&void 0!==f?f:"")+"/")||(m=d.j),
a=setTimeout(function(){var n=e._u(a,null);n&&n.r&&n.r(false)},4e4),s=u.Gn(),e._u(null,{i:a,t:n,s:t,d:o,r:s.Ln}),
m?c.portSendFgCmd(m,0,1,{u:e.Q.Mu,c:"R TEE UI",a:1===n||5===n||9===n||0?"clipboard-write; clipboard-read":"",t:3e3,
i:!d||m===d.c||512&d.c.s.d?0:d.c.s.J},1):(v=s.Jn,i.getCurWnd(false,function(n){var t=n?n.id:e._n;i.makeWindow({
type:"popup",url:e.Q.Mu,focused:true,incognito:false,left:0,top:0,width:100,height:32},"",function(n){
var u,o=n?null:e._u(null,null);n?(u=n.id,v.then(function(){t!==e._n&&i.Nn.update(t,{focused:true},i.m),
i.Nn.remove(u,i.m)}),v=null):o&&o.i===a&&(clearTimeout(o.i),o.r&&o.r(false))})})),s.Jn},d=function(){
var n,u=e.O,i=-1,o=l.C(),r=o&&o.W;if(r&&r.length>1){
for(i=r.indexOf(u),n=Math.abs(e.x);n>0;n--)(i+=e.x>0?1:-1)===r.length?i=0:i<0&&(i=r.length-1);u=r[i]}
t.focusFrame(u,0===u.s.J,u!==e.O&&o&&u!==o.c?4:3)},t.nextFrame=d,m=function(){
var n=e.O.s,u=n.b>=0&&l.Hu(e.O)?null:"Vimium C can not access frames in current tab";u&&l.showHUD(u),
l.getParentFrame(n.b,n.J,e.x).then(function(n){n?t.focusFrame(n,true,5):t.mainFrame()})},t.parentFrame=m,
t.performFind=function(){
var n=e.O.s,t=e.x<0?-e.x:e.x,u=e.g.index,o=u?"other"===u?t+1:"count"===u?t:u>=0?-1-(0|u):0:0,l=e.g.highlight,r=e.g.extend,f="before"===r||"before"===e.g.direction?-1:1,a=!!o||!e.g.active,s=null
;32&n.d||(n.d|=32,s=i.k(n)),c.sendFgCmd(1,true,c.wrapFallbackOptions({c:o>0?e.x/t:e.x,l:a?1:0,f:s,d:f,
m:"number"==typeof l?l>=1?Math.min(0|l,200):0:l?a?100:20:0,n:!!e.g.normalize,r:true===e.g.returnToViewport,
s:!o&&t<2&&!!e.g.selected,t:r?f>0?2:1:0,p:!!e.g.postOnEsc,e:!!e.g.restart,
q:e.g.query?e.g.query+"":a||e.g.last?v.dn.Vt(n.an,"",o<0?-o:o):""}))},t.initHelp=function(n,t){
return c.initHelpDialog().then(function(u){var i,o,r,f,s,v
;u&&(r=(o=n.w&&(null===(i=l.Hu(t))||void 0===i?void 0:i.j)||t).s.mr.startsWith(e.Q.Dt),f=n.a||{},o.s.d|=262144,e.O=o,
n.f&&(s=e.Nu.get("?"),(v=s&&8===s.ju&&s.Iu?"?":"")||e.Nu.forEach(function(n,t){
8===n.ju&&n.Iu&&(v=v&&v.length<t.length?v:(s=n,t))}),f=v&&a.Pu(s)||f),c.sendFgCmd(17,true,{h:u.Cu(r,f.commandNames),
o:e.Q.Dt,f:n.f,e:!!f.exitOnClick,c:r&&!!a.Gu||e.z.showAdvancedCommands}))})},p=function(n){
var i,o,r,f,a,s,v,d,m,p,g,b,h,y=e.O,k=e.g.url;if(null!=k&&true!==k&&"string"!=typeof k&&(k=null,delete e.g.url),!y){
if(!(y=(null===(i=l.C())||void 0===i?void 0:i.j)||null))return;e.O=y}if(o=null,null!=k&&e.g.urlSedKeys){
if((r="string"==typeof k?k:"string"==typeof e.g.u?e.g.u:l.$())&&r instanceof Promise)return void r.then(function(e){
c.overrideCmdOptions({u:e||""},true),t.showVomnibar(n)});o=e.R(r,0,{r:null,k:e.g.urlSedKeys},f={}),
null!=f.S&&c.overrideCmdOptions({keyword:f.S})}"bookmark"===e.g.mode&&c.overrideOption("mode","bookm"),s=y.s.mr,
v=!(a=e.vomnibarPage_f).startsWith(e.Q.U),d=s.startsWith(e.Q.U),m=n||!a.startsWith(e.Yn)?e.Q.qu:a,
n=n||(v?d||a.startsWith("file:")&&!s.startsWith("file:///")||a.startsWith("http:")&&!/^http:/.test(s)&&!/^http:\/\/localhost[:/]/i.test(a):y.s.an||d&&!a.startsWith(s.slice(0,s.indexOf("/",s.indexOf("://")+3)+1))),
b=e.g.trailing_slash,null==(h=c.copyCmdOptions(u.Eu({v:(p=n||a===m||y.s.b<0)?m:a,i:p?null:m,t:p?0:v?2:1,
s:null!=(g=e.g.trailingSlash)?!!g:null!=b?!!b:null,j:p?"":e.Q.Lu,e:!!e.g.exitOnClick,u:o,url:"string"==typeof k&&o||k,
k:u.Ou(true)}),e.g)).icase&&e.Ru.actions.includes("icase")&&(h.icase=true),c.portSendFgCmd(y,6,true,h,e.x),h.k="omni",
e.g=h},t.showVomnibar=p,t.vn=function(n,t,u){var i=n.s.b,o=i>=0?i:e.hn,r=n.s.J||i<0?e.a.get(o):null
;return r&&(i<0&&(64&n.s.d||n.s.mr.startsWith("about:"))&&(n=r.c),("tab"===t||!t&&!u&&i<0)&&(r.j||i<0)&&(n=r.j||r.c),
64&n.s.d||n.s.mr.startsWith("blob:"))?l.getParentFrame(o,n.s.J,1).then(function(n){return n||r.j||r.c}):n},
t.L=function(){var n=e.g.mode,t=e.x<2||e.x>10?1:e.x,u=n&&"create"===(n+"").toLowerCase()?1:0,i=e.g.key,o={a:u,
n:!e.g.storeCount,s:true!==e.g.swap,t:"",o:e.g};if("string"==typeof i&&1===i.trim().length)return o.a=0,void e.pu[21]({
H:21,c:o,k:e.Dn,n:i.trim(),s:0,u:"",l:!!e.g.local},e.O)
;Promise.resolve(f.A(1===u?"mBeginCreate":"mBeginGoto")).then(function(n){o.t=n,c.portSendFgCmd(e.O,3,true,o,t)})},
t.enterVisualMode=function(){var n,t,o,l,r,f,s,v,d;t=e.g.start,o="string"==typeof(n=e.g.mode)?n.toLowerCase():"",r=null,
f="",s=null,v=null,16&~(l=e.O.s).d&&(f=e.Uu,32&l.d||(l.d|=32,r=i.k(l)),s=a.Bu,v=a.Vu,l.d|=16),delete(d=u.zu({
m:"caret"===o?3:"line"===o?2:1,f:r,g:v,k:s,t:!!e.g.richText,s:null!=t?!!t:null,w:f},e.g)).mode,delete d.start,
delete d.richText,c.sendFgCmd(5,true,d)},b=function(n){try{URL.revokeObjectURL(n)}catch(n){}},
h=function(n,o,r,f,a,c,s,v){var d,m,p,h,y,k,T;if(r)if(m=!(!(1&r)||2===e.cn||e.O&&e.O.s.an||false),!(p=4&r||m)||o){
if(g&&(clearTimeout(g[0]),b(g[1]),g=null),(h=p?URL.createObjectURL(o):"")&&(g=[setTimeout(function(){g&&b(g[1]),g=null
},4&r?3e4:5e3),h],y=f,f=[1,4,9].includes(r)?function(n){y(n),g&&b(h),g&&g[1]===h&&(clearTimeout(g[0]),g=null)}:y),
1&r&&(e.kn<76?Promise.resolve(false):(n||m?Promise.resolve():u.Au(o).then(function(t){n=t})).then(function(){
return e.Tu(9===r?r:1,{u:m?h:n,t:c,b:1},o)})).then(function(t){return __awaiter(void 0,void 0,void 0,function*(){
var e,i,l,r;t?f(!!t):((i=(e=globalThis.document).createElement("img")).alt=a.replace(u.Fu(),""),
i.src=n||(yield u.Au(o)),e.documentElement.appendChild(i),l=e.getSelection(),(r=e.createRange()).selectNode(i),
l.removeAllRanges(),l.addRange(r),e.execCommand("copy"),i.remove(),f(1))})}),2&r)return s(n||h),void(1&r||f(1))
;4&r&&(k=(null===(d=l.C())||void 0===d?void 0:d.j)||e.O,T=u.Gn(),1&r&&true?setTimeout(T.Ln,800):T.Ln(0),
T.Jn.then(function(){return i.downloadFile(h,a,k?k.s.mr:null)}).then(function(n){var t
;n||((t=globalThis.document.createElement("a")).href=h,t.download=a,t.target="_blank",t.click()),4===r&&f(true)}))
}else u.Ju(n,"blob").then(function(e){t.handleImageUrl(n,e,r,f,a,c,s,v)});else f(1)},t.handleImageUrl=h,y=function(n,o){
var r=e.g.show,a=!!e.g.copy,c=e.g.download,s=a?true===c:false!==c,v=!!e.g.richText,d=!e.g.png?Math.min(Math.max(0|e.g.jpeg,0),100):0,m=n&&n[0],p=!!m&&m.url.startsWith(location.protocol),g=m?m.windowId:e._n,b=m?m.title:"Tab"+(m?m.id:e.hn)
;b=(b="title"===e.g.name?b:u.now().replace(/[-: ]/g,function(n){return" "===n?"_":""})+"-"+b).replace(u.Fu(),""),
b+=d>0?".jpg":".png",i.gn.captureVisibleTab(g,d>0?{format:"jpeg",quality:d}:{format:"png"},function(n){var u
;if(!n)return e.O&&l.showHUD("Can not capture "+(p?"injected extensions":"this tab")),o(0),i.m();u=function(n){
e.pu[26]({t:"pixel=1&",u:n,f:b,a:false,m:37,o:{r:e.g.reuse,m:e.g.replace,p:e.g.position,w:e.g.window}},e.O)},
t.handleImageUrl(n,null,(r?2:0)|(s?4:0)|(a?1:0),a?function(n){
l.showHUD(f.A(n?"imgCopied":"failCopyingImg",[1===n?"HTML":d?"JPEG":"PNG"])),o(n)
}:o,b,((v||"")+"").includes("name")?b:"",u)})},t.captureTab=y,t.openImgReq=function(n,t){var i,r,a,v,d,m,p,g,b,h,y=n.u
;if(/^<svg[\s>]/i.test(y)){if(!(y=o.Su(y)))return e.O=t,void l.showHUD(f.A("invalidImg"));n.f=n.f||"SVG Image"}
if(!u.xu(y))return e.O=t,void l.showHUD(f.A("invalidImg"));a=e.Q.Du+"#!image ",n.f&&(a+="download="+u.gr(n.f)+"&"),
false!==n.a&&(a+="auto=once&"),n.t&&(a+=n.t),d={},m=(v=n.o||u.i()).s?e.R(y,32768,v.s,d):y,
p=null!==(i=d.S)&&void 0!==i?i:v.k,g=null!==(r=v.t)&&void 0!==r?r:!p,b=m!==y,y=m,c.replaceCmdOptions({opener:true,
reuse:null!=v.r?v.r:16&n.m?-2:-1,replace:v.m,position:v.p,window:v.w
}),e.x=1,h=p||b?g?o.Ir(y,p,2):o.D(y.trim().split(u.F),p,2):y,t&&l.safePost(t,{N:11,H:l.ensureInnerCSS(e.O.s),k:1,t:" ",
d:1e-4}),s.openUrlWithActions("string"!=typeof h||!g||h.startsWith(location.protocol)&&!h.startsWith(e.Yn)?h:a+h,9)},
k=function(n,u,o){var r,a,v,d,m,p,g,b,h,y=!!i.gn.goBack
;if(!y&&(o?i.getTabUrl(o):(u.s.J?l.Hu(u).j:u).s.mr).startsWith(e.Q.U)&&true)return e.O=u,l.showHUD(f.A("noTabHistory")),
void c.runNextCmd(0);if(r=c.hasFallbackOptions(n.o)?(c.replaceCmdOptions(n.o),c.getRunNextCmdBy(0)):i.m,a=function(n,t){
i.p(n.id,0,null,function(n){history.go(n)},[t])},v=o?o.id:u.s.b,d=n.s,m=s.parseReuse(n.o.reuse||0))p=n.o.position,
i.gn.duplicate(v,function(e){var u,o,l;if(!e)return r()
;-2===m&&i.selectTab(v),y?((u=c.parseFallbackOptions(n.o)||{}).reuse=0,t.framesGoBack({s:d,o:u},null,e)):a(e,d),
o=e.index--,null!=(l="end"===p?-1:s.newTabIndex(e,p,false,true))&&l!==o&&i.gn.move(e.id,{index:3e4===l?-1:l},i.m)
});else if(g=d>0?i.gn.goForward:i.gn.goBack,y||g)for(b=0,h=d>0?d:-d;b<h;b++)g(v,b?i.m:r);else a(o,d)},t.framesGoBack=k,
T=function(){var n=l.C(),u=n&&n.j
;!u||u===n.c&&e.g.$else&&"string"==typeof e.g.$else?c.runNextCmd(0):t.focusFrame(u,true,u===n.c?3:5)},t.mainFrame=T,
t.toggleZoom=function(n){i.yn(i.gn.getZoom).then(function(t){var u,o,l,r,f,a,c,s,v,d,m;if(t){if(u=e.x<-4?-e.x:e.x,
(e.g.in||e.g.out)&&(u=0,
e.x=e.g.in?e.x:-e.x),l=e.g.level,r=Math,e.g.reset)o=1;else if(null!=l&&!isNaN(+l)||u>4)f=r.max(.1,r.min(0|e.g.min||.25,.9)),
a=r.max(1.1,r.min(0|e.g.min||5,100)),o=null==l||isNaN(+l)?u>1e3?1:u/(u>49?100:10):1+l*e.x,o=r.max(f,r.min(o,a));else{
for(c=0,
s=9,v=[.25,1/3,.5,2/3,.75,.8,.9,1,1.1,1.25,1.5,1.75,2,2.5,3,4,5],d=0,m=0;d<v.length&&(m=Math.abs(v[d]-t))<s;d++)c=d,s=m
;o=v[c+e.x<0?0:r.min(c+e.x,v.length-1)]}Math.abs(o-t)>.005?i.gn.setZoom(o,i.Tn(n)):n(0)}else n(0)})},
t.framesGoNext=function(n,t){var u,i,o,l,r=e.g.patterns,f=false
;if(r&&r instanceof Array||(r=(r=r&&"string"==typeof r?r:(f=true,n?e.z.nextPatterns:e.z.previousPatterns)).split(",")),
f||!e.g.$fmt){for(i of(u=[],r))if((i=i&&(i+"").trim())&&u.push(".#[:".includes(i[0])?i:i.toLowerCase()),
200===u.length)break;r=u,f||(c.overrideOption("patterns",r),c.overrideOption("$fmt",1))}o=r.map(function(n){
return Math.max(n.length+12,4*n.length)}),l=Math.max.apply(Math,o),c.sendFgCmd(10,true,c.wrapFallbackOptions({
r:e.g.noRel?"":t,n:n,match:e.g.match,clickable:e.g.clickable,clickableOnHost:e.g.clickableOnHost,exclude:e.g.exclude,
excludeOnHost:e.g.excludeOnHost,evenIf:e.g.evenIf,scroll:e.g.scroll,p:r,l:o,m:l>0&&l<99?l:32,v:false!==e.g.view,
a:!!e.g.avoidClick}))},t.focusFrame=function(n,t,u,i){n.postMessage({N:7,H:t?l.ensureInnerCSS(n.s):null,m:u,k:e.Dn,c:0,
f:!i&&e.g&&c.parseFallbackOptions(e.g)||{}})},t.xn=function(){var n
;return null!==(n=e.g.blur)&&void 0!==n?n:e.g.grabFocus},_=function(n){var o,f,a,s=c.parseFallbackOptions(e.g)
;if(s&&s.$then?s.$else=s.$then:s=null,"string"==typeof(o=t.xn())&&(f=r.cr(o)||false,
c.overrideOption(o===e.g.blur?"blur":"grabFocus",f),o=f),a=n?e.a.get(n.id):null,
i.m()||!a||o&&true!==o&&!r.sr(o,a.c.s.J?a.c.s.mr:n.url))return s&&c.runNextCmdBy(1,s),i.m();setTimeout(function(){
l.Ku(e.a.get(e.hn),true).then(function(){var n,t=e.a.get(e.hn);!t||512&t.d?s&&c.runNextCmdBy(1,s):(n=u.Eu({esc:true}),
s&&c.copyCmdOptions(n,u.Eu(s)),c.portSendFgCmd(t.c,16,false,n,-1))})},17)},t.blurInsertOnTabChange=_});