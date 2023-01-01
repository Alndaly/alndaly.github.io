"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5510],{70285:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=o(87462),a=(o(67294),o(3905));o(16758);const s={title:"\u4e0a\u4e0b\u6587(Context)",sidebar_position:6},d=void 0,c={unversionedId:"backend/Node/Koa/\u4e0a\u4e0b\u6587",id:"backend/Node/Koa/\u4e0a\u4e0b\u6587",title:"\u4e0a\u4e0b\u6587(Context)",description:"Koa Context \u5c06 node \u7684 request \u548c response \u5bf9\u8c61\u5c01\u88c5\u5230\u5355\u4e2a\u5bf9\u8c61\u4e2d\uff0c\u4e3a\u7f16\u5199 Web \u5e94\u7528\u7a0b\u5e8f\u548c API \u63d0\u4f9b\u4e86\u8bb8\u591a\u6709\u7528\u7684\u65b9\u6cd5\u3002 \u8fd9\u4e9b\u64cd\u4f5c\u5728 HTTP \u670d\u52a1\u5668\u5f00\u53d1\u4e2d\u9891\u7e41\u4f7f\u7528\uff0c\u5b83\u4eec\u88ab\u6dfb\u52a0\u5230\u6b64\u7ea7\u522b\u800c\u4e0d\u662f\u66f4\u9ad8\u7ea7\u522b\u7684\u6846\u67b6\uff0c\u8fd9\u5c06\u5f3a\u5236\u4e2d\u95f4\u4ef6\u91cd\u65b0\u5b9e\u73b0\u6b64\u901a\u7528\u529f\u80fd\u3002",source:"@site/docs/backend/Node/Koa/\u4e0a\u4e0b\u6587.md",sourceDirName:"backend/Node/Koa",slug:"/backend/Node/Koa/\u4e0a\u4e0b\u6587",permalink:"/en/docs/backend/Node/Koa/\u4e0a\u4e0b\u6587",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/backend/Node/Koa/\u4e0a\u4e0b\u6587.md",tags:[],version:"current",lastUpdatedAt:1672546497,formattedLastUpdatedAt:"Jan 1, 2023",sidebarPosition:6,frontMatter:{title:"\u4e0a\u4e0b\u6587(Context)",sidebar_position:6},sidebar:"backEndSidebar",previous:{title:"\u94fe\u5f0f\u8868\u8fbe",permalink:"/en/docs/backend/Node/Koa/\u94fe\u5f0f\u8868\u8fbe"},next:{title:"\u8bf7\u6c42(Request)",permalink:"/en/docs/backend/Node/Koa/\u8bf7\u6c42"}},r={},i=[],p={toc:i};function l(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Koa Context \u5c06 node \u7684 request \u548c response \u5bf9\u8c61\u5c01\u88c5\u5230\u5355\u4e2a\u5bf9\u8c61\u4e2d\uff0c\u4e3a\u7f16\u5199 Web \u5e94\u7528\u7a0b\u5e8f\u548c API \u63d0\u4f9b\u4e86\u8bb8\u591a\u6709\u7528\u7684\u65b9\u6cd5\u3002 \u8fd9\u4e9b\u64cd\u4f5c\u5728 HTTP \u670d\u52a1\u5668\u5f00\u53d1\u4e2d\u9891\u7e41\u4f7f\u7528\uff0c\u5b83\u4eec\u88ab\u6dfb\u52a0\u5230\u6b64\u7ea7\u522b\u800c\u4e0d\u662f\u66f4\u9ad8\u7ea7\u522b\u7684\u6846\u67b6\uff0c\u8fd9\u5c06\u5f3a\u5236\u4e2d\u95f4\u4ef6\u91cd\u65b0\u5b9e\u73b0\u6b64\u901a\u7528\u529f\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a"),"\u8bf7\u6c42\u90fd\u5c06\u521b\u5efa\u4e00\u4e2a Context\uff0c\u5e76\u5728\u4e2d\u95f4\u4ef6\u4e2d\u4f5c\u4e3a\u63a5\u6536\u5668\u5f15\u7528\uff0c\u6216\u8005 ctx \u6807\u8bc6\u7b26\uff0c\u5982\u4ee5\u4e0b\u4ee3\u7801\u7247\u6bb5\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"app.use(async ctx => {\n  ctx; // \u8fd9\u662f Context\n  ctx.request; // \u8fd9\u662f koa Request\n  ctx.response; // \u8fd9\u662f koa Response\n});\n")),(0,a.kt)("p",null,"\u4e3a\u65b9\u4fbf\u8d77\u89c1\u8bb8\u591a\u4e0a\u4e0b\u6587\u7684\u8bbf\u95ee\u5668\u548c\u65b9\u6cd5\u76f4\u63a5\u59d4\u6258\u7ed9\u5b83\u4eec\u7684 ctx.request\u6216 ctx.response \uff0c\u4e0d\u7136\u7684\u8bdd\u5b83\u4eec\u662f\u76f8\u540c\u7684\u3002 \u4f8b\u5982 ctx.type \u548c ctx.length \u59d4\u6258\u7ed9 response \u5bf9\u8c61\uff0cctx.path \u548c ctx.method \u59d4\u6258\u7ed9 request\u3002"))}l.isMDXComponent=!0}}]);