import{r as s,j as a}from"./app-DM-y8oy4.js";import{c as Dn,a as he,g as H,b as G,d as M,D as yn,P as T,l as xe,m as ge,S as In,n as En,j as Sn,u as Pn,e as D,f as Nn,o as Tn,p as jn}from"./index-BXrqN9aj.js";import{u as An}from"./index-PHw5nAXF.js";import{h as On,a as kn,F as Ln,R as Gn,u as Me}from"./Combination-DVLYXFxg.js";import{c as _e,A as Fn,C as Kn,a as $n,R as Un}from"./index-Cc1j9ehy.js";import{c as Ce,R as Bn,I as Vn}from"./index-_zI8gevu.js";var ne=["Enter"," "],zn=["ArrowDown","PageUp","Home"],Re=["ArrowUp","PageDown","End"],Xn=[...zn,...Re],Yn={ltr:[...ne,"ArrowRight"],rtl:[...ne,"ArrowLeft"]},Hn={ltr:["ArrowLeft"],rtl:["ArrowRight"]},F="Menu",[k,Wn,Zn]=Dn(F),[I,be]=he(F,[Zn,_e,Ce]),W=_e(),De=Ce(),[qn,E]=I(F),[Jn,K]=I(F),ye=e=>{const{__scopeMenu:o,open:n=!1,children:t,dir:r,onOpenChange:c,modal:u=!0}=e,l=W(o),[m,v]=s.useState(null),p=s.useRef(!1),i=xe(c),f=An(r);return s.useEffect(()=>{const h=()=>{p.current=!0,document.addEventListener("pointerdown",w,{capture:!0,once:!0}),document.addEventListener("pointermove",w,{capture:!0,once:!0})},w=()=>p.current=!1;return document.addEventListener("keydown",h,{capture:!0}),()=>{document.removeEventListener("keydown",h,{capture:!0}),document.removeEventListener("pointerdown",w,{capture:!0}),document.removeEventListener("pointermove",w,{capture:!0})}},[]),a.jsx(Un,{...l,children:a.jsx(qn,{scope:o,open:n,onOpenChange:i,content:m,onContentChange:v,children:a.jsx(Jn,{scope:o,onClose:s.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:p,dir:f,modal:u,children:t})})})};ye.displayName=F;var Qn="MenuAnchor",oe=s.forwardRef((e,o)=>{const{__scopeMenu:n,...t}=e,r=W(n);return a.jsx(Fn,{...r,...t,ref:o})});oe.displayName=Qn;var te="MenuPortal",[eo,Ie]=I(te,{forceMount:void 0}),Ee=e=>{const{__scopeMenu:o,forceMount:n,children:t,container:r}=e,c=E(te,o);return a.jsx(eo,{scope:o,forceMount:n,children:a.jsx(H,{present:n||c.open,children:a.jsx(Sn,{asChild:!0,container:r,children:t})})})};Ee.displayName=te;var _="MenuContent",[no,re]=I(_),Se=s.forwardRef((e,o)=>{const n=Ie(_,e.__scopeMenu),{forceMount:t=n.forceMount,...r}=e,c=E(_,e.__scopeMenu),u=K(_,e.__scopeMenu);return a.jsx(k.Provider,{scope:e.__scopeMenu,children:a.jsx(H,{present:t||c.open,children:a.jsx(k.Slot,{scope:e.__scopeMenu,children:u.modal?a.jsx(oo,{...r,ref:o}):a.jsx(to,{...r,ref:o})})})})}),oo=s.forwardRef((e,o)=>{const n=E(_,e.__scopeMenu),t=s.useRef(null),r=G(o,t);return s.useEffect(()=>{const c=t.current;if(c)return On(c)},[]),a.jsx(ae,{...e,ref:r,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:M(e.onFocusOutside,c=>c.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),to=s.forwardRef((e,o)=>{const n=E(_,e.__scopeMenu);return a.jsx(ae,{...e,ref:o,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),ae=s.forwardRef((e,o)=>{const{__scopeMenu:n,loop:t=!1,trapFocus:r,onOpenAutoFocus:c,onCloseAutoFocus:u,disableOutsidePointerEvents:l,onEntryFocus:m,onEscapeKeyDown:v,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:f,onDismiss:h,disableOutsideScroll:w,...y}=e,S=E(_,n),j=K(_,n),$=W(n),U=De(n),de=Wn(n),[xn,le]=s.useState(null),B=s.useRef(null),gn=G(o,B,S.onContentChange),V=s.useRef(0),z=s.useRef(""),_n=s.useRef(0),q=s.useRef(null),pe=s.useRef("right"),J=s.useRef(0),Cn=w?Gn:s.Fragment,Rn=w?{as:In,allowPinchZoom:!0}:void 0,bn=d=>{var N,me;const g=z.current+d,C=de().filter(R=>!R.disabled),b=document.activeElement,Q=(N=C.find(R=>R.ref.current===b))==null?void 0:N.textValue,ee=C.map(R=>R.textValue),fe=Mo(ee,g,Q),A=(me=C.find(R=>R.textValue===fe))==null?void 0:me.ref.current;(function R(ve){z.current=ve,window.clearTimeout(V.current),ve!==""&&(V.current=window.setTimeout(()=>R(""),1e3))})(g),A&&setTimeout(()=>A.focus())};s.useEffect(()=>()=>window.clearTimeout(V.current),[]),kn();const P=s.useCallback(d=>{var C,b;return pe.current===((C=q.current)==null?void 0:C.side)&&ho(d,(b=q.current)==null?void 0:b.area)},[]);return a.jsx(no,{scope:n,searchRef:z,onItemEnter:s.useCallback(d=>{P(d)&&d.preventDefault()},[P]),onItemLeave:s.useCallback(d=>{var g;P(d)||((g=B.current)==null||g.focus(),le(null))},[P]),onTriggerLeave:s.useCallback(d=>{P(d)&&d.preventDefault()},[P]),pointerGraceTimerRef:_n,onPointerGraceIntentChange:s.useCallback(d=>{q.current=d},[]),children:a.jsx(Cn,{...Rn,children:a.jsx(Ln,{asChild:!0,trapped:r,onMountAutoFocus:M(c,d=>{var g;d.preventDefault(),(g=B.current)==null||g.focus({preventScroll:!0})}),onUnmountAutoFocus:u,children:a.jsx(yn,{asChild:!0,disableOutsidePointerEvents:l,onEscapeKeyDown:v,onPointerDownOutside:p,onFocusOutside:i,onInteractOutside:f,onDismiss:h,children:a.jsx(Bn,{asChild:!0,...U,dir:j.dir,orientation:"vertical",loop:t,currentTabStopId:xn,onCurrentTabStopIdChange:le,onEntryFocus:M(m,d=>{j.isUsingKeyboardRef.current||d.preventDefault()}),preventScrollOnEntryFocus:!0,children:a.jsx(Kn,{role:"menu","aria-orientation":"vertical","data-state":ze(S.open),"data-radix-menu-content":"",dir:j.dir,...$,...y,ref:gn,style:{outline:"none",...y.style},onKeyDown:M(y.onKeyDown,d=>{const C=d.target.closest("[data-radix-menu-content]")===d.currentTarget,b=d.ctrlKey||d.altKey||d.metaKey,Q=d.key.length===1;C&&(d.key==="Tab"&&d.preventDefault(),!b&&Q&&bn(d.key));const ee=B.current;if(d.target!==ee||!Xn.includes(d.key))return;d.preventDefault();const A=de().filter(N=>!N.disabled).map(N=>N.ref.current);Re.includes(d.key)&&A.reverse(),mo(A)}),onBlur:M(e.onBlur,d=>{d.currentTarget.contains(d.target)||(window.clearTimeout(V.current),z.current="")}),onPointerMove:M(e.onPointerMove,L(d=>{const g=d.target,C=J.current!==d.clientX;if(d.currentTarget.contains(g)&&C){const b=d.clientX>J.current?"right":"left";pe.current=b,J.current=d.clientX}}))})})})})})})});Se.displayName=_;var ro="MenuGroup",se=s.forwardRef((e,o)=>{const{__scopeMenu:n,...t}=e;return a.jsx(T.div,{role:"group",...t,ref:o})});se.displayName=ro;var ao="MenuLabel",Pe=s.forwardRef((e,o)=>{const{__scopeMenu:n,...t}=e;return a.jsx(T.div,{...t,ref:o})});Pe.displayName=ao;var X="MenuItem",we="menu.itemSelect",Z=s.forwardRef((e,o)=>{const{disabled:n=!1,onSelect:t,...r}=e,c=s.useRef(null),u=K(X,e.__scopeMenu),l=re(X,e.__scopeMenu),m=G(o,c),v=s.useRef(!1),p=()=>{const i=c.current;if(!n&&i){const f=new CustomEvent(we,{bubbles:!0,cancelable:!0});i.addEventListener(we,h=>t==null?void 0:t(h),{once:!0}),En(i,f),f.defaultPrevented?v.current=!1:u.onClose()}};return a.jsx(Ne,{...r,ref:m,disabled:n,onClick:M(e.onClick,p),onPointerDown:i=>{var f;(f=e.onPointerDown)==null||f.call(e,i),v.current=!0},onPointerUp:M(e.onPointerUp,i=>{var f;v.current||(f=i.currentTarget)==null||f.click()}),onKeyDown:M(e.onKeyDown,i=>{const f=l.searchRef.current!=="";n||f&&i.key===" "||ne.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})})});Z.displayName=X;var Ne=s.forwardRef((e,o)=>{const{__scopeMenu:n,disabled:t=!1,textValue:r,...c}=e,u=re(X,n),l=De(n),m=s.useRef(null),v=G(o,m),[p,i]=s.useState(!1),[f,h]=s.useState("");return s.useEffect(()=>{const w=m.current;w&&h((w.textContent??"").trim())},[c.children]),a.jsx(k.ItemSlot,{scope:n,disabled:t,textValue:r??f,children:a.jsx(Vn,{asChild:!0,...l,focusable:!t,children:a.jsx(T.div,{role:"menuitem","data-highlighted":p?"":void 0,"aria-disabled":t||void 0,"data-disabled":t?"":void 0,...c,ref:v,onPointerMove:M(e.onPointerMove,L(w=>{t?u.onItemLeave(w):(u.onItemEnter(w),w.defaultPrevented||w.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:M(e.onPointerLeave,L(w=>u.onItemLeave(w))),onFocus:M(e.onFocus,()=>i(!0)),onBlur:M(e.onBlur,()=>i(!1))})})})}),so="MenuCheckboxItem",Te=s.forwardRef((e,o)=>{const{checked:n=!1,onCheckedChange:t,...r}=e;return a.jsx(Le,{scope:e.__scopeMenu,checked:n,children:a.jsx(Z,{role:"menuitemcheckbox","aria-checked":Y(n)?"mixed":n,...r,ref:o,"data-state":ie(n),onSelect:M(r.onSelect,()=>t==null?void 0:t(Y(n)?!0:!n),{checkForDefaultPrevented:!1})})})});Te.displayName=so;var je="MenuRadioGroup",[co,io]=I(je,{value:void 0,onValueChange:()=>{}}),Ae=s.forwardRef((e,o)=>{const{value:n,onValueChange:t,...r}=e,c=xe(t);return a.jsx(co,{scope:e.__scopeMenu,value:n,onValueChange:c,children:a.jsx(se,{...r,ref:o})})});Ae.displayName=je;var Oe="MenuRadioItem",ke=s.forwardRef((e,o)=>{const{value:n,...t}=e,r=io(Oe,e.__scopeMenu),c=n===r.value;return a.jsx(Le,{scope:e.__scopeMenu,checked:c,children:a.jsx(Z,{role:"menuitemradio","aria-checked":c,...t,ref:o,"data-state":ie(c),onSelect:M(t.onSelect,()=>{var u;return(u=r.onValueChange)==null?void 0:u.call(r,n)},{checkForDefaultPrevented:!1})})})});ke.displayName=Oe;var ce="MenuItemIndicator",[Le,uo]=I(ce,{checked:!1}),Ge=s.forwardRef((e,o)=>{const{__scopeMenu:n,forceMount:t,...r}=e,c=uo(ce,n);return a.jsx(H,{present:t||Y(c.checked)||c.checked===!0,children:a.jsx(T.span,{...r,ref:o,"data-state":ie(c.checked)})})});Ge.displayName=ce;var lo="MenuSeparator",Fe=s.forwardRef((e,o)=>{const{__scopeMenu:n,...t}=e;return a.jsx(T.div,{role:"separator","aria-orientation":"horizontal",...t,ref:o})});Fe.displayName=lo;var po="MenuArrow",Ke=s.forwardRef((e,o)=>{const{__scopeMenu:n,...t}=e,r=W(n);return a.jsx($n,{...r,...t,ref:o})});Ke.displayName=po;var fo="MenuSub",[mt,$e]=I(fo),O="MenuSubTrigger",Ue=s.forwardRef((e,o)=>{const n=E(O,e.__scopeMenu),t=K(O,e.__scopeMenu),r=$e(O,e.__scopeMenu),c=re(O,e.__scopeMenu),u=s.useRef(null),{pointerGraceTimerRef:l,onPointerGraceIntentChange:m}=c,v={__scopeMenu:e.__scopeMenu},p=s.useCallback(()=>{u.current&&window.clearTimeout(u.current),u.current=null},[]);return s.useEffect(()=>p,[p]),s.useEffect(()=>{const i=l.current;return()=>{window.clearTimeout(i),m(null)}},[l,m]),a.jsx(oe,{asChild:!0,...v,children:a.jsx(Ne,{id:r.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":r.contentId,"data-state":ze(n.open),...e,ref:ge(o,r.onTriggerChange),onClick:i=>{var f;(f=e.onClick)==null||f.call(e,i),!(e.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:M(e.onPointerMove,L(i=>{c.onItemEnter(i),!i.defaultPrevented&&!e.disabled&&!n.open&&!u.current&&(c.onPointerGraceIntentChange(null),u.current=window.setTimeout(()=>{n.onOpenChange(!0),p()},100))})),onPointerLeave:M(e.onPointerLeave,L(i=>{var h,w;p();const f=(h=n.content)==null?void 0:h.getBoundingClientRect();if(f){const y=(w=n.content)==null?void 0:w.dataset.side,S=y==="right",j=S?-5:5,$=f[S?"left":"right"],U=f[S?"right":"left"];c.onPointerGraceIntentChange({area:[{x:i.clientX+j,y:i.clientY},{x:$,y:f.top},{x:U,y:f.top},{x:U,y:f.bottom},{x:$,y:f.bottom}],side:y}),window.clearTimeout(l.current),l.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(i),i.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:M(e.onKeyDown,i=>{var h;const f=c.searchRef.current!=="";e.disabled||f&&i.key===" "||Yn[t.dir].includes(i.key)&&(n.onOpenChange(!0),(h=n.content)==null||h.focus(),i.preventDefault())})})})});Ue.displayName=O;var Be="MenuSubContent",Ve=s.forwardRef((e,o)=>{const n=Ie(_,e.__scopeMenu),{forceMount:t=n.forceMount,...r}=e,c=E(_,e.__scopeMenu),u=K(_,e.__scopeMenu),l=$e(Be,e.__scopeMenu),m=s.useRef(null),v=G(o,m);return a.jsx(k.Provider,{scope:e.__scopeMenu,children:a.jsx(H,{present:t||c.open,children:a.jsx(k.Slot,{scope:e.__scopeMenu,children:a.jsx(ae,{id:l.contentId,"aria-labelledby":l.triggerId,...r,ref:v,align:"start",side:u.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:p=>{var i;u.isUsingKeyboardRef.current&&((i=m.current)==null||i.focus()),p.preventDefault()},onCloseAutoFocus:p=>p.preventDefault(),onFocusOutside:M(e.onFocusOutside,p=>{p.target!==l.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:M(e.onEscapeKeyDown,p=>{u.onClose(),p.preventDefault()}),onKeyDown:M(e.onKeyDown,p=>{var h;const i=p.currentTarget.contains(p.target),f=Hn[u.dir].includes(p.key);i&&f&&(c.onOpenChange(!1),(h=l.trigger)==null||h.focus(),p.preventDefault())})})})})})});Ve.displayName=Be;function ze(e){return e?"open":"closed"}function Y(e){return e==="indeterminate"}function ie(e){return Y(e)?"indeterminate":e?"checked":"unchecked"}function mo(e){const o=document.activeElement;for(const n of e)if(n===o||(n.focus(),document.activeElement!==o))return}function vo(e,o){return e.map((n,t)=>e[(o+t)%e.length])}function Mo(e,o,n){const r=o.length>1&&Array.from(o).every(v=>v===o[0])?o[0]:o,c=n?e.indexOf(n):-1;let u=vo(e,Math.max(c,0));r.length===1&&(u=u.filter(v=>v!==n));const m=u.find(v=>v.toLowerCase().startsWith(r.toLowerCase()));return m!==n?m:void 0}function wo(e,o){const{x:n,y:t}=e;let r=!1;for(let c=0,u=o.length-1;c<o.length;u=c++){const l=o[c].x,m=o[c].y,v=o[u].x,p=o[u].y;m>t!=p>t&&n<(v-l)*(t-m)/(p-m)+l&&(r=!r)}return r}function ho(e,o){if(!o)return!1;const n={x:e.clientX,y:e.clientY};return wo(n,o)}function L(e){return o=>o.pointerType==="mouse"?e(o):void 0}var xo=ye,go=oe,_o=Ee,Co=Se,Ro=se,bo=Pe,Do=Z,yo=Te,Io=Ae,Eo=ke,So=Ge,Po=Fe,No=Ke,To=Ue,jo=Ve,ue="DropdownMenu",[Ao,vt]=he(ue,[be]),x=be(),[Oo,Xe]=Ao(ue),Ye=e=>{const{__scopeDropdownMenu:o,children:n,dir:t,open:r,defaultOpen:c,onOpenChange:u,modal:l=!0}=e,m=x(o),v=s.useRef(null),[p=!1,i]=Pn({prop:r,defaultProp:c,onChange:u});return a.jsx(Oo,{scope:o,triggerId:Me(),triggerRef:v,contentId:Me(),open:p,onOpenChange:i,onOpenToggle:s.useCallback(()=>i(f=>!f),[i]),modal:l,children:a.jsx(xo,{...m,open:p,onOpenChange:i,dir:t,modal:l,children:n})})};Ye.displayName=ue;var He="DropdownMenuTrigger",We=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,disabled:t=!1,...r}=e,c=Xe(He,n),u=x(n);return a.jsx(go,{asChild:!0,...u,children:a.jsx(T.button,{type:"button",id:c.triggerId,"aria-haspopup":"menu","aria-expanded":c.open,"aria-controls":c.open?c.contentId:void 0,"data-state":c.open?"open":"closed","data-disabled":t?"":void 0,disabled:t,...r,ref:ge(o,c.triggerRef),onPointerDown:M(e.onPointerDown,l=>{!t&&l.button===0&&l.ctrlKey===!1&&(c.onOpenToggle(),c.open||l.preventDefault())}),onKeyDown:M(e.onKeyDown,l=>{t||(["Enter"," "].includes(l.key)&&c.onOpenToggle(),l.key==="ArrowDown"&&c.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})})});We.displayName=He;var ko="DropdownMenuPortal",Ze=e=>{const{__scopeDropdownMenu:o,...n}=e,t=x(o);return a.jsx(_o,{...t,...n})};Ze.displayName=ko;var qe="DropdownMenuContent",Je=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=Xe(qe,n),c=x(n),u=s.useRef(!1);return a.jsx(Co,{id:r.contentId,"aria-labelledby":r.triggerId,...c,...t,ref:o,onCloseAutoFocus:M(e.onCloseAutoFocus,l=>{var m;u.current||(m=r.triggerRef.current)==null||m.focus(),u.current=!1,l.preventDefault()}),onInteractOutside:M(e.onInteractOutside,l=>{const m=l.detail.originalEvent,v=m.button===0&&m.ctrlKey===!0,p=m.button===2||v;(!r.modal||p)&&(u.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Je.displayName=qe;var Lo="DropdownMenuGroup",Qe=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(Ro,{...r,...t,ref:o})});Qe.displayName=Lo;var Go="DropdownMenuLabel",en=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(bo,{...r,...t,ref:o})});en.displayName=Go;var Fo="DropdownMenuItem",nn=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(Do,{...r,...t,ref:o})});nn.displayName=Fo;var Ko="DropdownMenuCheckboxItem",on=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(yo,{...r,...t,ref:o})});on.displayName=Ko;var $o="DropdownMenuRadioGroup",tn=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(Io,{...r,...t,ref:o})});tn.displayName=$o;var Uo="DropdownMenuRadioItem",rn=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(Eo,{...r,...t,ref:o})});rn.displayName=Uo;var Bo="DropdownMenuItemIndicator",an=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(So,{...r,...t,ref:o})});an.displayName=Bo;var Vo="DropdownMenuSeparator",sn=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(Po,{...r,...t,ref:o})});sn.displayName=Vo;var zo="DropdownMenuArrow",Xo=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(No,{...r,...t,ref:o})});Xo.displayName=zo;var Yo="DropdownMenuSubTrigger",cn=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(To,{...r,...t,ref:o})});cn.displayName=Yo;var Ho="DropdownMenuSubContent",un=s.forwardRef((e,o)=>{const{__scopeDropdownMenu:n,...t}=e,r=x(n);return a.jsx(jo,{...r,...t,ref:o,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});un.displayName=Ho;var Wo=Ye,Zo=We,qo=Ze,dn=Je,Jo=Qe,ln=en,pn=nn,fn=on,Qo=tn,mn=rn,vn=an,Mn=sn,wn=cn,hn=un;const Mt=Wo,wt=Zo,ht=Jo,xt=Qo,et=s.forwardRef(({className:e,inset:o,children:n,...t},r)=>a.jsxs(wn,{ref:r,className:D("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",o&&"pl-8",e),...t,children:[n,a.jsx(Nn,{className:"ml-auto h-4 w-4"})]}));et.displayName=wn.displayName;const nt=s.forwardRef(({className:e,...o},n)=>a.jsx(hn,{ref:n,className:D("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...o}));nt.displayName=hn.displayName;const ot=s.forwardRef(({className:e,sideOffset:o=4,...n},t)=>a.jsx(qo,{children:a.jsx(dn,{ref:t,sideOffset:o,className:D("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n})}));ot.displayName=dn.displayName;const tt=s.forwardRef(({className:e,inset:o,...n},t)=>a.jsx(pn,{ref:t,className:D("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",o&&"pl-8",e),...n}));tt.displayName=pn.displayName;const rt=s.forwardRef(({className:e,children:o,checked:n,...t},r)=>a.jsxs(fn,{ref:r,className:D("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...t,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(vn,{children:a.jsx(Tn,{className:"h-4 w-4"})})}),o]}));rt.displayName=fn.displayName;const at=s.forwardRef(({className:e,children:o,...n},t)=>a.jsxs(mn,{ref:t,className:D("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(vn,{children:a.jsx(jn,{className:"h-4 w-4 fill-current"})})}),o]}));at.displayName=mn.displayName;const st=s.forwardRef(({className:e,inset:o,...n},t)=>a.jsx(ln,{ref:t,className:D("px-2 py-1.5 text-sm font-semibold",o&&"pl-8",e),...n}));st.displayName=ln.displayName;const ct=s.forwardRef(({className:e,...o},n)=>a.jsx(Mn,{ref:n,className:D("-mx-1 my-1 h-px bg-muted",e),...o}));ct.displayName=Mn.displayName;export{Mt as D,wt as a,ot as b,tt as c,ct as d,st as e,ht as f,xt as g,at as h};
