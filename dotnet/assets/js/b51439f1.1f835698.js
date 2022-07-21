"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5118],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,v=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5618:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return m}});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e};const d={id:"events",title:"Events"},f=void 0,v={unversionedId:"events",id:"version-1.23/events",title:"Events",description:"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:",source:"@site/versioned_docs/version-1.23/events.mdx",sourceDirName:".",slug:"/events",permalink:"/dotnet/docs/1.23/events",tags:[],version:"1.23",frontMatter:{id:"events",title:"Events"},sidebar:"docs",previous:{title:"Evaluating JavaScript",permalink:"/dotnet/docs/1.23/evaluating"},next:{title:"Extensibility",permalink:"/dotnet/docs/1.23/extensibility"}},g={},m=[{value:"Waiting for event",id:"waiting-for-event",level:2},{value:"Adding/removing event listener",id:"addingremoving-event-listener",level:2}],y={toc:m};function w(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},y),c),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"Playwright allows listening to various types of events happening in the web page, such as network requests, creation of child pages, dedicated workers etc. There are several ways to subscribe to such events:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#waiting-for-event"}),"Waiting for event")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"#addingremoving-event-listener"}),"Adding/removing event listener"))),(0,r.kt)("h2",u({},{id:"waiting-for-event"}),"Waiting for event"),(0,r.kt)("p",null,"Most of the time, scripts will need to wait for a particular event to happen. Below are some of the typical event awaiting patterns."),(0,r.kt)("p",null,"Wait for a request with the specified url:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var waitForRequestTask = page.WaitForRequestAsync("**/*logo*.png");\nawait page.GotoAsync("https://wikipedia.org");\nvar request = await waitForRequestTask;\nConsole.WriteLine(request.Url);\n')),(0,r.kt)("p",null,"Wait for popup window:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'var popup = await page.RunAndWaitForPopupAsync(async =>\n{\n    await page.EvaluateAsync("window.open()");\n});\nawait popup.GotoAsync("https://wikipedia.org");\n')),(0,r.kt)("h2",u({},{id:"addingremoving-event-listener"}),"Adding/removing event listener"),(0,r.kt)("p",null,"Sometimes, events happen in random time and instead of waiting for them, they need to be handled. Playwright supports traditional language mechanisms for subscribing and unsubscribing from the events:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'page.Request += (_, request) => Console.WriteLine("Request sent: " + request.Url);\nvoid listener(object sender, IRequest request)\n{\n    Console.WriteLine("Request finished: " + request.Url);\n};\npage.RequestFinished += listener;\nawait page.GotoAsync("https://wikipedia.org");\n\n// Remove previously added listener.\npage.RequestFinished -= listener;\nawait page.GotoAsync("https://www.openstreetmap.org/");\n')))}w.isMDXComponent=!0}}]);