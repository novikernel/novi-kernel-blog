import{r as f}from"./index.Cd_vQiNd.js";var x={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function m(){if(d)return n;d=1;var o=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(a,e,r){var i=null;if(r!==void 0&&(i=""+r),e.key!==void 0&&(i=""+e.key),"key"in e){r={};for(var u in e)u!=="key"&&(r[u]=e[u])}else r=e;return e=r.ref,{$$typeof:o,type:a,key:i,ref:e!==void 0?e:null,props:r}}return n.Fragment=s,n.jsx=l,n.jsxs=l,n}var p;function h(){return p||(p=1,x.exports=m()),x.exports}var t=h();const c="block h-[3px] w-7 bg-neutral-dark transition-all duration-300 ease-in-out",v="translate-y-[8px] rotate-45 !bg-[#111]",j="opacity-0",k="translate-y-[-8px] rotate-[-45deg] !bg-[#111]";function E({navItems:o}){const[s,l]=f.useState(!1),a=()=>{l(!s)};return t.jsxs("div",{className:"lg:hidden",children:[t.jsxs("button",{onClick:a,"aria-label":"Toggle navigation",className:"flex flex-col gap-1.5 z-[60] relative",children:[t.jsx("span",{className:`${c} ${s?v:""}`}),t.jsx("span",{className:`${c} ${s?j:""}`}),t.jsx("span",{className:`${c} ${s?k:""}`})]}),t.jsx("div",{onClick:a,className:`fixed inset-0 bg-black/40 z-40 ${s?"":"hidden"}`}),t.jsx("nav",{className:`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 
                    transition-transform duration-300 ${s?"translate-x-0":"translate-x-full"}`,children:t.jsx("div",{className:"p-6 space-y-6",children:o.map(e=>t.jsx("a",{href:e.href,onClick:a,className:"block text-lg font-medium text-neutral-dark hover:text-accent-primary",children:e.title},e.href))})})]})}export{E as default};
