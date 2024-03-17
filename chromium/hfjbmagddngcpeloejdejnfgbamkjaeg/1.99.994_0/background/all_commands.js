"use strict"
;__filename="background/all_commands.js",define(["require","exports","./utils","./store","./browser","./normalize_urls","./parse_urls","./settings","./ports","./ui_css","./i18n","./key_mappings","./run_commands","./run_keys","./clipboard","./open_urls","./frame_commands","./filter_tabs","./tab_commands","./tools"],function(n,e,t,o,r,u,i,l,f,a,c,s,d,v,m,p,b,h,y,k){
Object.defineProperty(e,"__esModule",{value:true
}),o.y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,2,0,1,0,0,0,0,2,0,1,0,2,2,0,0,1,0,0,1,0,0,1,0,2,1,1,0,0,0,0,0,0],
o.M=[function(){var n,e=o.g.for||o.g.wait,t=o.g.isError?0:1
;"ready"!==e?((e=e?Math.abs("count"===e||"number"===e?o.x:0|e):d.hasFallbackOptions(o.g)?Math.abs(o.x):0)&&(e=Math.max(34,e),
(n=null!=(n=o.g.block)?!!n:e>17&&e<=1e3)&&o.O&&o.O.postMessage({N:14,t:e+50
})),d.runNextCmdBy(o.x>0?t:1-t,o.g,e)):d.runNextOnTabLoaded({},null,function(){d.runNextCmdBy(t,o.g,1)})},function(){
var n,e,t,r,u=(o.g.$then||"")+"",i=(o.g.$else||"")+"",l=o.x
;u||i?(e=(n=o.g.question||o.g.ask||o.g.text||o.g.value)?null:[u,i].map(function(n){
return n.split("#",1)[0].split("+").slice(-1)[0]}),t=Math.abs(0|(o.g.minRepeat||0)),r=[o.g.$f,o.g.$retry],
(Math.abs(l)<t?Promise.resolve():d.T([e?e[0]===e[1]?u:e[0].replace(/^([$%][a-zA-Z]\+?)+(?=\S)/,""):[n+""]],l)).then(function(n){
(n?i:u)&&setTimeout(function(){o.x=l,o.I(n?i:u,o.O,{c:r[0],r:r[1],u:0,w:0},n?1:l)},0)
})):f.showHUD('"confirm" requires "$then" or "$else"')},function(){
var n=o.g.rel,e=!!o.g.absolute,r=n?(n+"").toLowerCase():"next",i=null!=o.g.isNext?!!o.g.isNext:!r.includes("prev")&&!r.includes("before"),l=m.P(o.g)
;m.doesNeedToSed(8192,l)||e?Promise.resolve(f.$(o.O&&f.C().j)).then(function(n){
var f,a=i?o.x:-o.x,c={},s=n&&o.R(n,8192,l),v=s?p.goToNextUrl(s,a,e):[false,n],m=v[1]
;v[0]&&m?(f=c.S?u.D(m.trim().split(t.F),c.S,3):m,o.x=a,null==o.g.reuse&&d.overrideOption("reuse",0),
d.overrideCmdOptions({url_f:f,goNext:false}),p.openUrl()):e?d.runNextCmd(0):b.framesGoNext(i,r)}):b.framesGoNext(i,r)
},function(){var n,e,t,r=o.g.key,u=r&&"string"==typeof r?s.q(r).trim():""
;u=u.length>1||1===u.length&&!/[0-9a-z]/i.test(u)&&u===u.toUpperCase()&&u===u.toLowerCase()?u:"",
t=null!==(e=null!==(n=o.g.hideHUD)&&void 0!==n?n:o.g.hideHud)&&void 0!==e?e:!u&&o.z.hideHud,
Promise.resolve(c.A("globalInsertMode",[u&&": "+(1===u.length?'" '.concat(u,' "'):"<".concat(u,">"))])).then(function(n){
d.sendFgCmd(7,!t,Object.assign({h:t?null:n,k:u||null,i:!!o.g.insert,p:!!o.g.passExitKey,r:+!!o.g.reset,
bubbles:!!o.g.bubbles,u:!!o.g.unhover},d.parseFallbackOptions(o.g)||{})),t&&"force"!==t&&"always"!==t&&f.showHUD(n,1)})
},b.nextFrame,b.parentFrame,b.performFind,function(n){
var e=(o.g.key||"")+"",t="darkMode"===e?"d":"reduceMotion"===e?"m":l.K[e],r=t?o.B[t]:0,u=c.A("quoteA",[e]),i=o.g.value,a="boolean"==typeof i,s=null,v=""
;t?"boolean"==typeof r?a||(i=null):a||void 0===i?s=a?"notBool":"needVal":typeof i!=typeof r&&(v=JSON.stringify(r),
s="unlikeVal",v=v.length>10?v.slice(0,9)+"\u2026":v):s=e in l.V?"notFgOpt":"unknownA",
Promise.resolve(u).then(function(e){var o,r,u,a,m,p;if(s)f.showHUD(c.A(s,[e,v]));else{if(i=l.E(t,i),"c"===t||"n"===t){
for(r of(o="",i.replace(/\s/g,"")))o.includes(r)||(o+=r);i=o}for(m of(a=(u=f.C()).c,u.W))d.portSendFgCmd(m,8,p=m===a,{
k:t,n:p?e:"",v:i},1);n(1)}})},function(){0!==o.O.s.J||262144&o.O.s.d?(new Promise(function(e,t){
n([o.Q.HelpDialogJS],e,t)}).then(function(n){return n}),d.sendFgCmd(17,true,o.g)):b.initHelp({a:o.g},o.O)},function(){
var n,e,r,u,i,l,a,c,s,v,m,p,b,h,y,k,M,g,w,x,_,O,T,I,P,$=d.copyCmdOptions(t.i(),o.g);if(!$.esc){if(n=$.key,
e=($.type||(n?"keydown":""))+"",
u=$.delay,i=$.xy,l=$.direct,a=$.directOptions,r=(r=$.class)&&"$"===r[0]?r.slice(1):(r&&r[0].toUpperCase()+r.slice(1).replace(/event$/i,"")||(e.startsWith("mouse")||e.includes("click")?"Mouse":"Keyboard"))+"Event",
i=/^(Mouse|Pointer|Wheel)/.test(r)&&null==i?[.5,.5]:i,(i=$.xy=t.Z(i))&&!i.n&&(i.n=o.x,o.x=1),$.click)e="click",
$.c=1;else if(o.x<0)for(c of"down up;enter leave;start end;over out".split(";"))s=c.split(" "),e=e.replace(s[0],s[1])
;if(!e)return f.showHUD('Require a "type" parameter'),void d.runNextCmd(0)
;for(b of(m=(v=$.init)&&"object"==typeof v?v:$,p={},u=u&&+u>=0?Math.max(0|+u,1):null,
["bubbles","cancelable","composed"]))p[b]=false!==(h=m!==$&&b in m?m[b]:$[b])&&(null!=h||"mouseenter"!==e&&"mouseleave"!==e)
;for(k of(y={e:1,c:1,t:1,class:1,type:1,key:1,return:1,delay:1,esc:1,click:1,init:1,xy:1,match:1,direct:1,
directOptions:1,clickable:1,exclude:1,evenIf:1,scroll:1,typeFilter:1,textFilter:1,clickableOnHost:1,excludeOnHost:1,
closedShadow:1,trust:1,trusted:1,isTrusted:1,superKey:1,target:1,targetOptions:1},Object.entries(m)))g=k[1],
(M=k[0])&&"$"!==M[0]&&!y.hasOwnProperty(M)&&(p[m===$&&M.startsWith("o.")?M.slice(2):M]=g,m===$&&delete $[M])
;$.superKey&&(o.G?p.ctrlKey=true:p.metaKey=true,
delete $.superKey),w=null,!n||"object"!=typeof n&&"string"!=typeof n||("string"==typeof n&&(w=/[^\w]/.exec(n.slice(1))),
(x="object"==typeof n?n:w?n.split(w[0]):[n])[0]&&(1==x.length||!x[1]||+x[1]>=0)&&(w&&!x[0]&&(x[0]=n[0],
x[1]||x.splice(1,1)),T=!(O=/^[a-z]$/i.test(_=x[0]))&&_>="0"&&_<="9"&&1===_.length,I=_.toLowerCase(),
P=x[1]&&0|+x[1]?0|+x[1]:O?I.charCodeAt(0)-("keypress"!==e||_!==I?32:0):T?_.charCodeAt(0)-0:"Space"===_?32:0,
p.key="Space"===_?" ":"Comma"===_?",":"Slash"===_?"/":"Minus"===_?"-":"$"===_[0]&&_.length>1?_.slice(1):_,
P&&null==m.keyCode&&(p.keyCode=P),
P&&null==m.which&&(p.which=P),(x.length>=3&&x[2]||null==m.code)&&(p.code=x[2]||(O?"Key"+_.toUpperCase():T?"Digit"+_:_)))),
$.type=e,$.class=r,$.init=p,$.delay=u,$.direct=l&&"string"==typeof l?l:"element,hover,scroll,focus",
a&&!a.search&&(a.search="doc"),$.directOptions=a||{search:"doc"},$.e="Can't create \"".concat(r,"#").concat(e,'"'),
$.t=e.startsWith("key")&&!!($.trust||$.trusted||"force"===($.isTrusted||m.isTrusted))}
d.portSendFgCmd(o.O,16,false,$,o.x)},function(){b.showVomnibar()},b.L,b.enterVisualMode,function(n){
var e=o.g.id,t=null!=e&&e+""||o.g.folder||o.g.path,u=((o.g.position||"")+"").toLowerCase(),i=!!o.g.all
;if(!t||"string"!=typeof t)return f.showHUD('Need "folder" to refer a bookmark folder.'),void n(0)
;o.X(t,null!=e&&!!(e+"")).then(function(e){var t,l,a
;if(!e)return n(0),void f.showHUD(false===e?'Need valid "folder".':"The bookmark folder is not found.")
;l=(t=null!=e.u)?e.Y:e.nn,a="begin"===u?0:"end"===u?-1:"before"===u?t?e.en:0:t&&"after"===u?e.en+1:-1,
(!i&&o.x*o.x<2?r.getCurTab:r.tn)(function e(t){var u,c,s,v,m,p,b;if(!t||!t.length)return n(0),r.m()
;if(c=t[u=r.selectIndexFrom(t)],s=i?[0,t.length]:h.getTabRange(u,t.length),v=o.g.filter,m=t,t=t.slice(s[0],s[1]),
!v||(t=h.on(c,t,v)).length)if((p=t.length)>20&&d.rn())d.T("addBookmark",p).then(e.bind(0,m));else{
for(b of(a=a>=0?a:o.in.un.length,t))r.t.bookmarks.create({parentId:l,title:b.title,url:r.getTabUrl(b),index:a++},r.m)
;f.showHUD("Added ".concat(p," bookmark").concat(p>1?"s":"",".")),n(1)}else n(0)})})},function(n){
false!==o.g.copied?(d.overrideCmdOptions({copied:o.g.copied||true}),p.openUrl()):n(0)},b.captureTab,function(n){
n(k.fn.ln(o.g,o.O))},function(n){var e=o.O?o.O.s.an:2===o.cn;k.dn.sn(e),f.showHUDEx(o.O,"fhCleared",0,[e?["incog"]:""]),
n(1)},function(n){var e=o.O&&b.vn(o.O,o.g.type,!!o.g.local);Promise.resolve(e).then(function(e){
var t=o.g.local?o.g.all?k.pn.mn("#"):void f.bn({H:21,U:0,c:2,f:d.parseFallbackOptions(o.g)},true,1,e):k.pn.mn()
;"number"==typeof t&&n(t>0?1:0)})},y.copyWindowInfo,function n(e,t,u){var i,l,f=o.g.$pure
;null==f&&d.overrideOption("$pure",f=!Object.keys(o.g).some(function(n){
return"opener"!==n&&"position"!==n&&"evenIncognito"!==n&&"$"!==n[0]
})),f?!(i=e&&e.length>0?e[0]:null)&&o.hn>=0&&!r.m()&&"dedup"!==u?r.yn(r.tabsGet,o.hn).then(function(e){
n(e&&[e],0,"dedup")}):(l=true===o.g.opener,r.openMultiTabs(i?{active:true,windowId:i.windowId,openerTabId:l?i.id:void 0,
index:p.newTabIndex(i,o.g.position,l,true)}:{active:true},o.x,o.g.evenIncognito,[null],true,i,function(n){
n&&r.selectWndIfNeed(n),d.getRunNextCmdBy(3)(n)})):p.openUrl(e)},function(n,e){
if(o.kn<54)return f.showHUD(c.A("noDiscardIfOld",[54])),void e(0);h.Mn(true,1,function n(e,t,u,i){
var l,a,s,v,m,p,b,y,k,M=t[0],g=t[1],w=t[2];if(i&&(M=(l=h.getTabRange(g,e.length,0,1))[0],w=l[1]),a=o.g.filter,s=e,
e=e.slice(M,w),
v=r.selectFrom(e),m=(e=a?h.on(v,e,a):e).includes(v)?e.length-1:e.length)if(m>20&&d.rn())d.T("discardTab",m).then(n.bind(null,s,[M,g,w],u));else{
for(k of(b=[],
(y=!(p=e[h.getNearArrIndex(e,v.index+(o.x>0?1:-1),o.x>0)]).discarded)&&(m<2||false!==p.autoDiscardable)&&b.push(r.yn(r.gn.discard,p.id)),
e))k===v||k===p||k.discarded||(y=true,false!==k.autoDiscardable&&b.push(r.yn(r.gn.discard,k.id)))
;b.length?Promise.all(b).then(function(n){var e=n.filter(function(n){return void 0!==n}),t=e.length>0
;f.showHUD(t?"Discarded ".concat(e.length," tab(s)."):c.A("discardFail")),u(t)
}):(f.showHUD(y?c.A("discardFail"):"Discarded."),u(0))}else u(0)},n,e)},function(n){var e,t=o.O?o.O.s.b:o.hn
;if(t<0)return f.complainLimits(c.A("dupTab")),void n(0);e=false===o.g.active,r.yn(r.gn.duplicate,t).then(function(u){
if(u){if(e&&r.selectTab(t,r.m),e?n(1):d.runNextOnTabLoaded(o.g,u),!(o.x<2)){var i=function(n){r.openMultiTabs({
url:r.getTabUrl(n),active:false,windowId:n.windowId,pinned:n.pinned,index:n.index+2,openerTabId:n.id
},o.x-1,true,[null],true,n,null)};o.kn>=52||0===o.cn||o.Q.wn?r.tabsGet(t,i):r.getCurWnd(true,function(e){
var u,l=e&&e.tabs.find(function(n){return n.id===t});if(!l||!e.incognito||l.incognito)return l?i(l):r.m()
;for(u=o.x;0<--u;)r.gn.duplicate(t);n(1)})}}else n(0)}),e&&r.selectTab(t,r.m)},function(n){n.length&&b.framesGoBack({
s:o.x,o:o.g},null,n[0])},function(n){var e=!!o.g.absolute,t=o.g.filter,u=b.xn(),i=function(i){
var l,f,a,c,s,v,m=o.x,p=r.selectFrom(i),y=i.length;if(!t||(i=h.on(p,i,t)).length){if(l=i.length,
f=h.getNearArrIndex(i,p.index,m<0),
a=(a=e?m>0?Math.min(l,m)-1:Math.max(0,l+m):Math.abs(m)>2*y?m>0?l-1:0:f+m)>=0?a%l:l+(a%l||-l),
i[0].pinned&&o.g.noPinned&&!p.pinned&&(m<0||e)){for(c=1;c<l&&i[c].pinned;)c++;if((l-=c)<1)return void n(0)
;e||Math.abs(m)>2*y?a=e?Math.max(c,a):a||c:(a=(a=f-c+m)>=0?a%l:l+(a%l||-l),a+=c)}
(v=!(s=i[a]).active)?r.selectTab(s.id,u?b.blurInsertOnTabChange:d.getRunNextCmdBy(1)):n(v)}else n(0)},l=function(e){
h.Mn(true,1,i,e||[],n,null)};e?1!==o.x||t?l():r.yn(r.gn.query,{windowId:o._n,index:0}).then(function(n){
n&&n[0]&&r.On(n[0])?i(n):l()}):1===Math.abs(o.x)?r.yn(r.getCurTab).then(l):l()},function(){var n,e,t
;"frame"!==o.g.type&&o.O&&o.O.s.J&&(o.O=(null===(n=f.C())||void 0===n?void 0:n.j)||o.O),e={H:5,U:0,p:o.x,
t:o.g.trailingSlash,r:o.g.trailing_slash,s:m.P(o.g),e:false!==o.g.reloadOnRoot},t=f.bn(e),
Promise.resolve(t||"").then(function(){"object"==typeof e.e&&d.getRunNextCmdBy(2)(null!=e.e.p||void 0)})
},y.joinTabs,b.mainFrame,function(n,e){var t,u,i=r.selectIndexFrom(n)
;n.length>0&&(o.x<0?0===(o.x<-1?i:n[i].index):o.x>1&&i===n.length-1)?e(0):h.Mn(true,1,function(t){
for(var i,l,f=r.selectIndexFrom(t),a=t[f],c=a.pinned,s=Math.max(0,Math.min(t.length-1,f+o.x));c!==t[s].pinned;)s-=o.x>0?1:-1
;if(s!==f&&u&&(i=r.getGroupId(a),
(l=r.getGroupId(t[s]))!==i&&(1===Math.abs(o.x)||i!==r.getGroupId(t[o.x>0?s<t.length-1?s+1:s:s&&s-1])))){
for(null!==i&&(f>0&&r.getGroupId(t[f-1])===i||f+1<t.length&&r.getGroupId(t[f+1])===i)&&(s=f,
l=i);0<=(s+=o.x>0?1:-1)&&s<t.length&&r.getGroupId(t[s])===l;);s-=o.x>0?1:-1}
s===f&&a.active?e(0):r.gn.move((a.active?a:n[0]).id,{index:t[s].index},r.Tn(e))
},n,e,(u="ignore"!==(t=o.g.group)&&false!==t)?function(e){return r.getGroupId(n[0])===r.getGroupId(e)}:null)
},y.moveTabToNewWindow,y.moveTabToNextWindow,function(){p.openUrl()},function(n,e){h.Mn(!o.g.single,0,y.reloadTab,n,e)
},function(n,e){h.Mn(false,1,function(n,e,t){r.gn.remove(n[e[0]].id,r.Tn(t))},n,e)},y.removeTab,function(n){
function e(t){var l,f,a,c,s,v,m=t;if(!m||0===m.length)return r.m();l=i?m.findIndex(function(n){return n.id===o.hn}):-1,
f=l>=0?l:r.selectIndexFrom(m),
a=o.g.noPinned,c=o.g.filter,s=m[f],u>0?(++f,m=m.slice(f,f+u)):(a=null!=a?a&&m[0].pinned:f>0&&m[0].pinned&&!m[f-1].pinned,
u<0?m=m.slice(Math.max(f+u,0),f):(m=m.slice(0)).splice(f,1)),a&&(m=m.filter(function(n){return!n.pinned})),
c&&(m=h.on(s,m,c)),
(v=o.g.mayConfirm)&&m.length>("number"==typeof v?Math.max(v,5):20)&&d.rn()?d.T("closeSomeOtherTabs",m.length).then(e.bind(null,t)):m.length>0?(u<0&&(m=m.reverse()),
r.gn.remove(m.map(function(n){return n.id}),r.Tn(n))):n(0)}
var t=o.g.others,u=(null!=t?t:o.g.other)?0:o.x,i=0===u&&o.g.acrossWindows;i?r.gn.query({},e):h.In(u,e)},function(n,e){
if(n.length<=0)e(0);else{var t=n[0],u=false!==o.g.group
;o.kn>=52||0===o.cn||o.Q.wn||!r.Pn(r.getTabUrl(t))?y.$n(t,void 0,void 0,u):r.Nn.get(t.windowId,function(n){
n.incognito&&!t.incognito&&(t.openerTabId=t.windowId=void 0),y.$n(t,void 0,void 0,u)})}},function(n){
var e,t,u,i,l,a,s,v,m=r.jn();if(!m)return n(0),f.complainNoSession();if(e=!!o.g.one,t=+m.MAX_SESSION_RESULTS||25,
(u=Math.abs(o.x))>t){if(e)return n(0),void f.showHUD(c.A("indexOOR"));u=t}
if(!e&&u<2&&(o.O?o.O.s.an:2===o.cn)&&!o.g.incognito)return n(0),f.showHUD(c.A("notRestoreIfIncog"))
;i=false!==o.g.active,l=true===o.g.currentWindow,a=o.O?o.O.s.b:o.hn,s=o._n,v=function(e){
void 0!==e?y.Cn(s,e,i?null:a).then(function(e){i&&e?d.runNextOnTabLoaded(o.g,e):n(1)}):n(0)},
__awaiter(void 0,void 0,void 0,function*(){var o,p=Math.max(1.2*u|0,2),b=false,h=l?function(n){
return!!n.tab&&n.tab.windowId>0&&n.tab.windowId===s}:null;if(l&&u<=Math.min(t,25)&&((o=yield r.Rn(m.getRecentlyClosed,{
maxResults:u})).some(function(n){return!(!n.tab||n.tab.windowId>0)})&&(d.overrideOption("currentWindow",false),l=false),
b=o.length>u,o=h?o.filter(h):o,!b&&o.length<u&&p<=Math.min(t,25)&&(o=yield r.Rn(m.getRecentlyClosed,{maxResults:p}),
o=h?o.filter(h):o)),(!o||!b&&o.length<u)&&(o=yield r.Rn(m.getRecentlyClosed,u<=25&&!l?{maxResults:u}:{}),
o=h?o.filter(h):o),o.length<(e?u:1))return n(0),f.showHUD(c.A("indexOOR"))
;1===u?r.yn(m.restore,l?o[0].tab.sessionId:null).then(v):Promise.all(o.slice(e?u-1:0,u).map(function(n){
return r.yn(m.restore,(n.tab||n.window).sessionId)})).then(function(n){v(e?n[0]:null)}),i||r.selectTab(a,r.m)})
},function(){null==o.g.$seq?v.runKeyWithCond():v.runKeyInSeq(o.g.$seq,o.x,null)},function(n){
var e,t,l,a,s=(o.g.keyword||"")+"",v=i.Sn({u:r.getTabUrl(n[0])});v&&s?(e={},t=m.P(o.g),v.u=o.R(v.u,0,t,e),
null!=e.S&&(s=e.S),l=u.D(v.u.split(" "),s,2),d.overrideCmdOptions({url_f:l,reuse:null!=(a=o.g.reuse)?a:0,opener:true,
keyword:""}),p.openUrl(n)):d.runNextCmd(0)||f.showHUD(c.A(s?"noQueryFound":"noKw"))},function(n){
var e,t,u=o.g.id,i=o.g.data
;if(!(u&&"string"==typeof u&&void 0!==i))return f.showHUD('Require a string "id" and message "data"'),void n(0)
;e=Date.now(),t=function(e){e=e&&e.message||e+"",console.log("Can not send message to the extension %o:",u,e),
f.showHUD("Error: "+e),n(0)};try{r.t.runtime.sendMessage(u,o.g.raw?i:{handler:"message",from:"Vimium C",count:o.x,
keyCode:o.Dn,data:i},function(o){var u=r.m();return u?t(u):"string"==typeof o&&Math.abs(Date.now()-e)<1e3&&f.showHUD(o),
u||n(false!==o),u})}catch(n){t(n)}},function(n){var e,t=o.g.text,r="number"==typeof t,u=!!o.g.silent,i=o.g.isError
;t||r||u||null!=i||!o.g.$f||(t=(e=o.g.$f)&&e.t?c.Fn("".concat(e.t)):"")?(u||f.showHUD(t||r?t instanceof Promise?t:t+"":c.A("needText")),
n(null!=i?!!i:!!t||r)):n(false)},function(n,e){k.fn.qn(o.g,o.x,n,e)},y.toggleMuteTab,function(n,e){
h.Mn(true,0,y.togglePinTab,n,e)},y.toggleTabUrl,function(n,e){
var t,r=n[0].id,u=((o.g.style||"")+"").trim(),i=!!o.g.current;if(!u)return f.showHUD(c.A("noStyleName")),void e(0)
;for(t of o.zn)if(t.s.b===r)return t.postMessage({N:46,t:u,c:i}),void setTimeout(e,100,1);i||a.An({t:u,o:1}),
setTimeout(e,100,1)},b.toggleZoom,function(n){
var e,t=!!o.g.acrossWindows,u=!!o.g.onlyActive,i=o.g.filter,l=b.xn(),a={},c=function(e){var t,a,c,d,v
;if(e.length<2)return u&&f.showHUD("Only found one browser window"),n(0),r.m();t=o.O?o.O.s.b:o.hn,
c=(a=e.findIndex(function(n){return n.id===t}))>=0?e[a]:null,a>=0&&e.splice(a,1),
!i||(e=h.on(c,e,i)).length?(d=e.filter(function(n){return o.Hn.has(n.id)}).sort(k.Bn.Kn),
e=u&&0===d.length?e.sort(function(n,e){return e.id-n.id
}):d,(v=e[o.x>0?Math.min(o.x,e.length)-1:Math.max(0,e.length+o.x)])?u?r.Nn.update(v.windowId,{focused:true
},l?function(){return b.blurInsertOnTabChange(v)}:r.Tn(n)):s(v.id):n(0)):n(0)},s=function(e){r.selectTab(e,function(e){
return e&&r.selectWndIfNeed(e),l?b.blurInsertOnTabChange(e):r.Tn(n)()})}
;1===o.x&&!u&&-1!==o.hn&&(e=h.Vn())>=0?Promise.all([r.yn(r.tabsGet,e),h.getNecessaryCurTabInfo(i)]).then(function(n){
var e=n[0],u=n[1];e&&(t||e.windowId===o._n)&&r.On(e)&&(!i||h.on(u,[e],i).length>0)?s(e.id):t?r.gn.query(a,c):r.tn(c)
}):t||u?r.gn.query(u?{active:true}:a,c):r.tn(c)},function(n){var e=o.g.newWindow
;true!==e&&true?r.yn(r.t.permissions.contains,{permissions:["downloads.shelf","downloads"]}).then(function(t){var u,i
;if(t){u=r.t.downloads.setShelfEnabled,i=void 0;try{u(false),setTimeout(function(){u(true),n(1)},256)}catch(n){
i=(n&&n.message||n)+""}f.showHUD(i?"Can not close the shelf: "+i:c.A("downloadBarClosed")),i&&n(0)
}else false===e&&o.O?(f.showHUD("No permissions to close download bar"),n(0)):o.M[29](n)}):o.M[29](n)},function(){
var n,e,t,r=f.C(),u=!!o.g.unhover,i=o.g.suppress;for(n of r?r.W:[])e={r:1,u:u
},n===r.c&&(t=d.parseFallbackOptions(o.g))&&Object.assign(e,t),d.portSendFgCmd(n,7,false,e,1)
;(d.hasFallbackOptions(o.g)?true===i:false!==i)&&r&&r.c.postMessage({N:14,t:150})},function(n){
var e,t,r,u,i,l,a,c,s,v,m=o.g.$cache;if(null!=m&&((r=(t=o.in.En===m[1]?m[0]:"")&&(o.in.un.find(function(n){
return n.nn===t})||o.in.Un.find(function(n){return n.nn===t})))?e=Promise.resolve(r):d.overrideOption("$cache",null)),
u=!!e,i=o.x,l=false,!e){
if(c=o.g.path,!(s=null!=(a=o.g.id)&&a+""||c||o.g.title)||"string"!=typeof s)return f.showHUD("Invalid bookmark "+(null!=a?"id":c?"path":"title")),
void n(0)
;if(!(v=d.fillOptionWithMask(s,o.g.mask,"name",["path","title","mask","name","value"],i)).ok)return void f.showHUD((v.result?"Too many potential names":"No name")+" to find bookmarks")
;l=v.useCount,e=o.X(v.result,null!=a&&!!(a+""))}e.then(function(e){if(e){u||l||d.overrideOption("$cache",[e.nn,o.in.En])
;var t=null!=e.u;d.overrideCmdOptions(t?{url:e.Wn||e.u}:{urls:o.in.un.filter(function(n){return n.Y===e.nn
}).map(function(n){return n.Wn||n.u})},true),o.x=l||!t?1:i,p.openUrl()}else n(0),
f.showHUD(false===e?'Need valid "title" or "title".':"The bookmark node is not found.")})},y.toggleWindow]});