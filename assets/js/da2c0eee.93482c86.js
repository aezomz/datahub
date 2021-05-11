(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9503],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7129:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i={title:"Features",hide_title:!0,slug:"/features",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/features.md"},s={unversionedId:"docs/features",id:"docs/features",isDocsHomePage:!1,title:"DataHub Features",description:"DataHub is made up of a generic backend and a React-based UI.",source:"@site/genDocs/docs/features.md",sourceDirName:"docs",slug:"/features",permalink:"/docs/features",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/features.md",version:"current",frontMatter:{title:"Features",hide_title:!0,slug:"/features",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/features.md"},sidebar:"overviewSidebar",previous:{title:"DataHub FAQs",permalink:"/docs/faq"},next:{title:"DataHub Roadmap",permalink:"/docs/roadmap"}},l=[{value:"Data Constructs (Entities)",id:"data-constructs-entities",children:[{value:"Datasets",id:"datasets",children:[]},{value:"Tags",id:"tags",children:[]},{value:"Users",id:"users",children:[]},{value:"Dashboards",id:"dashboards",children:[]},{value:"Schemas coming soon",id:"schemas-coming-soon",children:[]},{value:"Jos/flows coming soon",id:"josflows-coming-soon",children:[]},{value:"Metrics coming soon",id:"metrics-coming-soon",children:[]}]},{value:"Metadata Sources",id:"metadata-sources",children:[]}],u={toc:l};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DataHub is made up of a ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/gma"},"generic backend")," and a ",(0,o.kt)("a",{parentName:"p",href:"/docs/datahub-web-react"},"React-based UI"),".\nOriginal DataHub ",(0,o.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2019/data-hub"},"blog post")," talks about the design extensively and mentions some of the features of DataHub.\nOur open sourcing ",(0,o.kt)("a",{parentName:"p",href:"https://engineering.linkedin.com/blog/2020/open-sourcing-datahub--linkedins-metadata-search-and-discovery-p"},"blog post")," also provides a comparison of some features between LinkedIn production DataHub vs open source DataHub. Below is a list of the latest features that are available in DataHub, as well as ones that will soon become available."),(0,o.kt)("h2",{id:"data-constructs-entities"},"Data Constructs (Entities)"),(0,o.kt)("h3",{id:"datasets"},"Datasets"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Browse"),": browsing through a configurable hierarchy"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Schema"),": table & document schema in tabular and JSON format"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Coarse grain lineage"),": support for lineage at the dataset level, tabular & graphical visualization of downstreams/upstreams"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ownership"),": surfacing owners of a dataset, viewing datasets you own"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dataset life-cycle management"),': deprecate/undeprecate, surface removed datasets and tag it with "removed"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Institutional knowledge"),": support for adding free form doc to any dataset"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fine grain lineage"),": support for lineage at the field level ","[",(0,o.kt)("em",{parentName:"li"},"coming soon"),"]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Social actions"),": likes, follows, bookmarks ","[",(0,o.kt)("em",{parentName:"li"},"coming soon"),"]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compliance management"),": field level tag based compliance editing ","[",(0,o.kt)("em",{parentName:"li"},"coming soon"),"]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Top users"),": frequent users of a dataset ","[",(0,o.kt)("em",{parentName:"li"},"coming soon"),"]")),(0,o.kt)("h3",{id:"tags"},"Tags"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Globally defined"),": Tags provided a standardized set of labels that can be shared across all your entities"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Supports entities and schemas"),": Tags can be applied at the entity level or for datasets, attached to schema fields."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Searchable")," Entities can be searched and filtered by tag")),(0,o.kt)("h3",{id:"users"},"Users"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Browse"),": browsing through a configurable hierarchy ","[",(0,o.kt)("em",{parentName:"li"},"coming soon"),"]"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Profile editing"),": LinkedIn style professional profile editing such as summary, skills")),(0,o.kt)("h3",{id:"dashboards"},"Dashboards"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Basic information"),": ownership, location. Link to external service for viewing the dashboard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Institutional knowledge"),": support for adding free form doc to any dashboards ","[",(0,o.kt)("em",{parentName:"li"},"coming soon"),"]")),(0,o.kt)("h3",{id:"schemas-coming-soon"},"Schemas ","[",(0,o.kt)("em",{parentName:"h3"},"coming soon"),"]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Browse"),": browsing through a configurable hierarchy"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Schema history"),": view and diff historic versions of schemas"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"GraphQL"),": visualization of GraphQL schemas")),(0,o.kt)("h3",{id:"josflows-coming-soon"},"Jos/flows ","[",(0,o.kt)("em",{parentName:"h3"},"coming soon"),"]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Browse"),": browsing through a configurable hierarchy"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Basic information"),": "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Execution history"),": Executions and their status. Link to external service for viewing full info.")),(0,o.kt)("h3",{id:"metrics-coming-soon"},"Metrics ","[",(0,o.kt)("em",{parentName:"h3"},"coming soon"),"]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Search"),": full-text & advanced search, search ranking"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Browse"),": browsing through a configurable hierarchy"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Basic information"),": ownershp, dimensions, formula, input & output datasets, dashboards"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Institutional knowledge"),": support for adding free form doc to any metric")),(0,o.kt)("h2",{id:"metadata-sources"},"Metadata Sources"),(0,o.kt)("p",null,"There's a basic, Java-oriented overview of ",(0,o.kt)("a",{parentName:"p",href:"/docs/architecture/metadata-ingestion"},"metadata ingestion"),"."),(0,o.kt)("p",null,"We also have a ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"Python-based ingestion framework")," which supports the following sources:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hive"),(0,o.kt)("li",{parentName:"ul"},"Kafka"),(0,o.kt)("li",{parentName:"ul"},"RDBMS (MySQL, Oracle, Postgres, MS SQL, etc)"),(0,o.kt)("li",{parentName:"ul"},"Data warehouse (Snowflake, BigQuery, etc)"),(0,o.kt)("li",{parentName:"ul"},"LDAP")),(0,o.kt)("p",null,"That ingestion framework is extensible, so you can easily create new sources of metadata. You just need to transform the metadata into our standard ",(0,o.kt)("a",{parentName:"p",href:"/docs/what/mxe"},"MCE")," format, and the framework will help ingest metadata to DataHub."))}c.isMDXComponent=!0}}]);