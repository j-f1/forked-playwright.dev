(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{312:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),c=(t(0),t(875)),l={id:"core-concepts",title:"Core concepts"},i={unversionedId:"core-concepts",id:"version-1.3.0/core-concepts",isDocsHomePage:!1,title:"Core concepts",description:"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit",source:"@site/versioned_docs/version-1.3.0/core-concepts.md",slug:"/core-concepts",permalink:"/docs/1.3.0/core-concepts",editUrl:"https://github.com/microsoft/playwright/edit/master/docs/versioned_docs/version-1.3.0/core-concepts.md",version:"1.3.0",sidebar:"version-1.3.0/docs",previous:{title:"Getting Started",permalink:"/docs/1.3.0/intro"},next:{title:"Debugging tools",permalink:"/docs/1.3.0/debug"}},o=[{value:"Browser",id:"browser",children:[]},{value:"Browser contexts",id:"browser-contexts",children:[]},{value:"Pages and frames",id:"pages-and-frames",children:[]},{value:"Selectors",id:"selectors",children:[]},{value:"Auto-waiting",id:"auto-waiting",children:[]},{value:"Execution contexts: Node.js and Browser",id:"execution-contexts-nodejs-and-browser",children:[{value:"Evaluation",id:"evaluation",children:[]}]},{value:"Object &amp; Element handles",id:"object--element-handles",children:[{value:"Handles Lifecycle",id:"handles-lifecycle",children:[]},{value:"Example: ElementHandle",id:"example-elementhandle",children:[]},{value:"Example: JSHandle",id:"example-jshandle",children:[]}]}],s={rightToc:o};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright provides a set of APIs to automate Chromium, Firefox and WebKit\nbrowsers. By using the Playwright API, you can write JavaScript code to create\nnew browser pages, navigate to URLs and then interact with elements on a page."),Object(c.b)("p",null,"Along with a test runner Playwright can be used to automate user interactions to\nvalidate and test web applications. The Playwright API enables this through\nthe following primitives."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#browser"}),"Browser")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#browser-contexts"}),"Browser contexts")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#pages-and-frames"}),"Pages and frames")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#selectors"}),"Selectors")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#auto-waiting"}),"Auto-waiting")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#execution-contexts-nodejs-and-browser"}),"Execution contexts: Node.js and Browser")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#object--element-handles"}),"Object & Element handles"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"browser"},"Browser"),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-browser#class-browser"}),Object(c.b)("inlineCode",{parentName:"a"},"Browser"))," refers to an instance of Chromium, Firefox\nor WebKit. Playwright scripts generally start with launching a browser instance\nand end with closing the browser. Browser instances can be launched in headless\n(without a GUI) or headful mode."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\nconst browser = await chromium.launch({ headless: false });\nawait browser.close();\n")),Object(c.b)("p",null,"Launching a browser instance can be expensive, and Playwright is designed to\nmaximize what a single instance can do through multiple browser contexts."),Object(c.b)("h4",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#class-browser"}),"class ",Object(c.b)("inlineCode",{parentName:"a"},"Browser")))),Object(c.b)("br",null),Object(c.b)("h2",{id:"browser-contexts"},"Browser contexts"),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-browsercontext#class-browsercontext"}),Object(c.b)("inlineCode",{parentName:"a"},"BrowserContext"))," is an isolated incognito-alike\nsession within a browser instance. Browser contexts are fast and cheap to create.\nBrowser contexts can be used to parallelize isolated test executions."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const browser = await chromium.launch();\nconst context = await browser.newContext();\n")),Object(c.b)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving\nmobile devices, permissions, locale and color scheme."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { devices } = require('playwright');\nconst iPhone = devices['iPhone 11 Pro'];\n\nconst context = await browser.newContext({\n  ...iPhone,\n  permissions: ['geolocation'],\n  geolocation: { latitude: 52.52, longitude: 13.39},\n  colorScheme: 'dark',\n  locale: 'de-DE'\n});\n")),Object(c.b)("h4",{id:"example"},"Example"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"examples/authentication.js"}),"This script")," logs in on GitHub.com through Chromium, and then reuses the login cookies state in WebKit. This recipe can be used to speed up tests by logging in once and reusing login state."),Object(c.b)("h4",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#class-browsercontext"}),"class ",Object(c.b)("inlineCode",{parentName:"a"},"BrowserContext"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"pages-and-frames"},"Pages and frames"),Object(c.b)("p",null,"A Browser context can have multiple pages. A ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-page#class-page"}),Object(c.b)("inlineCode",{parentName:"a"},"Page")),"\nrefers to a single tab or a popup window within a browser context. It should be used to navigate to URLs and interact with the page content."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Create a page.\nconst page = await context.newPage();\n\n// Navigate explicitly, similar to entering a URL in the browser.\nawait page.goto('http://example.com');\n// Fill an input.\nawait page.fill('#search', 'query');\n\n// Navigate implicitly by clicking a link.\nawait page.click('#submit');\n// Expect a new url.\nconsole.log(page.url());\n\n// Page can navigate from the script - this will be picked up by Playwright.\nwindow.location.href = 'https://example.com';\n")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Read more on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.3.0/loading"}),"page navigation and loading"),".")),Object(c.b)("p",null,"A page can have one or more ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.3.0/api/class-frame#class-frame"}),"Frame")," objects attached to\nit. Each page has a main frame and page-level interactions (like ",Object(c.b)("inlineCode",{parentName:"p"},"click"),") are\nassumed to operate in the main frame."),Object(c.b)("p",null,"A page can have additional frames attached with the ",Object(c.b)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These\nframes can be accessed for interactions inside the frame."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Get frame using the frame's name attribute\nconst frame = page.frame('frame-login');\n\n// Get frame using frame's URL\nconst frame = page.frame({ url: /.*domain.*/ });\n\n// Get frame using any other selector\nconst frameElementHandle = await page.$('.frame-class');\nconst frame = await frameElementHandle.contentFrame();\n\n// Interact with the frame\nawait frame.fill('#username-input', 'John');\n")),Object(c.b)("h4",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#class-page"}),"class ",Object(c.b)("inlineCode",{parentName:"a"},"Page"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#class-frame"}),"class ",Object(c.b)("inlineCode",{parentName:"a"},"Frame"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-page#pageframeoptions"}),"page.frame(options)"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"selectors"},"Selectors"),Object(c.b)("p",null,"Playwright can search for elements using CSS selectors, XPath selectors, HTML attributes like ",Object(c.b)("inlineCode",{parentName:"p"},"id"),", ",Object(c.b)("inlineCode",{parentName:"p"},"data-test-id")," and even text content."),Object(c.b)("p",null,"You can explicitly specify the selector engine you are using or let Playwright detect it."),Object(c.b)("p",null,"All selector engines except for XPath pierce shadow DOM by default. If you want to enforce regular DOM selection, you can use the ",Object(c.b)("inlineCode",{parentName:"p"},"*:light")," versions of the selectors. You don't typically need to though."),Object(c.b)("p",null,"Learn more about selectors and selector engines ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.3.0/selectors"}),"here"),"."),Object(c.b)("p",null,"Some examples below:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Using data-test-id= selector engine\nawait page.click('data-test-id=foo');\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// CSS and XPath selector engines are automatically detected\nawait page.click('div');\nawait page.click('//html/body/div');\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Find node by text substring\nawait page.click('text=Hello w');\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Explicit CSS and XPath notation\nawait page.click('css=div');\nawait page.click('xpath=//html/body/div');\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Only search light DOM, outside WebComponent shadow DOM:\nawait page.click('css:light=div');\n")),Object(c.b)("p",null,"Selectors using the same or different engines can be combined using the ",Object(c.b)("inlineCode",{parentName:"p"},">>")," separator. For example,"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Click an element with text 'Sign Up' inside of a #free-month-promo.\nawait page.click('#free-month-promo >> text=Sign Up');\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Capture textContent of a section that contains an element with text 'Selectors'.\nconst sectionText = await page.$eval('*css=section >> text=Selectors', e => e.textContent);\n")),Object(c.b)("br",null),Object(c.b)("h2",{id:"auto-waiting"},"Auto-waiting"),Object(c.b)("p",null,"Actions like ",Object(c.b)("inlineCode",{parentName:"p"},"click")," and ",Object(c.b)("inlineCode",{parentName:"p"},"fill")," auto-wait for the element to be visible and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.3.0/actionability"}),"actionable"),". For example, click will:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"wait for an element with the given selector to appear in the DOM"),Object(c.b)("li",{parentName:"ul"},"wait for it to become visible: have non-empty bounding box and no ",Object(c.b)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(c.b)("li",{parentName:"ul"},"wait for it to stop moving: for example, wait until css transition finishes"),Object(c.b)("li",{parentName:"ul"},"scroll the element into view"),Object(c.b)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point: for example, wait until element becomes non-obscured by other elements"),Object(c.b)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Playwright waits for #search element to be in the DOM\nawait page.fill('#search', 'query');\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Playwright waits for element to stop animating\n// and accept clicks.\nawait page.click('#search');\n")),Object(c.b)("p",null,"You can explicitly wait for an element to appear in the DOM or to become visible:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Wait for #search to appear in the DOM.\nawait page.waitForSelector('#search', { state: 'attached' });\n// Wait for #promo to become visible, for example with `visibility:visible`.\nawait page.waitForSelector('#promo');\n")),Object(c.b)("p",null,"... or to become hidden or detached"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Wait for #details to become hidden, for example with `display:none`.\nawait page.waitForSelector('#details', { state: 'hidden' });\n// Wait for #promo to be removed from the DOM.\nawait page.waitForSelector('#promo', { state: 'detached' });\n")),Object(c.b)("h4",{id:"api-reference-3"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-page#pagefillselector-value-options"}),"page.fill(selector, value[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-page#pagewaitforselectorselector-options"}),"page.waitForSelector(selector[, options])"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"execution-contexts-nodejs-and-browser"},"Execution contexts: Node.js and Browser"),Object(c.b)("p",null,"Playwright scripts run in your Node.js environment. You page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/docs/api/class-page.md#pageevaluatepagefunction-arg"}),Object(c.b)("inlineCode",{parentName:"a"},"page.evaluate"))," API can run a JavaScript function in the context\nof the web page and bring results back to the Node.js environment. Browser globals like\n",Object(c.b)("inlineCode",{parentName:"p"},"window")," and ",Object(c.b)("inlineCode",{parentName:"p"},"document")," can be used in ",Object(c.b)("inlineCode",{parentName:"p"},"evaluate"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const href = await page.evaluate(() => document.location.href);\n")),Object(c.b)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const status = await page.evaluate(async () => {\n  const response = await fetch(location.href);\n  return response.status;\n});\n")),Object(c.b)("h3",{id:"evaluation"},"Evaluation"),Object(c.b)("p",null,"Functions passed inside ",Object(c.b)("inlineCode",{parentName:"p"},"page.evaluate")," can accept parameters. These parameters are\nserialized and sent into your web page over the wire. You can pass primitive types, JSON-alike objects and remote object handles received from the page."),Object(c.b)("p",null,"Right:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const data = { text: 'some data', value: 1 };\n// Pass |data| as a parameter.\nconst result = await page.evaluate(data => {\n  window.myApp.use(data);\n}, data);\n")),Object(c.b)("p",null,"Wrong:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const data = { text: 'some data', value: 1 };\nconst result = await page.evaluate(() => {\n  // There is no |data| in the web page.\n  window.myApp.use(data);\n});\n")),Object(c.b)("h4",{id:"api-reference-4"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#pageevaluatepagefunction-arg"}),Object(c.b)("inlineCode",{parentName:"a"},"page.evaluate(pageFunction[, arg])"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-frame#frameevaluatepagefunction-arg"}),Object(c.b)("inlineCode",{parentName:"a"},"frame.evaluate(pageFunction[, arg])"))),Object(c.b)("li",{parentName:"ul"},"Evaluation argument ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/evaluationargument#evaluationargument"}),"examples"))),Object(c.b)("br",null),Object(c.b)("h2",{id:"object--element-handles"},"Object & Element handles"),Object(c.b)("p",null,"Playwright can create Node-side handles to the page DOM elements or any other objects inside the page. These handles live in the Node.js process, whereas the actual objects reside in browser."),Object(c.b)("p",null,"There are two types of handles:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-jshandle#class-jshandle"}),Object(c.b)("inlineCode",{parentName:"a"},"JSHandle"))," to reference any JavaScript objects in the page"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-elementhandle#class-elementhandle"}),Object(c.b)("inlineCode",{parentName:"a"},"ElementHandle"))," to reference DOM elements in the page")),Object(c.b)("p",null,"Note that since any DOM element in the page is also a JavaScript object,\nPlaywright's ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.3.0/api#class-elementhandle"}),Object(c.b)("inlineCode",{parentName:"a"},"ElementHandle"))," extends\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.3.0/api#class-jshandle"}),Object(c.b)("inlineCode",{parentName:"a"},"JSHandle")),"."),Object(c.b)("h3",{id:"handles-lifecycle"},"Handles Lifecycle"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Handles can be acquired using the page methods ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-page#pageevaluatehandlepagefunction-arg"}),Object(c.b)("inlineCode",{parentName:"a"},"page.evaluateHandle")),", ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#pageselector"}),Object(c.b)("inlineCode",{parentName:"a"},"page.$"))," or ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#pageselector-1"}),Object(c.b)("inlineCode",{parentName:"a"},"page.$$"))," or\ntheir frame counterparts ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-frame#frameevaluatehandlepagefunction-arg"}),Object(c.b)("inlineCode",{parentName:"a"},"frame.evaluateHandle")),", ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#frameselector"}),Object(c.b)("inlineCode",{parentName:"a"},"frame.$"))," or ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#frameselector-1"}),Object(c.b)("inlineCode",{parentName:"a"},"frame.$$")),"."),Object(c.b)("li",{parentName:"ul"},"Once created, handles will retain object from ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"}),"garbage collection"),"."),Object(c.b)("li",{parentName:"ul"},"Handles will be ",Object(c.b)("strong",{parentName:"li"},"automatically disposed")," once the page or frame they belong to navigates or closes."),Object(c.b)("li",{parentName:"ul"},"Handles can be ",Object(c.b)("strong",{parentName:"li"},"manually disposed")," using ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-jshandle#jshandledispose"}),Object(c.b)("inlineCode",{parentName:"a"},"jsHandle.dispose"))," method.")),Object(c.b)("h3",{id:"example-elementhandle"},"Example: ElementHandle"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// The first parameter of the elementHandle.evaluate callback is the element handle points to.\nconst ulElementHandle = await page.$('ul');\nawait ulElementHandle.evaluate(ulElement => getComputedStyle(ulElement).getPropertyValue('display'));\n")),Object(c.b)("p",null,"Handles can also be passed as arguments to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.3.0/api#pageevaluatepagefunction-arg"}),Object(c.b)("inlineCode",{parentName:"a"},"page.evaluate"))," function:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// In the page API, you can pass handle as a parameter.\nconst ulElementHandle = await page.$('ul');\nawait page.evaluate(uiElement => getComputedStyle(uiElement).getPropertyValue('display'), uiElement);\n")),Object(c.b)("h3",{id:"example-jshandle"},"Example: JSHandle"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Create a new array in the page, write a reference to it in\n// window.myArray and get a handle to it.\nconst myArrayHandle = await page.evaluateHandle(() => {\n  window.myArray = [1];\n  return myArray;\n});\n\n// Get current length of the array using the handle.\nconst length = await page.evaluate(\n  (arg) => arg.myArray.length,\n  { myArray: myArrayHandle }\n);\n\n// Add one more element to the array using the handle\nawait page.evaluate((arg) => arg.myArray.push(arg.newElement), {\n  myArray: myArrayHandle,\n  newElement: 2\n});\n\n// Get current length of the array using window.myArray reference.\nconst newLength = await page.evaluate(() => window.myArray.length);\n\n// Release the object when it's no longer needed.\nawait myArrayHandle.dispose();\n")),Object(c.b)("h4",{id:"api-reference-5"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#class-jshandle"}),"class ",Object(c.b)("inlineCode",{parentName:"a"},"JSHandle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#class-elementhandle"}),"class ",Object(c.b)("inlineCode",{parentName:"a"},"ElementHandle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#pageevaluatehandlepagefunction-arg"}),Object(c.b)("inlineCode",{parentName:"a"},"page.evaluateHandle"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#pageselector"}),Object(c.b)("inlineCode",{parentName:"a"},"page.$"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api#pageselector-1"}),Object(c.b)("inlineCode",{parentName:"a"},"page.$$"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.3.0/api/class-jshandle#jshandleevaluatepagefunction-arg"}),Object(c.b)("inlineCode",{parentName:"a"},"jsHandle.evaluate")))))}b.isMDXComponent=!0},875:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=b(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(t),d=n,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return t?r.a.createElement(u,i(i({ref:a},s),{},{components:t})):r.a.createElement(u,i({ref:a},s))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,l=new Array(c);l[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<c;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);