"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[2546],{3881:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>d});var i=o(8101);const c={},s=i.createContext(c);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),i.createElement(s.Provider,{value:e},n.children)}},5975:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>t});const i=JSON.parse('{"id":"backend/Nginx/Nginx\u8f6c\u53d1","title":"Nginx\u8f6c\u53d1","description":"Nginx\u8f6c\u53d1","source":"@site/docs/backend/Nginx/Nginx\u8f6c\u53d1.md","sourceDirName":"backend/Nginx","slug":"/backend/Nginx/Nginx\u8f6c\u53d1","permalink":"/docs/backend/Nginx/Nginx\u8f6c\u53d1","draft":false,"unlisted":false,"editUrl":"https://github.com/Alndaly/alndaly.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/backend/Nginx/Nginx\u8f6c\u53d1.md","tags":[],"version":"current","lastUpdatedAt":1742396220000,"frontMatter":{},"sidebar":"backEndSidebar","previous":{"title":"Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898","permalink":"/docs/backend/Nginx/Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898"},"next":{"title":"\u57fa\u7840\u914d\u7f6e","permalink":"/docs/backend/Nginx/\u57fa\u7840\u914d\u7f6e"}}');var c=o(5105),s=o(3881);const r={},d=void 0,l={},t=[{value:"Nginx\u8f6c\u53d1",id:"nginx\u8f6c\u53d1",level:2},{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:3},{value:"\u5339\u914d\u987a\u5e8f",id:"\u5339\u914d\u987a\u5e8f",level:3},{value:"<code>root</code>\u4e0e<code>alias</code>\u7684\u533a\u522b",id:"root\u4e0ealias\u7684\u533a\u522b",level:3},{value:"<code>server</code>\u548c<code>location</code>\u4e2d\u7684<code>root</code>",id:"server\u548clocation\u4e2d\u7684root",level:3}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",del:"del",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"nginx\u8f6c\u53d1",children:"Nginx\u8f6c\u53d1"}),"\n",(0,c.jsx)(e.h3,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"Location"}),"\u662f",(0,c.jsx)(e.code,{children:"Nginx"}),"\u4e2d\u4e00\u4e2a\u975e\u5e38\u6838\u5fc3\u7684\u914d\u7f6e\uff0c\u8fd9\u7bc7\u91cd\u70b9\u8bb2\u89e3\u4e00\u4e0b",(0,c.jsx)(e.code,{children:"Location"}),"\u7684\u914d\u7f6e\u95ee\u9898\u4ee5\u53ca\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9879\u3002"]}),"\n",(0,c.jsx)(e.h3,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,c.jsxs)(e.p,{children:["\u5173\u4e8e",(0,c.jsx)(e.code,{children:"Location"}),"\uff0c\u4e3e\u4e2a\u7b80\u5355\u7684\u914d\u7f6e\u4f8b\u5b50\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"http {\n  server {\n      listen 80;\n    \tserver_name www.yayujs.com;\n    \tlocation / {\n      \troot /home/www/ts/;\n\t      index index.html;\n    \t}\n  }\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5927\u81f4\u7684\u610f\u601d\u662f\uff0c\u5f53\u4f60\u8bbf\u95ee",(0,c.jsx)(e.code,{children:"www.yayujs.com"}),"\u7684",(0,c.jsx)(e.code,{children:"80"}),"\u7aef\u53e3\u7684\u65f6\u5019\uff0c\u8fd4\u56de",(0,c.jsx)(e.code,{children:"/home/www/ts/index.html"}),"\u6587\u4ef6\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u6211\u4eec\u770b\u4e0b",(0,c.jsx)(e.code,{children:"Location"}),"\u7684\u5177\u4f53\u8bed\u6cd5\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"location [ = | ~ | ~* | ^~ ] uri { ... }\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u91cd\u70b9\u770b\u65b9\u62ec\u53f7\u4e2d\u7684\xa0",(0,c.jsx)(e.code,{children:"[ = | ~ | ~* | ^~ ]"}),"\uff0c\u5176\u4e2d\xa0",(0,c.jsx)(e.code,{children:"|"}),"\xa0\u5206\u9694\u7684\u5185\u5bb9\u8868\u793a\u4f60\u53ef\u80fd\u4f1a\u7528\u5230\u7684\u8bed\u6cd5\uff0c\u5176\u4e2d\uff1a"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"="}),"\u8868\u793a\u7cbe\u786e\u5339\u914d\uff0c\u6bd4\u5982\uff1a"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:'location = /test {\n  return 200 "hello";\n}\n\n# /test ok\n# /test/ not ok\n# /test2 not ok\n# /test/2 not ok\n'})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"~"}),"\u8868\u793a\u533a\u5206\u5927\u5c0f\u5199\u7684\u6b63\u5219\u5339\u914d\uff0c\u6bd4\u5982\uff1a"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"location ~ ^/test$ {\n  [ configuration ]\n}\n\n# /test ok\n# /Test not ok\n# /test/ not ok\n# /test2 not ok\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"~*"}),"\u8868\u793a\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u7684\u6b63\u5219\u5339\u914d"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"location ~* ^/test$ {\n\t[ configuration ]\n}\n\n# /test ok\n# /Test ok\n# /test/ not ok\n# /test2 not ok\n"})}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:[(0,c.jsx)(e.code,{children:"^~"}),"\u8868\u793a",(0,c.jsx)(e.code,{children:"uri"}),"\u4ee5\u67d0\u4e2a\u5b57\u7b26\u4e32\u5f00\u5934"]}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"location ^~ /images/ {\n\t[ configuration ]\n}\n\n# /images/1.gif ok\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u800c\u5f53\u4f60\u4e0d\u4f7f\u7528\u8fd9\u4e9b\u8bed\u6cd5\u7684\u65f6\u5019\uff0c\u53ea\u5199",(0,c.jsx)(e.code,{children:"uri"}),"\u7684\u65f6\u5019\uff1a"]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"/"}),"\u8868\u793a\u901a\u7528\u5339\u914d\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"location / {\n\t[ configuration ]\n}\n\n# /index.html ok\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"location /test {\n    [ configuration ]\n}\n\n# /test ok\n# /test2 ok\n# /test/ ok\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u5339\u914d\u987a\u5e8f",children:"\u5339\u914d\u987a\u5e8f"}),"\n",(0,c.jsxs)(e.p,{children:["\u5f53\u5b58\u5728\u591a\u4e2a",(0,c.jsx)(e.code,{children:"location"}),"\u7684\u65f6\u5019\uff0c\u4ed6\u4eec\u7684\u5339\u914d\u987a\u5e8f\u5f15\u7528\xa0",(0,c.jsx)(e.a,{href:"https://link.juejin.cn/?target=http%3A%2F%2Fnginx.org%2Fen%2Fdocs%2Fhttp%2Fngx_http_core_module.html%23location",children:"Nginx \u5b98\u65b9\u6587\u6863"}),"\u5c31\u662f\uff1a"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsxs)(e.p,{children:["A location can either be defined by a prefix string, or by a regular expression. Regular expressions are specified with the preceding \u201c",(0,c.jsx)(e.del,{children:"*\u201d modifier (for case-insensitive matching), or the \u201c"}),"\u201d modifier (for case-sensitive matching). To find location matching a given request, nginx first checks locations defined using the prefix strings (prefix locations). Among them, the location with the longest matching prefix is selected and remembered. Then regular expressions are checked, in the order of their appearance in the configuration file. The search of regular expressions terminates on the first match, and the corresponding configuration is used. If no match with a regular expression is found then the configuration of the prefix location remembered earlier is used."]}),"\n"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"If the longest matching prefix location has the \u201c^~\u201d modifier then regular expressions are not checked."}),"\n"]}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"Also, using the \u201c=\u201d modifier it is possible to define an exact match of URI and location. If an exact match is found, the search terminates. For example, if a \u201c/\u201d request happens frequently, defining \u201clocation = /\u201d will speed up the processing of these requests, as search terminates right after the first comparison. Such a location cannot obviously contain nested locations."}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u7ffb\u8bd1\u6574\u7406\u540e\u5c31\u662f\uff1a"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"location"}),"\u7684\u5b9a\u4e49\u5206\u4e3a\u4e24\u79cd\uff1a"]}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\u524d\u7f00\u5b57\u7b26\u4e32\uff08",(0,c.jsx)(e.code,{children:"prefix string"}),"\uff09"]}),"\n",(0,c.jsxs)(e.li,{children:["\u6b63\u5219\u8868\u8fbe\u5f0f\uff08",(0,c.jsx)(e.code,{children:"regular expression"}),"\uff09\uff0c\u5177\u4f53\u4e3a\u524d\u9762\u5e26",(0,c.jsx)(e.code,{children:"~*"}),"\u548c",(0,c.jsx)(e.code,{children:"~"}),"\u4fee\u9970\u7b26\u7684"]}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u800c\u5339\u914d location \u7684\u987a\u5e8f\u4e3a\uff1a"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\u68c0\u67e5\u4f7f\u7528\u524d\u7f00\u5b57\u7b26\u4e32\u7684",(0,c.jsx)(e.code,{children:"locations"}),"\uff0c\u5728\u4f7f\u7528\u524d\u7f00\u5b57\u7b26\u4e32\u7684",(0,c.jsx)(e.code,{children:"locations"}),"\u4e2d\u9009\u62e9\u6700\u957f\u5339\u914d\u7684\uff0c\u5e76\u5c06\u7ed3\u679c\u8fdb\u884c\u50a8\u5b58"]}),"\n",(0,c.jsxs)(e.li,{children:["\u5982\u679c\u7b26\u5408\u5e26\u6709",(0,c.jsx)(e.code,{children:"="}),"\u4fee\u9970\u7b26\u7684URI\uff0c\u5219\u7acb\u523b\u505c\u6b62\u5339\u914d"]}),"\n",(0,c.jsxs)(e.li,{children:["\u5982\u679c\u7b26\u5408\u5e26\u6709",(0,c.jsx)(e.code,{children:"^~"}),"\u4fee\u9970\u7b26\u7684URI\uff0c\u5219\u4e5f\u7acb\u523b\u505c\u6b62\u5339\u914d\u3002"]}),"\n",(0,c.jsx)(e.li,{children:"\u7136\u540e\u6309\u7167\u5b9a\u4e49\u6587\u4ef6\u7684\u987a\u5e8f\uff0c\u68c0\u67e5\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5339\u914d\u5230\u5c31\u505c\u6b62"}),"\n",(0,c.jsx)(e.li,{children:"\u5f53\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u4e0d\u5230\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u4e4b\u524d\u50a8\u5b58\u7684\u524d\u7f00\u5b57\u7b26\u4e32"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u518d\u603b\u7ed3\u4e00\u4e0b\u5c31\u662f\uff1a"}),"\n",(0,c.jsx)(e.p,{children:"\u5728\u987a\u5e8f\u4e0a\uff0c\u524d\u7f00\u5b57\u7b26\u4e32\u987a\u5e8f\u4e0d\u91cd\u8981\uff0c\u6309\u7167\u5339\u914d\u957f\u5ea6\u6765\u786e\u5b9a\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u5219\u6309\u7167\u5b9a\u4e49\u987a\u5e8f\u3002"}),"\n",(0,c.jsxs)(e.p,{children:["\u5728\u4f18\u5148\u7ea7\u4e0a\uff0c",(0,c.jsx)(e.code,{children:"="}),"\u4fee\u9970\u7b26\u6700\u9ad8",(0,c.jsx)(e.code,{children:"^~"}),"\u6b21\u4e4b\uff0c\u518d\u8005\u662f\u6b63\u5219\uff0c\u6700\u540e\u662f\u524d\u7f00\u5b57\u7b26\u4e32\u5339\u914d\u3002"]}),"\n",(0,c.jsx)(e.p,{children:"\u6211\u4eec\u4e3e\u51e0\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u590d\u4e60\u4e0b\uff1a"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"server {\n    location /doc {\n        [ configuration A ]\n    }\n    location /docu {\n        [ configuration B ]\n    }\n}\n\n# \u8bf7\u6c42 /document \u4f7f\u7528 configuration B\n# \u867d\u7136 /doc \u4e5f\u80fd\u5339\u914d\u5230\uff0c\u4f46\u5728\u987a\u5e8f\u4e0a\uff0c\u524d\u7f00\u5b57\u7b26\u4e32\u987a\u5e8f\u4e0d\u91cd\u8981\uff0c\u6309\u7167\u5339\u914d\u957f\u5ea6\u6765\u786e\u5b9a\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"server {\n    location ~ ^/doc {\n        [ configuration A ]\n    }\n    location ~ ^/docu {\n        [ configuration B ]\n    }\n}\n\n# \u8bf7\u6c42 /document \u4f7f\u7528 configuration A\n# \u867d\u7136 ~ ^/docu \u4e5f\u80fd\u5339\u914d\u5230\uff0c\u4f46\u6b63\u5219\u8868\u8fbe\u5f0f\u5219\u6309\u7167\u5b9a\u4e49\u987a\u5e8f\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"server {\n    location ^~ /doc {\n        [ configuration A ]\n    }\n    location ~ ^/docu {\n        [ configuration B ]\n    }\n}\n\n# \u8bf7\u6c42 /document \u4f7f\u7528 configuration A\n# \u867d\u7136 ~ ^/docu \u4e5f\u80fd\u5339\u914d\u5230\uff0c\u4f46 ^~ \u7684\u4f18\u5148\u7ea7\u66f4\u9ad8\n"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"server {\n    location /document {\n        [ configuration A ]\n    }\n    location ~ ^/docu {\n        [ configuration B ]\n    }\n}\n\n# \u8bf7\u6c42 /document \u4f7f\u7528 configuration B\n# \u867d\u7136 /document \u4e5f\u80fd\u5339\u914d\u5230\uff0c\u4f46\u6b63\u5219\u7684\u4f18\u5148\u7ea7\u66f4\u9ad8\n"})}),"\n",(0,c.jsxs)(e.h3,{id:"root\u4e0ealias\u7684\u533a\u522b",children:[(0,c.jsx)(e.code,{children:"root"}),"\u4e0e",(0,c.jsx)(e.code,{children:"alias"}),"\u7684\u533a\u522b"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5f53\u6211\u4eec\u8fd9\u6837\u8bbe\u7f6e",(0,c.jsx)(e.code,{children:"root"}),"\u7684\u65f6\u5019\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"location /i/ {\n    root /data/w3;\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5f53\u8bf7\u6c42",(0,c.jsx)(e.code,{children:"/i/top.gif"}),"\uff0c",(0,c.jsx)(e.code,{children:"/data/w3/i/top.gif"}),"\u4f1a\u88ab\u8fd4\u56de\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u5f53\u6211\u4eec\u8fd9\u6837\u8bbe\u7f6e",(0,c.jsx)(e.code,{children:"alias"}),"\u7684\u65f6\u5019\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"location /i/ {\n    alias /data/w3/images/;\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5f53\u8bf7\u6c42",(0,c.jsx)(e.code,{children:"/i/top.gif"}),"\uff0c",(0,c.jsx)(e.code,{children:"/data/w3/images/top.gif"}),"\u4f1a\u88ab\u8fd4\u56de\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u4e4d\u4e00\u770b\u4e24\u8005\u5f88\u50cf\uff0c\u4f46\u7ec6\u4e00\u770b\uff0c\u5c31\u80fd\u770b\u51fa\u4e24\u8005\u7684\u533a\u522b\uff0c",(0,c.jsx)(e.code,{children:"root"}),"\u662f\u76f4\u63a5\u62fc\u63a5",(0,c.jsx)(e.code,{children:"root"}),"\xa0+\xa0",(0,c.jsx)(e.code,{children:"location"}),"\u800calias\u662f\u7528",(0,c.jsx)(e.code,{children:"alias"}),"\u66ff\u6362",(0,c.jsx)(e.code,{children:"location"}),"\uff0c\u6240\u4ee5",(0,c.jsx)(e.code,{children:"root"}),"\u4e2d\u6700\u540e\u7684\u8def\u5f84\u91cc\u6709",(0,c.jsx)(e.code,{children:"/i/"}),"\uff0c\u800c alias \u4e2d\u6700\u540e\u7684\u8def\u5f84\u91cc\u6ca1\u6709",(0,c.jsx)(e.code,{children:"/i/"}),"\xa0\u3002"]}),"\n",(0,c.jsxs)(e.p,{children:["\u6240\u4ee5\u5982\u679c\u4f60\u8fd9\u6837\u4f7f\u7528",(0,c.jsx)(e.code,{children:"allias"}),"\u5b9a\u4e49\u4e00\u4e2a\u8def\u5f84\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"location /images/ {\n    alias /data/w3/images/;\n}\n"})}),"\n",(0,c.jsxs)(e.p,{children:["\u5176\u5b9e\u4f7f\u7528",(0,c.jsx)(e.code,{children:"root"}),"\u4f1a\u66f4\u597d\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"location /images/ {\n    root /data/w3;\n}\n"})}),"\n",(0,c.jsxs)(e.h3,{id:"server\u548clocation\u4e2d\u7684root",children:[(0,c.jsx)(e.code,{children:"server"}),"\u548c",(0,c.jsx)(e.code,{children:"location"}),"\u4e2d\u7684",(0,c.jsx)(e.code,{children:"root"})]}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"server"}),"\u548c",(0,c.jsx)(e.code,{children:"location"}),"\u4e2d\u90fd\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(e.code,{children:"root"}),"\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff1a"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-conf",children:"http {\n  server {\n      listen 80;\n    \tserver_name www.yayujs.com;\n    \troot /home/www/website/;\n    \tlocation / {\n      \troot /home/www/ts/;\n\t      index index.html;\n    \t}\n  }\n}\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u4e24\u8005\u90fd\u51fa\u73b0\uff0c\u662f\u600e\u6837\u7684\u4f18\u5148\u7ea7\u5462\uff1f"}),"\n",(0,c.jsxs)(e.p,{children:["\u7b80\u5355\u7684\u6765\u8bf4\uff0c\u5c31\u662f\u5c31\u8fd1\u539f\u5219\uff0c\u5982\u679c",(0,c.jsx)(e.code,{children:"location"}),"\u4e2d\u80fd\u5339\u914d\u5230\uff0c\u5c31\u662f\u7528",(0,c.jsx)(e.code,{children:"location"}),"\u4e2d\u7684",(0,c.jsx)(e.code,{children:"root"}),"\u914d\u7f6e\uff0c\u5ffd\u7565",(0,c.jsx)(e.code,{children:"server"}),"\u4e2d\u7684",(0,c.jsx)(e.code,{children:"root"}),"\uff0c\u5f53",(0,c.jsx)(e.code,{children:"location"}),"\u4e2d\u5339\u914d\u4e0d\u5230\u7684\u65f6\u5019\uff0c\u5219\u4f7f\u7528",(0,c.jsx)(e.code,{children:"server"}),"\u4e2d\u7684",(0,c.jsx)(e.code,{children:"root"}),"\u914d\u7f6e\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(a,{...n})}):a(n)}}}]);