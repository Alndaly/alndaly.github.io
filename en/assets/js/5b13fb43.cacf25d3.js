"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[7233],{3881:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(8101);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}},7231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"others/video/ffmpeg","title":"\u89c6\u9891\u5904\u7406","description":"m3u8\u6587\u4ef6\u751f\u6210\u4ee5\u53ca\u89c6\u9891\u5206\u6bb5\u5207\u7247","source":"@site/docs/others/video/ffmpeg.md","sourceDirName":"others/video","slug":"/others/video/ffmpeg","permalink":"/en/docs/others/video/ffmpeg","draft":false,"unlisted":false,"editUrl":"https://github.com/Alndaly/alndaly.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/others/video/ffmpeg.md","tags":[],"version":"current","lastUpdatedAt":1742396220000,"frontMatter":{"title":"\u89c6\u9891\u5904\u7406"},"sidebar":"anyThing","previous":{"title":"SSH \u4e09\u6b65\u89e3\u51b3\u514d\u5bc6\u767b\u5f55","permalink":"/en/docs/others/ssh/login-without-password"},"next":{"title":"wget","permalink":"/en/docs/others/wget"}}');var o=n(5105),r=n(3881);const i={title:"\u89c6\u9891\u5904\u7406"},a=void 0,c={},d=[{value:"m3u8\u6587\u4ef6\u751f\u6210\u4ee5\u53ca\u89c6\u9891\u5206\u6bb5\u5207\u7247",id:"m3u8\u6587\u4ef6\u751f\u6210\u4ee5\u53ca\u89c6\u9891\u5206\u6bb5\u5207\u7247",level:2}];function l(e){const t={code:"code",h2:"h2",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"m3u8\u6587\u4ef6\u751f\u6210\u4ee5\u53ca\u89c6\u9891\u5206\u6bb5\u5207\u7247",children:"m3u8\u6587\u4ef6\u751f\u6210\u4ee5\u53ca\u89c6\u9891\u5206\u6bb5\u5207\u7247"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"ffmpeg -i /Users/kinda/Desktop/\u751f\u6d3b/test.mp4  -c copy -map 0 -f segment -segment_time 10 -segment_list playlist.m3u8 -segment_format mpegts output_%03d.ts\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);