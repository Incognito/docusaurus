"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40639],{47817:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/social-card-8dc2413b4f9e86328bf77575e91171d7.png"},29724:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/doc-card-list-e52d727eadceb3d21cfc0f851f09aa93.png"},8300:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/social-card-8dc2413b4f9e86328bf77575e91171d7.png"},16506:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=s(24246),i=s(71670);const o={title:"Docusaurus 2.1",authors:["slorber"],tags:["release"],image:"./img/social-card.png"},r=void 0,a={permalink:"/blog/2022/09/01/docusaurus-2.1",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/blog/2022/09-01-docusaurus-2.1/index.mdx",source:"@site/blog/2022/09-01-docusaurus-2.1/index.mdx",title:"Docusaurus 2.1",description:"We are happy to announce Docusaurus 2.1, our very first minor version release.",date:"2022-09-01T00:00:00.000Z",tags:[{inline:!1,label:"Release",permalink:"/blog/tags/release",description:"Blog posts about Docusaurus' new releases"}],readingTime:1.725,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer, This Week In React editor",url:"https://thisweekinreact.com",twitter:"sebastienlorber",email:"sebastien@thisweekinreact.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Docusaurus 2.1",authors:["slorber"],tags:["release"],image:"./img/social-card.png"},unlisted:!1,lastUpdatedAt:1717175346e3,lastUpdatedBy:"S\xe9bastien Lorber",prevItem:{title:"Docusaurus 2.2",permalink:"/blog/releases/2.2"},nextItem:{title:"Announcing Docusaurus 2.0",permalink:"/blog/2022/08/01/announcing-docusaurus-2.0"}},c={image:s(47817).Z,authorsImageUrls:[void 0]},d=[{value:"Highlights",id:"highlights",level:2},{value:"DocCardList improvements",id:"doccardlist-improvements",level:3},{value:"<code>noindex</code> improvements",id:"noindex-improvements",level:3},{value:"Overriding default meta tags",id:"overriding-default-meta-tags",level:3},{value:"Ukrainian translations",id:"ukrainian-translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["We are happy to announce ",(0,t.jsx)(n.strong,{children:"Docusaurus 2.1"}),", our very first minor version release."]}),"\n",(0,t.jsxs)(n.p,{children:["The upgrade should be easy: as explained in our ",(0,t.jsx)(n.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Docusaurus 2.1 social card",src:s(8300).Z+"",width:"1200",height:"600"})}),"\n",(0,t.jsx)(n.h2,{id:"highlights",children:"Highlights"}),"\n",(0,t.jsx)(n.h3,{id:"doccardlist-improvements",children:"DocCardList improvements"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/8008",children:"#8008"}),", we simplified the usage of the",(0,t.jsx)(n.code,{children:"<DocCardList>"})," component, that is notably used on sidebar category generated index pages."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"items"})," prop is now optional, and will be automatically inferred from the content of the parent sidebar category:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"import DocCardList from '@theme/DocCardList';\n- import {useCurrentSidebarCategory} from '@docusaurus/theme-common';\n\n- <DocCardList items={useCurrentSidebarCategory().items}/>\n+ <DocCardList/>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Also, we made it possible to use it on any document, including regular docs not linked to any sidebar category."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"simplified DocCardList component",src:s(29724).Z+"",width:"1062",height:"489"})}),"\n",(0,t.jsxs)(n.h3,{id:"noindex-improvements",children:[(0,t.jsx)(n.code,{children:"noindex"})," improvements"]}),"\n",(0,t.jsxs)(n.p,{children:["We improved the support of the ",(0,t.jsxs)(n.a,{href:"https://developers.google.com/search/docs/advanced/crawling/block-indexing",children:[(0,t.jsx)(n.code,{children:"noindex"})," meta ",(0,t.jsx)(n.code,{children:"robots"})," directive"]}),", a way to signal search engines you don't want a specific page to be indexed."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/7963",children:"#7963"}),", we allow ",(0,t.jsx)(n.code,{children:"noindex"})," to be configured on a per-docs-version basis."]}),"\n",(0,t.jsxs)(n.p,{children:["Use the following plugin options to tell crawlers you don't want the ",(0,t.jsx)(n.code,{children:"1.0.0"})," version to be indexed:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const options = {\n  versions: {\n    '1.0.0': {\n      noIndex: true,\n    },\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"In practice, Docusaurus will add the following meta to each page of that version:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<meta name="robots" content="noindex, nofollow" />\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/7964",children:"#7964"}),", we also fixed a bug where the sitemap plugin would still contain pages that have a ",(0,t.jsx)(n.code,{children:"noindex"})," directive. Now the sitemap plugin will reliably filter out all the pages containing ",(0,t.jsx)(n.code,{children:"noindex"})," directives."]}),"\n",(0,t.jsx)(n.h3,{id:"overriding-default-meta-tags",children:"Overriding default meta tags"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/7952",children:"#7952"}),", it becomes possible to override default html meta tags you couldn't before:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<>\n  {siteConfig.noIndex && <meta name="robots" content="nofollow, noindex" />}\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n</>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["It is now possible to use ",(0,t.jsx)(n.code,{children:"<Head>"})," or ",(0,t.jsx)(n.code,{children:"themeConfig.metadata"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["to override the ",(0,t.jsx)(n.code,{children:"viewport"})," meta"]}),"\n",(0,t.jsxs)(n.li,{children:["to override the ",(0,t.jsx)(n.code,{children:"robots"})," meta: you could mark your site as ",(0,t.jsx)(n.code,{children:"noIndex"}),", but except for specific pages that should be indexed"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"ukrainian-translations",children:"Ukrainian translations"}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/7953",children:"#7953"}),", we added default classic theme translations for the Ukrainian language."]}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.p,{children:["Check the ",(0,t.jsx)(n.a,{href:"/changelog/2.1.0",children:"2.1.0 changelog entry"})," for an exhaustive list of changes."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},71670:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(27378);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);