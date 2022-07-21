"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2049],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},w=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),w=c(r),y=n,h=w["".concat(s,".").concat(y)]||w[y]||u[y]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=w;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}w.displayName="MDXCreateElement"},3461:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return y},default:function(){return m},frontMatter:function(){return w},metadata:function(){return h},toc:function(){return d}});var a=r(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e};const w={id:"class-playwright",title:"Playwright"},y=void 0,h={unversionedId:"api/class-playwright",id:"version-1.23/api/class-playwright",title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.23/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/dotnet/docs/1.23/api/class-playwright",tags:[],version:"1.23",frontMatter:{id:"class-playwright",title:"Playwright"},sidebar:"api",next:{title:"Browser",permalink:"/dotnet/docs/1.23/api/class-browser"}},g={},d=[{value:"Playwright.APIRequest",id:"playwright-request",level:2},{value:"Playwright.Chromium",id:"playwright-chromium",level:2},{value:"Playwright.Devices",id:"playwright-devices",level:2},{value:"Playwright.Firefox",id:"playwright-firefox",level:2},{value:"Playwright.Selectors",id:"playwright-selectors",level:2},{value:"Playwright.Webkit",id:"playwright-webkit",level:2}],f={toc:d};function m(e){var t,r=e,{components:n}=r,p=((e,t)=>{var r={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=u(u({},f),p),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n\n        await page.GotoAsync("https://www.microsoft.com");\n        // other actions...\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-playwright#playwright-request"}),"Playwright.APIRequest")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-playwright#playwright-chromium"}),"Playwright.Chromium")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-playwright#playwright-devices"}),"Playwright.Devices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-playwright#playwright-firefox"}),"Playwright.Firefox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-playwright#playwright-selectors"}),"Playwright.Selectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-playwright#playwright-webkit"}),"Playwright.Webkit"))),(0,a.kt)("h2",u({},{id:"playwright-request"}),"Playwright.APIRequest"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-apirequest",title:"APIRequest"}),"APIRequest"),">")),(0,a.kt)("p",null,"Exposes API that can be used for the Web API testing."),(0,a.kt)("h2",u({},{id:"playwright-chromium"}),"Playwright.Chromium"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.23/api/class-browser",title:"Browser"}),"Browser"),"."),(0,a.kt)("h2",u({},{id:"playwright-devices"}),"Playwright.Devices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.collections.generic.ireadonlydictionary-2",title:"IReadOnlyDictionary"}),"IReadOnlyDictionary"),"<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),", ","[BrowserNewContextOptions]",">",">")),(0,a.kt)("p",null,"Returns a dictionary of devices to be used with ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.23/api/class-browser#browser-new-context"}),"Browser.NewContextAsync(options)")," or ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.23/api/class-browser#browser-new-page"}),"Browser.NewPageAsync(options)"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass PlaywrightExample\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Webkit.LaunchAsync();\n        await using var context = await browser.NewContextAsync(playwright.Devices["iPhone 6"]);\n\n        var page = await context.NewPageAsync();\n        await page.GotoAsync("https://www.theverge.com");\n        // other actions...\n    }\n}\n')),(0,a.kt)("h2",u({},{id:"playwright-firefox"}),"Playwright.Firefox"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.23/api/class-browser",title:"Browser"}),"Browser"),"."),(0,a.kt)("h2",u({},{id:"playwright-selectors"}),"Playwright.Selectors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-selectors",title:"Selectors"}),"Selectors"),">")),(0,a.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.23/selectors"}),"Working with selectors")," for more information."),(0,a.kt)("h2",u({},{id:"playwright-webkit"}),"Playwright.Webkit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),(0,a.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.23/api/class-browser",title:"Browser"}),"Browser"),"."))}m.isMDXComponent=!0}}]);