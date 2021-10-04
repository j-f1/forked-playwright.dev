"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[260],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),h=u(a),m=n,f=h["".concat(p,".").concat(m)]||h[m]||s[m]||i;return a?r.createElement(f,l(l({ref:e},c),{},{components:a})):r.createElement(f,l({ref:e},c))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(t,e,a){var r=a(7294);e.Z=function(t){var e=t.children,a=t.hidden,n=t.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},e)}},5064:function(t,e,a){a.d(e,{Z:function(){return s}});var r=a(7294),n=a(9443);var i=function(){var t=(0,r.useContext)(n.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},l=a(6010),o="tabItem_1uMI",p="tabItemActive_2DSg";var u=37,c=39;var s=function(t){var e=t.lazy,a=t.block,n=t.defaultValue,s=t.values,h=t.groupId,m=t.className,f=i(),d=f.tabGroupChoices,g=f.setTabGroupChoices,y=(0,r.useState)(n),v=y[0],k=y[1],b=r.Children.toArray(t.children),w=[];if(null!=h){var N=d[h];null!=N&&N!==v&&s.some((function(t){return t.value===N}))&&k(N)}var P=function(t){var e=t.currentTarget,a=w.indexOf(e),r=s[a].value;k(r),null!=h&&(g(h,r),setTimeout((function(){var t,a,r,n,i,l,o,u;(t=e.getBoundingClientRect(),a=t.top,r=t.left,n=t.bottom,i=t.right,l=window,o=l.innerHeight,u=l.innerWidth,a>=0&&i<=u&&n<=o&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(p),setTimeout((function(){return e.classList.remove(p)}),2e3))}),150))},j=function(t){var e,a;switch(t.keyCode){case c:var r=w.indexOf(t.target)+1;a=w[r]||w[0];break;case u:var n=w.indexOf(t.target)-1;a=w[n]||w[w.length-1]}null==(e=a)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},s.map((function(t){var e=t.value,a=t.label;return r.createElement("li",{role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":v===e}),key:e,ref:function(t){return w.push(t)},onKeyDown:j,onFocus:P,onClick:P},a)}))),e?(0,r.cloneElement)(b.filter((function(t){return t.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==v})}))))}},9443:function(t,e,a){var r=(0,a(7294).createContext)(void 0);e.Z=r},1537:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"languages",title:"Supported languages"}),o=void 0,p={unversionedId:"languages",id:"languages",isDocsHomePage:!1,title:"Supported languages",description:"The Playwright API is available in multiple languages.",source:"@site/docs/languages.mdx",sourceDirName:".",slug:"/languages",permalink:"/dotnet/docs/next/languages",version:"current",frontMatter:{id:"languages",title:"Supported languages"},sidebar:"docs",previous:{title:"Continuous Integration",permalink:"/dotnet/docs/next/ci"}},u=[{value:"JavaScript and TypeScript",id:"javascript-and-typescript",children:[]},{value:"Python",id:"python",children:[]},{value:"Java",id:"java",children:[]},{value:".NET",id:"net",children:[]}],c={toc:u};function s(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Playwright API is available in multiple languages."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#javascript-and-typescript"},"JavaScript and TypeScript")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#python"},"Python")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#java"},"Java")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#net"},".NET"))),(0,i.kt)("h2",{id:"javascript-and-typescript"},"JavaScript and TypeScript"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro/"},"Playwright for Node.js")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/playwright"},"NPM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright"},"GitHub repo"))),(0,i.kt)("h2",{id:"python"},"Python"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/python/docs/intro/"},"Playwright for Python")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/playwright/"},"Playwright on PyPI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-python"},"GitHub repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-pytest"},"Pytest integration"))),(0,i.kt)("h2",{id:"java"},"Java"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/java/docs/intro/"},"Playwright for Java")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/java/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/java/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-java"},"GitHub repo"))),(0,i.kt)("h2",{id:"net"},".NET"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/dotnet/docs/intro/"},"Playwright for .NET")," is available."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/intro/"},"Documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/dotnet/docs/api/class-playwright"},"API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/microsoft/playwright-dotnet"},"GitHub repo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/Microsoft.Playwright"},"Playwright on NuGet"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet add package Microsoft.Playwright\n")))}s.isMDXComponent=!0},6010:function(t,e,a){function r(t){var e,a,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(a=r(t[e]))&&(n&&(n+=" "),n+=a);else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function n(){for(var t,e,a=0,n="";a<arguments.length;)(t=arguments[a++])&&(e=r(t))&&(n&&(n+=" "),n+=e);return n}a.d(e,{Z:function(){return n}})}}]);