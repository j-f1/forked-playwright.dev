"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5399],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,h=d["".concat(i,".").concat(g)]||d[g]||u[g]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8122:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return w}});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"cli",title:"Command line tools"},g=void 0,h={unversionedId:"cli",id:"version-1.20/cli",title:"Command line tools",description:"Playwright comes with the command line tools.",source:"@site/versioned_docs/version-1.20/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/dotnet/docs/cli",tags:[],version:"1.20",frontMatter:{id:"cli",title:"Command line tools"},sidebar:"docs",previous:{title:"Browser Contexts",permalink:"/dotnet/docs/browser-contexts"},next:{title:"Dialogs",permalink:"/dotnet/docs/dialogs"}},m={},w=[{value:"Usage",id:"usage",level:2},{value:"Install browsers",id:"install-browsers",level:2},{value:"Generate code",id:"generate-code",level:2},{value:"Preserve authenticated state",id:"preserve-authenticated-state",level:3},{value:"Codegen with custom setup",id:"codegen-with-custom-setup",level:3},{value:"Open pages",id:"open-pages",level:2},{value:"Emulate devices",id:"emulate-devices",level:3},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",level:3},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",level:3},{value:"Inspect selectors",id:"inspect-selectors",level:2},{value:"playwright.$(selector)",id:"playwrightselector",level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",level:4},{value:"Take screenshot",id:"take-screenshot",level:2},{value:"Generate PDF",id:"generate-pdf",level:2},{value:"Install system dependencies",id:"install-system-dependencies",level:2}],b={toc:w};function k(e){var t,n=e,{components:r}=n,c=((e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},b),c),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright comes with the command line tools."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#usage"}),"Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#install-browsers"}),"Install browsers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#generate-code"}),"Generate code")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#open-pages"}),"Open pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#inspect-selectors"}),"Inspect selectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#take-screenshot"}),"Take screenshot")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#generate-pdf"}),"Generate PDF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"#install-system-dependencies"}),"Install system dependencies"))),(0,a.kt)("h2",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Use the tools.\npwsh bin\\Debug\\netX\\playwright.ps1 --help\n")),(0,a.kt)("h2",u({},{id:"install-browsers"}),"Install browsers"),(0,a.kt)("p",null,"Playwright can install supported browsers."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Running without arguments will install default browsers\npwsh bin\\Debug\\netX\\playwright.ps1 install\n")),(0,a.kt)("p",null,"You can also install specific browsers by providing an argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Install WebKit\npwsh bin\\Debug\\netX\\playwright.ps1 install webkit\n")),(0,a.kt)("p",null,"See all supported browsers:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 install --help\n")),(0,a.kt)("h2",u({},{id:"generate-code"}),"Generate code"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 codegen wikipedia.org\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,a.kt)("h3",u({},{id:"preserve-authenticated-state"}),"Preserve authenticated state"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 codegen --save-storage=auth.json\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n")),(0,a.kt)("p",null,"Run with ",(0,a.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 open --load-storage=auth.json my.web.app\npwsh bin\\Debug\\netX\\playwright.ps1 codegen --load-storage=auth.json my.web.app\n# Perform actions in authenticated state.\n")),(0,a.kt)("h3",u({},{id:"codegen-with-custom-setup"}),"Codegen with custom setup"),(0,a.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-route"}),"BrowserContext.RouteAsync(url, handler, options)"),"), it is possible to call ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-pause"}),"Page.PauseAsync()")," that will open a separate window with codegen controls."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        var chromium = playwright.Chromium;\n        // Make sure to run headed.\n        var browser = await chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false });\n\n        // Setup context however you like.\n        var context = await browser.NewContextAsync(); // Pass any options\n        await context.RouteAsync('**/*', route => route.ContinueAsync());\n\n        // Pause the page, and start recording manually.\n        var page = await context.NewPageAsync();\n        await page.PauseAsync();\n    }\n}\n")),(0,a.kt)("h2",u({},{id:"open-pages"}),"Open pages"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Open page in Chromium\npwsh bin\\Debug\\netX\\playwright.ps1 open example.com\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Open page in WebKit\npwsh bin\\Debug\\netX\\playwright.ps1 wk example.com\n")),(0,a.kt)("h3",u({},{id:"emulate-devices"}),"Emulate devices"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"}),(0,a.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# Emulate iPhone 11.\npwsh bin\\Debug\\netX\\playwright.ps1 open --device="iPhone 11" wikipedia.org\n')),(0,a.kt)("h3",u({},{id:"emulate-color-scheme-and-viewport-size"}),"Emulate color scheme and viewport size"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Emulate screen size and color scheme.\npwsh bin\\Debug\\netX\\playwright.ps1 open --viewport-size=800,600 --color-scheme=dark twitter.com\n")),(0,a.kt)("h3",u({},{id:"emulate-geolocation-language-and-timezone"}),"Emulate geolocation, language and timezone"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\npwsh bin\\Debug\\netX\\playwright.ps1 open --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\n')),(0,a.kt)("h2",u({},{id:"inspect-selectors"}),"Inspect selectors"),(0,a.kt)("p",null,"During ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,a.kt)("h4",u({},{id:"playwrightselector"}),"playwright.$(selector)"),(0,a.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,a.kt)("h4",u({},{id:"playwrightselector-1"}),"playwright.$$(selector)"),(0,a.kt)("p",null,"Same as ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,a.kt)("h4",u({},{id:"playwrightinspectselector"}),"playwright.inspect(selector)"),(0,a.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,a.kt)("h4",u({},{id:"playwrightlocatorselector"}),"playwright.locator(selector)"),(0,a.kt)("p",null,"Query Playwright element using the actual Playwright query engine, for example:"),(0,a.kt)("h4",u({},{id:"playwrightselectorelement"}),"playwright.selector(element)"),(0,a.kt)("p",null,"Generates selector for the given element."),(0,a.kt)("h2",u({},{id:"take-screenshot"}),"Take screenshot"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\npwsh bin\\Debug\\netX\\playwright.ps1 screenshot \\\n    --device=\"iPhone 11\" \\\n    --color-scheme=dark \\\n    --wait-for-timeout=3000 \\\n    twitter.com twitter-iphone.png\n")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# Capture a full page screenshot\npwsh bin\\Debug\\netX\\playwright.ps1 screenshot --full-page en.wikipedia.org wiki-full.png\n")),(0,a.kt)("h2",u({},{id:"generate-pdf"}),"Generate PDF"),(0,a.kt)("p",null,"PDF generation only works in Headless Chromium."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# See command help\npwsh bin\\Debug\\netX\\playwright.ps1 pdf https://en.wikipedia.org/wiki/PDF wiki.pdf\n")),(0,a.kt)("h2",u({},{id:"install-system-dependencies"}),"Install system dependencies"),(0,a.kt)("p",null,"Ubuntu 18.04 and Ubuntu 20.04 system dependencies can get installed automatically. This is useful for CI environments."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# See command help\npwsh bin\\Debug\\netX\\playwright.ps1 install-deps\n")),(0,a.kt)("p",null,"You can also install the dependencies for a single browser only by passing it as an argument:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 install-deps chromium\n")),(0,a.kt)("p",null,"It's also possible to combine ",(0,a.kt)("inlineCode",{parentName:"p"},"install-deps")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," and install by that the browsers and OS dependencies with a single command. This would do both for Chromium, but you can also leave it out."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 install --with-deps chromium\n")))}k.isMDXComponent=!0}}]);