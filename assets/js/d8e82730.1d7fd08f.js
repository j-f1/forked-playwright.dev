"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[70388],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(r),h=a,d=g["".concat(s,".").concat(h)]||g[h]||u[h]||l;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},73811:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(67294),a=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},73824:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(67294),a=r(54939),l=r(5882),o=r(86010),i="tabItem_LplD",s=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))h.call(t,r)&&d(e,r,t[r]);return e};function b(e){var t,r,a;const{lazy:s,block:u,defaultValue:g,values:h,groupId:d,className:b}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=h?h:f.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),w=(0,l.lx)(v,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===g?g:null!=(a=null!=g?g:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(r=f[0])?void 0:r.props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:N}=(0,l.UB)(),[P,O]=(0,n.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=d){const e=k[d];null!=e&&e!==P&&v.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,r=j.indexOf(t),n=v[r].value;n!==P&&(x(t),O(n),null!=d&&N(d,n))},E=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break}case"ArrowLeft":{const r=j.indexOf(e.currentTarget)-1;t=j[r]||j[j.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},b)},v.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(a=m({role:"tab",tabIndex:P===e?0:-1,"aria-selected":P===e,key:e,ref:e=>j.push(e),onKeyDown:E,onFocus:T,onClick:T},r),l={className:(0,o.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":P===e})},p(a,c(l))),null!=t?t:e);var a,l}))),s?(0,n.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function f(e){const t=(0,a.Z)();return n.createElement(b,m({key:String(t)},e))}},39352:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return v}});var n=r(3905),a=r(73824),l=r(73811),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&g(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&g(e,r,t[r]);return e};const d={id:"inspector",title:"Inspector"},m=void 0,b={unversionedId:"inspector",id:"version-1.18/inspector",title:"Inspector",description:"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts.",source:"@site/versioned_docs/version-1.18/inspector.mdx",sourceDirName:".",slug:"/inspector",permalink:"/docs/1.18/inspector",tags:[],version:"1.18",frontMatter:{id:"inspector",title:"Inspector"},sidebar:"version-1.18/docs",previous:{title:"Getting started",permalink:"/docs/1.18/intro"},next:{title:"Trace Viewer",permalink:"/docs/1.18/trace-viewer"}},f={},v=[{value:"Open Playwright Inspector",id:"open-playwright-inspector",level:2},{value:"Stepping through the Playwright script",id:"stepping-through-the-playwright-script",level:2},{value:"Using Browser Developer Tools",id:"using-browser-developer-tools",level:2},{value:"Debugging Selectors",id:"debugging-selectors",level:2},{value:"playwright.$(selector)",id:"playwrightselector",level:4},{value:"playwright.$$(selector)",id:"playwrightselector-1",level:4},{value:"playwright.inspect(selector)",id:"playwrightinspectselector",level:4},{value:"playwright.locator(selector)",id:"playwrightlocatorselector",level:4},{value:"playwright.selector(element)",id:"playwrightselectorelement",level:4},{value:"Recording scripts",id:"recording-scripts",level:2}],w={toc:v};function y(e){var t,r=e,{components:o}=r,g=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},w),g),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright Inspector is a GUI tool that helps authoring and debugging Playwright scripts."),(0,n.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"#open-playwright-inspector"}),"Open Playwright Inspector")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"#stepping-through-the-playwright-script"}),"Stepping through the Playwright script")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"#using-browser-developer-tools"}),"Using Browser Developer Tools")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"#debugging-selectors"}),"Debugging Selectors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"#recording-scripts"}),"Recording scripts"))),(0,n.kt)("h2",h({},{id:"open-playwright-inspector"}),"Open Playwright Inspector"),(0,n.kt)("p",null,"There are several ways of opening Playwright Inspector:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set the ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. This configures Playwright for debugging and opens the inspector."),(0,n.kt)(a.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"PWDEBUG=1 npm run test\n"))),(0,n.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",h({parentName:"pre"},{className:"language-powershell"}),"$env:PWDEBUG=1\nnpm run test\n"))),(0,n.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",h({parentName:"pre"},{className:"language-batch"}),"set PWDEBUG=1\nnpm run test\n")))),(0,n.kt)("p",{parentName:"li"},"Additional useful defaults are configured when ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Browsers launch in the headed mode"),(0,n.kt)("li",{parentName:"ul"},"Default timeout is set to 0 (= no timeout)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Call ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/1.18/api/class-page#page-pause"}),"page.pause()")," method from your script when running in headed browser."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// Pause on the following line.\nawait page.pause();\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen")," commands in the Playwright ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/1.18/cli"}),"CLI"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npx playwright codegen wikipedia.org\n")))),(0,n.kt)("h2",h({},{id:"stepping-through-the-playwright-script"}),"Stepping through the Playwright script"),(0,n.kt)("p",null,"When ",(0,n.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," is set, Playwright Inspector window will be opened and the script will be paused on the first Playwright statement:"),(0,n.kt)("img",{width:"557",alt:"Paused on line",src:"https://user-images.githubusercontent.com/883973/108614337-71761580-73ae-11eb-9f61-3d29c52c9520.png"}),(0,n.kt)("p",null,"Now we know what action is about to be performed and we can look into the details on that action. For example, when stopped on an input action such as ",(0,n.kt)("inlineCode",{parentName:"p"},"click"),", the exact point Playwright is about to click is highlighted with the large red dot on the inspected page:"),(0,n.kt)("img",{width:"344",alt:"Red dot on inspected page",src:"https://user-images.githubusercontent.com/883973/108614363-b69a4780-73ae-11eb-8f5e-51f9c91ec9b4.png"}),(0,n.kt)("p",null,"By the time Playwright has paused on that click action, it has already performed actionability checks that can be found in the log:"),(0,n.kt)("img",{width:"712",alt:"Action log",src:"https://user-images.githubusercontent.com/883973/108614564-72a84200-73b0-11eb-9de2-828b28d78b36.png"}),(0,n.kt)("p",null,"If actionability can't be reached, it'll show action as pending:"),(0,n.kt)("img",{width:"712",alt:"Pending action",src:"https://user-images.githubusercontent.com/883973/108614840-e6e3e500-73b2-11eb-998f-0cf31b2aa9a2.png"}),(0,n.kt)("p",null,'You can step over each action using the "Step over" action or resume script without further pauses:'),(0,n.kt)("center",null,(0,n.kt)("img",{width:"98",alt:"Stepping toolbar",src:"https://user-images.githubusercontent.com/883973/108614389-f9f4b600-73ae-11eb-8df2-8d9ce9da5d5c.png"})),(0,n.kt)("h2",h({},{id:"using-browser-developer-tools"}),"Using Browser Developer Tools"),(0,n.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script, with or without Playwright inspector. Developer tools help to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Inspect the DOM tree"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/1.18/verification#console-logs"}),"read logs via API"),")"),(0,n.kt)("li",{parentName:"ul"},"Check ",(0,n.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,n.kt)("div",h({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",h({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",h({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",h({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",h({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},(0,n.kt)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),(0,n.kt)("h2",h({},{id:"debugging-selectors"}),"Debugging Selectors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click the Explore button to hover over elements in the screen and click them to automatically generate selectors for those elements."),(0,n.kt)("li",{parentName:"ul"},"To verify where selector points, paste it into the inspector input field:")),(0,n.kt)("img",{width:"602",alt:"Selectors toolbar",src:"https://user-images.githubusercontent.com/883973/108614696-ad5eaa00-73b1-11eb-81f5-9eebe62543a2.png"}),(0,n.kt)("p",null,"You can also use the following API inside the Developer Tools Console of any browser."),(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,n.kt)("h4",h({},{id:"playwrightselector"}),"playwright.$(selector)"),(0,n.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"> playwright.$('.auth-form >> text=Log in');\n\n<button>Log in</button>\n")),(0,n.kt)("h4",h({},{id:"playwrightselector-1"}),"playwright.$$(selector)"),(0,n.kt)("p",null,"Same as ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"> playwright.$$('li >> text=John')\n\n> [<li>, <li>, <li>, <li>]\n")),(0,n.kt)("h4",h({},{id:"playwrightinspectselector"}),"playwright.inspect(selector)"),(0,n.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"> playwright.inspect('text=Log in')\n")),(0,n.kt)("h4",h({},{id:"playwrightlocatorselector"}),"playwright.locator(selector)"),(0,n.kt)("p",null,"Query Playwright element using the actual Playwright query engine, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"> playwright.locator('.auth-form', { hasText: 'Log in' });\n\n> Locator ()\n>   - element: button\n>   - elements: [button]\n")),(0,n.kt)("h4",h({},{id:"playwrightselectorelement"}),"playwright.selector(element)"),(0,n.kt)("p",null,"Generates selector for the given element."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),'> playwright.selector($0)\n\n"div[id="glow-ingress-block"] >> text=/.*Hello.*/"\n')),(0,n.kt)("h2",h({},{id:"recording-scripts"}),"Recording scripts"),(0,n.kt)("p",null,"At any moment, clicking Record action enables ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/1.18/codegen"}),"codegen mode"),". Every action on the target page is turned into the generated script:"),(0,n.kt)("img",{width:"712",alt:"Recorded script",src:"https://user-images.githubusercontent.com/883973/108614897-85704600-73b3-11eb-8bcd-f2e129786c49.png"}),(0,n.kt)("p",null,"You can copy entire generated script or clear it using toolbar actions."))}y.isMDXComponent=!0}}]);