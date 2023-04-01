"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9881],{60044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>k,toc:()=>u});var l=n(87462),i=(n(67294),n(3905));n(16758);const a={},r=void 0,k={unversionedId:"backend/Nginx/\u7b80\u4ecb",id:"backend/Nginx/\u7b80\u4ecb",title:"\u7b80\u4ecb",description:"Nginx\u8054\u5408\u521b\u59cb\u4eba\u5b89\u5fb7\u9c81\xb7\u963f\u5217\u514b\u8c22\u592b\uff08Andrew Alexeev\uff09\u66fe\u8bf4\uff1aNginx\u662f\u4e3a\u5bf9Apache\u6027\u80fd\u4e0d\u6ee1\u610f\u7684\u4eba\u800c\u6784\u5efa\u7684\u3002\u968f\u7740Internet\u9700\u6c42\u7684\u53d8\u5316\uff0cWeb\u670d\u52a1\u5668\u7684\u5de5\u4f5c\u4e5f\u5728\u53d8\u5316\u3002Nginx\u7684\u6784\u5efa\u6bd4\u4ee5\u5f80\u4efb\u4f55\u65f6\u5019\u90fd\u66f4\u6709\u6548\u7387\uff0c\u66f4\u53ef\u6269\u5c55\uff0c\u66f4\u5b89\u5168\uff0c\u66f4\u5f3a\u5927\u3002",source:"@site/docs/backend/Nginx/\u7b80\u4ecb.md",sourceDirName:"backend/Nginx",slug:"/backend/Nginx/\u7b80\u4ecb",permalink:"/en/docs/backend/Nginx/\u7b80\u4ecb",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/backend/Nginx/\u7b80\u4ecb.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{},sidebar:"backEndSidebar",previous:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/en/docs/backend/Nginx/\u5e38\u7528\u547d\u4ee4"},next:{title:"\u8d1f\u8f7d\u5747\u8861",permalink:"/en/docs/backend/Nginx/\u8d1f\u8f7d\u5747\u8861"}},p={},u=[{value:"<strong>Nginx\xa0\u57fa\u672c\u6982\u5ff5</strong>",id:"nginx\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u6b63\u5411\u4ee3\u7406\u4e0e\u53cd\u5411\u4ee3\u7406",id:"\u6b63\u5411\u4ee3\u7406\u4e0e\u53cd\u5411\u4ee3\u7406",level:3},{value:"<strong>Nginx\u6709\u5982\u4e0b\u4f18\u52bf\uff1a</strong>",id:"nginx\u6709\u5982\u4e0b\u4f18\u52bf",level:2},{value:"IO\u591a\u8def\u590d\u7528epoll\uff08IO\u590d\u7528\uff09",id:"io\u591a\u8def\u590d\u7528epollio\u590d\u7528",level:3},{value:"\u8f7b\u91cf\u7ea7",id:"\u8f7b\u91cf\u7ea7",level:3},{value:"CPU\u4eb2\u548c",id:"cpu\u4eb2\u548c",level:3}],o={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Nginx\u8054\u5408\u521b\u59cb\u4eba\u5b89\u5fb7\u9c81\xb7\u963f\u5217\u514b\u8c22\u592b\uff08Andrew Alexeev\uff09\u66fe\u8bf4\uff1aNginx\u662f\u4e3a\u5bf9Apache\u6027\u80fd\u4e0d\u6ee1\u610f\u7684\u4eba\u800c\u6784\u5efa\u7684\u3002\u968f\u7740Internet\u9700\u6c42\u7684\u53d8\u5316\uff0cWeb\u670d\u52a1\u5668\u7684\u5de5\u4f5c\u4e5f\u5728\u53d8\u5316\u3002Nginx\u7684\u6784\u5efa\u6bd4\u4ee5\u5f80\u4efb\u4f55\u65f6\u5019\u90fd\u66f4\u6709\u6548\u7387\uff0c\u66f4\u53ef\u6269\u5c55\uff0c\u66f4\u5b89\u5168\uff0c\u66f4\u5f3a\u5927\u3002")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Nginx \u4f7f\u7528\u57fa\u4e8e\u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784\uff0c\u4f7f\u5f97\u5176\u53ef\u4ee5\u652f\u6301\u6570\u4ee5\u767e\u4e07\u7ea7\u522b\u7684 TCP \u8fde\u63a5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9ad8\u5ea6\u7684\u6a21\u5757\u5316\u548c\u81ea\u7531\u8f6f\u4ef6\u8bb8\u53ef\u8bc1\u4f7f\u5f97\u7b2c\u4e09\u65b9\u6a21\u5757\u5c42\u51fa\u4e0d\u7a77\uff08\u8fd9\u662f\u4e2a\u5f00\u6e90\u7684\u65f6\u4ee3\u554a\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"Nginx \u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u670d\u52a1\u5668\uff0c\u53ef\u4ee5\u8fd0\u884c\u5728 Linux\u3001Windows\u3001FreeBSD\u3001Solaris\u3001AIX\u3001Mac OS \u7b49\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b\u4f18\u79c0\u7684\u8bbe\u8ba1\u5e26\u6765\u7684\u6781\u5927\u7684\u7a33\u5b9a\u6027\u3002"))),(0,i.kt)("h2",{id:"nginx\u57fa\u672c\u6982\u5ff5"},(0,i.kt)("strong",{parentName:"h2"},"Nginx\xa0\u57fa\u672c\u6982\u5ff5")),(0,i.kt)("h3",{id:"\u6b63\u5411\u4ee3\u7406\u4e0e\u53cd\u5411\u4ee3\u7406"},"\u6b63\u5411\u4ee3\u7406\u4e0e\u53cd\u5411\u4ee3\u7406"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u7406\u89e3\uff0c\u9996\u5148\u5148\u6765\u4e86\u89e3\u4e00\u4e0b\u4e00\u4e9b\u57fa\u7840\u77e5\u8bc6\uff0cnginx\u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\u90a3\u4e48\u4ec0\u4e48\u662f\u53cd\u5411\u4ee3\u7406\u5462\uff1f"),(0,i.kt)("p",null,"\u4ee3\u7406\u662f\u5728\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u4e4b\u95f4\u5047\u8bbe\u7684\u4e00\u5c42\u670d\u52a1\u5668\uff0c\u4ee3\u7406\u5c06\u63a5\u6536\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u5e76\u5c06\u5b83\u8f6c\u53d1\u7ed9\u670d\u52a1\u5668\uff0c\u7136\u540e\u5c06\u670d\u52a1\u7aef\u7684\u54cd\u5e94\u8f6c\u53d1\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("p",null,"\u4e0d\u7ba1\u662f\u6b63\u5411\u4ee3\u7406\u8fd8\u662f\u53cd\u5411\u4ee3\u7406\uff0c\u5b9e\u73b0\u7684\u90fd\u662f\u4e0a\u9762\u7684\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5bf9OSI \u4e03\u5c42\u6a21\u578b\u4e0e TCP/IP \u56db\u5c42\u6a21\u578b\u4e0d\u662f\u5f88\u719f\u6089\u53ef\u4ee5\u518d\u56de\u987e\u4e0b"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6b63\u5411\u4ee3\u7406")),(0,i.kt)("p",null,"\u6b63\u5411\u4ee3\u7406\uff08forward\uff09\u610f\u601d\u662f\u4e00\u4e2a\u4f4d\u4e8e\u5ba2\u6237\u7aef\u548c\u539f\u59cb\u670d\u52a1\u5668 (origin server) \u4e4b\u95f4\u7684\u670d\u52a1\u5668\uff0c\u4e3a\u4e86\u4ece\u539f\u59cb\u670d\u52a1\u5668\u53d6\u5f97\u5185\u5bb9\uff0c\u5ba2\u6237\u7aef\u5411\u4ee3\u7406\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\u5e76\u6307\u5b9a\u76ee\u6807 (\u539f\u59cb\u670d\u52a1\u5668)\uff0c\u7136\u540e\u4ee3\u7406\u5411\u539f\u59cb\u670d\u52a1\u5668\u8f6c\u4ea4\u8bf7\u6c42\u5e76\u5c06\u83b7\u5f97\u7684\u5185\u5bb9\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,i.kt)("p",null,"\u6b63\u5411\u4ee3\u7406\u662f\u4e3a\u6211\u4eec\u670d\u52a1\u7684\uff0c\u5373\u4e3a\u5ba2\u6237\u7aef\u670d\u52a1\u7684\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u6839\u636e\u6b63\u5411\u4ee3\u7406\u8bbf\u95ee\u5230\u5b83\u672c\u8eab\u65e0\u6cd5\u8bbf\u95ee\u5230\u7684\u670d\u52a1\u5668\u8d44\u6e90\u3002"),(0,i.kt)("p",null,"\u6b63\u5411\u4ee3\u7406\u5bf9\u6211\u4eec\u662f\u900f\u660e\u7684\uff0c\u5bf9\u670d\u52a1\u7aef\u662f\u975e\u900f\u660e\u7684\uff0c\u5373\u670d\u52a1\u7aef\u5e76\u4e0d\u77e5\u9053\u81ea\u5df1\u6536\u5230\u7684\u662f\u6765\u81ea\u4ee3\u7406\u7684\u8bbf\u95ee\u8fd8\u662f\u6765\u81ea\u771f\u5b9e\u5ba2\u6237\u7aef\u7684\u8bbf\u95ee\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u53cd\u5411\u4ee3\u7406")),(0,i.kt)("p",null,"\u53cd\u5411\u4ee3\u7406\uff08Reverse Proxy\uff09\u65b9\u5f0f\u662f\u6307\u4ee5\u4ee3\u7406\u670d\u52a1\u5668\u6765\u63a5\u53d7 internet \u4e0a\u7684\u8fde\u63a5\u8bf7\u6c42\uff0c\u7136\u540e\u5c06\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u5185\u90e8\u7f51\u7edc\u4e0a\u7684\u670d\u52a1\u5668\uff0c\u5e76\u5c06\u4ece\u670d\u52a1\u5668\u4e0a\u5f97\u5230\u7684\u7ed3\u679c\u8fd4\u56de\u7ed9 internet \u4e0a\u8bf7\u6c42\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\uff0c\u6b64\u65f6\u4ee3\u7406\u670d\u52a1\u5668\u5bf9\u5916\u5c31\u8868\u73b0\u4e3a\u4e00\u4e2a\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\u3002"),(0,i.kt)("p",null,"\u53cd\u5411\u4ee3\u7406\u662f\u4e3a\u670d\u52a1\u7aef\u670d\u52a1\u7684\uff0c\u53cd\u5411\u4ee3\u7406\u53ef\u4ee5\u5e2e\u52a9\u670d\u52a1\u5668\u63a5\u6536\u6765\u81ea\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\uff0c\u5e2e\u52a9\u670d\u52a1\u5668\u505a\u8bf7\u6c42\u8f6c\u53d1\uff0c\u8d1f\u8f7d\u5747\u8861\u7b49\u3002"),(0,i.kt)("p",null,"\u53cd\u5411\u4ee3\u7406\u5bf9\u670d\u52a1\u7aef\u662f\u900f\u660e\u7684\uff0c\u5bf9\u6211\u4eec\u662f\u975e\u900f\u660e\u7684\uff0c\u5373\u6211\u4eec\u5e76\u4e0d\u77e5\u9053\u81ea\u5df1\u8bbf\u95ee\u7684\u662f\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u800c\u670d\u52a1\u5668\u77e5\u9053\u53cd\u5411\u4ee3\u7406\u5728\u4e3a\u4ed6\u670d\u52a1\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u9009\u62e9Nginx")),(0,i.kt)("p",null,"Nginx\u662f\u4e00\u6b3e\u81ea\u7531\u7684\u3001\u5f00\u6e90\u7684\u3001\u9ad8\u6027\u80fd\u7684HTTP\u670d\u52a1\u5668\u548c\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\uff1b\u540c\u65f6\u4e5f\u662f\u4e00\u4e2aIMAP\u3001POP3\u3001SMTP\u4ee3\u7406\u670d\u52a1\u5668\uff1bNginx\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2aHTTP\u670d\u52a1\u5668\u8fdb\u884c\u7f51\u7ad9\u7684\u53d1\u5e03\u5904\u7406\uff0c\u53e6\u5916Nginx\u53ef\u4ee5\u4f5c\u4e3a\u53cd\u5411\u4ee3\u7406\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u7684\u5b9e\u73b0\u3002\u5728Nginx\u7f51\u7ad9\u4e0a\uff0c\u5176\u529f\u80fd\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HTTP\u548cHTTPS\uff08TLS / SSL / SNI\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u8d85\u5feb\u901f\u7684Web\u670d\u52a1\u5668\u7528\u4e8e\u9759\u6001\u5185\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"FastCGI\uff0cWSGI\uff0cSCGI\u7528\u4e8e\u52a8\u6001\u5185\u5bb9"),(0,i.kt)("li",{parentName:"ul"},"\u5177\u6709\u8d1f\u8f7d\u5e73\u8861\u548c\u7f13\u5b58\u529f\u80fd\u7684\u52a0\u901fWeb\u4ee3\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u95f4\u65ad\u5b9e\u65f6\u4e8c\u8fdb\u5236\u5347\u7ea7\u548c\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u538b\u7f29\u548c\u5185\u5bb9\u8fc7\u6ee4\u5668"),(0,i.kt)("li",{parentName:"ul"},"\u865a\u62df\u4e3b\u673a"),(0,i.kt)("li",{parentName:"ul"},"FLV\u548cMP4\u7684\u5a92\u4f53\u6d41"),(0,i.kt)("li",{parentName:"ul"},"\u5e26\u5bbd\u548c\u8fde\u63a5\u7b56\u7565"),(0,i.kt)("li",{parentName:"ul"},"\u5168\u9762\u7684\u8bbf\u95ee\u63a7\u5236"),(0,i.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u65e5\u5fd7"),(0,i.kt)("li",{parentName:"ul"},"\u5d4c\u5165\u5f0f\u811a\u672c"),(0,i.kt)("li",{parentName:"ul"},"\u5e26\u6709TLS\u7684SMTP / IMAP / POP3\u7684\u90ae\u4ef6\u4ee3\u7406"),(0,i.kt)("li",{parentName:"ul"},"\u903b\u8f91\uff0c\u7075\u6d3b\uff0c\u53ef\u6269\u5c55\u7684\u914d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u5728Linux\uff0cFreeBSD\uff0cMac OS X\uff0cSolaris\u548cWindows\u4e0a\u8fd0\u884c")),(0,i.kt)("h2",{id:"nginx\u6709\u5982\u4e0b\u4f18\u52bf"},(0,i.kt)("strong",{parentName:"h2"},"Nginx\u6709\u5982\u4e0b\u4f18\u52bf\uff1a")),(0,i.kt)("h3",{id:"io\u591a\u8def\u590d\u7528epollio\u590d\u7528"},"IO\u591a\u8def\u590d\u7528epoll\uff08IO\u590d\u7528\uff09"),(0,i.kt)("p",null,"\u5982\u4f55\u7406\u89e3\u5462\uff1f\u4e3e\u4e2a\u4f8b\u5b50\u5427\uff01"),(0,i.kt)("p",null,"\u6709A\u3001B\u3001C\u4e09\u4e2a\u8001\u5e08\uff0c\u4ed6\u4eec\u90fd\u9047\u5230\u4e00\u4e2a\u96be\u9898\uff0c\u8981\u5e2e\u52a9\u4e00\u4e2a\u73ed\u7ea7\u7684\u5b66\u751f\u89e3\u51b3\u8bfe\u5802\u4f5c\u4e1a\u3002\u8001\u5e08A\u91c7\u7528\u4ece\u7b2c\u4e00\u6392\u5f00\u59cb\u4e00\u4e2a\u5b66\u751f\u4e00\u4e2a\u5b66\u751f\u8f6e\u6d41\u89e3\u7b54\u7684\u65b9\u5f0f\u53bb\u56de\u7b54\u95ee\u9898\uff0c\u8001\u5e08A\u6d6a\u8d39\u4e86\u5f88\u591a\u65f6\u95f4\uff0c\u5e76\u4e14\u6709\u7684\u5b66\u751f\u4f5c\u4e1a\u8fd8\u6ca1\u6709\u5b8c\u6210\u5462\uff0c\u8001\u5e08\u5c31\u6765\u4e86\uff0c\u53cd\u53cd\u590d\u590d\u6548\u7387\u6781\u6162\u3002\u8001\u5e08B\u662f\u4e00\u4e2a\u5fcd\u8005\uff0c\u4ed6\u53d1\u73b0\u8001\u5e08A\u7684\u65b9\u6cd5\u884c\u4e0d\u901a\uff0c\u4e8e\u662f\u4ed6\u4f7f\u7528\u4e86\u5f71\u5206\u8eab\u672f\uff0c\u5206\u8eab\u51fa\u597d\u51e0\u4e2a\u81ea\u5df1\u540c\u4e00\u65f6\u95f4\u53bb\u5e2e\u597d\u51e0\u4e2a\u540c\u5b66\u56de\u7b54\u95ee\u9898\uff0c\u6700\u540e\u8fd8\u6ca1\u56de\u7b54\u5b8c\uff0c\u8001\u5e08B\u6d88\u8017\u5149\u4e86\u80fd\u91cf\u7d2f\u5012\u4e86\u3002"),(0,i.kt)("p",null,"\u8001\u5e08C\u6bd4\u8f83\u7cbe\u660e\uff0c\u4ed6\u544a\u8bc9\u5b66\u751f\uff0c\u8c01\u5b8c\u6210\u4e86\u4f5c\u4e1a\u4e3e\u624b\uff0c\u6709\u4e3e\u624b\u7684\u540c\u5b66\u4ed6\u624d\u53bb\u6307\u5bfc\u95ee\u9898\uff0c\u4ed6\u8ba9\u5b66\u751f\u4e3b\u52a8\u53d1\u58f0\uff0c\u5206\u5f00\u4e86\u201c\u5e76\u53d1\u201d\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u8001\u5e08C\u5c31\u662fNginx\u3002"),(0,i.kt)("h3",{id:"\u8f7b\u91cf\u7ea7"},"\u8f7b\u91cf\u7ea7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u529f\u80fd\u6a21\u5757\u5c11 - Nginx\u4ec5\u4fdd\u7559\u4e86HTTP\u9700\u8981\u7684\u6a21\u5757\uff0c\u5176\u4ed6\u90fd\u7528\u63d2\u4ef6\u7684\u65b9\u5f0f\uff0c\u540e\u5929\u6dfb\u52a0"),(0,i.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u6a21\u5757\u5316 - \u66f4\u9002\u5408\u4e8c\u6b21\u5f00\u53d1\uff0c\u5982\u963f\u91cc\u5df4\u5df4Tengine")),(0,i.kt)("h3",{id:"cpu\u4eb2\u548c"},"CPU\u4eb2\u548c"),(0,i.kt)("p",null,"\u628aCPU\u6838\u5fc3\u548cNginx\u5de5\u4f5c\u8fdb\u7a0b\u7ed1\u5b9a\uff0c\u628a\u6bcf\u4e2aworker\u8fdb\u7a0b\u56fa\u5b9a\u5728\u4e00\u4e2aCPU\u4e0a\u6267\u884c\uff0c\u51cf\u5c11\u5207\u6362CPU\u7684cache miss\uff0c\u4ece\u800c\u63d0\u9ad8\u6027\u80fd\u3002"))}d.isMDXComponent=!0}}]);