"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1447],{3905:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return m}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return a?r.createElement(b,i(i({ref:t},k),{},{components:a})):r.createElement(b,i({ref:t},k))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3452:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return f}});var r=a(3905),o=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&k(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&k(e,a,t[a]);return e};const d={id:"class-websocket",title:"WebSocket"},m=void 0,b={unversionedId:"api/class-websocket",id:"version-1.20/api/class-websocket",title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.20/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/java/docs/api/class-websocket",tags:[],version:"1.20",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"api",previous:{title:"Video",permalink:"/java/docs/api/class-video"},next:{title:"WebSocketFrame",permalink:"/java/docs/api/class-websocketframe"}},u={},f=[{value:"WebSocket.onClose(handler)",id:"web-socket-event-close",level:2},{value:"WebSocket.onFrameReceived(handler)",id:"web-socket-event-frame-received",level:2},{value:"WebSocket.onFrameSent(handler)",id:"web-socket-event-frame-sent",level:2},{value:"WebSocket.onSocketError(handler)",id:"web-socket-event-socket-error",level:2},{value:"WebSocket.isClosed()",id:"web-socket-is-closed",level:2},{value:"WebSocket.url()",id:"web-socket-url",level:2},{value:"WebSocket.waitForFrameReceived(options, callback)",id:"web-socket-wait-for-frame-received",level:2},{value:"WebSocket.waitForFrameSent(options, callback)",id:"web-socket-wait-for-frame-sent",level:2}],h={toc:f};function w(e){var t,a=e,{components:o}=a,k=((e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},h),k),n(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"The ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/api/class-websocket",title:"WebSocket"}),"WebSocket")," class represents websocket connections in the page."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocket#web-socket-event-close"}),"WebSocket.onClose(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocket#web-socket-event-frame-received"}),"WebSocket.onFrameReceived(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocket#web-socket-event-frame-sent"}),"WebSocket.onFrameSent(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocket#web-socket-event-socket-error"}),"WebSocket.onSocketError(handler)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocket#web-socket-is-closed"}),"WebSocket.isClosed()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocket#web-socket-url"}),"WebSocket.url()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocket#web-socket-wait-for-frame-received"}),"WebSocket.waitForFrameReceived([options], callback)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocket#web-socket-wait-for-frame-sent"}),"WebSocket.waitForFrameSent([options], callback)"))),(0,r.kt)("h2",p({},{id:"web-socket-event-close"}),"WebSocket.onClose(handler)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocket",title:"WebSocket"}),"WebSocket"),">")),(0,r.kt)("p",null,"Fired when the websocket closes."),(0,r.kt)("h2",p({},{id:"web-socket-event-frame-received"}),"WebSocket.onFrameReceived(handler)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame"),">")),(0,r.kt)("p",null,"Fired when the websocket receives a frame."),(0,r.kt)("h2",p({},{id:"web-socket-event-frame-sent"}),"WebSocket.onFrameSent(handler)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame"),">")),(0,r.kt)("p",null,"Fired when the websocket sends a frame."),(0,r.kt)("h2",p({},{id:"web-socket-event-socket-error"}),"WebSocket.onSocketError(handler)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">")),(0,r.kt)("p",null,"Fired when the websocket has an error."),(0,r.kt)("h2",p({},{id:"web-socket-is-closed"}),"WebSocket.isClosed()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-is-closed-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">",(0,r.kt)("a",{href:"#web-socket-is-closed-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Indicates that the web socket has been closed."),(0,r.kt)("h2",p({},{id:"web-socket-url"}),"WebSocket.url()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-url-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,r.kt)("a",{href:"#web-socket-url-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Contains the URL of the WebSocket."),(0,r.kt)("h2",p({},{id:"web-socket-wait-for-frame-received"}),"WebSocket.waitForFrameReceived(","[options]",", callback)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"WebSocket.WaitForFrameReceivedOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setPredicate"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-received-option-predicate"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html",title:"Predicate"}),"Predicate"),"<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame"),">",">"," Receives the ",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame")," object and resolves to truthy value when the waiting should resolve.",(0,r.kt)("a",{href:"#web-socket-wait-for-frame-received-option-predicate",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-received-option-timeout"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browser-context-set-default-timeout"}),"BrowserContext.setDefaultTimeout(timeout)"),".",(0,r.kt)("a",{href:"#web-socket-wait-for-frame-received-option-timeout",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callback"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-received-option-callback"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable"}),"Runnable"),">"," Callback that performs the action triggering the event.",(0,r.kt)("a",{href:"#web-socket-wait-for-frame-received-option-callback",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-received-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame"),">",(0,r.kt)("a",{href:"#web-socket-wait-for-frame-received-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Performs action and waits for a frame to be sent. If predicate is provided, it passes ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame")," value into the ",(0,r.kt)("inlineCode",{parentName:"p"},"predicate")," function and waits for ",(0,r.kt)("inlineCode",{parentName:"p"},"predicate(webSocketFrame)")," to return a truthy value. Will throw an error if the WebSocket or Page is closed before the frame is received."),(0,r.kt)("h2",p({},{id:"web-socket-wait-for-frame-sent"}),"WebSocket.waitForFrameSent(","[options]",", callback)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("inlineCode",{parentName:"li"},"WebSocket.WaitForFrameSentOptions"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setPredicate"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-sent-option-predicate"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html",title:"Predicate"}),"Predicate"),"<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame"),">",">"," Receives the ",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame")," object and resolves to truthy value when the waiting should resolve.",(0,r.kt)("a",{href:"#web-socket-wait-for-frame-sent-option-predicate",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-sent-option-timeout"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-browsercontext#browser-context-set-default-timeout"}),"BrowserContext.setDefaultTimeout(timeout)"),".",(0,r.kt)("a",{href:"#web-socket-wait-for-frame-sent-option-timeout",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"callback"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-sent-option-callback"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable"}),"Runnable"),">"," Callback that performs the action triggering the event.",(0,r.kt)("a",{href:"#web-socket-wait-for-frame-sent-option-callback",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-frame-sent-return"})," ","<",(0,r.kt)("a",p({parentName:"li"},{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame"),">",(0,r.kt)("a",{href:"#web-socket-wait-for-frame-sent-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Performs action and waits for a frame to be sent. If predicate is provided, it passes ",(0,r.kt)("a",p({parentName:"p"},{href:"/java/docs/api/class-websocketframe",title:"WebSocketFrame"}),"WebSocketFrame")," value into the ",(0,r.kt)("inlineCode",{parentName:"p"},"predicate")," function and waits for ",(0,r.kt)("inlineCode",{parentName:"p"},"predicate(webSocketFrame)")," to return a truthy value. Will throw an error if the WebSocket or Page is closed before the frame is sent."))}w.isMDXComponent=!0}}]);