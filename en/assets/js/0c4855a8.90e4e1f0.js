"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[709],{1003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>k});var a=t(87462),l=(t(67294),t(3905));t(16758);const i={title:"\u5b8f\u547d\u4ee4",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},p="\u7b2c09\u7ae0 \u5b8f\u547d\u4ee4",r={unversionedId:"others/Vim/ch09_macros",id:"others/Vim/ch09_macros",title:"\u5b8f\u547d\u4ee4",description:"VIM\u76f8\u5173\u6587\u6863",source:"@site/docs/others/Vim/ch09_macros.md",sourceDirName:"others/Vim",slug:"/others/Vim/ch09_macros",permalink:"/en/docs/others/Vim/ch09_macros",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Vim/ch09_macros.md",tags:[{label:"VIM",permalink:"/en/docs/tags/vim"},{label:"\u7f16\u8f91\u5668",permalink:"/en/docs/tags/\u7f16\u8f91\u5668"}],version:"current",lastUpdatedAt:1675524891,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{title:"\u5b8f\u547d\u4ee4",tags:["VIM","\u7f16\u8f91\u5668"],categories:[["\u6280\u672f"]],description:"VIM\u76f8\u5173\u6587\u6863"},sidebar:"anyThing",previous:{title:"\u5bc4\u5b58\u5668",permalink:"/en/docs/others/Vim/ch08_registers"},next:{title:"\u64a4\u9500",permalink:"/en/docs/others/Vim/ch10_undo"}},o={},k=[{value:"\u57fa\u672c\u5b8f\u547d\u4ee4",id:"\u57fa\u672c\u5b8f\u547d\u4ee4",level:2},{value:"\u5b89\u5168\u4fdd\u62a4",id:"\u5b89\u5168\u4fdd\u62a4",level:2},{value:"\u547d\u4ee4\u884c\u6267\u884c\u5b8f",id:"\u547d\u4ee4\u884c\u6267\u884c\u5b8f",level:2},{value:"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u6267\u884c\u5b8f\u547d\u4ee4",id:"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u6267\u884c\u5b8f\u547d\u4ee4",level:2},{value:"\u9012\u5f52\u6267\u884c\u5b8f\u547d\u4ee4",id:"\u9012\u5f52\u6267\u884c\u5b8f\u547d\u4ee4",level:2},{value:"\u589e\u6dfb\u4e00\u4e2a\u5df2\u77e5\u5b8f",id:"\u589e\u6dfb\u4e00\u4e2a\u5df2\u77e5\u5b8f",level:2},{value:"\u4fee\u6539\u4e00\u4e2a\u5df2\u77e5\u5b8f",id:"\u4fee\u6539\u4e00\u4e2a\u5df2\u77e5\u5b8f",level:2},{value:"\u62f7\u8d1d\u5b8f",id:"\u62f7\u8d1d\u5b8f",level:2},{value:"\u4e32\u884c\u5b8f\u548c\u5e76\u884c\u5b8f",id:"\u4e32\u884c\u5b8f\u548c\u5e76\u884c\u5b8f",level:2},{value:"\u806a\u660e\u5730\u5b66\u4e60\u5b8f\u547d\u4ee4",id:"\u806a\u660e\u5730\u5b66\u4e60\u5b8f\u547d\u4ee4",level:2}],m={toc:k};function d(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7b2c09\u7ae0-\u5b8f\u547d\u4ee4"},"\u7b2c09\u7ae0 \u5b8f\u547d\u4ee4"),(0,l.kt)("p",null,"\u5728\u7f16\u8f91\u6587\u4ef6\u7684\u65f6\u5019\uff0c\u4f60\u4f1a\u53d1\u73b0\u6709\u65f6\u5019\u4f60\u5728\u53cd\u590d\u5730\u505a\u4e00\u4e9b\u76f8\u540c\u7684\u52a8\u4f5c\u3002\u5982\u679c\u4f60\u4ec5\u505a\u4e00\u6b21\uff0c\u5e76\u5728\u9700\u8981\u7684\u65f6\u5019\u8c03\u7528\u8fd9\u4e9b\u52a8\u4f5c\u5c82\u4e0d\u662f\u4f1a\u66f4\u597d\u5417\u3002\u901a\u8fc7 Vim \u7684\u5b8f\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u5c06\u4e00\u4e9b\u52a8\u4f5c\u8bb0\u5f55\u5230 Vim \u5bc4\u5b58\u5668\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u7ae0\u4e2d\uff0c\u4f60\u5c06\u4f1a\u5b66\u4e60\u5230\u5982\u4f55\u901a\u8fc7\u5b8f\u547d\u4ee4\u81ea\u52a8\u5b8c\u6210\u4e00\u4e9b\u666e\u901a\u7684\u4efb\u52a1\uff08\u53e6\u5916\uff0c\u770b\u4f60\u7684\u6587\u4ef6\u5728\u81ea\u52a8\u7f16\u8f91\u662f\u4e00\u4ef6\u5f88\u9177\u7684\u4e8b\u60c5\uff09\u3002"),(0,l.kt)("h2",{id:"\u57fa\u672c\u5b8f\u547d\u4ee4"},"\u57fa\u672c\u5b8f\u547d\u4ee4"),(0,l.kt)("p",null,"\u5b8f\u547d\u4ee4\u7684\u57fa\u672c\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"qa                     \u5f00\u59cb\u8bb0\u5f55\u52a8\u4f5c\u5230\u5bc4\u5b58\u5668 a\nq (while recording)    \u505c\u6b62\u8bb0\u5f55\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5c0f\u5199\u5b57\u6bcd \uff08a-z\uff09\u53bb\u5b58\u50a8\u5b8f\u547d\u4ee4\u3002\u5e76\u901a\u8fc7\u5982\u4e0b\u7684\u547d\u4ee4\u53bb\u8c03\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"@a    Execute macro from register a\n@@    Execute the last executed macros\n")),(0,l.kt)("p",null,"\u5047\u8bbe\u4f60\u6709\u5982\u4e0b\u7684\u6587\u672c\uff0c\u4f60\u6253\u7b97\u5c06\u6bcf\u4e00\u884c\u4e2d\u7684\u6240\u6709\u5b57\u6bcd\u90fd\u53d8\u4e3a\u5927\u5199\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hello\nvim\nmacros\nare\nawesome\n")),(0,l.kt)("p",null,"\u5c06\u4f60\u7684\u5149\u6807\u79fb\u52a8\u5230 \u201chello\u201d \u680f\u7684\u884c\u9996\uff0c\u5e76\u6267\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"qa0gU$jq\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u7684\u5206\u89e3\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"qa")," \u5f00\u59cb\u8bb0\u5f55\u4e00\u4e2a\u5b8f\u5b9a\u4e49\u5e76\u5b58\u50a8\u5728 a \u5bc4\u5b58\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u79fb\u52a8\u5230\u884c\u9996\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gU$")," \u5c06\u4ece\u5149\u6807\u5230\u884c\u5c3e\u7684\u5b57\u6bcd\u53d8\u4e3a\u5927\u5199\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"j")," \u79fb\u52a8\u5230\u4e0b\u4e00\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"q")," \u505c\u6b62\u8bb0\u5f55\u3002")),(0,l.kt)("p",null,"\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@a")," \u53bb\u6267\u884c\u8be5\u5b8f\u547d\u4ee4\u3002\u5c31\u50cf\u5176\u4ed6\u7684\u5b8f\u547d\u4ee4\u4e00\u6837\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4e3a\u8be5\u547d\u4ee4\u52a0\u4e00\u4e2a\u8ba1\u6570\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"3@a")," \u53bb\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"a")," \u547d\u4ee43\u6b21\u3002\u4f60\u4e5f\u53ef\u4ee5\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"3@@")," \u53bb\u6267\u884c\u4e0a\u4e00\u6b21\u6267\u884c\u8fc7\u7684\u5b8f\u547d\u4ee43\u6b21\u3002"),(0,l.kt)("h2",{id:"\u5b89\u5168\u4fdd\u62a4"},"\u5b89\u5168\u4fdd\u62a4"),(0,l.kt)("p",null,"\u5728\u6267\u884c\u9047\u5230\u9519\u8bef\u7684\u65f6\u5019\uff0c\u5b8f\u547d\u4ee4\u4f1a\u81ea\u52a8\u505c\u6b62\u3002\u5047\u5982\u4f60\u6709\u5982\u4e0b\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a. chocolate donut\nb. mochi donut\nc. powdered sugar donut\nd. plain donut\n")),(0,l.kt)("p",null,"\u4f60\u60f3\u5c06\u6bcf\u4e00\u884c\u7684\u7b2c\u4e00\u4e2a\u8bcd\u53d8\u4e3a\u5927\u5199\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u7684\u5b8f\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"qa0W~jq\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u7684\u5206\u89e3\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"qa")," \u5f00\u59cb\u8bb0\u5f55\u4e00\u4e2a\u5b8f\u5b9a\u4e49\u5e76\u5b58\u50a8\u5728 a \u5bc4\u5b58\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u79fb\u52a8\u5230\u884c\u9996\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"W")," \u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5355\u8bcd\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~")," \u5c06\u5149\u6807\u9009\u4e2d\u7684\u5355\u8bcd\u53d8\u4e3a\u5927\u5199\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"j")," \u79fb\u52a8\u5230\u4e0b\u4e00\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"q")," \u505c\u6b62\u8bb0\u5f55\u3002")),(0,l.kt)("p",null,"\u6211\u559c\u6b22\u5bf9\u5b8f\u547d\u4ee4\u8fdb\u884c\u8d85\u8fc7\u6240\u9700\u6b21\u6570\u7684\u8c03\u7528\uff0c\u6240\u4ee5\u6211\u901a\u5e38\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"99@a")," \u547d\u4ee4\u53bb\u6267\u884c\u8be5\u5b8f\u547d\u4ee499\u6b21\u3002\u4f7f\u7528\u8be5\u547d\u4ee4\uff0cVim\u5e76\u4e0d\u4f1a\u771f\u6b63\u6267\u884c\u8fd9\u4e2a\u5b8f99\u6b21\uff0c\u5f53 Vim \u5230\u8fbe\u6700\u540e\u4e00\u884c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"j"),"\u65f6\uff0c\u5b83\u4f1a\u53d1\u73b0\u65e0\u6cd5\u518d\u5411\u4e0b\u4e86\uff0c\u7136\u540e\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u5e76\u7ec8\u6b62\u5b8f\u547d\u4ee4\u7684\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u9047\u5230\u9519\u8bef\u81ea\u52a8\u505c\u6b62\u8fd0\u884c\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u7279\u6027\u3002\u5426\u5219\uff0cVim \u4f1a\u7ee7\u7eed\u6267\u884c\u8be5\u547d\u4ee499\u6b21\uff0c\u5c3d\u7ba1\u5b83\u5df2\u7ecf\u6267\u884c\u5230\u6700\u540e\u4e00\u884c\u4e86\u3002"),(0,l.kt)("h2",{id:"\u547d\u4ee4\u884c\u6267\u884c\u5b8f"},"\u547d\u4ee4\u884c\u6267\u884c\u5b8f"),(0,l.kt)("p",null,"\u5728\u6b63\u5e38\u6a21\u5f0f\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"@a")," \u5e76\u4e0d\u662f\u5b8f\u547d\u4ee4\u8c03\u7528\u7684\u552f\u4e00\u65b9\u5f0f\u3002\u4f60\u4e5f\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1anormal @a")," \u3002",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1anormal")," \u4f1a\u5c06\u4efb\u4f55\u7528\u6237\u6dfb\u52a0\u7684\u53c2\u6570\u4f5c\u4e3a\u547d\u4ee4\u53bb\u6267\u884c\u3002\u4f8b\u5982\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"@a"),"\uff0c\u548c\u5728 normal mode \u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"@a")," \u7684\u6548\u679c\u662f\u4e00\u6837\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},":normal")," \u547d\u4ee4\u4e5f\u652f\u6301\u8303\u56f4\u53c2\u6570\u3002\u4f60\u53ef\u4ee5\u5728\u9009\u62e9\u7684\u8303\u56f4\u5185\u53bb\u6267\u884c\u5b8f\u547d\u4ee4\u3002\u5982\u679c\u4f60\u53ea\u60f3\u5728\u7b2c\u4e8c\u884c\u548c\u7b2c\u4e09\u884c\u6267\u884c\u5b8f\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"\uff1a2,3 normal @a"),"\u3002"),(0,l.kt)("h2",{id:"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u6267\u884c\u5b8f\u547d\u4ee4"},"\u5728\u591a\u4e2a\u6587\u4ef6\u4e2d\u6267\u884c\u5b8f\u547d\u4ee4"),(0,l.kt)("p",null,"\u5047\u5982\u4f60\u6709\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},".txt")," \u6587\u4ef6\uff0c\u6bcf\u4e00\u4e2a\u6587\u4ef6\u5305\u542b\u4e0d\u540c\u7684\u5185\u5bb9\u3002\u5e76\u4e14\u4f60\u53ea\u60f3\u5c06\u5305\u542b\u6709 \u201cdonut\u201d \u5355\u8bcd\u7684\u884c\u7684\u7b2c\u4e00\u4e2a\u5355\u8bcd\u53d8\u4e3a\u5927\u5199\u3002\u5047\u8bbe\uff0c\u60a8\u7684\u5bc4\u5b58\u5668a\u4e2d\u5b58\u50a8\u7684\u5185\u5bb9\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"0W~j"),"(\u5c31\u662f\u524d\u9762\u4f8b\u5b50\u4e2d\u7528\u5230\u7684\u5b8f\u547d\u4ee4),\u90a3\u4e48\uff0c\u60a8\u8be5\u5982\u4f55\u5feb\u901f\u5b8c\u6210\u8fd9\u4e2a\u64cd\u4f5c\u5462\uff1f"),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"## savory.txt\na. cheddar jalapeno donut\nb. mac n cheese donut\nc. fried dumpling\n")),(0,l.kt)("p",null,"\u7b2c\u4e8c\u4e2a\u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"## sweet.txt\na. chocolate donut\nb. chocolate pancake\nc. powdered sugar donut\n")),(0,l.kt)("p",null,"\u7b2c\u4e09\u4e2a\u6587\u4ef6:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"## plain.txt\na. wheat bread\nb. plain donut\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u8fd9\u4e48\u505a:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":args *.txt")," \u67e5\u627e\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},".txt")," \u6587\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":argdo g/donut/normal @a")," \u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},":args")," \u4e2d\u5305\u542b\u7684\u6bcf\u4e00\u4e2a\u6587\u4ef6\u91cc\u6267\u884c\u4e00\u4e2a\u5168\u5c40\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"li"},"g/donut/normal @a"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},":argdo update")," \u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},":args")," \u4e2d\u5305\u542b\u7684\u6bcf\u4e00\u4e2a\u6587\u4ef6\u91cc\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"update")," \u547d\u4ee4,\u4fdd\u5b58\u4fee\u6539\u540e\u7684\u5185\u5bb9\u3002")),(0,l.kt)("p",null,"\u4e5f\u8bb8\u4f60\u5bf9\u5168\u5c40\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},":g/donut/normal @a")," \u4e0d\u662f\u5f88\u4e86\u89e3\uff0c\u8be5\u547d\u4ee4\u4f1a\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"/donut/"),"\u641c\u7d22\u547d\u4ee4\uff0c\u7136\u540e\u5728\u6240\u6709\u5339\u914d\u7684\u884c\u4e2d\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"normal @a")," \u547d\u4ee4\u3002\u6211\u4f1a\u5728\u540e\u9762\u7684\u7ae0\u8282\u4e2d\u4ecb\u7ecd\u5168\u5c40\u547d\u4ee4\u3002"),(0,l.kt)("h2",{id:"\u9012\u5f52\u6267\u884c\u5b8f\u547d\u4ee4"},"\u9012\u5f52\u6267\u884c\u5b8f\u547d\u4ee4"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u9012\u5f52\u5730\u6267\u884c\u5b8f\u547d\u4ee4\uff0c\u901a\u8fc7\u5728\u8bb0\u5f55\u5b8f\u547d\u4ee4\u65f6\u8c03\u7528\u76f8\u540c\u7684\u5b8f\u5bc4\u5b58\u5668\u6765\u5b9e\u73b0\u3002\u5047\u5982\u4f60\u6709\u5982\u4e0b\u6587\u672c\uff0c\u4f60\u5e0c\u671b\u6539\u53d8\u7b2c\u4e00\u4e2a\u5355\u8bcd\u7684\u5927\u5c0f\u5199\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a. chocolate donut\nb. mochi donut\nc. powdered sugar donut\nd. plain donut\n")),(0,l.kt)("p",null,"\u5982\u4e0b\u547d\u4ee4\u4f1a\u9012\u5f52\u5730\u6267\u884c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"qaqqa0W~j@aq\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u547d\u4ee4\u7684\u5206\u89e3\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"qaq")," \u8bb0\u5f55\u4e00\u4e2a\u7a7a\u767d\u7684\u5b8f\u547d\u4ee4\u5230 \u201ca\u201d \u3002\u628a\u5b8f\u547d\u4ee4\u8bb0\u5f55\u5728\u4e00\u4e2a\u7a7a\u767d\u7684\u547d\u4ee4\u4e2d\u662f\u5fc5\u987b\u7684\uff0c\u56e0\u4e3a\u4f60\u4e0d\u4f1a\u60f3\u5c06\u8be5\u547d\u4ee4\u5305\u542b\u6709\u4efb\u4f55\u5176\u4ed6\u7684\u4e1c\u897f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"qa")," \u5f00\u59cb\u5f55\u5165\u5b8f\u547d\u4ee4\u5230\u5bc4\u5b58\u5668 \u201ca\u201d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u79fb\u52a8\u5230\u884c\u9996\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"W")," \u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5355\u8bcd\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"~")," \u6539\u53d8\u5149\u6807\u9009\u4e2d\u7684\u5355\u8bcd\u7684\u5927\u5c0f\u5199\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"j")," \u79fb\u52a8\u5230\u4e0b\u4e00\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@a")," \u6267\u884c\u5b8f\u547d\u4ee4 \u201ca\u201d\u3002\u5f53\u4f60\u8bb0\u5f55\u8be5\u5b8f\u547d\u4ee4\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"@a")," \u5e94\u8be5\u662f\u7a7a\u767d\u7684\uff0c\u56e0\u4e3a\u4f60\u521a\u521a\u8c03\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"qaq"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"q")," \u505c\u6b62\u8bb0\u5f55\u3002")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u8ba9\u6211\u4eec\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"@a")," \u6765\u67e5\u770b Vim \u5982\u4f55\u9012\u5f52\u7684\u8c03\u7528\u8be5\u5b8f\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u5b8f\u547d\u4ee4\u662f\u5982\u4f55\u77e5\u9053\u4f55\u65f6\u505c\u6b62\u5462\uff1f\u5f53\u5b8f\u6267\u884c\u5230\u6700\u540e\u4e00\u884c\u5e76\u5c1d\u8bd5 ",(0,l.kt)("inlineCode",{parentName:"p"},"j")," \u547d\u4ee4\u65f6\uff0c\u53d1\u73b0\u5df2\u7ecf\u6ca1\u6709\u4e0b\u4e00\u884c\u4e86\uff0c\u5c31\u4f1a\u505c\u6b62\u6267\u884c\u3002"),(0,l.kt)("h2",{id:"\u589e\u6dfb\u4e00\u4e2a\u5df2\u77e5\u5b8f"},"\u589e\u6dfb\u4e00\u4e2a\u5df2\u77e5\u5b8f"),(0,l.kt)("p",null,'\u5982\u679c\u4f60\u60f3\u5728\u4e00\u4e2a\u5df2\u7ecf\u5f55\u5236\u597d\u7684\u5b8f\u5b9a\u4e49\u4e2d\u6dfb\u52a0\u66f4\u591a\u7684\u64cd\u4f5c\uff0c\u4e0e\u5176\u91cd\u65b0\u5f55\u5165\u5b83\uff0c\u4e0d\u5982\u9009\u62e9\u4fee\u6539\u5b83\u3002\u5728\u5bc4\u5b58\u5668\u4e00\u7ae0\u4e2d\uff0c\u4f60\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528\u4e00\u4e2a\u5df2\u77e5\u5bc4\u5b58\u5668\u7684\u5927\u5199\u5b57\u6bcd\u6765\u60f3\u8be5\u5bc4\u5b58\u5668\u4e2d\u6dfb\u52a0\u5185\u5bb9\u3002\u540c\u6837\u7684\uff0c\u4e3a\u4e86\u5728\u5bc4\u5b58\u5668"a"\u4e2d\u6dfb\u52a0\u66f4\u591a\u7684\u64cd\u4f5c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5927\u5199\u5b57\u6bcd"A"\u3002'),(0,l.kt)("p",null,"\u5047\u8bbe\u5bc4\u5b58\u5668a\u4e2d\u5df2\u7ecf\u5b58\u50a8\u4e86\u8fd9\u4e2a\u5b8f\u547d\u4ee4:",(0,l.kt)("inlineCode",{parentName:"p"},"qa0W~q"),"(\u8be5\u5b8f\u547d\u4ee4\u5c06\u67d0\u884c\u7684\u7b2c\u4e8c\u4e2a\u8bcd\u7ec4\u7684\u5934\u4e00\u4e2a\u5b57\u6bcd\u6267\u884c\u6539\u53d8\u5927\u5c0f\u5199\u64cd\u4f5c)\uff0c\u5047\u8bbe\u4f60\u60f3\u5728\u8fd9\u4e2a\u57fa\u7840\u4e0a\u6dfb\u52a0\u4e00\u4e9b\u64cd\u4f5c\u547d\u4ee4\u5e8f\u5217\uff0c\u4f7f\u5f97\u6bcf\u4e00\u884c\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u53e5\u70b9\uff0c\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"qAA.<esc>q\n")),(0,l.kt)("p",null,"\u5206\u89e3\u5982\u4e0b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"qA")," \u5f00\u59cb\u5728\u5bc4\u5b58\u5668 \u201cA\u201d \u4e2d\u8bb0\u5f55\u5b8f\u547d\u4ee4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"A.<esc>")," \u5728\u884c\u7684\u672b\u5c3e\u52a0\u4e0a\u4e00\u4e2a\u53e5\u70b9(\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"A"),"\u662f\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\uff0c\u4e0d\u8981\u548c\u5b8fA\u641e\u6df7\u6dc6)\uff0c\u7136\u540e\u9000\u51fa\u63d2\u5165\u6a21\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"q")," \u505c\u6b62\u8bb0\u5f55\u5b8f\u547d\u4ee4\u3002")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u5f53\u4f60\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"@a"),"\u65f6\uff0c\u5b83\u4e0d\u4ec5\u5c06\u7b2c\u4e8c\u4e2a\u8bcd\u7ec4\u7684\u9996\u5b57\u6bcd\u8f6c\u53d8\u5927\u5c0f\u5199\uff0c\u540c\u65f6\u8fd8\u5728\u884c\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u53e5\u70b9\u3002"),(0,l.kt)("h2",{id:"\u4fee\u6539\u4e00\u4e2a\u5df2\u77e5\u5b8f"},"\u4fee\u6539\u4e00\u4e2a\u5df2\u77e5\u5b8f"),(0,l.kt)("p",null,"\u5982\u679c\u60f3\u5728\u4e00\u4e2a\u5b8f\u7684\u4e2d\u95f4\u6dfb\u52a0\u65b0\u7684\u64cd\u4f5c\u8be5\u600e\u4e48\u529e\u5462\uff1f"),(0,l.kt)("p",null,"\u5047\u8bbe\u60a8\u5728\u5bc4\u5b58\u5668a\u4e2d\u5df2\u7ecf\u5b58\u6709\u4e00\u4e2a\u5b8f\u547d\u4ee4",(0,l.kt)("inlineCode",{parentName:"p"},"0W~A.<Esc>"),'\uff0c\u5373\u6539\u53d8\u9996\u5b57\u6bcd\u5927\u5c0f\u5199\uff0c\u5e76\u5728\u884c\u5c3e\u6dfb\u52a0\u53e5\u53f7\u3002\u5982\u679c\u60a8\u60f3\u5728\u6539\u53d8\u9996\u5b57\u6bcd\u5927\u5c0f\u5199\u548c\u884c\u5c3e\u6dfb\u52a0\u53e5\u53f7\u4e4b\u95f4\uff0c\u5728\u5355\u8bcd"dount"\u524d\u9762\u52a0\u5165"deep fried"\u3002\uff08\u56e0\u4e3a\u552f\u4e00\u6bd4\u751c\u751c\u5708\u597d\u7684\u4e1c\u897f\u5c31\u662f\u70b8\u751c\u751c\u5708\uff09\u3002'),(0,l.kt)("p",null,"\u6211\u4f1a\u91cd\u65b0\u4f7f\u7528\u4e0a\u4e00\u8282\u4f7f\u7528\u8fc7\u7684\u6587\u672c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"a. chocolate donut\nb. mochi donut\nc. powdered sugar donut\nd. plain donut\n")),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},":put a")," \u8c03\u7528\u4e00\u4e2a\u5df2\u7ecf\u5f55\u5236\u597d\u7684\u5b8f\u547d\u4ee4\uff08\u5047\u8bbe\u4f60\u4e0a\u4e00\u8282\u4e2d\u4fdd\u5b58\u5728\u5bc4\u5b58\u5668a\u4e2d\u7684\u5b8f\u547d\u4ee4\u8fd8\u5728\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0W~A.^[\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"^[")," \u662f\u4ec0\u4e48\u610f\u601d\u5462\uff1f\u4e0d\u8bb0\u5f97\u4e86\u5417\uff0c\u4f60\u4e4b\u524d\u6267\u884c\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"0W~A.<esc>"),"\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"^[")," \u662f Vim \u7684 ",(0,l.kt)("strong",{parentName:"p"},"\u5185\u90e8\u6307\u4ee4"),"\uff0c\u8868\u793a ",(0,l.kt)("inlineCode",{parentName:"p"},"<esc>"),"\u3002\u901a\u8fc7\u8fd9\u4e9b\u6307\u5b9a\u7684\u7279\u6b8a\u952e\u503c\u7ec4\u5408\uff0cVim \u77e5\u9053\u8fd9\u4e9b\u662f\u5185\u90e8\u4ee3\u7801\u7684\u4e00\u4e9b\u66ff\u4ee3\u3002\u4e00\u4e9b\u5e38\u89c1\u7684\u5185\u90e8\u6307\u4ee4\u5177\u6709\u7c7b\u4f3c\u7684\u66ff\u4ee3\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"<esc>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<backspace>"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"<enter>"),"\u3002\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7684\u952e\u503c\u7ec4\u5408\uff0c\u4f46\u8fd9\u4e0d\u662f\u672c\u7ae0\u7684\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u56de\u5230\u5b8f\u547d\u4ee4\uff0c\u5728\u6539\u53d8\u5927\u5c0f\u5199\u4e4b\u540e\u7684\u952e\u540e\u9762\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"~"),"\uff09\uff0c\u8ba9\u6211\u4eec\u6dfb\u52a0\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"$"),"\uff09\u6765\u79fb\u52a8\u5149\u6807\u5230\u884c\u672b\uff0c\u56de\u9000\u4e00\u4e2a\u5355\u8bcd\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"b"),"\uff09\uff0c\u8fdb\u5165\u63d2\u5165\u6a21\u5f0f\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"i"),'\uff09\uff0c\u8f93\u5165"deep fried " \uff08\u522b\u5ffd\u7565"fried "\u540e\u9762\u7684\u8fd9\u4e2a\u7a7a\u683c\uff09\uff0c\u4e4b\u540e\u9000\u51fa\u63d2\u5165\u6a21\u5f0f\uff08',(0,l.kt)("inlineCode",{parentName:"p"},"<esc>"),"\uff09\u3002"),(0,l.kt)("p",null,"\u5b8c\u6574\u7684\u547d\u4ee4\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0W~$bideep fried <esc>A.^[\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e2a\u95ee\u9898\uff0cVim \u4e0d\u80fd\u7406\u89e3 ",(0,l.kt)("inlineCode",{parentName:"p"},"<esc>"),"\u3002\u60a8\u4e0d\u80fd\u4f9d\u846b\u82a6\u753b\u74e2\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"<Esc>"),"\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"<Esc>"),"\u5199\u6210\u5185\u90e8\u4ee3\u7801\u7684\u5f62\u5f0f\u3002\u5728\u63d2\u5165\u6a21\u5f0f\uff0c\u5728\u6309\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"<esc>"),"\u540e\u6309\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-v"),"\uff0cVim \u4f1a\u6253\u5370 ",(0,l.kt)("inlineCode",{parentName:"p"},"^["),"\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-v")," \u662f\u4e00\u4e2a\u63d2\u5165\u6a21\u5f0f\u7684\u64cd\u4f5c\u7b26\uff0c\u53ef\u4ee5\u9010\u5b57\u5730\u63d2\u5165\u4e00\u4e2a\u975e\u6570\u5b57\u5b57\u7b26\u3002\u4f60\u7684\u5b8f\u547d\u4ee4\u5e94\u8be5\u5982\u4e0b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0W~$bideep fried ^[A.^[\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u5728\u5bc4\u5b58\u5668\u201ca\u201d\u4e2d\u6dfb\u52a0\u4fee\u6539\u540e\u7684\u6307\u4ee4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u4e00\u4e2a\u5df2\u77e5\u547d\u540d\u5bc4\u5b58\u5668\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u6761\u76ee\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u3002\u5728\u4e00\u884c\u7684\u884c\u9996\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},'"ay$'),'\uff0c\u4f7f\u7528\u5bc4\u5b58\u5668 "a"\u6765\u5b58\u50a8\u590d\u5236\u7684\u6587\u672c\u3002'),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u4f46\u4f60\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"@a"),' \u65f6\uff0c\u4f60\u7684\u5b8f\u547d\u4ee4\u4f1a\u81ea\u52a8\u6539\u53d8\u7b2c\u4e00\u4e2a\u5355\u8bcd\u7684\u5927\u5c0f\u5199\uff0c\u5728"donut"\u524d\u9762\u6dfb\u52a0"deep fried "\uff0c\u4e4b\u540e\u5728\u884c\u672b\u6dfb\u52a0\u201c.\u201d\u3002'),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a\u4fee\u6539\u5b8f\u547d\u4ee4\u7684\u65b9\u5f0f\u662f\u901a\u8fc7\u547d\u4ee4\u884c\u8868\u8fbe\u5f0f\u3002\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},':let @a="'),"\uff0c\u4e4b\u540e\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-r Ctrl-r a"),"\uff0c\u8fd9\u4f1a\u5c06\u5bc4\u5b58\u5668\u201ca\u201d\u7684\u547d\u4ee4\u9010\u5b57\u6253\u5370\u51fa\u6765\u3002\u6700\u540e\uff0c\u522b\u5fd8\u8bb0\u5728\u95ed\u5408\u7684\u5f15\u53f7\uff08",(0,l.kt)("inlineCode",{parentName:"p"},'"'),"\uff09\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5728\u7f16\u8f91\u547d\u4ee4\u884c\u8868\u8fbe\u5f0f\u65f6\u63d2\u5165\u5185\u90e8\u7801\u6765\u4f7f\u7528\u7279\u5b9a\u7684\u5b57\u7b26\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl-v"),"\u3002"),(0,l.kt)("h2",{id:"\u62f7\u8d1d\u5b8f"},"\u62f7\u8d1d\u5b8f"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5f88\u8f7b\u677e\u7684\u5c06\u4e00\u4e2a\u5bc4\u5b58\u5668\u7684\u5185\u5bb9\u62f7\u8d1d\u5230\u53e6\u4e00\u4e2a\u5bc4\u5b58\u5668\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},":let @z = @a"),' \u5c06\u5bc4\u5b58\u5668"a" \u4e2d\u7684\u547d\u4ee4\u62f7\u8d1d\u5230\u5bc4\u5b58\u5668"z"\u3002 ',(0,l.kt)("inlineCode",{parentName:"p"},"@a")," \u8868\u793a\u5bc4\u5b58\u5668\u201ca\u201d\u4e2d\u5b58\u50a8\u7684\u5185\u5bb9\uff0c\u4f60\u73b0\u5728\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"@z"),"\uff0c\u5c06\u4f1a\u6267\u884c\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@a")," \u4e00\u6837\u7684\u6307\u4ee4\u3002"),(0,l.kt)("p",null,"\u6211\u53d1\u73b0\u5bf9\u5e38\u7528\u7684\u5b8f\u547d\u4ee4\u521b\u5efa\u5197\u4f59\u662f\u5f88\u6709\u7528\u7684\u3002\u5728\u6211\u7684\u5de5\u4f5c\u6d41\u7a0b\u4e2d\uff0c\u6211\u901a\u5e38\u5728\u524d7\u4e2a\u5b57\u6bcd\uff08a-g\uff09\u4e0a\u521b\u5efa\u5b8f\u547d\u4ee4\uff0c\u5e76\u4e14\u6211\u7ecf\u5e38\u4e0d\u52a0\u601d\u7d22\u5730\u628a\u5b83\u4eec\u66ff\u6362\u4e86\u3002\u56e0\u6b64\uff0c\u5982\u679c\u6211\u5c06\u5f88\u6709\u7528\u7684\u5b8f\u547d\u4ee4\u79fb\u52a8\u5230\u4e86\u5b57\u6bcd\u8868\u7684\u672b\u5c3e\uff0c\u5c31\u4e0d\u7528\u62c5\u5fc3\u6211\u5728\u65e0\u610f\u95f4\u628a\u4ed6\u4eec\u66ff\u6362\u4e86\u3002"),(0,l.kt)("h2",{id:"\u4e32\u884c\u5b8f\u548c\u5e76\u884c\u5b8f"},"\u4e32\u884c\u5b8f\u548c\u5e76\u884c\u5b8f"),(0,l.kt)("p",null,"Vim \u53ef\u4ee5\u8fde\u7eed\u548c\u540c\u65f6\u8fd0\u884c\u5b8f\u547d\u4ee4\uff0c\u5047\u8bbe\u4f60\u6709\u5982\u4e0b\u7684\u6587\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'import { FUNC1 } from "library1";\nimport { FUNC2 } from "library2";\nimport { FUNC3 } from "library3";\nimport { FUNC4 } from "library4";\nimport { FUNC5 } from "library5";\n')),(0,l.kt)("p",null,"\u5047\u5982\u4f60\u5e0c\u671b\u628a\u6240\u6709\u7684 \u201cFUNC\u201d \u5b57\u7b26\u53d8\u4e3a\u5c0f\u5199\uff0c\u90a3\u4e48\u5b8f\u547d\u4ee4\u4e3a\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"qa0f{gui{jq\n")),(0,l.kt)("p",null,"\u5206\u89e3\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"qa")," \u5f00\u59cb\u8bb0\u5f55\u5b8f\u547d\u4ee4\u5230 \u201ca\u201d \u5bc4\u5b58\u5668\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),"\u79fb\u52a8\u5230\u7b2c\u4e00\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"f{")," \u67e5\u627e\u7b2c\u4e00\u4e2a \u201c{\u201d \u5b57\u7b26\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gui{")," \u628a\u62ec\u53f7\u5185\u7684\u6587\u672c\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"i{"),"\uff09\u53d8\u4e3a\u5c0f\u5199\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"gu"),"\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"j")," \u79fb\u52a8\u5230\u4e0b\u4e00\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"q")," \u505c\u6b62\u8bb0\u5f55\u5b8f\u547d\u4ee4\u3002")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"99@a")," \u5728\u5269\u4f59\u7684\u884c\u4fee\u6539\u3002\u7136\u800c\uff0c\u5047\u5982\u5728\u4f60\u7684\u6587\u672c\u91cc\u6709\u5982\u4e0b import \u8bed\u53e5\u4f1a\u600e\u4e48\u6837\u5462\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'import { FUNC1 } from "library1";\nimport { FUNC2 } from "library2";\nimport { FUNC3 } from "library3";\nimport foo from "bar";\nimport { FUNC4 } from "library4";\nimport { FUNC5 } from "library5";\n')),(0,l.kt)("p",null,"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"99@a"),"\uff0c\u4f1a\u53ea\u5728\u524d\u4e09\u884c\u6267\u884c\u3002\u800c\u6700\u540e\u4e24\u884c\u4e0d\u4f1a\u88ab\u6267\u884c\uff0c\u56e0\u4e3a\u5728\u6267\u884c\u7b2c\u56db\u884c\uff08\u5305\u542b\u201cfoo\u201d\uff09\u65f6",(0,l.kt)("inlineCode",{parentName:"p"},"f{"),"\u547d\u4ee4\u4f1a\u9047\u5230\u9519\u8bef\u800c\u505c\u6b62\uff0c\u5f53\u5b8f\u4e32\u884c\u6267\u884c\u65f6\u5c31\u4f1a\u53d1\u751f\u8fd9\u6837\u7684\u60c5\u51b5\u3002\u5f53\u7136\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u79fb\u52a8\u5230\u5305\u542b\uff08\u201cFUNC4\u201d\uff09\u7684\u4e00\u884c\uff0c\u5e76\u91cd\u65b0\u8c03\u7528\u8be5\u547d\u4ee4\u3002\u4f46\u662f\u5047\u5982\u4f60\u5e0c\u671b\u4ec5\u8c03\u7528\u4e00\u6b21\u547d\u4ee4\u5c31\u5b8c\u6210\u6240\u6709\u64cd\u4f5c\u5462\uff1f"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5e76\u884c\u5730\u6267\u884c\u5b8f\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u5982\u672c\u7ae0\u524d\u9762\u6240\u8bf4\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},":normal")," \u53bb\u6267\u884c\u5b8f\u547d\u4ee4\uff0c\uff08\u4f8b\u5982\uff1a ",(0,l.kt)("inlineCode",{parentName:"p"},":3,5 normal @a")," \u4f1a\u5728 3-5\u884c\u6267\u884c a \u5bc4\u5b58\u5668\u4e2d\u7684\u5b8f\u547d\u4ee4\uff09\u3002\u5982\u679c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},":1,$ normal @a"),"\uff0c\u4f1a\u5728\u6240\u6709\u9664\u4e86\u5305\u542b\u6709 \u201cfoo\u201d \u7684\u884c\u6267\u884c\uff0c\u800c\u4e14\u5b83\u4e0d\u4f1a\u51fa\u9519\u3002"),(0,l.kt)("p",null,"\u5c3d\u7ba1\u672c\u8d28\u4e0a\u6765\u8bf4\uff0cVim \u5e76\u4e0d\u662f\u5728\u5e76\u884c\u5730\u6267\u884c\u5b8f\u547d\u4ee4\uff0c\u4f46\u8868\u9762\u4e0a\u770b\uff0c\u5b83\u662f\u5e76\u884c\u8fd0\u884c\u7684\u3002 Vim \u4f1a\u72ec\u7acb\u5730\u5728\u4ece\u7b2c\u4e00\u884c\u5f00\u59cb\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"1,$"),"\uff09\u6bcf\u4e00\u884c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"@a")," \u3002\u7531\u4e8e Vim \u72ec\u7acb\u5730\u5728\u6bcf\u4e00\u884c\u6267\u884c\u547d\u4ee4\uff0c\u6bcf\u4e00\u884c\u90fd\u4e0d\u4f1a\u77e5\u9053\u6709\u4e00\u884c\uff08\u5305\u542b\u201cfoo\u201d\uff09\u4f1a\u9047\u5230\u6267\u884c\u9519\u8bef\u3002"),(0,l.kt)("h2",{id:"\u806a\u660e\u5730\u5b66\u4e60\u5b8f\u547d\u4ee4"},"\u806a\u660e\u5730\u5b66\u4e60\u5b8f\u547d\u4ee4"),(0,l.kt)("p",null,"\u4f60\u5728\u7f16\u8f91\u5668\u91cc\u505a\u7684\u5f88\u591a\u4e8b\u90fd\u662f\u91cd\u590d\u7684\u3002\u4e3a\u4e86\u66f4\u597d\u5730\u7f16\u8f91\u6587\u4ef6\uff0c\u8bf7\u4e50\u4e8e\u53d1\u73b0\u8fd9\u4e9b\u91cd\u590d\u6027\u7684\u884c\u4e3a\u3002\u6267\u884c\u5b8f\u547d\u4ee4\u6216\u8005\u70b9\u547d\u4ee4\uff0c\u800c\u4e0d\u662f\u505a\u76f8\u540c\u7684\u52a8\u4f5c\u4e24\u6b21\u3002\u51e0\u4e4e\u6240\u6709\u4f60\u5728 Vim \u6240\u4f5c\u7684\u4e8b\u60c5\u90fd\u53ef\u4ee5\u53d8\u4e3a\u5b8f\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u521a\u5f00\u59cb\u7684\u65f6\u5019\uff0c\u6211\u53d1\u73b0\u5b8f\u547d\u4ee4\u65f6\u5f88\u68d8\u624b\u7684\uff0c\u4f46\u662f\u8bf7\u4e0d\u8981\u653e\u5f03\u3002\u6709\u4e86\u8db3\u591f\u7684\u7ec3\u4e60\uff0c\u4f60\u53ef\u4ee5\u627e\u5230\u8fd9\u79cd\u6587\u672c\u81ea\u52a8\u7f16\u8f91\u7684\u5feb\u4e50\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u67d0\u79cd\u52a9\u8bb0\u7b26\u53bb\u5e2e\u52a9\u4f60\u8bb0\u4f4f\u5b8f\u547d\u4ee4\u662f\u5f88\u6709\u5e2e\u52a9\u7684\u3002\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u521b\u5efa\u51fd\u6570\uff08function\uff09\u7684\u5b8f\u547d\u4ee4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 \u201cf\u201d \u5bc4\u5b58\u5668\u53bb\u5f55\u5236\u5b83(",(0,l.kt)("inlineCode",{parentName:"p"},"qf"),")\u3002\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u5b8f\u547d\u4ee4\u53bb\u64cd\u4f5c\u6570\u5b57\uff0c\u90a3\u4e48\u4f7f\u7528\u5bc4\u5b58\u5668 \u201cn\u201d \u53bb\u8bb0\u4f4f\u5b83\u662f\u5f88\u597d\u7684(",(0,l.kt)("inlineCode",{parentName:"p"},"qn"),")\u3002\u7528\u4f60\u60f3\u6267\u884c\u7684\u64cd\u4f5c\u65f6\u60f3\u8d77\u7684\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7ed9\u4f60\u7684\u5b8f\u547d\u4ee4\u547d\u540d\u3002\u53e6\u5916\uff0c\u6211\u53d1\u73b0 \u201cq\u201d \u662f\u4e00\u4e2a\u5f88\u597d\u7684\u5b8f\u547d\u4ee4\u9ed8\u8ba4\u5bc4\u5b58\u5668\uff0c\u56e0\u4e3a\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"qq")," \u53bb\u8c03\u7528\u5b8f\u547d\u4ee4\u662f\u5f88\u5feb\u901f\u800c\u7b80\u5355\u7684\u3002\u6700\u540e\uff0c\u6211\u559c\u6b22\u6309\u7167\u5b57\u6bcd\u8868\u7684\u987a\u5e8f\u53bb\u6dfb\u52a0\u6211\u7684\u5b8f\u547d\u4ee4\uff0c\u4f8b\u5982\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"qa")," \u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"qb")," \u518d\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"qc"),"\u3002"),(0,l.kt)("p",null,"\u53bb\u5bfb\u627e\u6700\u9002\u5408\u4f60\u7684\u65b9\u6cd5\u5427\u3002"))}d.isMDXComponent=!0}}]);