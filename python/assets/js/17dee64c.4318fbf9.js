"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6960],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return r?a.createElement(d,o(o({ref:t},u),{},{components:r})):a.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3811:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7294),n=Object.defineProperty,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function c({children:e,hidden:t,className:r}){return a.createElement("div",((e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))i.call(t,r)&&s(e,r,t[r]);return e})({role:"tabpanel"},{hidden:t,className:r}),e)}},3824:function(e,t,r){r.d(t,{Z:function(){return v}});var a=r(7294),n=r(4939),l=r(9670),o=r(6010),i="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))f.call(t,r)&&d(e,r,t[r]);return e};function y(e){var t,r,n;const{lazy:s,block:p,defaultValue:m,values:f,groupId:d,className:y}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=f?f:v.map((({props:{value:e,label:t,attributes:r}})=>({value:e,label:t,attributes:r}))),g=(0,l.lx)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const O=null===m?m:null!=(n=null!=m?m:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==O&&!h.some((e=>e.value===O)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${O}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,l.UB)(),[j,T]=(0,a.useState)(O),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,l.o5)();if(null!=d){const e=k[d];null!=e&&e!==j&&h.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,r=N.indexOf(t),a=h[r].value;a!==j&&(P(t),T(a),null!=d&&w(d,a))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;t=N[r]||N[0];break}case"ArrowLeft":{const r=N.indexOf(e.currentTarget)-1;t=N[r]||N[N.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},y)},h.map((({value:e,label:t,attributes:r})=>{return a.createElement("li",(n=b({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>N.push(e),onKeyDown:x,onFocus:E,onClick:E},r),l={className:(0,o.Z)("tabs__item",i,null==r?void 0:r.className,{"tabs__item--active":j===e})},c(n,u(l))),null!=t?t:e);var n,l}))),s?(0,a.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function v(e){const t=(0,n.Z)();return a.createElement(y,b({key:String(t)},e))}},2574:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return h}});var a=r(3905),n=r(3824),l=r(3811),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&m(e,r,t[r]);return e};const d={id:"frames",title:"Frames"},b=void 0,y={unversionedId:"frames",id:"version-1.24/frames",title:"Frames",description:"- Frames",source:"@site/versioned_docs/version-1.24/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/python/docs/frames",tags:[],version:"1.24",frontMatter:{id:"frames",title:"Frames"},sidebar:"docs",previous:{title:"Extensibility",permalink:"/python/docs/extensibility"},next:{title:"Handles",permalink:"/python/docs/handles"}},v={},h=[{value:"Frames",id:"frames",level:2},{value:"Frame objects",id:"frame-objects",level:2}],g={toc:h};function O(e){var t,r=e,{components:o}=r,m=((e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=f(f({},g),m),i(t,s({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#frames"}),"Frames")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",f({parentName:"li"},{href:"#frame-objects"}),"Frame objects"))),(0,a.kt)("h2",f({},{id:"frames"}),"Frames"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",f({parentName:"p"},{href:"/python/docs/api/class-page",title:"Page"}),"Page")," can have one or more ",(0,a.kt)("a",f({parentName:"p"},{href:"/python/docs/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,a.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,a.kt)("p",null,"A page can have additional frames attached with the ",(0,a.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,a.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),"# Locate element inside frame\n# Get frame using any other selector\nusername = page.frame_locator('.frame-class').locator('#username-input')\nusername.fill('John')\n"))),(0,a.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),"# Locate element inside frame\nusername = await page.frame_locator('.frame-class').locator('#username-input')\nawait username.fill('John')\n")))),(0,a.kt)("h2",f({},{id:"frame-objects"}),"Frame objects"),(0,a.kt)("p",null,"One can access frame objects using the ",(0,a.kt)("a",f({parentName:"p"},{href:"/python/docs/api/class-page#page-frame"}),"page.frame(**kwargs)")," API:"),(0,a.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"sync",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),"# Get frame using the frame's name attribute\nframe = page.frame('frame-login')\n\n# Get frame using frame's URL\nframe = page.frame(url=r'.*domain.*')\n\n# Interact with the frame\nframe.fill('#username-input', 'John')\n"))),(0,a.kt)(l.Z,{value:"async",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-py"}),"# Get frame using the frame's name attribute\nframe = page.frame('frame-login')\n\n# Get frame using frame's URL\nframe = page.frame(url=r'.*domain.*')\n\n# Interact with the frame\nawait frame.fill('#username-input', 'John')\n")))))}O.isMDXComponent=!0}}]);