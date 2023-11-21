(function(){"use strict";var e={6796:function(e,t,n){var o=n(9242),r=n(3396);const i={id:"globalConfig"},a={class:"main-container"},s={class:"main-container"},u={class:"main-container"};function c(e,t,n,o,c,l){const d=(0,r.up)("Navbar"),p=(0,r.up)("router-view"),f=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",a,[(0,r.Wm)(d,{logo:c.logo_src,alt:c.app_name},null,8,["logo","alt"])]),(0,r._)("div",s,[(0,r.Wm)(p)]),(0,r._)("div",u,[(0,r.Wm)(f)])])}const l=e=>((0,r.dD)("data-v-3c564e8c"),e=e(),(0,r.Cn)(),e),d={id:"nav"},p=l((()=>(0,r._)("h1",null,"Açaí Roots",-1)));function f(e,t,n,o,i,a){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",d,[(0,r.Wm)(s,{to:"/",id:"logo-url"},{default:(0,r.w5)((()=>[p])),_:1}),(0,r.Wm)(s,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(s,{to:"/Orders"},{default:(0,r.w5)((()=>[(0,r.Uk)("Pedidos")])),_:1})])])}var m={name:"Navbar",props:["logo","alt"]},v=n(89);const h=(0,v.Z)(m,[["render",f],["__scopeId","data-v-3c564e8c"]]);var g=h;const y=e=>((0,r.dD)("data-v-7a963c29"),e=e(),(0,r.Cn)(),e),_={id:"footer"},b=y((()=>(0,r._)("p",null," Açaí Roots ©2023",-1))),w=[b];function x(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("footer",_,w)}var k={name:"Footer"};const z=(0,v.Z)(k,[["render",x],["__scopeId","data-v-7a963c29"]]);var O=z,S={components:{Navbar:g,Footer:O},data(){return{logo_src:n(6949),app_name:"Açaí Roots"}}};const F=(0,v.Z)(S,[["render",c]]);var C=F,D=n(2483);const j={class:"main-container"},A=(0,r._)("h1",null,"Monte o pedido:",-1);function E(e,t,n,o,i,a){const s=(0,r.up)("Banner"),u=(0,r.up)("AcaiForm");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r._)("div",j,[A,(0,r.Wm)(u)])],64)}const P={id:"main-banner"};function N(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",P)}var B={name:"Banner"};const T=(0,v.Z)(B,[["render",N],["__scopeId","data-v-4cfdf847"]]);var M=T,I=n(7139);const U=e=>((0,r.dD)("data-v-49373d51"),e=e(),(0,r.Cn)(),e),W={class:"input-container"},H=U((()=>(0,r._)("label",{for:"name"},"Nome do cliente: ",-1))),Z={class:"input-container"},q=U((()=>(0,r._)("label",{for:"size"},"Escolha o tamanho do copo: ",-1))),L=U((()=>(0,r._)("option",{value:""},"Selecione o tamanho do copo",-1))),V=["value"],K={class:"input-container"},R=U((()=>(0,r._)("label",{for:"typeofcup"},"Fruta de base: ",-1))),Y=U((()=>(0,r._)("option",{value:""},"Selecione o tipo ",-1))),J=["value"],$={id:"extrafruits-container",class:"input-container"},G=U((()=>(0,r._)("label",{id:"extrafruits-title",for:"extrafruits"},[(0,r.Uk)(" Escolha as frutas:"),(0,r._)("i",null,"(opcional)")],-1))),Q=["value"],X=U((()=>(0,r._)("div",{class:"input-container"},[(0,r._)("input",{class:"submit-btn",type:"submit",value:"Finalizar pedido"})],-1)));function ee(e,t,n,i,a,s){const u=(0,r.up)("Message");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.wy)((0,r.Wm)(u,{msg:a.msg},null,8,["msg"]),[[o.F8,a.msg]]),(0,r._)("div",null,[(0,r._)("form",{id:"acai-form",method:"POST",onSubmit:t[4]||(t[4]=(...e)=>s.createCup&&s.createCup(...e))},[(0,r._)("div",W,[H,(0,r.wy)((0,r._)("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>a.name=e),placeholder:"Digite o nome aqui...",title:"O nome deve conter de 3 a 20 letras",maxlength:"20",required:""},null,512),[[o.nr,a.name]])]),(0,r._)("div",Z,[q,(0,r.wy)((0,r._)("select",{name:"size",id:"size",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>a.size=e),title:"Selecione um item na lista"},[L,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.sizes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.type},(0,I.zw)(e.type),9,V)))),128))],512),[[o.bM,a.size]])]),(0,r._)("div",K,[R,(0,r.wy)((0,r._)("select",{name:"typeofcup",id:"typeofcup",title:"Selecione um item na lista",required:"","onUpdate:modelValue":t[2]||(t[2]=e=>a.typeofcup=e)},[Y,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.typeofcups,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.type},(0,I.zw)(e.type),9,J)))),128))],512),[[o.bM,a.typeofcup]])]),(0,r._)("div",$,[G,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.extrafruits_data,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"checkbox-container",key:e.id},[(0,r.wy)((0,r._)("input",{type:"checkbox",name:"extrafruits","onUpdate:modelValue":t[3]||(t[3]=e=>a.extrafruits=e),value:e.type},null,8,Q),[[o.e8,a.extrafruits]]),(0,r._)("span",null,(0,I.zw)(e.type),1)])))),128))]),X],32)])])}const te={class:"message-container"};function ne(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)("div",te,[(0,r._)("p",null,(0,I.zw)(n.msg),1)])}var oe={name:"Message",props:{msg:String}};const re=(0,v.Z)(oe,[["render",ne],["__scopeId","data-v-609750a0"]]);var ie=re,ae={name:"AcaiForm",components:{Message:ie},data(){return{sizes:null,typeofcups:null,extrafruits_data:null,name:null,size:null,typeofcup:null,extrafruits:[],msg:null}},methods:{async getIngredients(){const e=await fetch("https://schedule-management.fly.dev/ingredients"),t=await e.json();this.sizes=t.sizes,this.priceBySize=this.sizes.reduce(((e,t)=>(e.set(t.type,parseFloat(t.price)),e)),new Map),this.typeofcups=t.typeofcups,this.extrafruits_data=t.extrafruits,this.priceByExtraFruits=this.extrafruits_data.reduce(((e,t)=>(e.set(t.type,parseFloat(t.price)),e)),new Map)},async createCup(e){e.preventDefault(),this.totalPrice=parseFloat(this.priceBySize.get(this.size))+parseFloat(this.extrafruits.reduce(((e,t)=>(e+=this.priceByExtraFruits.get(t),e)),0));const t={name:this.name,size:this.size,typeofcup:this.typeofcup,extrafruits:Array.from(this.extrafruits),status:"Solicitado",totalPrice:this.totalPrice.toFixed(2)};console.log(this.priceByExtraFruits),console.log(this.priceBySize),console.log(t);const n=JSON.stringify(t),o=await fetch("https://schedule-management.fly.dev/orders",{method:"POST",headers:{"content-Type":"application/json"},body:n}),r=await o.json(),i=r.objectId;this.msg=`Pedido ${i.substring(i.length-4)} finalizado com sucesso!`,setTimeout((()=>this.msg=""),3e3),this.name="",this.typeofcup="",this.size="",this.extrafruits=[]}},mounted(){this.getIngredients()},components:{Message:ie}};const se=(0,v.Z)(ae,[["render",ee],["__scopeId","data-v-49373d51"]]);var ue=se,ce={name:"HomeView",components:{Banner:M,AcaiForm:ue}};const le=(0,v.Z)(ce,[["render",E]]);var de=le;const pe=[{path:"/acai_roots",redirect:{name:"home"}},{path:"/",name:"home",component:de},{path:"/acai_roots/Orders",redirect:{name:"orders"}},{path:"/Orders",name:"orders",component:()=>n.e(231).then(n.bind(n,4231))}],fe=(0,D.p7)({history:(0,D.PO)("/acai_roots/"),routes:pe});var me=fe;(0,o.ri)(C).use(me).mount("#app"),document.title="Açaí Roots"},6949:function(e,t,n){e.exports=n.p+"img/logo.86d55410.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+".297a2ede.js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".3b777745.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="secondpart-vue-prject:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/acai_roots/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,i.parentNode&&i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={231:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],u=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunksecondpart_vue_prject"]=self["webpackChunksecondpart_vue_prject"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6796)}));o=n.O(o)})();
//# sourceMappingURL=app.ce242acb.js.map