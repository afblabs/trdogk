import s from"./ContentSlot.59967b05.js";import{g as o,E as u,G as f,aI as m}from"./entry.4a137c96.js";import"./node.e4a9c3bc.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=m(),{between:n,default:a}=u(),r=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};