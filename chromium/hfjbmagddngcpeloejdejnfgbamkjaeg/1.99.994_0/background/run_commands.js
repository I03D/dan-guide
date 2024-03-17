"use strict"
;__filename="background/run_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./ports","./i18n","./key_mappings"],function(n,u,e,t,r,l,i,o,f){
var c,s,a,v,d,m,$,p,y,g,_,h,b,T,j,w,D,k,C,M,N,O,P,S,q;Object.defineProperty(u,"__esModule",{value:true}),
u.initHelpDialog=u.waitAndRunKeyReq=u.runNextOnTabLoaded=u.runNextCmdBy=u.getRunNextCmdBy=u.runNextCmd=u.makeFallbackContext=u.wrapFallbackOptions=u.parseFallbackOptions=u.hasFallbackOptions=u.executeExternalCmd=u.executeShortcut=u.portSendFgCmd=u.sendFgCmd=u.onConfirmResponse=u.onBeforeConfirm=u.T=u.rn=u.executeCommand=u.fillOptionWithMask=u.overrideOption=u.overrideCmdOptions=u.concatOptions=u.copyCmdOptions=u.replaceCmdOptions=void 0,
c=Math.abs,s=0,d=1,u.replaceCmdOptions=function(n){e.g=t.Eu(n)},u.copyCmdOptions=function(n,u){
for(var e in u)("$"!==e[0]||"$then=$else=$retry=$f=".includes(e+"=")&&!e.includes("="))&&(void 0!==n[e]||(n[e]=u[e]))
;return n},$=function(n,e){return e&&n?u.copyCmdOptions(u.copyCmdOptions(t.i(),e),n):n||e||null},u.concatOptions=$,
u.overrideCmdOptions=function(n,u,r){var l=r||e.g;t.zu(t.Eu(n),l),u?delete n.$o:n.$o=l,r||(e.g=n)},p=function(n,t,r){
(r=r||e.g)[n]=t;var l=r.$o;null!=l&&u.overrideOption(n,t,l)},u.overrideOption=p,y=function(n,r,i,o,f,c){
var s,a,v,d,m,$,p,y,g,_,h,b,T=-1,j=r,w=true===j||""===j;if(w){for(a=/\$\$|[$%][sS]/g,
v=void 0;(v=a.exec(n))&&"$$"===v[0];);j=v&&v[0]||"$s"}return d=null,$=false,p=!!j&&"string"==typeof j&&n.includes(j),
y=c||e.g,g=function(){var n,u;if(null!==d||1!==_)return d||""
;if(n=i&&y[i])s=i;else if(1===(u=Object.keys(y).filter(function(n){return"$"!==n[0]&&!o.includes(n)&&true===y[n]
})).length)n=s=u[0];else{if(""!==r)return _=u.length,"";n=""}return T=1,d=n+"",d="$s"===j||"%s"===j?t.gr(d):d},_=1,h=0,
w?((n.includes(m="$c")||n.includes(m="%c"))&&(T=1,
$=true),n=n.replace(new RegExp("\\$\\{([^}]*)}|\\$\\$"+($?"|"+t.ct(m):"")+(p?"|"+t.ct(j):""),"g"),function(n,u){
var r,i,o,c;return n===j?g():n===m?f+"":u?(T=1,h++,r=false,(i=l.ai.exec(u))&&(u=u.slice(0,i.index)),
/^[sS]:/.test(u)&&(r="s"===u[0],
u=u.slice(2)),(o=l.si.exec(u)||l.li.exec(u))&&(u="<"===o[0][0]?u.slice(0,o.index):u.slice(o[0].length)),
c="string"==typeof(c=o?e.ir.get("<"===o[0][0]?o[0].slice(1):o[0].slice(0,-1))||"":"__proto__"===u||"$"===u[0]?"":u?y[u]:g())?c:c&&"object"==typeof c?JSON.stringify(c):c+"",
i&&(c=e.R(c,0,t.Zn(i[0].slice(1)))),r?t.gr(c):c):"$"})):p&&(g(),null!==d&&(n=n.replace(j,function(){return d}))),1!==_?{
ok:0,result:_}:(j&&"string"==typeof j&&(b=c||{},c||u.overrideCmdOptions(b),b.$masked=true,s&&delete b[s]),{ok:T,
value:d||"",result:n,useCount:$,useDict:h})},u.fillOptionWithMask=y,g=function(n){var u,l,i=a;return a=null,
i&&(v?(l=(u=t.Gn()).Jn,i(n,u.Ln),l.then(P)):i(n,e.l)),e.wi=null,n?void 0:r.m()},_=function(n){
u.executeCommand(n,1,e.Dn,e.O,e.x)},h=function(n,l,o,s,d,m){var $,p,y,h,b,T,w,D,k,C,M,N,O;if(j(0),a)return a=null,
void(e.wi=null)
;if(p=f.Pu(n),y=n.ua,p&&($=p.$count)&&(l=l*$||1),1===(l=d||(l>=1e4?9999:l<=-1e4?-9999:0|l||1)));else if(1===y)l=1;else if(y>1&&(l>y||l<-y)){
if(null!=m)l=l<0?-1:1;else if(!(d||p&&true===p.confirmed))return e.Dn=o,e.g=null,e.O=s,e.x=l,e.wi=null,
void u.T(n.ao,c(l)).then(_.bind(null,n))}else l=l||1;if(null!=m){
if(h=0|m.r,h=Math.max(1,h>=0&&h<100?Math.min(h||6,20):c(h)),m.c&&m.c.i>=h&&(!p||"showTip"!==p.$else))return e.O=s,
i.showHUD("Has run sequential commands for ".concat(h," times")),void(e.wi=null);b=u.makeFallbackContext(m.c,1,m.u),
p&&((38===n.ju||b.t)&&n.Iu||u.hasFallbackOptions(p))&&(u.overrideCmdOptions(T={},false,p),T.$retry=-h,T.$f=b,
b.t&&n.Iu&&!p.$else&&(T.$else="showTip"),p=T)}if(n.Iu);else{
if(null!=s)return D=4620>>(w=n.ju)&1||4===w&&!!p&&false===p.keepHover,e.O=s,e.wi=null,void u.portSendFgCmd(s,w,D,p,l)
;if(k=0,18===(w=n.ju)?r.gn.goBack&&(k=23):11===w&&(k=14),!k)return;n=f.na(n.ao,p,[k,1,n.ua])}M=e.M[C=n.ju],
null===(v=n.ma)&&(v=n.ma=null!=p&&u.hasFallbackOptions(p)),e.Dn=o,e.g=p||(n.ca=t.i()),e.O=s,e.x=l,l=e.y[C],
null==s&&C<13&&C>2||(l<1?(v?(O=(N=t.Gn()).Jn,M(N.Ln),O.then(P)):M(e.l),e.wi=null):(v=n.ma,a=M,
(l<2||2===l&&c(e.x)<2?r.getCurTab:r.tn)(g)))},u.executeCommand=h,u.rn=function(){return d&&true!==e.g.confirmed},
b=function(n,r){var l,f,c,v,$,p,y;return e.O?(l="string"==typeof n?n:"string"==typeof n[0]?n[0]:null,
!m&&l?u.initHelpDialog().then(function(){return u.T(n,r)}):(c=(f=t.Gn()).Jn,v=f.Ln,$=e.x,p=e.g,y=e.O,
j(setTimeout(T,2e3,0,void 0)),a=function(n){e.Dn=0,e.g=p,e.O=y,e.x=n?$>0?1:-1:$,d=0,v(n),setTimeout(function(){d=1},0)},
Promise.resolve(l?o.A("cmdConfirm",[r,e.oo[1].get(m.eo(l))||"### ".concat(l," ###")]):n[0][0]).then(function(u){var t
;((null===(t=i.C())||void 0===t?void 0:t.j)||e.O).postMessage({N:12,c:"",i:s,m:u,r:"string"!=typeof n})}),c)):(a=null,
e.x=e.x>0?1:-1,Promise.resolve(e.x>0))},u.T=b,T=function(n,u){var e=a;a=null,(n>1||(null==u?void 0:u.i))&&e&&e(n<3)},
j=function(n){s&&clearTimeout(s),s=n},u.onBeforeConfirm=function(n){n.i>=-1&&s===n.i&&clearTimeout(n.i)},
w=function(n,e){var t="number"!=typeof n.i?n.i.i:0;0===n.i||t>=-1&&s!==t||(j(0),
n.r?T(n.r,n.i):u.executeCommand(f.ia.get(n.i.c),n.n,0,e,0))},u.onConfirmResponse=w,D=function(n,t,r){
u.portSendFgCmd(e.O,n,t,r,1)},u.sendFgCmd=D,u.portSendFgCmd=function(n,u,e,t,r){n.postMessage({N:10,
H:e?i.ensureInnerCSS(n.s):null,c:u,n:r,a:t})},k=function(n,l){var o,c,a,v,d,m,$=f.ia.get(n),p=38===$.ju&&$.Iu
;if(p&&e.ro($),j(0),l&&!(512&l.c.s.d))return o=l.c,j(setTimeout(u.executeShortcut,100,n,null)),o.postMessage({N:12,c:n,
i:s,m:"",r:false}),512&l.d&&i.po(l,0),void i.ensuredExitAllGrab(l);if(c=f.Pu($),a=p?"runKey":$.ao,v=$.ju,d=0,m=$,
$.Iu||(18===v?r.gn.goBack&&(d=23):11===v&&(d=14)),d)m=f.na(a,c,[d,1,$.ua]);else{if(!$.Iu)return;d=$.ju}
d>12||d<3?u.executeCommand(m,1,0,null,0):c&&c.$noWarn||((c||($.ca=t.i())).$noWarn=true,
console.log("Error: Command",a,"must run on pages which have run Vimium C"))},u.executeShortcut=k,C=function(n,r,l){
var o,c,s,a,v,d,m=n.command
;(o=(m=m?m+"":"")?f.ea[m]:null)&&((l=l||(r.tab?i.indexFrame(r.tab.id,r.frameId||0)||((c=e.a.get(r.tab.id))?c.c:null):null))||o[1])&&(a=n.key,
v=f.na(m,s=n.options||null),d=n.count,v&&(d="-"!==d?parseInt(d,10)||1:-1,s&&"object"==typeof s?t.Eu(s):s=null,
u.executeCommand(v,d,a|=0,l,0)))},u.executeExternalCmd=C,u.hasFallbackOptions=function(n){return!!(n.$then||n.$else)},
u.parseFallbackOptions=function(n){var u=n.$then,e=n.$else;return u||e?{$then:u,$else:e,$retry:n.$retry,$f:n.$f}:null},
M=function(n){var t=u.parseFallbackOptions(e.g);return t&&Object.assign(n,t),n},u.wrapFallbackOptions=M,
u.makeFallbackContext=function(n,u,e){return{i:(n?n.i:0)+u,t:e&&2!==e?e:n?n.t:0}},N=function(n){
return u.runNextCmdBy(n,e.g)},u.runNextCmd=N,O=function(n){return u.hasFallbackOptions(e.g)?function(t){
var l=2&n?void 0===t:r.m(),i=e.g;return l?u.runNextCmdBy(0,i):u.runNextOnTabLoaded(i,1&n?t:null),2&n?void 0:l
}:2&n?e.l:r.m},u.getRunNextCmdBy=O,P=function(n){
"object"==typeof n?u.runNextOnTabLoaded(e.g,n):"boolean"==typeof n?u.runNextCmdBy(n?1:0,e.g,null):n<0||u.runNextCmdBy(n?1:0,e.g,n>1?n:null)
},u.runNextCmdBy=function(n,u,t){var r,l,o=n?u.$then:u.$else,f=!!o&&"string"==typeof o;return f&&(r={c:u.$f,r:u.$retry,
u:0,w:0},l=o&&/\$D/.test(o.split("#",1)[0]),j(setTimeout(function(){return __awaiter(void 0,void 0,void 0,function*(){
var n,u=e.a.get(e.hn)
;yield i.Ku(u,true),n=e.O&&e.O.s.b===e.hn&&u&&u.W.indexOf(e.O)>0?e.O:u?2===u.c.s.f&&u.W.filter(function(n){
return 2!==n.s.f&&!(512&n.s.d)}).sort(function(n,u){return n.s.J-u.s.J})[0]||u.c:null,u&&i.ensuredExitAllGrab(u),
e.I(o,n,r)})},l?0:t||50))),f},S=function(n,t,l){var i,o,f,c,v,d=n.$then;(d&&"string"==typeof d||l)&&(i=function(t){
var i=Date.now(),m=i<v-500||i-v>=o||f;if(!t||!s)return c=-1,r.m();if(m||"complete"===t.status){
if(!m&&!e.a.has(t.id)&&(l||t.url.startsWith(location.protocol)))return;j(0),a=null,l&&l(),d&&u.runNextCmdBy(1,n,l?67:0)}
},o=false!==t?1500:500,f=!!d&&/[$%]l/.test(d.split("#",1)[0]),c=t?t.id:false!==t?-1:e.hn,v=Date.now(),
j(setInterval(function(){r.tabsGet(-1!==c?c:e.hn,i)
},f?50:100)),d&&/\$D/.test(d.split("#",1)[0])&&r.tabsGet(-1!==c?c:e.hn,i))},u.runNextOnTabLoaded=S,q=function(n,t){
var r=n.f,l={$then:n.k,$else:null,$retry:r&&r.r,$f:r&&u.makeFallbackContext(r.c,0,r.u)};e.O=t,
r&&false===r.u?u.runNextOnTabLoaded(l,null):u.runNextCmdBy(1,l,r&&r.w)},u.waitAndRunKeyReq=q,
u.initHelpDialog=function(){var n=e.oo||[]
;return m?Promise.resolve(m):Promise.all([r.import2(e.Q.HelpDialogJS),null!=n[0]?null:t.Ju("help_dialog.html"),null!=n[1]?null:o.getI18nJson("help_dialog")]).then(function(n){
var u=n[0],t=n[1],r=n[2],l=e.oo||(e.oo=[null,null]);return t&&(l[0]=t),r&&(l[1]=r),m=u},null)}});