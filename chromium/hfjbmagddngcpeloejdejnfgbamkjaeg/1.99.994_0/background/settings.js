"use strict"
;__filename="background/settings.js",define(["require","exports","./store","./utils","./browser","./normalize_urls","./parse_urls","./ports"],function(e,o,t,n,a,s,i,c){
var r,l,u,h,m,w,p,b,g,d,f,k,v,y;Object.defineProperty(o,"__esModule",{value:true}),
o.ho=o.K=o.yo=o.V=o.E=o.qo=o.ka=o.$u=o._t=o.xo=o.nl=o.ga=o.st=o.So=o.zo=o.$o=void 0,r=null,l=null,o.$o=0,
o.zo=localStorage,o.So=a.t.storage.local,o.st=Promise.all([0,a.Rn(a.t.runtime.getPlatformInfo).then(function(e){
var o=e.os.toLowerCase(),n=a.t.runtime.PlatformOs,s=o===n.WIN?2:o===n.MAC?0:1;t.Q.da=o,t.Xt.o=t.B.o=s,t.G=s
}),a.Rn(o.So.get.bind(o.So)).then(function(e){var n,a,s,i,c,r,l,u,h=t.z;for(n of(Object.assign(h,o.V),e=e||{},
Object.entries(e)))n[0]in o.V?h[n[0]]=n[1]:t.il.set(n[0],n[1]);for(a=o.zo.length,s=0;s<a;s++)i=o.zo.key(s),
c=o.zo.getItem(i),i in o.V?(l="string"==typeof(r=o.V[i])?c:false===r||true===r?"true"===c:JSON.parse(c),
h[i]=l):t.il.set(i,c);return u=a+Object.keys(e).length,t.To=0===u,u})]).then(function(e){
for(var n in 260===t.z.keyLayout&&(o.$o|=1,w()),o.K)o.E(o.K[n],t.z[n],t.B);return t.B.g=t.z.grabBackFocus,t.Xt.l=t.B.l,
t.re=2|t.re,e[2]}),o.st.then(function(){t.io&&t.io()}),u=function(e,a){var s,i,c;if(t.z[e]=a,l||(l=n.i(),
setTimeout(h,0)),s=o.V[e],o.zo.removeItem(e),l[e]=i=a!==s?a:null,t.Lo(e,i),e in o.K&&o.E(o.K[e],a,t.B),
c=t.at[e])return c(a,e)},o.ga=u,o.nl=function(e,o){var a=t.il.get(e);(void 0!==a?a:null)!==o&&(l||(l=n.i(),
setTimeout(h,0)),l[e]=o,null!==o?t.il.set(e,o):t.il.delete(e))},o.xo=function(e){return t.il.get(e)},h=function(){
var e,t,n=l,a=[];for(e of(l=null,Object.entries(n)))t=e[0],null===e[1]&&(a.push(t),delete n[t]);o.So.remove(a),
o.So.set(n)},o._t=function(e,o){return t.at[e](void 0!==o?o:t.z[e],e)},o.$u=function(e){
if(6!==e.N)m(e);else if(null==e.d.length)m(e);else{var o=e.d;r?o=o.concat(r):n.uo(m.bind(null,e)),r=o,e.d=null}},
m=function(e){var o,n,a;if(6===e.N&&!e.d){for(a of(o=r,n=e.d={},o))n[a]=t.B[a];r=null}
c.v(3===e.N?4096:9===e.N?32768|(e.k?65536:0):8192,function(o){for(var t of o.W)t.postMessage(e)})},o.ka=function(e){
n.ko(t.zn.slice(0),function(o){return t.zn.includes(o)&&o.postMessage(e),1})},w=function(){
var e,n=t.il.get(o.ho[0]),a=t.il.get(o.ho[1]),s=t.il.get(o.ho[2]);return void 0!==n&&(n+=""),void 0!==a&&(a+=""),
void 0!==s&&(s+=""),e=260,void 0!==n||void 0!==a||void 0!==s?(e=null==n?4:"2"===n||"true"===n?1:"1"===n?12:4,
e|=null==a||1===e?0:"2"===a||"true"===a?16:"1"===a?512:0,e|=null==s?0:"2"===s?128:"1"===s?64:0,o.$o|=2):o.$o&=-3,
t.z.keyLayout=e},p=function(e){var n,a;e<3&&1&o.$o&&(n=t.B.l,a=w(),o.E("l",a,t.B)!==n&&o._t("keyLayout",a))},o.qo=p,
o.E=function(e,o,n){switch(e){case"c":case"n":o=o.toLowerCase().toUpperCase();break;case"l":o=255&o|(512&o&&!t.G?16:0)
;break;case"d":o=o?" D":""}return n?n[e]=o:o},Object.assign(t.at,{extAllowList:function(e){var o,n,a,s=t.el
;if(s.forEach(function(e,o){false!==e&&s.delete(o)}),e)for(n=(o=e.split("\n")).length,
a=/^[\da-z_]/i;0<=--n;)(e=o[n].trim())&&a.test(e)&&s.set(e,true)},grabBackFocus:function(e){t.B.g=e},
keyLayout:function(e){var n,a,s;if(t.Xt.l=t.B.l,o.ka({N:47,d:{l:t.B.l}}),1&o.$o&&!(256&e))for(n=2&o.$o,o.$o&=-4,a=0,
s=n?3:0;a<s;a++)o.nl(o.ho[a],null),t.Lo(o.ho[a],null)},newTabUrl:function(e){
e=/^\/?pages\/[a-z]+.html\b/i.test(e)?a.t.runtime.getURL(e):a.H(s.Ir(e)),t.newTabUrl_f=e,o.nl("newTabUrl_f",e)},
searchEngines:function(){
t.vr.map.clear(),t.vr.keywords=null,t.vr.rules=i.ll("~:"+t.z.searchUrl+"\n"+t.z.searchEngines,t.vr.map).reverse()},
searchUrl:function(e){var n=t.vr.map;if(e)i.ll("~:"+e,n);else if(n.clear(),n.set("~",{zt:"~",l:"",
mr:t.z.searchUrl.split(" ",1)[0]}),t.vr.rules=[],t.newTabUrl_f=t.il.get("newTabUrl_f")||"",t.newTabUrl_f)return
;o._t("newTabUrl")},vomnibarPage:function(e){var n=t.il.get("vomnibarPage_f")
;!n||e?((e=e?a.H(e):t.z.vomnibarPage)===o.V.vomnibarPage?e=t.Q.qu:e.startsWith("front/")?e=a.t.runtime.getURL(e):(e=s.Ir(e),
e=s.ei(e),e=t.kn<50&&!e.startsWith(t.Q.U)?t.Q.qu:e.replace(":version","".concat(parseFloat(t.Q.pa)))),
t.vomnibarPage_f=e,o.nl("vomnibarPage_f",e)):t.vomnibarPage_f=n}}),o.V={__proto__:null,allBrowserUrls:false,
autoDarkMode:2,autoReduceMotion:2,
clipSub:"p=^git@([^/:]+):=https://$1/=\ns@^https://(?:www\\.)?google\\.com(?:\\.[^/]+)?/url\\?(?:[^&#]+&)*?url=([^&#]+)@$1@,matched,decodecomp\np@^https://item\\.m\\.jd\\.com/product/(\\d+)\\.html\\b@https://item.jd.com/$1.html@",
exclusionListenHash:true,exclusionOnlyFirstMatch:false,exclusionRules:[{passKeys:"",pattern:":https://mail.google.com/"
}],
extAllowList:"# modified versions of X New Tab and PDF Viewer,\n# NewTab Adapter, and Shortcuts Forwarding Tool\nhdnehngglnbnehkfcidabjckinphnief\nnacjakoppgmdcpemlfnfegmlhipddanj\ncglpcedifkgalfdklahhcchnjepcckfn\nclnalilglegcjmlgenoppklmfppddien\n# EdgeTranslate\nbocbaocobfecmglnmeaeppambideimao\nbfdogplmndidlpjfhoijckpakkdjkkil\n# SalaDict\ncdonnmffkdaoajfknoeeecmchibpmkmg\nidghocbbahafpfhjnfhpbfbmpegphmmp",
filterLinkHints:false,grabBackFocus:false,hideHud:false,keepWorkerAlive:false,keyLayout:260,keyboard:[560,33],
keyupTime:120,keyMappings:"",linkHintCharacters:"sadjklewcmpgh",linkHintNumbers:"0123456789",localeEncoding:"gbk",
mouseReachable:true,newTabUrl:"",
nextPatterns:"\u4e0b\u4e00\u5c01,\u4e0b\u9875,\u4e0b\u4e00\u9875,\u4e0b\u4e00\u7ae0,\u540e\u4e00\u9875,\u4e0b\u4e00\u5f20,next,more,newer,>,\u203a,\u2192,\xbb,\u226b,>>",
notifyUpdate:true,omniBlockList:"",passEsc:"[aria-controls],[role=combobox],#kw.s_ipt",
previousPatterns:"\u4e0a\u4e00\u5c01,\u4e0a\u9875,\u4e0a\u4e00\u9875,\u4e0a\u4e00\u7ae0,\u524d\u4e00\u9875,\u4e0a\u4e00\u5f20,prev,previous,back,older,<,\u2039,\u2190,\xab,\u226a,<<",
regexFindMode:false,scrollStepSize:100,
searchUrl:t.No?"https://www.baidu.com/s?ie=utf-8&wd=%s \u767e\u5ea6":"https://www.google.com/search?q=%s Google",
searchEngines:t.No?"b|ba|baidu|Baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\nbi: https://www.bing.com/search?q=$s\nbi|bing|Bing|\u5fc5\u5e94: https://cn.bing.com/search?q=%s \\\n  blank=https://cn.bing.com/ \u5fc5\u5e94\ng|go|gg|google|Google|\u8c37\u6b4c: https://www.google.com/search?q=%s\\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://www.google.com/ Google\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\nb.m|bm|map|b.map|bmap|\u5730\u56fe|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c\\\n  blank=https://map.baidu.com/\ngd|gaode|\u9ad8\u5fb7\u5730\u56fe: https://www.gaode.com/search?query=%s \\\n  blank=https://www.gaode.com\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps \u8c37\u6b4c\u5730\u56fe\nbili|bilibili|bz|Bili: https://search.bilibili.com/all?keyword=%s \\\n  blank=https://www.bilibili.com/ \u54d4\u54e9\u54d4\u54e9\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\n\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\nb.x|b.xs|bx|bxs|bxueshu: https://xueshu.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://xueshu.baidu.com/ \u767e\u5ea6\u5b66\u672f\ngs|g.s|gscholar|g.x|gx|gxs: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://scholar.google.com/ \u8c37\u6b4c\u5b66\u672f\n\nt|tb|taobao|ali|\u6dd8\u5b9d: https://s.taobao.com/search?ie=utf8&q=%s \\\n  blank=https://www.taobao.com/ \u6dd8\u5b9d\nj|jd|jingdong|\u4eac\u4e1c: https://search.jd.com/Search?enc=utf-8&keyword=%s\\\n  blank=https://jd.com/ \u4eac\u4e1c\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ \u4e9a\u9a6c\u900a\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= \u8ba1\u7b97\u5668\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub \u4ed3\u5e93\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript":"bi: https://cn.bing.com/search?q=$s\nbi|bing: https://www.bing.com/search?q=%s \\\n  blank=https://www.bing.com/ Bing\nb|ba|baidu|\u767e\u5ea6: https://www.baidu.com/s?ie=utf-8&wd=%s \\\n  blank=https://www.baidu.com/ \u767e\u5ea6\ng|go|gg|google|Google: https://www.google.com/search?q=%s \\\n  www.google.com re=/^(?:\\.[a-z]{2,4})?\\/search\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://www.google.com/ Google\nbr|brave: https://search.brave.com/search?q=%s Brave\nd|dd|ddg|duckduckgo: https://duckduckgo.com/?q=%s DuckDuckGo\nec|ecosia: https://www.ecosia.org/search?q=%s Ecosia\nqw|qwant: https://www.qwant.com/?q=%s Qwant\nya|yd|yandex: https://yandex.com/search/?text=%s Yandex\nyh|yahoo: https://search.yahoo.com/search?p=%s Yahoo\nmaru|mailru|mail.ru: https://go.mail.ru/search?q=%s Mail.ru\n\ng.m|gm|g.map|gmap: https://www.google.com/maps?q=%s \\\n  blank=https://www.google.com/maps Google Maps\nb.m|bm|map|b.map|bmap|\u767e\u5ea6\u5730\u56fe: \\\n  https://api.map.baidu.com/geocoder?output=html&address=%s&src=vimium-c\ny|yt: https://www.youtube.com/results?search_query=%s \\\n  blank=https://www.youtube.com/ YouTube\nw|wiki: https://www.wikipedia.org/w/index.php?search=%s Wikipedia\ng.s|gs|gscholar: https://scholar.google.com/scholar?q=$s \\\n  scholar.google.com re=/^(?:\\.[a-z]{2,4})?\\/scholar\\b.*?[#&?]q=([^#&]*)/i\\\n  blank=https://scholar.google.com/ Google Scholar\n\na|ae|ali|alie|aliexp: https://www.aliexpress.com/wholesale?SearchText=%s \\\n  blank=https://www.aliexpress.com/ AliExpress\nj|jd|jb|joy|joybuy: https://www.joybuy.com/search?keywords=%s \\\n  blank=https://www.joybuy.com/ Joybuy\naz|amazon: https://www.amazon.com/s?k=%s \\\n  blank=https://www.amazon.com/ Amazon\n\n\\:i: vimium://sed/s/^//,lower\\ $S re= Lower case\nv.m|math: vimium://math\\ $S re= Calculate\nv.p: vimium://parse\\ $S re= Redo Search\ngh|github: https://github.com/search?q=$s \\\n  blank=https://github.com/ GitHub Repo\nge|gitee: https://search.gitee.com/?type=repository&q=$s \\\n  blank=https://gitee.com/ Gitee \u4ed3\u5e93\njs\\:|Js: javascript:\\ $S; JavaScript",
showActionIcon:true,showAdvancedCommands:true,showInIncognito:false,smoothScroll:true,userDefinedCss:"",
vomnibarOptions:{actions:"",maxMatches:10,queryInterval:333,sizes:"77,3,44,0.8",styles:"mono-url"},vimSync:null,
vomnibarPage:"front/vomnibar.html",waitForEnter:true},o.yo=["showAdvancedCommands"],o.K={__proto__:null,
filterLinkHints:"f",keyLayout:"l",keyboard:"k",keyupTime:"u",linkHintCharacters:"c",linkHintNumbers:"n",
mouseReachable:"e",passEsc:"p",regexFindMode:"r",smoothScroll:"s",scrollStepSize:"t",waitForEnter:"w"},
o.ho=["ignoreKeyboardLayout","ignoreCapsLock","mapModifier"],t.re<6&&(b=a.t.runtime.getManifest(),g=location.origin,
d=g+"/",f=b.content_scripts[0].js,k=t.Q,v=t.Qn,y=function(e){return(47===e.charCodeAt(0)?g:e.startsWith(d)?"":d)+e},
o.V.newTabUrl=t.Xn?"edge://newtab":"chrome://newtab",v.set("about:newtab",1),v.set("about:newtab/",1),
v.set("chrome://newtab",1),v.set("chrome://newtab/",1),t.Xn&&(v.set("edge://newtab",1),v.set("edge://newtab/",1)),
v.set("chrome://new-tab-page",2),v.set("chrome://new-tab-page/",2),k.va=Object.keys(b.commands||{}).map(function(e){
return"quickNext"===e?"nextTab":e}),k.pa=b.version,k.no=b.version_name||b.version,k.Dt=y(k.Dt),k.Du=y(k.Du),
k.qu=y(o.V.vomnibarPage),k.Lu=y(k._o),k.to=b.homepage_url||k.to,k.so=y(k.so),k.Mu=y(k.Mu),
f.push("content/injected_end.js"),k.ee=f.map(y))});