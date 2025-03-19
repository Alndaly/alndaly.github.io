"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[9369],{1124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a","title":"\u7aef\u53e3\u7ed1\u5b9a","description":"Koa \u5e94\u7528\u7a0b\u5e8f\u4e0d\u662f HTTP \u670d\u52a1\u5668\u76841\u5bf91\u5c55\u73b0\u3002 \u53ef\u4ee5\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a Koa \u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5\u5728\u4e00\u8d77\u4ee5\u5f62\u6210\u5177\u6709\u5355\u4e2aHTTP\u670d\u52a1\u5668\u7684\u66f4\u5927\u5e94\u7528\u7a0b\u5e8f\u3002","source":"@site/docs/backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a.md","sourceDirName":"backend/Node/Koa","slug":"/backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a","permalink":"/docs/backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a","draft":false,"unlisted":false,"editUrl":"https://github.com/Alndaly/alndaly.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/backend/Node/Koa/\u7aef\u53e3\u7ed1\u5b9a.md","tags":[],"version":"current","lastUpdatedAt":1742396220000,"sidebarPosition":4,"frontMatter":{"title":"\u7aef\u53e3\u7ed1\u5b9a","sidebar_position":4},"sidebar":"backEndSidebar","previous":{"title":"\u7ea7\u8054","permalink":"/docs/backend/Node/Koa/\u7ea7\u8054"},"next":{"title":"\u94fe\u5f0f\u8868\u8fbe","permalink":"/docs/backend/Node/Koa/\u94fe\u5f0f\u8868\u8fbe"}}');var o=t(5105),s=t(3881);const r={title:"\u7aef\u53e3\u7ed1\u5b9a",sidebar_position:4},c=void 0,i={},d=[];function p(e){const n={code:"code",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"app.listen(...)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Koa \u5e94\u7528\u7a0b\u5e8f\u4e0d\u662f HTTP \u670d\u52a1\u5668\u76841\u5bf91\u5c55\u73b0\u3002 \u53ef\u4ee5\u5c06\u4e00\u4e2a\u6216\u591a\u4e2a Koa \u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5\u5728\u4e00\u8d77\u4ee5\u5f62\u6210\u5177\u6709\u5355\u4e2aHTTP\u670d\u52a1\u5668\u7684\u66f4\u5927\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u521b\u5efa\u5e76\u8fd4\u56de HTTP \u670d\u52a1\u5668\uff0c\u5c06\u7ed9\u5b9a\u7684\u53c2\u6570\u4f20\u9012\u7ed9 Server#listen()\u3002\u8fd9\u4e9b\u5185\u5bb9\u90fd\u8bb0\u5f55\u5728 nodejs.org."}),"\n",(0,o.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u65e0\u4f5c\u7528\u7684 Koa \u5e94\u7528\u7a0b\u5e8f\u88ab\u7ed1\u5b9a\u5230 3000 \u7aef\u53e3\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const Koa = require('koa');\nconst app = new Koa();\napp.listen(3000);\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8fd9\u91cc\u7684 app.listen(...) \u65b9\u6cd5\u53ea\u662f\u4ee5\u4e0b\u65b9\u6cd5\u7684\u8bed\u6cd5\u7cd6:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const http = require('http');\nconst Koa = require('koa');\nconst app = new Koa();\nhttp.createServer(app.callback()).listen(3000);\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8fd9\u610f\u5473\u7740\u60a8\u53ef\u4ee5\u5c06\u540c\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u540c\u65f6\u4f5c\u4e3a HTTP \u548c HTTPS \u6216\u591a\u4e2a\u5730\u5740\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const http = require('http');\nconst https = require('https');\nconst Koa = require('koa');\nconst app = new Koa();\nhttp.createServer(app.callback()).listen(3000);\nhttps.createServer(app.callback()).listen(3001);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},3881:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(8101);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);