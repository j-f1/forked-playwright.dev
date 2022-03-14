"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[21032],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(a),h=r,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||o;return a?n.createElement(d,s(s({ref:t},c),{},{components:a})):n.createElement(d,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function i({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(67294),r=a(54939),o=a(5882),s=a(86010),l="tabItem_LplD",p=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&d(e,a,t[a]);if(u)for(var a of u(t))h.call(t,a)&&d(e,a,t[a]);return e};function g(e){var t,a,r;const{lazy:p,block:u,defaultValue:m,values:h,groupId:d,className:g}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=h?h:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),v=(0,o.lx)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===m?m:null!=(r=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=y[0])?void 0:a.props.value;if(null!==w&&!b.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,o.UB)(),[j,N]=(0,n.useState)(w),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=d){const e=k[d];null!=e&&e!==j&&b.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,a=O.indexOf(t),n=b[a].value;n!==j&&(T(t),N(n),null!=d&&x(d,n))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},g)},b.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=f({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>O.push(e),onKeyDown:S,onFocus:P,onClick:P},a),o={className:(0,s.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":j===e})},i(r,c(o))),null!=t?t:e);var r,o}))),p?(0,n.cloneElement)(y.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function y(e){const t=(0,r.Z)();return n.createElement(g,f({key:String(t)},e))}},41877:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return b}});var n=a(3905),r=a(73824),o=a(73811),s=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&m(e,a,t[a]);if(i)for(var a of i(t))u.call(t,a)&&m(e,a,t[a]);return e};const d={id:"test-snapshots",title:"Visual comparisons"},f=void 0,g={unversionedId:"test-snapshots",id:"version-1.19/test-snapshots",title:"Visual comparisons",description:"Playwright Test includes the ability to produce and visually compare screenshots using expect(value).toMatchSnapshot(snapshotName). On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.",source:"@site/versioned_docs/version-1.19/test-snapshots.mdx",sourceDirName:".",slug:"/test-snapshots",permalink:"/docs/1.19/test-snapshots",tags:[],version:"1.19",frontMatter:{id:"test-snapshots",title:"Visual comparisons"},sidebar:"version-1.19/docs",previous:{title:"Timeouts",permalink:"/docs/1.19/test-timeouts"},next:{title:"Advanced: configuration",permalink:"/docs/1.19/test-advanced"}},y={},b=[],v={toc:b};function w(e){var t,a=e,{components:s}=a,m=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=h(h({},v),m),l(t,p({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright Test includes the ability to produce and visually compare screenshots using ",(0,n.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(snapshotName)"),". On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('landing.png');\n});\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('landing.png');\n});\n")))),(0,n.kt)("p",null,"When you run above for the first time, test runner will say:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{}),"Error: example.spec.ts-snapshots/landing-chromium-darwin.png is missing in snapshots, writing actual.\n")),(0,n.kt)("p",null,"That's because there was no golden file for your ",(0,n.kt)("inlineCode",{parentName:"p"},"landing.png")," snapshot. It is now created and is ready to be added to the repository. The name of the folder with the golden expectations starts with the name of your test file:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"drwxr-xr-x  5 user  group  160 Jun  4 11:46 .\ndrwxr-xr-x  6 user  group  192 Jun  4 11:45 ..\n-rw-r--r--  1 user  group  231 Jun  4 11:16 example.spec.ts\ndrwxr-xr-x  3 user  group   96 Jun  4 11:46 example.spec.ts-snapshots\n")),(0,n.kt)("p",null,"Note the ",(0,n.kt)("inlineCode",{parentName:"p"},"chromium-darwin")," in the generated snapshot file name - it contains the browser name and the platform. Screenshots differ between browsers and platforms due to different rendering, fonts and more, so you will need different snapshots for them. If you use multiple projects in your ",(0,n.kt)("a",h({parentName:"p"},{href:"/docs/1.19/test-configuration"}),"configuration file"),", project name will be used instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"chromium"),"."),(0,n.kt)("p",null,"If you are not on the same operating system as your CI system, you can use Docker to generate/update the screenshots:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.12.3-focal /bin/bash\nnpm install\nnpx playwright test --update-snapshots\n")),(0,n.kt)("p",null,"Sometimes you need to update the reference screenshot, for example when the page has changed. Do this with the  ",(0,n.kt)("inlineCode",{parentName:"p"},"--update-snapshots")," flag."),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-bash"}),"npx playwright test --update-snapshots\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"snapshotName")," also accepts an array of path segments to the snapshot file such as ",(0,n.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(['relative', 'path', 'to', 'snapshot.png'])"),".\nHowever, this path must stay within the snapshots directory for each test file (i.e. ",(0,n.kt)("inlineCode",{parentName:"p"},"a.spec.js-snapshots"),"), otherwise it will throw.")),(0,n.kt)("p",null,"Playwright Test uses the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/mapbox/pixelmatch"}),"pixelmatch")," library. You can pass comparison ",(0,n.kt)("inlineCode",{parentName:"p"},"threshold")," as an option."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('home.png', { threshold: 0.2 });\n});\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.screenshot()).toMatchSnapshot('home.png', { threshold: 0.2 });\n});\n")))),(0,n.kt)("p",null,"If you'd like to share the default value among all the tests in the project, you can specify it in the playwright config, either globally or per project:"),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  expect: {\n    toMatchSnapshot: { threshold: 0.1 },\n  },\n};\nexport default config;\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  expect: {\n    toMatchSnapshot: { threshold: 0.1 },\n  },\n};\n")))),(0,n.kt)("p",null,"Apart from screenshots, ",(0,n.kt)("inlineCode",{parentName:"p"},"expect(value).toMatchSnapshot(snapshotName)")," can also be used to compare text, png and jpeg images, or arbitrary binary data. Playwright Test auto-detects the content type and uses the appropriate comparison algorithm."),(0,n.kt)("p",null,"Here we compare text content against the reference."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-ts"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('example test', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');\n});\n")))),(0,n.kt)("p",null,"Snapshots are stored next to the test file, in a separate directory. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"my.spec.ts")," file will produce and store snapshots in the ",(0,n.kt)("inlineCode",{parentName:"p"},"my.spec.ts-snapshots")," directory. You should commit this directory to your version control (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"git"),"), and review any changes to it."))}w.isMDXComponent=!0}}]);