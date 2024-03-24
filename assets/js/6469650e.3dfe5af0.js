/*! For license information please see 6469650e.3dfe5af0.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3296],{50500:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=t(85893),s=t(11151);const a={sidebar_label:"Puppeteer.registerCustomQueryHandler"},i="Puppeteer.registerCustomQueryHandler() method",p={id:"api/puppeteer.puppeteer.registercustomqueryhandler",title:"Puppeteer.registerCustomQueryHandler() method",description:"Registers a custom query handler.",source:"@site/versioned_docs/version-22.6.0/api/puppeteer.puppeteer.registercustomqueryhandler.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteer.registercustomqueryhandler",permalink:"/api/puppeteer.puppeteer.registercustomqueryhandler",draft:!1,unlisted:!1,tags:[],version:"22.6.0",frontMatter:{sidebar_label:"Puppeteer.registerCustomQueryHandler"},sidebar:"api",previous:{title:"Puppeteer.customQueryHandlerNames",permalink:"/api/puppeteer.puppeteer.customqueryhandlernames"},next:{title:"Puppeteer.unregisterCustomQueryHandler",permalink:"/api/puppeteer.puppeteer.unregistercustomqueryhandler"}},l={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"puppeteerregistercustomqueryhandler-method",children:"Puppeteer.registerCustomQueryHandler() method"}),"\n",(0,n.jsxs)(r.p,{children:["Registers a ",(0,n.jsx)(r.a,{href:"/api/puppeteer.customqueryhandler",children:"custom query handler"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Puppeteer {\n  static registerCustomQueryHandler(\n    name: string,\n    queryHandler: CustomQueryHandler\n  ): void;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"string"}),(0,n.jsx)(r.td,{children:"The name that the custom query handler will be registered under."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"queryHandler"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.customqueryhandler",children:"CustomQueryHandler"})}),(0,n.jsxs)(r.td,{children:["The ",(0,n.jsx)(r.a,{href:"/api/puppeteer.customqueryhandler",children:"custom query handler"})," to register."]})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"void"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["After registration, the handler can be used everywhere where a selector is expected by prepending the selection string with ",(0,n.jsx)(r.code,{children:"<name>/"}),". The name is only allowed to consist of lower- and upper case latin letters."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"puppeteer.registerCustomQueryHandler('text', { \u2026 });\nconst aHandle = await page.$('text/\u2026');\n"})})]})}function o(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,a={},d=null,u=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:u,props:a,_owner:p.current}}r.Fragment=a,r.jsx=d,r.jsxs=d},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>p,a:()=>i});var n=t(67294);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);