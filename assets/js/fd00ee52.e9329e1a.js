"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1367],{11194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var l=a(87462),n=(a(67294),a(3905));a(16758);const r={},s=void 0,i={unversionedId:"backend/Nginx/\u8d1f\u8f7d\u5747\u8861",id:"backend/Nginx/\u8d1f\u8f7d\u5747\u8861",title:"\u8d1f\u8f7d\u5747\u8861",description:"Nginx\u914d\u7f6e\u4e0a\u6e38\u670d\u52a1\u8d1f\u8f7d\u5747\u8861\uff08upstream\uff09",source:"@site/docs/backend/Nginx/\u8d1f\u8f7d\u5747\u8861.md",sourceDirName:"backend/Nginx",slug:"/backend/Nginx/\u8d1f\u8f7d\u5747\u8861",permalink:"/docs/backend/Nginx/\u8d1f\u8f7d\u5747\u8861",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Nginx/\u8d1f\u8f7d\u5747\u8861.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"2023\u5e744\u67081\u65e5",frontMatter:{},sidebar:"backEndSidebar",previous:{title:"\u7b80\u4ecb",permalink:"/docs/backend/Nginx/\u7b80\u4ecb"},next:{title:"\u7b80\u4ecb",permalink:"/docs/backend/Node/Koa/\u7b80\u4ecb"}},u={},o=[{value:"Nginx\u914d\u7f6e\u4e0a\u6e38\u670d\u52a1\u8d1f\u8f7d\u5747\u8861\uff08<code>upstream</code>\uff09",id:"nginx\u914d\u7f6e\u4e0a\u6e38\u670d\u52a1\u8d1f\u8f7d\u5747\u8861upstream",level:2},{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",level:3},{value:"max_fails",id:"max_fails",level:3},{value:"fail_timeout",id:"fail_timeout",level:3},{value:"proxy_connect_timeout",id:"proxy_connect_timeout",level:3},{value:"proxy_next_upstream_tries",id:"proxy_next_upstream_tries",level:3},{value:"proxy_next_upstream_timeout",id:"proxy_next_upstream_timeout",level:3},{value:"backup",id:"backup",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u8d1f\u8f7d\u5747\u8861\u5206\u914d\u7b56\u7565",id:"\u8d1f\u8f7d\u5747\u8861\u5206\u914d\u7b56\u7565",level:2},{value:"\u52a8\u9759\u5206\u79bb",id:"\u52a8\u9759\u5206\u79bb",level:3}],p={toc:o};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"nginx\u914d\u7f6e\u4e0a\u6e38\u670d\u52a1\u8d1f\u8f7d\u5747\u8861upstream"},"Nginx\u914d\u7f6e\u4e0a\u6e38\u670d\u52a1\u8d1f\u8f7d\u5747\u8861\uff08",(0,n.kt)("inlineCode",{parentName:"h2"},"upstream"),"\uff09"),(0,n.kt)("h3",{id:"\u57fa\u672c\u8bed\u6cd5"},"\u57fa\u672c\u8bed\u6cd5"),(0,n.kt)("p",null,"upstream\u7684\u57fa\u672c\u8bed\u6cd5\u5982\u4e0b\uff0c\u4e00\u4e2aupstream\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u540d\u79f0\uff0c\u8fd9\u4e2a\u540d\u79f0\u53ef\u4ee5\u5728server\u91cc\u9762\u5f53\u4f5cproxy host\u4f7f\u7528\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"upstream gateway {\n    server  localhost:9000;\n}\n")),(0,n.kt)("p",null,"\u4e00\u4e2aupstream\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2aserver\uff0c\u901a\u5e38\u60c5\u51b5\u4e0bNginx\u4f1a\u8f6e\u8be2\u6bcf\u4e00\u4e2aserver\uff0c\u4ece\u800c\u8fbe\u5230\u6700\u57fa\u672c\u7684\u8d1f\u8f7d\u5faa\u73af\u6548\u679c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"upstream gateway {\n    server  localhost:9000;\n    server  localhost:9001;\n}\n")),(0,n.kt)("h3",{id:"max_fails"},"max_fails"),(0,n.kt)("p",null,"max_fails\u662f\u6700\u591a\u51fa\u9519\u6570\u91cf\uff0c\u53ef\u4ee5\u4e3a\u6bcf\u4e00\u4e2aserver\u8bbe\u7f6e\u4e00\u4e2amax_fails\uff0c\u5982\u679c\u8bf7\u6c42server\u53d1\u751f\u4e86\u9519\u8bef\u5219max_fails\u4f1a\u52a0\u4e00\uff0c\u5982\u679c\u8bf7\u6c42server\u9519\u8bef\u6b21\u6570\u8fbe\u5230\u4e86max_fails\u540e\uff0cNginx\u4f1a\u6807\u8bb0\u8fd9\u4e2aserver\u4e3a\u6545\u969c\u72b6\u6001\uff0c\u540e\u9762\u5c31\u4e0d\u4f1a\u518d\u53bb\u8bf7\u6c42\u5b83\u4e86\u3002"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cmax_fails\u7684\u6b21\u6570\u662f1\u6b21\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"upstream gateway {\n    server  localhost:9000 max_fails=5;\n    server  localhost:9001 max_fails=3;\n}\n")),(0,n.kt)("h3",{id:"fail_timeout"},"fail_timeout"),(0,n.kt)("p",null,"fail_timeout\u662f\u6545\u969c\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\uff0c\u524d\u9762\u8bf4\u8fc7\u4e86max_fails\u662f\u8bf7\u6c42server\u9519\u8bef\u6b21\u6570\uff0c\u5982\u679c\u8fbe\u5230\u4e86max_fails\u6b21\u6570\u4e4b\u540eserver\u4f1a\u88ab\u6807\u8bb0\u4e3a\u6545\u969c\u72b6\u6001\uff0c\u90a3\u4e48\u591a\u957f\u65f6\u95f4\u4f1a\u91cd\u65b0\u5c1d\u8bd5\u5462\uff1f\u8fd9\u4e2afail_timeout\u5c31\u662f\u8fd9\u4e2a\u65f6\u95f4\u4e86\uff0c\u5728\u8fbe\u5230max_fails\u6b21\u6570\u4e4b\u540eserver\u8fdb\u5165\u6545\u969c\u72b6\u6001\uff0c\u800c\u540e\u5728fail_timeout\u65f6\u95f4\u4e4b\u540e\u4f1a\u88ab\u91cd\u65b0\u6807\u8bb0\u4e3a\u6b63\u5e38\u72b6\u6001\u3002"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cfail_timeout\u7684\u65f6\u95f4\u662f10\u79d2\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"upstream gateway {\n    server  localhost:9000 max_fails=5 fail_timeout=100;\n    server  localhost:9001 max_fails=3 fail_timeout=60;\n}\n")),(0,n.kt)("h3",{id:"proxy_connect_timeout"},"proxy_connect_timeout"),(0,n.kt)("p",null,"\u8fd9\u4e2aproxy_connect_timeout\u662f\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u5982\u679c\u8fde\u63a5\u4e0d\u5230\u5c31\u4f1a\u62a5\u9519\u4e86\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"proxy_connect_timeout 3s;\n")),(0,n.kt)("h3",{id:"proxy_next_upstream_tries"},"proxy_next_upstream_tries"),(0,n.kt)("p",null,"\u8fd9\u4e2aproxy_next_upstream_tries\u662f\u4e00\u4e2aupstream\u53cd\u5411\u4ee3\u7406\u7684\u91cd\u8bd5\u6b21\u6570\uff0c\u7b80\u5355\u8bf4\u5c31\u662f\u5982\u679c\u8bf7\u6c42server\u51fa\u9519\u7684\u6b21\u6570\u8fbe\u5230\u4e86proxy_next_upstream_tries\u7684\u6b21\u6570\u7684\u8bdd\uff0c\u5373\u4f7f\u6ca1\u6709\u8fbe\u5230max_fails\u7684\u6b21\u6570\uff0c\u5373\u4f7f\u540e\u9762\u8fd8\u6709\u6ca1\u6709\u5c1d\u8bd5\u8fc7\u7684server\uff0c\u90fd\u4e0d\u4f1a\u518d\u7ee7\u7eed\u5c1d\u8bd5\u4e86\uff0c\u800c\u662f\u76f4\u63a5\u62a5\u9519\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"proxy_next_upstream_tries 3;\n")),(0,n.kt)("h3",{id:"proxy_next_upstream_timeout"},"proxy_next_upstream_timeout"),(0,n.kt)("p",null,"\u8fd9\u4e2aproxy_next_upstream_timeout\u662f\u4e00\u4e2aupstream\u53cd\u5411\u4ee3\u7406\u7684\u6545\u969c\u7b49\u5f85\u65f6\u95f4\uff0c\u7b80\u5355\u8bf4\u5c31\u662f\u65e0\u8bbaupstream\u5185\u90e8\u5982\u4f55\u8fdb\u884c\u91cd\u8bd5\uff0c\u6240\u6709\u82b1\u8d39\u7684\u65f6\u95f4\u52a0\u5728\u4e00\u8d77\u8fbe\u5230\u4e86proxy_next_upstream_timeout\u65f6\u95f4\u7684\u8bdd\uff0c\u5c31\u4f1a\u76f4\u63a5\u62a5\u9519\uff0c\u4e0d\u4f1a\u518d\u7ee7\u7eed\u5c1d\u8bd5\u4e86\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"proxy_next_upstream_timeout 60s;\n")),(0,n.kt)("h3",{id:"backup"},"backup"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u662f\u5907\u7528\u670d\u52a1\u5668\u53c2\u6570\uff0c\u53ef\u4ee5\u4e3a\u4e00\u4e2aupstream\u8bbe\u7f6e\u4e00\u4e2abackup\u7684server\uff0c\u5728\u751f\u4ea7server\u5168\u90e8\u90fd\u51fa\u95ee\u9898\u4e4b\u540e\uff0c\u53ef\u4ee5\u81ea\u52a8\u5207\u6362\u5230\u5907\u7528server\u4e0a\uff0c\u4e3a\u56de\u590d\u670d\u52a1\u4e89\u53d6\u65f6\u95f4\u3002"),(0,n.kt)("p",null,"backup\u7684server\u4e0d\u540c\u4e8e\u5176\u4ed6server\uff0c\u5e73\u65f6\u662f\u4e0d\u627f\u8f7d\u8bf7\u6c42\u7684\uff0c\u6240\u4ee5\u5b83\u5e94\u8be5\u662f\u6bd4\u8f83\u7a7a\u95f2\u7684\u72b6\u6001\uff0c\u5e94\u6025\u518d\u5408\u9002\u4e0d\u8fc7\u4e86~~"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"upstream gateway {\n    server  localhost:9000 max_fails=5 fail_timeout=100;\n    server  localhost:9001 max_fails=3 fail_timeout=60;\n    server  localhost:9002 backup;\n}\n")),(0,n.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-conf"},"http {\n\n    upstream gateway {\n        server  localhost:9000 max_fails=5 fail_timeout=100;\n        server  localhost:9001 max_fails=3 fail_timeout=60;\n        server  localhost:9002 backup;\n    }\n\n    server {\n        listen 80;\n            server_name www.test.com;\n            location / {\n                proxy_pass http://gateway;\n            }\n    }\n}\n")),(0,n.kt)("h2",{id:"\u8d1f\u8f7d\u5747\u8861\u5206\u914d\u7b56\u7565"},"\u8d1f\u8f7d\u5747\u8861\u5206\u914d\u7b56\u7565"),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u91c7\u7528\u7684\u662f\u8f6e\u8be2\u7b56\u7565\uff0c\u5c06\u6240\u6709\u5ba2\u6237\u7aef\u8bf7\u6c42\u8f6e\u8be2\u5206\u914d\u7ed9\u670d\u52a1\u7aef\u3002\u8fd9\u79cd\u7b56\u7565\u662f\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u7684\uff0c\u4f46\u662f\u5982\u679c\u5176\u4e2d\u67d0\u4e00\u53f0\u670d\u52a1\u5668\u538b\u529b\u592a\u5927\uff0c\u51fa\u73b0\u5ef6\u8fdf\uff0c\u4f1a\u5f71\u54cd\u6240\u6709\u5206\u914d\u5728\u8fd9\u53f0\u670d\u52a1\u5668\u4e0b\u7684\u7528\u6237\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Nginx\u652f\u6301\u7684\u8d1f\u8f7d\u5747\u8861\u8c03\u5ea6\u7b97\u6cd5\u65b9\u5f0f\u5982\u4e0b")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"weight\u8f6e\u8be2(\u9ed8\u8ba4\uff0c\u5e38\u7528)"))),(0,n.kt)("p",null,"\u63a5\u6536\u5230\u7684\u8bf7\u6c42\u6309\u7167\u6743\u91cd\u5206\u914d\u5230\u4e0d\u540c\u7684\u540e\u7aef\u670d\u52a1\u5668\uff0c\u5373\u4f7f\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u67d0\u4e00\u53f0\u540e\u7aef\u670d\u52a1\u5668\u5b95\u673a\uff0cNginx\u4f1a\u81ea\u52a8\u5c06\u8be5\u670d\u52a1\u5668\u5254\u9664\u51fa\u961f\u5217\uff0c\u8bf7\u6c42\u53d7\u7406\u60c5\u51b5\u4e0d\u4f1a\u53d7\u5230\u4efb\u4f55\u5f71\u54cd\u3002\u8fd9\u79cd\u65b9\u5f0f\u4e0b\uff0c\u53ef\u4ee5\u7ed9\u4e0d\u540c\u7684\u540e\u7aef\u670d\u52a1\u5668\u8bbe\u7f6e\u4e00\u4e2a\u6743\u91cd\u503c(weight)\uff0c\u7528\u4e8e\u8c03\u6574\u4e0d\u540c\u7684\u670d\u52a1\u5668\u4e0a\u8bf7\u6c42\u7684\u5206\u914d\u7387\uff1b\u6743\u91cd\u6570\u636e\u8d8a\u5927\uff0c\u88ab\u5206\u914d\u5230\u8bf7\u6c42\u7684\u51e0\u7387\u8d8a\u5927\uff1b\u8be5\u6743\u91cd\u503c\uff0c\u4e3b\u8981\u662f\u9488\u5bf9\u5b9e\u9645\u5de5\u4f5c\u73af\u5883\u4e2d\u4e0d\u540c\u7684\u540e\u7aef\u670d\u52a1\u5668\u786c\u4ef6\u914d\u7f6e\u8fdb\u884c\u8c03\u6574\u7684\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ip_hash\uff08\u5e38\u7528\uff09"))),(0,n.kt)("p",null,"\u6bcf\u4e2a\u8bf7\u6c42\u6309\u7167\u53d1\u8d77\u5ba2\u6237\u7aef\u7684ip\u7684hash\u7ed3\u679c\u8fdb\u884c\u5339\u914d\uff0c\u8fd9\u6837\u7684\u7b97\u6cd5\u4e0b\u4e00\u4e2a\u56fa\u5b9aip\u5730\u5740\u7684\u5ba2\u6237\u7aef\u603b\u4f1a\u8bbf\u95ee\u5230\u540c\u4e00\u4e2a\u540e\u7aef\u670d\u52a1\u5668\uff0c\u8fd9\u4e5f\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u89e3\u51b3\u4e86\u96c6\u7fa4\u90e8\u7f72\u73af\u5883\u4e0bsession\u5171\u4eab\u7684\u95ee\u9898\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"fair"))),(0,n.kt)("p",null,"\u667a\u80fd\u8c03\u6574\u8c03\u5ea6\u7b97\u6cd5\uff0c\u52a8\u6001\u7684\u6839\u636e\u540e\u7aef\u670d\u52a1\u5668\u7684\u8bf7\u6c42\u5904\u7406\u5230\u54cd\u5e94\u7684\u65f6\u95f4\u8fdb\u884c\u5747\u8861\u5206\u914d\uff0c\u54cd\u5e94\u65f6\u95f4\u77ed\u5904\u7406\u6548\u7387\u9ad8\u7684\u670d\u52a1\u5668\u5206\u914d\u5230\u8bf7\u6c42\u7684\u6982\u7387\u9ad8\uff0c\u54cd\u5e94\u65f6\u95f4\u957f\u5904\u7406\u6548\u7387\u4f4e\u7684\u670d\u52a1\u5668\u5206\u914d\u5230\u7684\u8bf7\u6c42\u5c11\uff1b\u7ed3\u5408\u4e86\u524d\u4e24\u8005\u7684\u4f18\u70b9\u7684\u4e00\u79cd\u8c03\u5ea6\u7b97\u6cd5\u3002\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662fNginx\u9ed8\u8ba4\u4e0d\u652f\u6301fair\u7b97\u6cd5\uff0c\u5982\u679c\u8981\u4f7f\u7528\u8fd9\u79cd\u8c03\u5ea6\u7b97\u6cd5\uff0c\u8bf7\u5b89\u88c5upstream_fair\u6a21\u5757\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"url_hash"))),(0,n.kt)("p",null,"\u6309\u7167\u8bbf\u95ee\u7684url\u7684hash\u7ed3\u679c\u5206\u914d\u8bf7\u6c42\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u7684url\u4f1a\u6307\u5411\u540e\u7aef\u56fa\u5b9a\u7684\u67d0\u4e2a\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u5728Nginx\u4f5c\u4e3a\u9759\u6001\u670d\u52a1\u5668\u7684\u60c5\u51b5\u4e0b\u63d0\u9ad8\u7f13\u5b58\u6548\u7387\u3002\u540c\u6837\u8981\u6ce8\u610fNginx\u9ed8\u8ba4\u4e0d\u652f\u6301\u8fd9\u79cd\u8c03\u5ea6\u7b97\u6cd5\uff0c\u8981\u4f7f\u7528\u7684\u8bdd\u9700\u8981\u5b89\u88c5Nginx\u7684hash\u8f6f\u4ef6\u5305\u3002"),(0,n.kt)("h3",{id:"\u52a8\u9759\u5206\u79bb"},"\u52a8\u9759\u5206\u79bb"),(0,n.kt)("p",null,"\u4e3a\u4e86\u52a0\u5feb\u670d\u52a1\u5668\u7684\u89e3\u6790\u901f\u5ea6\uff0c\u53ef\u4ee5\u628a\u52a8\u6001\u9875\u9762\u548c\u9759\u6001\u9875\u9762\u4ea4\u7ed9\u4e0d\u540c\u7684\u670d\u52a1\u5668\u6765\u89e3\u6790\uff0c\u52a0\u5feb\u89e3\u6790\u901f\u5ea6\uff0c\u964d\u4f4e\u539f\u6765\u5355\u4e2a\u670d\u52a1\u5668\u7684\u538b\u529b\u3002"))}m.isMDXComponent=!0}}]);