"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[645],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,f=e.groupId,d=e.className,m=a(),h=m.tabGroupChoices,v=m.setTabGroupChoices,b=(0,r.useState)(o),y=b[0],g=b[1],k=r.Children.toArray(e.children),w=[];if(null!=f){var O=h[f];null!=O&&O!==y&&p.some((function(e){return e.value===O}))&&g(O)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;g(r),null!=f&&(v(f,r),setTimeout((function(){var e,n,r,o,a,i,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&a<=s&&o<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case s:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},3500:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"class-touchscreen",title:"Touchscreen"}),c=void 0,l={unversionedId:"api/class-touchscreen",id:"version-1.12/api/class-touchscreen",isDocsHomePage:!1,title:"Touchscreen",description:"The Touchscreen class operates in main-frame CSS pixels relative to the top-left corner of the viewport. Methods on the touchscreen can only be used in browser contexts that have been initialized with hasTouch set to true.",source:"@site/versioned_docs/version-1.12/api/class-touchscreen.mdx",sourceDirName:"api",slug:"/api/class-touchscreen",permalink:"/dotnet/docs/1.12/api/class-touchscreen",version:"1.12",frontMatter:{id:"class-touchscreen",title:"Touchscreen"},sidebar:"version-1.12/api",previous:{title:"TimeoutError",permalink:"/dotnet/docs/1.12/api/class-timeouterror"},next:{title:"Tracing",permalink:"/dotnet/docs/1.12/api/class-tracing"}},s=[{value:"Touchscreen.TapAsync(x, y)",id:"touchscreen-tap",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Touchscreen class operates in main-frame CSS pixels relative to the top-left corner of the viewport. Methods on the touchscreen can only be used in browser contexts that have been initialized with ",(0,a.kt)("inlineCode",{parentName:"p"},"hasTouch")," set to true."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.12/api/class-touchscreen#touchscreen-tap"},"Touchscreen.TapAsync(x, y)"))),(0,a.kt)("h2",{id:"touchscreen-tap"},"Touchscreen.TapAsync(x, y)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x")," ","<","[double]",">"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y")," ","<","[double]",">"),(0,a.kt)("li",{parentName:"ul"},"returns: ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">")),(0,a.kt)("p",null,"Dispatches a ",(0,a.kt)("inlineCode",{parentName:"p"},"touchstart")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"touchend")," event with a single touch at the position (",(0,a.kt)("inlineCode",{parentName:"p"},"x"),",",(0,a.kt)("inlineCode",{parentName:"p"},"y"),")."))}p.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);