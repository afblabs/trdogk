import{aT as d,Z as u,g as l,h as _,z as m,o as b,s as f,j as y,v}from"./entry.38ac5f2b.js";function C(c={}){const{copy:t,isSupported:i}=d(),o=u();function a(e,n={},r={}){i&&t(e).then(()=>{!n.title&&!n.description||o.add({...n,...c})},function(p){o.add({...r,description:r.description||p.message,...c})})}return{copy:a}}const k=l({__name:"ProseCodeButton",props:{code:{}},setup(c){const t=c,i={icon:{copy:"i-heroicons-clipboard-document",copied:"i-heroicons-clipboard-document-check"}},{ui:o}=_("content.prose.code.button",void 0,i,void 0,!0),a=C({timeout:2e3}),e=m(o.value.icon.copy);function n(){a.copy(t.code,{title:"Copied to clipboard!"}),e.value=o.value.icon.copied,setTimeout(()=>{e.value=o.value.icon.copy},2e3)}return(r,p)=>{const s=v;return b(),f(s,{icon:y(e),color:"gray",variant:"link",size:"xs","aria-label":"Copy code to clipboard",tabindex:"-1",onClick:n},null,8,["icon"])}}});export{k as _};