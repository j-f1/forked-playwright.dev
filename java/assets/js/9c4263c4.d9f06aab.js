"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7242],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,g=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2864:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return w}});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&p(e,r,t[r]);return e};const u={id:"multithreading",title:"Multithreading"},d=void 0,g={unversionedId:"multithreading",id:"version-1.23/multithreading",title:"Multithreading",description:"Playwright Java is not thread safe, i.e. all its methods as well as methods on all objects created by it (such as [BrowserContext], [Browser], [Page] etc.) are expected to be called on the same thread where the Playwright object was created or proper synchronization should be implemented to ensure only one thread calls Playwright methods at any given time. Having said that it's okay to create multiple Playwright instances each on its own thread.",source:"@site/versioned_docs/version-1.23/threading.mdx",sourceDirName:".",slug:"/multithreading",permalink:"/java/docs/1.23/multithreading",tags:[],version:"1.23",frontMatter:{id:"multithreading",title:"Multithreading"},sidebar:"docs",previous:{title:"Locators",permalink:"/java/docs/1.23/locators"},next:{title:"Navigations",permalink:"/java/docs/1.23/navigations"}},m={},w=[{value:"Synchronous API and event dispatching",id:"synchronous-api-and-event-dispatching",level:2},{value:"Page.waitForTimeout() vs. Thread.sleep()",id:"pagewaitfortimeout-vs-threadsleep",level:3}],y={toc:w};function f(e){var t,r=e,{components:n}=r,p=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=h(h({},y),p),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Playwright Java is not thread safe, i.e. all its methods as well as methods on all objects created by it (such as ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/1.23/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext"),", ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/1.23/api/class-browser",title:"Browser"}),"Browser"),", ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/1.23/api/class-page",title:"Page"}),"Page")," etc.) are expected to be called on the same thread where the Playwright object was created or proper synchronization should be implemented to ensure only one thread calls Playwright methods at any given time. Having said that it's okay to create multiple Playwright instances each on its own thread."),(0,a.kt)("p",null,"Here is an example where three playwright instances are created each on its own thread. Each instance launches its own browser process and runs the test against it."),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-java"}),'package org.example;\n\nimport com.microsoft.playwright.*;\n\nimport java.nio.file.Paths;\n\nimport static java.util.Arrays.asList;\n\npublic class PlaywrightThread extends Thread {\n  private final String browserName;\n\n  private PlaywrightThread(String browserName) {\n    this.browserName = browserName;\n  }\n\n  public static void main(String[] args) throws InterruptedException {\n    // Create separate playwright thread for each browser.\n    for (String browserName: asList("chromium", "webkit", "firefox")) {\n      Thread thread = new PlaywrightThread(browserName);\n      thread.start();\n    }\n  }\n\n  @Override\n  public void run() {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType browserType = getBrowserType(playwright, browserName);\n      Browser browser = browserType.launch();\n      Page page = browser.newPage();\n      page.navigate("http://whatsmyuseragent.org/");\n      page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("user-agent-" + browserName + ".png")));\n    }\n  }\n\n  private static BrowserType getBrowserType(Playwright playwright, String browserName) {\n    switch (browserName) {\n      case "chromium":\n        return playwright.chromium();\n      case "webkit":\n        return playwright.webkit();\n      case "firefox":\n        return playwright.firefox();\n      default:\n        throw new IllegalArgumentException();\n    }\n  }\n}\n')),(0,a.kt)("h2",h({},{id:"synchronous-api-and-event-dispatching"}),"Synchronous API and event dispatching"),(0,a.kt)("p",null,"In the synchronous Playwright API all events are dispatched only when Playwright is running its message loop. This happens automatically when you call any of the API methods and doesn't happen if there are no active Playwright calls on the stack. If you need to wait for an event the best way to do this is via one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"waitFor*")," methods."),(0,a.kt)("h3",h({},{id:"pagewaitfortimeout-vs-threadsleep"}),"Page.waitForTimeout() vs. Thread.sleep()"),(0,a.kt)("p",null,"One consequence of the synchronous API is that if you for whatever reason call ",(0,a.kt)("inlineCode",{parentName:"p"},"Thread.sleep()")," no events will be fired while the thread is sleeping. If you want events from the browser to be dispatched while the program"),(0,a.kt)("p",null,"execution is paused use ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/1.23/api/class-page#page-wait-for-timeout"}),"Page.waitForTimeout(timeout)")," or ",(0,a.kt)("a",h({parentName:"p"},{href:"/java/docs/1.23/api/class-frame#frame-wait-for-timeout"}),"Frame.waitForTimeout(timeout)"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",h({parentName:"pre"},{className:"language-java"}),'page.onResponse(response -> System.out.println(response.url()));\npage.navigate("https://playwright.dev");\nSystem.out.println("-- did navigate --");\n// Block current thread for 60s and ensure the events are dispatched.\npage.waitForTimeout(60_000);\n')))}f.isMDXComponent=!0}}]);