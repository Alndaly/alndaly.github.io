"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[280],{40863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=t(87462),l=(t(67294),t(3905));t(16758);const a={title:"\u95ed\u5305"},r=void 0,i={unversionedId:"frontend/closure",id:"frontend/closure",title:"\u95ed\u5305",description:"\u8bcd\u6cd5\u4f5c\u7528\u57df",source:"@site/docs/frontend/closure.md",sourceDirName:"frontend",slug:"/frontend/closure",permalink:"/docs/frontend/closure",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/closure.md",tags:[],version:"current",lastUpdatedAt:1693833086,formattedLastUpdatedAt:"2023\u5e749\u67084\u65e5",frontMatter:{title:"\u95ed\u5305"},sidebar:"frontEndSidebar",previous:{title:"async\u548cawait:\u8ba9\u5f02\u6b65\u7f16\u7a0b\u66f4\u7b80\u5355",permalink:"/docs/frontend/async\u548cawait"},next:{title:"\u524d\u7aef\u8c03\u8bd5",permalink:"/docs/frontend/debug"}},p={},u=[{value:"\u8bcd\u6cd5\u4f5c\u7528\u57df",id:"\u8bcd\u6cd5\u4f5c\u7528\u57df",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"\u89e3\u91ca",id:"\u89e3\u91ca",level:2}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bcd\u6cd5\u4f5c\u7528\u57df"},"\u8bcd\u6cd5\u4f5c\u7528\u57df"),(0,l.kt)("p",null,"\u5728JavaScript\u4e2d\uff0c\u6bcf\u4e2a\u8fd0\u884c\u7684\u51fd\u6570\uff0c\u4ee3\u7801\u5757 ",(0,l.kt)("inlineCode",{parentName:"p"},"{...}")," \u4ee5\u53ca\u6574\u4e2a\u811a\u672c\uff0c\u90fd\u6709\u4e00\u4e2a\u88ab\u79f0\u4e3a\u8bcd\u6cd5\u73af\u5883\uff08Lexical Environment\uff09\u7684\u5185\u90e8\uff08\u9690\u85cf\uff09\u7684\u5173\u8054\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u73af\u5883\u8bb0\u5f55\uff08Environment Record\uff09\uff0c\u4e00\u4e2a\u5b58\u50a8\u6240\u6709\u5c40\u90e8\u53d8\u91cf\u4f5c\u4e3a\u5176\u5c5e\u6027\uff08\u5305\u62ec\u4e00\u4e9b\u5176\u4ed6\u4fe1\u606f\uff0c\u4f8b\u5982this\u7684\u503c\uff09\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u5916\u90e8\u8bcd\u6cd5\u73af\u5883\u7684\u5f15\u7528\uff0c\u4e0e\u5916\u90e8\u4ee3\u7801\u76f8\u5173\u8054\u3002")),(0,l.kt)("p",null,"\u4e00\u4e2a\u201c\u53d8\u91cf\u201d\u53ea\u662f\u73af\u5883\u8bb0\u5f55\u8fd9\u4e2a\u7279\u6b8a\u7684\u5185\u90e8\u5bf9\u8c61\u7684\u4e00\u4e2a\u5c5e\u6027\u3002\u201c\u83b7\u53d6\u6216\u4fee\u6539\u53d8\u91cf\u201d\u610f\u5473\u7740\u201c\u83b7\u53d6\u6216\u4fee\u6539\u8bcd\u6cd5\u73af\u5883\u7684\u4e00\u4e2a\u5c5e\u6027\u201d\u3002"),(0,l.kt)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function makeCounter() {\n  let count = 0;\n\n  return function() {\n    return count++;\n  };\n}\n\nlet counter = makeCounter();\nconsole.log(counter()); //1\nconsole.log(counter()); //2\nconsole.log(counter()); //3\n\nlet counter1 = makeCounter();\nconsole.log(counter1()); //1\n\n")),(0,l.kt)("h2",{id:"\u89e3\u91ca"},"\u89e3\u91ca"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202211251729758.png",alt:"202211251729758"})),(0,l.kt)("p",null,"\u5728\u811a\u672c\u5f00\u59cb\u8fd0\u884c\u65f6\uff0c\u8bcd\u6cd5\u73af\u5883\u5df2\u7ecf\u9884\u5148\u586b\u5145\u4e86\u6240\u6709\u58f0\u660e\u7684\u53d8\u91cf\uff0c\u4f46\u662f\u666e\u901a\u7684\u53d8\u91cf\uff08\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"let"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"const"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"var"),"\u7b49\u58f0\u660e\u7684\uff09\u4f1a\u5904\u4e8e\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Uninitialized"),"\u7684\u72b6\u6001\u3002\u8fd9\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u5185\u90e8\u72b6\u6001\uff0c\u8fd9\u610f\u5473\u7740\u5f15\u64ce\u77e5\u9053\u53d8\u91cf\uff0c\u4f46\u662f\u5728\u7528let\u58f0\u660e\u524d\uff0c\u4e0d\u80fd\u5f15\u7528\u5b83\u3002\u51e0\u4e4e\u5c31\u50cf\u53d8\u91cf\u4e0d\u5b58\u5728\u4e00\u6837\u3002\u5728let\u7b49\u51fa\u73b0\u4e86\u4e4b\u540e\uff0c\u4ed6\u624d\u88ab\u8d4b\u4e88\u4e86\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\u7684\u72b6\u6001\uff0c\u6b64\u65f6\u4fbf\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002"),(0,l.kt)("p",null,"\u5728\u4e00\u4e2a\u51fd\u6570\u8fd0\u884c\u65f6\uff0c\u5728\u8c03\u7528\u521a\u5f00\u59cb\u65f6\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u7684\u8bcd\u6cd5\u73af\u5883"),"\u4ee5\u5b58\u50a8\u8fd9\u4e2a\u8c03\u7528\u7684\u5c40\u90e8\u53d8\u91cf\u548c\u53c2\u6570\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"counter.[[Environment]]")," \u6709\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"{count: 0}")," \u8bcd\u6cd5\u73af\u5883\u7684\u5f15\u7528\u3002\u8fd9\u5c31\u662f\u51fd\u6570\u8bb0\u4f4f\u5b83\u521b\u5efa\u4e8e\u4f55\u5904\u7684\u65b9\u5f0f\uff0c\u4e0e\u51fd\u6570\u88ab\u5728\u54ea\u513f\u8c03\u7528\u65e0\u5173\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"[[Environment]]")," \u5f15\u7528\u5728\u51fd\u6570\u521b\u5efa\u65f6\u88ab\u8bbe\u7f6e\u5e76",(0,l.kt)("strong",{parentName:"p"},"\u6c38\u4e45\u4fdd\u5b58"),"\u3002"),(0,l.kt)("p",null,"\u5f53\u540e\u7eed\u591a\u6b21\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"counter"),"\u65f6\uff0c\u7531\u4e8e\u5bf9\u5e94\u7684\u8bcd\u6cd5\u73af\u5883\u5bf9\u8c61\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"counter"),"\uff09\u4f9d\u7136\u53ef\u8fbe\uff0c\u6240\u4ee5\u5728\u5185\u5b58\u4e2d\u4f9d\u7136\u5b58\u5728\uff0c\u6545\u800ccount\u7684\u503c\u4f9d\u7136\u4fdd\u6301\u7740\u52a0\u4e00\u540e\u7684\u6570\u503c\u3002"),(0,l.kt)("p",null,"\u53ea\u6709\u5728counter\u88ab\u6e05\u7406\u4e86\u4e4b\u540e\uff0c\u5bf9\u5e94\u5185\u5b58\u624d\u4f1a\u88ab\u6e05\u7406\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"counter = null;\n")),(0,l.kt)("p",null,"\u5f53\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"counter()")," \u65f6\uff0c\u4f1a\u4e3a\u8be5\u8c03\u7528\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8bcd\u6cd5\u73af\u5883\uff0c\u5e76\u4e14\u5176\u5916\u90e8\u8bcd\u6cd5\u73af\u5883\u5f15\u7528\u83b7\u53d6\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"counter.[[Environment]]"),"\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"counter"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"couter1"),"\u6240\u62e5\u6709\u7684\u8bcd\u6cd5\u73af\u5883\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u6545\u800c\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"count"),"\u6709\u4e0d\u4e00\u6837\u7684\u5f15\u7528\u3002"))}c.isMDXComponent=!0}}]);