"use strict"
;__filename="background/ports.js",define(["require","exports","./store","./utils","./browser","./exclusions","./i18n"],function(n,r,t,u,o,e,f){
var l,i,c,a,s,v,d,p,_,b,m,N,g,k,h,I,y,w,A,M;Object.defineProperty(r,"__esModule",{value:true}),
r.Ku=r.po=r.tryToKeepAliveIfNeeded_mv3_non_ff=r.getParentFrame=r.complainNoSession=r.complainLimits=r.v=r.ensuredExitAllGrab=r.showHUDEx=r.showHUD=r.safePost=r.isNotVomnibarPage=r.ensureInnerCSS=r.indexFrame=r.Hu=r.C=r.isExtIdAllowed=r.findCPort=r.bn=r.$=r.OnFreeze=r.OnConnect=r.sendResponse=void 0,
l=function(n,r){if(90!==n.H)t.pu[n.H](n,r);else{var u=t.pu[n.c](n.a,r,n.i);u!==r&&r.postMessage({N:4,m:n.i,r:u})}},
i=function(n,t,u){var o=r.Hu(n);if(o&&o.W.includes(n))try{n.postMessage({N:4,m:t,r:u})}catch(n){}},r.sendResponse=i,
r.OnConnect=function(n,r){var u,f,i,s,_,b,m,N,g,k,h,I;if(128&r)v(n,r);else{
if(f=!!(u=n.sender.documentLifecycle)&&"active"!==u,_=(s=(i=d(n)).mr)===t.vomnibarPage_f,r>7||_){
if(999===r)return void(i.b>=0&&!i.J&&o.removeTempTab(i.b,n.sender.tab.windowId,i.mr))
;if(256&r||_)return void a(n,r,_||s===t.Q.qu);if(f)return void n.disconnect()}
if(m=(b=i.b)>=0?t.a.get(b):void(b=i.b=t.getNextFakeTabId()),
(N=1!=(9&r)&&33!=(33&r)&&void 0!==m)&&null!==m.ss?(k=m.ss.as,
h=2===(g=m.ss.f)?3:1):(g=null===(k=!e.ns||8&r?null:e.rs(s,i))?0:k?1:2,h=0),i.f=g,64&r&&(i.d=h|=64),N&&(h|=4&m.d,
1024&r&&(h|=128,m.d|=128),i.d=h),8&r)4096&r&&n.postMessage({N:1,p:1&h?k:e.rs(s,i),f:3&h}),
A(m,n,r);else if(n.postMessage(4&r?{N:0,c:null,d:f,f:h,p:k}:{N:0,c:t.B,d:f,f:h,k:t.gu,m:t.ba,p:k,t:t.fa}),
f)return void n.disconnect();n.onDisconnect.addListener(c),n.onMessage.addListener(l),I=0===i.J,
N?(2&r&&(t.o&&m.c.s.f!==g&&t.r(b,g),m.c=n),I&&(m.j=n),m.W.push(n)):(t.a.set(b,{c:n,j:I?n:null,W:[n],ss:null,d:0}),
0!==g&&t.o&&t.r(b,g),void 0!==m&&p(m.W))}},c=function(n){var r,u,e=n.s.b,f=t.a.get(e)
;return f?(r=(u=f.W).lastIndexOf(n),n.s.J?(r===u.length-1?--u.length:r>=0&&u.splice(r,1),
u.length?n===f.c&&(f.c=u[0]):512&f.d||t.a.delete(e),o.m()):void(r>=0&&t.a.delete(e))):o.m()},a=function(n,r,e){
if(256&r){if(e)return n.s.b<0&&(n.s.b=8&r?t.getNextFakeTabId():t.O?t.O.s.b:t.hn),n.s.d|=256,t.zn.push(n),
n.onDisconnect.addListener(s),n.onMessage.addListener(l),void(8&r||n.postMessage({N:42,l:t.Xt,s:u.Ou(false)}))
}else n.s.b<0||t.kn<50||0===n.s.J||o.p(n.s.b,n.s.J,[t.Q._o]);n.disconnect()},s=function(n){var r=t.zn,u=r.lastIndexOf(n)
;return u===r.length-1?--r.length:u>=0&&r.splice(u,1),o.m()},v=function(n,r){var u,o;1024&r?n.disconnect():(n.s=false,
2048&r?(u=t._u(null,null))&&u.t?(u.d=null,n.postMessage({N:49,t:u.t,s:u.s}),n.onMessage.addListener(o=function(n){
u&&(clearTimeout(u.i),u.r&&u.r(n)),u=null}),n.onDisconnect.addListener(function(){o(false)
})):n.disconnect():n.onMessage.addListener(l))},d=function(n){var r=n.sender,t=r.tab;return r.tab=null,n.s={
J:r.frameId||0,d:0,f:0,an:null!=t&&t.incognito,b:null!=t?t.id:-3,mr:r.url}},p=function(n){for(var r of n)r.s.J&&_(r)},
_=function(n){try{n.s.d|=512,n.onDisconnect.removeListener(c),n.postMessage({N:15})}catch(r){return n.disconnect(),1}},
r.OnFreeze=function(n,r){r.onDisconnect.removeListener(c),r.s.J||(r.s.J=2),c(r)},b=function(n,f,l,i){var c
;return(n=n||(null===(c=t.a.get(t.hn))||void 0===c?void 0:c.j)||null)&&!l&&e.ns&&(f||e.su)?n.s.mr:new Promise(function(e){
var f=t.kn>48&&n&&n.s.J&&u.isNotPriviledged(n)?o.N():null;n?(n.s.J?f?f.getFrame:function(n,r){return r(null)
}:o.tabsGet)(f?{tabId:n.s.b,frameId:n.s.J}:n.s.b,function(t){var u=t?t.url:"";return!u&&i&&(i.N=3,r.safePost(n,i)),e(u),
o.m()}):o.getCurTab(function(n){return e(n&&n.length?o.getTabUrl(n[0]):""),o.m()})})},r.$=b,m=function(n,u,o,e){var f,l
;if(e||(t.O=e=t.O||(null===(f=t.a.get(t.hn))||void 0===f?void 0:f.j)),
"string"!=typeof(l=r.$(e,u,o,n)))return l.then(function(r){return n.u=r,r&&t.pu[n.H](n,e),r});n.u=l,t.pu[n.H](n,e)},
r.bn=m,r.findCPort=function(n){var r=t.a.get(n&&n.s.b>=0?n.s.b:t.hn);return r?r.c:null},r.isExtIdAllowed=function(n){
var r,u,o=null!=n.id?n.id:"unknown_sender",e=n.url,f=n.tab,l=t.el,i=l.get(o)
;return true!==i&&f&&(u=(r=t.a.get(f.id))?r.ol:null,r&&(null==u||u!==o&&"string"==typeof u)&&(r.ol=null==u?o:2)),
null!=i?i:e===t.vomnibarPage_f||(console.log("%cReceive message from an extension/sender not in the allow list: %c%s","background-color:#fffbe5","background-color:#fffbe5;color:red",o),
l.set(o,false),false)},r.C=function(){return t.a.get(t.O?t.O.s.b:t.hn)},r.Hu=function(n){return t.a.get(n.s.b)},
r.indexFrame=function(n,r){var u,o=t.a.get(n);for(u of o?o.W:[])if(u.s.J===r)return u;return null},
r.ensureInnerCSS=function(n){if(8&n.d)return null;var r=t.a.get(n.b);return r&&(r.d|=4),n.d|=12,t.bo},
r.isNotVomnibarPage=function(n,r){var t=n.s,u=t.d
;return!(256&u)&&(r||2048&u||(console.warn("Receive a request from %can unsafe source page%c (should be vomnibar) :\n %s @ tab %o","color:red","color:auto",t.mr.slice(0,128),t.b),
t.d|=2048),true)},r.safePost=function(n,r){try{var t=512&n.s.d;return t||n.postMessage(r),t?0:1}catch(n){return 0}},
N=function(n,t){r.showHUD(t+"",n)},g=function(n,u){if("string"==typeof n){var o=14===u||15===u
;o&&(n.startsWith(t.Q.U+"-")&&n.includes("://")&&(n=n.slice(n.indexOf("/",n.indexOf("/")+2)+1)||n),
n=n.length>41?n.slice(0,41)+"\u2026":n&&n+(t.No?"\u3002":".")),t.O&&!r.safePost(t.O,{N:11,H:r.ensureInnerCSS(t.O.s),
k:o&&n?20:u||1,t:n})&&(t.O=null)}else n.then(N.bind(null,u))},r.showHUD=g,k=function(n,t,u,o,e){if(n){var l=e||f.Yu(t,o)
;"string"==typeof l?r.safePost(n,{N:11,H:r.ensureInnerCSS(n.s),k:1,d:u,t:l}):l.then(r.showHUDEx.bind(null,n,"NS",u,[]))}
},r.showHUDEx=k,r.ensuredExitAllGrab=function(n){var r,t={N:8};for(r of n.W)4&r.s.d||(r.s.d|=4,r.postMessage(t));n.d|=4
},r.v=function(n,r,o){var e,f=u.tu(t.a),l=t.hn,i=function(u){var o=t.a.get(u),e=0
;return void 0!==o&&(512&o.d&&n&&(o.d|=n),e=Math.min(o.W.length,8),r(o)),e}
;f.length>=10?((e=f.indexOf(l))>=0&&(f.splice(e,1),i(l)),u.ko(f,i,o)):f.forEach(i)},h=function(n){
r.showHUDEx(t.O,"notAllowA",0,[n])},r.complainLimits=h,I=function(){r.complainLimits("control tab sessions")},
r.complainNoSession=I,y=function(n,u,e){return u&&o.N()?1===e&&t.kn>48?o.yn(o.N().getFrame,{tabId:n,frameId:u
}).then(function(t){var u=t?t.parentFrameId:0;return u>0?r.indexFrame(n,u):null}):o.yn(o.N().getAllFrames,{tabId:n
}).then(function(t){var o,f=false,l=u;if(!t)return null;do{for(o of(f=false,t))if(o.frameId===l){f=(l=o.parentFrameId)>0
;break}}while(f&&0<--e);return l>0&&l!==u?r.indexFrame(n,l):null}):Promise.resolve(null)},r.getParentFrame=y,
w=function(){var n,r,o,e,f,l,i,c,a=performance.now();for(r of t.zn)1024&r.s.d?(o=r.s.d!==t.hn)&&r.postMessage({N:48,d:o
}):r.s.d|=1024;for(i of(0,f=[],t.a.forEach(function(n,r){var u=n.W.length&&r>=0&&t.Hn.get(r)||0;u>0&&f.push(u)}),
f.sort(function(n,r){return r-n}),e=Math.max(a-288e3,f.length?f[Math.min(5,f.length-1)]-1e3:0),l=[],
t.a.forEach(function(n,r){var o,f,i=n.W,c=i.length;if(c){for(f of(o=[],i))1024&f.s.d?o.push(f):f.s.d|=1024
;if(o.length&&(r>=0&&t.Hn.get(r)||0)<e&&r!==t.hn&&(1===c&&!(131072&n.d)&&i[0]===n.j||i.some(u.isNotPriviledged))){
for(f of(n.d|=512,o))f.s.d|=512;l.push(n)}}}),l)){for(r of(o=!0,c=[],i.W))512&r.s.d?(r.disconnect(),
r.s.J&&(i.d|=131072)):c.push(r);i.W.length=0,c.length&&(n=i.W).push.apply(n,c)}},
r.tryToKeepAliveIfNeeded_mv3_non_ff=function(){};r.po=function(n,r){
(131072&n.d||u.isNotPriviledged(n.c))&&(o.p(n.c.s.b,-1,null,function(n,r){"object"==typeof VApi&&VApi&&VApi.q(0,r)
},[0,512|(r?8:0)|126976&n.d]),n.d&=-258561)},A=function(n,u,e){u.s.d|=16&e&&8,n||r.po({c:u,j:null,W:[],ss:null,d:131072
},0);var f=e;if(!(512&e)){if(!(2&e&&n&&512&n.d))return;(131072&(f=258048&n.d)||u.s.J)&&r.po(n,0)}8192&f&&u.postMessage({
N:6,d:t.B}),32768&f&&u.postMessage({N:9,m:t.ba,t:t.fa,k:65536&f?t.gu:null}),16384&f&&8&u.s.d&&(u.s.d|=32,u.postMessage({
N:11,H:t.bo,f:o.k(u.s)}))},M=function(n,t){var e,f,l=u.Gn(),i=n&&(t?n.c:n.j);return n&&(!i||512&i.s.d)?(r.po(n,0),
/^(?:http|file|ftp)/i.test(n.c.s.mr)||o.selectTab(n.c.s.b,o.selectWndIfNeed),e=0,f=setInterval(function(){e++
;var r=t?n.c:n.j;5!==e&&(!r||512&r.s.d)||(clearInterval(f),l.Ln())},33)):l.Ln(),l.Jn},r.Ku=M,setInterval(w,144e3)});