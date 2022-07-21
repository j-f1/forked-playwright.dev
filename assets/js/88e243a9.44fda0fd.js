"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3631],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22376:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return f}});var a=n(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const u={id:"class-android",title:"Android"},m=void 0,h={unversionedId:"api/class-android",id:"version-1.23/api/class-android",title:"Android",description:"Playwright has experimental support for Android automation. This includes Chrome for Android and Android WebView.",source:"@site/versioned_docs/version-1.23/api/class-android.mdx",sourceDirName:"api",slug:"/api/class-android",permalink:"/docs/1.23/api/class-android",tags:[],version:"1.23",frontMatter:{id:"class-android",title:"Android"},sidebar:"api",previous:{title:"TestStep",permalink:"/docs/1.23/api/class-teststep"},next:{title:"AndroidDevice",permalink:"/docs/1.23/api/class-androiddevice"}},v={},f=[{value:"android.devices(options)",id:"android-devices",level:2},{value:"android.setDefaultTimeout(timeout)",id:"android-set-default-timeout",level:2}],b={toc:f};function w(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},b),c),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright has ",(0,a.kt)("strong",{parentName:"p"},"experimental")," support for Android automation. This includes Chrome for Android and Android WebView."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Requirements")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Android device or AVD Emulator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.android.com/studio/command-line/adb"}),"ADB daemon")," running and authenticated with your device. Typically running ",(0,a.kt)("inlineCode",{parentName:"li"},"adb devices")," is all you need to do."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://play.google.com/store/apps/details?id=com.android.chrome"}),(0,a.kt)("inlineCode",{parentName:"a"},"Chrome 87"))," or newer installed on the device"),(0,a.kt)("li",{parentName:"ul"},'"Enable command line on non-rooted devices" enabled in ',(0,a.kt)("inlineCode",{parentName:"li"},"chrome://flags"),".")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Known limitations")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Raw USB operation is not yet supported, so you need ADB."),(0,a.kt)("li",{parentName:"ul"},'Device needs to be awake to produce screenshots. Enabling "Stay awake" developer mode will help.'),(0,a.kt)("li",{parentName:"ul"},"We didn't run all the tests against the device, so not everything works.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How to run")),(0,a.kt)("p",null,"An example of the Android automation script would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"const { _android: android } = require('playwright');\n\n(async () => {\n  // Connect to the device.\n  const [device] = await android.devices();\n  console.log(`Model: ${device.model()}`);\n  console.log(`Serial: ${device.serial()}`);\n  // Take screenshot of the whole device.\n  await device.screenshot({ path: 'device.png' });\n\n  {\n    // --------------------- WebView -----------------------\n\n    // Launch an application with WebView.\n    await device.shell('am force-stop org.chromium.webview_shell');\n    await device.shell('am start org.chromium.webview_shell/.WebViewBrowserActivity');\n    // Get the WebView.\n    const webview = await device.webView({ pkg: 'org.chromium.webview_shell' });\n\n    // Fill the input box.\n    await device.fill({ res: 'org.chromium.webview_shell:id/url_field' }, 'github.com/microsoft/playwright');\n    await device.press({ res: 'org.chromium.webview_shell:id/url_field' }, 'Enter');\n\n    // Work with WebView's page as usual.\n    const page = await webview.page();\n    await page.waitForNavigation({ url: /.*microsoft\\/playwright.*/ });\n    console.log(await page.title());\n  }\n\n  {\n    // --------------------- Browser -----------------------\n\n    // Launch Chrome browser.\n    await device.shell('am force-stop com.android.chrome');\n    const context = await device.launchBrowser();\n\n    // Use BrowserContext as usual.\n    const page = await context.newPage();\n    await page.goto('https://webkit.org/');\n    console.log(await page.evaluate(() => window.location.href));\n    await page.screenshot({ path: 'page.png' });\n\n    await context.close();\n  }\n\n  // Close the device.\n  await device.close();\n})();\n")),(0,a.kt)("p",null,"Note that since you don't need Playwright to install web browsers when testing Android, you can omit browser download via setting the following environment variable when installing Playwright:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i -D playwright\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"/docs/1.23/api/class-android#android-devices"}),"android.devices([options])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"/docs/1.23/api/class-android#android-set-default-timeout"}),"android.setDefaultTimeout(timeout)"))),(0,a.kt)("h2",p({},{id:"android-devices"}),"android.devices(","[options]",")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options?")," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host?"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-devices-option-host"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Optional host to establish ADB server connection. Default to ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1"),".",(0,a.kt)("a",{href:"#android-devices-option-host",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"omitDriverInstall?"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-devices-option-omit-driver-install"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">"," Prevents automatic playwright driver installation on attach. Assumes that the drivers have been installed already.",(0,a.kt)("a",{href:"#android-devices-option-omit-driver-install",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port?"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-devices-option-port"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Optional port to establish ADB server connection. Default to ",(0,a.kt)("inlineCode",{parentName:"li"},"5037"),".",(0,a.kt)("a",{href:"#android-devices-option-port",class:"list-anchor"},"#")))),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-devices-return"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,a.kt)("a",p({parentName:"li"},{href:"/docs/1.23/api/class-androiddevice",title:"AndroidDevice"}),"AndroidDevice"),">>",">",(0,a.kt)("a",{href:"#android-devices-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the list of detected Android devices."),(0,a.kt)("h2",p({},{id:"android-set-default-timeout"}),"android.setDefaultTimeout(timeout)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout"),(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-set-default-timeout-option-timeout"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">"," Maximum time in milliseconds",(0,a.kt)("a",{href:"#android-set-default-timeout-option-timeout",class:"list-anchor"},"#")),(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"android-set-default-timeout-return"})," ","<",(0,a.kt)("a",p({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",(0,a.kt)("a",{href:"#android-set-default-timeout-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"This setting will change the default maximum time for all the methods accepting ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," option."))}w.isMDXComponent=!0}}]);