"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5646],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=l.createContext({}),p=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return a?l.createElement(k,o(o({ref:t},s),{},{components:a})):l.createElement(k,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(7294),n=Object.defineProperty,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return l.createElement("div",((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&c(e,a,t[a]);if(r)for(var a of r(t))i.call(t,a)&&c(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return y}});var l=a(7294),n=a(4939),r=a(9670),o=a(6010),i="tabItem_LplD",c=Object.defineProperty,p=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&k(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&k(e,a,t[a]);return e};function f(e){var t,a,n;const{lazy:c,block:u,defaultValue:m,values:d,groupId:k,className:f}=e,y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=d?d:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,r.lx)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:null!=(n=null!=m?m:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:null==(a=y[0])?void 0:a.props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,r.UB)(),[T,x]=(0,l.useState)(v),I=[],{blockElementScrollPositionUntilNextRender:_}=(0,r.o5)();if(null!=k){const e=N[k];null!=e&&e!==T&&g.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,a=I.indexOf(t),l=g[a].value;l!==T&&(_(t),x(l),null!=k&&w(k,l))},O=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=I.indexOf(e.currentTarget)+1;t=I[a]||I[0];break}case"ArrowLeft":{const a=I.indexOf(e.currentTarget)-1;t=I[a]||I[I.length-1];break}}null==t||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},g.map((({value:e,label:t,attributes:a})=>{return l.createElement("li",(n=h({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>I.push(e),onKeyDown:O,onFocus:C,onClick:C},a),r={className:(0,o.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":T===e})},p(n,s(r))),null!=t?t:e);var n,r}))),c?(0,l.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function y(e){const t=(0,n.Z)();return l.createElement(f,h({key:String(t)},e))}},4579:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return g}});var l=a(3905),n=a(3824),r=a(3811),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&m(e,a,t[a]);return e};const k={id:"input",title:"Input"},h=void 0,f={unversionedId:"input",id:"version-1.24/input",title:"Input",description:"- Text input",source:"@site/versioned_docs/version-1.24/input.mdx",sourceDirName:".",slug:"/input",permalink:"/python/docs/input",tags:[],version:"1.24",frontMatter:{id:"input",title:"Input"},sidebar:"docs",previous:{title:"Handles",permalink:"/python/docs/handles"},next:{title:"Locators",permalink:"/python/docs/locators"}},y={},g=[{value:"Text input",id:"text-input",level:2},{value:"API reference",id:"api-reference",level:3},{value:"Checkboxes and radio buttons",id:"checkboxes-and-radio-buttons",level:2},{value:"API reference",id:"api-reference-1",level:3},{value:"Select options",id:"select-options",level:2},{value:"API reference",id:"api-reference-2",level:3},{value:"Mouse click",id:"mouse-click",level:2},{value:"Forcing the click",id:"forcing-the-click",level:4},{value:"Programmatic click",id:"programmatic-click",level:4},{value:"API reference",id:"api-reference-3",level:3},{value:"Type characters",id:"type-characters",level:2},{value:"API reference",id:"api-reference-4",level:3},{value:"Keys and shortcuts",id:"keys-and-shortcuts",level:2},{value:"API reference",id:"api-reference-5",level:3},{value:"Upload files",id:"upload-files",level:2},{value:"API reference",id:"api-reference-6",level:3},{value:"Focus element",id:"focus-element",level:2},{value:"API reference",id:"api-reference-7",level:3}],b={toc:g};function v(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var l in e)s.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&p)for(var l of p(e))t.indexOf(l)<0&&u.call(e,l)&&(a[l]=e[l]);return a})(a,["components"]);return(0,l.kt)("wrapper",(t=d(d({},b),m),i(t,c({components:o,mdxType:"MDXLayout"}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"#text-input"}),"Text input")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"#checkboxes-and-radio-buttons"}),"Checkboxes and radio buttons")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"#select-options"}),"Select options")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"#mouse-click"}),"Mouse click")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"#type-characters"}),"Type characters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"#keys-and-shortcuts"}),"Keys and shortcuts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"#upload-files"}),"Upload files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"#focus-element"}),"Focus element"))),(0,l.kt)("h2",d({},{id:"text-input"}),"Text input"),(0,l.kt)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",(0,l.kt)("inlineCode",{parentName:"p"},"<input>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"<textarea>"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"[contenteditable]")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"<label>")," associated with an input or textarea."),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Text input\npage.locator('#name').fill('Peter')\n\n# Date input\npage.locator('#date').fill('2020-02-02')\n\n# Time input\npage.locator('#time').fill('13:15')\n\n# Local datetime input\npage.locator('#local').fill('2020-03-02T05:15')\n\n# Input through label\npage.locator('text=First Name').fill('Peter')\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Text input\nawait page.locator('#name').fill('Peter')\n\n# Date input\nawait page.locator('#date').fill('2020-02-02')\n\n# Time input\nawait page.locator('#time').fill('13:15')\n\n# Local datetime input\nawait page.locator('#local').fill('2020-03-02T05:15')\n\n# Input through label\nawait page.locator('text=First Name').fill('Peter')\n")))),(0,l.kt)("h3",d({},{id:"api-reference"}),"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-fill"}),"locator.fill(value, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-fill"}),"page.fill(selector, value, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-frame#frame-fill"}),"frame.fill(selector, value, **kwargs)"))),(0,l.kt)("br",null),(0,l.kt)("h2",d({},{id:"checkboxes-and-radio-buttons"}),"Checkboxes and radio buttons"),(0,l.kt)("p",null,"This is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with ",(0,l.kt)("inlineCode",{parentName:"p"},"input[type=checkbox]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"input[type=radio]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"[role=checkbox]")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"label")," associated with checkbox or radio button."),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Check the checkbox\npage.locator('#agree').check()\n\n# Assert the checked state\nassert page.locator('#agree').is_checked() is True\n\n# Uncheck by input <label>.\npage.locator('#subscribe-label').uncheck()\n\n# Select the radio button\npage.locator('text=XL').check()\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Check the checkbox\nawait page.locator('#agree').check()\n\n# Assert the checked state\nassert await page.locator('#agree').is_checked() is True\n\n# Uncheck by input <label>.\nawait page.locator('#subscribe-label').uncheck()\n\n# Select the radio button\nawait page.locator('text=XL').check()\n")))),(0,l.kt)("h3",d({},{id:"api-reference-1"}),"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-check"}),"locator.check(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-is-checked"}),"locator.is_checked(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-uncheck"}),"locator.uncheck(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-check"}),"page.check(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-is-checked"}),"page.is_checked(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-uncheck"}),"page.uncheck(selector, **kwargs)"))),(0,l.kt)("br",null),(0,l.kt)("h2",d({},{id:"select-options"}),"Select options"),(0,l.kt)("p",null,"Selects one or multiple options in the ",(0,l.kt)("inlineCode",{parentName:"p"},"<select>")," element. You can specify option ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"label")," to select. Multiple options can be selected."),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Single selection matching the value\npage.locator('select#colors').select_option('blue')\n\n# Single selection matching the label\npage.locator('select#colors').select_option(label='Blue')\n\n# Multiple selected items\npage.locator('select#colors').select_option(['red', 'green', 'blue'])\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Single selection matching the value\nawait page.locator('select#colors').select_option('blue')\n\n# Single selection matching the label\nawait page.locator('select#colors').select_option(label='Blue')\n\n# Multiple selected items\nawait page.locator('select#colors').select_option(['red', 'green', 'blue'])\n")))),(0,l.kt)("h3",d({},{id:"api-reference-2"}),"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-select-option"}),"locator.select_option(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-select-option"}),"page.select_option(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-frame#frame-select-option"}),"frame.select_option(selector, **kwargs)"))),(0,l.kt)("br",null),(0,l.kt)("h2",d({},{id:"mouse-click"}),"Mouse click"),(0,l.kt)("p",null,"Performs a simple human click."),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Generic click\npage.locator('button#submit').click()\n\n# Double click\npage.locator('#item').dblclick()\n\n# Right click\npage.locator('#item').click(button='right')\n\n# Shift + click\npage.locator('#item').click(modifiers=['Shift'])\n\n# Hover over element\npage.locator('#item').hover()\n\n# Click the top left corner\npage.locator('#item').click(position={ 'x': 0, 'y': 0})\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Generic click\nawait page.locator('button#submit').click()\n\n# Double click\nawait page.locator('#item').dblclick()\n\n# Right click\nawait page.locator('#item').click(button='right')\n\n# Shift + click\nawait page.locator('#item').click(modifiers=['Shift'])\n\n# Hover over element\nawait page.locator('#item').hover()\n\n# Click the top left corner\nawait page.locator('#item').click(position={ 'x': 0, 'y': 0})\n")))),(0,l.kt)("p",null,"Under the hood, this and other pointer-related methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),(0,l.kt)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",(0,l.kt)("inlineCode",{parentName:"li"},"display:none"),", no ",(0,l.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,l.kt)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),(0,l.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,l.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),(0,l.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,l.kt)("h4",d({},{id:"forcing-the-click"}),"Forcing the click"),(0,l.kt)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",(0,l.kt)("a",d({parentName:"p"},{href:"/python/docs/actionability"}),"actionability")," checks and force the click:"),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"page.locator('button#submit').click(force=True)\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await page.locator('button#submit').click(force=True)\n")))),(0,l.kt)("h4",d({},{id:"programmatic-click"}),"Programmatic click"),(0,l.kt)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",(0,l.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"}),(0,l.kt)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"page.locator('button#submit').dispatch_event('click')\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await page.locator('button#submit').dispatch_event('click')\n")))),(0,l.kt)("h3",d({},{id:"api-reference-3"}),"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-click"}),"locator.click(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-click"}),"page.click(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-frame#frame-click"}),"frame.click(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-dblclick"}),"locator.dblclick(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-dblclick"}),"page.dblclick(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-frame#frame-dblclick"}),"frame.dblclick(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-hover"}),"locator.hover(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-hover"}),"page.hover(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-frame#frame-hover"}),"frame.hover(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-dispatch-event"}),"locator.dispatch_event(type, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-dispatch-event"}),"page.dispatch_event(selector, type, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-frame#frame-dispatch-event"}),"frame.dispatch_event(selector, type, **kwargs)"))),(0,l.kt)("br",null),(0,l.kt)("h2",d({},{id:"type-characters"}),"Type characters"),(0,l.kt)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Type character by character\npage.locator('#area').type('Hello World!')\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Type character by character\nawait page.locator('#area').type('Hello World!')\n")))),(0,l.kt)("p",null,"This method will emit all the necessary keyboard events, with all the ",(0,l.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"keyup"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",(0,l.kt)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),(0,l.kt)("div",d({},{className:"admonition admonition-note alert alert--secondary"}),(0,l.kt)("div",d({parentName:"div"},{className:"admonition-heading"}),(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",d({parentName:"h5"},{className:"admonition-icon"}),(0,l.kt)("svg",d({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,l.kt)("path",d({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,l.kt)("div",d({parentName:"div"},{className:"admonition-content"}),(0,l.kt)("p",{parentName:"div"},"Most of the time, ",(0,l.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-page#page-fill"}),"page.fill(selector, value, **kwargs)")," will just work. You only need to type characters if there is special keyboard handling on the page."))),(0,l.kt)("h3",d({},{id:"api-reference-4"}),"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-type"}),"locator.type(text, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-type"}),"page.type(selector, text, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-frame#frame-type"}),"frame.type(selector, text, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-keyboard#keyboard-type"}),"keyboard.type(text, **kwargs)"))),(0,l.kt)("br",null),(0,l.kt)("h2",d({},{id:"keys-and-shortcuts"}),"Keys and shortcuts"),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Hit Enter\npage.locator('#submit').press('Enter')\n\n# Dispatch Control+Right\npage.locator('#name').press('Control+ArrowRight')\n\n# Press $ sign on keyboard\npage.locator('#value').press('$')\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# Hit Enter\nawait page.locator('#submit').press('Enter')\n\n# Dispatch Control+Right\nawait page.locator('#name').press('Control+ArrowRight')\n\n# Press $ sign on keyboard\nawait page.locator('#value').press('$')\n")))),(0,l.kt)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",(0,l.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," property of the keyboard events:"),(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{}),"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can alternatively specify a single character you'd like to produce such as ",(0,l.kt)("inlineCode",{parentName:"li"},'"a"')," or ",(0,l.kt)("inlineCode",{parentName:"li"},'"#"'),"."),(0,l.kt)("li",{parentName:"ul"},"Following modification shortcuts are also supported: ",(0,l.kt)("inlineCode",{parentName:"li"},"Shift, Control, Alt, Meta"),".")),(0,l.kt)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",(0,l.kt)("inlineCode",{parentName:"p"},'"a"')," and ",(0,l.kt)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# <input id=name>\npage.locator('#name').press('Shift+A')\n\n# <input id=name>\npage.locator('#name').press('Shift+ArrowLeft')\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"# <input id=name>\nawait page.locator('#name').press('Shift+A')\n\n# <input id=name>\nawait page.locator('#name').press('Shift+ArrowLeft')\n")))),(0,l.kt)("p",null,"Shortcuts such as ",(0,l.kt)("inlineCode",{parentName:"p"},'"Control+o"')," or ",(0,l.kt)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,l.kt)("p",null,"Note that you still need to specify the capital ",(0,l.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",(0,l.kt)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),(0,l.kt)("h3",d({},{id:"api-reference-5"}),"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-press"}),"locator.press(key, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-press"}),"page.press(selector, key, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-frame#frame-press"}),"frame.press(selector, key, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-keyboard#keyboard-press"}),"keyboard.press(key, **kwargs)"))),(0,l.kt)("br",null),(0,l.kt)("h2",d({},{id:"upload-files"}),"Upload files"),(0,l.kt)("p",null,"You can select input files for upload using the ",(0,l.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-page#page-set-input-files"}),"page.set_input_files(selector, files, **kwargs)")," method. It expects first argument to point to an ",(0,l.kt)("a",d({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"}),"input element")," with the type ",(0,l.kt)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files."),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Select one file\npage.locator(\'input#upload\').set_input_files(\'myfile.pdf\')\n\n# Select multiple files\npage.locator(\'input#upload\').set_input_files([\'file1.txt\', \'file2.txt\'])\n\n# Remove all the selected files\npage.locator(\'input#upload\').set_input_files([])\n\n# Upload buffer from memory\npage.locator("input#upload").set_input_files(\n    files=[\n        {"name": "test.txt", "mimeType": "text/plain", "buffer": b"this is a test"}\n    ],\n)\n'))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),'# Select one file\nawait page.locator(\'input#upload\').set_input_files(\'myfile.pdf\')\n\n# Select multiple files\nawait page.locator(\'input#upload\').set_input_files([\'file1.txt\', \'file2.txt\'])\n\n# Remove all the selected files\nawait page.locator(\'input#upload\').set_input_files([])\n\n# Upload buffer from memory\nawait page.locator("input#upload").set_input_files(\n    files=[\n        {"name": "test.txt", "mimeType": "text/plain", "buffer": b"this is a test"}\n    ],\n)\n')))),(0,l.kt)("p",null,"If you don't have input element in hand (it is created dynamically), you can handle the ",(0,l.kt)("a",d({parentName:"p"},{href:"/python/docs/api/class-page#page-event-file-chooser"}),'page.on("filechooser")')," event or use a corresponding waiting method upon your action:"),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),'with page.expect_file_chooser() as fc_info:\n    page.locator("upload").click()\nfile_chooser = fc_info.value\nfile_chooser.set_files("myfile.pdf")\n'))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),'async with page.expect_file_chooser() as fc_info:\n    await page.locator("upload").click()\nfile_chooser = await fc_info.value\nawait file_chooser.set_files("myfile.pdf")\n')))),(0,l.kt)("h3",d({},{id:"api-reference-6"}),"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-filechooser",title:"FileChooser"}),"FileChooser")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-set-input-files"}),"locator.set_input_files(files, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-set-input-files"}),"page.set_input_files(selector, files, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-frame#frame-set-input-files"}),"frame.set_input_files(selector, files, **kwargs)"))),(0,l.kt)("br",null),(0,l.kt)("h2",d({},{id:"focus-element"}),"Focus element"),(0,l.kt)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),(0,l.kt)(n.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"sync",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"page.locator('input#name').focus()\n"))),(0,l.kt)(r.Z,{value:"async",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",d({parentName:"pre"},{className:"language-py"}),"await page.locator('input#name').focus()\n")))),(0,l.kt)("h3",d({},{id:"api-reference-7"}),"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-locator#locator-focus"}),"locator.focus(**kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-page#page-focus"}),"page.focus(selector, **kwargs)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",d({parentName:"li"},{href:"/python/docs/api/class-frame#frame-focus"}),"frame.focus(selector, **kwargs)"))),(0,l.kt)("br",null))}v.isMDXComponent=!0}}]);