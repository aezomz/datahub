(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5729],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||s[h]||r;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4264:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),a={title:"OIDC Authentication in React",hide_title:!0,slug:"/how/configure-oidc-react",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/configure-oidc-react.md"},l={unversionedId:"docs/how/configure-oidc-react",id:"docs/how/configure-oidc-react",isDocsHomePage:!1,title:"OIDC Authentication in React",description:"The DataHub React application supports OIDC authentication built on top of the Pac4j Play library.",source:"@site/genDocs/docs/how/configure-oidc-react.md",sourceDirName:"docs/how",slug:"/how/configure-oidc-react",permalink:"/docs/how/configure-oidc-react",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/configure-oidc-react.md",version:"current",frontMatter:{title:"OIDC Authentication in React",hide_title:!0,slug:"/how/configure-oidc-react",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/configure-oidc-react.md"},sidebar:"overviewSidebar",previous:{title:"Onboarding to GMA Search - searching over a new field",permalink:"/docs/how/search-over-new-field"},next:{title:"Configuring Google Authentication for React App (OIDC)",permalink:"/docs/how/sso/configure-oidc-react-google"}},c=[{value:"Provider-Specific Guides",id:"provider-specific-guides",children:[]},{value:"Configuring OIDC in React",id:"configuring-oidc-in-react",children:[{value:"1. Register an app with your Identity Provider",id:"1-register-an-app-with-your-identity-provider",children:[]},{value:"2. Configure DataHub Frontend Server",id:"2-configure-datahub-frontend-server",children:[]},{value:"Summary",id:"summary",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The DataHub React application supports OIDC authentication built on top of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pac4j/play-pac4j"},"Pac4j Play")," library.\nThis enables operators of DataHub to integrate with 3rd party identity providers like Okta, Google, Keycloak, & more to authenticate their users."),(0,r.kt)("p",null,"When configured, OIDC auth will be enabled between clients of the DataHub UI & ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend"),' server. Beyond this point is considered\nto be a secure environment and as such authentication is validated & enforced only at the "front door" inside datahub-frontend.'),(0,r.kt)("h2",{id:"provider-specific-guides"},"Provider-Specific Guides"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/how/sso/configure-oidc-react-google"},"Configuring OIDC using Google")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/how/sso/configure-oidc-react-okta"},"Configuring OIDC using Okta"))),(0,r.kt)("h2",{id:"configuring-oidc-in-react"},"Configuring OIDC in React"),(0,r.kt)("h3",{id:"1-register-an-app-with-your-identity-provider"},"1. Register an app with your Identity Provider"),(0,r.kt)("p",null,"To configure OIDC in React, you will most often need to register yourself as a client with your identity provider (Google, Okta, etc). Each provider may\nhave their own instructions. Provided below are links to examples for Okta, Google, Azure AD, & Keycloak."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.okta.com/docs/guides/add-an-external-idp/apple/register-app-in-okta/"},"Registering an App in Okta")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/identity/protocols/oauth2/openid-connect"},"OpenID Connect in Google Identity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/auth-oidc"},"OpenID Connect authentication with Azure Active Directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.keycloak.org/docs/latest/securing_apps/"},"Keycloak - Securing Applications and Services Guide"))),(0,r.kt)("p",null,"During the registration process, you'll need to provide a login redirect URI to the identity provider. This tells the identity provider\nwhere to redirect to once they've authenticated the end user. "),(0,r.kt)("p",null,"By default, the URL will be constructed as follows: "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"',(0,r.kt)("a",{parentName:"p",href:"http://your-datahub-domain.com/callback/oidc%22"},'http://your-datahub-domain.com/callback/oidc"'))),(0,r.kt)("p",null,"For example, if you're hosted DataHub at ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub.myorg.com"),", this\nvalue would be ",(0,r.kt)("inlineCode",{parentName:"p"},"http://datahub.myorg.com/callback/oidc"),". For testing purposes you can also specify localhost as the domain name\ndirectly: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9002/callback/oidc")),(0,r.kt)("p",null,"The goal of this step should be to obtain the following values, which will need to be configured before deploying DataHub:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Client ID")," - A unique identifier for your application with the identity provider"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Client Secret")," - A shared secret to use for exchange between you and your identity provider "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Discovery URL")," - A URL where the OIDC API of your identity provider can be discovered. This should suffixed by\n",(0,r.kt)("inlineCode",{parentName:"li"},".well-known/openid-configuration"),". Sometimes, identity providers will not explicitly include this URL in their setup guides, though\nthis endpoint ",(0,r.kt)("em",{parentName:"li"},"will")," exist as per the OIDC specification. For more info see ",(0,r.kt)("a",{parentName:"li",href:"http://openid.net/specs/openid-connect-discovery-1_0.html"},"http://openid.net/specs/openid-connect-discovery-1_0.html"),".\n")),(0,r.kt)("h3",{id:"2-configure-datahub-frontend-server"},"2. Configure DataHub Frontend Server"),(0,r.kt)("p",null,"The second step to enabling OIDC involves configuring ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," to enable OIDC authentication with your Identity Provider."),(0,r.kt)("p",null,"To do so, you must update the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-frontend/env/docker.env"},"docker.env")," file with the\nvalues received from your identity provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Required Configuration Values:\nAUTH_OIDC_ENABLED=true\nAUTH_OIDC_CLIENT_ID=your-client-id\nAUTH_OIDC_CLIENT_SECRET=your-client-secret\nAUTH_OIDC_DISCOVERY_URI=your-provider-discovery-url\nAUTH_OIDC_BASE_URL=your-datahub-url\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_ENABLED"),": Enable delegating authentication to OIDC identity provider"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_CLIENT_ID"),": Unique client id received from identity provider"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_CLIENT_SECRET"),": Unique client secret received from identity provider"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_DISCOVERY_URI"),": Location of the identity provider OIDC discovery API. Suffixed with ",(0,r.kt)("inlineCode",{parentName:"li"},".well-known/openid-configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_BASE_URL"),": The base URL of your DataHub deployment, e.g. ",(0,r.kt)("a",{parentName:"li",href:"https://yourorgdatahub.com"},"https://yourorgdatahub.com")," (prod) or http://localhost:9002 (testing)")),(0,r.kt)("p",null,'Providing these configs will cause DataHub to delegate authentication to your identity\nprovider, requesting the "oidc email profile" scopes and parsing the "preferred_username" claim from\nthe authenticated profile as the DataHub CorpUser identity.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By default, the login callback endpoint exposed by DataHub will be located at ",(0,r.kt)("inlineCode",{parentName:"p"},"${AUTH_OIDC_BASE_URL}/callback/oidc"),". This must ",(0,r.kt)("strong",{parentName:"p"},"exactly")," match the login redirect URL you've registered with your identity provider in step 1.")),(0,r.kt)("h4",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,"You can optionally customize the flow further using advanced configurations. These allow\nyou to specify the OIDC scopes requested & how the DataHub username is parsed from the claims returned by the identity provider. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Optional Configuration Values:\nAUTH_OIDC_USER_NAME_CLAIM=your-custom-claim\nAUTH_OIDC_USER_NAME_CLAIM_REGEX=your-custom-regex\nAUTH_OIDC_SCOPE=your-custom-scope\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_USER_NAME_CLAIM"),': The attribute that will contain the username used on the DataHub platform. By default, this is "preferred_username" provided\nas part of the standard ',(0,r.kt)("inlineCode",{parentName:"li"},"profile")," scope."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_USER_NAME_CLAIM_REGEX"),": A regex string used for extracting the username from the userNameClaim attribute. For example, if\nthe userNameClaim field will contain an email address, and we want to omit the domain name suffix of the email, we can specify a custom\nregex to do so. (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"([^@]+)"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AUTH_OIDC_SCOPE"),": a string representing the scopes to be requested from the identity provider, granted by the end user. For more info,\nsee ",(0,r.kt)("a",{parentName:"li",href:"https://auth0.com/docs/scopes/openid-connect-scopes"},"OpenID Connect Scopes"),".")),(0,r.kt)("p",null,"Once configuration has been updated, ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," will need to be restarted to pick up the new environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker-compose -p datahub -f docker-compose.yml -f docker-compose.override.yml -f docker-compose.react.yml restart datahub-frontend-react\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that by default, enabling OIDC will ",(0,r.kt)("em",{parentName:"p"},"not")," disable the dummy JAAS authentication path, which can be reached at the ",(0,r.kt)("inlineCode",{parentName:"p"},"/login"),"\nroute of the React app. To disable this authentication path, additionally specify the following config:\n",(0,r.kt)("inlineCode",{parentName:"p"},"AUTH_JAAS_ENABLED=false"))),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Once configured, deploying the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container will enable an indirect authentication flow in which DataHub delegates\nauthentication to the specified identity provider."),(0,r.kt)("p",null,"Once a user is authenticated by the identity provider, DataHub will extract a username from the provided claims\nand grant DataHub access to the user by setting a pair of session cookies."),(0,r.kt)("p",null,"A brief summary of the steps that occur when the user navigates to the React app are as follows: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," to the ",(0,r.kt)("inlineCode",{parentName:"li"},"/authenticate")," endpoint in ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub-frontend")," server is initiated"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"/authenticate")," attempts to authenticate the request via session cookies"),(0,r.kt)("li",{parentName:"ol"},"If auth fails, the server issues a redirect to the Identity Provider's login experience"),(0,r.kt)("li",{parentName:"ol"},"The user logs in with the Identity Provider"),(0,r.kt)("li",{parentName:"ol"},"The Identity Provider authenticates the user and redirects back to DataHub's registered login redirect URL, providing an authorization code which\ncan be used to retrieve information on behalf of the authenticated user"),(0,r.kt)("li",{parentName:"ol"},"DataHub fetches the authenticated user's profile and extracts a username to identify the user on DataHub (eg. urn:li:corpuser:username)"),(0,r.kt)("li",{parentName:"ol"},"DataHub sets session cookies for the newly authenticated user "),(0,r.kt)("li",{parentName:"ol"},'DataHub redirects the user to the homepage ("/")')))}u.isMDXComponent=!0}}]);