"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[42577],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(r),b=n,d=k["".concat(s,".").concat(b)]||k[b]||u[b]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},68603:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return b},default:function(){return h},frontMatter:function(){return k},metadata:function(){return d},toc:function(){return m}});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const k={id:"class-websocket",title:"WebSocket"},b=void 0,d={unversionedId:"api/class-websocket",id:"version-1.18/api/class-websocket",title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.18/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/docs/1.18/api/class-websocket",tags:[],version:"1.18",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"version-1.18/api",previous:{title:"Video",permalink:"/docs/1.18/api/class-video"},next:{title:"Worker",permalink:"/docs/1.18/api/class-worker"}},f={},m=[{value:"webSocket.on(&#39;close&#39;)",id:"web-socket-event-close",level:2},{value:"webSocket.on(&#39;framereceived&#39;)",id:"web-socket-event-frame-received",level:2},{value:"webSocket.on(&#39;framesent&#39;)",id:"web-socket-event-frame-sent",level:2},{value:"webSocket.on(&#39;socketerror&#39;)",id:"web-socket-event-socket-error",level:2},{value:"webSocket.isClosed()",id:"web-socket-is-closed",level:2},{value:"webSocket.url()",id:"web-socket-url",level:2},{value:"webSocket.waitForEvent(event, optionsOrPredicate, options)",id:"web-socket-wait-for-event",level:2}],v={toc:m};function h(e){var t,r=e,{components:n}=r,p=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},v),p),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/1.18/api/class-websocket",title:"WebSocket"}),"WebSocket")," class represents websocket connections in the page."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-websocket#web-socket-event-close"}),"webSocket.on('close')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-websocket#web-socket-event-frame-received"}),"webSocket.on('framereceived')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-websocket#web-socket-event-frame-sent"}),"webSocket.on('framesent')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-websocket#web-socket-event-socket-error"}),"webSocket.on('socketerror')")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-websocket#web-socket-is-closed"}),"webSocket.isClosed()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-websocket#web-socket-url"}),"webSocket.url()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-websocket#web-socket-wait-for-event"}),"webSocket.waitForEvent(event[, optionsOrPredicate, options])"))),(0,a.kt)("h2",u({},{id:"web-socket-event-close"}),"webSocket.on('close')"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-websocket",title:"WebSocket"}),"WebSocket"),">")),(0,a.kt)("p",null,"Fired when the websocket closes."),(0,a.kt)("h2",u({},{id:"web-socket-event-frame-received"}),"webSocket.on('framereceived')"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"payload")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,a.kt)("a",u({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">"," frame payload")))),(0,a.kt)("p",null,"Fired when the websocket receives a frame."),(0,a.kt)("h2",u({},{id:"web-socket-event-frame-sent"}),"webSocket.on('framesent')"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"payload")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,a.kt)("a",u({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">"," frame payload")))),(0,a.kt)("p",null,"Fired when the websocket sends a frame."),(0,a.kt)("h2",u({},{id:"web-socket-event-socket-error"}),"webSocket.on('socketerror')"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"String"),">")),(0,a.kt)("p",null,"Fired when the websocket has an error."),(0,a.kt)("h2",u({},{id:"web-socket-is-closed"}),"webSocket.isClosed()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-is-closed-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">",(0,a.kt)("a",{href:"#web-socket-is-closed-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Indicates that the web socket has been closed."),(0,a.kt)("h2",u({},{id:"web-socket-url"}),"webSocket.url()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-url-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#web-socket-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the URL of the WebSocket."),(0,a.kt)("h2",u({},{id:"web-socket-wait-for-event"}),"webSocket.waitForEvent(event","[, optionsOrPredicate, options]",")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-event"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Event name, same one would pass into ",(0,a.kt)("inlineCode",{parentName:"li"},"webSocket.on(event)"),".",(0,a.kt)("a",{href:"#web-socket-wait-for-event-option-event",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"optionsOrPredicate"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-options-or-predicate"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">"," Either a predicate that receives an event or an options object. Optional.",(0,a.kt)("a",{href:"#web-socket-wait-for-event-option-options-or-predicate",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"predicate")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),">"," receives the event data and resolves to truthy value when the waiting should resolve."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," maximum time to wait for in milliseconds. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-browsercontext#browser-context-set-default-timeout"}),"browserContext.setDefaultTimeout(timeout)"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"predicate"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-predicate"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),">"," Receives the event data and resolves to truthy value when the waiting should resolve.",(0,a.kt)("a",{href:"#web-socket-wait-for-event-option-predicate",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">",(0,a.kt)("a",{href:"#web-socket-wait-for-event-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event is fired. Returns the event data value."))}h.isMDXComponent=!0}}]);