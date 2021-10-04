"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1008],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=i,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),i=a(9443);var r=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,d=39;var p=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,p=e.values,u=e.groupId,g=e.className,m=r(),f=m.tabGroupChoices,h=m.setTabGroupChoices,v=(0,n.useState)(i),k=v[0],y=v[1],b=n.Children.toArray(e.children),N=[];if(null!=u){var w=f[u];null!=w&&w!==k&&p.some((function(e){return e.value===w}))&&y(w)}var D=function(e){var t=e.currentTarget,a=N.indexOf(t),n=p[a].value;y(n),null!=u&&(h(u,n),setTimeout((function(){var e,a,n,i,r,o,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,a>=0&&r<=c&&i<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case d:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case c:var i=N.indexOf(e.target)-1;a=N[i]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},g)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:D,onClick:D},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},7650:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=a(2122),i=a(9756),r=(a(7294),a(3905)),o=(a(5064),a(8215),{id:"class-dialog",title:"Dialog"}),l=void 0,s={unversionedId:"api/class-dialog",id:"version-1.15/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [event Page.Dialog event.",source:"@site/versioned_docs/version-1.15/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/dotnet/docs/api/class-dialog",version:"1.15",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"version-1.15/api",previous:{title:"ConsoleMessage",permalink:"/dotnet/docs/api/class-consolemessage"},next:{title:"Download",permalink:"/dotnet/docs/api/class-download"}},c=[{value:"Dialog.AcceptAsync(promptText)",id:"dialog-accept",children:[]},{value:"Dialog.DefaultValue",id:"dialog-default-value",children:[]},{value:"Dialog.DismissAsync()",id:"dialog-dismiss",children:[]},{value:"Dialog.Message",id:"dialog-message",children:[]},{value:"Dialog.Type",id:"dialog-type",children:[]}],d={toc:c};function p(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-event-dialog"},"event Page.Dialog")," event."),(0,r.kt)("p",null,"An example of using ",(0,r.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass DialogExample\n{\n    public static async Task Run()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await using var browser = await playwright.Chromium.LaunchAsync();\n        var page = await browser.NewPageAsync();\n\n        page.Dialog += async (_, dialog) =>\n        {\n            System.Console.WriteLine(dialog.Message);\n            await dialog.DismissAsync();\n        };\n\n        await page.EvaluateAsync(\"alert('1');\");\n    }\n}\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-event-dialog"},"event Page.Dialog")," listener. When listener is present, it ",(0,r.kt)("strong",{parentName:"p"},"must")," either ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-dialog#dialog-accept"},"Dialog.AcceptAsync(promptText)")," or ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-dialog#dialog-dismiss"},"Dialog.DismissAsync()")," the dialog - otherwise the page will ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"},"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialog-accept"},"Dialog.AcceptAsync(promptText)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialog-default-value"},"Dialog.DefaultValue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialog-dismiss"},"Dialog.DismissAsync()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialog-message"},"Dialog.Message")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-dialog#dialog-type"},"Dialog.Type"))),(0,r.kt)("h2",{id:"dialog-accept"},"Dialog.AcceptAsync(promptText)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"promptText"),(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-option-prompt-text"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),"?",">"," A text to enter in prompt. Does not cause any effects if the dialog's ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.",(0,r.kt)("a",{href:"#dialog-accept-option-prompt-text",class:"list-anchor"},"#")),(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-accept-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,r.kt)("a",{href:"#dialog-accept-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns when the dialog has been accepted."),(0,r.kt)("h2",{id:"dialog-default-value"},"Dialog.DefaultValue"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-default-value-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,r.kt)("a",{href:"#dialog-default-value-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,r.kt)("h2",{id:"dialog-dismiss"},"Dialog.DismissAsync()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-dismiss-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/void",title:"void"},"void"),">",(0,r.kt)("a",{href:"#dialog-dismiss-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns when the dialog has been dismissed."),(0,r.kt)("h2",{id:"dialog-message"},"Dialog.Message"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-message-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,r.kt)("a",{href:"#dialog-message-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"A message displayed in the dialog."),(0,r.kt)("h2",{id:"dialog-type"},"Dialog.Type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"returns:",(0,r.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"dialog-type-return"})," ","<",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/api/system.string",title:"string"},"string"),">",(0,r.kt)("a",{href:"#dialog-type-return",class:"list-anchor"},"#"))),(0,r.kt)("p",null,"Returns dialog's type, can be one of ",(0,r.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}p.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);