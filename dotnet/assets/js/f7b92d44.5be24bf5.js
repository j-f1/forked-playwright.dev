"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[954],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var i=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},5064:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(7294),r=t(9443);var a=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var n=e.lazy,t=e.block,r=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=a(),g=h.tabGroupChoices,k=h.setTabGroupChoices,f=(0,i.useState)(r),b=f[0],w=f[1],y=i.Children.toArray(e.children),N=[];if(null!=d){var v=g[d];null!=v&&v!==b&&u.some((function(e){return e.value===v}))&&w(v)}var C=function(e){var n=e.currentTarget,t=N.indexOf(n),i=u[t].value;w(i),null!=d&&(k(d,i),setTimeout((function(){var e,t,i,r,a,o,s,c;(e=n.getBoundingClientRect(),t=e.top,i=e.left,r=e.bottom,a=e.right,o=window,s=o.innerHeight,c=o.innerWidth,t>=0&&a<=c&&r<=s&&i>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(l),setTimeout((function(){return n.classList.remove(l)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case p:var i=N.indexOf(e.target)+1;t=N[i]||N[0];break;case c:var r=N.indexOf(e.target)-1;t=N[r]||N[N.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},u.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":b===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:C,onClick:C},t)}))),n?(0,i.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}},9443:function(e,n,t){var i=(0,t(7294).createContext)(void 0);n.Z=i},8243:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),o=(t(5064),t(8215),{id:"ci",title:"Continuous Integration"}),s=void 0,l={unversionedId:"ci",id:"version-1.13/ci",isDocsHomePage:!1,title:"Continuous Integration",description:"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers.",source:"@site/versioned_docs/version-1.13/ci.mdx",sourceDirName:".",slug:"/ci",permalink:"/dotnet/docs/1.13/ci",version:"1.13",frontMatter:{id:"ci",title:"Continuous Integration"},sidebar:"version-1.13/docs",previous:{title:"Docker",permalink:"/dotnet/docs/1.13/docker"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"CI configurations",id:"ci-configurations",children:[{value:"GitHub Actions",id:"github-actions",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Azure Pipelines",id:"azure-pipelines",children:[]},{value:"Travis CI",id:"travis-ci",children:[]},{value:"CircleCI",id:"circleci",children:[]},{value:"Jenkins",id:"jenkins",children:[]},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",children:[]},{value:"GitLab CI",id:"gitlab-ci",children:[]}]},{value:"Caching browsers",id:"caching-browsers",children:[]},{value:"Debugging browser launches",id:"debugging-browser-launches",children:[]},{value:"Running headed",id:"running-headed",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ci-configurations"},"CI configurations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#caching-browsers"},"Caching browsers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#debugging-browser-launches"},"Debugging browser launches")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#running-headed"},"Running headed"))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"3 steps to get your tests running on CI:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Ensure CI agent can run browsers"),": Use ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/docker"},"our Docker image")," in Linux agents or install your dependencies using the ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/cli#install-system-dependencies"},"CLI"),". Windows and macOS agents do not require any additional dependencies."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Install Playwright"),":"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Run your tests"),":")),(0,a.kt)("h2",{id:"ci-configurations"},"CI configurations"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/cli#install-system-dependencies"},"Command Line Interface")," can be used to install all operating system dependencies on GitHub Actions."),(0,a.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,a.kt)("p",null,"We run ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/.github/workflows/tests_secondary.yml"},"our tests")," on GitHub Actions, across a matrix of 3 platforms (Windows, Linux, macOS) and 3 browsers (Chromium, Firefox, WebKit)."),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("p",null,"We have a ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/docker"},"pre-built Docker image")," which can either be used directly, or as a reference to update your existing Docker definitions."),(0,a.kt)("p",null,"Suggested configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"By default, Docker runs a container with a ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm")," shared memory space 64MB. This is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/c0b/chrome-in-docker/issues/1"},"typically too small")," for Chromium and will cause Chromium to crash when rendering large pages. To fix, run the container with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --shm-size=1gb")," to increase the size of ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". Since Chromium 65, this is no longer necessary. Instead, launch the browser with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-dev-shm-usage")," flag:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions\n{\n     Args = new[] { "--disable-dev-shm-usage" }\n});\n')),(0,a.kt)("p",{parentName:"li"},"This will write shared memory files into ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". See ",(0,a.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"},"crbug.com/736452")," for more details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"--ipc=host")," is also recommended when using Chromium\u2014without it Chromium can run out of memory and crash. Learn more about this option in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"},"Docker docs"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Seeing other weird errors when launching Chromium? Try running your container with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run --cap-add=SYS_ADMIN")," when developing locally.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Yelp/dumb-init"},"dumb-init")," is worth checking out if you're experiencing a lot of zombies Chromium processes sticking around. There's special treatment for processes with PID=1, which makes it hard to terminate Chromium properly in some cases (e.g. in Docker)."))),(0,a.kt)("h3",{id:"azure-pipelines"},"Azure Pipelines"),(0,a.kt)("p",null,"For Windows or macOS agents, no additional configuration required, just install Playwright and run your tests."),(0,a.kt)("p",null,"For Linux agents, you can use ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/docker"},"our Docker container")," with Azure Pipelines support for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/container-phases?view=azure-devops"},"running containerized jobs"),". Alternatively, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/docker"},"Dockerfile")," to see additional dependencies that need to be installed on a Ubuntu agent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"pool:\n  vmImage: 'ubuntu-20.04'\n\ncontainer: mcr.microsoft.com/playwright:focal\n\nsteps:\n...\n")),(0,a.kt)("h3",{id:"travis-ci"},"Travis CI"),(0,a.kt)("p",null,"Suggested configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"},"User namespace cloning")," should be enabled to support proper sandboxing"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Xvfb"},"xvfb")," should be launched in order to run Chromium in non-headless mode (e.g. to test Chrome Extensions)"),(0,a.kt)("li",{parentName:"ol"},"If your project does not have ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json"),", Travis would be auto-caching ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. If you run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install")," (instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"npm ci"),"), it is possible that the browser binaries are not downloaded. Fix this with ",(0,a.kt)("a",{parentName:"li",href:"#exception-node_modules-are-cached"},"these steps")," outlined below.")),(0,a.kt)("p",null,"To sum up, your ",(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," might look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'language: node_js\ndist: bionic\naddons:\n  apt:\n    packages:\n    # These are required to run webkit\n    - libwoff1\n    - libopus0\n    - libwebp6\n    - libwebpdemux2\n    - libenchant1c2a\n    - libgudev-1.0-0\n    - libsecret-1-0\n    - libhyphen0\n    - libgdk-pixbuf2.0-0\n    - libegl1\n    - libgles2\n    - libevent-2.1-6\n    - libnotify4\n    - libxslt1.1\n    - libvpx5\n    # gstreamer and plugins to support video playback in WebKit.\n    - gstreamer1.0-gl\n    - gstreamer1.0-plugins-base\n    - gstreamer1.0-plugins-good\n    - gstreamer1.0-plugins-bad\n    # This is required to run chromium\n    - libgbm1\n    # this is needed for running headed tests\n    - xvfb\n\n# allow headed tests\nbefore_install:\n  # Enable user namespace cloning\n  - "sysctl kernel.unprivileged_userns_clone=1"\n  # Launch XVFB\n  - "export DISPLAY=:99.0"\n  - "sh -e /etc/init.d/xvfb start"\n')),(0,a.kt)("h3",{id:"circleci"},"CircleCI"),(0,a.kt)("p",null,"Running Playwright on CircleCI requires the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the pre-built ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/docker"},"Docker image")," in your config like so:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"docker:\n  - image: mcr.microsoft.com/playwright:focal\nenvironment:\n  NODE_ENV: development # Needed if playwright is in `devDependencies`\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you\u2019re using Playwright through Jest, then you may encounter an error spawning child processes:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),(0,a.kt)("p",{parentName:"li"},"This is likely caused by Jest autodetecting the number of processes on the entire machine (",(0,a.kt)("inlineCode",{parentName:"p"},"36"),") rather than the number allowed to your container (",(0,a.kt)("inlineCode",{parentName:"p"},"2"),"). To fix this, set ",(0,a.kt)("inlineCode",{parentName:"p"},"jest --maxWorkers=2")," in your test command."))),(0,a.kt)("h3",{id:"jenkins"},"Jenkins"),(0,a.kt)("p",null,"Jenkins supports Docker agents for pipelines. Use the ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/docker"},"Playwright Docker image")," to run tests on Jenkins."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n   agent { docker { image 'mcr.microsoft.com/playwright:focal' } }\n   stages {\n      stage('e2e-tests') {\n         steps {\n            sh 'npm install'\n            sh 'npm run test'\n         }\n      }\n   }\n}\n")),(0,a.kt)("h3",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,a.kt)("p",null,"Bitbucket Pipelines can use public ",(0,a.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/bitbucket/use-docker-images-as-build-environments-792298897.html"},"Docker images as build environments"),". To run Playwright tests on Bitbucket, use our public Docker image (",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/docker"},"see Dockerfile"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"image: mcr.microsoft.com/playwright:focal\n")),(0,a.kt)("p",null,"While the Docker image supports sandboxing for Chromium, it does not work in the Bitbucket Pipelines environment. To launch Chromium on Bitbucket Pipelines, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"chromiumSandbox: false")," launch argument."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions\n        {\n            ChromiumSandbox = false\n        });\n    }\n}\n")),(0,a.kt)("h3",{id:"gitlab-ci"},"GitLab CI"),(0,a.kt)("p",null,"To run Playwright tests on GitLab, use our public Docker image (",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/docker"},"see Dockerfile"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:focal\n  script:\n  ...\n")),(0,a.kt)("h2",{id:"caching-browsers"},"Caching browsers"),(0,a.kt)("p",null,"By default, Playwright downloads browser binaries when the Playwright NPM package is installed. The NPM packages have a ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," hook that downloads the browser binaries. This behavior can be ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/library#managing-browser-binaries"},"customized with environment variables"),"."),(0,a.kt)("p",null,"Caching browsers on CI is ",(0,a.kt)("strong",{parentName:"p"},"strictly optional"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," hooks should execute and download the browser binaries on every run."),(0,a.kt)("h4",{id:"exception-node_modules-are-cached-node-specific"},"Exception: ",(0,a.kt)("inlineCode",{parentName:"h4"},"node_modules")," are cached (Node-specific)"),(0,a.kt)("p",null,"Most CI providers cache the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli-commands/cache.html"},"npm-cache")," directory (located at ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.npm"),"). If your CI pipelines caches the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," directory and you run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," (instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"npm ci"),"), the default configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"will not work"),". This is because the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," step will find the Playwright NPM package on disk and not execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"postinstall")," step."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Travis CI automatically caches ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," if your repo does not have a ",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file.")),(0,a.kt)("p",null,"This behavior can be fixed with one of the following approaches:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Move to caching ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.npm")," or the npm-cache directory. (This is the default behavior in most CI providers.)"),(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH=0")," as the environment variable before running ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),". This will download the browser binaries in the ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory and cache them with the package code. See ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13/library#managing-browser-binaries"},"managing browser binaries"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"npm ci")," (instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),") which forces a clean install: by removing the existing ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/ci.html"},"npm docs"),"."),(0,a.kt)("li",{parentName:"ol"},"Cache the browser binaries, with the steps below.")),(0,a.kt)("h4",{id:"directories-to-cache"},"Directories to cache"),(0,a.kt)("p",null,"With the default behavior, Playwright downloads the browser binaries in the following directories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,a.kt)("p",null,"To cache the browser downloads between CI runs, cache this location in your CI configuration, against a hash of the Playwright version."),(0,a.kt)("h2",{id:"debugging-browser-launches"},"Debugging browser launches"),(0,a.kt)("p",null,"Playwright supports the ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable to output debug logs during execution. Setting it to ",(0,a.kt)("inlineCode",{parentName:"p"},"pw:browser*")," is helpful while debugging ",(0,a.kt)("inlineCode",{parentName:"p"},"Error: Failed to launch browser")," errors."),(0,a.kt)("h2",{id:"running-headed"},"Running headed"),(0,a.kt)("p",null,"By default, Playwright launches browsers in headless mode. This can be changed by passing a flag when the browser is launched."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions\n        {\n            Headless = false\n        });\n    }\n}\n")),(0,a.kt)("p",null,"On Linux agents, headed execution requires ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Xvfb"},"Xvfb")," to be installed. Our ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13/docker"},"Docker image")," and GitHub Action have Xvfb pre-installed. To run browsers in headed mode with Xvfb, add ",(0,a.kt)("inlineCode",{parentName:"p"},"xvfb-run")," before the Node.js command."))}u.isMDXComponent=!0},6010:function(e,n,t){function i(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=i(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=i(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);