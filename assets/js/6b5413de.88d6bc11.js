"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8591],{52286:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(87462),s=(t(67294),t(3905));t(16758);const o={title:"HTTP\u6216HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1",date:new Date("2022-04-24T23:50:59.000Z"),tags:["\u5185\u7f51\u7a7f\u900f","nginx","frp","supervisor"],description:"supervisor+frp+nginx\u642d\u5efaHTTP/HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1"},i="supervisor+frp+nginx\u642d\u5efaHTTP/HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1",p={unversionedId:"others/intranet-penetration/frp",id:"others/intranet-penetration/frp",title:"HTTP\u6216HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1",description:"supervisor+frp+nginx\u642d\u5efaHTTP/HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1",source:"@site/docs/others/intranet-penetration/frp.md",sourceDirName:"others/intranet-penetration",slug:"/others/intranet-penetration/frp",permalink:"/docs/others/intranet-penetration/frp",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/others/intranet-penetration/frp.md",tags:[{label:"\u5185\u7f51\u7a7f\u900f",permalink:"/docs/tags/\u5185\u7f51\u7a7f\u900f"},{label:"nginx",permalink:"/docs/tags/nginx"},{label:"frp",permalink:"/docs/tags/frp"},{label:"supervisor",permalink:"/docs/tags/supervisor"}],version:"current",lastUpdatedAt:1670683071,formattedLastUpdatedAt:"2022\u5e7412\u670810\u65e5",frontMatter:{title:"HTTP\u6216HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1",date:"2022-04-24T23:50:59.000Z",tags:["\u5185\u7f51\u7a7f\u900f","nginx","frp","supervisor"],description:"supervisor+frp+nginx\u642d\u5efaHTTP/HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1"},sidebar:"anyThing",previous:{title:"\u5185\u7f51\u7a7f\u900f",permalink:"/docs/category/\u5185\u7f51\u7a7f\u900f"},next:{title:"python\u7684os\u6a21\u5757",permalink:"/docs/others/os"}},a={},l=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u670d\u52a1\u7aef\u914d\u7f6e",id:"\u670d\u52a1\u7aef\u914d\u7f6e",level:2},{value:"frp\u914d\u7f6e",id:"frp\u914d\u7f6e",level:3},{value:"supervisor\u914d\u7f6e",id:"supervisor\u914d\u7f6e",level:3},{value:"nginx\u914d\u7f6e",id:"nginx\u914d\u7f6e",level:3},{value:"\u672c\u5730\uff08\u5ba2\u6237\u7aef\uff09\u914d\u7f6e",id:"\u672c\u5730\u5ba2\u6237\u7aef\u914d\u7f6e",level:2},{value:"frp\u914d\u7f6e",id:"frp\u914d\u7f6e-1",level:3},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",level:2}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"supervisorfrpnginx\u642d\u5efahttphttps\u5185\u7f51\u7a7f\u900f\u670d\u52a1"},"supervisor+frp+nginx\u642d\u5efaHTTP/HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"frp\u5f00\u6e90\u4ed3\u5e93\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://github.com/fatedier/frp"},"https://github.com/fatedier/frp")),(0,s.kt)("p",{parentName:"blockquote"},"supervisor\u5f00\u6e90\u4ed3\u5e93\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Supervisor/supervisor"},"https://github.com/Supervisor/supervisor")),(0,s.kt)("p",{parentName:"blockquote"},"nginx\u5f00\u6e90\u4ed3\u5e93\uff1a",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nginx/nginx"},"https://github.com/nginx/nginx"))),(0,s.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,s.kt)("p",null,"\u5728\u505a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u65f6\u5019\u53d1\u73b0\u6bcf\u6b21\u90fd\u8981\u4f20\u6587\u4ef6\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u7136\u540e\u518d\u8dd1\u8d77\u6765\u670d\u52a1\uff0c\u8c03\u7528\u63a5\u53e3\u7684\u65f6\u5019\u60f3\u770b\u65e5\u5fd7\u8fd8\u5f97\u8981\u53bb\u670d\u52a1\u5668\u4e0a\u770b\uff0c\u6574\u4e2a\u6d41\u7a0b\u5b9e\u5728\u662f\u975e\u5e38\u7684\u9ebb\u70e6\uff0c\u7a0b\u5e8f\u5458\u7684\u61d2\u672c\u8d28\u8ba9\u6211\u53bb\u60f3\u4e86\u4e00\u4e0b\u8be5\u600e\u4e48\u5904\u7406\u8fd9\u4e2a\u95ee\u9898\uff0c\u7ed3\u5408\u4e4b\u524d\u7528\u8fc7\u7684frp\u53ef\u4ee5\u505a\u5185\u7f51\u7a7f\u900f\uff0c\u90a3\u4e48\u80fd\u4e0d\u80fd\u7528nginx\u8f6c\u53d1\u5230frp\u7684\u670d\u52a1\u7aef\u53e3\u5462\uff1f"),(0,s.kt)("h2",{id:"\u670d\u52a1\u7aef\u914d\u7f6e"},"\u670d\u52a1\u7aef\u914d\u7f6e"),(0,s.kt)("h3",{id:"frp\u914d\u7f6e"},"frp\u914d\u7f6e"),(0,s.kt)("p",null,"\u670d\u52a1\u7aef",(0,s.kt)("inlineCode",{parentName:"p"},"frps.ini"),"\u6587\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"[common]\n;tcp\u4fe1\u53f7\u4f20\u8f93\u7aef\u53e3\nbind_port = 7000\n;\u63a5\u6536http\u670d\u52a1\u7684\u7aef\u53e3\nvhost_http_port = 8006\n;\u7528\u6765\u9a8c\u8bc1\u662f\u81ea\u5df1\u7684\u4fe1\u53f7\u7684token\nauth_token = token\n\n;\u670d\u52a1\u7c7b\u578b\ntype = http\n;\u4f60\u7684\u670d\u52a1\u5668\u5730\u5740\uff0c\u6b64\u5904\u7531\u4e8e\u505a\u4e86nginx\u8f6c\u53d1\uff0c\u4e14\u8f6c\u53d1\u5230\u7684\u662f127.0.0.1\uff0c\u6240\u4ee5\u8fd9\u91cc\u5c31\u5199127.0.0.1\ncustom_domains = 127.0.0.1\n")),(0,s.kt)("h3",{id:"supervisor\u914d\u7f6e"},"supervisor\u914d\u7f6e"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"supervisor.conf"),"\u914d\u7f6e\u8f7d\u5165\u5b50\u6587\u4ef6\u5939\u4e2d\u7684\u6240\u6709",(0,s.kt)("inlineCode",{parentName:"p"},".ini"),"\u6587\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[include]\nfiles = supervisord.d/*.ini\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"frps.ini"),"\u6587\u4ef6\u914d\u7f6e\u5982\u4e0b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"[program:frps]\n;\u542f\u52a8\u7528\u6237\nuser=root\n;\u542f\u52a8\u8def\u5f84\ndirectory=/root/frp_0.42.0_linux_amd64\n;\u5177\u4f53\u547d\u4ee4\ncommand=/usr/bin/zsh -c './frps -c ./frps.ini'\n;\u662f\u5426\u5f00\u673a\u81ea\u542f\u52a8\nautostart=true\n;\u9047\u5230\u9519\u8bef\u662f\u5426\u91cd\u542f\nautorestart=true\n")),(0,s.kt)("h3",{id:"nginx\u914d\u7f6e"},"nginx\u914d\u7f6e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-conf"},'user root;\nworker_processes  1;\nerror_log  logs/error.log  info;\n\n# pid  logs/nginx.pid;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    # \u9632\u6b62\u5e26\u6709\u4e0b\u5212\u7ebf\u7684\u8bf7\u6c42\u5934\u88ab\u5ffd\u7565\n    underscores_in_headers on;\n\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                     \'$status $body_bytes_sent "$http_referer" \'\n                     \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    # access_log  logs/access.log  main;\n\n    sendfile        on;\n    # tcp_nopush     on;\n\n    keepalive_timeout  65;\n    client_max_body_size 10m;  \n    # gzip  on;\n    # HTTP server\n    server {\n        listen  80;\n        server_name  your.domain.com;\n        return 301 https://your.domain.com$request_uri;\n    }\n    # HTTPS server\n    server {\n        listen       443 ssl;\n        server_name  alnda.cn;\n\n        ssl_certificate      /ssl/cert/ssl.cn.pem;\n        ssl_certificate_key  /ssl/cert/ssl.cn.key;\n\n        ssl_session_cache    shared:SSL:1m;\n        ssl_session_timeout  10m;\n    \n        ssl_ciphers  HIGH:!aNULL:!MD5;\n        ssl_prefer_server_ciphers  on;\n        location /frp/ {\n            proxy_pass http://127.0.0.1:8006/;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_set_header X-Forwarded-Proto https;\n            proxy_set_header X-Forwarded-Host $remote_addr;\n        }\n        error_page 500 502 503 504 /50x.html;\n            location = /50x.html {\n        }\n    }\n}\n\n')),(0,s.kt)("h2",{id:"\u672c\u5730\u5ba2\u6237\u7aef\u914d\u7f6e"},"\u672c\u5730\uff08\u5ba2\u6237\u7aef\uff09\u914d\u7f6e"),(0,s.kt)("h3",{id:"frp\u914d\u7f6e-1"},"frp\u914d\u7f6e"),(0,s.kt)("p",null,"\u5ba2\u6237\u7aef",(0,s.kt)("inlineCode",{parentName:"p"},"frpc.ini"),"\u6587\u4ef6"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ini"},"[common]\n;\u4f60\u7684\u8fdc\u7a0b\u670d\u52a1\u5668ip\u5730\u5740\nserver_addr = 43.231.52.81\n;\u4e0d\u8981\u52a8\uff0c\u8fd9\u662f\u56fa\u5b9atcp\u7aef\u53e3\u53f7\nserver_port = 7000\n;\u7528\u6765\u9a8c\u8bc1\u662f\u4f60\u7684\u670d\u52a1\u5668\u7684token\uff0c\u548c\u670d\u52a1\u5668\u4e0a\u7684\u4fdd\u6301\u4e00\u81f4\nauth_token = token  \n\n[web]\ntype = http\nlocal_port = 8000\ncustom_domains = 127.0.0.1\n")),(0,s.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u542f\u52a8"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"./frpc -c ./frpc.ini\n")),(0,s.kt)("h2",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),(0,s.kt)("p",null,"\u7531\u4e8enginx\u5f00\u542f\u5566https\uff0c\u6240\u4ee5\u8bbf\u95ee\u670d\u52a1\u5668\u57df\u540d\u5373\u53ef\u8bbf\u95ee\u5230\u672c\u5730\u670d\u52a1"),(0,s.kt)("p",null,"\u5f00\u59cb\u5feb\u4e50\u7684\u7a7f\u900f\u6a21\u5f0f\u5427\uff01"),(0,s.kt)("p",null,"\u8fd8\u53ef\u4ee5\u7528\u6765\u505a\u8c03\u8bd5\u54e6\uff5e"))}u.isMDXComponent=!0}}]);