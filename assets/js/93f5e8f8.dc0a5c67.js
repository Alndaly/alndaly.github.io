"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2618],{35023:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));a(16758);const c={},r="14: \u8f6e\u5ed3\u7279\u5f81",i={unversionedId:"artificial-intelligence/opencv/basic/contour-features",id:"artificial-intelligence/opencv/basic/contour-features",title:"14: \u8f6e\u5ed3\u7279\u5f81",description:"\u5b66\u4e60\u8ba1\u7b97\u8f6e\u5ed3\u7279\u5f81\uff0c\u5982\u9762\u79ef\u3001\u5468\u957f\u3001\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u7b49\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/14-contour-features.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/contour-features",permalink:"/docs/artificial-intelligence/opencv/basic/contour-features",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/artificial-intelligence/opencv/basic/14-contour-features.md",tags:[],version:"current",lastUpdatedAt:1672546497,formattedLastUpdatedAt:"2023\u5e741\u67081\u65e5",sidebarPosition:14,frontMatter:{},sidebar:"ai",previous:{title:"13: \u8f6e\u5ed3",permalink:"/docs/artificial-intelligence/opencv/basic/contours"},next:{title:"15: \u76f4\u65b9\u56fe",permalink:"/docs/artificial-intelligence/opencv/basic/histograms"}},o={},p=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u8f6e\u5ed3\u9762\u79ef",id:"\u8f6e\u5ed3\u9762\u79ef",level:3},{value:"\u8f6e\u5ed3\u5468\u957f",id:"\u8f6e\u5ed3\u5468\u957f",level:3},{value:"\u56fe\u50cf\u77e9",id:"\u56fe\u50cf\u77e9",level:3},{value:"\u5916\u63a5\u77e9\u5f62",id:"\u5916\u63a5\u77e9\u5f62",level:3},{value:"\u6700\u5c0f\u5916\u63a5\u5706",id:"\u6700\u5c0f\u5916\u63a5\u5706",level:3},{value:"\u62df\u5408\u692d\u5706",id:"\u62df\u5408\u692d\u5706",level:3},{value:"\u5f62\u72b6\u5339\u914d",id:"\u5f62\u72b6\u5339\u914d",level:3},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],s={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"14-\u8f6e\u5ed3\u7279\u5f81"},"14: \u8f6e\u5ed3\u7279\u5f81"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_min_rect_rect_bounding.jpg",alt:null})),(0,l.kt)("p",null,"\u5b66\u4e60\u8ba1\u7b97\u8f6e\u5ed3\u7279\u5f81\uff0c\u5982\u9762\u79ef\u3001\u5468\u957f\u3001\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u7b49\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,l.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u7269\u4f53\u7684\u5468\u957f\u3001\u9762\u79ef\u3001\u8d28\u5fc3\u3001\u6700\u5c0f\u5916\u63a5\u77e9\u5f62\u7b49"),(0,l.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"cv2.contourArea()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"cv2.arcLength()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"cv2.approxPolyDP()")," \u7b49")),(0,l.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,l.kt)("p",null,"\u5728\u8ba1\u7b97\u8f6e\u5ed3\u7279\u5f81\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u7528\u4e0a\u4e00\u8282\u7684\u4ee3\u7801\u628a\u8f6e\u5ed3\u627e\u5230\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_31_handwriting_sample.jpg",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\n\nimg = cv2.imread('handwriting.jpg', 0)\n_, thresh = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)\nimage, contours, hierarchy = cv2.findContours(thresh, 3, 2)\n\n# \u4ee5\u6570\u5b57 3 \u7684\u8f6e\u5ed3\u4e3a\u4f8b\ncnt = contours[0]\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u4fbf\u4e8e\u7ed8\u5236\uff0c\u6211\u4eec\u521b\u5efa\u51fa\u4e24\u5e45\u5f69\u8272\u56fe\uff0c\u5e76\u628a\u8f6e\u5ed3\u753b\u5728\u7b2c\u4e00\u5e45\u56fe\u4e0a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"img_color1 = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)\nimg_color2 = np.copy(img_color1)\ncv2.drawContours(img_color1, [cnt], 0, (0, 0, 255), 2)\n")),(0,l.kt)("h3",{id:"\u8f6e\u5ed3\u9762\u79ef"},"\u8f6e\u5ed3\u9762\u79ef"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"area = cv2.contourArea(cnt)  # 4386.5\n")),(0,l.kt)("p",null,"\u6ce8\u610f\u8f6e\u5ed3\u7279\u5f81\u8ba1\u7b97\u7684\u7ed3\u679c\u5e76\u4e0d\u7b49\u540c\u4e8e\u50cf\u7d20\u70b9\u7684\u4e2a\u6570\uff0c\u800c\u662f\u6839\u636e\u51e0\u4f55\u65b9\u6cd5\u7b97\u51fa\u6765\u7684\uff0c\u6240\u4ee5\u6709\u5c0f\u6570\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u7edf\u8ba1\u4e8c\u503c\u56fe\u4e2d\u50cf\u7d20\u70b9\u4e2a\u6570\uff0c\u5e94\u5c3d\u91cf\u907f\u514d\u5faa\u73af\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"strong"},"cv2.countNonZero()")),"\uff0c\u66f4\u52a0\u9ad8\u6548\u3002")),(0,l.kt)("h3",{id:"\u8f6e\u5ed3\u5468\u957f"},"\u8f6e\u5ed3\u5468\u957f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"perimeter = cv2.arcLength(cnt, True)  # 585.7\n")),(0,l.kt)("p",null,"\u53c2\u6570 2 \u8868\u793a\u8f6e\u5ed3\u662f\u5426\u5c01\u95ed\uff0c\u663e\u7136\u6211\u4eec\u7684\u8f6e\u5ed3\u662f\u5c01\u95ed\u7684\uff0c\u6240\u4ee5\u662f True\u3002"),(0,l.kt)("h3",{id:"\u56fe\u50cf\u77e9"},"\u56fe\u50cf\u77e9"),(0,l.kt)("p",null,"\u77e9\u53ef\u4ee5\u7406\u89e3\u4e3a\u56fe\u50cf\u7684\u5404\u7c7b\u51e0\u4f55\u7279\u5f81\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a","[",(0,l.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Image_moment"},"Image Moments"),"]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"M = cv2.moments(cnt)\n")),(0,l.kt)("p",null,"M \u4e2d\u5305\u542b\u4e86\u5f88\u591a\u8f6e\u5ed3\u7684\u7279\u5f81\u4fe1\u606f\uff0c\u6bd4\u5982 M","[","'m00'","]"," \u8868\u793a\u8f6e\u5ed3\u9762\u79ef\uff0c\u4e0e\u524d\u9762",(0,l.kt)("inlineCode",{parentName:"p"},"cv2.contourArea()"),"\u8ba1\u7b97\u7ed3\u679c\u662f\u4e00\u6837\u7684\u3002\u8d28\u5fc3\u4e5f\u53ef\u4ee5\u7528\u5b83\u6765\u7b97\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"cx, cy = M['m10'] / M['m00'], M['m01'] / M['m00']  # (205, 281)\n")),(0,l.kt)("h3",{id:"\u5916\u63a5\u77e9\u5f62"},"\u5916\u63a5\u77e9\u5f62"),(0,l.kt)("p",null,"\u5f62\u72b6\u7684\u5916\u63a5\u77e9\u5f62\u6709\u4e24\u79cd\uff0c\u5982\u4e0b\u56fe\uff0c\u7eff\u8272\u7684\u53eb\u5916\u63a5\u77e9\u5f62\uff0c\u8868\u793a\u4e0d\u8003\u8651\u65cb\u8f6c\u5e76\u4e14\u80fd\u5305\u542b\u6574\u4e2a\u8f6e\u5ed3\u7684\u77e9\u5f62\u3002\u84dd\u8272\u7684\u53eb\u6700\u5c0f\u5916\u63a5\u77e9\uff0c\u8003\u8651\u4e86\u65cb\u8f6c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_min_rect_rect_bounding.jpg",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"x, y, w, h = cv2.boundingRect(cnt)  # \u5916\u63a5\u77e9\u5f62\ncv2.rectangle(img_color1, (x, y), (x + w, y + h), (0, 255, 0), 2)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"rect = cv2.minAreaRect(cnt)  # \u6700\u5c0f\u5916\u63a5\u77e9\u5f62\nbox = np.int0(cv2.boxPoints(rect))  # \u77e9\u5f62\u7684\u56db\u4e2a\u89d2\u70b9\u53d6\u6574\ncv2.drawContours(img_color1, [box], 0, (255, 0, 0), 2)\n")),(0,l.kt)("p",null,"\u5176\u4e2d np.int0","(","x",")"," \u662f\u628a x \u53d6\u6574\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982 377.93 \u5c31\u4f1a\u53d8\u6210 377\uff0c\u4e5f\u53ef\u4ee5\u7528 x.astype","(","np.int",")","\u3002"),(0,l.kt)("h3",{id:"\u6700\u5c0f\u5916\u63a5\u5706"},"\u6700\u5c0f\u5916\u63a5\u5706"),(0,l.kt)("p",null,"\u5916\u63a5\u5706\u8ddf\u5916\u63a5\u77e9\u5f62\u4e00\u6837\uff0c\u627e\u5230\u4e00\u4e2a\u80fd\u5305\u56f4\u7269\u4f53\u7684\u6700\u5c0f\u5706\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"(x, y), radius = cv2.minEnclosingCircle(cnt)\n(x, y, radius) = np.int0((x, y, radius))  # \u5706\u5fc3\u548c\u534a\u5f84\u53d6\u6574\ncv2.circle(img_color2, (x, y), radius, (0, 0, 255), 2)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_min_enclosing_circle.jpg",alt:null})),(0,l.kt)("h3",{id:"\u62df\u5408\u692d\u5706"},"\u62df\u5408\u692d\u5706"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u7528\u5f97\u5230\u7684\u8f6e\u5ed3\u62df\u5408\u51fa\u4e00\u4e2a\u692d\u5706\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"ellipse = cv2.fitEllipse(cnt)\ncv2.ellipse(img_color2, ellipse, (255, 255, 0), 2)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_fitting_ellipse.jpg",alt:null})),(0,l.kt)("h3",{id:"\u5f62\u72b6\u5339\u914d"},"\u5f62\u72b6\u5339\u914d"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cv2.matchShapes()"),"\u53ef\u4ee5\u68c0\u6d4b\u4e24\u4e2a\u5f62\u72b6\u4e4b\u95f4\u7684\u76f8\u4f3c\u5ea6\uff0c\u8fd4\u56de",(0,l.kt)("strong",{parentName:"p"},"\u503c\u8d8a\u5c0f\uff0c\u8d8a\u76f8\u4f3c"),"\u3002\u5148\u8bfb\u5165\u4e0b\u9762\u8fd9\u5f20\u56fe\u7247\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_match_shape_shapes.jpg",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"img = cv2.imread('shapes.jpg', 0)\n_, thresh = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)\nimage, contours, hierarchy = cv2.findContours(thresh, 3, 2)\nimg_color = cv2.cvtColor(thresh, cv2.COLOR_GRAY2BGR)  # \u7528\u4e8e\u7ed8\u5236\u7684\u5f69\u8272\u56fe\n")),(0,l.kt)("p",null,"\u56fe\u4e2d\u6709 3 \u6761\u8f6e\u5ed3\uff0c\u6211\u4eec\u7528 A/B/C \u8868\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"cnt_a, cnt_b, cnt_c = contours[0], contours[1], contours[2]\nprint(cv2.matchShapes(cnt_b, cnt_b, 1, 0.0))  # 0.0\nprint(cv2.matchShapes(cnt_b, cnt_c, 1, 0.0))  # 2.17e-05\nprint(cv2.matchShapes(cnt_b, cnt_a, 1, 0.0))  # 0.418\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 BC \u76f8\u4f3c\u7a0b\u5ea6\u6bd4 AB \u9ad8\u5f88\u591a\uff0c\u5e76\u4e14\u56fe\u5f62\u7684\u65cb\u8f6c\u6216\u7f29\u653e\u5e76\u6ca1\u6709\u5f71\u54cd\u3002\u5176\u4e2d\uff0c\u53c2\u6570 3 \u662f\u5339\u914d\u65b9\u6cd5\uff0c\u8be6\u60c5\u53ef\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#gaf2b97a230b51856d09a2d934b78c015f"},"ShapeMatchModes"),"\uff0c\u53c2\u6570 4 \u662f OpenCV \u7684\u9884\u7559\u53c2\u6570\uff0c\u6682\u65f6\u6ca1\u6709\u5b9e\u73b0\uff0c\u53ef\u4ee5\u4e0d\u7528\u7406\u4f1a\u3002"),(0,l.kt)("p",null,"\u5f62\u72b6\u5339\u914d\u662f\u901a\u8fc7\u56fe\u50cf\u7684 Hu \u77e9\u6765\u5b9e\u73b0\u7684","(",(0,l.kt)("inlineCode",{parentName:"p"},"cv2.HuMoments()"),")","\uff0c\u5927\u5bb6\u5982\u679c\u611f\u5174\u8da3\uff0c\u53ef\u4ee5\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Image_moment#Rotation_invariant_moments"},"Hu-Moments")),(0,l.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u524d\u9762\u6211\u4eec\u662f\u5bf9\u56fe\u7247\u4e2d\u7684\u6570\u5b57 3 \u8fdb\u884c\u8f6e\u5ed3\u7279\u5f81\u8ba1\u7b97\u7684\uff0c\u5927\u5bb6\u6362\u6210\u6570\u5b57 1 \u770b\u770b\u3002"),(0,l.kt)("li",{parentName:"ol"},"\uff08\u9009\u505a\uff09\u7528\u5f62\u72b6\u5339\u914d\u6bd4\u8f83\u4e24\u4e2a\u5b57\u6bcd\u6216\u6570\u5b57\uff08\u8fd9\u76f8\u5f53\u4e8e\u5f88\u7b80\u5355\u7684\u4e00\u4e2a",(0,l.kt)("a",{parentName:"li",href:"https://baike.baidu.com/item/%E5%85%89%E5%AD%A6%E5%AD%97%E7%AC%A6%E8%AF%86%E5%88%AB/4162921?fr=aladdin&fromid=25995&fromtitle=OCR"},"OCR"),"\u5662\uff09\u3002")),(0,l.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,l.kt)("p",null,"\u5e38\u7528\u7684\u8f6e\u5ed3\u7279\u5f81\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cv2.contourArea()"),"\u7b97\u9762\u79ef\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"cv2.arcLength()"),"\u7b97\u5468\u957f\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"cv2.boundingRect()"),"\u7b97\u5916\u63a5\u77e9\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cv2.minAreaRect()"),"\u7b97\u6700\u5c0f\u5916\u63a5\u77e9\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"cv2.minEnclosingCircle()"),"\u7b97\u6700\u5c0f\u5916\u63a5\u5706\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cv2.matchShapes()"),"\u8fdb\u884c\u5f62\u72b6\u5339\u914d\u3002")),(0,l.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#ga2c759ed9f497d4a618048a2f56dc97f1"},"cv2.contourArea()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#ga8d26483c636be6b35c3ec6335798a47c"},"cv2.arcLength()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#ga556a180f43cab22649c23ada36a8a139"},"cv2.moments()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#ga103fcbda2f540f3ef1c042d6a9b35ac7"},"cv2.boundingRect()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#ga3d476a3417130ae5154aea421ca7ead9"},"cv2.minAreaRect()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#ga8ce13c24081bbc7151e9326f412190f1"},"cv2.minEnclosingCircle()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#gaf259efaad93098103d6c27b9e4900ffa"},"cv2.fitEllipse()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#gaadc90cb16e2362c9bd6e7363e6e4c317"},"cv2.matchShapes()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d3/dc0/group__imgproc__shape.html#gaf2b97a230b51856d09a2d934b78c015f"},"cv2.ShapeMatchModes"))),(0,l.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/14-Contour-Features"},"\u672c\u8282\u6e90\u7801")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contour_features/py_contour_features.html"},"Contour Features")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contours_more_functions/py_contours_more_functions.html"},"Contours : More Functions"))))}m.isMDXComponent=!0}}]);