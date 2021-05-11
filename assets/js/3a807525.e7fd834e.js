(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7260],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8577:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={title:"What is a search document?",hide_title:!0,slug:"/what/search-document",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/search-document.md"},s={unversionedId:"docs/what/search-document",id:"docs/what/search-document",isDocsHomePage:!1,title:"What is a search document?",description:"Search documents are also modeled using PDL explicitly.",source:"@site/genDocs/docs/what/search-document.md",sourceDirName:"docs/what",slug:"/what/search-document",permalink:"/docs/what/search-document",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/what/search-document.md",version:"current",frontMatter:{title:"What is a search document?",hide_title:!0,slug:"/what/search-document",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/what/search-document.md"},sidebar:"overviewSidebar",previous:{title:"What is a relationship?",permalink:"/docs/what/relationship"},next:{title:"What is a snapshot?",permalink:"/docs/what/snapshot"}},l=[],c={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Search_engine_indexing"},"Search documents")," are also modeled using ",(0,o.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/pdl_schema"},"PDL")," explicitly.\nIn many ways, the model for a Document is very similar to an ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/entity"},"Entity")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/relationship"},"Relationship")," model,\nwhere each attribute/field contains a value that\u2019s derived from various metadata aspects.\nHowever, a search document is also allowed to have array type of attribute that contains only primitives or enum items.\nThis is because most full-text search engines supports membership testing against an array field, e.g. an array field containing all the terms used in a document."),(0,o.kt)("p",null,"One obvious use of the attributes is to perform search filtering, e.g. give me all the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," whose first name or last name is similar to \u201cJoe\u201d and reports up to ",(0,o.kt)("inlineCode",{parentName:"p"},"userFoo"),".\nSince the document is also served as the main interface for the search API, the attributes can also be used to format the search snippet.\nAs a result, one may be tempted to add as many attributes as needed. This is acceptable as the underlying search engine is designed to index a large number of fields."),(0,o.kt)("p",null,"Below shows an example schema for the ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," search document. Note that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Each search document is required to have a type-specific ",(0,o.kt)("inlineCode",{parentName:"li"},"urn")," field, generally maps to an entity in the ",(0,o.kt)("a",{parentName:"li",href:"/docs/what/graph"},"graph"),"."),(0,o.kt)("li",{parentName:"ol"},"Similar to ",(0,o.kt)("inlineCode",{parentName:"li"},"Entity"),", each document has an optional ",(0,o.kt)("inlineCode",{parentName:"li"},"removed"),' field for "soft deletion".\nThis is captured in ',(0,o.kt)("a",{parentName:"li",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/search/BaseDocument.pdl"},"BaseDocument"),", which is expected to be included by all documents."),(0,o.kt)("li",{parentName:"ol"},"Similar to ",(0,o.kt)("inlineCode",{parentName:"li"},"Entity"),", all remaining fields are made ",(0,o.kt)("inlineCode",{parentName:"li"},"optional")," to support partial updates."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"management")," shows an example of a string array field."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ownedDataset")," shows an example on how a field can be derived from metadata ",(0,o.kt)("a",{parentName:"li",href:"/docs/what/aspect"},"aspects")," associated with other types of entity (in this case, ",(0,o.kt)("inlineCode",{parentName:"li"},"Dataset"),").")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.search\n\n/**\n * Common fields that may apply to all documents\n */\nrecord BaseDocument {\n\n  /** Whether the entity has been removed or not */\n  removed: optional boolean = false\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.search\n\nimport com.linkedin.common.CorpuserUrn\nimport com.linkedin.common.DatasetUrn\n\n/**\n * Data model for user entity search\n */\nrecord UserDocument includes BaseDocument {\n\n  /** Urn for the user */\n  urn: CorpuserUrn\n\n  /** First name of the user */\n  firstName: optional string\n\n  /** Last name of the user */\n  lastName: optional string\n\n  /** The chain of management all the way to CEO */\n  management: optional array[CorpuserUrn] = []  \n\n  /** Code for the cost center */\n  costCenter: optional int\n\n  /** The list of dataset the user owns */\n  ownedDatasets: optional array[DatasetUrn] = []  \n}\n")))}m.isMDXComponent=!0}}]);