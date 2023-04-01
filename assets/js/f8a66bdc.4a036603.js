"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7083],{61338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));a(16758);const l={},p="04: \u56fe\u50cf\u57fa\u672c\u64cd\u4f5c",r={unversionedId:"artificial-intelligence/opencv/start/basic-operations",id:"artificial-intelligence/opencv/start/basic-operations",title:"04: \u56fe\u50cf\u57fa\u672c\u64cd\u4f5c",description:"\u5b66\u4e60\u83b7\u53d6\u548c\u4fee\u6539\u50cf\u7d20\u70b9\u7684\u503c\uff0cROI \u611f\u5174\u8da3\u533a\u57df\uff0c\u901a\u9053\u5206\u79bb\u5408\u5e76\u7b49\u57fa\u672c\u64cd\u4f5c\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/start/04-basic-operations.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/basic-operations",permalink:"/docs/artificial-intelligence/opencv/start/basic-operations",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/04-basic-operations.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"2023\u5e744\u67081\u65e5",sidebarPosition:4,frontMatter:{},sidebar:"ai",previous:{title:"03: \u6253\u5f00\u6444\u50cf\u5934",permalink:"/docs/artificial-intelligence/opencv/start/open-camera"},next:{title:"05: \u989c\u8272\u7a7a\u95f4\u8f6c\u6362",permalink:"/docs/artificial-intelligence/opencv/start/changing-colorspaces"}},o={},c=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u83b7\u53d6\u548c\u4fee\u6539\u50cf\u7d20\u70b9\u503c",id:"\u83b7\u53d6\u548c\u4fee\u6539\u50cf\u7d20\u70b9\u503c",level:3},{value:"\u56fe\u7247\u5c5e\u6027",id:"\u56fe\u7247\u5c5e\u6027",level:3},{value:"ROI",id:"roi",level:3},{value:"\u901a\u9053\u5206\u5272\u4e0e\u5408\u5e76",id:"\u901a\u9053\u5206\u5272\u4e0e\u5408\u5e76",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"04-\u56fe\u50cf\u57fa\u672c\u64cd\u4f5c"},"04: \u56fe\u50cf\u57fa\u672c\u64cd\u4f5c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_lena_face_roi_crop.jpg",alt:null})),(0,i.kt)("p",null,"\u5b66\u4e60\u83b7\u53d6\u548c\u4fee\u6539\u50cf\u7d20\u70b9\u7684\u503c\uff0cROI \u611f\u5174\u8da3\u533a\u57df\uff0c\u901a\u9053\u5206\u79bb\u5408\u5e76\u7b49\u57fa\u672c\u64cd\u4f5c\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,i.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u548c\u4fee\u6539\u56fe\u7247\u50cf\u7d20\u70b9\u7684\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u56fe\u7247\u7684\u5bbd\u3001\u9ad8\u3001\u901a\u9053\u6570\u7b49\u5c5e\u6027"),(0,i.kt)("li",{parentName:"ul"},"\u4e86\u89e3\u611f\u5174\u8da3\u533a\u57df ROI"),(0,i.kt)("li",{parentName:"ul"},"\u5206\u79bb\u548c\u5408\u5e76\u56fe\u50cf\u901a\u9053")),(0,i.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,i.kt)("h3",{id:"\u83b7\u53d6\u548c\u4fee\u6539\u50cf\u7d20\u70b9\u503c"},"\u83b7\u53d6\u548c\u4fee\u6539\u50cf\u7d20\u70b9\u503c"),(0,i.kt)("p",null,"\u6211\u4eec\u5148\u8bfb\u5165\u4e00\u5f20\u56fe\u7247\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\n\nimg = cv2.imread('lena.jpg')\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u884c\u5217\u7684\u5750\u6807\u6765\u83b7\u53d6\u67d0\u50cf\u7d20\u70b9\u7684\u503c\uff0c\u5bf9\u4e8e\u5f69\u8272\u56fe\uff0c\u7ed3\u679c\u662f B,G,R \u4e09\u4e2a\u503c\u7684\u5217\u8868\uff0c\u5bf9\u4e8e\u7070\u5ea6\u56fe\u6216\u5355\u901a\u9053\u56fe\uff0c\u53ea\u6709\u4e00\u4e2a\u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"px = img[100, 90]\nprint(px)  # [103 98 197]\n\n# \u53ea\u83b7\u53d6\u84dd\u8272 blue \u901a\u9053\u7684\u503c\npx_blue = img[100, 90, 0]\nprint(px_blue)  # 103\n")),(0,i.kt)("p",null,"\u8fd8\u8bb0\u5f97\u5417\uff1f\u884c\u5bf9\u5e94 y\uff0c\u5217\u5bf9\u5e94 x\uff0c\u6240\u4ee5\u5176\u5b9e\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"img[y, x]"),"\uff0c\u9700\u8981\u6ce8\u610f\u5662","(","\u25cf\u02c7\u2200\u02c7\u25cf",")","\u3002\u5bb9\u6613\u6df7\u6dc6\u7684\u8bdd\uff0c\u53ef\u4ee5\u53ea\u8bb0\u884c\u548c\u5217\uff0c\u884c\u5728\u524d\uff0c\u5217\u5728\u540e\u3002"),(0,i.kt)("p",null,"\u4fee\u6539\u50cf\u7d20\u7684\u503c\u4e5f\u662f\u540c\u6837\u7684\u65b9\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"img[100, 90] = [255, 255, 255]\nprint(img[100, 90])  # [255 255 255]\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd8\u6709\u4e00\u79cd\u6027\u80fd\u66f4\u597d\u7684\u65b9\u5f0f\uff0c\u83b7\u53d6\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"img.item(100,100,0)"),"\uff0c\u4fee\u6539\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"img.itemset((100,100,0),255)"),"\uff0c\u4f46\u8fd9\u79cd\u65b9\u5f0f\u53ea\u80fd B,G,R \u9010\u4e00\u8fdb\u884c\u3002")),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u8fd9\u6b65\u64cd\u4f5c\u53ea\u662f\u5185\u5b58\u4e2d\u7684 img \u50cf\u7d20\u70b9\u503c\u53d8\u4e86\uff0c\u56e0\u4e3a\u6ca1\u6709\u4fdd\u5b58\uff0c\u6240\u4ee5\u539f\u56fe\u5e76\u6ca1\u6709\u66f4\u6539\u3002"),(0,i.kt)("h3",{id:"\u56fe\u7247\u5c5e\u6027"},"\u56fe\u7247\u5c5e\u6027"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"img.shape"),"\u83b7\u53d6\u56fe\u50cf\u7684\u5f62\u72b6\uff0c\u56fe\u7247\u662f\u5f69\u8272\u7684\u8bdd\uff0c\u8fd4\u56de\u4e00\u4e2a\u5305\u542b",(0,i.kt)("strong",{parentName:"p"},"\u884c\u6570\uff08\u9ad8\u5ea6\uff09\u3001\u5217\u6570\uff08\u5bbd\u5ea6\uff09\u548c\u901a\u9053\u6570"),"\u7684\u5143\u7ec4\uff0c\u7070\u5ea6\u56fe\u53ea\u8fd4\u56de\u884c\u6570\u548c\u5217\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(img.shape)  # (263, 247, 3)\n# \u5f62\u72b6\u4e2d\u5305\u62ec\u884c\u6570\u3001\u5217\u6570\u548c\u901a\u9053\u6570\nheight, width, channels = img.shape\n# img \u662f\u7070\u5ea6\u56fe\u7684\u8bdd\uff1aheight, width = img.shape\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"img.dtype"),"\u83b7\u53d6\u56fe\u50cf\u6570\u636e\u7c7b\u578b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(img.dtype)  # uint8\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u591a\u6570\u9519\u8bef\u662f\u56e0\u4e3a\u6570\u636e\u7c7b\u578b\u4e0d\u5bf9\u5bfc\u81f4\u7684\uff0c\u6240\u4ee5\u5065\u58ee\u7684\u4ee3\u7801\u5e94\u8be5\u5bf9\u8fd9\u4e2a\u5c5e\u6027\u52a0\u4ee5\u5224\u65ad\u3002")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"img.size"),"\u83b7\u53d6\u56fe\u50cf\u603b\u50cf\u7d20\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"print(img.size)  # 263*247*3=194883\n")),(0,i.kt)("h3",{id:"roi"},"ROI"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/ROI/1125333#viewPageContent"},"ROI"),"\uff1aRegion of Interest\uff0c\u611f\u5174\u8da3\u533a\u57df\u3002\u4ec0\u4e48\u610f\u601d\u5462\uff1f\u6bd4\u5982\u6211\u4eec\u8981\u68c0\u6d4b\u773c\u775b\uff0c\u56e0\u4e3a\u773c\u775b\u80af\u5b9a\u5728\u8138\u4e0a\uff0c\u6240\u4ee5\u6211\u4eec\u611f\u5174\u8da3\u7684\u53ea\u6709\u8138\u8fd9\u90e8\u5206\uff0c\u5176\u4ed6\u90fd\u4e0d care\uff0c\u6240\u4ee5\u53ef\u4ee5\u5355\u72ec\u628a\u8138\u622a\u53d6\u51fa\u6765\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5927\u5927\u8282\u7701\u8ba1\u7b97\u91cf\uff0c\u63d0\u9ad8\u8fd0\u884c\u901f\u5ea6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_lena_face_roi_crop.jpg",alt:"\u53ea\u5173\u5fc3\u8138 ( \u256f\u25a1\u2570 )"})),(0,i.kt)("p",null,"\u622a\u53d6 ROI \u975e\u5e38\u7b80\u5355\uff0c\u6307\u5b9a\u56fe\u7247\u7684\u8303\u56f4\u5373\u53ef\uff08\u540e\u9762\u6211\u4eec\u5b66\u4e86\u7279\u5f81\u540e\uff0c\u5c31\u53ef\u4ee5\u81ea\u52a8\u622a\u53d6\u8fa3\uff0c","(","\u0e07 \u2022","_","\u2022",")","\u0e07\uff09\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# \u622a\u53d6\u8138\u90e8 ROI\nface = img[100:200, 115:188]\ncv2.imshow('face', face)\ncv2.waitKey(0)\n")),(0,i.kt)("h3",{id:"\u901a\u9053\u5206\u5272\u4e0e\u5408\u5e76"},"\u901a\u9053\u5206\u5272\u4e0e\u5408\u5e76"),(0,i.kt)("p",null,"\u5f69\u8272\u56fe\u7684 BGR \u4e09\u4e2a\u901a\u9053\u662f\u53ef\u4ee5\u5206\u5f00\u5355\u72ec\u8bbf\u95ee\u7684\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5355\u72ec\u7684\u4e09\u4e2a\u901a\u9053\u5408\u5e76\u6210\u4e00\u526f\u56fe\u50cf\u3002\u5206\u522b\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"cv2.split()"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"cv2.merge()"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"b, g, r = cv2.split(img)\nimg = cv2.merge((b, g, r))\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"split()"),"\u51fd\u6570\u6bd4\u8f83\u8017\u65f6\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u66f4\u9ad8\u6548\u7684\u65b9\u5f0f\u662f\u7528 numpy \u4e2d\u7684\u7d22\u5f15"),"\uff0c\u5982\u63d0\u53d6 B \u901a\u9053\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"b = img[:, :, 0]\ncv2.imshow('blue', b)\ncv2.waitKey(0)\n")),(0,i.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"img[y,x]"),"\u83b7\u53d6/\u8bbe\u7f6e\u50cf\u7d20\u70b9\u503c\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"img.shape"),"\uff1a\u56fe\u7247\u7684\u5f62\u72b6\uff08\u884c\u6570\u3001\u5217\u6570\u3001\u901a\u9053\u6570\uff09,",(0,i.kt)("inlineCode",{parentName:"li"},"img.dtype"),"\uff1a\u56fe\u50cf\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"img[y1:y2,x1:x2]"),"\u8fdb\u884c ROI \u622a\u53d6\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"cv2.split()/cv2.merge()"),"\u901a\u9053\u5206\u5272/\u5408\u5e76\u3002\u66f4\u63a8\u8350\u7684\u83b7\u53d6\u5355\u901a\u9053\u65b9\u5f0f\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"b = img[:, :, 0]"),"\u3002")),(0,i.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6253\u5f00 lena.jpg\uff0c\u5c06\u5e3d\u5b50\u90e8\u5206\uff08\u9ad8\uff1a25~120\uff0c\u5bbd\uff1a50~220\uff09\u7684\u7ea2\u8272\u901a\u9053\u622a\u53d6\u51fa\u6765\u5e76\u663e\u793a\u3002")),(0,i.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d2/de8/group__core__array.html#ga0547c7fed86152d7e9d0096029c8518a"},"cv2.split()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d2/de8/group__core__array.html#ga7d7b4d6c6ee504b30a20b1680029c7b4"},"cv2.merge()"))),(0,i.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/04-Basic-Operations"},"\u672c\u8282\u6e90\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_core/py_basic_ops/py_basic_ops.html#basic-ops"},"Basic Operations on Images"))))}m.isMDXComponent=!0}}]);