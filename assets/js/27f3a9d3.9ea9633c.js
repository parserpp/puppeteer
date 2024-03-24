/*! For license information please see 27f3a9d3.9ea9633c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24144],{88194:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var s=r(85893),n=r(11151);const i={sidebar_label:"HTTPRequest.respond"},o="HTTPRequest.respond() method",p={id:"api/puppeteer.httprequest.respond",title:"HTTPRequest.respond() method",description:"Fulfills a request with the given response.",source:"@site/versioned_docs/version-22.6.0/api/puppeteer.httprequest.respond.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.respond",permalink:"/api/puppeteer.httprequest.respond",draft:!1,unlisted:!1,tags:[],version:"22.6.0",frontMatter:{sidebar_label:"HTTPRequest.respond"},sidebar:"api",previous:{title:"HTTPRequest.resourceType",permalink:"/api/puppeteer.httprequest.resourcetype"},next:{title:"HTTPRequest.response",permalink:"/api/puppeteer.httprequest.response"}},a={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"httprequestrespond-method",children:"HTTPRequest.respond() method"}),"\n",(0,s.jsx)(t.p,{children:"Fulfills a request with the given response."}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class HTTPRequest {\n  abstract respond(\n    response: Partial<ResponseForRequest>,\n    priority?: number\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"response"}),(0,s.jsxs)(t.td,{children:["Partial<",(0,s.jsx)(t.a,{href:"/api/puppeteer.responseforrequest",children:"ResponseForRequest"}),">"]}),(0,s.jsx)(t.td,{children:"the response to fulfill the request with."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"priority"}),(0,s.jsx)(t.td,{children:"number"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.em,{children:"(Optional)"})," If provided, intercept is resolved using cooperative handling rules. Otherwise, intercept is resolved immediately."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["To use this, request interception should be enabled with ",(0,s.jsx)(t.a,{href:"/api/puppeteer.page.setrequestinterception",children:"Page.setRequestInterception()"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Exception is immediately thrown if the request interception is not enabled."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"An example of fulfilling all requests with 404 responses:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"await page.setRequestInterception(true);\npage.on('request', request => {\n  request.respond({\n    status: 404,\n    contentType: 'text/plain',\n    body: 'Not Found!',\n  });\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["NOTE: Mocking responses for dataURL requests is not supported. Calling ",(0,s.jsx)(t.code,{children:"request.respond"})," for a dataURL request is a noop."]})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var s,i={},l=null,d=null;for(s in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,s)&&!a.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:d,props:i,_owner:p.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>p,a:()=>o});var s=r(67294);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);