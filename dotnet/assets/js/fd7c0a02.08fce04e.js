"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9463],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,b=p["".concat(i,".").concat(d)]||p[d]||k[d]||a;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(7294),o=r(9443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=r(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var s=37,u=39;var k=function(e){var t=e.lazy,r=e.block,o=e.defaultValue,k=e.values,p=e.groupId,d=e.className,b=a(),f=b.tabGroupChoices,m=b.setTabGroupChoices,v=(0,n.useState)(o),h=v[0],w=v[1],y=n.Children.toArray(e.children),S=[];if(null!=p){var g=f[p];null!=g&&g!==h&&k.some((function(e){return e.value===g}))&&w(g)}var N=function(e){var t=e.currentTarget,r=S.indexOf(t),n=k[r].value;w(n),null!=p&&(m(p,n),setTimeout((function(){var e,r,n,o,a,c,l,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,a=e.right,c=window,l=c.innerHeight,s=c.innerWidth,r>=0&&a<=s&&o<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},W=function(e){var t,r;switch(e.keyCode){case u:var n=S.indexOf(e.target)+1;r=S[n]||S[0];break;case s:var o=S.indexOf(e.target)-1;r=S[o]||S[S.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},d)},k.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,c.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:W,onFocus:N,onClick:N},r)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},9355:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return k}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c=(r(5064),r(8215),{id:"class-websocket",title:"WebSocket"}),l=void 0,i={unversionedId:"api/class-websocket",id:"version-1.13/api/class-websocket",isDocsHomePage:!1,title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.13/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/dotnet/docs/1.13/api/class-websocket",version:"1.13",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"version-1.13/api",previous:{title:"Video",permalink:"/dotnet/docs/1.13/api/class-video"},next:{title:"WebSocketFrame",permalink:"/dotnet/docs/1.13/api/class-websocketframe"}},s=[{value:"event WebSocket.Close",id:"web-socket-event-close",children:[]},{value:"event WebSocket.FrameReceived",id:"web-socket-event-frame-received",children:[]},{value:"event WebSocket.FrameSent",id:"web-socket-event-frame-sent",children:[]},{value:"event WebSocket.SocketError",id:"web-socket-event-socket-error",children:[]},{value:"WebSocket.IsClosed",id:"web-socket-is-closed",children:[]},{value:"WebSocket.Url",id:"web-socket-url",children:[]}],u={toc:s};function k(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-websocket",title:"WebSocket"},"WebSocket")," class represents websocket connections in the page."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-websocket#web-socket-event-close"},"event WebSocket.Close")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-websocket#web-socket-event-frame-received"},"event WebSocket.FrameReceived")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-websocket#web-socket-event-frame-sent"},"event WebSocket.FrameSent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-websocket#web-socket-event-socket-error"},"event WebSocket.SocketError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-websocket#web-socket-is-closed"},"WebSocket.IsClosed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-websocket#web-socket-url"},"WebSocket.Url"))),(0,a.kt)("h2",{id:"web-socket-event-close"},"event WebSocket.Close"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-websocket",title:"WebSocket"},"WebSocket"),">")),(0,a.kt)("p",null,"Fired when the websocket closes."),(0,a.kt)("h2",{id:"web-socket-event-frame-received"},"event WebSocket.FrameReceived"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame"),">")),(0,a.kt)("p",null,"Fired when the websocket receives a frame."),(0,a.kt)("h2",{id:"web-socket-event-frame-sent"},"event WebSocket.FrameSent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame"),">")),(0,a.kt)("p",null,"Fired when the websocket sends a frame."),(0,a.kt)("h2",{id:"web-socket-event-socket-error"},"event WebSocket.SocketError"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"String"),">")),(0,a.kt)("p",null,"Fired when the websocket has an error."),(0,a.kt)("h2",{id:"web-socket-is-closed"},"WebSocket.IsClosed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-is-closed-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,a.kt)("a",{href:"#web-socket-is-closed-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Indicates that the web socket has been closed."),(0,a.kt)("h2",{id:"web-socket-url"},"WebSocket.Url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-url-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,a.kt)("a",{href:"#web-socket-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the URL of the WebSocket."))}k.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);