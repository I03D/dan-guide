"use strict"
;__filename="background/main.js",define(["require","exports","./store","./utils","./browser","./settings","./ports","./key_mappings","./run_commands","./normalize_urls","./parse_urls","./exclusions","./ui_css","./eval_urls","./open_urls","./all_commands","./request_handlers","./tools"],function(n,o,e,t,r,i,u,s,c){
var a;Object.defineProperty(o,"__esModule",{value:true}),a=function(n){var o,t=e.a.get(e.hn)
;"quickNext"===n&&(n="nextTab"),
o=s.ia,6!==e.re||(o&&o.get(n)?null==t||4&t.d||e.hn<0?c.executeShortcut(n,t):r.tabsGet(e.hn,function(o){
return c.executeShortcut(n,o&&"complete"===o.status?e.a.get(o.id):null),r.m()}):(o&&null!==o.get(n)&&(o.set(n,null),
console.log("Shortcut %o has not been configured.",n)),
t&&(e.O=t.c),u.showHUD('Shortcut "'.concat(n,'" has not been configured.'))))},e.io=function(){if(6===e.re){
if(e.io)return t.uo(i.st.then.bind(i.st,e.io)),void(e.io=null);e.gu||(i._t("keyMappings"),e.G||(s.Bu["m-s-c"]=36)),
i._t("exclusionListenHash"),i._t("vomnibarOptions"),i._t("autoDarkMode"),i._t("autoReduceMotion"),
r.t.runtime.onConnect.addListener(function(n){return u.OnConnect(n,0|n.name)
}),r.t.runtime.onConnectExternal.addListener(function(n){var o,t=n.sender,r=n.name
;if(t&&u.isExtIdAllowed(t)&&r.startsWith("vimium-c.")&&(o=r.split("@")).length>1){
if(o[1]!==e.Q.GitVer)return n.postMessage({N:2,t:1}),void n.disconnect();u.OnConnect(n,1024|o[0].slice(9))
}else n.disconnect()}),r.t.extension.isAllowedIncognitoAccess(function(o){e.Q.wn=false===o,setTimeout(function(){
new Promise(function(o,e){n(["/background/others.js"],o,e)}).then(function(n){return n}),setTimeout(function(){
new Promise(function(o,e){n(["/background/browsing_data_manager.js"],o,e)}).then(function(n){return n}),
new Promise(function(o,e){n(["/background/completion_utils.js"],o,e)}).then(function(n){return n}),
new Promise(function(o,e){n(["/background/completion.js"],o,e)}).then(function(n){return n})},200)},200)})}},
r.t.commands.onCommand.addListener(a),i.st.then(function(){i._t("extAllowList"),
r.t.runtime.onMessageExternal.addListener(function(n,o,t){var r;if(u.isExtIdAllowed(o)){
if("string"==typeof n)c.executeExternalCmd({command:n},o);else if("object"==typeof n&&n)switch(n.handler){
case"shortcut":(r=n.shortcut)&&a(r+"");break;case"id":return void t({name:"Vimium C",host:location.host,shortcuts:true,
injector:e.Q.so,version:e.Q.pa});case 99:return void t({s:n.scripts?e.Q.ee:null,version:e.Q.pa,host:"",h:"@"+e.Q.GitVer
});case"command":c.executeExternalCmd(n,o)}}else t(false)}),i._t("vomnibarPage",null),i._t("searchUrl",null)}),
r.gn.onReplaced.addListener(function(n,o){var t,r=e.a.get(o);if(e.co===o&&(e.co=n),r){for(t of(e.a.delete(o),
e.a.set(n,r),r.W))t.s.b=n;for(t of(r.c.s.b=n,e.zn))t.s.b===o&&(t.s.b=n)}}),e.vt.Mr=function(n,o,t){
setTimeout(function(){e.vt.Mr(n,o,t)},210)},e.re=4|e.re,e.io(),window.onunload=function(){
for(var n of e.zn)n.disconnect();e.a.forEach(function(n){for(var o of n.W)o.disconnect()})},
e.kn<59&&true?t.Ju("words.txt").then(function(n){e.Uu=n.replace(/[\n\r]/g,"").replace(/\\u(\w{4})/g,function(n,o){
return String.fromCharCode(parseInt(o,16))})}):e.Uu=""});