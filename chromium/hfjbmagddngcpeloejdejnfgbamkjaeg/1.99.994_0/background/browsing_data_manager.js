"use strict"
;__filename="background/browsing_data_manager.js",define(["require","exports","./store","./browser","./utils","./settings","./completion_utils"],function(e,t,n,r,i,o,u){
var f,l,a,c,s,_,m,v,d,p,T,h,g;Object.defineProperty(t,"__esModule",{value:true}),
t.ie=t.oe=t.ue=t.fe=t.le=t.ae=t.ce=t.omniBlockList=void 0,f=decodeURIComponent,c=-1,s="1",_=null,v=null,d=false,
t.omniBlockList=m=null,t.ce=function(e){var t,n,r=e.slice(0,5);if("https"===r)t=8;else if("http:"===r)t=7;else{
if(!r.startsWith("ftp"))return null;t=6}return n=e.indexOf("/",t),{se:e=e.slice(t,n<0?e.length:n),_e:t}},t.ae={me:null,
ve:"",de:"",pe:0,Te:0,he:0,ge:null,be:function(){var e=r.t.bookmarks;e.onCreated.addListener(t.ae.xe),
e.onRemoved.addListener(t.ae.ke),e.onChanged.addListener(t.ae.ke),e.onMoved.addListener(t.ae.xe),
e.onImportBegan.addListener(function(){r.t.bookmarks.onCreated.removeListener(t.ae.xe)}),
e.onImportEnded.addListener(function(){r.t.bookmarks.onCreated.addListener(t.ae.xe),t.ae.xe()})},ye:function(){n.in.f=1,
t.ae.Te&&(clearTimeout(t.ae.Te),t.ae.Te=0),r.t.bookmarks.getTree(t.ae.De)},De:function(e){n.in.un=[],n.in.Un=[],
n.in.f=2,u.we.mn(2),e.forEach(t.ae.Pe),setTimeout(function(){return t.ie.Re(n.in.un)},50),
t.ae.be&&(setTimeout(t.ae.be,0),t.ae.be=null);var r=t.ae.ge;t.ae.ge=null,r&&r()},Pe:function(e,r){
var o,u,f,l,a=e.title,c=e.id,s=a||c,_=t.ae.ve+"/"+s;e.children?(n.in.Un.push({nn:c,je:_,Ie:s}),o=t.ae.ve,u=t.ae.de,
2<++t.ae.pe&&(t.ae.ve=_),t.ae.de=c,e.children.forEach(t.ae.Pe),--t.ae.pe,t.ae.ve=o,
t.ae.de=u):(l=(f=e.url).startsWith("javascript:"),n.in.un.push({nn:c,je:_,Ie:s,t:l?"javascript:":f,Le:m?t.ue(f,d?_:a):1,
u:l?"javascript:":f,Y:t.ae.de,en:r,Wn:l?f:null,Ue:l?i.Zn(f):null}))},xe:function(){var e=function(){
var r=performance.now()-n.in.En;0===n.in.f&&(r>=59900||r<-5e3?(t.ae.Te=t.ae.he=0,t.ae.ye()):t.ae.Te=setTimeout(e,3e4))}
;n.in.En=performance.now(),n.in.f<2||(t.ae.Te=setTimeout(e,6e4),n.in.f=0)},ke:function(e,r){
var i,o,u,f,a,c,s,_=n.in.un,v=r&&r.title,p=_.findIndex(function(t){return t.nn===e});if(p>=0)if(o=(i=_[p]).u,u=r&&r.url,
l&&(null==v?o!==i.t||!r:null!=u&&o!==u)&&n.Me.has(o)&&t.le.Ee&&t.le.Oe(o)<0&&n.Me.delete(o),
null!=v)i.je=i.je.slice(0,-i.Ie.length)+(v||i.nn),i.Ie=v||i.nn,u&&(i.u=u,i.t=t.ie.Ae(u,i),t.ie.Be()),
m&&(i.Le=t.ue(i.Wn||i.u,d?i.je:i.Ie)),n.in.En=performance.now();else{for(_.splice(p,1),
f=r?p:_.length;f<_.length;f++)_[f].Y===i.Y&&_[f].en--;r||t.ae.xe()}else if(n.in.Un.find(function(t){return t.nn===e})){
if(null==v&&!t.ae.he&&l){for(s of(a=n.Me,c=t.le.Oe,t.le.Ee?_:[]))a.has(o=s.u)&&c(o)<0&&a.delete(o);t.ae.he=1}t.ae.xe()}}
},n.X=function(e,r){var o,u,f,l,a,c,s;if(2!==n.in.f)return o=i.Gn(),t.ae.ge=o.Ln,t.ae.ye(),o.Jn.then(n.X.bind(0,e,r))
;if(f=(u=!r&&e.includes("/"))?(e+"").replace(/\\\/?|\//g,function(e){return e.length>1?"/":"\n"
}).split("\n").filter(function(e){return e}):[],!e||u&&!f.length)return Promise.resolve(false)
;if(r)return Promise.resolve(n.in.un.find(function(t){return t.nn===e})||n.in.Un.find(function(t){return t.nn===e
})||null)
;for(c of(l=u?"/"+f.slice(1).join("/"):"",a=u?"/"+f[0]+l:"",n.in.un))if(u&&(c.je===a||c.je===l)||c.Ie===e)return Promise.resolve(c)
;for(c of n.in.Un)if(u&&(c.je===a||c.je===l)||c.Ie===e)return Promise.resolve(c);for(c of(s=null,
n.in.un))if(c.Ie.includes(e)){if(s){s=null;break}s=c}return Promise.resolve(s)},p=function(e){e&&e()},t.le={Ee:false,
Se:0,Ve:null,We:function(e){t.le.Ve?e&&t.le.Ve.push(e):(n.Ce.qe=Date.now(),t.le.Ve=e?[e]:[],
t.le.Se||r.t.history.search({text:"",maxResults:2e4,startTime:0},function(e){setTimeout(t.le.He,0,e)}))},He:function(e){
var i,o,u,f,l;for(t.le.He=null,i=0,o=e.length;i<o;i++)(f=(u=e[i]).url).length>2e3&&(f=t.le.ze(f,u)),e[i]={t:f,
Ie:u.title,Fe:u.lastVisitTime,Le:1,u:f};if(m)for(l of e)0===t.ue(l.t,l.Ie)&&(l.Le=0);setTimeout(function(){
setTimeout(function(){var e,r,i,o,u,f,l,a,c=n.Ce.Ge
;for(e=c.length-1;0<e;)for(u=(o=(r=c[e]).t=t.ie.Ae(i=r.u,r)).length>=i.length;0<=--e&&!((l=(f=c[e]).u).length>=i.length)&&i.startsWith(l);)f.u=i.slice(0,l.length),
a=u?l:t.ie.Ae(l,f),f.t=u||a.length<l.length?o.slice(0,a.length):a;t.le.Je&&setTimeout(function(){
t.le.Je&&t.le.Je(n.Ce.Ge)},200)},100),n.Ce.Ge.sort(function(e,t){return e.u>t.u?1:-1}),t.le.Ee=true,
r.t.history.onVisitRemoved.addListener(t.le.Ke),r.t.history.onVisited.addListener(t.le.Ne)},100),n.Ce.Ge=e,t.le.We=p,
t.le.Ve&&t.le.Ve.length>0&&setTimeout(function(e){for(var t of e)t()},1,t.le.Ve),t.le.Ve=null},Ne:function(e){
var r,i,o,f,l,a,c,s,_,v=e.url;if(v.length>2e3&&(v=t.le.ze(v,e)),r=e.lastVisitTime,i=e.title,o=++n.Ce.Qe,f=n.Ce.Xe,
(l=t.le.Oe(v))<0&&n.Ce.Ye++,(o>59||o>10&&Date.now()-n.Ce.qe>3e5)&&t.le.Ze(),a=l>=0?n.Ce.Ge[l]:{t:"",Ie:i,Fe:r,
Le:m?t.ue(v,i):1,u:v},f&&(s=t.ce(v))&&((c=f.get(s.se))?(c.Fe=r,l<0&&(c.$e+=a.Le),
s._e>6&&(c.et=8===s._e?1:0)):f.set(s.se,{Fe:r,$e:a.Le,et:8===s._e?1:0})),l>=0)return a.Fe=r,void(i&&i!==a.Ie&&(a.Ie=i,
u.we.tt&&u.we.mn(1),m&&(_=t.ue(v,i),a.Le!==_&&(a.Le=_,c&&(c.$e+=_||-1)))));a.t=t.ie.Ae(v,a),n.Ce.Ge.splice(~l,0,a),
u.we.tt&&u.we.mn(1)},Ke:function(e){var r,i,o,f,l,c,s,_,m,v,d;if(a.length=0,r=n.Me,u.we.mn(1),e.allHistory){
for(o of(n.Ce.Ge=[],n.Ce.Xe=new Map,i=[],n.in.un))(f=r.get(o.u))&&i.push([o.u,f]);for(l of(r.clear(),i))r.set(l[0],l[1])
}else for(v of(c=t.le.Oe,
s=n.Ce.Ge,_=n.Ce.Xe,e.urls))(o=c(v))>=0&&(_&&s[o].Le&&(d=t.ce(v))&&(m=_.get(d.se))&&--m.$e<=0&&_.delete(d.se),
s.splice(o,1),r.delete(v))},ze:function(e,t){var n=e.lastIndexOf(":",9),r=n>0&&"://"===e.substr(n,3),o=t.title
;return e=e.slice(0,(r?e.indexOf("/",n+4):n)+320)+"\u2026",o&&o.length>160&&(t.title=i.nt(o,0,160)),e},Ze:function(){
var e=Date.now();if(n.Ce.Ye<=0);else{if(e<n.Ce.qe+1e3&&e>=n.Ce.qe)return;setTimeout(r.t.history.search,50,{text:"",
maxResults:Math.min(999,n.Ce.Qe+10),startTime:e<n.Ce.qe?e-3e5:n.Ce.qe},t.le.rt)}return n.Ce.qe=e,n.Ce.Ye=n.Ce.Qe=0,
t.ie.Be()},Je:function(e){var r,i,o,u,f,l,a,c;for(i of(t.le.Je=null,r=n.Ce.Xe,e))o=i.Fe,u=i.Le,(f=t.ce(i.u))&&(a=f._e,
(c=r.get(l=f.se))?(c.Fe<o&&(c.Fe=o),c.$e+=u,a>6&&(c.et=8===a?1:0)):r.set(l,{Fe:o,$e:u,et:8===a?1:0}))},rt:function(e){
var r,i,o,u,f=n.Ce.Ge,l=t.le.Oe;if(!(f.length<=0))for(r of e){if((i=r.url).length>2e3&&(r.url=i=t.le.ze(i,r)),
(o=l(i))<0)n.Ce.Ye--;else if(!(u=r.title)||u===f[o].Ie)continue;n.Ce.Qe--,t.le.Ne(r)}},Oe:function(e){
for(var t="",r=n.Ce.Ge,i=r.length-1,o=0,u=0;o<=i;)if((t=r[u=o+i>>>1].u)>e)i=u-1;else{if(t===e)return u;o=u+1}return~o}},
T=function(e,i,o){var u=r.jn();u?u.getRecentlyClosed({
maxResults:Math.min(Math.round(1.2*e),+u.MAX_SESSION_RESULTS||25,25)},function(e){var u,f,l,a,c,s,_,m,v,d;for(c of(u=[],
l=0,a=Date.now()-performance.now(),e||[])){if(_=null,!(s=c.tab)){if(!(_=c.window)||!_.tabs||!_.tabs.length)continue;l=1,
s=_.tabs.find(function(e){return e.active})||_.tabs[0],_.sessionId||(_=null)}(m=s.url).length>2e3&&(m=t.le.ze(m,s)),
v=s.title,(i||t.ue(m,v))&&u.push({u:m,Ie:v,it:f=(f=c.lastModified)<3e11&&f>-4e10?1e3*f:f,
ot:[d=s.windowId,(_||s).sessionId,_?_.tabs.length:0],
ut:_?" +".concat(_.tabs.length>1?_.tabs.length-1:""):d&&d!==n._n&&f>a?" +":""})}return l?setTimeout(o,0,u):o(u),r.m()
}):o([])},t.fe=T,t.ue=function(e,t){return v.test(t)||v.test(e)?0:1},t.oe={ft:function(e){var t,n
;if(m)for(t of e)for(n of m)if(n=n.trim(),t.includes(n)||n.length>9&&t.length+2>=n.length&&n.includes(t))return true
;return false},lt:function(){var e,r,i,o,u;if(n.in.un)for(e of n.in.un)e.Le=m?t.ue(e.Wn||e.u,d?e.je:e.Ie):1
;if(n.Ce.Ge)for(e of(r=n.Ce.Xe,
n.Ce.Ge))i=m?t.ue(e.u,e.Ie):1,e.Le!==i&&(e.Le=i,(u=(o=r&&t.ce(e.u))&&r.get(o.se))&&(u.$e+=i||-1))}},t.ie={
Ae:function(e,t){if(e.length>=400||e.lastIndexOf("%")<0)return e;try{return f(e)}catch(e){}
return n.Me.get(e)||(t&&a.push(t),e)},Re:function(e){for(var r,i,o=n.Me,u=a,l=-1,c=e.length;;)try{
for(;++l<c;)(r=e[l]).t=(i=r.u).length>=400||i.lastIndexOf("%")<0?i:f(i);break}catch(e){r.t=o.get(i)||(u.push(r),i)}
t.ie.Be()},Be:function(){0!==a.length&&-1===c&&(c=0,setTimeout(h,17))}},h=function(){var e,t,r,i,o=a.length
;if(!s||c>=o)return a.length=0,c=-1,void(_=null)
;for(o=Math.min(c+32,o),_=_||new TextDecoder(s);c<o;c++)(e=n.Me.get(i=(r="string"==typeof(t=a[c]))?t:t.u))?r||(t.t=e):(e=(e=i.replace(/%[a-f\d]{2}(?:%[a-f\d]{2})+/gi,g)).length!==i.length?e:i,
"string"!=typeof t?n.Me.set(t.u,t.t=e):n.Me.set(t,e));c<a.length?setTimeout(h,4):(a.length=0,c=-1,_=null)},
g=function(e){var t,n,r=new Uint8Array(e.length/3);for(t=1,n=0;t<e.length;t+=3)r[n++]=parseInt(e.substr(t,2),16)
;return _.decode(r)},n.at.omniBlockList=function(e){var r,o=[];for(r of e.split("\n"))r.trim()&&"#"!==r[0]&&o.push(r)
;v=o.length>0?new RegExp(o.map(i.ct).join("|"),""):null,d=o.join("").includes("/"),t.omniBlockList=m=o.length>0?o:null,
(n.Ce.Ge||n.in.un.length)&&setTimeout(t.oe.lt,100)},o.st.then(function(){o._t("omniBlockList")}),
n.at.localeEncoding=function(e){var r=!!e&&!(e=e.toLowerCase()).startsWith("utf"),i=s;if((s=r?e:"")!==i){try{
new TextDecoder(s)}catch(e){r=false}r?"1"!==i&&setTimeout(function(){return n.Ce.Ge&&t.ie.Re(n.Ce.Ge),t.ie.Re(n.in.un)
},100):(n.Me.clear(),a&&(a.length=0)),l!==r&&(a=r?[]:{length:0,push:n.l},l=r,c=-1)}},o._t("localeEncoding"),
n.vt.mt=function(e,n,i){switch(n){case"tab":u.we.dt(null),r.gn.remove(+e,function(){var e=r.m();return e||u.we.dt(null),
i(!e),e});break;case"history":var o=!t.le.Ee||t.le.Oe(e)>=0;r.t.history.deleteUrl({url:e}),o&&u.we.mn(1),i(o)}},
n.vt.pt=t.oe.ft});