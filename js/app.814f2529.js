(function(){"use strict";var e={7137:function(e,t,n){var o=n(9242),r=n(3396);function a(e,t,n,o,a,i){const u=(0,r.up)("Navbar"),s=(0,r.up)("router-view"),c=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u,{logo:a.logo_src,alt:a.app_name},null,8,["logo","alt"]),(0,r._)("div",null,[(0,r.Wm)(s)]),(0,r.Wm)(c)])}const i=e=>((0,r.dD)("data-v-093839e2"),e=e(),(0,r.Cn)(),e),u={id:"nav"},s=i((()=>(0,r._)("h1",null,"Make your cup",-1)));function c(e,t,n,o,a,i){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",u,[(0,r.Wm)(c,{to:"/",id:"logo-url"},{default:(0,r.w5)((()=>[s])),_:1}),(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(c,{to:"/Orders"},{default:(0,r.w5)((()=>[(0,r.Uk)("Pedidos")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(c,{to:"/SignUpView"},{default:(0,r.w5)((()=>[(0,r.Uk)("Cadastro/Log In")])),_:1})])])}var l={name:"Navbar",props:["logo","alt"]},d=n(89);const p=(0,d.Z)(l,[["render",c],["__scopeId","data-v-093839e2"]]);var f=p;const m=e=>((0,r.dD)("data-v-b6a0aae2"),e=e(),(0,r.Cn)(),e),v={id:"footer"},g=m((()=>(0,r._)("p",null," Make your bowl ©2023",-1))),h=[g];function y(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("footer",v,h)}var _={name:"Footer"};const b=(0,d.Z)(_,[["render",y],["__scopeId","data-v-b6a0aae2"]]);var w=b,k={components:{Navbar:f,Footer:w},data(){return{logo_src:n(6949),app_name:"Make your bowl now"}}};const x=(0,d.Z)(k,[["render",a]]);var C=x,D=n(2483);const O={class:"main-container"},z=(0,r._)("h1",null,"Monte o seu açaí:",-1);function S(e,t,n,o,a,i){const u=(0,r.up)("Banner"),s=(0,r.up)("AcaiForm");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u),(0,r._)("div",O,[z,(0,r.Wm)(s)])],64)}const j={id:"main-banner"};function N(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",j)}var A={name:"Banner"};const E=(0,d.Z)(A,[["render",N],["__scopeId","data-v-465f7495"]]);var F=E,M=n(7139);const T=e=>((0,r.dD)("data-v-5a4e4e62"),e=e(),(0,r.Cn)(),e),U={class:"input-container"},P=T((()=>(0,r._)("label",{for:"user_name"},"Nome do cliente: ",-1))),W={class:"input-container"},Z=T((()=>(0,r._)("label",{for:"size"},"Escolha o tamanho do copo: ",-1))),I=T((()=>(0,r._)("option",{value:""},"Selecione o tamanho do seu copo",-1))),B=["value"],H={class:"input-container"},L=T((()=>(0,r._)("label",{for:"typeofcup"},"Fruta de base: ",-1))),V=T((()=>(0,r._)("option",{value:""},"Selecione o tipo ",-1))),K=["value"],Y={id:"extra-fruits-container",class:"input-container"},q=T((()=>(0,r._)("label",{id:"extra-fruits-title",for:"extrafruits"}," Escolha as frutas (opcional): ",-1))),J=["value"],$=T((()=>(0,r._)("div",null,[(0,r._)("input",{type:"submit",class:"submit-button",value:"Finalizar meu pedido"})],-1)));function G(e,t,n,a,i,u){const s=(0,r.up)("Message");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.wy)((0,r.Wm)(s,{msg:i.msg},null,8,["msg"]),[[o.F8,i.msg]]),(0,r._)("div",null,[(0,r._)("form",{id:"acai-form",onSubmit:t[4]||(t[4]=(...e)=>u.createCup&&u.createCup(...e))},[(0,r._)("div",U,[P,(0,r.wy)((0,r._)("input",{type:"text",id:"user_name",name:"user_name","onUpdate:modelValue":t[0]||(t[0]=e=>i.user_name=e),placeholder:"Digite o seu nome aqui..."},null,512),[[o.nr,i.user_name]])]),(0,r._)("div",W,[Z,(0,r.wy)((0,r._)("select",{name:"size",id:"size","onUpdate:modelValue":t[1]||(t[1]=e=>i.size=e)},[I,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.sizes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.type},(0,M.zw)(e.type),9,B)))),128))],512),[[o.bM,i.size]])]),(0,r._)("div",H,[L,(0,r.wy)((0,r._)("select",{name:"typeofcup",id:"typeofcup","onUpdate:modelValue":t[2]||(t[2]=e=>i.typeofcup=e)},[V,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.typeofcups,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.type},(0,M.zw)(e.type),9,K)))),128))],512),[[o.bM,i.typeofcup]])]),(0,r._)("div",Y,[q,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.extra_fruitdata,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"checkbox-container",key:e.id},[(0,r.wy)((0,r._)("input",{type:"checkbox",name:"extrafruits","onUpdate:modelValue":t[3]||(t[3]=e=>i.extrafruits=e),value:e.type},null,8,J),[[o.e8,i.extrafruits]]),(0,r._)("span",null,(0,M.zw)(e.type),1)])))),128))]),$],32)])])}var Q=n(1976),R={name:"AcaiForm",components:{Message:Q.Z},data(){return{sizes:null,typeofcups:null,extra_fruitdata:null,user_name:null,size:null,typeofcup:null,extrafruits:[],msg:null}},methods:{async getIngredients(){const e=await fetch("http://localhost:8080/ingredients"),t=await e.json();console.log(t),this.sizes=t.sizes,this.typeofcups=t.typeofcups,this.extra_fruitdata=t.extrafruits},async createCup(e){e.preventDefault(),console.log("funcionando");const t={user_name:this.user_name,size:this.size,typeofcup:this.typeofcup,extrafruits:Array.from(this.extrafruits),status:"Solicitado"};console.log(t);const n=JSON.stringify(t),o=await fetch("http://localhost:8080/orders",{method:"POST",headers:{"content-Type":"application/json"},body:n}),r=await o.json();console.log(r),this.msg=`Pedido N ${r.id} finalizado com sucesso!`,setTimeout((()=>this.msg=""),3e3),this.user_name="",this.typeofcup="",this.size="",this.extrafruits=[]}},mounted(){this.getIngredients()},components:{Message:Q.Z}};const X=(0,d.Z)(R,[["render",G],["__scopeId","data-v-5a4e4e62"]]);var ee=X,te={name:"HomeView",components:{Banner:F,AcaiForm:ee}};const ne=(0,d.Z)(te,[["render",S]]);var oe=ne;const re=[{path:"/",name:"home",component:oe},{path:"/Orders",name:"orders",component:()=>n.e(514).then(n.bind(n,5514))},{path:"/SignUpView",name:"signup",component:()=>n.e(394).then(n.bind(n,9394))},{path:"/Login",name:"login",component:()=>n.e(628).then(n.bind(n,4628))}],ae=(0,D.p7)({history:(0,D.PO)("/makeyourcup/"),routes:re});var ie=ae;(0,o.ri)(C).use(ie).mount("#app")},1976:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(3396),r=n(7139);const a={class:"message-container"};function i(e,t,n,i,u,s){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("p",null,(0,r.zw)(n.msg),1)])}var u={name:"Message",props:{msg:String}},s=n(89);const c=(0,s.Z)(u,[["render",i],["__scopeId","data-v-aa42fd54"]]);var l=c},6949:function(e,t,n){e.exports=n.p+"img/logo.86d55410.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{394:"03763ec4",514:"e38d2a99",628:"3caf77b2"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".2656d75a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="secondpart-vue-prject:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[r];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/makeyourcup/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode&&a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),u=n.p+i;if(t(i,u))return r();e(o,u,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={514:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),u=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],u=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(s)var l=s(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},o=self["webpackChunksecondpart_vue_prject"]=self["webpackChunksecondpart_vue_prject"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7137)}));o=n.O(o)})();
//# sourceMappingURL=app.814f2529.js.map