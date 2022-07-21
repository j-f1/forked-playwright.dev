"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2066],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,d=m["".concat(i,".").concat(g)]||m[g]||u[g]||o;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9486:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return k}});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e};const m={id:"class-consolemessage",title:"ConsoleMessage"},g=void 0,d={unversionedId:"api/class-consolemessage",id:"version-1.23/api/class-consolemessage",title:"ConsoleMessage",description:"ConsoleMessage] objects are dispatched by page via the [page.on('console') event. For each console messages logged in the page there will be corresponding event in the Playwright context.",source:"@site/versioned_docs/version-1.23/api/class-consolemessage.mdx",sourceDirName:"api",slug:"/api/class-consolemessage",permalink:"/docs/1.23/api/class-consolemessage",tags:[],version:"1.23",frontMatter:{id:"class-consolemessage",title:"ConsoleMessage"},sidebar:"api",previous:{title:"CDPSession",permalink:"/docs/1.23/api/class-cdpsession"},next:{title:"Coverage",permalink:"/docs/1.23/api/class-coverage"}},f={},k=[{value:"consoleMessage.args()",id:"console-message-args",level:2},{value:"consoleMessage.location()",id:"console-message-location",level:2},{value:"consoleMessage.text()",id:"console-message-text",level:2},{value:"consoleMessage.type()",id:"console-message-type",level:2}],h={toc:k};function b(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},h),p),o(t,s({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("a",u({parentName:"p"},{href:"/docs/1.23/api/class-consolemessage",title:"ConsoleMessage"}),"ConsoleMessage")," objects are dispatched by page via the ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/1.23/api/class-page#page-event-console"}),"page.on('console')")," event. For each console messages logged in the page there will be corresponding event in the Playwright context."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"// Listen for all console logs\npage.on('console', msg => console.log(msg.text()))\n\n// Listen for all console events and handle errors\npage.on('console', msg => {\n  if (msg.type() === 'error')\n    console.log(`Error text: \"${msg.text()}\"`);\n});\n\n// Get the next console log\nconst [msg] = await Promise.all([\n  page.waitForEvent('console'),\n  // Issue console.log inside the page\n  page.evaluate(() => {\n    console.log('hello', 42, { foo: 'bar' });\n  }),\n]);\n\n// Deconstruct console log arguments\nawait msg.args[0].jsonValue() // hello\nawait msg.args[1].jsonValue() // 42\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.23/api/class-consolemessage#console-message-args"}),"consoleMessage.args()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.23/api/class-consolemessage#console-message-location"}),"consoleMessage.location()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.23/api/class-consolemessage#console-message-text"}),"consoleMessage.text()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.23/api/class-consolemessage#console-message-type"}),"consoleMessage.type()"))),(0,a.kt)("h2",u({},{id:"console-message-args"}),"consoleMessage.args()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-args-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,a.kt)("a",u({parentName:"li"},{href:"/docs/1.23/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",">",(0,a.kt)("a",{href:"#console-message-args-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"List of arguments passed to a ",(0,a.kt)("inlineCode",{parentName:"p"},"console")," function call. See also ",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/1.23/api/class-page#page-event-console"}),"page.on('console')"),"."),(0,a.kt)("h2",u({},{id:"console-message-location"}),"consoleMessage.location()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-location-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,a.kt)("a",{href:"#console-message-location-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"url")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," URL of the resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lineNumber")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," 0-based line number in the resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"columnNumber")," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," 0-based column number in the resource.")))),(0,a.kt)("h2",u({},{id:"console-message-text"}),"consoleMessage.text()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-text-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#console-message-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"The text of the console message."),(0,a.kt)("h2",u({},{id:"console-message-type"}),"consoleMessage.type()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-type-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#console-message-type-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"One of the following values: ",(0,a.kt)("inlineCode",{parentName:"p"},"'log'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'debug'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'info'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'error'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'warning'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'dir'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'dirxml'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'table'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'trace'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'clear'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'startGroup'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'startGroupCollapsed'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'endGroup'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'assert'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'profile'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'profileEnd'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'count'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'timeEnd'"),"."))}b.isMDXComponent=!0}}]);