"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6112],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),w=l(n),f=o,d=w["".concat(c,".").concat(f)]||w[f]||p[f]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=w;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},7503:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return w},metadata:function(){return d},toc:function(){return y}});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&u(e,n,t[n]);return e};const w={id:"browser-contexts",title:"Browser Contexts"},f=void 0,d={unversionedId:"browser-contexts",id:"version-1.19/browser-contexts",title:"Browser Contexts",description:"- Browser context",source:"@site/versioned_docs/version-1.19/browser-contexts.mdx",sourceDirName:".",slug:"/browser-contexts",permalink:"/dotnet/docs/1.19/browser-contexts",tags:[],version:"1.19",frontMatter:{id:"browser-contexts",title:"Browser Contexts"},sidebar:"version-1.19/docs",previous:{title:"Browsers",permalink:"/dotnet/docs/1.19/browsers"},next:{title:"Command line tools",permalink:"/dotnet/docs/1.19/cli"}},m={},y=[{value:"Browser context",id:"browser-context",level:2},{value:"Multiple contexts",id:"multiple-contexts",level:2},{value:"API reference",id:"api-reference",level:3}],b={toc:y};function g(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),u),a(t,s({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"#browser-context"}),"Browser context")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"#multiple-contexts"}),"Multiple contexts"))),(0,r.kt)("h2",p({},{id:"browser-context"}),"Browser context"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," is an isolated incognito-alike session within a browser instance. Browser contexts are fast and cheap to create. We recommend running each test scenario in its own new Browser context, so that the browser state is isolated between the tests. If you are using ",(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.19/intro"}),"Playwright Test"),", this happens out of the box for each test. Otherwise, you can create browser contexts manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),"await using var browser = playwright.Chromium.LaunchAsync();\nvar context = await browser.NewContextAsync();\nvar page = await context.NewPageAsync();\n")),(0,r.kt)("p",null,"Browser contexts can also be used to emulate multi-page scenarios involving mobile devices, permissions, locale and color scheme."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Webkit.LaunchAsync();\n        var options = new BrowserNewContextOptions(playwright.Devices["iPhone 11 Pro"])\n        {\n            Geolocation = new() { Longitude = 12.492507f, Latitude = 41.889938f },\n            Permissions = new[] { "geolocation" },\n            Locale = "de-DE"\n        };\n\n        await using var context = await browser.NewContextAsync(options);\n        var page = await browser.NewPageAsync();\n    }\n}\n')),(0,r.kt)("h2",p({},{id:"multiple-contexts"}),"Multiple contexts"),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"/dotnet/docs/1.19/browser-contexts"}),"Browser contexts")," are isolated environments on a single browser instance. Playwright can create multiple browser contexts within a single scenario. This is useful when you want to test for multi-user functionality, like chat."),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        // Create a Chromium browser instance\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        await using var userContext = await browser.NewContextAsync();\n        await using var adminContext = await browser.NewContextAsync();\n        // Create pages and interact with contexts independently.\n    }\n}\n")),(0,r.kt)("h3",p({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.19/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.19/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.19/api/class-browsercontext#browser-context-add-cookies"}),"BrowserContext.AddCookiesAsync(cookies)"))))}g.isMDXComponent=!0}}]);