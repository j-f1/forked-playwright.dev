"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[82358],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,f=d["".concat(i,".").concat(h)]||d[h]||c[h]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73811:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(67294),a=Object.defineProperty,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function p({children:e,hidden:t,className:r}){return n.createElement("div",((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&i(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},73824:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(67294),a=r(54939),s=r(39670),o=r(86010),l="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&f(e,r,t[r]);if(c)for(var r of c(t))h.call(t,r)&&f(e,r,t[r]);return e};function m(e){var t,r,a;const{lazy:i,block:c,defaultValue:d,values:h,groupId:f,className:m}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=h?h:b.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),v=(0,s.lx)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:null!=(a=null!=d?d:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(r=b[0])?void 0:r.props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,s.UB)(),[T,w]=(0,n.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==T&&g.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,r=S.indexOf(t),n=g[r].value;n!==T&&(O(t),w(n),null!=f&&x(f,n))},C=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=S.indexOf(e.currentTarget)+1;t=S[r]||S[0];break}case"ArrowLeft":{const r=S.indexOf(e.currentTarget)-1;t=S[r]||S[S.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},m)},g.map((({value:e,label:t,attributes:r})=>{return n.createElement("li",(a=k({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>S.push(e),onKeyDown:C,onFocus:j,onClick:j},r),s={className:(0,o.Z)("tabs__item",l,null==r?void 0:r.className,{"tabs__item--active":T===e})},p(a,u(s))),null!=t?t:e);var a,s}))),i?(0,n.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function b(e){const t=(0,a.Z)();return n.createElement(m,k({key:String(t)},e))}},89203:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return g}});var n=r(3905),a=r(73824),s=r(73811),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&d(e,r,t[r]);return e};const f={id:"class-reporter",title:"Reporter"},k=void 0,m={unversionedId:"api/class-reporter",id:"api/class-reporter",title:"Reporter",description:"Test runner notifies the reporter about various events during test execution. All methods of the reporter are optional.",source:"@site/docs/api/class-reporter.mdx",sourceDirName:"api",slug:"/api/class-reporter",permalink:"/docs/next/api/class-reporter",tags:[],version:"current",frontMatter:{id:"class-reporter",title:"Reporter"},sidebar:"api",previous:{title:"Location",permalink:"/docs/next/api/class-location"},next:{title:"Suite",permalink:"/docs/next/api/class-suite"}},b={},g=[{value:"reporter.onBegin(config, suite)",id:"reporter-on-begin",level:2},{value:"reporter.onEnd(result)",id:"reporter-on-end",level:2},{value:"reporter.onError(error)",id:"reporter-on-error",level:2},{value:"reporter.onStdErr(chunk, test, result)",id:"reporter-on-std-err",level:2},{value:"reporter.onStdOut(chunk, test, result)",id:"reporter-on-std-out",level:2},{value:"reporter.onStepBegin(test, result, step)",id:"reporter-on-step-begin",level:2},{value:"reporter.onStepEnd(test, result, step)",id:"reporter-on-step-end",level:2},{value:"reporter.onTestBegin(test, result)",id:"reporter-on-test-begin",level:2},{value:"reporter.onTestEnd(test, result)",id:"reporter-on-test-end",level:2},{value:"reporter.printsToStdio()",id:"reporter-prints-to-stdio",level:2}],v={toc:g};function N(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},v),d),l(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Test runner notifies the reporter about various events during test execution. All methods of the reporter are optional."),(0,n.kt)("p",null,"You can create a custom reporter by implementing a class with some of the reporter methods. Make sure to export this class as default."),(0,n.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"// my-awesome-reporter.ts\nimport { Reporter } from '@playwright/test/reporter';\n\nclass MyReporter implements Reporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\nexport default MyReporter;\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// my-awesome-reporter.js\n// @ts-check\n\n/** @implements {import('@playwright/test/reporter').Reporter} */\nclass MyReporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\n\nmodule.exports = MyReporter;\n")))),(0,n.kt)("p",null,"Now use this reporter with ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-reporter"}),"testConfig.reporter"),". Learn more about ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/test-reporters"}),"using reporters"),"."),(0,n.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: './my-awesome-reporter.ts',\n};\nexport default config;\n"))),(0,n.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: './my-awesome-reporter.js',\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("p",null,"Here is a typical order of reporter calls:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-begin"}),"reporter.onBegin(config, suite)")," is called once with a root suite that contains all other suites and tests. Learn more about ",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-suite",title:"Suite"}),"suites hierarchy"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-test-begin"}),"reporter.onTestBegin(test, result)")," is called for each test run. It is given a ",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testcase",title:"TestCase"}),"TestCase")," that is executed, and a ",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testresult",title:"TestResult"}),"TestResult")," that is almost empty. Test result will be populated while the test runs (for example, with steps and stdio) and will get final ",(0,n.kt)("inlineCode",{parentName:"li"},"status")," once the test finishes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-step-begin"}),"reporter.onStepBegin(test, result, step)")," and ",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-step-end"}),"reporter.onStepEnd(test, result, step)")," are called for each executed step inside the test. When steps are executed, test run has not finished yet."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-test-end"}),"reporter.onTestEnd(test, result)")," is called when test run has finished. By this time, ",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testresult",title:"TestResult"}),"TestResult")," is complete and you can use ",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testresult#test-result-status"}),"testResult.status"),", ",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testresult#test-result-error"}),"testResult.error")," and more."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-end"}),"reporter.onEnd(result)")," is called once after all tests that should run had finished.")),(0,n.kt)("p",null,"Additionally, ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/api/class-reporter#reporter-on-std-out"}),"reporter.onStdOut(chunk, test, result)")," and ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/api/class-reporter#reporter-on-std-err"}),"reporter.onStdErr(chunk, test, result)")," are called when standard output is produced in the worker process, possibly during a test execution, and ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/api/class-reporter#reporter-on-error"}),"reporter.onError(error)")," is called when something went wrong outside of the test execution."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-begin"}),"reporter.onBegin(config, suite)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-end"}),"reporter.onEnd(result)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-error"}),"reporter.onError(error)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-std-err"}),"reporter.onStdErr(chunk, test, result)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-std-out"}),"reporter.onStdOut(chunk, test, result)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-step-begin"}),"reporter.onStepBegin(test, result, step)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-step-end"}),"reporter.onStepEnd(test, result, step)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-test-begin"}),"reporter.onTestBegin(test, result)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-on-test-end"}),"reporter.onTestEnd(test, result)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-reporter#reporter-prints-to-stdio"}),"reporter.printsToStdio()"))),(0,n.kt)("h2",h({},{id:"reporter-on-begin"}),"reporter.onBegin(config, suite)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"config"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-begin-option-config"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testconfig",title:"TestConfig"}),"TestConfig"),">"," Resolved configuration.",(0,n.kt)("a",{href:"#reporter-on-begin-option-config",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"suite"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-begin-option-suite"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-suite",title:"Suite"}),"Suite"),">"," The root suite that contains all projects, files and test cases.",(0,n.kt)("a",{href:"#reporter-on-begin-option-suite",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-begin-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#reporter-on-begin-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Called once before running tests. All tests have been already discovered and put into a hierarchy of ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/next/api/class-suite",title:"Suite"}),"Suite"),"s."),(0,n.kt)("h2",h({},{id:"reporter-on-end"}),"reporter.onEnd(result)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"result"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-end-option-result"})," ","<",(0,n.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">"," Result of the full test run.",(0,n.kt)("a",{href:"#reporter-on-end-option-result",class:"list-anchor"},"#")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"status")," ","<",'"passed"|"failed"|"timedout"|"interrupted"',">")),(0,n.kt)("br",null),"* `'passed'` - Everything went as expected. * `'failed'` - Any test has failed. * `'timedout'` - The [testConfig.globalTimeout](/docs/next/api/class-testconfig#test-config-global-timeout) has been reached. * `'interrupted'` - Interrupted by the user."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-end-return"})," ","<",(0,n.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,n.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,n.kt)("a",{href:"#reporter-on-end-return",class:"list-anchor"},"#")))),(0,n.kt)("p",null,"Called after all tests has been run, or testing has been interrupted. Note that this method may return a ",(0,n.kt)("a",h({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise")," and Playwright Test will await it."),(0,n.kt)("h2",h({},{id:"reporter-on-error"}),"reporter.onError(error)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-error-option-error"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testerror",title:"TestError"}),"TestError"),">"," The error.",(0,n.kt)("a",{href:"#reporter-on-error-option-error",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-error-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#reporter-on-error-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Called on some global error, for example unhandled exception in the worker process."),(0,n.kt)("h2",h({},{id:"reporter-on-std-err"}),"reporter.onStdErr(chunk, test, result)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chunk"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-option-chunk"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">"," Output chunk.",(0,n.kt)("a",{href:"#reporter-on-std-err-option-chunk",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-option-test"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testcase",title:"TestCase"}),"TestCase"),">"," Test that was running. Note that output may happen when no test is running, in which case this will be ",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),".",(0,n.kt)("a",{href:"#reporter-on-std-err-option-test",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-option-result"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testresult",title:"TestResult"}),"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,n.kt)("a",{href:"#reporter-on-std-err-option-result",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-err-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#reporter-on-std-err-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Called when something has been written to the standard error in the worker process."),(0,n.kt)("h2",h({},{id:"reporter-on-std-out"}),"reporter.onStdOut(chunk, test, result)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chunk"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-option-chunk"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">"," Output chunk.",(0,n.kt)("a",{href:"#reporter-on-std-out-option-chunk",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-option-test"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testcase",title:"TestCase"}),"TestCase"),">"," Test that was running. Note that output may happen when no test is running, in which case this will be ",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),".",(0,n.kt)("a",{href:"#reporter-on-std-out-option-test",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-option-result"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),"|",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testresult",title:"TestResult"}),"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,n.kt)("a",{href:"#reporter-on-std-out-option-result",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-std-out-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#reporter-on-std-out-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Called when something has been written to the standard output in the worker process."),(0,n.kt)("h2",h({},{id:"reporter-on-step-begin"}),"reporter.onStepBegin(test, result, step)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-option-test"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testcase",title:"TestCase"}),"TestCase"),">"," Test that the step belongs to.",(0,n.kt)("a",{href:"#reporter-on-step-begin-option-test",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-option-result"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testresult",title:"TestResult"}),"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,n.kt)("a",{href:"#reporter-on-step-begin-option-result",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"step"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-option-step"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-teststep",title:"TestStep"}),"TestStep"),">"," Test step instance that has started.",(0,n.kt)("a",{href:"#reporter-on-step-begin-option-step",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-begin-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#reporter-on-step-begin-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Called when a test step started in the worker process."),(0,n.kt)("h2",h({},{id:"reporter-on-step-end"}),"reporter.onStepEnd(test, result, step)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-option-test"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testcase",title:"TestCase"}),"TestCase"),">"," Test that the step belongs to.",(0,n.kt)("a",{href:"#reporter-on-step-end-option-test",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-option-result"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testresult",title:"TestResult"}),"TestResult"),">"," Result of the test run.",(0,n.kt)("a",{href:"#reporter-on-step-end-option-result",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"step"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-option-step"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-teststep",title:"TestStep"}),"TestStep"),">"," Test step instance that has finished.",(0,n.kt)("a",{href:"#reporter-on-step-end-option-step",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-step-end-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#reporter-on-step-end-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Called when a test step finished in the worker process."),(0,n.kt)("h2",h({},{id:"reporter-on-test-begin"}),"reporter.onTestBegin(test, result)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-begin-option-test"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testcase",title:"TestCase"}),"TestCase"),">"," Test that has been started.",(0,n.kt)("a",{href:"#reporter-on-test-begin-option-test",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-begin-option-result"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testresult",title:"TestResult"}),"TestResult"),">"," Result of the test run, this object gets populated while the test runs.",(0,n.kt)("a",{href:"#reporter-on-test-begin-option-result",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-begin-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#reporter-on-test-begin-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Called after a test has been started in the worker process."),(0,n.kt)("h2",h({},{id:"reporter-on-test-end"}),"reporter.onTestEnd(test, result)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"test"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-end-option-test"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testcase",title:"TestCase"}),"TestCase"),">"," Test that has been finished.",(0,n.kt)("a",{href:"#reporter-on-test-end-option-test",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"result"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-end-option-result"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"/docs/next/api/class-testresult",title:"TestResult"}),"TestResult"),">"," Result of the test run.",(0,n.kt)("a",{href:"#reporter-on-test-end-option-result",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-on-test-end-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#reporter-on-test-end-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Called after a test has been finished in the worker process."),(0,n.kt)("h2",h({},{id:"reporter-prints-to-stdio"}),"reporter.printsToStdio()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"reporter-prints-to-stdio-return"})," ","<",(0,n.kt)("a",h({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">",(0,n.kt)("a",{href:"#reporter-prints-to-stdio-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Whether this reporter uses stdio for reporting. When it does not, Playwright Test could add some output to enhance user experience."))}N.isMDXComponent=!0}}]);