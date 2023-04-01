"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3472],{8149:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>N,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var n=t(87462),m=(t(67294),t(3905));t(16758);const s={},p="\u6311\u6218\u4efb\u52a1\uff1a\u753b\u52a8\u6001\u65f6\u949f",r={unversionedId:"artificial-intelligence/opencv/start/challenge-01-draw-dynamic-clock",id:"artificial-intelligence/opencv/start/challenge-01-draw-dynamic-clock",title:"\u6311\u6218\u4efb\u52a1\uff1a\u753b\u52a8\u6001\u65f6\u949f",description:"\u6311\u6218\u4efb\u52a1\uff1a\u4f7f\u7528 OpenCV \u7ed8\u5236\u4e00\u4e2a\u968f\u7cfb\u7edf\u65f6\u95f4\u52a8\u6001\u53d8\u5316\u7684\u65f6\u949f\u3002",source:"@site/docs/artificial-intelligence/opencv/start/challenge-01-draw-dynamic-clock.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/challenge-01-draw-dynamic-clock",permalink:"/en/docs/artificial-intelligence/opencv/start/challenge-01-draw-dynamic-clock",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/challenge-01-draw-dynamic-clock.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{},sidebar:"ai",previous:{title:"08: \u7ed8\u56fe\u529f\u80fd",permalink:"/en/docs/artificial-intelligence/opencv/start/drawing-function"},next:{title:"\u6311\u6218\u4efb\u52a1\uff1aPyQt5 \u7f16\u5199 GUI \u754c\u9762",permalink:"/en/docs/artificial-intelligence/opencv/start/challenge-02-create-gui-with-pyqt5"}},l={},i=[{value:"\u6311\u6218\u5185\u5bb9",id:"\u6311\u6218\u5185\u5bb9",level:2},{value:"\u6311\u6218\u89e3\u7b54",id:"\u6311\u6218\u89e3\u7b54",level:2},{value:"\u65b9\u6848",id:"\u65b9\u6848",level:3},{value:"\u7ed8\u5236\u8868\u76d8",id:"\u7ed8\u5236\u8868\u76d8",level:3},{value:"\u89d2\u5ea6\u6362\u7b97",id:"\u89d2\u5ea6\u6362\u7b97",level:3},{value:"\u540c\u6b65\u65f6\u95f4",id:"\u540c\u6b65\u65f6\u95f4",level:3},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],c={toc:i};function N(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"\u6311\u6218\u4efb\u52a1\u753b\u52a8\u6001\u65f6\u949f"},"\u6311\u6218\u4efb\u52a1\uff1a\u753b\u52a8\u6001\u65f6\u949f"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_draw_clock_dynamic_sample.gif",alt:null})),(0,m.kt)("p",null,"\u6311\u6218\u4efb\u52a1\uff1a\u4f7f\u7528 OpenCV \u7ed8\u5236\u4e00\u4e2a\u968f\u7cfb\u7edf\u65f6\u95f4\u52a8\u6001\u53d8\u5316\u7684\u65f6\u949f\u3002"),(0,m.kt)("h2",{id:"\u6311\u6218\u5185\u5bb9"},"\u6311\u6218\u5185\u5bb9"),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},(0,m.kt)("strong",{parentName:"p"},"\u5b8c\u6210\u5982\u4e0b\u56fe\u6240\u5c55\u793a\u7684\u52a8\u6001\u65f6\u949f\uff0c\u65f6\u949f\u9700\u968f\u7cfb\u7edf\u65f6\u95f4\u53d8\u5316\uff0c\u4e2d\u95f4\u663e\u793a\u5f53\u524d\u65e5\u671f\u3002"))),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_draw_clock_dynamic_sample.gif",alt:null})),(0,m.kt)("p",null,"\u5176\u5b9e\u672c\u6b21\u4efb\u52a1\u6d89\u53ca\u7684 OpenCV \u77e5\u8bc6\u5e76\u4e0d\u591a\uff0c\u4f46\u6709\u52a9\u4e8e\u63d0\u5347\u5927\u5bb6\u7684\u7f16\u7a0b\u5b9e\u8df5\u80fd\u529b\u3002"),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"\u6311\u6218\u9898\u4e0d\u4f1a\u505a\u4e5f\u6728\u6709\u5173\u7cfb\uff0c\u4f46\u8bf7\u52a1\u5fc5\u5728\u81ea\u884c\u5c1d\u8bd5\u540e\uff0c\u518d\u770b\u4e0b\u9762\u7684\u89e3\u7b54\u5662\uff0c"),"\u4e0d\u7136...\u6211\u4e5f\u6ca1\u529e\u6cd5","(","\uffe3 \u25bd \uffe3",")",'"'),(0,m.kt)("h2",{id:"\u6311\u6218\u89e3\u7b54"},"\u6311\u6218\u89e3\u7b54"),(0,m.kt)("h3",{id:"\u65b9\u6848"},"\u65b9\u6848"),(0,m.kt)("p",null,"\u672c\u6b21\u6311\u6218\u4efb\u52a1\u65e8\u5728\u63d0\u5347\u5927\u5bb6\u7684\u52a8\u624b\u5b9e\u8df5\u80fd\u529b\uff0c\u89e3\u51b3\u5b9e\u9645\u95ee\u9898\uff0c\u6240\u4ee5\u6211\u4eec\u5f97\u5148\u6709\u4e2a\u89e3\u9898\u601d\u8def\u548c\u65b9\u6848\u3002\u89c2\u5bdf\u4e0b\u5e38\u89c1\u7684\u65f6\u949f\u8868\u76d8\uff1a"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_draw_clock_actual_clock_sample.jpg",alt:null})),(0,m.kt)("p",null,"\u6574\u4e2a\u8868\u76d8\u5176\u5b9e\u53ea\u6709 3 \u6839\u8868\u9488\u5728\u52a8\uff0c\u6240\u4ee5\u53ef\u4ee5\u5148\u753b\u51fa\u9759\u6001\u8868\u76d8\uff0c\u7136\u540e\u83b7\u53d6\u7cfb\u7edf\u5f53\u524d\u65f6\u95f4\uff0c\u6839\u636e\u65f6\u95f4\u5b9e\u65f6\u52a8\u6001\u7ed8\u5236 3 \u6839\u8868\u9488\u5c31\u89e3\u51b3\u4e86\u3002"),(0,m.kt)("h3",{id:"\u7ed8\u5236\u8868\u76d8"},"\u7ed8\u5236\u8868\u76d8"),(0,m.kt)("p",null,"\u8868\u76d8\u4e0a\u53ea\u6709 60 \u6761\u5206/\u79d2\u523b\u7ebf\u548c 12 \u6761\u5c0f\u65f6\u523b\u7ebf\uff0c\u5f53\u7136\u8fd8\u6709\u8868\u76d8\u7684\u5916\u90e8\u8f6e\u5ed3\u5706\uff0c\u4e5f\u5c31\u662f\u91cd\u70b9\u5728\u5982\u4f55\u753b 72 \u6839\u7ebf\u3002\u5148\u628a\u7b80\u5355\u7684\u5706\u753b\u51fa\u6765\uff1a"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport math\nimport datetime\nimport numpy as np\n\nmargin = 5  # \u4e0a\u4e0b\u5de6\u53f3\u8fb9\u8ddd\nradius = 220  # \u5706\u7684\u534a\u5f84\ncenter = (center_x, center_y) = (225, 225)  # \u5706\u5fc3\n\n# 1. \u65b0\u5efa\u4e00\u4e2a\u753b\u677f\u5e76\u586b\u5145\u6210\u767d\u8272\nimg = np.zeros((450, 450, 3), np.uint8)\nimg[:] = (255, 255, 255)\n\n# 2. \u753b\u51fa\u5706\u76d8\ncv2.circle(img, center, radius, (0, 0, 0), thickness=5)\n")),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_draw_clock_blank_circle.jpg",alt:null})),(0,m.kt)("p",null,"\u524d\u9762\u6211\u4eec\u4f7f\u7528 OpenCV \u753b\u76f4\u7ebf\u7684\u65f6\u5019\uff0c\u9700\u77e5\u9053\u76f4\u7ebf\u7684\u8d77\u70b9\u548c\u7ec8\u70b9\u5750\u6807\uff0c\u90a3\u4e48\u753b 72 \u6839\u7ebf\u5c31\u53d8\u6210\u4e86\u83b7\u53d6 72 \u7ec4\u5750\u6807\u3002"),(0,m.kt)("p",null,"\u5728\u5e73\u9762\u5750\u6807\u7cfb\u4e0b\uff0c\u5df2\u77e5\u534a\u5f84\u548c\u89d2\u5ea6\u7684\u8bdd\uff0cA \u70b9\u7684\u5750\u6807\u53ef\u4ee5\u8868\u793a\u4e3a\uff1a"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mtable",{parentName:"semantics",rowspacing:"0.16em",columnalign:"center",columnspacing:"1em"},(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"cos"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mi",{parentName:"mrow"},"\u03b1"))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mi",{parentName:"mrow"},"y"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"sin"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mi",{parentName:"mrow"},"\u03b1")))))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\begin{matrix} x=r\\times \\cos\\alpha \\newline y=r\\times \\sin\\alpha \\end{matrix}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.4em",verticalAlign:"-0.95em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mtable"},(0,m.kt)("span",{parentName:"span",className:"col-align-c"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.45em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.61em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"cos"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"))),(0,m.kt)("span",{parentName:"span",style:{top:"-2.41em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.95em"}},(0,m.kt)("span",{parentName:"span"})))))))))))),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_draw_clock_center_shift.jpg",alt:null})),(0,m.kt)("p",null,"\u5148\u53ea\u8003\u8651\u5c06\u5750\u6807\u7cfb\u539f\u70b9\u79fb\u52a8\u5230\u5de6\u4e0a\u89d2\uff0c\u89d2\u5ea6\u4f9d\u7136\u662f\u5e73\u9762\u5750\u6807\u7cfb\u4e2d\u7684\u9006\u65f6\u9488\u8ba1\u7b97\uff0c\u90a3\u4e48\u65b0\u5750\u6807\u662f\uff1a"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mtable",{parentName:"semantics",rowspacing:"0.16em",columnalign:"center",columnspacing:"1em"},(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"cos"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mi",{parentName:"mrow"},"\u03b1"))))),(0,m.kt)("mtr",{parentName:"mtable"},(0,m.kt)("mtd",{parentName:"mtr"},(0,m.kt)("mstyle",{parentName:"mtd",scriptlevel:"0",displaystyle:"false"},(0,m.kt)("mrow",{parentName:"mstyle"},(0,m.kt)("mi",{parentName:"mrow"},"y"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"sin"),(0,m.kt)("mo",{parentName:"mrow"},"\u2061"),(0,m.kt)("mi",{parentName:"mrow"},"\u03b1")))))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\begin{matrix} x=r+r\\times \\cos\\alpha \\newline y=r+r\\times \\sin\\alpha \\end{matrix}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"2.4em",verticalAlign:"-0.95em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mtable"},(0,m.kt)("span",{parentName:"span",className:"col-align-c"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.45em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.61em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"cos"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1"))),(0,m.kt)("span",{parentName:"span",style:{top:"-2.41em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.0037em"}},"\u03b1")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.95em"}},(0,m.kt)("span",{parentName:"span"})))))))))))),(0,m.kt)("p",null,"\u5bf9\u4e8e 60 \u6761\u5206/\u79d2\u523b\u7ebf\uff0c\u523b\u7ebf\u95f4\u7684\u5939\u89d2\u662f 360\xb0/60=6\xb0\uff0c\u5bf9\u4e8e\u5c0f\u65f6\u523b\u7ebf\uff0c\u89d2\u5ea6\u662f 360\xb0/12=30\xb0\uff0c\u8fd9\u6837\u5c31\u5f97\u5230\u4e86 72 \u7ec4\u8d77\u70b9\u5750\u6807\uff0c\u90a3\u600e\u4e48\u5f97\u5230\u7ec8\u70b9\u5750\u6807\u5462\uff1f\u5176\u5b9e\u540c\u6837\u7684\u539f\u7406\uff0c\u7528\u4e00\u4e2a\u540c\u5fc3\u7684\u5c0f\u5706\u6765\u8ba1\u7b97\u5f97\u5230 B \u70b9\uff1a"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_draw_clock_a_b_position.jpg",alt:null})),(0,m.kt)("p",null,"\u901a\u8fc7 A/B \u4e24\u70b9\u5c31\u53ef\u4ee5\u753b\u51fa\u76f4\u7ebf\uff1a"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"pt1 = []\n\n# 3. \u753b\u51fa 60 \u6761\u79d2\u548c\u5206\u949f\u7684\u523b\u7ebf\nfor i in range(60):\n    # \u6700\u5916\u90e8\u5706\uff0c\u8ba1\u7b97 A \u70b9\n    x1 = center_x+(radius-margin)*math.cos(i*6*np.pi/180.0)\n    y1 = center_y+(radius-margin)*math.sin(i*6*np.pi/180.0)\n    pt1.append((int(x1), int(y1)))\n\n    # \u540c\u5fc3\u5c0f\u5706\uff0c\u8ba1\u7b97 B \u70b9\n    x2 = center_x+(radius-15)*math.cos(i*6*np.pi/180.0)\n    y2 = center_y+(radius-15)*math.sin(i*6*np.pi/180.0)\n\n    cv2.line(img, pt1[i], (int(x2), int(y2)), (0, 0, 0), thickness=2)\n\n# 4. \u753b\u51fa 12 \u6761\u5c0f\u65f6\u7684\u523b\u7ebf\nfor i in range(12):\n    # 12 \u6761\u5c0f\u65f6\u523b\u7ebf\u5e94\u8be5\u66f4\u957f\u4e00\u70b9\n    x = center_x+(radius-25)*math.cos(i*30*np.pi/180.0)\n    y = center_y+(radius-25)*math.sin(i*30*np.pi/180.0)\n    # \u8fd9\u91cc\u7528\u5230\u4e86\u524d\u9762\u7684 pt1\n    cv2.line(img, pt1[i*5], (int(x), int(y)), (0, 0, 0), thickness=5)\n\n# \u5230\u8fd9\u91cc\u57fa\u672c\u7684\u8868\u76d8\u56fe\u5c31\u5df2\u7ecf\u753b\u51fa\u6765\u4e86\n")),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_draw_clock_blank_clock.jpg",alt:null})),(0,m.kt)("h3",{id:"\u89d2\u5ea6\u6362\u7b97"},"\u89d2\u5ea6\u6362\u7b97"),(0,m.kt)("p",null,"\u63a5\u4e0b\u6765\u7b97\u662f\u4e00\u4e2a\u5c0f\u96be\u70b9\uff0c\u9996\u5148",(0,m.kt)("strong",{parentName:"p"},"\u65f6\u949f\u7684\u8d77\u59cb\u5750\u6807\u5728\u6b63\u5e38\u4e8c\u7ef4\u5750\u6807\u7cfb\u7684 90\xb0 \u65b9\u5411\uff0c\u5176\u6b21\u65f6\u949f\u8ddf\u56fe\u50cf\u4e00\u6837\uff0c\u90fd\u662f\u987a\u65f6\u9488\u8ba1\u7b97\u89d2\u5ea6\u7684"),"\uff0c\u6240\u4ee5\u4e09\u8005\u9700\u8981\u7edf\u4e00\u4e0b\uff1a"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_draw_clock_different_clock_contrast.jpg",alt:null})),(0,m.kt)("p",null,"\u56e0\u4e3a\u89d2\u5ea6\u662f\u5b8c\u5168\u5bf9\u79f0\u7684\uff0c\u987a\u9006\u65f6\u9488\u6ca1\u6709\u5f71\u54cd\uff0c\u6240\u4ee5\u5e73\u9762\u5750\u6807\u7cfb\u5b8c\u5168\u4e0d\u7528\u7406\u4f1a\uff0c\u653e\u5728\u8fd9\u91cc\u53ea\u662f\u4fbf\u4e8e\u5927\u5bb6\u7406\u89e3\u3002\u5bf9\u4e8e\u65f6\u949f\u5750\u6807\u548c\u56fe\u50cf\u5750\u6807\uff0c\u65f6\u949f 0 \u7684 0\xb0 \u5bf9\u5e94\u56fe\u50cf\u7684 270\xb0\uff0c\u65f6\u949f 15 \u7684 90\xb0 \u5bf9\u5e94\u56fe\u50cf\u7684 360\xb0\uff0c\u65f6\u949f 30 \u7684 180\xb0 \u5bf9\u5e94\u56fe\u50cf\u7684 450\xb0\uff08360\xb0+90\xb0\uff09..."),(0,m.kt)("p",null,"\u6240\u4ee5\u4e24\u8005\u4e4b\u95f4\u7684\u5173\u7cfb\u4fbf\u662f\uff1a"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-text"},"\u8ba1\u7b97\u89d2\u5ea6 = \u65f6\u949f\u89d2\u5ea6 +270\xb0\n\u8ba1\u7b97\u89d2\u5ea6 = \u8ba1\u7b97\u89d2\u5ea6 if \u8ba1\u7b97\u89d2\u5ea6<=360\xb0 else \u8ba1\u7b97\u89d2\u5ea6-360\xb0\n")),(0,m.kt)("h3",{id:"\u540c\u6b65\u65f6\u95f4"},"\u540c\u6b65\u65f6\u95f4"),(0,m.kt)("p",null,"Python \u4e2d\u5982\u4f55\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u548c\u6dfb\u52a0\u65e5\u671f\u6587\u5b57\u90fd\u6bd4\u8f83\u7b80\u5355\uff0c\u770b\u4ee3\u7801\u5c31\u884c\uff0c\u6211\u5c31\u4e0d\u89e3\u91ca\u4e86\u3002\u4ee3\u7801\u4e2d\u89d2\u5ea6\u8ba1\u7b97\u6211\u6362\u4e86\u4e00\u79cd\u65b9\u5f0f\uff0c\u5176\u5b9e\u662f\u4e00\u6837\u7684\uff0c\u770b\u4f60\u80fd\u4e0d\u80fd\u770b\u61c2","(","\u25cf\u02c7\u2200\u02c7\u25cf",")","\uff1a"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-python"},"while(1):\n    # \u4e0d\u65ad\u62f7\u8d1d\u8868\u76d8\u56fe\uff0c\u624d\u80fd\u66f4\u65b0\u7ed8\u5236\uff0c\u4e0d\u7136\u4f1a\u91cd\u53e0\u5728\u4e00\u8d77\n    temp = np.copy(img)\n\n    # 5. \u83b7\u53d6\u7cfb\u7edf\u65f6\u95f4\uff0c\u753b\u51fa\u52a8\u6001\u7684\u65f6 - \u5206 - \u79d2\u4e09\u6761\u523b\u7ebf\n    now_time = datetime.datetime.now()\n    hour, minute, second = now_time.hour, now_time.minute, now_time.second\n\n    # \u753b\u79d2\u523b\u7ebf\n    # OpenCV \u4e2d\u7684\u89d2\u5ea6\u662f\u987a\u65f6\u9488\u8ba1\u7b97\u7684\uff0c\u6240\u4ee5\u9700\u8981\u8f6c\u6362\u4e0b\n    sec_angle = second*6+270 if second <= 15 else (second-15)*6\n    sec_x = center_x+(radius-margin)*math.cos(sec_angle*np.pi/180.0)\n    sec_y = center_y+(radius-margin)*math.sin(sec_angle*np.pi/180.0)\n    cv2.line(temp, center, (int(sec_x), int(sec_y)), (203, 222, 166), 2)\n\n    # \u753b\u5206\u523b\u7ebf\n    min_angle = minute*6+270 if minute <= 15 else (minute-15)*6\n    min_x = center_x+(radius-35)*math.cos(min_angle*np.pi/180.0)\n    min_y = center_y+(radius-35)*math.sin(min_angle*np.pi/180.0)\n    cv2.line(temp, center, (int(min_x), int(min_y)), (186, 199, 137), 8)\n\n    # \u753b\u65f6\u523b\u7ebf\n    hour_angle = hour*30+270 if hour <= 3 else (hour-3)*30\n    hour_x = center_x+(radius-65)*math.cos(hour_angle*np.pi/180.0)\n    hour_y = center_y+(radius-65)*math.sin(hour_angle*np.pi/180.0)\n    cv2.line(temp, center, (int(hour_x), int(hour_y)), (169, 198, 26), 15)\n\n    # 6. \u6dfb\u52a0\u5f53\u524d\u65e5\u671f\u6587\u5b57\n    font = cv2.FONT_HERSHEY_SIMPLEX\n    time_str = now_time.strftime(\"%d/%m/%Y\")\n    cv2.putText(img, time_str, (135, 275), font, 1, (0, 0, 0), 2)\n\n    cv2.imshow('clocking', temp)\n    if cv2.waitKey(1) == 27:  # \u6309\u4e0b ESC \u952e\u9000\u51fa\n        break\n")),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_draw_clock_sample.jpg",alt:null})),(0,m.kt)("p",null,"\u672c\u6b64\u6311\u6218\u65e8\u5728\u953b\u70bc\u4e00\u6b65\u6b65\u89e3\u51b3\u5b9e\u9645\u95ee\u9898\u7684\u601d\u8def\uff08\u867d\u7136\u6709\u70b9\u6570\u5b66\u77e5\u8bc6","(","\uffe3 \u25bd \uffe3",")",'"\uff09\uff0c\u5927\u5bb6\u518d\u63a5\u518d\u5389\u5662\uff01'),(0,m.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Challenge-01-Draw-Dynamic-Clock"},"\u672c\u8282\u6e90\u7801"))))}N.isMDXComponent=!0}}]);