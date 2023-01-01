"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1910],{43928:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>i});var s=n(87462),o=(n(67294),n(3905));n(16758);const r={title:"\u670d\u52a1\u7aef\u6e32\u67d3"},a=void 0,u={unversionedId:"frontend/docusaurus/ssr",id:"frontend/docusaurus/ssr",title:"\u670d\u52a1\u7aef\u6e32\u67d3",description:"https://github.com/facebook/docusaurus/issues/5273",source:"@site/docs/frontend/docusaurus/ssr.md",sourceDirName:"frontend/docusaurus",slug:"/frontend/docusaurus/ssr",permalink:"/docs/frontend/docusaurus/ssr",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/docusaurus/ssr.md",tags:[],version:"current",lastUpdatedAt:1672546497,formattedLastUpdatedAt:"2023\u5e741\u67081\u65e5",frontMatter:{title:"\u670d\u52a1\u7aef\u6e32\u67d3"},sidebar:"frontEndSidebar",previous:{title:"\u4e00\u4e9b\u95ee\u9898",permalink:"/docs/frontend/docusaurus/error"},next:{title:"\u544a\u793a\u6846",permalink:"/docs/frontend/docusaurus/\u544a\u793a\u6846"}},d={},i=[],c={toc:i};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/5273"},"https://github.com/facebook/docusaurus/issues/5273")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u4efb\u4f55\u7ec4\u4ef6\u5f15\u7528\u90fd\u8981\u6362\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"require"),"\u7684\u65b9\u5f0f\u653e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"BrowserOnly"),"\u7ec4\u4ef6\u5185\u90e8\u3002\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"import"),"\u65b9\u5f0f\u56e0\u4e3a\u4ee3\u7801\u53ea\u80fd\u653e\u5728\u9876\u5c42\uff0c\u6545\u800c\u4f1a\u51fa\u95ee\u9898\uff09\u5982\u4e0b\u6240\u793a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import BrowserOnly from '@docusaurus/BrowserOnly';\n\nfunction MyComponent(props) {\n  return (\n    <BrowserOnly fallback={<div>Loading...</div>}>\n      {() => {\n        const LibComponent =\n          require('some-lib-that-accesses-window').LibComponent;\n        return <LibComponent {...props} />;\n      }}\n    </BrowserOnly>\n  );\n}\n"))))}p.isMDXComponent=!0}}]);