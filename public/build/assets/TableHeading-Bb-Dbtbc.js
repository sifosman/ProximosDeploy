import{j as t,a as c,r as a}from"./app-_52EEPm8.js";function g({links:r}){return t.jsx("nav",{className:"text-center mt-4",children:r.map(e=>t.jsx(c,{preserveScroll:!0,href:e.url||"",className:"inline-block py-2 px-3 rounded-lg text-gray-200 text-xs "+(e.active?"bg-gray-950 ":" ")+(e.url?"hover:bg-gray-950":"!text-gray-500 cursor-not-allowed "),dangerouslySetInnerHTML:{__html:e.label}},e.label))})}function i({title:r,titleId:e,...l},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":e},l),r?a.createElement("title",{id:e},r):null,a.createElement("path",{fillRule:"evenodd",d:"M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const d=a.forwardRef(i);function u({title:r,titleId:e,...l},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":e},l),r?a.createElement("title",{id:e},r):null,a.createElement("path",{fillRule:"evenodd",d:"M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z",clipRule:"evenodd"}))}const x=a.forwardRef(u);function m({name:r,sortable:e=!0,sort_field:l=null,sort_direction:n=null,sortChanged:s=()=>{},children:o}){return t.jsx("th",{onClick:w=>s(r),children:t.jsxs("div",{className:"px-3 py-3 flex items-center justify-between gap-1 cursor-pointer",children:[o,e&&t.jsxs("div",{children:[t.jsx(x,{className:"w-4 "+(l===r&&n==="asc"?"text-white":"")}),t.jsx(d,{className:"w-4 -mt-2 "+(l===r&&n==="desc"?"text-white":"")})]})]})})}export{g as P,m as T};
