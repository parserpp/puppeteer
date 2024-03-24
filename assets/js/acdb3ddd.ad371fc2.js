/*! For license information please see acdb3ddd.ad371fc2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71954],{68105:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=s(85893),i=s(11151);const n={sidebar_label:"Dialog"},a="Dialog class",l={id:"api/puppeteer.dialog",title:"Dialog class",description:"Dialog instances are dispatched by the Page via the dialog event.",source:"@site/../docs/api/puppeteer.dialog.md",sourceDirName:"api",slug:"/api/puppeteer.dialog",permalink:"/next/api/puppeteer.dialog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Dialog"},sidebar:"api",previous:{title:"FileChooser.isMultiple",permalink:"/next/api/puppeteer.filechooser.ismultiple"},next:{title:"Dialog.accept",permalink:"/next/api/puppeteer.dialog.accept"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dialog-class",children:"Dialog class"}),"\n",(0,r.jsxs)(t.p,{children:["Dialog instances are dispatched by the ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.page",children:"Page"})," via the ",(0,r.jsx)(t.code,{children:"dialog"})," event."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class Dialog\n"})}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(t.code,{children:"Dialog"})," class."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Method"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.dialog.accept",children:"accept(promptText)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"A promise that resolves when the dialog has been accepted."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.dialog.defaultvalue",children:"defaultValue()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["The default value of the prompt, or an empty string if the dialog is not a ",(0,r.jsx)(t.code,{children:"prompt"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.dialog.dismiss",children:"dismiss()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"A promise which will resolve once the dialog has been dismissed"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.dialog.message",children:"message()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"The message displayed in the dialog."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/next/api/puppeteer.dialog.type",children:"type()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"The type of the dialog."})})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},75251:(e,t,s)=>{var r=s(67294),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var r,n={},c=null,o=null;for(r in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(o=t.ref),t)a.call(t,r)&&!d.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:o,props:n,_owner:l.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},85893:(e,t,s)=>{e.exports=s(75251)},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>a});var r=s(67294);const i={},n=r.createContext(i);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);