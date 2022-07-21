"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8840],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,v=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return r?n.createElement(v,o(o({ref:t},d),{},{components:r})):n.createElement(v,o({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2531:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return u},metadata:function(){return v},toc:function(){return m}});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&d(e,r,t[r]);return e};const u={id:"class-video",title:"Video"},h=void 0,v={unversionedId:"api/class-video",id:"version-1.23/api/class-video",title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/versioned_docs/version-1.23/api/class-video.mdx",sourceDirName:"api",slug:"/api/class-video",permalink:"/dotnet/docs/1.23/api/class-video",tags:[],version:"1.23",frontMatter:{id:"class-video",title:"Video"},sidebar:"api",previous:{title:"Tracing",permalink:"/dotnet/docs/1.23/api/class-tracing"},next:{title:"WebSocket",permalink:"/dotnet/docs/1.23/api/class-websocket"}},f={},m=[{value:"Video.DeleteAsync()",id:"video-delete",level:2},{value:"Video.PathAsync()",id:"video-path",level:2},{value:"Video.SaveAsAsync(path)",id:"video-save-as",level:2}],y={toc:m};function b(e){var t,r=e,{components:i}=r,d=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),d),a(t,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"When browser context is created with the ",(0,n.kt)("inlineCode",{parentName:"p"},"recordVideo")," option, each page has a video object associated with it."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-csharp"}),"Console.WriteLine(await page.Video.GetPathAsync());\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-video#video-delete"}),"Video.DeleteAsync()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-video#video-path"}),"Video.PathAsync()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"/dotnet/docs/1.23/api/class-video#video-save-as"}),"Video.SaveAsAsync(path)"))),(0,n.kt)("h2",p({},{id:"video-delete"}),"Video.DeleteAsync()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-delete-return"})," ","<",(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#video-delete-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Deletes the video file. Will wait for the video to finish if necessary."),(0,n.kt)("h2",p({},{id:"video-path"}),"Video.PathAsync()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-path-return"})," ","<",(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">",(0,n.kt)("a",{href:"#video-path-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."),(0,n.kt)("h2",p({},{id:"video-save-as"}),"Video.SaveAsAsync(path)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"path"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-option-path"})," ","<",(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"}),"string"),">"," Path where the video should be saved.",(0,n.kt)("a",{href:"#video-save-as-option-path",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"video-save-as-return"})," ","<",(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#video-save-as-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."))}b.isMDXComponent=!0}}]);