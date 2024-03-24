/*! For license information please see 18547441.53358cf3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61848],{62345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>j,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var s=r(85893),d=r(11151);const n={sidebar_label:"PageEvents"},i="PageEvents interface",c={id:"api/puppeteer.pageevents",title:"PageEvents interface",description:"Denotes the objects received by callback functions for page events.",source:"@site/versioned_docs/version-22.6.0/api/puppeteer.pageevents.md",sourceDirName:"api",slug:"/api/puppeteer.pageevents",permalink:"/api/puppeteer.pageevents",draft:!1,unlisted:!1,tags:[],version:"22.6.0",frontMatter:{sidebar_label:"PageEvents"},sidebar:"api",previous:{title:"PageEvent",permalink:"/api/puppeteer.pageevent"},next:{title:"PaperFormat",permalink:"/api/puppeteer.paperformat"}},p={},a=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function x(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"pageevents-interface",children:"PageEvents interface"}),"\n",(0,s.jsx)(t.p,{children:"Denotes the objects received by callback functions for page events."}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/api/puppeteer.pageevent",children:"PageEvent"})," for more detail on the events and when they are emitted."]}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export interface PageEvents extends Record<EventType, unknown>\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Extends:"})," Record<",(0,s.jsx)(t.a,{href:"/api/puppeteer.eventtype",children:"EventType"}),", unknown>"]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Modifiers"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"close"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"undefined"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"console"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.consolemessage",children:"ConsoleMessage"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"dialog"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.dialog",children:"Dialog"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"domcontentloaded"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"undefined"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"error"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Error"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"frameattached"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.frame",children:"Frame"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"framedetached"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.frame",children:"Frame"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"framenavigated"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.frame",children:"Frame"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"load"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"undefined"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"metrics"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["{ title: string; metrics: ",(0,s.jsx)(t.a,{href:"/api/puppeteer.metrics",children:"Metrics"}),"; }"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pageerror"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Error"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"popup"}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"/api/puppeteer.page",children:"Page"})," | null"]}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"request"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"requestfailed"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"requestfinished"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"requestservedfromcache"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"response"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"workercreated"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.webworker",children:"WebWorker"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"workerdestroyed"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.webworker",children:"WebWorker"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},75251:(e,t,r)=>{var s=r(67294),d=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var s,n={},a=null,x=null;for(s in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(x=t.ref),t)i.call(t,s)&&!p.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:d,type:e,key:a,ref:x,props:n,_owner:c.current}}t.Fragment=n,t.jsx=a,t.jsxs=a},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>i});var s=r(67294);const d={},n=s.createContext(d);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);