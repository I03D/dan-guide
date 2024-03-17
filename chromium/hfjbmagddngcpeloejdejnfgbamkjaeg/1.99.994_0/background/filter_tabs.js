"use strict"
;__filename="background/filter_tabs.js",define(["require","exports","./store","./utils","./browser","./ports","./exclusions","./run_commands"],function(n,u,r,t,e,i,l,o){
var c,a,f,s,d,v;Object.defineProperty(u,"__esModule",{value:true
}),u.hu=u.bu=u.on=u.ku=u.mayRequireActiveTab=u.getNecessaryCurTabInfo=u.In=u.getNearArrIndex=u.wu=u.Vn=u.Mn=u.getTabRange=void 0,
u.getTabRange=function(n,u,t,e){return c(n,u,t,r.x,e,r.g.limited,r.g.filter)},c=function(n,u,r,t,e,i,l){var o,c=t>0
;return e&&(t+=c?e:-e),
(o=n+t)<=u&&o>-2?c?[n,o]:[o+1,n+1]:false===i||(null==i||"auto"===i)&&(Math.abs(t)<2*(r||u)||t<10||l&&null==i)?Math.abs(t)<u?c?[u-t,u]:[0,-t]:[0,u]:c?[n,u]:[0,n+1]
},a=function(n,t,i,l,c,a){var f,s=function(l){var a,f,s,d;if(!l||!l.length)return c(0),e.m();a=e.selectIndexFrom(l),
s=(f=v?[0,l.length]:u.getTabRange(a,l.length,0,t))[0],d=f[1],v&&(o.overrideCmdOptions({limited:false},true),
o.overrideOption("$limit",r.x),r.x=r.x>0?9999:-9999),i(l,n?[s,a,d]:[a+1===d||r.x>0&&s!==a?s:d-1,a,d],c)
},d=r.g.filter,v=d&&/(^|[&+])limit(ed)?=count\b/.test(d+"")
;l?0===l.length||Math.abs(r.x)>1||v?0===l.length||v||false?((f=l[0]?l[0].windowId:r._n)>=0?e.yn(e.Nn.get,f,{
populate:true}):e.yn(e.getCurWnd,true)).then(function(n){s(n?n.tabs:[])}):s(l):t?l[0].index+r.x<0?e.tn(s):e.gn.query({
windowId:l[0].windowId,index:l[0].index+r.x},function(t){
return t&&t.length&&(true===a||e.On(t[0])&&(!a||a(t[0])))&&(!d||u.on(l[0],t,d).length>0)?r.x<0?i([t[0],l[0]],[0,1,n?2:1],c):i([l[0],t[0]],[n?0:1,0,2],c):e.tn(s),
e.m()}):i(l,[0,0,1],c):c(0)},u.Mn=a,u.Vn=function(){var n=0,u=-1;return r.Hn.forEach(function(t,e){t>n&&e!==r.hn&&(n=t,
u=e)}),u},f=function(n,r,t){var i
;return n&&(n.index||r)?t&&t[i=Math.max(t.indexOf(n),0)+(r?1:-1)]&&e.On(t[i])?Promise.resolve(t[i]):e.yn(e.gn.query,{
windowId:n.windowId,index:n.index+(r?1:-1)}).then(function(i){
return i&&i[0]?e.On(i[0])?i[0]:(t&&t.length>2?Promise.resolve(t.filter(e.On)):e.yn(e.tn)).then(function(t){
return t&&t.length?t[u.getNearArrIndex(t,n.index+(r?1:-1),r)]:null}):null}):Promise.resolve(null)},u.wu=f,
u.getNearArrIndex=function(n,u,r){
for(var t=n.length>1?0:1;t<n.length;t++)if(n[t].index>=u)return n[t].index===u||r?t:t>0?t-1:0;return n.length-1},
u.In=function(n,u){1===Math.abs(n)?e.getCurTab(function(r){var t=r[0].index+n;t>=0?e.gn.query({windowId:r[0].windowId,
index:t},function(t){return t&&t[0]?u(n>0?[r[0],t[0]]:[t[0],r[0]]):e.getCurTabs(u),e.m()}):e.getCurTabs(u)
}):e.getCurTabs(u)},s=function(n){if(!n)return null;var r=u.mayRequireActiveTab(n)
;return r>2?e.yn(e.getCurTab).then(function(n){return n&&n[0]||null}):r?Promise.resolve(i.$(null,r>1)).then(function(n){
return n?{url:n}:null}):null},u.getNecessaryCurTabInfo=s,u.mayRequireActiveTab=function(n){var u,r,t,e,i=0
;for(u of(n+"").split(/[&+]/)){if(t=(r=u.split("=",1)[0]).includes(".")?"":r||u,e=u.slice(t?t.length+1:0),
t&&"same"===e&&"hidden"!==t&&!t.startsWith("discard"))return 3;if(!e&&t){if(t.startsWith("title")||"group"===t)return 3
;i="hash"===t?2:i||("host"===t||"url"===t?1:0)}}return i},d=function(n,u){
return""===(n=n&&n.toLowerCase())||"1"===n||"true"===n?!u||null:"only"===n||"0"!==n&&"false"!==n&&null},
u.ku=function(n,u,r){var t=n?(n+"").split(/[&+]/).find(function(n){return n.startsWith(u)
}):null,e=t?t.slice(1+u.length):null;return null!==e?d(e,r):null},v=function(n,u){
var r=n&&"/"===n[0]?n.lastIndexOf("/"):0,e=r>1&&/^[a-z]+$/.test(n.slice(r+1))?t.nr(n.slice(1,r),n.slice(r+1).replace(/g/g,""),0):null
;return e?function(n){return e.test(n||"")}:u?function(n){return(n||"").includes(u)}:null},u.on=function(n,u,o,a){
var f,s,h,m,b,k,w,g,p,x,y=0,_=0,M=0,I=[],P=function(u){
var i,o,c,a,s,h,m,b,k,w,g,p,x,P,j,z,$=u.split("=",1)[0],q=$.includes("."),A=!q&&$.endsWith("!"),N=q?"":(A?$.slice(0,-1):$)||u,O=u.slice(q?0:$.length+("="===u.charAt($.length+1)?2:1)),B=O&&t.Zn(O),C="same"===B||"cur"===B||"current"===B,D=null
;switch(N){case"title":case"title*":D=(i=v(B,B||n&&n.title))?function(n){return i(n.title)}:null;break;case"url":
case"urlhash":case"url+hash":case"url-hash":case"hash":o=null,"url"===N&&B?o=l.cr(B):(c=n?e.getTabUrl(n):null,
a=N.includes("hash"),o=c?l.cr(":"+(a?c:c.split("#",1)[0])):null),D=o?function(n){return l.sr(o,e.getTabUrl(n))}:D;break
;case"title+url":D=(s=B&&v(B,B))?function(n){return s(n.title)||s(e.getTabUrl(n))}:D;break;case"host":case"":
D=(h=B||(N&&n?null===(f=t.xu(e.getTabUrl(n)))||void 0===f?void 0:f.host:""))?function(n){var u
;return h===(null===(u=t.xu(e.getTabUrl(n)))||void 0===u?void 0:u.host)}:D;break;case"active":
D=null!=(m=d(B,1))?function(n){return n.active===m}:D;break;case"new":case"old":case"visited":b=d(B)===("new"!==N),
D=function(n){return r.Hn.has(n.id)===b};case"discarded":case"discard":D=null!=(k=!C&&d(B,1))?function(n){
return n.discarded===k}:D;break;case"group":
D=null!=(w=B||(n?null!=e.getGroupId(n)?e.getGroupId(n)+"":"":null))?function(n){var u
;return(null!==(u=e.getGroupId(n))&&void 0!==u?u:"")+""===w}:D;break;case"hidden":break;case"highlight":
case"highlighted":D=null!=(g=C?n?n.highlighted:null:d(B))?function(n){return n.highlighted===g}:D;break;case"incognito":
D=null!=(p=C?n?n.incognito:null:d(B))?function(n){return n.incognito===p}:D;break;case"pinned":
D=null!=(x=C?n?n.pinned:null:d(B,1))?function(n){return n.pinned===x}:D;break;case"mute":case"muted":
D=null!=(P=C?n?e.isTabMuted(n):null:d(B))?function(n){return e.isTabMuted(n)===P}:D;break;case"audible":case"audio":
D=null!=(j=C?n?n.audible:null:d(B))?function(n){return n.audible===j}:D;break;case"min":case"max":case"limit":
case"limited":z="count"===B?r.g.$limit||r.x:parseInt(B)||0,"min"===N?_=z:"max"===N?M=z:y=z||1,D=function(){return true}}
D&&I.push([D,A])};for(s of(o+"").split(/[&+]/))P(s);return a&&(a.known=I.length>0),0===I.length?u.slice(0):(h=u,
m=u.filter(function(n){for(var u of I)if(u[0](n)===u[1])return false;return true}),
!(b=m.length)||_>0&&b<_||M>0&&b>M?(r.g&&r.g.$else||i.showHUD(b?"".concat(b," tabs found but expect ").concat(b<_?_:M):"No tabs matched the filter parameter"),
[]):(y&&((k=n?h.indexOf(n):-1)<0&&(w=n?n.id:r.hn,k=h.findIndex(function(n){return n.id===w})),
k>=0?((p=(g=m.findIndex(function(n){return h.indexOf(n)>=k}))>=0&&h.indexOf(m[g])>k)&&m.splice(g,0,null),
x=c(g>=0?g:b-1,b,0,r.x>0?y:-y,p?1:0,false),m=m.slice(x[0],x[1]),p&&(m=m.filter(function(n){return!!n
}))):m=y>0?m.slice(0,y):m.slice(-y)),m))},u.bu=function(n,u){var t,i,l=function(n,u){n.ind=u},o=function(n,u){
return n<u?-1:n>u?1:0},c=n.map(function(n,u){return{tab:n,ind:u,time:null,rhost:null,group:e.getGroupId(n),
pinned:n.pinned}}),a=-1,f=false
;for(i of(u instanceof Array?u.slice(0):(true===u?"time":u+"").split(/[, ]+/g)).reverse())t="r"===i[0]&&"e"!==i[1]||"-"===i[0]?(i=i.slice(1),
-1):1,i.includes("time")&&!i.includes("creat")||i.includes("recen")?(null==c[0].time&&c.forEach(function(n){
var u=n.tab.id,t=r.Hn.get(u);n.time=u===r.hn?1:null!=t?t:u+2
}),a=1):i.startsWith("host")||"url"===i?(c[0].rhost||c.forEach(function(n){
var u,r,t,e=n.tab.url,i=e.indexOf("://")+3,l=i>3?e.indexOf("/",i):0
;l<i?n.rhost=e:(t=(r=(u=e.slice(i,l)).lastIndexOf(":"))>0&&u.lastIndexOf(":",r-1)>0,
n.rhost=t?u:u.slice(0,r>0?r:u.length).split(".").reverse().join(".")+(r>0?" "+u.slice(1):""))}),
a="url"===i?3:2):a="title"===i?4:i.includes("creat")||"id"===i?5:"window"===i?6:"index"===i?7:"reverse"===i?(t=-1,7):-1,
a<0||(c.sort(function(n,u){
return(1===a?n.time-u.time:a<4?o(n.rhost,u.rhost)||(3===a?o(n.tab.url,u.tab.url):0):4===a?o(n.tab.title,u.tab.title):5===a?n.tab.id-u.tab.id:6===a?n.tab.windowId-u.tab.windowId:n.ind-u.ind)*t||n.ind-u.ind
}),c.forEach(l),f=true);return f&&c.some(function(n){return null!=n.group})&&c.sort(function(n,u){
return null==n.group?null==u.group?n.ind-u.ind:1:null==u.group||n.group<u.group?-1:n.group>u.group?1:n.ind-u.ind}),
f&&(c.forEach(l),c.sort(function(n,u){return n.pinned!==u.pinned?n.pinned?-1:1:n.ind-u.ind})),f?c.map(function(n){
return n.tab}):n},u.hu=function(n,u,t,i,l){return __awaiter(void 0,void 0,void 0,function*(){
var o,c,a,f,s,d,v,h,m=function(u){return(!n||u.type===n)&&(null==t||u.incognito===t)&&(l||"minimized"!==u.state)}
;if(r.yu>=0){if((o=yield e.yn(e.Nn.get,r.yu))&&m(o))return o;r.yu=-1}return c=[],
a=((yield e.yn(e.getCurTabs))||[]).map(function(n){return n.id}),a.push(r.hn),r.Hn.forEach(function(n,u){
a.includes(u)||c.push([u,n])}),c.sort(function(n,u){return u[1]-n[1]
}),c.length>0&&((f=yield e.Rn(e.gn.get,c[0][0]))||(f=(s=c.find(function(n){return r.a.has(n[0])
}))&&(yield e.Rn(e.gn.get,s[0]))),
(o=f&&(yield e.Rn(e.Nn.get,f.windowId)))&&m(o))?o:((h=(v=(d=yield e.Rn(e.Nn.getAll)).filter(m)).filter(function(n){
return n.id!==i})).sort(function(n,u){return u.id-n.id}),(h.length>0?h[0]:null)||(u?d.find(function(n){return n.id===i
})||d.find(function(n){return n.focused})||null:[v,d.find(function(n){return n.id===i})]))})}});