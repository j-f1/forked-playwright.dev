"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5307],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),l=n(9443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var d=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,d=e.values,u=e.groupId,m=e.className,h=i(),k=h.tabGroupChoices,f=h.setTabGroupChoices,y=(0,a.useState)(l),g=y[0],N=y[1],v=a.Children.toArray(e.children),b=[];if(null!=u){var w=k[u];null!=w&&w!==g&&d.some((function(e){return e.value===w}))&&N(w)}var A=function(e){var t=e.currentTarget,n=b.indexOf(t),a=d[n].value;N(a),null!=u&&(f(u,a),setTimeout((function(){var e,n,a,l,i,r,o,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,l=e.bottom,i=e.right,r=window,o=r.innerHeight,c=r.innerWidth,n>=0&&i<=c&&l<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case p:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case c:var l=b.indexOf(e.target)-1;n=b[l]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:C,onFocus:A,onClick:A},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1841:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(2122),l=n(9756),i=(n(7294),n(3905)),r=(n(5064),n(8215),{id:"input",title:"Input"}),o=void 0,s={unversionedId:"input",id:"version-1.15/input",isDocsHomePage:!1,title:"Input",description:"- Text input",source:"@site/versioned_docs/version-1.15/input.mdx",sourceDirName:".",slug:"/input",permalink:"/dotnet/docs/input",version:"1.15",frontMatter:{id:"input",title:"Input"},sidebar:"version-1.15/docs",previous:{title:"Handles",permalink:"/dotnet/docs/handles"},next:{title:"Multi-page scenarios",permalink:"/dotnet/docs/multi-pages"}},c=[{value:"Text input",id:"text-input",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Checkboxes and radio buttons",id:"checkboxes-and-radio-buttons",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Select options",id:"select-options",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Mouse click",id:"mouse-click",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Type characters",id:"type-characters",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Keys and shortcuts",id:"keys-and-shortcuts",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Upload files",id:"upload-files",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Focus element",id:"focus-element",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#text-input"},"Text input")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#checkboxes-and-radio-buttons"},"Checkboxes and radio buttons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#select-options"},"Select options")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mouse-click"},"Mouse click")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#type-characters"},"Type characters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#keys-and-shortcuts"},"Keys and shortcuts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upload-files"},"Upload files")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#focus-element"},"Focus element"))),(0,i.kt)("h2",{id:"text-input"},"Text input"),(0,i.kt)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<textarea>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"[contenteditable]")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"<label>")," associated with an input or textarea."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Text input\nawait page.FillAsync("#name", "Peter");\n\n// Date input\nawait page.FillAsync("#date", "2020-02-02");\n\n// Time input\nawait page.FillAsync("#time", "13-15");\n\n// Local datetime input\nawait page.FillAsync("#local", "2020-03-02T05:15");\n\n// Input through label\nawait page.FillAsync("text=First Name", "Peter");\n')),(0,i.kt)("h3",{id:"api-reference"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-fill"},"Page.FillAsync(selector, value, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-fill"},"Frame.FillAsync(selector, value, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-fill"},"ElementHandle.FillAsync(value, options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"checkboxes-and-radio-buttons"},"Checkboxes and radio buttons"),(0,i.kt)("p",null,"This is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with ",(0,i.kt)("inlineCode",{parentName:"p"},"input[type=checkbox]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"input[type=radio]"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"[role=checkbox]")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," associated with checkbox or radio button."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Check the checkbox\nawait page.CheckAsync("#agree");\n\n// Assert the checked state\nAssert.True(await page.IsCheckedAsync("#agree"));\n\n// Uncheck by input <label>.\nawait page.UncheckAsync("#subscribe-label");\n\n// Select the radio button\nawait page.CheckAsync("text=XL");\n')),(0,i.kt)("h3",{id:"api-reference-1"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-check"},"Page.CheckAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-is-checked"},"Page.IsCheckedAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-uncheck"},"Page.UncheckAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-check"},"ElementHandle.CheckAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-is-checked"},"ElementHandle.IsCheckedAsync()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-uncheck"},"ElementHandle.UncheckAsync(options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"select-options"},"Select options"),(0,i.kt)("p",null,"Selects one or multiple options in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<select>")," element. You can specify option ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"label")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Single selection matching the value\nawait page.SelectOptionAsync("select#colors", "blue");\n\n// Single selection matching the label\nawait page.SelectOptionAsync("select#colors", new SelectOptionValue { Label = "blue" }));\n\n// Multiple selected items\nawait page.SelectOptionAsync("select#colors", new[] { "blue", "green", "red" });\n\n// Select the option via element handle\nvar option = await page.QuerySelectorAsync("#best-option");\nawait page.SelectOptionAsync("select#colors", option);\n')),(0,i.kt)("h3",{id:"api-reference-2"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-select-option"},"Page.SelectOptionAsync(selector, values, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-select-option"},"Frame.SelectOptionAsync(selector, values, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-select-option"},"ElementHandle.SelectOptionAsync(values, options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"mouse-click"},"Mouse click"),(0,i.kt)("p",null,"Performs a simple human click."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Generic click\nawait page.ClickAsync("button#submit");\n\n// Double click\nawait page.DblClickAsync("#item");\n\n// Right click\nawait page.ClickAsync("#item", new PageClickOptions { Button = MouseButton.Right });\n\n// Shift + click\nawait page.ClickAsync("#item", new PageClickOptions { Modifiers = new[] { KeyboardModifier.Shift } });\n\n// Hover over element\nawait page.HoverAsync("#item");\n\n// Click the top left corner\nawait page.ClickAsync("#item", new PageClickOptions { position = new Position { X = 0, Y = 0 } });\n')),(0,i.kt)("p",null,"Under the hood, this and other pointer-related methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),(0,i.kt)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",(0,i.kt)("inlineCode",{parentName:"li"},"display:none"),", no ",(0,i.kt)("inlineCode",{parentName:"li"},"visibility:hidden")),(0,i.kt)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),(0,i.kt)("li",{parentName:"ul"},"scroll the element into view"),(0,i.kt)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),(0,i.kt)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),(0,i.kt)("h4",{id:"forcing-the-click"},"Forcing the click"),(0,i.kt)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/actionability"},"actionability")," checks and force the click:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.ClickAsync("button#submit", new PageClickOptions { Force = true });\n')),(0,i.kt)("h4",{id:"programmatic-click"},"Programmatic click"),(0,i.kt)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"},(0,i.kt)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.DispatchEventAsync("button#submit", "click");\n')),(0,i.kt)("h3",{id:"api-reference-3"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-click"},"Page.ClickAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-click"},"Frame.ClickAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-click"},"ElementHandle.ClickAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-dblclick"},"Page.DblClickAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-dblclick"},"Frame.DblClickAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-dblclick"},"ElementHandle.DblClickAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-hover"},"Page.HoverAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-hover"},"Frame.HoverAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-hover"},"ElementHandle.HoverAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-dispatch-event"},"Page.DispatchEventAsync(selector, type, eventInit, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-dispatch-event"},"Frame.DispatchEventAsync(selector, type, eventInit, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-dispatch-event"},"ElementHandle.DispatchEventAsync(type, eventInit)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"type-characters"},"Type characters"),(0,i.kt)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Type character by character\nawait page.TypeAsync("#area", "Hello World!");\n')),(0,i.kt)("p",null,"This method will emit all the necessary keyboard events, with all the ",(0,i.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keyup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",(0,i.kt)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Most of the time, ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-fill"},"Page.FillAsync(selector, value, options)")," will just work. You only need to type characters if there is special keyboard handling on the page."))),(0,i.kt)("h3",{id:"api-reference-4"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-type"},"Page.TypeAsync(selector, text, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-type"},"Frame.TypeAsync(selector, text, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-type"},"ElementHandle.TypeAsync(text, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-keyboard#keyboard-type"},"Keyboard.TypeAsync(text, options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"keys-and-shortcuts"},"Keys and shortcuts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Hit Enter\nawait page.PressAsync("#submit", "Enter");\n\n// Dispatch Control+Right\nawait page.PressAsync("#name", "Control+ArrowRight");\n\n// Press $ sign on keyboard\nawait page.PressAsync("#value", "$");\n')),(0,i.kt)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"keyboardEvent.key")," property of the keyboard events:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can alternatively specify a single character you'd like to produce such as ",(0,i.kt)("inlineCode",{parentName:"li"},'"a"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"#"'),"."),(0,i.kt)("li",{parentName:"ul"},"Following modification shortcuts are also supported: ",(0,i.kt)("inlineCode",{parentName:"li"},"Shift, Control, Alt, Meta"),".")),(0,i.kt)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",(0,i.kt)("inlineCode",{parentName:"p"},'"a"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// <input id=name>\nawait page.PressAsync("#name", "Shift+A");\n\n// <input id=name>\nawait page.PressAsync("#name", "Shift+ArrowLeft");\n')),(0,i.kt)("p",null,"Shortcuts such as ",(0,i.kt)("inlineCode",{parentName:"p"},'"Control+o"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,i.kt)("p",null,"Note that you still need to specify the capital ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",(0,i.kt)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),(0,i.kt)("h3",{id:"api-reference-5"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-press"},"Page.PressAsync(selector, key, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-press"},"Frame.PressAsync(selector, key, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-press"},"ElementHandle.PressAsync(key, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-keyboard#keyboard-press"},"Keyboard.PressAsync(key, options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"upload-files"},"Upload files"),(0,i.kt)("p",null,"You can select input files for upload using the ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-set-input-files"},"Page.SetInputFilesAsync(selector, files, options)")," method. It expects first argument to point to an ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},"input element")," with the type ",(0,i.kt)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Select one file\nawait page.SetInputFilesAsync("input#upload", "myfile.pdf");\n\n// Select multiple files\nawait page.SetInputFilesAsync("input#upload", new[] { "file1.txt", "file12.txt" });\n\n// Remove all the selected files\nawait page.SetInputFilesAsync("input#upload", new[] {});\n\n// Upload buffer from memory\nawait page.SetInputFilesAsync("input#upload", new FilePayload\n{\n    Name = "file.txt",\n    MimeType = "text/plain",\n    Buffer = System.Text.Encoding.UTF8.GetBytes("this is a test"),\n});\n')),(0,i.kt)("p",null,"If you don't have input element in hand (it is created dynamically), you can handle the ",(0,i.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-event-file-chooser"},"event Page.FileChooser")," event or use a corresponding waiting method upon your action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var fileChooser = page.RunAndWaitForFileChooserAsync(async () =>\n{\n    await page.ClickAsync("upload");\n});\nawait fileChooser.SetFilesAsync("myfile.pdf");\n')),(0,i.kt)("h3",{id:"api-reference-6"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-filechooser",title:"FileChooser"},"FileChooser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-set-input-files"},"Page.SetInputFilesAsync(selector, files, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-set-input-files"},"Frame.SetInputFilesAsync(selector, files, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-set-input-files"},"ElementHandle.SetInputFilesAsync(files, options)"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"focus-element"},"Focus element"),(0,i.kt)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await page.FocusAsync("input#name");\n')),(0,i.kt)("h3",{id:"api-reference-7"},"API reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-focus"},"Page.FocusAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame#frame-focus"},"Frame.FocusAsync(selector, options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-elementhandle#element-handle-focus"},"ElementHandle.FocusAsync()"))),(0,i.kt)("br",null))}d.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}n.d(t,{Z:function(){return l}})}}]);