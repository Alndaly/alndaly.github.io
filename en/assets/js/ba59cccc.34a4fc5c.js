"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1477],{66476:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));i(16758);const l={title:"opencv\u57fa\u7840\u65b9\u6cd5"},r=void 0,p={unversionedId:"artificial-intelligence/opencv/basic-method",id:"artificial-intelligence/opencv/basic-method",title:"opencv\u57fa\u7840\u65b9\u6cd5",description:"\u8bfb\u53d6\u56fe\u7247",source:"@site/docs/artificial-intelligence/opencv/basic-method.md",sourceDirName:"artificial-intelligence/opencv",slug:"/artificial-intelligence/opencv/basic-method",permalink:"/en/docs/artificial-intelligence/opencv/basic-method",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/basic-method.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"opencv\u57fa\u7840\u65b9\u6cd5"},sidebar:"ai",previous:{title:"\u756a\u5916\u7bc7\uff1a\u51f8\u5305\u53ca\u66f4\u591a\u8f6e\u5ed3\u7279\u5f81",permalink:"/en/docs/artificial-intelligence/opencv/basic/extra-11-convex-hull"},next:{title:"\u4e00\u952e\u90e8\u7f72",permalink:"/en/docs/artificial-intelligence/ai-paint/\u4e00\u952e\u90e8\u7f72"}},o={},c=[{value:"\u8bfb\u53d6\u56fe\u7247",id:"\u8bfb\u53d6\u56fe\u7247",level:2},{value:"\u989c\u8272\u7a7a\u95f4\u8f6c\u6362\u51fd\u6570",id:"\u989c\u8272\u7a7a\u95f4\u8f6c\u6362\u51fd\u6570",level:2},{value:"\u56fe\u50cf\u9608\u503c\u5904\u7406",id:"\u56fe\u50cf\u9608\u503c\u5904\u7406",level:2},{value:"\u586b\u5145\u64cd\u4f5c",id:"\u586b\u5145\u64cd\u4f5c",level:2}],d={toc:c};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bfb\u53d6\u56fe\u7247"},"\u8bfb\u53d6\u56fe\u7247"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"opencv\u8bfb\u53d6\u56fe\u7247\u540e\u9ed8\u8ba4\u56fe\u7247\u7684\u7f16\u7801\u662fBGR\u800c\u4e0d\u662fRGB\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"img = cv2.imread('test.png')\n")),(0,a.kt)("h2",{id:"\u989c\u8272\u7a7a\u95f4\u8f6c\u6362\u51fd\u6570"},"\u989c\u8272\u7a7a\u95f4\u8f6c\u6362\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BGR2GRAY"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"BGR"),"\u662f\u4e4b\u524d\u7684\u989c\u8272\u7a7a\u95f4\u5e8f\u5217\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"GRAY"),"\u662f\u8f6c\u53d8\u4e4b\u540e\u7684\u989c\u8272\u7a7a\u95f4\u5e8f\u5217\u3002"),(0,a.kt)("h2",{id:"\u56fe\u50cf\u9608\u503c\u5904\u7406"},"\u56fe\u50cf\u9608\u503c\u5904\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"img = cv2.imread('test.png')\nret, thresh = cv2.threshold(img, 127, 50, cv2.THRESH_BINARY)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"threshold"),"\u56db\u4e2a\u53c2\u6570\u4f9d\u6b21\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src"),": \u8868\u793a\u7684\u662f\u56fe\u7247\u6e90"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thresh"),": \u8868\u793a\u7684\u662f\u9608\u503c\uff08\u8d77\u59cb\u503c\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxval"),": \u8868\u793a\u7684\u662f\u6700\u5927\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type"),": \u8868\u793a\u7684\u662f\u8fd9\u91cc\u5212\u5206\u7684\u65f6\u5019\u4f7f\u7528\u7684\u662f\u4ec0\u4e48\u7c7b\u578b\u7684\u7b97\u6cd5\uff0c\u5e38\u7528\u503c\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"0"),"\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"cv2.THRESH_BINARY"),"\uff09")),(0,a.kt)("h2",{id:"\u586b\u5145\u64cd\u4f5c"},"\u586b\u5145\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"cv2.copyMakeBorder(src, top, bottom, left, right, borderType, value)\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"copyMakeBorder"),"\u51e0\u4e2a\u53c2\u6570\u4f9d\u6b21\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"src"),": \u6e90\u56fe\u50cf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"top"),": \u9876\u90e8\u65b9\u5411\u4e0a\u7684\u50cf\u7d20\u6570\u7684\u8fb9\u6846\u5bbd\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bottom"),": \u5e95\u90e8\u65b9\u5411\u4e0a\u7684\u50cf\u7d20\u6570\u7684\u8fb9\u6846\u5bbd\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"left"),": \u5de6\u4fa7\u50cf\u7d20\u7684\u8fb9\u754c\u5bbd\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"right"),": \u6cbf\u6b63\u786e\u65b9\u5411\u7684\u50cf\u7d20\u6570\u7684\u8fb9\u6846\u5bbd\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"borderType"),": \u8fb9\u754c\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value"),": \u4e00\u4e2a\u53ef\u9009\u53c2\u6570\u3002")))}m.isMDXComponent=!0}}]);