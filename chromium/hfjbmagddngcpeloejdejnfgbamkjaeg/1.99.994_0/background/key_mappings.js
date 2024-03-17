"use strict"
;__filename="background/key_mappings.js",define(["require","exports","./store","./utils","./utils","./settings","./exclusions"],function(e,t,n,a,o,i,r){
var s,c,l,u,m,d,p,v,b,f,g,k,T,w,y,h,L,H,M,x,_,U,C,I,$,V;Object.defineProperty(t,"__esModule",{value:true}),
t.Bu=t.Vu=t.ea=t.ta=t.Pu=t.na=t.aa=t.oa=t.q=t.Gu=t.ia=t.ra=t.sa=void 0,s=o.tryParse,
t.sa=c=/<(?!<)(?:.-){0,4}.\w*?(?::i)?>|./g,t.ia=u,t.ra=m,d=true,t.Gu=p=null,t.q=function(e){
return e.length>1?"<escape>"===e?"esc":e.slice(1,-1):e},b=function(e){return e.length>1?"<".concat(e,">"):e},
f=function(e,n){
return e.length<=n?null:e.includes(" $",n)||e.includes(" =",n)?t.oa(e.slice(n+1),e.includes(" $if=",n)?0:1):e.slice(n+1)
},t.oa=function(e,t){var n,o,i,r=a.i(),c=0;for(n of e.split(" ")){if(o=n.indexOf("="),"$#/=_".includes(n[0])){
if(0===o||"__proto__"===n||"$"===n[0]&&!"$if=$key=$desc=$count=$then=$else=$retry=".includes(n.slice(0,o+1))){
(0===t||1===t)&&C("%s option key:",0===o?"Missing":"Unsupported",n);continue}if("#"===n[0]||n.startsWith("//"))break}
o<0?(r[n]=true,c=1):(i=n.slice(o+1),r[n=n.slice(0,o)]=2===t?i&&g(i):1===t?1:i&&s(i),c=1)}return 1===c?1===t?e:r:null},
g=function(e){var t
;return"false"!==e&&("null"===e?null:"true"===e||((e>="0"?e<":":"-"===e[0])?(t=parseFloat(e))+""===e?t:/^-?(0|[1-9]\d*)(\.\d+)?([eE][+-]\d+)?$/.test(e)?isNaN(t)?s(e):t:e:'{["'.includes(e[0])?s(e):e))
},k=function(e,n){var o,r,s,c,l,u,m,d,p=e.ca;if(void 0===n&&(n=t.ea[e.ao]),o=n.length<4?null:a.Eu(n[3]),
"string"==typeof p&&(p=t.oa(p)),p){
if(("$count"in p||"count"in p)&&(1===n[2]?delete p.$count:p.$count=null!=p.$count?parseFloat(p.$count)||1:(parseFloat(p.count||1)||1)*(o&&o.$count||1),
delete p.count),p.$if){if(false===h(p))return false;delete p.$if}if(o&&a.zu(p,o),2===n[0]&&!n[1]){if(s=(r=p).mode,c=r.m,
u=r.action,m=r.button,(d=(l=r.characters)&&"string"==typeof l?a.la(i.E("c",l)):null)&&d.length<4)return e.ju=41,e.Iu=1,
e.ca=a.Eu({text:"Too few characters for LinkHints",isError:true}),e.ua=1,true;d?r.c=d:"c"in r&&delete r.c,
null!=l&&delete r.characters,"action"in r&&delete r.action,"mode"in r&&delete r.mode,
(s=null!=(s=u?$[u]:"number"==typeof s?s:s?$[s]:null)?s:Math.max(0,0|c))>33&&(s=65===s?r.url?64:s:40===s?r.url?null!=r.join?59:42:null!=r.join?57:s:s>79?s-16:s),
null!=m&&(r.button="string"==typeof m?"right"===m?2:m.startsWith("mid")||m.startsWith("aux")?1:0:Math.max(0,Math.min(0|m,2))),
void 0!==r.xy&&(r.xy=a.Z(r.xy)),(r.direct||r.target)&&(r.direct=r.direct||r.target,
r.directOptions=r.directOptions||r.targetOptions,delete r.target,delete r.targetOptions,s&=-17),s!==c&&(r.m=s),
s>63&&(e.ua=1)}}else p=o;return e.ca=p,true},t.aa=k,T=function(e,n,o){void 0===o&&(o=t.ea[e]);var i={ju:o[0],Iu:o[1],
ao:e,ca:n||(o.length<4?null:a.Eu(o[3])),ma:null,ua:o[2]};return n&&"object"==typeof n&&!t.aa(i,o)?null:i},t.na=T,
w=function(e){var n=e.ca;return"string"==typeof n&&(t.aa(e),n=e.ca),n},t.Pu=w,y=function(e,t){var n
;return e.length>t&&(n=e.indexOf(" $if=",t))>0&&!/ (#|\/\/)/.test(e.slice(t,n+2))},h=function(e){
var t=e&&"object"==typeof e&&e.$if,a=false
;return"string"==typeof t&&("!"===(t=t.toLowerCase())[0]&&(t=t.slice(1).trim(),a=true),t=/(?:mac|win|linux)/.test(t)?{
sys:t}:/(?:chrom|edg|firefox|safari)/.test(t)?{browser:{c:1,e:t.includes("edge")&&!t.includes("chrom")?4:1,f:2,s:8
}[t[0]]
}:null),t&&"object"==typeof t?t.sys&&t.sys!==n.Q.da||t.browser&&!(1&t.browser)||t.before&&t.before.replace("v","")<n.Q.pa?a:!a:null
},t.ta=function(e,t){var n,o,i=true,r=0,c=t
;if(e[t].startsWith("#if")&&(i=(o=(n=e[t].slice(4).trim()).startsWith("{")?s(n):n.split(/#|\/\//)[0])&&false===h(a.Eu({
$if:o}))),i)for(;++c<e.length;)if(e[c].startsWith("#endif")){if(--r<0)break}else e[c].startsWith("#if")&&r++;return c},
L=function(e){return"<".concat(e.slice(1,-1)+":i",">")},H=function(e){
var o,i,r,s,b,g,k,T,w,H,x,_,U,$,V,F,N=0,S=0,O=new Map,B=new Map,P=null,R=false,D=null,j=a.i(),K="color:red";for(v=null,
o=e.replace(/\\(?:\n|\\\n[^\S\n]*)/g,"").replace(/[\t ]+/g," ").split("\n");S<o.length&&(!o[S]||"#"===(i=o[S])[0]);S++)i&&"!"===i[1]&&"no-check"===(i=i.slice(2).trim())&&(R=true)
;for(d=!R,
S>=o.length||"unmapAll"!==o[S]&&"unmapall"!==o[S]||(D=0,S++),r=o.length;S<r;S++)if((T=o[S].trim())<"$")/^#(?:if|else)\b/.test(T)&&(S=t.ta(o,S),
R=false);else switch(U=(H=(w=T.split(" ",3))[0]).length+(x=w.length>1?w[1]:"").length+(_=w.length>2?w[2]:"").length+2,
$=R,H){case"map":case"map!":case"run":case"run!":
V="run"===H,s=void 0,R||(!x||x.length>8&&x.includes("<__proto__>")?C('Unsupported key sequence %c"%s"',K,x||'""','for "'.concat(_||"",'"')):4===H.length&&(x.length<2||1!==x.match(c).length||":"===x.slice(-3,-2))?C('"map!" should only be used for a single long key without mode suffix'):O.has(x)&&!y(T,U)?C('Key %c"%s"',K,x,"has been mapped to",O.get(x).ao):_?V||(s=t.ea[_])?!(x>="0"&&x<":"||"-"===x[0])||v&&v.has(x[0])?$=true:C('Invalid key: %c"%s"',K,x,"- a first char can not be '-' or numbers, unless before is `unmap "+x[0]+"`"):C('Command %c"%s"',K,_,"doesn't exist"):C((V?"Lack target when running":"Lack command when mapping")+' %c"%s"',K,x)),
$&&(g=V?t.na("runKey",f(' keys="'.concat(_.replace(/"|\\/g,"\\$&"),'"')+T.slice(U),0),s):t.na(_,f(T,U),s))&&(O.set(x,g),
4===H.length&&O.set(L(x),g));break;case"unmapAll":case"unmapall":O=new Map,B=new Map,P=null,v=null,j=a.i(),N=D=0,
p&&C("All key mappings is unmapped, but there %s been %c%d error%s%c before this instruction",p.length>1?"have":"has",K,p.length,p.length>1?"s":"","color:auto")
;break;case"mapKey":case"mapkey":
R?i=t.q(x):!_||T.length>U&&!/^(#|\/\/|\$if=\{)/.test(T.slice(U).trimLeft())?C("mapKey: need %s source and target keys:",_?"only":"both",T):x.length>1&&!/^<(?!<[^:]|__proto__>)([acms]-){0,4}.\w*(:[a-z])?>$/.test(x)?C("mapKey: a source key should be a single key with an optional mode id:",T):_.length>1&&!/^<(?!<|__proto__>)([a-z]-){0,4}.\w*>$/.test(_)?C("mapKey: a target key should be a single key:",T):(i=t.q(x))in j&&j[i]!==t.q(_)?v&&v.has(i[0])&&":n"===i.slice(1)?false!==h(f(T,U))&&C("`mapKey %s` and `unmap %s...` can not be used at the same time",x,i[0]):y(T,U)?$=true:C('The key %c"%s"',K,x,"has been mapped to another key:",j[i].length>1?"<".concat(j[i],">"):j[i]):$=true,
$&&false!==h(f(T,U))&&(j[i]=t.q(_),N=1);break;case"shortcut":case"command":
R||(_?!(x.startsWith("userCustomized")&&x.length>14)&&n.Q.va.indexOf(x)<0?C('Shortcut %c"%s"',K,x,"is not a valid name"):B.has(x)&&!y(T,U-1-_.length)?C('Shortcut %c"%s"',K,x,"has been configured"):$=true:C("Lack command name and options in shortcut:",T)),
$&&(k=f(T,U-1-_.length),false!==h(k)&&(i=M(B,x,k))&&C('Shortcut %c"%s"',K,x,i));break;case"env":
R||(_?P&&P.has(x)&&!y(T,U-1-_.length)?C('The environment name %c"%s"',K,x,"has been used"):$=true:C("Lack conditions in env declaration:",T)),
$&&(k=f(T,U-1-_.length),false!==h(k)&&(P||(P=new Map)).set(x,k));break;case"unmap":case"unmap!":
!x||_&&!"#$".includes(_[0])?C("unmap: ".concat(_?"only ":"","needs one mapped key:"),T):false===h(f(T,H.length+x.length+1))||(b=-1,
0!==D&&(b=(D||(D=I.split(" "))).indexOf(x))>=0&&!(1&b)||O.has(x)||x.length>1&&O.has(L(x))?(O.delete(x),
6===H.length&&x.length>1&&O.delete(L(x)),
b<0||D.splice(b,2)):(1===x.length?x>="0"&&x<":"||"-"===x[0]:"esc"===t.q(x)||"<c-[>"===x)?(i=t.q(x)+":n")in j&&j[i]!=="c-v-"+x?C("`unmap %s...` and `mapKey <%s>` can not be used at the same time",x,i):1===x.length&&v&&v.has(x)?6!==H.length&&C('Number prefix: %c"%s"',K,x,"has been unmapped"):(1===x.length&&(v||(v=new Set)).add(x),
j[i]="c-v-"+(1===x.length?x:"e"===x[1]?"esc":"["),x.length>1&&(j[i.slice(0,-1)+"i"]=j[i]),
N=1):6!==H.length&&C('Unmap: %c"%s"',K,x,"has not been mapped"));break;default:
C('Unknown mapping command: %c"%s"',K,H,"in",T)}
for(F of n.Q.va)F.startsWith("user")||B.has(F)||(g=t.na(F,null))&&B.set(F,g);if(0!==D)for(l=O.size,D||(D=I.split(" ")),
r=D.length,S=0;S<r;S+=2)O.has(D[S])||O.set(D[S],t.na(D[S+1],null));n.Nu=O,t.ia=u=B,t.ra=m=P,n.ba=n.Xt.m=N?j:null},
M=function(e,n,a){var o,i=1,r=(a=a&&"string"==typeof a?t.oa(a):a)&&a.command||(i=0,n.startsWith("user")?"":n),s=r?1:0
;return s&&r in t.ea&&(i&&delete a.command,
(o=t.na(r,a))&&e.set(n,o),s=2),s<1?'requires a "command" option':s>1?"":"gets an unknown command"},x=function(e){
var t,n,a,o,i,r=0
;for(t in e)(n=t.length)>2&&":"===t[n-2]?r|="i"===t[n-1]?2:"n"===t[n-1]?1:4:(i=(o=(a=e[t]).length>1)&&("esc"===a||"c-["===a||a.startsWith("v-")||(a=a.slice(a.lastIndexOf("-")+1))<"f:"&&a>"f0"),
r|=n>1||o?i?40:8:t.toUpperCase()!==t&&a.toUpperCase()!==a?16:8);return r},_=function(e){
var o,i,s,u,m,b,f,g,k,T,w,y,h,L,M,_,C=new Map,I=null!==e,$=null!==p;for(I&&(n.gu=t.Gu=p=null,H(e)),o=a.tu(n.Nu),i=I&&d,
I&&(n.fa=(n.ba?x(n.ba):0)|(o.join().includes(":i>")?64:0)),u=0;u<o.length;u++)if(f=(b=(m=o[u]).match(c)).length-1,
g=t.q(b[0]),
k=C.get(g),u>=l&&void 0!==k&&(1===k||0===f||"object"==typeof k[b[1]]))n.Nu.delete(m);else if(0!==f)if(1!==k){for(T=k,
w=1,k||C.set(g,T={});(s=T[t.q(b[w])])&&1!==s&&w<f;)w++,T=s;if(1!==s){for(s&&i&&U(m,s);w<f;)T=T[t.q(b[w++])]={}
;T[t.q(b[f])]=1}else i&&U(b.slice(0,w+1),m)}else i&&U(b[0],m);else void 0!==k&&i&&U(m,k),C.set(g,1)
;if(v)for(y of v)(w=C.get(y))&&C.set("c-v-"+y,w);if(o.length>0)for(C.set("-",2),h=0;h<=9;h++)C.set(""+h,2)
;for(m of(v=null,I&&(p?p.length>1?(console.group(p.length+" Errors in custom Key mappings:"),p.map(function(e){
return console.log.apply(console,e)
}),console.groupEnd()):console.log.apply(console,p[0]):$&&console.log("The new key mappings have no errors")),L=r.fu(),
M=function(e){var t,n
;for(t in e)1!==(n=e[t])?t.startsWith("v-")||M(n):(true!==L&&1===C.get(t)&&!(L&&L.has(t))&&(t.length<2||!C.has(t+":i"))||t.startsWith("v-")&&"object"!=typeof C.get(t))&&delete e[t]
},C.forEach(function(e,t){t.startsWith("v-")?1===e&&C.delete(t):"object"==typeof e&&M(e)}),_={},
a.tu(C).sort()))_[m]=C.get(m);n.gu=_,e&&V(e)},U=function(e,t){var n=[],a=function(e,t){var o,i,r
;for(o of Object.entries(t))r=o[1],i=e+b(i=o[0]),1===r?n.push(i):a(i,r)};e="string"!=typeof e?e.map(b).join(""):e,
t="string"!=typeof t?(a("",t),n.join(", ")):t.slice(e.length),C('Inactive suffixes: %o under "%s"',t,e)},C=function(){
(p||(t.Gu=p=[])).push([].slice.call(arguments,0))
},I="? showHelp <a-c> previousTab <a-s-c> nextTab d scrollPageDown <c-e> scrollDown f LinkHints.activate <f1> simBackspace <s-f1> switchFocus <f2> switchFocus <f8> enterVisualMode G scrollToBottom gf nextFrame gg scrollToTop gi focusInput gn toggleVomnibarStyle gs toggleViewSource gt nextTab gu goUp gF mainFrame gT previousTab gU goToRoot g0 firstTab g$ lastTab h scrollLeft H goBack i enterInsertMode j scrollDown J previousTab K nextTab k scrollUp l scrollRight L goForward <a-m> toggleMuteTab N performBackwardsFind n performFind <a-n> performAnotherFind o Vomnibar.activate <a-p> togglePinTab r reload R reloadGivenTab <a-r> reloadTab <a-s-r> reopenTab t createTab <a-t> createTab u scrollPageUp V enterVisualLineMode v enterVisualMode <a-v> nextTab W moveTabToNextWindow x removeTab X restoreTab yt duplicateTab yy copyCurrentUrl <c-y> scrollUp zH scrollToLeft zL scrollToRight / enterFindMode ` Marks.activate ^ visitPreviousTab [[ goPrevious ]] goNext << moveTabLeft >> moveTabRight b Vomnibar.activateBookmarks ge Vomnibar.activateUrl gE Vomnibar.activateUrlInNewTab m Marks.activateCreate p openCopiedUrlInCurrentTab yf LinkHints.activateCopyLinkUrl B Vomnibar.activateBookmarksInNewTab F LinkHints.activateOpenInNewTab O Vomnibar.activateInNewTab P openCopiedUrlInNewTab T Vomnibar.activateTabs <a-f> LinkHints.activateWithQueue yv LinkHints.activateSelect yi LinkHints.activateCopyImage",
t.ea={__proto__:null,"LinkHints.activate":[2,0,0,{m:0}],"LinkHints.activateCopyImage":[2,0,0,{m:36}],
"LinkHints.activateCopyLinkText":[2,0,0,{m:40}],"LinkHints.activateCopyLinkUrl":[2,0,0,{m:42}],
"LinkHints.activateDownloadImage":[2,0,0,{m:35}],"LinkHints.activateDownloadLink":[2,0,0,{m:44}],
"LinkHints.activateEdit":[2,0,1,{m:67}],"LinkHints.activateFocus":[2,0,0,{m:34}],"LinkHints.activateHover":[2,0,0,{m:32,
showUrl:1}],"LinkHints.activateLeave":[2,0,0,{m:33}],"LinkHints.activateMode":[2,0,0,{m:0}],
"LinkHints.activateModeToCopyImage":[2,0,0,{m:36}],"LinkHints.activateModeToCopyLinkText":[2,0,0,{m:40}],
"LinkHints.activateModeToCopyLinkUrl":[2,0,0,{m:42}],"LinkHints.activateModeToDownloadImage":[2,0,0,{m:35}],
"LinkHints.activateModeToDownloadLink":[2,0,0,{m:44}],"LinkHints.activateModeToEdit":[2,0,1,{m:67}],
"LinkHints.activateModeToFocus":[2,0,1,{m:34}],"LinkHints.activateModeToHover":[2,0,0,{m:32,showUrl:1}],
"LinkHints.activateModeToLeave":[2,0,0,{m:33}],"LinkHints.activateModeToOpenImage":[2,0,0,{m:37}],
"LinkHints.activateModeToOpenIncognito":[2,0,0,{m:45}],"LinkHints.activateModeToOpenInNewForegroundTab":[2,0,0,{m:3}],
"LinkHints.activateModeToOpenInNewTab":[2,0,0,{m:2}],"LinkHints.activateModeToOpenUrl":[2,0,0,{m:46}],
"LinkHints.activateModeToOpenVomnibar":[2,0,1,{m:65}],"LinkHints.activateModeToSearchLinkText":[2,0,0,{m:38}],
"LinkHints.activateModeToSelect":[2,0,0,{m:66}],"LinkHints.activateModeToUnhover":[2,0,0,{m:33}],
"LinkHints.activateModeWithQueue":[2,0,0,{m:18}],"LinkHints.activateOpenImage":[2,0,0,{m:37}],
"LinkHints.activateOpenIncognito":[2,0,0,{m:45}],"LinkHints.activateOpenInNewForegroundTab":[2,0,0,{m:3}],
"LinkHints.activateOpenInNewTab":[2,0,0,{m:2}],"LinkHints.activateOpenUrl":[2,0,0,{m:46}],
"LinkHints.activateOpenVomnibar":[2,0,1,{m:65}],"LinkHints.activateSearchLinkText":[2,0,0,{m:38}],
"LinkHints.activateSelect":[2,0,0,{m:66}],"LinkHints.activateUnhover":[2,0,0,{m:33}],
"LinkHints.activateWithQueue":[2,0,0,{m:18}],"LinkHints.click":[2,0,0,{direct:true,m:0}],
"LinkHints.unhoverLast":[7,0,1,{u:true}],"Marks.activate":[11,1,0],"Marks.activateCreate":[11,1,0,{mode:"create"}],
"Marks.activateCreateMode":[11,1,0,{mode:"create"}],"Marks.activateGoto":[11,1,0],"Marks.activateGotoMode":[11,1,0],
"Marks.clearGlobal":[18,1,1],"Marks.clearLocal":[18,1,1,{local:true}],"Vomnibar.activate":[10,1,0],
"Vomnibar.activateBookmarks":[10,1,1,{mode:"bookm"}],"Vomnibar.activateBookmarksInNewTab":[10,1,1,{mode:"bookm",newtab:1
}],"Vomnibar.activateEditUrl":[10,1,0,{url:true}],"Vomnibar.activateEditUrlInNewTab":[10,1,0,{url:true,newtab:1}],
"Vomnibar.activateHistory":[10,1,1,{mode:"history"}],"Vomnibar.activateHistoryInNewTab":[10,1,1,{mode:"history",newtab:1
}],"Vomnibar.activateInNewTab":[10,1,0,{newtab:1}],"Vomnibar.activateTabs":[10,1,1,{mode:"tab",newtab:1}],
"Vomnibar.activateTabSelection":[10,1,1,{mode:"tab",newtab:1}],"Vomnibar.activateUrl":[10,1,0,{url:true}],
"Vomnibar.activateUrlInNewTab":[10,1,0,{url:true,newtab:1}],addBookmark:[13,1,0],autoCopy:[11,0,1,{copy:true}],
autoOpen:[11,0,1,{o:1}],blank:[0,1,0],captureTab:[15,1,1],clearCS:[16,1,1],clearContentSetting:[16,1,1],
clearContentSettings:[16,1,1],clearFindHistory:[17,1,1],closeDownloadBar:[49,1,1,{all:1}],closeOtherTabs:[35,1,1,{
other:true,mayConfirm:true}],closeSomeOtherTabs:[35,1,0],closeTabsOnLeft:[35,1,0,{$count:-1e6,mayConfirm:true}],
closeTabsOnRight:[35,1,0,{$count:1e6,mayConfirm:true}],confirm:[1,1,0],copyCurrentTitle:[19,1,1,{type:"title"}],
copyCurrentUrl:[19,1,1],copyWindowInfo:[19,1,0,{type:"window"}],createTab:[20,1,20],debugBackground:[31,1,1,{reuse:1,
url:"chrome://extensions/?id=$id",id_mask:"$id",url_mask:""}],discardTab:[21,1,0],dispatchEvent:[9,1,0],
duplicateTab:[22,1,20],editText:[13,0,0],enableCSTemp:[42,1,0,{incognito:true}],enableContentSettingTemp:[42,1,0,{
incognito:true}],enterFindMode:[6,1,1,{active:true,selected:true}],enterInsertMode:[3,1,1,{insert:true}],
enterVisualLineMode:[12,1,1,{mode:"line"}],enterVisualMode:[12,1,1],firstTab:[24,1,0,{absolute:true}],
focusInput:[12,0,0],focusOrLaunch:[31,1,1,{reuse:1}],goBack:[18,0,0,{$count:-1}],goForward:[18,0,0],goNext:[2,1,0,{
sed:true}],goPrevious:[2,1,0,{sed:true,rel:"prev"}],goToRoot:[25,1,0,{}],goUp:[25,1,0,{$count:-1,type:"frame"}],
joinTabs:[26,1,0],lastTab:[24,1,0,{$count:-1,absolute:true}],mainFrame:[27,1,1],moveTabLeft:[28,1,0,{$count:-1}],
moveTabRight:[28,1,0],moveTabToIncognito:[29,1,1,{incognito:true}],moveTabToNewWindow:[29,1,0],
moveTabToNextWindow:[30,1,0],newTab:[20,1,20],nextFrame:[4,1,0],nextTab:[24,1,0],openBookmark:[51,1,0],
openCopiedUrlInCurrentTab:[31,1,1,{reuse:0,copied:true}],openCopiedUrlInNewTab:[31,1,20,{copied:true}],
openUrl:[31,1,20],parentFrame:[5,1,0],passNextKey:[9,0,0],performAnotherFind:[6,1,0,{index:"other"}],
performBackwardsFind:[6,1,0,{$count:-1}],performFind:[6,1,0],previousTab:[24,1,0,{$count:-1}],quickNext:[24,1,0],
reload:[18,0,1,{r:1}],reloadGivenTab:[32,1,0,{single:true}],reloadTab:[32,1,0],removeRightTab:[33,1,0],
removeTab:[34,1,0],reopenTab:[36,1,1],reset:[50,1,1],restoreGivenTab:[37,1,0,{one:true}],restoreTab:[37,1,25],
runKey:[38,1,0],scrollDown:[4,0,0],scrollFullPageDown:[4,0,0,{view:2}],scrollFullPageUp:[4,0,0,{dir:-1,view:2}],
scrollLeft:[4,0,0,{dir:-1,axis:"x"}],scrollPageDown:[4,0,0,{dir:.5,view:2}],scrollPageUp:[4,0,0,{dir:-.5,view:2}],
scrollPxDown:[4,0,0,{view:1}],scrollPxLeft:[4,0,0,{dir:-1,axis:"x",view:1}],scrollPxRight:[4,0,0,{axis:"x",view:1}],
scrollPxUp:[4,0,0,{dir:-1,view:1}],scrollRight:[4,0,0,{axis:"x"}],scrollSelect:[14,0,0],scrollTo:[4,0,0,{dest:"min"}],
scrollToBottom:[4,0,0,{dest:"max"}],scrollToLeft:[4,0,0,{axis:"x",dest:"min"}],scrollToRight:[4,0,0,{axis:"x",dest:"max"
}],scrollToTop:[4,0,0,{dest:"min"}],scrollUp:[4,0,0,{dir:-1}],searchAs:[11,0,1,{s:1,copied:true,selected:true}],
searchInAnother:[39,1,1],sendToExtension:[40,1,0],showHelp:[8,1,1],showHUD:[41,1,1],showHud:[41,1,1],showTip:[41,1,1],
simBackspace:[12,0,1,{action:"backspace"}],simulateBackspace:[12,0,1,{action:"backspace"}],sortTabs:[26,1,0,{
sort:"recency",windows:"current"}],switchFocus:[12,0,1,{action:"switch"}],toggleCS:[42,1,0],
toggleContentSetting:[42,1,0],toggleLinkHintCharacters:[7,1,1,{key:"linkHintCharacters"}],toggleMuteTab:[43,1,1],
togglePinTab:[44,1,0],toggleStyle:[15,0,1],toggleSwitchTemp:[7,1,1],toggleViewSource:[45,1,1,{opener:true}],
toggleReaderMode:[45,1,1,{reader:true,reuse:0,opener:true}],toggleVomnibarStyle:[46,1,1,{style:"dark"}],
toggleWindow:[52,1,0],visitPreviousTab:[48,1,0],wait:[0,1,0,{wait:"count"}],zoom:[47,1,0],zoomIn:[47,1,0],
zoomOut:[47,1,0,{$count:-1}],zoomReset:[47,1,0,{reset:true}]},$={__proto__:null,newtab:2,queue:18,"cur-queue":16,
"new-active":3,"newtab-active":3,hover:32,unhover:33,leave:33,focus:34,"download-media":35,"download-image":35,image:37,
"open-image":37,media:37,search:38,"search-text":38,copy:40,"copy-text":40,"copy-list":57,"copy-url":42,
"copy-url-list":59,download:44,incognito:45,"open-incognito":45,"open-link":46,"open-url":46,"direct-open":46,
"open-directly":46,"directly-open":46,"open-direct":46,"copy-image":36,"edit-url":64,edit:65,"edit-text":65,input:67,
"focus-input":67,editable:67,"focus-editable":67,visual:66,select:66
},t.Vu=["character","word","","lineboundary","line","sentence","paragraphboundary","paragraph","documentboundary"],
t.Bu={l:1,h:0,j:9,k:8,$:7,0:6,"}":15,"{":14,")":11,"(":10,w:5,W:5,e:3,b:2,B:2,G:17,gg:16,o:20,a:-2,g:-2,aw:21,as:25,
ap:26,"a}":26,y:31,Y:32,C:33,"c-s-c":36,p:34,P:35,f:55,F:57,n:47,N:46,f1:48,"a-f1":48,v:51,V:52,c:53,"/":54,"?":56,
"c-e":62,"c-y":61,"c-down":62,"c-up":61},V=function(e){var t,a="",o="".concat("#").concat("!")
;if(!p&&d&&(a="".concat(o).concat("no-check","\n")),a){t=n.at.keyMappings,n.at.keyMappings=void 0;try{
i.ga("keyMappings",a+e)}catch(e){}n.at.keyMappings=t}},2&n.re&&(_(n.z.keyMappings),n.G||(t.Bu["m-s-c"]=36)),
n.at.keyMappings=function(e){var t,a,o,r,s=n.ba,c=n.gu;_(e),t=JSON.stringify,a=n.ba,o=!!c&&t(n.gu)!==t(c),
((r=s?!a||t(s)!==t(a):!!c&&!!a)||o)&&i.$u({N:9,m:n.ba,t:n.fa,k:o?n.gu:null}),r&&i.ka({N:47,d:{m:n.ba}})}});