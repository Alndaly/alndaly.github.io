"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9620],{14237:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));t(16758);const r={},o=void 0,l={unversionedId:"backend/Nginx/\u57fa\u7840\u914d\u7f6e",id:"backend/Nginx/\u57fa\u7840\u914d\u7f6e",title:"\u57fa\u7840\u914d\u7f6e",description:"Nginx\u57fa\u7840\u914d\u7f6e",source:"@site/docs/backend/Nginx/\u57fa\u7840\u914d\u7f6e.md",sourceDirName:"backend/Nginx",slug:"/backend/Nginx/\u57fa\u7840\u914d\u7f6e",permalink:"/en/docs/backend/Nginx/\u57fa\u7840\u914d\u7f6e",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Nginx/\u57fa\u7840\u914d\u7f6e.md",tags:[],version:"current",lastUpdatedAt:1681142816,formattedLastUpdatedAt:"Apr 10, 2023",frontMatter:{},sidebar:"backEndSidebar",previous:{title:"\u4e00\u4e9b\u95ee\u9898",permalink:"/en/docs/backend/Nginx/\u4e00\u4e9b\u95ee\u9898"},next:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/en/docs/backend/Nginx/\u5e38\u7528\u547d\u4ee4"}},d={},s=[{value:"Nginx\u57fa\u7840\u914d\u7f6e",id:"nginx\u57fa\u7840\u914d\u7f6e",level:2}],c={toc:s};function p(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"nginx\u57fa\u7840\u914d\u7f6e"},"Nginx\u57fa\u7840\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"#\u6253\u5f00\u4e3b\u914d\u7f6e\u6587\u4ef6\uff0c\u82e5\u4f60\u662f\u7528lnmp\u73af\u5883\u5b89\u88c5vim /usr/local/nginx/conf/nginx.conf\n----------------------------------------\nuser #\u8bbe\u7f6enginx\u670d\u52a1\u7684\u7cfb\u7edf\u4f7f\u7528\u7528\u6237\nworker_processes #\u5de5\u4f5c\u8fdb\u7a0b\u6570 \u4e00\u822c\u60c5\u51b5\u4e0eCPU\u6838\u6570\u4fdd\u6301\u4e00\u81f4\nerror_log #nginx\u7684\u9519\u8bef\u65e5\u5fd7\npid #nginx\u542f\u52a8\u65f6\u7684pid\nevents {    \n    worker_connections#\u6bcf\u4e2a\u8fdb\u7a0b\u5141\u8bb8\u6700\u5927\u8fde\u63a5\u6570    \n    use#nginx\u4f7f\u7528\u7684\u5185\u6838\u6a21\u578b\n}\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"nginx"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u670d\u52a1\uff0c\u5728\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"nginx.conf"),"\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"\u533a\u57df\u5185\uff0c\u914d\u7f6e\u65e0\u6570\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"server"),"\uff0c\u6bcf\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"server"),"\u5bf9\u5e94\u8fd9\u4e00\u4e2a\u865a\u62df\u4e3b\u673a\u6216\u8005\u57df\u540d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"http {\n    ... ...        #\u540e\u9762\u518d\u8be6\u7ec6\u4ecb\u7ecd http \u914d\u7f6e\u9879\u76ee    \n        server {        \n            listen 80                          #\u76d1\u542c\u7aef\u53e3;        \n            server_name localhost              #\u5730\u5740        \n            location / {                       #\u8bbf\u95ee\u9996\u9875\u8def\u5f84            \n                root /xxx/xxx/index.html       #\u9ed8\u8ba4\u76ee\u5f55            \n                index index.html index.htm     #\u9ed8\u8ba4\u6587\u4ef6        \n            }        \n            error_page  500 504   /50x.html    #\u5f53\u51fa\u73b0\u4ee5\u4e0a\u72b6\u6001\u7801\u65f6\u4ece\u65b0\u5b9a\u4e49\u523050x.html        \n            location = /50x.html {             #\u5f53\u8bbf\u95ee50x.html\u65f6            \n                root /xxx/xxx/html             #50x.html \u9875\u9762\u6240\u5728\u4f4d\u7f6e        \n            }    \n        }    \n        server {        \n            ... ...    \n        }\n}\n")))}p.isMDXComponent=!0}}]);