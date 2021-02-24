(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{723:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),c=(a(0),a(747)),l=(a(751),a(752),{id:"assertions",title:"Assertions"}),i={unversionedId:"assertions",id:"version-1.8.0/assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/versioned_docs/version-1.8.0/assertions.mdx",slug:"/assertions",permalink:"/docs/1.8.0/assertions",version:"1.8.0",sidebar:"version-1.8.0/docs",previous:{title:"Auto-waiting",permalink:"/docs/1.8.0/actionability"},next:{title:"Authentication",permalink:"/docs/1.8.0/auth"}},s=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Attribute value",id:"attribute-value",children:[]},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Custom assertions",id:"custom-assertions",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],o={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#text-content"}),"Text content")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#inner-text"}),"Inner text")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#attribute-value"}),"Attribute value")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#checkbox-state"}),"Checkbox state")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#js-expression"}),"JS expression")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#inner-html"}),"Inner HTML")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#visibility"}),"Visibility")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#enabled-state"}),"Enabled state")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#custom-assertions"}),"Custom assertions"))),Object(c.b)("h2",{id:"text-content"},"Text content"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const content = await page.textContent('nav:first-child');\nexpect(content).toBe('home');\n")),Object(c.b)("h3",{id:"api-reference"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageinnertextselector-options"}),"page.innerText(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleinnertext"}),"elementHandle.innerText()"))),Object(c.b)("h2",{id:"inner-text"},"Inner text"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const text = await page.innerText('.selected');\nexpect(text).toBe('value');\n")),Object(c.b)("h3",{id:"api-reference-1"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageinnertextselector-options"}),"page.innerText(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleinnertext"}),"elementHandle.innerText()"))),Object(c.b)("h2",{id:"attribute-value"},"Attribute value"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const alt = await page.getAttribute('input', 'alt');\nexpect(alt).toBe('Text');\n")),Object(c.b)("h2",{id:"checkbox-state"},"Checkbox state"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const checked = await page.isChecked('input');\nexpect(checked).toBeTruthy();\n")),Object(c.b)("h3",{id:"api-reference-2"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageischeckedselector-options"}),"page.isChecked(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleischecked"}),"elementHandle.isChecked()"))),Object(c.b)("h2",{id:"js-expression"},"JS expression"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const content = await page.$eval('nav:first-child', e => e.textContent);\nexpect(content).toBe('home');\n")),Object(c.b)("h3",{id:"api-reference-3"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageevalselector-pagefunction-arg"}),"page.$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-jshandle#jshandleevaluatepagefunction-arg"}),"jsHandle.evaluate(pageFunction[, arg])"))),Object(c.b)("h2",{id:"inner-html"},"Inner HTML"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const html = await page.innerHTML('div.result');\nexpect(html).toBe('<p>Result</p>');\n")),Object(c.b)("h3",{id:"api-reference-4"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageinnerhtmlselector-options"}),"page.innerHTML(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleinnerhtml"}),"elementHandle.innerHTML()"))),Object(c.b)("h2",{id:"visibility"},"Visibility"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const visible = await page.isVisible('input');\nexpect(visible).toBeTruthy();\n")),Object(c.b)("h3",{id:"api-reference-5"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageisvisibleselector-options"}),"page.isVisible(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleisvisible"}),"elementHandle.isVisible()"))),Object(c.b)("h2",{id:"enabled-state"},"Enabled state"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const enabled = await page.isEnabled('input');\nexpect(visible).toBeTruthy();\n")),Object(c.b)("h3",{id:"api-reference-6"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageisenabledselector-options"}),"page.isEnabled(selector[, options])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleisenabled"}),"elementHandle.isEnabled()"))),Object(c.b)("h2",{id:"custom-assertions"},"Custom assertions"),Object(c.b)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Assert local storage value\nconst userId = page.evaluate(() => window.localStorage.getItem('userId'));\nexpect(userId).toBeTruthy();\n\n// Assert value for input element\nawait page.waitForSelector('#search');\nconst value = await page.$eval('#search', el => el.value);\nexpect(value === 'query').toBeTruthy();\n\n// Assert computed style\nconst fontSize = await page.$eval('div', el => window.getComputedStyle(el).fontSize);\nexpect(fontSize === '16px').toBeTruthy();\n\n// Assert list length\nconst length = await page.$$eval('li.selected', (items) => items.length);\nexpect(length === 3).toBeTruthy();\n")),Object(c.b)("h3",{id:"api-reference-7"},"API reference"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageevaluatepagefunction-arg"}),"page.evaluate(pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageevalselector-pagefunction-arg"}),"page.$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageevalselector-pagefunction-arg-1"}),"page.$$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#frameevaluatepagefunction-arg"}),"frame.evaluate(pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#frameevalselector-pagefunction-arg"}),"frame.$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#frameevalselector-pagefunction-arg-1"}),"frame.$$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleevalselector-pagefunction-arg"}),"elementHandle.$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleevalselector-pagefunction-arg-1"}),"elementHandle.$$eval(selector, pageFunction[, arg])")),Object(c.b)("li",{parentName:"ul"},"[EvaluationArgument]")))}b.isMDXComponent=!0},747:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,j=p["".concat(l,".").concat(d)]||p[d]||u[d]||c;return a?r.a.createElement(j,i(i({ref:t},o),{},{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<c;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},748:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},749:function(e,t,a){"use strict";var n=a(0),r=a(750);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},750:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},751:function(e,t,a){"use strict";a(0),a(749),a(748),a(55)},752:function(e,t,a){"use strict";a(3),a(0)}}]);