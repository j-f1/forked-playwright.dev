"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[86521],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||r;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73811:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),o=Object.defineProperty,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function u({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},73824:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(67294),o=n(54939),r=n(5882),l=n(86010),i="tabItem_LplD",s=Object.defineProperty,u=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))f.call(t,n)&&d(e,n,t[n]);return e};function k(e){var t,n,o;const{lazy:s,block:c,defaultValue:m,values:f,groupId:d,className:k}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=f?f:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,r.lx)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:null!=(o=null!=m?m:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?o:null==(n=v[0])?void 0:n.props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:w}=(0,r.UB)(),[x,N]=(0,a.useState)(h),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,r.o5)();if(null!=d){const e=T[d];null!=e&&e!==x&&b.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=j.indexOf(t),a=b[n].value;a!==x&&(O(t),N(a),null!=d&&w(d,a))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},b.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=g({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>j.push(e),onKeyDown:P,onFocus:S,onClick:S},n),r={className:(0,l.Z)("tabs__item",i,null==n?void 0:n.className,{"tabs__item--active":x===e})},u(o,p(r))),null!=t?t:e);var o,r}))),s?(0,a.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function v(e){const t=(0,o.Z)();return a.createElement(k,g({key:String(t)},e))}},59796:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return h},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return b}});var a=n(3905),o=n(73824),r=n(73811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&m(e,n,t[n]);return e};const d={id:"test-timeouts",title:"Timeouts"},g=void 0,k={unversionedId:"test-timeouts",id:"version-1.18/test-timeouts",title:"Timeouts",description:"- Overview",source:"@site/versioned_docs/version-1.18/test-timeouts.mdx",sourceDirName:".",slug:"/test-timeouts",permalink:"/docs/1.18/test-timeouts",tags:[],version:"1.18",frontMatter:{id:"test-timeouts",title:"Timeouts"},sidebar:"version-1.18/docs",previous:{title:"Test retry",permalink:"/docs/1.18/test-retries"},next:{title:"Visual comparisons",permalink:"/docs/1.18/test-snapshots"}},v={},b=[{value:"Overview",id:"overview",level:2},{value:"Test timeout",id:"test-timeout",level:2},{value:"Set test timeout in the config",id:"set-test-timeout-in-the-config",level:3},{value:"Set timeout for a single test",id:"set-timeout-for-a-single-test",level:3},{value:"Change timeout from a hook or fixture",id:"change-timeout-from-a-hook-or-fixture",level:3},{value:"Expect timeout",id:"expect-timeout",level:2},{value:"Set expect timeout in the config",id:"set-expect-timeout-in-the-config",level:3},{value:"Set timeout for a single assertion",id:"set-timeout-for-a-single-assertion",level:3},{value:"Action and navigation timeouts",id:"action-and-navigation-timeouts",level:2},{value:"Set action and navigation timeouts in the config",id:"set-action-and-navigation-timeouts-in-the-config",level:3},{value:"Set timeout for a single action",id:"set-timeout-for-a-single-action",level:3},{value:"Global timeout",id:"global-timeout",level:2}],y={toc:b};function h(e){var t,n=e,{components:l}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},y),m),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#overview"}),"Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#test-timeout"}),"Test timeout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#expect-timeout"}),"Expect timeout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#action-and-navigation-timeouts"}),"Action and navigation timeouts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#global-timeout"}),"Global timeout"))),(0,a.kt)("h2",f({},{id:"overview"}),"Overview"),(0,a.kt)("p",null,"Playwright Test has multiple configurable timeouts for various tasks."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",f({parentName:"tr"},{align:"left"}),"Timeout"),(0,a.kt)("th",f({parentName:"tr"},{align:"left"}),"Default"),(0,a.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Test timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"30000 ms"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each test, includes test, hooks and fixtures:",(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,a.kt)("br",null),(0,a.kt)("code",null,"config = { timeout: 60000 }"),(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Override"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"test.setTimeout(120000)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Expect timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"5000 ms"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each assertion:",(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"config = { expect: { timeout: 10000 } }"),(0,a.kt)("br",null),(0,a.kt)("span",null,"Override"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"expect(locator).toBeVisible({ timeout: 10000 })"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Action timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"no timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each action:",(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"config = { use: { actionTimeout: 10000 } }"),(0,a.kt)("br",null),(0,a.kt)("span",null,"Override"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"locator.click({ timeout: 10000 })"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Navigation timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"no timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Timeout for each navigation action:",(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set default"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"config = { use: { navigationTimeout: 30000 } }"),(0,a.kt)("br",null),(0,a.kt)("span",null,"Override"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"page.goto('/', { timeout: 30000 })"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Global timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"no timeout"),(0,a.kt)("td",f({parentName:"tr"},{align:"left"}),"Global timeout for the whole test run:",(0,a.kt)("br",null),(0,a.kt)("span",{style:{textTransform:"uppercase",fontSize:"smaller",fontWeight:"bold",opacity:"0.6"}},"Set in config"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"td"},"config = { globalTimeout: 60*60*1000 }"),(0,a.kt)("br",null))))),(0,a.kt)("h2",f({},{id:"test-timeout"}),"Test timeout"),(0,a.kt)("p",null,"Playwright Test enforces a timeout for each test, 30 seconds by default. Time spent by the test function, fixtures, ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeEach")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterEach")," hooks is included in the test timeout."),(0,a.kt)("p",null,"Timed out test produces the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{}),"example.spec.ts:3:1 \u203a basic test ===========================\n\nTimeout of 30000ms exceeded.\n")),(0,a.kt)("p",null,"The same test timeout also applies to ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeAll")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"afterAll")," hooks."),(0,a.kt)("h3",f({},{id:"set-test-timeout-in-the-config"}),"Set test timeout in the config"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  timeout: 5 * 60 * 1000,\n};\nexport default config;\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  timeout: 5 * 60 * 1000,\n};\n\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/1.18/api/class-testconfig#test-config-timeout"}),"testConfig.timeout"),"."),(0,a.kt)("h3",f({},{id:"set-timeout-for-a-single-test"}),"Set timeout for a single test"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('slow test', async ({ page }) => {\n  test.slow(); // Easy way to triple the default timeout\n  // ...\n});\n\ntest('very slow test', async ({ page }) => {\n  test.setTimeout(120000);\n  // ...\n});\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('slow test', async ({ page }) => {\n  test.slow(); // Easy way to triple the default timeout\n  // ...\n});\n\ntest('very slow test', async ({ page }) => {\n  test.setTimeout(120000);\n  // ...\n});\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/1.18/api/class-test#test-set-timeout"}),"test.setTimeout(timeout)")," and ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/1.18/api/class-test#test-slow"}),"test.slow([condition, description])"),"."),(0,a.kt)("h3",f({},{id:"change-timeout-from-a-hook-or-fixture"}),"Change timeout from a hook or fixture"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest.beforeEach(async ({ page }, testInfo) => {\n  // Extend timeout for all tests running this hook by 30 seconds.\n  testInfo.setTimeout(testInfo.timeout + 30000);\n});\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest.beforeEach(async ({ page }, testInfo) => {\n  // Extend timeout for all tests running this hook by 30 seconds.\n  testInfo.setTimeout(testInfo.timeout + 30000);\n});\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/1.18/api/class-testinfo#test-info-set-timeout"}),"testInfo.setTimeout(timeout)"),"."),(0,a.kt)("h2",f({},{id:"expect-timeout"}),"Expect timeout"),(0,a.kt)("p",null,"Web-first assertions like ",(0,a.kt)("inlineCode",{parentName:"p"},"expect(locator).toHaveText()")," have a separate timeout, 5 seconds by default. Assertion timeout is unrelated to the test timeout. It produces the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{}),'example.spec.ts:3:1 \u203a basic test ===========================\n\nError: expect(received).toHaveText(expected)\n\nExpected string: "my text"\nReceived string: ""\nCall log:\n  - expect.toHaveText with timeout 5000ms\n  - waiting for selector "button"\n')),(0,a.kt)("h3",f({},{id:"set-expect-timeout-in-the-config"}),"Set expect timeout in the config"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  expect: {\n    timeout: 10 * 1000,\n  },\n};\nexport default config;\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  expect: {\n    timeout: 10 * 1000,\n  },\n};\n\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/1.18/api/class-testconfig#test-config-expect"}),"testConfig.expect"),"."),(0,a.kt)("h3",f({},{id:"set-timeout-for-a-single-assertion"}),"Set timeout for a single assertion"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await expect(page.locator('button')).toHaveText('Sign in', { timeout: 10000 });\n});\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await expect(page.locator('button')).toHaveText('Sign in', { timeout: 10000 });\n});\n")))),(0,a.kt)("h2",f({},{id:"action-and-navigation-timeouts"}),"Action and navigation timeouts"),(0,a.kt)("p",null,"Test usually performs some actions by calling Playwright APIs, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"locator.click()"),". These actions do not have a timeout by default, but you can set one. Action that timed out produces the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{}),'example.spec.ts:3:1 \u203a basic test ===========================\n\nlocator.click: Timeout 1000ms exceeded.\n=========================== logs ===========================\nwaiting for selector "button"\n============================================================\n')),(0,a.kt)("p",null,"Playwright also allows to set a separate timeout for navigation actions like ",(0,a.kt)("inlineCode",{parentName:"p"},"page.goto()")," because loading a page is usually slower."),(0,a.kt)("h3",f({},{id:"set-action-and-navigation-timeouts-in-the-config"}),"Set action and navigation timeouts in the config"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    actionTimeout: 10 * 1000,\n    navigationTimeout: 30 * 1000,\n  },\n};\nexport default config;\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  use: {\n    actionTimeout: 10 * 1000,\n    navigationTimeout: 30 * 1000,\n  },\n};\n\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/1.18/api/class-testoptions#test-options-action-timeout"}),"testOptions.actionTimeout")," and ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/1.18/api/class-testoptions#test-options-navigation-timeout"}),"testOptions.navigationTimeout"),"."),(0,a.kt)("h3",f({},{id:"set-timeout-for-a-single-action"}),"Set timeout for a single action"),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev', { timeout: 30000 });\n  await page.locator('text=Get Started').click({ timeout: 10000 });\n});\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev', { timeout: 30000 });\n  await page.locator('text=Get Started').click({ timeout: 10000 });\n});\n")))),(0,a.kt)("h2",f({},{id:"global-timeout"}),"Global timeout"),(0,a.kt)("p",null,"Playwright Test supports a timeout for the whole test run. This prevents excess resource usage when everything went wrong. There is no default global timeout, but you can set a reasonable one in the config, for example one hour. Global timeout produces the following error:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{}),"Running 1000 tests using 10 workers\n\n  514 skipped\n  486 passed\n  Timed out waiting 3600s for the entire test run\n")),(0,a.kt)("p",null,"You can set global timeout in the config."),(0,a.kt)(o.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  globalTimeout: 60 * 60 * 1000,\n};\nexport default config;\n"))),(0,a.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  globalTimeout: 60 * 60 * 1000,\n};\n\nmodule.exports = config;\n")))),(0,a.kt)("p",null,"API reference: ",(0,a.kt)("a",f({parentName:"p"},{href:"/docs/1.18/api/class-testconfig#test-config-global-timeout"}),"testConfig.globalTimeout"),"."))}h.isMDXComponent=!0}}]);