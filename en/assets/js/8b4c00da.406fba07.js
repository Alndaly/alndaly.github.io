"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[9608],{76458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));n(16758);const l={},i="\u756a\u5916\u7bc7\uff1a\u8f6e\u5ed3\u5c42\u7ea7",c={unversionedId:"artificial-intelligence/opencv/basic/extra-10-contours-hierarchy",id:"artificial-intelligence/opencv/basic/extra-10-contours-hierarchy",title:"\u756a\u5916\u7bc7\uff1a\u8f6e\u5ed3\u5c42\u7ea7",description:"\u4e86\u89e3\u8f6e\u5ed3\u95f4\u7684\u5c42\u7ea7\u5173\u7cfb\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u6587\u672b\u5f15\u7528\u51fa\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/basic/extra-10-contours-hierarchy.md",sourceDirName:"artificial-intelligence/opencv/basic",slug:"/artificial-intelligence/opencv/basic/extra-10-contours-hierarchy",permalink:"/en/docs/artificial-intelligence/opencv/basic/extra-10-contours-hierarchy",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/basic/extra-10-contours-hierarchy.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{},sidebar:"ai",previous:{title:"\u756a\u5916\u7bc7\uff1a\u56fe\u50cf\u68af\u5ea6",permalink:"/en/docs/artificial-intelligence/opencv/basic/extra-09-image-gradients"},next:{title:"\u756a\u5916\u7bc7\uff1a\u51f8\u5305\u53ca\u66f4\u591a\u8f6e\u5ed3\u7279\u5f81",permalink:"/en/docs/artificial-intelligence/opencv/basic/extra-11-convex-hull"}},p={},o=[{value:"\u7406\u89e3\u8f6e\u5ed3\u5c42\u7ea7",id:"\u7406\u89e3\u8f6e\u5ed3\u5c42\u7ea7",level:2},{value:"OpenCV \u4e2d\u8f6e\u5ed3\u7b49\u7ea7\u7684\u8868\u793a",id:"opencv-\u4e2d\u8f6e\u5ed3\u7b49\u7ea7\u7684\u8868\u793a",level:2},{value:"\u8f6e\u5ed3\u5bfb\u627e\u65b9\u5f0f",id:"\u8f6e\u5ed3\u5bfb\u627e\u65b9\u5f0f",level:2},{value:"1. RETR_LIST",id:"1-retr_list",level:3},{value:"2. RETR_TREE",id:"2-retr_tree",level:3},{value:"3. RETR_EXTERNAL",id:"3-retr_external",level:3},{value:"4. RETR_CCOMP",id:"4-retr_ccomp",level:3},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],u={toc:o};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u756a\u5916\u7bc7\u8f6e\u5ed3\u5c42\u7ea7"},"\u756a\u5916\u7bc7\uff1a\u8f6e\u5ed3\u5c42\u7ea7"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_hierarchy.jpg",alt:null})),(0,r.kt)("p",null,"\u4e86\u89e3\u8f6e\u5ed3\u95f4\u7684\u5c42\u7ea7\u5173\u7cfb\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904",(0,r.kt)("a",{parentName:"p",href:"#%E5%BC%95%E7%94%A8"},"\u6587\u672b\u5f15\u7528\u51fa"),"\u4e0b\u8f7d\u3002"),(0,r.kt)("p",null,"\u524d\u9762\u6211\u4eec\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"cv2.findContours()"),"\u5bfb\u627e\u8f6e\u5ed3\u65f6\uff0c\u53c2\u6570 3 \u8868\u793a\u8f6e\u5ed3\u7684\u5bfb\u627e\u65b9\u5f0f","(","RetrievalModes",")","\uff0c\u5f53\u65f6\u6211\u4eec\u4f20\u5165\u7684\u662f cv2.RETR_TREE\uff0c\u5b83\u8868\u793a\u4ec0\u4e48\u610f\u601d\u5462\uff1f\u53e6\u5916\uff0c\u51fd\u6570\u8fd4\u56de\u503c hierarchy \u6709\u4ec0\u4e48\u7528\u9014\u5462\uff1f\u4e0b\u9762\u6211\u4eec\u5c31\u6765\u7814\u7a76\u4e0b\u8fd9\u4e24\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"\u7406\u89e3\u8f6e\u5ed3\u5c42\u7ea7"},"\u7406\u89e3\u8f6e\u5ed3\u5c42\u7ea7"),(0,r.kt)("p",null,"\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u56fe\u50cf\u4e2d\u7684\u5f62\u72b6\u4e4b\u95f4\u662f\u6709\u5173\u8054\u7684\uff0c\u6bd4\u5982\u8bf4\u4e0b\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_understand_hierarchy.jpg",alt:null})),(0,r.kt)("p",null,"\u56fe\u4e2d\u603b\u5171\u6709 8 \u6761\u8f6e\u5ed3\uff0c2 \u548c 2a \u5206\u522b\u8868\u793a\u5916\u5c42\u548c\u91cc\u5c42\u7684\u8f6e\u5ed3\uff0c3 \u548c 3a \u4e5f\u662f\u4e00\u6837\u3002\u4ece\u56fe\u4e2d\u770b\u5f97\u51fa\u6765\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f6e\u5ed3 0/1/2 \u662f\u6700\u5916\u5c42\u7684\u8f6e\u5ed3\uff0c\u6211\u4eec\u53ef\u4ee5\u8bf4\u5b83\u4eec\u5904\u4e8e\u540c\u4e00\u8f6e\u5ed3\u7b49\u7ea7\uff1a0 \u7ea7"),(0,r.kt)("li",{parentName:"ul"},"\u8f6e\u5ed3 2a \u662f\u8f6e\u5ed3 2 \u7684\u5b50\u8f6e\u5ed3\uff0c\u53cd\u8fc7\u6765\u8bf4 2 \u662f 2a \u7684\u7236\u8f6e\u5ed3\uff0c\u8f6e\u5ed3 2a \u7b97\u4e00\u4e2a\u7b49\u7ea7\uff1a1 \u7ea7"),(0,r.kt)("li",{parentName:"ul"},"\u540c\u6837 3 \u662f 2a \u7684\u5b50\u8f6e\u5ed3\uff0c\u8f6e\u5ed3 3 \u5904\u4e8e\u4e00\u4e2a\u7b49\u7ea7\uff1a2 \u7ea7"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u7684\uff0c3a \u662f 3 \u7684\u5b50\u8f6e\u5ed3\uff0c\u7b49\u7b49\u2026\u2026\u2026\u2026")),(0,r.kt)("p",null,"\u8fd9\u91cc\u9762 OpenCV \u5173\u6ce8\u7684\u5c31\u662f\u4e24\u4e2a\u6982\u5ff5\uff1a\u540c\u4e00\u8f6e\u5ed3\u7b49\u7ea7\u548c\u8f6e\u5ed3\u95f4\u7684\u5b50\u5c5e\u5173\u7cfb\u3002"),(0,r.kt)("h2",{id:"opencv-\u4e2d\u8f6e\u5ed3\u7b49\u7ea7\u7684\u8868\u793a"},"OpenCV \u4e2d\u8f6e\u5ed3\u7b49\u7ea7\u7684\u8868\u793a"),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u6253\u5370\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"cv2.findContours()"),"\u51fd\u6570\u7684\u8fd4\u56de\u503c hierarchy\uff0c\u4f1a\u53d1\u73b0\u5b83\u662f\u4e00\u4e2a\u5305\u542b 4 \u4e2a\u503c\u7684\u6570\u7ec4\uff1a",(0,r.kt)("strong",{parentName:"p"},"[","Next, Previous, First Child, Parent","]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Next\uff1a\u4e0e\u5f53\u524d\u8f6e\u5ed3\u5904\u4e8e\u540c\u4e00\u5c42\u7ea7\u7684\u4e0b\u4e00\u6761\u8f6e\u5ed3"))),(0,r.kt)("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u524d\u9762\u56fe\u4e2d\u8ddf 0 \u5904\u4e8e\u540c\u4e00\u5c42\u7ea7\u7684\u4e0b\u4e00\u6761\u8f6e\u5ed3\u662f 1\uff0c\u6240\u4ee5 Next=1\uff1b\u540c\u7406\uff0c\u5bf9\u8f6e\u5ed3 1 \u6765\u8bf4\uff0cNext=2\uff1b\u90a3\u4e48\u5bf9\u4e8e\u8f6e\u5ed3 2 \u5462\uff1f\u6ca1\u6709\u4e0e\u5b83\u540c\u4e00\u5c42\u7ea7\u7684\u4e0b\u4e00\u6761\u8f6e\u5ed3\u4e86\uff0c\u6b64\u65f6 Next=-1\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous\uff1a\u4e0e\u5f53\u524d\u8f6e\u5ed3\u5904\u4e8e\u540c\u4e00\u5c42\u7ea7\u7684\u4e0a\u4e00\u6761\u8f6e\u5ed3"))),(0,r.kt)("p",null,"\u8ddf\u524d\u9762\u4e00\u6837\uff0c\u5bf9\u4e8e\u8f6e\u5ed3 1 \u6765\u8bf4\uff0cPrevious=0\uff1b\u5bf9\u4e8e\u8f6e\u5ed3 2\uff0cPrevious=1\uff1b\u5bf9\u4e8e\u8f6e\u5ed3 1\uff0c\u6ca1\u6709\u4e0a\u4e00\u6761\u8f6e\u5ed3\u4e86\uff0c\u6240\u4ee5 Previous=-1\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"First Child\uff1a\u5f53\u524d\u8f6e\u5ed3\u7684\u7b2c\u4e00\u6761\u5b50\u8f6e\u5ed3"))),(0,r.kt)("p",null,"\u6bd4\u5982\u5bf9\u4e8e\u8f6e\u5ed3 2\uff0c\u7b2c\u4e00\u6761\u5b50\u8f6e\u5ed3\u5c31\u662f\u8f6e\u5ed3 2a\uff0c\u6240\u4ee5 First Child=2a\uff1b\u5bf9\u8f6e\u5ed3 3a\uff0cFirst Child=4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Parent\uff1a\u5f53\u524d\u8f6e\u5ed3\u7684\u7236\u8f6e\u5ed3"))),(0,r.kt)("p",null,"\u6bd4\u5982 2a \u7684\u7236\u8f6e\u5ed3\u662f 2\uff0cParent=2\uff1b\u8f6e\u5ed3 2 \u6ca1\u6709\u7236\u8f6e\u5ed3\uff0c\u6240\u4ee5 Parent=-1\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u901a\u8fc7\u4ee3\u7801\u9a8c\u8bc1\u4e00\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\n\n# 1.\u8bfb\u5165\u56fe\u7247\nimg = cv2.imread('hierarchy.jpg')\nimg_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n_, thresh = cv2.threshold(img_gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)\n\n# 2.\u5bfb\u627e\u8f6e\u5ed3\nimage, contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, 2)\n\n# 3.\u7ed8\u5236\u8f6e\u5ed3\nprint(len(contours),hierarchy)  # 8 \u6761\ncv2.drawContours(img, contours, -1, (0, 0, 255), 2)\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"OpenCV \u4e2d\u627e\u5230\u7684\u8f6e\u5ed3\u5e8f\u53f7\u8ddf\u524d\u9762\u8bb2\u7684\u4e0d\u540c\u5662\uff0c\u5982\u4e0b\u56fe\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_hierarchy_RETR_TREE.jpg",alt:null})),(0,r.kt)("p",null,"\u73b0\u5728\u65e2\u7136\u6211\u4eec\u4e86\u89e3\u4e86\u5c42\u7ea7\u7684\u6982\u5ff5\uff0c\u90a3\u4e48\u7c7b\u4f3c cv2.RETR_TREE \u7684\u8f6e\u5ed3\u5bfb\u627e\u65b9\u5f0f\u53c8\u662f\u5565\u610f\u601d\u5462\uff1f"),(0,r.kt)("h2",{id:"\u8f6e\u5ed3\u5bfb\u627e\u65b9\u5f0f"},"\u8f6e\u5ed3\u5bfb\u627e\u65b9\u5f0f"),(0,r.kt)("p",null,"OpenCV \u4e2d\u6709\u56db\u79cd\u8f6e\u5ed3\u5bfb\u627e\u65b9\u5f0f",(0,r.kt)("a",{parentName:"p",href:"https://docs.opencv.org/3.3.1/d3/dc0/group__imgproc__shape.html#ga819779b9857cc2f8601e6526a3a5bc71"},"RetrievalModes"),"\uff0c\u4e0b\u9762\u5206\u522b\u6765\u770b\u4e0b\uff1a"),(0,r.kt)("h3",{id:"1-retr_list"},"1. RETR_LIST"),(0,r.kt)("p",null,"\u8fd9\u662f\u6700\u7b80\u5355\u7684\u4e00\u79cd\u5bfb\u627e\u65b9\u5f0f\uff0c\u5b83\u4e0d\u5efa\u7acb\u8f6e\u5ed3\u95f4\u7684\u5b50\u5c5e\u5173\u7cfb\uff0c\u4e5f\u5c31\u662f\u6240\u6709\u8f6e\u5ed3\u90fd\u5c5e\u4e8e\u540c\u4e00\u5c42\u7ea7\u3002\u8fd9\u6837\uff0chierarchy \u4e2d\u7684\u540e\u4e24\u4e2a\u503c","[","First Child, Parent","]"," \u90fd\u4e3a-1\u3002\u6bd4\u5982\u540c\u6837\u7684\u56fe\uff0c\u6211\u4eec\u4f7f\u7528 cv2.RETR_LIST \u6765\u5bfb\u627e\u8f6e\u5ed3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"_, _, hierarchy = cv2.findContours(thresh, cv2.RETR_LIST, 2)\nprint(hierarchy)\n# \u7ed3\u679c\u5982\u4e0b\n[[[ 1 -1 -1 -1]\n  [ 2  0 -1 -1]\n  [ 3  1 -1 -1]\n  [ 4  2 -1 -1]\n  [ 5  3 -1 -1]\n  [ 6  4 -1 -1]\n  [ 7  5 -1 -1]\n  [-1  6 -1 -1]]]\n")),(0,r.kt)("p",null,"\u56e0\u4e3a\u6ca1\u6709\u4ece\u5c5e\u5173\u7cfb\uff0c\u6240\u4ee5\u8f6e\u5ed3 0 \u7684\u4e0b\u4e00\u6761\u662f 1\uff0c1 \u7684\u4e0b\u4e00\u6761\u662f 2\u2026\u2026"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4e0d\u9700\u8981\u8f6e\u5ed3\u5c42\u7ea7\u4fe1\u606f\u7684\u8bdd\uff0ccv2.RETR_LIST \u66f4\u63a8\u8350\u4f7f\u7528\uff0c\u56e0\u4e3a\u6027\u80fd\u66f4\u597d\u3002")),(0,r.kt)("h3",{id:"2-retr_tree"},"2. RETR_TREE"),(0,r.kt)("p",null,"cv2.RETR_TREE \u5c31\u662f\u4e4b\u524d\u6211\u4eec\u4e00\u76f4\u5728\u4f7f\u7528\u7684\u65b9\u5f0f\uff0c\u5b83\u4f1a\u5b8c\u6574\u5efa\u7acb\u8f6e\u5ed3\u7684\u5c42\u7ea7\u4ece\u5c5e\u5173\u7cfb\uff0c\u524d\u9762\u5df2\u7ecf\u8be6\u7ec6\u8bf4\u660e\u8fc7\u4e86\u3002"),(0,r.kt)("h3",{id:"3-retr_external"},"3. RETR_EXTERNAL"),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u53ea\u5bfb\u627e\u6700\u9ad8\u5c42\u7ea7\u7684\u8f6e\u5ed3\uff0c\u4e5f\u5c31\u662f\u5b83\u53ea\u4f1a\u627e\u5230\u524d\u9762\u6211\u4eec\u6240\u8bf4\u7684 3 \u6761 0 \u7ea7\u8f6e\u5ed3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"_, contours, hierarchy = cv2.findContours(thresh, cv2.RETR_EXTERNAL, 2)\nprint(len(contours), hierarchy, sep='\\n')\n# \u7ed3\u679c\u5982\u4e0b\n3\n[[[ 1 -1 -1 -1]\n  [ 2  0 -1 -1]\n  [-1  1 -1 -1]]]\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_hierarchy_RETR_EXTERNAL.jpg",alt:null})),(0,r.kt)("h3",{id:"4-retr_ccomp"},"4. RETR_CCOMP"),(0,r.kt)("p",null,"\u76f8\u6bd4\u4e4b\u4e0b cv2.RETR_CCOMP \u6bd4\u8f83\u96be\u7406\u89e3\uff0c\u4f46\u5176\u5b9e\u4e5f\u5f88\u7b80\u5355\uff1a\u5b83\u628a\u6240\u6709\u7684\u8f6e\u5ed3\u53ea\u5206\u4e3a 2 \u4e2a\u5c42\u7ea7\uff0c\u4e0d\u662f\u5916\u5c42\u7684\u5c31\u662f\u91cc\u5c42\u7684\u3002\u7ed3\u5408\u4ee3\u7801\u548c\u56fe\u7247\uff0c\u6211\u4eec\u6765\u7406\u89e3\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"_, contours, hierarchy = cv2.findContours(thresh, cv2.RETR_CCOMP, 2)\nprint(hierarchy)\n# \u7ed3\u679c\u5982\u4e0b\n[[[ 1 -1 -1 -1]\n  [ 2  0 -1 -1]\n  [ 4  1  3 -1]\n  [-1 -1 -1  2]\n  [ 6  2  5 -1]\n  [-1 -1 -1  4]\n  [ 7  4 -1 -1]\n  [-1  6 -1 -1]]]\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_hierarchy_RETR_CCOMP.jpg",alt:null})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u8fd9\u4e2a\u53c2\u6570\u627e\u5230\u7684\u8f6e\u5ed3\u5e8f\u53f7\u4e0e\u4e4b\u524d\u4e0d\u540c\u3002")),(0,r.kt)("p",null,"\u56fe\u4e2d\u62ec\u53f7\u91cc\u9762 1 \u4ee3\u8868\u5916\u5c42\u8f6e\u5ed3\uff0c2 \u4ee3\u8868\u91cc\u5c42\u8f6e\u5ed3\u3002\u6bd4\u5982\u8bf4\u5bf9\u4e8e\u8f6e\u5ed3 2\uff0cNext \u5c31\u662f 4\uff0cPrevious \u662f 1\uff0c\u5b83\u6709\u91cc\u5c42\u7684\u8f6e\u5ed3 3\uff0c\u6240\u4ee5 First Child=3\uff0c\u4f46\u56e0\u4e3a\u53ea\u6709\u4e24\u4e2a\u5c42\u7ea7\uff0c\u5b83\u672c\u8eab\u5c31\u662f\u5916\u5c42\u8f6e\u5ed3\uff0c\u6240\u4ee5 Parent=-1\u3002\u5927\u5bb6\u53ef\u4ee5\u9488\u5bf9\u5176\u4ed6\u7684\u8f6e\u5ed3\u81ea\u5df1\u9a8c\u8bc1\u4e00\u4e0b\u3002"),(0,r.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5982\u4e0b\u56fe\uff0c\u627e\u5230 3 \u4e2a\u5706\u73af\u7684\u5185\u73af\uff0c\u7136\u540e\u586b\u5145\u6210","(","180,215,215",")"," \u8fd9\u79cd\u989c\u8272\uff1a")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_hierarchy_fill_holes.jpg",alt:null})),(0,r.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Extra-10-Contours-Hierarchy"},"\u672c\u8282\u6e90\u7801")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contours_hierarchy/py_contours_hierarchy.html#contours-hierarchy"},"Contours Hierarchy"))))}s.isMDXComponent=!0}}]);