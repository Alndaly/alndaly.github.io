"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7002],{16979:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));a(16758);const o={},i="01: \u7b80\u4ecb\u4e0e\u5b89\u88c5",p={unversionedId:"artificial-intelligence/opencv/start/introduction-and-installation",id:"artificial-intelligence/opencv/start/introduction-and-installation",title:"01: \u7b80\u4ecb\u4e0e\u5b89\u88c5",description:"\u76f8\u4fe1\u5927\u90e8\u5206\u4eba\u77e5\u9053\u7684 OpenCV \u90fd\u662f\u7528 C++ \u6765\u5f00\u53d1\u7684\uff0c\u90a3\u4e3a\u4ec0\u4e48\u6211\u63a8\u8350\u4f7f\u7528 Python \u5462\uff1f",source:"@site/docs/artificial-intelligence/opencv/start/01-introduction-and-installation.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/introduction-and-installation",permalink:"/docs/artificial-intelligence/opencv/start/introduction-and-installation",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/artificial-intelligence/opencv/start/01-introduction-and-installation.md",tags:[],version:"current",lastUpdatedAt:1670683071,formattedLastUpdatedAt:"2022\u5e7412\u670810\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"ai",previous:{title:"\u5165\u95e8\u7bc7",permalink:"/docs/category/\u5165\u95e8\u7bc7"},next:{title:"02: \u57fa\u672c\u5143\u7d20 - \u56fe\u7247",permalink:"/docs/artificial-intelligence/opencv/start/basic-element-image"}},r={},c=[{value:"Python \u7167\u6837\u5feb\uff01",id:"python-\u7167\u6837\u5feb",level:2},{value:"\u4eba\u5de5\u667a\u80fd\u6d6a\u6f6e",id:"\u4eba\u5de5\u667a\u80fd\u6d6a\u6f6e",level:2},{value:"\u4eba\u751f\u82e6\u77ed\uff0c\u6211\u7528 Python",id:"\u4eba\u751f\u82e6\u77ed\u6211\u7528-python",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"opencv-python",id:"opencv-python",level:3},{value:"Anaconda \u5b89\u88c5",id:"anaconda-\u5b89\u88c5",level:3},{value:"\u5b89\u88c5\u6d4b\u8bd5",id:"\u5b89\u88c5\u6d4b\u8bd5",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2},{value:"\u7f51\u7edc\u8d44\u6599",id:"\u7f51\u7edc\u8d44\u6599",level:3},{value:"\u4e66\u7c4d",id:"\u4e66\u7c4d",level:3},{value:"\u540d\u6821\u89c6\u89c9\u7814\u7a76\u6240/\u8bfe\u7a0b",id:"\u540d\u6821\u89c6\u89c9\u7814\u7a76\u6240\u8bfe\u7a0b",level:3}],h={toc:c};function s(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"01-\u7b80\u4ecb\u4e0e\u5b89\u88c5"},"01: \u7b80\u4ecb\u4e0e\u5b89\u88c5"),(0,l.kt)("p",null,"\u76f8\u4fe1\u5927\u90e8\u5206\u4eba\u77e5\u9053\u7684 OpenCV \u90fd\u662f\u7528 C++ \u6765\u5f00\u53d1\u7684\uff0c\u90a3\u4e3a\u4ec0\u4e48\u6211\u63a8\u8350\u4f7f\u7528 Python \u5462\uff1f"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u672c\u6559\u7a0b\u57fa\u7840\u5185\u5bb9\u6765\u81ea ",(0,l.kt)("a",{parentName:"p",href:"https://docs.opencv.org/"},"OpenCV \u5b98\u65b9\u82f1\u6587\u6559\u7a0b"),"\uff0c\u6211\u6309\u7167\u4f7f\u7528\u5ea6\u548c\u96be\u6613\u5ea6\u7ffb\u8bd1\uff0c\u91cd\u65b0\u7f16\u5199\u4e86\u5927\u91cf\u539f\u521b\u5185\u5bb9\uff0c\u5c06\u4e0d\u5e38\u7528\u548c\u8f83\u96be\u7684\u90e8\u5206\u5199\u6210\u756a\u5916\u7bc7\uff0c\u6d45\u663e\u6613\u61c2\uff0c\u5f88 easy \u7684\u8fa3\u3002\u6bcf\u8282\u7684\u6e90\u7801\u3001\u56fe\u7247\u548c\u7ec3\u4e60\u9898\u7b54\u6848\u5747\u53ef\u5728\u5f15\u7528\u5904\u627e\u5230\u5662","(","\u2299o\u2299",")")),(0,l.kt)("h2",{id:"python-\u7167\u6837\u5feb"},"Python \u7167\u6837\u5feb\uff01"),(0,l.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u867d\u7136 Python \u8bed\u6cd5\u7b80\u6d01\u3001\u7f16\u5199\u9ad8\u6548\uff0c\u4f46\u76f8\u6bd4 C/C++\u8fd0\u884c\u6162\u5f88\u591a\u3002\u7136\u800c Python \u8fd8\u6709\u4e2a\u91cd\u8981\u7684\u7279\u6027\uff1a\u5b83\u662f\u4e00\u95e8\u80f6\u6c34\u8bed\u8a00\uff01Python \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u6269\u5c55 C/C++\u3002OpenCV-Python \u5c31\u662f\u7528 Python \u5305\u88c5\u4e86 C++ \u7684\u5b9e\u73b0\uff0c\u80cc\u540e\u5b9e\u9645\u5c31\u662f C++ \u7684\u4ee3\u7801\u5728\u8dd1\uff0c\u8fd0\u884c\u901f\u5ea6\u975e\u5e38\u63a5\u8fd1\u539f\u751f\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u6211\u5206\u522b\u7528 Python \u548c C++\u5b9e\u73b0\u8bfb\u5165\u56fe\u7247\u548c\u8c03\u6574\u56fe\u7247\u7684\u4eae\u5ea6\u5bf9\u6bd4\u5ea6\uff0c\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_python_vs_cplus_speed.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u770b\u5230\u67d0\u4e9b\u60c5\u51b5\u4e0b Python \u7684\u8fd0\u884c\u901f\u5ea6\u751a\u81f3\u597d\u4e8e C++\uff0c\u4ee3\u7801\u884c\u6570\u4e5f\u76f4\u63a5\u5c11\u4e00\u534a\u591a\uff01")),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u56fe\u50cf\u662f\u77e9\u9635\u6570\u636e\uff0cOpenCV-Python \u539f\u751f\u652f\u6301 ",(0,l.kt)("a",{parentName:"p",href:"https://baike.baidu.com/item/numpy"},"Numpy"),"\uff0c\u76f8\u5f53\u4e8e Python \u4e2d\u7684 Matlab\uff0c\u4e3a\u77e9\u9635\u8fd0\u7b97\u3001\u79d1\u5b66\u8ba1\u7b97\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\u6027\u3002"),(0,l.kt)("h2",{id:"\u4eba\u5de5\u667a\u80fd\u6d6a\u6f6e"},"\u4eba\u5de5\u667a\u80fd\u6d6a\u6f6e"),(0,l.kt)("p",null,"\u8fd1\u4e9b\u5e74\uff0c\u4eba\u5de5\u667a\u80fd AI \u76f8\u5173\u6280\u672f\u7684\u5feb\u901f\u53d1\u5c55\u5927\u5bb6\u6709\u76ee\u5171\u7779\u3002\u5728\u7f16\u7a0b\u8bed\u8a00\u65b9\u9762\uff0c\u66f4\u591a\u4eba\u5e0c\u671b\u7684\u662f\u5177\u5907\u9ad8\u6548\u5f00\u53d1\u6548\u7387\u3001\u8de8\u5e73\u53f0\u3001\u9ad8\u5ea6\u6269\u5c55\u6027\u7684\u8bed\u8a00\uff0c\u5c24\u5176\u662f\u4e00\u4e9b AI \u5de8\u5934\u4f18\u5148\u63a8\u51fa\u652f\u6301 Python \u8bed\u8a00\u7684\u6df1\u5ea6\u5b66\u4e60\u6846\u67b6\uff0c\u5982 Facebook \u7684",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/"},"PyTorch"),"\u3001Google \u7684",(0,l.kt)("a",{parentName:"p",href:"https://tensorflow.google.cn/"},"Tensorflow"),"\u7b49\uff0c\u53ef\u4ee5\u8bf4 Python \u662f\u540d\u526f\u5176\u5b9e\u7684\u201c\u7f51\u7ea2\u8bed\u8a00\u201d\u4e86\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_ai_ml_dl2.jpg",alt:null})),(0,l.kt)("p",null,"\u4ece",(0,l.kt)("a",{parentName:"p",href:"https://www.tiobe.com/tiobe-index/"},"TIOBE \u7f16\u7a0b\u8bed\u8a00\u6392\u884c\u699c"),"\u4e5f\u53ef\u4ee5\u770b\u5230\uff0cPython \u53d1\u5c55\u8fc5\u731b\uff0c\u5df2\u7ecf\u903c\u8fd1 C++\u7684\u4efd\u989d\u3002\u8fd9\u4e2a\u6392\u884c\u699c\u6bcf\u6708\u66f4\u65b0\uff0c\u5c31\u4e0d\u622a\u56fe\u4e86\uff0c\u6211\u7f16\u5199\u65f6\u7684 TOP5\uff1aJava/C/C++/Python/C","#","\u3002"),(0,l.kt)("h2",{id:"\u4eba\u751f\u82e6\u77ed\u6211\u7528-python"},"\u4eba\u751f\u82e6\u77ed\uff0c\u6211\u7528 Python"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u641e\u79d1\u7814\u7528\uff0c\u679c\u65ad\u653e\u5f03 C++\uff08Matlab\uff1f\u51fa\u95e8\u5de6\u62d0\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u662f\u5feb\u901f\u539f\u578b\u5f00\u53d1\uff0c\u9a8c\u8bc1\u65b9\u6848\uff0c\u679c\u65ad\u653e\u5f03 C++"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u61d2\u7684\u914d\u7f6e OpenCV \u73af\u5883\uff0c\u679c\u65ad\u653e\u5f03 C++"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684\u7a0b\u5e8f\u662f\u5728\u652f\u6301 Python \u7684\u8f83\u9ad8\u786c\u4ef6\u73af\u5883\u4e0b\u8fd0\u884c\uff0c\u679c\u65ad\u653e\u5f03 C++"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u62c5\u5fc3 Python \u5199\u4e0d\u4e86\u754c\u9762\uff0c\u90a3\u662f\u4f60\u7684\u95ee\u9898 o_o ...."),(0,l.kt)("li",{parentName:"ul"},"\u9664\u975e\u4f60\u7684\u7a0b\u5e8f\u662f MFC \u6216\u5df2\u7ecf\u7528 C++\u7f16\u5199\u5176\u4ed6\u6a21\u5757\u6216\u662f\u5d4c\u5165\u5f0f\u8bbe\u5907\uff0c\u90a3\u5c31\u7528 C++\u5427")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'"\u4eba\u751f\u82e6\u77ed\uff0c\u6211\u7528 Python\uff01\uff01\uff01"')),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u672c\u6559\u7a0b\u7f16\u5199\u65f6\u4f7f\u7528\u7684\u76f8\u5173\u7248\u672c\u662f\uff1aOpenCV 4.x\uff0cPython 3.x\u3002")),(0,l.kt)("h3",{id:"opencv-python"},"opencv-python"),(0,l.kt)("p",null,"\u53ea\u9700\u7ec8\u7aef\u4e0b\u7684\u4e00\u6761\u6307\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install opencv-python\n")),(0,l.kt)("p",null,"pip \u662f Python \u7684\u5305\u7ba1\u7406\u5668\uff0c\u5982\u679c\u4f60\u8fd8\u6ca1\u5b89\u88c5 Python\uff0c\u5f3a\u70c8\u63a8\u8350\u5b89\u88c5",(0,l.kt)("a",{parentName:"p",href:"https://www.anaconda.com/download/"},"Anaconda"),"\uff0c\u5b83\u5305\u542b\u4e86\u5927\u91cf\u7684\u79d1\u5b66\u8ba1\u7b97\u5305\uff0c\u4e0d\u7528\u540e\u671f\u4e00\u4e2a\u4e2a\u5b89\u88c5\u3002"),(0,l.kt)("h3",{id:"anaconda-\u5b89\u88c5"},"Anaconda \u5b89\u88c5"),(0,l.kt)("p",null,"\u8fdb\u5165 Anaconda",(0,l.kt)("a",{parentName:"p",href:"https://www.anaconda.com/download/"},"\u5b98\u7f51"),"\uff0c\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684\u5b89\u88c5\u6587\u4ef6\uff0c\u901f\u5ea6\u6bd4\u8f83\u6162\u7684\u8bdd\uff0c\u53ef\u4ee5\u53bb",(0,l.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/"},"\u6e05\u534e\u5f00\u6e90\u955c\u50cf\u7ad9"),"\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows \u7248\u662f exe \u6587\u4ef6\uff0c\u53cc\u51fb\u76f4\u63a5\u5b89\u88c5\uff0c\u5b89\u88c5\u65f6\u8bb0\u5f97\u52fe\u9009 ",(0,l.kt)("inlineCode",{parentName:"li"},"Add Anaconda to my PATH environment variable"),"\uff0c\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\u3002"),(0,l.kt)("li",{parentName:"ul"},"Linux \u7248\u662f sh \u6587\u4ef6\uff0c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"bash Anaconda3-xx.sh"),"\uff0cLinux \u7248\u4e5f\u4f1a\u63d0\u793a\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\uff0c\u8bb0\u5f97\u8f93 yes \u5c31\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"MAC \u7248\u662f pkg \u6587\u4ef6\uff0c\u540c\u6837\u76f4\u63a5\u53cc\u51fb\u5b89\u88c5\u5373\u53ef\u3002")),(0,l.kt)("h3",{id:"\u5b89\u88c5\u6d4b\u8bd5"},"\u5b89\u88c5\u6d4b\u8bd5"),(0,l.kt)("p",null,"Python \u7684\u7248\u672c\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"python --version"),"\u6765\u67e5\u770b\u3002\u5bf9\u4e8e OpenCV\uff0c\u6253\u5f00 Python \u7684\u5f00\u53d1\u73af\u5883\uff0c\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"import cv2"),"\uff0c\u8fd0\u884c\u6ca1\u6709\u62a5\u9519\u8bf4\u660e\u4e00\u5207\u6b63\u5e38\u3002\u8981\u67e5\u770b OpenCV \u7684\u7248\u672c\uff0c\u53ef\u4ee5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"print(cv2.__version__)\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7f16\u8f91\u5668\u6211\u4e60\u60ef\u7528 ",(0,l.kt)("a",{parentName:"p",href:"http://code.visualstudio.com/"},"Visual Studio Code"),"\uff0c\u4e5f\u53ef\u4ee5\u7528 ",(0,l.kt)("a",{parentName:"p",href:"http://www.jetbrains.com/pycharm/"},"PyCharm"),"/",(0,l.kt)("a",{parentName:"p",href:"https://atom.io/"},"Atom"),"/Jupyter Notebook","(","Anaconda \u81ea\u5e26",")","\u3002")),(0,l.kt)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"pip \u8bc6\u522b\u4e0d\u4e86\uff1apip \u7684\u76ee\u5f55\u6ca1\u6709\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u6dfb\u52a0\u5230\u7528\u6237","(","\u6216\u7cfb\u7edf",")"," \u53d8\u91cf\u7684 path \u4e2d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u901f\u5ea6\u5f88\u6162\uff1a\u53ef\u5230",(0,l.kt)("a",{parentName:"li",href:"https://pypi.org/search/?q=opencv-python"},"\u6b64\u5904"),"\u4e0b\u8f7d\u79bb\u7ebf\u7248\uff0c\u5b8c\u6210\u540e\u5728\u7ec8\u7aef\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"pip install \u6587\u4ef6\u540d"),"\u5b89\u88c5\u3002")),(0,l.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/01-Introduction-and-Installation"},"\u672c\u8282\u6e90\u7801"))),(0,l.kt)("h3",{id:"\u7f51\u7edc\u8d44\u6599"},"\u7f51\u7edc\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.opencv.org/"},"OpenCV Docs \u5b98\u65b9\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/opencv/opencv"},"OpenCV \u6e90\u7801")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html"},"\u5b98\u65b9\u82f1\u6587\u6559\u7a0b\uff1aOpenCV-Python Tutorials")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.learnopencv.com"},"LearnOpenCV"),"\u3001",(0,l.kt)("a",{parentName:"li",href:"https://github.com/spmallick/learnopencv"},"LearnOpenCV Github")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.opencv.org.cn/opencvdoc/2.3.2/html/doc/tutorials/tutorials.html"},"OpenCV \u4e2d\u6587\u6559\u7a0b"))),(0,l.kt)("h3",{id:"\u4e66\u7c4d"},"\u4e66\u7c4d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://programmingcomputervision.com/"},"Programming Computer Vision with Python"),"\u3001",(0,l.kt)("a",{parentName:"li",href:"https://www.amazon.cn/dp/B00L3Y3NEM/ref=sr_1_1?ie=UTF8&qid=1543929834&sr=8-1&keywords=Python+%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A7%86%E8%A7%89"},"\u4e2d\u6587\u4e66")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.pyimagesearch.com/practical-python-opencv/"},"Practical Python and OpenCV"))),(0,l.kt)("h3",{id:"\u540d\u6821\u89c6\u89c9\u7814\u7a76\u6240\u8bfe\u7a0b"},"\u540d\u6821\u89c6\u89c9\u7814\u7a76\u6240/\u8bfe\u7a0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://graphics.cs.cmu.edu/"},"\u5361\u5185\u57fa\u6885\u9686\u5927\u5b66")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cs.toronto.edu/~guerzhoy/320/"},"\u591a\u4f26\u591a\u5927\u5b66"))))}s.isMDXComponent=!0}}]);