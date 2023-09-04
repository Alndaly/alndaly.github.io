"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7229],{26383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>k});var p=t(87462),l=(t(67294),t(3905));t(16758);const a={title:"\u7f16\u8bd1",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},i="\u7b2c19\u7ae0 \u7f16\u8bd1",r={unversionedId:"others/Vim/ch19_compile",id:"others/Vim/ch19_compile",title:"\u7f16\u8bd1",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch19_compile.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch19_compile",permalink:"/docs/others/Vim/ch19_compile",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch19_compile.md",tags:[{label:"VIM",permalink:"/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1693833086,formattedLastUpdatedAt:"2023\u5e749\u67084\u65e5",frontMatter:{title:"\u7f16\u8bd1",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"Git",permalink:"/docs/others/Vim/ch18_git"},next:{title:"\u89c6\u56fe\u3001\u4f1a\u8bdd\u548c Viminfo",permalink:"/docs/others/Vim/ch20_views_sessions_viminfo"}},m={},k=[{value:"\u4ece\u547d\u4ee4\u884c\u7f16\u8bd1",id:"\u4ece\u547d\u4ee4\u884c\u7f16\u8bd1",level:2},{value:"Make\u547d\u4ee4",id:"make\u547d\u4ee4",level:2},{value:"\u4f7f\u7528 Make \u7f16\u8bd1",id:"\u4f7f\u7528-make-\u7f16\u8bd1",level:2},{value:"\u4e0d\u540c\u7684Make\u7a0b\u5e8f",id:"\u4e0d\u540c\u7684make\u7a0b\u5e8f",level:2},{value:"\u4fdd\u5b58\u65f6\u81ea\u52a8\u7f16\u8bd1",id:"\u4fdd\u5b58\u65f6\u81ea\u52a8\u7f16\u8bd1",level:2},{value:"\u5207\u6362\u7f16\u8bd1\u5668",id:"\u5207\u6362\u7f16\u8bd1\u5668",level:2},{value:"\u521b\u5efa\u81ea\u5b9a\u4e49\u7f16\u8bd1\u5668",id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u7f16\u8bd1\u5668",level:2},{value:"\u5f02\u6b65\u7f16\u8bd1\u5668",id:"\u5f02\u6b65\u7f16\u8bd1\u5668",level:2},{value:"\u63d2\u4ef6\uff1aVim-dispatch",id:"\u63d2\u4ef6vim-dispatch",level:2},{value:"\u5f02\u6b65Make",id:"\u5f02\u6b65make",level:3},{value:"\u5f02\u6b65\u8c03\u5ea6\uff08Dispatch\uff09",id:"\u5f02\u6b65\u8c03\u5ea6dispatch",level:3},{value:"\u81ea\u52a8\u8c03\u5ea6",id:"\u81ea\u52a8\u8c03\u5ea6",level:3},{value:"\u806a\u660e\u5730\u5b66\u4e60\u7f16\u8bd1",id:"\u806a\u660e\u5730\u5b66\u4e60\u7f16\u8bd1",level:2}],o={toc:k};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,p.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b2c19\u7ae0-\u7f16\u8bd1"},"\u7b2c19\u7ae0 \u7f16\u8bd1"),(0,l.kt)("p",null,"\u7f16\u8bd1\u662f\u8bb8\u591a\u7f16\u7a0b\u8bed\u8a00\u7684\u91cd\u8981\u4e3b\u9898\u3002\u5728\u672c\u7ae0\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u5728 Vim \u4e2d\u7f16\u8bd1\u3002\u6b64\u5916\uff0c\u60a8\u5c06\u770b\u5230\u5982\u4f55\u5229\u7528\u597d Vim \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},":make")," \u547d\u4ee4\u3002"),(0,l.kt)("h2",{id:"\u4ece\u547d\u4ee4\u884c\u7f16\u8bd1"},"\u4ece\u547d\u4ee4\u884c\u7f16\u8bd1"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u53f9\u53f7\u8fd0\u7b97\u7b26\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"!"),"\uff09\u8fdb\u884c\u7f16\u8bd1\u3002\u5982\u679c\u60a8\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"g++")," \u6765\u7f16\u8bd1 ",(0,l.kt)("inlineCode",{parentName:"p"},".cpp")," \u6587\u4ef6\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":!g++ hello.cpp -o hello\n")),(0,l.kt)("p",null,"\u4f46\u8981\u6bcf\u6b21\u624b\u52a8\u6307\u5b9a\u6587\u4ef6\u540d\u548c\u8f93\u51fa\u6587\u4ef6\u540d\u4f1a\u975e\u5e38\u7e41\u7410\u548c\u5bb9\u6613\u51fa\u9519\u3002\u800c makefile \u662f\u6761\u53ef\u884c\u4e4b\u8def\u3002"),(0,l.kt)("h2",{id:"make\u547d\u4ee4"},"Make\u547d\u4ee4"),(0,l.kt)("p",null,"Vim \u6709\u8fd0\u884c makefile \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},":make")," \u547d\u4ee4\u3002\u5f53\u60a8\u8fd0\u884c\u5b83\u65f6\uff0cVim \u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u67e5\u627e makefile \u5e76\u6267\u884c\u5b83\u3002"),(0,l.kt)("p",null,"\u5728\u5f53\u524d\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"makefile")," \uff0c\u7136\u540e\u6dfb\u52a0\u4e0b\u5217\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'all:\n    echo "Hello all"\nfoo:\n    echo "Hello foo"\nlist_pls:\n    ls\n')),(0,l.kt)("p",null,"\u5728 Vim \u4e2d\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":make\n")),(0,l.kt)("p",null,"Vim \u6267\u884c\u5b83\u7684\u65b9\u5f0f\u4e0e\u4ece\u7ec8\u7aef\u8fd0\u884c\u5b83\u7684\u65b9\u5f0f\u76f8\u540c\u3002",(0,l.kt)("inlineCode",{parentName:"p"},":make")," \u547d\u4ee4\u4e5f\u63a5\u53d7\u7ec8\u7aef\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," \u547d\u4ee4\u7684\u53c2\u6570\u3002\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':make foo\n" Outputs "Hello foo"\n\n:make list_pls\n" Outputs the ls command result\n')),(0,l.kt)("p",null,"\u5982\u679c\u547d\u4ee4\u6267\u884c\u5f02\u5e38\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},":make")," \u547d\u4ee4\u5c06\u4f7f\u7528 Vim \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"quickfix")," \u6765\u5b58\u50a8\u8fd9\u4e9b\u9519\u8bef\u3002\u73b0\u5728\u8bd5\u7740\u8fd0\u884c\u4e00\u4e2a\u4e0d\u5b58\u5728\u7684\u76ee\u6807\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":make dontexist\n")),(0,l.kt)("p",null,"\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u8be5\u547d\u4ee4\u6267\u884c\u9519\u8bef\u3002\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"quickfix")," \u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},":copen")," \u53ef\u4ee5\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"quickfix")," \u7a97\u53e3\u6765\u67e5\u770b\u8be5\u9519\u8bef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"|| make: *** No rule to make target `dontexist'.  Stop.\n")),(0,l.kt)("h2",{id:"\u4f7f\u7528-make-\u7f16\u8bd1"},"\u4f7f\u7528 Make \u7f16\u8bd1"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u4f7f\u7528 makefile \u6765\u7f16\u8bd1\u4e00\u4e2a\u57fa\u672c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".cpp")," \u7a0b\u5e8f\u3002\u9996\u5148\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.cpp")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <iostream>\n\nint main() {\n    std::cout << "Hello!\\n";\n    return 0;\n}\n')),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"makefile")," \u6765\u7f16\u8bd1\u548c\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},".cpp")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'all:\n    echo "build, run"\nbuild:\n    g++ hello.cpp -o hello\nrun:\n    ./hello\n')),(0,l.kt)("p",null,"\u73b0\u5728\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":make build\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"g++")," \u5c06\u7f16\u8bd1 ",(0,l.kt)("inlineCode",{parentName:"p"},"./hello.cpp")," \u5e76\u4e14\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"./hello"),"\u3002\u63a5\u7740\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":make run\n")),(0,l.kt)("p",null,"\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u7ec8\u7aef\u4e0a\u6253\u5370\u51fa\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},'"Hello!"'),"\u3002"),(0,l.kt)("h2",{id:"\u4e0d\u540c\u7684make\u7a0b\u5e8f"},"\u4e0d\u540c\u7684Make\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u5f53\u60a8\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":make")," \u65f6\uff0cVim \u5b9e\u9645\u4e0a\u4f1a\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"makeprg")," \u9009\u9879\u6240\u8bbe\u7f6e\u7684\u4efb\u4f55\u547d\u4ee4\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set makeprg?")," \u6765\u67e5\u770b\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"makeprg=make\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},":make")," \u7684\u9ed8\u8ba4\u547d\u4ee4\u662f\u5916\u90e8\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," \u547d\u4ee4\u3002\u82e5\u60f3\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},":make")," \u547d\u4ee4\uff0c\u4f7f\u6bcf\u6b21\u8fd0\u884c\u5b83\u65f6\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"g++ <your-file-name>"),"\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":set makeprg=g++\\ %\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\\")," \u7528\u4e8e\u8f6c\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"g++")," \u540e\u7684\u7a7a\u683c\u3002Vim \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"%")," \u7b26\u53f7\u4ee3\u8868\u5f53\u524d\u6587\u4ef6\u3002\u56e0\u6b64\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"g++\\ %")," \u547d\u4ee4\u7b49\u4e8e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"g++ hello.cpp"),"\u3002"),(0,l.kt)("p",null,"\u8f6c\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"./hello.cpp")," \u7136\u540e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":make"),"\uff0cVim \u5c06\u7f16\u8bd1 ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.cpp")," \u5e76\u8f93\u51fa ",(0,l.kt)("inlineCode",{parentName:"p"},"a.out"),"\uff08\u56e0\u4e3a\u60a8\u6ca1\u6709\u6307\u5b9a\u8f93\u51fa\uff09\u3002\u8ba9\u6211\u4eec\u91cd\u6784\u4e00\u4e0b\uff0c\u4f7f\u7528\u53bb\u6389\u6269\u5c55\u540d\u7684\u539f\u59cb\u6587\u4ef6\u540d\u6765\u547d\u540d\u7f16\u8bd1\u540e\u7684\u8f93\u51fa\u3002\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff08\u6216\u5c06\u5b83\u4eec\u6dfb\u52a0\u5230vimrc\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":set makeprg=g++\\ %\\ -o\\ %<\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u5206\u89e3\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"g++\\\\ %")," \u5982\u4e0a\u6240\u8ff0\uff0c\u7b49\u540c\u4e8e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"g++ <your-file>"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-o")," \u8f93\u51fa\u9009\u9879\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%<")," \u5728 Vim \u4e2d\u4ee3\u8868\u4e86\u6ca1\u6709\u6269\u5c55\u540d\u7684\u5f53\u524d\u6587\u4ef6\u540d\uff08\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"hello.cpp")," \u53d8\u6210 ",(0,l.kt)("inlineCode",{parentName:"li"},"hello"),"\uff09\u3002")),(0,l.kt)("p",null,"\u5f53\u60a8\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"./hello.cpp")," \u4e2d\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":make")," \u65f6\uff0c\u5b83\u5c06\u7f16\u8bd1\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"./hello"),"\u3002\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"./hello.cpp")," \u4e2d\u5feb\u901f\u5730\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"./hello"),"\uff0c\u53ef\u4ee5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":!./%<"),"\u3002\u540c\u6837\uff0c\u5b83\u7b49\u540c\u4e8e\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":!./<\u65e0\u540e\u7f00\u7684\u5f53\u524d\u6587\u4ef6\u540d>"),"\u3002"),(0,l.kt)("p",null,"\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},":h :compiler")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},":h write-compiler-plugin")," \u53ef\u4ee5\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u4fdd\u5b58\u65f6\u81ea\u52a8\u7f16\u8bd1"},"\u4fdd\u5b58\u65f6\u81ea\u52a8\u7f16\u8bd1"),(0,l.kt)("p",null,"\u6709\u4e86\u81ea\u52a8\u5316\u7f16\u8bd1\uff0c\u60a8\u53ef\u4ee5\u8ba9\u751f\u6d3b\u66f4\u52a0\u8f7b\u677e\u3002\u56de\u60f3\u4e00\u4e0b\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 Vim \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"autocmd")," \u6765\u6839\u636e\u67d0\u4e9b\u4e8b\u4ef6\u81ea\u52a8\u6267\u884c\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c\u8981\u81ea\u52a8\u5728\u6bcf\u6b21\u4fdd\u5b58\u540e\u7f16\u8bd1 ",(0,l.kt)("inlineCode",{parentName:"p"},".cpp")," \u6587\u4ef6\uff0c\u60a8\u53ef\u4ee5\u5c06\u4e0b\u9762\u5185\u5bb9\u6dfb\u52a0\u5230vimrc\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":autocmd BufWritePost *.cpp make\n")),(0,l.kt)("p",null,"\u73b0\u5728\u60a8\u6bcf\u6b21\u4fdd\u5b58 ",(0,l.kt)("inlineCode",{parentName:"p"},".cpp")," \u6587\u4ef6\u540e\uff0cVim \u90fd\u5c06\u81ea\u52a8\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," \u547d\u4ee4\u3002"),(0,l.kt)("h2",{id:"\u5207\u6362\u7f16\u8bd1\u5668"},"\u5207\u6362\u7f16\u8bd1\u5668"),(0,l.kt)("p",null,"Vim \u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},":compiler")," \u547d\u4ee4\u53ef\u4ee5\u5feb\u901f\u5207\u6362\u7f16\u8bd1\u5668\u3002\u60a8\u7684 Vim \u53ef\u80fd\u9644\u5e26\u4e86\u4e00\u4e9b\u9884\u6784\u5efa\u7684\u7f16\u8bd1\u914d\u7f6e\u3002\u8981\u68c0\u67e5\u60a8\u62e5\u6709\u54ea\u4e9b\u7f16\u8bd1\u5668\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":e $VIMRUNTIME/compilers/<tab>\n")),(0,l.kt)("p",null,"\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u4e00\u4e2a\u4e0d\u540c\u7f16\u7a0b\u8bed\u8a00\u7684\u7f16\u8bd1\u5668\u5217\u8868\u3002"),(0,l.kt)("p",null,"\u82e5\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},":compiler")," \u547d\u4ee4\uff0c\u5047\u8bbe\u60a8\u6709\u4e00\u4e2a ruby \u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.rb"),"\uff0c\u5185\u5bb9\u662f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'puts "Hello ruby"\n')),(0,l.kt)("p",null,"\u56de\u60f3\u4e00\u4e0b\uff0c\u5982\u679c\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":make"),"\uff0cVim \u5c06\u6267\u884c\u8d4b\u503c\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"makeprg")," \u7684\u4efb\u4f55\u547d\u4ee4\uff08\u9ed8\u8ba4\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"make"),"\uff09\u3002\u5982\u679c\u60a8\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":compiler ruby\n")),(0,l.kt)("p",null,"Vim \u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMRUNTIME/compiler/ruby.vim")," \u811a\u672c\uff0c\u5e76\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"makeprg")," \u66f4\u6539\u4e3a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ruby")," \u547d\u4ee4\u3002\u73b0\u5728\u5982\u679c\u60a8\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set makeprg?"),"\uff0c\u5b83\u4f1a\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"makeprg=ruby"),"\uff08\u8fd9\u53d6\u51b3\u4e8e\u60a8 ",(0,l.kt)("inlineCode",{parentName:"p"},"$VIMRUNTIME/compiler/ruby.vim")," \u91cc\u7684\u5185\u5bb9\uff0c\u5982\u679c\u60a8\u6709\u5176\u4ed6\u81ea\u5b9a\u4e49\u7684 ruby \u7f16\u8bd1\u5668\uff0c\u60a8\u7684\u7ed3\u679c\u53ef\u80fd\u4f1a\u6709\u4e0d\u540c\uff09\u3002",(0,l.kt)("inlineCode",{parentName:"p"},":compiler <your-lang>")," \u547d\u4ee4\u5141\u8bb8\u60a8\u5feb\u901f\u5207\u6362\u81f3\u5176\u4ed6\u7f16\u8bd1\u5668\u3002\u5982\u679c\u60a8\u7684\u9879\u76ee\u4f7f\u7528\u591a\u79cd\u8bed\u8a00\uff0c\u8fd9\u4f1a\u975e\u5e38\u6709\u7528\u3002"),(0,l.kt)("p",null,"\u60a8\u4e0d\u5fc5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},":compiler")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"makeprg")," \u6765\u7f16\u8bd1\u7a0b\u5e8f\u3002\u60a8\u53ef\u4ee5\u8fd0\u884c\u6d4b\u8bd5\u811a\u672c\u3001\u5206\u6790\u6587\u4ef6\u3001\u53d1\u9001\u4fe1\u53f7\u6216\u4efb\u4f55\u60a8\u60f3\u8981\u7684\u5185\u5bb9\u3002"),(0,l.kt)("h2",{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u7f16\u8bd1\u5668"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u7f16\u8bd1\u5668"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684 Typescript \u7f16\u8bd1\u5668\u3002\u5148\u5728\u60a8\u7684\u8bbe\u5907\u4e0a\u5b89\u88c5 Typescript\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"npm install -g typescript"),"\uff09\uff0c\u5b89\u88c5\u5b8c\u540e\u60a8\u5c06\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"tsc")," \u547d\u4ee4\u3002\u5982\u679c\u60a8\u4e4b\u524d\u6ca1\u6709\u5c1d\u8bd5\u8fc7 typescript\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"tsc")," \u5c06 Typescript \u6587\u4ef6\u7f16\u8bd1\u6210 Javascript \u6587\u4ef6\u3002\u5047\u8bbe\u60a8\u6709\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.ts")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'const hello = "hello";\nconsole.log(hello);\n')),(0,l.kt)("p",null,"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"tsc hello.ts")," \u540e\uff0c\u5b83\u5c06\u88ab\u7f16\u8bd1\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.js"),"\u3002\u7136\u800c\uff0c\u5982\u679c\u60a8\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.ts")," \u6587\u4ef6\u4e2d\u6709\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'const hello = "hello";\nhello = "hello again";\nconsole.log(hello);\n')),(0,l.kt)("p",null,"\u8fd9\u4f1a\u629b\u51fa\u9519\u8bef\uff0c\u56e0\u4e3a\u4e0d\u80fd\u66f4\u6539\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"const")," \u53d8\u91cf\u3002\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"tsc hello.ts")," \u7684\u9519\u8bef\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hello.ts:2:1 - error TS2588: Cannot assign to 'person' because it is a constant.\n\n2 person = \"hello again\";\n  ~~~~~~\n\n\nFound 1 error.\n")),(0,l.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684 Typescript \u7f16\u8bd1\u5668\uff0c\u8bf7\u5728\u60a8\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/")," \u76ee\u5f55\u4e2d\u65b0\u6dfb\u52a0\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"compiler")," \u76ee\u5f55\uff08\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/compiler/"),"\uff09\uff0c\u63a5\u7740\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"typescript.vim")," \u6587\u4ef6\uff08\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.vim/compiler/typescript.vim"),"\uff09\uff0c\u5e76\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CompilerSet makeprg=tsc\nCompilerSet errorformat=%f:\\ %m\n")),(0,l.kt)("p",null,"\u7b2c\u4e00\u884c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"makeprg")," \u8bbe\u7f6e\u4e3a\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"tsc")," \u547d\u4ee4\u3002\u7b2c\u4e8c\u884c\u5c06\u9519\u8bef\u683c\u5f0f\u8bbe\u7f6e\u4e3a\u663e\u793a\u6587\u4ef6\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"%f"),"\uff09\uff0c\u540e\u8ddf\u5192\u53f7\uff08",(0,l.kt)("inlineCode",{parentName:"p"},":"),"\uff09\u548c\u8f6c\u4e49\u7684\u7a7a\u683c\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"\\ "),"\uff09\uff0c\u6700\u540e\u662f\u9519\u8bef\u6d88\u606f\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"%m"),"\uff09\u3002\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},":h errorformat")," \u53ef\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u9519\u8bef\u683c\u5f0f\u7684\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u9605\u8bfb\u4e00\u4e9b\u9884\u5236\u7684\u7f16\u8bd1\u5668\uff0c\u770b\u770b\u5b83\u4eec\u662f\u5982\u4f55\u5b9e\u73b0\u7684\u3002\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},":e $VIMRUNTIME/compiler/<some-language>.vim")," \u67e5\u770b\u3002"),(0,l.kt)("p",null,"\u6709\u4e9b\u63d2\u4ef6\u53ef\u80fd\u4f1a\u5e72\u6270 Typescript \u6587\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"--noplugin")," \u6807\u5fd7\u4ee5\u96f6\u63d2\u4ef6\u7684\u5f62\u5f0f\u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"hello.ts")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vim --noplugin hello.ts\n")),(0,l.kt)("p",null,"\u68c0\u67e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"makeprg"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":set makeprg?\n")),(0,l.kt)("p",null,"\u5b83\u5e94\u8be5\u4f1a\u663e\u793a\u9ed8\u8ba4\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," \u7a0b\u5e8f\u3002\u8981\u4f7f\u7528\u65b0\u7684 Typescript \u7f16\u8bd1\u5668\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":compiler typescript\n")),(0,l.kt)("p",null,"\u5f53\u60a8\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":set makeprg?")," \u65f6\uff0c\u5b83\u5e94\u8be5\u4f1a\u663e\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"tsc")," \u4e86\u3002\u6211\u4eec\u6765\u6d4b\u8bd5\u4e00\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":make %\n")),(0,l.kt)("p",null,"\u56de\u60f3\u4e00\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"%")," \u4ee3\u8868\u5f53\u524d\u6587\u4ef6\u3002\u770b\u770b\u60a8\u7684 Typescript \u7f16\u8bd1\u5668\u662f\u5426\u5982\u9884\u671f\u4e00\u6837\u5de5\u4f5c\u3002\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":copen")," \u53ef\u4ee5\u67e5\u770b\u9519\u8bef\u5217\u8868\u3002"),(0,l.kt)("h2",{id:"\u5f02\u6b65\u7f16\u8bd1\u5668"},"\u5f02\u6b65\u7f16\u8bd1\u5668"),(0,l.kt)("p",null,"\u6709\u65f6\u7f16\u8bd1\u53ef\u80fd\u9700\u8981\u5f88\u957f\u65f6\u95f4\u3002\u5728\u7b49\u5f85\u7f16\u8bd1\u65f6\uff0c\u60a8\u4e0d\u4f1a\u60f3\u773c\u7741\u7741\u76ef\u7740\u5df2\u51bb\u7ed3\u7684 Vim \u7684\u3002\u5982\u679c\u53ef\u4ee5\u5f02\u6b65\u7f16\u8bd1\uff0c\u5c31\u53ef\u4ee5\u5728\u7f16\u8bd1\u671f\u95f4\u7ee7\u7eed\u4f7f\u7528 Vim \u4e86\uff0c\u5c82\u4e0d\u7f8e\u54c9\uff1f"),(0,l.kt)("p",null,"\u5e78\u8fd0\u7684\u662f\uff0c\u6709\u63d2\u4ef6\u6765\u8fd0\u884c\u5f02\u6b65\u8fdb\u7a0b\u3002\u6709\u4e24\u4e2a\u6bd4\u8f83\u597d\u7684\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tpope/vim-dispatch"},"vim-dispatch")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/skywind3000/asyncrun.vim"},"asyncrun.vim"))),(0,l.kt)("p",null,"\u5728\u8fd9\u4e00\u7ae0\u4e2d\uff0c\u6211\u5c06\u4ecb\u7ecd vim-dispatch\uff0c\u4f46\u6211\u5f3a\u70c8\u5efa\u8bae\u60a8\u5c1d\u8bd5\u4e0a\u8ff0\u5217\u8868\u4e2d\u6240\u6709\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Vim \u548c NeoVim \u5b9e\u9645\u4e0a\u90fd\u652f\u6301\u5f02\u6b65\u4f5c\u4e1a\uff0c\u4f46\u5b83\u4eec\u8d85\u51fa\u4e86\u672c\u7ae0\u7684\u8303\u56f4\u3002\u5982\u679c\u60a8\u597d\u5947\uff0c\u53ef\u4ee5\u67e5\u9605 ",(0,l.kt)("inlineCode",{parentName:"em"},":h job-channel-overview.txt"),"\u3002")),(0,l.kt)("h2",{id:"\u63d2\u4ef6vim-dispatch"},"\u63d2\u4ef6\uff1aVim-dispatch"),(0,l.kt)("p",null,"Vim-dispatch \u6709\u51e0\u4e2a\u547d\u4ee4\uff0c\u6700\u4e3b\u8981\u7684\u4e24\u4e2a\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},":Make")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},":Dispatch"),"\u3002"),(0,l.kt)("h3",{id:"\u5f02\u6b65make"},"\u5f02\u6b65Make"),(0,l.kt)("p",null,"Vim-dispatch \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},":Make")," \u547d\u4ee4\u4e0e Vim \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},":make")," \u76f8\u4f3c\uff0c\u4f46\u5b83\u4ee5\u5f02\u6b65\u65b9\u5f0f\u8fd0\u884c\u3002\u5982\u679c\u60a8\u6b63\u5904\u4e8e Javascript \u9879\u76ee\u4e2d\uff0c\u5e76\u4e14\u9700\u8981\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm t"),"\uff0c\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"makeprg")," \u8bbe\u7f6e\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":set makeprg=npm\\\\ t\n")),(0,l.kt)("p",null,"\u5982\u679c\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":make\n")),(0,l.kt)("p",null,"Vim \u5c06\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm t"),"\u3002\u4f46\u540c\u65f6\uff0c\u60a8\u53ea\u80fd\u76ef\u7740\u51bb\u7ed3\u4e86\u7684\u5c4f\u5e55\u3002\u6709\u4e86 vim-dispatch\uff0c\u60a8\u53ea\u9700\u8981\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":Make\n")),(0,l.kt)("p",null,"Vim \u5c06\u542f\u7528\u540e\u53f0\u8fdb\u7a0b\u5f02\u6b65\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"npm t"),"\uff0c\u540c\u65f6\u60a8\u8fd8\u80fd\u5728 Vim \u4e2d\u7ee7\u7eed\u7f16\u8f91\u60a8\u7684\u6587\u672c\u3002\u68d2\u6781\u4e86\uff01"),(0,l.kt)("h3",{id:"\u5f02\u6b65\u8c03\u5ea6dispatch"},"\u5f02\u6b65\u8c03\u5ea6\uff08Dispatch\uff09"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},":Dispatch")," \u547d\u4ee4\u7684\u5de5\u4f5c\u65b9\u5f0f\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},":compiler")," \u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},":!")," \u7c7b\u4f3c\uff0c\u5b83\u53ef\u4ee5\u5728Vim\u4e2d\u8fd0\u884c\u4efb\u610f\u5916\u90e8\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u60a8\u5728 ruby spec \u6587\u4ef6\u4e2d\uff0c\u9700\u8981\u6267\u884c\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},":Dispatch rspec %\n")),(0,l.kt)("p",null,"Vim \u5c06\u5bf9\u5f53\u524d\u6587\u4ef6\u5f02\u6b65\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"rspec")," \u547d\u4ee4\u3002"),(0,l.kt)("h3",{id:"\u81ea\u52a8\u8c03\u5ea6"},"\u81ea\u52a8\u8c03\u5ea6"),(0,l.kt)("p",null,"Vim-dispatch \u6709\u4e00\u4e2a\u7f13\u51b2\u533a\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"b:dispatch"),"\uff0c\u60a8\u53ef\u4ee5\u914d\u7f6e\u5b83\u6765\u81ea\u52a8\u6267\u884c\u7279\u5b9a\u547d\u4ee4\uff0c\u60a8\u53ef\u4ee5\u5229\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"autocmd"),"\u548c\u5b83\u4e00\u8d77\u5de5\u4f5c\u3002\u5982\u679c\u5728\u60a8\u7684 vimrc \u4e2d\u6dfb\u52a0\u5982\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"autocmd BufEnter *_spec.rb let b:dispatch = 'bundle exec rspec %'\n")),(0,l.kt)("p",null,"\u73b0\u5728\u6bcf\u5f53\u60a8\u8fdb\u5165\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"BufEnter"),"\uff09\u4e00\u4e2a\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"_spec.rb")," \u7ed3\u5c3e\u7684\u6587\u4ef6\uff0c\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},":Dispatch")," \u5c06\u81ea\u52a8\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"bundle exec rspec <your-current-ruby-spec-file>"),"\u3002"),(0,l.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60\u7f16\u8bd1"},"\u806a\u660e\u5730\u5b66\u4e60\u7f16\u8bd1"),(0,l.kt)("p",null,"\u5728\u672c\u7ae0\u4e2d\uff0c\u60a8\u4e86\u89e3\u5230\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"make")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"compiler")," \u547d\u4ee4\u4eceVim\u5185\u90e8\u5f02\u6b65\u8fd0\u884c ",(0,l.kt)("em",{parentName:"p"},"\u4efb\u4f55")," \u8fdb\u7a0b\uff0c\u4ee5\u5b8c\u5584\u60a8\u7684\u7f16\u7a0b\u5de5\u4f5c\u6d41\u7a0b\u3002Vim \u62e5\u6709\u901a\u8fc7\u5176\u4ed6\u7a0b\u5e8f\u6765\u6269\u5c55\u81ea\u8eab\u7684\u80fd\u529b\uff0c\u8fd9\u4f7f\u5176\u53d8\u5f97\u5f3a\u5927\u3002"))}d.isMDXComponent=!0}}]);