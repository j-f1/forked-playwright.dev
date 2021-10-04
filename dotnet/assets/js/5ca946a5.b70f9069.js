"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[28],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(9443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(6010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=o(),k=h.tabGroupChoices,f=h.setTabGroupChoices,g=(0,n.useState)(r),v=g[0],N=g[1],w=n.Children.toArray(e.children),y=[];if(null!=d){var b=k[d];null!=b&&b!==v&&u.some((function(e){return e.value===b}))&&N(b)}var A=function(e){var t=e.currentTarget,a=y.indexOf(t),n=u[a].value;N(n),null!=d&&(f(d,n),setTimeout((function(){var e,a,n,r,o,s,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,s=window,l=s.innerHeight,c=s.innerWidth,a>=0&&o<=c&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case p:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case c:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:A,onClick:A},a)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},617:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),s=(a(5064),a(8215),{id:"release-notes",title:"Release notes"}),l=void 0,i={unversionedId:"release-notes",id:"version-1.15/release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.15",source:"@site/versioned_docs/version-1.15/release-notes.mdx",sourceDirName:".",slug:"/release-notes",permalink:"/dotnet/docs/release-notes",version:"1.15",frontMatter:{id:"release-notes",title:"Release notes"},sidebar:"version-1.15/docs",previous:{title:"Debugging tools",permalink:"/dotnet/docs/debug"},next:{title:"Test Runners",permalink:"/dotnet/docs/test-runners"}},c=[{value:"Version 1.15",id:"version-115",children:[{value:"\ud83d\uddb1\ufe0f Mouse Wheel",id:"\ufe0f-mouse-wheel",children:[]},{value:"\ud83d\udcdc New Headers API",id:"-new-headers-api",children:[]},{value:"\ud83c\udf08 Forced-Colors emulation",id:"-forced-colors-emulation",children:[]},{value:"New APIs",id:"new-apis",children:[]},{value:"Important \u26a0",id:"important-",children:[]},{value:"Browser Versions",id:"browser-versions",children:[]}]},{value:"Version 1.14",id:"version-114",children:[{value:"Browser Versions",id:"browser-versions-1",children:[]}]},{value:"Version 1.13",id:"version-113",children:[]},{value:"Version 1.12",id:"version-112",children:[]}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#version-115"},"Version 1.15")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#version-114"},"Version 1.14")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#version-113"},"Version 1.13")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#version-112"},"Version 1.12"))),(0,o.kt)("h2",{id:"version-115"},"Version 1.15"),(0,o.kt)("h3",{id:"\ufe0f-mouse-wheel"},"\ud83d\uddb1\ufe0f Mouse Wheel"),(0,o.kt)("p",null,"By using ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/dotnet/docs/next/api/class-mouse#mouse-wheel"},(0,o.kt)("inlineCode",{parentName:"a"},"Page.Mouse.WheelAsync"))," you are now able to scroll vertically or horizontally."),(0,o.kt)("h3",{id:"-new-headers-api"},"\ud83d\udcdc New Headers API"),(0,o.kt)("p",null,"Previously it was not possible to get multiple header values of a response. This is now possible and additional helper functions are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-all-headers"},"Request.AllHeadersAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-headers-array"},"Request.HeadersArrayAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-header-value"},"Request.HeaderValueAsync(name: string)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-response#response-all-headers"},"Response.AllHeadersAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-response#response-headers-array"},"Response.HeadersArrayAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-response#response-header-value"},"Response.HeaderValueAsync(name: string)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-response/#response-header-values"},"Response.HeaderValuesAsync(name: string)"))),(0,o.kt)("h3",{id:"-forced-colors-emulation"},"\ud83c\udf08 Forced-Colors emulation"),(0,o.kt)("p",null,"Its now possible to emulate the ",(0,o.kt)("inlineCode",{parentName:"p"},"forced-colors")," CSS media feature by passing it in the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/dotnet/docs/next/api/class-browser#browser-new-context-option-forced-colors"},"context options")," or calling ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/dotnet/docs/next/api/class-page#page-emulate-media"},"Page.EmulateMediaAsync()"),"."),(0,o.kt)("h3",{id:"new-apis"},"New APIs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-page#page-route"},"Page.RouteAsync()")," accepts new ",(0,o.kt)("inlineCode",{parentName:"li"},"times")," option to specify how many times this route should be matched."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-page#page-set-checked"},"Page.SetCheckedAsync(selector: string, checked: Boolean)")," and ",(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-locator#locator-set-checked"},"Locator.SetCheckedAsync(selector: string, checked: Boolean)")," was introduced to set the checked state of a checkbox."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-request#request-sizes"},"Request.SizesAsync()")," Returns resource size information for given http request."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-tracing#tracing-start-chunk"},"Tracing.StartChunkAsync()")," - Start a new trace chunk."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/next/api/class-tracing#tracing-stop-chunk"},"Tracing.StopChunkAsync()")," - Stops a new trace chunk.")),(0,o.kt)("h3",{id:"important-"},"Important \u26a0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2b06 .NET Core Apps 2.1 are ",(0,o.kt)("strong",{parentName:"li"},"no longer")," supported for our CLI tooling. As of August 31st, 2021, .NET Core 2.1 is no ",(0,o.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/dotnet/net-core-2-1-will-reach-end-of-support-on-august-21-2021/"},"longer supported")," and will not receive any security updates. We've decided to move the CLI forward and require .NET Core 3.1 as a minimum. ")),(0,o.kt)("h3",{id:"browser-versions"},"Browser Versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium 96.0.4641.0"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox 92.0"),(0,o.kt)("li",{parentName:"ul"},"WebKit 15.0")),(0,o.kt)("h2",{id:"version-114"},"Version 1.14"),(0,o.kt)("h4",{id:"\ufe0f-new-strict-mode"},'\u26a1\ufe0f New "strict" mode'),(0,o.kt)("p",null,"Selector ambiguity is a common problem in automation testing. ",(0,o.kt)("strong",{parentName:"p"},'"strict" mode')," ensures that your selector points to a single element and throws otherwise."),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"setStrict(true)")," in your action calls to opt in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// This will throw if you have more than one button!\nawait page.ClickAsync("button", new Page.ClickOptions().setStrict(true));\n')),(0,o.kt)("h4",{id:"-new-locators-api"},"\ud83d\udccd New ",(0,o.kt)("a",{parentName:"h4",href:"./api/class-locator"},(0,o.kt)("strong",{parentName:"a"},"Locators API"))),(0,o.kt)("p",null,"Locator represents a view to the element(s) on the page. It captures the logic sufficient to retrieve the element at any given moment."),(0,o.kt)("p",null,"The difference between the ",(0,o.kt)("a",{parentName:"p",href:"./api/class-locator"},"Locator")," and ",(0,o.kt)("a",{parentName:"p",href:"./api/class-elementhandle"},"ElementHandle")," is that the latter points to a particular element, while ",(0,o.kt)("a",{parentName:"p",href:"./api/class-locator"},"Locator")," captures the logic of how to retrieve that element."),(0,o.kt)("p",null,"Also, locators are ",(0,o.kt)("strong",{parentName:"p"},'"strict" by default'),"!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var locator = page.Locator("button");\nawait locator.ClickAsync();\n')),(0,o.kt)("p",null,"Learn more in the ",(0,o.kt)("a",{parentName:"p",href:"./api/class-locator"},"documentation"),"."),(0,o.kt)("h4",{id:"\ud83e\udde9-experimental-react-and-vue-selector-engines"},"\ud83e\udde9 Experimental ",(0,o.kt)("a",{parentName:"h4",href:"./selectors#react-selectors"},(0,o.kt)("strong",{parentName:"a"},"React"))," and ",(0,o.kt)("a",{parentName:"h4",href:"./selectors#vue-selectors"},(0,o.kt)("strong",{parentName:"a"},"Vue"))," selector engines"),(0,o.kt)("p",null,"React and Vue selectors allow selecting elements by its component name and/or property values. The syntax is very similar to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"},"attribute selectors")," and supports all attribute selector operators."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.ClickAsync("_react=SubmitButton[enabled=true]");\nawait page.ClickAsync("_vue=submit-button[enabled=true]");\n')),(0,o.kt)("p",null,"Learn more in the ",(0,o.kt)("a",{parentName:"p",href:"./selectors#react-selectors"},"react selectors documentation")," and the ",(0,o.kt)("a",{parentName:"p",href:"./selectors#vue-selectors"},"vue selectors documentation"),"."),(0,o.kt)("h4",{id:"-new-nth-and-visible-selector-engines"},"\u2728 New ",(0,o.kt)("a",{parentName:"h4",href:"./selectors#n-th-element-selector"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"nth")))," and ",(0,o.kt)("a",{parentName:"h4",href:"./selectors#selecting-visible-elements"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"visible")))," selector engines"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./selectors#n-th-element-selector"},(0,o.kt)("inlineCode",{parentName:"a"},"nth"))," selector engine is equivalent to the ",(0,o.kt)("inlineCode",{parentName:"li"},":nth-match")," pseudo class, but could be combined with other selector engines."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./selectors#selecting-visible-elements"},(0,o.kt)("inlineCode",{parentName:"a"},"visible"))," selector engine is equivalent to the ",(0,o.kt)("inlineCode",{parentName:"li"},":visible")," pseudo class, but could be combined with other selector engines.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// select the first button among all buttons\nawait button.ClickAsync("button >> nth=0");\n// or if you are using locators, you can use First, Nth() and Last\nawait page.Locator("button").First.ClickAsync();\n\n// click a visible button\nawait button.ClickAsync("button >> visible=true");\n')),(0,o.kt)("h3",{id:"browser-versions-1"},"Browser Versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium 94.0.4595.0"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox 91.0"),(0,o.kt)("li",{parentName:"ul"},"WebKit 15.0")),(0,o.kt)("h2",{id:"version-113"},"Version 1.13"),(0,o.kt)("h4",{id:"playwright"},"Playwright"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\udd96 Programmatic drag-and-drop support")," via the ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-drag-and-drop"},"Page.DragAndDropAsync(source, target, options)")," API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\ud83d\udd0e Enhanced HAR")," with body sizes for requests and responses. Use via ",(0,o.kt)("inlineCode",{parentName:"li"},"recordHar")," option in ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"),".")),(0,o.kt)("h4",{id:"tools"},"Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Playwright Trace Viewer now shows parameters, returned values and ",(0,o.kt)("inlineCode",{parentName:"li"},"console.log()")," calls.")),(0,o.kt)("h4",{id:"new-and-overhauled-guides"},"New and Overhauled Guides"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/intro"},"Intro")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/auth"},"Authentication"))),(0,o.kt)("h4",{id:"browser-versions-2"},"Browser Versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium 93.0.4576.0"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox 90.0"),(0,o.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,o.kt)("h4",{id:"new-playwright-apis"},"New Playwright APIs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"new ",(0,o.kt)("inlineCode",{parentName:"li"},"baseURL")," option in ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browser#browser-new-page"},"Browser.NewPageAsync(options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-response#response-security-details"},"Response.SecurityDetailsAsync()")," and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-response#response-server-addr"},"Response.ServerAddrAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-drag-and-drop"},"Page.DragAndDropAsync(source, target, options)")," and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-drag-and-drop"},"Frame.DragAndDropAsync(source, target, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-download#download-cancel"},"Download.CancelAsync()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-input-value"},"Page.InputValueAsync(selector, options)"),", ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-input-value"},"Frame.InputValueAsync(selector, options)")," and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-input-value"},"ElementHandle.InputValueAsync(options)")),(0,o.kt)("li",{parentName:"ul"},"new ",(0,o.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-fill"},"Page.FillAsync(selector, value, options)"),", ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-fill"},"Frame.FillAsync(selector, value, options)"),", and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-fill"},"ElementHandle.FillAsync(value, options)")),(0,o.kt)("li",{parentName:"ul"},"new ",(0,o.kt)("inlineCode",{parentName:"li"},"force")," option in ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-select-option"},"Page.SelectOptionAsync(selector, values, options)"),", ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-select-option"},"Frame.SelectOptionAsync(selector, values, options)"),", and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-select-option"},"ElementHandle.SelectOptionAsync(values, options)"))),(0,o.kt)("h2",{id:"version-112"},"Version 1.12"),(0,o.kt)("h4",{id:"highlights"},"Highlights"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Playwright for .NET v1.12 is now stable!"),(0,o.kt)("li",{parentName:"ul"},"Ships with the ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/cli#generate-code"},"codegen")," and ",(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/trace-viewer"},"trace viewer")," tools out-of-the-box")),(0,o.kt)("h4",{id:"browser-versions-3"},"Browser Versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Chromium 93.0.4530.0"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox 89.0"),(0,o.kt)("li",{parentName:"ul"},"WebKit 14.2")),(0,o.kt)("p",null,"This version of Playwright was also tested against the following stable channels:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Google Chrome 91"),(0,o.kt)("li",{parentName:"ul"},"Microsoft Edge 91")))}u.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);