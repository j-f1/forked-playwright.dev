"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1990],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},k=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=p(t),d=n,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||o;return t?a.createElement(m,l(l({ref:r},c),{},{components:t})):a.createElement(m,l({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=k;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},571:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return k},metadata:function(){return m},toc:function(){return h}});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))p.call(r,t)&&c(e,t,r[t]);return e};const k={id:"class-worker",title:"Worker"},d=void 0,m={unversionedId:"api/class-worker",id:"version-1.19/api/class-worker",title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/versioned_docs/version-1.19/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/dotnet/docs/1.19/api/class-worker",tags:[],version:"1.19",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"version-1.19/api",previous:{title:"WebSocketFrame",permalink:"/dotnet/docs/1.19/api/class-websocketframe"}},f={},h=[{value:"event Worker.Close",id:"worker-event-close",level:2},{value:"Worker.EvaluateAsync(expression, arg)",id:"worker-evaluate",level:2},{value:"Worker.EvaluateHandleAsync(expression, arg)",id:"worker-evaluate-handle",level:2},{value:"Worker.Url",id:"worker-url",level:2}],v={toc:h};function w(e){var r,t=e,{components:n}=t,c=((e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(r=u(u({},v),c),o(r,l({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The Worker class represents a ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,a.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'page.Worker += (_, worker) =>\n{\n    Console.WriteLine($"Worker created: {worker.Url}");\n    worker.Close += (_, _) => Console.WriteLine($"Worker closed {worker.Url}");\n};\n\nConsole.WriteLine("Current Workers:");\nforeach(var pageWorker in page.Workers)\n{\n    Console.WriteLine($"\\tWorker: {pageWorker.Url}");\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.19/api/class-worker#worker-event-close"}),"event Worker.Close")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.EvaluateAsync(expression, arg)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate-handle"}),"Worker.EvaluateHandleAsync(expression, arg)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.19/api/class-worker#worker-url"}),"Worker.Url"))),(0,a.kt)("h2",u({},{id:"worker-event-close"}),"event Worker.Close"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.19/api/class-worker",title:"Worker"}),"Worker"),">")),(0,a.kt)("p",null,"Emitted when this dedicated ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is terminated."),(0,a.kt)("h2",u({},{id:"worker-evaluate"}),"Worker.EvaluateAsync(expression, arg)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expression"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-expression"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,a.kt)("a",{href:"#worker-evaluate-option-expression",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arg"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-arg"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.19/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"?",">"," Optional argument to pass to ",(0,a.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,a.kt)("a",{href:"#worker-evaluate-option-arg",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-return"})," ","<","[object]",">",(0,a.kt)("a",{href:"#worker-evaluate-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,a.kt)("p",null,"If the function passed to the ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.EvaluateAsync(expression, arg)")," returns a ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.EvaluateAsync(expression, arg)")," would wait for the promise to resolve and return its value."),(0,a.kt)("p",null,"If the function passed to the ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.EvaluateAsync(expression, arg)")," returns a non-",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.EvaluateAsync(expression, arg)")," returns ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,a.kt)("h2",u({},{id:"worker-evaluate-handle"}),"Worker.EvaluateHandleAsync(expression, arg)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expression"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-expression"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,a.kt)("a",{href:"#worker-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"arg"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-arg"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.19/evaluating#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"?",">"," Optional argument to pass to ",(0,a.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,a.kt)("a",{href:"#worker-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/1.19/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">",(0,a.kt)("a",{href:"#worker-evaluate-handle-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,a.kt)("p",null,"The only difference between ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate"}),"Worker.EvaluateAsync(expression, arg)")," and ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate-handle"}),"Worker.EvaluateHandleAsync(expression, arg)")," is that ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate-handle"}),"Worker.EvaluateHandleAsync(expression, arg)")," returns ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),(0,a.kt)("p",null,"If the function passed to the ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate-handle"}),"Worker.EvaluateHandleAsync(expression, arg)")," returns a ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",(0,a.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/1.19/api/class-worker#worker-evaluate-handle"}),"Worker.EvaluateHandleAsync(expression, arg)")," would wait for the promise to resolve and return its value."),(0,a.kt)("h2",u({},{id:"worker-url"}),"Worker.Url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-url-return"})," ","<",(0,a.kt)("a",u({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#worker-url-return",class:"list-anchor"},"#"))))}w.isMDXComponent=!0}}]);