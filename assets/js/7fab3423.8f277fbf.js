"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5479],{33670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));n(16758);const i={title:"\u8bed\u6cd5",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},p="\u7b2c04\u7ae0 Vim \u8bed\u6cd5",r={unversionedId:"others/Vim/ch04_vim_grammar",id:"others/Vim/ch04_vim_grammar",title:"\u8bed\u6cd5",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch04_vim_grammar.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch04_vim_grammar",permalink:"/docs/others/Vim/ch04_vim_grammar",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch04_vim_grammar.md",tags:[{label:"VIM",permalink:"/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1681142816,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{title:"\u8bed\u6cd5",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u6253\u5f00\u548c\u641c\u7d22\u6587\u4ef6",permalink:"/docs/others/Vim/ch03_searching_files"},next:{title:"\u5728\u6587\u4ef6\u4e2d\u79fb\u52a8",permalink:"/docs/others/Vim/ch05_moving_in_file"}},m={},o=[{value:"\u5982\u4f55\u5b66\u4e60\u4e00\u95e8\u8bed\u8a00",id:"\u5982\u4f55\u5b66\u4e60\u4e00\u95e8\u8bed\u8a00",level:2},{value:"\u8bed\u6cd5\u89c4\u5219",id:"\u8bed\u6cd5\u89c4\u5219",level:2},{value:"\u540d\u8bcd(\u52a8\u4f5c Motion)",id:"\u540d\u8bcd\u52a8\u4f5c-motion",level:2},{value:"\u52a8\u8bcd(\u64cd\u4f5c\u7b26 Operator)",id:"\u52a8\u8bcd\u64cd\u4f5c\u7b26-operator",level:2},{value:"\u52a8\u8bcd\uff08\u64cd\u4f5c\u7b26 Operator\uff09\u548c\u540d\u8bcd\uff08\u52a8\u4f5c motions\uff09\u7684\u7ed3\u5408",id:"\u52a8\u8bcd\u64cd\u4f5c\u7b26-operator\u548c\u540d\u8bcd\u52a8\u4f5c-motions\u7684\u7ed3\u5408",level:2},{value:"\u66f4\u591a\u540d\u8bcd(\u6587\u672c\u5bf9\u8c61 Text Objects)",id:"\u66f4\u591a\u540d\u8bcd\u6587\u672c\u5bf9\u8c61-text-objects",level:2},{value:"\u7ed3\u5408\u6027\u548c\u8bed\u6cd5",id:"\u7ed3\u5408\u6027\u548c\u8bed\u6cd5",level:2},{value:"\u806a\u660e\u5730\u5b66\u4e60\u8bed\u6cd5",id:"\u806a\u660e\u5730\u5b66\u4e60\u8bed\u6cd5",level:2}],k={toc:o};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b2c04\u7ae0-vim-\u8bed\u6cd5"},"\u7b2c04\u7ae0 Vim \u8bed\u6cd5"),(0,l.kt)("p",null,"\u521a\u63a5\u89e6Vim\u65f6\u5f88\u5bb9\u6613\u88abVim\u8bb8\u591a\u590d\u6742\u7684\u547d\u4ee4\u5413\u5230\uff0c\u5982\u679c\u4f60\u770b\u5230\u4e00\u4e2aVim\u7684\u7528\u6237\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"gUfV"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"1GdG"),"\uff0c\u4f60\u53ef\u80fd\u4e0d\u80fd\u7acb\u523b\u60f3\u5230\u8fd9\u4e9b\u547d\u4ee4\u662f\u5728\u505a\u4ec0\u4e48\u3002\u8fd9\u4e00\u7ae0\u4e2d\uff0c\u6211\u5c06\u628aVim\u547d\u4ee4\u7684\u7ed3\u6784\u62c6\u5206\u6210\u4e00\u4e2a\u7b80\u5355\u7684\u8bed\u6cd5\u89c4\u5219\u8fdb\u884c\u8bb2\u89e3\u3002"),(0,l.kt)("p",null,'\u8fd9\u4e00\u7ae0\u5c06\u662f\u672c\u4e66\u4e2d\u6700\u91cd\u8981\u7684\u4e00\u7ae0\uff0c\u4e00\u65e6\u4f60\u7406\u89e3\u4e86Vim\u547d\u4ee4\u7684\u8bed\u6cd5\u7ed3\u6784\uff0c\u4f60\u5c06\u80fd\u591f\u548cVim"\u8bf4\u8bdd"\u3002\u6ce8\u610f\uff0c\u5728\u8fd9\u4e00\u7ae0\u4e2d\u5f53\u6211\u8ba8\u8bbaVim\u8bed\u8a00\u65f6\uff0c\u6211\u8ba8\u8bba\u5e76\u4e0d\u662f\nVimscript(Vim\u81ea\u5e26\u7684\u63d2\u4ef6\u7f16\u5199\u548c\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u7684\u8bed\u8a00)\uff0c\u8fd9\u91cc\u6211\u8ba8\u8bba\u7684\u662fVim\u4e2dnormal\u6a21\u5f0f\u7684\u4e0b\u7684\u547d\u4ee4\u7684\u901a\u7528\u89c4\u5219\u3002'),(0,l.kt)("h2",{id:"\u5982\u4f55\u5b66\u4e60\u4e00\u95e8\u8bed\u8a00"},"\u5982\u4f55\u5b66\u4e60\u4e00\u95e8\u8bed\u8a00"),(0,l.kt)("p",null,"\u6211\u5e76\u4e0d\u662f\u4e00\u4e2a\u82f1\u8bed\u4e3a\u6bcd\u8bed\u7684\u4eba\uff0c\u5f53\u621113\u5c81\u79fb\u6c11\u5230\u7f8e\u56fd\u65f6\u6211\u5b66\u4e60\u7684\u82f1\u8bed\uff0c\u6211\u4f1a\u901a\u8fc7\u505a\u4e09\u4ef6\u4e8b\u60c5\u5efa\u7acb\u6211\u7684\u8bed\u8a00\u80fd\u529b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5b66\u4e60\u8bed\u6cd5\u89c4\u5219"),(0,l.kt)("li",{parentName:"ol"},"\u6269\u5c55\u6211\u7684\u8bcd\u6c47\u91cf"),(0,l.kt)("li",{parentName:"ol"},"\u7ec3\u4e60\uff0c\u7ec3\u4e60\uff0c\u7ec3\u4e60")),(0,l.kt)("p",null,"\u540c\u6837\u7684\uff0c\u4e3a\u4e86\u8bf4\u597dVim\u8bed\u8a00\uff0c\u4f60\u9700\u8981\u5b66\u4e60\u8bed\u6cd5\u89c4\u5219\uff0c\u589e\u52a0\u8bcd\u6c47\u91cf\uff0c\u5e76\u4e14\u4e0d\u65ad\u7ec3\u4e60\u76f4\u5230\u4f60\u53ef\u4ee5\u628a\u6267\u884c\u547d\u4ee4\u53d8\u6210\u808c\u8089\u8bb0\u5fc6\u3002"),(0,l.kt)("h2",{id:"\u8bed\u6cd5\u89c4\u5219"},"\u8bed\u6cd5\u89c4\u5219"),(0,l.kt)("p",null,"\u4f60\u53ea\u9700\u8981\u77e5\u9053\u4e00\u4e2aVim\u8bed\u8a00\u7684\u8bed\u6cd5\u89c4\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"verb + noun # \u52a8\u8bcd + \u540d\u8bcd\n")),(0,l.kt)("p",null,"\u8fd9\u5c31\u7c7b\u4f3c\u4e0e\u5728\u82f1\u8bed\u4e2d\u7684\u7948\u4f7f\u53e5\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'"Eat(verb) a donut(noun)"'),(0,l.kt)("li",{parentName:"ul"},'"Kick(verb) a ball(noun)"'),(0,l.kt)("li",{parentName:"ul"},'"Learn(verb) the Vim Editor(noun)"')),(0,l.kt)("p",null,"\u73b0\u5728\u4f60\u9700\u8981\u7684\u5c31\u662f\u7528Vim\u4e2d\u57fa\u672c\u7684\u52a8\u8bcd\u548c\u540d\u5b57\u6765\u5efa\u7acb\u4f60\u7684\u8bcd\u6c47\u8868"),(0,l.kt)("h2",{id:"\u540d\u8bcd\u52a8\u4f5c-motion"},"\u540d\u8bcd(\u52a8\u4f5c Motion)"),(0,l.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u5c06 ",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c Motion")," \u4f5c\u4e3a\u540d\u8bcd\uff0c ",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5cMotion"),"\u7528\u6765\u5728Vim\u4e2d\u5230\u5904\u79fb\u52a8\u3002\u4e0b\u9762\u5217\u51fa\u4e86\u4e00\u4e9b\u5e38\u89c1\u7684",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\u7684\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"h   \u5de6\nj   \u4e0b\nk   \u4e0a\nl   \u53f3\nw   \u5411\u524d\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5355\u8bcd\u7684\u5f00\u5934\n}   \u8df3\u8f6c\u5230\u4e0b\u4e00\u4e2a\u6bb5\u843d\n$   \u8df3\u8f6c\u5230\u5f53\u524d\u884c\u7684\u672b\u5c3e\n")),(0,l.kt)("p",null,"\u5728\u4e4b\u540e\u7684\u7ae0\u8282\u4f60\u5c06\u5b66\u4e60\u66f4\u591a\u7684\u5173\u4e8e",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\u7684\u5185\u5bb9\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u4e0d\u7406\u89e3\u4e0a\u9762\u8fd9\u4e9b",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\u4e5f\u4e0d\u5fc5\u62c5\u5fc3\u3002"),(0,l.kt)("h2",{id:"\u52a8\u8bcd\u64cd\u4f5c\u7b26-operator"},"\u52a8\u8bcd(\u64cd\u4f5c\u7b26 Operator)"),(0,l.kt)("p",null,"\u6839\u636e",(0,l.kt)("inlineCode",{parentName:"p"},":h operator"),"\uff0cVim\u5171\u670916\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26"),"\uff0c\u7136\u800c\u6839\u636e\u6211\u7684\u7ecf\u9a8c\uff0c\u5b66\u4e60\u8fd93\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26"),"\u572880%\u7684\u60c5\u51b5\u4e0b\u5c31\u5df2\u7ecf\u591f\u7528\u4e86"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"y   yank(\u590d\u5236)\nd   delete(\u5220\u9664)\nc   change \u5220\u9664\u6587\u672c\uff0c\u5c06\u5220\u9664\u7684\u6587\u672c\u5b58\u5230\u5bc4\u5b58\u5668\u4e2d\uff0c\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\n")),(0,l.kt)("p",null,"\u987a\u5e26\u8bf4\u4e00\u53e5\uff0c\u5f53\u4f60yank\u4e00\u6bb5\u6587\u672c\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"p"),"\u5c06\u5b83\u7c98\u8d34\u5230\u5149\u6807\u540e\uff0c\u6216\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"P"),"\u7c98\u8d34\u5230\u5149\u6807\u524d\u3002"),(0,l.kt)("h2",{id:"\u52a8\u8bcd\u64cd\u4f5c\u7b26-operator\u548c\u540d\u8bcd\u52a8\u4f5c-motions\u7684\u7ed3\u5408"},"\u52a8\u8bcd\uff08\u64cd\u4f5c\u7b26 Operator\uff09\u548c\u540d\u8bcd\uff08\u52a8\u4f5c motions\uff09\u7684\u7ed3\u5408"),(0,l.kt)("p",null,"\u73b0\u5728\u4f60\u5df2\u7ecf\u77e5\u9053\u4e86\u57fa\u672c\u7684\u52a8\u8bcd\u548c\u540d\u8bcd\uff0c\u6211\u4eec\u6765\u7528\u4e00\u4e0b\u6211\u4eec\u7684\u8bed\u6cd5\u89c4\u5219\uff0c\u52a8\u8bcd\u548c\u540d\u8bcd\u7684\u7ed3\u5408\uff01\u5047\u8bbe\u4f60\u6709\u4e0b\u9762\u8fd9\u6bb5\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const learn = "Vim";\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u590d\u5236\u5f53\u524d\u4f4d\u7f6e\u5230\u884c\u5c3e\u7684\u6240\u6709\u5185\u5bb9\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"y$")),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u5f53\u524d\u4f4d\u7f6e\u5230\u4e0b\u4e00\u4e2a\u5355\u8bcd\u7684\u5f00\u5934\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"dw")),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u5f53\u524d\u4f4d\u7f6e\u5230\u8fd9\u4e2a\u6bb5\u843d\u7684\u7ed3\u5c3e\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"c}"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c motions"),"\u4e5f\u63a5\u53d7\u6570\u5b57\u4f5c\u4e3a\u53c2\u6570(\u8fd9\u4e2a\u90e8\u5206\u6211\u5c06\u5728\u4e0b\u4e2a\u7ae0\u8282\u5c55\u5f00)\uff0c\u5982\u679c\u4f60\u9700\u8981\u5411\u4e0a\u79fb\u52a83\u884c\uff0c\u4f60\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"3k"),"\u4ee3\u66ff\u63093\u6b21",(0,l.kt)("inlineCode",{parentName:"p"},"k"),"\uff0c\u6570\u5b57\u53ef\u5e94\u7528\u5728Vim\u8bed\u6cd5\u4e2d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5411\u5de6\u62f7\u8d1d2\u4e2a\u5b57\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"y2h")),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u540e\u4e24\u4e2a\u5355\u8bcd\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"d2w")),(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u540e\u9762\u4e24\u884c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"c2j"))),(0,l.kt)("p",null,"\u76ee\u524d\uff0c\u4f60\u4e5f\u8bb8\u9700\u8981\u60f3\u5f88\u4e45\u624d\u80fd\u5b8c\u6210\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\uff0c\u4e0d\u8fc7\u6211\u521a\u5f00\u59cb\u65f6\u4e5f\u662f\u8fd9\u6837\uff0c\u6211\u4e5f\u7ecf\u5386\u8fc7\u7c7b\u4f3c\u7684\u6323\u624e\u7684\u9636\u6bb5\u4f46\u662f\u4e0d\u4e45\u6211\u7684\u901f\u5ea6\u5c31\u5feb\u4e86\u8d77\u6765\uff0c\u4f60\u4e5f\u4e00\u6837\u3002\u552f\u4e00\u9014\u5f84\u5c31\u662f\u91cd\u590d\u3001\u91cd\u590d\u518d\u91cd\u590d\u3002"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u8865\u5145\uff0c\u884c\u7ea7\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26 operations")," (\u4f5c\u7528\u5728\u6574\u884c\u4e2d\u7684\u64cd\u4f5c\u7b26)\u5728\u6587\u672c\u7f16\u8f91\u4e2d\u548c\u5176\u4ed6\u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26")," \u4e00\u6837\uff0cVim\u5141\u8bb8\u4f60\u901a\u8fc7\u6309\u4e24\u6b21 ",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26"),"\u4f7f\u5b83\u6267\u884c\u884c\u7ea7\u7684\u64cd\u4f5c\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"dd"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"yy"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"cc"),"\u6765\u6267\u884c\u5220\u9664\uff0c\u590d\u5236\u6216\u4fee\u6539\u6574\u4e2a\u884c\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6operations\u8bd5\u4e00\u4e0b\uff08\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"gUgU"),"\uff09\u3002"),(0,l.kt)("p",null,"666!\u4ece\u8fd9\u53ef\u4ee5\u770b\u51faVim\u547d\u4ee4\u7684\u4e00\u79cd\u6267\u884c\u6a21\u5f0f\u3002\u4f46\u662f\u5230\u76ee\u524d\u4e3a\u6b62\u8fd8\u6ca1\u6709\u7ed3\u675f\uff0cVim\u6709\u53e6\u4e00\u79cd\u7c7b\u578b\u7684\u540d\u8bcd\uff1a\u6587\u672c\u5bf9\u8c61(text object)"),(0,l.kt)("h2",{id:"\u66f4\u591a\u540d\u8bcd\u6587\u672c\u5bf9\u8c61-text-objects"},"\u66f4\u591a\u540d\u8bcd(\u6587\u672c\u5bf9\u8c61 Text Objects)"),(0,l.kt)("p",null,"\u60f3\u8c61\u4e00\u4e0b\u4f60\u73b0\u5728\u6b63\u5728\u67d0\u4e2a\u88ab\u62ec\u53f7\u5305\u56f4\u7684\u6587\u672c\u4e2d\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"(hello Vim)"),"\uff0c\u4f60\u73b0\u5728\u60f3\u8981\u5220\u6389\u62ec\u53f7\u4e2d\u7684\u6240\u6709\u5185\u5bb9\uff0c\u4f60\u4f1a\u600e\u6837\u5feb\u901f\u7684\u5b8c\u6210\u5b83\uff1f\u662f\u5426\u6709\u4e00\u79cd\u65b9\u6cd5\u80fd\u591f\u628a\u62ec\u53f7\u4e2d\u5185\u5bb9\u4f5c\u4e3a\u6574\u4f53\u5220\u9664\u5462\uff1f"),(0,l.kt)("p",null,"\u7b54\u6848\u662f\u6709\u7684\u3002\u6587\u672c\u901a\u5e38\u662f\u7ed3\u6784\u5316\u7684\uff0c\u7279\u522b\u662f\u4ee3\u7801\u4e2d\uff0c\u6587\u672c\u7ecf\u5e38\u88ab\u653e\u7f6e\u5728\u5c0f\u62ec\u53f7\u3001\u4e2d\u62ec\u53f7\u3001\u5927\u62ec\u53f7\u3001\u5f15\u53f7\u7b49\u5f53\u4e2d\u3002Vim\u63d0\u4f9b\u4e86\u4e00\u79cd\u5904\u7406\u8fd9\u79cd\u7ed3\u6784\u7684\u6587\u672c\u5bf9\u8c61\u7684\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,"\u6587\u672c\u5bf9\u8c61\u53ef\u4ee5\u88ab ",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26 operations")," \u4f7f\u7528\uff0c\u8fd9\u91cc\u6709\u4e24\u7c7b\u6587\u672c\u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"i + object  \u5185\u90e8\u6587\u672c\u5bf9\u8c61\na + object  \u5916\u90e8\u6587\u672c\u5bf9\u8c61\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5185\u90e8\u6587\u672c\u5bf9\u8c61"),"\u9009\u4e2d\u7684\u90e8\u5206\u4e0d\u5305\u542b\u5305\u56f4\u6587\u672c\u5bf9\u8c61\u7684\u7a7a\u767d\u6216\u62ec\u53f7\u7b49\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u5916\u90e8\u6587\u672c\u5bf9\u8c61"),"\u5219\u5305\u62ec\u4e86\u5305\u56f4\u5185\u5bb9\u7684\u7a7a\u767d\u6216\u62ec\u53f7\u7b49\u5bf9\u8c61\u3002\u5916\u90e8\u5bf9\u8c61\u603b\u662f\u6bd4\u5185\u90e8\u5bf9\u8c61\u9009\u4e2d\u7684\u5185\u5bb9\u66f4\u591a\u3002\u5982\u679c\u4f60\u7684\u5149\u6807\u4f4d\u4e8e\u4e00\u5bf9\u62ec\u53f7\u5185\u90e8\uff0c\u4f8b\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"(hello Vim)"),"\u4e2d\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u62ec\u53f7\u5185\u90e8\u7684\u5185\u5bb9\u4f46\u4fdd\u7559\u62ec\u53f7\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"di(")),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u62ec\u53f7\u4ee5\u53ca\u5185\u90e8\u7684\u5185\u5bb9\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"da("))),(0,l.kt)("p",null,'\u8ba9\u6211\u4eec\u770b\u4e00\u4e9b\u522b\u7684\u4f8b\u5b50\uff0c\u5047\u8bbe\u4f60\u6709\u8fd9\u6837\u4e00\u6bb5Javascript\u7684\u51fd\u6570\uff0c\u4f60\u7684\u5149\u6807\u505c\u7559\u5728"Hello"\u4e2d\u7684"H"\u4e0a\uff1a'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const hello = function() {\n    console.log("Hello Vim");\n    return true;\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u5220\u9664\u6574\u4e2a"Hello Vim"\uff1a',(0,l.kt)("inlineCode",{parentName:"li"},"di(")),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u6574\u4e2a\u51fd\u6570(\u88ab{}\u5305\u542b)\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"di{")),(0,l.kt)("li",{parentName:"ul"},'\u5220\u9664"Hello"\u8fd9\u4e2a\u8bcd\uff1a',(0,l.kt)("inlineCode",{parentName:"li"},"diw"))),(0,l.kt)("p",null,"\u6587\u672c\u5bf9\u8c61\u5f88\u5f3a\u5927\u56e0\u4e3a\u4f60\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u4f4d\u7f6e\u6307\u5411\u4e0d\u540c\u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u5220\u9664\u4e00\u5bf9\u5c0f\u62ec\u53f7\u4e2d\u7684\u6587\u672c\uff0c\u4e5f\u53ef\u4ee5\u662f\u5f53\u524d\u5927\u62ec\u53f7\u4e2d\u7684\u51fd\u6570\u4f53\uff0c\u4e5f\u53ef\u4ee5\u662f\u5f53\u524d\u5355\u8bcd\u3002\u8fd9\u4e00\u70b9\u4e5f\u5f88\u597d\u8bb0\u5fc6\uff0c\u5f53\u4f60\u770b\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"di("),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"di{"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"diw"),"\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5f88\u597d\u7684\u610f\u8bc6\u5230\u4ed6\u4eec\u8868\u793a\u7684\u662f\u4ec0\u4e48\uff1a\u5c0f\u62ec\u53f7\uff0c\u5927\u62ec\u53f7\uff0c\u5355\u8bcd\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u6700\u540e\u4e00\u4e2a\u4f8b\u5b50\u3002\u5047\u8bbe\u4f60\u6709\u8fd9\u6837\u4e00\u4e9bhtml\u7684\u6807\u7b7e\u7684\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n  <h1>Header1</h1>\n  <p>Paragraph1</p>\n  <p>Paragraph2</p>\n</div>\n")),(0,l.kt)("p",null,'\u5982\u679c\u4f60\u7684\u5149\u6807\u4f4d\u4e8e"Header1"\u6587\u672c\u4e0a\uff1a'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u5220\u9664"Header1"\uff1a',(0,l.kt)("inlineCode",{parentName:"li"},"dit")),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"li"},"<h1>Header1</h1>"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"dat"))),(0,l.kt)("p",null,'\u5982\u679c\u4f60\u7684\u5149\u6807\u5728"div"\u6587\u672c\u4e0a\uff1a'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664",(0,l.kt)("inlineCode",{parentName:"li"},"h1"),"\u548c\u6240\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"p"),"\u6807\u7b7e\u7684\u884c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"dit")),(0,l.kt)("li",{parentName:"ul"},"\u5220\u9664\u6240\u6709\u6587\u672c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"dat")),(0,l.kt)("li",{parentName:"ul"},'\u5220\u9664"div"\uff1a',(0,l.kt)("inlineCode",{parentName:"li"},"di<"))),(0,l.kt)("p",null,"\u4e0b\u9762\u5217\u4e3e\u7684\u4e00\u4e9b\u901a\u5e38\u89c1\u5230\u7684\u6587\u672c\u5bf9\u8c61\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"w     \u4e00\u4e2a\u5355\u8bcd\np     \u4e00\u4e2a\u6bb5\u843d\ns     \u4e00\u4e2a\u53e5\u5b50\n(\u6216)  \u4e00\u5bf9()\n{\u6216}  \u4e00\u5bf9{}\n[\u6216]  \u4e00\u5bf9[]\n<\u6216>  \u4e00\u5bf9<>\nt     XML\u6807\u7b7e\n\"     \u4e00\u5bf9\"\"\n'     \u4e00\u5bf9''\n`     \u4e00\u5bf9``\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},":h text-objects"),"\u4e86\u89e3\u66f4\u591a"),(0,l.kt)("h2",{id:"\u7ed3\u5408\u6027\u548c\u8bed\u6cd5"},"\u7ed3\u5408\u6027\u548c\u8bed\u6cd5"),(0,l.kt)("p",null,"\u5728\u5b66\u4e60Vim\u7684\u8bed\u6cd5\u4e4b\u540e\uff0c\u8ba9\u6211\u4eec\u6765\u8ba8\u8bba\u4e00\u4e0bVim\u4e2d\u7684\u7ed3\u5408\u6027\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u5728\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u8fd9\u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u7ed3\u5408\u6027\u610f\u5473\u7740\u4f60\u6709\u5f88\u591a\u53ef\u4ee5\u7ec4\u5408\u8d77\u6765\u5b8c\u6210\u66f4\u590d\u6742\u547d\u4ee4\u7684\u666e\u901a\u547d\u4ee4\uff0c\u5c31\u50cf\u4f60\u5728\u7f16\u7a0b\u4e2d\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u7b80\u5355\u7684\u62bd\u8c61\u5efa\u7acb\u66f4\u590d\u6742\u7684\u62bd\u8c61\uff0c\u5728Vim\u4e2d\u4f60\u53ef\u4ee5\u901a\u8fc7\u7b80\u5355\u7684\u547d\u4ee4\u7684\u7ec4\u5408\u6267\u884c\u66f4\u590d\u6742\u7684\u547d\u4ee4\u3002Vim\u8bed\u6cd5\u6b63\u662fVim\u4e2d\u547d\u4ee4\u7684\u53ef\u7ed3\u5408\u6027\u7684\u4f53\u73b0\u3002"),(0,l.kt)("p",null,"Vim\u7684\u7ed3\u5408\u6027\u6700\u5f3a\u5927\u4e4b\u5904\u4f53\u73b0\u5728\u5b83\u548c\u5916\u90e8\u7a0b\u5e8f\u7ed3\u5408\u65f6\uff0cVim\u6709\u4e00\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"\u8fc7\u6ee4\u64cd\u4f5c\u7b26"),(0,l.kt)("inlineCode",{parentName:"p"},"!"),"\u53ef\u4ee5\u7528\u5916\u90e8\u7a0b\u5e8f\u8fc7\u6ee4\u6211\u4eec\u7684\u6587\u672c\u3002\u5047\u8bbe\u4f60\u6709\u4e0b\u9762\u8fd9\u6bb5\u6df7\u4e71\u7684\u6587\u672c\u5e76\u4e14\u4f60\u60f3\u628a\u5b83\u7528tab\u683c\u5f0f\u5316\u7684\u66f4\u597d\u770b\u7684\u4e00\u4e9b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Id|Name|Cuteness\n01|Puppy|Very\n02|Kitten|Ok\n03|Bunny|Ok\n")),(0,l.kt)("p",null,"\u8fd9\u4ef6\u4e8b\u60c5\u901a\u8fc7Vim\u547d\u4ee4\u4e0d\u592a\u5bb9\u6613\u5b8c\u6210\uff0c\u4f46\u662f\u4f60\u53ef\u4ee5\u901a\u8fc7\u7ec8\u7aef\u63d0\u4f9b\u7684\u547d\u4ee4",(0,l.kt)("inlineCode",{parentName:"p"},"column"),'\u5f88\u5feb\u7684\u5b8c\u6210\u5b83\uff0c\u5f53\u4f60\u7684\u5149\u6807\u4f4d\u4e8e"Id"\u4e0a\u65f6\uff0c\u8fd0\u884c',(0,l.kt)("inlineCode",{parentName:"p"},'!}column -t -s "|"'),"\uff0c\u4f60\u7684\u6587\u672c\u5c31\u53d8\u5f97\u6574\u9f50\u4e86\u8bb8\u591a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Id  Name    Cuteness\n01  Puppy   Very\n02  Kitten  Ok\n03  Bunny   Ok\n")),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u5206\u89e3\u4e00\u4e0b\u4e0a\u9762\u90a3\u6761\u547d\u4ee4\uff0c\u52a8\u8bcd\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"!"),"(",(0,l.kt)("strong",{parentName:"p"},"\u8fc7\u6ee4\u64cd\u4f5c\u7b26"),")\uff0c\u540d\u8bcd\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"}"),"(\u5230\u4e0b\u4e00\u4e2a\u6bb5\u843d)\u3002",(0,l.kt)("strong",{parentName:"p"},"\u8fc7\u6ee4\u64cd\u4f5c\u7b26"),(0,l.kt)("inlineCode",{parentName:"p"},"!"),"\u63a5\u53d7\u7ec8\u7aef\u547d\u4ee4\u4f5c\u4e3a\u53e6\u4e00\u4e2a\u53c2\u6570\uff0c\u56e0\u6b64\u6211\u628a",(0,l.kt)("inlineCode",{parentName:"p"},'column -t -s "|"'),"\u4f20\u7ed9\u5b83\u3002\u6211\u4e0d\u60f3\u8be6\u7ec6\u63cf\u8ff0",(0,l.kt)("inlineCode",{parentName:"p"},"column"),"\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u4f46\u662f\u603b\u4e4b\u5b83\u683c\u5f0f\u5316\u4e86\u6587\u672c\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u4f60\u4e0d\u6b62\u60f3\u683c\u5f0f\u5316\u4f60\u7684\u6587\u672c\uff0c\u8fd8\u60f3\u53ea\u5c55\u793a",(0,l.kt)("inlineCode",{parentName:"p"},"Ok"),"\u7ed3\u5c3e\u7684\u884c\uff0c\u4f60\u77e5\u9053",(0,l.kt)("inlineCode",{parentName:"p"},"awk"),"\u547d\u4ee4\u53ef\u4ee5\u505a\u8fd9\u4ef6\u4e8b\u60c5\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"!}column -t -s \"|\" | awk 'NR > 1 && /Ok/{print $0}'\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"02  Kitten  Ok\n03  Bunny   Ok\n")),(0,l.kt)("p",null,"666\uff01\u7ba1\u9053\u7adf\u7136\u5728Vim\u4e2d\u4e5f\u80fd\u8d77\u4f5c\u7528\u3002"),(0,l.kt)("p",null,"\u8fd9\u5c31\u662fVim\u7684\u7ed3\u5408\u6027\u7684\u5f3a\u5927\u4e4b\u5904\u3002\u4f60\u77e5\u9053\u7684\u52a8\u8bcd ",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26"),"\uff0c\u540d\u8bcd ",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\uff0c\u7ec8\u7aef\u547d\u4ee4\u8d8a\u591a\uff0c\u4f60\u7ec4\u5efa\u590d\u6742\u64cd\u4f5c\u7684\u80fd\u529b\u6210\u500d\u589e\u957f\u3002"),(0,l.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u5047\u8bbe\u4f60\u53ea\u77e5\u9053\u56db\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"w, $, }, G"),"\u548c\u5220\u9664\u64cd\u4f5c\u7b26(",(0,l.kt)("inlineCode",{parentName:"p"},"d"),")\uff0c\u4f60\u53ef\u4ee5\u505a8\u4ef6\u4e8b\uff1a\u6309\u56db\u79cd\u65b9\u5f0f\u79fb\u52a8(",(0,l.kt)("inlineCode",{parentName:"p"},"w, $, }, G"),")\u548c\u5220\u96644\u79cd\u6587\u672c\u5bf9\u8c61(",(0,l.kt)("inlineCode",{parentName:"p"},"dw, d$, d}, dG"),")\u3002\u5982\u679c\u6709\u4e00\u5929\u4f60\u5b66\u4e60\u4e86\u5c0f\u5199\u53d8\u5927\u5199\u7684",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"gU"),")\uff0c\u4f60\u7684Vim\u5de5\u5177\u7bb1\u4e2d\u591a\u7684\u4e0d\u662f1\u79cd\u5de5\u5177\uff0c\u800c\u662f4\u79cd\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"gUw, gU$, gU}, gUG"),"\u3002\u73b0\u5728\u4f60\u7684Vim\u5de5\u5177\u7bb1\u4e2d\u5c31\u670912\u79cd\u5de5\u5177\u4e86\u3002\u5982\u679c\u4f60\u77e5\u905310\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\u548c5\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26"),"\uff0c\u90a3\u4e48\u4f60\u5c31\u670960\u79cd\u5de5\u5177(50\u4e2a\u64cd\u4f5c+10\u4e2a\u79fb\u52a8)\u3002\u53e6\u5916\uff0c\u884c\u53f7\u52a8\u4f5c(",(0,l.kt)("inlineCode",{parentName:"p"},"nG"),")\u7ed9\u4f60\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u79cd",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\uff0c\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"n"),"\u662f\u4f60\u6587\u4ef6\u4e2d\u7684\u884c\u6570(\u4f8b\u5982\u524d\u5f80\u7b2c5\u884c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"5G"),")\u3002\u641c\u7d22\u52a8\u4f5c(",(0,l.kt)("inlineCode",{parentName:"p"},"/"),")\u5b9e\u9645\u4e0a\u7ed9\u4f60\u5e26\u6765\u65e0\u9650\u6570\u91cf\u7684",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\u56e0\u4e3a\u4f60\u53ef\u4ee5\u641c\u7d22\u4efb\u4f55\u5185\u5bb9\u3002\u4f60\u77e5\u9053\u591a\u5c11\u7ec8\u7aef\u547d\u4ee4\uff0c\u5916\u90e8\u547d\u4ee4\u64cd\u4f5c\u7b26(",(0,l.kt)("inlineCode",{parentName:"p"},"!"),")\u5c31\u7ed9\u4f60\u4e86\u591a\u5c11\u79cd\u8fc7\u6ee4\u5de5\u5177\u3002\u4f7f\u7528Vim\u8fd9\u79cd\u80fd\u591f\u7ec4\u5408\u7684\u5de5\u5177\uff0c\u6240\u6709\u4f60\u77e5\u9053\u7684\u4e1c\u897f\u90fd\u53ef\u4ee5\u88ab\u4e32\u8d77\u6765\u5b8c\u6210\u66f4\u590d\u6742\u7684\u64cd\u4f5c\u3002\u4f60\u77e5\u9053\u7684\u8d8a\u591a\uff0c\u4f60\u5c31\u8d8a\u5f3a\u5927\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u5177\u6709\u7ed3\u5408\u6027\u7684\u884c\u4e3a\u4e5f\u6b63\u7b26\u5408Unix\u7684\u54f2\u5b66\uff1a",(0,l.kt)("em",{parentName:"p"},"\u4e00\u4e2a\u547d\u4ee4\u505a\u597d\u4e00\u4ef6\u4e8b"),"\u3002",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\u53ea\u9700\u8981\u505a\u4e00\u4ef6\u4e8b\uff1a\u524d\u5f80X\u3002",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26"),"\u53ea\u9700\u8981\u505a\u4e00\u4ef6\u4e8b\uff1a\u5b8c\u6210Y\u3002\u901a\u8fc7\u7ed3\u5408\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26"),"\u548c\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\uff0c\u4f60\u5c31\u83b7\u5f97\u4e86YX\uff1a\u5728X\u4e0a\u5b8c\u6210Y\u3002"),(0,l.kt)("p",null,"\u751a\u81f3\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26"),"\u90fd\u662f\u53ef\u62d3\u5c55\u7684\uff0c\u4f60\u53ef\u4ee5\u81ea\u5df1\u521b\u9020",(0,l.kt)("strong",{parentName:"p"},"\u52a8\u4f5c"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7b26"),"\u53bb\u4e30\u5bcc\u4f60\u7684Vim\u5de5\u5177\u7bb1\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kana/vim-textobj-user"},(0,l.kt)("inlineCode",{parentName:"a"},"Vim-textobj-user")),"\u63d2\u4ef6\u5141\u8bb8\u4f60\u521b\u5efa\u81ea\u5df1\u7684\u6587\u672c\u5bf9\u8c61\uff0c\u540c\u65f6\u5305\u542b\u6709",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kana/vim-textobj-user/wiki"},"\u4e00\u7cfb\u5217\u5b9a\u4e49\u597d\u7684\u6587\u672c\u5bf9\u8c61"),"\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u6211\u521a\u624d\u4f7f\u7528\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"column"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"awk"),"\u547d\u4ee4\u4e5f\u6ca1\u6709\u5173\u7cfb\uff0c\u91cd\u8981\u7684\u662fVim\u53ef\u4ee5\u548c\u7ec8\u7aef\u547d\u4ee4\u5f88\u597d\u7684\u7ed3\u5408\u8d77\u6765\u3002"),(0,l.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60\u8bed\u6cd5"},"\u806a\u660e\u5730\u5b66\u4e60\u8bed\u6cd5"),(0,l.kt)("p",null,"\u4f60\u521a\u521a\u5b66\u5b8cVim\u552f\u4e00\u7684\u8bed\u6cd5\u89c4\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"verb + noun\n")),(0,l.kt)("p",null,'\u6211\u5b66Vim\u4e2d\u6700\u5927\u7684"AHA moment"\u4e4b\u4e00\u662f\u5f53\u6211\u521a\u5b66\u5b8c\u5927\u5199\u547d\u4ee4(',(0,l.kt)("inlineCode",{parentName:"p"},"gU"),")\u65f6\uff0c\u60f3\u8981\u628a\u4e00\u4e2a\u5355\u8bcd\u53d8\u6210\u5927\u5199\uff0c\u6211\u672c\u80fd\u7684\u8fd0\u884c\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"gUiW"),'\uff0c\u5b83\u5c45\u7136\u6210\u529f\u4e86\uff0c\u6211\u5149\u6807\u6240\u5728\u7684\u5355\u8bcd\u90fd\u5927\u5199\u4e86\u3002\u6211\u6b63\u662f\u4ece\u90a3\u662f\u5f00\u59cb\u7406\u89e3Vim\u7684\u3002\u6211\u5e0c\u671b\u4f60\u4e5f\u4f1a\u5728\u4e0d\u4e45\u4e4b\u540e\u6709\u4f60\u81ea\u5df1\u7684"AHA moment"\uff0c\u5982\u679c\u4e4b\u524d\u6ca1\u6709\u7684\u8bdd\u3002'),(0,l.kt)("p",null,"\u8fd9\u4e00\u7ae0\u7684\u76ee\u6807\u662f\u5411\u4f60\u5c55\u73b0Vim\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"verb+noun"),"\u6a21\u5f0f\uff0c\u56e0\u6b64\u4e4b\u540e\u4f60\u5c31\u53ef\u4ee5\u50cf\u5b66\u4e60\u4e00\u95e8\u65b0\u7684\u8bed\u8a00\u4e00\u6837\u6e10\u8fdb\u7684\u5b66\u4e60Vim\u800c\u4e0d\u662f\u6b7b\u8bb0\u6bcf\u4e2a\u547d\u4ee4\u7684\u7ec4\u5408\u3002"),(0,l.kt)("p",null,"\u5b66\u4e60\u8fd9\u79cd\u6a21\u5f0f\u5e76\u4e14\u7406\u89e3\u5176\u4e2d\u7684\u542b\u4e49\uff0c\u8fd9\u662f\u806a\u660e\u7684\u5b66\u4e60\u65b9\u5f0f\u3002"))}d.isMDXComponent=!0}}]);