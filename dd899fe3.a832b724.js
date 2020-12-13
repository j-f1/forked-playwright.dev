(window.webpackJsonp=window.webpackJsonp||[]).push([[680],{747:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),c=(r(0),r(875)),o={id:"class-websocket",title:"class: WebSocket"},i={unversionedId:"api/class-websocket",id:"version-1.6.0/api/class-websocket",isDocsHomePage:!1,title:"class: WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.6.0/api/class-websocket.md",slug:"/api/class-websocket",permalink:"/docs/1.6.0/api/class-websocket",editUrl:"https://github.com/microsoft/playwright/edit/master/docs/versioned_docs/version-1.6.0/api/class-websocket.md",version:"1.6.0",sidebar:"version-1.6.0/api",previous:{title:"class: Route",permalink:"/docs/1.6.0/api/class-route"},next:{title:"class: TimeoutError",permalink:"/docs/1.6.0/api/class-timeouterror"}},l=[{value:"event: &#39;close&#39;",id:"event-close",children:[]},{value:"event: &#39;framereceived&#39;",id:"event-framereceived",children:[]},{value:"event: &#39;framesent&#39;",id:"event-framesent",children:[]},{value:"event: &#39;socketerror&#39;",id:"event-socketerror",children:[]},{value:"webSocket.isClosed()",id:"websocketisclosed",children:[]},{value:"webSocket.url()",id:"websocketurl",children:[]},{value:"webSocket.waitForEvent(event, optionsOrPredicate)",id:"websocketwaitforeventevent-optionsorpredicate",children:[]}],b={rightToc:l};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.6.0/api/class-websocket#class-websocket",title:"WebSocket"}),"WebSocket")," class represents websocket connections in the page."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#event-close-2"}),"event: 'close'")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-websocket#event-framereceived"}),"event: 'framereceived'")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-websocket#event-framesent"}),"event: 'framesent'")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-websocket#event-socketerror"}),"event: 'socketerror'")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-websocket#websocketisclosed"}),"webSocket.isClosed()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-websocket#websocketurl"}),"webSocket.url()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-websocket#websocketwaitforeventevent-optionsorpredicate"}),"webSocket.waitForEvent(event[, optionsOrPredicate])"))),Object(c.b)("h2",{id:"event-close"},"event: 'close'"),Object(c.b)("p",null,"Fired when the websocket closes."),Object(c.b)("h2",{id:"event-framereceived"},"event: 'framereceived'"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"<",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> web socket frame data",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"payload")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"|",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.htmlapi.md#buffer_class_buffer",title:"Buffer"}),"Buffer"),"> frame payload")))),Object(c.b)("p",null,"Fired when the websocket recieves a frame."),Object(c.b)("h2",{id:"event-framesent"},"event: 'framesent'"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"<",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> web socket frame data",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"payload")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"|",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.htmlapi.md#buffer_class_buffer",title:"Buffer"}),"Buffer"),"> frame payload")))),Object(c.b)("p",null,"Fired when the websocket sends a frame."),Object(c.b)("h2",{id:"event-socketerror"},"event: 'socketerror'"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"<",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"String"),"> the error message")),Object(c.b)("p",null,"Fired when the websocket has an error."),Object(c.b)("h2",{id:"websocketisclosed"},"webSocket.isClosed()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(c.b)("p",null,"Indicates that the web socket has been closed."),Object(c.b)("h2",{id:"websocketurl"},"webSocket.url()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(c.b)("p",null,"Contains the URL of the WebSocket."),Object(c.b)("h2",{id:"websocketwaitforeventevent-optionsorpredicate"},"webSocket.waitForEvent(event","[, optionsOrPredicate]",")"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"event")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Event name, same one would pass into ",Object(c.b)("inlineCode",{parentName:"li"},"webSocket.on(event)"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"optionsOrPredicate")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"Function"),"|",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Either a predicate that receives an event or an options object.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"predicate")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"Function"),"> receives the event data and resolves to truthy value when the waiting should resolve."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> maximum time to wait for in milliseconds. Defaults to ",Object(c.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(c.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)")," or ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.6.0/api/class-page#pagesetdefaulttimeouttimeout"}),"page.setDefaultTimeout(timeout)")," methods."))),Object(c.b)("li",{parentName:"ul"},"returns: <",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">> Promise which resolves to the event data value.")),Object(c.b)("p",null,"Waits for event to fire and passes its value into the predicate function. Resolves when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event\nis fired."))}s.isMDXComponent=!0},875:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return r?n.a.createElement(m,i(i({ref:t},b),{},{components:r})):n.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);