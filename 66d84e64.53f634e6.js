(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{407:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return l})),a.d(n,"rightToc",(function(){return b})),a.d(n,"default",(function(){return s}));var t=a(3),r=a(7),i=(a(0),a(875)),o={id:"installation",title:"Advanced installation"},l={unversionedId:"installation",id:"version-1.4.0/installation",isDocsHomePage:!1,title:"Advanced installation",description:"- Managing browser binaries",source:"@site/versioned_docs/version-1.4.0/installation.md",slug:"/installation",permalink:"/docs/1.4.0/installation",editUrl:"https://github.com/microsoft/playwright/edit/master/docs/versioned_docs/version-1.4.0/installation.md",version:"1.4.0",sidebar:"version-1.4.0/docs",previous:{title:"Actionability",permalink:"/docs/1.4.0/actionability"},next:{title:"Extensibility",permalink:"/docs/1.4.0/extensibility"}},b=[{value:"Managing browser binaries",id:"managing-browser-binaries",children:[]},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[]},{value:"Skip browser downloads",id:"skip-browser-downloads",children:[]},{value:"Download single browser binary",id:"download-single-browser-binary",children:[]}],c={rightToc:b};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#managing-browser-binaries"}),"Managing browser binaries")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#download-from-artifact-repository"}),"Download from artifact repository")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#skip-browser-downloads"}),"Skip browser downloads")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"#download-single-browser-binary"}),"Download single browser binary"))),Object(i.b)("br",null),Object(i.b)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),Object(i.b)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D playwright\n")),Object(i.b)("p",null,"These browsers will take few hundreds of megabytes of the disk space when installed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"du -hs ./Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),Object(i.b)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\n$ npm i -D playwright\n")),Object(i.b)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers node playwright-script.js\n\n# Windows\n$ set PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\n$ node playwright-script.js\n")),Object(i.b)("p",null,"Or you can opt into the hermetic install and place binaries under the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/")," folder:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_BROWSERS_PATH=0 npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_BROWSERS_PATH=0\n$ npm i -D playwright\n")),Object(i.b)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),Object(i.b)("br",null),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE")," Developers can opt-in in this mode via exporting ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",Object(i.b)("inlineCode",{parentName:"p"},".bashrc"),".")),Object(i.b)("br",null),Object(i.b)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),Object(i.b)("p",null,"By default, Playwright downloads browsers from Microsoft and Google public CDNs."),Object(i.b)("p",null,"Sometimes companies maintain an internal artifact repository to host browser\nbinaries. In this case, Playwright can be configured to download from a custom\nlocation using the ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78 npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78\n$ npm i -D playwright\n")),Object(i.b)("p",null,"It is also possible to use a per-browser download hosts using ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that\ntake precedence over ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=192.168.1.1 PLAYWRIGHT_DOWNLOAD_HOST=192.168.1.78 npm i -D playwright\n")),Object(i.b)("br",null),Object(i.b)("h2",{id:"skip-browser-downloads"},"Skip browser downloads"),Object(i.b)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because\nbrowser binaries are managed separately."),Object(i.b)("p",null,"This can be done by setting ",Object(i.b)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i -D playwright\n\n# Windows\n$ set PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\n$ npm i -D playwright\n")),Object(i.b)("br",null),Object(i.b)("h2",{id:"download-single-browser-binary"},"Download single browser binary"),Object(i.b)("p",null,"Playwright ships three packages that bundle only a single browser:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-chromium"}),Object(i.b)("inlineCode",{parentName:"a"},"playwright-chromium"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-webkit"}),Object(i.b)("inlineCode",{parentName:"a"},"playwright-webkit"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(t.a)({parentName:"li"},{href:"https://www.npmjs.com/package/playwright-firefox"}),Object(i.b)("inlineCode",{parentName:"a"},"playwright-firefox")))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"NOTE")," All configuration environment variables also apply to these packages.")),Object(i.b)("p",null,"Using these packages is as easy as using a regular Playwright:"),Object(i.b)("p",null,"Install a specific package"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-sh"}),"$ npm i -D playwright-webkit\n")),Object(i.b)("p",null,"Require package"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"// Notice a proper package name in require\nconst { webkit } = require('playwright-webkit');\n\n(async () => {\n  const browser = await webkit.launch();\n  // ...\n})();\n")))}s.isMDXComponent=!0},875:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function b(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},O={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),u=t,d=p["".concat(o,".").concat(u)]||p[u]||O[u]||i;return a?r.a.createElement(d,l(l({ref:n},c),{},{components:a})):r.a.createElement(d,l({ref:n},c))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var b in n)hasOwnProperty.call(n,b)&&(l[b]=n[b]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);