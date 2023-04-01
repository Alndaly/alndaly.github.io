"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5097],{60491:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>k});var n=i(87462),a=(i(67294),i(3905));i(16758);const l={title:"Git",tags:["VIM","\u7f16\u8f91\u5668","git"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},p="\u7b2c18\u7ae0 Git",r={unversionedId:"others/Vim/ch18_git",id:"others/Vim/ch18_git",title:"Git",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch18_git.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch18_git",permalink:"/en/docs/others/Vim/ch18_git",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch18_git.md",tags:[{label:"VIM",permalink:"/en/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/en/docs/tags/\u7f16\u8f91\u5668"},{label:"git",permalink:"/en/docs/tags/git"}],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"Git",tags:["VIM","\u7f16\u8f91\u5668","git"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u6298\u53e0",permalink:"/en/docs/others/Vim/ch17_fold"},next:{title:"\u7f16\u8bd1",permalink:"/en/docs/others/Vim/ch19_compile"}},m={},k=[{value:"\u5dee\u5f02\u6bd4\u8f83",id:"\u5dee\u5f02\u6bd4\u8f83",level:2},{value:"\u4f7f\u7528 Vim \u4f5c\u4e3a\u5408\u5e76\u5de5\u5177",id:"\u4f7f\u7528-vim-\u4f5c\u4e3a\u5408\u5e76\u5de5\u5177",level:2},{value:"\u5728 Vim \u4e2d\u4f7f\u7528 Git",id:"\u5728-vim-\u4e2d\u4f7f\u7528-git",level:2},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:2},{value:"Vim-Fugitive",id:"vim-fugitive",level:2},{value:"Git Status",id:"git-status",level:2},{value:"Git Blame",id:"git-blame",level:2},{value:"Gdiffsplit",id:"gdiffsplit",level:2},{value:"Gwrite \u548c Gread",id:"gwrite-\u548c-gread",level:2},{value:"Gclog",id:"gclog",level:2},{value:"Vim-Fugitive \u7684\u66f4\u591a\u529f\u80fd",id:"vim-fugitive-\u7684\u66f4\u591a\u529f\u80fd",level:2},{value:"\u806a\u660e\u5730\u5b66\u4e60 Vim \u548c Git",id:"\u806a\u660e\u5730\u5b66\u4e60-vim-\u548c-git",level:2}],o={toc:k};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b2c18\u7ae0-git"},"\u7b2c18\u7ae0 Git"),(0,a.kt)("p",null,"Vim \u548c Git \u662f\u4e24\u79cd\u5b9e\u73b0\u4e0d\u540c\u529f\u80fd\u7684\u4f1f\u5927\u5de5\u5177\u3002Vim \u7528\u4e8e\u6587\u672c\u7f16\u8f91\uff0cGit \u7528\u4e8e\u7248\u672c\u63a7\u5236\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u7ae0\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u5c06 Vim \u548c Git \u96c6\u6210\u5728\u4e00\u8d77\u3002"),(0,a.kt)("h2",{id:"\u5dee\u5f02\u6bd4\u8f83"},"\u5dee\u5f02\u6bd4\u8f83"),(0,a.kt)("p",null,"\u5728\u4e0a\u4e00\u7ae0\u4e2d\uff0c\u60a8\u770b\u5230\u4e86\u5982\u4f55\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"vimdiff")," \u547d\u4ee4\u4ee5\u663e\u793a\u591a\u4e2a\u6587\u4ef6\u4e4b\u95f4\u7684\u5dee\u5f02\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u60a8\u6709\u4e24\u4e2a\u6587\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"file2.txt"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt")," \u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pancakes\nwaffles\napples\n\nmilk\napple juice\n\nyogurt\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"file2.txt")," \u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pancakes\nwaffles\noranges\n\nmilk\norange juice\n\nyogurt\n")),(0,a.kt)("p",null,"\u82e5\u8981\u67e5\u770b\u4e24\u4e2a\u6587\u4ef6\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vimdiff file1.txt file2.txt\n")),(0,a.kt)("p",null,"\u6216\u8005\u4e5f\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vim -d file1.txt file2.txt\n")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Basic diffing with Vim",width:"900",height:"auto",src:"images/diffing-basic.png"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"vimdiff")," \u5e76\u6392\u663e\u793a\u4e24\u4e2a\u7f13\u51b2\u533a\u3002\u5de6\u8fb9\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt"),"\uff0c\u53f3\u8fb9\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"file2.txt"),"\u3002\u4e0d\u540c\u7684\u4e24\u884c\uff08apples \u548c oranges\uff09\u4f1a\u88ab\u9ad8\u4eae\u663e\u793a\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u60a8\u8981\u4f7f\u7b2c\u4e8c\u4e2a\u7f13\u51b2\u533a\u76f8\u5e94\u4f4d\u7f6e\u53d8\u6210 apples\uff0c\u800c\u4e0d\u662f oranges\u3002\u82e5\u60f3\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt")," \u4f20\u8f93\u60a8\u5f53\u524d\u4f4d\u7f6e\uff08\u5f53\u524d\u60a8\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt"),"\uff09\u7684\u5185\u5bb9\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"file2.txt"),"\uff0c\u9996\u5148\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"]c")," \u8df3\u8f6c\u5230\u4e0b\u4e00\u5904\u5dee\u5f02\uff08\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"[c")," \u53ef\u8df3\u56de\u4e0a\u4e00\u5904\u5dee\u5f02\uff09\uff0c\u73b0\u5728\u5149\u6807\u5e94\u8be5\u5728 apples \u4e0a\u4e86\u3002\u63a5\u7740\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":diffput"),"\u3002\u6b64\u65f6\uff0c\u8fd9\u4e24\u4e2a\u6587\u4ef6\u90fd\u662f apples \u4e86\u3002"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Finding files in FZF",width:"900",height:"auto",src:"images/diffing-apples.png"})),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u60f3\u4ece\u53e6\u4e00\u4e2a\u7f13\u51b2\u533a\uff08orange juice\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"file2.txt"),"\uff09\u4f20\u8f93\u6587\u672c\u6765\u66ff\u4ee3\u5f53\u524d\u7f13\u51b2\u533a\uff08apple juice\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt"),"\uff09\uff0c\u8ba9\u60a8\u7684\u5149\u6807\u4ecd\u7136\u4f4d\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"file1.txt")," \u7684\u7a97\u53e3\u4e2d\uff0c\u9996\u5148\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"]c")," \u8df3\u8f6c\u81f3\u4e0b\u4e00\u5904\u5dee\u5f02\uff0c\u6b64\u65f6\u5149\u6807\u5e94\u8be5\u5728 apple juice \u4e0a\u3002\u63a5\u7740\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":diffget")," \u83b7\u53d6\u53e6\u4e00\u4e2a\u7f13\u51b2\u533a\u7684 orange juice \u6765\u66ff\u4ee3\u5f53\u524d\u7f13\u51b2\u533a\u4e2d\u7684 apple juice\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},":diffput")," \u5c06\u6587\u672c\u4ece\u5f53\u524d\u7f13\u51b2\u533a ",(0,a.kt)("em",{parentName:"p"},"\u8f93\u51fa")," \u5230\u53e6\u4e00\u4e2a\u7f13\u51b2\u533a\u3002",(0,a.kt)("inlineCode",{parentName:"p"},":diffget")," \u4ece\u53e6\u4e00\u4e2a\u7f13\u51b2\u533a ",(0,a.kt)("em",{parentName:"p"},"\u83b7\u53d6")," \u6587\u672c\u5230\u5f53\u524d\u7f13\u51b2\u533a\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6709\u591a\u4e2a\u7f13\u51b2\u533a\uff0c\u53ef\u4ee5\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":diffput fileN.txt")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},":diffget fileN.txt")," \u6765\u6307\u5b9a\u76ee\u6807\u7f13\u51b2\u533a fileN\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-vim-\u4f5c\u4e3a\u5408\u5e76\u5de5\u5177"},"\u4f7f\u7528 Vim \u4f5c\u4e3a\u5408\u5e76\u5de5\u5177"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u201c\u6211\u975e\u5e38\u559c\u6b22\u89e3\u51b3\u5408\u5e76\u51b2\u7a81\u3002\u201d \u2014\u2014\u4f5a\u540d")),(0,a.kt)("p",null,"\u6211\u4e0d\u77e5\u9053\u6709\u8c01\u559c\u6b22\u89e3\u51b3\u5408\u5e76\u51b2\u7a81\uff0c\u4f46\u603b\u4e4b\uff0c\u5408\u5e76\u51b2\u7a81\u662f\u65e0\u6cd5\u907f\u514d\u7684\u3002\u5728\u672c\u8282\u4e2d\uff0c\u60a8\u5c06\u5b66\u4e60\u5982\u4f55\u5229\u7528 Vim \u4f5c\u4e3a\u89e3\u51b3\u5408\u5e76\u51b2\u7a81\u7684\u5de5\u5177\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8fd0\u884c\u4e0b\u5217\u547d\u4ee4\u6765\u5c06\u9ed8\u8ba4\u5408\u5e76\u5de5\u5177\u66f4\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"vimdiff"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git config merge.tool vimdiff\ngit config merge.conflictstyle diff3\ngit config mergetool.prompt false\n")),(0,a.kt)("p",null,"\u6216\u8005\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.gitconfig"),"\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u5e94\u8be5\u5904\u4e8e\u6839\u76ee\u5f55\u4e2d\uff0c\u4f46\u60a8\u7684\u53ef\u80fd\u5728\u4e0d\u540c\u7684\u4f4d\u7f6e\uff09\u3002\u4e0a\u9762\u7684\u547d\u4ee4\u5e94\u8be5\u4f1a\u5c06\u60a8\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"gitconfig")," \u6539\u6210\u5982\u4e0b\u8bbe\u7f6e\u7684\u6837\u5b50\uff0c\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u8fd0\u884c\u4e0a\u9762\u7684\u547d\u4ee4\uff0c\u60a8\u4e5f\u53ef\u4ee5\u624b\u52a8\u66f4\u6539\u60a8\u7684 gitconfig\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[core]\n  editor = vim\n[merge]\n  tool = vimdiff\n  conflictstyle = diff3\n[difftool]\n  prompt = false\n")),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5047\u7684\u5408\u5e76\u51b2\u7a81\u6765\u6d4b\u8bd5\u4e00\u4e0b\u3002\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"/food"),"\uff0c\u5e76\u521d\u59cb\u5316 git \u4ed3\u5e93\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git init\n")),(0,a.kt)("p",null,"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"breakfast.txt")," \u6587\u4ef6\uff0c\u5185\u5bb9\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pancakes\nwaffles\noranges\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u6587\u4ef6\u5e76\u63d0\u4ea4\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git add .\ngit commit -m "Initial breakfast commit"\n')),(0,a.kt)("p",null,"\u63a5\u7740\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f apples\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout -b apples\n")),(0,a.kt)("p",null,"\u66f4\u6539 ",(0,a.kt)("inlineCode",{parentName:"p"},"breakfast.txt")," \u6587\u4ef6\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pancakes\nwaffles\napples\n")),(0,a.kt)("p",null,"\u4fdd\u5b58\u6587\u4ef6\uff0c\u6dfb\u52a0\u5e76\u63d0\u4ea4\u66f4\u6539\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git add .\ngit commit -m "Apples not oranges"\n')),(0,a.kt)("p",null,"\u771f\u68d2\uff01\u73b0\u5728 master \u5206\u652f\u6709 oranges\uff0c\u800c apples \u5206\u652f\u6709 apples\u3002\u63a5\u7740\u56de\u5230 master \u5206\u652f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git checkout master\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"breakfast.txt")," \u6587\u4ef6\u4e2d\uff0c\u60a8\u5e94\u8be5\u80fd\u770b\u5230\u539f\u6765\u7684\u6587\u672c oranges\u3002\u63a5\u7740\u5c06\u5b83\u6539\u6210 grapes\uff0c\u56e0\u4e3a\u5b83\u662f\u73b0\u5728\u7684\u5e94\u5b63\u6c34\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pancakes\nwaffles\ngrapes\n")),(0,a.kt)("p",null,"\u4fdd\u5b58\u3001\u6dfb\u52a0\u3001\u63d0\u4ea4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'git add .\ngit commit -m "Grapes not oranges"\n')),(0,a.kt)("p",null,"\u56af\uff01\u8fd9\u4e48\u591a\u6b65\u9aa4\uff01\u73b0\u5728\u51c6\u5907\u8981\u5c06 apples \u5206\u652f\u5408\u5e76\u8fdb master \u5206\u652f\u4e86\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git merge apples\n")),(0,a.kt)("p",null,"\u60a8\u5e94\u8be5\u4f1a\u770b\u5230\u5982\u4e0b\u9519\u8bef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Auto-merging breakfast.txt\nCONFLICT (content): Merge conflict in breakfast.txt\nAutomatic merge failed; fix conflicts and then commit the result.\n")),(0,a.kt)("p",null,"\u6ca1\u9519\uff0c\u4e00\u4e2a\u51b2\u7a81\uff01\u73b0\u5728\u4e00\u8d77\u6765\u7528\u4e00\u4e0b\u65b0\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"mergetool")," \u6765\u89e3\u51b3\u51b2\u7a81\u5427\uff01\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git mergetool\n")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Three-way mergetool with Vim",width:"900",height:"auto",src:"images/mergetool-initial.png"})),(0,a.kt)("p",null,"Vim \u663e\u793a\u4e86\u56db\u4e2a\u7a97\u53e3\u3002\u6ce8\u610f\u4e00\u4e0b\u9876\u90e8\u4e09\u4e2a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LOCAL")," \u5305\u542b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"grapes"),"\u3002\u8fd9\u662f\u201c\u672c\u5730\u201d\u4e2d\u7684\u53d8\u5316\uff0c\u4e5f\u662f\u60a8\u8981\u5408\u5e76\u7684\u5185\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BASE")," \u5305\u542b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"oranges"),"\u3002\u8fd9\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"LOCAL")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"REMOTE")," \u7684\u5171\u540c\u7956\u5148\uff0c\u7528\u4e8e\u6bd4\u8f83\u5b83\u4eec\u4e4b\u95f4\u7684\u5206\u6b67\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REMOTE")," \u5305\u542b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"apples"),"\u3002\u8fd9\u662f\u8981\u88ab\u5408\u5e76\u7684\u5185\u5bb9\u3002")),(0,a.kt)("p",null,"\u5e95\u90e8\u7a97\u53e3\uff08\u4e5f\u5373\u7b2c\u56db\u4e2a\u7a97\u53e3\uff09\uff0c\u60a8\u80fd\u770b\u5230\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pancakes\nwaffles\n<<<<<<< HEAD\ngrapes\n||||||| db63958\noranges\n=======\napples\n>>>>>>> apples\n")),(0,a.kt)("p",null,"\u7b2c\u56db\u4e2a\u7a97\u53e3\u5305\u542b\u4e86\u5408\u5e76\u51b2\u7a81\u6587\u672c\u3002\u6709\u4e86\u8fd9\u6b65\u8bbe\u7f6e\uff0c\u5c31\u80fd\u66f4\u8f7b\u677e\u770b\u5230\u54ea\u4e2a\u73af\u5883\u53d1\u751f\u4e86\u4ec0\u4e48\u53d8\u5316\u3002\u60a8\u53ef\u4ee5\u540c\u65f6\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"BASE")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"REMOTE")," \u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u60a8\u7684\u5149\u6807\u5e94\u8be5\u5728\u7b2c\u56db\u4e2a\u7a97\u53e3\u7684\u9ad8\u4eae\u533a\u57df\u3002\u518d\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":diffget LOCAL"),"\uff0c\u5c31\u53ef\u4ee5",(0,a.kt)("em",{parentName:"p"},"\u83b7\u53d6"),"\u6765\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL")," \u7684\u6539\u53d8\uff08grapes\uff09\u3002\u540c\u6837\uff0c\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":diffget BASE")," \u53ef\u4ee5\u83b7\u53d6\u6765\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"BASE")," \u7684\u6539\u53d8\uff08oranges\uff09\uff0c\u800c\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":diffget REMOTE")," \u53ef\u4ee5\u83b7\u53d6\u6765\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"REMOTE")," \u7684\u6539\u53d8\uff08apples\uff09\u3002"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u8bd5\u7740\u83b7\u53d6\u6765\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL")," \u7684\u6539\u53d8\u3002\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":diffget LO"),"\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL")," \u7684\u7b80\u5199\uff09\uff0c\u7b2c\u56db\u4e2a\u7a97\u53e3\u53d8\u6210\u4e86 grapes\u3002\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u4fdd\u5b58\u5e76\u9000\u51fa\u6240\u6709\u6587\u4ef6\uff08",(0,a.kt)("inlineCode",{parentName:"p"},":wqall"),"\uff09\u4e86\u3002\u8fd8\u4e0d\u9519\u5427\uff1f"),(0,a.kt)("p",null,"\u7a0d\u52a0\u7559\u610f\u60a8\u4f1a\u53d1\u73b0\uff0c\u73b0\u5728\u591a\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"breakfast.txt.orig")," \u6587\u4ef6\u3002\u8fd9\u662f Git \u9632\u6b62\u4e8b\u4e0e\u613f\u8fdd\u800c\u521b\u5efa\u7684\u5907\u4efd\u6587\u4ef6\u3002\u5982\u679c\u60a8\u4e0d\u5e0c\u671b Git \u5728\u5408\u5e76\u671f\u95f4\u521b\u5efa\u5907\u4efd\u6587\u4ef6\uff0c\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git config --global mergetool.keepBackup false\n")),(0,a.kt)("h2",{id:"\u5728-vim-\u4e2d\u4f7f\u7528-git"},"\u5728 Vim \u4e2d\u4f7f\u7528 Git"),(0,a.kt)("p",null,"Vim \u672c\u8eab\u6ca1\u6709\u96c6\u6210 Git\uff0c\u8981\u5728 Vim \u4e2d\u6267\u884c Git \u547d\u4ee4\uff0c\u4e00\u79cd\u65b9\u6cd5\u662f\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"!")," \u53f9\u53f7\u8fd0\u7b97\u7b26\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"!")," \u53ef\u4ee5\u8fd0\u884c\u4efb\u4f55 Git \u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":!git status\n:!git commit\n:!git diff\n:!git push origin master\n")),(0,a.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 Vim \u7684\u7279\u6b8a\u5b57\u7b26 ",(0,a.kt)("inlineCode",{parentName:"p"},"%")," (\u5f53\u524d\u7f13\u51b2\u533a) \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," (\u5176\u4ed6\u7f13\u51b2\u533a)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},':!git add %         " git add current file\n:!git checkout #    " git checkout the other file\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e2aVim\u6280\u5de7\uff0c\u60a8\u53ef\u4ee5\u7528\u6765\u6dfb\u52a0\u4e0d\u540cVim\u7a97\u53e3\u4e2d\u7684\u591a\u4e2a\u6587\u4ef6\uff0c\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"windo !git add %\n")),(0,a.kt)("p",null,"\u7136\u540e\u63d0\u4ea4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},':!git commit "\u6dfb\u52a0\u4e86Vim\u7a97\u53e3\u4e2d\u7684\u6240\u6709\u6587\u4ef6\uff0c\u9177"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"windo"),'\u547d\u4ee4\u662fVIm\u7684 "do" \u547d\u4ee4\u5176\u4e2d\u4e4b\u4e00\uff0c\u7c7b\u4f3c\u4e8e\u60a8\u524d\u9762\u770b\u5230\u7684 ',(0,a.kt)("inlineCode",{parentName:"p"},"argdo")," \u3002",(0,a.kt)("inlineCode",{parentName:"p"},"windo")," \u5c06\u547d\u4ee4\u6267\u884c\u5728\u6bcf\u4e00\u4e2a\u7a97\u53e3\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6709\u5f88\u591a\u63d0\u4f9bgit\u652f\u6301\u7684Vim\u63d2\u4ef6\u3002\u4ee5\u4e0b\u662f Vim \u4e2d\u8f83\u6d41\u884c\u7684 Git \u76f8\u5173\u63d2\u4ef6\u5217\u8868\uff08\u60a8\u8bfb\u5230\u8fd9\u7bc7\u6587\u7ae0\u65f6\u53ef\u80fd\u53c8\u6709\u66f4\u591a\uff09\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/airblade/vim-gitgutter"},"vim-gitgutter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mhinz/vim-signify"},"vim-signify")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tpope/vim-fugitive"},"vim-fugitive")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/junegunn/gv.vim"},"gv.vim")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jreybert/vimagit"},"vimagit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/sodapopcan/vim-twiggy"},"vim-twiggy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tpope/vim-rhubarb"},"rhubarb"))),(0,a.kt)("p",null,"\u5176\u4e2d\u6700\u6d41\u884c\u7684\u662f vim-fugitive\u3002\u672c\u7ae0\u7684\u5269\u4f59\u90e8\u5206\uff0c\u6211\u5c06\u4f7f\u7528\u6b64\u63d2\u4ef6\u6765\u4ecb\u7ecd\u51e0\u4e2a git \u5de5\u4f5c\u6d41\u3002"),(0,a.kt)("h2",{id:"vim-fugitive"},"Vim-Fugitive"),(0,a.kt)("p",null,"vim-fugitive \u63d2\u4ef6\u5141\u8bb8\u60a8\u5728\u4e0d\u79bb\u5f00 Vim \u7f16\u8f91\u5668\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c git \u547d\u4ee4\u884c\u754c\u9762\u3002\u60a8\u4f1a\u53d1\u73b0\uff0c\u6709\u4e9b\u547d\u4ee4\u5728 Vim \u5185\u90e8\u6267\u884c\u65f6\u4f1a\u66f4\u597d\u3002"),(0,a.kt)("p",null,"\u5f00\u59cb\u524d\uff0c\u8bf7\u5148\u4f7f\u7528 Vim \u63d2\u4ef6\u7ba1\u7406\u5668\uff08",(0,a.kt)("a",{parentName:"p",href:"https://github.com/junegunn/vim-plug"},"vim-plug"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/VundleVim/Vundle.vim"},"vundle"),"\u3001",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Shougo/dein.vim"},"dein.vim")," \u7b49\uff09\u5b89\u88c5 vim-fugitive\u3002"),(0,a.kt)("h2",{id:"git-status"},"Git Status"),(0,a.kt)("p",null,"\u5f53\u60a8\u4e0d\u5e26\u53c2\u6570\u5730\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":Git")," \u547d\u4ee4\u65f6\uff0cvim-fugitive \u5c06\u663e\u793a\u4e00\u4e2a git \u6982\u8981\u7a97\u53e3\uff0c\u5b83\u663e\u793a\u4e86\u672a\u8ddf\u8e2a\u3001\u672a\u6682\u5b58\u548c\u5df2\u6682\u5b58\u7684\u6587\u4ef6\u3002\u5728\u6b64 \u201c",(0,a.kt)("inlineCode",{parentName:"p"},"git status"),"\u201d \u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u505a\u4e00\u4e9b\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl-n")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"Ctrl-p")," \u8f6c\u5230\u4e0b\u4e00\u4e2a / \u4e0a\u4e00\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," \u6682\u5b58\u6216\u53d6\u6d88\u6682\u5b58\u5149\u6807\u5904\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s")," \u6682\u5b58\u5149\u6807\u5904\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"u")," \u53d6\u6d88\u6682\u5b58\u5149\u6807\u5904\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"<")," \u5185\u8054\u663e\u793a\u6216\u9690\u85cf\u5149\u6807\u5904\u6587\u4ef6\u7684\u5dee\u5f02\u53d8\u5316\u3002")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Finding files in FZF",width:"900",height:"auto",src:"images/fugitive-git.png"})),(0,a.kt)("p",null,"\u67e5\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},":h fugitive-staging-maps")," \u53ef\u83b7\u5f97\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("h2",{id:"git-blame"},"Git Blame"),(0,a.kt)("p",null,"\u5728\u5f53\u524d\u6587\u4ef6\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":Git blame")," \u547d\u4ee4\uff0cvim-fugitive \u53ef\u4ee5\u663e\u793a\u4e00\u4e2a\u62c6\u5206\u7684\u95ee\u8d23\u7a97\u53e3\u3002\u8fd9\u6709\u52a9\u4e8e\u8ffd\u8e2a\u90a3\u4e9b BUG \u662f\u8c01\u5199\u7684\uff0c\u63a5\u7740\u5c31\u53ef\u4ee5\u51b2\u4ed6/\u5979\u6012\u543c\uff08\u5f00\u4e2a\u73a9\u7b11\uff09\u3002"),(0,a.kt)("p",null,"\u5728  ",(0,a.kt)("inlineCode",{parentName:"p"},'"git blame"')," \u6a21\u5f0f\u4e0b\u60a8\u53ef\u4ee5\u505a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"q")," \u5173\u95ed\u95ee\u8d23\u7a97\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"A")," \u8c03\u6574\u4f5c\u8005\u5217\u5927\u5c0f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C")," \u8c03\u6574\u63d0\u4ea4\u5217\u5927\u5c0f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"D")," \u8c03\u6574\u65e5\u671f/\u65f6\u95f4\u5217\u5927\u5c0f\u3002")),(0,a.kt)("p",null,"\u67e5\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},":h :Git_blame")," \u53ef\u83b7\u5f97\u66f4\u591a\u4fe1\u606f\u3002"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Finding files in FZF",width:"900",height:"auto",src:"images/fugitive-git-blame.png"})),(0,a.kt)("h2",{id:"gdiffsplit"},"Gdiffsplit"),(0,a.kt)("p",null,"\u5f53\u60a8\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":Gdiffsplit")," \u547d\u4ee4\u540e\uff0cvim-fugitive \u4f1a\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"vimdiff"),"\uff0c\u6bd4\u5bf9\u7d22\u5f15\u6216\u5de5\u4f5c\u6811\u4e2d\u7684\u7248\u672c\u4e0e\u5f53\u524d\u6587\u4ef6\u6700\u65b0\u66f4\u6539\u7684\u533a\u522b\u3002\u5982\u679c\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":Gdiffsplit <commit>"),"\uff0cvim-fugitive \u5219\u4f1a\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"<commit>")," \u4e2d\u7684\u7248\u672c\u6765\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"vimdiff"),"\u3002"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Finding files in FZF",width:"900",height:"auto",src:"images/fugitive-gdiffsplit.png"})),(0,a.kt)("p",null,"\u7531\u4e8e\u60a8\u5904\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"vimdiff")," \u6a21\u5f0f\u4e2d\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":diffput")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},":diffget")," \u6765 ",(0,a.kt)("em",{parentName:"p"},"\u83b7\u53d6")," \u6216 ",(0,a.kt)("em",{parentName:"p"},"\u8f93\u51fa")," \u5dee\u5f02\u3002"),(0,a.kt)("h2",{id:"gwrite-\u548c-gread"},"Gwrite \u548c Gread"),(0,a.kt)("p",null,"\u5f53\u60a8\u5728\u66f4\u6539\u6587\u4ef6\u540e\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":Gwrite")," \u547d\u4ee4\uff0cvim-fugitive \u5c06\u6682\u5b58\u66f4\u6539\uff0c\u5c31\u50cf\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"git add <current-file>")," \u4e00\u6837\u3002"),(0,a.kt)("p",null,"\u5f53\u60a8\u5728\u66f4\u6539\u6587\u4ef6\u540e\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":Gread")," \u547d\u4ee4\uff0cvim-fugitive \u4f1a\u5c06\u6587\u4ef6\u8fd8\u539f\u81f3\u66f4\u6539\u524d\u7684\u72b6\u6001\uff0c\u5c31\u50cf\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout <current-file>")," \u4e00\u6837\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":Gread")," \u8fd8\u6709\u4e00\u4e2a\u597d\u5904\u662f\u64cd\u4f5c\u53ef\u64a4\u9500\u3002\u5982\u679c\u5728\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":Gread")," \u540e\u60a8\u6539\u53d8\u4e3b\u610f\uff0c\u60f3\u8981\u4fdd\u7559\u539f\u6765\u7684\u66f4\u6539\uff0c\u60a8\u53ea\u9700\u8981\u64a4\u6d88\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"u"),"\uff09\uff0cVim \u5c06\u64a4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},":Gread")," \u64cd\u4f5c\u3002\u8981\u6362\u4f5c\u662f\u5728\u547d\u4ee4\u884c\u4e2d\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"git checkout <current-file>"),"\uff0c\u5c31\u5b8c\u6210\u4e0d\u4e86\u8fd9\u79cd\u64cd\u4f5c\u4e86\u3002"),(0,a.kt)("h2",{id:"gclog"},"Gclog"),(0,a.kt)("p",null,"\u5f53\u60a8\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":Gclog")," \u547d\u4ee4\u65f6\uff0cvim-fugitive \u5c06\u663e\u793a\u63d0\u4ea4\u5386\u53f2\u8bb0\u5f55\uff0c\u5c31\u50cf\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"git log")," \u547d\u4ee4\u4e00\u6837\u3002Vim-fugitive \u4f7f\u7528 Vim \u7684 quickfix \u6765\u5b8c\u6210\u6b64\u4efb\u52a1\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":cnext")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},":cprevious")," \u6765\u904d\u5386\u4e0b\u4e00\u4e2a\u6216\u4e0a\u4e00\u4e2a\u65e5\u5fd7\u4fe1\u606f\u3002\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},":copen")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},":cclose")," \u6253\u5f00\u6216\u5173\u95ed\u65e5\u5fd7\u5217\u8868\u3002"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{alt:"Finding files in FZF",width:"900",height:"auto",src:"images/fugitive-git-log.png"})),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},'"git log"')," \u6a21\u5f0f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u505a\u4e24\u4ef6\u4e8b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6811\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u7236\u7ea7\uff08\u4e0a\u4e00\u4e2a\u63d0\u4ea4\uff09\u3002")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"git log")," \u547d\u4ee4\u4e00\u6837\uff0c\u4f20\u9012\u53c2\u6570\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},":Gclog")," \u547d\u4ee4\u3002\u5982\u679c\u60a8\u9879\u76ee\u7684\u63d0\u4ea4\u5386\u53f2\u8bb0\u5f55\u5f88\u957f\uff0c\u53ea\u60f3\u770b\u6700\u540e\u4e09\u4e2a\u63d0\u4ea4\uff0c\u5219\u53ef\u4ee5\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},":Gclog -3"),"\u3002\u5982\u679c\u9700\u8981\u6839\u636e\u63d0\u4ea4\u65e5\u671f\u6765\u7b5b\u9009\u8bb0\u5f55\uff0c\u53ef\u4ee5\u8fd0\u884c\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},':Gclog --after="January 1" --before="March 14"')," \u7684\u547d\u4ee4\u3002"),(0,a.kt)("h2",{id:"vim-fugitive-\u7684\u66f4\u591a\u529f\u80fd"},"Vim-Fugitive \u7684\u66f4\u591a\u529f\u80fd"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u53ea\u662f\u5be5\u5be5\u51e0\u4e2a vim-fugitive \u529f\u80fd\u7684\u4f8b\u5b50\uff0c\u60a8\u53ef\u4ee5\u67e5\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},":h fugitive.txt")," \u6765\u4e86\u89e3\u66f4\u591a\u6709\u5173 vim-fugitive \u7684\u4fe1\u606f\u3002\u5927\u591a\u6570\u6d41\u884c\u7684 git \u547d\u4ee4\u53ef\u80fd\u90fd\u6709 vim-fugitive \u7684\u4f18\u5316\u7248\u672c\uff0c\u60a8\u53ea\u9700\u5728\u6587\u6863\u4e2d\u67e5\u627e\u5b83\u4eec\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5904\u4e8e vim-fugitive \u7684\u201c\u7279\u6b8a\u6a21\u5f0f\u201d\uff08\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},":Git")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},":Git blame")," \u6a21\u5f0f\uff09\u4e2d\uff0c\u6309\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"g?")," \u53ef\u4ee5\u4e86\u89e3\u5f53\u524d\u6709\u54ea\u4e9b\u53ef\u7528\u7684\u5feb\u6377\u952e\uff0cVim-fugitive \u5c06\u4e3a\u60a8\u6240\u5904\u7684\u6a21\u5f0f\u663e\u793a\u76f8\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},":help")," \u7a97\u53e3\u3002\u68d2\u6781\u4e86\uff01"),(0,a.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60-vim-\u548c-git"},"\u806a\u660e\u5730\u5b66\u4e60 Vim \u548c Git"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u4eba\u90fd\u6709\u4e0d\u540c\u7684 git \u5de5\u4f5c\u6d41\uff0c\u53ef\u80fd vim-fugitive \u975e\u5e38\u5408\u9002\u60a8\u7684\u5de5\u4f5c\u6d41\uff08\u4e5f\u53ef\u80fd\u4e0d\u9002\u5408\uff09\u3002\u603b\u4e4b\uff0c\u6211\u5f3a\u70c8\u5efa\u8bae\u60a8\u8bd5\u8bd5\u4e0a\u9762\u5217\u51fa\u7684\u6240\u6709\u63d2\u4ef6\u3002\u53ef\u80fd\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7684\u6211\u6ca1\u6709\u5217\u51fa\u6765\uff0c\u90fd\u53ef\u4ee5\u53bb\u8bd5\u4e00\u8bd5\u3002"),(0,a.kt)("p",null,"\u8981\u8ba9Vim-git\u7684\u96c6\u6210\u5de5\u4f5c\u5f97\u66f4\u597d\uff0c\u4e00\u4e2a\u663e\u800c\u6613\u89c1\u7684\u529e\u6cd5\u5c31\u662f\u53bb\u6df1\u5165\u4e86\u89e3git\u3002Git \u672c\u8eab\u662f\u4e00\u4e2a\u5f88\u5e9e\u5927\u7684\u4e3b\u9898\uff0c\u6211\u53ea\u5411\u60a8\u5c55\u793a\u4e86\u5b83\u5176\u4e2d\u5f88\u5c0f\u7684\u4e00\u90e8\u5206\u3002\u597d\u4e86\uff0c\u63a5\u4e0b\u6765\u8c08\u8c08\u5982\u4f55\u4f7f\u7528 Vim \u7f16\u8bd1\u60a8\u7684\u4ee3\u7801\u3002"))}d.isMDXComponent=!0}}]);