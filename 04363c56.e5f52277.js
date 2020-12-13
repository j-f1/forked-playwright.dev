(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(7),i=(a(0),a(875)),r={id:"auth",title:"Authentication"},c={unversionedId:"auth",id:"version-1.4.0/auth",isDocsHomePage:!1,title:"Authentication",description:"Playwright can be used to automate scenarios that require authentication.",source:"@site/versioned_docs/version-1.4.0/auth.md",slug:"/auth",permalink:"/docs/1.4.0/auth",editUrl:"https://github.com/microsoft/playwright/edit/master/docs/versioned_docs/version-1.4.0/auth.md",version:"1.4.0",sidebar:"version-1.4.0/docs",previous:{title:"Multi-page scenarios",permalink:"/docs/1.4.0/multi-pages"},next:{title:"Page Object Models",permalink:"/docs/1.4.0/pom"}},s=[{value:"Automate logging in",id:"automate-logging-in",children:[]},{value:"Reuse authentication state",id:"reuse-authentication-state",children:[{value:"Cookies",id:"cookies",children:[]},{value:"Local storage",id:"local-storage",children:[]},{value:"Session storage",id:"session-storage",children:[]},{value:"Lifecycle",id:"lifecycle",children:[]},{value:"Example",id:"example",children:[]},{value:"API reference",id:"api-reference",children:[]}]},{value:"Multi-factor authentication",id:"multi-factor-authentication",children:[{value:"Persistent authentication",id:"persistent-authentication",children:[]},{value:"Lifecycle",id:"lifecycle-1",children:[]},{value:"API reference",id:"api-reference-1",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright can be used to automate scenarios that require authentication."),Object(i.b)("p",null,"Tests written with Playwright execute in isolated clean-slate environments called\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.4.0/core-concepts#browser-contexts"}),"browser contexts"),". This isolation model\nimproves reproducibility and prevents cascading test failures. New browser\ncontexts can load existing authentication state. This eliminates the need to\nlogin in every context and speeds up test execution."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: This guide covers cookie/token-based authentication (logging in via the\napp UI). For ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),"\nuse ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.4.0/network#http-authentication"}),Object(i.b)("inlineCode",{parentName:"a"},"browser.newContext")),".")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#automate-logging-in"}),"Automate logging in")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#reuse-authentication-state"}),"Reuse authentication state"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#cookies"}),"Cookies")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#local-storage"}),"Local storage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#session-storage"}),"Session storage")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#lifecycle"}),"Lifecycle")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#example"}),"Example")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#api-reference"}),"API reference")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#multi-factor-authentication"}),"Multi-factor authentication"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#persistent-authentication"}),"Persistent authentication")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#lifecycle-1"}),"Lifecycle")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#api-reference-1"}),"API reference"))))),Object(i.b)("h2",{id:"automate-logging-in"},"Automate logging in"),Object(i.b)("p",null,"The Playwright API can automate interaction with a login form. See\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.4.0/input"}),"Input guide")," for more details."),Object(i.b)("p",null,"The following example automates login on GitHub. Once these steps are executed,\nthe browser context will be authenticated."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const page = await context.newPage();\nawait page.goto('https://github.com/login');\n\n// Interact with login form\nawait page.click('text=Login');\nawait page.fill('input[name=\"login\"]', USERNAME);\nawait page.fill('input[name=\"password\"]', PASSWORD);\nawait page.click('text=Submit');\n// Verify app is logged in\n")),Object(i.b)("p",null,"These steps can be executed for every browser context. However, redoing login\nfor every test can slow down test execution. To prevent that, we will reuse\nexisting authentication state in new browser contexts."),Object(i.b)("h2",{id:"reuse-authentication-state"},"Reuse authentication state"),Object(i.b)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated\nstate is stored as ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies"),"\nor in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Storage"}),"local storage"),".\nThe Playwright API can be used to retrieve this state from authenticated contexts\nand then load it into new contexts."),Object(i.b)("p",null,"Cookies and local storage state can be used across different browsers. They depend\non your application's authentication model: some apps might require both cookies\nand local storage."),Object(i.b)("p",null,"The following code snippets retrieve state from an authenticated page/context and\nload them into a new context."),Object(i.b)("h3",{id:"cookies"},"Cookies"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get cookies and store as an env variable\nconst cookies = await context.cookies();\nprocess.env.COOKIES = JSON.stringify(cookies);\n\n// Set cookies in a new context\nconst deserializedCookies = JSON.parse(process.env.COOKIES)\nawait context.addCookies(deserializedCookies);\n")),Object(i.b)("h3",{id:"local-storage"},"Local storage"),Object(i.b)("p",null,"Local storage (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),Object(i.b)("inlineCode",{parentName:"a"},"window.localStorage")),")\nis specific to a particular domain."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get local storage and store as env variable\nconst localStorage = await page.evaluate(() => JSON.stringify(window.localStorage));\nprocess.env.LOCAL_STORAGE = localStorage;\n\n// Set local storage in a new context\nconst localStorage = process.env.LOCAL_STORAGE;\nawait context.addInitScript(storage => {\n  if (window.location.hostname === 'example.com') {\n    const entries = JSON.parse(storage);\n    Object.keys(entries).forEach(key => {\n      window.localStorage.setItem(key, entries[key]);\n    });\n  }\n}, localStorage);\n")),Object(i.b)("h3",{id:"session-storage"},"Session storage"),Object(i.b)("p",null,"Session storage (",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"}),Object(i.b)("inlineCode",{parentName:"a"},"window.sessionStorage")),")\nis specific to a particular domain."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get session storage and store as env variable\nconst sessionStorage = await page.evaluate(() => JSON.stringify(sessionStorage));\nprocess.env.SESSION_STORAGE = sessionStorage;\n\n// Set session storage in a new context\nconst sessionStorage = process.env.SESSION_STORAGE;\nawait context.addInitScript(storage => {\n  if (window.location.hostname === 'example.com') {\n    const entries = JSON.parse(storage);\n    Object.keys(entries).forEach(key => {\n      window.sessionStorage.setItem(key, entries[key]);\n    });\n  }\n}, sessionStorage);\n")),Object(i.b)("h3",{id:"lifecycle"},"Lifecycle"),Object(i.b)("p",null,"Logging in via the UI and then reusing authentication state can be combined to\nimplement ",Object(i.b)("strong",{parentName:"p"},"login once and run multiple scenarios"),". The lifecycle looks like:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run tests (for example, with ",Object(i.b)("inlineCode",{parentName:"li"},"npm run test"),")."),Object(i.b)("li",{parentName:"ol"},"Login via UI and retrieve authentication state.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"In Jest, this can be executed in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://jestjs.io/docs/en/configuration#globalsetup-string"}),Object(i.b)("inlineCode",{parentName:"a"},"globalSetup")),"."))),Object(i.b)("li",{parentName:"ol"},"In each test, load authentication state in ",Object(i.b)("inlineCode",{parentName:"li"},"beforeEach")," or ",Object(i.b)("inlineCode",{parentName:"li"},"beforeAll")," step.")),Object(i.b)("p",null,"This approach will also ",Object(i.b)("strong",{parentName:"p"},"work in CI environments"),", since it does not rely\non any external state."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"examples/authentication.js"}),"This example script")," logs in on GitHub.com with\nChromium, and then reuses the logged in cookie state in WebKit."),Object(i.b)("h3",{id:"api-reference"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.4.0/api/class-browser#class-browsercontext"}),"class ",Object(i.b)("inlineCode",{parentName:"a"},"BrowserContext"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.4.0/api/class-browsercontext#browsercontextcookiesurls"}),Object(i.b)("inlineCode",{parentName:"a"},"browserContext.cookies"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.4.0/api/class-browsercontext#browsercontextaddcookiescookies"}),Object(i.b)("inlineCode",{parentName:"a"},"browserContext.addCookies"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.4.0/api/class-page#pageevaluatepagefunction-arg"}),Object(i.b)("inlineCode",{parentName:"a"},"page.evaluate"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.4.0/api/class-browsercontext#browsercontextaddinitscriptscript-arg"}),Object(i.b)("inlineCode",{parentName:"a"},"browserContext.addInitScript")))),Object(i.b)("h2",{id:"multi-factor-authentication"},"Multi-factor authentication"),Object(i.b)("p",null,"Accounts with multi-factor authentication (MFA) cannot be fully automated, and need\nmanual intervention. Persistent authentication can be used to partially automate\nMFA scenarios."),Object(i.b)("h3",{id:"persistent-authentication"},"Persistent authentication"),Object(i.b)("p",null,"Web browsers use a directory on disk to store user history, cookies, IndexedDB\nand other local state. This disk location is called the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.md"}),"User data directory"),"."),Object(i.b)("p",null,"Note that persistent authentication is not suited for CI environments since it\nrelies on a disk location. User data directories are specific to browser types\nand cannot be shared across browser types."),Object(i.b)("p",null,"User data directories can be used with the ",Object(i.b)("inlineCode",{parentName:"p"},"launchPersistentContext")," API."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');\n\nconst userDataDir = '/path/to/directory';\nconst context = await chromium.launchPersistentContext(userDataDir, { headless: false });\n// Execute login steps manually in the browser window\n")),Object(i.b)("h3",{id:"lifecycle-1"},"Lifecycle"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a user data directory on disk"),Object(i.b)("li",{parentName:"ol"},"Launch a persistent context with the user data directory and login the MFA account."),Object(i.b)("li",{parentName:"ol"},"Reuse user data directory to run automation scenarios.")),Object(i.b)("h3",{id:"api-reference-1"},"API reference"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.4.0/api/class-browsercontext#class-browsercontext"}),"class ",Object(i.b)("inlineCode",{parentName:"a"},"BrowserContext"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.4.0/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"}),Object(i.b)("inlineCode",{parentName:"a"},"browserType.launchPersistentContext")))))}b.isMDXComponent=!0},875:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return a?o.a.createElement(m,c(c({ref:t},l),{},{components:a})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);