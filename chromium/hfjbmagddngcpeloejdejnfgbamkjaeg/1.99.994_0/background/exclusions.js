"use strict"
;__filename="background/exclusions.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./settings","./ports"],function(n,t,u,e,r,o,i,l){
var f,c,s,a,v,d,m,p,$,g;Object.defineProperty(t,"__esModule",{value:true
}),t.lu=t.fu=t.rs=t.cu=t.su=t.ns=t.sr=t.cr=t.au=void 0,t.au=function(n,t){var u,r
;return t=t&&t.replace(/<(\S+)>/g,"$1"),
"^"===n[0]?(u=e.nr(n.startsWith("^$|")?n.slice(3):n,"",0))||console.log("Failed in creating an RegExp from %o",n):"`"===n[0]&&((r=e.vu(n.slice(1),0))||console.log("Failed in creating an URLPattern from %o",n)),
u?{t:1,v:u,k:t}:r?{t:3,v:{p:r,s:n.slice(1)},k:t}:{t:2,
v:n.startsWith(":vimium://")?o.du(n.slice(10),false,-1):n.slice(1),k:t}},t.cr=function(n){var t,u,r,i,l
;return"^"===n[0]?(n=n.startsWith("^$|")?n.slice(3):n,
t=".*$".includes(n.slice(-2))?n.endsWith(".*$")?3:n.endsWith(".*")?2:0:0,n=0!==t&&"\\"!==n[n.length-t]?n.slice(0,-t):n,
(u=e.nr(n,""))?{t:1,v:u}:null):"`"===n[0]?(r=n.slice(1),(i=e.vu(r))?{t:3,v:{p:i,s:r}
}:null):"localhost"===n||!n.includes("/")&&n.includes(".")&&(!/:(?!\d+$)/.test(n)||e.mu(n,6))?(n=(n=(n=n.toLowerCase()).endsWith("*")?n.slice(0,/^[^\\]\.\*$/.test(n.slice(-3))?-2:-1):n).startsWith(".*")&&!/[(\\[]/.test(n)?"*."+n.slice(2):n,
l=void 0,
(u=e.nr("^https?://"+(n.startsWith("*")&&"."!==n[1]?"[^/]"+n:(l=n.replace(/\./g,"\\.")).startsWith("*")?l.replace("*\\.","(?:[^./]+\\.)*?"):l),"",0))?{
t:1,v:u}:n.includes("*")?null:{t:2,v:"https://"+(n.startsWith(".")?n.slice(1):n)+"/"}):{t:2,
v:(t=(n=(n=(":"===n[0]?n.slice(1):n).replace(/([\/?#])\*$/,"$1")).startsWith("vimium://")?o.du(n.slice(9),false,-1):n.startsWith("extension:")?"chrome-"+n:n).indexOf("://"))>0&&t+3<n.length&&n.indexOf("/",t+3)<0?n+"/":n
}},t.sr=function(n,t){return 1===n.t?n.v.test(t):2===n.t?t.startsWith(n.v):n.v.p.test(t)},t.ns=f=false,t.su=c=false,
s=false,a=[],v=function(n){a=n.map(function(n){return t.au(n.pattern,n.passKeys)})},d=function(n){
return(n?[t.au(n,"")]:a).map(function(n){return{t:n.t,v:1===n.t?n.v.source:2===n.t?n.v:n.v.s}})},t.cu=d,m=function(n,r){
var o,i,l,f,c="";for(i of a)if(1===i.t?i.v.test(n):2===i.t?n.startsWith(i.v):i.v.p.test(n)){
if(0===(l=i.k).length||"^"===l[0]&&l.length>2||s)return l&&l.trim();c+=l}
return!c&&r.J&&n.lastIndexOf("://",5)<0&&!e.eu.test(n)&&null!=(f=null===(o=u.a.get(r.b))||void 0===o?void 0:o.j)?t.rs(f.s.mr,f.s):c?c.trim():null
},t.rs=m,p=function(){var n=!r.N()||false?null:function(n){u.pu[10](n)};return p=function(){return n},n},
t.fu=function(){var n,t,u,e=new Set;for(n of a)if(t=n.k){if("^"===t[0]&&t.length>2)return true
;for(u of t.split(" "))e.add(u)}return e.size?e:null},$=function(n){var e,r,o=a.length>0?null:{N:1,p:null,f:0}
;n?o||i.$u({N:3,H:10,U:0}):(e=null!=u.u||void 0!==u.u&&u.o,r=a,l.v(4096,function(n){var r,i,l,f=n.c.s.f,c=n.c.s
;for(r of n.W){if(i=null,l=0,o){if(0===r.s.f)continue}else if(l=null===(i=t.rs(r.s.mr,r.s))?0:i?1:2,
!i&&r.s.f===l)continue;n.ss||(r.postMessage(o||{N:1,p:i,f:0}),r.s.f=l)}e&&f!==c.f&&u.r(c.b,c.f)},function(){return r===a
}))},t.lu=$,g=function(){var n,e,o=a.length>0,i=o||f?p():null;i&&(f!==o&&(t.ns=f=o,n=r.N().onHistoryStateUpdated,
o?n.addListener(i):n.removeListener(i)),c!==(e=o&&u.z.exclusionListenHash)&&(t.su=c=e,
n=r.N().onReferenceFragmentUpdated,e?n.addListener(i):n.removeListener(i)))},u.at.exclusionRules=function(n){
var e=!a.length,r=u.gu;v(n),s=u.z.exclusionOnlyFirstMatch,g(),setTimeout(function(){setTimeout(t.lu,10,e),
u.gu===r&&i._t("keyMappings",null)},1)},u.at.exclusionOnlyFirstMatch=function(n){s=n},u.at.exclusionListenHash=g,
i.st.then(function(){v(u.z.exclusionRules),s=u.z.exclusionOnlyFirstMatch})});