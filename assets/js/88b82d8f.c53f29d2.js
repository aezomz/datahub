(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4392],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1614:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={title:"Ingestion Quickstart",hide_title:!0,slug:"/docker/ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/ingestion/README.md"},c={unversionedId:"docker/ingestion/README",id:"docker/ingestion/README",isDocsHomePage:!1,title:"DataHub Ingestion Quickstart",description:"Ingests some sample data into GMA using the Python ingestion framework. Recommended for use with quickstart to quickly get a DataHub instance up and running with some fake data.",source:"@site/genDocs/docker/ingestion/README.md",sourceDirName:"docker/ingestion",slug:"/docker/ingestion",permalink:"/docs/docker/ingestion",editUrl:"https://github.com/linkedin/datahub/blob/master/docker/ingestion/README.md",version:"current",frontMatter:{title:"Ingestion Quickstart",hide_title:!0,slug:"/docker/ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/ingestion/README.md"}},s=[],u={toc:s};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ingests some ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/mce_files/bootstrap_mce.json"},"sample data")," into ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/gma"},"GMA")," using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion"},"Python ingestion framework"),". Recommended for use with ",(0,i.kt)("a",{parentName:"p",href:"/docs/quickstart"},"quickstart")," to quickly get a DataHub instance up and running with some fake data."))}l.isMDXComponent=!0}}]);