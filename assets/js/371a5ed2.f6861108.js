"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4937],{33777:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var s=t(87462),n=(t(67294),t(3905));t(16758);const p={},m="07: \u56fe\u50cf\u51e0\u4f55\u53d8\u6362",l={unversionedId:"artificial-intelligence/opencv/start/image-geometric-transformation",id:"artificial-intelligence/opencv/start/image-geometric-transformation",title:"07: \u56fe\u50cf\u51e0\u4f55\u53d8\u6362",description:"\u5b66\u4e60\u5982\u4f55\u65cb\u8f6c\u3001\u5e73\u79fb\u3001\u7f29\u653e\u548c\u7ffb\u8f6c\u56fe\u7247\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/start/07-image-geometric-transformation.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/image-geometric-transformation",permalink:"/docs/artificial-intelligence/opencv/start/image-geometric-transformation",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/07-image-geometric-transformation.md",tags:[],version:"current",lastUpdatedAt:1693833086,formattedLastUpdatedAt:"2023\u5e749\u67084\u65e5",sidebarPosition:7,frontMatter:{},sidebar:"ai",previous:{title:"06: \u9608\u503c\u5206\u5272",permalink:"/docs/artificial-intelligence/opencv/start/image-thresholding"},next:{title:"08: \u7ed8\u56fe\u529f\u80fd",permalink:"/docs/artificial-intelligence/opencv/start/drawing-function"}},r={},i=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u7f29\u653e\u56fe\u7247",id:"\u7f29\u653e\u56fe\u7247",level:3},{value:"\u7ffb\u8f6c\u56fe\u7247",id:"\u7ffb\u8f6c\u56fe\u7247",level:3},{value:"\u5e73\u79fb\u56fe\u7247",id:"\u5e73\u79fb\u56fe\u7247",level:3},{value:"\u65cb\u8f6c\u56fe\u7247",id:"\u65cb\u8f6c\u56fe\u7247",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],c={toc:i};function N(a){let{components:e,...t}=a;return(0,n.kt)("wrapper",(0,s.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"07-\u56fe\u50cf\u51e0\u4f55\u53d8\u6362"},"07: \u56fe\u50cf\u51e0\u4f55\u53d8\u6362"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_perspective_transformations_inm.jpg",alt:null})),(0,n.kt)("p",null,"\u5b66\u4e60\u5982\u4f55\u65cb\u8f6c\u3001\u5e73\u79fb\u3001\u7f29\u653e\u548c\u7ffb\u8f6c\u56fe\u7247\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,n.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u65cb\u8f6c\u3001\u5e73\u79fb\u548c\u7f29\u653e\u56fe\u7247"),(0,n.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.resize()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.flip()"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.warpAffine()"))),(0,n.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u56fe\u50cf\u7684\u51e0\u4f55\u53d8\u6362\u4ece\u539f\u7406\u4e0a\u770b\u4e3b\u8981\u5305\u62ec\u4e24\u79cd\uff1a\u57fa\u4e8e 2\xd73 \u77e9\u9635\u7684\u4eff\u5c04\u53d8\u6362\uff08\u5e73\u79fb\u3001\u7f29\u653e\u3001\u65cb\u8f6c\u548c\u7ffb\u8f6c\u7b49\uff09\u3001\u57fa\u4e8e 3\xd73 \u77e9\u9635\u7684\u900f\u89c6\u53d8\u6362\uff0c\u611f\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\u53ef\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"./extra-05-warpaffine-warpperspective/"},"\u756a\u5916\u7bc7\uff1a\u4eff\u5c04\u53d8\u6362\u4e0e\u900f\u89c6\u53d8\u6362"),"\u3002")),(0,n.kt)("h3",{id:"\u7f29\u653e\u56fe\u7247"},"\u7f29\u653e\u56fe\u7247"),(0,n.kt)("p",null,"\u7f29\u653e\u5c31\u662f\u8c03\u6574\u56fe\u7247\u7684\u5927\u5c0f\uff0c\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.resize()"),"\u51fd\u6570\u5b9e\u73b0\u7f29\u653e\u3002\u53ef\u4ee5\u6309\u7167\u6bd4\u4f8b\u7f29\u653e\uff0c\u4e5f\u53ef\u4ee5\u6309\u7167\u6307\u5b9a\u7684\u5927\u5c0f\u7f29\u653e\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\n\nimg = cv2.imread('drawing.jpg')\n\n# \u6309\u7167\u6307\u5b9a\u7684\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u7f29\u653e\u56fe\u7247\nres = cv2.resize(img, (132, 150))\n# \u6309\u7167\u6bd4\u4f8b\u7f29\u653e\uff0c\u5982 x,y \u8f74\u5747\u653e\u5927\u4e00\u500d\nres2 = cv2.resize(img, None, fx=2, fy=2, interpolation=cv2.INTER_LINEAR)\n\ncv2.imshow('shrink', res), cv2.imshow('zoom', res2)\ncv2.waitKey(0)\n")),(0,n.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u6307\u5b9a\u7f29\u653e\u65b9\u6cd5",(0,n.kt)("inlineCode",{parentName:"p"},"interpolation"),"\uff0c\u66f4\u4e13\u4e1a\u70b9\u53eb\u63d2\u503c\u65b9\u6cd5\uff0c\u9ed8\u8ba4\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"INTER_LINEAR"),"\uff0c\u5168\u90e8\u53ef\u4ee5\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://docs.opencv.org/4.0.0/da/d54/group__imgproc__transform.html#ga5bb5a1fea74ea38e1a5445ca803ff121"},"InterpolationFlags")),(0,n.kt)("h3",{id:"\u7ffb\u8f6c\u56fe\u7247"},"\u7ffb\u8f6c\u56fe\u7247"),(0,n.kt)("p",null,"\u955c\u50cf\u7ffb\u8f6c\u56fe\u7247\uff0c\u53ef\u4ee5\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.flip()"),"\u51fd\u6570\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"dst = cv2.flip(img, 1)\n")),(0,n.kt)("p",null,"\u5176\u4e2d\uff0c\u53c2\u6570 2 = 0\uff1a\u5782\u76f4\u7ffb\u8f6c (\u6cbf x \u8f74)\uff0c\u53c2\u6570 2 ",">"," 0: \u6c34\u5e73\u7ffb\u8f6c (\u6cbf y \u8f74)\uff0c\u53c2\u6570 2 ","<"," 0: \u6c34\u5e73\u5782\u76f4\u7ffb\u8f6c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_flip_image_sample.jpg",alt:null})),(0,n.kt)("h3",{id:"\u5e73\u79fb\u56fe\u7247"},"\u5e73\u79fb\u56fe\u7247"),(0,n.kt)("p",null,"\u8981\u5e73\u79fb\u56fe\u7247\uff0c\u6211\u4eec\u9700\u8981\u5b9a\u4e49\u4e0b\u9762\u8fd9\u6837\u4e00\u4e2a\u77e9\u9635\uff0ctx,ty \u662f\u5411 x \u548c y \u65b9\u5411\u5e73\u79fb\u7684\u8ddd\u79bb\uff1a"),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"M"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mrow",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"["),(0,n.kt)("mtable",{parentName:"mrow",rowspacing:"0.16em",columnalign:"center center center",columnspacing:"1em"},(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"0"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("msub",{parentName:"mstyle"},(0,n.kt)("mi",{parentName:"msub"},"t"),(0,n.kt)("mi",{parentName:"msub"},"x"))))),(0,n.kt)("mtr",{parentName:"mtable"},(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"0"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("mn",{parentName:"mstyle"},"1"))),(0,n.kt)("mtd",{parentName:"mtr"},(0,n.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,n.kt)("msub",{parentName:"mstyle"},(0,n.kt)("mi",{parentName:"msub"},"t"),(0,n.kt)("mi",{parentName:"msub"},"y")))))),(0,n.kt)("mo",{parentName:"mrow",fence:"true"},"]"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M = \\left[ \\begin{matrix} 1 & 0 & t_x \\newline 0 & 1 & t_y \\end{matrix} \\right]")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"2.4em",verticalAlign:"-0.95em"}}),(0,n.kt)("span",{parentName:"span",className:"minner"},(0,n.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},(0,n.kt)("span",{parentName:"span",className:"delimsizing size3"},"[")),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mtable"},(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.45em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.61em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1"))),(0,n.kt)("span",{parentName:"span",style:{top:"-2.41em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"0")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.95em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.45em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.61em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"0"))),(0,n.kt)("span",{parentName:"span",style:{top:"-2.41em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.95em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"arraycolsep",style:{width:"0.5em"}}),(0,n.kt)("span",{parentName:"span",className:"col-align-c"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.45em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3.61em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))),(0,n.kt)("span",{parentName:"span",style:{top:"-2.41em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"y")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,n.kt)("span",{parentName:"span"}))))))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.95em"}},(0,n.kt)("span",{parentName:"span"}))))))),(0,n.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},(0,n.kt)("span",{parentName:"span",className:"delimsizing size3"},"]")))))))),(0,n.kt)("p",null,"\u5e73\u79fb\u662f\u7528\u4eff\u5c04\u53d8\u6362\u51fd\u6570",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.warpAffine()"),"\u5b9e\u73b0\u7684\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# \u5e73\u79fb\u56fe\u7247\nimport numpy as np\n\nrows, cols = img.shape[:2]\n\n# \u5b9a\u4e49\u5e73\u79fb\u77e9\u9635\uff0c\u9700\u8981\u662f numpy \u7684 float32 \u7c7b\u578b\n# x \u8f74\u5e73\u79fb 100\uff0cy \u8f74\u5e73\u79fb 50\nM = np.float32([[1, 0, 100], [0, 1, 50]])\n# \u7528\u4eff\u5c04\u53d8\u6362\u5b9e\u73b0\u5e73\u79fb\ndst = cv2.warpAffine(img, M, (cols, rows))\n\ncv2.imshow('shift', dst)\ncv2.waitKey(0)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_translation_100_50.jpg",alt:null})),(0,n.kt)("h3",{id:"\u65cb\u8f6c\u56fe\u7247"},"\u65cb\u8f6c\u56fe\u7247"),(0,n.kt)("p",null,"\u65cb\u8f6c\u540c\u5e73\u79fb\u4e00\u6837\uff0c\u4e5f\u662f\u7528\u4eff\u5c04\u53d8\u6362\u5b9e\u73b0\u7684\uff0c\u56e0\u6b64\u4e5f\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u53d8\u6362\u77e9\u9635\u3002OpenCV \u76f4\u63a5\u63d0\u4f9b\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"cv2.getRotationMatrix2D()"),"\u51fd\u6570\u6765\u751f\u6210\u8fd9\u4e2a\u77e9\u9635\uff0c\u8be5\u51fd\u6570\u6709\u4e09\u4e2a\u53c2\u6570\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u6570 1\uff1a\u56fe\u7247\u7684\u65cb\u8f6c\u4e2d\u5fc3"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u6570 2\uff1a\u65cb\u8f6c\u89d2\u5ea6 (\u6b63\uff1a\u9006\u65f6\u9488\uff0c\u8d1f\uff1a\u987a\u65f6\u9488)"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u6570 3\uff1a\u7f29\u653e\u6bd4\u4f8b\uff0c0.5 \u8868\u793a\u7f29\u5c0f\u4e00\u534a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# 45\xb0\u65cb\u8f6c\u56fe\u7247\u5e76\u7f29\u5c0f\u4e00\u534a\nM = cv2.getRotationMatrix2D((cols / 2, rows / 2), 45, 0.5)\ndst = cv2.warpAffine(img, M, (cols, rows))\n\ncv2.imshow('rotation', dst)\ncv2.waitKey(0)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_rotation_45_degree.jpg",alt:"\u9006\u65f6\u9488\u65cb\u8f6c 45\xb0\u5e76\u7f29\u653e"})),(0,n.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cv2.resize()"),"\u7f29\u653e\u56fe\u7247\uff0c\u53ef\u4ee5\u6309\u6307\u5b9a\u5927\u5c0f\u7f29\u653e\uff0c\u4e5f\u53ef\u4ee5\u6309\u6bd4\u4f8b\u7f29\u653e\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cv2.flip()"),"\u7ffb\u8f6c\u56fe\u7247\uff0c\u53ef\u4ee5\u6307\u5b9a\u6c34\u5e73/\u5782\u76f4/\u6c34\u5e73\u5782\u76f4\u7ffb\u8f6c\u4e09\u79cd\u65b9\u5f0f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5e73\u79fb/\u65cb\u8f6c\u662f\u9760\u4eff\u5c04\u53d8\u6362",(0,n.kt)("inlineCode",{parentName:"li"},"cv2.warpAffine()"),"\u5b9e\u73b0\u7684\u3002")),(0,n.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/da/d54/group__imgproc__transform.html#ga47a974309e9102f5f08231edc7e7529d"},"cv2.resize","(",")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d2/de8/group__core__array.html#gaca7be533e3dac7feb70fc60635adf441"},"cv2.filp","(",")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/da/d54/group__imgproc__transform.html#ga0203d9ee5fcd28d40dbc4a1ea4451983"},"cv2.warpAffine","(",")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/da/d54/group__imgproc__transform.html#gafbbc470ce83812914a70abfb604f4326"},"cv2.getRotationMatrix2D","(",")"))),(0,n.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/07-Image-Geometric-Transformation"},"\u672c\u8282\u6e90\u7801")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_geometric_transformations/py_geometric_transformations.html"},"Geometric Transformations of Images"))))}N.isMDXComponent=!0}}]);