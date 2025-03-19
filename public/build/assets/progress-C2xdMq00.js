import{c as f}from"./createLucideIcon-c5AOdRZc.js";import{r as u,j as p}from"./app-DM-y8oy4.js";import{P as b,e as I}from"./index-BXrqN9aj.js";/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=f("MessageCircleQuestion",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=f("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.447.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=f("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);function R(e,r=[]){let n=[];function s(c,i){const o=u.createContext(i),a=n.length;n=[...n,i];function d(v){const{scope:l,children:h,...x}=v,_=(l==null?void 0:l[e][a])||o,j=u.useMemo(()=>x,Object.values(x));return p.jsx(_.Provider,{value:j,children:h})}function P(v,l){const h=(l==null?void 0:l[e][a])||o,x=u.useContext(h);if(x)return x;if(i!==void 0)return i;throw new Error(`\`${v}\` must be used within \`${c}\``)}return d.displayName=c+"Provider",[d,P]}const t=()=>{const c=n.map(i=>u.createContext(i));return function(o){const a=(o==null?void 0:o[e])||c;return u.useMemo(()=>({[`__scope${e}`]:{...o,[e]:a}}),[o,a])}};return t.scopeName=e,[s,E(t,...r)]}function E(...e){const r=e[0];if(e.length===1)return r;const n=()=>{const s=e.map(t=>({useScope:t(),scopeName:t.scopeName}));return function(c){const i=s.reduce((o,{useScope:a,scopeName:d})=>{const v=a(c)[`__scope${d}`];return{...o,...v}},{});return u.useMemo(()=>({[`__scope${r.scopeName}`]:i}),[i])}};return n.scopeName=r.scopeName,n}var g="Progress",y=100,[A,F]=R(g),[L,V]=A(g),N=u.forwardRef((e,r)=>{const{__scopeProgress:n,value:s=null,max:t,getValueLabel:c=Q,...i}=e;(t||t===0)&&!M(t)&&console.error(D(`${t}`,"Progress"));const o=M(t)?t:y;s!==null&&!k(s,o)&&console.error(O(`${s}`,"Progress"));const a=k(s,o)?s:null,d=m(a)?c(a,o):void 0;return p.jsx(L,{scope:n,value:a,max:o,children:p.jsx(b.div,{"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":m(a)?a:void 0,"aria-valuetext":d,role:"progressbar","data-state":w(a,o),"data-value":a??void 0,"data-max":o,...i,ref:r})})});N.displayName=g;var C="ProgressIndicator",$=u.forwardRef((e,r)=>{const{__scopeProgress:n,...s}=e,t=V(C,n);return p.jsx(b.div,{"data-state":w(t.value,t.max),"data-value":t.value??void 0,"data-max":t.max,...s,ref:r})});$.displayName=C;function Q(e,r){return`${Math.round(e/r*100)}%`}function w(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function m(e){return typeof e=="number"}function M(e){return m(e)&&!isNaN(e)&&e>0}function k(e,r){return m(e)&&!isNaN(e)&&e<=r&&e>=0}function D(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${y}\`.`}function O(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${y} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var S=N,U=$;const z=u.forwardRef(({className:e,value:r,...n},s)=>p.jsx(S,{ref:s,className:I("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",e),...n,children:p.jsx(U,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})}));z.displayName=S.displayName;export{H as M,z as P,X as Q,B as U};
