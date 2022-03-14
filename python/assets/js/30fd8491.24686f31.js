"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8382],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var s=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(r),d=a,y=h["".concat(l,".").concat(d)]||h[d]||c[d]||n;return r?s.createElement(y,o(o({ref:t},u),{},{components:r})):s.createElement(y,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<n;p++)o[p]=r[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3811:function(e,t,r){r.d(t,{Z:function(){return p}});var s=r(7294),a=Object.defineProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return s.createElement("div",((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&l(e,r,t[r]);if(n)for(var r of n(t))i.call(t,r)&&l(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},3824:function(e,t,r){r.d(t,{Z:function(){return k}});var s=r(7294),a=r(4939),n=r(5882),o=r(6010),i="tabItem_LplD",l=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&y(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&y(e,r,t[r]);return e};function f(e){var t,r,a;const{lazy:l,block:c,defaultValue:h,values:d,groupId:y,className:f}=e,k=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=d?d:k.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),v=(0,n.lx)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===h?h:null!=(a=null!=h?h:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(r=k[0])?void 0:r.props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,n.UB)(),[x,O]=(0,s.useState)(g),_=[],{blockElementScrollPositionUntilNextRender:j}=(0,n.o5)();if(null!=y){const e=N[y];null!=e&&e!==x&&b.some((t=>t.value===e))&&O(e)}const P=e=>{const t=e.currentTarget,r=_.indexOf(t),s=b[r].value;s!==x&&(j(t),O(s),null!=y&&w(y,s))},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=_.indexOf(e.currentTarget)+1;t=_[r]||_[0];break}case"ArrowLeft":{const r=_.indexOf(e.currentTarget)-1;t=_[r]||_[_.length-1];break}}null==t||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},b.map((({value:e,label:t,attributes:r})=>{return s.createElement("li",(a=m({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>_.push(e),onKeyDown:T,onFocus:P,onClick:P},r),n={className:(0,o.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":x===e})},p(a,u(n))),null!=t?t:e);var a,n}))),l?(0,s.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,a.Z)();return s.createElement(f,m({key:String(t)},e))}},7387:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return y},metadata:function(){return f},toc:function(){return b}});var s=r(3905),a=r(3824),n=r(3811),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&h(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&h(e,r,t[r]);return e};const y={id:"class-apiresponse",title:"APIResponse"},m=void 0,f={unversionedId:"api/class-apiresponse",id:"version-1.19/api/class-apiresponse",title:"APIResponse",description:"APIResponse] class represents responses returned by [apirequestcontext.get(url, kwargs) and similar methods.",source:"@site/versioned_docs/version-1.19/api/class-apiresponse.mdx",sourceDirName:"api",slug:"/api/class-apiresponse",permalink:"/python/docs/1.19/api/class-apiresponse",tags:[],version:"1.19",frontMatter:{id:"class-apiresponse",title:"APIResponse"},sidebar:"version-1.19/api",previous:{title:"APIRequestContext",permalink:"/python/docs/1.19/api/class-apirequestcontext"},next:{title:"Accessibility",permalink:"/python/docs/1.19/api/class-accessibility"}},k={},b=[{value:"api_response.body()",id:"api-response-body",level:2},{value:"api_response.dispose()",id:"api-response-dispose",level:2},{value:"api_response.headers",id:"api-response-headers",level:2},{value:"api_response.headers_array",id:"api-response-headers-array",level:2},{value:"api_response.json()",id:"api-response-json",level:2},{value:"api_response.ok",id:"api-response-ok",level:2},{value:"api_response.status",id:"api-response-status",level:2},{value:"api_response.status_text",id:"api-response-status-text",level:2},{value:"api_response.text()",id:"api-response-text",level:2},{value:"api_response.url",id:"api-response-url",level:2}],v={toc:b};function g(e){var t,r=e,{components:o}=r,h=((e,t)=>{var r={};for(var s in e)u.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&p)for(var s of p(e))t.indexOf(s)<0&&c.call(e,s)&&(r[s]=e[s]);return r})(r,["components"]);return(0,s.kt)("wrapper",(t=d(d({},v),h),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,s.kt)("p",null,(0,s.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-apiresponse",title:"APIResponse"}),"APIResponse")," class represents responses returned by ",(0,s.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-apirequestcontext#api-request-context-get"}),"api_request_context.get(url, **kwargs)")," and similar methods."),(0,s.kt)(a.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,s.kt)(n.Z,{value:"sync",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{className:"language-py"}),'from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    context = playwright.request.new_context()\n    response = context.get("https://example.com/user/repos")\n    assert response.ok\n    assert response.status == 200\n    assert response.headers["content-type"] == "application/json; charset=utf-8"\n    assert response.json()["name"] == "foobar"\n    assert response.body() == \'{"status": "ok"}\'\n'))),(0,s.kt)(n.Z,{value:"async",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",d({parentName:"pre"},{className:"language-py"}),'import asyncio\nfrom playwright.async_api import async_playwright, Playwright\n\nasync def run(playwright: Playwright):\n    context = await playwright.request.new_context()\n    response = await context.get("https://example.com/user/repos")\n    assert response.ok\n    assert response.status == 200\n    assert response.headers["content-type"] == "application/json; charset=utf-8"\n    assert response.json()["name"] == "foobar"\n    assert await response.body() == \'{"status": "ok"}\'\n\n\nasync def main():\n    async with async_playwright() as playwright:\n        await run(playwright)\n\nasyncio.run(main())\n')))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-apiresponse#api-response-body"}),"api_response.body()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-apiresponse#api-response-dispose"}),"api_response.dispose()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-apiresponse#api-response-headers"}),"api_response.headers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-apiresponse#api-response-headers-array"}),"api_response.headers_array")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-apiresponse#api-response-json"}),"api_response.json()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-apiresponse#api-response-ok"}),"api_response.ok")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-apiresponse#api-response-status"}),"api_response.status")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-apiresponse#api-response-status-text"}),"api_response.status_text")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-apiresponse#api-response-text"}),"api_response.text()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-apiresponse#api-response-url"}),"api_response.url"))),(0,s.kt)("h2",d({},{id:"api-response-body"}),"api_response.body()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-body-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"}),"bytes"),">",(0,s.kt)("a",{href:"#api-response-body-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the buffer with response body."),(0,s.kt)("h2",d({},{id:"api-response-dispose"}),"api_response.dispose()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-dispose-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,s.kt)("a",{href:"#api-response-dispose-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Disposes the body of this response. If not called then the body will stay in memory until the context closes."),(0,s.kt)("h2",d({},{id:"api-response-headers"}),"api_response.headers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-headers-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"[",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"]",">",(0,s.kt)("a",{href:"#api-response-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"An object with all the response HTTP headers associated with this response."),(0,s.kt)("h2",d({},{id:"api-response-headers-array"}),"api_response.headers_array"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-headers-array-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"}),"List"),"[",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"]",">",(0,s.kt)("a",{href:"#api-response-headers-array-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Name of the header."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Value of the header.")))),(0,s.kt)("p",null,"An array with all the request HTTP headers associated with this response. Header names are not lower-cased. Headers with multiple entries, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,s.kt)("h2",d({},{id:"api-response-json"}),"api_response.json()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-json-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">",(0,s.kt)("a",{href:"#api-response-json-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the JSON representation of response body."),(0,s.kt)("p",null,"This method will throw if the response body is not parsable via ",(0,s.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"."),(0,s.kt)("h2",d({},{id:"api-response-ok"}),"api_response.ok"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-ok-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">",(0,s.kt)("a",{href:"#api-response-ok-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,s.kt)("h2",d({},{id:"api-response-status"}),"api_response.status"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-status-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"}),"int"),">",(0,s.kt)("a",{href:"#api-response-status-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,s.kt)("h2",d({},{id:"api-response-status-text"}),"api_response.status_text"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-status-text-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,s.kt)("a",{href:"#api-response-status-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,s.kt)("h2",d({},{id:"api-response-text"}),"api_response.text()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-text-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,s.kt)("a",{href:"#api-response-text-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the text representation of response body."),(0,s.kt)("h2",d({},{id:"api-response-url"}),"api_response.url"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-url-return"})," ","<",(0,s.kt)("a",d({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">",(0,s.kt)("a",{href:"#api-response-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the URL of the response."))}g.isMDXComponent=!0}}]);