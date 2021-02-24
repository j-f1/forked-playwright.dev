(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(270)),l=(a(273),a(274),{id:"release-notes",title:"Release notes"}),o={unversionedId:"release-notes",id:"release-notes",isDocsHomePage:!1,title:"Release notes",description:"- Version 1.9",source:"@site/docs/release-notes.mdx",slug:"/release-notes",permalink:"/python/docs/next/release-notes",version:"current",sidebar:"docs",previous:{title:"Supported languages",permalink:"/python/docs/next/languages"},next:{title:"Auto-waiting",permalink:"/python/docs/next/actionability"}},c=[{value:"Version 1.9",id:"version-19",children:[]},{value:"Version 1.8",id:"version-18",children:[]},{value:"Version 1.7",id:"version-17",children:[]}],s={toc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#version-19"}),"Version 1.9")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#version-18"}),"Version 1.8")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#version-17"}),"Version 1.7"))),Object(i.b)("h2",{id:"version-19"},"Version 1.9"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/inspector"}),"Playwright Inspector")," is a ",Object(i.b)("strong",{parentName:"li"},"new GUI tool")," to author and debug your tests.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Line-by-line debugging")," of your Playwright scripts, with play, pause and step-through."),Object(i.b)("li",{parentName:"ul"},"Author new scripts by ",Object(i.b)("strong",{parentName:"li"},"recording user actions"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Generate element selectors")," for your script by hovering over elements."),Object(i.b)("li",{parentName:"ul"},"Set the ",Object(i.b)("inlineCode",{parentName:"li"},"PWDEBUG=1")," environment variable to launch the Inspector"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Pause script execution")," with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagepause"}),"page.pause()"),". in headed mode. Pausing the page launches ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/inspector"}),"Playwright Inspector")," for debugging."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New has-text pseudo-class")," for CSS selectors. ",Object(i.b)("inlineCode",{parentName:"li"},':has-text("example")')," matches any element containing ",Object(i.b)("inlineCode",{parentName:"li"},'"example"')," somewhere inside, possibly in a child or a descendant element. See ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/selectors#text-selector"}),"more examples"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Page dialogs are now auto-dismissed")," during execution, unless a listener for ",Object(i.b)("inlineCode",{parentName:"li"},"dialog")," event is configured. ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/dialogs"}),"Learn more")," about this."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-python"}),"Playwright for Python")," is ",Object(i.b)("strong",{parentName:"li"},"now stable")," with an idiomatic snake case API and pre-built ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/docker"}),"Docker image")," to run tests in CI/CD.")),Object(i.b)("h4",{id:"browser-versions"},"Browser Versions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium 90.0.4421.0"),Object(i.b)("li",{parentName:"ul"},"Mozilla Firefox 86.0b10"),Object(i.b)("li",{parentName:"ul"},"WebKit 14.1")),Object(i.b)("h4",{id:"new-apis"},"New APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pagepause"}),"page.pause()"),".")),Object(i.b)("h2",{id:"version-18"},"Version 1.8"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/selectors#selecting-elements-based-on-layout"}),"Selecting elements based on layout")," with ",Object(i.b)("inlineCode",{parentName:"p"},":left-of()"),", ",Object(i.b)("inlineCode",{parentName:"p"},":right-of()"),", ",Object(i.b)("inlineCode",{parentName:"p"},":above()")," and ",Object(i.b)("inlineCode",{parentName:"p"},":below()"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Playwright now includes ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/cli"}),"command line interface"),", former playwright-cli."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ playwright --help\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageselect_optionselector-kwargs"}),"page.select_option(selector, **kwargs)")," now waits for the options to be present.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"New methods to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./actionability#assertions"}),"assert element state")," like ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/next/api/class-page#pageis_editableselector-kwargs"}),"page.is_editable(selector, **kwargs)"),"."))),Object(i.b)("h4",{id:"new-apis-1"},"New APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleis_checked"}),"element_handle.is_checked()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleis_disabled"}),"element_handle.is_disabled()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleis_editable"}),"element_handle.is_editable()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleis_enabled"}),"element_handle.is_enabled()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleis_hidden"}),"element_handle.is_hidden()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handleis_visible"}),"element_handle.is_visible()"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageis_checkedselector-kwargs"}),"page.is_checked(selector, **kwargs)"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageis_disabledselector-kwargs"}),"page.is_disabled(selector, **kwargs)"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageis_editableselector-kwargs"}),"page.is_editable(selector, **kwargs)"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageis_enabledselector-kwargs"}),"page.is_enabled(selector, **kwargs)"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageis_hiddenselector-kwargs"}),"page.is_hidden(selector, **kwargs)"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-page#pageis_visibleselector-kwargs"}),"page.is_visible(selector, **kwargs)"),"."),Object(i.b)("li",{parentName:"ul"},"New option ",Object(i.b)("inlineCode",{parentName:"li"},"'editable'")," in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-elementhandle#element_handlewait_for_element_statestate-kwargs"}),"element_handle.wait_for_element_state(state, **kwargs)"),".")),Object(i.b)("h4",{id:"browser-versions-1"},"Browser Versions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium 90.0.4392.0"),Object(i.b)("li",{parentName:"ul"},"Mozilla Firefox 85.0b5"),Object(i.b)("li",{parentName:"ul"},"WebKit 14.1")),Object(i.b)("h2",{id:"version-17"},"Version 1.7"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New Java SDK"),": ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-java"}),"Playwright for Java")," is now on par with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright"}),"JavaScript"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-python"}),"Python")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-sharp"}),"C# bindings"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Browser storage API"),": New convenience APIs to save and load browser storage state (cookies, local storage) to simplify automation scenarios with authentication."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New CSS selectors"),": We heard your feedback for more flexible selectors and have revamped the selectors implementation. Playwright 1.7 introduces ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/selectors"}),"new CSS extensions")," and there's more coming soon."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"New website"),": The docs website at ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://playwright.dev/"}),"playwright.dev")," has been updated and is now built with ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://v2.docusaurus.io/"}),"Docusaurus"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Support for Apple Silicon"),": Playwright browser binaries for WebKit and Chromium are now built for Apple Silicon.")),Object(i.b)("h4",{id:"new-apis-2"},"New APIs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-browsercontext#browser_contextstorage_statekwargs"}),"browser_context.storage_state(**kwargs)")," to get current state for later reuse."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"storageState")," option in ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-browser#browsernew_contextkwargs"}),"browser.new_context(**kwargs)")," and ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/next/api/class-browser#browsernew_pagekwargs"}),"browser.new_page(**kwargs)")," to setup browser context state.")),Object(i.b)("h4",{id:"browser-versions-2"},"Browser Versions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Chromium 89.0.4344.0"),Object(i.b)("li",{parentName:"ul"},"Mozilla Firefox 84.0b9"),Object(i.b)("li",{parentName:"ul"},"WebKit 14.1")))}b.isMDXComponent=!0},269:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},270:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(d,o(o({ref:t},s),{},{components:a})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},271:function(e,t,a){"use strict";var n=a(0),r=a(272);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},272:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},273:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(271),l=a(269),o=a(55),c=a.n(o),s=37,b=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(i.a)(),O=d.tabGroupChoices,h=d.setTabGroupChoices,j=Object(n.useState)(o),f=j[0],g=j[1],N=n.Children.toArray(e.children);if(null!=u){var w=O[u];null!=w&&w!==f&&p.some((function(e){return e.value===w}))&&g(w)}var y=function(e){g(e),null!=u&&h(u,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(N.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},274:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);