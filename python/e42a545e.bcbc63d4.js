(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{249:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var o=r(3),a=r(7),n=(r(0),r(270)),c=r(273),s=r(274),i={id:"class-chromiumbrowsercontext",title:"ChromiumBrowserContext"},b={unversionedId:"api/class-chromiumbrowsercontext",id:"version-1.8.0/api/class-chromiumbrowsercontext",isDocsHomePage:!1,title:"ChromiumBrowserContext",description:"* extends: [BrowserContext]",source:"@site/versioned_docs/version-1.8.0/api/class-chromiumbrowsercontext.mdx",slug:"/api/class-chromiumbrowsercontext",permalink:"/python/docs/1.8.0/api/class-chromiumbrowsercontext",version:"1.8.0",sidebar:"version-1.8.0/api",previous:{title:"CDPSession",permalink:"/python/docs/1.8.0/api/class-cdpsession"},next:{title:"ConsoleMessage",permalink:"/python/docs/1.8.0/api/class-consolemessage"}},l=[{value:"chromium_browser_context.on(&quot;backgroundpage&quot;)",id:"chromium_browser_contextonbackgroundpage",children:[]},{value:"chromium_browser_context.on(&quot;serviceworker&quot;)",id:"chromium_browser_contextonserviceworker",children:[]},{value:"chromium_browser_context.background_pages",id:"chromium_browser_contextbackground_pages",children:[]},{value:"chromium_browser_context.new_cdp_session(page)",id:"chromium_browser_contextnew_cdp_sessionpage",children:[]},{value:"chromium_browser_context.service_workers",id:"chromium_browser_contextservice_workers",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"extends: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"))),Object(n.b)("p",null,"Chromium-specific features including background pages, service worker support, etc."),Object(n.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(n.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-py"}),'background_page = context.wait_for_event("backgroundpage")\n'))),Object(n.b)(s.a,{value:"async",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",Object(o.a)({parentName:"pre"},{className:"language-py"}),'background_page = await context.wait_for_event("backgroundpage")\n')))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-chromiumbrowsercontext#chromium_browser_contextonbackgroundpage"}),'chromium_browser_context.on("backgroundpage")')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-chromiumbrowsercontext#chromium_browser_contextonserviceworker"}),'chromium_browser_context.on("serviceworker")')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-chromiumbrowsercontext#chromium_browser_contextbackground_pages"}),"chromium_browser_context.background_pages")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-chromiumbrowsercontext#chromium_browser_contextnew_cdp_sessionpage"}),"chromium_browser_context.new_cdp_session(page)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-chromiumbrowsercontext#chromium_browser_contextservice_workers"}),"chromium_browser_context.service_workers")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextonclose"}),'browser_context.on("close")')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextonpage"}),'browser_context.on("page")')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextadd_cookiescookies"}),"browser_context.add_cookies(cookies)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextadd_init_scriptkwargs"}),"browser_context.add_init_script(**kwargs)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextbrowser"}),"browser_context.browser")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextclear_cookies"}),"browser_context.clear_cookies()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextclear_permissions"}),"browser_context.clear_permissions()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextclose"}),"browser_context.close()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextcookieskwargs"}),"browser_context.cookies(**kwargs)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextexpect_eventevent-kwargs"}),"browser_context.expect_event(event, **kwargs)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextexpect_pagekwargs"}),"browser_context.expect_page(**kwargs)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextexpose_bindingname-callback-kwargs"}),"browser_context.expose_binding(name, callback, **kwargs)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextexpose_functionname-callback"}),"browser_context.expose_function(name, callback)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextgrant_permissionspermissions-kwargs"}),"browser_context.grant_permissions(permissions, **kwargs)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextnew_page"}),"browser_context.new_page()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextpages"}),"browser_context.pages")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextrouteurl-handler"}),"browser_context.route(url, handler)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextset_default_navigation_timeouttimeout"}),"browser_context.set_default_navigation_timeout(timeout)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextset_default_timeouttimeout"}),"browser_context.set_default_timeout(timeout)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextset_extra_http_headersheaders"}),"browser_context.set_extra_http_headers(headers)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextset_geolocationgeolocation"}),"browser_context.set_geolocation(geolocation)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextset_offlineoffline"}),"browser_context.set_offline(offline)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextstorage_statekwargs"}),"browser_context.storage_state(**kwargs)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextunrouteurl-kwargs"}),"browser_context.unroute(url, **kwargs)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextwait_for_eventevent-kwargs"}),"browser_context.wait_for_event(event, **kwargs)"))),Object(n.b)("h2",{id:"chromium_browser_contextonbackgroundpage"},'chromium_browser_context.on("backgroundpage")'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"type: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-page",title:"Page"}),"Page"),">")),Object(n.b)("p",null,"Emitted when new background page is created in the context."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Only works with persistent context."))),Object(n.b)("h2",{id:"chromium_browser_contextonserviceworker"},'chromium_browser_context.on("serviceworker")'),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"type: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-worker",title:"Worker"}),"Worker"),">")),Object(n.b)("p",null,"Emitted when new service worker is created in the context."),Object(n.b)("h2",{id:"chromium_browser_contextbackground_pages"},"chromium_browser_context.background_pages"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"}),"List"),"[",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-page",title:"Page"}),"Page"),"]",">")),Object(n.b)("p",null,"All existing background pages in the context."),Object(n.b)("h2",{id:"chromium_browser_contextnew_cdp_sessionpage"},"chromium_browser_context.new_cdp_session(page)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"page")," <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-page",title:"Page"}),"Page"),"> Page to create new session for."),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-cdpsession",title:"CDPSession"}),"CDPSession"),">")),Object(n.b)("p",null,"Returns the newly created session."),Object(n.b)("h2",{id:"chromium_browser_contextservice_workers"},"chromium_browser_context.service_workers"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"}),"List"),"[",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-worker",title:"Worker"}),"Worker"),"]",">")),Object(n.b)("p",null,"All existing service workers in the context."))}u.isMDXComponent=!0},269:function(e,t,r){"use strict";function o(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return w}));var o=r(0),a=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,w=p["".concat(c,".").concat(m)]||p[m]||u[m]||n;return r?a.a.createElement(w,s(s({ref:t},b),{},{components:r})):a.a.createElement(w,s({ref:t},b))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var b=2;b<n;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},271:function(e,t,r){"use strict";var o=r(0),a=r(272);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},272:function(e,t,r){"use strict";var o=r(0),a=Object(o.createContext)(void 0);t.a=a},273:function(e,t,r){"use strict";var o=r(0),a=r.n(o),n=r(271),c=r(269),s=r(55),i=r.n(s),b=37,l=39;t.a=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,p=e.values,u=e.groupId,m=e.className,w=Object(n.a)(),d=w.tabGroupChoices,O=w.setTabGroupChoices,_=Object(o.useState)(s),h=_[0],j=_[1],x=o.Children.toArray(e.children);if(null!=u){var f=d[u];null!=f&&f!==h&&p.some((function(e){return e.value===f}))&&j(f)}var g=function(e){j(e),null!=u&&O(u,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},m)},p.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case l:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},r)}))),t?Object(o.cloneElement)(x.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},274:function(e,t,r){"use strict";var o=r(3),a=r(0),n=r.n(a);t.a=function(e){var t=e.children,r=e.hidden,a=e.className;return n.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:r,className:a}),t)}}}]);