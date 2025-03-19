"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[5637],{793:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>h,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"others/Curl","title":"Curl\u547d\u4ee4\u4f7f\u7528","description":"Curl\u76f8\u5173\u6587\u6863","source":"@site/docs/others/Curl.md","sourceDirName":"others","slug":"/others/Curl","permalink":"/docs/others/Curl","draft":false,"unlisted":false,"editUrl":"https://github.com/Alndaly/alndaly.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/others/Curl.md","tags":[{"inline":true,"label":"curl","permalink":"/docs/tags/curl"}],"version":"current","lastUpdatedAt":1742396220000,"frontMatter":{"title":"Curl\u547d\u4ee4\u4f7f\u7528","tags":["curl"],"description":"Curl\u76f8\u5173\u6587\u6863"},"sidebar":"anyThing","previous":{"title":"Clash\u6559\u7a0b","permalink":"/docs/others/Clash"},"next":{"title":"DockerCompose","permalink":"/docs/others/Docker/DockerCompose"}}');var i=n(5105),s=n(3881);const d={title:"Curl\u547d\u4ee4\u4f7f\u7528",tags:["curl"],description:"Curl\u76f8\u5173\u6587\u6863"},r=void 0,h={},o=[{value:"curl\u547d\u4ee4\u8bed\u6cd5\uff1a",id:"curl\u547d\u4ee4\u8bed\u6cd5",level:2},{value:"curl\u547d\u4ee4\u53c2\u6570\u8be6\u89e3\uff1a",id:"curl\u547d\u4ee4\u53c2\u6570\u8be6\u89e3",level:2},{value:"url",id:"url",level:3},{value:"\u8bf7\u6c42\u65b9\u6cd5",id:"\u8bf7\u6c42\u65b9\u6cd5",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b",level:4},{value:"POST\u8bf7\u6c42",id:"post\u8bf7\u6c42",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-1",level:4},{value:"\u6587\u4ef6\u4e0a\u4f20",id:"\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-2",level:4},{value:"\u8bf7\u6c42\u5934",id:"\u8bf7\u6c42\u5934",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-3",level:4},{value:"\u54cd\u5e94\u5934",id:"\u54cd\u5e94\u5934",level:3},{value:"cookie",id:"cookie",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-4",level:4},{value:"\u4ee3\u7406",id:"\u4ee3\u7406",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-5",level:4},{value:"\u8ddf\u968f\u91cd\u5b9a\u5411",id:"\u8ddf\u968f\u91cd\u5b9a\u5411",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-6",level:4},{value:"\u8c03\u8bd5",id:"\u8c03\u8bd5",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-7",level:4},{value:"\u6587\u4ef6\u4fdd\u5b58",id:"\u6587\u4ef6\u4fdd\u5b58",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-8",level:4},{value:"\u6a21\u62df\u7f51\u901f",id:"\u6a21\u62df\u7f51\u901f",level:3},{value:"Basic Auth",id:"basic-auth",level:3},{value:"\u8303\u4f8b",id:"\u8303\u4f8b-9",level:4}];function t(e){const l={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.admonition,{type:"info",children:(0,i.jsx)(l.p,{children:"curl\u662f\u4e00\u4e2a\u975e\u5e38\u5b9e\u7528\u7684\u3001\u7528\u6765\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u4f20\u8f93\u6570\u636e\u7684\u5de5\u5177\uff1b\u652f\u6301\u7684\u534f\u8bae\u5305\u62ec (DICT, FILE, FTP, FTPS, GOPHER, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMTP, SMTPS, TELNET and TFTP)\uff0ccurl\u8bbe\u8ba1\u4e3a\u65e0\u7528\u6237\u4ea4\u4e92\u4e0b\u5b8c\u6210\u5de5\u4f5c\uff1b"})}),"\n",(0,i.jsx)(l.admonition,{type:"info",children:(0,i.jsx)(l.p,{children:"curl\u63d0\u4f9b\u4e86\u4e00\u5927\u5806\u975e\u5e38\u6709\u7528\u7684\u529f\u80fd\uff0c\u5305\u62ec\u4ee3\u7406\u8bbf\u95ee\u3001\u7528\u6237\u8ba4\u8bc1\u3001ftp\u4e0a\u4f20\u4e0b\u8f7d\u3001HTTP POST\u3001SSL\u8fde\u63a5\u3001cookie\u652f\u6301\u3001\u65ad\u70b9\u7eed\u4f20...\u3002"})}),"\n",(0,i.jsx)(l.h2,{id:"curl\u547d\u4ee4\u8bed\u6cd5",children:"curl\u547d\u4ee4\u8bed\u6cd5\uff1a"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl [options] [URL...]\n"})}),"\n",(0,i.jsx)(l.h2,{id:"curl\u547d\u4ee4\u53c2\u6570\u8be6\u89e3",children:"curl\u547d\u4ee4\u53c2\u6570\u8be6\u89e3\uff1a"}),"\n",(0,i.jsx)(l.p,{children:"\u7531\u4e8elinux curl\u529f\u80fd\u5341\u5206\u5f3a\u5927\uff0c\u6240\u4ee5\u547d\u4ee4\u53c2\u6570\u5341\u5206\u591a\uff0c\u4e0b\u8868\u53ea\u662f\u7b5b\u9009\u51fa\u6765\u7684\u90e8\u5206\u53c2\u6570\uff0c\u66f4\u591a\u53c2\u6570\u8bf7\u8fd0\u884c\u201cman curl\u201d\u547d\u4ee4\u67e5\u770b\u3002"}),"\n",(0,i.jsx)(l.h3,{id:"url",children:"url"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"url"})}),"\n"]}),"\n",(0,i.jsxs)(l.p,{children:[":::info",(0,i.jsx)(l.strong,{children:"\u9700\u8981\u6293\u53d6\u591a\u4e2aURL\u65f6\u7528\u4e0b\u9762\u901a\u914d\u7b26\u7684\u65b9\u5f0f"})]}),"\n",(0,i.jsxs)(l.ol,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"http://{www,ftp,mail}.aiezu.com"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"http://aiezu.com/images/[001-999].jpg"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"http://aiezu.com/images/[1-999].html"})}),"\n",(0,i.jsxs)(l.li,{children:[(0,i.jsx)(l.code,{children:"ftp://aiezu.com/file[a-z].txt"}),"\n:::"]}),"\n"]}),"\n",(0,i.jsx)(l.h3,{id:"\u8bf7\u6c42\u65b9\u6cd5",children:"\u8bf7\u6c42\u65b9\u6cd5"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'-X "POST/GET"'})}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"\u8303\u4f8b",children:"\u8303\u4f8b"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -X POST https://www.example.com\n"})}),"\n",(0,i.jsx)(l.h3,{id:"post\u8bf7\u6c42",children:"POST\u8bf7\u6c42"}),"\n",(0,i.jsx)(l.admonition,{type:"tip",children:(0,i.jsxs)(l.p,{children:["\u4f7f\u7528",(0,i.jsx)(l.code,{children:"-d"}),"\u53c2\u6570\u4ee5\u540e\uff0cHTTP \u8bf7\u6c42\u4f1a\u81ea\u52a8\u52a0\u4e0a\u6807\u5934",(0,i.jsx)(l.code,{children:"Content-Type : application/x-www-form-urlencoded"}),"\u3002\u5e76\u4e14\u4f1a\u81ea\u52a8\u5c06\u8bf7\u6c42\u8f6c\u4e3a ",(0,i.jsx)(l.code,{children:"POST"})," \u65b9\u6cd5\uff0c\u56e0\u6b64\u53ef\u4ee5\u7701\u7565",(0,i.jsx)(l.code,{children:"-X POST"}),"\u3002"]})}),"\n",(0,i.jsx)(l.admonition,{type:"tip",children:(0,i.jsxs)(l.p,{children:[(0,i.jsx)(l.code,{children:"--data-urlencode"}),"\u53c2\u6570\u7b49\u540c\u4e8e",(0,i.jsx)(l.code,{children:"-d"}),"\uff0c\u53d1\u9001 POST \u8bf7\u6c42\u7684\u6570\u636e\u4f53\uff0c\u533a\u522b\u5728\u4e8e\u4f1a\u81ea\u52a8\u5c06\u53d1\u9001\u7684\u6570\u636e\u8fdb\u884c URL \u7f16\u7801\u3002"]})}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'-d "string"'})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'--data-urlencode "string"'})}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"\u8303\u4f8b-1",children:"\u8303\u4f8b"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -d 'login=emma\uff06password=123' -X POST https://google.com/login\n# \u6216\u8005\ncurl -d 'login=emma' -d 'password=123' -X POST  https://google.com/login\n"})}),"\n",(0,i.jsx)(l.admonition,{type:"tip",children:(0,i.jsx)(l.p,{children:"curl\u53ef\u4ee5\u8bfb\u53d6\u672c\u5730\u6587\u672c\u6587\u4ef6\u7684\u6570\u636e\u53d1\u8d77post\u8bf7\u6c42\uff0c\u5177\u4f53\u8303\u4f8b\u5982\u4e0b"})}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -d '@data.txt' https://google.com/login\n"})}),"\n",(0,i.jsx)(l.p,{children:"\u53d1\u9001\u7684\u6570\u636ehello world\u4e4b\u95f4\u6709\u4e00\u4e2a\u7a7a\u683c\uff0c\u9700\u8981\u8fdb\u884c URL \u7f16\u7801\u3002"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl --data-urlencode 'comment=hello world' https://google.com/login\n"})}),"\n",(0,i.jsx)(l.h3,{id:"\u6587\u4ef6\u4e0a\u4f20",children:"\u6587\u4ef6\u4e0a\u4f20"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-F 'file=@filePath;filename=fileName;type=type;'"})}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"\u8303\u4f8b-2",children:"\u8303\u4f8b"}),"\n",(0,i.jsxs)(l.p,{children:["\u6307\u5b9a ",(0,i.jsx)(l.code,{children:"MIME"})," \u7c7b\u578b\u4e3a",(0,i.jsx)(l.code,{children:"image/png"}),"\uff0c\u5426\u5219 ",(0,i.jsx)(l.code,{children:"curl"})," \u4f1a\u628a MIME \u7c7b\u578b\u8bbe\u4e3a",(0,i.jsx)(l.code,{children:"application/octet-stream"}),"\u3002"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -F 'file=@photo.png;filename=me.png;type=image/png' https://google.com/profile\n"})}),"\n",(0,i.jsx)(l.h3,{id:"\u8bf7\u6c42\u5934",children:"\u8bf7\u6c42\u5934"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'-H "name: value"'})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'--header "name: value"'})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u6dfb\u52a0\u4e00\u4e2ahttp header(http\u8bf7\u6c42\u5934)\uff1b"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'-H "name:"'})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'--header "name:"\t'})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u79fb\u9664\u4e00\u4e2ahttp header(http\u8bf7\u6c42\u5934)\uff1b"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'-A "string"'})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:'--user-agent "string"'})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u8bbe\u7f6eHttp\u8bf7\u6c42\u5934\u201cUser-Agent\u201d\uff0c\u670d\u52a1\u5668\u901a\u8fc7\u201cUser-Agent\u201d\u53ef\u4ee5\u5224\u65ad\u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\u540d\u79f0\u548c\u64cd\u4f5c\u7cfb\u7edf\u7c7b\u578b\uff0c\u4f2a\u9020\u6b64\u53c2\u6570\u80fd\u5bfc\u81f4\u670d\u52a1\u5668\u505a\u51fa\u9519\u8bef\u5224\u65ad\u3002\n\u4e5f\u53ef\u4ee5\u4f7f\u7528\u201c-H\u201d, \u201c--header option\u201d\u8bbe\u7f6e\u6b64\u9009\u9879\uff1b"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-e <URL>"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--referer <URL>"})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u8bbe\u7f6e\u8bbf\u95ee\u65f6\u7684\u6765\u6e90\u9875\u9762\uff0c\u544a\u8bc9http\u670d\u52a1\u4ece\u54ea\u4e2a\u9875\u9762\u8fdb\u5165\u5230\u6b64\u9875\u9762\uff1b"}),"\n",(0,i.jsx)(l.h4,{id:"\u8303\u4f8b-3",children:"\u8303\u4f8b"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' https://google.com\n"})}),"\n",(0,i.jsx)(l.h3,{id:"\u54cd\u5e94\u5934",children:"\u54cd\u5e94\u5934"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-I"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--head"})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u53ea\u8f93\u51faHTTP-header\uff0c\u4e0d\u83b7\u53d6\u5185\u5bb9(HTTP/FTP/FILE)\u3002"}),"\n",(0,i.jsxs)(l.p,{children:["\u7528\u4e8eHTTP\u670d\u52a1\u65f6\uff0c\u83b7\u53d6\u9875\u9762\u7684http\u5934\uff08\u5982\uff1acurl -I ",(0,i.jsx)(l.a,{href:"http://aiezu.com%EF%BC%89",children:"http://aiezu.com\uff09"})]}),"\n",(0,i.jsx)(l.p,{children:"\u7528\u4e8eFTP/FILE\u65f6\uff0c\u5c06\u4f1a\u83b7\u53d6\u6587\u4ef6\u5927\u5c0f\u3001\u6700\u540e\u4fee\u6539\u65f6\u95f4\uff08\u5982\uff1acurl -I file://test.txt\uff09"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-i"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--include"})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u8f93\u51faHTTP\u5934\u548c\u8fd4\u56de\u5185\u5bb9"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-D <file>"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--dump-header <file>\t"})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u8f6c\u50a8http\u54cd\u5e94\u5934\u5230\u6307\u5b9a\u6587\u4ef6"}),"\n",(0,i.jsx)(l.h3,{id:"cookie",children:"cookie"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-b name=data"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--cookie name=data"})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:'\u53d1\u9001cookie\u6570\u636e\u5230HTTP\u670d\u52a1\u5668\uff0c\u6570\u636e\u683c\u5f0f\u4e3a\uff1a"NAME1=VALUE1; NAME2=VALUE2"\uff1b'}),"\n",(0,i.jsx)(l.p,{children:"\u5982\u679c\u884c\u4e2d\u6ca1\u6709\u201c=\u201d\uff0c\u5c06\u628a\u53c2\u6570\u503c\u5f53\u4f5ccookie\u6587\u4ef6\u540d\uff1b"}),"\n",(0,i.jsx)(l.p,{children:"\u8fd9\u4e2acookie\u6570\u636e\u53ef\u4ee5\u662f\u7531\u670d\u52a1\u5668\u7684http\u54cd\u5e94\u5934\u201cSet-Cookie:\u201d\u884c\u53d1\u9001\u8fc7\u6765\u7684\uff1b"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-c filename"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--cookie-jar file name"})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u5b8c\u6210\u64cd\u4f5c\u540e\u5c06\u670d\u52a1\u5668\u8fd4\u56de\u7684cookies\u4fdd\u5b58\u5230\u6307\u5b9a\u7684\u6587\u4ef6\uff1b"}),"\n",(0,i.jsx)(l.p,{children:"\u6307\u5b9a\u53c2\u6570\u503c\u4e3a\u201c-\u201d\u5c06\u5b9a\u5411\u5230\u6807\u51c6\u8f93\u51fa\u201c\u5982\u63a7\u5236\u53f0\u201d\uff1b"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-j"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--junk-session-cookies"})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:'\u544a\u8bc9curl\u653e\u5f03\u6240\u6709\u7684"session cookies"\uff1b'}),"\n",(0,i.jsx)(l.p,{children:"\u76f8\u5f53\u4e8e\u91cd\u542f\u6d4f\u89c8\u5668\uff1b"}),"\n",(0,i.jsx)(l.h4,{id:"\u8303\u4f8b-4",children:"\u8303\u4f8b"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -b 'foo=bar' https://google.com\n"})}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -b 'foo1=bar;foo2=bar2' https://google.com\n"})}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -b cookies.txt https://www.google.com\n"})}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -c cookies.txt https://www.google.com\n"})}),"\n",(0,i.jsx)(l.h3,{id:"\u4ee3\u7406",children:"\u4ee3\u7406"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-x host:port"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-x [protocol://[user:pwd@][host][:port]"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--proxy [protocol]://[user:pwd@][host][:port]"})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u4f7f\u7528HTTP\u4ee3\u7406\u8bbf\u95ee\uff1b\u5982\u679c\u672a\u6307\u5b9a\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4f7f\u75288080\u7aef\u53e3;"}),"\n",(0,i.jsx)(l.p,{children:"protocol\u9ed8\u8ba4\u4e3ahttp_proxy\uff0c\u5176\u4ed6\u53ef\u80fd\u7684\u503c\u5305\u62ec\uff1a"}),"\n",(0,i.jsx)(l.p,{children:"http_proxy\u3001HTTPS_PROXY\u3001socks4\u3001socks4a\u3001socks5\uff1b"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-p"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--proxytunnel"})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u5c06\u201c-x\u201d\u53c2\u6570\u7684\u4ee3\u7406\uff0c\u4f5c\u4e3a\u901a\u9053\u7684\u65b9\u5f0f\u53bb\u4ee3\u7406\u975eHTTP\u534f\u8bae\uff0c\u5982ftp\uff1b"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--socks4 <host[:port]>"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--socks4a <host[:port]>"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--socks5 <host[:port]>"})}),"\n"]}),"\n",(0,i.jsx)(l.p,{children:"\u4f7f\u7528SOCKS4\u4ee3\u7406\uff1b"}),"\n",(0,i.jsx)(l.p,{children:"\u4f7f\u7528SOCKS4A\u4ee3\u7406\uff1b"}),"\n",(0,i.jsx)(l.p,{children:"\u4f7f\u7528SOCKS5\u4ee3\u7406\uff1b"}),"\n",(0,i.jsx)(l.p,{children:"\u6b64\u53c2\u6570\u4f1a\u8986\u76d6\u201c-x\u201d\u53c2\u6570\uff1b"}),"\n",(0,i.jsx)(l.h4,{id:"\u8303\u4f8b-5",children:"\u8303\u4f8b"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -x socks5://james:cats@myproxy.com:8080 https://www.example.com\n"})}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -x james:cats@myproxy.com:8080 https://www.example.com\n"})}),"\n",(0,i.jsx)(l.h3,{id:"\u8ddf\u968f\u91cd\u5b9a\u5411",children:"\u8ddf\u968f\u91cd\u5b9a\u5411"}),"\n",(0,i.jsx)(l.h4,{id:"\u8303\u4f8b-6",children:"\u8303\u4f8b"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-L"})}),"\n"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -L -d 'tweet=hi' https://api.twitter.com/tweet\n"})}),"\n",(0,i.jsx)(l.h3,{id:"\u8c03\u8bd5",children:"\u8c03\u8bd5"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-v"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--trace"})}),"\n"]}),"\n",(0,i.jsx)(l.admonition,{type:"tip",children:(0,i.jsxs)(l.p,{children:[(0,i.jsx)(l.code,{children:"--trace"}),"\u53c2\u6570\u4e5f\u53ef\u4ee5\u7528\u4e8e\u8c03\u8bd5\uff0c\u8fd8\u4f1a\u8f93\u51fa\u539f\u59cb\u7684\u4e8c\u8fdb\u5236\u6570\u636e\u3002"]})}),"\n",(0,i.jsx)(l.h4,{id:"\u8303\u4f8b-7",children:"\u8303\u4f8b"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -v https://www.example.com\n"})}),"\n",(0,i.jsx)(l.h3,{id:"\u6587\u4ef6\u4fdd\u5b58",children:"\u6587\u4ef6\u4fdd\u5b58"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-o filaName"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-O"})}),"\n"]}),"\n",(0,i.jsx)(l.admonition,{type:"tip",children:(0,i.jsxs)(l.p,{children:[(0,i.jsx)(l.code,{children:"-O"}),"\u53c2\u6570\u5c06\u670d\u52a1\u5668\u56de\u5e94\u4fdd\u5b58\u6210\u6587\u4ef6\uff0c\u5e76\u5c06 URL \u7684\u6700\u540e\u90e8\u5206\u5f53\u4f5c\u6587\u4ef6\u540d\u3002"]})}),"\n",(0,i.jsx)(l.h4,{id:"\u8303\u4f8b-8",children:"\u8303\u4f8b"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -o example.html https://www.example.com\n"})}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl -O https://www.example.com/foo/bar.html\n"})}),"\n",(0,i.jsx)(l.h3,{id:"\u6a21\u62df\u7f51\u901f",children:"\u6a21\u62df\u7f51\u901f"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--limit-rate"})}),"\n"]}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl --limit-rate 200k https://google.com\n"})}),"\n",(0,i.jsx)(l.h3,{id:"basic-auth",children:"Basic Auth"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"--username"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"-u"})}),"\n"]}),"\n",(0,i.jsx)(l.h4,{id:"\u8303\u4f8b-9",children:"\u8303\u4f8b"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-shell",children:"curl --user username:password https://example.com\ncurl -u username:password https://example.com\n"})})]})}function x(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},3881:(e,l,n)=>{n.d(l,{R:()=>d,x:()=>r});var c=n(8101);const i={},s=c.createContext(i);function d(e){const l=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),c.createElement(s.Provider,{value:l},e.children)}}}]);