"use strict"
;__filename="background/tab_commands.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./i18n","./run_commands","./clipboard","./open_urls","./frame_commands","./filter_tabs","./tools"],function(n,e,r,i,u,t,o,f,l,a,c,d,s,v,w){
var m,p,b,I,y,_,g,x,h;Object.defineProperty(e,"__esModule",{value:true
}),e.toggleWindow=e.Cn=e.$n=e.toggleTabUrl=e.togglePinTab=e.toggleMuteTab=e.removeTab=e.reloadTab=e.moveTabToNextWindow=e.moveTabToNewWindow=e.joinTabs=e.copyWindowInfo=void 0,
m=Math.abs,p=function(){r.O&&s.focusFrame(r.O,false,0,1)},b=function(n){
return r.g.end?null:null!=r.g.position?d.newTabIndex(n,r.g.position,false,false):null!=r.g.rightInOld?n.index+(r.g.rightInOld?0:1):n.index+(false!==r.g.right?1:0)
},e.copyWindowInfo=function(n){
var e,t=r.g.filter,o=r.g.keyword,d=r.g.decoded,s=null!=d?d:r.g.decode,w=r.g.format,p=r.g.type,b="tab"===p&&(m(r.x)>1||!!t),I=c.P(r.g),y={
d:false!==s,s:I,k:o};if("frame"===p&&r.O&&!w)return e=void 0,128&r.O.s.d?(r.O.postMessage({N:3,H:18,U:1,o:y}),
e=1):e=f.bn({H:18,U:1,o:y}),void(1!==e&&(e&&e instanceof Promise?e.then(function(){n(1)}):n(1)))
;u.gn.query("browser"===p?{windowType:"normal"}:{active:"window"!==p&&!b||void 0,lastFocusedWindow:true},function(e){
var c,d,m,_,g,x,h,T,k,z,j,P
;if((!p||"browser"!==p&&"window"!==p&&"tab"!==p&&"string"==typeof p)&&!w)return d="title"===p?e[0].title:p&&"frame"!==p&&"url"!==p?(null===(c=i.xu(u.getTabUrl(e[0])))||void 0===c?void 0:c[p])||"":u.getTabUrl(e[0]),
(m="title"===p?{s:d}:{u:d}).o=y,m.n=a.parseFallbackOptions(r.g),void r.pu[18](m,r.O);_=r.O?r.O.s.an:2===r.cn,
g=""+(w||"${title}: ${url}"),h="json"===(x=r.g.join)&&!w,b?(T=e.length<2?0:u.selectIndexFrom(e),
k=v.getTabRange(T,e.length),e=e.slice(k[0],k[1])):e=e.filter(function(n){return n.incognito===_}),
t&&(z=r.O?r.O.s.b:r.hn,j=e.find(function(n){return n.id===z
}),e=v.on(j,e,t)),e.length?("browser"===p&&e.sort(function(n,e){return n.windowId-e.windowId||n.index-e.index}),
P=e.map(function(n){return h?{title:n.title,url:s?i.pr(u.getTabUrl(n)):u.getTabUrl(n)
}:g.replace(/\$\{([^}]+)}/g,function(e,r){return r.split("||").reduce(function(e,r){var t
;return e||(s&&"url"===r?i.pr(u.getTabUrl(n)):"host"===r?(t=i.xu(u.getTabUrl(n)))&&t.host||"":"__proto__"!==r&&((t=n[r])&&"object"==typeof t?JSON.stringify(t):t||""))
},"")})}),Promise.resolve(r.wr(P,x,I,o)).then(function(r){
n(1),f.showHUD("tab"===p&&e.length<2?r:l.A("copiedWndInfo"),15)})):n(0)})},e.joinTabs=function(n){
var e,i=null!=r.g.order?r.g.order:r.g.sort,t=r.g.windows,o="current"===t,f="all"===t;e=function(e){var l,a,c,d,s
;l=2===r.cn,e=o?e:e.filter(function(n){return n.incognito===l}),a=o?e:e.filter(function(n){return n.id===r._n}),
o||a.length?(c=function(t){var f,l,a,c,d,s,w,p,b,I,y=[],_=function(n){y.push(n)};if(e.sort(function(n,e){
return n.id-e.id}).forEach(function(n){n.tabs.forEach(_)}),y.length)if(f=r.g.filter,l=t?t.id:r._n,a=y.find(function(n){
return n.id===r.hn})||(t?u.selectFrom(t.tabs):y[0]),o&&m(r.x)>1&&y.length>1&&(c=y.findIndex(function(n){
return n.id===a.id}),d=v.getTabRange(c,y.length),y=y.slice(d[0],d[1])),f&&(y=v.on(a,y,f,s={}),f=s.known?f:null),
y.length){for(I of(y=i?v.bu(y,i):y,p="before"===(w=r.g.position)||(w+"").startsWith("prev"),
f&&t?w&&"string"==typeof w&&"keep"!==w?"begin"===w||"start"===w?b=t.tabs.filter(function(n){return n.pinned
}).length:"end"!==w?(y.includes(a)&&y.splice(y.indexOf(a),1),p?y.push(a):y.unshift(a),
b=Math.max(0,t.tabs.findIndex(function(n){return n.id===r.hn})-y.filter(function(n){
return n.windowId===l&&n.index<a.index}).length)):b=t.tabs.length:b=y.reduce(function(n,e){
return e.windowId===l?Math.min(e.index,n):n},y.length):b=t?t.tabs.length:0,y))u.gn.move(I.id,I.windowId!==l?{windowId:l,
index:b++}:{index:b++});for(I of y)I.pinned&&I.windowId!==l&&u.tabsUpdate(I.id,{pinned:true});n(1)}else n(0);else n(0)},
(d=a.length?a[0]:null)&&"popup"===d.type&&d.tabs.length?(s=u.selectFrom(d.tabs).id,d.tabs=d.tabs.filter(function(n){
return n.id!==s}),u.makeWindow({tabId:s,incognito:d.incognito},d.state,function(n){n&&(r._n=n.id,
n.tabs[0]&&(r.hn=n.tabs[0].id)),c(n)})):(e=o||!d||f||i&&!t?e:e.filter(function(n){return n.id!==d.id}),c(d))):n(0)},
o?u.getCurWnd(true,function(n){return n?e([n]):u.m()}):(r.x=1,u.Nn.getAll({populate:true,windowTypes:["normal","popup"]
},e))},I=function(n){var i="hasIncog",t=!!r.g.all,o=function(e){
var i,c,d,s,w,I,y,_,g,x,h,T=e.tabs,k=T.length,z=false!==r.g.focused,j=u.selectIndexFrom(T),P=T[j]
;if(!t&&k<=1&&(!k||0===P.index&&m(r.x)>1))n(0);else{if(t){
for(d of T)if(null!=u.getGroupId(d))return f.showHUD("Can not keep groups info during this command"),void n(0);c=[0,k]
}else c=1===k?[0,1]:v.getTabRange(j,k);if(s=r.g.filter,w=T.slice(c[0],c[1]),(w=s?v.on(P,w,s):w).length){if(!t){
if((I=w.length)>=k&&k>1)return n(0),void f.showHUD(l.A("moveAllTabs"))
;if(I>30&&a.rn())return void a.T("moveTabToNewWindow",I).then(o.bind(null,e))
;if(1===k&&0===P.index&&1===m(r.x))return void u.yn(u.gn.query,{windowId:e.id,index:1}).then(function(r){
if(!r||!r.length)return n(0),void f.showHUD(l.A("moveAllTabs"));e.tabs=[e.tabs[0],r[0]],o(e)})}y=P.incognito,
_=w.includes(P)?P:w[0],g=(null!==(i=b(P))&&void 0!==i?i:P.index+1)<=P.index,x={tabId:_.id,incognito:y,focused:z},
h="normal"===e.type?e.state:"",v.wu(w[g?w.length-1:0],g,T).then(function(i){z||i&&u.selectTab(i.id),
u.makeWindow(x,h,function(t){var o,f,l,a,c,d,s,v;if(t){for(v of(p(),z&&i&&u.selectTab(i.id),o=w.indexOf(_),
f=w.slice(0,o),l=w.slice(o+1),e.incognito&&r.kn<52&&(f=f.filter(a=function(n){return n.incognito===y}),l=l.filter(a)),
d=l.length,s=function(n){return n.id},(c=f.length)&&(u.gn.move(f.map(s),{index:0,windowId:t.id},u.m),
c>1&&u.gn.move(w[o].id,{index:c})),d&&u.gn.move(l.map(s),{index:c+1,windowId:t.id},u.m),w))v.pinned&&u.tabsUpdate(v.id,{
pinned:true});n(1)}else n(0)})})}else n(0)}},c=function(t){var o,c,s,v=u.selectFrom(t.tabs)
;if(t.incognito&&v.incognito)return n(0),f.showHUD(l.A(i));if(o=v.id,c={incognito:true},s=u.getTabUrl(v),
v.incognito);else{if(t.incognito)return u.Pn(s)?(n(0),f.showHUD(l.A(i))):e.$n(v);if(u.Pn(s))return n(0),
f.complainLimits(l.A("openIncog"));c.url=s}t.tabs=null,u.Nn.getAll(function(e){var i,f,l=false!==r.g.focused
;(e=e.filter(function(n){return n.incognito&&"normal"===n.type})).length?u.gn.query({windowId:d.preferLastWnd(e).id,
active:true},function(n){var e=n[0];u.tabsCreate({url:s,windowId:e.windowId,active:false!==r.g.active,
index:d.newTabIndex(e,r.g.position,false,false)},a.getRunNextCmdBy(3)),l&&u.selectWnd(e),u.gn.remove(o)
}):(i="normal"===t.type?t.state:"",(f=null!=c.url)?r.Q.wn&&(l=true,i=""):c.tabId=o,c.focused=l,
u.makeWindow(c,i,function(e){f||e&&p(),f&&e?a.getRunNextCmdBy(0)(e.tabs&&e.tabs[0]||null):n(!!e)}),f&&u.gn.remove(o))})
},s=!!r.g.incognito
;s&&(r.O?r.O.s.an:2===r.cn)?(f.showHUD(l.A(i)),n(0)):(t||1!==m(r.x)&&!s?u.yn(u.getCurWnd,true):u.yn(u.getCurWnd,false).then(function(n){
return n&&u.yn(u.gn.query,{windowId:n.id,active:true}).then(function(e){return n.tabs=e,e&&e.length?n:void 0})
})).then(function(e){e?(s?c:o)(e):n(0)})},e.moveTabToNewWindow=I,y=function(n,i){function t(n,t){
var a,c,d,s,w,I,y,_,g,x=false!==r.g.focused,h=r.g.filter,T=!!(r.g.tabs||h||l);if(n.length>0){if(a=n.map(function(n){
return n.id}).sort(function(n,e){return n-e
}),c=a.indexOf(o.windowId),a.length>=2||a.length>0&&c<0)return d=r.g.nextWindow,
s=l?1:(null==d?1:"boolean"==typeof d?d?1:-1:0|+d||1)*(T?1:r.x),w=l?0:c>=0?s>0?c+1:c:0,
y=a[I=((I=(I=((I=s>0?w+s-1:w+s)%a.length+a.length)%a.length)!==c?I:I+(s>0?1:-1))%a.length+a.length)%a.length],
_=n.find(function(n){return n.id===y}),g=x&&!f&&_&&"minimized"===_.state?t&&"maximized"===t.state?t.state:"normal":"",
void u.gn.query({windowId:y,active:true},function(n){
var e=n[0],t=b(e),f=null==t||t>e.index,l=null,a=false,d=null,s=function(){var n;false!==a?(x||a&&u.selectTab(a.id),
u.gn.move(o.id,{index:null!=t?t:-1,windowId:y},function(e){if(u.m())return i(0),u.selectWnd(o),u.m()
;Promise.resolve(n).then(function(){return i(1)}),l=l||[o]
;for(var t=0;t<l.length;t++)l[t].id!==e.id&&u.gn.move(l[t].id,{index:e.index+t,windowId:e.windowId},u.m),
l[t].pinned&&u.gn.update(l[t].id,{pinned:true});r.O&&r.O.s.b===e.id&&p()}),x&&(g&&u.Nn.update(y,{state:g}),
u.selectWnd(e)),n=false!==r.g.active&&new Promise(function(n){u.selectTab(o.id,n)}),
x&&a&&u.selectTab(a.id)):v.wu(o,!f,d).then(function(n){a=n,s()})}
;T&&(c>=0||r.kn>=52)&&(h||1!==m(r.x))?v.Mn(true,0,function(n,e){if(d=n.slice(0),o=n[e[1]],n=n.slice(e[0],e[2]),
r.kn<52&&(n=n.filter(function(n){return n.incognito===o.incognito})),h){if(!(n=v.on(o,n,h)).length)return void i(0)
;o=n.includes(o)?o:n[0]}a=(1!==(l=n).length||!l[0].active)&&null,s()},[],i):c>=0||r.kn>=52?s():(a=null,
u.makeTempWindow_r(o.id,o.incognito,s))})}else n=t?[t]:[]
;T&&m(r.x)>1?e.moveTabToNewWindow(i):v.wu(o,false).then(function(e){x||e&&u.selectTab(e.id),u.makeWindow({tabId:o.id,
incognito:o.incognito,focused:x},1===n.length&&"normal"===n[0].type?n[0].state:"",function(n){n&&(p(),
x&&e&&u.selectTab(e.id)),o.pinned&&n&&n.tabs&&n.tabs[0]&&u.tabsUpdate(n.tabs[0].id,{pinned:true}),i(!!n)})})}
var o=n[0],f=false===r.g.minimized||false===r.g.min,l=r.g.last
;l?v.hu("normal",false,o.incognito,o.windowId,f).then(function(n){!n||n instanceof Array?t(n[0].slice(0,1),n[1]):t([n])
}):u.Nn.getAll(function(n){t(n.filter(function(n){
return n.incognito===o.incognito&&"normal"===n.type&&(!f||"minimized"!==n.state)}),n.find(function(n){
return n.id===o.windowId}))})},e.moveTabToNextWindow=y,_=function(n,i,t,o){var f,l,c,d=i[0],s=i[1],w=i[2],p={
bypassCache:true===(r.g.hard||r.g.bypassCache)},b=u.gn.reload,I=n
;if(m(r.x)<2||r.g.single)b(n[o?s:d].id,p,a.getRunNextCmdBy(0));else{if(f=n[s],l=r.g.filter,n=n.slice(d,w),l){
if(!(n=v.on(f,n,l)).length)return void t(0);f=n.includes(f)?f:n[0]}
if(n.length>20&&a.rn())a.T("reloadTab",n.length).then(e.reloadTab.bind(null,I,[d,s,w],t));else for(c of(b(f.id,p,a.getRunNextCmdBy(0)),
n))c!==f&&b(c.id,p)}},e.reloadTab=_,g=function(n,i,t){
var o,f,l,c,d,s,p,b,I,y,_,g,T,k,z,j,P=r.g.highlighted,A=r.g.goto||(r.g.left?"left":""),M=(A+"").split(/[\/,;\s]/),O=M.length>1?M[m(r.x)>1?1:0]:A+"",R="near"===O||"reverse"===O||O.startsWith("back"),U=O.startsWith("forw"),N=R?r.x>0:U?r.x<0:"left"===O,W=R?r.x<0:U?r.x>0:"right"===O,$=O.includes("previous"),C=$&&O.includes("only")
;if(i){if(!t||!t.length)return n(0),u.m();if(f=t.length,l=u.selectIndexFrom(t),c=t[l],d=1,s=l,p=l+1,m(r.x)>1&&f>1){
if(b=0,t[0].pinned!==c.pinned&&!(r.x<0&&t[l-1].pinned))for(;t[b].pinned;)b++
;if((d=(I=v.getTabRange(l-b,f-b,f))[1]-I[0])>20&&a.rn()&&i<3)return void a.T("removeTab",d).then(e.removeTab.bind(null,n,2,t))
;d>1&&(s=b+I[0],p=b+I[1])}else if(P){if(_="no-current"===P,(d=(y=t.filter(function(n){return n.highlighted&&n!==c
})).length+1)>1&&(_||d<f)&&u.gn.remove(y.map(function(n){return n.id}),u.m),_)return void n(d>1)
}else if(r.g.filter&&0===v.on(c,[c],r.g.filter).length)return void n(0)
;if(!s&&d>=f&&true!==(null!=r.g.mayClose?r.g.mayClose:r.g.allow_close))i<2?u.getCurTabs(e.removeTab.bind(null,n,3)):u.Nn.getAll(x.bind(null,n,c,t));else if(i<2&&(C?(T=v.Vn())>=0&&(g=u.yn(u.tabsGet,T)):(W||N&&s>0)&&(g=u.yn(u.gn.query,{
windowId:c.windowId,index:N?s-1:s+1}).then(function(n){return n&&n[0]})),g))g.then(function(r){
r&&r.windowId===c.windowId&&u.On(r)?(u.selectTab(r.id),
u.gn.remove(c.id,u.Tn(n))):u.getCurTabs(e.removeTab.bind(null,n,3))});else{if(k=f,
d>=f);else if($)k=(z=!C&&p<f&&!r.Hn.has(t[p].id)?t[p]:t.filter(function(n,e){return(e<s||e>=p)&&r.Hn.has(n.id)
}).sort(w.Bn.Kn)[0])?t.indexOf(z):f;else if(N||W){
for(j=k=N?s>0?s-1:p:p<f?p:s-1;j>=0&&j<f&&(j<s||j>=p)&&!u.On(t[j]);)j+=j<s?-1:1;k=j>=0&&j<f?j:k}
k>=0&&k<f&&u.selectTab(t[k].id),h(c,t,s,p,n)}
}else((o=m(r.x)>1||P||$&&!C)?u.getCurTabs:u.getCurTab)(e.removeTab.bind(null,n,o?2:1))},e.removeTab=g,
x=function(n,e,i,t){var o,f,l=false;t=t.filter(function(n){return"normal"===n.type}),
"always"===r.g.keepWindow?l=!t.length||t.some(function(n){return n.id===e.windowId}):t.length<=1?(l=true,
(f=t[0])&&(f.id!==e.windowId?l=false:f.incognito&&!u.Pn(r.newTabUrl_f)&&(o=f.id))):e.incognito||1===(t=t.filter(function(n){
return!n.incognito})).length&&t[0].id===e.windowId&&(o=t[0].id,l=true),l&&u.tabsCreate({index:i.length,url:"",windowId:o
},a.getRunNextCmdBy(3)),h(e,i,0,i.length,l?null:n)},h=function(n,e,i,t,o){var f,l,a,c=Math.max(0,e.indexOf(n))
;u.gn.remove(n.id,o?u.Tn(o):u.m),l=e.slice(c+1,t),a=e.slice(i,c),r.x<0&&(l=(f=[a,l])[0],a=f[1]),
l.length>0&&u.gn.remove(l.map(function(n){return n.id}),u.m),a.length>0&&u.gn.remove(a.map(function(n){return n.id
}).reverse(),u.m)},e.toggleMuteTab=function(n){var e,i,t,o,a,c,d,s;e=r.g.filter,i=r.g.currentWindow,
o=null!=(t=r.g.others)?t:r.g.other,r.g.all||i||e||o?(c=function(i){
var t,l,c=o?r.O?r.O.s.b:r.hn:-1,d=0===i.length||-1!==c&&1===i.length&&i[0].id===c
;if(null!=r.g.mute)d=!!r.g.mute;else for(t of i)if(t.id!==c&&!u.isTabMuted(t)){d=true;break}
if(!e||(i=v.on(a,i,e)).length){for(t of(l={muted:d},i))t.id!==c&&d!==u.isTabMuted(t)&&u.tabsUpdate(t.id,l)
;f.showHUDEx(r.O,d?"mute":"unmute",0,[[-1===c?"All":"Other"]]),n(1)}else n(0)},d=v.getNecessaryCurTabInfo(e),
s=i&&r._n>=0?{audible:true,windowId:r._n}:{audible:true},d?d.then(function(n){a=n,u.gn.query(s,c)
}):u.gn.query(s,c)):u.getCurTab(function(e){var i=e[0],t=!u.isTabMuted(i),o=null!=r.g.mute?!!r.g.mute:t
;o===t&&u.tabsUpdate(i.id,{muted:o}),f.showHUD(l.A(o?"muted":"unmuted")),n(1)})},e.togglePinTab=function(n,e,i){
var t,o,f,l,c,d,s,w,p=r.g.filter,b=e[1],I=n[b];if(n=p?v.on(I,n,p):n,t=!p||n.includes(I)?!I.pinned:!!n.find(function(n){
return!n.pinned}),o={pinned:t},f=t?0:1,l=0,m(r.x)>1&&t)for(;n[l].pinned;)l++
;for(d=l+(c=v.getTabRange(b-l,n.length-l,n.length))[f]-f,
s=l+c[1-f]-f,w=[];d!==s;d+=t?1:-1)(t||n[d].pinned)&&w.push(n[d])
;(s=w.length)?(s<=30||!a.rn()?Promise.resolve(false):a.T("togglePinTab",s)).then(function(n){n&&(w.length=1)
}).then(function(){var n,e=w.includes(I)?I.id:w[0].id;for(n of w)u.tabsUpdate(n.id,o,n.id===e?u.Tn(i):u.m)}):i(0)},
e.toggleTabUrl=function(n,e){var c,s=u.getTabUrl(n[0]),v=r.g.reader,w=r.g.keyword
;if(s.startsWith(r.Q.U))return f.complainLimits(l.A(v?"noReader":"openExtSrc")),void e(0);v&&w?(c=o.Sn({u:s
}))&&c.k===w?(a.overrideCmdOptions({keyword:""}),d.openUrlWithActions(c.u,0,true,n)):(s=t.Ir(c&&r.g.parsed?c.u:s,w),
d.openUrlWithActions(s,9,true,n)):v?r.Xn&&i.eu.test(s)?(s=s.startsWith("read:")?i.Zn(s.slice(s.indexOf("?url=")+5)):"read://".concat(new URL(s).origin.replace(/:\/\/|:/g,"_"),"/?url=").concat(i.gr(s)),
d.openUrlWithActions(s,9,true,n)):(f.complainLimits(l.A("noReader")),
e(0)):(s=s.startsWith("view-source:")?s.slice(12):"view-source:"+s,d.openUrlWithActions(s,9,true,n))},
e.$n=function(n,e,i,t){var o,f,l,c,d,s,v=n.id,w=1===e;if(e&&u.jn()&&(false!==t||null==u.getGroupId(n)))return o=0,f=-1,
l=function(){var n=u.m();if(n)return u.jn().restore(null,a.getRunNextCmdBy(0)),f>=0&&u.gn.remove(f),f=0,n
;(o+=1)>=5||setTimeout(function(){u.tabsGet(v,l)},50*o*o)},w&&u.tabsCreate({url:"about:blank",active:false,
windowId:n.windowId},function(n){f?f=n.id:u.gn.remove(n.id)}),void u.gn.remove(v,function(){return u.tabsGet(v,l),u.m()
});d=u.isTabMuted(n),c=function(n){d!==u.isTabMuted(n)&&u.tabsUpdate(n.id,{muted:d})},s={windowId:n.windowId,
index:n.index,url:u.getTabUrl(n),active:n.active,pinned:n.pinned,openerTabId:n.openerTabId},i&&(s=Object.assign(i,s)),
null!=s.index&&s.index++,u.openMultiTabs(s,1,true,[null],t,n,function(n){n&&c&&c(n),
n?a.runNextOnTabLoaded(r.g,n):a.runNextCmd(0)}),u.gn.remove(v)},e.Cn=function(n,e,i){var t=null
;return __awaiter(void 0,void 0,void 0,function*(){
var i,o,f,l,a,c,d,s,v,w=e?e.window?u.selectFrom(e.window.tabs):e.tab:null;w&&(t=w),
w&&(e.window||w.windowId!==n&&0===w.index)&&((f=/^(file|ftps?|https?)/.test(o=w.url)||o.startsWith(r.Yn))||!o.startsWith(location.protocol)||o.startsWith(r.Yn)||(f=!!(l=new URL(o).host)&&true===r.el.get(l)),
f&&((a=e.window)||(a=(c=yield u.yn(u.gn.query,{windowId:w.windowId,index:1
}))&&c.length?null:yield u.yn(u.Nn.get,w.windowId)),a&&"popup"!==a.type&&(d=u.yn(u.gn.create,{url:"about:blank",
windowId:a.id
}),yield u.yn(u.gn.remove,w.id),s=yield d,v=u.yn(u.jn().restore),t=(null===(i=yield v)||void 0===i?void 0:i.tab)||null,
s&&(yield u.gn.remove(s.id)))))}).then(function(){return __awaiter(void 0,void 0,void 0,function*(){
return i&&(yield u.yn(u.tabsUpdate,i,{active:true}),r._n!==n&&(yield u.yn(u.Nn.update,n,{focused:true}))),t})})},
e.toggleWindow=function(n){var e,i,t=r.g.target,o=r.g.states
;o=(o="string"==typeof o?o.trim().split(/[\s,;]+/):o)||["normal","maximized"],e=r._n,
(i=t&&"current"!==t&&"all"!==t?r.yu:e)<0?n(0):u.yn(u.Nn.get,i).then(function(n){return n||u.yn(u.Nn.get,r._n)
}).then(function(f){return __awaiter(void 0,void 0,void 0,function*(){var l,a,c,d,s,v
;if(f)for(v of(l="other"===t||"others"===t?yield u.Rn(u.Nn.getAll).then(function(n){
return(n=null==n?void 0:n.filter(function(n){return n.id!==e&&n.id!==i&&"devtools"!==n.type}))?n.map(function(n){
return n.id}):[]}):[],a={},o instanceof Array&&(c=["normal","maximized","fullscreen","minimized"],o=o.map(function(n){
var e;return null!==(e=c.find(function(e){return e.startsWith(n)}))&&void 0!==e?e:"current keep".includes(n)?"":" "
}).filter(function(n){return" "!==n
}),d=r.x>1?r.x-2:o.indexOf(f.state)+1,((s=o.length>0&&o[d%o.length]||f.state)!==f.state||l.length>0)&&(a.state=s)),
Object.keys(a).length&&u.Nn.update(i,a,u.Tn(n)),l))u.Nn.update(v,a,u.m);else n(0)})})}});