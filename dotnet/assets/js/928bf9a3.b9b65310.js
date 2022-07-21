"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4685],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3811:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function u({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&i(e,n,t[n]);if(l)for(var n of l(t))o.call(t,n)&&i(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},3824:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(7294),a=n(4939),l=n(9670),s=n(6010),o="tabItem_LplD",i=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(p)for(var n of p(t))d.call(t,n)&&f(e,n,t[n]);return e};function g(e){var t,n,a;const{lazy:i,block:p,defaultValue:m,values:d,groupId:f,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=d?d:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,l.lx)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:null!=(a=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(n=h[0])?void 0:n.props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,l.UB)(),[O,T]=(0,r.useState)(k),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,l.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=j.indexOf(t),r=v[n].value;r!==O&&(P(t),T(r),null!=f&&N(f,r))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},g)},v.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(a=b({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>j.push(e),onKeyDown:x,onFocus:E,onClick:E},n),l={className:(0,s.Z)("tabs__item",o,null==n?void 0:n.className,{"tabs__item--active":O===e})},u(a,c(l))),null!=t?t:e);var a,l}))),i?(0,r.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function h(e){const t=(0,a.Z)();return r.createElement(g,b({key:String(t)},e))}},801:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return v}});var r=n(3905),a=n(3824),l=n(3811),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};const f={id:"running-tests",title:"Running Tests"},b=void 0,g={unversionedId:"running-tests",id:"version-1.24/running-tests",title:"Running Tests",description:"You can run a single test, a set of tests or all tests. Tests can be run on different browsers. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal. If you prefer you can run your tests in headed mode by using the headless test run parameter.",source:"@site/versioned_docs/version-1.24/running-tests.mdx",sourceDirName:".",slug:"/running-tests",permalink:"/dotnet/docs/running-tests",tags:[],version:"1.24",frontMatter:{id:"running-tests",title:"Running Tests"},sidebar:"docs",previous:{title:"Writing Tests",permalink:"/dotnet/docs/writing-tests"},next:{title:"Debugging Tests",permalink:"/dotnet/docs/debug"}},h={},v=[{value:"What&#39;s Next",id:"whats-next",level:2}],y={toc:v};function k(e){var t,n=e,{components:s}=n,m=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},y),m),o(t,i({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"You can run a single test, a set of tests or all tests. Tests can be run on different browsers. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal. If you prefer you can run your tests in headed mode by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"headless")," test run parameter."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Running all tests"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"dotnet test\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Running a single test file"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'dotnet test --filter "MyClassName"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run a set of test files"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'dotnet test --filter "MyClassName1|MyClassName2"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the test with the title"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'dotnet test --filter "Name~TestMethod1"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Running Tests on specific browsers"),(0,r.kt)(a.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"BROWSER=webkit dotnet test\n"))),(0,r.kt)(l.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-powershell"}),'$env:BROWSER="webkit"\ndotnet test\n'))),(0,r.kt)(l.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-batch"}),"set BROWSER=webkit\ndotnet test\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Running Tests on multiple browsers"),(0,r.kt)("p",{parentName:"li"},"To run your test on multiple browsers or configurations you need to invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet test")," command multiple times. There you can then either specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"BROWSER")," environment variable (like the previous) or pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"browser")," via the runsettings file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"dotnet test --settings:chromium.runsettings\ndotnet test --settings:firefox.runsettings\ndotnet test --settings:webkit.runsettings\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",d({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8"?>\n<RunSettings>\n  <TestRunParameters>\n    <Parameter name="browser" value="chromium" />\n    <Parameter name="headless" value="false" />\n  </TestRunParameters>\n</RunSettings>\n')))),(0,r.kt)("p",null,"For more information see ",(0,r.kt)("a",d({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/core/testing/selective-unit-tests?pivots=mstest"}),"selective unit tests")," in the Microsoft docs."),(0,r.kt)("h2",d({},{id:"whats-next"}),"What's Next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/debug"}),"Debug tests with the Playwright Debugger")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/codegen"}),"Generate tests with Codegen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"/dotnet/docs/trace-viewer"}),"See a trace of your tests"))))}k.isMDXComponent=!0}}]);