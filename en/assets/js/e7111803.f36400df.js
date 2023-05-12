"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7836],{1229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var l=t(87462),i=(t(67294),t(3905));t(16758);const a={title:"\u6298\u53e0",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},p="\u7b2c17\u7ae0 \u6298\u53e0",o={unversionedId:"others/Vim/ch17_fold",id:"others/Vim/ch17_fold",title:"\u6298\u53e0",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch17_fold.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch17_fold",permalink:"/en/docs/others/Vim/ch17_fold",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch17_fold.md",tags:[{label:"VIM",permalink:"/en/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/en/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1683864025,formattedLastUpdatedAt:"May 12, 2023",frontMatter:{title:"\u6298\u53e0",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u6807\u7b7e",permalink:"/en/docs/others/Vim/ch16_tags"},next:{title:"Git",permalink:"/en/docs/others/Vim/ch18_git"}},m={},r=[{value:"\u624b\u52a8\u6298\u53e0",id:"\u624b\u52a8\u6298\u53e0",level:2},{value:"\u4e0d\u540c\u7684\u6298\u53e0\u65b9\u6cd5",id:"\u4e0d\u540c\u7684\u6298\u53e0\u65b9\u6cd5",level:2},{value:"\u7f29\u8fdb\u6298\u53e0",id:"\u7f29\u8fdb\u6298\u53e0",level:2},{value:"\u8868\u8fbe\u5f0f\u6298\u53e0",id:"\u8868\u8fbe\u5f0f\u6298\u53e0",level:2},{value:"\u8bed\u6cd5\u6298\u53e0",id:"\u8bed\u6cd5\u6298\u53e0",level:2},{value:"\u5dee\u5f02\u6298\u53e0",id:"\u5dee\u5f02\u6298\u53e0",level:2},{value:"\u6807\u5fd7\u6298\u53e0",id:"\u6807\u5fd7\u6298\u53e0",level:2},{value:"\u6301\u4e45\u5316\u6298\u53e0",id:"\u6301\u4e45\u5316\u6298\u53e0",level:2},{value:"\u806a\u660e\u5730\u5b66\u4e60\u6298\u53e0",id:"\u806a\u660e\u5730\u5b66\u4e60\u6298\u53e0",level:2}],k={toc:r};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,l.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7b2c17\u7ae0-\u6298\u53e0"},"\u7b2c17\u7ae0 \u6298\u53e0"),(0,i.kt)("p",null,"\u5728\u9605\u8bfb\u6587\u4ef6\u65f6\uff0c\u7ecf\u5e38\u4f1a\u6709\u4e00\u4e9b\u4e0d\u76f8\u5173\u7684\u6587\u672c\u4f1a\u59a8\u788d\u60a8\u7406\u89e3\u3002\u4f7f\u7528 Vim \u6298\u53e0\u53ef\u4ee5\u9690\u85cf\u8fd9\u4e9b\u4e0d\u5fc5\u8981\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u672c\u7ae0\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u4f7f\u7528\u4e0d\u540c\u7684\u6298\u53e0\u65b9\u6cd5\u3002"),(0,i.kt)("h2",{id:"\u624b\u52a8\u6298\u53e0"},"\u624b\u52a8\u6298\u53e0"),(0,i.kt)("p",null,"\u60f3\u8c61\u60a8\u6b63\u5728\u6298\u53e0\u4e00\u5f20\u7eb8\u6765\u8986\u76d6\u4e00\u4e9b\u6587\u672c\uff0c\u5b9e\u9645\u7684\u6587\u672c\u4e0d\u4f1a\u6d88\u5931\uff0c\u5b83\u4ecd\u5728\u90a3\u513f\u3002Vim \u6298\u53e0\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e0e\u6b64\u76f8\u540c\uff0c\u5b83",(0,i.kt)("em",{parentName:"p"},"\u6298\u53e0"),"\u4e00\u6bb5\u6587\u672c\uff0c\u5728\u663e\u793a\u65f6\u4f1a\u9690\u85cf\u8d77\u6765\uff0c\u4f46\u5b9e\u9645\u4e0a\u5e76\u4e0d\u4f1a\u771f\u7684\u5220\u9664\u5b83\u3002"),(0,i.kt)("p",null,"\u6298\u53e0\u64cd\u4f5c\u7b26\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"z"),'\u3002\uff08\u6298\u53e0\u7eb8\u5f20\u65f6\uff0c\u5b83\u770b\u8d77\u6765\u4e5f\u50cf\u5b57\u6bcd "z"\uff09\u3002'),(0,i.kt)("p",null,"\u5047\u8bbe\u6709\u5982\u4e0b\u6587\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Fold me\nHold me\n")),(0,i.kt)("p",null,"\u628a\u5149\u6807\u653e\u5728\u7b2c\u4e00\u884c\uff0c\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"zfj"),"\u3002Vim \u5c06\u8fd9\u4e24\u884c\u6298\u53e0\u6210\u4e00\u884c\uff0c\u540c\u65f6\u4f1a\u770b\u5230\u7c7b\u4f3c\u6d88\u606f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+-- 2 lines: Fold me -----\n")),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u5206\u89e3\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zf")," \u662f\u6298\u53e0\u64cd\u4f5c\u7b26\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"j")," \u662f\u7528\u4e8e\u6298\u53e0\u64cd\u4f5c\u7b26\u7684\u52a8\u4f5c\u3002")),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"zo")," \u6253\u5f00/\u5c55\u5f00\u5df2\u6298\u53e0\u6587\u672c\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"zc")," \u5173\u95ed/\u6536\u7f29\u6587\u672c\u3002"),(0,i.kt)("p",null,"\u6298\u53e0\u662f\u4e00\u4e2a\u64cd\u4f5c\u7b26\uff0c\u6240\u4ee5\u5b83\u9075\u5faa\u8bed\u6cd5\u89c4\u5219\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"\u52a8\u8bcd+\u540d\u8bcd"),"\uff09\u3002\u60a8\u53ef\u4ee5\u5728\u6298\u53e0\u8fd0\u7b97\u7b26\u540e\uff0c\u52a0\u4e0a\u4e00\u4e2a\u52a8\u4f5c(motion)\u6216\u6587\u672c\u5bf9\u8c61\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"zfip")," \u53ef\u4ee5\u6298\u53e0\u5185\u90e8\u6bb5\u843d\uff1b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"zfG")," \u53ef\u4ee5\u6298\u53e0\u81f3\u6587\u4ef6\u672b\u5c3e\uff1b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"zfa{")," \u53ef\u4ee5\u6298\u53e0 ",(0,i.kt)("inlineCode",{parentName:"p"},"{")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"}")," \u4e4b\u95f4\u7684\u6587\u672c\u3002"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u53ef\u89c6\u6a21\u5f0f\u4e0b\u8fdb\u884c\u6298\u53e0\u3002\u9ad8\u4eae\u60a8\u60f3\u8981\u6298\u53e0\u7684\u533a\u57df\u540e (",(0,i.kt)("inlineCode",{parentName:"p"},"v"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"V"),", \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl-v"),")\uff0c\u518d\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"zf")," \u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e0b\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},":fold")," \u547d\u4ee4\u6267\u884c\u4e00\u6b21\u6298\u53e0\u3002\u82e5\u8981\u6298\u53e0\u5f53\u524d\u884c\u53ca\u7d27\u968f\u5176\u540e\u7684\u7b2c\u4e8c\u884c\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":,+1fold\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},",+1")," \u662f\u8981\u6298\u53e0\u7684\u8303\u56f4\u3002\u5982\u679c\u4e0d\u4f20\u9012\u8303\u56f4\u53c2\u6570\uff0c\u9ed8\u8ba4\u5f53\u524d\u884c\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"+1")," \u662f\u4ee3\u8868\u4e0b\u4e00\u884c\u7684\u8303\u56f4\u6307\u793a\u5668\u3002\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},":5,10fold")," \u53ef\u4ee5\u6298\u53e0\u7b2c5\u81f310\u884c\u3002\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},":,$fold")," \u53ef\u4ee5\u6298\u53e0\u5f53\u524d\u884c\u81f3\u6587\u4ef6\u672b\u5c3e\u3002"),(0,i.kt)("p",null,"\u8fd8\u6709\u8bb8\u591a\u5176\u4ed6\u6298\u53e0\u548c\u5c55\u5f00\u7684\u547d\u4ee4\u3002\u6211\u53d1\u73b0\u4ed6\u4eec\u5b9e\u5728\u592a\u591a\uff0c\u4ee5\u81f3\u4e8e\u5728\u521a\u8d77\u6b65\u65f6\u5f88\u96be\u8bb0\u4f4f\u3002\u6700\u6709\u7528\u7684\u4e00\u4e9b\u547d\u4ee4\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zR")," \u5c55\u5f00\u6240\u6709\u6298\u53e0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zM")," \u6536\u7f29\u6240\u6709\u6298\u53e0\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"za")," \u5207\u6362\u6298\u53e0\u72b6\u6001\u3002")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"zR")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"zM")," \u53ef\u7528\u4e8e\u4efb\u610f\u884c\u4e0a\uff0c\u4f46 ",(0,i.kt)("inlineCode",{parentName:"p"},"za")," \u4ec5\u80fd\u7528\u4e8e\u5df2\u6298\u53e0/\u672a\u6298\u53e0\u7684\u884c\u4e0a\u3002\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},":h fold-commands")," \u53ef\u67e5\u9605\u66f4\u591a\u6709\u5173\u6298\u53e0\u7684\u6307\u4ee4\u3002"),(0,i.kt)("h2",{id:"\u4e0d\u540c\u7684\u6298\u53e0\u65b9\u6cd5"},"\u4e0d\u540c\u7684\u6298\u53e0\u65b9\u6cd5"),(0,i.kt)("p",null,"\u4ee5\u4e0a\u90e8\u5206\u6db5\u76d6\u4e86 Vim \u624b\u52a8\u6298\u53e0\u7684\u5185\u5bb9\u3002\u5b9e\u9645\u4e0a\uff0cVim \u6709\u516d\u79cd\u4e0d\u540c\u7684\u6298\u53e0\u65b9\u6cd5\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u624b\u52a8\u6298\u53e0"),(0,i.kt)("li",{parentName:"ol"},"\u7f29\u8fdb\u6298\u53e0"),(0,i.kt)("li",{parentName:"ol"},"\u8868\u8fbe\u5f0f\u6298\u53e0"),(0,i.kt)("li",{parentName:"ol"},"\u8bed\u6cd5\u6298\u53e0"),(0,i.kt)("li",{parentName:"ol"},"\u5dee\u5f02\u6298\u53e0"),(0,i.kt)("li",{parentName:"ol"},"\u6807\u5fd7\u6298\u53e0")),(0,i.kt)("p",null,"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},":set foldmethod?")," \u53ef\u67e5\u770b\u60a8\u5f53\u524d\u6b63\u5728\u4f7f\u7528\u54ea\u4e00\u79cd\u6298\u53e0\u65b9\u5f0f\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cVim \u4f7f\u7528\u624b\u52a8\u65b9\u5f0f\u3002"),(0,i.kt)("p",null,"\u5728\u672c\u7ae0\u7684\u5269\u4f59\u90e8\u5206\uff0c\u60a8\u5c06\u5b66\u4e60\u5176\u4ed6\u4e94\u79cd\u6298\u53e0\u65b9\u6cd5\u3002\u8ba9\u6211\u4eec\u4ece\u7f29\u8fdb\u6298\u53e0\u5f00\u59cb\u3002"),(0,i.kt)("h2",{id:"\u7f29\u8fdb\u6298\u53e0"},"\u7f29\u8fdb\u6298\u53e0"),(0,i.kt)("p",null,"\u8981\u4f7f\u7528\u7f29\u8fdb\u6298\u53e0\uff0c\u9700\u8981\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"'foldmethod'")," \u9009\u9879\u66f4\u6539\u4e3a\u7f29\u8fdb\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":set foldmethod=indent\n")),(0,i.kt)("p",null,"\u5047\u8bbe\u6709\u5982\u4e0b\u6587\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"One\n  Two\n  Two again\n")),(0,i.kt)("p",null,"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},":set foldmethod=indent")," \u540e\u5c06\u770b\u5230\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"One\n+-- 2 lines: Two -----\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u7f29\u8fdb\u6298\u53e0\u540e\uff0cVim \u5c06\u4f1a\u67e5\u770b\u6bcf\u884c\u7684\u5f00\u5934\u6709\u591a\u5c11\u7a7a\u683c\uff0c\u5e76\u5c06\u5b83\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"'shiftwidth'")," \u9009\u9879\u8fdb\u884c\u6bd4\u8f83\uff0c\u4ee5\u6b64\u6765\u51b3\u5b9a\u8be5\u884c\u53ef\u6298\u53e0\u6027\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"'shiftwidth'")," \u8fd4\u56de\u6bcf\u6b21\u7f29\u8fdb\u6240\u9700\u7684\u7a7a\u683c\u6570\u3002\u5982\u679c\u8fd0\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":set shiftwidth?\n")),(0,i.kt)("p",null,"Vim \u7684\u9ed8\u8ba4 ",(0,i.kt)("inlineCode",{parentName:"p"},"'shiftwidth'"),' \u503c\u4e3a2\u3002\u5bf9\u4e8e\u4e0a\u9762\u7684\u6587\u672c\u800c\u8a00\uff0c"Two" \u548c "Two again" \u7684\u5f00\u5934\u90fd\u6709\u4e24\u4e2a\u7a7a\u683c\u3002\u5f53 Vim \u770b\u5230\u4e86\u7a7a\u683c\u6570 ',(0,i.kt)("em",{parentName:"p"},"\u4e14")," ",(0,i.kt)("inlineCode",{parentName:"p"},"'shiftwidth'"),"\u503c\u90fd\u4e3a2\u65f6\uff0cVim \u8ba4\u4e3a\u8be5\u884c\u7684\u7f29\u8fdb\u6298\u53e0\u7ea7\u522b\u4e3a1\u3002"),(0,i.kt)("p",null,"\u5047\u8bbe\u8fd9\u6b21\u6587\u672c\u5f00\u5934\u53ea\u6709\u4e00\u4e2a\u7a7a\u683c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"One\n Two\n Two again\n")),(0,i.kt)("p",null,"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},":set foldmethod=indent")," \u540e\uff0cVim \u4e0d\u518d\u6298\u53e0\u5df2\u7f29\u8fdb\u7684\u884c\u4e86\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u884c\u6ca1\u6709\u8db3\u591f\u7684\u7a7a\u683c\u30021\u4e2a\u7a7a\u683c\u4e0d\u4f1a\u88ab\u89c6\u4f5c\u4e00\u4e2a\u7f29\u8fdb\u3002\u7136\u800c\uff0c\u5f53\u60a8\u6539\u53d8 ",(0,i.kt)("inlineCode",{parentName:"p"},"'shiftwidth' ")," \u7684\u503c\u4e3a1\u540e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":set shiftwidth=1\n")),(0,i.kt)("p",null,"\u6587\u672c\u73b0\u5728\u53ef\u4ee5\u6298\u53e0\u4e86\uff01\u73b0\u5728\u4e00\u4e2a\u7a7a\u683c\u5c06\u88ab\u89c6\u4e3a\u4e00\u4e2a\u7f29\u8fdb\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"'shiftwidth' ")," \u4ee5\u53ca\u6587\u672c\u5f00\u5934\u7684\u7a7a\u683c\u6570\u90fd\u91cd\u65b0\u6062\u590d\u4e3a2\u540e\uff0c\u53e6\u5916\u6dfb\u52a0\u4e00\u4e9b\u5185\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"One\n  Two\n  Two again\n    Three\n    Three again\n")),(0,i.kt)("p",null,"\u8fd0\u884c\u6298\u53e0\u547d\u4ee4 (",(0,i.kt)("inlineCode",{parentName:"p"},"zM"),") \u540e\u53ef\u4ee5\u770b\u5230\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"One\n+-- 4 lines: Two -----\n")),(0,i.kt)("p",null,"\u5c55\u5f00\u5df2\u6298\u53e0\u7684\u884c (",(0,i.kt)("inlineCode",{parentName:"p"},"zR"),')\uff0c\u63a5\u7740\u79fb\u52a8\u5149\u6807\u81f3 "Three"\uff0c\u7136\u540e\u5207\u6362\u6587\u672c\u7684\u6298\u53e0\u72b6\u6001 (',(0,i.kt)("inlineCode",{parentName:"p"},"za"),")\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"One\n  Two\n  Two again\n+-- 2 lines: Three -----\n")),(0,i.kt)("p",null,"\u8fd9\u662f\u5565\uff1f\u53e0\u4e2d\u53e0\uff1f"),(0,i.kt)("p",null,'\u662f\u7684\uff0c\u60a8\u53ef\u4ee5\u5d4c\u5957\u6298\u53e0\u3002\u6587\u672c "Two" \u548c "Two again" \u7684\u6298\u53e0\u7ea7\u522b\u90fd\u4e3a1\uff0c\u6587\u672c "Three" \u548c "Three again" \u7684\u6298\u53e0\u7ea7\u522b\u90fd\u4e3a2\u3002\u5982\u679c\u5728\u4e00\u6bb5\u53ef\u6298\u53e0\u6587\u672c\u4e2d\uff0c\u5177\u6709\u53e6\u4e00\u6bb5\u6298\u53e0\u7ea7\u522b\u66f4\u9ad8\u7684\u53ef\u6298\u53e0\u6587\u672c\uff0c\u5219\u53ef\u4ee5\u5177\u6709\u591a\u4e2a\u6298\u53e0\u5c42\u3002'),(0,i.kt)("h2",{id:"\u8868\u8fbe\u5f0f\u6298\u53e0"},"\u8868\u8fbe\u5f0f\u6298\u53e0"),(0,i.kt)("p",null,"\u8868\u8fbe\u5f0f\u6298\u53e0\u5141\u8bb8\u60a8\u5b9a\u4e49\u8981\u5339\u914d\u6298\u53e0\u7684\u8868\u8fbe\u5f0f\u3002\u5b9a\u4e49\u6298\u53e0\u8868\u8fbe\u5f0f\u540e\uff0cVim \u4f1a\u8ba1\u7b97\u6bcf\u884c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"'foldexpr'")," \u503c\u3002\u8fd9\u662f\u5fc5\u987b\u914d\u7f6e\u7684\u53d8\u91cf\uff0c\u5b83\u8981\u8fd4\u56de\u9002\u5f53\u7684\u503c\u3002\u5982\u679c\u8fd4\u56de 0\uff0c\u5219\u4e0d\u6298\u53e0\u884c\u3002\u5982\u679c\u5b83\u8fd4\u56de 1\uff0c\u5219\u8be5\u884c\u7684\u6298\u53e0\u7ea7\u522b\u4e3a 1\u3002\u5982\u679c\u5b83\u8fd4\u56de 2\uff0c\u5219\u8be5\u7ebf\u7684\u6298\u53e0\u7ea7\u522b\u4e3a 2\u3002\u9664\u4e86\u6574\u6570\u5916\u8fd8\u6709\u5176\u4ed6\u7684\u503c\uff0c\u4f46\u6211\u4e0d\u6253\u7b97\u4ecb\u7ecd\u5b83\u4eec\u3002\u5982\u679c\u4f60\u597d\u5947\uff0c\u53ef\u4ee5\u67e5\u9605",(0,i.kt)("inlineCode",{parentName:"p"},":h fold-expr"),"\u3002"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u66f4\u6539\u6298\u53e0\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":set foldmethod=expr\n")),(0,i.kt)("p",null,'\u5047\u8bbe\u60a8\u6709\u4e00\u4efd\u65e9\u9910\u98df\u54c1\u5217\u8868\uff0c\u5e76\u4e14\u60f3\u8981\u6298\u53e0\u6240\u6709\u4ee5 "p" \u5f00\u5934\u7684\u65e9\u9910\u9879\uff1a'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"donut\npancake\npop-tarts\nprotein bar\nsalmon\nscrambled eggs\n")),(0,i.kt)("p",null,"\u5176\u6b21\uff0c\u66f4\u6539 ",(0,i.kt)("inlineCode",{parentName:"p"},"foldexpr"),' \u4e3a\u6355\u83b7\u4ee5 "p" \u5f00\u5934\u7684\u8868\u8fbe\u5f0f\uff1a'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':set foldexpr=getline(v:lnum)[0]==\\\\"p\\\\"\n')),(0,i.kt)("p",null,"\u8fd9\u8868\u8fbe\u5f0f\u770b\u8d77\u6765\u6709\u70b9\u5413\u4eba\u3002\u6211\u4eec\u6765\u5206\u89e3\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},":set foldexpr")," \u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"li"},"'foldexpr'")," \u4e3a\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getline()")," \u662f Vim \u811a\u672c\u7684\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u8fd4\u56de\u6307\u5b9a\u884c\u7684\u5185\u5bb9\u3002\u5982\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},":echo getline(5)")," \u53ef\u4ee5\u83b7\u53d6\u7b2c5\u884c\u7684\u5185\u5bb9\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"v:lnum")," \u662f Vim ",(0,i.kt)("inlineCode",{parentName:"li"},"'foldexpr'")," \u8868\u8fbe\u5f0f\u7684\u7279\u6b8a\u53d8\u91cf\u3002Vim \u5728\u626b\u63cf\u6bcf\u4e00\u884c\u65f6\uff0c\u90fd\u4f1a\u5c06\u884c\u53f7\u5b58\u50a8\u81f3 ",(0,i.kt)("inlineCode",{parentName:"li"},"v:lnum")," \u53d8\u91cf\u3002\u5728\u7b2c5\u884c\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"v:lnum")," \u503c\u4e3a5\u3002\u5728\u7b2c10\u884c\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"v:lnum"),"\u503c\u4e3a10\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[0]")," \u5904\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"getline(v:lnum)[0]")," \u8bed\u5883\u65f6\uff0c\u4ee3\u8868\u6bcf\u4e00\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u3002Vim \u5728\u626b\u63cf\u67d0\u4e00\u884c\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"getline(v:lnum)")," \u8fd4\u56de\u8be5\u884c\u7684\u5185\u5bb9\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"li"},"getline(v:lnum)[0]"),' \u5219\u8fd4\u56de\u8fd9\u4e00\u884c\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u65e9\u9910\u98df\u54c1\u5217\u8868\u7684\u7b2c\u4e00\u884c\u662f "donut"\uff0c\u5219 ',(0,i.kt)("inlineCode",{parentName:"li"},"getline(v:lnum)[0]"),' \u8fd4\u56de "d"\uff1b\u5217\u8868\u7684\u7b2c\u4e8c\u884c\u662f "pancake"\uff0c\u5219 ',(0,i.kt)("inlineCode",{parentName:"li"},"getline(v:lnum)[0]"),' \u8fd4\u56de "p"\u3002'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'==\\\\"p\\\\"'),' \u662f\u7b49\u5f0f\u8868\u8fbe\u5f0f\u7684\u540e\u534a\u90e8\u5206\uff0c\u5b83\u68c0\u67e5\u521a\u624d\u8868\u8fbe\u5f0f\u7684\u8ba1\u7b97\u7ed3\u679c\u662f\u5426\u7b49\u4e8e "p"\u3002\u5982\u679c\u662f\uff0c\u5219\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\u3002\u5728 Vim \u7684\u4e16\u754c\u91cc\uff0c1\u4ee3\u8868\u771f\uff0c0\u4ee3\u8868\u5047\u3002\u6240\u4ee5\uff0c\u90a3\u4e9b\u4ee5 "p" \u5f00\u5934\u7684\u884c\uff0c\u8868\u8fbe\u5f0f\u90fd\u4f1a\u8fd4\u56de1\u3002\u56de\u60f3\u4e00\u4e0b\u672c\u8282\u7684\u5f00\u59cb\uff0c\u5982\u679c ',(0,i.kt)("inlineCode",{parentName:"li"},"'foldexpr'")," \u7684\u503c\u4e3a1\uff0c\u5219\u6298\u53e0\u7ea7\u522b\u4e3a1\u3002")),(0,i.kt)("p",null,"\u5728\u8fd0\u884c\u8fd9\u4e2a\u8868\u8fbe\u5f0f\u540e\uff0c\u60a8\u5c06\u770b\u5230\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"donut\n+-- 3 lines: pancake -----\nsalmon\nscrambled eggs\n")),(0,i.kt)("h2",{id:"\u8bed\u6cd5\u6298\u53e0"},"\u8bed\u6cd5\u6298\u53e0"),(0,i.kt)("p",null,"\u8bed\u6cd5\u6298\u53e0\u662f\u7531Vim\u7684\u8bed\u6cd5\u9ad8\u4eae\u51b3\u5b9a\u7684\u3002\u5982\u679c\u60a8\u4f7f\u7528\u4e86\u8bed\u6cd5\u9ad8\u4eae\u63d2\u4ef6\uff0c\u6bd4\u5982",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sheerun/vim-polyglot"},"vim-polyglot"),"\uff0c\u90a3\u4e48\u88c5\u4e0a\u63d2\u4ef6\u5c31\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8bed\u6cd5\u6298\u53e0\u3002\u4ec5\u4ec5\u9700\u8981\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"foldmethod"),"\u9009\u9879\u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":set foldmethod=syntax\n")),(0,i.kt)("p",null,"\u5047\u8bbe\u60a8\u6b63\u5728\u7f16\u8f91\u4e00\u4e2aJavaScript\u6587\u4ef6\uff0c\u800c\u4e14\u60a8\u5df2\u7ecf\u88c5\u597d\u4e86 vim-polyglot \u63d2\u4ef6\u3002\u5982\u679c\u60a8\u6709\u4ee5\u4e0b\u6587\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const nums = [\n  one,\n  two,\n  three,\n  four\n]\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u6587\u672c\u5c06\u4f1a\u4f7f\u7528\u8bed\u6cd5\u6298\u53e0\u6298\u8d77\u6765\u3002\u5f53\u60a8\u4e3a\u67d0\u4e2a\u7279\u5b9a\u8bed\u8a00\uff08\u4f4d\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax/")," \u76ee\u5f55\u4e2d\u7684\u8bed\u8a00\u5373\u662f\u5178\u578b\u4f8b\u5b50\uff09\u5b9a\u4e49\u4e86\u8bed\u6cd5\u9ad8\u4eae\uff0c\u60a8\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"fold")," \u5c5e\u6027\uff0c\u4f7f\u5b83\u652f\u6301\u6298\u53e0\u3002\u4e0b\u9762\u662f vim-polyglot \u4e2dJavaScript\u8bed\u6cd5\u6587\u4ef6\u4e2d\u7684\u4e00\u4e2a\u7247\u6bb5\u3002\u6ce8\u610f\u6700\u540e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"fold")," \u5173\u952e\u5b57\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"syntax region  jsBracket                      matchgroup=jsBrackets            start=/\\[/ end=/\\]/ contains=@jsExpression,jsSpreadExpression extend fold\n")),(0,i.kt)("p",null,"\u672c\u4e66\u4e0d\u4f1a\u8be6\u7ec6\u4ecb\u7ecd ",(0,i.kt)("inlineCode",{parentName:"p"},"syntax")," \u529f\u80fd\u3002\u5982\u679c\u60a8\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u67e5\u9605 ",(0,i.kt)("inlineCode",{parentName:"p"},":h syntax.txt"),"\u3002"),(0,i.kt)("h2",{id:"\u5dee\u5f02\u6298\u53e0"},"\u5dee\u5f02\u6298\u53e0"),(0,i.kt)("p",null,"Vim \u53ef\u4ee5\u5bf9\u591a\u4e2a\u6587\u4ef6\u8fdb\u884c\u5dee\u5f02\u6bd4\u8f83\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"file1.txt"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\n")),(0,i.kt)("p",null,"\u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"p"},"file2.txt"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nemacs is ok\n")),(0,i.kt)("p",null,"\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"vimdiff file1.txt file2.txt"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+-- 3 lines: vim is awesome -----\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\nvim is awesome\n[vim is awesome] / [emacs is ok]\n")),(0,i.kt)("p",null,"Vim \u4f1a\u81ea\u52a8\u6298\u53e0\u4e00\u4e9b\u76f8\u540c\u7684\u884c\u3002\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"vimdiff")," \u547d\u4ee4\u65f6\uff0cVim \u4f1a\u81ea\u52a8\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"foldmethod=diff"),"\u3002\u6b64\u65f6\u5982\u679c\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},":set foldmethod?"),"\uff0c\u5b83\u5c06\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"diff"),"\u3002"),(0,i.kt)("h2",{id:"\u6807\u5fd7\u6298\u53e0"},"\u6807\u5fd7\u6298\u53e0"),(0,i.kt)("p",null,"\u8981\u4f7f\u7528\u6807\u5fd7\u6298\u53e0\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":set foldmethod=marker\n")),(0,i.kt)("p",null,"\u5047\u8bbe\u6709\u5982\u4e0b\u6587\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Hello\n\n{{{\nworld\nvim\n}}}\n")),(0,i.kt)("p",null,"\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"zM")," \u540e\u4f1a\u770b\u5230\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hello\n\n+-- 4 lines: -----\n")),(0,i.kt)("p",null,"Vim \u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"{{{")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"}}}")," \u89c6\u4e3a\u6298\u53e0\u6307\u793a\u5668\uff0c\u5e76\u6298\u53e0\u5176\u4e2d\u7684\u5185\u5bb9\u3002\u4f7f\u7528\u6807\u5fd7\u6298\u53e0\u65f6\uff0cVim \u4f1a\u5bfb\u627e\u7531 ",(0,i.kt)("inlineCode",{parentName:"p"},"'foldmarker'")," \u9009\u9879\u5b9a\u4e49\u7684\u7279\u6b8a\u6807\u5fd7\uff0c\u5e76\u6807\u8bb0\u6298\u53e0\u533a\u57df\u3002\u8981\u67e5\u770b Vim \u4f7f\u7528\u7684\u6807\u5fd7\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":set foldmarker?\n")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cVim \u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"{{{")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"}}}"),' \u4f5c\u4e3a\u6307\u793a\u5668\u3002\u5982\u679c\u60a8\u60f3\u5c06\u6307\u793a\u5668\u66f4\u6539\u4e3a\u5176\u4ed6\u8bf8\u5982 "coffee1" \u548c "coffee2" \u7684\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":set foldmarker=coffee1,coffee2\n")),(0,i.kt)("p",null,"\u5047\u8bbe\u6709\u5982\u4e0b\u6587\u672c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hello\n\ncoffee1\nworld\nvim\ncoffee2\n")),(0,i.kt)("p",null,"\u73b0\u5728\uff0cVim \u5c06\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"coffee1")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"coffee2")," \u4f5c\u4e3a\u65b0\u6298\u53e0\u6807\u5fd7\u3002\u6ce8\u610f\uff0c\u6307\u793a\u5668\u5fc5\u987b\u662f\u6587\u672c\u5b57\u7b26\u4e32\uff0c\u4e0d\u80fd\u662f\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,i.kt)("h2",{id:"\u6301\u4e45\u5316\u6298\u53e0"},"\u6301\u4e45\u5316\u6298\u53e0"),(0,i.kt)("p",null,"\u5f53\u5173\u95ed Vim \u4f1a\u8bdd\u540e\uff0c\u60a8\u5c06\u5931\u53bb\u6240\u6709\u7684\u6298\u53e0\u4fe1\u606f\u3002\u5047\u8bbe\u60a8\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"count.txt")," \u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"one\ntwo\nthree\nfour\nfive\n")),(0,i.kt)("p",null,"\u624b\u52a8\u4ece\u7b2c\u4e09\u884c\u5f00\u59cb\u5f80\u4e0b\u6298\u53e0 (",(0,i.kt)("inlineCode",{parentName:"p"},":3,$fold"),")\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"one\ntwo\n+-- 3 lines: three ---\n")),(0,i.kt)("p",null,"\u5f53\u60a8\u9000\u51fa Vim \u518d\u91cd\u65b0\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"count.txt")," \u540e\uff0c\u8fd9\u4e9b\u6298\u53e0\u90fd\u4e0d\u89c1\u4e86\uff01"),(0,i.kt)("p",null,"\u8981\u5728\u6298\u53e0\u540e\u4fdd\u7559\u5b83\u4eec\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":mkview\n")),(0,i.kt)("p",null,"\u5f53\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},"count.txt")," \u540e\uff0c\u8fd0\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":loadview\n")),(0,i.kt)("p",null,"\u60a8\u7684\u6298\u53e0\u4fe1\u606f\u90fd\u88ab\u4fdd\u7559\u4e0b\u6765\u4e86\u3002\u7136\u800c\uff0c\u60a8\u9700\u8981\u624b\u52a8\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"mkview")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"loadview"),"\u3002\u6211\u77e5\u9053\uff0c\u7ec8\u6709\u4e00\u65e5\uff0c\u6211\u4f1a\u5fd8\u8bb0\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"mkview")," \u5c31\u5173\u95ed\u6587\u4ef6\u4e86\uff0c\u63a5\u7740\u4fbf\u4f1a\u4e22\u5931\u6240\u6709\u6298\u53e0\u4fe1\u606f\u3002\u80fd\u4e0d\u80fd\u81ea\u52a8\u5b9e\u73b0\u8fd9\u4e2a\u5462\uff1f"),(0,i.kt)("p",null,"\u5f53\u7136\u80fd\uff01\u8981\u5728\u5173\u95ed ",(0,i.kt)("inlineCode",{parentName:"p"},".txt")," \u6587\u4ef6\u65f6\u81ea\u52a8\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"mkview"),"\uff0c\u4ee5\u53ca\u5728\u6253\u5f00 ",(0,i.kt)("inlineCode",{parentName:"p"},".txt")," \u6587\u4ef6\u540e\u81ea\u52a8\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"loadview"),"\uff0c\u5c06\u4e0b\u5217\u5185\u5bb9\u6dfb\u52a0\u81f3\u60a8\u7684 vimrc\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"autocmd BufWinLeave *.txt mkview\nautocmd BufWinEnter *.txt silent loadview\n")),(0,i.kt)("p",null,"\u5728\u4e0a\u4e00\u7ae0\u60a8\u5df2\u7ecf\u89c1\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"autocmd")," \u4e86\uff0c\u5b83\u7528\u4e8e\u5728\u4e8b\u4ef6\u89e6\u53d1\u65f6\u6267\u884c\u4e00\u6761\u547d\u4ee4\u3002\u8fd9\u91cc\u7684\u4e24\u4e2a\u4e8b\u4ef6\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BufWinLeave")," \u4ece\u7a97\u53e3\u4e2d\u5220\u9664\u7f13\u51b2\u65f6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BufWinEnter")," \u5728\u7a97\u53e3\u4e2d\u52a0\u8f7d\u7f13\u51b2\u65f6\u3002")),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u5373\u4f7f\u60a8\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},".txt")," \u6587\u4ef6\u5185\u6298\u53e0\u5185\u5bb9\u540e\u76f4\u63a5\u9000\u51fa Vim\uff0c\u4e0b\u6b21\u518d\u6253\u5f00\u8be5\u6587\u4ef6\u65f6\uff0c\u60a8\u7684\u6298\u53e0\u4fe1\u606f\u90fd\u80fd\u81ea\u52a8\u6062\u590d\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"mkview")," \u65f6\uff0cVim\u5c06\u6298\u53e0\u4fe1\u606f\u4fdd\u5b58\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"~/.vim/view")," (Unix \u7cfb\u7edf)\u3002\u60a8\u53ef\u4ee5\u67e5\u9605 ",(0,i.kt)("inlineCode",{parentName:"p"},":h 'viewdir'")," \u6765\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,i.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60\u6298\u53e0"},"\u806a\u660e\u5730\u5b66\u4e60\u6298\u53e0"),(0,i.kt)("p",null,"\u5f53\u6211\u521a\u5f00\u59cb\u4f7f\u7528 Vim \u65f6\uff0c \u6211\u4f1a\u8df3\u8fc7\u5b66\u4e60 Vim \u6298\u53e0\uff0c\u56e0\u4e3a\u6211\u89c9\u5f97\u5b83\u4e0d\u592a\u5b9e\u7528\u3002\u7136\u800c\uff0c\u968f\u7740\u6211\u7801\u9f84\u7684\u589e\u957f\uff0c\u6211\u8d8a\u53d1\u89c9\u5f97\u6298\u53e0\u529f\u80fd\u5927\u6709\u7528\u5904\u3002\u5f97\u5f53\u5730\u4f7f\u7528\u6298\u53e0\u529f\u80fd\uff0c\u6587\u672c\u7ed3\u6784\u53ef\u4ee5\u66f4\u52a0\u6e05\u6670\uff0c\u72b9\u5982\u4e00\u672c\u4e66\u7c4d\u7684\u76ee\u5f55\u3002"),(0,i.kt)("p",null,"\u5f53\u60a8\u5b66\u4e60\u6298\u53e0\u65f6\uff0c\u8bf7\u4ece\u624b\u52a8\u6298\u53e0\u5f00\u59cb\uff0c\u56e0\u4e3a\u5b83\u53ef\u4ee5\u968f\u5b66\u968f\u7528\u3002\u7136\u540e\u9010\u6e10\u5b66\u4e60\u4e0d\u540c\u7684\u6280\u5de7\u6765\u4f7f\u7528\u7f29\u8fdb\u548c\u6807\u5fd7\u6298\u53e0\u3002\u6700\u540e\uff0c\u5b66\u4e60\u5982\u4f55\u4f7f\u7528\u8bed\u6cd5\u548c\u8868\u8fbe\u5f0f\u6298\u53e0\u3002\u60a8\u751a\u81f3\u53ef\u4ee5\u4f7f\u7528\u540e\u4e24\u4e2a\u6765\u7f16\u5199\u60a8\u81ea\u5df1\u7684 Vim \u63d2\u4ef6\u3002"))}d.isMDXComponent=!0}}]);