(()=>{var e={};e.id=78,e.ids=[78],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},350:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>f,originalPathname:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>d}),r(5393),r(7764),r(5866);var n=r(3191),s=r(8716),a=r(7922),l=r.n(a),o=r(5231),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let d=["",{children:["Ladan",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5393)),"C:\\PortfolioAzure\\app\\Ladan\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,7764)),"C:\\PortfolioAzure\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\PortfolioAzure\\app\\Ladan\\page.js"],c="/Ladan/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/Ladan/page",pathname:"/Ladan",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9958:(e,t,r)=>{Promise.resolve().then(r.bind(r,5760))},8273:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9404,23))},6439:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5760:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(326),s=r(3353);let a=r.n(s)()(async()=>{},{loadableGenerated:{modules:["app\\Ladan\\page.js -> ./test/MyComponent"]},ssr:!1}),l=()=>n.jsx("div",{children:n.jsx(a,{})})},3353:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(1174);r(326),r(7577);let s=n._(r(7028));function a(e,t){var r;let n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e);let a={...n,...t};return(0,s.default)({...a,modules:null==(r=a.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},933:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let n=r(4129);function s(e){let{reason:t,children:r}=e;throw new n.BailoutToCSRError(t)}},7028:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(326),s=r(7577),a=r(933),l=r(6618);function o(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},d=function(e){let t={...i,...e},r=(0,s.lazy)(()=>t.loader().then(o)),d=t.loading;function u(e){let o=d?(0,n.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.PreloadCss,{moduleIds:t.modules}),(0,n.jsx)(r,{...e})]}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(s.Suspense,{fallback:o,children:i})}return u.displayName="LoadableComponent",u}},6618:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let n=r(326),s=r(5403);function a(e){let{moduleIds:t}=e,r=(0,s.getExpectedRequestStore)("next/dynamic css"),a=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,n.jsx)(n.Fragment,{children:a.map(e=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:r.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},4237:e=>{e.exports={homeLink:"rootStyle_homeLink__89dPs",menuBarLinks:"rootStyle_menuBarLinks__hB__9",container:"rootStyle_container__heOaV",header:"rootStyle_header__m87Ig",section:"rootStyle_section__LRrPU","no-bullets":"rootStyle_no-bullets__Yf_Oa"}},5393:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>l,__esModule:()=>a,default:()=>o});var n=r(8570);let s=(0,n.createProxy)(String.raw`C:\PortfolioAzure\app\Ladan\page.js`),{__esModule:a,$$typeof:l}=s;s.default;let o=(0,n.createProxy)(String.raw`C:\PortfolioAzure\app\Ladan\page.js#default`)},7764:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(9510),s=r(5717),a=r.n(s),l=r(7371);r(2136);var o=r(4237),i=r.n(o);function d({children:e}){return(0,n.jsxs)("html",{lang:"en",className:a().className,children:[n.jsx("head",{}),(0,n.jsxs)("body",{children:[(0,n.jsxs)("header",{children:[n.jsx("h1",{children:n.jsx(l.default,{className:i().homeLink,href:"/home",children:"MyResumePortal"})}),n.jsx("h3",{children:n.jsx(l.default,{className:i().menuBarLinks,href:"/areasofexp",children:"Areas of Expertise"})}),n.jsx("h3",{children:n.jsx(l.default,{className:i().menuBarLinks,href:"/technicalskills",children:"Technical Skills"})}),n.jsx("h3",{children:n.jsx(l.default,{className:i().menuBarLinks,href:"/experience",children:"Experience"})}),n.jsx("h3",{children:n.jsx(l.default,{className:i().menuBarLinks,href:"/education",children:"Education"})}),n.jsx("h3",{children:n.jsx(l.default,{className:i().menuBarLinks,href:"/certifications",children:"Certifications"})}),n.jsx("h3",{children:n.jsx(l.default,{className:i().menuBarLinks,href:"/Ladan",children:"Gallery of My Journey"})})]}),e]})]})}},2136:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[822],()=>r(350));module.exports=n})();