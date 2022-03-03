"use strict";(self.webpackChunksubspace_docs=self.webpackChunksubspace_docs||[]).push([[894],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1225:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={sidebar_position:2},s="Getting Started Developing",l={unversionedId:"Getting Started/developing",id:"Getting Started/developing",title:"Getting Started Developing",description:"This JavaScript library provides a simple API to submit and retrieve user data to the Subspace network. The project is in active development with a live test network designed to provide scalable and distributed archival storage.",source:"@site/docs/Getting Started/developing.md",sourceDirName:"Getting Started",slug:"/Getting Started/developing",permalink:"/subspace-docs/docs/Getting Started/developing",editUrl:"https://github.com/subspace/subspace-docs/docs/Getting Started/developing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Farm with the Terminal",permalink:"/subspace-docs/docs/Getting Started/farming-terminal"},next:{title:"Official Resources",permalink:"/subspace-docs/docs/official"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Run the examples.",id:"run-the-examples",children:[],level:2},{value:"Running a local network",id:"running-a-local-network",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-developing"},"Getting Started Developing"),(0,i.kt)("h1",{id:"subspacesubspace"},(0,i.kt)("a",{parentName:"h1",href:"https://github.com/subspace/subspace.js"},"@subspace/subspace")),(0,i.kt)("p",null,"This JavaScript library provides a simple API to submit and retrieve user data to the ",(0,i.kt)("a",{parentName:"p",href:"https://subspace.network/"},"Subspace network"),". The project is in active development with a ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftest-rpc.subspace.network#/explorer"},"live test network")," designed to provide scalable and distributed archival storage."),(0,i.kt)("h1",{id:"storage-api"},"Storage API."),(0,i.kt)("p",null,"The Storage API exposes a Subspace node feature called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace/tree/main/crates/pallet-object-store"},"pallet-object-store")," that implements RPC methods to store an ",(0,i.kt)("strong",{parentName:"p"},"Object")," from user-provided data. The user can send a simple text or even a file; the ",(0,i.kt)("inlineCode",{parentName:"p"},"pallet-object-store")," receives an ",(0,i.kt)("strong",{parentName:"p"},"Object")," to store and generate an ",(0,i.kt)("strong",{parentName:"p"},"objectId"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"put"),": Receive a signed transaction containing an ",(0,i.kt)("strong",{parentName:"p"},"Object")," to store. It emit a ",(0,i.kt)("inlineCode",{parentName:"p"},"DataSubmitted Event")," with an ",(0,i.kt)("strong",{parentName:"p"},"objectId")," to get the ",(0,i.kt)("strong",{parentName:"p"},"Object")," from the network.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"findObject"),": Receives an ",(0,i.kt)("strong",{parentName:"p"},"objectId")," to find the related ",(0,i.kt)("strong",{parentName:"p"},"Object")," stored, if it exists this method will return the ",(0,i.kt)("strong",{parentName:"p"},"Object")," data."))),(0,i.kt)("p",null,"To expose these methods, this library implements two main classes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Identity"),": Class to load a ",(0,i.kt)("strong",{parentName:"p"},"keyPair")," from different sources. An instance of this class is required to create a ",(0,i.kt)("strong",{parentName:"p"},"SubspaceClient"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fromWeb3"),": Load ",(0,i.kt)("strong",{parentName:"p"},"keyPair")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"web3Accounts")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/extension-dapp"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"fromUri"),": Load ",(0,i.kt)("strong",{parentName:"p"},"keyPair")," from a secret URI, Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"//Alice///password")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"mnemonic phrase"),".")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SubspaceClient"),": Class that loads an ",(0,i.kt)("strong",{parentName:"p"},"Identity")," instance and creates providers to interact with the network."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"connect"),": Create an ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiPromise")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"WsProvider"),", returning a ",(0,i.kt)("strong",{parentName:"p"},"SubspaceClient")," instance ready to call:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"putObject"),": Receives an ",(0,i.kt)("strong",{parentName:"p"},"Object")," as Uint8Array, it create and submit a signed ",(0,i.kt)("inlineCode",{parentName:"p"},"put")," transaction and return an ",(0,i.kt)("strong",{parentName:"p"},"objectId"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"getObject"),": Receives an ",(0,i.kt)("strong",{parentName:"p"},"objectId")," calling ",(0,i.kt)("inlineCode",{parentName:"p"},"findObject")," to return the ",(0,i.kt)("strong",{parentName:"p"},"Object")," as Uint8Array."))))))),(0,i.kt)("h1",{id:"run-this-project"},"Run this project."),(0,i.kt)("p",null,"Clone this repository:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/subspace/subspace.js.git"))),(0,i.kt)("p",null,"Install dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm ci"))),(0,i.kt)("p",null,"Build the library."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run build"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Import the library.\nimport { SubspaceClient, Identity } from "@subspace/subspace";\n\n// Generate an Identity from node.js\nconst identity = await Identity.fromUri(mnemonic);\n// Generate an Identity from broser using web3Account (injected by extension)\nconst identity = await Identity.fromWeb3();\n\n// Generate a SubspaceClient and connect to node and farmer rpc endpoints.\nconst subspaceClient = await SubspaceClient.connect(\n  identity,\n  NODE_WS_PROVIDER,\n  FARMER_WS_PROVIDER\n);\n\n// Put the file as (Uint8Array) in to the objectStore and return the objectId\nconst objectId: string = await subspaceClient.putObject(objectData);\n\n// Using the objectId get the file as (Uint8Array) from the objectStore.\nconst object: Uint8Array = await subspaceClient.getObject(objectId);\n')),(0,i.kt)("h2",{id:"run-the-examples"},"Run the examples."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check the examples folder for node.js and browser."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace.js/tree/master/examples"},"node.js"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace.js/tree/master/examples"},"dapp"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/subspace/subspace.js/tree/master/examples"},"html"),".")))),(0,i.kt)("h2",{id:"running-a-local-network"},"Running a local network"),(0,i.kt)("p",null,"You can check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/subspace/subspace"},"Subspace repository")," to learn how configure and run your local network."))}d.isMDXComponent=!0}}]);