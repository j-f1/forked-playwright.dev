"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4488],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return f}});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"codegen",title:"Test Generator"},g=void 0,m={unversionedId:"codegen",id:"version-1.20/codegen",title:"Test Generator",description:"Playwright comes with the ability to generate tests out of the box.",source:"@site/versioned_docs/version-1.20/codegen.mdx",sourceDirName:".",slug:"/codegen",permalink:"/dotnet/docs/codegen",tags:[],version:"1.20",frontMatter:{id:"codegen",title:"Test Generator"},sidebar:"docs",previous:{title:"Trace Viewer",permalink:"/dotnet/docs/trace-viewer"},next:{title:"Debugging tools",permalink:"/dotnet/docs/debug"}},h={},f=[{value:"Generate tests",id:"generate-tests",level:2},{value:"Preserve authenticated state",id:"preserve-authenticated-state",level:2},{value:"Record using custom setup",id:"record-using-custom-setup",level:2},{value:"Emulate devices",id:"emulate-devices",level:2},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",level:2},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",level:2}],w={toc:f};function b(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},w),u),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright comes with the ability to generate tests out of the box."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#generate-tests"}),"Generate tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#preserve-authenticated-state"}),"Preserve authenticated state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#record-using-custom-setup"}),"Record using custom setup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#emulate-devices"}),"Emulate devices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#emulate-color-scheme-and-viewport-size"}),"Emulate color scheme and viewport size")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#emulate-geolocation-language-and-timezone"}),"Emulate geolocation, language and timezone"))),(0,a.kt)("h2",p({},{id:"generate-tests"}),"Generate tests"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 codegen wikipedia.org\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright will generate the code for the user interactions. ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,a.kt)("h2",p({},{id:"preserve-authenticated-state"}),"Preserve authenticated state"),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,a.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,a.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," at the end of the session. This is useful to separately record authentication step and reuse it later in the tests."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 codegen --save-storage=auth.json\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n")),(0,a.kt)("p",null,"Run with ",(0,a.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,a.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",(0,a.kt)("a",p({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"pwsh bin\\Debug\\netX\\playwright.ps1 open --load-storage=auth.json my.web.app\npwsh bin\\Debug\\netX\\playwright.ps1 codegen --load-storage=auth.json my.web.app\n# Perform actions in authenticated state.\n")),(0,a.kt)("h2",p({},{id:"record-using-custom-setup"}),"Record using custom setup"),(0,a.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,a.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-browsercontext#browser-context-route"}),"BrowserContext.RouteAsync(url, handler, options)"),"), it is possible to call ",(0,a.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/api/class-page#page-pause"}),"Page.PauseAsync()")," that will open a separate window with codegen controls."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        var chromium = playwright.Chromium;\n        // Make sure to run headed.\n        var browser = await chromium.LaunchAsync(new BrowserTypeLaunchOptions { Headless = false });\n\n        // Setup context however you like.\n        var context = await browser.NewContextAsync(); // Pass any options\n        await context.RouteAsync('**/*', route => route.ContinueAsync());\n\n        // Pause the page, and start recording manually.\n        var page = await context.NewPageAsync();\n        await page.PauseAsync();\n    }\n}\n")),(0,a.kt)("h2",p({},{id:"emulate-devices"}),"Emulate devices"),(0,a.kt)("p",null,"You can record scripts and tests while emulating a device."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# Emulate iPhone 11.\npwsh bin\\Debug\\netX\\playwright.ps1 codegen --device="iPhone 11" wikipedia.org\n')),(0,a.kt)("h2",p({},{id:"emulate-color-scheme-and-viewport-size"}),"Emulate color scheme and viewport size"),(0,a.kt)("p",null,"You can also record scripts and tests while emulating various browser properties."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# Emulate screen size and color scheme.\npwsh bin\\Debug\\netX\\playwright.ps1 codegen --viewport-size=800,600 --color-scheme=dark twitter.com\n")),(0,a.kt)("h2",p({},{id:"emulate-geolocation-language-and-timezone"}),"Emulate geolocation, language and timezone"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\npwsh bin\\Debug\\netX\\playwright.ps1 codegen --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\n')))}b.isMDXComponent=!0}}]);