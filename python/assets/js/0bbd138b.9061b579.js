"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4117],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=l,g=h["".concat(i,".").concat(d)]||h[d]||c[d]||r;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),l=Object.defineProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))s.call(t,a)&&i(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(7294),l=a(4939),r=a(9670),o=a(6010),s="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&g(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&g(e,a,t[a]);return e};function b(e){var t,a,l;const{lazy:i,block:c,defaultValue:h,values:d,groupId:g,className:b}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),k=(0,r.lx)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===h?h:null!=(l=null!=h?h:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?l:null==(a=y[0])?void 0:a.props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,r.UB)(),[T,P]=(0,n.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,r.o5)();if(null!=g){const e=w[g];null!=e&&e!==T&&v.some((t=>t.value===e))&&P(e)}const D=e=>{const t=e.currentTarget,a=x.indexOf(t),n=v[a].value;n!==T&&(O(t),P(n),null!=g&&N(g,n))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},v.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=m({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>x.push(e),onKeyDown:I,onFocus:D,onClick:D},a),r={className:(0,o.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":T===e})},p(l,u(r))),null!=t?t:e);var l,r}))),i?(0,n.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function y(e){const t=(0,l.Z)();return n.createElement(b,m({key:String(t)},e))}},270:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return v}});var n=a(3905),l=a(3824),r=a(3811),o=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&h(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&h(e,a,t[a]);return e};const g={id:"debug",title:"Debugging Tests"},m=void 0,b={unversionedId:"debug",id:"version-1.24/debug",title:"Debugging Tests",description:"The Playwright inspector is a great tool to help with debugging. It opens up a browser window highlighting the selectors as you step through each line of the test. You can also use the explore button to find other available selectors which you can then copy into your test file and rerun your tests to see if it passes.",source:"@site/versioned_docs/version-1.24/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/python/docs/debug",tags:[],version:"1.24",frontMatter:{id:"debug",title:"Debugging Tests"},sidebar:"docs",previous:{title:"Running Tests",permalink:"/python/docs/running-tests"},next:{title:"Test Generator",permalink:"/python/docs/codegen"}},y={},v=[{value:"Playwright Inspector",id:"playwright-inspector",level:2},{value:"Using PWDEBUG",id:"using-pwdebug",level:3},{value:"Selectors in Developer Tools Console",id:"selectors-in-developer-tools-console",level:4},{value:"Using page.pause",id:"using-pagepause",level:3},{value:"Stepping through the Playwright script",id:"stepping-through-the-playwright-script",level:2},{value:"Browser Developer Tools",id:"browser-developer-tools",level:2},{value:"Debugging Selectors",id:"debugging-selectors",level:2},{value:"playwright.$(selector)",id:"playwrightselector",level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",level:4},{value:"Run Tests in headed mode",id:"run-tests-in-headed-mode",level:2},{value:"Verbose API logs",id:"verbose-api-logs",level:2},{value:"What&#39;s Next",id:"whats-next",level:2}],k={toc:v};function f(e){var t,a=e,{components:o}=a,h=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},k),h),s(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The Playwright inspector is a great tool to help with debugging. It opens up a browser window highlighting the selectors as you step through each line of the test. You can also use the explore button to find other available ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/selectors"}),"selectors")," which you can then copy into your test file and rerun your tests to see if it passes."),(0,n.kt)("h2",d({},{id:"playwright-inspector"}),"Playwright Inspector"),(0,n.kt)("p",null,"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),(0,n.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,n.kt)("p",null,"There are several ways of opening Playwright Inspector:"),(0,n.kt)("h3",d({},{id:"using-pwdebug"}),"Using PWDEBUG"),(0,n.kt)("p",null,"Set the ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures Playwright for debugging and opens the inspector."),(0,n.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"PWDEBUG=1 pytest -s\n"))),(0,n.kt)(r.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),"$env:PWDEBUG=1\npytest -s\n"))),(0,n.kt)(r.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PWDEBUG=1\npytest -s\n")))),(0,n.kt)("p",null,"Additional useful defaults are configured when ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Browsers launch in the headed mode"),(0,n.kt)("li",{parentName:"ul"},"Default timeout is set to 0 (= no timeout)")),(0,n.kt)("p",null,"Using ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console")," will configure the browser for debugging in Developer tools console:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Runs headed"),": Browsers always launch in headed mode"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Disables timeout"),": Sets default timeout to 0 (= no timeout)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Console helper"),": Configures a ",(0,n.kt)("inlineCode",{parentName:"li"},"playwright")," object in the browser to generate and highlight ",(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/selectors"}),"Playwright selectors"),". This can be used to verify text or composite selectors.")),(0,n.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"PWDEBUG=console pytest -s\n"))),(0,n.kt)(r.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:PWDEBUG="console"\npytest -s\n'))),(0,n.kt)(r.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set PWDEBUG=console\npytest -s\n")))),(0,n.kt)("h4",d({},{id:"selectors-in-developer-tools-console"}),"Selectors in Developer Tools Console"),(0,n.kt)("p",null,"When running in Debug Mode with ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console"),", a ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright")," object is available in Developer tools console."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run with ",(0,n.kt)("inlineCode",{parentName:"li"},"PWDEBUG=console")),(0,n.kt)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),(0,n.kt)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),(0,n.kt)("li",{parentName:"ol"},"Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"playwright")," API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects how ",(0,n.kt)("inlineCode",{parentName:"li"},"page.$")," would see the page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects how ",(0,n.kt)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"playwright.locator(selector)"),": Highlight the first occurrence of the locator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"playwright.selector(element)"),": Generate a selector that points to the element.")))),(0,n.kt)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),(0,n.kt)("h3",d({},{id:"using-pagepause"}),"Using page.pause"),(0,n.kt)("p",null,"Call ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-page#page-pause"}),"page.pause()")," method from your script when running in headed browser."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Pause on the following line.\npage.pause()\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Pause on the following line.\nawait page.pause()\n")))),"- Use `open` or `codegen` commands in the Playwright [CLI](/python/docs/cli):",(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"playwright codegen wikipedia.org\n")),(0,n.kt)("h2",d({},{id:"stepping-through-the-playwright-script"}),"Stepping through the Playwright script"),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set, Playwright Inspector window will be opened and the script will be paused on the first Playwright statement:"),(0,n.kt)("img",{width:"557",alt:"Paused on line",src:"https://user-images.githubusercontent.com/883973/108614337-71761580-73ae-11eb-9f61-3d29c52c9520.png"}),(0,n.kt)("p",null,"Now we know what action is about to be performed and we can look into the details on that action. For example, when stopped on an input action such as ",(0,n.kt)("inlineCode",{parentName:"p"},"click"),", the exact point Playwright is about to click is highlighted with the large red dot on the inspected page:"),(0,n.kt)("img",{width:"344",alt:"Red dot on inspected page",src:"https://user-images.githubusercontent.com/883973/108614363-b69a4780-73ae-11eb-8f5e-51f9c91ec9b4.png"}),(0,n.kt)("p",null,"By the time Playwright has paused on that click action, it has already performed actionability checks that can be found in the log:"),(0,n.kt)("img",{width:"712",alt:"Action log",src:"https://user-images.githubusercontent.com/883973/108614564-72a84200-73b0-11eb-9de2-828b28d78b36.png"}),(0,n.kt)("p",null,"If actionability can't be reached, it'll show action as pending:"),(0,n.kt)("img",{width:"712",alt:"Pending action",src:"https://user-images.githubusercontent.com/883973/108614840-e6e3e500-73b2-11eb-998f-0cf31b2aa9a2.png"}),(0,n.kt)("p",null,'You can step over each action using the "Step over" action (keyboard shortcut: ',(0,n.kt)("inlineCode",{parentName:"p"},"F10"),") or resume script without further pauses (",(0,n.kt)("inlineCode",{parentName:"p"},"F8"),"):"),(0,n.kt)("center",null,(0,n.kt)("img",{width:"98",alt:"Stepping toolbar",src:"https://user-images.githubusercontent.com/883973/108614389-f9f4b600-73ae-11eb-8df2-8d9ce9da5d5c.png"})),(0,n.kt)("h2",d({},{id:"browser-developer-tools"}),"Browser Developer Tools"),(0,n.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script in headed mode. Developer tools help to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Inspect the DOM tree and ",(0,n.kt)("strong",{parentName:"li"},"find element selectors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-event-console"}),"read logs via API"),")"),(0,n.kt)("li",{parentName:"ul"},"Check ",(0,n.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,n.kt)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),(0,n.kt)("p",null,"Using a ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-page#page-pause"}),"page.pause()")," method is an easy way to pause the Playwright script execution and inspect the page in Developer tools. It will also open ",(0,n.kt)("a",d({parentName:"p"},{href:"/python/docs/inspector"}),"Playwright Inspector")," to help with debugging."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Chromium"),": you can also open developer tools through a launch option."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"chromium.launch(devtools=True)\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await chromium.launch(devtools=True)\n")))),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),(0,n.kt)("h2",d({},{id:"debugging-selectors"}),"Debugging Selectors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click the Explore button to hover over elements in the screen and click them to automatically generate selectors for those elements."),(0,n.kt)("li",{parentName:"ul"},"To verify where selector points, paste it into the inspector input field:")),(0,n.kt)("img",{width:"602",alt:"Selectors toolbar",src:"https://user-images.githubusercontent.com/883973/108614696-ad5eaa00-73b1-11eb-81f5-9eebe62543a2.png"}),(0,n.kt)("p",null,"You can also use the following API inside the Developer Tools Console of any browser."),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,n.kt)("h4",d({},{id:"playwrightselector"}),"playwright.$(selector)"),(0,n.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,n.kt)("h4",d({},{id:"playwrightselector-1"}),"playwright.$$(selector)"),(0,n.kt)("p",null,"Same as ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,n.kt)("h4",d({},{id:"playwrightinspectselector"}),"playwright.inspect(selector)"),(0,n.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,n.kt)("h4",d({},{id:"playwrightlocatorselector"}),"playwright.locator(selector)"),(0,n.kt)("p",null,"Query Playwright element using the actual Playwright query engine, for example:"),(0,n.kt)("h4",d({},{id:"playwrightselectorelement"}),"playwright.selector(element)"),(0,n.kt)("p",null,"Generates selector for the given element."),(0,n.kt)("h2",d({},{id:"run-tests-in-headed-mode"}),"Run Tests in headed mode"),(0,n.kt)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",(0,n.kt)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",(0,n.kt)("inlineCode",{parentName:"p"},"slow_mo")," option to slow down execution and follow along while debugging."),(0,n.kt)(l.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"chromium.launch(headless=False, slow_mo=100) # or firefox, webkit\n\n"))),(0,n.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await chromium.launch(headless=False, slow_mo=100) # or firefox, webkit\n\n")))),(0,n.kt)("h2",d({},{id:"verbose-api-logs"}),"Verbose API logs"),(0,n.kt)("p",null,"Playwright supports verbose logging with the ",(0,n.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),(0,n.kt)(l.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"DEBUG=pw:api pytest -s\n"))),(0,n.kt)(r.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:DEBUG="pw:api"\npytest -s\n'))),(0,n.kt)(r.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set DEBUG=pw:api\npytest -s\n")))),(0,n.kt)("h2",d({},{id:"whats-next"}),"What's Next"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/codegen"}),"Generate tests with Codegen")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/python/docs/trace-viewer"}),"See a trace of your tests"))))}f.isMDXComponent=!0}}]);