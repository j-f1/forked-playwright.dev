"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7296],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8097:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return k}});var i=t(3905),a=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&p(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&p(e,t,n[t]);return e};const d={id:"ci",title:"Continuous Integration"},m=void 0,h={unversionedId:"ci",id:"version-1.20/ci",title:"Continuous Integration",description:"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers.",source:"@site/versioned_docs/version-1.20/ci.mdx",sourceDirName:".",slug:"/ci",permalink:"/dotnet/docs/ci",tags:[],version:"1.20",frontMatter:{id:"ci",title:"Continuous Integration"},sidebar:"docs",previous:{title:"Docker",permalink:"/dotnet/docs/docker"},next:{title:"Selenium Grid",permalink:"/dotnet/docs/selenium-grid"}},g={},k=[{value:"Introduction",id:"introduction",level:2},{value:"CI configurations",id:"ci-configurations",level:2},{value:"GitHub Actions",id:"github-actions",level:3},{value:"GitHub Actions on deployment",id:"github-actions-on-deployment",level:3},{value:"Docker",id:"docker",level:3},{value:"Azure Pipelines",id:"azure-pipelines",level:3},{value:"Travis CI",id:"travis-ci",level:3},{value:"CircleCI",id:"circleci",level:3},{value:"Jenkins",id:"jenkins",level:3},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",level:3},{value:"GitLab CI",id:"gitlab-ci",level:3},{value:"Caching browsers",id:"caching-browsers",level:2},{value:"Exception: <code>node_modules</code> are cached (Node-specific)",id:"exception-node_modules-are-cached-node-specific",level:4},{value:"Directories to cache",id:"directories-to-cache",level:4},{value:"Debugging browser launches",id:"debugging-browser-launches",level:2},{value:"Running headed",id:"running-headed",level:2}],b={toc:k};function f(e){var n,t=e,{components:a}=t,p=((e,n)=>{var t={};for(var i in e)l.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&s)for(var i of s(e))n.indexOf(i)<0&&c.call(e,i)&&(t[i]=e[i]);return t})(t,["components"]);return(0,i.kt)("wrapper",(n=u(u({},b),p),r(n,o({components:a,mdxType:"MDXLayout"}))),(0,i.kt)("p",null,"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#introduction"}),"Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#ci-configurations"}),"CI configurations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#caching-browsers"}),"Caching browsers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#debugging-browser-launches"}),"Debugging browser launches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",u({parentName:"li"},{href:"#running-headed"}),"Running headed"))),(0,i.kt)("h2",u({},{id:"introduction"}),"Introduction"),(0,i.kt)("p",null,"3 steps to get your tests running on CI:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Ensure CI agent can run browsers"),": Use ",(0,i.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/docker"}),"our Docker image")," in Linux agents or install your dependencies using the ",(0,i.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/cli#install-system-dependencies"}),"CLI"),". Windows and macOS agents do not require any additional dependencies."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Install Playwright"),":"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Run your tests"),":")),(0,i.kt)("h2",u({},{id:"ci-configurations"}),"CI configurations"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/cli#install-system-dependencies"}),"Command line tools")," can be used to install all operating system dependencies on GitHub Actions."),(0,i.kt)("h3",u({},{id:"github-actions"}),"GitHub Actions"),(0,i.kt)("p",null,"We run ",(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/main/.github/workflows/tests_secondary.yml"}),"our tests")," on GitHub Actions, across a matrix of 3 platforms (Windows, Linux, macOS) and 3 browsers (Chromium, Firefox, WebKit)."),(0,i.kt)("h3",u({},{id:"github-actions-on-deployment"}),"GitHub Actions on deployment"),(0,i.kt)("p",null,"This will start the tests after a ",(0,i.kt)("a",u({parentName:"p"},{href:"https://developer.github.com/v3/repos/deployments/"}),"GitHub Deployment")," went into the ",(0,i.kt)("inlineCode",{parentName:"p"},"success")," state. Services like Azure Static Web Apps, Netlify, Vercel, etc. use this pattern so you can run your end-to-end tests on their deployed enviornment."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"name: Playwright Tests\non:\n  deployment_status:\njobs:\n  test:\n    timeout-minutes: 60\n    runs-on: ubuntu-latest\n    if: github.event.deployment_status.state == 'success'\n    steps:\n    - uses: actions/checkout@v2\n    - uses: actions/setup-node@v2\n      with:\n        node-version: '14.x'\n    - name: Install dependencies\n      run: npm ci\n    - name: Install Playwright\n      run: npx playwright install --with-deps\n    - name: Run Playwright tests\n      run: npm run test:e2e\n      env:\n        # This might depend on your test-runner/language binding\n        PLAYWRIGHT_TEST_BASE_URL: ${{ github.event.deployment_status.target_url }}\n")),(0,i.kt)("h3",u({},{id:"docker"}),"Docker"),(0,i.kt)("p",null,"We have a ",(0,i.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/docker"}),"pre-built Docker image")," which can either be used directly, or as a reference to update your existing Docker definitions."),(0,i.kt)("p",null,"Suggested configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By default, Docker runs a container with a ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/shm")," shared memory space 64MB. This is ",(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/c0b/chrome-in-docker/issues/1"}),"typically too small")," for Chromium and will cause Chromium to crash when rendering large pages. To fix, run the container with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run --shm-size=1gb")," to increase the size of ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". Since Chromium 65, this is no longer necessary. Instead, launch the browser with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-dev-shm-usage")," flag:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),'await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions\n{\n     Args = new[] { "--disable-dev-shm-usage" }\n});\n')),(0,i.kt)("p",{parentName:"li"},"This will write shared memory files into ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". See ",(0,i.kt)("a",u({parentName:"p"},{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"}),"crbug.com/736452")," for more details.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"--ipc=host")," is also recommended when using Chromium\u2014without it Chromium can run out of memory and crash. Learn more about this option in ",(0,i.kt)("a",u({parentName:"p"},{href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"}),"Docker docs"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Seeing other weird errors when launching Chromium? Try running your container with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run --cap-add=SYS_ADMIN")," when developing locally.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",u({parentName:"p"},{href:"https://github.com/Yelp/dumb-init"}),"dumb-init")," is worth checking out if you're experiencing a lot of zombies Chromium processes sticking around. There's special treatment for processes with PID=1, which makes it hard to terminate Chromium properly in some cases (e.g. in Docker)."))),(0,i.kt)("h3",u({},{id:"azure-pipelines"}),"Azure Pipelines"),(0,i.kt)("p",null,"For Windows or macOS agents, no additional configuration required, just install Playwright and run your tests."),(0,i.kt)("p",null,"For Linux agents, you can use ",(0,i.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/docker"}),"our Docker container")," with Azure Pipelines support for ",(0,i.kt)("a",u({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/container-phases?view=azure-devops"}),"running containerized jobs"),". Alternatively, you can refer to the ",(0,i.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/docker"}),"Dockerfile")," to see additional dependencies that need to be installed on a Ubuntu agent."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"pool:\n  vmImage: 'ubuntu-20.04'\n\ncontainer: mcr.microsoft.com/playwright:focal\n\nsteps:\n...\n")),(0,i.kt)("h3",u({},{id:"travis-ci"}),"Travis CI"),(0,i.kt)("p",null,"Suggested configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",u({parentName:"li"},{href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"}),"User namespace cloning")," should be enabled to support proper sandboxing"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Xvfb"}),"xvfb")," should be launched in order to run Chromium in non-headless mode (e.g. to test Chrome Extensions)"),(0,i.kt)("li",{parentName:"ol"},"If your project does not have ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json"),", Travis would be auto-caching ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. If you run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," (instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"npm ci"),"), it is possible that the browser binaries are not downloaded. Fix this with ",(0,i.kt)("a",u({parentName:"li"},{href:"#exception-node_modules-are-cached"}),"these steps")," outlined below.")),(0,i.kt)("p",null,"To sum up, your ",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml")," might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-yml"}),'language: node_js\ndist: bionic\naddons:\n  apt:\n    packages:\n    # These are required to run webkit\n    - libwoff1\n    - libopus0\n    - libwebp6\n    - libwebpdemux2\n    - libenchant1c2a\n    - libgudev-1.0-0\n    - libsecret-1-0\n    - libhyphen0\n    - libgdk-pixbuf2.0-0\n    - libegl1\n    - libgles2\n    - libevent-2.1-6\n    - libnotify4\n    - libxslt1.1\n    - libvpx5\n    # gstreamer and plugins to support video playback in WebKit.\n    - gstreamer1.0-gl\n    - gstreamer1.0-plugins-base\n    - gstreamer1.0-plugins-good\n    - gstreamer1.0-plugins-bad\n    # This is required to run chromium\n    - libgbm1\n    # this is needed for running headed tests\n    - xvfb\n\n# allow headed tests\nbefore_install:\n  # Enable user namespace cloning\n  - "sysctl kernel.unprivileged_userns_clone=1"\n  # Launch XVFB\n  - "export DISPLAY=:99.0"\n  - "sh -e /etc/init.d/xvfb start"\n')),(0,i.kt)("h3",u({},{id:"circleci"}),"CircleCI"),(0,i.kt)("p",null,"Running Playwright on CircleCI requires the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the pre-built ",(0,i.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/docker"}),"Docker image")," in your config like so:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"docker:\n  - image: mcr.microsoft.com/playwright:focal\nenvironment:\n  NODE_ENV: development # Needed if playwright is in `devDependencies`\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you\u2019re using Playwright through Jest, then you may encounter an error spawning child processes:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",u({parentName:"pre"},{}),"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),(0,i.kt)("p",{parentName:"li"},"This is likely caused by Jest autodetecting the number of processes on the entire machine (",(0,i.kt)("inlineCode",{parentName:"p"},"36"),") rather than the number allowed to your container (",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"). To fix this, set ",(0,i.kt)("inlineCode",{parentName:"p"},"jest --maxWorkers=2")," in your test command."))),(0,i.kt)("h3",u({},{id:"jenkins"}),"Jenkins"),(0,i.kt)("p",null,"Jenkins supports Docker agents for pipelines. Use the ",(0,i.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/docker"}),"Playwright Docker image")," to run tests on Jenkins."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-groovy"}),"pipeline {\n   agent { docker { image 'mcr.microsoft.com/playwright:focal' } }\n   stages {\n      stage('e2e-tests') {\n         steps {\n            sh 'npm install'\n            sh 'npm run test'\n         }\n      }\n   }\n}\n")),(0,i.kt)("h3",u({},{id:"bitbucket-pipelines"}),"Bitbucket Pipelines"),(0,i.kt)("p",null,"Bitbucket Pipelines can use public ",(0,i.kt)("a",u({parentName:"p"},{href:"https://confluence.atlassian.com/bitbucket/use-docker-images-as-build-environments-792298897.html"}),"Docker images as build environments"),". To run Playwright tests on Bitbucket, use our public Docker image (",(0,i.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/docker"}),"see Dockerfile"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"image: mcr.microsoft.com/playwright:focal\n")),(0,i.kt)("p",null,"While the Docker image supports sandboxing for Chromium, it does not work in the Bitbucket Pipelines environment. To launch Chromium on Bitbucket Pipelines, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"chromiumSandbox: false")," launch argument."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions\n        {\n            ChromiumSandbox = false\n        });\n    }\n}\n")),(0,i.kt)("h3",u({},{id:"gitlab-ci"}),"GitLab CI"),(0,i.kt)("p",null,"To run Playwright tests on GitLab, use our public Docker image (",(0,i.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/docker"}),"see Dockerfile"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-yml"}),"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:focal\n  script:\n  ...\n")),(0,i.kt)("h2",u({},{id:"caching-browsers"}),"Caching browsers"),(0,i.kt)("p",null,"By default, Playwright downloads browser binaries when the Playwright NPM package is installed. The NPM packages have a ",(0,i.kt)("inlineCode",{parentName:"p"},"postinstall")," hook that downloads the browser binaries. This behavior can be ",(0,i.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/browsers#managing-browser-binaries"}),"customized with environment variables"),"."),(0,i.kt)("p",null,"Caching browsers on CI is ",(0,i.kt)("strong",{parentName:"p"},"strictly optional"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"postinstall")," hooks should execute and download the browser binaries on every run."),(0,i.kt)("h4",u({},{id:"exception-node_modules-are-cached-node-specific"}),"Exception: ",(0,i.kt)("inlineCode",{parentName:"h4"},"node_modules")," are cached (Node-specific)"),(0,i.kt)("p",null,"Most CI providers cache the ",(0,i.kt)("a",u({parentName:"p"},{href:"https://docs.npmjs.com/cli-commands/cache.html"}),"npm-cache")," directory (located at ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.npm"),"). If your CI pipelines caches the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," directory and you run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," (instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"npm ci"),"), the default configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"will not work"),". This is because the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," step will find the Playwright NPM package on disk and not execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"postinstall")," step."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Travis CI automatically caches ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," if your repo does not have a ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file.")),(0,i.kt)("p",null,"This behavior can be fixed with one of the following approaches:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Move to caching ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/.npm")," or the npm-cache directory. (This is the default behavior in most CI providers.)"),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH=0")," as the environment variable before running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install"),". This will download the browser binaries in the ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," directory and cache them with the package code. See ",(0,i.kt)("a",u({parentName:"li"},{href:"/dotnet/docs/browsers#managing-browser-binaries"}),"managing browser binaries"),"."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"npm ci")," (instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install"),") which forces a clean install: by removing the existing ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. See ",(0,i.kt)("a",u({parentName:"li"},{href:"https://docs.npmjs.com/cli/ci.html"}),"npm docs"),"."),(0,i.kt)("li",{parentName:"ol"},"Cache the browser binaries, with the steps below.")),(0,i.kt)("h4",u({},{id:"directories-to-cache"}),"Directories to cache"),(0,i.kt)("p",null,"With the default behavior, Playwright downloads the browser binaries in the following directories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,i.kt)("p",null,"To cache the browser downloads between CI runs, cache this location in your CI configuration, against a hash of the Playwright version."),(0,i.kt)("h2",u({},{id:"debugging-browser-launches"}),"Debugging browser launches"),(0,i.kt)("p",null,"Playwright supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable to output debug logs during execution. Setting it to ",(0,i.kt)("inlineCode",{parentName:"p"},"pw:browser*")," is helpful while debugging ",(0,i.kt)("inlineCode",{parentName:"p"},"Error: Failed to launch browser")," errors."),(0,i.kt)("h2",u({},{id:"running-headed"}),"Running headed"),(0,i.kt)("p",null,"By default, Playwright launches browsers in headless mode. This can be changed by passing a flag when the browser is launched."),(0,i.kt)("pre",null,(0,i.kt)("code",u({parentName:"pre"},{className:"language-csharp"}),"using Microsoft.Playwright;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    public static async Task Main()\n    {\n        using var playwright = await Playwright.CreateAsync();\n        await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions\n        {\n            Headless = false\n        });\n    }\n}\n")),(0,i.kt)("p",null,"On Linux agents, headed execution requires ",(0,i.kt)("a",u({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Xvfb"}),"Xvfb")," to be installed. Our ",(0,i.kt)("a",u({parentName:"p"},{href:"/dotnet/docs/docker"}),"Docker image")," and GitHub Action have Xvfb pre-installed. To run browsers in headed mode with Xvfb, add ",(0,i.kt)("inlineCode",{parentName:"p"},"xvfb-run")," before the Node.js command."))}f.isMDXComponent=!0}}]);