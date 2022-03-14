"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[59249],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70562:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return b}});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&c(e,a,t[a]);return e};const m={id:"class-apirequest",title:"APIRequest"},d=void 0,h={unversionedId:"api/class-apirequest",id:"version-1.18/api/class-apirequest",title:"APIRequest",description:"Exposes API that can be used for the Web API testing. Each Playwright browser context has a APIRequestContext instance attached which shares cookies with the page context. Its also possible to create a new APIRequestContext instance manually. For more information see here.",source:"@site/versioned_docs/version-1.18/api/class-apirequest.mdx",sourceDirName:"api",slug:"/api/class-apirequest",permalink:"/docs/1.18/api/class-apirequest",tags:[],version:"1.18",frontMatter:{id:"class-apirequest",title:"APIRequest"},sidebar:"version-1.18/api",previous:{title:"Playwright Library",permalink:"/docs/1.18/api/class-playwright"},next:{title:"APIRequestContext",permalink:"/docs/1.18/api/class-apirequestcontext"}},k={},b=[{value:"apiRequest.newContext(options)",id:"api-request-new-context",level:2}],g={toc:b};function f(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},g),c),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Exposes API that can be used for the Web API testing. Each Playwright browser context has a APIRequestContext instance attached which shares cookies with the page context. Its also possible to create a new APIRequestContext instance manually. For more information see ",(0,r.kt)("a",u({parentName:"p"},{href:"./class-apirequestcontext"}),"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-apirequest#api-request-new-context"}),"apiRequest.newContext([options])"))),(0,r.kt)("h2",u({},{id:"api-request-new-context"}),"apiRequest.newContext(","[options]",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseURL"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-base-url"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Methods like ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-apirequestcontext#api-request-context-get"}),"apiRequestContext.get(url[, options])")," take the base URL into consideration by using the ",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/URL/URL"}),(0,r.kt)("inlineCode",{parentName:"a"},"URL()"))," constructor for building the corresponding URL. Examples:",(0,r.kt)("a",{href:"#api-request-new-context-option-base-url",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"baseURL: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," and sending request to ",(0,r.kt)("inlineCode",{parentName:"li"},"/bar.html")," results in ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")),(0,r.kt)("li",{parentName:"ul"},"baseURL: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/")," and sending request to ",(0,r.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo/bar.html")),(0,r.kt)("li",{parentName:"ul"},"baseURL: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/foo")," (without trailing slash) and navigating to ",(0,r.kt)("inlineCode",{parentName:"li"},"./bar.html")," results in ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/bar.html")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extraHTTPHeaders"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-extra-http-headers"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",">"," An object containing additional HTTP headers to be sent with every request.",(0,r.kt)("a",{href:"#api-request-new-context-option-extra-http-headers",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpCredentials"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-http-credentials"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">"," Credentials for ",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",(0,r.kt)("a",{href:"#api-request-new-context-option-http-credentials",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-ignore-https-errors"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"," Whether to ignore HTTPS errors when sending network requests. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".",(0,r.kt)("a",{href:"#api-request-new-context-option-ignore-https-errors",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proxy"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-proxy"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">"," Network proxy settings.",(0,r.kt)("a",{href:"#api-request-new-context-option-proxy",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Proxy to be used for all requests. HTTP and SOCKS proxies are supported, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"http://myproxy.com:3128")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"socks5://myproxy.com:3128"),". Short form ",(0,r.kt)("inlineCode",{parentName:"li"},"myproxy.com:3128")," is considered an HTTP proxy."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bypass")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Optional comma-separated domains to bypass proxy, for example ",(0,r.kt)("inlineCode",{parentName:"li"},'".com, chromium.org, .domain.com"'),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"username")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Optional username to use if HTTP proxy requires authentication."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Optional password to use if HTTP proxy requires authentication."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storageState"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-storage-state"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">"," Populates context with given storage state. This option can be used to initialize context with logged-in information obtained via ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-browsercontext#browser-context-storage-state"}),"browserContext.storageState([options])")," or ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-apirequestcontext#api-request-context-storage-state"}),"apiRequestContext.storageState([options])"),". Either a path to the file with saved storage, or the value returned by one of ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-browsercontext#browser-context-storage-state"}),"browserContext.storageState([options])")," or ",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-apirequestcontext#api-request-context-storage-state"}),"apiRequestContext.storageState([options])")," methods.",(0,r.kt)("a",{href:"#api-request-new-context-option-storage-state",class:"list-anchor"},"#"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cookies")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domain")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expires")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Unix time in seconds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpOnly")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secure")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sameSite")," ","<",'"Strict"|"Lax"|"None"',">"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origins")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"origin")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"localStorage")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-timeout"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Maximum time in milliseconds to wait for the response. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout.",(0,r.kt)("a",{href:"#api-request-new-context-option-timeout",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userAgent"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-option-user-agent"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Specific user agent to use in this context.",(0,r.kt)("a",{href:"#api-request-new-context-option-user-agent",class:"list-anchor"},"#")))),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-request-new-context-return"})," ","<",(0,r.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,r.kt)("a",u({parentName:"li"},{href:"/docs/1.18/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),">",">",(0,r.kt)("a",{href:"#api-request-new-context-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Creates new instances of ",(0,r.kt)("a",u({parentName:"p"},{href:"/docs/1.18/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),"."))}f.isMDXComponent=!0}}]);