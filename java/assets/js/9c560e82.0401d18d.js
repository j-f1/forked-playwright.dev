"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3259],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var s=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,r=function(e,t){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=s.createContext({}),p=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return s.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(o,".").concat(h)]||u[h]||c[h]||n;return a?s.createElement(m,l(l({ref:t},d),{},{components:a})):s.createElement(m,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<n;p++)l[p]=a[p];return s.createElement.apply(null,l)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9758:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return N},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return v}});var s=a(3905),r=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&d(e,a,t[a]);return e};const u={id:"class-response",title:"Response"},h=void 0,m={unversionedId:"api/class-response",id:"version-1.24/api/class-response",title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/versioned_docs/version-1.24/api/class-response.mdx",sourceDirName:"api",slug:"/api/class-response",permalink:"/java/docs/api/class-response",tags:[],version:"1.24",frontMatter:{id:"class-response",title:"Response"},sidebar:"api",previous:{title:"Request",permalink:"/java/docs/api/class-request"},next:{title:"Route",permalink:"/java/docs/api/class-route"}},k={},v=[{value:"Response.allHeaders()",id:"response-all-headers",level:2},{value:"Response.body()",id:"response-body",level:2},{value:"Response.finished()",id:"response-finished",level:2},{value:"Response.frame()",id:"response-frame",level:2},{value:"Response.fromServiceWorker()",id:"response-from-service-worker",level:2},{value:"Response.headerValue(name)",id:"response-header-value",level:2},{value:"Response.headerValues(name)",id:"response-header-values",level:2},{value:"Response.headers()",id:"response-headers",level:2},{value:"Response.headersArray()",id:"response-headers-array",level:2},{value:"Response.ok()",id:"response-ok",level:2},{value:"Response.request()",id:"response-request",level:2},{value:"Response.securityDetails()",id:"response-security-details",level:2},{value:"Response.serverAddr()",id:"response-server-addr",level:2},{value:"Response.status()",id:"response-status",level:2},{value:"Response.statusText()",id:"response-status-text",level:2},{value:"Response.text()",id:"response-text",level:2},{value:"Response.url()",id:"response-url",level:2}],f={toc:v};function N(e){var t,a=e,{components:r}=a,d=((e,t)=>{var a={};for(var s in e)o.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&i)for(var s of i(e))t.indexOf(s)<0&&p.call(e,s)&&(a[s]=e[s]);return a})(a,["components"]);return(0,s.kt)("wrapper",(t=c(c({},f),d),n(t,l({components:r,mdxType:"MDXLayout"}))),(0,s.kt)("p",null,(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-response",title:"Response"}),"Response")," class represents responses which are received by page."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-all-headers"}),"Response.allHeaders()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-body"}),"Response.body()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-finished"}),"Response.finished()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-frame"}),"Response.frame()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-from-service-worker"}),"Response.fromServiceWorker()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-headers"}),"Response.headers()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-headers-array"}),"Response.headersArray()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-header-value"}),"Response.headerValue(name)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-header-values"}),"Response.headerValues(name)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-ok"}),"Response.ok()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-request"}),"Response.request()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-security-details"}),"Response.securityDetails()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-server-addr"}),"Response.serverAddr()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-status"}),"Response.status()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-status-text"}),"Response.statusText()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-text"}),"Response.text()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-response#response-url"}),"Response.url()"))),(0,s.kt)("h2",c({},{id:"response-all-headers"}),"Response.allHeaders()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.15"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-all-headers-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">",(0,s.kt)("a",{href:"#response-all-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"An object with all the response HTTP headers associated with this response."),(0,s.kt)("h2",c({},{id:"response-body"}),"Response.body()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-body-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"}),"byte","[","]"),">",(0,s.kt)("a",{href:"#response-body-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the buffer with response body."),(0,s.kt)("h2",c({},{id:"response-finished"}),"Response.finished()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-finished-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,s.kt)("a",{href:"#response-finished-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Waits for this response to finish, returns always ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,s.kt)("h2",c({},{id:"response-frame"}),"Response.frame()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-frame-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-frame",title:"Frame"}),"Frame"),">",(0,s.kt)("a",{href:"#response-frame-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-frame",title:"Frame"}),"Frame")," that initiated this response."),(0,s.kt)("h2",c({},{id:"response-from-service-worker"}),"Response.fromServiceWorker()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.23"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-from-service-worker-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">",(0,s.kt)("a",{href:"#response-from-service-worker-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Indicates whether this Response was fullfilled by a Service Worker's Fetch Handler (i.e. via ",(0,s.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith"}),"FetchEvent.respondWith"),")."),(0,s.kt)("h2",c({},{id:"response-header-value"}),"Response.headerValue(name)"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.15"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-value-option-name"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the header.",(0,s.kt)("a",{href:"#response-header-value-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-value-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,s.kt)("a",{href:"#response-header-value-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the value of the header matching the name. The name is case insensitive. If multiple headers have the same name (except ",(0,s.kt)("inlineCode",{parentName:"p"},"set-cookie"),"), they are returned as a list separated by ",(0,s.kt)("inlineCode",{parentName:"p"},", "),". For ",(0,s.kt)("inlineCode",{parentName:"p"},"set-cookie"),", the ",(0,s.kt)("inlineCode",{parentName:"p"},"\\n")," separator is used. If no headers are found, ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," is returned."),(0,s.kt)("h2",c({},{id:"response-header-values"}),"Response.headerValues(name)"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.15"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-values-option-name"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the header.",(0,s.kt)("a",{href:"#response-header-values-option-name",class:"list-anchor"},"#")),(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-header-values-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"}),"List"),"<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">",(0,s.kt)("a",{href:"#response-header-values-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns all values of the headers matching the name, for example ",(0,s.kt)("inlineCode",{parentName:"p"},"set-cookie"),". The name is case insensitive."),(0,s.kt)("h2",c({},{id:"response-headers"}),"Response.headers()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-headers-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">",(0,s.kt)("a",{href:"#response-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"An object with the response HTTP headers. The header names are lower-cased. Note that this method does not return security-related headers, including cookie-related ones. You can use ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-response#response-all-headers"}),"Response.allHeaders()")," for complete list of headers that include ",(0,s.kt)("inlineCode",{parentName:"p"},"cookie")," information."),(0,s.kt)("h2",c({},{id:"response-headers-array"}),"Response.headersArray()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.15"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-headers-array-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"}),"List"),"<",(0,s.kt)("inlineCode",{parentName:"li"},"HttpHeader"),">",">",(0,s.kt)("a",{href:"#response-headers-array-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Name of the header."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Value of the header.")))),(0,s.kt)("p",null,"An array with all the request HTTP headers associated with this response. Unlike ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-response#response-all-headers"}),"Response.allHeaders()"),", header names are NOT lower-cased. Headers with multiple entries, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,s.kt)("h2",c({},{id:"response-ok"}),"Response.ok()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-ok-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">",(0,s.kt)("a",{href:"#response-ok-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,s.kt)("h2",c({},{id:"response-request"}),"Response.request()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-request-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"/java/docs/api/class-request",title:"Request"}),"Request"),">",(0,s.kt)("a",{href:"#response-request-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the matching ",(0,s.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-request",title:"Request"}),"Request")," object."),(0,s.kt)("h2",c({},{id:"response-security-details"}),"Response.securityDetails()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.13"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-security-details-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|SecurityDetails",">",(0,s.kt)("a",{href:"#response-security-details-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"issuer")," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Common Name component of the Issuer field. from the certificate. This should only be used for informational purposes. Optional."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"protocol")," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," The specific TLS protocol used. (e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"TLS 1.3"),"). Optional."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"subjectName")," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Common Name component of the Subject field from the certificate. This should only be used for informational purposes. Optional."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"validFrom")," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Unix timestamp (in seconds) specifying when this cert becomes valid. Optional."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"validTo")," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"}),"double"),">"," Unix timestamp (in seconds) specifying when this cert becomes invalid. Optional.")))),(0,s.kt)("p",null,"Returns SSL and other security information."),(0,s.kt)("h2",c({},{id:"response-server-addr"}),"Response.serverAddr()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.13"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-server-addr-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|ServerAddr",">",(0,s.kt)("a",{href:"#response-server-addr-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ipAddress")," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," IPv4 or IPV6 address of the server."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"port")," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">")))),(0,s.kt)("p",null,"Returns the IP address and port of the server."),(0,s.kt)("h2",c({},{id:"response-status"}),"Response.status()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">",(0,s.kt)("a",{href:"#response-status-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,s.kt)("h2",c({},{id:"response-status-text"}),"Response.statusText()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-status-text-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,s.kt)("a",{href:"#response-status-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,s.kt)("h2",c({},{id:"response-text"}),"Response.text()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-text-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,s.kt)("a",{href:"#response-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the text representation of response body."),(0,s.kt)("h2",c({},{id:"response-url"}),"Response.url()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"response-url-return"})," ","<",(0,s.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",(0,s.kt)("a",{href:"#response-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the URL of the response."))}N.isMDXComponent=!0}}]);