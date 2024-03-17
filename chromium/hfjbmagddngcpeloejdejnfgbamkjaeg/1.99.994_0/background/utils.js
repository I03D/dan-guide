"use strict";__filename="background/utils.js",define(["require","exports","./store"],function(n,t,e){
var r,o,a,u,c,i,s,f,l,m,b,d,g,p,v,w,h;Object.defineProperty(t,"__esModule",{value:true}),
t.splitWhenKeepExpressions=t.al=t.tryParse=t.isNotPriviledged=t.Fu=t.now=t.la=t.Z=t.Ou=t.ct=t.Au=t.Io=t.Ju=t.ko=t.uo=t.Gn=t.vu=t.nr=t.wo=t.fl=t.Bt=t.gr=t.br=t.dr=t.pr=t.Zn=t.xu=t.mu=t.Kr=t.di=t.Eu=t.i=t.jr=t.jt=t.ou=t.nt=t._r=t.tu=t.zu=t.eu=t.F=void 0,
t.F=/\s+/g,t.eu=/^[a-z][\+\-\.\da-z]+:\/\//,t.zu=function(n,t){for(var e in t)void 0!==n[e]||(n[e]=t[e]);return n},
t.tu=function(n){return Array.from(n.keys())},r=/a?/,t._r=function(){return r.test("")},t.nt=function(n,t,e){
var r=e<n.length&&e>t?n.charCodeAt(e-1):0;return n.slice(t,e+=r>=55296&&r<56320?1:8205===r&&e>t+1?-1:0)},
t.ou=function(n,t,e){var r=t>0&&t<n.length?n.charCodeAt(t):0
;return n.slice(t+=r>=56320&&r<=57343?-1:8205===r&&t<n.length-1&&t<e-1?1:0,e)},o=function(n){function e(n){
var t=n.charCodeAt(0);return 38===t?"&amp;":39===t?"&apos;":t<39?"&quot;":60===t?"&lt;":"&gt;"}var r=/["&'<>]/g
;return t.jt=function(n){return n.replace(r,e)},t.jt(n)},t.jt=o,t.jr=function(n){
return 58===n.charCodeAt(10)&&"javascript"===n.slice(0,10).toLowerCase()
},a=["","",".ac.ad.ae.af.ag.ai.al.am.ao.aq.ar.as.at.au.aw.ax.az.ba.bb.bd.be.bf.bg.bh.bi.bj.bm.bn.bo.br.bs.bt.bv.bw.by.bz.ca.cc.cd.cf.cg.ch.ci.ck.cl.cm.cn.co.cr.cu.cv.cw.cx.cy.cz.de.dj.dk.dm.do.dz.ec.ee.eg.er.es.et.eu.fi.fj.fk.fm.fo.fr.ga.gb.gd.ge.gf.gg.gh.gi.gl.gm.gn.gp.gq.gr.gs.gt.gu.gw.gy.hk.hm.hn.hr.ht.hu.id.ie.il.im.in.io.iq.ir.is.it.je.jm.jo.jp.ke.kg.kh.ki.km.kn.kp.kr.kw.ky.kz.la.lb.lc.li.lk.lr.ls.lt.lu.lv.ly.ma.mc.md.me.mg.mh.mk.ml.mm.mn.mo.mp.mq.mr.ms.mt.mu.mv.mw.mx.my.mz.na.nc.ne.nf.ng.ni.nl.no.np.nr.nu.nz.om.pa.pe.pf.pg.ph.pk.pl.pm.pn.pr.ps.pt.pw.qa.re.ro.rs.ru.rw.sa.sb.sc.sd.se.sg.sh.si.sj.sk.sl.sm.sn.so.sr.ss.st.su.sv.sx.sy.sz.tc.td.tf.tg.th.tj.tk.tl.tm.tn.to.tr.tt.tv.tw.tz.ua.ug.uk.us.uy.uz.va.vc.ve.vg.vi.vn.vu.wf.ws.ye.yt.za.zm.zw",".aaa.abb.abc.aco.ads.aeg.afl.aig.anz.aol.app.art.aws.axa.bar.bbc.bbt.bcg.bcn.bet.bid.bio.biz.bms.bmw.bnl.bom.boo.bot.box.buy.bzh.cab.cal.cam.car.cat.cba.cbn.cbs.ceb.ceo.cfa.cfd.com.cpa.crs.csc.dad.day.dds.dev.dhl.diy.dnp.dog.dot.dtv.dvr.eat.eco.edu.esq.eus.fan.fit.fly.foo.fox.frl.ftr.fun.fyi.gal.gap.gdn.gea.gle.gmo.gmx.goo.gop.got.gov.hbo.hiv.hkt.hot.how.ibm.ice.icu.ifm.inc.ing.ink.int.ist.itv.iwc.jcb.jcp.jio.jlc.jll.jmp.jnj.jot.joy.kfh.kia.kim.kpn.krd.lat.law.lds.llc.llp.lol.lpl.ltd.man.map.mba.med.men.mil.mit.mlb.mls.mma.moe.moi.mom.mov.msd.mtn.mtr.nab.nba.nec.net.new.nfl.ngo.nhk.now.nra.nrw.ntt.nyc.obi.off.one.ong.onl.ooo.org.ott.ovh.pay.pet.phd.pid.pin.pnc.pro.pru.pub.pwc.qvc.red.ren.ril.rio.rip.run.rwe.sap.sas.sbi.sbs.sca.scb.ses.sew.sex.sfr.ski.sky.soy.spa.srl.srt.stc.tab.tax.tci.tdk.tel.thd.tjx.top.trv.tui.tvs.ubs.uno.uol.ups.vet.vig.vin.vip.wed.win.wme.wow.wtc.wtf.xin.xxx.xyz.you.yun",".aero.arpa.asia.auto.band.beer.chat.city.club.cool.coop.date.fans.fund.game.gift.gold.guru.help.host.info.jobs.life.link.live.loan.love.luxe.mobi.name.news.pics.plus.shop.show.site.sohu.team.tech.wang.wiki.work.yoga.zone",".citic.cloud.email.games.group.local.onion.party.photo.press.rocks.space.store.today.trade.video.world",".center.design.lawyer.market.museum.online.social.studio.travel",".company.fashion.science.website",".engineer.software"],
t.i=function(){return Object.create(null)},t.Eu=function(n){return Object.setPrototypeOf(n,null)},t.di=function(n,t){
return!t&&/[^a-z]/.test(n)?/^xn--[\x20-\x7f]+/.test(n)||".\u4e2d\u4fe1.\u4e2d\u56fd.\u4e2d\u570b.\u4e2d\u6587\u7f51.\u4f01\u4e1a.\u4f5b\u5c71.\u4fe1\u606f.\u516c\u53f8.\u516c\u76ca.\u5546\u57ce.\u5546\u5e97.\u5546\u6807.\u5728\u7ebf.\u5a31\u4e50.\u5e7f\u4e1c.\u6211\u7231\u4f60.\u624b\u673a.\u62db\u8058.\u653f\u52a1.\u6e38\u620f.\u7f51\u5740.\u7f51\u5e97.\u7f51\u5e97.\u7f51\u7edc.\u8d2d\u7269.\u96c6\u56e2.\u9910\u5385.".includes("."+n+".")?2:0:n&&n.length<a.length&&a[n.length].includes(n)?1:0
},u=function(n){var e=n.toLowerCase().split("."),r=e.length
;return[e,0===t.di(e[r-1])?1:r>2&&2===e[r-1].length&&1===t.di(e[r-2])?3:2]},t.Kr=u,c=function(n,e){
return!!(6!==e&&/^\d{1,3}(?:\.\d{1,3}){3}$/.test(n)||4!==e&&/^\[[\da-f]{0,4}(?::[\da-f]{0,4}){1,5}(?:(?::[\da-f]{0,4}){1,2}|:\d{0,3}(?:\.\d{0,3}){3})]$/.test(n))&&!!t.xu("http://"+n)
},t.mu=c,t.xu=function(n){try{return new URL(n)}catch(n){return null}},t.Zn=function(n,t){
if(!n||!n.includes("%"))return n||"";try{n=(t?"atob"===t?atob:decodeURI:decodeURIComponent)(n)}catch(n){}return n},
i=function(n,e){var r,o,a,u
;return n.includes("%")&&(t.eu.test(n)||/^(about|data|javascript|vimium)/i.test(n))?(r=n.replace(/%(2[356f]|3[adf]|40)/gi,"%25$1").replace(/%(?![\da-fA-F]{2})/g,"%25"),
o=(o=t.Zn(r,1)).length!==r.length?o:t.br(n,1),
a=!e&&(t.eu.test(o)?!o.startsWith("vimium:"):o.startsWith("data:")||o.startsWith("about:")),
(u=(o=o.replace(a?t.F:/[\r\n]+/g,encodeURIComponent))&&o.charAt(o.length-1))&&!/[a-z\d\ud800-\udfff]/i.test(u)&&(u=u<"\x7f"?"%"+(u.charCodeAt(0)+256).toString(16).slice(1):t.gr(u)).length>1&&(o=o.slice(0,o.length-1)+u),
o):n},t.pr=i,s=function(n,e){return n=!n.includes("://")&&/%(?:2[36f]|3[adf])/i.test(n)?t.Zn(n).trim():n,t.pr(n,e)},
t.dr=s,f=function(n,e){return(e?n:encodeURI(n)).replace(/(?:%[\da-f]{2})+/gi,function(n){var e=t.Zn(n)
;return e.length<n.length?t.gr(e):n})},t.br=f,t.gr=function(n){
return n.replace(e.kn<64||false?/[\x00-\u0390\u03ca-\u4dff\u9fa6-\uffff\s]+/g:new RegExp("[^\\p{L}\\p{N}]+","ug"),encodeURIComponent)
},t.Bt=function(n){return(n=n.slice(0,8).toLowerCase()).startsWith("http://")?7:"https://"===n?8:0},t.fl=function(n){
return n.trim()?n.trim().split(/[.\s]+/g).sort().filter(function(n){return!!n}):[]},l=function(n){
return n&&[n[0],n[1],t.fl(n[2]||"")]||0},t.wo=l,t.nr=function(n,t,e){try{return new RegExp(n,t)}catch(r){
0===e||console.log("%c/%s/%s","color:#c41a16",n,t,"is not a valid regexp.")}return null},
t.vu="undefined"!=typeof URLPattern&&URLPattern?function(n,t){var r,o
;n.endsWith("*")||(o=(r=n.indexOf("://"))>0?n.indexOf("/",r+3):-1,
n+=r>0&&(o===n.length-1||o<0)?(o>0?"":"/")+"*\\?*#*":"");try{
return e.kn<107?new URLPattern(n):new URLPattern(n,"http://localhost",{ignoreCase:true})}catch(e){
0===t||console.log("%c/%s/%s","color:#c41a16",n,"is not a valid URLPattern.")}return null}:function(){return null},
m=null,b=function(n){m=n},t.Gn=function(){var n=new Promise(b),t=m;return m=null,{Jn:n,Ln:e.kn<49?function(n){
Promise.resolve(n).then(t)}:t}},t.uo=e.kn>70&&true?function(n){queueMicrotask(n)}:function(n){Promise.resolve().then(n)
},t.ko=function(n,t,e){var r=function(){var a,u,c;for(e&&false===e()&&(o=0),a=0,
u=0;a<32&&u<128&&o>0;)if((c=t(n[--o]))>0)a++,u+=c;else if(c<0)break;o>0&&(n.length=o,setTimeout(r,150))},o=n.length
;o>=10?setTimeout(r,17):n.length>0&&r()},t.Ju=function(n,r){var o,a;return o=!r&&n.endsWith(".json"),
n=r||n.includes("/")?n:"/front/"+n,!r||e.kn>=48?fetch(n).then(function(n){return o?n.json().then(function(n){
return new Map(Object.entries(n))}):r?"blob"===r?n.blob():n.arrayBuffer():n.text()
}):((a=new XMLHttpRequest).open("GET",n,true),a.responseType=o?"json":r||"text",new Promise(function(n){
a.onload=function(){var e,o,a=this.response;if("string"==typeof a||r)n(a);else{for(o in t.Eu(a),e=new Map,
a)e.set(o,a[o]);n(e)}},a.send()}))},d=function(n,r){var o,a,u,c,i=0;return r=r||1e4,e.kn>65?(a=new AbortController,
i=setTimeout(a.abort.bind(a),r),o=(o=fetch(n,{cache:"force-cache",signal:a.signal})).then(function(n){
return n.status>=300||n.status<200?null:n.blob().catch(function(n){return console.log("on reading response:",n),0})
},function(n){return console.log("on requesting",n),null})):(u=new XMLHttpRequest,c=t.Gn(),u.open("GET",n,true),
u.responseType="blob",u.onload=function(){c.Ln(u.status<300&&u.status>=200?u.response:null)},u.onerror=function(){
c.Ln(null)},i=setTimeout(function(){u.onload=u.onerror=null,c.Ln(0),u.abort()},r),u.send(),o=c.Jn),i&&o.then(function(){
clearTimeout(i)}),o.then(function(n){return n?t.Au(n.slice(0,Math.min(16,n.size),n.type)).then(function(t){return[n,t]
}):(console.clear(),n)})},t.Io=d,g=function(n){var e=new FileReader,r=t.Gn();return e.onload=function(n){
r.Ln(n.target.result)},e.readAsDataURL(n),r.Jn};t.Au=g,t.ct=function(n){return n.replace(/[$()*+.?\[\\\]\^{|}]/g,"\\$&")
},p="",v=0,t.Ou=function(n){var t,e=Date.now();if(e-v>8e3){if(!n)return"";t=new Uint8Array(8),crypto.getRandomValues(t),
p=t.reduce(function(n,t){return n+(t<16?"0":"")+t.toString(16)},"")}return v=e,p},t.Z=function(n){
if(null!=n&&false!==n){
for(n="string"!=typeof n?"number"==typeof n?[n,.5]:true===n?[.5,.5]:n instanceof Array?n:[+n.x||0,+n.y||0,+n.s||0]:n.trim().split(/[\s,]+/).map(function(n,t){
return"count"===n&&t<2?n:isNaN(+n)?t<2?.5:0:+n});n.length<2;)n.push(.5);for(;n.length<3;)n.push(0)
;var t="count"===n[0]||"count"===n[1];return{x:n[0],y:n[1],n:t?0:1,s:t?+n[2]||.01:0}}},t.la=function(n){var t,e,r,o=""
;for(t=0,e=n.length-1;t<e;t++)(r=n[t]).trimRight()&&n.indexOf(r,t+1)<0&&(o+=r);return o},t.now=function(){
return new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toJSON().slice(0,-5).replace("T"," ")},t.Fu=function(){
return/\.(?:avif|bmp|gif|icon?|jpe?g|a?png|svg|tiff?|webp)$/i},t.isNotPriviledged=function(n){var t=n.s.mr
;return!(t.startsWith("chrome")||t.startsWith("edge"))},w=function(n,t){
for(var e,r=[],o=0,a=-1,u=0,c=n.length;o<c;o++)switch(n[o]){case"#":case"&":"#"===n.charAt(o+1)&&(r.push([o+1,c]),
o=n.length);break;case"(":case")":case"?":case"+":t&&(c=o);break;case":":u||t&&(c=o);break;case"{":case"[":u++||(a=o)
;break;case"]":case"}":--u||r.push([a,o+1]);break;case'"':e=/^"([^"\\]|\\[^])*"/.exec(n.slice(o)),
u||e&&r.push([o,o+e[0].length]),o+=e?e[0].length-1:0;break;default:
o+=(e=/^(?:[$a-zA-Z_][$\w]*|\d[\d.eE+-]|,?\s+)/.exec(n.slice(o)))?e[0].length-1:0}return[r,c]},t.tryParse=function(n){
try{return JSON.parse(n)}catch(t){return n}},h=function(n){var e,r,o,a,u=w(n,1),c=u[0],i=u[1],s="",f=0;for(e of c){
if(o=e[1],"#"===n[r=e[0]])break;"="!==n[r-1]||n[o]&&"&"!==n[o]||(s+=n.slice(f,r),f=o,
s+="string"!=typeof(a=t.tryParse(n.slice(r,o)))||a.length!==o-r?JSON.stringify(a).replace(/[%\s&]/g,function(n){
return"\\u"+(n.charCodeAt(0)+65536).toString(16).slice(1)}):a.replace(/&/g,"%26"))}return[s+=n.slice(f,i),i]},t.al=h,
t.splitWhenKeepExpressions=function(n,t){for(var e=w(n)[0],r=-1,o=0,a=0,u=[];(r=n.indexOf(t,r+1))>=0;){
for(;o<e.length&&r>=e[o][1];)o++;o<e.length&&r>=e[o][0]?r=e[o][1]-1:(u.push(n.slice(a,r)),a=r+1)}
return u.push(n.slice(a)),u}});