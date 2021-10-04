"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7356],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,u=e.values,d=e.groupId,k=e.className,m=o(),f=m.tabGroupChoices,h=m.setTabGroupChoices,w=(0,r.useState)(a),y=w[0],g=w[1],v=r.Children.toArray(e.children),b=[];if(null!=d){var N=f[d];null!=N&&N!==y&&u.some((function(e){return e.value===N}))&&g(N)}var x=function(e){var t=e.currentTarget,n=b.indexOf(t),r=u[n].value;g(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,a,o,s,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},P=function(e){var t,n;switch(e.keyCode){case p:var r=b.indexOf(e.target)+1;n=b[r]||b[0];break;case c:var a=b.indexOf(e.target)-1;n=b[a]||b[b.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},k)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:P,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},7321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=(n(5064),n(8215),{id:"network",title:"Network"}),i=void 0,l={unversionedId:"network",id:"version-1.12/network",isDocsHomePage:!1,title:"Network",description:"Playwright provides APIs to monitor and modify network traffic, both HTTP and HTTPS. Any requests that page does, including XHRs and fetch requests, can be tracked, modified and handled.",source:"@site/versioned_docs/version-1.12/network.mdx",sourceDirName:".",slug:"/network",permalink:"/dotnet/docs/1.12/network",version:"1.12",frontMatter:{id:"network",title:"Network"},sidebar:"version-1.12/docs",previous:{title:"Navigations",permalink:"/dotnet/docs/1.12/navigations"},next:{title:"Page Object Models",permalink:"/dotnet/docs/1.12/pom"}},c=[{value:"HTTP Authentication",id:"http-authentication",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"HTTP Proxy",id:"http-proxy",children:[]},{value:"Network events",id:"network-events",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Handle requests",id:"handle-requests",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Modify requests",id:"modify-requests",children:[]},{value:"Abort requests",id:"abort-requests",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"WebSockets",id:"websockets",children:[{value:"API reference",id:"api-reference-4",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright provides APIs to ",(0,o.kt)("strong",{parentName:"p"},"monitor")," and ",(0,o.kt)("strong",{parentName:"p"},"modify")," network traffic, both HTTP and HTTPS. Any requests that page does, including ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XHRs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"fetch")," requests, can be tracked, modified and handled."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-authentication"},"HTTP Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#http-proxy"},"HTTP Proxy")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#network-events"},"Network events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handle-requests"},"Handle requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#modify-requests"},"Modify requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#abort-requests"},"Abort requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#websockets"},"WebSockets"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"http-authentication"},"HTTP Authentication"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using var context = await Browser.NewContextAsync(new BrowserNewContextOptions\n{\n    HttpCredentials = new HttpCredentials\n    {\n        Username = "bill",\n        Password = "pa55w0rd"\n    },\n});\nvar page = await context.NewPageAsync();\nawait page.GotoAsync("https://example.com");\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)"))),(0,o.kt)("h2",{id:"http-proxy"},"HTTP Proxy"),(0,o.kt)("p",null,"You can configure pages to load over the HTTP(S) proxy or SOCKSv5. Proxy can be either set globally for the entire browser, or for each browser context individually."),(0,o.kt)("p",null,"You can optionally specify username and password for HTTP(S) proxy, you can also specify hosts to bypass proxy for."),(0,o.kt)("p",null,"Here is an example of a global proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var proxy = new Proxy\n{\n    Server = "http://myproxy.com:3128",\n    Username = "user",\n    Password = "pwd"\n};\nawait using var browser = await BrowserType.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    Proxy = proxy\n});\n')),(0,o.kt)("p",null,"When specifying proxy for each context individually, you need to give Playwright a hint that proxy will be set. This is done via passing a non-empty proxy server to the browser itself. Here is an example of a context-specific proxy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var proxy = new Proxy { Server = "per-context" };\nawait using var browser = await BrowserType.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    Proxy = proxy\n});\nusing var context = await Browser.NewContextAsync(new BrowserNewContextOptions\n{\n    Proxy = new Proxy { Server = "http://myproxy.com:3128" })\n});\n')),(0,o.kt)("h2",{id:"network-events"},"Network events"),(0,o.kt)("p",null,"You can monitor all the requests and responses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'using Microsoft.Playwright;\nusing System;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n        page.Request += (_, request) => Console.WriteLine(">> " + request.Method + " " + request.Url);\n        page.Response += (_, response) => Console.WriteLine("<<" + response.Status + " " + response.Url);\n        await page.GotoAsync("https://example.com");\n    }\n}\n')),(0,o.kt)("p",null,"Or wait for a network response after the button click:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Use a glob URL pattern\nvar waitForResponseTask = page.WaitForResponseAsync("**/api/fetch_data");\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n')),(0,o.kt)("h4",{id:"variations"},"Variations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Use a regular expression\nvar waitForResponseTask = page.WaitForResponseAsync(new Regex("\\\\.jpeg$"));\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n\n// Use a predicate taking a Response object\nvar waitForResponseTask = page.WaitForResponseAsync(r => r.Url.Contains(token));\nawait page.ClickAsync("button#update");\nvar response = await waitForResponseTask;\n')),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-request",title:"Request"},"Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-response",title:"Response"},"Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-page#page-event-request"},"event Page.Request")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-page#page-event-response"},"event Page.Response")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-page#page-wait-for-request"},"Page.RunAndWaitForRequestAsync(action, urlOrPredicate, options)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-page#page-wait-for-response"},"Page.RunAndWaitForResponseAsync(action, urlOrPredicate, options)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"handle-requests"},"Handle requests"),(0,o.kt)("p",null,"You can mock API endpoints via handling the network quests in your Playwright script."),(0,o.kt)("h4",{id:"variations-1"},"Variations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.RouteAsync("**/api/fetch_data", async route => {\n  await route.FulfillAsync(status: 200, body: testData);\n});\nawait page.GotoAsync("https://example.com");\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-browsercontext#browser-context-route"},"BrowserContext.RouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-browsercontext#browser-context-unroute"},"BrowserContext.UnrouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-page#page-route"},"Page.RouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-page#page-unroute"},"Page.UnrouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-route",title:"Route"},"Route"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"modify-requests"},"Modify requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'// Delete header\nawait page.RouteAsync("**/*", async route => {\n    var headers = new Dictionary<string, string>(route.Request.Headers.ToDictionary(x => x.Key, x => x.Value));\n    headers.Remove("X-Secret");\n    await route.ContinueAsync(new RouteContinueOptions { Headers = headers });\n});\n\n// Continue requests as POST.\nawait page.RouteAsync("**/*", async route => await route.ContinueAsync(method: "POST"));\n')),(0,o.kt)("p",null,"You can continue requests with modifications. Example above removes an HTTP header from the outgoing requests."),(0,o.kt)("h2",{id:"abort-requests"},"Abort requests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.RouteAsync("**/*.{png,jpg,jpeg}", route => route.AbortAsync());\n\n// Abort based on the request type\nawait page.RouteAsync("**/*", async route => {\nif ("image".Equals(route.Request.ResourceType))\n    await route.AbortAsync();\nelse\n    await route.ContinueAsync();\n});\n')),(0,o.kt)("h3",{id:"api-reference-3"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-page#page-route"},"Page.RouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-browsercontext#browser-context-route"},"BrowserContext.RouteAsync(url, handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-route#route-abort"},"Route.AbortAsync(errorCode)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"Playwright supports ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets")," inspection out of the box. Every time WebSocket is created, ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12/api/class-page#page-event-web-socket"},"event Page.WebSocket")," event is fired. This event contains the ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.12/api/class-websocket",title:"WebSocket"},"WebSocket")," instance for further web socket frames inspection:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'page.WebSocket += (_, ws) =>\n{\n    Console.WriteLine("WebSocket opened: " + ws.Url);\n    ws.FrameSent += (_, f) => Console.WriteLine(f.Text);\n    ws.FrameReceived += (_, f) => Console.WriteLine(f.Text);\n    ws.Close += (_, ws1) => Console.WriteLine("WebSocket closed");\n};\n')),(0,o.kt)("h3",{id:"api-reference-4"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-websocket",title:"WebSocket"},"WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-page#page-event-web-socket"},"event Page.WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-websocket#web-socket-event-frame-sent"},"event WebSocket.FrameSent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-websocket#web-socket-event-frame-received"},"event WebSocket.FrameReceived")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-websocket#web-socket-event-close"},"event WebSocket.Close"))),(0,o.kt)("br",null))}u.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);