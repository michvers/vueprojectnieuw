(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],l=0,b=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(b.length)b.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3607fe2d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}c[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},a=Object(r["h"])("Home"),o=Object(r["h"])(" | "),i=Object(r["h"])("About");function u(e,t){var n=Object(r["w"])("router-link"),u=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",c,[Object(r["i"])(n,{to:"/"},{default:Object(r["C"])((function(){return[a]})),_:1}),o,Object(r["i"])(n,{to:"/about"},{default:Object(r["C"])((function(){return[i]})),_:1})]),Object(r["i"])(u)],64)}n("9e22");var s=n("6b0d"),l=n.n(s);const d={},b=l()(d,[["render",u]]);var p=b,f=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j=n("cf05"),v=n.n(j),O={class:"home"},m=Object(r["g"])("img",{alt:"Vue logo",src:v.a},null,-1),g=Object(r["h"])(" Vorige"),h=Object(r["h"])(" Volgende ");function y(e,t,n,c,a,o){var i=Object(r["w"])("Ticket"),u=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["f"])("div",O,[m,(Object(r["r"])(!0),Object(r["f"])(r["a"],null,Object(r["v"])(a.events,(function(e){return Object(r["r"])(),Object(r["d"])(i,{key:e.id,singleEvent:e},null,8,["singleEvent"])})),128)),1!=n.page?(Object(r["r"])(),Object(r["d"])(u,{key:0,class:"btn btn-primary",to:{name:"Home",query:{page:n.page-1}},rel:"prev"},{default:Object(r["C"])((function(){return[g]})),_:1},8,["to"])):Object(r["e"])("",!0),o.hasNextPage?(Object(r["r"])(),Object(r["d"])(u,{key:1,class:"btn btn-primary",to:{name:"Home",query:{page:n.page+1}},rel:"next"},{default:Object(r["C"])((function(){return[h]})),_:1},8,["to"])):Object(r["e"])("",!0)])}n("a4d3"),n("e01a");var k={class:"card border-dark mb-3 d-block mx-auto",style:{"max-width":"18rem"}},w={class:"card-header"},E={class:"card-body text-dark"},x={class:"card-title"},T={class:"card-text"},_={class:"alert-danger"};function C(e,t,n,c,a,o){var i=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["d"])(i,{to:{name:"TicketDetails",params:{id:n.singleEvent.id}}},{default:Object(r["C"])((function(){return[Object(r["g"])("div",k,[Object(r["g"])("div",w,Object(r["y"])(n.singleEvent.title),1),Object(r["g"])("div",E,[Object(r["g"])("h5",x,Object(r["y"])(n.singleEvent.date)+" - "+Object(r["y"])(n.singleEvent.time),1),Object(r["g"])("p",T,Object(r["y"])(n.singleEvent.description),1),Object(r["g"])("p",_,"Locatie:"+Object(r["y"])(n.singleEvent.location),1)])])]})),_:1},8,["to"])}var P={name:"Ticket",props:{singleEvent:Object}};const D=l()(P,[["render",C]]);var H=D,A=n("bc3a"),L=n.n(A),R=L.a.create({baseURL:"https://my-json-server.typicode.com/Neverlanders/fakejson",withCredentials:!1,headers:{Accept:"application/json","Content-type":"application/json"}}),S={getEvents:function(e,t){return R.get("/events?_limit="+e+"&_page="+t)},getEvent:function(e){return R.get("/events/"+e)}},q={name:"Home",props:["page"],components:{Ticket:H},data:function(){return{events:null,totalEvents:0}},created:function(){var e=this;Object(r["B"])((function(){e.events=null,S.getEvents(2,e.page).then((function(t){e.events=t.data,e.totalEvents=t.headers["x-total-count"]})).catch((function(e){console.log(e)}))}))},computed:{hasNextPage:function(){var e=Math.ceil(this.totalEvents/2);return this.page<e}}};const M=l()(q,[["render",y]]);var N=M,V={key:0,class:"card border-dark mb-3 d-block mx-auto",style:{"max-width":"18rem"}},z={class:"card-header"},J={class:"card-body text-dark"},B={class:"card-title"},I={class:"card-text"},U={class:"alert-danger"};function $(e,t,n,c,a,o){return n.event?(Object(r["r"])(),Object(r["f"])("div",V,[Object(r["g"])("div",z,Object(r["y"])(n.event.title),1),Object(r["g"])("div",J,[Object(r["g"])("h5",B,Object(r["y"])(n.event.date)+" - "+Object(r["y"])(n.event.time),1),Object(r["g"])("p",I,Object(r["y"])(n.event.description),1),Object(r["g"])("p",U,"Locatie:"+Object(r["y"])(n.event.location),1)])])):Object(r["e"])("",!0)}var F={props:["event"]};const G=l()(F,[["render",$]]);var K=G;function Q(e,t,n,c,a,o){return Object(r["r"])(),Object(r["f"])("h1",null,"Dit is de edit pagina")}var W={props:["event"]};const X=l()(W,[["render",Q]]);var Y=X,Z={id:"nav"},ee=Object(r["h"])(" Details "),te=Object(r["h"])(" Edit "),ne=Object(r["h"])(" Register ");function re(e,t,n,c,a,o){var i=Object(r["w"])("router-link"),u=Object(r["w"])("router-view");return Object(r["r"])(),Object(r["f"])("div",Z,[Object(r["i"])(i,{to:{name:"TicketDetails",params:{id:n.id}}},{default:Object(r["C"])((function(){return[ee]})),_:1},8,["to"]),Object(r["i"])(i,{to:{name:"TicketEdit",params:{id:n.id}}},{default:Object(r["C"])((function(){return[te]})),_:1},8,["to"]),Object(r["i"])(i,{to:{name:"TicketRegister",params:{id:n.id}}},{default:Object(r["C"])((function(){return[ne]})),_:1},8,["to"]),Object(r["i"])(u,{event:a.event},null,8,["event"])])}var ce={name:"TicketDetails",props:["id"],data:function(){return{event:null}},created:function(){var e=this;S.getEvent(this.id).then((function(t){e.event=t.data})).catch((function(t){console.log(t),e.$router.push({name:"404Resource",params:{resource:"event"}})}))}};const ae=l()(ce,[["render",re]]);var oe=ae;function ie(e,t,n,c,a,o){return Object(r["r"])(),Object(r["f"])("h1",null,"Dit is de register pagina")}var ue={props:["event"]};const se=l()(ue,[["render",ie]]);var le=se,de=Object(r["g"])("h1",null,"De { resource } die u zoekt is niet langer aanwezig!",-1),be=Object(r["h"])("Home");function pe(e,t,n,c,a,o){var i=Object(r["w"])("router-link");return Object(r["r"])(),Object(r["f"])(r["a"],null,[de,Object(r["i"])(i,{class:"btn btn-success",to:{name:"Home"}},{default:Object(r["C"])((function(){return[be]})),_:1})],64)}var fe={props:{resource:{type:String,required:!0,default:"de pagina"}}};const je=l()(fe,[["render",pe]]);var ve=je,Oe=[{path:"/",name:"Home",component:N,props:function(e){return{page:parseInt(e.query.page)||1}}},{path:"/about-us",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/about",redirect:{name:"About"}},{path:"/events/:id",name:"TicketLayout",props:!0,component:oe,children:[{path:"",name:"TicketDetails",component:K},{path:"/edit",name:"TicketEdit",component:Y},{path:"/register",name:"TicketRegister",component:le}]},{path:"/event/:id",redirect:function(e){return{name:"TicketDetails",params:{id:e.params.id}}},children:[{path:"edit",redirect:function(e){return{name:"TicketEdit",params:{id:e.params.id}}}}]},{path:"/:catchAll(.*)",name:"P404",component:ve},{path:"/404/:resources",name:"404Resource",component:ve,props:!0}],me=Object(f["a"])({history:Object(f["b"])("/"),routes:Oe}),ge=me,he=n("5502"),ye=Object(he["a"])({state:{},mutations:{},actions:{},modules:{}});n("7b17"),n("ab8b");Object(r["c"])(p).use(ye).use(ge).mount("#app")},"6acc":function(e,t,n){},"9e22":function(e,t,n){"use strict";n("6acc")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.257b3f00.js.map