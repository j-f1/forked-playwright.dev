"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[97920],{55670:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(67294),r=a(11368),c=a(53930),l=a(68333),s=a(39130),u=a(76775),o=a(84487);var m=function(){const e=(0,u.k6)(),t=(0,u.TH)(),{siteConfig:{baseUrl:a}}=(0,r.Z)();return{searchValue:o.default.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}},h=a(14127),i=a(22604),p=a(84797),d=a(70077),f=a(944),_=a(72241),g=a(98802);function E(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}var w="searchQueryInput_Ucpr",y="searchResultItem_UXUw",S="searchResultItemPath_wkpC",v="searchResultItemSummary_QpRS";function I({searchResult:{document:e,type:t,page:a,tokens:r,metadata:c}}){const l=0===t,u=2===t,o=(l?e.b:a.b).slice(),m=u?e.s:e.t;return l||o.push(a.t),n.createElement("article",{className:y},n.createElement("h2",null,n.createElement(s.Z,{to:e.u+(e.h||""),dangerouslySetInnerHTML:{__html:u?(0,p.C)(m,r):(0,d.o)(m,(0,f.m)(c,"t"),r,100)}})),o.length>0&&n.createElement("p",{className:S},o.join(" \u203a ")),u&&n.createElement("p",{className:v,dangerouslySetInnerHTML:{__html:(0,d.o)(e.t,(0,f.m)(c,"t"),r,100)}}))}var k=function(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{searchValue:t,updateSearchPath:a}=m(),[s,u]=(0,n.useState)(t),[o,p]=(0,n.useState)(),[d,f]=(0,n.useState)(),y=(0,n.useMemo)((()=>s?E(g.Iz.search_results_for,{keyword:s}):g.Iz.search_the_documentation),[s]);(0,n.useEffect)((()=>{a(s),o&&(s?o(s,(e=>{f(e)})):f(void 0))}),[s,o]);const S=(0,n.useCallback)((e=>{u(e.target.value)}),[]);return(0,n.useEffect)((()=>{t&&t!==s&&u(t)}),[t]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,h.w)(e);p((()=>(0,i.v)(t,a,100)))}()}),[e]),n.createElement(c.Z,{title:y},n.createElement(l.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"})),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,y),n.createElement("input",{type:"search",name:"q",className:w,"aria-label":"Search",onChange:S,value:s,autoComplete:"off",autoFocus:!0}),!o&&s&&n.createElement("div",null,n.createElement(_.Z,null)),d&&(d.length>0?n.createElement("p",null,E(1===d.length?g.Iz.count_documents_found:g.Iz.count_documents_found_plural,{count:d.length})):n.createElement("p",null,g.Iz.no_documents_were_found)),n.createElement("section",null,d&&d.map((e=>n.createElement(I,{key:e.document.i,searchResult:e}))))))}}}]);