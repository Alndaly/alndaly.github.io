"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9618],{93836:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));n(16758);const a={},l="\u756a\u5916\u7bc7\uff1a\u51f8\u5305\u53ca\u66f4\u591a\u8f6e\u5ed3\u7279\u5f81",c={unversionedId:"artificial-intelligence/opencv/basic/extra-11-convex-hull",id:"artificial-intelligence/opencv/basic/extra-11-convex-hull",title:"\u756a\u5916\u7bc7\uff1a\u51f8\u5305\u53ca\u66f4\u591a\u8f6e\u5ed3\u7279\u5f81",description:"\u8ba1\u7b97\u51f8\u5305\u53ca\u66f4\u591a\u8f6e\u5ed3\u7279\u5f81\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/extra-11-convex-hull.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/extra-11-convex-hull",permalink:"/en/docs/artificial-intelligence/opencv/basic/extra-11-convex-hull",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/basic/extra-11-convex-hull.md",tags:[],version:"current",lastUpdatedAt:1675524891,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{},sidebar:"ai",previous:{title:"\u756a\u5916\u7bc7\uff1a\u8f6e\u5ed3\u5c42\u7ea7",permalink:"/en/docs/artificial-intelligence/opencv/basic/extra-10-contours-hierarchy"},next:{title:"opencv\u57fa\u7840\u65b9\u6cd5",permalink:"/en/docs/artificial-intelligence/opencv/basic-method"}},p={},i=[{value:"\u591a\u8fb9\u5f62\u903c\u8fd1",id:"\u591a\u8fb9\u5f62\u903c\u8fd1",level:2},{value:"\u51f8\u5305",id:"\u51f8\u5305",level:2},{value:"\u70b9\u5230\u8f6e\u5ed3\u8ddd\u79bb",id:"\u70b9\u5230\u8f6e\u5ed3\u8ddd\u79bb",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],s={toc:i};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u756a\u5916\u7bc7\u51f8\u5305\u53ca\u66f4\u591a\u8f6e\u5ed3\u7279\u5f81"},"\u756a\u5916\u7bc7\uff1a\u51f8\u5305\u53ca\u66f4\u591a\u8f6e\u5ed3\u7279\u5f81"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_convex.jpg",alt:null})),(0,r.kt)("p",null,"\u8ba1\u7b97\u51f8\u5305\u53ca\u66f4\u591a\u8f6e\u5ed3\u7279\u5f81\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,r.kt)("h2",{id:"\u591a\u8fb9\u5f62\u903c\u8fd1"},"\u591a\u8fb9\u5f62\u903c\u8fd1"),(0,r.kt)("p",null,"\u524d\u9762\u6211\u4eec\u5b66\u4e60\u8fc7\u6700\u5c0f\u5916\u63a5\u77e9\u548c\u6700\u5c0f\u5916\u63a5\u5706\uff0c\u90a3\u4e48\u53ef\u4ee5\u7528\u4e00\u4e2a\u6700\u5c0f\u7684\u591a\u8fb9\u5f62\u5305\u56f4\u7269\u4f53\u5417\uff1f\u5f53\u7136\u53ef\u4ee5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\n\n# 1.\u5148\u627e\u5230\u8f6e\u5ed3\nimg = cv2.imread('unregular.jpg', 0)\n_, thresh = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)\nimage, contours, hierarchy = cv2.findContours(thresh, 3, 2)\ncnt = contours[0]\n\n# 2.\u8fdb\u884c\u591a\u8fb9\u5f62\u903c\u8fd1\uff0c\u5f97\u5230\u591a\u8fb9\u5f62\u7684\u89d2\u70b9\napprox = cv2.approxPolyDP(cnt, 3, True)\n\n# 3.\u753b\u51fa\u591a\u8fb9\u5f62\nimage = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)\ncv2.polylines(image, [approx], True, (0, 255, 0), 2)\n")),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"cv2.approxPolyDP()"),"\u7684\u53c2\u6570 2(epsilon) \u662f\u4e00\u4e2a\u8ddd\u79bb\u503c\uff0c\u8868\u793a\u591a\u8fb9\u5f62\u7684\u8f6e\u5ed3\u63a5\u8fd1\u5b9e\u9645\u8f6e\u5ed3\u7684\u7a0b\u5ea6\uff0c\u503c\u8d8a\u5c0f\uff0c\u8d8a\u7cbe\u786e\uff1b\u53c2\u6570 3 \u8868\u793a\u662f\u5426\u95ed\u5408\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_approxpoly.jpg",alt:null})),(0,r.kt)("h2",{id:"\u51f8\u5305"},"\u51f8\u5305"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/%E5%87%B8%E5%8C%85/179150?fr=aladdin"},"\u51f8\u5305"),'\u8ddf\u591a\u8fb9\u5f62\u903c\u8fd1\u5f88\u50cf\uff0c\u53ea\u4e0d\u8fc7\u5b83\u662f\u7269\u4f53\u6700\u5916\u5c42\u7684"\u51f8"\u591a\u8fb9\u5f62\uff1a\u96c6\u5408 A \u5185\u8fde\u63a5\u4efb\u610f\u4e24\u4e2a\u70b9\u7684\u76f4\u7ebf\u90fd\u5728 A \u7684\u5185\u90e8\uff0c\u5219\u79f0\u96c6\u5408 A \u662f\u51f8\u5f62\u7684\u3002\u5982\u4e0b\u56fe\uff0c\u7ea2\u8272\u7684\u90e8\u5206\u4e3a\u624b\u638c\u7684\u51f8\u5305\uff0c\u53cc\u7bad\u5934\u90e8\u5206\u8868\u793a\u51f8\u7f3a\u9677 (Convexity Defects)\uff0c\u51f8\u7f3a\u9677\u5e38\u7528\u6765\u8fdb\u884c\u624b\u52bf\u8bc6\u522b\u7b49\uff1a'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_convex.jpg",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# 1.\u5148\u627e\u5230\u8f6e\u5ed3\nimg = cv2.imread('convex.jpg', 0)\n_, thresh = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)\nimage, contours, hierarchy = cv2.findContours(thresh, 3, 2)\ncnt = contours[0]\n\n# 2.\u5bfb\u627e\u51f8\u5305\uff0c\u5f97\u5230\u51f8\u5305\u7684\u89d2\u70b9\nhull = cv2.convexHull(cnt)\n\n# 3.\u7ed8\u5236\u51f8\u5305\nimage = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)\ncv2.polylines(image, [hull], True, (0, 255, 0), 2)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_convex_hull.jpg",alt:null})),(0,r.kt)("p",null,"\u5176\u4e2d\u51fd\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"cv2.convexHull()"),"\u6709\u4e2a\u53ef\u9009\u53c2\u6570 returnPoints\uff0c\u9ed8\u8ba4\u662f True\uff0c\u4ee3\u8868\u8fd4\u56de\u89d2\u70b9\u7684 x/y \u5750\u6807\uff1b\u5982\u679c\u4e3a False \u7684\u8bdd\uff0c\u8868\u793a\u8fd4\u56de\u8f6e\u5ed3\u4e2d\u662f\u51f8\u5305\u89d2\u70b9\u7684\u7d22\u5f15\uff0c\u6bd4\u5982\u8bf4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(hull[0])  # [[362 184]]\uff08\u5750\u6807\uff09\nhull2 = cv2.convexHull(cnt, returnPoints=False)\nprint(hull2[0])  # [510]\uff08cnt \u4e2d\u7684\u7d22\u5f15\uff09\nprint(cnt[510])  # [[362 184]]\n")),(0,r.kt)("p",null,"\u5f53\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"cv2.convexityDefects()"),"\u8ba1\u7b97\u51f8\u5305\u7f3a\u9677\u65f6\uff0creturnPoints \u9700\u4e3a False\uff0c\u8be6\u60c5\u53ef\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contours_more_functions/py_contours_more_functions.html#contours-more-functions"},"Convexity Defects")),(0,r.kt)("p",null,"\u53e6\u5916\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u8bed\u53e5\u6765\u5224\u65ad\u8f6e\u5ed3\u662f\u5426\u662f\u51f8\u5f62\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(cv2.isContourConvex(hull))  # True\n")),(0,r.kt)("h2",{id:"\u70b9\u5230\u8f6e\u5ed3\u8ddd\u79bb"},"\u70b9\u5230\u8f6e\u5ed3\u8ddd\u79bb"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cv2.pointPolygonTest()"),"\u51fd\u6570\u8ba1\u7b97\u70b9\u5230\u8f6e\u5ed3\u7684\u6700\u77ed\u8ddd\u79bb\uff08\u4e5f\u5c31\u662f\u5782\u7ebf\uff09\uff0c\u53c8\u79f0\u591a\u8fb9\u5f62\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"dist = cv2.pointPolygonTest(cnt, (100, 100), True)  # -3.53\n")),(0,r.kt)("p",null,"\u5176\u4e2d\u53c2\u6570 3 \u4e3a True \u65f6\u8868\u793a\u8ba1\u7b97\u8ddd\u79bb\u503c\uff1a\u70b9\u5728\u8f6e\u5ed3\u5916\u9762\u503c\u4e3a\u8d1f\uff0c\u70b9\u5728\u8f6e\u5ed3\u4e0a\u503c\u4e3a 0\uff0c\u70b9\u5728\u8f6e\u5ed3\u91cc\u9762\u503c\u4e3a\u6b63\uff1b\u53c2\u6570 3 \u4e3a False \u65f6\uff0c\u53ea\u8fd4\u56de-1/0/1 \u8868\u793a\u70b9\u76f8\u5bf9\u8f6e\u5ed3\u7684\u4f4d\u7f6e\uff0c\u4e0d\u8ba1\u7b97\u8ddd\u79bb\u3002"),(0,r.kt)("p",null,"\u66f4\u591a\u8f6e\u5ed3\u7279\u5f81\uff0c\u5982\u5f53\u91cf\u76f4\u5f84\u3001\u5e73\u5747\u5f3a\u5ea6\u7b49\uff0c\u6211\u76ee\u524d\u4e5f\u6ca1\u7528\u5230\u8fc7\uff0c\u4ee5\u540e\u7528\u5230\u518d\u5199\u5427\uff0c\u611f\u5174\u8da3\u7684\u53ef\u4ee5\u53c2\u770b\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contour_properties/py_contour_properties.html"},"Contour Properties"),"\u3001",(0,r.kt)("a",{parentName:"p",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contours_hierarchy/py_contours_hierarchy.html"},"Contours Hierarchy")),(0,r.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Extra-11-Convex-Hull"},"\u672c\u8282\u6e90\u7801")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contours_more_functions/py_contours_more_functions.html#contours-more-functions"},"Convexity Defects")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contour_properties/py_contour_properties.html"},"Contour Properties")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contours_hierarchy/py_contours_hierarchy.html"},"Contours Hierarchy"))))}u.isMDXComponent=!0}}]);