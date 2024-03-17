"use strict"
;__filename="background/clipboard.js",define(["require","exports","./store","./utils","./exclusions","./normalize_urls"],function(n,e,r,t,u,f){
var o,a,l,i,c,s,p,d,b,g,x,$,_,v,y,m,w,h,j;Object.defineProperty(e,"__esModule",{value:true}),
e.replaceUsingClipboard=e.doesNeedToSed=e.P=void 0,o={__proto__:null,atob:8,base64:9,base64decode:8,btoa:9,
base64encode:9,decodeforcopy:1,decode:1,decodeuri:1,decodeurl:1,decodemaybeescaped:2,decodeall:19,decodecomp:2,
encode:10,encodecomp:11,encodeall:12,encodeallcomp:13,unescape:3,upper:4,lower:5,capitalize:16,capitalizeall:17,
camel:14,camelcase:14,dash:15,dashed:15,hyphen:15,normalize:6,reverse:7,reversetext:7,break:99,stop:99,return:99,
latin:18,latinize:18,latinise:18,noaccent:18,nodiacritic:18,json:20,jsonparse:21,readablejson:25,virtual:22,
virtually:22,dryrun:22,inc:23,dec:24,increase:23,decrease:24},a=/^[<>][\w\x80-\ufffd]{1,8}$|^[\w\x80-\ufffd]{1,8}>$/,
l=null,i=0,c=function(n,e){var r,u,f,l,i,c,p,d,b,g,$,_,v,y,m,w,h=[],j=new Map
;for(r of n.replace(/\\(?:\n|\\\n[^\S\n]*)/g,"").split("\n"))if(r=r.trim(),
a.test(r)&&(r="s/^//,".concat(">"===r[0]?"copy":"paste","=").concat(r.endsWith(">")?r.slice(0,-1):r.slice(1))),
(u=/^([\w\x80-\ufffd]{1,8})([^\x00- \w\\\x7f-\uffff])/.exec(r))&&((l=j.get(f=u[2]))||(i="\\u"+(f.charCodeAt(0)+65536).toString(16).slice(1),
l=new RegExp("^((?:\\\\[^]|[^".concat(i,"\\\\])+)").concat(i,"(.*)").concat(i,"([a-z]{0,9})(?:,|$)")),j.set(f,l)),
c=l.exec(r=r.slice(u[0].length)))){
for(v of(p=u[1],d=c[3],g=[],$=null,_=0,(b=r.slice(c[0].length))?b.split(","):[]))(y=v.toLowerCase()).startsWith("host=")?$=v.slice(5):y.startsWith("match")?_=Math.max(y.includes("=")&&parseInt(y.split("=")[1])||1,1):y.includes("=")?g.push(y):(m=o[y.replace(/[_-]/g,"")]||0)&&g.push(m)
;(w=t.nr(c[1],_?d.replace(/g/g,""):d))&&h.push({er:e||x(p),rr:$,tr:w,ur:_,fr:s(c[2],1),or:g})}return h},s=function(n,e){
return n.replace(/\\(x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|[^])|\$[0$]/g,function(n,r){
return r?"x"===r[0]||"u"===r[0]?"$"===(r=String.fromCharCode(parseInt(r.slice(1),16)))?r+r:r:"t"===r?"\t":"r"===r?"\r":"n"===r?"\n":e?"0"===r?"$&":r>="1"&&r<="9"?"$"+r:r:r:e&&"$0"===n?"$&":n
})},p=function(n,e){
var t=14===e,u=15===e,f=16===e,o=17===e,a=r.kn<64||false?t||u?/(?:[-_\s\/+\u2010-\u2015]|(\d)|^)([a-z\u03b1-\u03c9]|[A-Z\u0391-\u03a9]+[a-z\u03b1-\u03c9]?)|[\t\r\n\/+]/g:f?/(\b|_)[a-z\u03b1-\u03c9]/:o?/(\b|_)[a-z\u03b1-\u03c9]/g:null:new RegExp(t||u?"(?:[-_\\t\\r\\n/+\\u2010-\\u2015\\p{Z}]|(\\p{N})|^)(\\p{Ll}|\\p{Lu}+\\p{Ll}?)|[\\t\\r\\n/+]":f||o?"(\\b|_)\\p{Ll}":"",f?"u":"ug"),l=0,i=0,c=function(n,e){
return e?n.toLocaleLowerCase():n.toLocaleUpperCase()};return n=t||u?n.replace(a,function(e,r,t,f){
var o="\t\r\n/+".includes(e[0]),a=o||!l++&&n.slice(i,f).toUpperCase()===n.slice(i,f).toLowerCase();return o&&(l=0,
i=f+1),
t=t?t.length>2&&t.slice(-1).toLowerCase()===t.slice(-1)&&!/^e?s\b/.test(n.substr(f+e.length-1,3))?u?c(t.slice(0,-2),true)+"-"+c(t.slice(-2),true):c(t[0],a)+c(t.slice(1,-2),true)+c(t.slice(-2,-1),false)+t.slice(-1):u?c(t,true):c(t[0],a)+c(t.slice(1),true):"",
(o?e[0]:(r||"")+(r||u&&!a?"-":""))+t}):f||o?n.replace(a,function(n){return c(n,false)}):n,
u&&(n=n.replace(r.kn<64||false?/[a-z\u03b1-\u03c9]([A-Z\u0391-\u03a9]+[a-z\u03b1-\u03c9]?)/g:new RegExp("\\p{Ll}(\\p{Lu}+\\p{Ll})","ug"),function(e,r,t){
return r=r.length>2&&r.slice(-1).toLowerCase()===r.slice(-1)&&!/^e?s\b/.test(n.substr(t+e.length-1,3))?c(r.slice(0,-2),true)+"-"+c(r.slice(-2),true):c(r,true),
e[0]+"-"+r})),n},d=function(n){return n.replace(r.kn<64||false?/[\u0300-\u0362]/g:new RegExp("\\p{Diacritic}","gu"),"")
},b=function(n){return(n=JSON.stringify(n).slice(1,-1)).replace(/[<\s"$%&#()?:+,;]/g,function(n){
return"\\u"+(n.charCodeAt(0)+65536).toString(16).slice(1)})},g=function(n){
return n=(n='"'===n[0]?n.slice(1,n.endsWith('"')?-1:void 0):n).replace(/[\r\n\0]/g,function(n){
return n<"\n"?"\\0":n>"\n"?"\\r":"\\n"}),n='"'.concat(n,'"'),t.tryParse(n)},e.P=function(n){
if(null!=n.$sed)return n.$sed;var e=n.sed,r=n.sedKeys||n.sedKey
;return null!=e||r||0===r?e&&"object"==typeof e?null!=e.r||e.k?e:null:n.$sed={r:"number"==typeof e?e+"":e,
k:"number"==typeof r?r+"":r}:null},x=function(n,e){var r,t,u,f,o,a,l
;if("object"==typeof n)return n.ar||n.lr?n:e?e.k=null:null
;for(r=null,t=0,"_"===(u="number"==typeof n?n+"":n)[0]&&(r=[u.slice(1)],
u=""),f=0;f<u.length;f++)(a=-33&(o=u.charCodeAt(f)))>64&&a<91?t|=83===a?32772:1<<a-65:(r||(r=[]),
!e&&r.includes(o)||r.push(o));return l=t||r?{ar:t,lr:r}:null,e?e.k=l:l},$=function(n,e){var r,t;if(n.ar&e.ar)return true
;if(r=e.lr,!n.lr||!r)return false;for(t of n.lr)if(r.includes(t))return true;return false},
e.doesNeedToSed=function(n,e){var t,u;if(e&&(false===e.r||e.r&&true!==e.r))return false!==e.r
;for(u of(t=e&&e.k&&x(e.k,e)||(n?{ar:n,lr:null}:null),l||t&&(l=c(r.z.clipSub,null)),t?l:[]))if($(u.er,t))return true
;return false},_=function(n){
return n.startsWith(",")&&(n="s/^//"+n),n.includes("\n")?n:r.kn>63||false?n.replace(new RegExp("(?<!\\\\) ([\\w\\x80-\\ufffd]{1,8})(?![\\x00- \\w\\\\\\x7f-\\uffff])","g"),"\n$1"):n.replace(/\\ | ([\w\x80-\ufffd]{1,8})(?![\x00- \w\\\x7f-\uffff])/g,function(n,e){
return" "===n[1]?n:"\n"+e})},v=function(n,e,t){var u,f,o,a=e.fr;return a.includes("${")?(u=new Map,f=new Map,
o=a.replace(/\$(?:\$|\{([^}]*)})/g,function(n,e){var t,f,o
;return e?(t=e.split(/>(?=[\w\x80-\ufffd]{1,8}$)/)).length>1&&t[0]?(o=t[1],
f="0"===(f=t[0])||"$0"===f?"&":"$"===f[0]?f.slice(1):1===f.length?f:{input:"_",lastMatch:"&",lastParen:"+",
leftContext:"`",rightContext:"'"}[f]||"1",u.has(o)?u.get(o).push(f):u.set(o,[f]),
"$"+f):(r.ir.get(e.replace(/^<|>$/,""))||"").replace(/\$/g,"$$$$"):n}),n=n.replace(e.tr,u.size?function(){
var e=arguments,r=e.length,t=e[r-2];return o.replace(/\$([$1-9_&+`'])/g,function(u,o){if("$"===o)return"$"
;var a="_"===o?n:"&"===o?e[0]:"`"===o?n.slice(0,t):"'"===o?n.slice(t+e[0].length):r-3<=0?"":o>="1"&&o<"9"?+o<=r-2?e[+o]:"":"+"===o?e[r-3]:e[1]
;return f.set(o,a),a})}:o),u.forEach(function(n,e){var u=n.reduce(function(n,e){return n||f.get(e)||""},"")
;i!==t?r.ir.set(e,u):y(e,u)}),n):n.replace(e.tr,a)},e.replaceUsingClipboard=v,r.R=function(n,f,a,v){
var m,w,h,j,z,k=a&&"object"==typeof a?a.r:a;if(false===k)return n;for(z of(m=l||(l=c(r.z.clipSub,null)),
k&&("number"==typeof k||"string"==typeof k&&k.length<=8&&!/[^\w\x80-\ufffd]/.test(k))&&(a={r:null,k:k},k=null),
w=a&&"object"==typeof a&&(a.k||0===a.k)&&x(a.k,a)||(f?{ar:f,lr:null}:null),k&&true!==k&&(w||(m=[]),m=c(_(k+""),w||(w={
ar:1073741824,lr:null})).concat(m)),h=i,j=function(f){var a,l,i,c,_,m,j,z,k,L,M
;if($(f.er,w)&&(!f.rr||("string"==typeof f.rr&&(f.rr=u.cr(f.rr)||-1),-1!==f.rr&&u.sr(f.rr,n)))){if(a=-1,l=n,f.ur?(i=0,
_=f.ur,l.replace(f.tr,function(n){var e=arguments;return a=(i=e[e.length-2])+n.length,c=e.length>2+_&&e[_]||"",""}),
a>=0&&(l=(m=e.replaceUsingClipboard(l,f,h)).slice(i,m.length-(l.length-a))||c||l.slice(i,a))):f.tr.test(l)&&(a=f.tr.lastIndex=0,
l=e.replaceUsingClipboard(l,f,h)),a<0){if(j=(f.or.find(function(n){return"string"==typeof n&&n.startsWith("else=")
})||"").slice(5)){if(99===o[j])return"break";/^[\w\x80-\ufffd]{1,8}$/.test(j)&&(w=x(j))}return"continue"}
for(k of(z=false,f.or))if("string"!=typeof k){if(z=99===k)break
;l=l?1===k?t.pr(l):2===k?t.dr(l):19===k?t.dr(l,true):3===k?s(l):4===k?l.toLocaleUpperCase():5===k?l.toLocaleLowerCase():10===k?t.br(l):11===k?t.gr(l):12===k?encodeURI(l):13===k?encodeURIComponent(l):8===k?t.Zn(l,"atob"):9===k?btoa(l):20===k?b(l):25===k?JSON.stringify(l).slice(1,-1):21===k?g(l):23===k?+l+1+"":24===k?+l-1+"":(l=6!==k&&7!==k&&18!==k||false?l:l.normalize(18===k?"NFD":"NFC"),
7===k?Array.from(l).reverse().join(""):18===k?d(l):14===k||15===k||16===k||17===k?p(l,k):l):""}else L=k.split("=")[0],
M=k.slice(L.length+1),
"copy"===L?y(M,l):"paste"===L?l=r.ir.get(M)||"":"keyword"===L&&v?v.S=M:"act"===L&&v?v.xr="false"!==M:"sys-clip"!==L&&"sysclip"!==L||!v||(v.$r=/^-1$|^false$|^non?e?$|null$/i.test(L))
;if(!f.or.includes(22)&&(n=l,z))return"break"}},w?m:[]))if("break"===j(z))break;return t._r(),n},y=function(n,e){
r.ir.set(n,e),i&&clearTimeout(i),i=setTimeout(function(){r.ir.clear(),i=0},1e4)},m=function(){
var n=globalThis.document.createElement("textarea");return n.style.position="absolute",n.style.left="-99px",
n.style.width="0",n},w=function(n,e,u,o,a){var l,i,c=o,s=function(n){var e=r.vr.map.get(o)
;return e?f.yr(n.trim().split(t.F),e.mr,e.l):n};return"string"!=typeof n?(n=n.map(function(n){var e,t={},f=r.R(n,4,u,t)
;return(o=null!==(e=t.S)&&void 0!==e?e:c)?s(f):f
}),n="string"==typeof e&&e.startsWith("json")?JSON.stringify(n,null,+e.slice(4)||2):n.join(e!==!!e&&e||"\n")+(n.length>1&&(!e||e===!!e)?"\n":""),
false!==(u&&"object"==typeof u?u.r:u)&&(n=r.R(n,4096,null,a)),
n):(32!==(i=(n=n.replace(/\xa0/g," ").replace(/\r\n?/g,"\n")).charCodeAt(n.length-1))&&9!==i||((i=n.lastIndexOf("\n")+1)?n=n.slice(0,i)+n.slice(i).trimRight():32!==(i=n.charCodeAt(0))&&9!==i&&(n=n.trimRight())),
n=r.R(n,4,u,a),n=(o=null!==(l=a.S)&&void 0!==l?l:c)?s(n):n)},h=function(n,e,t){return n&&(n=n.replace(/\xa0/g," "),
n=r.R(n,32768,e,t)),n},j=function(n,e){var r=n&&("string"==typeof n?n:"object"==typeof n&&(n.r||n.k))
;return r&&"string"==typeof r&&(r[0]===e||r.endsWith(">"))&&a.test(r)?r[0]===e?r.slice(1):r.slice(0,-1):null},
r.wr=function(n,e,r,t){var u,f,o=j(r,">"),a={};return o&&(r=null),n=w(n,e,r,t,a),o?(y(o,n),
n):(!n||a.$r||(u=globalThis.document,(f=m()).value=n,u.body.appendChild(f),f.select(),u.execCommand("copy"),f.remove(),
f.value=""),n)},r.hr=function(n,e,u){var f,o,a,l=j(n,"<");return l?h(r.ir.get(l)||"",null,u):(f=globalThis.document,
(o=m()).maxLength=e||102400,f.body.appendChild(o),o.focus(),f.execCommand("paste"),a=o.value.slice(0,e||102400),
o.value="",
o.remove(),o.removeAttribute("maxlength"),!e&&a.length>=81920&&("data:"===a.slice(0,5).toLowerCase()||t.jr(a))?r.hr(n,20971520):h(a,n,u))
},r.at.clipSub=function(){l=null}});