(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(599)),c={id:"emulation",title:"Device and environment emulation"},i={unversionedId:"emulation",id:"emulation",isDocsHomePage:!1,title:"Device and environment emulation",description:"Playwright allows overriding various parameters of the device where the browser is running:",source:"@site/docs/emulation.md",slug:"/emulation",permalink:"/docs/next/emulation",version:"current",sidebar:"docs",previous:{title:"Element selectors",permalink:"/docs/next/selectors"},next:{title:"Extensibility",permalink:"/docs/next/extensibility"}},l=[{value:"Devices",id:"devices",children:[]},{value:"User agent",id:"user-agent",children:[]},{value:"Viewport",id:"viewport",children:[]},{value:"Locale &amp; timezone",id:"locale--timezone",children:[]},{value:"Permissions",id:"permissions",children:[]},{value:"Geolocation",id:"geolocation",children:[]},{value:"Color scheme and media",id:"color-scheme-and-media",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright allows overriding various parameters of the device where the browser is running:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"viewport size, device scale factor, touch support"),Object(o.b)("li",{parentName:"ul"},"locale, timezone"),Object(o.b)("li",{parentName:"ul"},"color scheme"),Object(o.b)("li",{parentName:"ul"},"geolocation")),Object(o.b)("p",null,"Most of these parameters are configured during the browser context construction, but some of them such as viewport size can be changed for individual pages."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#devices"}),"Devices")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#user-agent"}),"User agent")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#viewport"}),"Viewport")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#locale--timezone"}),"Locale & timezone")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#permissions"}),"Permissions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#geolocation"}),"Geolocation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#color-scheme-and-media"}),"Color scheme and media"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"devices"},"Devices"),Object(o.b)("p",null,"Playwright comes with a registry of device parameters for selected mobile devices. It can be used to simulate browser behavior on a mobile device:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { chromium, devices } = require('playwright');\nconst browser = await chromium.launch();\n\nconst pixel2 = devices['Pixel 2'];\nconst context = await browser.newContext({\n  ...pixel2,\n});\n")),Object(o.b)("p",null,"All pages created in the context above will share the same device parameters."),Object(o.b)("h4",{id:"api-reference"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-playwright#playwrightdevices"}),"playwright.devices")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"user-agent"},"User agent"),Object(o.b)("p",null,"All pages created in the context above will share the user agent specified:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  userAgent: 'My user agent'\n});\n")),Object(o.b)("h4",{id:"api-reference-1"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"viewport"},"Viewport"),Object(o.b)("p",null,"Create a context with custom viewport size:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Create context with given viewport\nconst context = await browser.newContext({\n  viewport: { width: 1280, height: 1024 }\n});\n\n// Resize viewport for individual page\nawait page.setViewportSize({ width: 1600, height: 1200 });\n\n// Emulate high-DPI\nconst context = await browser.newContext({\n  viewport: { width: 2560, height: 1440 },\n  deviceScaleFactor: 2,\n});\n")),Object(o.b)("h4",{id:"api-reference-2"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagesetviewportsizeviewportsize"}),"page.setViewportSize(viewportSize)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"locale--timezone"},"Locale & timezone"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Emulate locale and time\nconst context = await browser.newContext({\n  locale: 'de-DE',\n  timezoneId: 'Europe/Berlin',\n});\n")),Object(o.b)("h4",{id:"api-reference-3"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"permissions"},"Permissions"),Object(o.b)("p",null,"Allow all pages in the context to show system notifications:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  permissions: ['notifications'],\n});\n")),Object(o.b)("p",null,"Grant all pages in the existing context access to current location:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await context.grantPermissions(['geolocation']);\n")),Object(o.b)("p",null,"Grant notifications access from a specific domain:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await context.grantPermissions(['notifications'], {origin: 'https://skype.com'} );\n")),Object(o.b)("p",null,"Revoke all permissions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await context.clearPermissions();\n")),Object(o.b)("h4",{id:"api-reference-4"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions(permissions[, options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browsercontextclearpermissions"}),"browserContext.clearPermissions()"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"geolocation"},"Geolocation"),Object(o.b)("p",null,"Create a context with ",Object(o.b)("inlineCode",{parentName:"p"},'"geolocation"')," permissions granted:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const context = await browser.newContext({\n  geolocation: { longitude: 48.858455, latitude: 2.294474 },\n  permissions: ['geolocation']\n});\n")),Object(o.b)("p",null,"Change the location later:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await context.setGeolocation({ longitude: 29.979097, latitude: 31.134256 });\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note")," you can only change geolocation for all pages in the context."),Object(o.b)("h4",{id:"api-reference-5"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browsercontextsetgeolocationgeolocation"}),"browserContext.setGeolocation(geolocation)"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"color-scheme-and-media"},"Color scheme and media"),Object(o.b)("p",null,"Create a context with dark or light mode. Pages created in this context will follow this color scheme preference."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Create context with dark mode\nconst context = await browser.newContext({\n  colorScheme: 'dark' // or 'light'\n});\n\n// Create page with dark mode\nconst page = await browser.newPage({\n  colorScheme: 'dark' // or 'light'\n});\n\n// Change color scheme for the page\nawait page.emulateMedia({ colorScheme: 'dark' });\n\n// Change media for page\nawait page.emulateMedia({ media: 'print' });\n")),Object(o.b)("h4",{id:"api-reference-6"},"API reference"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-page#pageemulatemediaparams"}),"page.emulateMedia(params)"))))}b.isMDXComponent=!0},599:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,j=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(j,i(i({ref:t},s),{},{components:n})):r.a.createElement(j,i({ref:t},s))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);