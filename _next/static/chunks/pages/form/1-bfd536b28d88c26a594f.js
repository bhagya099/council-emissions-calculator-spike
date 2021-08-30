(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{1684:function(e,r,n){"use strict";n.d(r,{Z:function(){return l}});var t=n(5893),i=n(9008),o=n(4096),a=n(3850),s=n(9316);function l(e){var r=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:"Emissions Calculator"}),(0,t.jsx)("meta",{name:"description",content:"Emissions calculator"}),(0,t.jsx)("link",{rel:"icon",href:"".concat(s.jW,"/favicon.ico")})]}),(0,t.jsx)(o.k,{height:"100vh",alignItems:"center",children:(0,t.jsx)(a.W,{centerContent:!0,maxW:"container.sm",children:r})})]})}},8437:function(e,r,n){"use strict";n.d(r,{Z:function(){return a}});var t=n(5893),i=n(5063),o=n(155);function a(e){var r=e.children,n=e.href,a=e.onClick,s=e.disabled,l=e.variant;return(0,t.jsx)(i.default,{href:n,passHref:!0,children:(0,t.jsx)(o.z,{mt:8,px:"12",colorScheme:"blue",disabled:s,onClick:a,variant:l||"solid",children:r})})}},7223:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return T}});var t=n(5893),i=n(6265),o=n(1385),a=n(7294),s=n(227),l=n(63),c=n(3808);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function d(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var f=(0,s.m$)("div");c.Ts&&(f.displayName="Box");var p=(0,l.G)(((e,r)=>{var{size:n,centerContent:t=!0}=e,i=d(e,["size","centerContent"]),o=t?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return a.createElement(f,u({ref:r,boxSize:n,__css:u({},o,{flexShrink:0,flexGrow:0})},i))}));c.Ts&&(p.displayName="Square");var h=(0,l.G)(((e,r)=>{var{size:n}=e,t=d(e,["size"]);return a.createElement(p,u({size:n,ref:r,borderRadius:"9999px"},t))}));function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function C(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}c.Ts&&(h.displayName="Circle");var v=(0,l.G)(((e,r)=>{var{area:n,templateAreas:t,gap:i,rowGap:o,columnGap:l,column:c,row:u,autoFlow:d,autoRows:f,templateRows:p,autoColumns:h,templateColumns:v}=e,j=C(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),x={display:"grid",gridArea:n,gridTemplateAreas:t,gridGap:i,gridRowGap:o,gridColumnGap:l,gridAutoColumns:h,gridColumn:c,gridRow:u,gridAutoFlow:d,gridAutoRows:f,gridTemplateRows:p,gridTemplateColumns:v};return a.createElement(s.m$.div,m({ref:r,__css:x},j))}));c.Ts&&(v.displayName="Grid");var j=n(431),x=n(336),w=n(4115),g=n(1684),y=n(1861),b=n(8437),k=n(9316),O=n(3346);function _(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function R(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?_(Object(n),!0).forEach((function(r){(0,i.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function T(){var e=(0,y.Z)(),r=e.answers,n=e.setAnswers,i=(0,a.useState)(r.week),s=i[0],l=i[1],c=function(e){var r=e.children,n=e.value,i=e.index;return(0,t.jsx)(j.X,{bgColor:"#FFF",border:"1px solid #868E96",borderRadius:"2px",p:"1rem",onChange:function(e){var r=(0,o.Z)(s);r[i]===n?r[i]="didNotWork":r[i]=n,l(r)},isChecked:s[i]===n,children:r})},u=function(e){n((function(e){return R(R({},e),{},{week:s})}))};return(0,t.jsxs)(g.Z,{children:[(0,t.jsxs)(f,{children:[(0,t.jsxs)(f,{p:1,lineHeight:"4rem",children:[(0,t.jsx)(x.X,{as:"h1",size:"md",children:"Which days and where do you work in an average week?"}),(0,t.jsx)(w.x,{children:"If you didn't work on a particular day, don't select anything."})]}),(0,t.jsx)(O.iA,{variant:"striped",children:(0,t.jsx)(O.p3,{children:k.en.map((function(e,r){return(0,t.jsxs)(O.Tr,{children:[(0,t.jsx)(O.Td,{fontWeight:"bold",color:"#333",children:e}),(0,t.jsx)(O.Td,{children:(0,t.jsxs)(v,{templateColumns:"repeat(2, 1fr)",gap:6,color:"#212529",children:[(0,t.jsx)(c,{value:"home",index:r,children:"Work from home"}),(0,t.jsx)(c,{value:"office",index:r,children:"From workplace"})]})})]},e)}))})})]}),(0,t.jsxs)(v,{templateColumns:"repeat(2, 1fr)",gap:4,children:[(0,t.jsxs)(b.Z,{href:"/",onClick:u,variant:"outline",children:[(0,t.jsxs)("svg",{pwidth:"23",height:"14",viewBox:"0 0 23 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.47622 0.711216C7.56352 0.798302 7.63279 0.901756 7.68005 1.01565C7.72732 1.12955 7.75164 1.25165 7.75164 1.37497C7.75164 1.49828 7.72732 1.62038 7.68005 1.73428C7.63279 1.84818 7.56352 1.95163 7.47622 2.03872L2.51309 6.99997L7.47622 11.9612C7.56338 12.0484 7.63252 12.1519 7.6797 12.2657C7.72687 12.3796 7.75115 12.5017 7.75115 12.625C7.75115 12.7482 7.72687 12.8703 7.6797 12.9842C7.63252 13.0981 7.56338 13.2016 7.47622 13.2887C7.38905 13.3759 7.28557 13.445 7.17169 13.4922C7.0578 13.5394 6.93574 13.5637 6.81247 13.5637C6.6892 13.5637 6.56713 13.5394 6.45325 13.4922C6.33936 13.445 6.23588 13.3759 6.14872 13.2887L0.523717 7.66372C0.436411 7.57663 0.367143 7.47318 0.319881 7.35928C0.272619 7.24538 0.248291 7.12328 0.248291 6.99997C0.248291 6.87665 0.272619 6.75455 0.319881 6.64065C0.367143 6.52676 0.436411 6.4233 0.523717 6.33622L6.14872 0.711216C6.2358 0.62391 6.33926 0.554642 6.45315 0.50738C6.56705 0.460118 6.68915 0.435791 6.81247 0.435791C6.93578 0.435791 7.05788 0.460118 7.17178 0.50738C7.28568 0.554642 7.38913 0.62391 7.47622 0.711216Z",fill:"var(--chakra-colors-blue-600)"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.1875 7C1.1875 6.75136 1.28627 6.5129 1.46209 6.33709C1.6379 6.16127 1.87636 6.0625 2.125 6.0625H21.8125C22.0611 6.0625 22.2996 6.16127 22.4754 6.33709C22.6512 6.5129 22.75 6.75136 22.75 7C22.75 7.24864 22.6512 7.4871 22.4754 7.66291C22.2996 7.83873 22.0611 7.9375 21.8125 7.9375H2.125C1.87636 7.9375 1.6379 7.83873 1.46209 7.66291C1.28627 7.4871 1.1875 7.24864 1.1875 7Z",fill:"var(--chakra-colors-blue-600)"})]}),(0,t.jsx)(w.x,{ml:"0.5em",children:"Back"})]}),(0,t.jsx)(b.Z,{href:"/form/2",disabled:s.every((function(e){return"didNotWork"===e})),onClick:u,children:"Continue"})]})]})}},9316:function(e,r,n){"use strict";n.d(r,{en:function(){return t},pM:function(){return i},Yd:function(){return o},jW:function(){return a}});var t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],i=["walk","bicycle","scooter","train/tram","bus","car(shared)","car(solo)"],o=["education","health","transport","finance"],a="https://codeforaustralia.github.io/council-emissions-calculator-spike"},4261:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/1",function(){return n(7223)}])}},function(e){e.O(0,[613,283,164,774,888,179],(function(){return r=4261,e(e.s=r);var r}));var r=e.O();_N_E=r}]);