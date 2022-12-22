"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4469],{40041:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));t(16758);const s={title:"Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898"},r=void 0,l={unversionedId:"backend/Nginx/Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898",id:"backend/Nginx/Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898",title:"Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898",description:"\u914d\u7f6eNginx http\u81ea\u52a8\u8df3\u8f6chttps",source:"@site/docs/backend/Nginx/Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898.md",sourceDirName:"backend/Nginx",slug:"/backend/Nginx/Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898",permalink:"/en/docs/backend/Nginx/Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/backend/Nginx/Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898.md",tags:[],version:"current",lastUpdatedAt:1671687717,formattedLastUpdatedAt:"Dec 22, 2022",frontMatter:{title:"Nginx\u6280\u5de7\u548c\u4e00\u4e9b\u95ee\u9898"},sidebar:"backEndSidebar",previous:{title:"rest_framework\u57fa\u672c\u64cd\u4f5c",permalink:"/en/docs/backend/Django/rest_framework"},next:{title:"Nginx\u8f6c\u53d1",permalink:"/en/docs/backend/Nginx/Nginx\u8f6c\u53d1"}},c={},d=[{value:"\u914d\u7f6e<code>Nginx</code> <code>http</code>\u81ea\u52a8\u8df3\u8f6c<code>https</code>",id:"\u914d\u7f6enginx-http\u81ea\u52a8\u8df3\u8f6chttps",level:2},{value:"Nginx\u8f6c\u53d1\u540e\u4f1a\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u53bb\u6389\u8bf7\u6c42\u5934\u4e2d\u5e26\u6709\u4e0b\u5212\u7ebf\u7684\u53c2\u6570",id:"nginx\u8f6c\u53d1\u540e\u4f1a\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u53bb\u6389\u8bf7\u6c42\u5934\u4e2d\u5e26\u6709\u4e0b\u5212\u7ebf\u7684\u53c2\u6570",level:2},{value:"Nginx \u4e2d\u6587\u8def\u5f84\u4e71\u7801\u95ee\u9898",id:"nginx-\u4e2d\u6587\u8def\u5f84\u4e71\u7801\u95ee\u9898",level:2}],o={toc:d};function g(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,i.Z)({},o,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u914d\u7f6enginx-http\u81ea\u52a8\u8df3\u8f6chttps"},"\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"h2"},"Nginx")," ",(0,a.kt)("inlineCode",{parentName:"h2"},"http"),"\u81ea\u52a8\u8df3\u8f6c",(0,a.kt)("inlineCode",{parentName:"h2"},"https")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf",metastring:'{3-5} title="nginx.conf"',"{3-5}":!0,title:'"nginx.conf"'},"server{\n    ...\n    if ($scheme = http) {\n        rewrite ^(.*) https://$host$1 permanent;\n    }\n    ...\n}\n\n")),(0,a.kt)("h2",{id:"nginx\u8f6c\u53d1\u540e\u4f1a\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u53bb\u6389\u8bf7\u6c42\u5934\u4e2d\u5e26\u6709\u4e0b\u5212\u7ebf\u7684\u53c2\u6570"},"Nginx\u8f6c\u53d1\u540e\u4f1a\u9ed8\u8ba4\u4f1a\u81ea\u52a8\u53bb\u6389\u8bf7\u6c42\u5934\u4e2d\u5e26\u6709\u4e0b\u5212\u7ebf\u7684\u53c2\u6570"),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\u5728nginx\u91cc\u7684nginx.conf\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684http\u90e8\u5206\u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bb0\u5f97\u5e26\u4e0a\u7ed3\u5c3e\u7684\u5206\u53f7\uff01")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"underscores_in_headers on; \uff08\u9ed8\u8ba4 underscores_in_headers \u4e3aoff\uff09\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20200716093635506.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("h2",{id:"nginx-\u4e2d\u6587\u8def\u5f84\u4e71\u7801\u95ee\u9898"},"Nginx \u4e2d\u6587\u8def\u5f84\u4e71\u7801\u95ee\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf",metastring:"{5}","{5}":!0},"server {\n    listen 80;\n    #listen [::]:80 default_server;\n\n    charset utf-8; \n    # SSL configuration\n    #\n    listen 443 ssl;\n    #listen [::]:443 ssl default_server;\n\n}\n")))}g.isMDXComponent=!0}}]);