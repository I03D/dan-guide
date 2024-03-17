"use strict"
;__filename="background/sync.js",define(["require","exports","./store","./utils","./browser","./settings"],function(n,t,e,i,u,r){
var o,l,f,c,s,a,y,d,v,S,g,p,b,m,O,j,w,N,J,T,_,h,k,x,D,q,M;Object.defineProperty(t,"__esModule",{value:true}),o=i.Eu({
findModeRawQueryList:1,innerCSS:1,keyboard:1,newTabUrl_f:1,vomnibarPage_f:1}),l=u.t.storage,f="sync.cloud:",s=null,
a=null,y="",d=null,v=null,S=0,g=null,p=function(){return c||(c=l&&l.sync)},b=function(n){m(n,"sync")},m=function(n,t){
var e,u,r;if("sync"===t)if(e=function(n){var t,e,u,r;if(d){
for(t in i.Eu(n),d)!(u=(e=t.split(":")[0])===t)&&e in d||j(e,null!=(r=u?d[t]:null)?r.newValue:n[e],n);d=null}},i.Eu(n),
d?Object.assign(d,n):d=n,g)g.then(function(){return m({},t)});else for(u in n=d,d=null,n){if(r=n[u],
8===(u.includes(":")?8:j(u,null!=r?r.newValue:null)))return d=n,void p().get(e);delete n[u]}},
O=console.log.bind(console,"[%s]",{toString:function(){
return new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")}}),
j=function(n,t,i){var u,o,l,f,c,s,a,y=t&&"object"==typeof t&&t.$_serialize||"";if(n in r.V&&D(n)){if(l=r.V[n],y){
if("split"===y&&!i)return 8;if(8===(t=h(n,t,i)))return}
null!=t?(f=e.z[n],(a="object"!=typeof l||!t||"object"!=typeof t)?(s=t,c=f):(s=JSON.stringify(t),c=JSON.stringify(f)),
s!==c&&(s===(a?l:JSON.stringify(l))&&(t=l),
g||O("sync.this:","update",n,"string"==typeof t?(t.length>32?t.slice(0,30)+"...":t).replace(/\n/g,"\\n"):t),
w(n,t))):e.z[n]!=l&&(g||O("sync.this:","reset",n),w(n,l))
}else(o=y||!r.$o?-1:r.ho.indexOf(n))>=0&&(null!=(u=e.il.get(n))?u+"":null)!==(null!=t?t+"":null)&&(r.nl(n,null!=t?t:null),
r.qo(o))},w=function(n,t){y=n,r.ga(n,t),y="",n in r.K&&r.$u({N:6,d:[r.K[n]]})},N=function(n,t){
var e=D(n)?1:r.ho.includes(n)?2:0;e&&n!==y&&(s||(setTimeout(x,800),s=i.i()),1===e?s[n]=t:(a||(a=[])).push(n))},
J=function(n){return n.replace(/[<`\u2028\u2029]/g,function(n){return"<"===n?"`l":"`"===n?"`d":"\u2028"===n?"`r":"`n"})
},T=function(n){return n.replace(/"|\\[\\"]/g,function(n){return'"'===n?"`q":'\\"'===n?"`Q":"`S"})},_=function(n){
var t={Q:'\\"',S:"\\\\",d:"`",l:"<",n:"\u2029",q:'"',r:"\u2028"};return n.replace(/`[QSdlnqr]/g,function(n){
return t[n[1]]})},h=function(n,t,e){var i,u,o,l,f="";switch(t.$_serialize){case"split":for(i=t.k,u=t.s,o=0;o<u;o++){
if(!(l=e[n+":"+o])||"string"!=typeof l||!l.startsWith(i))return 8;f+=l.slice(i.length)}break;case"single":
return JSON.parse(_(JSON.stringify(t.d)));default:
return O("Error: can not support the data format in synced settings data:",n,":",t.$_serialize),null}
return"string"==typeof r.V[n]?f=_(f):(f=_(JSON.stringify(f)),JSON.parse(f.slice(1,-1)))},k=function(n,t,e){
var i,u,o,l,f,c,s,a,y,d,S,g,p,b,m,O;if(t&&!("string"!=typeof t?"object"!=typeof t:t.length<8192/6-40)&&(u="",
!((i=JSON.stringify(t)).length<8192/6-40||(o=function(n){return n.replace(/[^\x00-\xff]/g,function(n){
var t=n.charCodeAt(0);return"\\u"+(t>4095?"":"0")+t.toString(16)})},l=true,f=i.length,
3*((c=(i=J(i)).length)-f)+3*f<8093)))){
if((u=l?e.encode(i):i=o(i)).length<8093)return(l?u.length+4*(c-f):Math.ceil((u.length-c)/5*3+6*(c-f)+(f-(u.length-c)/5-(c-f))))<8093?void 0:i
;for(s=0,a=Date.now().toString(36)+":",y={},i="string"==typeof r.V[n]?i.slice(1,-1):T(i),l?(v||(v=new TextDecoder),
u=e.encode(i)):u=o(i),d=0,S=u.length;d<S;){if(g=Math.min(d+8134,S),p=void 0,b=0,l){for(;g<S&&128==(192&u[g]);g--);
p=v.decode(u.subarray(d,g))}else p=u.slice(d,g);if(i=p.slice(-6),(b=g<S?i.lastIndexOf("\\"):-1)>0&&b>i.length-2)p+="b",
b=1;else if(b>0&&"u"===i[b+1])for(m=b=i.length-b;m++<6;p+="b");else b=0;if(p=JSON.parse('"'.concat(p,'"')),
b&&((O=p.endsWith("b"))||(g-=b),p=p.slice(0,b>1&&O?b-6:-1)),y[n+":"+s++]=a+p,d=g,s>=13)break}return y[n]={
$_serialize:"split",k:a,s:s},y}},x=function(){var n,t,o,l,c,y,d,S,g=s,b=a,m=[],j=[],w=[],J=i.i(),T={};if(s=a=null,
g&&e.Lo===N){
for(t in n=Object.keys(g).length>0?new TextEncoder:null,g)for(y="string"==typeof(c=r.V[o=t])||"object"==typeof c&&"vimSync"!==o?0:13,
null!=(l=g[o])?(d=k(o,l,n))&&"object"==typeof d?(J[o]=d,y=d[o].s):(T[o]=d?{$_serialize:"single",d:JSON.parse(d)}:l,
j.push(o)):m.push(o);y<13;y++)w.push(o+":"+y);for(o in v=n=null,b&&m.push.apply(m,b),w.push.apply(w,m),
m.length>0&&O(f,"reset",m.join(", ")),w.length>0&&p().remove(w),j.length>0&&(O(f,"update",j.join(", ")),p().set(T)),
S=function(n){p().set(J[n],function(){var t=u.m()
;return t?O("Failed to update",n,":",t.message||t):O(f,"update (serialized) "+n),t})},J)S(o)}},D=function(n){
return!(n in o)},q=function(n){e.vo=null,S&&clearTimeout(S),S=setTimeout(function(){S=0,r.So.get(function(n){
var t,u,o,l,f,c,s,a,y=r.zo;if(y.length){for(O("storage.local: update settings from localStorage"),i.Eu(n),t=i.i(),u=0,
o=y.length;u<o;u++)f=n[l=y.key(u)],l in r.V?(s=c=e.z[l],a=f,"object"==typeof r.V[l]&&(a=JSON.stringify(f),
s=JSON.stringify(c)),s!==a&&r.ga(l,c)):n[l]!==f&&"i18n_f"!==l&&(t[l]=f);Object.keys(t).length>0&&r.So.set(t),y.clear()}
})},n)},M=function(n,t){var u,o,l,c;if(i.Eu(n),u=n.vimSync||null==e.z.vimSync&&e.To,e.at.vimSync(false,"vimSync"),u){
for(c in n.vimSync||(O(f,"enable vimSync"),n.vimSync=true,p().set({vimSync:true})),o=[],l=r.zo,
e.z)e.z[c]!==r.V[c]&&(!(c in n)&&D(c)&&("keyLayout"===c&&2&r.$o||o.push(c)),l&&l.length&&l.removeItem(c))
;for(c of o)j(c,null);for(c in n)c.includes(":")||j(c,n[c],n);q(60),r._t("vimSync"),setTimeout(function(){t()},4),
O(f,"download settings")}else t()},e.at.vimSync=function(n){var t,i,u;if(p()){if(i=(t=p().onChanged)||l.onChanged,
u=t?b:m,!n)return i.removeListener(u),void(e.Lo=e.l);e.Lo!==N?(i.addListener(u),e.Lo=N,
q(60)):s&&(O(f,"save immediately"),x())}},r.st.then(function(){var n,t=e.z.vimSync
;false===t||!t&&!e.To?(e.vo=(n=true===e.vo)?null:q,n&&q(6e3),"showActionIcon"in e.at?e.te=null:setTimeout(function(){
e.te=null},1e3)):e.te?(g=e.te.then(function(n){return"showActionIcon"in e.at?e.te=null:setTimeout(function(){e.te=null
},1e3),!!n&&"install"===n.reason}).then(function(n){return new Promise(function(t){p()?p().get(function(i){
var o=u.m(),l=n&&e.To&&(o||0===Object.keys(i).length)?function(){r.ga("keyLayout",2),t()}:t;return o?(e.at.vimSync=e.l,
l(),O("Error: failed to get storage:",o,"\n\tSo disable syncing temporarily.")):M(i,l),o}):t()})}).then(function(){
e.go=null,g=null}),e.go=Promise.race([g,new Promise(function(n){setTimeout(n,800)})]).then(function(){e.go=null,
e.z.vimSync&&e.Lo!==N&&r._t("vimSync")})):r._t("vimSync")})});