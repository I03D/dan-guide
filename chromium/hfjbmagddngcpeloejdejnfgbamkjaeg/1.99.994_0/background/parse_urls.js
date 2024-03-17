"use strict"
;__filename="background/parse_urls.js",define(["require","exports","./store","./utils","./normalize_urls"],function(e,u,n,r,t){
var i,f,l,s,a,o;Object.defineProperty(u,"__esModule",{value:true}),u.$i=u.ll=u.Tt=u.bi=u.yi=u._i=u.Sn=void 0,
i=function(e){var i,f,l,s,a,o,c,p,g,m,$,d=e.u,v=d.toLowerCase(),h=null,_=false;if(!r.eu.test(t.ri(v)))return r._r(),null
;if(e.p)return{k:"",s:0,u:null!=(l=u._i(e)).p?l.u:d,e:null!=l.p?l.p:l.u};for(i of((f=r.Bt(v))&&(v=v.slice(f),
d=d.slice(f)),n.vr.rules))if(v.startsWith(i.xi)&&(h=d.slice(i.xi.length).match(i.ki)))break
;if(!h||!i)return v.startsWith(s=n.Q.Du)?{k:"vimium://show",u:d=d.slice(s.length).replace(/^#!?/,""),
s:d.startsWith("image")&&d.lastIndexOf("&",d.indexOf(":")+1)+1||d.indexOf(" ")+1}:(r._r(),null)
;for(g of(h.length>1&&!i.ki.global&&h.shift(),
a=i.zi,o=0,h.length>1?_=true:a instanceof RegExp?(h=(v=h[0]).match(a))?(h.shift(),
_=true):h=[v]:" "==a||"+"===a?(!(c=(c=(v=h[0].toLowerCase()).indexOf(":"))>0&&c<v.length?c:0)||r.eu.test(v)||v.startsWith("file:")||(c=-1!==(p=t.ti(v,c,v.indexOf(" ")))&&p<=3?c:0),
h=(o=c>0?v.startsWith("data:")?2:1:0)?[h[0]]:h[0].split(a)):h=h[0].split(a),v="",h))v+=" "+(o?g:r.Zn(g))
;return v=v.trim().replace(o>1?/\xa0/g:r.F," "),
m=n.vr.map.get("~"),$=!!v&&m.mr===n.vr.map.get(i.zt).mr&&!n.vr.map.has(v.split(" ",1)[0]),r._r(),{k:i.zt,c:$,u:v,
s:_?v.lastIndexOf(" ")+1:0}},u.Sn=i,u._i=function(e){
var u,i,l,s,a,o,c,p,g,m,$,d,v,h,_,b,x,w,k,z,R,j=e.u,E=j.toLowerCase()
;if(1===e.p&&(u=n.R(j,131072,e.s))!==j&&u&&u!==j+"/"&&u+"/"!==j&&(i=t.Ir(u,null,-2),0===t.Pr))return{u:i,p:"(sed)"}
;if(!r.eu.test(t.ri(E)))return{u:"This url has no upper paths",p:null};if(l=encodeURIComponent,s="",p=false,m=null,d=0,
v=0,
h=false,($=j.lastIndexOf("#")+1)&&(s=j.slice($+ +("!"===j.substr($,1))),(($=(a=r.Zn(s)).lastIndexOf("/"))>0||0===$&&a.length>1)&&(h=a!==s,
"/"===(m=(o=(b=/([^&=]+=)([^&\/=]*\/[^&]*)/).exec(a)||/(^|&)([^&\/=]*\/[^&=]*)(?:&|$)/.exec(a))?o[2]:a)||m.includes("://")?m=null:o?h?(a="https://example.com/",
a=encodeURI(a+m).slice(a.length),($=(s.indexOf(a)+1||s.indexOf(a=l(m))+1)-1)<0&&(h=false,$=s.indexOf(a=m)),v=$+a.length,
$<0&&"&"!==o[1]&&(($=s.indexOf(a=o[1]))<0&&(h=true,a=l(o[1].slice(0,-1)),$=s.indexOf(a)),
$>=0&&(v=s.indexOf("&",$+=a.length)+1)),
$>=0?d=$:(_=b.exec(s))?(m=r.Zn(_[2]),v=(d=_.index+_[1].length)+_[2].length):"&"!==(a=o[1])&&($=j.length-s.length,
s=a+l(m),j=j.slice(0,$)+s,d=a.length,v=0)):d=o.index+o[1].length:d=0,m&&(d+=$=j.length-s.length,v>0&&(v+=$)))),!m){
if(E.startsWith(n.Q.U)&&!e.f)return{u:"An extension has no upper-level pages",p:null};s="",
d=j.indexOf("/",j.indexOf("://")+3),E.startsWith("filesystem:")&&(d=j.indexOf("/",d+1)),$=j.indexOf("?",d=d<0?0:d),
v=j.indexOf("#",d),m=j.slice(d,$=($=v<0?$:$<0?v:$<v?$:v)>0?$:j.length),v=0,h=false}if($=e.p,c=m.startsWith("/"),
!s&&E.startsWith("file:")){if(m.length<=1||11===j.length&&j.endsWith(":/")){if(!e.f)return{
u:"Here has been the root path",p:null};$=0}p=true,e.f||1===$&&($=-1)
}else p=!(s||!E.startsWith("ftp"))||(null!=e.t?!!e.t:null!=e.r?!!e.r:m.length>1&&m.endsWith("/")||/\.([a-z]{2,3}|apng|avif|icon|jpeg|tiff|webp)$/i.test(m))
;return w=(x=m.slice(+c,m.length-+m.endsWith("/")).split("/")).length,k=$<0?$+w:$,g=w<=1&&$<=-2&&j.lastIndexOf("#",d)>0,
x.length=$=k>w?w:$>0?k-1:k>0?k:0,m=x.join("/"),(a=e.a||"")&&(m+="/"===a[0]?a:"/"+a),
m=m?("/"===m[0]?"":"/")+m+(!p||m.endsWith("/")?"":"/"):"/",!v&&j.lastIndexOf("git",d-3)>0&&(m=f(j,m)||m),
!v&&/[/.](?:askubuntu|serverfault|stack(?:overflow|exchange)|superuser)\.com$/.test(j.slice(0,d))&&/^\/questions\/\d+$/i.test(m)&&(m="/questions"),
!g||m&&"/"!==m?(a=h?l(m):m,j=j.slice(0,d)+(v?a+j.slice(v):a)):j=j.split("#",1)[0],
(z=n.R(j,64,e.s)||j)!==j&&(R=t.Ir(z,null,-2),j=0===t.Pr?R:j),{u:j,p:m}},f=function(e,u){
var n,t,i,f=r.xu(e),l=f?f.host:""
;if(l&&/git\b|\bgit/i.test(l)&&/^[\w\-]+(\.\w+)?(:\d{2,5})?$/.test(l))if((n=u.split("/"))[t=n.length-1]||(t--,n.pop()),
i=n[t],l.startsWith("github.")){
if(3===t)return"pull"===i||"milestone"===i||"commit"===i?u+"s":"tree"===i||"blob"===i?n.slice(0,3).join("/"):null
;if(4===t&&"releases"===n[3]&&("tag"===n[4]||"edit"===n[4]))return n.slice(0,4).join("/")
;if(t>3)return"blob"===n[3]?(n[3]="tree",n.join("/")):null
}else if(l.startsWith("gitee.")&&4===t&&"releases"===n[3]&&"tag"===n[4])return n.slice(0,4).join("/")},l=function(e,n){
return"string"==typeof n&&n.toLowerCase().startsWith("whole")?u.Tt(e):s(e)},u.yi=l,u.bi=function(e){var u,t,i,f,l,s,a,o
;return/^https?:\/\//i.test(e)?(u=e.indexOf("://")+3,t=e.indexOf("/",u),i=e.slice(u,t>0?t:e.length).toLowerCase(),
(f=(n.kn<64||false?/[\s"(),;>}\u2014\u2018\u2019\u201c\u201d\u3002\u300b\u3011\uff08\uff09\uff1b-\uff1e]/:new RegExp("\\p{S}|[^\\P{P}.:\\uff1a%-]","u")).exec(i))?e.slice(0,u+f.index):(l=i.indexOf("%",i.indexOf("@")+1),
(s=i.lastIndexOf(".xn--",l>0?l:void 0)+5)>5&&/^[a-z\d]{2}/.test(i.slice(s))&&!/\.[a-z]/.test(i.slice(s))&&i.lastIndexOf("xn--",s-6)<0&&!/[\x7f-\uffff]/.test(i.slice(0,s-6))&&(a=i.slice(s),
(o=(/^[a-z\d]+/.exec(a)||[""])[0])&&o.length<a.length&&(r.di(o,true)||"%-".includes(a[o.length])))?e.slice(0,u+s-4)+e.substr(u+s,o.length):e)):e
},s=function(e){var n,i,f,l,s,a,o,c,p=e.indexOf("\uff1a")+1||e.indexOf(":")+1;if(p&&"/"!==e[p]){
if("link"!==(i=e.slice(0,p-1).trim().toLowerCase())&&"\u94fe\u63a5"!==i)return e
;if(f=(n=e.slice(p).trim()).indexOf("\uff1a")+1,
!(p=(p=n.indexOf(":")+1)&&f?Math.min(p,f):p||f)||!r.eu.test(n.slice(0,p-1)+"://"))return e;if(t.Ir(n.slice(p),null,-2),
1!==t.Pr)return e}else{if(!p||"/"!==e.substr(p+1,1))return e;n=e}
return s=!!(l=/\s|[^=][\u3002\uff0c\uff1b]([^a-z?&#-]|$)/.exec(n))&&1===l[0].length,
o=/["(\u2018\u201c\u300a\uff08\uff1c]/,
(c=((a=l?n.slice(0,l.index+(s?0:1)):null)||n).includes("#~:text=")?0:7)&&a&&(s?",.;\u3002\uff0c\uff1b".lastIndexOf(a.slice(-1),2)>=0?(n=a.slice(0,-1),
c=3):'")\u2019\u201d\u300b\uff09\uff1e'.includes(a.slice(-1))&&(c=o.test(a.slice(p))?0:(n=a.slice(0,-1),1)):(n=a,c=3)),
4&c&&",.;\u3002\uff0c\uff1b".includes(n.slice(-1))&&(n=n.slice(0,-1)),
2&c&&'")\u2019\u201d\u300b\uff09\uff1e'.includes(n.slice(-1))&&(o.test(n.slice(p))?c=0:n=n.slice(0,-1)),
n&&",.;\u3002\uff0c\uff1b".includes(n[0])&&(n=n.slice(1).trim()),1&c&&n&&o.test(n[0])&&(n=n.slice(1)),t.ii(),
n=u.Tt(n,false,true),t.Pr<=2&&!n.startsWith("vimium:")?n:e},u.Tt=function(e,u,n){
var r,i,f=+e.includes("\u3002")+2*+e.includes("\uff1a");return f||n?(r=e.indexOf("//"),
(r=e.indexOf("/",r>=0?r+2:0))>=0&&r<4?e:(i=r>0?e.slice(0,r):e,
/^(data|javascript)[:\uff1a]/i.test(i)?e:(1&f&&(i=i.replace(/\u3002/g,".")),
2&f&&(i=i.replace("\uff1a",":").replace("\uff1a",":")),r>0&&(i+=e.slice(r)),t.Ir(i,null,-2),
t.Pr<=2?i:1!==f||!u||/[^.\w\u3002-]/.test(e)?e:e.replace(/\u3002/g,".")))):e},a=function(e,n){
var i,f,l,s,a,c,p,g,m,$,d,v,h=[],_=t.fi,b=/\s/,x=function(e){return!!((e=e.trim())&&e.length<51)&&(n.set(e,a),true)}
;for(g of e.replace(/\\(?:\n|\\\n[^\S\n]*)/g,"").split("\n"))if(!((g=g.trim())<"$")){c=0;do{c=g.indexOf(":",c+1)
}while(92===g.charCodeAt(c-1));if(!(c<=0)&&(s=g.slice(0,c).trimRight())&&(i=s.replace(/\\:/g,":").split("|"),
(g=g.slice(c+1).trimLeft())&&(s=g.replace(/\\\s/g,"\\s"),m="",(c=s.search(b))>0?(e=g.slice(c),g=s.slice(0,c),
(c=e.search(/\sblank=/i))>=0&&($=e.slice(c+7).search(b),m=e.slice(c+7,($=$>0?c+7+$:0)||void 0),
e=e.slice(0,c)+($?e.slice($):"")),
c=e.search(/\sre=/i)):(g=s,e=""),g=g.replace(/\\s/g," ").trim().replace(/([^\\]|^)%(s)/gi,"$1$$$2").replace(/\\%/g,"%"),
a={zt:"",l:m,mr:g},0!==(i=i.filter(x)).length))){if(-1===c){for(_.lastIndex=0;(p=_.exec(g))&&p[0].endsWith("$"););
p&&(c=p.index+1)&&(s=(s=p[2])?/^s:/i.test(s)?"s"===s[0]?"+":" ":s:"s"===p[1]?"+":" ",g=g.replace(_,function(e,u){
return"$"+(u||"s")}).toLowerCase(),g=t.Ir(g,null,-1),t.Pr>2&&(g=g.replace(/%24(%24|s)/g,decodeURIComponent)),c=0,
g=g.replace(/\$[$s]/g,function(e,u){return"$$"===e?(c>0||c--,"$"):(c=c>0?c:c+u+1,e)}),
(f=o(g,c,s))&&(s.includes("$")?(s=s.replace(t.oi,function(e){return"$$"===e?"\\$":"(.*)"}),
l=new RegExp("^"+s,/[a-z]/i.test(s)?"i":"")):l=s.trim()||" ",h.push({xi:f.xi,ki:f.ki,zt:i[0].trimRight(),zi:l})))
}else e.charAt(c+4)&&!b.test(e.charAt(c+4))&&(s=c>1?e.slice(1,c).trim():"",(d=47===e.charCodeAt(c+4))?(e=e.slice(c+5),
c=e.search(/[^\\]\//)+1):(e=e.slice(c+4),c=e.search(b)),g=e.slice(0,c),e=e.slice(d?c+1:c),c=e.search(b),
(v=r.nr(g,d?c>=0?e.slice(0,c):e:""))&&(s=u.$i(s),h.push({xi:s,ki:v,zt:i[0].trimRight(),
zi:a.mr.lastIndexOf("$S")>=0?" ":"+"})),e=c>=0?e.slice(c+1):"");e=e.trimLeft(),a.zt=e?r.Zn(e):i[i.length-1].trimLeft()}}
return h},u.ll=a,o=function(e,n,t){var i,f,l,s,a;return n<1||!r.eu.test(e)?null:(i=e.slice(0,n-1),
(n=Math.max(i.lastIndexOf("?"),i.lastIndexOf("#"))+1)?(l=f=i.slice(n),i=i.slice(0,i.search(/[#?]/)),
(s=f.lastIndexOf("&")+1)&&(l=f.slice(s)),a=(t.includes("&")?"":"&")+(t.includes("#")?"":"#"),
l&&l.indexOf("=")>=1?(f="[#&?]",e="([^".concat(a,"]*)")):(l=f,f="#"===e[n-1]?"#":l?"[#?]":"\\?",
e="([^".concat(a,"?]*)"))):(a=(t.includes("#")?"":"#")+(t.includes("?")?"":"?"),f="^([^".concat(a,"]*)"),
(l=e.slice(i.length+2))&&(n=l.search(/[#?]/)+1)&&(l=l.slice(0,n-1)),
e=""),l=l&&r.ct(l).replace(/\\\+|%20| /g,"(?:\\+|%20| )"),{xi:i=u.$i(i),ki:new RegExp(f+l+e,/[a-z]/i.test(l)?"i":"")})},
u.$i=function(e){var u=e.slice(0,9).toLowerCase(),n=r.Bt(u)
;return n?e=e.slice(n):"vimium://"===u&&(e=t.du(e.slice(9),false,-1)),e}});