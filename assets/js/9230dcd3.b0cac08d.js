"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3875],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return h}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),h=r,u=m["".concat(o,".").concat(h)]||m[h]||d[h]||l;return t?n.createElement(u,s(s({ref:a},c),{},{components:t})):n.createElement(u,s({ref:a},c))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74752:function(e,a,t){t.r(a),t.d(a,{assets:function(){return f},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return g}});var n=t(3905),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,a,t)=>a in e?r(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&c(e,t,a[t]);if(i)for(var t of i(a))p.call(a,t)&&c(e,t,a[t]);return e};const m={id:"handles",title:"Handles"},h=void 0,u={unversionedId:"handles",id:"version-1.23/handles",title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.23/handles.mdx",sourceDirName:".",slug:"/handles",permalink:"/docs/1.23/handles",tags:[],version:"1.23",frontMatter:{id:"handles",title:"Handles"},sidebar:"docs",previous:{title:"Frames",permalink:"/docs/1.23/frames"},next:{title:"Input",permalink:"/docs/1.23/input"}},f={},g=[{value:"API reference",id:"api-reference",level:3},{value:"Element Handles",id:"element-handles",level:2},{value:"Handles as parameters",id:"handles-as-parameters",level:2},{value:"Handle Lifecycle",id:"handle-lifecycle",level:2},{value:"API reference",id:"api-reference-1",level:3}],y={toc:g};function v(e){var a,t=e,{components:r}=t,c=((e,a)=>{var t={};for(var n in e)o.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))a.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(a=d(d({},y),c),l(a,s({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-jshandle",title:"JSHandle"}),"JSHandle")," to reference any JavaScript objects in the page"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),(0,n.kt)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is a ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-jshandle",title:"JSHandle"}),"JSHandle")," as well."),(0,n.kt)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-jshandle",title:"JSHandle"}),"JSHandle")," class API for these and methods."),(0,n.kt)("h3",d({},{id:"api-reference"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-jshandle",title:"JSHandle"}),"JSHandle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"))),(0,n.kt)("p",null,"Here is the easiest way to obtain a ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"const jsHandle = await page.evaluateHandle('window');\n//  Use jsHandle for evaluations.\n")),(0,n.kt)("h2",d({},{id:"element-handles"}),"Element Handles"),(0,n.kt)("div",d({},{className:"admonition admonition-caution alert alert--warning"}),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),(0,n.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Discouraged")),(0,n.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"The use of ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is discouraged, use ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-locator",title:"Locator"}),"Locator")," objects and web-first assertions instead."))),(0,n.kt)("p",null,"When ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is required, it is recommended to fetch it with the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-page#page-wait-for-selector"}),"page.waitForSelector(selector[, options])")," or ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-frame#frame-wait-for-selector"}),"frame.waitForSelector(selector[, options])")," methods. These APIs wait for the element to be attached and visible."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// Get the element handle\nconst elementHandle = page.waitForSelector('#box');\n\n// Assert bounding box for the element\nconst boundingBox = await elementHandle.boundingBox();\nexpect(boundingBox.width).toBe(100);\n\n// Assert attribute for the element\nconst classNames = await elementHandle.getAttribute('class');\nexpect(classNames.includes('highlighted')).toBeTruthy();\n")),(0,n.kt)("h2",d({},{id:"handles-as-parameters"}),"Handles as parameters"),(0,n.kt)("p",null,"Handles can be passed into the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-page#page-evaluate"}),"page.evaluate(pageFunction[, arg])")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// Create new array in page.\nconst myArrayHandle = await page.evaluateHandle(() => {\n  window.myArray = [1];\n  return myArray;\n});\n\n// Get the length of the array.\nconst length = await page.evaluate(a => a.length, myArrayHandle);\n\n// Add one more element to the array using the handle\nawait page.evaluate(arg => arg.myArray.push(arg.newElement), {\n  myArray: myArrayHandle,\n  newElement: 2\n});\n\n// Release the object when it's no longer needed.\nawait myArrayHandle.dispose();\n")),(0,n.kt)("h2",d({},{id:"handle-lifecycle"}),"Handle Lifecycle"),(0,n.kt)("p",null,"Handles can be acquired using the page methods such as ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-page#page-evaluate-handle"}),"page.evaluateHandle(pageFunction[, arg])"),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-page#page-query-selector"}),"page.$(selector[, options])")," or ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-page#page-query-selector-all"}),"page.$$(selector)")," or their frame counterparts ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-frame#frame-evaluate-handle"}),"frame.evaluateHandle(pageFunction[, arg])"),", ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-frame#frame-query-selector"}),"frame.$(selector[, options])")," or ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-frame#frame-query-selector-all"}),"frame.$$(selector)"),". Once created, handles will retain object from ",(0,n.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"}),"garbage collection")," unless page navigates or the handle is manually disposed via the ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/1.23/api/class-jshandle#js-handle-dispose"}),"jsHandle.dispose()")," method."),(0,n.kt)("h3",d({},{id:"api-reference-1"}),"API reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-jshandle",title:"JSHandle"}),"JSHandle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-elementhandle#element-handle-bounding-box"}),"elementHandle.boundingBox()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-elementhandle#element-handle-get-attribute"}),"elementHandle.getAttribute(name)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-elementhandle#element-handle-inner-text"}),"elementHandle.innerText()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-elementhandle#element-handle-inner-html"}),"elementHandle.innerHTML()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-elementhandle#element-handle-text-content"}),"elementHandle.textContent()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-jshandle#js-handle-evaluate"}),"jsHandle.evaluate(pageFunction[, arg])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-page#page-evaluate-handle"}),"page.evaluateHandle(pageFunction[, arg])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-page#page-query-selector"}),"page.$(selector[, options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"/docs/1.23/api/class-page#page-query-selector-all"}),"page.$$(selector)"))))}v.isMDXComponent=!0}}]);