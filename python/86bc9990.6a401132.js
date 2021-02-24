(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(270)),i=n(273),c=n(274),l={id:"extensibility",title:"Extensibility"},s={unversionedId:"extensibility",id:"version-1.8.0/extensibility",isDocsHomePage:!1,title:"Extensibility",description:"- Custom selector engines",source:"@site/versioned_docs/version-1.8.0/extensibility.mdx",slug:"/extensibility",permalink:"/python/docs/1.8.0/extensibility",version:"1.8.0",sidebar:"version-1.8.0/docs",previous:{title:"Emulation",permalink:"/python/docs/1.8.0/emulation"},next:{title:"Input",permalink:"/python/docs/1.8.0/input"}},u=[{value:"Custom selector engines",id:"custom-selector-engines",children:[]}],b={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#custom-selector-engines"}),"Custom selector engines"))),Object(a.b)("h2",{id:"custom-selector-engines"},"Custom selector engines"),Object(a.b)("p",null,"Playwright supports custom selector engines, registered with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-selectors#selectorsregistername-kwargs"}),"selectors.register(name, **kwargs)"),"."),Object(a.b)("p",null,"Selector engine should have the following properties:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"create")," function to create a relative selector from ",Object(a.b)("inlineCode",{parentName:"li"},"root")," (root is either a ",Object(a.b)("inlineCode",{parentName:"li"},"Document"),", ",Object(a.b)("inlineCode",{parentName:"li"},"ShadowRoot")," or ",Object(a.b)("inlineCode",{parentName:"li"},"Element"),") to a ",Object(a.b)("inlineCode",{parentName:"li"},"target")," element."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"query")," function to query first element matching ",Object(a.b)("inlineCode",{parentName:"li"},"selector")," relative to the ",Object(a.b)("inlineCode",{parentName:"li"},"root"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"queryAll")," function to query all elements matching ",Object(a.b)("inlineCode",{parentName:"li"},"selector")," relative to the ",Object(a.b)("inlineCode",{parentName:"li"},"root"),".")),Object(a.b)("p",null,"By default the engine is run directly in the frame's JavaScript context and, for example, can call an application-defined function. To isolate the engine from any JavaScript in the frame, but leave access to the DOM, register the engine with ",Object(a.b)("inlineCode",{parentName:"p"},"{contentScript: true}")," option. Content script engine is safer because it is protected from any tampering with the global objects, for example altering ",Object(a.b)("inlineCode",{parentName:"p"},"Node.prototype")," methods. All built-in selector engines run as content scripts. Note that running as a content script is not guaranteed when the engine is used together with other custom engines."),Object(a.b)("p",null,"An example of registering selector engine that queries elements based on a tag name:"),Object(a.b)(i.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"sync",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'tag_selector = """\n    // Must evaluate to a selector engine instance.\n    {\n      // Returns the first element matching given selector in the root\'s subtree.\n      query(root, selector) {\n        return root.querySelector(selector);\n      },\n\n      // Returns all elements matching given selector in the root\'s subtree.\n      queryAll(root, selector) {\n        return Array.from(root.querySelectorAll(selector));\n      }\n    }"""\n\n# register the engine. selectors will be prefixed with "tag=".\nplaywright.selectors.register("tag", tag_selector)\n\n# now we can use "tag=" selectors.\nbutton = page.query_selector("tag=button")\n\n# we can combine it with other selector engines using `>>` combinator.\npage.click("tag=div >> span >> "click me"")\n\n# we can use it in any methods supporting selectors.\nbutton_count = page.eval_on_selector_all("tag=button", buttons => buttons.length)\n'))),Object(a.b)(c.a,{value:"async",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),'tag_selector = """\n    // Must evaluate to a selector engine instance.\n    {\n      // Returns the first element matching given selector in the root\'s subtree.\n      query(root, selector) {\n        return root.querySelector(selector);\n      },\n\n      // Returns all elements matching given selector in the root\'s subtree.\n      queryAll(root, selector) {\n        return Array.from(root.querySelectorAll(selector));\n      }\n    }"""\n\n# register the engine. selectors will be prefixed with "tag=".\nawait playwright.selectors.register("tag", tag_selector)\n\n# now we can use "tag=" selectors.\nbutton = await page.query_selector("tag=button")\n\n# we can combine it with other selector engines using `>>` combinator.\nawait page.click("tag=div >> span >> "click me"")\n\n# we can use it in any methods supporting selectors.\nbutton_count = await page.eval_on_selector_all("tag=button", buttons => buttons.length)\n')))))}p.isMDXComponent=!0},269:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,f=b["".concat(i,".").concat(m)]||b[m]||p[m]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},271:function(e,t,n){"use strict";var r=n(0),o=n(272);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},272:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},273:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(271),i=n(269),c=n(55),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,p=e.groupId,m=e.className,f=Object(a.a)(),g=f.tabGroupChoices,d=f.setTabGroupChoices,y=Object(r.useState)(c),h=y[0],v=y[1],O=r.Children.toArray(e.children);if(null!=p){var j=g[p];null!=j&&j!==h&&b.some((function(e){return e.value===j}))&&v(j)}var w=function(e){v(e),null!=p&&d(p,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},274:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:o}),t)}}}]);