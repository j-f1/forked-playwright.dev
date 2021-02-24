(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(270)),i=n(273),l=n(274),c={id:"debug",title:"Debugging tools"},s={unversionedId:"debug",id:"version-1.9.0/debug",isDocsHomePage:!1,title:"Debugging tools",description:"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation.",source:"@site/versioned_docs/version-1.9.0/debug.mdx",slug:"/debug",permalink:"/python/docs/debug",version:"1.9.0",sidebar:"version-1.9.0/docs",previous:{title:"Core concepts",permalink:"/python/docs/core-concepts"},next:{title:"Supported languages",permalink:"/python/docs/languages"}},u=[{value:"Playwright Inspector",id:"playwright-inspector",children:[]},{value:"Run in headful mode",id:"run-in-headful-mode",children:[]},{value:"Visual Studio Code debugger (Node.JS)",id:"visual-studio-code-debugger-nodejs",children:[{value:"Use launch config",id:"use-launch-config",children:[]},{value:"Use the new JavaScript debugging terminal",id:"use-the-new-javascript-debugging-terminal",children:[]}]},{value:"Browser Developer Tools",id:"browser-developer-tools",children:[{value:"API for Chromium",id:"api-for-chromium",children:[]}]},{value:"Run in Debug Mode",id:"run-in-debug-mode",children:[{value:"Defaults",id:"defaults",children:[]},{value:"Debugging Selectors",id:"debugging-selectors",children:[]},{value:"Evaluate Source Maps",id:"evaluate-source-maps",children:[]}]},{value:"Verbose API logs",id:"verbose-api-logs",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#playwright-inspector"}),"Playwright Inspector")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#run-in-headful-mode"}),"Run in headful mode")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#visual-studio-code-debugger-nodejs"}),"Visual Studio Code debugger (Node.JS)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#browser-developer-tools"}),"Browser Developer Tools")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#run-in-debug-mode"}),"Run in Debug Mode")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#verbose-api-logs"}),"Verbose API logs"))),Object(o.b)("h2",{id:"playwright-inspector"},"Playwright Inspector"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/inspector"}),"Playwright Inspector")," is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),Object(o.b)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),Object(o.b)("h2",{id:"run-in-headful-mode"},"Run in headful mode"),Object(o.b)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",Object(o.b)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",Object(o.b)("inlineCode",{parentName:"p"},"slow_mo")," option to slow down execution and follow along while debugging."),Object(o.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"chromium.launch(headless=False, slow_mo=100) # or firefox, webkit\n\n"))),Object(o.b)(l.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"await chromium.launch(headless=False, slow_mo=100) # or firefox, webkit\n\n")))),Object(o.b)("h2",{id:"visual-studio-code-debugger-nodejs"},"Visual Studio Code debugger (Node.JS)"),Object(o.b)("p",null,"The VS Code debugger can be used to pause and resume execution of Playwright scripts with breakpoints. The debugger can be configured in two ways."),Object(o.b)("h3",{id:"use-launch-config"},"Use launch config"),Object(o.b)("p",null,"Setup ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"}),Object(o.b)("inlineCode",{parentName:"a"},"launch.json")," configuration")," for your Node.js project. Once configured launch the scripts with F5 and use breakpoints."),Object(o.b)("h3",{id:"use-the-new-javascript-debugging-terminal"},"Use the new JavaScript debugging terminal"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Set a breakpoint in VS Code",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Use the ",Object(o.b)("inlineCode",{parentName:"li"},"debugger")," keyword or set a breakpoint in the VS Code UI"))),Object(o.b)("li",{parentName:"ol"},"Run your Node.js script from the terminal")),Object(o.b)("h2",{id:"browser-developer-tools"},"Browser Developer Tools"),Object(o.b)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script. Developer tools help to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Inspect the DOM tree and ",Object(o.b)("strong",{parentName:"li"},"find element selectors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/python/docs/verification#console-logs"}),"read logs via API"),")"),Object(o.b)("li",{parentName:"ul"},"Check ",Object(o.b)("strong",{parentName:"li"},"network activity")," and other developer tools features")),Object(o.b)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},Object(o.b)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"For WebKit"),": Note that launching WebKit Inspector during the execution will prevent the Playwright script from executing any further.")),Object(o.b)("h3",{id:"api-for-chromium"},"API for Chromium"),Object(o.b)("p",null,"In Chromium, you can also open developer tools through a launch option."),Object(o.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"sync",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"chromium.launch(devtools=True)\n"))),Object(o.b)(l.a,{value:"async",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"await chromium.launch(devtools=True)\n\n")))),Object(o.b)("h2",{id:"run-in-debug-mode"},"Run in Debug Mode"),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures the browser for debugging."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PWDEBUG=1 pytest -s\n\n# Windows\n$ set PWDEBUG=1\n$ pytest -s\n")),Object(o.b)("h3",{id:"defaults"},"Defaults"),Object(o.b)("p",null,"With PWDEBUG, the following defaults are configured for you:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Run in headful"),": With PWDEBUG, browsers always launch in headful mode"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Disables timeout"),": PWDEBUG sets timeout to 0 (= no timeout)")),Object(o.b)("h3",{id:"debugging-selectors"},"Debugging Selectors"),Object(o.b)("p",null,"PWDEBUG configures a ",Object(o.b)("inlineCode",{parentName:"p"},"playwright")," object in the browser to highlight ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/selectors"}),"Playwright selectors"),". This can be used to verify text or composite selectors. To use this:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),Object(o.b)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),Object(o.b)("li",{parentName:"ol"},"Use the ",Object(o.b)("inlineCode",{parentName:"li"},"playwright")," API",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects how ",Object(o.b)("inlineCode",{parentName:"li"},"page.$")," would see the page."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects how ",Object(o.b)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights.")))),Object(o.b)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},Object(o.b)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),Object(o.b)("h3",{id:"evaluate-source-maps"},"Evaluate Source Maps"),Object(o.b)("p",null,"PWDEBUG also enables source maps for ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/api/class-page#pageevaluateexpression-kwargs"}),"page.evaluate(expression, **kwargs)")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/python/docs/core-concepts#evaluation"}),"executions"),". This improves the debugging experience for JavaScript executions in the page context."),Object(o.b)("a",{href:"https://user-images.githubusercontent.com/284612/86857568-a6c63100-c073-11ea-82a4-bfd531a4ec87.png"},Object(o.b)("img",{src:"https://user-images.githubusercontent.com/284612/86857568-a6c63100-c073-11ea-82a4-bfd531a4ec87.png",width:"500",alt:"Highlight selectors"})),Object(o.b)("h2",{id:"verbose-api-logs"},"Verbose API logs"),Object(o.b)("p",null,"Playwright supports verbose logging with the ",Object(o.b)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ DEBUG=pw:api pytest -s\n\n# Windows\n$ set DEBUG=pw:api\n$ pytest -s\n")))}p.isMDXComponent=!0},269:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,g=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(g,l(l({ref:t},s),{},{components:n})):r.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";var a=n(0),r=n(272);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},272:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},273:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(271),i=n(269),l=n(55),c=n.n(l),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,p=e.groupId,d=e.className,g=Object(o.a)(),h=g.tabGroupChoices,m=g.setTabGroupChoices,f=Object(a.useState)(l),O=f[0],j=f[1],v=a.Children.toArray(e.children);if(null!=p){var y=h[p];null!=y&&y!==O&&b.some((function(e){return e.value===y}))&&j(y)}var w=function(e){j(e),null!=p&&m(p,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},274:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);