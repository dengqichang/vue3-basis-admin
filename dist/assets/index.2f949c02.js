import{r as y,o as c,c as d,a as I,u as k,b as $,d as C,e as E,f as z,g as h,w as L,h as N,i as O,j as g,n as P,k as M,l as w,m as B,I as _,p as j}from"./vendor.28ad35fb.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}};A();var v=(e,t)=>{const o=e.__vccOpts||e;for(const[s,r]of t)o[s]=r;return o};const q={};function R(e,t){const o=y("router-view");return c(),d(o)}var T=v(q,[["render",R]]);const b=Symbol(),V=I({state:{collapse:!1},mutations:{setCollopse:e=>{e.collapse=!e.collapse}},getters:{}});function Y(){return k(b)}const D="modulepreload",S={},H="/",W=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${H}${s}`,s in S)return;S[s]=!0;const r=s.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":D,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((a,f)=>{i.addEventListener("load",a),i.addEventListener("error",f)})})).then(()=>t())},F=[{path:"/",redirect:"/index"},{path:"/index",component:()=>W(()=>import("./Index.ce5384e7.js"),["assets/Index.ce5384e7.js","assets/Index.8dd9cc6a.css","assets/vendor.28ad35fb.js"])}];var K=$({history:C(),routes:F});const l=(e,t,o)=>{o=Math.max(Math.min(o,1),0);let s=parseInt(e.substring(1,3),16),r=parseInt(e.substring(3,5),16),n=parseInt(e.substring(5,7),16),i=parseInt(t.substring(1,3),16),a=parseInt(t.substring(3,5),16),f=parseInt(t.substring(5,7),16),u=Math.round(s*(1-o)+i*o),p=Math.round(r*(1-o)+a*o),m=Math.round(n*(1-o)+f*o);return u=("0"+(u||0).toString(16)).slice(-2),p=("0"+(p||0).toString(16)).slice(-2),m=("0"+(m||0).toString(16)).slice(-2),"#"+u+p+m},G=e=>{E({watch:!0,variables:{"--el-color-primary":e,"--el-color-primary-light-1":l("#ffffff",e,.9),"--el-color-primary-light-2":l("#ffffff",e,.8),"--el-color-primary-light-3":l("#ffffff",e,.7),"--el-color-primary-light-4":l("#ffffff",e,.6),"--el-color-primary-light-5":l("#ffffff",e,.5),"--el-color-primary-light-6":l("#ffffff",e,.4),"--el-color-primary-light-7":l("#ffffff",e,.3),"--el-color-primary-light-8":l("#ffffff",e,.2),"--el-color-primary-light-9":l("#ffffff",e,.1),"--el-color-primary-light-10":l("#000000",e,.9)},preserveStatic:!1})};const J=["xlink:href"],Q=z({props:{el:{type:Boolean,default:!1},name:{type:String,required:!0},color:{type:String,default:""},size:{type:[String,Number],default:"14"},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""}},setup(e){const t=e,o=h(()=>{let n={};return t.color&&(n.color=`${t.color}`),!t.width&&!t.height?(n.width=`${t.size}px`,n.height=`${t.size}px`):(n.width=`${t.width}px`,n.height=`${t.height}px`),n}),s=h(()=>`#icon-${t.name}`),r=h(()=>t.name?`svg-icon icon-${t.name}`:"svg-icon");return(n,i)=>{const a=y("el-icon");return e.el?(c(),d(a,{key:0,size:t.size,color:t.color},{default:L(()=>[(c(),d(w(t.name)))]),_:1},8,["size","color"])):(c(),N("svg",{key:1,class:P(g(r)),style:M(g(o))},[O("use",{"xlink:href":g(s)},null,8,J)],6))}}});var U=v(Q,[["__scopeId","data-v-3ae559d7"]]);G(localStorage.getItem("ElementPlusTheme")||"#409eff");const x=B(T);Object.keys(_).forEach(e=>{x.component(e,_[e])});x.use(V,b).use(K).use(j).component("svg-icon",U).mount("#app");export{v as _,G as i,Y as u};
