import{_ as l}from"./ProseCode.vue.e399b465.js";import{g as n,o as s,s as i,w as r,a as o,n as g,a1 as u,r as m}from"./entry.b60aa2ff.js";import"./ProseCodeIcon.vue.d743e987.js";import"./ProseCodeButton.vue.bdc5897b.js";const p=n({__name:"ProsePre",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]},meta:{type:String,default:null},class:{type:String,default:null},style:{type:[String,Object],default:null}},setup(e){return(t,c)=>{const a=l;return s(),i(a,{code:e.code,language:e.language,filename:e.filename,highlights:e.highlights,meta:e.meta},{default:r(()=>[o("pre",{class:g(t.$props.class),style:u(e.style)},[m(t.$slots,"default")],6)]),_:3},8,["code","language","filename","highlights","meta"])}}});export{p as default};