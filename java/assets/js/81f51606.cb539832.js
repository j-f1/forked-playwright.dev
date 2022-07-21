"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6897],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,v=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1884:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return m}});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"events",title:"Events"},f=void 0,v={unversionedId:"events",id:"version-1.24/events",title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/versioned_docs/version-1.24/events.mdx",sourceDirName:".",slug:"/events",permalink:"/java/docs/events",tags:[],version:"1.24",frontMatter:{id:"events",title:"Events"},sidebar:"docs",previous:{title:"Evaluating JavaScript",permalink:"/java/docs/evaluating"},next:{title:"Extensibility",permalink:"/java/docs/extensibility"}},g={},m=[{value:"Waiting for event",id:"waiting-for-event",level:2},{value:"Adding/removing event listener",id:"addingremoving-event-listener",level:2},{value:"Adding one-off listeners",id:"adding-one-off-listeners",level:2},{value:"API reference",id:"api-reference",level:3}],h={toc:m};function w(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},h),c),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#waiting-for-event"}),"Waiting for event")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#addingremoving-event-listener"}),"Adding/removing event listener")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#adding-one-off-listeners"}),"Adding one-off listeners"))),(0,r.kt)("h2",u({},{id:"waiting-for-event"}),"Waiting for event"),(0,r.kt)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),(0,r.kt)("p",null,"Wait for a request with the specified url:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// The callback lambda defines scope of the code that is expected to\n// trigger request.\nRequest request = page.waitForRequest("**/*logo*.png", () -> {\n  page.navigate("https://wikipedia.org");\n});\nSystem.out.println(request.url());\n')),(0,r.kt)("p",null,"Wait for popup window:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// The callback lambda defines scope of the code that is expected to\n// create popup window.\nPage popup = page.waitForPopup(() -> {\n  page.evaluate("window.open()");\n});\npopup.navigate("https://wikipedia.org");\n')),(0,r.kt)("h2",u({},{id:"addingremoving-event-listener"}),"Adding/removing event listener"),(0,r.kt)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'page.onRequest(request -> System.out.println("Request sent: " + request.url()));\nConsumer<Request> listener = request -> System.out.println("Request finished: " + request.url());\npage.onRequestFinished(listener);\npage.navigate("https://wikipedia.org");\n\n// Remove previously added listener, each on* method has corresponding off*\npage.offRequestFinished(listener);\npage.navigate("https://www.openstreetmap.org/");\n')),(0,r.kt)("h2",u({},{id:"adding-one-off-listeners"}),"Adding one-off listeners"),(0,r.kt)("p",null,"If certain event needs to be handled once, there is a convenience API for that:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-java"}),'page.onceDialog(dialog -> dialog.accept("2021"));\npage.evaluate("prompt(\'Enter a number:\')");\n')),(0,r.kt)("h3",u({},{id:"api-reference"}),"API reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browser",title:"Browser"}),"Browser")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-page",title:"Page"}),"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"/java/docs/api/class-worker",title:"Worker"}),"Worker"))))}w.isMDXComponent=!0}}]);