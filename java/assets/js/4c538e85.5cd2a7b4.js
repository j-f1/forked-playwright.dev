"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3729],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(a),d=r,g=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},536:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return m}});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,h=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&p(t,a,e[a]);if(s)for(var a of s(e))l.call(e,a)&&p(t,a,e[a]);return t};const u={id:"class-tracing",title:"Tracing"},d=void 0,g={unversionedId:"api/class-tracing",id:"version-1.19/api/class-tracing",title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened in Trace Viewer after Playwright script runs.",source:"@site/versioned_docs/version-1.19/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/java/docs/1.19/api/class-tracing",tags:[],version:"1.19",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.19/api",previous:{title:"Touchscreen",permalink:"/java/docs/1.19/api/class-touchscreen"},next:{title:"Video",permalink:"/java/docs/1.19/api/class-video"}},k={},m=[{value:"Tracing.start(options)",id:"tracing-start",level:2},{value:"Tracing.startChunk(options)",id:"tracing-start-chunk",level:2},{value:"Tracing.stop(options)",id:"tracing-stop",level:2},{value:"Tracing.stopChunk(options)",id:"tracing-stop-chunk",level:2}],f={toc:m};function v(t){var e,a=t,{components:r}=a,p=((t,e)=>{var a={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&s)for(var n of s(t))e.indexOf(n)<0&&l.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=h(h({},f),p),i(e,o({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened in ",(0,n.kt)("a",h({parentName:"p"},{href:"/java/docs/1.19/trace-viewer"}),"Trace Viewer")," after Playwright script runs."),(0,n.kt)("p",null,"Start recording a trace before performing actions. At the end, stop tracing and save it to a file."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-java"}),'Browser browser = chromium.launch();\nBrowserContext context = browser.newContext();\ncontext.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/java/docs/1.19/api/class-tracing#tracing-start"}),"Tracing.start([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/java/docs/1.19/api/class-tracing#tracing-start-chunk"}),"Tracing.startChunk([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/java/docs/1.19/api/class-tracing#tracing-stop"}),"Tracing.stop([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/java/docs/1.19/api/class-tracing#tracing-stop-chunk"}),"Tracing.stopChunk([options])"))),(0,n.kt)("h2",h({},{id:"tracing-start"}),"Tracing.start(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"Tracing.StartOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setName"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,n.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,n.kt)("a",h({parentName:"li"},{href:"/java/docs/1.19/api/class-browsertype#browser-type-launch"}),"BrowserType.launch([options])"),".",(0,n.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setScreenshots"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,n.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setSnapshots"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">"," If this option is true tracing will",(0,n.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"capture DOM snapshot on every action"),(0,n.kt)("li",{parentName:"ul"},"record network activity"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setSources"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-sources"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"}),"boolean"),">"," Whether to include source files for trace actions. List of the directories with source code for the application must be provided via ",(0,n.kt)("inlineCode",{parentName:"li"},"PLAYWRIGHT_JAVA_SRC")," environment variable.",(0,n.kt)("a",{href:"#tracing-start-option-sources",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setTitle"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-title"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Trace name to be shown in the Trace Viewer.",(0,n.kt)("a",{href:"#tracing-start-option-title",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Start tracing."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-java"}),'context.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\ncontext.tracing().stop(new Tracing.StopOptions()\n  .setPath(Paths.get("trace.zip")));\n')),(0,n.kt)("h2",h({},{id:"tracing-start-chunk"}),"Tracing.startChunk(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"Tracing.StartChunkOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setTitle"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-option-title"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Trace name to be shown in the Trace Viewer.",(0,n.kt)("a",{href:"#tracing-start-chunk-option-title",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-chunk-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#tracing-start-chunk-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Start a new trace chunk. If you'd like to record multiple traces on the same ",(0,n.kt)("a",h({parentName:"p"},{href:"/java/docs/1.19/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),", use ",(0,n.kt)("a",h({parentName:"p"},{href:"/java/docs/1.19/api/class-tracing#tracing-start"}),"Tracing.start([options])")," once, and then create multiple trace chunks with ",(0,n.kt)("a",h({parentName:"p"},{href:"/java/docs/1.19/api/class-tracing#tracing-start-chunk"}),"Tracing.startChunk([options])")," and ",(0,n.kt)("a",h({parentName:"p"},{href:"/java/docs/1.19/api/class-tracing#tracing-stop-chunk"}),"Tracing.stopChunk([options])"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-java"}),'context.tracing().start(new Tracing.StartOptions()\n  .setScreenshots(true)\n  .setSnapshots(true));\nPage page = context.newPage();\npage.navigate("https://playwright.dev");\n\ncontext.tracing().startChunk();\npage.click("text=Get Started");\n// Everything between startChunk and stopChunk will be recorded in the trace.\ncontext.tracing().stopChunk(new Tracing.StopChunkOptions()\n  .setPath(Paths.get("trace1.zip")));\n\ncontext.tracing().startChunk();\npage.navigate("http://example.com");\n// Save a second trace file with different actions.\ncontext.tracing().stopChunk(new Tracing.StopChunkOptions()\n  .setPath(Paths.get("trace2.zip")));\n')),(0,n.kt)("h2",h({},{id:"tracing-stop"}),"Tracing.stop(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"Tracing.StopOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setPath"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),">"," Export trace into the file with the given path.",(0,n.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Stop tracing."),(0,n.kt)("h2",h({},{id:"tracing-stop-chunk"}),"Tracing.stopChunk(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"Tracing.StopChunkOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setPath"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-option-path"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),">"," Export trace collected since the last ",(0,n.kt)("a",h({parentName:"li"},{href:"/java/docs/1.19/api/class-tracing#tracing-start-chunk"}),"Tracing.startChunk([options])")," call into the file with the given path.",(0,n.kt)("a",{href:"#tracing-stop-chunk-option-path",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-chunk-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#tracing-stop-chunk-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Stop the trace chunk. See ",(0,n.kt)("a",h({parentName:"p"},{href:"/java/docs/1.19/api/class-tracing#tracing-start-chunk"}),"Tracing.startChunk([options])")," for more details about multiple trace chunks."))}v.isMDXComponent=!0}}]);