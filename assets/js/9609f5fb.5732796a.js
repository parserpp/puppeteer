/*! For license information please see 9609f5fb.5732796a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1294],{36096:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=r(85893),a=r(11151);const s={sidebar_label:"Frame.name"},i="Frame.name() method",o={id:"api/puppeteer.frame.name",title:"Frame.name() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-22.6.0/api/puppeteer.frame.name.md",sourceDirName:"api",slug:"/api/puppeteer.frame.name",permalink:"/api/puppeteer.frame.name",draft:!1,unlisted:!1,tags:[],version:"22.6.0",frontMatter:{sidebar_label:"Frame.name"},sidebar:"api",previous:{title:"Frame.locator_1",permalink:"/api/puppeteer.frame.locator_1"},next:{title:"Frame.page",permalink:"/api/puppeteer.frame.page"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"framename-method",children:"Frame.name() method"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Warning: This API is now obsolete."}),"\n",(0,t.jsx)(n.p,{children:"Use"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const element = await frame.frameElement();\nconst nameOrId = await element.evaluate(frame => frame.name ?? frame.id);\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The frame's ",(0,t.jsx)(n.code,{children:"name"})," attribute as specified in the tag."]}),"\n",(0,t.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Frame {\n  name(): string;\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"string"}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsx)(n.p,{children:"This value is calculated once when the frame is created, and will not update if the attribute is changed later."})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75251:(e,n,r)=>{var t=r(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,s={},c=null,p=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,t)&&!l.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:a,type:e,key:c,ref:p,props:s,_owner:o.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);