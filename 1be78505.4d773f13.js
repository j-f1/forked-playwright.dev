(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{881:function(e,t,n){"use strict";var a=n(877),r=n(10),c=n(22);t.a=function(){var e=Object(a.useHistory)(),t=Object(a.useLocation)(),n=Object(c.default)().siteConfig,o=(n=void 0===n?{}:n).baseUrl;return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return o+"search?q="+encodeURIComponent(e)}}}},885:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),c=n(23);function o(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.a.createElement(c.a,null,o&&r.a.createElement("meta",{name:"docsearch:language",content:o}),n&&r.a.createElement("meta",{name:"docsearch:version",content:n}),a&&r.a.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}},886:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),u=n(24),l=n(22),s=n(877),i=n(880),h=n(876),m=n(23),f=n(881),b=n(953),d=n(956),O=n(884);var g=null;function j(e){var t=e.hit,n=e.children;return o.a.createElement(h.a,{to:t.url},n)}function p(e){var t=e.state,n=e.onClose,a=Object(f.a)().generateSearchPageLink;return o.a.createElement(h.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function v(e){var t,h,f,v=e.contextualSearch,C=Object(r.a)(e,["contextualSearch"]),S=Object(l.default)().siteMetadata,E=["language:"+(f=Object(O.a)()).locale,f.tags.map((function(e){return"docusaurus_tag:"+e}))],k=null!==(t=null===(h=C.searchParameters)||void 0===h?void 0:h.facetFilters)&&void 0!==t?t:[],w=v?[].concat(E,k):k,P=Object.assign({},C.searchParameters,{facetFilters:w}),y=Object(i.b)().withBaseUrl,R=Object(s.useHistory)(),U=Object(c.useRef)(null),q=Object(c.useState)(!1),F=q[0],L=q[1],M=Object(c.useState)(null),x=M[0],I=M[1],H=Object(c.useCallback)((function(){return g?Promise.resolve():Promise.all([n.e(808).then(n.bind(null,955)),Promise.all([n.e(0),n.e(809)]).then(n.bind(null,954)),n.e(0).then(n.t.bind(null,874,7))]).then((function(e){var t=e[0].DocSearchModal;g=t}))}),[]),V=Object(c.useCallback)((function(){H().then((function(){L(!0)}))}),[H,L]),A=Object(c.useCallback)((function(){L(!1)}),[L]),B=Object(c.useCallback)((function(e){H().then((function(){L(!0),I(e.key)}))}),[H,L,I]),D=Object(c.useRef)({navigate:function(e){var t=e.itemUrl;R.push(t)}}).current,J=Object(c.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");t.href=e.url;var n=t.pathname.startsWith("/playwright")?t.pathname.replace("/playwright",""):t.pathname;return n=n.replace("/next",""),Object.assign({},e,{url:y(""+n+t.hash)})}))})).current,Y=Object(c.useMemo)((function(){return function(e){return o.a.createElement(p,Object(a.a)({},e,{onClose:A}))}}),[A]),_=Object(c.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",S.docusaurusVersion),e}),[S.docusaurusVersion]);return Object(b.a)({isOpen:F,onOpen:V,onClose:A,onInput:B,searchButtonRef:U}),o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null,o.a.createElement("link",{rel:"preconnect",href:"https://"+C.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.a.createElement(d.a,{onTouchStart:H,onFocus:H,onMouseOver:H,onClick:V,ref:U}),F&&Object(u.createPortal)(o.a.createElement(g,Object(a.a)({onClose:A,initialScrollY:window.scrollY,initialQuery:x,navigator:D,transformItems:J,hitComponent:j,resultsFooterComponent:Y,transformSearchClient:_},C,{searchParameters:P})),document.body))}t.a=function(){var e=Object(l.default)().siteConfig;return o.a.createElement(v,e.themeConfig.algolia)}}}]);