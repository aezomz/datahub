(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[921],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||h[d]||s;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<s;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6242:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return o},default:function(){return u}});var r=a(2122),n=a(9756),s=(a(7294),a(3905)),i={title:"How to customize the search experience of an entity?",hide_title:!0,slug:"/how/customize-elasticsearch-query-template",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/customize-elasticsearch-query-template.md"},c={unversionedId:"docs/how/customize-elasticsearch-query-template",id:"docs/how/customize-elasticsearch-query-template",isDocsHomePage:!1,title:"How to customize the search experience of an entity?",description:"Assume you have all the fields needed for your query, otherwise, refer to this doc if you're only interested in indexing a new field of an existing entity",source:"@site/genDocs/docs/how/customize-elasticsearch-query-template.md",sourceDirName:"docs/how",slug:"/how/customize-elasticsearch-query-template",permalink:"/docs/how/customize-elasticsearch-query-template",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/customize-elasticsearch-query-template.md",version:"current",frontMatter:{title:"How to customize the search experience of an entity?",hide_title:!0,slug:"/how/customize-elasticsearch-query-template",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/customize-elasticsearch-query-template.md"},sidebar:"overviewSidebar",previous:{title:"Metadata Service Developer Guide",permalink:"/docs/how/build-metadata-service"},next:{title:"How to onboard an entity?",permalink:"/docs/how/entity-onboarding"}},o=[{value:"1. Default query template for each type of search document",id:"1-default-query-template-for-each-type-of-search-document",children:[]},{value:"2. Elasticsearch full text queries",id:"2-elasticsearch-full-text-queries",children:[]},{value:"3. Analyzers",id:"3-analyzers",children:[]},{value:"4. Language support",id:"4-language-support",children:[]},{value:"5. Test raw queries against Elasticsearch",id:"5-test-raw-queries-against-elasticsearch",children:[]},{value:"6. Test search rest API",id:"6-test-search-rest-api",children:[]},{value:"7. Test end to end",id:"7-test-end-to-end",children:[]}],l={toc:o};function u(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Assume you have all the fields needed for your query, otherwise, refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/how/search-over-new-field"},"this doc")," if you're only interested in indexing a new field of an existing entity ")),(0,s.kt)("h2",{id:"1-default-query-template-for-each-type-of-search-document"},"1. Default query template for each type of search document"),(0,s.kt)("p",null,"The search query is constructed and executed through ",(0,s.kt)("a",{parentName:"p",href:"/docs/architecture/metadata-serving#search-dao"},"Search DAO"),". Each search document is associated with a customizable query template, which can found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/tree/master/gms/impl/src/main/resources"},"here"),".\nTake ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/impl/src/main/resources/datasetESSearchQueryTemplate.json"},"dataset search query template")," for example, it supports a few features:"),(0,s.kt)("p",null,"The general search accepts a query and at run time, ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao-impl/elasticsearch-dao/src/main/java/com/linkedin/metadata/dao/search/ESSearchDAO.java"},"ES Search DAO"),' will replace $INPUT in the query template and generate the query for Elasticsearch.\nFor example, in search bar, user can type in "test" to find all the related datasets with its name matching the rules defined in query template.'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  {\n    "query_string": {\n      "query": "$INPUT",\n      "analyzer": "whitespace_lowercase",\n      "boost": 0.125,\n      "default_field": "name.ngram",\n      "default_operator": "AND"\n    }\n  }...\n')),(0,s.kt)("p",null,"The advanced search for dataset in DataHub is implemented by ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/query-dsl-query-string-query.html"},"query string query"),".\nThis query uses a ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/query-dsl-query-string-query.html#query-string-syntax"},"syntax"),' to parse and split the provided query string based on operators, such as AND or NOT. The query then analyzes each split text independently before returning matching documents.\nYou can use the query_string query to create a complex search that includes wildcard characters, searches across multiple fields, and more. While versatile, the query is strict and returns an error if the query string includes any invalid syntax.\nFor example, in search bar, user can type in "platform:kafka" to get all kafka datasets or "owners:foo AND platform:hdfs" to get all the hdfs datasets owned by foo.'),(0,s.kt)("p",null,"Relevance is achieved with ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/query-dsl-function-score-query.html"},"function score query")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/mapping-boost.html"},"boost"),".\nFor example, the template sets high scores for those that have owners, and set lower scores for those that are deprecated.  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},' "functions": [\n     {\n       "filter": {\n         "term": {\n           "hasOwners": true\n         }\n       },\n       "weight": 2\n     },\n     {\n       "filter": {\n         "term": {\n           "deprecated": true\n         }\n       },\n       "weight": 0.5\n     }, ...\n')),(0,s.kt)("h2",{id:"2-elasticsearch-full-text-queries"},"2. Elasticsearch full text queries"),(0,s.kt)("p",null,"Elasticsearch provides a full Query DSL (Domain Specific Language) based on JSON to define queries. If the default query template does not suit your business need, you may want to explore more about ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/full-text-queries.html"},"Elasticsearch full text queries"),"\nHere are several popular ones:\n",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/query-dsl-match-query.html"},"match query")," accepts text/numerics/dates, analyzes them, and constructs a query.\n",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/query-dsl-multi-match-query.html"},"multi_match query")," builds on the match query to allow multi-field queries\n",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/query-dsl-query-string-query.html"},"query_string_query")," is a query that uses a query parser in order to parse its content."),(0,s.kt)("h2",{id:"3-analyzers"},"3. Analyzers"),(0,s.kt)("p",null,"Text analysis enables Elasticsearch to perform full-text search, where the search returns all relevant results rather than just exact matches.\nText analysis is performed by an ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/analyzer.html"},"analyzer"),", a set of rules that govern the entire process. Elasticsearch includes a default analyzer, called the ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/analysis-standard-analyzer.html"},"standard analyzer"),", which works well for most use cases right out of the box.\nIf you want to tailor your search experience, you can choose a different built-in analyzer or even configure a custom one. A custom analyzer gives you control over each step of the analysis process.  "),(0,s.kt)("p",null,"You can check a list of custom analyzers in settings in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/elasticsearch-setup/dataset-index-config.json"},"dataset index config"),"\nAnalyzers can be specified per-query, per-field or per-index. Read more about analyzer ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/analyzer.html"},"here"),"."),(0,s.kt)("h2",{id:"4-language-support"},"4. Language support"),(0,s.kt)("p",null,"You can apply one of the ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/5.6/analysis-lang-analyzer.html"},"language analyzers")," supported by Elasticsearch.\nFor languages such as Chinese and Japanese, you would need to install ",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/plugins/5.6/analysis-smartcn.html"},"Smart Chinese Analysis plugin")," or\n",(0,s.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/plugins/5.6/analysis-kuromoji.html"},"Japanese Analysis plugin")," first. "),(0,s.kt)("h2",{id:"5-test-raw-queries-against-elasticsearch"},"5. Test raw queries against Elasticsearch"),(0,s.kt)("p",null,"You can first run the raw query to check if the results are expected. Below are some sample queries:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'curl http://localhost:9200/datasetdocument/_search? -d \'{"query": {"match": {"name": "test_datasetname"}}}\'\ncurl http://localhost:9200/datasetdocument/_search? -d \'{"query":{"query_string":{"query":"name:test_datasetname"}}}\'\n')),(0,s.kt)("p",null,"If the results look good, you can move on to the next step:"),(0,s.kt)("h2",{id:"6-test-search-rest-api"},"6. Test search rest API"),(0,s.kt)("p",null,"Example query: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"curl 'http://localhost:8080/datasets?q=search&input=test_datasetname' \n")),(0,s.kt)("p",null,"If the results look good, you can move on to the next step if needed. "),(0,s.kt)("h2",{id:"7-test-end-to-end"},"7. Test end to end"),(0,s.kt)("p",null,"Search via data hub UI. Debugging into mid-tier or UI if the results look different. "))}u.isMDXComponent=!0}}]);