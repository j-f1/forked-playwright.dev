"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[35158],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73811:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),s=Object.defineProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,i=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&i(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},73824:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(67294),s=n(54939),o=n(5882),r=n(86010),l="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&f(e,n,t[n]);if(c)for(var n of c(t))d.call(t,n)&&f(e,n,t[n]);return e};function y(e){var t,n,s;const{lazy:i,block:c,defaultValue:m,values:d,groupId:f,className:y}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=d?d:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),b=(0,o.lx)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:null!=(s=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?s:null==(n=h[0])?void 0:n.props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:N}=(0,o.UB)(),[w,x]=(0,a.useState)(v),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,o.o5)();if(null!=f){const e=T[f];null!=e&&e!==w&&g.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=j.indexOf(t),a=g[n].value;a!==w&&(O(t),x(a),null!=f&&N(f,a))},I=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},y)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(s=k({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>j.push(e),onKeyDown:I,onFocus:C,onClick:C},n),o={className:(0,r.Z)("tabs__item",l,null==n?void 0:n.className,{"tabs__item--active":w===e})},p(s,u(o))),null!=t?t:e);var s,o}))),i?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,s.Z)();return a.createElement(y,k({key:String(t)},e))}},85817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return v},frontMatter:function(){return f},metadata:function(){return y},toc:function(){return g}});var a=n(3905),s=n(73824),o=n(73811),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&m(e,n,t[n]);return e};const f={id:"test-annotations",title:"Annotations"},k=void 0,y={unversionedId:"test-annotations",id:"test-annotations",title:"Annotations",description:"- Annotations",source:"@site/docs/test-annotations.mdx",sourceDirName:".",slug:"/test-annotations",permalink:"/docs/next/test-annotations",tags:[],version:"current",frontMatter:{id:"test-annotations",title:"Annotations"},sidebar:"docs",previous:{title:"Release notes",permalink:"/docs/next/release-notes"},next:{title:"API testing",permalink:"/docs/next/test-api-testing"}},h={},g=[{value:"Annotations",id:"annotations",level:2},{value:"Focus a test",id:"focus-a-test",level:2},{value:"Skip a test",id:"skip-a-test",level:2},{value:"Conditionally skip a test",id:"conditionally-skip-a-test",level:2},{value:"Group tests",id:"group-tests",level:2},{value:"Tag tests",id:"tag-tests",level:2},{value:"Conditionally skip a group of tests",id:"conditionally-skip-a-group-of-tests",level:2},{value:"Use fixme in <code>beforeEach</code> hook",id:"use-fixme-in-beforeeach-hook",level:2},{value:"Custom annotations",id:"custom-annotations",level:2}],b={toc:g};function v(e){var t,n=e,{components:r}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},b),m),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#annotations"}),"Annotations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#focus-a-test"}),"Focus a test")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#skip-a-test"}),"Skip a test")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#conditionally-skip-a-test"}),"Conditionally skip a test")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#group-tests"}),"Group tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#tag-tests"}),"Tag tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#conditionally-skip-a-group-of-tests"}),"Conditionally skip a group of tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#use-fixme-in-beforeeach-hook"}),"Use fixme in ",(0,a.kt)("inlineCode",{parentName:"a"},"beforeEach")," hook")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"#custom-annotations"}),"Custom annotations"))),(0,a.kt)("h2",d({},{id:"annotations"}),"Annotations"),(0,a.kt)("p",null,"Playwright Test supports test annotations to deal with failures, flakiness, skip, focus and tag tests:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-test#test-skip-1"}),"test.skip(title, testFunction)")," marks the test as irrelevant. Playwright Test does not run such a test. Use this annotation when the test is not applicable in some configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-test#test-fail"}),"test.fail([condition, description])")," marks the test as failing. Playwright Test will run this test and ensure it does indeed fail. If the test does not fail, Playwright Test will complain."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-test#test-fixme-1"}),"test.fixme(title, testFunction)")," marks the test as failing. Playwright Test will not run this test, as opposite to the ",(0,a.kt)("inlineCode",{parentName:"li"},"fail")," annotation. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"fixme")," when running the test is slow or crashy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"/docs/next/api/class-test#test-slow"}),"test.slow([condition, description])")," marks the test as slow and triples the test timeout.")),(0,a.kt)("p",null,"Annotations can be used on a single test or a group of tests. Annotations can be conditional, in which case they apply when the condition is truthy. Annotations may depend on test fixtures. There could be multiple annotations on the same test, possibly in different configurations."),(0,a.kt)("h2",d({},{id:"focus-a-test"}),"Focus a test"),(0,a.kt)("p",null,"You can focus some tests. When there are focused tests, only these tests run."),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"test.only('focus this test', async ({ page }) => {\n  // Run only focused tests in the entire project.\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"test.only('focus this test', async ({ page }) => {\n  // Run only focused tests in the entire project.\n});\n")))),(0,a.kt)("h2",d({},{id:"skip-a-test"}),"Skip a test"),(0,a.kt)("p",null,"Mark a test as skipped."),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"test.skip('skip this test', async ({ page }) => {\n  // This test is not run\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"test.skip('skip this test', async ({ page }) => {\n  // This test is not run\n});\n")))),(0,a.kt)("h2",d({},{id:"conditionally-skip-a-test"}),"Conditionally skip a test"),(0,a.kt)("p",null,"You can skip certain test based on the condition."),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"test('skip this test', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"test('skip this test', async ({ page, browserName }) => {\n  test.skip(browserName === 'firefox', 'Still working on it');\n});\n")))),(0,a.kt)("h2",d({},{id:"group-tests"}),"Group tests"),(0,a.kt)("p",null,"You can group tests to give them a logical name or to scope before/after hooks to the group."),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest.describe('two tests', () => {\n  test('one', async ({ page }) => {\n    // ...\n  });\n\n  test('two', async ({ page }) => {\n    // ...\n  });\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest.describe('two tests', () => {\n  test('one', async ({ page }) => {\n    // ...\n  });\n\n  test('two', async ({ page }) => {\n    // ...\n  });\n});\n")))),(0,a.kt)("h2",d({},{id:"tag-tests"}),"Tag tests"),(0,a.kt)("p",null,"Sometimes you want to tag your tests as ",(0,a.kt)("inlineCode",{parentName:"p"},"@fast")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"@slow")," and only run the tests that have the certain tag. We recommend that you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--grep")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--grep-invert")," command line flags for that:"),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"import { test, expect } from '@playwright/test';\n\ntest('Test login page @fast', async ({ page }) => {\n  // ...\n});\n\ntest('Test full report @slow', async ({ page }) => {\n  // ...\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const { test, expect } = require('@playwright/test');\n\ntest('Test login page @fast', async ({ page }) => {\n  // ...\n});\n\ntest('Test full report @slow', async ({ page }) => {\n  // ...\n});\n")))),(0,a.kt)("p",null,"You will then be able to run only that test:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --grep @fast\n")),(0,a.kt)("p",null,"Or if you want the opposite, you can skip the tests with a certain tag:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"npx playwright test --grep-invert @slow\n")),(0,a.kt)("h2",d({},{id:"conditionally-skip-a-group-of-tests"}),"Conditionally skip a group of tests"),(0,a.kt)("p",null,"For example, you can run a group of tests just in Chromium by passing a callback."),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\n\ntest.describe('chromium only', () => {\n  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');\n\n  test.beforeAll(async () => {\n    // This hook is only run in Chromium.\n  });\n\n  test('test 1', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n\n  test('test 2', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\n\ntest.describe('chromium only', () => {\n  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');\n\n  test.beforeAll(async () => {\n    // This hook is only run in Chromium.\n  });\n\n  test('test 1', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n\n  test('test 2', async ({ page }) => {\n    // This test is only run in Chromium.\n  });\n});\n")))),(0,a.kt)("h2",d({},{id:"use-fixme-in-beforeeach-hook"}),"Use fixme in ",(0,a.kt)("inlineCode",{parentName:"h2"},"beforeEach")," hook"),(0,a.kt)("p",null,"To avoid running ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeEach")," hooks, you can put annotations in the hook itself."),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\n\ntest.beforeEach(async ({ page }) => {\n  test.fixme(isMobile, 'Settings page does not work in mobile yet');\n\n  await page.goto('http://localhost:3000/settings');\n});\n\ntest('user profile', async ({ page }) => {\n  await page.click('text=My Profile');\n  // ...\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\n\ntest.beforeEach(async ({ page, isMobile }) => {\n  test.fixme(isMobile, 'Settings page does not work in mobile yet');\n\n  await page.goto('http://localhost:3000/settings');\n});\n\ntest('user profile', async ({ page }) => {\n  await page.click('text=My Profile');\n  // ...\n});\n")))),(0,a.kt)("h2",d({},{id:"custom-annotations"}),"Custom annotations"),(0,a.kt)("p",null,"It's also possible to add custom metadata in the form of annotations to your tests. Annotations are key/value pairs accessible via ",(0,a.kt)("a",d({parentName:"p"},{href:"./api/class-testinfo#test-info-annotations"}),(0,a.kt)("inlineCode",{parentName:"a"},"test.info().annotations")),". Many reporters show annotations, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"'html'"),"."),(0,a.kt)(s.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\n\ntest('user profile', async ({ page }) => {\n  test.info().annotations.push({ type: 'issue', description: 'https://github.com/microsoft/playwright/issues/<some-issue>' });\n  // ...\n});\n"))),(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\n\ntest('user profile', async ({ page }) => {\n  test.info().annotations.push({ type: 'issue', description: 'https://github.com/microsoft/playwright/issues/<some-issue>' });\n  // ...\n});\n")))))}v.isMDXComponent=!0}}]);