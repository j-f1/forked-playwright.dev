"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[53540],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(k,n(n({ref:t},s),{},{components:a})):r.createElement(k,n({ref:t},s))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,n=new Array(l);n[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,n[1]=i;for(var c=2;c<l;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(67294),o=a(79443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},n=a(86010),i="tabItem_1uMI",p="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,u=e.values,m=e.groupId,d=e.className,k=l(),N=k.tabGroupChoices,h=k.setTabGroupChoices,v=(0,r.useState)(o),x=v[0],f=v[1],b=r.Children.toArray(e.children),g=[];if(null!=m){var y=N[m];null!=y&&y!==x&&u.some((function(e){return e.value===y}))&&f(y)}var S=function(e){var t=e.currentTarget,a=g.indexOf(t),r=u[a].value;f(r),null!=m&&(h(m,r),setTimeout((function(){var e,a,r,o,l,n,i,c;(e=t.getBoundingClientRect(),a=e.top,r=e.left,o=e.bottom,l=e.right,n=window,i=n.innerHeight,c=n.innerWidth,a>=0&&l<=c&&o<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case s:var r=g.indexOf(e.target)+1;a=g[r]||g[0];break;case c:var o=g.indexOf(e.target)-1;a=g[o]||g[g.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,n.Z)("tabs__item",i,{"tabs__item--active":x===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:C,onFocus:S,onClick:S},a)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},16252:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return n},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=a(22122),o=a(19756),l=(a(67294),a(3905)),n=(a(55064),a(58215),{id:"test-assertions",title:"Assertions"}),i=void 0,p={unversionedId:"test-assertions",id:"version-1.15/test-assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright Test uses expect library for test assertions. This library provides a lot of matchers like toEqual, toContain, toMatch, toMatchSnapshot and many more:",source:"@site/versioned_docs/version-1.15/test-assertions.mdx",sourceDirName:".",slug:"/test-assertions",permalink:"/docs/test-assertions",version:"1.15",frontMatter:{id:"test-assertions",title:"Assertions"},sidebar:"version-1.15/docs",previous:{title:"Annotations",permalink:"/docs/test-annotations"},next:{title:"Authentication",permalink:"/docs/test-auth"}},c=[{value:"Matching",id:"matching",children:[]},{value:"expect(locator).toBeChecked",id:"expectlocatortobechecked",children:[]},{value:"expect(locator).toBeDisabled",id:"expectlocatortobedisabled",children:[]},{value:"expect(locator).toBeEditable",id:"expectlocatortobeeditable",children:[]},{value:"expect(locator).toBeEmpty",id:"expectlocatortobeempty",children:[]},{value:"expect(locator).toBeEnabled",id:"expectlocatortobeenabled",children:[]},{value:"expect(locator).toBeFocused",id:"expectlocatortobefocused",children:[]},{value:"expect(locator).toBeHidden",id:"expectlocatortobehidden",children:[]},{value:"expect(locator).toBeVisible",id:"expectlocatortobevisible",children:[]},{value:"expect(locator).toContainText(text, options?)",id:"expectlocatortocontaintexttext-options",children:[]},{value:"expect(locator).toHaveAttribute(name, value)",id:"expectlocatortohaveattributename-value",children:[]},{value:"expect(locator).toHaveClass(expected)",id:"expectlocatortohaveclassexpected",children:[]},{value:"expect(locator).toHaveCount(count)",id:"expectlocatortohavecountcount",children:[]},{value:"expect(locator).toHaveCSS(name, value)",id:"expectlocatortohavecssname-value",children:[]},{value:"expect(locator).toHaveId(id)",id:"expectlocatortohaveidid",children:[]},{value:"expect(locator).toHaveJSProperty(name, value)",id:"expectlocatortohavejspropertyname-value",children:[]},{value:"expect(locator).toHaveText(expected, options)",id:"expectlocatortohavetextexpected-options",children:[]},{value:"expect(page).toHaveTitle(title)",id:"expectpagetohavetitletitle",children:[]},{value:"expect(page).toHaveURL(url)",id:"expectpagetohaveurlurl",children:[]},{value:"expect(locator).toHaveValue(value)",id:"expectlocatortohavevaluevalue",children:[]}],s={toc:c};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright Test uses ",(0,l.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},"expect")," library for test assertions. This library provides a lot of matchers like ",(0,l.kt)("inlineCode",{parentName:"p"},"toEqual"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"toContain"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"toMatch"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"toMatchSnapshot")," and many more:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"expect(success).toBeTruthy();\n")),(0,l.kt)("p",null,"Playwright also extends it with convenience async matchers that will wait until the expected condition is met."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#matching"},"Matching")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortobechecked"},"expect(locator).toBeChecked")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortobedisabled"},"expect(locator).toBeDisabled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortobeeditable"},"expect(locator).toBeEditable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortobeempty"},"expect(locator).toBeEmpty")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortobeenabled"},"expect(locator).toBeEnabled")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortobefocused"},"expect(locator).toBeFocused")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortobehidden"},"expect(locator).toBeHidden")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortobevisible"},"expect(locator).toBeVisible")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortocontaintexttext-options"},"expect(locator).toContainText(text, options?)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortohaveattributename-value"},"expect(locator).toHaveAttribute(name, value)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortohaveclassexpected"},"expect(locator).toHaveClass(expected)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortohavecountcount"},"expect(locator).toHaveCount(count)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortohavecssname-value"},"expect(locator).toHaveCSS(name, value)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortohaveidid"},"expect(locator).toHaveId(id)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortohavejspropertyname-value"},"expect(locator).toHaveJSProperty(name, value)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortohavetextexpected-options"},"expect(locator).toHaveText(expected, options)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectpagetohavetitletitle"},"expect(page).toHaveTitle(title)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectpagetohaveurlurl"},"expect(page).toHaveURL(url)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#expectlocatortohavevaluevalue"},"expect(locator).toHaveValue(value)"))),(0,l.kt)("h2",{id:"matching"},"Matching"),(0,l.kt)("p",null,"Consider the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page.locator('.status')).toHaveText('Submitted');\n")),(0,l.kt)("p",null,"Playwright Test will be re-testing the node with the selector ",(0,l.kt)("inlineCode",{parentName:"p"},".status")," until fetched Node has the ",(0,l.kt)("inlineCode",{parentName:"p"},'"Submitted"')," text. It will be re-fetching the node and checking it over and over, until the condition is met or until the timeout is reached. You can either pass this timeout or configure it once via the ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect")," value in test config."),(0,l.kt)("p",null,"By default, the timeout for assertions is not set, so it'll wait forever, until the whole test times out."),(0,l.kt)("h2",{id:"expectlocatortobechecked"},"expect(locator).toBeChecked"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to the checked input."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.subscribe');\nawait expect(locator).toBeChecked();\n")),(0,l.kt)("h2",{id:"expectlocatortobedisabled"},"expect(locator).toBeDisabled"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to a disabled element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button.submit');\nawait expect(locator).toBeDisabled();\n")),(0,l.kt)("h2",{id:"expectlocatortobeeditable"},"expect(locator).toBeEditable"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to an editable element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toBeEditable();\n")),(0,l.kt)("h2",{id:"expectlocatortobeempty"},"expect(locator).toBeEmpty"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to an empty editable element or to a DOM node that has no text."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('div.warning');\nawait expect(locator).toBeEmpty();\n")),(0,l.kt)("h2",{id:"expectlocatortobeenabled"},"expect(locator).toBeEnabled"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to an enabled element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button.submit');\nawait expect(locator).toBeEnabled();\n")),(0,l.kt)("h2",{id:"expectlocatortobefocused"},"expect(locator).toBeFocused"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to a focused DOM node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toBeFocused();\n")),(0,l.kt)("h2",{id:"expectlocatortobehidden"},"expect(locator).toBeHidden"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to a hidden DOM node, which is the opposite of ",(0,l.kt)("a",{parentName:"p",href:"/docs/actionability#visible"},"visible"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.my-element');\nawait expect(locator).toBeHidden();\n")),(0,l.kt)("h2",{id:"expectlocatortobevisible"},"expect(locator).toBeVisible"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to a ",(0,l.kt)("a",{parentName:"p",href:"/docs/actionability#visible"},"visible")," DOM node."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.my-element');\nawait expect(locator).toBeVisible();\n")),(0,l.kt)("h2",{id:"expectlocatortocontaintexttext-options"},"expect(locator).toContainText(text, options?)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> Text to look for inside the element"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to wait for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useInnerText"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"> Whether to use ",(0,l.kt)("inlineCode",{parentName:"li"},"element.innerText")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"element.textContent")," when retrieving DOM node text.")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to a selected option."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.title');\nawait expect(locator).toContainText('substring');\n")),(0,l.kt)("h2",{id:"expectlocatortohaveattributename-value"},"expect(locator).toHaveAttribute(name, value)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> Attribute name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"> Attribute value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to an element with given attribute."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toHaveAttribute('type', 'text');\n")),(0,l.kt)("h2",{id:"expectlocatortohaveclassexpected"},"expect(locator).toHaveClass(expected)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expected"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp")," | ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">>"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to an element with given CSS class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('#component');\nawait expect(locator).toHaveClass(/selected/);\n")),(0,l.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > .component');\nawait expect(locator).toHaveClass(['component', 'component selected', 'component']);\n")),(0,l.kt)("h2",{id:"expectlocatortohavecountcount"},"expect(locator).toHaveCount(count)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," resolves to an exact number of DOM nodes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const list = page.locator('list > #component');\nawait expect(list).toHaveCount(3);\n")),(0,l.kt)("h2",{id:"expectlocatortohavecssname-value"},"expect(locator).toHaveCSS(name, value)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> CSS property name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),"> CSS property value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," resolves to an element with the given computed CSS style"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('button');\nawait expect(locator).toHaveCSS('display', 'flex');\n")),(0,l.kt)("h2",{id:"expectlocatortohaveidid"},"expect(locator).toHaveId(id)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> Element id"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to an element with the given DOM Node ID."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input');\nawait expect(locator).toHaveId('lastname');\n")),(0,l.kt)("h2",{id:"expectlocatortohavejspropertyname-value"},"expect(locator).toHaveJSProperty(name, value)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"> Property name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),": <","[any]","> Property value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to an element with given JavaScript property. Note that this property can be of a primitive type as well as a plain serializable JavaScript object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.component');\nawait expect(locator).toHaveJSProperty('loaded', true);\n")),(0,l.kt)("h2",{id:"expectlocatortohavetextexpected-options"},"expect(locator).toHaveText(expected, options)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expected"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp")," | ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"},"Array"),"<",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"|",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">>"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"useInnerText"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"> Whether to use ",(0,l.kt)("inlineCode",{parentName:"li"},"element.innerText")," instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"element.textContent")," when retrieving DOM node text.")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to an element with the given text. You can use regular expressions for the value as well."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('.title');\nawait expect(locator).toHaveText(/Welcome, .*/);\n")),(0,l.kt)("p",null,"Note that if array is passed as an expected value, entire lists can be asserted:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('list > #component');\nawait expect(locator).toHaveText(['Text 1', 'Text 2', 'Text 3']);\n")),(0,l.kt)("h2",{id:"expectpagetohavetitletitle"},"expect(page).toHaveTitle(title)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"title"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">>"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures page has a given title."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page).toHaveTitle(/.*checkout/);\n")),(0,l.kt)("h2",{id:"expectpagetohaveurlurl"},"expect(page).toHaveURL(url)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"url"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">>"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures page is navigated to a given URL."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await expect(page).toHaveURL(/.*checkout/);\n")),(0,l.kt)("h2",{id:"expectlocatortohavevaluevalue"},"expect(locator).toHaveValue(value)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")," | ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",title:"RegExp"},"RegExp"),">>"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"options"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timeout"),": <",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),"> Time to retry assertion for, defaults to ",(0,l.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,l.kt)("a",{parentName:"li",href:"/docs/api/class-testproject#test-project-expect"},"testProject.expect"),".")))),(0,l.kt)("p",null,"Ensures ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/class-locator",title:"Locator"},"Locator")," points to an element with the given input value. You can use regular expressions for the value as well."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locator = page.locator('input[type=number]');\nawait expect(locator).toHaveValue(/[0-9]/);\n")))}u.isMDXComponent=!0},86010:function(e,t,a){function r(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);