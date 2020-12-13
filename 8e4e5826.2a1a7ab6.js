(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{521:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(3),i=a(7),n=(a(0),a(875)),o={id:"class-browser",title:"class: Browser"},l={unversionedId:"api/class-browser",id:"version-1.5.0/api/class-browser",isDocsHomePage:!1,title:"class: Browser",description:"* extends: EventEmitter",source:"@site/versioned_docs/version-1.5.0/api/class-browser.md",slug:"/api/class-browser",permalink:"/docs/1.5.0/api/class-browser",editUrl:"https://github.com/microsoft/playwright/edit/master/docs/versioned_docs/version-1.5.0/api/class-browser.md",version:"1.5.0",sidebar:"version-1.5.0/api",previous:{title:"Playwright module",permalink:"/docs/1.5.0/api/playwright-module"},next:{title:"class: BrowserContext",permalink:"/docs/1.5.0/api/class-browsercontext"}},b=[{value:"event: &#39;disconnected&#39;",id:"event-disconnected",children:[]},{value:"browser.close()",id:"browserclose",children:[]},{value:"browser.contexts()",id:"browsercontexts",children:[]},{value:"browser.isConnected()",id:"browserisconnected",children:[]},{value:"browser.newContext(options)",id:"browsernewcontextoptions",children:[]},{value:"browser.newPage(options)",id:"browsernewpageoptions",children:[]},{value:"browser.version()",id:"browserversion",children:[]}],c={rightToc:b};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"extends: ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/events.html#events_class_eventemitter"}),"EventEmitter"))),Object(n.b)("p",null,"A Browser is created when Playwright connects to a browser instance, either through ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-browsertype#browsertypelaunchoptions"}),Object(n.b)("inlineCode",{parentName:"a"},"browserType.launch"))," or ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-browsertype#browsertypeconnectoptions"}),Object(n.b)("inlineCode",{parentName:"a"},"browserType.connect")),"."),Object(n.b)("p",null,"An example of using a ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.5.0/api#class-browser",title:"Browser"}),"Browser")," to create a ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-page#class-page",title:"Page"}),"Page"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { firefox } = require('playwright');  // Or 'chromium' or 'webkit'.\n\n(async () => {\n  const browser = await firefox.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n")),Object(n.b)("p",null,"See ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-chromiumbrowser#class-chromiumbrowser",title:"ChromiumBrowser"}),"ChromiumBrowser"),", ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-firefoxbrowser#class-firefoxbrowser",title:"FirefoxBrowser"}),"FirefoxBrowser")," and ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-webkitbrowser#class-webkitbrowser",title:"WebKitBrowser"}),"WebKitBrowser")," for browser-specific features. Note that ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#browsertypeconnectoptions"}),"browserType.connect(options)")," and ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),"browserType.launch([options])")," always return a specific browser instance, based on the browser being connected to or launched."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browser#event-disconnected"}),"event: 'disconnected'")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browser#browserclose"}),"browser.close()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browser#browsercontexts"}),"browser.contexts()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browser#browserisconnected"}),"browser.isConnected()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browser#browsernewpageoptions"}),"browser.newPage([options])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browser#browserversion"}),"browser.version()"))),Object(n.b)("h2",{id:"event-disconnected"},"event: 'disconnected'"),Object(n.b)("p",null,"Emitted when Browser gets disconnected from the browser application. This might happen because of one of the following:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Browser application is closed or crashed."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#browserclose"}),Object(n.b)("inlineCode",{parentName:"a"},"browser.close"))," method was called.")),Object(n.b)("h2",{id:"browserclose"},"browser.close()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(n.b)("p",null,"In case this browser is obtained using ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),"browserType.launch"),", closes the browser and all of its pages (if any were opened)."),Object(n.b)("p",null,"In case this browser is obtained using ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#browsertypeconnectoptions"}),"browserType.connect"),", clears all created contexts belonging to this browser and disconnects from the browser server."),Object(n.b)("p",null,"The ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.5.0/api#class-browser",title:"Browser"}),"Browser")," object itself is considered to be disposed and cannot be used anymore."),Object(n.b)("h2",{id:"browsercontexts"},"browser.contexts()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browsercontext#class-browsercontext",title:"BrowserContext"}),"BrowserContext"),">>")),Object(n.b)("p",null,"Returns an array of all open browser contexts. In a newly created browser, this will return zero\nbrowser contexts."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const browser = await pw.webkit.launch();\nconsole.log(browser.contexts().length); // prints `0`\n\nconst context = await browser.newContext();\nconsole.log(browser.contexts().length); // prints `1`\n")),Object(n.b)("h2",{id:"browserisconnected"},"browser.isConnected()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(n.b)("p",null,"Indicates that the browser is connected."),Object(n.b)("h2",{id:"browsernewcontextoptions"},"browser.newContext(","[options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"acceptDownloads")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to automatically download all the attachments. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false")," where all the downloads are canceled."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to ignore HTTPS errors during navigation. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"bypassCSP")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Toggles bypassing page's Content-Security-Policy."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"viewport")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Sets a consistent viewport for each page. Defaults to an 1280x720 viewport. ",Object(n.b)("inlineCode",{parentName:"li"},"null")," disables the default viewport.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"width")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> page width in pixels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"height")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> page height in pixels."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"userAgent")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Specific user agent to use in this context."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"deviceScaleFactor")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Specify device scale factor (can be thought of as dpr). Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"1"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"isMobile")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the ",Object(n.b)("inlineCode",{parentName:"li"},"meta viewport")," tag is taken into account and touch events are enabled. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),". Not supported in Firefox."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"hasTouch")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Specifies if viewport supports touch events. Defaults to false."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"javaScriptEnabled")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether or not to enable JavaScript in the context. Defaults to true."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"timezoneId")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Changes the timezone of the context. See ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1"}),"ICU\u2019s ",Object(n.b)("inlineCode",{parentName:"a"},"metaZones.txt"))," for a list of supported timezone IDs."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"geolocation")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"latitude")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Latitude between -90 and 90."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"longitude")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Longitude between -180 and 180."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"accuracy")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Non-negative accuracy value. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"locale")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Specify user locale, for example ",Object(n.b)("inlineCode",{parentName:"li"},"en-GB"),", ",Object(n.b)("inlineCode",{parentName:"li"},"de-DE"),", etc. Locale will affect ",Object(n.b)("inlineCode",{parentName:"li"},"navigator.language")," value, ",Object(n.b)("inlineCode",{parentName:"li"},"Accept-Language")," request header value as well as number and date formatting rules."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"permissions")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> A list of permissions to grant to all pages in this context. See ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browsercontext#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions")," for more details."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"extraHTTPHeaders")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),", ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> An object containing additional HTTP headers to be sent with every request. All header values must be strings."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"offline")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to emulate network being offline. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"httpCredentials")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Credentials for ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"username")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"password")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"colorScheme"),' <"light"|"dark"|"no-preference"> Emulates ',Object(n.b)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",Object(n.b)("inlineCode",{parentName:"li"},"'light'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'dark'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'no-preference'"),". See ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#pageemulatemediaoptions"}),"page.emulateMedia(options)")," for more details. Defaults to '",Object(n.b)("inlineCode",{parentName:"li"},"light"),"'."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"logger")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"videosPath")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Enables video recording for all pages to ",Object(n.b)("inlineCode",{parentName:"li"},"videosPath")," folder. If not specified, videos are not recorded."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"videoSize")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Specifies dimensions of the automatically recorded video. Can only be used if ",Object(n.b)("inlineCode",{parentName:"li"},"videosPath")," is set. If not specified the size will be equal to ",Object(n.b)("inlineCode",{parentName:"li"},"viewport"),". If ",Object(n.b)("inlineCode",{parentName:"li"},"viewport")," is not configured explicitly the video size defaults to 1280x720. Actual picture of the page will be scaled down if necessary to fit specified size.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"width")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Video frame width."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"height")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Video frame height."))))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-browsercontext#class-browsercontext",title:"BrowserContext"}),"BrowserContext"),">>")),Object(n.b)("p",null,"Creates a new browser context. It won't share cookies/cache with other browser contexts."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"(async () => {\n  const browser = await playwright.firefox.launch();  // Or 'chromium' or 'webkit'.\n  // Create a new incognito browser context.\n  const context = await browser.newContext();\n  // Create a new page in a pristine context.\n  const page = await context.newPage();\n  await page.goto('https://example.com');\n})();\n")),Object(n.b)("h2",{id:"browsernewpageoptions"},"browser.newPage(","[options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"acceptDownloads")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to automatically download all the attachments. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false")," where all the downloads are canceled."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to ignore HTTPS errors during navigation. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"bypassCSP")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Toggles bypassing page's Content-Security-Policy."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"viewport")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Sets a consistent viewport for each page. Defaults to an 1280x720 viewport. ",Object(n.b)("inlineCode",{parentName:"li"},"null")," disables the default viewport.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"width")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> page width in pixels."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"height")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> page height in pixels."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"userAgent")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Specific user agent to use in this context."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"deviceScaleFactor")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Specify device scale factor (can be thought of as dpr). Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"1"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"isMobile")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the ",Object(n.b)("inlineCode",{parentName:"li"},"meta viewport")," tag is taken into account and touch events are enabled. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),". Not supported in Firefox."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"hasTouch")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Specifies if viewport supports touch events. Defaults to false."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"javaScriptEnabled")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether or not to enable JavaScript in the context. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"timezoneId")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Changes the timezone of the context. See ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1"}),"ICU\u2019s ",Object(n.b)("inlineCode",{parentName:"a"},"metaZones.txt"))," for a list of supported timezone IDs."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"geolocation")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"latitude")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Latitude between -90 and 90."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"longitude")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Longitude between -180 and 180."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"accuracy")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Non-negative accuracy value. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"locale")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Specify user locale, for example ",Object(n.b)("inlineCode",{parentName:"li"},"en-GB"),", ",Object(n.b)("inlineCode",{parentName:"li"},"de-DE"),", etc. Locale will affect ",Object(n.b)("inlineCode",{parentName:"li"},"navigator.language")," value, ",Object(n.b)("inlineCode",{parentName:"li"},"Accept-Language")," request header value as well as number and date formatting rules."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"permissions")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> A list of permissions to grant to all pages in this context. See ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions")," for more details."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"extraHTTPHeaders")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),", ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">> An object containing additional HTTP headers to be sent with every request. All header values must be strings."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"offline")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to emulate network being offline. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"httpCredentials")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Credentials for ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"username")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"password")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"colorScheme"),' <"light"|"dark"|"no-preference"> Emulates ',Object(n.b)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",Object(n.b)("inlineCode",{parentName:"li"},"'light'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'dark'"),", ",Object(n.b)("inlineCode",{parentName:"li"},"'no-preference'"),". See ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#pageemulatemediaoptions"}),"page.emulateMedia(options)")," for more details. Defaults to '",Object(n.b)("inlineCode",{parentName:"li"},"light"),"'."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"logger")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"videosPath")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Enables video recording for all pages to ",Object(n.b)("inlineCode",{parentName:"li"},"videosPath")," folder. If not specified, videos are not recorded."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"videoSize")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Specifies dimensions of the automatically recorded video. Can only be used if ",Object(n.b)("inlineCode",{parentName:"li"},"videosPath")," is set. If not specified the size will be equal to ",Object(n.b)("inlineCode",{parentName:"li"},"viewport"),". If ",Object(n.b)("inlineCode",{parentName:"li"},"viewport")," is not configured explicitly the video size defaults to 1280x720. Actual picture of the page will be scaled down if necessary to fit specified size.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"width")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Video frame width."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"height")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#Number_type",title:"Number"}),"number"),"> Video frame height."))))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-page#class-page",title:"Page"}),"Page"),">>")),Object(n.b)("p",null,"Creates a new page in a new browser context. Closing this page will close the context as well."),Object(n.b)("p",null,"This is a convenience API that should only be used for the single-page scenarios and short snippets. Production code and testing frameworks should explicitly create ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#browsernewcontextoptions"}),"browser.newContext")," followed by the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-browsercontext#browsercontextnewpage"}),"browserContext.newPage")," to control their exact life times."),Object(n.b)("h2",{id:"browserversion"},"browser.version()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")),Object(n.b)("p",null,"Returns the browser version."))}s.isMDXComponent=!0},875:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,O=p["".concat(o,".").concat(d)]||p[d]||m[d]||n;return a?i.a.createElement(O,l(l({ref:t},c),{},{components:a})):i.a.createElement(O,l({ref:t},c))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);