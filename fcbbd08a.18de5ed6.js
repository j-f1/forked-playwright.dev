(window.webpackJsonp=window.webpackJsonp||[]).push([[792],{860:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return b}));var s=t(3),o=t(7),n=(t(0),t(875)),a={id:"class-browserserver",title:"class: BrowserServer"},c={unversionedId:"api/class-browserserver",id:"version-1.5.0/api/class-browserserver",isDocsHomePage:!1,title:"class: BrowserServer",description:"- event: 'close'",source:"@site/versioned_docs/version-1.5.0/api/class-browserserver.md",slug:"/api/class-browserserver",permalink:"/docs/1.5.0/api/class-browserserver",editUrl:"https://github.com/microsoft/playwright/edit/master/docs/versioned_docs/version-1.5.0/api/class-browserserver.md",version:"1.5.0",sidebar:"version-1.5.0/api",previous:{title:"class: Worker",permalink:"/docs/1.5.0/api/class-worker"},next:{title:"class: BrowserType",permalink:"/docs/1.5.0/api/class-browsertype"}},l=[{value:"event: &#39;close&#39;",id:"event-close",children:[]},{value:"browserServer.close()",id:"browserserverclose",children:[]},{value:"browserServer.kill()",id:"browserserverkill",children:[]},{value:"browserServer.process()",id:"browserserverprocess",children:[]},{value:"browserServer.wsEndpoint()",id:"browserserverwsendpoint",children:[]}],i={rightToc:l};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(s.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"#event-close-3"}),"event: 'close'")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browserserver#browserserverclose"}),"browserServer.close()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browserserver#browserserverkill"}),"browserServer.kill()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browserserver#browserserverprocess"}),"browserServer.process()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browserserver#browserserverwsendpoint"}),"browserServer.wsEndpoint()"))),Object(n.b)("h2",{id:"event-close"},"event: 'close'"),Object(n.b)("p",null,"Emitted when the browser server closes."),Object(n.b)("h2",{id:"browserserverclose"},"browserServer.close()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(n.b)("p",null,"Closes the browser gracefully and makes sure the process is terminated."),Object(n.b)("h2",{id:"browserserverkill"},"browserServer.kill()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(n.b)("p",null,"Kills the browser process and waits for the process to exit."),Object(n.b)("h2",{id:"browserserverprocess"},"browserServer.process()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"https://nodejs.org/api/child_process.html",title:"ChildProcess"}),"ChildProcess"),"> Spawned browser application process.")),Object(n.b)("h2",{id:"browserserverwsendpoint"},"browserServer.wsEndpoint()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(s.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Browser websocket url.")),Object(n.b)("p",null,"Browser websocket endpoint which can be used as an argument to ",Object(n.b)("a",Object(s.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-browsertype#browsertypeconnectoptions"}),"browserType.connect(options)")," to establish connection to the browser."))}b.isMDXComponent=!0},875:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return v}));var s=t(0),o=t.n(s);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,s,o=function(e,r){if(null==e)return{};var t,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),b=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=b(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,n=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=s,v=p["".concat(a,".").concat(d)]||p[d]||u[d]||n;return t?o.a.createElement(v,c(c({ref:r},i),{},{components:t})):o.a.createElement(v,c({ref:r},i))}));function v(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var n=t.length,a=new Array(n);a[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var i=2;i<n;i++)a[i]=t[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);