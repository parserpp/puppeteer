"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=s(r),k=n,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||p;return r?a.createElement(c,l(l({ref:t},o),{},{components:r})):a.createElement(c,l({ref:t},o))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,l=new Array(p);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<p;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18957:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>o});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={sidebar_label:"HTTPRequest"},i="HTTPRequest class",u={unversionedId:"api/puppeteer.httprequest",id:"version-19.7.4/api/puppeteer.httprequest",title:"HTTPRequest class",description:"Represents an HTTP request sent by a page.",source:"@site/versioned_docs/version-19.7.4/api/puppeteer.httprequest.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest",permalink:"/api/puppeteer.httprequest",draft:!1,tags:[],version:"19.7.4",frontMatter:{sidebar_label:"HTTPRequest"},sidebar:"api",previous:{title:"ElementHandle.waitForXPath",permalink:"/api/puppeteer.elementhandle.waitforxpath"},next:{title:"HTTPRequest.abort",permalink:"/api/puppeteer.httprequest.abort"}},s={},o=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:o};function m(e){var{components:t}=e,r=p(e,["components"]);return(0,a.kt)("wrapper",n({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"httprequest-class"}),"HTTPRequest class"),(0,a.kt)("p",null,"Represents an HTTP request sent by a page."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class HTTPRequest\n")),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"Whenever the page sends a request, such as for a network resource, the following events are emitted by Puppeteer's ",(0,a.kt)("inlineCode",{parentName:"p"},"page"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"request"),": emitted when the request is issued by the page. - ",(0,a.kt)("inlineCode",{parentName:"li"},"requestfinished")," - emitted when the response body is downloaded and the request is complete.")),(0,a.kt)("p",null,"If request fails at some point, then instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"requestfinished")," event the ",(0,a.kt)("inlineCode",{parentName:"p"},"requestfailed")," event is emitted."),(0,a.kt)("p",null,"All of these events provide an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPRequest")," representing the request that occurred:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{}),"page.on('request', request => ...)\n")),(0,a.kt)("p",null,"NOTE: HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,a.kt)("inlineCode",{parentName:"p"},"requestfinished")," event."),(0,a.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the ",(0,a.kt)("inlineCode",{parentName:"p"},"requestfinished")," event, and a new request is issued to a redirected url."),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPRequest")," class."),(0,a.kt)("h2",n({},{id:"properties"}),"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.client"}),"client")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"readonly")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"CDPSession"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Warning! Using this client can break Puppeteer. Use with caution.")))),(0,a.kt)("h2",n({},{id:"methods"}),"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.abort"}),"abort(errorCode, priority)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Aborts a request.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.aborterrorreason"}),"abortErrorReason()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.continue"}),"continue(overrides, priority)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Continues request with optional request overrides.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.continuerequestoverrides"}),"continueRequestOverrides()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.enqueueinterceptaction"}),"enqueueInterceptAction(pendingHandler)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Adds an async request handler to the processing queue. Deferred handlers are not guaranteed to execute in any particular order, but they are guaranteed to resolve before the request interception is finalized.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.failure"}),"failure()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Access information about the request's failure.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.finalizeinterceptions"}),"finalizeInterceptions()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Awaits pending interception handlers and then decides how to fulfill the request interception.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.frame"}),"frame()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.headers"}),"headers()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.initiator"}),"initiator()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.interceptresolutionstate"}),"interceptResolutionState()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.isinterceptresolutionhandled"}),"isInterceptResolutionHandled()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.isnavigationrequest"}),"isNavigationRequest()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.method"}),"method()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.postdata"}),"postData()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.redirectchain"}),"redirectChain()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A ",(0,a.kt)("code",null,"redirectChain")," is a chain of requests initiated to fetch a resource.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.resourcetype"}),"resourceType()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Contains the request's resource type as it was perceived by the rendering engine.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.respond"}),"respond(response, priority)")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Fulfills a request with the given response.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.response"}),"response()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.responseforrequest"}),"responseForRequest()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest.url"}),"url()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}))))))}m.isMDXComponent=!0}}]);