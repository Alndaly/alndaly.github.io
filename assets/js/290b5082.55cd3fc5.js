"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[7703],{3881:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>r});var c=i(8101);const l={},s=c.createContext(l);function d(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),c.createElement(s.Provider,{value:n},e.children)}},8938:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>a});const c=JSON.parse('{"id":"artificial-intelligence/opencv/start/basic-element-image","title":"02: \u57fa\u672c\u5143\u7d20 - \u56fe\u7247","description":"\u5b66\u4e60\u5982\u4f55\u52a0\u8f7d\u56fe\u7247\uff0c\u663e\u793a\u5e76\u4fdd\u5b58\u56fe\u7247\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002","source":"@site/docs/artificial-intelligence/opencv/start/02-basic-element-image.md","sourceDirName":"artificial-intelligence/opencv/start","slug":"/artificial-intelligence/opencv/start/basic-element-image","permalink":"/docs/artificial-intelligence/opencv/start/basic-element-image","draft":false,"unlisted":false,"editUrl":"https://github.com/Alndaly/alndaly.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/artificial-intelligence/opencv/start/02-basic-element-image.md","tags":[],"version":"current","lastUpdatedAt":1742396220000,"sidebarPosition":2,"frontMatter":{},"sidebar":"ai","previous":{"title":"01: \u7b80\u4ecb\u4e0e\u5b89\u88c5","permalink":"/docs/artificial-intelligence/opencv/start/introduction-and-installation"},"next":{"title":"03: \u6253\u5f00\u6444\u50cf\u5934","permalink":"/docs/artificial-intelligence/opencv/start/open-camera"}}');var l=i(5105),s=i(3881);const d={},r="02: \u57fa\u672c\u5143\u7d20 - \u56fe\u7247",t={},a=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u52a0\u8f7d\u56fe\u7247",id:"\u52a0\u8f7d\u56fe\u7247",level:3},{value:"\u663e\u793a\u56fe\u7247",id:"\u663e\u793a\u56fe\u7247",level:3},{value:"\u4fdd\u5b58\u56fe\u7247",id:"\u4fdd\u5b58\u56fe\u7247",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u63a5\u53e3\u6587\u6863",id:"\u63a5\u53e3\u6587\u6863",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"02-\u57fa\u672c\u5143\u7d20---\u56fe\u7247",children:"02: \u57fa\u672c\u5143\u7d20 - \u56fe\u7247"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"http://cos.codec.wang/cv2_image_coordinate_channels.jpg",alt:""})}),"\n",(0,l.jsx)(n.p,{children:"\u5b66\u4e60\u5982\u4f55\u52a0\u8f7d\u56fe\u7247\uff0c\u663e\u793a\u5e76\u4fdd\u5b58\u56fe\u7247\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u76ee\u6807",children:"\u76ee\u6807"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u52a0\u8f7d\u56fe\u7247\uff0c\u663e\u793a\u56fe\u7247\uff0c\u4fdd\u5b58\u56fe\u7247"}),"\n",(0,l.jsxs)(n.li,{children:["OpenCV \u51fd\u6570\uff1a",(0,l.jsx)(n.code,{children:"cv2.imread()"}),", ",(0,l.jsx)(n.code,{children:"cv2.imshow()"}),", ",(0,l.jsx)(n.code,{children:"cv2.imwrite()"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u6559\u7a0b",children:"\u6559\u7a0b"}),"\n",(0,l.jsx)(n.p,{children:"\u5927\u90e8\u5206\u4eba\u53ef\u80fd\u90fd\u77e5\u9053\u7535\u8111\u4e0a\u7684\u5f69\u8272\u56fe\u662f\u4ee5 RGB(Red/Green/Blue: \u7ea2/\u7eff/\u84dd) \u989c\u8272\u6a21\u5f0f\u663e\u793a\u7684\uff0c\u4f46 OpenCV \u4e2d\u5f69\u8272\u56fe\u662f\u4ee5 BGR \u901a\u9053\u987a\u5e8f\u5b58\u50a8\u7684\uff0c\u7070\u5ea6\u56fe\u53ea\u6709\u4e00\u4e2a\u901a\u9053\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u56fe\u50cf\u5750\u6807\u7684\u8d77\u59cb\u70b9\u662f\u5728\u5de6\u4e0a\u89d2\uff0c\u6240\u4ee5\u884c\u5bf9\u5e94\u7684\u662f y\uff0c\u5217\u5bf9\u5e94\u7684\u662f x\uff1a"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"http://cos.codec.wang/cv2_image_coordinate_channels.jpg",alt:""})}),"\n",(0,l.jsx)(n.h3,{id:"\u52a0\u8f7d\u56fe\u7247",children:"\u52a0\u8f7d\u56fe\u7247"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"cv2.imread()"}),"\u6765\u8bfb\u5165\u4e00\u5f20\u56fe\u7247\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"import cv2\n\n# \u52a0\u8f7d\u7070\u5ea6\u56fe\nimg = cv2.imread('lena.jpg', 0)\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u53c2\u6570 1\uff1a\u56fe\u7247\u7684\u6587\u4ef6\u540d","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u679c\u56fe\u7247\u653e\u5728\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\uff0c\u76f4\u63a5\u5199\u6587\u4ef6\u540d\u5c31\u884c\uff0c\u5982'lena.jpg'"}),"\n",(0,l.jsx)(n.li,{children:"\u5426\u5219\u9700\u8981\u7ed9\u51fa\u7edd\u5bf9\u8def\u5f84\uff0c\u5982'D:\\OpenCVSamples\\lena.jpg'"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\u53c2\u6570 2\uff1a\u8bfb\u5165\u65b9\u5f0f\uff0c\u7701\u7565\u5373\u91c7\u7528\u9ed8\u8ba4\u503c","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cv2.IMREAD_COLOR"}),"\uff1a\u5f69\u8272\u56fe\uff0c\u9ed8\u8ba4\u503c (1)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cv2.IMREAD_GRAYSCALE"}),"\uff1a\u7070\u5ea6\u56fe (0)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cv2.IMREAD_UNCHANGED"}),"\uff1a\u5305\u542b\u900f\u660e\u901a\u9053\u7684\u5f69\u8272\u56fe (-1)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["\u8def\u5f84\u4e2d\u4e0d\u80fd\u6709\u4e2d\u6587\u5662\uff0c\u5e76\u4e14\u6ca1\u6709\u52a0\u8f7d\u6210\u529f\u7684\u8bdd\u662f\u4e0d\u4f1a\u62a5\u9519\u7684\uff0c",(0,l.jsx)(n.code,{children:"print(img)"}),"\u7684\u7ed3\u679c\u4e3a None\uff0c\u540e\u9762\u5904\u7406\u624d\u4f1a\u62a5\u9519\uff0c\u7b97\u662f\u4e2a\u5c0f\u5751\u3002"]})}),"\n",(0,l.jsx)(n.h3,{id:"\u663e\u793a\u56fe\u7247",children:"\u663e\u793a\u56fe\u7247"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"cv2.imshow()"}),"\u663e\u793a\u56fe\u7247\uff0c\u7a97\u53e3\u4f1a\u81ea\u9002\u5e94\u56fe\u7247\u7684\u5927\u5c0f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"cv2.imshow('lena', img)\ncv2.waitKey(0)\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53c2\u6570 1 \u662f\u7a97\u53e3\u7684\u540d\u5b57\uff0c\u53c2\u6570 2 \u662f\u8981\u663e\u793a\u7684\u56fe\u7247\u3002\u4e0d\u540c\u7a97\u53e3\u4e4b\u95f4\u7528\u7a97\u53e3\u540d\u533a\u5206\uff0c\u6240\u4ee5\u7a97\u53e3\u540d\u76f8\u540c\u5c31\u8868\u793a\u662f\u540c\u4e00\u4e2a\u7a97\u53e3\uff0c\u663e\u793a\u7ed3\u679c\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"http://cos.codec.wang/cv2_show_lena_gray.jpg",alt:""})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"cv2.waitKey()"}),"\u662f\u8ba9\u7a0b\u5e8f\u6682\u505c\u7684\u610f\u601d\uff0c\u53c2\u6570\u662f\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2 ms\u3002\u65f6\u95f4\u4e00\u5230\uff0c\u4f1a\u7ee7\u7eed\u6267\u884c\u63a5\u4e0b\u6765\u7684\u7a0b\u5e8f\uff0c\u4f20\u5165 0 \u7684\u8bdd\u8868\u793a\u4e00\u76f4\u7b49\u5f85\u3002\u7b49\u5f85\u671f\u95f4\u4e5f\u53ef\u4ee5\u83b7\u53d6\u7528\u6237\u7684\u6309\u952e\u8f93\u5165\uff1a",(0,l.jsx)(n.code,{children:"k = cv2.waitKey(0)"}),"\uff08",(0,l.jsx)(n.a,{href:"#%E7%BB%83%E4%B9%A0",children:"\u7ec3\u4e60 1"}),"\uff09\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4eec\u4e5f\u53ef\u4ee5\u5148\u7528",(0,l.jsx)(n.code,{children:"cv2.namedWindow()"}),"\u521b\u5efa\u4e00\u4e2a\u7a97\u53e3\uff0c\u4e4b\u540e\u518d\u663e\u793a\u56fe\u7247\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"# \u5148\u5b9a\u4e49\u7a97\u53e3\uff0c\u540e\u663e\u793a\u56fe\u7247\ncv2.namedWindow('lena2', cv2.WINDOW_NORMAL)\ncv2.imshow('lena2', img)\ncv2.waitKey(0)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u53c2\u6570 1 \u4f9d\u65e7\u662f\u7a97\u53e3\u7684\u540d\u5b57\uff0c\u53c2\u6570 2 \u9ed8\u8ba4\u662f",(0,l.jsx)(n.code,{children:"cv2.WINDOW_AUTOSIZE"}),"\uff0c\u8868\u793a\u7a97\u53e3\u5927\u5c0f\u81ea\u9002\u5e94\u56fe\u7247\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a",(0,l.jsx)(n.code,{children:"cv2.WINDOW_NORMAL"}),"\uff0c\u8868\u793a\u7a97\u53e3\u5927\u5c0f\u53ef\u8c03\u6574\u3002\u56fe\u7247\u6bd4\u8f83\u5927\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u8003\u8651\u7528\u540e\u8005\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4fdd\u5b58\u56fe\u7247",children:"\u4fdd\u5b58\u56fe\u7247"}),"\n",(0,l.jsxs)(n.p,{children:["\u4f7f\u7528",(0,l.jsx)(n.code,{children:"cv2.imwrite()"}),"\u4fdd\u5b58\u56fe\u7247\uff0c\u53c2\u6570 1 \u662f\u5305\u542b\u540e\u7f00\u540d\u7684\u6587\u4ef6\u540d\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"cv2.imwrite('lena_gray.jpg', img)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Nice\uff0c\u662f\u4e0d\u662f\u5f88\u7b80\u5355\u5450\uff0c\u518d\u63a5\u518d\u5389\u5662(\u25cf'\u25e1'\u25cf)"}),"\n",(0,l.jsx)(n.h2,{id:"\u5c0f\u7ed3",children:"\u5c0f\u7ed3"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"cv2.imread()"}),"\u8bfb\u5165\u56fe\u7247\u3001",(0,l.jsx)(n.code,{children:"cv2.imshow()"}),"\u663e\u793a\u56fe\u7247\u3001",(0,l.jsx)(n.code,{children:"cv2.imwrite()"}),"\u4fdd\u5b58\u56fe\u7247\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u7ec3\u4e60",children:"\u7ec3\u4e60"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u6253\u5f00 lena.jpg \u5e76\u663e\u793a\uff0c\u5982\u679c\u6309\u4e0b's'\uff0c\u5c31\u4fdd\u5b58\u56fe\u7247\u4e3a'lena_save.bmp'\uff0c\u5426\u5219\u5c31\u7ed3\u675f\u7a0b\u5e8f\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["Matplotlib \u662f Python \u4e2d\u5e38\u7528\u7684\u4e00\u4e2a\u7ed8\u56fe\u5e93\uff0c\u8bf7\u5b66\u4e60",(0,l.jsx)(n.a,{href:"./extra-02-high-quality-save-and-matplotlib",children:"\u756a\u5916\u7bc7\uff1a\u65e0\u635f\u4fdd\u5b58\u548c Matplotlib \u4f7f\u7528"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u63a5\u53e3\u6587\u6863",children:"\u63a5\u53e3\u6587\u6863"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.opencv.org/4.0.0/d3/d63/classcv_1_1Mat.html",children:"Mat Object"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.opencv.org/4.0.0/d4/da8/group__imgcodecs.html#ga288b8b3da0892bd651fce07b3bbd3a56",children:"cv2.imread()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.opencv.org/4.0.0/d7/dfc/group__highgui.html#ga453d42fe4cb60e5723281a89973ee563",children:"cv2.imshow()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.opencv.org/4.0.0/d4/da8/group__imgcodecs.html#gabbc7ef1aa2edfaa87772f1202d67e0ce",children:"cv2.imwrite()"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://docs.opencv.org/4.0.0/d7/dfc/group__highgui.html#ga5afdf8410934fd099df85c75b2e0888b",children:"cv.namedWindow()"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5f15\u7528",children:"\u5f15\u7528"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/02-Basic-Element-Image",children:"\u672c\u8282\u6e90\u7801"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_gui/py_image_display/py_image_display.html",children:"Getting Started with Images"})}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);