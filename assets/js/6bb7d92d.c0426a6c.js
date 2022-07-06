"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8406],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=s.createContext({}),p=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return s.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return a?s.createElement(k,i(i({ref:t},c),{},{components:a})):s.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},76139:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return N},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return h}});var s=a(3905),n=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&c(e,a,t[a]);return e};const d={id:"class-testcase",title:"TestCase"},m=void 0,k={unversionedId:"api/class-testcase",id:"api/class-testcase",title:"TestCase",description:"TestCase corresponds to every test(title, testFunction) call in a test file. When a single test(title, testFunction) is running in multiple projects or repeated multiple times, it will have multiple TestCase objects in corresponding projects' suites.",source:"@site/docs/api/class-testcase.mdx",sourceDirName:"api",slug:"/api/class-testcase",permalink:"/docs/next/api/class-testcase",tags:[],version:"current",frontMatter:{id:"class-testcase",title:"TestCase"},sidebar:"api",previous:{title:"Suite",permalink:"/docs/next/api/class-suite"},next:{title:"TestResult",permalink:"/docs/next/api/class-testresult"}},f={},h=[{value:"testCase.ok()",id:"test-case-ok",level:2},{value:"testCase.outcome()",id:"test-case-outcome",level:2},{value:"testCase.titlePath()",id:"test-case-title-path",level:2},{value:"testCase.annotations",id:"test-case-annotations",level:2},{value:"testCase.expectedStatus",id:"test-case-expected-status",level:2},{value:"testCase.location",id:"test-case-location",level:2},{value:"testCase.parent",id:"test-case-parent",level:2},{value:"testCase.repeatEachIndex",id:"test-case-repeat-each-index",level:2},{value:"testCase.results",id:"test-case-results",level:2},{value:"testCase.retries",id:"test-case-retries",level:2},{value:"testCase.timeout",id:"test-case-timeout",level:2},{value:"testCase.title",id:"test-case-title",level:2}],v={toc:h};function N(e){var t,a=e,{components:n}=a,c=((e,t)=>{var a={};for(var s in e)o.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&l)for(var s of l(e))t.indexOf(s)<0&&p.call(e,s)&&(a[s]=e[s]);return a})(a,["components"]);return(0,s.kt)("wrapper",(t=u(u({},v),c),r(t,i({components:n,mdxType:"MDXLayout"}))),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"TestCase")," corresponds to every ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-test#test-call"}),"test(title, testFunction)")," call in a test file. When a single ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-test#test-call"}),"test(title, testFunction)")," is running in multiple projects or repeated multiple times, it will have multiple ",(0,s.kt)("inlineCode",{parentName:"p"},"TestCase")," objects in corresponding projects' suites."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-ok"}),"testCase.ok()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-outcome"}),"testCase.outcome()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-title-path"}),"testCase.titlePath()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-annotations"}),"testCase.annotations")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-expected-status"}),"testCase.expectedStatus")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-location"}),"testCase.location")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-parent"}),"testCase.parent")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-repeat-each-index"}),"testCase.repeatEachIndex")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-results"}),"testCase.results")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-retries"}),"testCase.retries")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-timeout"}),"testCase.timeout")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testcase#test-case-title"}),"testCase.title"))),(0,s.kt)("h2",u({},{id:"test-case-ok"}),"testCase.ok()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-ok-return"})," ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">",(0,s.kt)("a",{href:"#test-case-ok-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Whether the test is considered running fine. Non-ok tests fail the test run with non-zero exit code."),(0,s.kt)("h2",u({},{id:"test-case-outcome"}),"testCase.outcome()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-outcome-return"})," ","<",'"skipped"|"expected"|"unexpected"|"flaky"',">",(0,s.kt)("a",{href:"#test-case-outcome-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Testing outcome for this test. Note that outcome is not the same as ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-testresult#test-result-status"}),"testResult.status"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Test that is expected to fail and actually fails is ",(0,s.kt)("inlineCode",{parentName:"li"},"'expected'"),"."),(0,s.kt)("li",{parentName:"ul"},"Test that passes on a second retry is ",(0,s.kt)("inlineCode",{parentName:"li"},"'flaky'"),".")),(0,s.kt)("h2",u({},{id:"test-case-title-path"}),"testCase.titlePath()"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"test-case-title-path-return"})," ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",">",(0,s.kt)("a",{href:"#test-case-title-path-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns a list of titles from the root down to this test."),(0,s.kt)("h2",u({},{id:"test-case-annotations"}),"testCase.annotations"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"type")," ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Annotation type, for example ",(0,s.kt)("inlineCode",{parentName:"li"},"'skip'")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"'fail'"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"description?")," ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Optional description.")))),(0,s.kt)("p",null,"The list of annotations applicable to the current test. Includes annotations from the test, annotations from all ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-test#test-describe"}),"test.describe(title, callback)")," groups the test belongs to and file-level annotations for the test file."),(0,s.kt)("p",null,"Annotations are available during test execution through ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-annotations"}),"testInfo.annotations"),"."),(0,s.kt)("p",null,"Learn more about ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/test-annotations"}),"test annotations"),"."),(0,s.kt)("h2",u({},{id:"test-case-expected-status"}),"testCase.expectedStatus"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",'"passed"|"failed"|"timedOut"|"skipped"',">")),(0,s.kt)("p",null,"Expected test status."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Tests marked as ",(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-test#test-skip-1"}),"test.skip(title, testFunction)")," or ",(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-test#test-fixme-1"}),"test.fixme(title, testFunction)")," are expected to be ",(0,s.kt)("inlineCode",{parentName:"li"},"'skipped'"),"."),(0,s.kt)("li",{parentName:"ul"},"Tests marked as ",(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-test#test-fail-1"}),"test.fail()")," are expected to be ",(0,s.kt)("inlineCode",{parentName:"li"},"'failed'"),"."),(0,s.kt)("li",{parentName:"ul"},"Other tests are expected to be ",(0,s.kt)("inlineCode",{parentName:"li"},"'passed'"),".")),(0,s.kt)("p",null,"See also ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-testresult#test-result-status"}),"testResult.status")," for the actual status."),(0,s.kt)("h2",u({},{id:"test-case-location"}),"testCase.location"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-location",title:"Location"}),"Location"),">")),(0,s.kt)("p",null,"Location in the source where the test is defined."),(0,s.kt)("h2",u({},{id:"test-case-parent"}),"testCase.parent"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-suite",title:"Suite"}),"Suite"),">")),(0,s.kt)("p",null,"Suite this test case belongs to."),(0,s.kt)("h2",u({},{id:"test-case-repeat-each-index"}),"testCase.repeatEachIndex"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">")),(0,s.kt)("p",null,'Contains the repeat index when running in "repeat each" mode. This mode is enabled by passing ',(0,s.kt)("inlineCode",{parentName:"p"},"--repeat-each")," to the ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/test-cli"}),"command line"),"."),(0,s.kt)("h2",u({},{id:"test-case-results"}),"testCase.results"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,s.kt)("a",u({parentName:"li"},{href:"/docs/next/api/class-testresult",title:"TestResult"}),"TestResult"),">",">")),(0,s.kt)("p",null,"Results for each run of this test."),(0,s.kt)("h2",u({},{id:"test-case-retries"}),"testCase.retries"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">")),(0,s.kt)("p",null,"The maximum number of retries given to this test in the configuration."),(0,s.kt)("p",null,"Learn more about ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/test-retries#retries"}),"test retries"),"."),(0,s.kt)("h2",u({},{id:"test-case-timeout"}),"testCase.timeout"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">")),(0,s.kt)("p",null,"The timeout given to the test. Affected by ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-testconfig#test-config-timeout"}),"testConfig.timeout"),", ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-testproject#test-project-timeout"}),"testProject.timeout"),", ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-test#test-set-timeout"}),"test.setTimeout(timeout)"),", ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-test#test-slow-1"}),"test.slow()")," and ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-testinfo#test-info-set-timeout"}),"testInfo.setTimeout(timeout)"),"."),(0,s.kt)("h2",u({},{id:"test-case-title"}),"testCase.title"),(0,s.kt)("font",{size:"2",style:{position:"relative",top:"-20px"}},"Added in: v1.10"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"type: ","<",(0,s.kt)("a",u({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),(0,s.kt)("p",null,"Test title as passed to the ",(0,s.kt)("a",u({parentName:"p"},{href:"/docs/next/api/class-test#test-call"}),"test(title, testFunction)")," call."))}N.isMDXComponent=!0}}]);