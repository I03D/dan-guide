"use strict"
;__filename="background/completion.js",define(["require","exports","./store","./browser","./utils","./normalize_urls","./parse_urls","./completion_utils","./browsing_data_manager"],function(n,e,r,t,u,i,f,o,l){
var a,c,s,_,d,v,m,h,p,w,g,b,M,S,y,k,x,T,R,$,z,A,j,F,B,D,E,O,I;Object.defineProperty(e,"__esModule",{value:true}),a=0,
c=false,s=false,_=0,d=0,v=0,m=0,h=0,p=[""],w="",g="",b="",M="",S=0,y=false,k=false,x="",T="",R=0,$=true,
z=function(n,e,r,t,u,i){this.e=n,this.u=e,this.t=r,this.title=t,this.r=u(this,i),this.visit=0},A={Mr:function(n,e){
if(0!==p.length&&1&R)2===r.in.f?A.Sr():l.ae.ge=function(){n.o||A.Sr()};else if(O.kr([],1),e)return;0===r.in.f&&l.ae.ye()
},Sr:function(){var n,e,t,u,i,f,a,c,s,v,w=p.some(function(n){return 47===n.charCodeAt(0)
}),g=null===(n=o.we.Tr)||void 0===n?void 0:n.un,b=o.we.Rr?[]:null,M=g&&g[0]===w?g[1]:r.in.un,S=M.length,y=[]
;for(t=0;t<S;t++)if(o.zr((u=M[t]).t,w?u.je:u.Ie)&&($||u.Le)){if(null!==b&&b.push(u),
T&&u.u.length<T.length+2&&T===(u.u.endsWith("/")?u.u.slice(0,-1):u.u))continue;y.push([-o.Ar(u.t,u.Ie),t])}
for(a of(b&&(o.we.Rr.un=[w,b]),m+=e=y.length,e?(y.sort(o.sortBy0),h>0&&!(6&R)?(y=y.slice(h,h+d),
h=0):e>h+d&&(y.length=h+d)):R^=1,i=[],f=64&_?-.666446:0,y))c=a[0],f&&(c=c<f?c:(c+f)/2),
s=new z("bookm",(u=M[t=a[1]]).u,u.t,w?u.je:u.Ie,o.get2ndArg,-c),v=32&_&&l.le.Ee?l.le.Oe(u.u):-1,
s.visit=v<0?0:r.Ce.Ge[v].Fe,s.id=u.nn,i.push(s),null!==u.Wn&&(s.u=u.Wn,s.title=o.cutTitle(w?u.je:u.Ie),
s.textSplit="javascript: \u2026",s.t=u.Ue);O.kr(i,1)}},j={Mr:function(n,e){var t,u,i,f,a
;if(!p.length&&1024&_||!(2&R))return O.kr([],2);if(t=p.length>0,r.Ce.Ge){if(t)return void j.Sr()
;(r.Ce.Qe>10||r.Ce.Ye>0)&&l.le.Ze()}else if(u=t?function(){n.o||j.Sr()
}:null,t&&(s||l.le.Se)?(l.le.Se>0&&clearTimeout(l.le.Se),l.le.Se=0,l.le.We(u)):(l.le.Se||(l.le.Se=setTimeout(function(){
l.le.Se=0,l.le.We(u)},t?200:150)),t&&O.Fr((a=(f=(i=O.Br).length)>0)&&"search"===i[0].t?[i[0]]:[],c&&a,0,0,f,g,S)),
t)return;0===e?o.Dr(k,_,j.Er,n):l.fe(h+d,$,j.Or.bind(null,n))},Sr:function(){
var n,e,t,u,f,a,c=1===p.length?p[0]:"",s=!!c&&("."===c[0]?/^\.[\da-zA-Z]+$/.test(c):(i.Ir(c,null,-2),
i.Pr<=2)),_=s?"."===c[0]||i.Pr>0?o.Ur.Qr[0]:(o.Ur.Zr||o.Ur.qr(),
o.Ur.Zr[0]):null,v=o.we.Rr?[]:null,w=[-1.1,-1.1],g=[],b=o.zr,M=s&&c.includes("%")&&!/[^\x21-\x7e]|%[^A-F\da-f]/.test(c),S=d+h,y=-1.1,k=0,T=0,A=0
;for(x&&S++,T=S;--T;)w.push(-1.1,-1.1)
;for(S=2*S-2,t=(e=(null===(n=o.we.Tr)||void 0===n?void 0:n.Ge)||r.Ce.Ge).length;k<t;k++)if(u=e[k],
(s?_.test(M?u.u:u.t):b(u.t,u.Ie))&&($||u.Le)&&(null!==v&&v.push(u),
A++,(f=s?o.ComputeRecency(u.Fe)||1e-16*Math.max(0,u.Fe):o.ComputeRelevancy(u.t,u.Ie,u.Fe))>y)){
for(T=S-2;0<=T&&w[T]<f;T-=2)w[T+2]=w[T],w[T+3]=w[T+1];w[T+2]=f,w[T+3]=k,y=w[S]}for(v&&(o.we.Rr.Ge=v),m+=A,A||(R^=2),
5&R?k=0:(k=2*h,
h=0);k<=S&&!((f=w[k])<=0);k+=2)(u=e[w[k+1]]).u!==x&&((a=new z("history",u.u,M?u.u:u.t,u.Ie,o.get2ndArg,f)).visit=u.Fe,
g.push(a));l.ie.Be(),O.kr(g,2)},Er:function(n,e){var r,u;if(o.we.dt(e),!n.o){for(u of(r=new Set,
e))u.incognito&&o.tabsInNormal||r.add(t.getTabUrl(u));j.Cr([],n,r,h,r.size)}},Or:function(n,e){var r,t,u,i;n.o||(r=[],
t=new Set,u=new Set,i=-h,e.some(function(n){var e,f=n.u;return!t.has(e=f+"\n"+n.Ie)&&(t.add(e),u.add(f),
++i>0&&r.push(n),r.length>=d)})?j.Gr(r):j.Cr(r,n,u,-i,0))},Cr:function(n,e,r,u,i){(0,t.t.history.search)({text:"",
maxResults:h+d*($?1:2)+i},function(t){if(!e.o){t=t.filter(function(n){var e=n.url
;return e.length>2e3&&(n.url=e=l.le.ze(e,n)),!r.has(e)&&($||0!==l.ue(n.url,n.title||""))}),
u<0?t.length=Math.min(t.length,d-n.length):u>0&&(t=t.slice(u,u+d));var i=t.map(function(n){return{u:n.url,
Ie:n.title||"",it:n.lastVisitTime,ot:null,ut:null}});u<0&&(i=n.concat(i)),j.Gr(i)}})},Gr:function(n){n.forEach(j.Hr),
h=0,l.ie.Be(),O.kr(n,2)},Hr:function(n,e,r){
var t=n.u,u=new z("history",t,l.ie.Ae(t,t),n.Ie||"",o.get2ndArg,(99-e)/100),i=n.ot;u.visit=n.it,i&&(u.s=i,
u.label='<span class="undo">&#8630;</span>'+n.ut),r[e]=u}},F={Mr:function(n,e){
if(1!==p.length||!(16&R)||p[0].lastIndexOf("/",p[0].length-2)>=0)return O.kr([],16);if(l.le.Je){
if(!r.Ce.Ge)return e>0?O.kr([],16):l.le.We(function(){n.o||F.Mr(n,0)});l.le.Je(r.Ce.Ge)}return F.Sr()},Sr:function(){
var n,e,t,i,f,l,a,s,_,v,w,g=r.Ce.Xe,b=o.Wr,M=16===R&&c?[]:null,S=p[0].replace("/","").toLowerCase(),y=S.length===p[0].length,k=[],x="",T=-1.1
;for(e of(o.Jr(3),g.keys()))(y?e.includes(S):e.endsWith(S))&&(n=g.get(e),($||n.$e>0)&&(t=o.ComputeRelevancy(e,"",n.Fe),
M?M.push({r:t,d:e,m:n}):t>T&&(T=t,x=e)))
;if(i=x.length===S.length,x&&!i&&(x.startsWith("www.")||x.startsWith(S)||(f=x.slice(x.indexOf(".")+1)).includes(S)&&(l=void 0,
(l=g.get(f="www."+f))?($||l.$e>0)&&(x=f,n=l):(l=g.get(f="m."+f))&&($||l.$e>0)&&($||l.$e>0)&&(x=f,n=l)),
(a=x.startsWith(S)?0:x.startsWith("www."+S)?4:-1)>=0&&(w=(_=(s=u.Kr(x))[0]).length-1,
(v=s[1])>1&&(!(a=x.length-a-S.length-_[w].length-1)||3===v&&a===_[w-1].length+1)&&(i=true))),x)m++,c=!h&&i||c,
k=F.Lr(x,n,0,y);else if(M)for(w of(M.sort(F.Nr),(m=M.length)>h+d&&(M.length=h+d),M))k.push(F.Lr(w.d,w.m,w.r,y)[0])
;o.Jr(b),O.kr(k,16)},Lr:function(n,e,t,i){var f,a,c,s,_,v,m,p,w=e.et>0,g=""
;return 2===r.in.f&&(f=new RegExp("^https?://".concat(u.ct(n),"/?$")),a=r.in.un.filter(function(n){
return f.test(n.u)&&($||n.Le)}),a.length>0&&(c=a.filter(function(n){return"s"===n.u[4]}),
T=(s=(a=(w=c.length>0)?c:a)[0].u).endsWith("/")?s.slice(0,-1):s,g=a[0].Ie)),_=(w?"https://":"http://")+n+"/",!t&&(x=_,
h>0)?(h--,[]):(v=new z("domain",_,i?n:n+"/","",o.get2ndArg,t||2),p=(m=l.le.Ee?l.le.Oe(_):-1)>0?r.Ce.Ge[m]:null,o.Vr(v),
p&&($||p.Le)&&(v.visit=p.Fe,g=g||p.Ie),v.title=o.cutTitle(g,[]),--d,[v])},Nr:function(n,e){return e.r-n.r}},
B="audible audio muted unmuted active discarded incognito normal pinned visited new grouped ungrouped".split(" "),D={
Mr:function(n,e){!(4&R)||e&&(!p.length||256&_)?O.kr([],4):o.Dr(k,_,D.Sr,n)},Sr:function(n,e){
var u,i,f,a,c,s,w,g,b,M,S,y,x,T,$,A,j,F,D,E,I,P,Q,U,Z,q,C,G,H,W,J,K,L,N,V,X,Y,nn,en,rn;if(o.we.dt(e),!n.o){if(u=r.hn,
i=p.length<=0,f=3&R,c=[],w=0,(a=!!(8&_)&&k&&i)&&!(128&_)&&e.length>h&&e.length>v){for(b of(g=new Map,e))g.set(b.id,b)
;for(y=(S=(M=(s=g.get(u))?s.openerTabId:0)?g.get(M):null)?e.indexOf(S):s?e.indexOf(s)-1:0,
x=S?0:v/2|0;1<--x&&y>0&&e[y-1].openerTabId===M;y--);e=y>0?e.slice(y).concat(e.slice(0,y)):e}for(b of(T=[],$=[],
A=(p.join("\n").match(/^:[a-z]+$/gm)||[]).reduce(function(n,e){e=e.slice(1)
;for(var r=0;r<B.length;r++)B[r].startsWith(e)&&(n|=1<<r);return n},0),s=!s&&A?e.filter(function(n){return n.id===u
})[0]:s,j=A&&s?t.getGroupId(s):null,e))!k&&o.tabsInNormal&&b.incognito||(F=t.getTabUrl(b),
D=b.text||(b.text=l.ie.Ae(F,b.incognito?"":F)),E=b.title,A&&(1===p.length&&(D=E=""),b.audible&&(1&A&&(E+=" :audible"),
2&A&&(E+=" :audio"),12&A&&(t.isTabMuted(b)?4&A&&(E+=" :muted"):8&A&&(E+=" :unmuted"))),
16&A&&b.active&&!k&&(E+=":active"),
32&A&&b.discarded&&(E+=" :discarded"),192&A&&(b.incognito?64&A&&(E+=" :incognito"):128&A&&(E+=" :normal")),
256&A&&b.pinned&&(E+=" :pinned"),1536&A&&(r.Hn.has(b.id)?512&A&&(E+=" :visited"):1024&A&&(E+=" :new")),
6144&A&&(j&&t.getGroupId(b)===j?2048&A&&(E+=" :grouped"):4096&A&&(E+=" :ungrouped"))),(i||o.zr(D,E))&&(I=b.windowId,
!k&&$.lastIndexOf(I)<0&&$.push(I),T.push(b)));if(f&&1===T.length&&T[0].id===u&&(T.length=0),m+=P=T.length,P||(R^=4),
h>=P&&!f)return h=0,O.kr(c,4);if($.sort(function(n,e){return n-e}),Q=a?new Map:null,U=r._n,
a)for(b of T)q=(Z=b.openerTabId)&&Q.get(Z),Q.set(b.id,q?q<5?q+1:5:1)
;for(C=32&_?1===r.G?0:r.kn<62?Date.now()-(w=performance.now()):performance.timeOrigin:0,G=i?a?function(n,e){return 1/e
}:(w=w||performance.now(),function(n,e){return r.Hn.get(e)||(4&_?w+e:-e)}):o.ComputeWordRelevancy,
H=0;H<T.length;)W=(b=T[H++]).id,J=a?Q.get(W):1,F=t.getTabUrl(b),K=r.Hn.get(W),L=new z("tab",F,b.text,b.title,G,a?H:W),
I=b.windowId!==U?$.indexOf(b.windowId)+1+":":"",
N=b.index+1+"",V="",b.active?(a||!(u===W||b.windowId===U)||(L.r=i||!/^(?!:[a-z]+)/m.test(p.join("\n"))?1<<31:0),
N="(".concat(N,")")):K||(N="**".concat(N,"**")),!o.tabsInNormal&&b.incognito&&(V+="*"),!!b.discarded&&(V+="~"),
b.audible&&(V+=t.isTabMuted(b)?"\u266a":"\u266c"),
L.visit=K?K+C:0,L.s=W,L.label="#".concat(I).concat(N).concat(V&&" "+V),J>1&&(L.level=" level-"+J),c.push(L)
;if(c.sort(O.Xr),Y=h+d-(X=c.length),f||Y<0||!i){for(h>0&&!f?(c=c.slice(h,h+d),X=d,h=0):X>h+d&&(c.length=X=h+d),x=f?0:X,
nn=Math.min(X,28);x<nn;x++)c[x].r*=8/(x/4+1);!h&&O.Br&&O.Yr(c)}else if(h>0){for(rn of(en=c.slice(0,Y).map(function(n){
return Object.assign({},n)}),en))rn.label+="[r]";for(X=(c=c.slice(h).concat(en)).length,x=0;x<X;x++)c[x].r=X-x;h=0}
l.ie.Be(),O.kr(c,4)}}},E={ht:0,Mr:r.l,wt:function(n,e,t){var u,f,c,s,_,d,v,m,w,g;if(!(8&R))return O.kr([],8)
;if(c=(f=p).length>0?f[0]:"",0===f.length);else{
if(!e&&"\\"===c[0]&&"\\"!==c[1])return c.length>1?f[0]=c.slice(1):f.shift(),c=b.slice(1).trimLeft(),
$=!l.omniBlockList||$||l.oe.ft([c]),h?(h--,O.kr([],8)):(u=E.gt(c,t),O.kr([u],8));s=r.vr.map.get(c)}if(e){
if(!s)return true}else{if(!s&&!c.startsWith("vimium://"))return 0===a&&f.length<=1&&(a=f.length?o.Mt.bt()?-2:0:-1),
O.kr([],8);s&&M&&(f.push(M),h=0,b+=" "+M,M="",S&=-5),f.length>1||(a=-1)}if(f.length>1&&s?(f.shift(),
b.length>200&&(f=b.split(" ")).shift()):s&&(f=[]),$=!l.omniBlockList||$&&l.oe.ft([c]),s?(v=_=(m=i.yr(f,s.mr,s.l,[])).mr,
d=m.St):(v=_=f.join(" "),d=[]),"~"===c);else if(_.startsWith("vimium://")){if(w=r.yt(_.slice(9),1,true),
g=E.kt.bind(E,f,_,v,t||s,d),w instanceof Promise)return w.then(E.xt.bind(E,n,t||s,g))
;if(w instanceof Array)return E.xt(n,t||s,g,w);w&&(_=v=w,d=[])}else _=i.Ir(_,null,-2);return u=E.kt(f,_,v,t||s,d),
O.kr([u],8)},xt:function(n,e,r,t){var i,l,c,s,_;if(!n.o){switch(t[1]){case 5:case 7:if(a=7===t[1]&&p.length>1?a:-1,
!(l=t[0]))break
;return M="",(p=((b="\\ "+l).length<201?b:u.nt(b,0,200).trim()).split(" ")).length>1&&(p[1]=f.Tt(p[1],p.length>2)),
o.Rt(p),E.wt(n,null,e);case 2:if(o.Rt(p=(c=t[0]).length>1||1===c.length&&c[0]?c:p),(s=E.ht++)>12)break
;if(_=E.wt(n,true,e),s<=0&&(E.ht=0),true!==_)return _;break;case 0:t[0]&&(i=E.$t(r(),t))}O.kr(i||[r()],8)}},
kt:function(n,e,r,t,i){var f=new z("search",e,r,(t?t.zt+": ":"")+n.join(" "),o.get2ndArg,9)
;return n.length>0&&t?(f.t=E.At(r,i),f.title=o.cutTitle(f.title,[t.zt.length+2,f.title.length]),
f.textSplit=o.highlight(f.t,i)):(f.t=u.Zn(o.shortenUrl(r)),f.title=o.cutTitle(f.title,[]),f.textSplit=u.jt(f.t)),
f.v=s?"":t&&t.l||o.Ft(e),f.p=s&&t?t.zt:"",f},$t:function(n,e){
var r=e[0],t=new z("math","vimium://copy "+r,r,r,o.get2ndArg,9)
;return--t.r,t.title='<match style="text-decoration: none;">'.concat(o.cutTitle(t.title,[]),"<match>"),
t.textSplit=u.jt(e[2]),[n,t]},At:function(n,e){var r,t,i,f=e.length;if(t=u.Zn(e.length>0?n.slice(0,e[0]):n),
(r=u.Bt(t))&&(t=t.slice(r),r=0),e.length<=0)return t;for(i=e[0];e[r]=t.length,f>++r;)t+=u.Zn(n.slice(i,e[r])),i=e[r]
;return i<n.length&&(t+=u.Zn(n.slice(i))),t},gt:function(n,e){
var t=i.Ir(n,null,-2),f=4===i.Pr,l=new z("search",t,u.Zn(o.shortenUrl(t)),"",o.get2ndArg,9)
;return l.title=f?(e&&e.zt||"~")+": "+o.cutTitle(n,[0,n.length]):o.cutTitle(n,[]),l.textSplit=u.jt(l.t),
l.v=s?"":f&&e&&((e.l||e.mr).startsWith("vimium:")?r.Q.Dt:e.l)||o.Ft(t),l.p=s&&f?"~":"",l.n=1,l}},O={Et:0,Ot:0,Br:null,
It:null,Fr:null,Mr:function(n){var e,r,t,u;if(O.It&&(O.It.o=true),e=O.It={o:false},O.Ot=0,r=1,t=-9&(R&=n[0])?n.length:2,
O.Br=[],O.Et=t-1,a=h&&-1,n[1]===E){if(u=E.wt(e),t<3)return;if(u)return void u.then(O.Pt.bind(null,n,e,r));r=2}
O.Pt(n,e,r)},Pt:function(n,e,r){for(o.Qt(Date.now()-18144e5),o.Jr(3*p.length||.01),
p.indexOf("__proto__")>=0&&(p=p.join(" ").replace(/(^| )__proto__(?=$| )/g," __proto_").trimLeft().split(" "),o.Rt(p)),
o.we.Ut($),p.sort(O.Zt),o.Ur.qt();r<n.length;r++)n[r].Mr(e,r-1)},Zt:function(n,e){
return e.length-n.length||(n<e?-1:n===e?0:1)},Yr:function(n){var e=new Map(n.map(function(n){return[n.u,n]}))
;O.Br=O.Br.filter(function(n){var r="search"===n.e?void 0:e.get(n.u);return r&&r.r<n.r&&(r.r=n.r),!r})},
kr:function(n,e){var r=O.Br,t=n.length;if(t>0&&(O.Ot|=e,O.Br=0===r.length?n:r.concat(n),8===e&&(c=!0,d-=t,m+=t)),
0==--O.Et)return r=null,O.Ct()},Ct:function(){var n,e,r,t,u,i,f,l,s,_,d,b,M=O.Br;return O.Br=null,M.sort(O.Xr),
h>0?(M=M.slice(h,h+v),h=0):M.length>v&&(M.length=v),o.Ur.Gt=o.Ur.Zr=null,p.length>0&&(e=o.shortenUrl(n=p[0]),
((r=n.length!==e.length)||n.endsWith("/")&&n.length>1&&!n.endsWith("//"))&&(r&&(p[0]=e),o.Ur.Ht(p[0],r))),
M.forEach(o.Vr),
t=M.length>0,u=c&&t,i=m,f=":"===w,s=g,_=S,d=2!=(l=a<0?-2!==a||t||f?0:3:$?p.length<=0||y?0:t?2:f?0:1:0)||f?0:O.Ot,b=O.Fr,
O.Wt(),b(M,u,l,d,i,s,_)},Wt:function(){O.It=O.Fr=null,o.Jt(),o.setupQueryTerms(p=[],s=false,0),w=g=b=M=x=T="",
o.Ur.Qr=null,o.Jr(3),o.Qt(0),a=O.Ot=_=d=v=m=0,R=0,S=0,c=false,y=k=false,$=true},Kt:function(){var n,e,r=b;if(h=0,M="",
!(0===r.length||(n=(r=r.slice(-5)).lastIndexOf("+"))<0||0!==n&&32!==r.charCodeAt(n-1))){if(r=r.slice(n),
n=b.length-r.length,(e=parseInt(r,10))>=0&&"+"+e===r&&e<=(n>0?100:200))h=e;else if("+"!==r)return;b=b.slice(0,n&&n-1),
M=r,S|=4}},Xr:function(n,e){return e.r-n.r}},I={__proto__:null,bookm:[1,A],domain:[16,F],history:[2,j],
omni:[63,E,F,j,A,D],search:[8,E],tab:[4,D]};r.vt.Mr=function(n,e,t){var i,a,h,M,x,T,z,A,j,F;n=n.trim(),y=false,
n&&r.G>1&&(/^[A-Za-z]:[\\/]|^\\\\([\w$%.-]+([\\/]|$))?/.test(n)||"file:"===n.slice(0,5).toLowerCase())&&(":/\\".includes(n[1])&&(n=(":"===n[1]?"":"//")+n.slice(":"===n[1]?0:2).replace(/\\+/g,"/")),
(i=(n=n.replace(/\\/g,"/").toLowerCase()).indexOf("//")+2)>=2&&i<n.length&&"/"!==n[i]&&(a=n.slice(i).split("/",1)[0]).includes("%")&&(h=u.Zn(a),
y=h===a,n=n.slice(0,i)+h+n.slice(i+a.length))),w=b=n&&n.replace(u.F," "),g="",S=0,O.Kt(),
p=(n=b)?(n=n.length<201?n:u.nt(n,0,200).trimRight()).split(" "):[],
(M=0|e.c||128)&&(M-=n.replace(/[\u2e80-\u2eff\u2f00-\u2fdf\u3000-\u303f\u31c0-\u31ef\u3200-\u9fbf\uf900-\ufaff\ufe30-\ufe4f\uff00-\uffef]/g,"aa").length-n.length),
M=Math.max(50,Math.min(M,320)),s=!!(1&(_=e.f)),v=d=Math.min(Math.max(3,0|e.r||10),25),m=0,O.Fr=t,x="bomni"===e.o?(_|=64,
I.omni):I[e.o],
z=e.t||63,A=e.e||63,x===I.tab&&(k=!!(2&_)),2===(T=p.length>=1?p[0]:"").length&&":"===T[0]&&(j="b"===(T=T[1])?I.bookm:"h"===T?I.history:"t"===T||"T"===T||"w"===T||"W"===T?(k="t"!==T&&"T"!==T,
_|=0,
_|="T"===T?2048:0,I.tab):"B"===T?(_|=64,I.omni):"H"===T?(_|=256,I.omni):"d"===T?I.domain:"s"===T?I.search:"o"===T?I.omni:null)&&(x=j,
g=p.shift(),
S|=1,b=b.slice(3),A=x[0]),p.length>0&&((T=p[0]).includes("\u3002")||T.includes("\uff1a"))&&!y&&((F=f.Tt(T,y=p.length<2))!==T?(p[0]=F,
b=F+b.slice(T.length),
y=y&&!/^[.\u3002]\w+([.\u3002]\w*)?$/.test(T)):y=y&&T.includes("\uff1a")&&!/\uff1a([^\/\d]|\d[^\0-\xff])/.test(T)),
$=!l.omniBlockList||l.oe.ft(p),R=z&A,c=2===x.length,b&&(S|=2),o.setupQueryTerms(p,s,M),O.Mr(x)}});