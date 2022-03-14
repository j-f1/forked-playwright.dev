"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2395],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),d=r,v=g["".concat(u,".").concat(d)]||g[d]||c[d]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8779:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return b}});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const g={id:"evaluating",title:"Evaluating JavaScript"},d=void 0,v={unversionedId:"evaluating",id:"version-1.20/evaluating",title:"Evaluating JavaScript",description:"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers.",source:"@site/versioned_docs/version-1.20/evaluating.mdx",sourceDirName:".",slug:"/evaluating",permalink:"/java/docs/evaluating",tags:[],version:"1.20",frontMatter:{id:"evaluating",title:"Evaluating JavaScript"},sidebar:"docs",previous:{title:"Emulation",permalink:"/java/docs/emulation"},next:{title:"Events",permalink:"/java/docs/events"}},m={},b=[{value:"Evaluation Argument",id:"evaluation-argument",level:2}],f={toc:b};function y(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},f),p),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright scripts run in your Playwright environment. Your page scripts run in the browser page environment. Those environments don't intersect, they are running in different virtual machines in different processes and even potentially on different computers."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-page#page-evaluate"}),"Page.evaluate(expression[, arg])")," API can run a JavaScript function in the context of the web page and bring results back to the Playwright environment. Browser globals like ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"document")," can be used in ",(0,a.kt)("inlineCode",{parentName:"p"},"evaluate"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-java"}),'String href = (String) page.evaluate("document.location.href");\n')),(0,a.kt)("p",null,"If the result is a Promise or if the function is asynchronous evaluate will automatically wait until it's resolved:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-java"}),'int status = (int) page.evaluate("async () => {\\n" +\n  "  const response = await fetch(location.href);\\n" +\n  "  return response.status;\\n" +\n  "}");\n')),(0,a.kt)("h2",c({},{id:"evaluation-argument"}),"Evaluation Argument"),(0,a.kt)("p",null,"Playwright evaluation methods like ",(0,a.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-page#page-evaluate"}),"Page.evaluate(expression[, arg])")," take a single optional argument. This argument can be a mix of ",(0,a.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," values and ",(0,a.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle")," or ",(0,a.kt)("a",c({parentName:"p"},{href:"/java/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," instances. Handles are automatically converted to the value they represent."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-java"}),'// A primitive value.\npage.evaluate("num => num", 42);\n\n// An array.\npage.evaluate("array => array.length", Arrays.asList(1, 2, 3));\n\n// An object.\nMap<String, Object> obj = new HashMap<>();\nobj.put("foo", "bar");\npage.evaluate("object => object.foo", obj);\n\n// A single handle.\nElementHandle button = page.evaluate("window.button");\npage.evaluate("button => button.textContent", button);\n\n// Alternative notation using elementHandle.evaluate.\nbutton.evaluate("(button, from) => button.textContent.substring(from)", 5);\n\n// Object with multiple handles.\nElementHandle button1 = page.evaluate("window.button1");\nElementHandle button2 = page.evaluate("window.button2");\nMap<String, ElementHandle> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("button2", button2);\npage.evaluate("o => o.button1.textContent + o.button2.textContent", arg);\n\n// Object destructuring works. Note that property names must match\n// between the destructured object and the argument.\n// Also note the required parenthesis.\nMap<String, ElementHandle> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("button2", button2);\npage.evaluate("({ button1, button2 }) => button1.textContent + button2.textContent", arg);\n\n// Array works as well. Arbitrary names can be used for destructuring.\n// Note the required parenthesis.\npage.evaluate(\n  "([b1, b2]) => b1.textContent + b2.textContent",\n  Arrays.asList(button1, button2));\n\n// Any non-cyclic mix of serializables and handles works.\nMap<String, Object> arg = new HashMap<>();\narg.put("button1", button1);\narg.put("list", Arrays.asList(button2));\narg.put("foo", 0);\npage.evaluate(\n  "x => x.button1.textContent + x.list[0].textContent + String(x.foo)",\n  arg);\n')),(0,a.kt)("p",null,"Right:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-java"}),'Map<String, Object> data = new HashMap<>();\ndata.put("text", "some data");\ndata.put("value", 1);\n// Pass |data| as a parameter.\nObject result = page.evaluate("data => {\\n" +\n  "  window.myApp.use(data);\\n" +\n  "}", data);\n')),(0,a.kt)("p",null,"Wrong:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-java"}),'Map<String, Object> data = new HashMap<>();\ndata.put("text", "some data");\ndata.put("value", 1);\nObject result = page.evaluate("() => {\\n" +\n  "  // There is no |data| in the web page.\\n" +\n  "  window.myApp.use(data);\\n" +\n  "}");\n')))}y.isMDXComponent=!0}}]);