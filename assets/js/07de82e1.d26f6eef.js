"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[14090],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(l)for(var a of l(t))i.call(t,a)&&o(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),r=a(54939),l=a(39670),s=a(86010),i="tabItem_LplD",o=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&f(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&f(e,a,t[a]);return e};function h(e){var t,a,r;const{lazy:o,block:c,defaultValue:m,values:d,groupId:f,className:h}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=d?d:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,l.lx)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:null!=(r=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=k[0])?void 0:a.props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,l.UB)(),[x,T]=(0,n.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:P}=(0,l.o5)();if(null!=f){const e=w[f];null!=e&&e!==x&&y.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=j.indexOf(t),n=y[a].value;n!==x&&(P(t),T(n),null!=f&&N(f,n))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=j.indexOf(e.currentTarget)+1;t=j[a]||j[0];break}case"ArrowLeft":{const a=j.indexOf(e.currentTarget)-1;t=j[a]||j[j.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},h)},y.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=g({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>j.push(e),onKeyDown:I,onFocus:O,onClick:O},a),l={className:(0,s.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":x===e})},p(r,u(l))),null!=t?t:e);var r,l}))),o?(0,n.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function k(e){const t=(0,r.Z)();return n.createElement(h,g({key:String(t)},e))}},37162:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return y}});var n=a(3905),r=a(73824),l=a(73811),s=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))c.call(t,a)&&m(e,a,t[a]);return e};const f={id:"test-parallel",title:"Parallelism and sharding"},g=void 0,h={unversionedId:"test-parallel",id:"test-parallel",title:"Parallelism and sharding",description:"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time.",source:"@site/docs/test-parallel.mdx",sourceDirName:".",slug:"/test-parallel",permalink:"/docs/next/test-parallel",tags:[],version:"current",frontMatter:{id:"test-parallel",title:"Parallelism and sharding"},sidebar:"docs",previous:{title:"Page Object Model",permalink:"/docs/next/test-pom"},next:{title:"Parametrize tests",permalink:"/docs/next/test-parameterize"}},k={},y=[{value:"Worker processes",id:"worker-processes",level:2},{value:"Limit workers",id:"limit-workers",level:2},{value:"Disable parallelism",id:"disable-parallelism",level:2},{value:"Parallelize tests in a single file",id:"parallelize-tests-in-a-single-file",level:2},{value:"Serial mode",id:"serial-mode",level:2},{value:"Shard tests between multiple machines",id:"shard-tests-between-multiple-machines",level:2},{value:"Limit failures and fail fast",id:"limit-failures-and-fail-fast",level:2},{value:"Worker index and parallel index",id:"worker-index-and-parallel-index",level:2},{value:"Control test order",id:"control-test-order",level:2},{value:"Sort test files alphabetically",id:"sort-test-files-alphabetically",level:3},{value:"Use a &quot;test list&quot; file",id:"use-a-test-list-file",level:3}],b={toc:y};function v(e){var t,a=e,{components:s}=a,m=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),m),i(t,o({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"By default, ",(0,n.kt)("strong",{parentName:"li"},"test files")," are run in parallel. Tests in a single file are run in order, in the same worker process."),(0,n.kt)("li",{parentName:"ul"},"Configure tests using ",(0,n.kt)("a",d({parentName:"li"},{href:"#parallelize-tests-in-a-single-file"}),(0,n.kt)("inlineCode",{parentName:"a"},"test.describe.configure"))," to run ",(0,n.kt)("strong",{parentName:"li"},"tests in a single file")," in parallel."),(0,n.kt)("li",{parentName:"ul"},"You can configure ",(0,n.kt)("strong",{parentName:"li"},"entire project")," to have all tests in all files to run in parallel using ",(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-testproject#test-project-fully-parallel"}),"testProject.fullyParallel")," or ",(0,n.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-testconfig#test-config-fully-parallel"}),"testConfig.fullyParallel"),"."),(0,n.kt)("li",{parentName:"ul"},"To ",(0,n.kt)("strong",{parentName:"li"},"disable")," parallelism limit the number of ",(0,n.kt)("a",d({parentName:"li"},{href:"#disable-parallelism"}),"workers to one"),".")),(0,n.kt)("p",null,"You can control the number of ",(0,n.kt)("a",d({parentName:"p"},{href:"#limit-workers"}),"parallel worker processes")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"#limit-failures-and-fail-fast"}),"limit the number of failures")," in the whole test suite for efficiency."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#worker-processes"}),"Worker processes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#limit-workers"}),"Limit workers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#disable-parallelism"}),"Disable parallelism")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#parallelize-tests-in-a-single-file"}),"Parallelize tests in a single file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#serial-mode"}),"Serial mode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#shard-tests-between-multiple-machines"}),"Shard tests between multiple machines")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#limit-failures-and-fail-fast"}),"Limit failures and fail fast")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#worker-index-and-parallel-index"}),"Worker index and parallel index")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"#control-test-order"}),"Control test order"))),(0,n.kt)("h2",d({},{id:"worker-processes"}),"Worker processes"),(0,n.kt)("p",null,"All tests run in worker processes. These processes are OS processes, running independently, orchestrated by the test runner. All workers have identical environments and each starts its own browser."),(0,n.kt)("p",null,"You can't communicate between the workers. Playwright Test reuses a single worker as much as it can to make testing faster, so multiple test files are usually run in a single worker one after another."),(0,n.kt)("p",null,"Workers are always shutdown after a ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/test-retries#failures"}),"test failure")," to guarantee pristine environment for following tests."),(0,n.kt)("h2",d({},{id:"limit-workers"}),"Limit workers"),(0,n.kt)("p",null,"You can control the maximum number of parallel worker processes via ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/test-cli"}),"command line")," or in the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/test-configuration"}),"configuration file"),"."),(0,n.kt)("p",null,"From the command line:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --workers 4\n")),(0,n.kt)("p",null,"In the configuration file:"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\nexport default config;\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("h2",d({},{id:"disable-parallelism"}),"Disable parallelism"),(0,n.kt)("p",null,"You can disable any parallelism by allowing just a single worker at any time. Either set ",(0,n.kt)("inlineCode",{parentName:"p"},"workers: 1")," option in the configuration file or pass ",(0,n.kt)("inlineCode",{parentName:"p"},"--workers=1")," to the command line."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --workers=1\n")),(0,n.kt)("h2",d({},{id:"parallelize-tests-in-a-single-file"}),"Parallelize tests in a single file"),(0,n.kt)("p",null,"By default, tests in a single file are run in order. If you have many independent tests in a single file, you might want to run them in parallel with ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/api/class-test#test-describe-configure"}),"test.describe.configure([options])"),"."),(0,n.kt)("p",null,"Note that parallel tests are executed in separate worker processes and cannot share any state or global variables. Each test executes all relevant hooks just for itself, including ",(0,n.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"afterAll"),"."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test } from '@playwright/test';\n\ntest.describe.configure({ mode: 'parallel' });\n\ntest('runs in parallel 1', async ({ page }) => { /* ... */ });\ntest('runs in parallel 2', async ({ page }) => { /* ... */ });\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'parallel' });\n\ntest('runs in parallel 1', async ({ page }) => { /* ... */ });\ntest('runs in parallel 2', async ({ page }) => { /* ... */ });\n")))),(0,n.kt)("p",null,"Alternatively, you can opt-in all tests (or just a few projects) into this fully-parallel mode in the configuration file:"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  fullyParallel: true,\n};\nexport default config;\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  fullyParallel: true,\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("h2",d({},{id:"serial-mode"}),"Serial mode"),(0,n.kt)("p",null,"You can annotate inter-dependent tests as serial. If one of the serial tests fails, all subsequent tests are skipped. All tests in a group are retried together."),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Using serial is not recommended. It is usually better to make your tests isolated, so they can be run independently."))),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\n\nimport { test, Page } from '@playwright/test';\n\n// Annotate entire file as serial.\ntest.describe.configure({ mode: 'serial' });\n\nlet page: Page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.click('text=Get Started');\n});\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// @ts-check\n\nconst { test } = require('@playwright/test');\n\ntest.describe.configure({ mode: 'serial' });\n\n/** @type {import('@playwright/test').Page} */\nlet page;\n\ntest.beforeAll(async ({ browser }) => {\n  page = await browser.newPage();\n});\n\ntest.afterAll(async () => {\n  await page.close();\n});\n\ntest('runs first', async () => {\n  await page.goto('https://playwright.dev/');\n});\n\ntest('runs second', async () => {\n  await page.click('text=Get Started');\n});\n")))),(0,n.kt)("h2",d({},{id:"shard-tests-between-multiple-machines"}),"Shard tests between multiple machines"),(0,n.kt)("p",null,"Playwright Test can shard a test suite, so that it can be executed on multiple machines. For that,  pass ",(0,n.kt)("inlineCode",{parentName:"p"},"--shard=x/y")," to the command line. For example, to split the suite into three shards, each running one third of the tests:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --shard=1/3\nnpx playwright test --shard=2/3\nnpx playwright test --shard=3/3\n")),(0,n.kt)("p",null,"That way your test suite completes 3 times faster."),(0,n.kt)("h2",d({},{id:"limit-failures-and-fail-fast"}),"Limit failures and fail fast"),(0,n.kt)("p",null,"You can limit the number of failed tests in the whole test suite by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"maxFailures")," config option or passing ",(0,n.kt)("inlineCode",{parentName:"p"},"--max-failures")," command line flag."),(0,n.kt)("p",null,'When running with "max failures" set, Playwright Test will stop after reaching this number of failed tests and skip any tests that were not executed yet. This is useful to avoid wasting resources on broken test suites.'),(0,n.kt)("p",null,"Passing command line option:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --max-failures=10\n")),(0,n.kt)("p",null,"Setting in the configuration file:"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n};\nexport default config;\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Limit the number of failures on CI to save resources\n  maxFailures: process.env.CI ? 10 : undefined,\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("h2",d({},{id:"worker-index-and-parallel-index"}),"Worker index and parallel index"),(0,n.kt)("p",null,"Each worker process is assigned two ids: a unique worker index that starts with 1, and a parallel index that is between ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"workers - 1"),". When a worker is restarted, for example after a failure, the new worker process has the same ",(0,n.kt)("inlineCode",{parentName:"p"},"parallelIndex")," and a new ",(0,n.kt)("inlineCode",{parentName:"p"},"workerIndex"),"."),(0,n.kt)("p",null,"You can read an index from environment variables ",(0,n.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"process.env.TEST_PARALLEL_INDEX"),", or access them through ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-worker-index"}),"testInfo.workerIndex")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-parallel-index"}),"testInfo.parallelIndex"),"."),(0,n.kt)("h2",d({},{id:"control-test-order"}),"Control test order"),(0,n.kt)("p",null,"Playwright Test runs tests from a single file in the order of declaration, unless you ",(0,n.kt)("a",d({parentName:"p"},{href:"#parallelize-tests-in-a-single-file"}),"parallelize tests in a single file"),"."),(0,n.kt)("p",null,"There is no guarantee about the order of test execution across the files, because Playwright Test runs test files in parallel by default. However, if you ",(0,n.kt)("a",d({parentName:"p"},{href:"#disable-parallelism"}),"disable parallelism"),', you can control test order by either naming your files in alphabetical order or using a "test list" file.'),(0,n.kt)("h3",d({},{id:"sort-test-files-alphabetically"}),"Sort test files alphabetically"),(0,n.kt)("p",null,"When you ",(0,n.kt)("strong",{parentName:"p"},"disable parallel test execution"),", Playwright Test runs test files in alphabetical order. You can use some naming convention to control the test order, for example ",(0,n.kt)("inlineCode",{parentName:"p"},"test001.spec.ts"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"test002.spec.ts")," and so on."),(0,n.kt)("h3",d({},{id:"use-a-test-list-file"}),'Use a "test list" file'),(0,n.kt)("p",null,"Suppose we have two test files."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// feature-a.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('feature-a', () => {\n  test('example test', async ({ page }) => {\n    // ... test goes here\n  });\n});\n\n\n// feature-b.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('feature-b', () => {\n  test.use({ viewport: { width: 500, height: 500 } });\n  test('example test', async ({ page }) => {\n    // ... test goes here\n  });\n});\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// feature-a.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.describe('feature-a', () => {\n  test('example test', async ({ page }) => {\n    // ... test goes here\n  });\n});\n\n\n// feature-b.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.describe('feature-b', () => {\n  test.use({ viewport: { width: 500, height: 500 } });\n  test('example test', async ({ page }) => {\n    // ... test goes here\n  });\n});\n")))),(0,n.kt)("p",null,"We can create a test list file that will control the order of tests - first run ",(0,n.kt)("inlineCode",{parentName:"p"},"feature-b")," tests, then ",(0,n.kt)("inlineCode",{parentName:"p"},"feature-a")," tests."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// test.list.ts\nimport './feature-b.spec.ts';\nimport './feature-a.spec.ts';\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// test.list.js\nrequire('./feature-b.spec.js');\nrequire('./feature-a.spec.js');\n")))),(0,n.kt)("p",null,"Now ",(0,n.kt)("strong",{parentName:"p"},"disable parallel execution")," by setting workers to one, and specify your test list file."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  workers: 1,\n  testMatch: 'test.list.ts',\n};\nexport default config;\n"))),(0,n.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  workers: 1,\n  testMatch: 'test.list.js',\n};\n\nmodule.exports = config;\n")))),(0,n.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Make sure to wrap tests with ",(0,n.kt)("inlineCode",{parentName:"p"},"test.describe()")," blocks so that any ",(0,n.kt)("inlineCode",{parentName:"p"},"test.use()")," calls only affect tests from a single file."))))}v.isMDXComponent=!0}}]);