"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3883],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),g=s(t),d=i,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||l;return t?n.createElement(m,o(o({ref:a},c),{},{components:t})):n.createElement(m,o({ref:a},c))}));function d(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=g;var r={};for(var p in a)hasOwnProperty.call(a,p)&&(r[p]=a[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3811:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(7294),i=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,p=(e,a,t)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;function s({children:e,hidden:a,className:t}){return n.createElement("div",((e,a)=>{for(var t in a||(a={}))o.call(a,t)&&p(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&p(e,t,a[t]);return e})({role:"tabpanel"},{hidden:a,className:t}),e)}},3824:function(e,a,t){t.d(a,{Z:function(){return k}});var n=t(7294),i=t(4939),l=t(5882),o=t(6010),r="tabItem_LplD",p=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,a,t)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,v=(e,a)=>{for(var t in a||(a={}))g.call(a,t)&&m(e,t,a[t]);if(u)for(var t of u(a))d.call(a,t)&&m(e,t,a[t]);return e};function f(e){var a,t,i;const{lazy:p,block:u,defaultValue:g,values:d,groupId:m,className:f}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=d?d:k.map((({props:{value:e,label:a,attributes:t}})=>({value:e,label:a,attributes:t}))),h=(0,l.lx)(y,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===g?g:null!=(i=null!=g?g:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?i:null==(t=k[0])?void 0:t.props.value;if(null!==w&&!y.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,l.UB)(),[x,T]=(0,n.useState)(w),_=[],{blockElementScrollPositionUntilNextRender:O}=(0,l.o5)();if(null!=m){const e=b[m];null!=e&&e!==x&&y.some((a=>a.value===e))&&T(e)}const I=e=>{const a=e.currentTarget,t=_.indexOf(a),n=y[t].value;n!==x&&(O(a),T(n),null!=m&&N(m,n))},P=e=>{let a=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;a=_[t]||_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;a=_[t]||_[_.length-1];break}}null==a||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},y.map((({value:e,label:a,attributes:t})=>{return n.createElement("li",(i=v({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>_.push(e),onKeyDown:P,onFocus:I,onClick:I},t),l={className:(0,o.Z)("tabs__item",r,null==t?void 0:t.className,{"tabs__item--active":x===e})},s(i,c(l))),null!=a?a:e);var i,l}))),p?(0,n.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function k(e){const a=(0,i.Z)();return n.createElement(f,v({key:String(a)},e))}},2831:function(e,a,t){t.r(a),t.d(a,{assets:function(){return k},contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return y}});var n=t(3905),i=t(3824),l=t(3811),o=Object.defineProperty,r=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,a,t)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))c.call(a,t)&&g(e,t,a[t]);if(s)for(var t of s(a))u.call(a,t)&&g(e,t,a[t]);return e};const m={id:"navigations",title:"Navigations"},v=void 0,f={unversionedId:"navigations",id:"version-1.19/navigations",title:"Navigations",description:"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete.",source:"@site/versioned_docs/version-1.19/navigations.mdx",sourceDirName:".",slug:"/navigations",permalink:"/python/docs/1.19/navigations",tags:[],version:"1.19",frontMatter:{id:"navigations",title:"Navigations"},sidebar:"version-1.19/docs",previous:{title:"Locators",permalink:"/python/docs/1.19/locators"},next:{title:"Network",permalink:"/python/docs/1.19/network"}},k={},y=[{value:"Navigation lifecycle",id:"navigation-lifecycle",level:2},{value:"Scenarios initiated by browser UI",id:"scenarios-initiated-by-browser-ui",level:2},{value:"Auto-wait",id:"auto-wait",level:3},{value:"Custom wait",id:"custom-wait",level:3},{value:"Wait for element",id:"wait-for-element",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Scenarios initiated by page interaction",id:"scenarios-initiated-by-page-interaction",level:2},{value:"Auto-wait",id:"auto-wait-1",level:3},{value:"Custom wait",id:"custom-wait-1",level:3},{value:"Wait for element",id:"wait-for-element-1",level:3},{value:"Asynchronous navigation",id:"asynchronous-navigation",level:3},{value:"Multiple navigations",id:"multiple-navigations",level:3},{value:"Loading a popup",id:"loading-a-popup",level:3},{value:"API reference",id:"api-reference-1",level:3},{value:"Advanced patterns",id:"advanced-patterns",level:2},{value:"API reference",id:"api-reference-2",level:3}],h={toc:y};function w(e){var a,t=e,{components:o}=t,g=((e,a)=>{var t={};for(var n in e)c.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))a.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=d(d({},h),g),r(a,p({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can navigate to URLs and handle navigations caused by page interactions. This guide covers common scenarios to wait for page navigations and loading to complete."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#navigation-lifecycle"}),"Navigation lifecycle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#advanced-patterns"}),"Advanced patterns"))),(0,n.kt)("h2",d({},{id:"navigation-lifecycle"}),"Navigation lifecycle"),(0,n.kt)("p",null,"Playwright splits the process of showing a new document in a page into ",(0,n.kt)("strong",{parentName:"p"},"navigation")," and ",(0,n.kt)("strong",{parentName:"p"},"loading"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Navigation starts")," by changing the page URL or by interacting with the page (e.g., clicking a link). The navigation intent may be canceled, for example, on hitting an unresolved DNS address or transformed into a file download."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Navigation is committed")," when the response headers have been parsed and session history is updated. Only after the navigation succeeds (is committed), the page starts ",(0,n.kt)("strong",{parentName:"p"},"loading")," the document."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Loading")," covers getting the remaining response body over the network, parsing, executing the scripts and firing load events:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-url"}),"page.url")," is set to the new url"),(0,n.kt)("li",{parentName:"ul"},"document content is loaded over network and parsed"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-event-dom-content-loaded"}),'page.on("domcontentloaded")')," event is fired"),(0,n.kt)("li",{parentName:"ul"},"page executes some scripts and loads resources like stylesheets and images"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-event-load"}),'page.on("load")')," event is fired"),(0,n.kt)("li",{parentName:"ul"},"page executes dynamically loaded scripts"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"networkidle")," is fired when no new network requests are made for 500 ms")),(0,n.kt)("h2",d({},{id:"scenarios-initiated-by-browser-ui"}),"Scenarios initiated by browser UI"),(0,n.kt)("p",null,"Navigations can be initiated by changing the URL bar, reloading the page or going back or forward in session history."),(0,n.kt)("h3",d({},{id:"auto-wait"}),"Auto-wait"),(0,n.kt)("p",null,"Navigating to a URL auto-waits for the page to fire the ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," event. If the page does a client-side redirect before ",(0,n.kt)("inlineCode",{parentName:"p"},"load"),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-page#page-goto"}),"page.goto(url, **kwargs)")," will auto-wait for the redirected page to fire the ",(0,n.kt)("inlineCode",{parentName:"p"},"load")," event."),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Navigate the page\npage.goto("https://example.com")\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Navigate the page\nawait page.goto("https://example.com")\n')))),(0,n.kt)("h3",d({},{id:"custom-wait"}),"Custom wait"),(0,n.kt)("p",null,"Override the default behavior to wait until a specific event, like ",(0,n.kt)("inlineCode",{parentName:"p"},"networkidle"),"."),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Navigate and wait until network is idle\npage.goto("https://example.com", wait_until="networkidle")\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Navigate and wait until network is idle\nawait page.goto("https://example.com", wait_until="networkidle")\n')))),(0,n.kt)("h3",d({},{id:"wait-for-element"}),"Wait for element"),(0,n.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-locator#locator-wait-for"}),"locator.wait_for(**kwargs)"),". Alternatively, page interactions like ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-page#page-click"}),"page.click(selector, **kwargs)")," auto-wait for elements."),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Navigate and wait for element\npage.goto("https://example.com")\npage.locator("text=example domain").wait_for()\n\n# Navigate and click element\n# Click will auto-wait for the element\npage.goto("https://example.com")\npage.click("text=example domain")\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Navigate and wait for element\nawait page.goto("https://example.com")\nawait page.locator("text=example domain").wait_for()\n\n# Navigate and click element\n# Click will auto-wait for the element\nawait page.goto("https://example.com")\nawait page.click("text=example domain")\n')))),(0,n.kt)("h3",d({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-goto"}),"page.goto(url, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-reload"}),"page.reload(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-go-back"}),"page.go_back(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-go-forward"}),"page.go_forward(**kwargs)"))),(0,n.kt)("h2",d({},{id:"scenarios-initiated-by-page-interaction"}),"Scenarios initiated by page interaction"),(0,n.kt)("p",null,"In the scenarios below, ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-page#page-click"}),"page.click(selector, **kwargs)")," initiates a navigation and then waits for the navigation to complete."),(0,n.kt)("h3",d({},{id:"auto-wait-1"}),"Auto-wait"),(0,n.kt)("p",null,"By default, ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-page#page-click"}),"page.click(selector, **kwargs)")," will wait for the navigation step to complete. This can be combined with a page interaction on the navigated page which would auto-wait for an element."),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Click will auto-wait for navigation to complete\npage.click("text=Login")\n\n# Fill will auto-wait for element on navigated page\npage.fill("#username", "John Doe")\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Click will auto-wait for navigation to complete\nawait page.click("text=Login")\n\n# Fill will auto-wait for element on navigated page\nawait page.fill("#username", "John Doe")\n')))),(0,n.kt)("h3",d({},{id:"custom-wait-1"}),"Custom wait"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"page.click")," can be combined with ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-page#page-wait-for-load-state"}),"page.wait_for_load_state(**kwargs)")," to wait for a loading event."),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'page.click("button"); # Click triggers navigation\npage.wait_for_load_state("networkidle"); # This waits for the "networkidle"\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'await page.click("button"); # Click triggers navigation\nawait page.wait_for_load_state("networkidle"); # This waits for the "networkidle"\n')))),(0,n.kt)("h3",d({},{id:"wait-for-element-1"}),"Wait for element"),(0,n.kt)("p",null,"In lazy-loaded pages, it can be useful to wait until an element is visible with ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-locator#locator-wait-for"}),"locator.wait_for(**kwargs)"),". Alternatively, page interactions like ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-page#page-click"}),"page.click(selector, **kwargs)")," auto-wait for elements."),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Click triggers navigation\npage.click("text=Login")\n# Click will auto-wait for the element\npage.locator("#username").wait_for()\n\n# Click triggers navigation\npage.click("text=Login")\n# Fill will auto-wait for element\npage.fill("#username", "John Doe")\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Click will auto-wait for the element and trigger navigation\nawait page.click("text=Login")\n# Wait for the element\nawait page.locator("#username").wait_for()\n\n# Click triggers navigation\nawait page.click("text=Login")\n# Fill will auto-wait for element\nawait page.fill("#username", "John Doe")\n')))),(0,n.kt)("h3",d({},{id:"asynchronous-navigation"}),"Asynchronous navigation"),(0,n.kt)("p",null,"Clicking an element could trigger asynchronous processing before initiating the navigation. In these cases, it is recommended to explicitly call ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-page#page-wait-for-navigation"}),"page.expect_navigation(**kwargs)"),". For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigation is triggered from a ",(0,n.kt)("inlineCode",{parentName:"li"},"setTimeout")),(0,n.kt)("li",{parentName:"ul"},"Page waits for network requests before navigation")),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Waits for the next navigation. Using Python context manager\n# prevents a race condition between clicking and waiting for a navigation.\nwith page.expect_navigation():\n    # Triggers a navigation after a timeout\n    page.click("a")\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Waits for the next navigation. Using Python context manager\n# prevents a race condition between clicking and waiting for a navigation.\nasync with page.expect_navigation():\n    # Triggers a navigation after a timeout\n    await page.click("div.delayed-navigation")\n')))),(0,n.kt)("h3",d({},{id:"multiple-navigations"}),"Multiple navigations"),(0,n.kt)("p",null,"Clicking an element could trigger multiple navigations. In these cases, it is recommended to explicitly ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-page#page-wait-for-navigation"}),"page.expect_navigation(**kwargs)")," to a specific url. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Client-side redirects issued after the ",(0,n.kt)("inlineCode",{parentName:"li"},"load")," event"),(0,n.kt)("li",{parentName:"ul"},"Multiple pushes to history state")),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Using Python context manager prevents a race condition\n# between clicking and waiting for a navigation.\nwith page.expect_navigation(url="**/login"):\n    # Triggers a navigation with a script redirect\n    page.click("a")\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Using Python context manager prevents a race condition\n# between clicking and waiting for a navigation.\nasync with page.expect_navigation(url="**/login"):\n    # Triggers a navigation with a script redirect\n    await page.click("a")\n')))),(0,n.kt)("h3",d({},{id:"loading-a-popup"}),"Loading a popup"),(0,n.kt)("p",null,"When popup is opened, explicitly calling ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-page#page-wait-for-load-state"}),"page.wait_for_load_state(**kwargs)")," ensures that popup is loaded to the desired state."),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'with page.expect_popup() as popup_info:\n    page.click(\'a[target="_blank"]\') # Opens popup\npopup = popup_info.value\npopup.wait_for_load_state("load")\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'async with page.expect_popup() as popup_info:\n    await page.click(\'a[target="_blank"]\') # Opens popup\npopup = await popup_info.value\nawait popup.wait_for_load_state("load")\n')))),(0,n.kt)("h3",d({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-click"}),"page.click(selector, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-wait-for-load-state"}),"page.wait_for_load_state(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-wait-for-navigation"}),"page.expect_navigation(**kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-wait-for-function"}),"page.wait_for_function(expression, **kwargs)"))),(0,n.kt)("h2",d({},{id:"advanced-patterns"}),"Advanced patterns"),(0,n.kt)("p",null,"For pages that have complicated loading patterns, ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/1.19/api/class-page#page-wait-for-function"}),"page.wait_for_function(expression, **kwargs)")," is a powerful and extensible approach to define a custom wait criteria."),(0,n.kt)(i.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'page.goto("http://example.com")\npage.wait_for_function("() => window.amILoadedYet()")\n# Ready to take a screenshot, according to the page itself.\npage.screenshot()\n'))),(0,n.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),'await page.goto("http://example.com")\nawait page.wait_for_function("() => window.amILoadedYet()")\n# Ready to take a screenshot, according to the page itself.\nawait page.screenshot()\n')))),(0,n.kt)("h3",d({},{id:"api-reference-2"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/1.19/api/class-page#page-wait-for-function"}),"page.wait_for_function(expression, **kwargs)"))))}w.isMDXComponent=!0}}]);