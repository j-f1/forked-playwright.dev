"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[90459],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),y=s(r),f=o,d=y["".concat(c,".").concat(f)]||y[f]||u[f]||i;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,p=new Array(i);p[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},24171:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return y},metadata:function(){return d},toc:function(){return b}});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&l(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&l(e,r,t[r]);return e};const y={id:"test-typescript",title:"Advanced: TypeScript"},f=void 0,d={unversionedId:"test-typescript",id:"test-typescript",title:"Advanced: TypeScript",description:"Manually compile tests with TypeScript",source:"@site/docs/test-typescript.mdx",sourceDirName:".",slug:"/test-typescript",permalink:"/docs/next/test-typescript",tags:[],version:"current",frontMatter:{id:"test-typescript",title:"Advanced: TypeScript"},sidebar:"docs",previous:{title:"Advanced: fixtures",permalink:"/docs/next/test-fixtures"},next:{title:"Library",permalink:"/docs/next/library"}},m={},b=[{value:"Manually compile tests with TypeScript",id:"manually-compile-tests-with-typescript",level:2}],v={toc:b};function g(e){var t,r=e,{components:o}=r,l=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},v),l),i(t,p({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h2",u({},{id:"manually-compile-tests-with-typescript"}),"Manually compile tests with TypeScript"),(0,n.kt)("p",null,"Playwright Test supports TypeScript out of the box. We automatically transform TypeScript code to javascript to run it."),(0,n.kt)("p",null,"However if you find that the TypeScript code is not being transpiled correctly, you can perform your own TypeScript compilation before sending the tests to Playwright."),(0,n.kt)("p",null,"First I add a ",(0,n.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file inside my tests directory."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n    "compilerOptions": {\n        "target": "ESNext",\n        "module": "commonjs",\n        "moduleResolution": "Node",\n        "sourceMap": true,\n        "outDir": "../tests-out",\n    }\n}\n')),(0,n.kt)("p",null,"In my ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json"),", I have two scripts:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "pretest": "tsc --incremental -p tests/tsconfig.json",\n    "test": "playwright test -c tests-out"\n  }\n}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"pretest")," script runs typescript on the tests. ",(0,n.kt)("inlineCode",{parentName:"p"},"test")," will run the tests that have been generated to the ",(0,n.kt)("inlineCode",{parentName:"p"},"tests-out")," directory. The ",(0,n.kt)("inlineCode",{parentName:"p"},"-c")," argument configures the test runner to look for tests inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"tests-out")," directory."),(0,n.kt)("p",null,"Then ",(0,n.kt)("inlineCode",{parentName:"p"},"npm run test")," will build the tests and run them."))}g.isMDXComponent=!0}}]);