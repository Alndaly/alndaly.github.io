"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1243],{98962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));a(16758);const i={},r="05: \u989c\u8272\u7a7a\u95f4\u8f6c\u6362",o={unversionedId:"artificial-intelligence/opencv/start/changing-colorspaces",id:"artificial-intelligence/opencv/start/changing-colorspaces",title:"05: \u989c\u8272\u7a7a\u95f4\u8f6c\u6362",description:"\u5b66\u4e60\u5982\u4f55\u8fdb\u884c\u56fe\u7247\u7684\u989c\u8272\u7a7a\u95f4\u8f6c\u6362\uff0c\u89c6\u9891\u4e2d\u8ffd\u8e2a\u7279\u5b9a\u989c\u8272\u7684\u7269\u4f53\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/start/05-changing-colorspaces.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/changing-colorspaces",permalink:"/docs/artificial-intelligence/opencv/start/changing-colorspaces",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/artificial-intelligence/opencv/start/05-changing-colorspaces.md",tags:[],version:"current",lastUpdatedAt:1670683071,formattedLastUpdatedAt:"2022\u5e7412\u670810\u65e5",sidebarPosition:5,frontMatter:{},sidebar:"ai",previous:{title:"04: \u56fe\u50cf\u57fa\u672c\u64cd\u4f5c",permalink:"/docs/artificial-intelligence/opencv/start/basic-operations"},next:{title:"06: \u9608\u503c\u5206\u5272",permalink:"/docs/artificial-intelligence/opencv/start/image-thresholding"}},p={},c=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u989c\u8272\u7a7a\u95f4\u8f6c\u6362",id:"\u989c\u8272\u7a7a\u95f4\u8f6c\u6362",level:3},{value:"\u89c6\u9891\u4e2d\u7279\u5b9a\u989c\u8272\u7269\u4f53\u8ffd\u8e2a",id:"\u89c6\u9891\u4e2d\u7279\u5b9a\u989c\u8272\u7269\u4f53\u8ffd\u8e2a",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"05-\u989c\u8272\u7a7a\u95f4\u8f6c\u6362"},"05: \u989c\u8272\u7a7a\u95f4\u8f6c\u6362"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_exercise_tracking_three_colors.jpg",alt:null})),(0,l.kt)("p",null,"\u5b66\u4e60\u5982\u4f55\u8fdb\u884c\u56fe\u7247\u7684\u989c\u8272\u7a7a\u95f4\u8f6c\u6362\uff0c\u89c6\u9891\u4e2d\u8ffd\u8e2a\u7279\u5b9a\u989c\u8272\u7684\u7269\u4f53\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,l.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u989c\u8272\u7a7a\u95f4\u8f6c\u6362\uff0c\u5982 BGR\u2194Gray\uff0cBGR\u2194HSV \u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u8ffd\u8e2a\u89c6\u9891\u4e2d\u7279\u5b9a\u989c\u8272\u7684\u7269\u4f53"),(0,l.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"cv2.cvtColor()"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"cv2.inRange()"))),(0,l.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,l.kt)("h3",{id:"\u989c\u8272\u7a7a\u95f4\u8f6c\u6362"},"\u989c\u8272\u7a7a\u95f4\u8f6c\u6362"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\n\nimg = cv2.imread('lena.jpg')\n# \u8f6c\u6362\u4e3a\u7070\u5ea6\u56fe\nimg_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n\ncv2.imshow('img', img)\ncv2.imshow('gray', img_gray)\ncv2.waitKey(0)\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cv2.cvtColor()"),"\u7528\u6765\u8fdb\u884c\u989c\u8272\u6a21\u578b\u8f6c\u6362\uff0c\u53c2\u6570 1 \u662f\u8981\u8f6c\u6362\u7684\u56fe\u7247\uff0c\u53c2\u6570 2 \u662f\u8f6c\u6362\u6a21\u5f0f\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"COLOR_BGR2GRAY"),"\u8868\u793a BGR\u2192Gray\uff0c\u53ef\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u663e\u793a\u6240\u6709\u7684\u8f6c\u6362\u6a21\u5f0f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"flags = [i for i in dir(cv2) if i.startswith('COLOR_')]\nprint(flags)\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u989c\u8272\u8f6c\u6362\u5176\u5b9e\u662f\u6570\u5b66\u8fd0\u7b97\uff0c\u5982\u7070\u5ea6\u5316\u6700\u5e38\u7528\u7684\u662f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"gray=R*0.299+G*0.587+B*0.114"),"\u3002")),(0,l.kt)("h3",{id:"\u89c6\u9891\u4e2d\u7279\u5b9a\u989c\u8272\u7269\u4f53\u8ffd\u8e2a"},"\u89c6\u9891\u4e2d\u7279\u5b9a\u989c\u8272\u7269\u4f53\u8ffd\u8e2a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/HSV/547122"},"HSV"),"\u662f\u4e00\u4e2a\u5e38\u7528\u4e8e\u989c\u8272\u8bc6\u522b\u7684\u6a21\u578b\uff0c\u76f8\u6bd4 BGR \u66f4\u6613\u533a\u5206\u989c\u8272\uff0c\u8f6c\u6362\u6a21\u5f0f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"COLOR_BGR2HSV"),"\u8868\u793a\u3002"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"OpenCV \u4e2d\u8272\u8c03 H \u8303\u56f4\u4e3a","[","0,179","]","\uff0c\u9971\u548c\u5ea6 S \u662f","[","0,255","]","\uff0c\u660e\u5ea6 V \u662f","[","0,255","]","\u3002\u867d\u7136 H \u7684\u7406\u8bba\u6570\u503c\u662f 0\xb0~360\xb0\uff0c\u4f46 8 \u4f4d\u56fe\u50cf\u50cf\u7d20\u70b9\u7684\u6700\u5927\u503c\u662f 255\uff0c\u6240\u4ee5 OpenCV \u4e2d\u9664\u4ee5\u4e86 2\uff0c\u67d0\u4e9b\u8f6f\u4ef6\u53ef\u80fd\u4f7f\u7528\u4e0d\u540c\u7684\u5c3a\u5ea6\u8868\u793a\uff0c\u6240\u4ee5\u540c\u5176\u4ed6\u8f6f\u4ef6\u6df7\u7528\u65f6\uff0c\u8bb0\u5f97\u5f52\u4e00\u5316\u3002")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5b9e\u73b0\u4e00\u4e2a\u4f7f\u7528 HSV \u6765\u53ea\u663e\u793a\u89c6\u9891\u4e2d\u84dd\u8272\u7269\u4f53\u7684\u4f8b\u5b50\uff0c\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6355\u83b7\u89c6\u9891\u4e2d\u7684\u4e00\u5e27"),(0,l.kt)("li",{parentName:"ol"},"\u4ece BGR \u8f6c\u6362\u5230 HSV"),(0,l.kt)("li",{parentName:"ol"},"\u63d0\u53d6\u84dd\u8272\u8303\u56f4\u7684\u7269\u4f53"),(0,l.kt)("li",{parentName:"ol"},"\u53ea\u663e\u793a\u84dd\u8272\u7269\u4f53")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_blue_object_tracking.jpg",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\n\ncapture = cv2.VideoCapture(0)\n\n# \u84dd\u8272\u7684\u8303\u56f4\uff0c\u4e0d\u540c\u5149\u7167\u6761\u4ef6\u4e0b\u4e0d\u4e00\u6837\uff0c\u53ef\u7075\u6d3b\u8c03\u6574\nlower_blue = np.array([100, 110, 110])\nupper_blue = np.array([130, 255, 255])\n\nwhile(True):\n    # 1.\u6355\u83b7\u89c6\u9891\u4e2d\u7684\u4e00\u5e27\n    ret, frame = capture.read()\n\n    # 2.\u4ece BGR \u8f6c\u6362\u5230 HSV\n    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)\n\n    # 3.inRange()\uff1a\u4ecb\u4e8e lower/upper \u4e4b\u95f4\u7684\u4e3a\u767d\u8272\uff0c\u5176\u4f59\u9ed1\u8272\n    mask = cv2.inRange(hsv, lower_blue, upper_blue)\n\n    # 4.\u53ea\u4fdd\u7559\u539f\u56fe\u4e2d\u7684\u84dd\u8272\u90e8\u5206\n    res = cv2.bitwise_and(frame, frame, mask=mask)\n\n    cv2.imshow('frame', frame)\n    cv2.imshow('mask', mask)\n    cv2.imshow('res', res)\n\n    if cv2.waitKey(1) == ord('q'):\n        break\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"bitwise_and()"),"\u51fd\u6570\u6682\u65f6\u4e0d\u7528\u7ba1\uff0c\u540e\u9762\u4f1a\u8bb2\u5230\u3002\u90a3\u84dd\u8272\u7684 HSV \u503c\u7684\u4e0a\u4e0b\u9650 lower \u548c upper \u8303\u56f4\u662f\u600e\u4e48\u5f97\u5230\u7684\u5462\uff1f\u5176\u5b9e\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u5148\u628a\u6807\u51c6\u84dd\u8272\u7684 BGR \u503c\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"cvtColor()"),"\u8f6c\u6362\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"blue = np.uint8([[[255, 0, 0]]])\nhsv_blue = cv2.cvtColor(blue, cv2.COLOR_BGR2HSV)\nprint(hsv_blue)  # [[[120 255 255]]]\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u662f","[","120, 255, 255","]","\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u628a\u84dd\u8272\u7684\u8303\u56f4\u8c03\u6574\u6210\u4e86\u4e0a\u9762\u4ee3\u7801\u90a3\u6837\u3002"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/Lab/1514615"},"Lab")," \u989c\u8272\u7a7a\u95f4\u4e5f\u7ecf\u5e38\u7528\u6765\u505a\u989c\u8272\u8bc6\u522b\uff0c\u6709\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u4e86\u89e3\u4e0b\u3002")),(0,l.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cv2.cvtColor()"),"\u51fd\u6570\u7528\u6765\u8fdb\u884c\u989c\u8272\u7a7a\u95f4\u8f6c\u6362\uff0c\u5e38\u7528 BGR\u2194Gray\uff0cBGR\u2194HSV\u3002"),(0,l.kt)("li",{parentName:"ul"},"HSV \u989c\u8272\u6a21\u578b\u5e38\u7528\u4e8e\u989c\u8272\u8bc6\u522b\u3002\u8981\u60f3\u77e5\u9053\u67d0\u79cd\u989c\u8272\u5728 HSV \u4e0b\u7684\u503c\uff0c\u53ef\u4ee5\u5c06\u5b83\u7684 BGR \u503c\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"cvtColor()"),"\u8f6c\u6362\u5f97\u5230\u3002")),(0,l.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5c1d\u8bd5\u5728\u89c6\u9891\u4e2d\u540c\u65f6\u63d0\u53d6\u7ea2\u8272\u3001\u84dd\u8272\u3001\u7eff\u8272\u7684\u7269\u4f53\u3002\uff08\u6548\u679c\u5982\u4e0b\uff09")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_exercise_tracking_three_colors.jpg",alt:null})),(0,l.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d8/d01/group__imgproc__color__conversions.html#ga397ae87e1288a81d2363b61574eb8cab"},"cv2.cvtColor","(",")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d2/de8/group__core__array.html#ga48af0ab51e36436c5d04340e036ce981"},"cv2.inRange","(",")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/d2/de8/group__core__array.html#ga60b4d04b251ba5eb1392c34425497e14"},"cv2.bitwise_and","(",")"))),(0,l.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/05-Changing-Colorspaces"},"\u672c\u8282\u6e90\u7801")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_colorspaces/py_colorspaces.html"},"Changing Colorspaces"))))}m.isMDXComponent=!0}}]);