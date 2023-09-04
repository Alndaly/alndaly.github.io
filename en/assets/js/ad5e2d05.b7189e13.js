"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[762],{35799:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));n(16758);const l={},r="\u756a\u5916\u7bc7\uff1a\u4ee3\u7801\u6027\u80fd\u4f18\u5316",p={unversionedId:"artificial-intelligence/opencv/start/extra-01-code-optimization",id:"artificial-intelligence/opencv/start/extra-01-code-optimization",title:"\u756a\u5916\u7bc7\uff1a\u4ee3\u7801\u6027\u80fd\u4f18\u5316",description:"\u5b66\u4e60\u5982\u4f55\u8bc4\u4f30\u548c\u4f18\u5316\u4ee3\u7801\u6027\u80fd\u3002",source:"@site/docs/artificial-intelligence/opencv/start/extra-01-code-optimization.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/extra-01-code-optimization",permalink:"/en/docs/artificial-intelligence/opencv/start/extra-01-code-optimization",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/extra-01-code-optimization.md",tags:[],version:"current",lastUpdatedAt:1693833086,formattedLastUpdatedAt:"Sep 4, 2023",frontMatter:{},sidebar:"ai",previous:{title:"\u6311\u6218\u4efb\u52a1\uff1aPyQt5 \u7f16\u5199 GUI \u754c\u9762",permalink:"/en/docs/artificial-intelligence/opencv/start/challenge-02-create-gui-with-pyqt5"},next:{title:"\u756a\u5916\u7bc7\uff1a\u65e0\u635f\u4fdd\u5b58\u548c Matplotlib",permalink:"/en/docs/artificial-intelligence/opencv/start/extra-02-high-quality-save-and-matplotlib"}},o={},c=[{value:"\u8bc4\u4f30\u4ee3\u7801\u8fd0\u884c\u65f6\u95f4",id:"\u8bc4\u4f30\u4ee3\u7801\u8fd0\u884c\u65f6\u95f4",level:2},{value:"\u4f18\u5316\u539f\u5219",id:"\u4f18\u5316\u539f\u5219",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],d={toc:c};function m(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u756a\u5916\u7bc7\u4ee3\u7801\u6027\u80fd\u4f18\u5316"},"\u756a\u5916\u7bc7\uff1a\u4ee3\u7801\u6027\u80fd\u4f18\u5316"),(0,i.kt)("p",null,"\u5b66\u4e60\u5982\u4f55\u8bc4\u4f30\u548c\u4f18\u5316\u4ee3\u7801\u6027\u80fd\u3002"),(0,i.kt)("p",null,"\u5b8c\u6210\u4e00\u9879\u4efb\u52a1\u5f88\u91cd\u8981\uff0c\u9ad8\u6548\u5730\u5b8c\u6210\u66f4\u91cd\u8981\u3002\u56fe\u50cf\u5904\u7406\u662f\u5bf9\u77e9\u9635\u7684\u64cd\u4f5c\uff0c\u6570\u636e\u91cf\u5de8\u5927\u3002\u5982\u679c\u4ee3\u7801\u5199\u7684\u4e0d\u597d\uff0c\u6027\u80fd\u5dee\u8ddd\u5c06\u5f88\u5927\uff0c\u6240\u4ee5\u8fd9\u8282\u6211\u4eec\u6765\u4e86\u89e3\u4e0b\u5982\u4f55\u8bc4\u4f30\u548c\u63d0\u5347\u4ee3\u7801\u6027\u80fd\u3002"),(0,i.kt)("h2",{id:"\u8bc4\u4f30\u4ee3\u7801\u8fd0\u884c\u65f6\u95f4"},"\u8bc4\u4f30\u4ee3\u7801\u8fd0\u884c\u65f6\u95f4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\n\nstart = cv2.getTickCount()\n# \u8fd9\u91cc\u5199\u6d4b\u8bd5\u4ee3\u7801...\nend = cv2.getTickCount()\nprint((end - start) / cv2.getTickFrequency())\n")),(0,i.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u5c31\u662f\u7528\u6765\u6d4b\u91cf\u7a0b\u5e8f\u8fd0\u884c\u65f6\u95f4\u7684\uff08\u5355\u4f4d\uff1as\uff09\uff0c\u5176\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"cv2.getTickCount()"),"\u51fd\u6570\u5f97\u5230\u7535\u8111\u542f\u52a8\u4ee5\u6765\u7684\u65f6\u949f\u5468\u671f\u6570\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"cv2.getTickFrequency()"),"\u8fd4\u56de\u4f60\u7535\u8111\u7684\u4e3b\u9891\uff0c\u524d\u540e\u76f8\u51cf\u518d\u9664\u4ee5\u4e3b\u9891\u5c31\u662f\u4f60\u4ee3\u7801\u7684\u8fd0\u884c\u65f6\u95f4\uff08\u8fd9\u6837\u89e3\u91ca\u5e76\u4e0d\u5b8c\u5168\u51c6\u786e\uff0c\u4f46\u80fd\u7406\u89e3\u5c31\u884c\uff09\u3002\u53e6\u5916\uff0c\u4e5f\u53ef\u4ee5\u7528 Python \u4e2d\u7684 time \u6a21\u5757\u8ba1\u65f6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import time\n\nstart = time.clock()\n# \u8fd9\u91cc\u5199\u6d4b\u8bd5\u4ee3\u7801...\nend = time.clock()\nprint(end - start)\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/ipython"},"IPython")," \u6216 ",(0,i.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/Jupyter"},"Jupyter Notebook")," \u5f00\u53d1\u73af\u5883\uff0c\u6027\u80fd\u5206\u6790\u5c06\u4f1a\u975e\u5e38\u65b9\u4fbf\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"http://pynash.org/2013/03/06/timing-and-profiling/"},"Timing and Profiling in IPython"))),(0,i.kt)("h2",{id:"\u4f18\u5316\u539f\u5219"},"\u4f18\u5316\u539f\u5219"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6570\u636e\u5143\u7d20\u5c11\u65f6\u7528 Python \u8bed\u6cd5\uff0c\u6570\u636e\u5143\u7d20\u591a\u65f6\u7528 Numpy\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"x = 10\nz = np.uint8([10])\n\n# \u5c1d\u8bd5\u6bd4\u8f83\u4e0b\u9762\u4e09\u53e5\u8bdd\u5404\u81ea\u7684\u8fd0\u884c\u65f6\u95f4\ny = x * x * x   # (1.6410249677846285e-06)\ny = x**3        # (2.461537451676943e-06)\ny = z * z * z   # \u6700\u6162 (3.1179474387907945e-05)\n")),(0,i.kt)("p",null,"\u6240\u4ee5 Numpy \u7684\u8fd0\u884c\u901f\u5ea6\u5e76\u4e0d\u4e00\u5b9a\u6bd4 Python \u672c\u8eab\u8bed\u6cd5\u5feb\uff0c\u5143\u7d20\u6570\u91cf\u8f83\u5c11\u65f6\uff0c\u8bf7\u7528 Python \u672c\u8eab\u683c\u5f0f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u5faa\u73af\uff0c\u5c24\u5176\u5d4c\u5957\u5faa\u73af\uff0c\u56e0\u4e3a\u6781\u5176\u6162\uff01\uff01\uff01"),(0,i.kt)("li",{parentName:"ul"},"\u4f18\u5148\u4f7f\u7528 OpenCV/Numpy \u4e2d\u5c01\u88c5\u597d\u7684\u51fd\u6570"),(0,i.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u5c06\u6570\u636e\u5411\u91cf\u5316\uff0c\u53d8\u6210 Numpy \u7684\u6570\u636e\u683c\u5f0f"),(0,i.kt)("li",{parentName:"ul"},"\u5c3d\u91cf\u907f\u514d\u6570\u7ec4\u7684\u590d\u5236\u64cd\u4f5c")),(0,i.kt)("h2",{id:"\u63a5\u53e3\u6587\u6863"},"\u63a5\u53e3\u6587\u6863"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/db/de0/group__core__utils.html#gae73f58000611a1af25dd36d496bf4487"},"cv2.getTickCount","(",")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.opencv.org/4.0.0/db/de0/group__core__utils.html#ga705441a9ef01f47acdc55d87fbe5090c"},"cv2.getTickFrequency","(",")"))),(0,i.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Extra-01-Code-Optimization"},"\u672c\u8282\u6e90\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.python.org/moin/PythonSpeed/PerformanceTips"},"Python Optimization Techniques")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://pynash.org/2013/03/06/timing-and-profiling/"},"Timing and Profiling in IPython")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.scipy-lectures.org/advanced/advanced_numpy/index.html#advanced-numpy"},"Advanced Numpy"))))}m.isMDXComponent=!0}}]);