import{r as e,j as I}from"./app-DM-y8oy4.js";import{e as Q,q as ke}from"./index-BXrqN9aj.js";var je=Object.defineProperty,Oe=Object.defineProperties,Re=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,de=(n,r,l)=>r in n?je(n,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[r]=l,Te=(n,r)=>{for(var l in r||(r={}))me.call(r,l)&&de(n,l,r[l]);if(X)for(var l of X(r))fe.call(r,l)&&de(n,l,r[l]);return n},Ie=(n,r)=>Oe(n,Re(r)),De=(n,r)=>{var l={};for(var u in n)me.call(n,u)&&r.indexOf(u)<0&&(l[u]=n[u]);if(n!=null&&X)for(var u of X(n))r.indexOf(u)<0&&fe.call(n,u)&&(l[u]=n[u]);return l},We="^\\d+$";function Ae(n){let r=setTimeout(n,0),l=setTimeout(n,10),u=setTimeout(n,50);return[r,l,u]}function Be(n){let r=e.useRef();return e.useEffect(()=>{r.current=n}),r.current}var Ne=18,ve=40,_e=`${ve}px`,Fe=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function He({containerRef:n,inputRef:r,pushPasswordManagerStrategy:l,isFocused:u}){let E=e.useRef({done:!1,refocused:!1}),[s,D]=e.useState(!1),[h,V]=e.useState(!1),[W,q]=e.useState(!1),Y=e.useMemo(()=>l==="none"?!1:(l==="increase-width"||l==="experimental-no-flickering")&&s&&h,[s,h,l]),C=e.useCallback(()=>{let f=n.current,d=r.current;if(!f||!d||W||l==="none")return;let o=f,w=o.getBoundingClientRect().left+o.offsetWidth,A=o.getBoundingClientRect().top+o.offsetHeight/2,U=w-Ne,J=A;if(!(document.querySelectorAll(Fe).length===0&&document.elementFromPoint(U,J)===f)&&(D(!0),q(!0),!E.current.refocused&&document.activeElement===d)){let F=[d.selectionStart,d.selectionEnd];d.blur(),d.focus(),d.setSelectionRange(F[0],F[1]),E.current.refocused=!0}},[n,r,W,l]);return e.useEffect(()=>{let f=n.current;if(!f||l==="none")return;function d(){let w=window.innerWidth-f.getBoundingClientRect().right;V(w>=ve)}d();let o=setInterval(d,1e3);return()=>{clearInterval(o)}},[n,l]),e.useEffect(()=>{let f=u||document.activeElement===r.current;if(l==="none"||!f)return;let d=setTimeout(C,0),o=setTimeout(C,2e3),w=setTimeout(C,5e3),A=setTimeout(()=>{q(!0)},6e3);return()=>{clearTimeout(d),clearTimeout(o),clearTimeout(w),clearTimeout(A)}},[r,u,l,C]),{hasPWMBadge:s,willPushPWMBadge:Y,PWM_BADGE_SPACE_WIDTH:_e}}var ge=e.createContext({}),he=e.forwardRef((n,r)=>{var l=n,{value:u,onChange:E,maxLength:s,textAlign:D="left",pattern:h=We,inputMode:V="numeric",onComplete:W,pushPasswordManagerStrategy:q="increase-width",containerClassName:Y,noScriptCSSFallback:C=Le,render:f,children:d}=l,o=De(l,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]),w,A,U,J,F;let[be,we]=e.useState(typeof o.defaultValue=="string"?o.defaultValue:""),p=u??be,M=Be(p),H=e.useCallback(t=>{E==null||E(t),we(t)},[E]),b=e.useMemo(()=>h?typeof h=="string"?new RegExp(h):h:null,[h]),c=e.useRef(null),Z=e.useRef(null),ee=e.useRef({value:p,onChange:H,isIOS:typeof window<"u"&&((A=(w=window==null?void 0:window.CSS)==null?void 0:w.supports)==null?void 0:A.call(w,"-webkit-touch-callout","none"))}),K=e.useRef({prev:[(U=c.current)==null?void 0:U.selectionStart,(J=c.current)==null?void 0:J.selectionEnd,(F=c.current)==null?void 0:F.selectionDirection]});e.useImperativeHandle(r,()=>c.current,[]),e.useEffect(()=>{let t=c.current,a=Z.current;if(!t||!a)return;ee.current.value!==t.value&&ee.current.onChange(t.value),K.current.prev=[t.selectionStart,t.selectionEnd,t.selectionDirection];function m(){if(document.activeElement!==t){$(null),G(null);return}let i=t.selectionStart,g=t.selectionEnd,x=t.selectionDirection,j=t.maxLength,O=t.value,_=K.current.prev,y=-1,P=-1,R;if(O.length!==0&&i!==null&&g!==null){let Pe=i===g,Ce=i===O.length&&O.length<j;if(Pe&&!Ce){let T=i;if(T===0)y=0,P=1,R="forward";else if(T===j)y=T-1,P=T,R="backward";else if(j>1&&O.length>1){let re=0;if(_[0]!==null&&_[1]!==null){R=T<_[1]?"backward":"forward";let Me=_[0]===_[1]&&_[0]<j;R==="backward"&&!Me&&(re=-1)}y=re+T,P=re+T+1}}y!==-1&&P!==-1&&y!==P&&c.current.setSelectionRange(y,P,R)}let ce=y!==-1?y:i,pe=P!==-1?P:g,ye=R??x;$(ce),G(pe),K.current.prev=[ce,pe,ye]}if(document.addEventListener("selectionchange",m,{capture:!0}),m(),document.activeElement===t&&te(!0),!document.getElementById("input-otp-style")){let i=document.createElement("style");if(i.id="input-otp-style",document.head.appendChild(i),i.sheet){let g="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";z(i.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),z(i.sheet,`[data-input-otp]:autofill { ${g} }`),z(i.sheet,`[data-input-otp]:-webkit-autofill { ${g} }`),z(i.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),z(i.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let v=()=>{a&&a.style.setProperty("--root-height",`${t.clientHeight}px`)};v();let S=new ResizeObserver(v);return S.observe(t),()=>{document.removeEventListener("selectionchange",m,{capture:!0}),S.disconnect()}},[]);let[ae,le]=e.useState(!1),[L,te]=e.useState(!1),[k,$]=e.useState(null),[B,G]=e.useState(null);e.useEffect(()=>{Ae(()=>{var t,a,m,v;(t=c.current)==null||t.dispatchEvent(new Event("input"));let S=(a=c.current)==null?void 0:a.selectionStart,i=(m=c.current)==null?void 0:m.selectionEnd,g=(v=c.current)==null?void 0:v.selectionDirection;S!==null&&i!==null&&($(S),G(i),K.current.prev=[S,i,g])})},[p,L]),e.useEffect(()=>{M!==void 0&&p!==M&&M.length<s&&p.length===s&&(W==null||W(p))},[s,W,M,p]);let N=He({containerRef:Z,inputRef:c,pushPasswordManagerStrategy:q,isFocused:L}),oe=e.useCallback(t=>{let a=t.currentTarget.value.slice(0,s);if(a.length>0&&b&&!b.test(a)){t.preventDefault();return}typeof M=="string"&&a.length<M.length&&document.dispatchEvent(new Event("selectionchange")),H(a)},[s,H,M,b]),ie=e.useCallback(()=>{var t;if(c.current){let a=Math.min(c.current.value.length,s-1),m=c.current.value.length;(t=c.current)==null||t.setSelectionRange(a,m),$(a),G(m)}te(!0)},[s]),ue=e.useCallback(t=>{var a,m;let v=c.current;if(!ee.current.isIOS||!t.clipboardData||!v)return;let S=t.clipboardData.getData("text/plain");t.preventDefault();let i=(a=c.current)==null?void 0:a.selectionStart,g=(m=c.current)==null?void 0:m.selectionEnd,x=(i!==g?p.slice(0,i)+S+p.slice(g):p.slice(0,i)+S+p.slice(i)).slice(0,s);if(x.length>0&&b&&!b.test(x))return;v.value=x,H(x);let j=Math.min(x.length,s-1),O=x.length;v.setSelectionRange(j,O),$(j),G(O)},[s,H,b,p]),Se=e.useMemo(()=>({position:"relative",cursor:o.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[o.disabled]),se=e.useMemo(()=>({position:"absolute",inset:0,width:N.willPushPWMBadge?`calc(100% + ${N.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:N.willPushPWMBadge?`inset(0 ${N.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:D,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[N.PWM_BADGE_SPACE_WIDTH,N.willPushPWMBadge,D]),Ee=e.useMemo(()=>e.createElement("input",Ie(Te({autoComplete:o.autoComplete||"one-time-code"},o),{"data-input-otp":!0,"data-input-otp-mss":k,"data-input-otp-mse":B,inputMode:V,pattern:b==null?void 0:b.source,style:se,maxLength:s,value:p,ref:c,onPaste:t=>{var a;ue(t),(a=o.onPaste)==null||a.call(o,t)},onChange:oe,onMouseOver:t=>{var a;le(!0),(a=o.onMouseOver)==null||a.call(o,t)},onMouseLeave:t=>{var a;le(!1),(a=o.onMouseLeave)==null||a.call(o,t)},onFocus:t=>{var a;ie(),(a=o.onFocus)==null||a.call(o,t)},onBlur:t=>{var a;te(!1),(a=o.onBlur)==null||a.call(o,t)}})),[oe,ie,ue,V,se,s,B,k,o,b==null?void 0:b.source,p]),ne=e.useMemo(()=>({slots:Array.from({length:s}).map((t,a)=>{let m=L&&k!==null&&B!==null&&(k===B&&a===k||a>=k&&a<B),v=p[a]!==void 0?p[a]:null;return{char:v,isActive:m,hasFakeCaret:m&&v===null}}),isFocused:L,isHovering:!o.disabled&&ae}),[L,ae,s,B,k,o.disabled,p]),xe=e.useMemo(()=>f?f(ne):e.createElement(ge.Provider,{value:ne},d),[d,ne,f]);return e.createElement(e.Fragment,null,C!==null&&e.createElement("noscript",null,e.createElement("style",null,C)),e.createElement("div",{ref:Z,"data-input-otp-container":!0,style:Se,className:Y},xe,e.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Ee)))});he.displayName="Input";function z(n,r){try{n.insertRule(r)}catch{console.error("input-otp could not insert CSS rule:",r)}}var Le=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;const $e=e.forwardRef(({className:n,containerClassName:r,...l},u)=>I.jsx(he,{ref:u,containerClassName:Q("flex items-center gap-1 has-[:disabled]:opacity-50",r),className:Q("disabled:cursor-not-allowed",n),...l,autoComplete:"one-time-code"}));$e.displayName="InputOTP";const Ge=e.forwardRef(({className:n,...r},l)=>I.jsx("div",{ref:l,className:Q("flex items-center gap-1",n),...r}));Ge.displayName="InputOTPGroup";const ze=e.forwardRef(({index:n,className:r,...l},u)=>{const E=e.useContext(ge),{char:s,hasFakeCaret:D,isActive:h}=E.slots[n];return I.jsxs("div",{ref:u,className:Q("relative flex h-10 w-9 items-center justify-center border border-input text-base shadow-sm transition-all rounded-xl",h&&"z-10 ring-1 ring-ring",r),...l,children:[s,D&&I.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:I.jsx("div",{className:"h-4 w-px animate-caret-blink bg-foreground duration-1000"})})]})});ze.displayName="InputOTPSlot";const Ve=e.forwardRef(({...n},r)=>I.jsx("div",{ref:r,role:"separator",...n,children:I.jsx(ke,{})}));Ve.displayName="InputOTPSeparator";export{$e as I,Ge as a,ze as b,Ve as c};
