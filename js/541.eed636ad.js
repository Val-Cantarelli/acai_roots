"use strict";(self["webpackChunksecondpart_vue_prject"]=self["webpackChunksecondpart_vue_prject"]||[]).push([[541],{9075:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var s=a(3396);const d={id:"main-banner"};function n(e,t,a,n,l,i){const o=(0,s.up)("DashboardComp");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(o)])}var l=a(7139);const i=e=>((0,s.dD)("data-v-46d9079e"),e=e(),(0,s.Cn)(),e),o={key:0,id:"acai-table"},r=i((()=>(0,s._)("div",{class:"fixed-heading"},[(0,s._)("h1",null," Gerenciar pedidos: "),(0,s._)("div",{id:"acai-table-heading"},[(0,s._)("div",{class:"order-id"},"N˚"),(0,s._)("div",null,"Cliente"),(0,s._)("div",null,"Tamanho "),(0,s._)("div",null,"Fruta de base "),(0,s._)("div",null,"Frutas extras "),(0,s._)("div",null,"Total (R$)"),(0,s._)("div",null,"Ações ")])],-1))),c={id:"acai-table-rows"},u={class:"order-number"},v={key:0},h={key:1},p={class:"order-value"},g=["onChange"],_=["value","selected"],w=["onClick"],m={key:1,class:"noOrders"},b=i((()=>(0,s._)("h1",null,"Não há pedidos no momento!",-1))),y=[b];function f(e,t,a,d,n,i){return n.orders.length>0?((0,s.wg)(),(0,s.iD)("div",o,[r,(0,s._)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.orders,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"acai-table-row",key:e.objectId},[(0,s._)("div",u,(0,l.zw)(e.objectId.substring(e.objectId.length-4)),1),(0,s._)("div",null,(0,l.zw)(e.name),1),(0,s._)("div",null,(0,l.zw)(e.size),1),(0,s._)("div",null,(0,l.zw)(e.typeofcup),1),(0,s._)("div",null,[e.extrafruits.length>0?((0,s.wg)(),(0,s.iD)("div",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.extrafruits,((e,t)=>((0,s.wg)(),(0,s.iD)("ul",{key:t},[(0,s._)("li",null,(0,l.zw)(e),1)])))),128))])):((0,s.wg)(),(0,s.iD)("div",h,"Sem extras"))]),(0,s._)("div",p,"R$ "+(0,l.zw)(e.totalPrice),1),(0,s._)("div",null,[(0,s._)("select",{name:"status",class:"status",onChange:t=>i.updateCup(t,e.objectId)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.status,(t=>((0,s.wg)(),(0,s.iD)("option",{value:t.type,key:t.objectId,selected:e.status==t.type},(0,l.zw)(t.type),9,_)))),128))],40,g),(0,s._)("button",{class:"delete-btn",onClick:t=>i.deleteCup(e.objectId)},"Cancelar",8,w)])])))),128))])])):((0,s.wg)(),(0,s.iD)("div",m,y))}var C={name:"DashboardComp",data(){return{orders:[],objectId:null,status:[]}},methods:{async getOrders(){const e=await fetch("https://schedule-management.fly.dev/orders"),t=await e.json();this.orders=t,this.getStatus()},async getStatus(){const e=await fetch("https://schedule-management.fly.dev/status"),t=await e.json();this.status=t},async deleteCup(e){try{await fetch(`https://schedule-management.fly.dev/orders/${e}`,{method:"DELETE"}),this.getOrders()}catch(t){console.log("Erro ao excluir pedido:",t)}},async updateCup(e,t){const a=e.target.value,s=JSON.stringify({status:a}),d=await fetch(`https://schedule-management.fly.dev/orders/${t}`,{method:"PATCH",headers:{"content-Type":"application/json"},mode:"cors",body:s});await d.json()}},mounted(){this.getOrders()}},D=a(89);const j=(0,D.Z)(C,[["render",f],["__scopeId","data-v-46d9079e"]]);var k=j,I={name:"Orders",components:{DashboardComp:k}};const z=(0,D.Z)(I,[["render",n],["__scopeId","data-v-e3f2605a"]]);var x=z}}]);
//# sourceMappingURL=541.eed636ad.js.map