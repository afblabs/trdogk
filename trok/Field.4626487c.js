import{g as u,h as f,i as y,o as r,c as o,a as i,n as s,j as t,t as d,k as n,r as g,d as v,m as k}from"./entry.b872ac74.js";const b=u({inheritAttrs:!1,__name:"Field",props:{name:{},description:{default:void 0},type:{default:void 0},required:{type:Boolean,default:!1},default:{default:void 0},class:{default:void 0}},setup(l){const p={wrapper:"mt-5",container:"flex items-start gap-x-2.5 font-mono text-sm",name:"rounded-md font-semibold text-primary",required:"text-gray-500 dark:text-gray-400",type:"text-right",label:"flex flex-1 gap-x-2.5",description:"mt-3 mb-0 text-gray-600 dark:text-gray-300 text-sm space-y-3"},c=l,{ui:a,attrs:m}=f("content.field",void 0,p,y(c,"class"),!0);return(e,x)=>(r(),o("div",k({class:t(a).wrapper},t(m)),[i("div",{class:s(t(a).container)},[i("div",{class:s(t(a).label)},[i("span",{class:s(t(a).name)},d(e.name),3),e.required?(r(),o("span",{key:0,class:s(t(a).required)},"required",2)):n("",!0)],2),e.type?(r(),o("div",{key:0,class:s(t(a).type)},d(e.type),3)):n("",!0)],2),e.$slots.default||e.description?(r(),o("div",{key:0,class:s(t(a).description)},[g(e.$slots,"default",{},()=>[v(d(e.description),1)])],2)):n("",!0)],16))}});export{b as default};