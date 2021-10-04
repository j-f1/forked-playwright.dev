"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1900],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),h=l(n),d=r,g=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return u}});var a=n(7294),r=n(9443);var i=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(6010),c="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,p=39;var u=function(t){var e=t.lazy,n=t.block,r=t.defaultValue,u=t.values,h=t.groupId,d=t.className,g=i(),m=g.tabGroupChoices,k=g.setTabGroupChoices,f=(0,a.useState)(r),y=f[0],v=f[1],w=a.Children.toArray(t.children),b=[];if(null!=h){var N=m[h];null!=N&&N!==y&&u.some((function(t){return t.value===N}))&&v(N)}var S=function(t){var e=t.currentTarget,n=b.indexOf(e),a=u[n].value;v(a),null!=h&&(k(h,a),setTimeout((function(){var t,n,a,r,i,o,c,l;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,i=t.right,o=window,c=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&r<=c&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(s),setTimeout((function(){return e.classList.remove(s)}),2e3))}),150))},C=function(t){var e,n;switch(t.keyCode){case p:var a=b.indexOf(t.target)+1;n=b[a]||b[0];break;case l:var r=b.indexOf(t.target)-1;n=b[r]||b[b.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},u.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":y===e}),key:e,ref:function(t){return b.push(t)},onKeyDown:C,onFocus:S,onClick:S},n)}))),e?(0,a.cloneElement)(w.filter((function(t){return t.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==y})}))))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},2238:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=(n(5064),n(8215),{id:"class-tracing",title:"Tracing"}),c=void 0,s={unversionedId:"api/class-tracing",id:"version-1.15/api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/versioned_docs/version-1.15/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/dotnet/docs/api/class-tracing",version:"1.15",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.15/api",previous:{title:"Touchscreen",permalink:"/dotnet/docs/api/class-touchscreen"},next:{title:"Video",permalink:"/dotnet/docs/api/class-video"}},l=[{value:"Tracing.StartAsync(options)",id:"tracing-start",children:[]},{value:"Tracing.StartChunkAsync()",id:"tracing-start-chunk",children:[]},{value:"Tracing.StopAsync(options)",id:"tracing-stop",children:[]},{value:"Tracing.StopChunkAsync(options)",id:"tracing-stop-chunk",children:[]}],p={toc:l};function u(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/trace-viewer"},"Trace Viewer")," after Playwright script runs."),(0,i.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\nawait context.Tracing.StopAsync(new TracingStopOptions\n{\n  Path: "trace.zip"\n});\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-start"},"Tracing.StartAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-start-chunk"},"Tracing.StartChunkAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-stop"},"Tracing.StopAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-stop-chunk"},"Tracing.StopChunkAsync(options)"))),(0,i.kt)("h2",{id:"tracing-start"},"Tracing.StartAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"TracingStartOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsertype#browser-type-launch"},"BrowserType.LaunchAsync(options)"),".",(0,i.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Screenshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),"?",">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,i.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Snapshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.boolean",title:"bool"},"bool"),"?",">"," Whether to capture DOM snapshot on every action.",(0,i.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,i.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start tracing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\nawait context.Tracing.StopAsync(new TracingStopOptions\n{\n  Path: "trace.zip"\n});\n')),(0,i.kt)("h2",{id:"tracing-start-chunk"},"Tracing.StartChunkAsync()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,i.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", use ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-tracing#tracing-start"},"Tracing.StartAsync(options)")," once, and then create multiple trace chunks with ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-tracing#tracing-start-chunk"},"Tracing.StartChunkAsync()")," and ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-tracing#tracing-stop-chunk"},"Tracing.StopChunkAsync(options)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\n\nawait context.Tracing.StartChunkAsync();\nawait page.ClickAsync("text=Get Started");\n// Everything between StartChunkAsync and StopChunkAsync will be recorded in the trace.\nawait context.Tracing.StopChunkAsync(new TracingStopChunkOptions\n{\n  Path: "trace1.zip"\n});\n\nawait context.Tracing.StartChunkAsync();\nawait page.GotoAsync("http://example.com");\n// Save a second trace file with different actions.\nawait context.Tracing.StopChunkAsync(new TracingStopChunkOptions\n{\n  Path: "trace2.zip"\n});\n')),(0,i.kt)("h2",{id:"tracing-stop"},"Tracing.StopAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"TracingStopOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," Export trace into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,i.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop tracing."),(0,i.kt)("h2",{id:"tracing-stop-chunk"},"Tracing.StopChunkAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"TracingStopChunkOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," Export trace collected since the last ",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-start-chunk"},"Tracing.StartChunkAsync()")," call into the file with the given path.",(0,i.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,i.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop the trace chunk. See ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-tracing#tracing-start-chunk"},"Tracing.StartChunkAsync()")," for more details about multiple trace chunks."))}u.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);