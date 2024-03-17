"use strict"
;__filename="background/eval_urls.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports","./exclusions"],function(e,n,r,s,a,u,t,c,l){
var i,o,f;Object.defineProperty(n,"__esModule",{value:true}),r.yt=function(e,n,l,p){var d,g,b,y,h,m,v,x,k,$,_,w;if(n|=0,
"paste"===e?e+=" .":!e.includes("%20")||e.includes(" ")||e.startsWith("run")||(e=e.replace(/%20/g," ")),
n<0||!(e=e.trim())||(d=e.search(/[/ ]/))<=0||!/^[a-z][\da-z\-]*(?:\.[a-z][\da-z\-]*)*$/i.test(g=e.slice(0,d).toLowerCase())||/\.(?:css|html?|js)$/i.test(g))return null
;if(!(e=e.slice(d+1).trim()))return null;if(m=/[\s+,\uff0b\uff0c]+/g,1===n)switch(g){case"sum":case"mul":
e=e.replace(m,"sum"===g?" + ":" * "),g="e";break;case"avg":case"average":b=e.split(m),
e="("+b.join(" + ")+") / "+b.length,g="e"}if(1===n)switch(g){case"e":case"exec":case"eval":case"expr":case"calc":
case"m":case"math":return a.import2("/lib/math_parser.js").then(i.bind(0,e));case"error":return[e,3]
}else if(n>=2)switch(g){case"run":case"run1":case"run-one":case"run-one-key":return[[g,e],6];case"status":case"state":
return n>=3&&o(e),[e,n>=3?4:7];case"url-copy":case"search-copy":case"search.copy":case"copy-url":
if((h=u.Ir(e,null,1,p))instanceof Promise)return h.then(function(e){var n=e[0]||e[2]||""
;return n=n instanceof Array?n.join(" "):n,Promise.resolve(r.wr(n)).then(function(e){return[e,1]})})
;e=(h=5===u.Pr&&h instanceof Array?h[0]:h)instanceof Array?h.join(" "):h;case"cp":case"copy":case"clip":
return"string"==typeof(v=r.wr(e))?[e,1]:v.then(function(e){return[e,1]})}switch(g){case"urls":return n<1?null:f(e,n)
;case"cd":case"up":if(!(b=(e+"  ").split(" "))[2]){if(n<1)return null
;if("string"!=typeof(h=c.$()))return h.then(function(s){var a=s&&r.yt("cd "+e+" "+(e.includes(" ")?s:". "+s),n,l,p)
;return a?"string"==typeof a?[a,7]:a:[s?"fail in parsing":"No current tab found",3]});b[2]=h}return x="/"===(g=b[0])[0],
d=parseInt(g,10),d=isNaN(d)?"/"===g?1:x?g.replace(/(\.+)|./g,"$1").length+1:-g.replace(/\.(\.+)|./g,"$1").length||-1:d,
(k=t.Sn({u:b[2],p:d,t:null,f:1,a:"."!==b[1]?b[1]:""}))&&k.u||[k?k.e:"No upper path",3];case"parse":case"decode":
(g=e.split(" ",1)[0]).search(/\/|%2f/i)<0?e=e.slice(g.length+1).trimLeft():g="~",b=[e=s.dr(e)],e=u.Ir(e,null,0,p),
4!==u.Pr&&(y=t.Sn({u:e}))?""===y.u?b=[g]:(b=y.u.split(" ")).unshift(g):b=b[0].split(s.F);break;case"sed":
case"substitute":case"sed-p":case"sed.p":case"sed2":return $=e.split(" ",1)[0],e=e.slice($.length+1).trim(),
_="sed2"===g?e.split(" ",1)[0]:"",[e=(e=e.slice(_.length).trim())&&r.R(e,g.endsWith("p")?32768:0,_?{r:$,k:_
}:/^[@#$-]?[\w\x80-\ufffd]+$|^\.$/.test($)?{r:null,k:$}:{r:$,k:null}),5];case"u":case"url":case"search":
b=s.dr(e,true).split(s.F);break;case"paste":if(n>0)return(h=r.hr(e))instanceof Promise?h.then(function(e){
return[e?e.trim().replace(s.F," "):"",5]}):[h?h.trim().replace(s.F," "):"",5];default:return null}
return l?[b,2]:p&&p>12?null:(w=b[0]&&r.vr.map.has(b[0])?b.shift():null,u.D(b,w,12===p?0:n,p))},i=function(e,n){
var r,s,a,t;for(u.es.test(e)&&(e=e.slice(1,-1)),r=/([\u2070-\u2079\xb2\xb3\xb9]+)|[\xb0\uff0b\u2212\xd7\xf7]|''?/g,
e=(e=(e=e.replace(/\uff0c/g," ")).replace(/deg\b/g,"\xb0").replace(/[\xb0']\s*\d+(\s*)(?=\)|$)/g,function(e,n){
return(e=e.trim())+("'"===e[0]?"''":"'")+n}).replace(r,function(e,n){var r,s,a=""
;if(!n)return"\xb0"===e?"/180*PI+":(r="\uff0b\u2212\xd7\xf7".indexOf(e))>=0?"+-*/"[r]:"/".concat("''"===e?3600:60,"/180*PI+")
;for(s of e)a+=s<"\xba"?s>"\xb3"?1:s<"\xb3"?2:3:s.charCodeAt(0)-8304;return a&&"**"+a
}).replace(/([\d.])rad\b/g,"$1")).replace(/^=+|=+$/g,"").trim(),s=[].reduce.call(e,function(e,n){
return e+("("===n?1:")"===n?-1:0)},0);s<0;s++)e="("+e;for(;s-- >0;)e+=")";if(e){
for(;e&&"("===e[0]&&")"===e.slice(-1);)e=e.slice(1,-1).trim();e=e||"()"}if(a="",
(t=n.MathParser||globalThis.MathParser||{}).evaluate){try{a="function"==typeof(a=t.evaluate("()"!==e?e:"0"))?"":""+a
}catch(e){}t.clean(),t.errormsg&&(t.errormsg="")}return[a,0,e]},o=function(e){
var n,a,u,t,i,o,f,p,d,g,b,y,h,m,v,x,k,$,_=r.hn;if(!parseInt(e,10)||(_=parseInt(e,10),e=e.slice(e.search(/[/ ]/)+1)),
n=r.a.get(_||(_=r.hn)))if(512&n.d)console.log("Unexpected inactive Tab ".concat(_));else{for(k of(r.O=n.j||n.c,
u=(a=e.search(/[/ ]/))>0?e.slice(a+1):"",e=e.toLowerCase(),a>0&&(e=e.slice(0,a)),
e.includes("-")&&e.endsWith("able")&&(e+="d"),u=((t=!!u&&/^silent/i.test(u))?u.slice(7):u).trim(),i=0,o=function(e){
console.log(e),i||c.showHUD(e),i=1},u.includes("%")&&/%[a-f0-9]{2}/i.test(u)&&(u=s.Zn(u)),
u&&!u.startsWith("^ ")?(o('"vimium://status" only accepts a list of hooked keys'),
u=""):u&&(f=u.match(/<(?!<)(?:a-)?(?:c-)?(?:m-)?(?:s-)?(?:[a-z]\w+|[^\sA-Z])>|\S/g),
u=f?f.join(" ").replace(/<(\S+)>/g,"$1"):""),g=(d=r.O.s).f,b=l.ns?1===g?g:(p=l.rs(d.mr,d))?1:null===p?0:2:0,
h=!!u&&"enable"===e,v={N:1,
p:2===(y="enable"===e?0:"disable"===e?2:"toggle-disabled"===e?2!==g?2===b?null:2:2===b?0:null:"toggle-enabled"===e?0!==g?0===b?null:0:0===b?2:null:"toggle-next"===e?1===g?0:0===g?2===b?null:2:2===b?0:null:"toggle"===e||"next"===e?0!==g?0:2:("reset"!==e&&o('Unknown status action: "'.concat(e,'", so reset')),
null))||h?u:null,f:m=null===y?0:2===y?3:1},x=m?y:0,n.ss=m?{f:x,as:v.p}:null,n.W))$=k.s,
!m&&l.ns&&1!=(x=null===(p=v.p=l.rs($.mr,$))?0:p?1:2)&&$.f===x||($.f=x,k.postMessage(v));x=n.c.s.f,
t||i||c.showHUDEx(r.O,"newStat",0,[[0!==x||h?2===x?"fullyDisabled":"halfDisabled":"fullyEnabled"]]),r.o&&x!==g&&r.r(_,x)
}},f=function(e,n){var s,a,t,c,l=e.indexOf(":")+1||e.indexOf(" ")+1;if(l<=0)return["No search engines given",3]
;if((s=e.slice(0,l-1).split(e.lastIndexOf(" ",l-1)>=0?" ":"|").filter(function(e){return r.vr.map.has(e)
})).length<=0)return["No valid search engines found",3];for(c of(a=e.slice(l).split(" "),t=["openUrls"],
s))t.push(u.D(a,c,n));return t.some(function(e){return e instanceof Promise})?Promise.all(t).then(function(e){
return[e,6]}):[t,6]}});