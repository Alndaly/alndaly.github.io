"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2840],{72714:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var a=s(87462),l=(s(67294),s(3905));s(16758);const n={},o="SSH \u4e09\u6b65\u89e3\u51b3\u514d\u5bc6\u767b\u5f55",r={unversionedId:"others/ssh/login-without-password",id:"others/ssh/login-without-password",title:"SSH \u4e09\u6b65\u89e3\u51b3\u514d\u5bc6\u767b\u5f55",description:"\u5ba2\u6237\u7aef\u751f\u6210\u516c\u79c1\u94a5",source:"@site/docs/others/ssh/login-without-password.md",sourceDirName:"others/ssh",slug:"/others/ssh/login-without-password",permalink:"/en/docs/others/ssh/login-without-password",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/ssh/login-without-password.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{},sidebar:"anyThing",previous:{title:"python-skill",permalink:"/en/docs/others/python-skill"},next:{title:"wget",permalink:"/en/docs/others/wget"}},i={},p=[{value:"\u5ba2\u6237\u7aef\u751f\u6210\u516c\u79c1\u94a5",id:"\u5ba2\u6237\u7aef\u751f\u6210\u516c\u79c1\u94a5",level:2},{value:"\u4e0a\u4f20\u516c\u94a5\u5230\u670d\u52a1\u5668",id:"\u4e0a\u4f20\u516c\u94a5\u5230\u670d\u52a1\u5668",level:2},{value:"\u6d4b\u8bd5\u514d\u5bc6\u767b\u5f55",id:"\u6d4b\u8bd5\u514d\u5bc6\u767b\u5f55",level:2}],d={toc:p};function h(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ssh-\u4e09\u6b65\u89e3\u51b3\u514d\u5bc6\u767b\u5f55"},"SSH \u4e09\u6b65\u89e3\u51b3\u514d\u5bc6\u767b\u5f55"),(0,l.kt)("h2",{id:"\u5ba2\u6237\u7aef\u751f\u6210\u516c\u79c1\u94a5"},"\u5ba2\u6237\u7aef\u751f\u6210\u516c\u79c1\u94a5"),(0,l.kt)("p",null,"\u672c\u5730\u5ba2\u6237\u7aef\u751f\u6210\u516c\u79c1\u94a5\uff1a\uff08\u4e00\u8def\u56de\u8f66\u9ed8\u8ba4\u5373\u53ef\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u547d\u4ee4\u4f1a\u5728\u7528\u6237\u76ee\u5f55.ssh\u6587\u4ef6\u5939\u4e0b\u521b\u5efa\u516c\u79c1\u94a5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/.ssh\nls\n")),(0,l.kt)("p",null,"\u5bf9\u5e94\u4e0b\u4f1a\u591a\u51fa\u4e24\u4e2a\u5bc6\u94a5\uff1a"),(0,l.kt)("p",null,"id_rsa \uff08\u79c1\u94a5\uff09"),(0,l.kt)("p",null,"id_rsa.pub (\u516c\u94a5)"),(0,l.kt)("h2",{id:"\u4e0a\u4f20\u516c\u94a5\u5230\u670d\u52a1\u5668"},"\u4e0a\u4f20\u516c\u94a5\u5230\u670d\u52a1\u5668"),(0,l.kt)("p",null,"\u8fd9\u91cc\u6d4b\u8bd5\u7528\u7684\u670d\u52a1\u5668\u5730\u5740\u4e3a\uff1a192.168.235.22\n\u7528\u6237\u4e3a\uff1aroot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.235.22\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u8fd9\u6761\u547d\u4ee4\u662f\u5199\u5230\u670d\u52a1\u5668\u4e0a\u7684ssh\u76ee\u5f55\u4e0b\u53bb\u4e86"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/.ssh\nvim authorized_keys\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5ba2\u6237\u7aef\u5199\u5165\u5230\u670d\u52a1\u5668\u7684 id_rsa.pub \uff08\u516c\u94a5\uff09\u5185\u5bb9\u3002"),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u514d\u5bc6\u767b\u5f55"},"\u6d4b\u8bd5\u514d\u5bc6\u767b\u5f55"),(0,l.kt)("p",null,"\u5ba2\u6237\u7aef\u901a\u8fc7ssh\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u5c31\u53ef\u4ee5\u514d\u5bc6\u767b\u5f55\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ssh root@192.168.235.22\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u5982\u679c\u672c\u5730\u6709\u591a\u4e2a\u5bc6\u94a5\uff0c\u5219\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"-i"),"\u6307\u5b9a\u5bc6\u94a5\u8fdb\u884c\u514d\u5bc6\u767b\u5f55"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"ssh root@192.168.235.22 -i path/to/rsa\n"))))}h.isMDXComponent=!0}}]);