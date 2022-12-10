"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1776],{19454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>r,toc:()=>o});var l=t(87462),a=(t(67294),t(3905));t(16758);const p={title:"\u5916\u90e8\u547d\u4ee4",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},i="\u5916\u90e8\u547d\u4ee4",r={unversionedId:"others/Vim/ch14_external_commands",id:"others/Vim/ch14_external_commands",title:"\u5916\u90e8\u547d\u4ee4",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch14_external_commands.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch14_external_commands",permalink:"/en/docs/others/Vim/ch14_external_commands",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/others/Vim/ch14_external_commands.md",tags:[{label:"VIM",permalink:"/en/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/en/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1670683071,formattedLastUpdatedAt:"Dec 10, 2022",frontMatter:{title:"\u5916\u90e8\u547d\u4ee4",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u5168\u5c40\u547d\u4ee4",permalink:"/en/docs/others/Vim/ch13_the_global_command"},next:{title:"\u547d\u4ee4\u884c\u6a21\u5f0f",permalink:"/en/docs/others/Vim/ch15_command-line_mode"}},k={},o=[{value:"Bang \u547d\u4ee4",id:"bang-\u547d\u4ee4",level:2},{value:"\u5c06\u5916\u90e8\u547d\u4ee4\u7684\u6807\u51c6\u8f93\u51faSTDOUT\u8bfb\u5165Vim",id:"\u5c06\u5916\u90e8\u547d\u4ee4\u7684\u6807\u51c6\u8f93\u51fastdout\u8bfb\u5165vim",level:2},{value:"\u5c06\u7f13\u51b2\u533a\u5185\u5bb9\u5199\u5165\u5916\u90e8\u547d\u4ee4",id:"\u5c06\u7f13\u51b2\u533a\u5185\u5bb9\u5199\u5165\u5916\u90e8\u547d\u4ee4",level:2},{value:"\u6267\u884c\u5916\u90e8\u547d\u4ee4",id:"\u6267\u884c\u5916\u90e8\u547d\u4ee4",level:2},{value:"\u8fc7\u6ee4\u6587\u672c",id:"\u8fc7\u6ee4\u6587\u672c",level:2},{value:"\u666e\u901a\u6a21\u5f0f\u547d\u4ee4",id:"\u666e\u901a\u6a21\u5f0f\u547d\u4ee4",level:2},{value:"\u806a\u660e\u5730\u5b66\u4e60\u5916\u90e8\u547d\u4ee4",id:"\u806a\u660e\u5730\u5b66\u4e60\u5916\u90e8\u547d\u4ee4",level:2}],m={toc:o};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5916\u90e8\u547d\u4ee4"},"\u5916\u90e8\u547d\u4ee4"),(0,a.kt)("p",null,"\u5728Unix\u7cfb\u7edf\u5185\u90e8\uff0c\u60a8\u4f1a\u53d1\u73b0\u8bb8\u591a\u5c0f\u578b\u7684\uff0c\u8d85\u4e13\u4e1a\u5316\u547d\u4ee4\uff0c\u6bcf\u4e2a\u547d\u4ee4\u53ea\u505a\u4e00\u4ef6\u4e8b\uff08\u800c\u4e14\u80fd\u5f88\u597d\u5730\u5b8c\u6210\uff09\u3002\u60a8\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u547d\u4ee4\u94fe\u63a5\u5728\u4e00\u8d77\u4ee5\u5171\u540c\u89e3\u51b3\u4e00\u4e2a\u590d\u6742\u7684\u95ee\u9898\u3002\u5982\u679c\u53ef\u4ee5\u4eceVim\u5185\u90e8\u4f7f\u7528\u8fd9\u4e9b\u547d\u4ee4\uff0c\u90a3\u4e0d\u662f\u5f88\u597d\u5417\uff1f"),(0,a.kt)("p",null,"\u7b54\u6848\u662f\u80af\u5b9a\u7684!\u5728\u672c\u7ae0\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u6269\u5c55Vim\u4ee5\u4f7f\u5176\u4e0e\u5916\u90e8\u547d\u4ee4\u65e0\u7f1d\u534f\u4f5c\u3002"),(0,a.kt)("h2",{id:"bang-\u547d\u4ee4"},"Bang \u547d\u4ee4"),(0,a.kt)("p",null,"Vim\u6709\u4e00\u4e2aBang(",(0,a.kt)("inlineCode",{parentName:"p"},"!"),")\u547d\u4ee4\uff0c\u53ef\u4ee5\u6267\u884c\u4e09\u4ef6\u4e8b\uff1a"),(0,a.kt)("p",null,"1.\u5c06\u5916\u90e8\u547d\u4ee4\u7684STDOUT\u8bfb\u5165\u5f53\u524d\u7f13\u51b2\u533a\u3002\n2.\u5c06\u7f13\u51b2\u533a\u7684\u5185\u5bb9\u4f5c\u4e3aSTDIN\u5199\u5165\u5916\u90e8\u547d\u4ee4\u3002\n3.\u4eceVim\u5185\u90e8\u6267\u884c\u5916\u90e8\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u4e00\u4e2a\u4e2a\u8ba4\u771f\u770b\u4e00\u4e0b\u3002"),(0,a.kt)("h2",{id:"\u5c06\u5916\u90e8\u547d\u4ee4\u7684\u6807\u51c6\u8f93\u51fastdout\u8bfb\u5165vim"},"\u5c06\u5916\u90e8\u547d\u4ee4\u7684\u6807\u51c6\u8f93\u51faSTDOUT\u8bfb\u5165Vim"),(0,a.kt)("p",null,"\u5c06\u5916\u90e8\u547d\u4ee4\u7684STDOUT\u8bfb\u5165\u5f53\u524d\u7f13\u51b2\u533a\u7684\u8bed\u6cd5\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":r !{cmd}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":r"),"\u662fVim\u7684\u8bfb\u547d\u4ee4\u3002\u5982\u679c\u4e0d\u5e26",(0,a.kt)("inlineCode",{parentName:"p"},"!"),"\u4f7f\u7528\u5b83\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u83b7\u53d6\u6587\u4ef6\u7684\u5185\u5bb9\u3002\u5982\u679c\u5f53\u524d\u76ee\u5f55\u4e2d\u6709\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt"),"\uff0c\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":r file1.txt\n")),(0,a.kt)("p",null,"Vim\u4f1a\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt"),"\u7684\u5185\u5bb9\u653e\u5165\u5f53\u524d\u7f13\u51b2\u533a\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u8fd0\u884c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},":r"),"\u547d\u4ee4\u540e\u9762\u8ddf\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"!"),"\u548c\u5916\u90e8\u547d\u4ee4\uff0c\u5219\u8be5\u547d\u4ee4\u7684\u8f93\u51fa\u5c06\u63d2\u5165\u5230\u5f53\u524d\u7f13\u51b2\u533a\u4e2d\u3002\u8981\u83b7\u53d6",(0,a.kt)("inlineCode",{parentName:"p"},"ls"),"\u547d\u4ee4\u7684\u7ed3\u679c\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":r !ls\n")),(0,a.kt)("p",null,"\u5b83\u8fd4\u56de\u7c7b\u4f3c\u4e0b\u5217\u7684\u6587\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"file1.txt\nfile2.txt\nfile3.txt\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),"\u547d\u4ee4\u8bfb\u53d6\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":r !curl -s 'https://jsonplaceholder.typicode.com/todos/1'\n")),(0,a.kt)("p",null,"r\u547d\u4ee4\u4e5f\u63a5\u53d7\u4e00\u4e2a\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":10r !cat file1.txt\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5c06\u5728\u7b2c10\u884c\u4e4b\u540e\u63d2\u5165\u6765\u81ea\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"cat file.txt"),"\u7684STDOUT\u3002"),(0,a.kt)("h2",{id:"\u5c06\u7f13\u51b2\u533a\u5185\u5bb9\u5199\u5165\u5916\u90e8\u547d\u4ee4"},"\u5c06\u7f13\u51b2\u533a\u5185\u5bb9\u5199\u5165\u5916\u90e8\u547d\u4ee4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":w"),"\u547d\u4ee4\u9664\u4e86\u4fdd\u5b58\u6587\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u7528\u6765\u5c06\u5f53\u524d\u7f13\u51b2\u533a\u4e2d\u7684\u6587\u672c\u4f5c\u4e3a\u4f5c\u4e3aSTDIN\u4f20\u9012\u7ed9\u5916\u90e8\u547d\u4ee4\u3002\u8bed\u6cd5\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":w !cmd\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5177\u6709\u4ee5\u4e0b\u8868\u8fbe\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'console.log("Hello Vim");\nconsole.log("Vim is awesome");\n')),(0,a.kt)("p",null,"\u786e\u4fdd\u5728\u8ba1\u7b97\u673a\u4e2d\u5b89\u88c5\u4e86",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"node"),"\uff0c\u7136\u540e\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":w !node\n")),(0,a.kt)("p",null,"Vim\u5c06\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"node"),'\u6267\u884cJavascript\u8868\u8fbe\u5f0f\u6765\u6253\u5370"Hello Vim"\u548c"Vim is awesome"\u3002'),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"\uff1aw"),"\u547d\u4ee4\u65f6\uff0cVim\u4f7f\u7528\u5f53\u524d\u7f13\u51b2\u533a\u4e2d\u7684\u6240\u6709\u6587\u672c\uff0c\u4e0eglobal\u547d\u4ee4\u7c7b\u4f3c\uff08\u5927\u591a\u6570\u547d\u4ee4\u884c\u547d\u4ee4\uff0c\u5982\u679c\u4e0d\u7ed9\u5b83\u4f20\u9012\u8303\u56f4\uff0c\u5219\u4ec5\u5bf9\u5f53\u524d\u884c\u6267\u884c\u8be5\u547d\u4ee4\uff09\u3002\u5982\u679c\u60a8\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"\uff1aw"),"\u6765\u6307\u5b9a\u5730\u5740\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":2w !node\n")),(0,a.kt)("p",null,'"Vim"\u53ea\u4f7f\u7528\u7b2c\u4e8c\u884c\u4e2d\u7684\u6587\u672c\u5230',(0,a.kt)("inlineCode",{parentName:"p"},"node"),"\u89e3\u91ca\u5668\u4e2d\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":w !node"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},":w! node"),"\u5f62\u5f0f\u4e0a\u533a\u522b\u5f88\u5c0f\uff0c\u4f46\u529f\u80fd\u4e0a\u76f8\u9694\u5343\u91cc\u3002\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},":w !node"),'\uff0c\u60a8\u662f\u5c06\u5f53\u524d\u7f13\u51b2\u533a\u4e2d\u7684\u6587\u672c"\u5199\u5165"\u5230\u5916\u90e8\u547d\u4ee4',(0,a.kt)("inlineCode",{parentName:"p"},"node"),"\u4e2d\u3002\u7528",(0,a.kt)("inlineCode",{parentName:"p"},":w! node"),'\uff0c\u5219\u60a8\u5c06\u5f3a\u5236\u4fdd\u5b58\u6587\u4ef6\u5e76\u5c06\u5176\u547d\u540d\u4e3a"node"\u3002'),(0,a.kt)("h2",{id:"\u6267\u884c\u5916\u90e8\u547d\u4ee4"},"\u6267\u884c\u5916\u90e8\u547d\u4ee4"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528bang\u547d\u4ee4\u4eceVim\u5185\u90e8\u6267\u884c\u5916\u90e8\u547d\u4ee4\u3002\u8bed\u6cd5\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":!cmd\n")),(0,a.kt)("p",null,"\u8981\u4ee5\u957f\u683c\u5f0f\u67e5\u770b\u5f53\u524d\u76ee\u5f55\u7684\u5185\u5bb9\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":!ls -ls\n")),(0,a.kt)("p",null,"\u8981\u7ec8\u6b62\u5728PID 3456\u4e0a\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":!kill -9 3456\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u4e0d\u79bb\u5f00Vim\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u4efb\u4f55\u5916\u90e8\u547d\u4ee4\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u81ea\u5df1\u7684\u4efb\u52a1\u3002"),(0,a.kt)("h2",{id:"\u8fc7\u6ee4\u6587\u672c"},"\u8fc7\u6ee4\u6587\u672c"),(0,a.kt)("p",null,"\u5982\u679c\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"!"),"\u8303\u56f4\uff0c\u5219\u53ef\u7528\u4e8e\u8fc7\u6ee4\u6587\u672c\u3002\u5047\u8bbe\u60a8\u6709\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hello vim\nhello vim\n")),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"tr")," (translate)\u547d\u4ee4\u5c06\u5f53\u524d\u884c\u5927\u5199\u3002\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":.!tr '[:lower:]' '[:upper:]'\n")),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HELLO VIM\nhello vim\n")),(0,a.kt)("p",null,"\u547d\u4ee4\u5206\u89e3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".!")," \u5728\u5f53\u524d\u884c\u6267\u884cfilter\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!tr '[:lower:]' '[:upper:]'")," \u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"tr"),"\u5916\u90e8\u547d\u4ee4\u5c06\u6240\u6709\u5c0f\u5199\u5b57\u7b26\u66ff\u6362\u4e3a\u5927\u5199\u5b57\u7b26\u3002")),(0,a.kt)("p",null,"\u5fc5\u987b\u4f20\u9012\u8303\u56f4\u4ee5\u8fd0\u884c\u5916\u90e8\u547d\u4ee4\u4f5c\u4e3a\u8fc7\u6ee4\u5668\u3002\u5982\u679c\u60a8\u5c1d\u8bd5\u5728\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"."),"\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\u4e0a\u8ff0\u547d\u4ee4(",(0,a.kt)("inlineCode",{parentName:"p"},":!tr '[:lower:]' '[:upper:]'"),")\uff0c\u5219\u4f1a\u770b\u5230\u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u60a8\u9700\u8981\u4f7f\u7528awk\u547d\u4ee4\u5220\u9664\u4e24\u884c\u7684\u7b2c\u4e8c\u5217\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},':%!awk "{print $1}"\n')),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hello\nhello\n")),(0,a.kt)("p",null,"\u547d\u4ee4\u5206\u89e3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":%!"),"  \u5728\u6240\u6709\u884c(",(0,a.kt)("inlineCode",{parentName:"li"},"%"),")\u4e0a\u6267\u884cfilter\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'awk "{print $1}"')," \u4ec5\u6253\u5370\u5339\u914d\u9879\u7684\u7b2c\u4e00\u5217\u3002")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u7ba1\u9053\u8fd0\u7b97\u7b26\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"|"),"\uff09\u94fe\u63a5\u591a\u4e2a\u547d\u4ee4\uff0c\u5c31\u50cf\u5728\u7ec8\u7aef\u4e2d\u4e00\u6837\u3002\u5047\u8bbe\u60a8\u6709\u4e00\u4e2a\u5305\u542b\u8fd9\u4e9b\u7f8e\u5473\u65e9\u9910\u7684\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"name price\nchocolate pancake 10\nbuttermilk pancake 9\nblueberry pancake 12\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u9700\u8981\u6839\u636e\u4ef7\u683c\u5bf9\u5b83\u4eec\u8fdb\u884c\u6392\u5e8f\uff0c\u5e76\u4e14\u4ec5\u4ee5\u5747\u5300\u7684\u95f4\u8ddd\u663e\u793a\u83dc\u5355\uff0c\u5219\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":%!awk 'NR > 1' | sort -nk 3 | column -t\n")),(0,a.kt)("p",null,"\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"buttermilk pancake 9\nchocolate pancake 10\nblueberry pancake 12\n")),(0,a.kt)("p",null,"\u547d\u4ee4\u5206\u89e3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":%!")," \u5c06\u8fc7\u6ee4\u5668\u5e94\u7528\u4e8e\u6240\u6709\u884c(",(0,a.kt)("inlineCode",{parentName:"li"},"%"),")\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"awk 'NR > 1'")," \u4ec5\u4ece\u7b2c\u4e8c\u884c\u5f00\u59cb\u663e\u793a\u6587\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"|"),"\u94fe\u63a5\u4e0b\u4e00\u4e2a\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sort -nk 3"),"\u4f7f\u7528\u52173\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"k 3"),"\uff09\u4e2d\u7684\u503c\u5bf9\u6570\u5b57\u8fdb\u884c\u6392\u5e8f\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"n"),"\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"column -t"),"\u4ee5\u5747\u5300\u7684\u95f4\u8ddd\u7ec4\u7ec7\u6587\u672c\u3002")),(0,a.kt)("h2",{id:"\u666e\u901a\u6a21\u5f0f\u547d\u4ee4"},"\u666e\u901a\u6a21\u5f0f\u547d\u4ee4"),(0,a.kt)("p",null,"\u5728\u666e\u901a\u6a21\u5f0f\u4e0b\uff0cVim\u6709\u4e00\u4e2a\u8fc7\u6ee4\u8fd0\u7b97\u7b26\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"!"),"\uff09\u3002\u5982\u679c\u60a8\u6709\u4ee5\u4e0b\u95ee\u5019\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hello vim\nhola vim\nbonjour vim\nsalve vim\n")),(0,a.kt)("p",null,"\u8981\u5927\u5199\u5f53\u524d\u884c\u548c\u4e0b\u9762\u7684\u884c\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"!jtr '[a-z]' '[A-Z]'\n")),(0,a.kt)("p",null,"\u547d\u4ee4\u5206\u89e3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!j")," \u8fd0\u884c\u5e38\u89c4\u547d\u4ee4\u8fc7\u6ee4\u5668\u8fd0\u7b97\u7b26\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"!"),'\uff09\uff0c\u76ee\u6807\u662f\u5f53\u524d\u884c\u53ca\u5176\u4e0b\u65b9\u7684\u884c\u3002\u56de\u60f3\u4e00\u4e0b\uff0c\u56e0\u4e3a\u5b83\u662f\u666e\u901a\u6a21\u5f0f\u8fd0\u7b97\u7b26\uff0c\u6240\u4ee5\u9002\u7528\u8bed\u6cd5\u89c4\u5219"\u52a8\u8bcd+\u540d\u8bcd"\u3002'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tr '[a-z]' '[A-Z]'"),"\u5c06\u5c0f\u5199\u5b57\u6bcd\u66ff\u6362\u4e3a\u5927\u5199\u5b57\u6bcd\u3002")),(0,a.kt)("p",null,"filter normal\u547d\u4ee4\u4ec5\u9002\u7528\u4e8e\u81f3\u5c11\u4e00\u884c\u4ee5\u4e0a\u7684motion\u6216\u81f3\u5c11\u4e00\u884c\u4ee5\u4e0a\u7684\u6587\u672c\u5bf9\u8c61\u3002\u5982\u679c\u60a8\u5c1d\u8bd5\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"!iwtr'[az]''[AZ]'"),"\uff08\u5728\u5185\u90e8\u5355\u8bcd\u4e0a\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"tr"),"\uff09\uff0c\u60a8\u4f1a\u53d1\u73b0\u5b83\u5728\u6574\u4e2a\u884c\u4e0a\u90fd\u5e94\u7528\u4e86tr\u547d\u4ee4\uff0c\u800c\u4e0d\u662f\u5149\u6807\u6240\u5728\u7684\u5355\u8bcd\u3002"),(0,a.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60\u5916\u90e8\u547d\u4ee4"},"\u806a\u660e\u5730\u5b66\u4e60\u5916\u90e8\u547d\u4ee4"),(0,a.kt)("p",null,"Vim\u4e0d\u662fIDE\u3002\u5b83\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6a21\u5f0f\u7f16\u8f91\u5668\uff0c\u901a\u8fc7\u8bbe\u8ba1\u53ef\u4ee5\u9ad8\u5ea6\u6269\u5c55\u3002\u7531\u4e8e\u8fd9\u79cd\u53ef\u6269\u5c55\u6027\uff0c\u60a8\u53ef\u4ee5\u8f7b\u677e\u8bbf\u95ee\u7cfb\u7edf\u4e2d\u7684\u4efb\u4f55\u5916\u90e8\u547d\u4ee4\u3002\u8fd9\u6837\uff0cVim\u79bb\u6210\u4e3aIDE\u4ec5\u4e00\u6b65\u4e4b\u9065\u3002\u6709\u4eba\u8bf4Unix\u7cfb\u7edf\u662f\u6709\u53f2\u4ee5\u6765\u7684\u7b2c\u4e00\u4e2aIDE\u3002"),(0,a.kt)("p",null,"Bang \u547d\u4ee4\u7684\u6709\u7528\u7a0b\u5ea6\u4e0e\u60a8\u77e5\u9053\u591a\u5c11\u4e2a\u5916\u90e8\u547d\u4ee4\u76f8\u5173\u3002\u5982\u679c\u60a8\u7684\u5916\u90e8\u547d\u4ee4\u77e5\u8bc6\u6709\u9650\uff0c\u8bf7\u4e0d\u8981\u62c5\u5fc3\u3002\u6211\u8fd8\u6709\u5f88\u591a\u4e1c\u897f\u8981\u5b66\u3002\u4ee5\u6b64\u4f5c\u4e3a\u6301\u7eed\u5b66\u4e60\u7684\u52a8\u529b\u3002\u6bcf\u5f53\u60a8\u9700\u8981\u8fc7\u6ee4\u6587\u672c\u65f6\uff0c\u8bf7\u67e5\u770b\u662f\u5426\u5b58\u5728\u53ef\u4ee5\u89e3\u51b3\u95ee\u9898\u7684\u5916\u90e8\u547d\u4ee4\u3002\u4e0d\u5fc5\u62c5\u5fc3\u638c\u63e1\u6240\u6709\u7684\u547d\u4ee4\u3002\u53ea\u9700\u5b66\u4e60\u5b8c\u6210\u5f53\u524d\u4efb\u52a1\u6240\u9700\u7684\u5185\u5bb9\u5373\u53ef\u3002"))}d.isMDXComponent=!0}}]);