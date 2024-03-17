"use strict"
;__filename="background/action_icon.js",define(["require","exports","./store","./utils","./i18n","./browser","./ports"],function(n,e,t,i,u,a,r){
var o,l,c,f;Object.defineProperty(e,"__esModule",{value:true
}),e.n=e.e=void 0,o=["/icons/enabled.bin","/icons/partial.bin","/icons/disabled.bin"],e.e=a.t.browserAction,
c=function(n){fetch(o[n]).then(function(n){return n.arrayBuffer()}).then(function(e){
var u,a,r,o=new Uint8ClampedArray(e),c=e.byteLength/5,f=0|Math.sqrt(c/4),s=f+f,d=i.i()
;for(d[f]=new ImageData(o.subarray(0,c),f,f),d[s]=new ImageData(o.subarray(c),s,s),t.u[n]=d,u=l.get(n),l.delete(n),a=0,
r=u.length;a<r;a++)t.a.has(u[a])&&t.r(u[a],n,true)})},e.n=function(){var n,e,i=t.o;i!==!!t.u&&(t.r=i?f:t.l,
n=function(n){var e=n.c.s;if(0!==e.f){if(512&n.d&&i)return void(e.f=0);t.r(e.b,i?e.f:0)}},e=function(){return t.o===i},
i?(t.u=[null,null,null],l=new Map,r.v(0,n,e)):setTimeout(function(){t.o||null==t.u||(t.u=null,l=null)},200))},
f=function(n,i,u){var r,o,f;n<0||((r=t.u[i])?(o=e.e.setIcon,f={tabId:n,imageData:r},
u?o(f,a.m):o(f)):l.has(i)?l.get(i).push(n):(setTimeout(c,0,i),l.set(i,[n])))},e.n()});