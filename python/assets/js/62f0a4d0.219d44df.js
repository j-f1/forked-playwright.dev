"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8798],{3905:function(e,t,s){s.d(t,{Zo:function(){return l},kt:function(){return _}});var n=s(7294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(s),_=r,h=d["".concat(u,".").concat(_)]||d[_]||c[_]||a;return s?n.createElement(h,i(i({ref:t},l),{},{components:s})):n.createElement(h,i({ref:t},l))}));function _(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,i=new Array(a);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=s[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},1686:function(e,t,s){s.r(t),s.d(t,{assets:function(){return f},contentTitle:function(){return _},default:function(){return y},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return g}});var n=s(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,s)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,c=(e,t)=>{for(var s in t||(t={}))u.call(t,s)&&l(e,s,t[s]);if(o)for(var s of o(t))p.call(t,s)&&l(e,s,t[s]);return e};const d={id:"api-testing",title:"API testing"},_=void 0,h={unversionedId:"api-testing",id:"version-1.20/api-testing",title:"API testing",description:"Playwright can be used to get access to the REST API of your application.",source:"@site/versioned_docs/version-1.20/api-testing.mdx",sourceDirName:".",slug:"/api-testing",permalink:"/python/docs/api-testing",tags:[],version:"1.20",frontMatter:{id:"api-testing",title:"API testing"},sidebar:"docs",previous:{title:"Auto-waiting",permalink:"/python/docs/actionability"},next:{title:"Authentication",permalink:"/python/docs/auth"}},f={},g=[{value:"Writing API Test",id:"writing-api-test",level:2},{value:"Configure",id:"configure",level:3},{value:"Write tests",id:"write-tests",level:3},{value:"Setup and teardown",id:"setup-and-teardown",level:3},{value:"Complete test example",id:"complete-test-example",level:3},{value:"Prepare server state via API calls",id:"prepare-server-state-via-api-calls",level:2},{value:"Check the server state after running user actions",id:"check-the-server-state-after-running-user-actions",level:2},{value:"Reuse authentication state",id:"reuse-authentication-state",level:2}],m={toc:g};function y(e){var t,s=e,{components:r}=s,l=((e,t)=>{var s={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(s[n]=e[n]);return s})(s,["components"]);return(0,n.kt)("wrapper",(t=c(c({},m),l),a(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Playwright can be used to get access to the ",(0,n.kt)("a",c({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"}),"REST")," API of your application."),(0,n.kt)("p",null,"Sometimes you may want to send requests to the server directly from Node.js without loading a page and running js code in it. A few examples where it may come in handy:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Test your server API."),(0,n.kt)("li",{parentName:"ul"},"Prepare server side state before visiting the web application in a test."),(0,n.kt)("li",{parentName:"ul"},"Validate server side post-conditions after running some actions in the browser.")),(0,n.kt)("p",null,"All of that could be achieved via ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," methods."),(0,n.kt)("p",null,"The following examples rely on the ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/test-runners"}),(0,n.kt)("inlineCode",{parentName:"a"},"pytest-playwright"))," package which add Playwright fixtures to the Pytest test-runner."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#writing-api-test"}),"Writing API Test")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#prepare-server-state-via-api-calls"}),"Prepare server state via API calls")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#check-the-server-state-after-running-user-actions"}),"Check the server state after running user actions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#reuse-authentication-state"}),"Reuse authentication state"))),(0,n.kt)("h2",c({},{id:"writing-api-test"}),"Writing API Test"),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," can send all kinds of HTTP(S) requests over network."),(0,n.kt)("p",null,"The following example demonstrates how to use Playwright to test issues creation via ",(0,n.kt)("a",c({parentName:"p"},{href:"https://docs.github.com/en/rest"}),"GitHub API"),". The test suite will do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new repository before running tests."),(0,n.kt)("li",{parentName:"ul"},"Create a few issues and validate server state."),(0,n.kt)("li",{parentName:"ul"},"Delete the repository after running tests.")),(0,n.kt)("h3",c({},{id:"configure"}),"Configure"),(0,n.kt)("p",null,"GitHub API requires authorization, so we'll configure the token once for all tests. While at it, we'll also set the ",(0,n.kt)("inlineCode",{parentName:"p"},"baseURL")," to simplify the tests."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'import os\nfrom typing import Generator\n\nimport pytest\nfrom playwright.sync_api import Playwright, APIRequestContext\n\nGITHUB_API_TOKEN = os.getenv("GITHUB_API_TOKEN")\nassert GITHUB_API_TOKEN, "GITHUB_API_TOKEN is not set"\n\n\n@pytest.fixture(scope="session")\ndef api_request_context(\n    playwright: Playwright,\n) -> Generator[APIRequestContext, None, None]:\n    headers = {\n        # We set this header per GitHub guidelines.\n        "Accept": "application/vnd.github.v3+json",\n        # Add authorization token to all requests.\n        # Assuming personal access token available in the environment.\n        "Authorization": f"token {GITHUB_API_TOKEN}",\n    }\n    request_context = playwright.request.new_context(\n        base_url="https://api.github.com", extra_http_headers=headers\n    )\n    yield request_context\n    request_context.dispose()\n\n')),(0,n.kt)("h3",c({},{id:"write-tests"}),"Write tests"),(0,n.kt)("p",null,"Now that we initialized request object we can add a few tests that will create new issues in the repository."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'import os\nfrom typing import Generator\n\nimport pytest\nfrom playwright.sync_api import Playwright, APIRequestContext\n\nGITHUB_API_TOKEN = os.getenv("GITHUB_API_TOKEN")\nassert GITHUB_API_TOKEN, "GITHUB_API_TOKEN is not set"\n\nGITHUB_USER = os.getenv("GITHUB_USER")\nassert GITHUB_USER, "GITHUB_USER is not set"\n\nGITHUB_REPO = "test"\n\n# ...\n\ndef test_should_create_bug_report(api_request_context: APIRequestContext) -> None:\n    data = {\n        "title": "[Bug] report 1",\n        "body": "Bug description",\n    }\n    new_issue = api_request_context.post(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues", data=data)\n    assert new_issue.ok\n\n    issues = api_request_context.get(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    assert issues.ok\n    issues_response = issues.json()\n    issue = list(filter(lambda issue: issue["title"] == "[Bug] report 1", issues_response))[0]\n    assert issue\n    assert issue["body"] == "Bug description"\n\ndef test_should_create_feature_request(api_request_context: APIRequestContext) -> None:\n    data = {\n        "title": "[Feature] request 1",\n        "body": "Feature description",\n    }\n    new_issue = api_request_context.post(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues", data=data)\n    assert new_issue.ok\n\n    issues = api_request_context.get(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    assert issues.ok\n    issues_response = issues.json()\n    issue = list(filter(lambda issue: issue["title"] == "[Feature] request 1", issues_response))[0]\n    assert issue\n    assert issue["body"] == "Feature description"\n')),(0,n.kt)("h3",c({},{id:"setup-and-teardown"}),"Setup and teardown"),(0,n.kt)("p",null,"These tests assume that repository exists. You probably want to create a new one before running tests and delete it afterwards. Use a ",(0,n.kt)("a",c({parentName:"p"},{href:"https://docs.pytest.org/en/6.2.x/fixture.html#fixture-scopes"}),"session fixture")," for that. The part before ",(0,n.kt)("inlineCode",{parentName:"p"},"yield")," is the before all and after is the after all."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'# ...\n@pytest.fixture(scope="session", autouse=True)\ndef create_test_repository(\n    api_request_context: APIRequestContext,\n) -> Generator[None, None, None]:\n    # Before all\n    new_repo = api_request_context.post("/user/repos", data={"name": GITHUB_REPO})\n    assert new_repo.ok\n    yield\n    # After all\n    deleted_repo = api_request_context.delete(f"/repos/{GITHUB_USER}/{GITHUB_REPO}")\n    assert deleted_repo.ok\n')),(0,n.kt)("h3",c({},{id:"complete-test-example"}),"Complete test example"),(0,n.kt)("p",null,"Here is the complete example of an API test:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'from enum import auto\nimport os\nfrom typing import Generator\n\nimport pytest\nfrom playwright.sync_api import Playwright, Page, APIRequestContext, expect\n\nGITHUB_API_TOKEN = os.getenv("GITHUB_API_TOKEN")\nassert GITHUB_API_TOKEN, "GITHUB_API_TOKEN is not set"\n\nGITHUB_USER = os.getenv("GITHUB_USER")\nassert GITHUB_USER, "GITHUB_USER is not set"\n\nGITHUB_REPO = "test"\n\n\n@pytest.fixture(scope="session")\ndef api_request_context(\n    playwright: Playwright,\n) -> Generator[APIRequestContext, None, None]:\n    headers = {\n        # We set this header per GitHub guidelines.\n        "Accept": "application/vnd.github.v3+json",\n        # Add authorization token to all requests.\n        # Assuming personal access token available in the environment.\n        "Authorization": f"token {GITHUB_API_TOKEN}",\n    }\n    request_context = playwright.request.new_context(\n        base_url="https://api.github.com", extra_http_headers=headers\n    )\n    yield request_context\n    request_context.dispose()\n\n\n@pytest.fixture(scope="session", autouse=True)\ndef create_test_repository(\n    api_request_context: APIRequestContext,\n) -> Generator[None, None, None]:\n    # Before all\n    new_repo = api_request_context.post("/user/repos", data={"name": GITHUB_REPO})\n    assert new_repo.ok\n    yield\n    # After all\n    deleted_repo = api_request_context.delete(f"/repos/{GITHUB_USER}/{GITHUB_REPO}")\n    assert deleted_repo.ok\n\n\ndef test_should_create_bug_report(api_request_context: APIRequestContext) -> None:\n    data = {\n        "title": "[Bug] report 1",\n        "body": "Bug description",\n    }\n    new_issue = api_request_context.post(\n        f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues", data=data\n    )\n    assert new_issue.ok\n\n    issues = api_request_context.get(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    assert issues.ok\n    issues_response = issues.json()\n    issue = list(\n        filter(lambda issue: issue["title"] == "[Bug] report 1", issues_response)\n    )[0]\n    assert issue\n    assert issue["body"] == "Bug description"\n\n\ndef test_should_create_feature_request(api_request_context: APIRequestContext) -> None:\n    data = {\n        "title": "[Feature] request 1",\n        "body": "Feature description",\n    }\n    new_issue = api_request_context.post(\n        f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues", data=data\n    )\n    assert new_issue.ok\n\n    issues = api_request_context.get(f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    assert issues.ok\n    issues_response = issues.json()\n    issue = list(\n        filter(lambda issue: issue["title"] == "[Feature] request 1", issues_response)\n    )[0]\n    assert issue\n    assert issue["body"] == "Feature description"\n')),(0,n.kt)("h2",c({},{id:"prepare-server-state-via-api-calls"}),"Prepare server state via API calls"),(0,n.kt)("p",null,"The following test creates a new issue via API and then navigates to the list of all issues in the project to check that it appears at the top of the list. The check is performed using ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/test-assertions",title:"LocatorAssertions"}),"LocatorAssertions"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'def test_last_created_issue_should_be_first_in_the_list(api_request_context: APIRequestContext, page: Page) -> None:\n    def create_issue(title: str) -> None:\n        data = {\n            "title": title,\n            "body": "Feature description",\n        }\n        new_issue = api_request_context.post(\n            f"/repos/{GITHUB_USER}/{GITHUB_REPO}/issues", data=data\n        )\n        assert new_issue.ok\n    create_issue("[Feature] request 1")\n    create_issue("[Feature] request 2")\n    page.goto(f"https://github.com/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    first_issue = page.locator("a[data-hovercard-type=\'issue\']").first\n    expect(first_issue).to_have_text("[Feature] request 2")\n')),(0,n.kt)("h2",c({},{id:"check-the-server-state-after-running-user-actions"}),"Check the server state after running user actions"),(0,n.kt)("p",null,"The following test creates a new issue via user interface in the browser and then checks via API if it was created:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'def test_last_created_issue_should_be_on_the_server(api_request_context: APIRequestContext, page: Page) -> None:\n    page.goto(f"https://github.com/{GITHUB_USER}/{GITHUB_REPO}/issues")\n    page.click("text=New issue")\n    page.fill("[aria-label=\'Title\']", "Bug report 1")\n    page.fill("[aria-label=\'Comment body\']", "Bug description")\n    page.click("text=Submit new issue")\n    issue_id = page.url.split("/")[-1]\n\n    new_issue = api_request_context.get(f"https://github.com/{GITHUB_USER}/{GITHUB_REPO}/issues/{issue_id}")\n    assert new_issue.ok\n    assert new_issue.json()["title"] == "[Bug] report 1"\n    assert new_issue.json()["body"] == "Bug description"\n')),(0,n.kt)("h2",c({},{id:"reuse-authentication-state"}),"Reuse authentication state"),(0,n.kt)("p",null,"Web apps use cookie-based or token-based authentication, where authenticated state is stored as ",(0,n.kt)("a",c({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies"),". Playwright provides ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-apirequestcontext#api-request-context-storage-state"}),"api_request_context.storage_state(**kwargs)")," method that can be used to retrieve storage state from an authenticated context and then create new contexts with that state."),(0,n.kt)("p",null,"Storage state is interchangeable between ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," and ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext"),". You can use it to log in via API calls and then create a new context with cookies already there. The following code snippet retrieves state from an authenticated ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-apirequestcontext",title:"APIRequestContext"}),"APIRequestContext")," and creates a new ",(0,n.kt)("a",c({parentName:"p"},{href:"/python/docs/api/class-browsercontext",title:"BrowserContext"}),"BrowserContext")," with that state."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-py"}),'request_context = playwright.request.new_context(http_credentials={"username": "test", "password": "test"})\nrequest_context.get("https://api.example.com/login")\n# Save storage state into a variable.\nstate = request_context.storage_state()\n\n# Create a new context with the saved storage state.\ncontext = browser.new_context(storage_state=state)\n')))}y.isMDXComponent=!0}}]);