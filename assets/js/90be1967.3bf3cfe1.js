"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5835],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73811:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return r.createElement("div",((e,t)=>{for(var n in t||(t={}))l.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&i(e,n,t[n]);return e})({role:"tabpanel"},{hidden:t,className:n}),e)}},73824:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(67294),a=n(54939),o=n(39670),l=n(86010),s="tabItem_LplD",i=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&g(e,n,t[n]);if(c)for(var n of c(t))m.call(t,n)&&g(e,n,t[n]);return e};function f(e){var t,n,a;const{lazy:i,block:c,defaultValue:d,values:m,groupId:g,className:f}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=null!=m?m:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,o.lx)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:null!=(a=null!=d?d:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:null==(n=y[0])?void 0:n.props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:w}=(0,o.UB)(),[N,x]=(0,r.useState)(b),j=[],{blockElementScrollPositionUntilNextRender:I}=(0,o.o5)();if(null!=g){const e=T[g];null!=e&&e!==N&&k.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=j.indexOf(t),r=k[n].value;r!==N&&(I(t),x(r),null!=g&&w(g,r))},P=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=j.indexOf(e.currentTarget)+1;t=j[n]||j[0];break}case"ArrowLeft":{const n=j.indexOf(e.currentTarget)-1;t=j[n]||j[j.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},k.map((({value:e,label:t,attributes:n})=>{return r.createElement("li",(a=h({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>j.push(e),onKeyDown:P,onFocus:C,onClick:C},n),o={className:(0,l.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":N===e})},p(a,u(o))),null!=t?t:e);var a,o}))),i?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function y(e){const t=(0,a.Z)();return r.createElement(f,h({key:String(t)},e))}},91690:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return k}});var r=n(3905),a=n(73824),o=n(73811),l=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&d(e,n,t[n]);return e};const g={id:"test-reporters",title:"Reporters"},h=void 0,f={unversionedId:"test-reporters",id:"version-1.23/test-reporters",title:"Reporters",description:"- Using reporters",source:"@site/versioned_docs/version-1.23/test-reporters.mdx",sourceDirName:".",slug:"/test-reporters",permalink:"/docs/1.23/test-reporters",tags:[],version:"1.23",frontMatter:{id:"test-reporters",title:"Reporters"},sidebar:"docs",previous:{title:"Parametrize tests",permalink:"/docs/1.23/test-parameterize"},next:{title:"Test retry",permalink:"/docs/1.23/test-retries"}},y={},k=[{value:"Using reporters",id:"using-reporters",level:2},{value:"Multiple reporters",id:"multiple-reporters",level:3},{value:"Reporters on CI",id:"reporters-on-ci",level:3},{value:"Built-in reporters",id:"built-in-reporters",level:2},{value:"List reporter",id:"list-reporter",level:3},{value:"Line reporter",id:"line-reporter",level:3},{value:"Dot reporter",id:"dot-reporter",level:3},{value:"HTML reporter",id:"html-reporter",level:3},{value:"JSON reporter",id:"json-reporter",level:3},{value:"JUnit reporter",id:"junit-reporter",level:3},{value:"GitHub Actions annotations",id:"github-actions-annotations",level:3},{value:"Custom reporters",id:"custom-reporters",level:2},{value:"Third party reporter showcase",id:"third-party-reporter-showcase",level:2}],v={toc:k};function b(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},v),d),s(t,i({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#using-reporters"}),"Using reporters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#built-in-reporters"}),"Built-in reporters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#custom-reporters"}),"Custom reporters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"#third-party-reporter-showcase"}),"Third party reporter showcase"))),(0,r.kt)("h2",m({},{id:"using-reporters"}),"Using reporters"),(0,r.kt)("p",null,"Playwright Test comes with a few built-in reporters for different needs and ability to provide custom reporters. The easiest way to try out built-in reporters is to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter")," ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/1.23/test-cli"}),"command line option"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx playwright test --reporter=line\n")),(0,r.kt)("p",null,"For more control, you can specify reporters programmatically in the ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/1.23/test-configuration"}),"configuration file"),"."),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'line',\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'line',\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h3",m({},{id:"multiple-reporters"}),"Multiple reporters"),(0,r.kt)("p",null,"You can use multiple reporters at the same time. For example  you can use",(0,r.kt)("inlineCode",{parentName:"p"},"'list'")," for nice terminal output and ",(0,r.kt)("inlineCode",{parentName:"p"},"'json'")," to get a comprehensive json file with the test results."),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [\n    ['list'],\n    ['json', {  outputFile: 'test-results.json' }]\n  ],\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [\n    ['list'],\n    ['json', {  outputFile: 'test-results.json' }]\n  ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h3",m({},{id:"reporters-on-ci"}),"Reporters on CI"),(0,r.kt)("p",null,"You can use different reporters locally and on CI. For example, using concise ",(0,r.kt)("inlineCode",{parentName:"p"},"'dot'")," reporter avoids too much output. This is the default on CI."),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Concise 'dot' for CI, default 'list' when running locally\n  reporter: process.env.CI ? 'dot' : 'list',\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // Concise 'dot' for CI, default 'list' when running locally\n  reporter: process.env.CI ? 'dot' : 'list',\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h2",m({},{id:"built-in-reporters"}),"Built-in reporters"),(0,r.kt)("p",null,"All built-in reporters show detailed information about failures, and mostly differ in verbosity for successful runs."),(0,r.kt)("h3",m({},{id:"list-reporter"}),"List reporter"),(0,r.kt)("p",null,"List reporter is default (except on CI where the ",(0,r.kt)("inlineCode",{parentName:"p"},"dot")," reporter is default). It prints a line for each test being run."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx playwright test --reporter=list\n")),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'list',\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'list',\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx playwright test --reporter=list\nRunning 124 tests using 6 workers\n\n  \u2713 should access error in env (438ms)\n  \u2713 handle long test names (515ms)\n  x 1) render expected (691ms)\n  \u2713 should timeout (932ms)\n    should repeat each:\n  \u2713 should respect enclosing .gitignore (569ms)\n    should teardown env after timeout:\n    should respect excluded tests:\n  \u2713 should handle env beforeEach error (638ms)\n    should respect enclosing .gitignore:\n")),(0,r.kt)("h3",m({},{id:"line-reporter"}),"Line reporter"),(0,r.kt)("p",null,"Line reporter is more concise than the list reporter. It uses a single line to report last finished test, and prints failures when they occur. Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx playwright test --reporter=line\n")),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'line',\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'line',\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"Here is an example output in the middle of a test run. Failures are reported inline."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx playwright test --reporter=line\nRunning 124 tests using 6 workers\n  1) dot-reporter.spec.ts:20:1 \u203a render expected ===================================================\n\n    Error: expect(received).toBe(expected) // Object.is equality\n\n    Expected: 1\n    Received: 0\n\n[23/124] gitignore.spec.ts - should respect nested .gitignore\n")),(0,r.kt)("h3",m({},{id:"dot-reporter"}),"Dot reporter"),(0,r.kt)("p",null,"Dot reporter is very concise - it only produces a single character per successful test run. It is the default on CI and useful where you don't want a lot of output."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx playwright test --reporter=dot\n")),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: 'dot',\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: 'dot',\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx playwright test --reporter=dot\nRunning 124 tests using 6 workers\n\xb7\xb7\xb7\xb7\xb7\xb7F\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n")),(0,r.kt)("h3",m({},{id:"html-reporter"}),"HTML reporter"),(0,r.kt)("p",null,"HTML reporter produces a self-contained folder that contains report for the test run that can be served as a web page."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx playwright test --reporter=html\n")),(0,r.kt)("p",null,"By default, HTML report is opened automatically if some of the tests failed. You can control this behavior via the ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," property in the Playwright config. The possible values for that property are ",(0,r.kt)("inlineCode",{parentName:"p"},"always"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"never")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"on-failure")," (default)."),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['html', { open: 'never' }] ],\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['html', { open: 'never' }] ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"By default, report is written into the ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright-report")," folder in the current working directory. One can override that location using the ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_HTML_REPORT")," environment variable or a reporter configuration."),(0,r.kt)("p",null,"In configuration file, pass options directly:"),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['html', { outputFolder: 'my-report' }] ],\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['html', { outputFolder: 'my-report' }] ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"A quick way of opening the last test run report is:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx playwright show-report\n")),(0,r.kt)("p",null,"Or if there is a custom folder name:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx playwright show-report my-report\n")),(0,r.kt)("h3",m({},{id:"json-reporter"}),"JSON reporter"),(0,r.kt)("p",null,"JSON reporter produces an object with all information about the test run."),(0,r.kt)("p",null,"Most likely you want to write the JSON to a file. When running with ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter=json"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_JSON_OUTPUT_NAME")," environment variable:"),(0,r.kt)(a.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json\n"))),(0,r.kt)(o.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_JSON_OUTPUT_NAME="results.json"\nnpx playwright test --reporter=json\n'))),(0,r.kt)(o.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_JSON_OUTPUT_NAME=results.json\nnpx playwright test --reporter=json\n")))),(0,r.kt)("p",null,"In configuration file, pass options directly:"),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['json', { outputFile: 'results.json' }] ],\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['json', { outputFile: 'results.json' }] ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h3",m({},{id:"junit-reporter"}),"JUnit reporter"),(0,r.kt)("p",null,"JUnit reporter produces a JUnit-style xml report."),(0,r.kt)("p",null,"Most likely you want to write the report to an xml file. When running with ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter=junit"),", use ",(0,r.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_JUNIT_OUTPUT_NAME")," environment variable:"),(0,r.kt)(a.Z,{groupId:"bash-flavor",defaultValue:"bash",values:[{label:"Bash",value:"bash"},{label:"PowerShell",value:"powershell"},{label:"Batch",value:"batch"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit\n"))),(0,r.kt)(o.Z,{value:"powershell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-powershell"}),'$env:PLAYWRIGHT_JUNIT_OUTPUT_NAME="results.xml"\nnpx playwright test --reporter=junit\n'))),(0,r.kt)(o.Z,{value:"batch",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-batch"}),"set PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml\nnpx playwright test --reporter=junit\n")))),(0,r.kt)("p",null,"In configuration file, pass options directly:"),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['junit', { outputFile: 'results.xml' }] ],\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['junit', { outputFile: 'results.xml' }] ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"The JUnit reporter provides support for embedding additional information on the ",(0,r.kt)("inlineCode",{parentName:"p"},"testcase")," elements using inner ",(0,r.kt)("inlineCode",{parentName:"p"},"properties"),". This is based on an ",(0,r.kt)("a",m({parentName:"p"},{href:"https://docs.getxray.app/display/XRAYCLOUD/Taking+advantage+of+JUnit+XML+reports"}),"evolved JUnit XML format")," from Xray Test Management, but can also be used by other tools if they support this way of embedding additonal information for test results; please check it first."),(0,r.kt)("p",null,"In configuration file, a set of options can be used to configure this behavior. A full example, in this case for Xray, follows ahead."),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\n// JUnit reporter config for Xray\nconst xrayOptions = {\n  // Whether to add <properties> with all annotations; default is false\n  embedAnnotationsAsProperties: true,\n\n  // By default, annotation is reported as <property name='' value=''>.\n  // These annotations are reported as <property name=''>value</property>.\n  textContentAnnotations: ['test_description'],\n\n  // This will create a \"testrun_evidence\" property that contains all attachments. Each attachment is added as an inner <item> element.\n  // Disables [[ATTACHMENT|path]] in the <system-out>.\n  embedAttachmentsAsProperty: 'testrun_evidence',\n\n  // Where to put the report.\n  outputFile: './xray-report.xml'\n};\n\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['junit', xrayOptions] ]\n};\n\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\n\n// JUnit reporter config for Xray\nconst xrayOptions = {\n  // Whether to add <properties> with all annotations; default is false\n  embedAnnotationsAsProperties: true,\n\n  // By default, annotation is reported as <property name='' value=''>.\n  // These annotations are reported as <property name=''>value</property>.\n  textContentAnnotations: ['test_description'],\n\n  // This will create a \"testrun_evidence\" property that contains all attachments. Each attachment is added as an inner <item> element.\n  // Disables [[ATTACHMENT|path]] in the <system-out>.\n  embedAttachmentsAsProperty: 'testrun_evidence',\n\n  // Where to put the report.\n  outputFile: './xray-report.xml'\n};\n\nconst config = {\n  reporter: [ ['junit', xrayOptions] ]\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"In the previous configuration sample, all annotations will be added as ",(0,r.kt)("inlineCode",{parentName:"p"},"<property>")," elements on the JUnit XML report. The annotation type is mapped to the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attribute of the ",(0,r.kt)("inlineCode",{parentName:"p"},"<property>"),", and the annotation description will be added as a ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," attribute. In this case, the exception will be the annotation type ",(0,r.kt)("inlineCode",{parentName:"p"},"testrun_evidence")," whose description will be added as inner content on the respective ",(0,r.kt)("inlineCode",{parentName:"p"},"<property>"),'. Annotations can be used to, for example, link a Playwright test with an existing Test in Xray or to link a test with an existing story/requirement in Jira (i.e., "cover" it).'),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"import { test } from '@playwright/test';\n\ntest('using specific annotations for passing test metadata to Xray', async ({}, testInfo) => {\n  testInfo.annotations.push({ type: 'test_id', description: '1234' });\n  testInfo.annotations.push({ type: 'test_key', description: 'CALC-2' });\n  testInfo.annotations.push({ type: 'test_summary', description: 'sample summary' });\n  testInfo.annotations.push({ type: 'requirements', description: 'CALC-5,CALC-6' });\n  testInfo.annotations.push({ type: 'test_description', description: 'sample description' });\n});\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// @ts-check\nconst { test } = require('@playwright/test');\n\ntest('using specific annotations for passing test metadata to Xray', async ({}, testInfo) => {\n  testInfo.annotations.push({ type: 'test_id', description: '1234' });\n  testInfo.annotations.push({ type: 'test_key', description: 'CALC-2' });\n  testInfo.annotations.push({ type: 'test_summary', description: 'sample summary' });\n  testInfo.annotations.push({ type: 'requirements', description: 'CALC-5,CALC-6' });\n  testInfo.annotations.push({ type: 'test_description', description: 'sample description' });\n});\n")))),(0,r.kt)("p",null,"Please note that the semantics of these properties will depend on the tool that will process this evoled report format; there are no standard property names/annotations."),(0,r.kt)("p",null,"If the configuration option ",(0,r.kt)("inlineCode",{parentName:"p"},"embedAttachmentsAsProperty")," is defined, then a ",(0,r.kt)("inlineCode",{parentName:"p"},"property")," with its name is created. Attachments, including their contents, will be embeded on the JUnit XML report inside ",(0,r.kt)("inlineCode",{parentName:"p"},"<item>")," elements under this ",(0,r.kt)("inlineCode",{parentName:"p"},"property"),". Attachments are obtained from the ",(0,r.kt)("inlineCode",{parentName:"p"},"TestInfo")," object, using either a path or a body, and are added as base64 encoded content. Embedding attachments can be used to attach screenshots or any other relevant evidence; nevertheless, use it wisely as it affects the report size."),(0,r.kt)("p",null,"The following configuration sample enables embedding attachments by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"testrun_evidence")," element on the JUnit XML report:"),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n\nimport { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  reporter: [ ['junit', { embedAttachmentsAsProperty: 'testrun_evidence', outputFile: 'results.xml' }] ],\n};\n\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: [ ['junit', { embedAttachmentsAsProperty: 'testrun_evidence', outputFile: 'results.xml' }] ],\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("p",null,"The following test adds attachments:"),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"import { test } from '@playwright/test';\n\ntest('embed attachments, including its content, on the JUnit report', async ({}, testInfo) => {\n  const file = testInfo.outputPath('evidence1.txt');\n  require('fs').writeFileSync(file, 'hello', 'utf8');\n  await testInfo.attach('evidence1.txt', { path: file, contentType: 'text/plain' });\n  await testInfo.attach('evidence2.txt', { body: Buffer.from('world'), contentType: 'text/plain' });\n});\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// @ts-check\nconst { test } = require('@playwright/test');\n\ntest('embed attachments, including its content, on the JUnit report', async ({}, testInfo) => {\n  const file = testInfo.outputPath('evidence1.txt');\n  require('fs').writeFileSync(file, 'hello', 'utf8');\n  await testInfo.attach('evidence1.txt', { path: file, contentType: 'text/plain' });\n  await testInfo.attach('evidence2.txt', { body: Buffer.from('world'), contentType: 'text/plain' });\n});\n")))),(0,r.kt)("h3",m({},{id:"github-actions-annotations"}),"GitHub Actions annotations"),(0,r.kt)("p",null,"You can use the built in ",(0,r.kt)("inlineCode",{parentName:"p"},"github")," reporter to get automatic failure annotations when running in GitHub actions."),(0,r.kt)("p",null,"Note that all other reporters work on GitHub Actions as well, but do not provide annotations."),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'\n  // default 'list' when running locally\n  reporter: process.env.CI ? 'github' : 'list',\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  // 'github' for GitHub Actions CI to generate annotations, plus a concise 'dot'\n  // default 'list' when running locally\n  reporter: process.env.CI ? 'github' : 'list',\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h2",m({},{id:"custom-reporters"}),"Custom reporters"),(0,r.kt)("p",null,"You can create a custom reporter by implementing a class with some of the reporter methods. Learn more about the ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/1.23/api/class-reporter",title:"Reporter"}),"Reporter")," API."),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// my-awesome-reporter.ts\nimport { Reporter } from '@playwright/test/reporter';\n\nclass MyReporter implements Reporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\nexport default MyReporter;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// my-awesome-reporter.js\n// @ts-check\n\n/** @implements {import('@playwright/test/reporter').Reporter} */\nclass MyReporter {\n  onBegin(config, suite) {\n    console.log(`Starting the run with ${suite.allTests().length} tests`);\n  }\n\n  onTestBegin(test) {\n    console.log(`Starting test ${test.title}`);\n  }\n\n  onTestEnd(test, result) {\n    console.log(`Finished test ${test.title}: ${result.status}`);\n  }\n\n  onEnd(result) {\n    console.log(`Finished the run: ${result.status}`);\n  }\n}\n\nmodule.exports = MyReporter;\n")))),(0,r.kt)("p",null,"Now use this reporter with ",(0,r.kt)("a",m({parentName:"p"},{href:"/docs/1.23/api/class-testconfig#test-config-reporter"}),"testConfig.reporter"),"."),(0,r.kt)(a.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.ts\nimport type { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  reporter: './my-awesome-reporter.ts',\n};\nexport default config;\n"))),(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// playwright.config.js\n// @ts-check\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  reporter: './my-awesome-reporter.js',\n};\n\nmodule.exports = config;\n")))),(0,r.kt)("h2",m({},{id:"third-party-reporter-showcase"}),"Third party reporter showcase"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://www.npmjs.com/package/allure-playwright"}),"Allure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://www.tesults.com/docs/playwright"}),"Tesults"))))}b.isMDXComponent=!0}}]);