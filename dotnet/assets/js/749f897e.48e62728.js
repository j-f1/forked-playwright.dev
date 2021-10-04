"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7601],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,v=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,u=39;var d=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,p=e.groupId,f=e.className,v=a(),m=v.tabGroupChoices,w=v.setTabGroupChoices,h=(0,r.useState)(o),y=h[0],b=h[1],g=r.Children.toArray(e.children),k=[];if(null!=p){var x=m[p];null!=x&&x!==y&&d.some((function(e){return e.value===x}))&&b(x)}var N=function(e){var t=e.currentTarget,n=k.indexOf(t),r=d[n].value;b(r),null!=p&&(w(p,r),setTimeout((function(){var e,n,r,o,a,i,s,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,l=i.innerWidth,n>=0&&a<=l&&o<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case l:var o=k.indexOf(e.target)-1;n=k[o]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},f)},d.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:O,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9785:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"videos",title:"Videos"}),s=void 0,c={unversionedId:"videos",id:"version-1.13/videos",isDocsHomePage:!1,title:"Videos",description:"Playwright can record videos for all pages in a browser context. Videos are saved upon context closure, so make sure to await BrowserContext.CloseAsync().",source:"@site/versioned_docs/version-1.13/videos.mdx",sourceDirName:".",slug:"/videos",permalink:"/dotnet/docs/1.13/videos",version:"1.13",frontMatter:{id:"videos",title:"Videos"},sidebar:"version-1.13/docs",previous:{title:"Verification",permalink:"/dotnet/docs/1.13/verification"},next:{title:"Docker",permalink:"/dotnet/docs/1.13/docker"}},l=[{value:"API reference",id:"api-reference",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright can record videos for all pages in a ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/core-concepts#browser-contexts"},"browser context"),". Videos are saved upon context closure, so make sure to await ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-browsercontext#browser-context-close"},"BrowserContext.CloseAsync()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    RecordVideoDir = "videos/"\n});\n// Make sure to close, so that videos are saved.\nawait context.CloseAsync();\n')),(0,a.kt)("p",null,"You can also specify video size, it defaults to viewport size scaled down to fit 800x800."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var context = await browser.NewContextAsync(new BrowserNewContextOptions\n{\n    RecordVideoDir = "videos/",\n    RecordVideoSize = new RecordVideoSize() { Width = 640, Height = 480 }\n});\n// Make sure to close, so that videos are saved.\nawait context.CloseAsync();\n')),(0,a.kt)("p",null,"Saved video files will appear in the specified folder. They all have generated unique names. For the multi-page scenarios, you can access the video file associated with the page via the ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/api/class-page#page-video"},"Page.Video"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"var path = await page.Video.PathAsync();\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that the video is only available after the page or browser context is closed."))),(0,a.kt)("h3",{id:"api-reference"},"API reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-browser#browser-new-page"},"Browser.NewPageAsync(options)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/api/class-browsercontext#browser-context-close"},"BrowserContext.CloseAsync()"))))}d.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);