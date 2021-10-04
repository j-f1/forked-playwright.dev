"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6430],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,b=d["".concat(i,".").concat(p)]||d[p]||k[p]||a;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var l=37,u=39;var k=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,k=e.values,d=e.groupId,p=e.className,b=a(),m=b.tabGroupChoices,f=b.setTabGroupChoices,v=(0,r.useState)(o),h=v[0],w=v[1],y=r.Children.toArray(e.children),g=[];if(null!=d){var S=m[d];null!=S&&S!==h&&k.some((function(e){return e.value===S}))&&w(S)}var N=function(e){var t=e.currentTarget,n=g.indexOf(t),r=k[n].value;w(r),null!=d&&(f(d,r),setTimeout((function(){var e,n,r,o,a,c,s,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,c=window,s=c.innerHeight,l=c.innerWidth,n>=0&&a<=l&&o<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},W=function(e){var t,n;switch(e.keyCode){case u:var r=g.indexOf(e.target)+1;n=g[r]||g[0];break;case l:var o=g.indexOf(e.target)-1;n=g[o]||g[g.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},p)},k.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":h===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:W,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},129:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return k}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c=(n(5064),n(8215),{id:"class-websocket",title:"WebSocket"}),s=void 0,i={unversionedId:"api/class-websocket",id:"version-1.15/api/class-websocket",isDocsHomePage:!1,title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.15/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/dotnet/docs/api/class-websocket",version:"1.15",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"version-1.15/api",previous:{title:"Video",permalink:"/dotnet/docs/api/class-video"},next:{title:"WebSocketFrame",permalink:"/dotnet/docs/api/class-websocketframe"}},l=[{value:"event WebSocket.Close",id:"web-socket-event-close",children:[]},{value:"event WebSocket.FrameReceived",id:"web-socket-event-frame-received",children:[]},{value:"event WebSocket.FrameSent",id:"web-socket-event-frame-sent",children:[]},{value:"event WebSocket.SocketError",id:"web-socket-event-socket-error",children:[]},{value:"WebSocket.IsClosed",id:"web-socket-is-closed",children:[]},{value:"WebSocket.Url",id:"web-socket-url",children:[]}],u={toc:l};function k(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-websocket",title:"WebSocket"},"WebSocket")," class represents websocket connections in the page."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket#web-socket-event-close"},"event WebSocket.Close")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket#web-socket-event-frame-received"},"event WebSocket.FrameReceived")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket#web-socket-event-frame-sent"},"event WebSocket.FrameSent")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket#web-socket-event-socket-error"},"event WebSocket.SocketError")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket#web-socket-is-closed"},"WebSocket.IsClosed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket#web-socket-url"},"WebSocket.Url"))),(0,a.kt)("h2",{id:"web-socket-event-close"},"event WebSocket.Close"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocket",title:"WebSocket"},"WebSocket"),">")),(0,a.kt)("p",null,"Fired when the websocket closes."),(0,a.kt)("h2",{id:"web-socket-event-frame-received"},"event WebSocket.FrameReceived"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame"),">")),(0,a.kt)("p",null,"Fired when the websocket receives a frame."),(0,a.kt)("h2",{id:"web-socket-event-frame-sent"},"event WebSocket.FrameSent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame"),">")),(0,a.kt)("p",null,"Fired when the websocket sends a frame."),(0,a.kt)("h2",{id:"web-socket-event-socket-error"},"event WebSocket.SocketError"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"String"),">")),(0,a.kt)("p",null,"Fired when the websocket has an error."),(0,a.kt)("h2",{id:"web-socket-is-closed"},"WebSocket.IsClosed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-is-closed-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),">",(0,a.kt)("a",{href:"#web-socket-is-closed-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Indicates that the web socket has been closed."),(0,a.kt)("h2",{id:"web-socket-url"},"WebSocket.Url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-url-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,a.kt)("a",{href:"#web-socket-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the URL of the WebSocket."))}k.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);