"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1295],{11426:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));t(16758);const r={title:"\u7aef\u53e3\u7ed1\u5b9a",sidebar_position:4},s=void 0,p={unversionedId:"backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a",id:"backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a",title:"\u7aef\u53e3\u7ed1\u5b9a",description:"Koa \u5e94\u7528\u7a0b\u5e8f\u4e0d\u662f HTTP \u670d\u52a1\u5668\u76841\u5bf91\u5c55\u73b0\u3002 \u53ef\u4ee5\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a Koa \u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5\u5728\u4e00\u8d77\u4ee5\u5f62\u6210\u5177\u6709\u5355\u4e2aHTTP\u670d\u52a1\u5668\u7684\u66f4\u5927\u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/docs/backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a.md",sourceDirName:"backend/Node/Koa",slug:"/backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a",permalink:"/en/docs/backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"Apr 1, 2023",sidebarPosition:4,frontMatter:{title:"\u7aef\u53e3\u7ed1\u5b9a",sidebar_position:4},sidebar:"backEndSidebar",previous:{title:"\u7ea7\u8054",permalink:"/en/docs/backend/Node/Koa/\u7ea7\u8054"},next:{title:"\u94fe\u5f0f\u8868\u8fbe",permalink:"/en/docs/backend/Node/Koa/\u94fe\u5f0f\u8868\u8fbe"}},c={},l=[],i={toc:l};function d(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"app.listen(...)\n")),(0,o.kt)("p",null,"Koa \u5e94\u7528\u7a0b\u5e8f\u4e0d\u662f HTTP \u670d\u52a1\u5668\u76841\u5bf91\u5c55\u73b0\u3002 \u53ef\u4ee5\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a Koa \u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5\u5728\u4e00\u8d77\u4ee5\u5f62\u6210\u5177\u6709\u5355\u4e2aHTTP\u670d\u52a1\u5668\u7684\u66f4\u5927\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"\u521b\u5efa\u5e76\u8fd4\u56de HTTP \u670d\u52a1\u5668\uff0c\u5c06\u7ed9\u5b9a\u7684\u53c2\u6570\u4f20\u9012\u7ed9 Server#listen()\u3002\u8fd9\u4e9b\u5185\u5bb9\u90fd\u8bb0\u5f55\u5728 nodejs.org."),(0,o.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u65e0\u4f5c\u7528\u7684 Koa \u5e94\u7528\u7a0b\u5e8f\u88ab\u7ed1\u5b9a\u5230 3000 \u7aef\u53e3\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Koa = require('koa');\nconst app = new Koa();\napp.listen(3000);\n")),(0,o.kt)("p",null,"\u8fd9\u91cc\u7684 app.listen(...) \u65b9\u6cd5\u53ea\u662f\u4ee5\u4e0b\u65b9\u6cd5\u7684\u8bed\u6cd5\u7cd6:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const http = require('http');\nconst Koa = require('koa');\nconst app = new Koa();\nhttp.createServer(app.callback()).listen(3000);\n")),(0,o.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u5c06\u540c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u540c\u65f6\u4f5c\u4e3a HTTP \u548c HTTPS \u6216\u591a\u4e2a\u5730\u5740\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const http = require('http');\nconst https = require('https');\nconst Koa = require('koa');\nconst app = new Koa();\nhttp.createServer(app.callback()).listen(3000);\nhttps.createServer(app.callback()).listen(3001);\n")))}d.isMDXComponent=!0}}]);