"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5654],{19577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>k});var i=t(87462),a=(t(67294),t(3905));t(16758);const l={title:"\u591a\u6587\u4ef6\u64cd\u4f5c",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},p="\u7b2c21\u7ae0 \u591a\u6587\u4ef6\u64cd\u4f5c",r={unversionedId:"others/Vim/ch21_multiple_file_operations",id:"others/Vim/ch21_multiple_file_operations",title:"\u591a\u6587\u4ef6\u64cd\u4f5c",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch21_multiple_file_operations.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch21_multiple_file_operations",permalink:"/docs/others/Vim/ch21_multiple_file_operations",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch21_multiple_file_operations.md",tags:[{label:"VIM",permalink:"/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1681142816,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{title:"\u591a\u6587\u4ef6\u64cd\u4f5c",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u89c6\u56fe\u3001\u4f1a\u8bdd\u548c Viminfo",permalink:"/docs/others/Vim/ch20_views_sessions_viminfo"},next:{title:"Vimrc",permalink:"/docs/others/Vim/ch22_vimrc"}},o={},k=[{value:"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u6267\u884c\u547d\u4ee4\u7684\u51e0\u79cd\u65b9\u6cd5",id:"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u6267\u884c\u547d\u4ee4\u7684\u51e0\u79cd\u65b9\u6cd5",level:2},{value:"\u53c2\u6570\u5217\u8868",id:"\u53c2\u6570\u5217\u8868",level:2},{value:"\u7f13\u51b2\u533a\u5217\u8868",id:"\u7f13\u51b2\u533a\u5217\u8868",level:2},{value:"\u7a97\u53e3\u5217\u8868\u548c\u9009\u9879\u5361\uff08Tab\uff09\u5217\u8868",id:"\u7a97\u53e3\u5217\u8868\u548c\u9009\u9879\u5361tab\u5217\u8868",level:2},{value:"\u5feb\u901f\u4fee\u590d\u5217\u8868",id:"\u5feb\u901f\u4fee\u590d\u5217\u8868",level:2},{value:"\u4f4d\u7f6e\u5217\u8868",id:"\u4f4d\u7f6e\u5217\u8868",level:2},{value:"\u5728Vim\u4e2d\u8fd0\u884c\u591a\u6587\u4ef6\u64cd\u4f5c\u547d\u4ee4",id:"\u5728vim\u4e2d\u8fd0\u884c\u591a\u6587\u4ef6\u64cd\u4f5c\u547d\u4ee4",level:2}],d={toc:k};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b2c21\u7ae0-\u591a\u6587\u4ef6\u64cd\u4f5c"},"\u7b2c21\u7ae0 \u591a\u6587\u4ef6\u64cd\u4f5c"),(0,a.kt)("p",null,"\u591a\u6587\u4ef6\u7f16\u8f91\u66f4\u65b0\u662f\u4e00\u4e2a\u503c\u5f97\u638c\u63e1\u3001\u975e\u5e38\u6709\u7528\u7684\u7f16\u8f91\u5de5\u5177\u3002\u524d\u9762\u60a8\u5df2\u7ecf\u5b66\u4f1a\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cfdo")," \u547d\u4ee4\u5728\u591a\u4e2a\u6587\u672c\u4e2d\u8fdb\u884c\u66f4\u65b0\u3002\u672c\u7ae0\uff0c\u60a8\u5c06\u5b66\u5230\u5982\u4f55\u5728Vim\u4e2d\u8fdb\u884c\u591a\u6587\u4ef6\u7f16\u8f91\u7684\u66f4\u591a\u4e0d\u540c\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u6267\u884c\u547d\u4ee4\u7684\u51e0\u79cd\u65b9\u6cd5"},"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u6267\u884c\u547d\u4ee4\u7684\u51e0\u79cd\u65b9\u6cd5"),(0,a.kt)("p",null,"\u8981\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u6267\u884c\u547d\u4ee4\uff0cVim\u67098\u79cd\u65b9\u6cd5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u5217\u8868 (",(0,a.kt)("inlineCode",{parentName:"li"},"argdo"),")"),(0,a.kt)("li",{parentName:"ul"},"\u7f13\u51b2\u533a\u5217\u8868 (",(0,a.kt)("inlineCode",{parentName:"li"},"bufdo"),")"),(0,a.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u5217\u8868 (",(0,a.kt)("inlineCode",{parentName:"li"},"windo"),")"),(0,a.kt)("li",{parentName:"ul"},"tab \u5217\u8868(",(0,a.kt)("inlineCode",{parentName:"li"},"tabdo"),")"),(0,a.kt)("li",{parentName:"ul"},"\u5feb\u901f\u4fee\u590d\u5217\u8868 (",(0,a.kt)("inlineCode",{parentName:"li"},"cdo"),")"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u65b9\u5f0f\u7684\u5feb\u901f\u4fee\u590d\u5217\u8868 (",(0,a.kt)("inlineCode",{parentName:"li"},"cfdo"),")"),(0,a.kt)("li",{parentName:"ul"},"\u4f4d\u7f6e\u5217\u8868 (",(0,a.kt)("inlineCode",{parentName:"li"},"ldo"),")"),(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u65b9\u5f0f\u7684\u4f4d\u7f6e\u5217\u8868 (",(0,a.kt)("inlineCode",{parentName:"li"},"lfdo"),")")),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u5927\u90e8\u5206\u65f6\u95f4\u60a8\u53ef\u80fd\u53ea\u4f1a\u7528\u52301\u79cd\u62162\u79cd\uff08\u5c31\u6211\u4e2a\u4eba\u800c\u8a00\uff0c\u6211\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cdo")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"argdo"),"\u6bd4\u5176\u4ed6\u7684\u591a\u5f97\u591a\uff09\uff0c\u4f46\u4e86\u89e3\u6240\u6709\u53ef\u884c\u65b9\u6cd5\u8fd8\u662f\u5f88\u6709\u7528\u7684\uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u9009\u62e9\u4e00\u4e2a\u6700\u7b26\u5408\u60a8\u4e2a\u4eba\u7f16\u8f91\u98ce\u683c\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u5b66\u4e60\u6240\u67098\u4e2a\u547d\u4ee4\u53ef\u80fd\u542c\u8d77\u6765\u8ba9\u4eba\u6709\u70b9\u6253\u9000\u5802\u9f13\u3002\u4f46\u5b9e\u9645\u4e0a\uff0c\u8fd9\u4e9b\u547d\u4ee4\u5de5\u4f5c\u65b9\u5f0f\u5f88\u76f8\u4f3c\u3002\u5b66\u4e60\u4e86\u5176\u4e2d\u4e00\u4e2a\u540e\uff0c\u518d\u5b66\u4e60\u5269\u4f59\u7684\u5c06\u5bb9\u6613\u7684\u591a\u3002\u5b83\u4eec\u7684\u8fd0\u884c\u65b9\u5f0f\u90fd\u5927\u4f53\u76f8\u540c\uff1a\u5206\u522b\u521b\u5efa\u4e00\u4e2a\u5217\u8868(\u5217\u8868\u4e2d\u7684\u5143\u7d20\u6839\u636e\u547d\u4ee4\u6709\u6240\u4e0d\u540c)\uff0c\u7136\u540e\u5411\u5217\u8868\u4f20\u9012\u4e00\u4e2a\u60a8\u60f3\u6267\u884c\u7684\u547d\u4ee4\u3002"),(0,a.kt)("h2",{id:"\u53c2\u6570\u5217\u8868"},"\u53c2\u6570\u5217\u8868"),(0,a.kt)("p",null,"\u53c2\u6570\u5217\u8868\u662f\u6700\u57fa\u7840\u7684\u5217\u8868\u3002\u5b83\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5217\u8868\u3002\u8981\u60f3\u4e3a file1, file2, file3\u521b\u5efa\u6587\u4ef6\u5217\u8868\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":args file1 file2 file3\n")),(0,a.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u901a\u914d\u7b26\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\uff09\uff0c\u6240\u4ee5\u5982\u679c\u60a8\u60f3\u4e3a\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".js")," \u6587\u4ef6\u521b\u5efa\u4e00\u4e2a\u5217\u8868\uff0c\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":args *.js\n")),(0,a.kt)("p",null,'\u5982\u679c\u60a8\u60f3\u4e3a\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709\u4ee5 "a" \u5f00\u5934\u7684Javascript\u6587\u4ef6\u521b\u5efa\u5217\u8868\uff0c\u8fd0\u884c\uff1a'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":args a*.js\n")),(0,a.kt)("p",null,"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"\uff09\u901a\u914d\u7b26\u5339\u914d\u5f53\u524d\u76ee\u5f55\u4e0b\u76841\u4e2a\u6216\u591a\u4e2a\u4efb\u610f\u6587\u4ef6\u540d\u4e2d\u7684\u5b57\u7b26\u3002\u4f46\u5982\u679c\u60a8\u60f3\u5728\u67d0\u4e2a\u76ee\u5f55\u4e0b\u8fdb\u884c\u9012\u5f52\u641c\u7d22\u600e\u4e48\u529e\u5462\uff1f\u60a8\u53ef\u4ee5\u4f7f\u7528\u53cc\u901a\u914d\u7b26\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"**"),"\uff09\u3002\u8981\u5f97\u5230\u60a8\u5f53\u524d\u4f4d\u7f6e\u4e0b\u6240\u6709\u5b50\u76ee\u5f55\u4e2d\u7684Javascript\u6587\u4ef6\uff0c\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":args **/*.js\n")),(0,a.kt)("p",null,"\u60a8\u8fd0\u884c\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," \u547d\u4ee4\u540e\uff0c\u60a8\u7684\u5f53\u524dbuffer\u5c06\u4f1a\u5207\u6362\u5230\u5217\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u6587\u4ef6\u3002\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":args"),"\u53ef\u4ee5\u67e5\u770b\u60a8\u521a\u624d\u521b\u5efa\u7684\u6587\u4ef6\u5217\u8868\u3002\u5f53\u60a8\u521b\u5efa\u597d\u4e86\u60a8\u7684\u5217\u8868\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u904d\u5386\u5b83\u4eec\u4e86\u3002",(0,a.kt)("inlineCode",{parentName:"p"},":first")," \u5c06\u8ba9\u60a8\u8df3\u81f3\u5217\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u6587\u4ef6\u3002",(0,a.kt)("inlineCode",{parentName:"p"},":last")," \u5c06\u8df3\u5230\u6700\u540e\u4e00\u4e2a\u6587\u4ef6\u3002\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},":next"),"\u53ef\u4ee5\u5728\u5217\u8868\u4e2d\u4e00\u6b21\u5411\u524d\u79fb\u52a8\u4e00\u4e2a\u6587\u4ef6\u3002\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":prev"),"\u53ef\u4ee5\u5728\u5217\u8868\u4e2d\u4e00\u6b21\u5411\u540e\u79fb\u52a8\u4e00\u4e2a\u6587\u4ef6\u3002\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},":wnext")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},":wprev"),"\u547d\u4ee4\uff0c\u5728\u5411\u524d/\u5411\u540e\u79fb\u52a8\u6587\u4ef6\u7684\u540c\u65f6\u8fd8\u4f1a\u4fdd\u5b58\u4fee\u6539\u3002\u67e5\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},": arglist")," \u4e86\u89e3\u66f4\u591a\u5bfc\u822a\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u53c2\u6570\u5217\u8868\u5728\u5b9a\u4f4d\u67d0\u4e2a\u7279\u5b9a\u7c7b\u578b\u7684\u6587\u4ef6\u6216\u5c11\u91cf\u6587\u4ef6\u65f6\u7279\u522b\u6709\u7528\u3002\u5047\u5982\u60a8\u9700\u8981\u5c06\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"donut")," \u66f4\u65b0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"pancake"),"\u3002\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":args **/*.yml\n:argdo %s/donut/pancake/g | update\n\n")),(0,a.kt)("p",null,"\u6ce8\u610f\u5982\u679c\u60a8\u518d\u6b21\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"args")," \u547d\u4ee4\uff0c\u5b83\u5c06\u8986\u76d6\u5148\u524d\u7684\u5217\u8868\u3002\u6bd4\u5982\uff0c\u5982\u679c\u60a8\u5148\u524d\u8fd0\u884c\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":args file1 file2 file3\n")),(0,a.kt)("p",null,"\u5047\u8bbe\u8fd9\u4e9b\u6587\u4ef6\u90fd\u662f\u5b58\u5728\u7684\uff0c\u90a3\u4e48\u73b0\u5728\u60a8\u7684\u5217\u8868\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"file1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file2"),",\u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"file3"),"\u3002\u7136\u540e\u518d\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":args file4 file5\n")),(0,a.kt)("p",null,"\u60a8\u7684\u521d\u59cb\u5217\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"file1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file3"),"\u5c06\u88ab\u8986\u76d6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"file4"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file5"),"\u3002\u5982\u679c\u60a8\u7684\u53c2\u6570\u5217\u8868\u4e2d\u5df2\u7ecf\u6709\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"file1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file3")," \uff0c\u800c\u60a8\u60f3\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"file4"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file5")," \u6dfb\u52a0\u5230\u521d\u59cb\u5217\u8868\u4e2d\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":arga"),"\u547d\u4ee4\u3002\u8fd0\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":arga file4 file5\n")),(0,a.kt)("p",null,"\u73b0\u5728\u60a8\u7684\u5217\u8868\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"file1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file3"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file4"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file5"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":arga")," \u65f6\u6ca1\u6709\u7ed9\u4efb\u4f55\u53c2\u6570\uff0cVim\u4f1a\u6dfb\u52a0\u5f53\u524dbuffer\u5230\u53c2\u6570\u5217\u8868\u4e2d\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u7684\u53c2\u6570\u5217\u8868\u4e2d\u5df2\u7ecf\u6709\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"file1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"file3"),"\uff0c\u800c\u60a8\u5f53\u524dbuffer\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"file5"),"\uff0c\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":arga")," \u5c06\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"file5")," \u5230\u60a8\u7684\u5217\u8868\u4e2d\u3002"),(0,a.kt)("p",null,"\u5728\u524d\u9762\u7684\u547d\u4ee4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},":argdo %s/donut/pancake/g"),"\uff09\u4e2d\u60a8\u5df2\u7ecf\u770b\u5230\u8fc7\u4e86\uff0c\u5f53\u60a8\u521b\u5efa\u597d\u5217\u8868\u540e\u5c31\u53ef\u4ee5\u5411\u5b83\u4f20\u9012\u4efb\u610f\u547d\u4ee4\u884c\u547d\u4ee4\u3002\u5176\u4ed6\u7684\u4e00\u4e9b\u793a\u4f8b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u5220\u9664\u53c2\u6570\u5217\u8868\u6240\u6709\u6587\u4ef6\u5185\u5305\u542b "dessert" \u7684\u884c, \u8fd0\u884c ',(0,a.kt)("inlineCode",{parentName:"li"},":argdo g/dessert/d"),"."),(0,a.kt)("li",{parentName:"ul"},"\u5728\u53c2\u6570\u5217\u8868\u6bcf\u4e2a\u6587\u4ef6\u4e2d\u6267\u884c\u5b8fa(\u5047\u8bbe\u60a8\u5df2\u7ecf\u5728a\u4e2d\u5f55\u597d\u4e86\u4e00\u4e2a\u5b8f)\uff0c\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},":argdo norm @a"),"."),(0,a.kt)("li",{parentName:"ul"},'\u5411\u53c2\u6570\u5217\u8868\u6240\u6709\u6587\u4ef6\u7684\u7b2c\u4e00\u884c\u63d2\u5165"hello "+\u6587\u4ef6\u540d \uff0c\u8fd0\u884c ',(0,a.kt)("inlineCode",{parentName:"li"},":argdo 0put='hello ' . @%"),"\uff08\u8bd1\u8005\u6ce8\uff1a\u5728\u82f1\u6587\u7248\u4e2d\uff0c\u539f\u4f5c\u8005\u7ed9\u51fa\u7684\u547d\u4ee4\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},":argdo 0put='hello ' .. @:"),"\uff0c\u8c8c\u4f3c\u8fd9\u4e2a\u547d\u4ee4\u6709\u95ee\u9898\uff09\u3002")),(0,a.kt)("p",null,"\u628a\u6240\u6709\u5de5\u4f5c\u5b8c\u6210\u540e\uff0c\u522b\u5fd8\u4e86\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":update")," \u547d\u4ee4\u4fdd\u5b58(",(0,a.kt)("inlineCode",{parentName:"p"},":update"),"\u53ea\u4f1a\u4fdd\u5b58\u5f53\u524dbuffer\uff0c\u8981\u4fdd\u5b58\u5217\u8868\u6240\u6709\u6587\u4ef6\u7684\u4fee\u6539\uff0c\u8bf7\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":argdo update"),")\u3002"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u60a8\u4ec5\u4ec5\u9700\u8981\u5728\u53c2\u6570\u5217\u8868\u7684\u524dn\u4e2a\u6587\u4ef6\u6267\u884c\u67d0\u6761\u547d\u4ee4\u3002\u5982\u679c\u662f\u8fd9\u79cd\u60c5\u51b5\uff0c\u53ea\u9700\u8981\u5411 ",(0,a.kt)("inlineCode",{parentName:"p"},"argdo")," \u547d\u4ee4\u4f20\u9012\u4e00\u4e2a\u5730\u5740\u5c31\u53ef\u4ee5\u4e86\u3002\u6bd4\u5982\uff0c\u8981\u5728\u5217\u8868\u7684\u524d3\u4e2a\u6587\u4ef6\u6267\u884c\u66ff\u6362\u547d\u4ee4\uff0c\u8fd0\u884c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},":1,3argdo %s/donut/pancake/g"),"\u3002"),(0,a.kt)("h2",{id:"\u7f13\u51b2\u533a\u5217\u8868"},"\u7f13\u51b2\u533a\u5217\u8868"),(0,a.kt)("p",null,"\u56e0\u4e3a\u6bcf\u6b21\u60a8\u521b\u5efa\u65b0\u6587\u4ef6\u6216\u6253\u5f00\u6587\u4ef6\u65f6\uff0cVim\u5c06\u5b83\u4fdd\u5b58\u5728\u4e00\u4e2abuffer\u4e2d\uff08\u9664\u975e\u60a8\u663e\u5f0f\u5730\u5220\u9664\u5b83\uff09\uff0c\u6240\u4ee5\u5f53\u60a8\u7f16\u8f91\u65b0\u6587\u4ef6\u65f6\uff0c\u7f13\u51b2\u533a\u5217\u8868\u5c31\u6709\u7ec4\u7ec7\u5730\u88ab\u521b\u5efa\u4e86\u3002\u5982\u679c\u60a8\u5df2\u7ecf\u6253\u5f00\u4e863\u4e2a\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"file1.rb file2.rb file3.rb"),"\uff0c\u60a8\u7684\u7f13\u51b2\u533a\u5217\u8868\u5c31\u5df2\u7ecf\u6709\u4e863\u4e2a\u5143\u7d20\u3002\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":buffers"),"\uff08\u6216\u8005",(0,a.kt)("inlineCode",{parentName:"p"},":ls"),"\u3001\u6216",(0,a.kt)("inlineCode",{parentName:"p"},":files"),"\uff09\u53ef\u4ee5\u663e\u793a\u7f13\u51b2\u533a\u5217\u8868\u3002\u8981\u60f3\u5411\u524d\u6216\u5411\u540e\u904d\u5386\u7f13\u51b2\u533a\u5217\u8868\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":bnext")," ",(0,a.kt)("inlineCode",{parentName:"p"},":bprev"),"\u3002\u8981\u60f3\u8df3\u81f3\u5217\u8868\u4e2d\u7b2c\u4e00\u4e2a\u6216\u6700\u540e\u4e00\u4e2abuffer\uff0c\u53ef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":bfirst")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},":blast"),"\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u8fd9\u91cc\u6709\u4e00\u4e2a\u548c\u672c\u7ae0\u5185\u5bb9\u4e0d\u76f8\u5173\uff0c\u4f46\u662f\u5f88\u9177\u7684\u7f13\u51b2\u533a\u6280\u5de7\uff1a\u5982\u679c\u60a8\u7684\u7f13\u51b2\u533a\u6709\u5927\u91cf\u7684\u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":ball")," \u663e\u793a\u6240\u6709\u7f13\u51b2\u533a\u3002",(0,a.kt)("inlineCode",{parentName:"p"},":ball")," \u547d\u4ee4\u9ed8\u8ba4\u4f7f\u7528\u6c34\u5e73\u5206\u5272\u7a97\u53e3\u8fdb\u884c\u663e\u793a\uff0c\u5982\u679c\u60f3\u4f7f\u7528\u5782\u76f4\u5206\u5272\u7684\u7a97\u53e3\u663e\u793a\uff0c\u8fd0\u884c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},":vertical ball")),(0,a.kt)("p",null,"\u56de\u5230\u672c\u7ae0\u4e3b\u9898\u3002\u5728\u7f13\u51b2\u533a\u5217\u8868\u4e2d\u6267\u884c\u67d0\u4e2a\u64cd\u4f5c\u7684\u65b9\u6cd5\u4e0e\u53c2\u6570\u5217\u8868\u64cd\u4f5c\u975e\u5e38\u76f8\u4f3c\u3002\u5f53\u60a8\u521b\u5efa\u597d\u7f13\u51b2\u533a\u5217\u8868\u540e\uff0c\u60a8\u53ea\u9700\u8981\u5728\u60a8\u60f3\u6267\u884c\u7684\u547d\u4ee4\u524d\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":bufdo")," \u4ee3\u66ff ",(0,a.kt)("inlineCode",{parentName:"p"},":argdo"),'\u5c31\u53ef\u4ee5\u4e86\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u60f3\u5c06\u7f13\u51b2\u533a\u5217\u8868\u5185\u6bcf\u4e2a\u6587\u4ef6\u4e2d\u6240\u6709\u7684 "donut" \u66ff\u6362\u4e3a "pancake"\u5e76\u4fdd\u5b58\u4fee\u6539\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a',(0,a.kt)("inlineCode",{parentName:"p"},":bufdo %s/donut/pancake/g | update"),"\u3002"),(0,a.kt)("h2",{id:"\u7a97\u53e3\u5217\u8868\u548c\u9009\u9879\u5361tab\u5217\u8868"},"\u7a97\u53e3\u5217\u8868\u548c\u9009\u9879\u5361\uff08Tab\uff09\u5217\u8868"),(0,a.kt)("p",null,"\u7a97\u53e3\u5217\u8868\u3001\u9009\u9879\u5361\u5217\u8868\u7684\u64cd\u4f5c\u548c\u53c2\u6570\u5217\u8868\u3001\u7f13\u51b2\u533a\u5217\u8868\u540c\u6837\u975e\u5e38\u76f8\u4f3c\u3002\u552f\u4e00\u7684\u533a\u522b\u5728\u4e8e\u5b83\u4eec\u7684\u5185\u5bb9\u548c\u8bed\u6cd5\u3002"),(0,a.kt)("p",null,"\u7a97\u53e3\u64cd\u4f5c\u4f5c\u7528\u5728\u6bcf\u4e00\u4e2a\u6253\u5f00\u7684\u7a97\u53e3\u4e0a\uff0c\u4f7f\u7528\u7684\u547d\u4ee4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},":windo"),"\u3002\u9009\u9879\u5361\uff08Tab\uff09\u64cd\u4f5c\u4f5c\u7528\u5728\u6bcf\u4e00\u4e2a\u6253\u5f00\u7684\u9009\u9879\u5361\u4e0a\uff0c\u4f7f\u7528\u7684\u547d\u4ee4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},":tabdo"),"\u3002\u53ef\u4ee5\u67e5\u8be2 ",(0,a.kt)("inlineCode",{parentName:"p"},":h list-repeat"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":h :windo"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},":h :tabdo"),"\uff0c\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u5982\u679c\u60a8\u6253\u5f00\u4e864\u4e2a\u7a97\u53e3\uff08\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl-w v"),"\u6253\u5f00\u4e00\u4e2a\u5782\u76f4\u5206\u5272\u7684\u7a97\u53e3\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl-w s"),"\u6253\u5f00\u4e00\u4e2a\u6c34\u5e73\u5206\u5272\u7684\u7a97\u53e3\uff09\uff0c\u7136\u540e\u60a8\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":windo 0put = 'hello' . @%"),'\uff0cVim\u5c06\u5728\u6240\u6709\u6253\u5f00\u7684\u7a97\u53e3\u7684\u7b2c\u4e00\u884c\u8f93\u51fa "hello"+\u6587\u4ef6\u540d\u3002'),(0,a.kt)("h2",{id:"\u5feb\u901f\u4fee\u590d\u5217\u8868"},"\u5feb\u901f\u4fee\u590d\u5217\u8868"),(0,a.kt)("p",null,"\u5728\u524d\u9762\u7684\u7ae0\u8282\u4e2d\uff08\u7b2c3\u7ae0\u548c\u7b2c19\u7ae0\uff09\uff0c\u6211\u66fe\u63d0\u5230\u8fc7\u5feb\u901f\u4fee\u590d\uff08quickfix\uff09\u3002\u5feb\u901f\u4fee\u590d\u6709\u5f88\u591a\u4f5c\u7528\uff0c\u5f88\u591a\u6d41\u884c\u7684\u63d2\u4ef6\u90fd\u5728\u4f7f\u7528\u5feb\u901f\u4fee\u590d\u63d0\u4f9b\u7684\u529f\u80fd\uff0c\u56e0\u6b64\u503c\u5f97\u82b1\u65f6\u95f4\u53bb\u7406\u89e3\u5b83\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u662fVim\u65b0\u624b\uff0c\u5feb\u901f\u4fee\u590d\u5bf9\u4e8e\u60a8\u53ef\u80fd\u662f\u4e2a\u65b0\u6982\u5ff5\u3002\u56de\u60f3\u4ee5\u524d\u60a8\u6267\u884c\u4ee3\u7801\u7f16\u8bd1\u7684\u65f6\u5019\uff0c\u7f16\u8bd1\u671f\u95f4\u60a8\u53ef\u80fd\u9047\u5230\u8fc7\u9519\u8bef\uff0c\u800c\u8fd9\u4e9b\u9519\u8bef\u90fd\u663e\u793a\u5728\u4e00\u4e2a\u7279\u6b8a\u7684\u7a97\u53e3\u3002\u8fd9\u5c31\u662f\u5feb\u901f\u4fee\u590d(quickfix)\u7684\u7531\u6765\u3002\u5f53\u60a8\u7f16\u8bd1\u60a8\u7684\u4ee3\u7801\u7684\u65f6\u5019\uff0cVim\u4f1a\u5728\u5feb\u901f\u4fee\u590d\u7a97\u53e3\u663e\u793a\u9519\u8bef\u4fe1\u606f\uff0c\u60a8\u53ef\u4ee5\u7a0d\u540e\u53bb\u89e3\u51b3\u3002\u8bb8\u591a\u73b0\u4ee3\u8bed\u8a00\u5df2\u7ecf\u4e0d\u518d\u9700\u8981\u8fdb\u884c\u663e\u5f0f\u5730\u7f16\u8bd1\uff0c\u4f46\u5feb\u901f\u4fee\u590d\u5e76\u6ca1\u6709\u88ab\u6dd8\u6c70\u3002\u73b0\u5728\uff0c\u4eba\u4eec\u4f7f\u7528\u5feb\u901f\u4fee\u590d\u6765\u505a\u5404\u79cd\u5404\u6837\u7684\u4e8b\uff0c\u6bd4\u5982\u663e\u793a\u865a\u62df\u7ec8\u7aef\u7684\u8f93\u5165\u3001\u5b58\u50a8\u641c\u7d22\u7ed3\u679c\u7b49\u3002\u6211\u4eec\u91cd\u70b9\u7814\u7a76\u540e\u8005\uff0c\u5b58\u50a8\u641c\u7d22\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u9664\u7f16\u8bd1\u547d\u4ee4\u5916\uff0c\u67d0\u4e9b\u7279\u5b9a\u7684Vim\u547d\u4ee4\u4e5f\u4f9d\u8d56\u5feb\u901f\u4fee\u590d\u63a5\u53e3\u3002\u5176\u4e2d\u4e00\u79cd\u5c31\u662f\u641c\u7d22\u547d\u4ee4\uff0c\u5176\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u5927\u91cf\u7684\u4f7f\u7528\u4e86\u5feb\u901f\u4fee\u590d\u7a97\u53e3\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},":vimgrep")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},":grep")," \u90fd\u9ed8\u8ba4\u4f7f\u7528\u5feb\u901f\u4fee\u590d\u3002"),(0,a.kt)("p",null,'\u6bd4\u5982\uff0c\u5982\u679c\u60a8\u9700\u8981\u5728\u6240\u6709\u7684Javascript\u6587\u4ef6\u4e2d\u9012\u5f52\u5730\u641c\u7d22 "donut"\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c\uff1a'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":vimgrep /donut/ **/*.js\n")),(0,a.kt)("p",null,"\u201cdonut\u201d\u7684\u641c\u7d22\u7ed3\u679c\u5b58\u50a8\u5728\u5feb\u901f\u4fee\u590d\u7a97\u53e3\u4e2d\u3002\u8981\u67e5\u770b\u5feb\u901f\u4fee\u590d\u7a97\u53e3\u7684\u7ed3\u679c\uff0c\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":copen\n")),(0,a.kt)("p",null,"\u8981\u5173\u95ed\u5feb\u901f\u4fee\u590d\u7a97\u53e3\uff0c\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":cclose\n")),(0,a.kt)("p",null,"\u5728\u5feb\u901f\u4fee\u590d\u5217\u8868\u4e2d\u5411\u524d\u6216\u5411\u540e\u904d\u5386\uff0c\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":cnext\n:cprev\n")),(0,a.kt)("p",null,"\u8df3\u81f3\u7b2c\u4e00\u4e2a\u6216\u6700\u540e\u4e00\u4e2a\u5339\u914d\u7684\u5143\u7d20\uff0c\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":cfirst\n:clast\n")),(0,a.kt)("p",null,"\u5728\u524d\u9762\u6211\u63d0\u5230\u8fc7\uff0c\u6709\u4e24\u79cd\u5feb\u901f\u4fee\u590d\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"cdo")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"cfdo")," \u3002\u5b83\u4eec\u6709\u4ec0\u4e48\u533a\u522b\uff1f",(0,a.kt)("inlineCode",{parentName:"p"},"cdo")," \u5728\u4fee\u590d\u5217\u8868\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\u4e0a\u6267\u884c\u547d\u4ee4\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},"cfdo")," \u5728\u4fee\u590d\u5217\u8868\u4e2d\u7684\u6bcf\u4e00\u4e2a\u6587\u4ef6\u4e0a\u6267\u884c\u547d\u4ee4\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u8bb2\u6e05\u695a\u4e00\u70b9\uff0c\u5047\u8bbe\u8fd0\u884c\u5b8c\u4e0a\u9762\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"vimgrep")," \u547d\u4ee4\u540e\uff0c\u60a8\u627e\u5230\u4ee5\u4e0b\u7ed3\u679c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 result in ",(0,a.kt)("inlineCode",{parentName:"li"},"file1.js")),(0,a.kt)("li",{parentName:"ul"},"10 results in ",(0,a.kt)("inlineCode",{parentName:"li"},"file2.js"))),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":cfdo %s/donut/pancake/g"),", \u8fd9\u4e2a\u547d\u4ee4\u5c06\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.js")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"file2.js")," \u4e0a\u5206\u522b\u6709\u6548\u5730\u8fd0\u884c\u4e00\u6b21",(0,a.kt)("inlineCode",{parentName:"p"},"%s/donut/pancake/g"),". \u5b83\u6267\u884c\u7684\u6b21\u6570\u4e0e ",(0,a.kt)("em",{parentName:"p"},"\u5339\u914d\u7ed3\u679c\u4e2d\u6587\u4ef6\u7684\u6570\u91cf")," \u76f8\u540c\u3002\u56e0\u4e3a\u641c\u7d22\u7ed3\u679c\u4e2d\u67092\u4e2a\u6587\u4ef6\uff0c\u56e0\u6b64Vim\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.js")," \u4e0a\u8fd0\u884c\u4e00\u6b21\u66ff\u6362\u547d\u4ee4\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file2.js")," \u4e0a\u518d\u8fd0\u884c\u4e00\u6b21\u66ff\u6362\u547d\u4ee4\u3002 \u5c3d\u7ba1\u5728\u7b2c\u4e8c\u4e2a\u6587\u4ef6\u4e2d\u670910\u4e2a\u641c\u7d22\u7ed3\u679c\uff0c\u4f46 ",(0,a.kt)("inlineCode",{parentName:"p"},"cfdo")," \u53ea\u5173\u6ce8\u5feb\u901f\u4fee\u590d\u5217\u8868\u4e2d\u6709\u591a\u5c11\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u800c\u5982\u679c\u60a8\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":cdo %s/donut/pancake/g")," \uff0c\u8fd9\u4e2a\u547d\u4ee4\u5c06\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.js")," \u4e0a\u6709\u6548\u8fd0\u884c\u4e00\u6b21\uff0c\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file2.js")," \u4e0a\u8fd0\u884c10\u6b21\u3002\u5b83\u6267\u884c\u7684\u6b21\u6570\u4e0e ",(0,a.kt)("em",{parentName:"p"},"\u5feb\u901f\u4fee\u590d\u5217\u8868\u4e2d\u5143\u7d20\u7684\u6570\u91cf")," \u76f8\u540c\u3002\u56e0\u4e3a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.js")," \u4e0a\u627e\u52301\u4e2a\u5339\u914d\u7ed3\u679c\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file2.js")," \u4e0a\u627e\u523010\u4e2a\u5339\u914d\u7ed3\u679c\uff0c\u56e0\u6b64\u5b83\u6267\u884c\u7684\u603b\u6b21\u6570\u662f11\u6b21\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u60a8\u8981\u5728\u5217\u8868\u4e2d\u8fd0\u884c\u7684\u547d\u4ee4\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"%s/donut/pancake/g")," \uff0c\u6240\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cfdo"),"\u547d\u4ee4\u662f\u6bd4\u8f83\u5408\u7406\u7684\u3002\u800c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cdo")," \u662f\u4e0d\u5408\u7406\u7684\uff0c\u56e0\u4e3a\u5b83\u5c06\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file2.js")," \u4e2d\u8fd0\u884c10\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"%s/donut/pancake/g"),"\u547d\u4ee4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"%s"),"\u5df2\u7ecf\u662f\u4e00\u4e2a\u9488\u5bf9\u6574\u4e2a\u6587\u4ef6\u7684\u66ff\u6362\u64cd\u4f5c\uff09\u3002\u4e00\u4e2a\u6587\u4ef6\u8fd0\u884c\u4e00\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"%s")," \u5c31\u8db3\u591f\u4e86\u3002\u5982\u679c\u60a8\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cdo"),"\uff0c\u5219\u4f20\u7ed9\u5b83\u7684\u547d\u4ee4\u5e94\u5f53\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"s/donut/pancake/g")," \u624d\u662f\u5408\u7406\u7684\u3002"),(0,a.kt)("p",null,"\u90a3\u5230\u5e95\u4ec0\u4e48\u65f6\u5019\u8be5\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cfdo"),"\uff1f\u4ec0\u4e48\u65f6\u5019\u8be5\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cdo"),"\uff1f\t\u8fd9\u5e94\u5f53\u60f3\u4e00\u60f3\u60a8\u8981\u4f20\u9012\u7684\u547d\u4ee4\u7684\u4f5c\u7528\u57df\uff0c\u8981\u770b\u547d\u4ee4\u4f5c\u7528\u57df\u662f\u6574\u4e2a\u6587\u4ef6\uff08\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},":%s")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},":g"),"\uff09\uff1f\u8fd8\u662f\u67d0\u4e00\u884c\uff08\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},":s")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},":!"),"\uff09\uff1f"),(0,a.kt)("h2",{id:"\u4f4d\u7f6e\u5217\u8868"},"\u4f4d\u7f6e\u5217\u8868"),(0,a.kt)("p",null,"\u4f4d\u7f6e\u5217\u8868\u5728\u67d0\u79cd\u610f\u4e49\u4e0a\u548c\u5feb\u901f\u4fee\u590d\u5217\u8868\u5f88\u50cf\u3002Vim\u4e5f\u4f7f\u7528\u4e00\u4e2a\u7279\u6b8a\u7684\u7a97\u53e3\u6765\u663e\u793a\u4f4d\u7f6e\u5217\u8868\u7684\u4fe1\u606f\u3002\u533a\u522b\u5728\u4e8e\uff1a\u60a8\u4efb\u4f55\u65f6\u5019\u90fd\u53ea\u80fd\u67091\u4e2a\u5feb\u901f\u4fee\u590d\u5217\u8868\uff0c\u800c\u4f4d\u7f6e\u5217\u8868\u5219\u662f\uff0c\u6709\u591a\u5c11\u4e2a\u7a97\u53e3\u5c31\u53ef\u4ee5\u6709\u591a\u5c11\u4e2a\u4f4d\u7f6e\u5217\u8868\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u60a8\u6253\u5f00\u4e86\u4e24\u4e2a\u7a97\u53e3\uff0c\u5176\u4e2d\u4e00\u4e2a\u7a97\u53e3\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"food.txt")," \uff0c\u800c\u53e6\u4e00\u4e2a\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"drinks.txt"),"\u3002\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"food.txt"),"\u91cc\u9762\uff0c\u8fd0\u884c\u4e00\u4e2a\u4f4d\u7f6e\u5217\u8868\u641c\u7d22\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"p"},":lvimgrep")," \uff08",(0,a.kt)("inlineCode",{parentName:"p"},":vimgrep"),"\u547d\u4ee4\u5173\u4e8e\u4f4d\u7f6e\u5217\u8868\u7684\u4e00\u4e2a\u53d8\u4f53\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":lvim /bagel/ **/*.md\n")),(0,a.kt)("p",null,"Vim\u5c06\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"food.txt"),"\u6240\u5728 ",(0,a.kt)("em",{parentName:"p"},"\u7a97\u53e3"),"\u521b\u5efa\u4e00\u4e2a\u4f4d\u7f6e\u5217\u8868\uff0c\u7528\u4e8e\u5b58\u50a8\u6240\u6709\u7684bagel\u641c\u7d22\u7ed3\u679c\u3002\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":lopen"),"\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u4f4d\u7f6e\u5217\u8868\u3002\u73b0\u5728\u8f6c\u5230\u53e6\u4e00\u4e2a\u7a97\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"drinks.txt"),"\uff0c\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":lvimgrep /milk/ **/*.md\n")),(0,a.kt)("p",null,"Vim\u5c06\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"drinks.txt"),"\u6240\u5728 ",(0,a.kt)("em",{parentName:"p"},"\u7a97\u53e3"),"\u518d\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("em",{parentName:"p"},"\u5355\u72ec"),"\u7684\u4f4d\u7f6e\u5217\u8868\uff0c\u7528\u4e8e\u5b58\u50a8\u6240\u6709\u5173\u4e8emilk\u7684\u641c\u7d22\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a\u4e0d\u540c\u7684\u7a97\u53e3\u4e2d\u60a8\u8fd0\u884c\u7684\u4f4d\u7f6e\u547d\u4ee4\uff0cVim\u90fd\u4f1a\u5355\u72ec\u521b\u5efa\u4e00\u4e2a\u4f4d\u7f6e\u5217\u8868\u3002\u5982\u679c\u60a8\u670910\u4e2a\u4e0d\u540c\u7684\u7a97\u53e3\uff0c\u60a8\u5c31\u53ef\u4ee5\u6709\u6700\u591a10\u4e2a\u4e0d\u540c\u7684\u4f4d\u7f6e\u5217\u8868\u3002\u5bf9\u6bd4\u524d\u9762\u4ecb\u7ecd\u7684\u5feb\u901f\u4fee\u590d\u5217\u8868\uff0c\u5feb\u901f\u4fee\u590d\u5217\u8868\u4efb\u4f55\u65f6\u5019\u90fd\u53ea\u80fd\u67091\u4e2a\u3002\u5c31\u7b97\u60a8\u670910\u4e2a\u4e0d\u540c\u7684\u7a97\u53e3\uff0c\u60a8\u4e5f\u53ea\u80fd\u67091\u4e2a\u5feb\u901f\u4fee\u590d\u5217\u8868\u3002"),(0,a.kt)("p",null,"\u5927\u591a\u6570\u4f4d\u7f6e\u5217\u8868\u547d\u4ee4\u90fd\u548c\u5feb\u901f\u4fee\u590d\u5217\u8868\u547d\u4ee4\u76f8\u4f3c\uff0c\u552f\u4e00\u4e0d\u540c\u5c31\u662f\u4f4d\u7f6e\u5217\u8868\u547d\u4ee4\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"l-"),"\u524d\u7f00\uff0c\u6bd4\u5982\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},":lvimgrep"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":lgrep"),", \u8fd8\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},":lmake"),"\u3002\u5728\u5feb\u901f\u4fee\u590d\u5217\u8868\u547d\u4ee4\u4e2d\u4e0e\u4e4b\u5bf9\u5e94\u7684\u662f: ",(0,a.kt)("inlineCode",{parentName:"p"},":vimgrep"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":grep"),", \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},":make"),"\u3002\u64cd\u4f5c\u4f4d\u7f6e\u5217\u8868\u7a97\u53e3\u7684\u65b9\u5f0f\u548c\u5feb\u901f\u4fee\u590d\u7a97\u53e3\u4e5f\u5f88\u76f8\u4f3c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},":lopen"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":lclose"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":lfirst"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":llast"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":lnext"),", \u8fd8\u6709",(0,a.kt)("inlineCode",{parentName:"p"},":lprev"),"\uff0c\u4e0e\u4e4b\u5bf9\u5e94\u5feb\u901f\u4fee\u590d\u7248\u672c\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},":copen"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":cclose"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":cfirst"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":clast"),", ",(0,a.kt)("inlineCode",{parentName:"p"},":cnext"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},":cprev"),"\u3002"),(0,a.kt)("p",null,"\u4e24\u4e2a\u4f4d\u7f6e\u5217\u8868\u53c2\u6570\u7684\u591a\u6587\u4ef6\u64cd\u4f5c\u547d\u4ee4\u4e5f\u548c\u5feb\u901f\u4fee\u590d\u5217\u8868\u7684\u591a\u6587\u4ef6\u64cd\u4f5c\u547d\u4ee4\u4e5f\u5f88\u7c7b\u4f3c\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},":ldo")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},":lfdo"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},":ldo")," \u5bf9\u4f4d\u7f6e\u5217\u8868\u4e2d\u6bcf\u4e00\u4e2a\u5143\u7d20\u6267\u884c\u547d\u4ee4\uff0c\u800c ",(0,a.kt)("inlineCode",{parentName:"p"},":lfdo")," \u5bf9\u4f4d\u7f6e\u5217\u8868\u4e2d\u6bcf\u4e00\u4e2a\u6587\u4ef6\u6267\u884c\u547d\u4ee4\u3002\u53ef\u4ee5\u67e5\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},":h location-list"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"\u5728vim\u4e2d\u8fd0\u884c\u591a\u6587\u4ef6\u64cd\u4f5c\u547d\u4ee4"},"\u5728Vim\u4e2d\u8fd0\u884c\u591a\u6587\u4ef6\u64cd\u4f5c\u547d\u4ee4"),(0,a.kt)("p",null,"\u5728\u7f16\u8f91\u5de5\u4f5c\u4e2d\uff0c\u77e5\u9053\u5982\u4f55\u8fdb\u884c\u591a\u6587\u4ef6\u64cd\u4f5c\u662f\u4e00\u4e2a\u975e\u5e38\u6709\u7528\u7684\u6280\u80fd\u3002\u5f53\u60a8\u9700\u8981\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u6539\u53d8\u4e00\u4e2a\u53d8\u91cf\u540d\u5b57\u7684\u65f6\u5019\uff0c\u60a8\u80af\u5b9a\u60f3\u4e00\u4e2a\u64cd\u4f5c\u5c31\u5168\u90e8\u641e\u5b9a\u3002Vim\u67098\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u652f\u6301\u4f60\u5b8c\u6210\u8fd9\u4e2a\u4e8b\u3002"),(0,a.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u60a8\u53ef\u80fd\u5e76\u4e0d\u4f1a\u7528\u5230\u6240\u67098\u79cd\u65b9\u6cd5\u3002\u60a8\u4f1a\u6162\u6162\u503e\u5411\u4e8e\u5176\u4e2d1\u4e2d\u62162\u79cd\u3002\u5f53\u60a8\u521a\u5f00\u59cb\u65f6\uff0c\u9009\u62e9\u5176\u4e2d1\u4e2a\uff08\u6211\u4e2a\u4eba\u5efa\u8bae\u4ece\u53c2\u6570\u5217\u8868\u5f00\u59cb ",(0,a.kt)("inlineCode",{parentName:"p"},":argdo"),"\uff09\u5e76\u638c\u63e1\u5b83\u3002\u5f53\u60a8\u4e60\u60ef\u4e86\u5176\u4e2d1\u4e2a\uff0c\u7136\u540e\u518d\u5b66\u4e0b\u4e00\u4e2a\u3002\u60a8\u5c06\u4f1a\u53d1\u73b0\uff0c\u5b66\u4e60\u7b2c\u4e8c\u4e2a\u3001\u7b2c\u4e09\u4e2a\u3001\u7b2c\u56db\u4e2a\u65f6\u8981\u5bb9\u6613\u591a\u4e86\u3002\u8bb0\u5f97\u8981\u521b\u9020\u6027\u7684\u4f7f\u7528\uff0c\u5373\u5c06\u5b83\u548c\u5176\u4ed6\u5404\u79cd\u4e0d\u540c\u547d\u4ee4\u7ec4\u5408\u8d77\u6765\u4f7f\u7528\u3002\u575a\u6301\u7ec3\u4e60\u76f4\u5230\u60a8\u53ef\u4ee5\u4e0d\u7ecf\u601d\u8003\u5730\u9ad8\u6548\u7684\u4f7f\u7528\u5b83\u3002\u8ba9\u5b83\u6210\u4e3a\u60a8\u7684\u808c\u8089\u8bb0\u5fc6\u3002"),(0,a.kt)("p",null,"\u5c31\u50cf\u524d\u9762\u5df2\u7ecf\u8bf4\u8fc7\u7684\uff0c\u60a8\u73b0\u5728\u5df2\u7ecf\u638c\u63e1\u4e86Vim\u7684\u7f16\u8f91\u529f\u80fd\u3002\u606d\u559c\u60a8\uff01"))}m.isMDXComponent=!0}}]);