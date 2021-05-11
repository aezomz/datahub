(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7042],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,m=u["".concat(l,".").concat(c)]||u[c]||h[c]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1825:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return o},toc:function(){return l},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),s={title:"How to onboard to GMA graph?",hide_title:!0,slug:"/how/graph-onboarding",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/graph-onboarding.md"},o={unversionedId:"docs/how/graph-onboarding",id:"docs/how/graph-onboarding",isDocsHomePage:!1,title:"How to onboard to GMA graph?",description:"1. Define relationship models",source:"@site/genDocs/docs/how/graph-onboarding.md",sourceDirName:"docs/how",slug:"/how/graph-onboarding",permalink:"/docs/how/graph-onboarding",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/graph-onboarding.md",version:"current",frontMatter:{title:"How to onboard to GMA graph?",hide_title:!0,slug:"/how/graph-onboarding",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/graph-onboarding.md"},sidebar:"overviewSidebar",previous:{title:"How to onboard an entity?",permalink:"/docs/how/entity-onboarding"},next:{title:"How to model metadata ?",permalink:"/docs/how/metadata-modelling"}},l=[{value:"1. Define relationship models",id:"1-define-relationship-models",children:[]},{value:"2. Define entity models",id:"2-define-entity-models",children:[]},{value:"3. Implement relationship builders",id:"3-implement-relationship-builders",children:[]},{value:"4. Implement graph builders",id:"4-implement-graph-builders",children:[]},{value:"5. Ingestion into graph",id:"5-ingestion-into-graph",children:[]},{value:"6. Graph queries",id:"6-graph-queries",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-define-relationship-models"},"1. Define relationship models"),(0,i.kt)("p",null,"Relationship models are used to build edges in the graph.\nIf you need to define a ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/relationship"},"relationship")," which is not available in the set of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/relationship"},"relationship models")," provided,\nthat relationship model should be implemented as a first step for graph onboarding.\nBelow is an example model for ",(0,i.kt)("inlineCode",{parentName:"p"},"OwnedBy")," relationship:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'namespace com.linkedin.metadata.relationship\n\nimport com.linkedin.common.OwnershipType\n\n/**\n * A generic model for the Owned-By relationship\n */\n@pairings = [ {\n  "destination" : "com.linkedin.common.urn.CorpuserUrn",\n  "source" : "com.linkedin.common.urn.DatasetUrn"\n} ]\nrecord OwnedBy includes BaseRelationship {\n\n  /** The type of the ownership */\n  type: OwnershipType\n}\n')),(0,i.kt)("p",null,"Fields in this model are translated to properties of the graph edge.\nAlso, the FQCN of the relationship model, which is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.linkedin.metadata.relationship.OwnedBy")," in this example, is used as the label for edges."),(0,i.kt)("h2",{id:"2-define-entity-models"},"2. Define entity models"),(0,i.kt)("p",null,"Entity models are used to build nodes in the graph.\nEvery GMA ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entity")," should have its own entity model defined and placed under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-models/src/main/pegasus/com/linkedin/metadata/entity"},"entity models")," directory.\nBelow is an example model for ",(0,i.kt)("inlineCode",{parentName:"p"},"DatasetEntity")," relationship."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"namespace com.linkedin.metadata.entity\n\nimport com.linkedin.common.DataPlatformUrn\nimport com.linkedin.common.DatasetUrn\nimport com.linkedin.common.FabricType\n\n/**\n * Data model for a dataset entity\n */\nrecord DatasetEntity includes BaseEntity {\n\n  /**\n   * Urn for the dataset\n   */\n  urn: DatasetUrn\n\n  /**\n   * Dataset native name e.g. {db}.{table}, /dir/subdir/{name}, or {name}\n   */\n  name: optional string\n\n  /**\n   * Platform urn for the dataset in the form of urn:li:platform:{platform_name}\n   */\n  platform: optional DataPlatformUrn\n\n  /**\n   * Fabric type where dataset belongs to or where it was generated.\n   */\n  origin: optional FabricType\n}\n")),(0,i.kt)("p",null,"Fields in this model are translated to properties of the graph node.\nAlso, the FQCN of the entity model, which is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.linkedin.metadata.entity.DatasetEntity")," in this case, is used as the label for nodes."),(0,i.kt)("h2",{id:"3-implement-relationship-builders"},"3. Implement relationship builders"),(0,i.kt)("p",null,"You need to implement relationship builders for your specific ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/aspect"},"aspect"),"s and ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/relationship"},"relationship"),"s if they are not already defined.\nRelationship builders build list of relationships after processing aspects and any relationship builder should implement ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseRelationshipBuilder")," abstract class.\nRelationship builders are per aspect and per relationship type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class BaseRelationshipBuilder<ASPECT extends RecordTemplate> {\n\n  private Class<ASPECT> _aspectClass;\n\n  public BaseRelationshipBuilder(Class<ASPECT> aspectClass) {\n    _aspectClass = aspectClass;\n  }\n\n  /**\n   * Returns the aspect class this {@link BaseRelationshipBuilder} supports\n   */\n  public Class<ASPECT> supportedAspectClass() {\n    return _aspectClass;\n  }\n\n  /**\n   * Returns a list of corresponding relationship updates for the given metadata aspect\n   */\n  public abstract <URN extends Urn> List<GraphBuilder.RelationshipUpdates> buildRelationships(URN urn, ASPECT aspect);\n}\n")),(0,i.kt)("h2",{id:"4-implement-graph-builders"},"4. Implement graph builders"),(0,i.kt)("p",null,"Graph builders build graph updates by processing ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/snapshot"},"snapshot"),"s.\nThey internally use relationship builders to generate edges and nodes of the graph.\nAll relationship builders for an ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entity")," should be registered through graph builder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public abstract class BaseGraphBuilder<SNAPSHOT extends RecordTemplate> implements GraphBuilder<SNAPSHOT> {\n\n  private final Class<SNAPSHOT> _snapshotClass;\n  private final Map<Class<? extends RecordTemplate>, BaseRelationshipBuilder> _relationshipBuildersMap;\n\n  public BaseGraphBuilder(@Nonnull Class<SNAPSHOT> snapshotClass,\n      @Nonnull Collection<BaseRelationshipBuilder> relationshipBuilders) {\n    _snapshotClass = snapshotClass;\n    _relationshipBuildersMap = relationshipBuilders.stream()\n        .collect(Collectors.toMap(builder -> builder.supportedAspectClass(), Function.identity()));\n  }\n\n  @Nonnull\n  Class<SNAPSHOT> supportedSnapshotClass() {\n    return _snapshotClass;\n  }\n\n  @Nonnull\n  @Override\n  public GraphUpdates build(@Nonnull SNAPSHOT snapshot) {\n    final Urn urn = RecordUtils.getRecordTemplateField(snapshot, "urn", Urn.class);\n\n    final List<? extends RecordTemplate> entities = buildEntities(snapshot);\n\n    final List<RelationshipUpdates> relationshipUpdates = new ArrayList<>();\n\n    final List<RecordTemplate> aspects = ModelUtils.getAspectsFromSnapshot(snapshot);\n    for (RecordTemplate aspect : aspects) {\n      BaseRelationshipBuilder relationshipBuilder = _relationshipBuildersMap.get(aspect.getClass());\n      if (relationshipBuilder != null) {\n        relationshipUpdates.addAll(relationshipBuilder.buildRelationships(urn, aspect));\n      }\n    }\n\n    return new GraphUpdates(Collections.unmodifiableList(entities), Collections.unmodifiableList(relationshipUpdates));\n  }\n\n  @Nonnull\n  protected abstract List<? extends RecordTemplate> buildEntities(@Nonnull SNAPSHOT snapshot);\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class DatasetGraphBuilder extends BaseGraphBuilder<DatasetSnapshot> {\n  private static final Set<BaseRelationshipBuilder> RELATIONSHIP_BUILDERS =\n      Collections.unmodifiableSet(new HashSet<BaseRelationshipBuilder>() {\n        {\n          add(new DownstreamOfBuilderFromUpstreamLineage());\n          add(new OwnedByBuilderFromOwnership());\n        }\n      });\n\n  public DatasetGraphBuilder() {\n    super(DatasetSnapshot.class, RELATIONSHIP_BUILDERS);\n  }\n\n  @Nonnull\n  @Override\n  protected List<? extends RecordTemplate> buildEntities(@Nonnull DatasetSnapshot snapshot) {\n    final DatasetUrn urn = snapshot.getUrn();\n    final DatasetEntity entity = new DatasetEntity().setUrn(urn)\n        .setName(urn.getDatasetNameEntity())\n        .setPlatform(urn.getPlatformEntity())\n        .setOrigin(urn.getOriginEntity());\n\n    setRemovedProperty(snapshot, entity);\n\n    return Collections.singletonList(entity);\n  }\n}\n")),(0,i.kt)("h2",{id:"5-ingestion-into-graph"},"5. Ingestion into graph"),(0,i.kt)("p",null,"The ingestion process for each ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/entity"},"entity")," is done by graph builders.\nThe builders will be invoked whenever an ",(0,i.kt)("a",{parentName:"p",href:"/docs/what/mxe#metadata-audit-event-mae"},"MAE")," is received by ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/metadata-ingestion#mae-consumer-job"},"MAE Consumer Job"),".\nGraph builders should be extended from BaseGraphBuilder. Check DatasetGraphBuilder as an example above.\nFor the consumer job to consume those MAEs, you should add your graph builder to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-builders/src/main/java/com/linkedin/metadata/builders/graph/RegisteredGraphBuilders.java"},"graph builder registry"),"."),(0,i.kt)("h2",{id:"6-graph-queries"},"6. Graph queries"),(0,i.kt)("p",null,"You can onboard the graph queries which fit to your specific use cases using ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/metadata-serving#query-dao"},"Query DAO"),".\nYou also need to create ",(0,i.kt)("a",{parentName:"p",href:"https://rest.li"},"rest.li")," APIs to serve your graph queries.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-dao/src/main/java/com/linkedin/metadata/dao/BaseQueryDAO.java"},"BaseQueryDAO")," provides an abstract implementation of several graph query APIs.\nRefer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/gms/impl/src/main/java/com/linkedin/metadata/resources/dataset/DownstreamLineageResource.java"},"DownstreamLineageResource")," rest.li resource implementation to see a use case of graph queries."))}d.isMDXComponent=!0}}]);