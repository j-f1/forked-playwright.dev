"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2969],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(9443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,u=e.values,d=e.groupId,m=e.className,g=i(),h=g.tabGroupChoices,f=g.setTabGroupChoices,w=(0,n.useState)(r),k=w[0],b=w[1],y=n.Children.toArray(e.children),v=[];if(null!=d){var N=h[d];null!=N&&N!==k&&u.some((function(e){return e.value===N}))&&b(N)}var x=function(e){var t=e.currentTarget,a=v.indexOf(t),n=u[a].value;b(n),null!=d&&(f(d,n),setTimeout((function(){var e,a,n,r,i,o,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,a>=0&&i<=c&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},A=function(e){var t,a;switch(e.keyCode){case p:var n=v.indexOf(e.target)+1;a=v[n]||v[0];break;case c:var r=v.indexOf(e.target)-1;a=v[r]||v[v.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:A,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},7697:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=(a(5064),a(8215),{id:"core-concepts",title:"Core concepts"}),l=void 0,s={unversionedId:"core-concepts",id:"version-1.13/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page.",source:"@site/versioned_docs/version-1.13/core-concepts.mdx",sourceDirName:".",slug:"/core-concepts",permalink:"/dotnet/docs/1.13/core-concepts",version:"1.13",frontMatter:{id:"core-concepts",title:"Core concepts"},sidebar:"version-1.13/docs",previous:{title:"Getting Started",permalink:"/dotnet/docs/1.13/intro"},next:{title:"Command line tools",permalink:"/dotnet/docs/1.13/cli"}},c=[{value:"Browser",id:"browser",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Browser contexts",id:"browser-contexts",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Pages and frames",id:"pages-and-frames",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Selectors",id:"selectors",children:[]},{value:"Auto-waiting",id:"auto-waiting",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Execution contexts: Playwright and Browser",id:"execution-contexts-playwright-and-browser",children:[]},{value:"Evaluation Argument",id:"evaluation-argument",children:[{value:"API reference",id:"api-reference-4",children:[]}]}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit browsers. By using the Playwright API, you can write scripts to create new browser pages, navigate to URLs and then interact with elements on a page."),(0,i.kt)("p",null,"Along with a test runner Playwright can be used to automate user interactions to validate and test web applications. The Playwright API enables this through the following primitives."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#browser"},"Browser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#browser-contexts"},"Browser contexts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pages-and-frames"},"Pages and frames")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#selectors"},"Selectors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#auto-waiting"},"Auto-waiting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#evaluation-argument"},"Evaluation Argument"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"browser"},"Browser"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-browser",title:"Browser"},"Browser")," refers to an instance of Chromium, Firefox or WebKit. Playwright scripts generally start with launching a browser instance and end with closing the browser. Browser instances can be launched in headless (without a GUI) or headed mode."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var firefox = playwright.Firefox.LaunchAsync(new BrowserTypeLaunchOptions\n        {\n            Headless = false\n        });\n    }\n}\n")),(0,i.kt)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to maximize what a single instance can do through multiple browser contexts."),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-browser",title:"Browser"},"Browser"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"browser-contexts"},"Browser contexts"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await using var browser = playwright.Chromium.LaunchAsync();\nvar context = await browser.NewContextAsync();\n")),(0,i.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Webkit.LaunchAsync();\n        var options = new BrowserContextNewOptions(Playwright.Devices["iPhone 11 Pro"])\n        {\n            Geolocation = new Geolocation() { Longitude = 12.492507f, Latitude = 41.889938f },\n            Permissions = new[] { "geolocation" },\n            Locale = "de-DE"\n        };\n\n        await using var context = await browser.NewContextAsync(options);\n        // do work\n\n    }\n}\n')),(0,i.kt)("h3",{id:"api-reference-1"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"pages-and-frames"},"Pages and frames"),(0,i.kt)("p",null,"A Browser context can have multiple pages. A ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-page",title:"Page"},"Page")," refers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create a page.\nvar page = await context.NewPageAsync();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.GotoAsync("http://example.com");\n// Fill an input.\nawait page.FillAsync("#search", "query");\n\n// Navigate implicitly by clicking a link.\nawait page.ClickAsync("#submit");\n// Expect a new url.\nConsole.WriteLine(page.Url);\n\n// Page can navigate from the script - this will be picked up by Playwright.\n// window.location.href = "https://example.com";\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Read more on ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/navigations"},"page navigation and loading"),".")),(0,i.kt)("p",null,"A page can have one or more ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-frame",title:"Frame"},"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,i.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,i.kt)("p",null,"A page can have additional frames attached with the ",(0,i.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Create a page.\nvar page = await context.NewPageAsync();\n\n// Get frame using the frame\'s name attribute\nvar frame = page.Frame("frame-login");\n\n// Get frame using frame\'s URL\nvar frame = page.FrameByUrl("*domain.");\n\n// Get frame using any other selector\nvar frameElementHandle = await page.QuerySelectorAsync(".frame-class");\nvar frame = await frameElementHandle.ContentFrameAsync();\n\n// Interact with the frame\nawait frame.FillAsync("#username-input", "John");\n')),(0,i.kt)("h3",{id:"api-reference-2"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page",title:"Page"},"Page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-frame",title:"Frame"},"Frame")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-frame"},"Page.Frame(name)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"selectors"},"Selectors"),(0,i.kt)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),(0,i.kt)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),(0,i.kt)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),(0,i.kt)("p",null,"Learn more about selectors and selector engines ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/selectors"},"here"),"."),(0,i.kt)("p",null,"Some examples below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Using data-test-id= selector engine\nawait page.ClickAsync("data-test-id=foo");\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// CSS and XPath selector engines are automatically detected\nawait page.ClickAsync("div");\nawait page.ClickAsync("//html/body/div");\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Find node by text substring\nawait page.ClickAsync("text=Hello w");\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Explicit CSS and XPath notation\nawait page.ClickAsync("css=div");\nawait page.ClickAsync("xpath=//html/body/div");\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Only search light DOM, outside WebComponent shadow DOM:\nawait page.ClickAsync("css:light=div");\n')),(0,i.kt)("p",null,"Selectors using the same or different engines can be combined using the ",(0,i.kt)("inlineCode",{parentName:"p"},">>")," separator. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Click an element with text "Sign Up" inside of a #free-month-promo.\nawait page.Click("#free-month-promo >> text=Sign Up");\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Capture textContent of a section that contains an element with text "Selectors".\nvar sectionText = await page.EvalOnSelectorAsync<string>("*css=section >> text=Selectors", "e => e.textContent");\n')),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"auto-waiting"},"Auto-waiting"),(0,i.kt)("p",null,"Actions like ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-page#page-click"},"Page.ClickAsync(selector, options)")," and ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-page#page-fill"},"Page.FillAsync(selector, value, options)")," auto-wait for the element to be visible and ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/actionability"},"actionable"),". For example, click will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),(0,i.kt)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",(0,i.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,i.kt)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),(0,i.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,i.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),(0,i.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Playwright waits for #search element to be in the DOM\nawait page.FillAsync("#search", "query");\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Playwright waits for element to stop animating\n// and accept clicks.\nawait page.ClickAsync("#search");\n')),(0,i.kt)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Wait for #search to appear in the DOM.\nawait page.WaitForSelectorAsync("#search", WaitForSelectorState.Attached);\n// Wait for #promo to become visible, for example with `visibility:visible`.\nawait page.WaitForSelectorAsync("#promo");\n')),(0,i.kt)("p",null,"... or to become hidden or detached"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Wait for #details to become hidden, for example with "display:none".\nawait page.WaitForSelectorAsync("#details", WaitForSelectorState.Hidden);\n// Wait for #promo to be removed from the DOM.\nawait page.WaitForSelectorAsync("#promo", WaitForSelectorState.Detached);\n')),(0,i.kt)("h3",{id:"api-reference-3"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-click"},"Page.ClickAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-fill"},"Page.FillAsync(selector, value, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-wait-for-selector"},"Page.WaitForSelectorAsync(selector, options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"execution-contexts-playwright-and-browser"},"Execution contexts: Playwright and Browser"),(0,i.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,i.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var href = await page.EvaluateAsync<string>("document.location.href");\n')),(0,i.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'int status = await page.EvaluateAsync<int>(@"async () => {\n  const response = await fetch(location.href);\n  return response.status;\n}");\n')),(0,i.kt)("h2",{id:"evaluation-argument"},"Evaluation Argument"),(0,i.kt)("p",null,"Playwright evaluation methods like ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")," take a single optional argument. This argument can be a mix of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," values and ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-jshandle",title:"JSHandle"},"JSHandle")," or ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-elementhandle",title:"ElementHandle"},"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// A primitive value.\nawait page.EvaluateAsync<int>("num => num", 42);\n\n// An array.\nawait page.EvaluateAsync<int[]>("array => array.length", new[] { 1, 2, 3 });\n\n// An object.\nawait page.EvaluateAsync<object>("object => object.foo", new { foo = "bar" });\n\n// A single handle.\nvar button = await page.QuerySelectorAsync("button");\nawait page.EvaluateAsync<IJSHandle>("button => button.textContent", button);\n\n// Alternative notation using elementHandle.EvaluateAsync.\nawait button.EvaluateAsync<string>("(button, from) => button.textContent.substring(from)", 5);\n\n// Object with multiple handles.\nvar button1 = await page.QuerySelectorAsync(".button1");\nvar button2 = await page.QuerySelectorAsync(".button2");\nawait page.EvaluateAsync("o => o.button1.textContent + o.button2.textContent", new { button1, button2 });\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nawait page.EvaluateAsync("({ button1, button2 }) => button1.textContent + button2.textContent", new { button1, button2 });\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\nawait page.EvaluateAsync("([b1, b2]) => b1.textContent + b2.textContent", new[] { button1, button2 });\n\n// Any non-cyclic mix of serializables and handles works.\nawait page.EvaluateAsync("x => x.button1.textContent + x.list[0].textContent + String(x.foo)", new { button1, list = new[] { button2 }, foo = null as object });\n')),(0,i.kt)("p",null,"Right:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var data = new { text = "some data", value = 1};\n// Pass data as a parameter\nvar result = await page.EvaluateAsync("data => { window.myApp.use(data); }", data);\n')),(0,i.kt)("p",null,"Wrong:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var data = new { text = "some data", value = 1};\n// Pass data as a parameter\nvar result = await page.EvaluateAsync(@"data => {\n  // There is no |data| in the web page.\n  window.myApp.use(data); \n}");\n')),(0,i.kt)("h3",{id:"api-reference-4"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-page#page-evaluate"},"Page.EvaluateAsync(expression, arg)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-frame#frame-evaluate"},"Frame.EvaluateAsync(expression, arg)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"))),(0,i.kt)("br",null))}u.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);