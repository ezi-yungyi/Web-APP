import{j as e,c as n,W as c,Y as m}from"./app-DM-y8oy4.js";import{B as x}from"./button-DBOqfNRQ.js";import{G as d}from"./GuestLayout-APHH3p4T.js";import{c as u}from"./createLucideIcon-c5AOdRZc.js";import"./index-BXrqN9aj.js";import"./toast-CVRs_JVZ.js";import"./card-BvaaXfYT.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=u("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);function f({active:t=!1,className:s="",children:i,...r}){return e.jsx(n,{...r,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(t?"border-indigo-400 text-gray-900 focus:border-indigo-700":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700")+s,children:i})}function N({status:t,user:s}){const{post:i,processing:r}=c({}),o=l=>{l.preventDefault(),i(route("verification.send"))};return e.jsxs(d,{children:[e.jsx(m,{title:"Email Verification"}),e.jsxs("form",{onSubmit:o,className:"pt-2",children:[e.jsxs("div",{className:"flex flex-col items-center justify-between fade-in-out",children:[e.jsx("h2",{className:" text-xl font-bold text-center",children:"Last Step Only!"}),e.jsx("div",{className:"text-xs text-center text-gray-600",children:"Your email must be verify to signing up"}),e.jsx("div",{className:"py-3 flex justify-center items-center text-base text-start text-gray-600",children:e.jsxs("p",{className:"flex gap-1",children:[s.data.email,e.jsx(f,{href:route("verification.email"),active:!0,children:e.jsx(a,{className:"size-4"})})]})}),t==="verification-link-sent"?e.jsx("div",{className:"text-sm font-medium text-green-600",children:"Verification link had sent to your email."}):e.jsxs("div",{className:"text-xs font-medium flex text-neutral-600 items-center",children:["If this is not your email, click"," ",e.jsx(a,{className:"size-2.5 mx-1"})," to change it."]})]}),e.jsxs("div",{className:"pt-4 flex flex-col gap-3",children:[e.jsx(x,{disabled:r,className:"w-full rounded-xl",children:"Verify Email"}),e.jsx(n,{href:route("logout"),method:"post",as:"button",className:"w-full rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Back"})]})]})]})}export{N as default};
