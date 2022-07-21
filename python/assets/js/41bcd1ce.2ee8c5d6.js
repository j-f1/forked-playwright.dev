"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3987],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return y}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),y=r,u=c["".concat(p,".").concat(y)]||c[y]||k[y]||o;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3811:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function s({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))l.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},3824:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),r=a(4939),o=a(9670),i=a(6010),l="tabItem_LplD",p=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(k)for(var a of k(t))y.call(t,a)&&u(e,a,t[a]);return e};function h(e){var t,a,r;const{lazy:p,block:k,defaultValue:c,values:y,groupId:u,className:h}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=y?y:b.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),N=(0,o.lx)(f,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:null!=(r=null!=c?c:null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=b[0])?void 0:a.props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,o.UB)(),[C,x]=(0,n.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,o.o5)();if(null!=u){const e=g[u];null!=e&&e!==C&&f.some((t=>t.value===e))&&x(e)}const A=e=>{const t=e.currentTarget,a=T.indexOf(t),n=f[a].value;n!==C&&(O(t),x(n),null!=u&&w(u,n))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":k},h)},f.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=m({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>T.push(e),onKeyDown:S,onFocus:A,onClick:A},a),o={className:(0,i.Z)("tabs__item",l,null==a?void 0:a.className,{"tabs__item--active":C===e})},s(r,d(o))),null!=t?t:e);var r,o}))),p?(0,n.cloneElement)(b.filter((e=>e.props.value===C))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function b(e){const t=(0,r.Z)();return n.createElement(h,m({key:String(t)},e))}},1075:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return v},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return f}});var n=a(3905),r=a(3824),o=a(3811),i=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&c(e,a,t[a]);if(s)for(var a of s(t))k.call(t,a)&&c(e,a,t[a]);return e};const u={id:"class-keyboard",title:"Keyboard"},m=void 0,h={unversionedId:"api/class-keyboard",id:"version-1.23/api/class-keyboard",title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is keyboard.type(text, kwargs), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-1.23/api/class-keyboard.mdx",sourceDirName:"api",slug:"/api/class-keyboard",permalink:"/python/docs/1.23/api/class-keyboard",tags:[],version:"1.23",frontMatter:{id:"class-keyboard",title:"Keyboard"},sidebar:"api",previous:{title:"JSHandle",permalink:"/python/docs/1.23/api/class-jshandle"},next:{title:"Locator",permalink:"/python/docs/1.23/api/class-locator"}},b={},f=[{value:"keyboard.down(key)",id:"keyboard-down",level:2},{value:"keyboard.insert_text(text)",id:"keyboard-insert-text",level:2},{value:"keyboard.press(key, **kwargs)",id:"keyboard-press",level:2},{value:"keyboard.type(text, **kwargs)",id:"keyboard-type",level:2},{value:"keyboard.up(key)",id:"keyboard-up",level:2}],N={toc:f};function v(e){var t,a=e,{components:i}=a,c=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&k.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=y(y({},N),c),l(t,p({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-type"}),"keyboard.type(text, **kwargs)"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),(0,n.kt)("p",null,"For finer control, you can use ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-down"}),"keyboard.down(key)"),", ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-up"}),"keyboard.up(key)"),", and ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-insert-text"}),"keyboard.insert_text(text)")," to manually fire events as if they were generated from a real keyboard."),(0,n.kt)("p",null,"An example of holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'page.keyboard.type("Hello World!")\npage.keyboard.press("ArrowLeft")\npage.keyboard.down("Shift")\nfor i in range(6):\n    page.keyboard.press("ArrowLeft")\npage.keyboard.up("Shift")\npage.keyboard.press("Backspace")\n# result text will end up saying "Hello!"\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'await page.keyboard.type("Hello World!")\nawait page.keyboard.press("ArrowLeft")\nawait page.keyboard.down("Shift")\nfor i in range(6):\n    await page.keyboard.press("ArrowLeft")\nawait page.keyboard.up("Shift")\nawait page.keyboard.press("Backspace")\n# result text will end up saying "Hello!"\n')))),(0,n.kt)("p",null,"An example of pressing uppercase ",(0,n.kt)("inlineCode",{parentName:"p"},"A")),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'page.keyboard.press("Shift+KeyA")\n# or\npage.keyboard.press("Shift+A")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'await page.keyboard.press("Shift+KeyA")\n# or\nawait page.keyboard.press("Shift+A")\n')))),(0,n.kt)("p",null,"An example to trigger select-all with the keyboard"),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'# on windows and linux\npage.keyboard.press("Control+A")\n# on mac_os\npage.keyboard.press("Meta+A")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'# on windows and linux\nawait page.keyboard.press("Control+A")\n# on mac_os\nawait page.keyboard.press("Meta+A")\n')))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",y({parentName:"li"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-down"}),"keyboard.down(key)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",y({parentName:"li"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-insert-text"}),"keyboard.insert_text(text)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",y({parentName:"li"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-press"}),"keyboard.press(key, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",y({parentName:"li"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-type"}),"keyboard.type(text, **kwargs)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",y({parentName:"li"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-up"}),"keyboard.up(key)"))),(0,n.kt)("h2",y({},{id:"keyboard-down"}),"keyboard.down(key)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-option-key"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-down-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-return"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#keyboard-down-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown")," event."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,n.kt)("a",y({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,n.kt)("a",y({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,n.kt)("p",null,"Following modification shortcuts are also supported: ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,n.kt)("p",null,"Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-up"}),"keyboard.up(key)"),"."),(0,n.kt)("p",null,"After the key is pressed once, subsequent calls to ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-down"}),"keyboard.down(key)")," will have ",(0,n.kt)("a",y({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"}),"repeat")," set to true. To release the key, use ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-up"}),"keyboard.up(key)"),"."),(0,n.kt)("div",y({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",y({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",y({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",y({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",y({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",y({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Modifier keys DO influence ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.down"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))),(0,n.kt)("h2",y({},{id:"keyboard-insert-text"}),"keyboard.insert_text(text)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-option-text"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Sets input to the specified text value.",(0,n.kt)("a",{href:"#keyboard-insert-text-option-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-return"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#keyboard-insert-text-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches only ",(0,n.kt)("inlineCode",{parentName:"p"},"input")," event, does not emit the ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress")," events."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'page.keyboard.insert_text("\u55e8")\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'await page.keyboard.insert_text("\u55e8")\n')))),(0,n.kt)("div",y({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",y({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",y({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",y({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",y({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",y({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Modifier keys DO NOT effect ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.insertText"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),(0,n.kt)("h2",y({},{id:"keyboard-press"}),"keyboard.press(key, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-key"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-press-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-delay"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time to wait between ",(0,n.kt)("inlineCode",{parentName:"li"},"keydown")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"keyup")," in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#keyboard-press-option-delay",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-return"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#keyboard-press-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,n.kt)("a",y({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,n.kt)("a",y({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"}),"here"),". Examples of the keys are:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,n.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,n.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,n.kt)("p",null,"Following modification shortcuts are also supported: ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,n.kt)("p",null,"Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,n.kt)("p",null,"If ",(0,n.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,n.kt)("p",null,"Shortcuts such as ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Control+o"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'key: "Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'page = browser.new_page()\npage.goto("https://keycode.info")\npage.keyboard.press("a")\npage.screenshot(path="a.png")\npage.keyboard.press("ArrowLeft")\npage.screenshot(path="arrow_left.png")\npage.keyboard.press("Shift+O")\npage.screenshot(path="o.png")\nbrowser.close()\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'page = await browser.new_page()\nawait page.goto("https://keycode.info")\nawait page.keyboard.press("a")\nawait page.screenshot(path="a.png")\nawait page.keyboard.press("ArrowLeft")\nawait page.screenshot(path="arrow_left.png")\nawait page.keyboard.press("Shift+O")\nawait page.screenshot(path="o.png")\nawait browser.close()\n')))),(0,n.kt)("p",null,"Shortcut for ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-down"}),"keyboard.down(key)")," and ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-up"}),"keyboard.up(key)"),"."),(0,n.kt)("h2",y({},{id:"keyboard-type"}),"keyboard.type(text, **kwargs)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"text"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-text"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," A text to type into a focused element.",(0,n.kt)("a",{href:"#keyboard-type-option-text",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-delay"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),">"," Time to wait between key presses in milliseconds. Defaults to 0.",(0,n.kt)("a",{href:"#keyboard-type-option-delay",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-return"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#keyboard-type-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Sends a ",(0,n.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,n.kt)("p",null,"To press a special key, like ",(0,n.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,n.kt)("a",y({parentName:"p"},{href:"/python/docs/1.23/api/class-keyboard#keyboard-press"}),"keyboard.press(key, **kwargs)"),"."),(0,n.kt)(r.Z,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"sync",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'page.keyboard.type("Hello") # types instantly\npage.keyboard.type("World", delay=100) # types slower, like a user\n'))),(0,n.kt)(o.Z,{value:"async",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",y({parentName:"pre"},{className:"language-py"}),'await page.keyboard.type("Hello") # types instantly\nawait page.keyboard.type("World", delay=100) # types slower, like a user\n')))),(0,n.kt)("div",y({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",y({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",y({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",y({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",y({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",y({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"Modifier keys DO NOT effect ",(0,n.kt)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",(0,n.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),(0,n.kt)("div",y({},{className:"admonition admonition-note alert alert--secondary"}),(0,n.kt)("div",y({parentName:"div"},{className:"admonition-heading"}),(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",y({parentName:"h5"},{className:"admonition-icon"}),(0,n.kt)("svg",y({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),(0,n.kt)("path",y({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),(0,n.kt)("div",y({parentName:"div"},{className:"admonition-content"}),(0,n.kt)("p",{parentName:"div"},"For characters that are not on a US keyboard, only an ",(0,n.kt)("inlineCode",{parentName:"p"},"input")," event will be sent."))),(0,n.kt)("h2",y({},{id:"keyboard-up"}),"keyboard.up(key)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"key"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-option-key"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),">"," Name of the key to press or a character to generate, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"a"),".",(0,n.kt)("a",{href:"#keyboard-up-option-key",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-return"})," ","<",(0,n.kt)("a",y({parentName:"li"},{href:"https://docs.python.org/3/library/constants.html#None",title:"None"}),"NoneType"),">",(0,n.kt)("a",{href:"#keyboard-up-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Dispatches a ",(0,n.kt)("inlineCode",{parentName:"p"},"keyup")," event."))}v.isMDXComponent=!0}}]);