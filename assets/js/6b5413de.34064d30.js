"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[1433],{3634:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"others/intranet-penetration/frp","title":"HTTP\u6216HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1","description":"supervisor+frp+nginx\u642d\u5efaHTTP/HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1","source":"@site/docs/others/intranet-penetration/frp.md","sourceDirName":"others/intranet-penetration","slug":"/others/intranet-penetration/frp","permalink":"/docs/others/intranet-penetration/frp","draft":false,"unlisted":false,"editUrl":"https://github.com/Alndaly/alndaly.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/others/intranet-penetration/frp.md","tags":[{"inline":true,"label":"\u5185\u7f51\u7a7f\u900f","permalink":"/docs/tags/\u5185\u7f51\u7a7f\u900f"},{"inline":true,"label":"nginx","permalink":"/docs/tags/nginx"},{"inline":true,"label":"frp","permalink":"/docs/tags/frp"},{"inline":true,"label":"supervisor","permalink":"/docs/tags/supervisor"}],"version":"current","lastUpdatedAt":1742396220000,"frontMatter":{"title":"HTTP\u6216HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1","date":"2022-04-24T23:50:59.000Z","tags":["\u5185\u7f51\u7a7f\u900f","nginx","frp","supervisor"],"description":"supervisor+frp+nginx\u642d\u5efaHTTP/HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1"},"sidebar":"anyThing","previous":{"title":"\u5185\u7f51\u7a7f\u900f","permalink":"/docs/category/\u5185\u7f51\u7a7f\u900f"},"next":{"title":"python\u7684os\u6a21\u5757","permalink":"/docs/others/os"}}');var t=r(5105),i=r(3881);const o={title:"HTTP\u6216HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1",date:new Date("2022-04-24T23:50:59.000Z"),tags:["\u5185\u7f51\u7a7f\u900f","nginx","frp","supervisor"],description:"supervisor+frp+nginx\u642d\u5efaHTTP/HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1"},a="supervisor+frp+nginx\u642d\u5efaHTTP/HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1",l={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u670d\u52a1\u7aef\u914d\u7f6e",id:"\u670d\u52a1\u7aef\u914d\u7f6e",level:2},{value:"frp\u914d\u7f6e",id:"frp\u914d\u7f6e",level:3},{value:"supervisor\u914d\u7f6e",id:"supervisor\u914d\u7f6e",level:3},{value:"nginx\u914d\u7f6e",id:"nginx\u914d\u7f6e",level:3},{value:"\u672c\u5730\uff08\u5ba2\u6237\u7aef\uff09\u914d\u7f6e",id:"\u672c\u5730\u5ba2\u6237\u7aef\u914d\u7f6e",level:2},{value:"frp\u914d\u7f6e",id:"frp\u914d\u7f6e-1",level:3},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"supervisorfrpnginx\u642d\u5efahttphttps\u5185\u7f51\u7a7f\u900f\u670d\u52a1",children:"supervisor+frp+nginx\u642d\u5efaHTTP/HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["frp\u5f00\u6e90\u4ed3\u5e93\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/fatedier/frp",children:"https://github.com/fatedier/frp"})]}),"\n",(0,t.jsxs)(n.p,{children:["supervisor\u5f00\u6e90\u4ed3\u5e93\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/Supervisor/supervisor",children:"https://github.com/Supervisor/supervisor"})]}),"\n",(0,t.jsxs)(n.p,{children:["nginx\u5f00\u6e90\u4ed3\u5e93\uff1a",(0,t.jsx)(n.a,{href:"https://github.com/nginx/nginx",children:"https://github.com/nginx/nginx"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u505a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u65f6\u5019\u53d1\u73b0\u6bcf\u6b21\u90fd\u8981\u4f20\u6587\u4ef6\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u7136\u540e\u518d\u8dd1\u8d77\u6765\u670d\u52a1\uff0c\u8c03\u7528\u63a5\u53e3\u7684\u65f6\u5019\u60f3\u770b\u65e5\u5fd7\u8fd8\u5f97\u8981\u53bb\u670d\u52a1\u5668\u4e0a\u770b\uff0c\u6574\u4e2a\u6d41\u7a0b\u5b9e\u5728\u662f\u975e\u5e38\u7684\u9ebb\u70e6\uff0c\u7a0b\u5e8f\u5458\u7684\u61d2\u672c\u8d28\u8ba9\u6211\u53bb\u60f3\u4e86\u4e00\u4e0b\u8be5\u600e\u4e48\u5904\u7406\u8fd9\u4e2a\u95ee\u9898\uff0c\u7ed3\u5408\u4e4b\u524d\u7528\u8fc7\u7684frp\u53ef\u4ee5\u505a\u5185\u7f51\u7a7f\u900f\uff0c\u90a3\u4e48\u80fd\u4e0d\u80fd\u7528nginx\u8f6c\u53d1\u5230frp\u7684\u670d\u52a1\u7aef\u53e3\u5462\uff1f"}),"\n",(0,t.jsx)(n.h2,{id:"\u670d\u52a1\u7aef\u914d\u7f6e",children:"\u670d\u52a1\u7aef\u914d\u7f6e"}),"\n",(0,t.jsx)(n.h3,{id:"frp\u914d\u7f6e",children:"frp\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u670d\u52a1\u7aef",(0,t.jsx)(n.code,{children:"frps.ini"}),"\u6587\u4ef6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"[common]\n; \u5f00\u653e\u7684tcp\u4fe1\u53f7\u4f20\u8f93\u7aef\u53e3\nbind_port = 7000\n; \u63a5\u6536http\u670d\u52a1\u7684\u7aef\u53e3\nvhost_http_port = 8091\n; \u7528\u6765\u9a8c\u8bc1\u662f\u81ea\u5df1\u7684\u4fe1\u53f7\u7684token\nauth_token = token\n\n# frp\u7ba1\u7406\u540e\u53f0\u7aef\u53e3\uff0c\u8bf7\u6309\u81ea\u5df1\u9700\u6c42\u66f4\u6539\ndashboard_port = 7500\n# frp\u7ba1\u7406\u540e\u53f0\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u8bf7\u6539\u6210\u81ea\u5df1\u7684\ndashboard_user = admin\ndashboard_pwd = password1\nenable_prometheus = true\n\n# frp\u65e5\u5fd7\u914d\u7f6e\nlog_file = /var/log/frps.log\nlog_level = info\nlog_max_days = 3\n"})}),"\n",(0,t.jsx)(n.h3,{id:"supervisor\u914d\u7f6e",children:"supervisor\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"supervisor.conf"}),"\u914d\u7f6e\u8f7d\u5165\u5b50\u6587\u4ef6\u5939\u4e2d\u7684\u6240\u6709",(0,t.jsx)(n.code,{children:".ini"}),"\u6587\u4ef6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[include]\nfiles = supervisord.d/*.ini\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"frps.ini"}),"\u6587\u4ef6\u914d\u7f6e\u5982\u4e0b"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"[program:frps]\n;\u542f\u52a8\u7528\u6237\nuser=root\n;\u542f\u52a8\u8def\u5f84\ndirectory=/root/frp_0.42.0_linux_amd64\n;\u5177\u4f53\u547d\u4ee4\ncommand=/usr/bin/zsh -c './frps -c ./frps.ini'\n;\u662f\u5426\u5f00\u673a\u81ea\u542f\u52a8\nautostart=true\n;\u9047\u5230\u9519\u8bef\u662f\u5426\u91cd\u542f\nautorestart=true\n"})}),"\n",(0,t.jsx)(n.h3,{id:"nginx\u914d\u7f6e",children:"nginx\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:'user root;\nworker_processes  1;\nerror_log  logs/error.log  info;\n\n# pid  logs/nginx.pid;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    # \u9632\u6b62\u5e26\u6709\u4e0b\u5212\u7ebf\u7684\u8bf7\u6c42\u5934\u88ab\u5ffd\u7565\n    underscores_in_headers on;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                     \'$status $body_bytes_sent "$http_referer" \'\n                     \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    # access_log  logs/access.log  main;\n\n    sendfile        on;\n    # tcp_nopush     on;\n\n    keepalive_timeout  65;\n    client_max_body_size 10m;  \n    # gzip  on;\n    # HTTP server\n    server {\n        listen  80;\n        server_name  your.domain.com;\n        return 301 https://your.domain.com$request_uri;\n    }\n    # HTTPS server\n    server {\n        listen       443 ssl;\n        server_name  alnda.cn;\n\n        ssl_certificate      /ssl/cert/ssl.cn.pem;\n        ssl_certificate_key  /ssl/cert/ssl.cn.key;\n\n        ssl_session_cache    shared:SSL:1m;\n        ssl_session_timeout  10m;\n    \n        ssl_ciphers  HIGH:!aNULL:!MD5;\n        ssl_prefer_server_ciphers  on;\n        location /frp/ {\n            proxy_pass http://127.0.0.1:8006/;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto https;\n            proxy_set_header X-Forwarded-Host $remote_addr;\n        }\n        error_page 500 502 503 504 /50x.html;\n            location = /50x.html {\n        }\n    }\n}\n\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u672c\u5730\u5ba2\u6237\u7aef\u914d\u7f6e",children:"\u672c\u5730\uff08\u5ba2\u6237\u7aef\uff09\u914d\u7f6e"}),"\n",(0,t.jsx)(n.h3,{id:"frp\u914d\u7f6e-1",children:"frp\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef",(0,t.jsx)(n.code,{children:"frpc.ini"}),"\u6587\u4ef6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ini",children:"[common]\n; \u4f60\u7684\u8fdc\u7a0b\u670d\u52a1\u5668ip\u5730\u5740\nserver_addr = 43.231.52.81\n; \u8fdc\u7a0b\u7684\u670d\u52a1\u5668\u5f00\u653e\u4fe1\u53f7\u7aef\u53e3\nserver_port = 7000\n; \u7528\u6765\u9a8c\u8bc1\u662f\u4f60\u7684\u670d\u52a1\u5668\u7684token\uff0c\u548c\u670d\u52a1\u5668\u4e0a\u7684\u4fdd\u6301\u4e00\u81f4\nauth_token = token\t\n\n[web]\ntype = http\nlocal_port = 8000\ncustom_domains = 127.0.0.1\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u542f\u52a8"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"./frpc -c ./frpc.ini\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7ed3\u679c",children:"\u7ed3\u679c"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8enginx\u5f00\u542f\u5566https\uff0c\u6240\u4ee5\u8bbf\u95ee\u670d\u52a1\u5668\u57df\u540d\u5373\u53ef\u8bbf\u95ee\u5230\u672c\u5730\u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:"\u5f00\u59cb\u5feb\u4e50\u7684\u7a7f\u900f\u6a21\u5f0f\u5427\uff01"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd8\u53ef\u4ee5\u7528\u6765\u505a\u8c03\u8bd5\u54e6\uff5e"})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3881:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(8101);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);