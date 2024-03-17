"use strict";"undefined"==typeof globalThis&&(window.globalThis=window),globalThis.__filename=null,(function(){
var n={},e=function(n){return n.slice(n.lastIndexOf("/")+1).replace(".js","")},i=function(n,e,i,r){
i.bind(null,t,r).apply(null,e.slice(2).map(o))},o=function(i){i=e(i);var o=n[i]
;return o?o instanceof Promise?o.__esModule||(o.__esModule={}):o:n[i]={}},t=function(i,o){
var r=i[0],u=e(r),c=n[u]||(n[u]=new Promise(function(n){var e=document,i=e.createElement("script");i.src=r,
i.onload=function(){n(),i.remove()},(e.body||e.documentElement).appendChild(i)}))
;c instanceof Promise?c.then(function(){t([r],o)}):o(c)};globalThis.define=function(o,t){
var r,u=e(__filename||document.currentScript.src),c=n[u];c&&c instanceof Promise?(r=c.then(function(){n[u]=c,i(0,o,t,c)
}),c=r.__esModule=c.__esModule||{},n[u]=r):i(0,o,t,c||(n[u]={}))}})(),Object.entries||(Object.entries=function(n){
var e,i=[];for(e of Object.keys(n))i.push([e,n[e]]);return i},Object.values||(Object.values=function(n){var e,i=[]
;for(e of Object.keys(n))i.push(n[e]);return i})),![].includes&&Object.defineProperty(Array.prototype,"includes",{
enumerable:false,value:function includes(n,e){return this.indexOf(n,e)>=0}}),globalThis.__awaiter=function(n,e,i,o){
return t=o,new Promise(function(n){var e=n.bind(0,void 0),i=t(),o=function(t){var r=i.next(t)
;Promise.resolve(r.value).then(r.done?n:o,e)};o()});var t};