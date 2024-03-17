"use strict"
;__filename="background/i18n.js",define(["require","exports","./store","./utils","./browser"],function(n,r,u,t,e){
var i,o,c,f,a,s,l;Object.defineProperty(r,"__esModule",{value:true
}),r.Qu=r.getI18nJson=r.Wu=r.Xu=r.Yu=r.A=r.Fn=r.Zu=r.ni=void 0,r.ni=1,o=0,r.Zu=[],r.Fn=function(n){
return e.t.i18n.getMessage(n)},c=function(n,u){if(1===o){var t=i.get(n);return null!=u&&t?t.replace(/\$\d/g,function(n){
return u[+n[1]-1]}):t||""}return o||(o=r.getI18nJson("background").then(function(n){i=n,o=1})),
o.then(r.A.bind(null,n,u))},r.A=c,f=function(n,u){var t;return u.forEach(function(n,u,t){if(n instanceof Array){
var e=n[0];t[u]=1===o?i.get(e)||e:r.A(e).then(function(n){return n||e})}}),u.some(function(n){
return n instanceof Promise})?(t=Promise.all(u),(1===o?t:(o||r.A("NS")).then(function(){return t})).then(function(u){
return r.A(n,u)})):r.A(n,u)},r.Yu=f,r.Xu=function(n,r){return n&&n.split(" ").reduce(function(n,u){
return n||(u.includes("=")?r&&u.startsWith(r)?u.slice(r.length+1):n:u)},"")},a=function(n){var u=r.Fn("i18n")
;return r.Xu(u,n||"background")||r.Fn("lang1")||"en"},r.Wu=a,s=function(n){
return t.Ju("/i18n/".concat(r.Wu(n),"/").concat(n,".json"))},r.getI18nJson=s,l=function(){
var n,u=r.Zu,t=["$1","$2","$3","$4"];for(n=0;n<116;n++)u.push(e.t.i18n.getMessage(""+n,t));r.Qu=null},r.Qu=l});