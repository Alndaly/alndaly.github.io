"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3566],{82902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));n(16758);const l={},r="\u756a\u5916\u7bc7\uff1a\u9f20\u6807\u7ed8\u56fe",c={unversionedId:"artificial-intelligence/opencv/start/extra-06-drawing-with-mouse",id:"artificial-intelligence/opencv/start/extra-06-drawing-with-mouse",title:"\u756a\u5916\u7bc7\uff1a\u9f20\u6807\u7ed8\u56fe",description:"\u5b66\u4e60\u5982\u4f55\u7528\u9f20\u6807\u5b9e\u65f6\u7ed8\u56fe\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002",source:"@site/docs/artificial-intelligence/opencv/start/extra-06-drawing-with-mouse.md",sourceDirName:"artificial-intelligence/opencv/start",slug:"/artificial-intelligence/opencv/start/extra-06-drawing-with-mouse",permalink:"/docs/artificial-intelligence/opencv/start/extra-06-drawing-with-mouse",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/opencv/start/extra-06-drawing-with-mouse.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"2023\u5e744\u67081\u65e5",frontMatter:{},sidebar:"ai",previous:{title:"\u756a\u5916\u7bc7\uff1a\u4eff\u5c04\u53d8\u6362\u4e0e\u900f\u89c6\u53d8\u6362",permalink:"/docs/artificial-intelligence/opencv/start/extra-05-warpaffine-warpperspective"},next:{title:"\u57fa\u7840\u7bc7",permalink:"/docs/category/\u57fa\u7840\u7bc7"}},p={},s=[{value:"\u76ee\u6807",id:"\u76ee\u6807",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2},{value:"\u77e5\u9053\u9f20\u6807\u5728\u54ea\u513f",id:"\u77e5\u9053\u9f20\u6807\u5728\u54ea\u513f",level:3},{value:"\u7efc\u5408\u5b9e\u4f8b",id:"\u7efc\u5408\u5b9e\u4f8b",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],o={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u756a\u5916\u7bc7\u9f20\u6807\u7ed8\u56fe"},"\u756a\u5916\u7bc7\uff1a\u9f20\u6807\u7ed8\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_live_draw_rectangle.gif",alt:null})),(0,i.kt)("p",null,"\u5b66\u4e60\u5982\u4f55\u7528\u9f20\u6807\u5b9e\u65f6\u7ed8\u56fe\u3002\u56fe\u7247\u7b49\u53ef\u5230\u6587\u672b\u5f15\u7528\u5904\u4e0b\u8f7d\u3002"),(0,i.kt)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6355\u83b7\u9f20\u6807\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"OpenCV \u51fd\u6570\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"cv2.setMouseCallback()"))),(0,i.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,i.kt)("h3",{id:"\u77e5\u9053\u9f20\u6807\u5728\u54ea\u513f"},"\u77e5\u9053\u9f20\u6807\u5728\u54ea\u513f"),(0,i.kt)("p",null,"OpenCV \u4e2d\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u9f20\u6807\u7684\u56de\u8c03\u51fd\u6570\u6765\u83b7\u53d6\u9f20\u6807\u5f53\u524d\u7684\u4f4d\u7f6e\u3001\u5f53\u524d\u7684\u4e8b\u4ef6\u5982\u5de6\u952e\u6309\u4e0b/\u5de6\u952e\u91ca\u653e\u6216\u662f\u53f3\u952e\u5355\u51fb\u7b49\u7b49\uff0c\u7136\u540e\u6267\u884c\u76f8\u5e94\u7684\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"cv2.setMouseCallback()"),"\u6765\u521b\u5efa\u9f20\u6807\u7684\u56de\u8c03\u51fd\u6570\uff0c\u6bd4\u5982\u6211\u4eec\u5728\u5de6\u952e\u5355\u51fb\u7684\u65f6\u5019\uff0c\u6253\u5370\u51fa\u5f53\u524d\u9f20\u6807\u7684\u4f4d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\n\n# \u9f20\u6807\u7684\u56de\u8c03\u51fd\u6570\ndef mouse_event(event, x, y, flags, param):\n    # \u901a\u8fc7 event \u5224\u65ad\u5177\u4f53\u662f\u4ec0\u4e48\u4e8b\u4ef6\uff0c\u8fd9\u91cc\u662f\u5de6\u952e\u6309\u4e0b\n    if event == cv2.EVENT_LBUTTONDOWN:\n        print((x, y))\n\nimg = np.zeros((512, 512, 3), np.uint8)\ncv2.namedWindow('image')\n# \u5b9a\u4e49\u9f20\u6807\u7684\u56de\u8c03\u51fd\u6570\ncv2.setMouseCallback('image', mouse_event)\n\nwhile(True):\n    cv2.imshow('image', img)\n    # \u6309\u4e0b ESC \u952e\u9000\u51fa\n    if cv2.waitKey(20) == 27:\n        break\n")),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u5148\u5b9a\u4e49\u9f20\u6807\u7684\u56de\u8c03\u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"mouse_event()"),"\uff0c\u7136\u540e\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u5224\u65ad\u662f\u5426\u662f\u5de6\u952e\u5355\u51fb\u4e8b\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"EVENT_LBUTTONDOWN"),"\uff0c\u662f\u7684\u8bdd\u5c31\u6253\u5370\u51fa\u5750\u6807\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u683c\u5f0f\u662f\u56fa\u5b9a\u7684\uff0c\u4e0d\u8981\u968f\u610f\u66f4\u6539\u3002"),(0,i.kt)("p",null,"\u90a3\u9664\u4e86\u5de6\u952e\u5355\u51fb\u4e4b\u5916\uff0c\u8fd8\u6709\u54ea\u4e9b\u4e8b\u4ef6\u5462\uff1f\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u6253\u5370\u51fa\u6765\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# \u83b7\u53d6\u6240\u6709\u7684\u4e8b\u4ef6\nevents = [i for i in dir(cv2) if 'EVENT' in i]\nprint(events)\n")),(0,i.kt)("h3",{id:"\u7efc\u5408\u5b9e\u4f8b"},"\u7efc\u5408\u5b9e\u4f8b"),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u6765\u5b9e\u73b0\u4e00\u4e2a\u7efc\u5408\u7684\u4f8b\u5b50\uff0c\u8fd9\u4e2a\u5b9e\u4f8b\u4f1a\u5e2e\u52a9\u4f60\u7406\u89e3\u56fe\u50cf\u4ea4\u4e92\u7684\u4e00\u4e9b\u601d\u60f3\uff1a"),(0,i.kt)("p",null,"\u5728\u56fe\u50cf\u4e0a\u7528\u9f20\u6807\u753b\u56fe\uff0c\u53ef\u4ee5\u753b\u5706\u6216\u77e9\u5f62\uff0c\u6309 m \u952e\u5728\u4e24\u79cd\u6a21\u5f0f\u4e0b\u5207\u6362\u3002\u5de6\u952e\u6309\u4e0b\u65f6\u5f00\u59cb\u753b\u56fe\uff0c\u79fb\u52a8\u5230\u54ea\u513f\u753b\u5230\u54ea\u513f\uff0c\u5de6\u952e\u91ca\u653e\u65f6\u7ed3\u675f\u753b\u56fe\u3002\u542c\u4e0a\u53bb\u5f88\u590d\u6742\uff0c\u662f\u5417\uff1f\u4e00\u6b65\u6b65\u6765\u770b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u9f20\u6807\u753b\u56fe\uff1a\u9700\u8981\u5b9a\u4e49\u9f20\u6807\u7684\u56de\u8c03\u51fd\u6570 mouse_event"),(0,i.kt)("li",{parentName:"ul"},"\u753b\u5706\u6216\u77e9\u5f62\uff1a\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u753b\u56fe\u7684\u6a21\u5f0f mode"),(0,i.kt)("li",{parentName:"ul"},"\u5de6\u952e\u5355\u51fb\u3001\u79fb\u52a8\u3001\u91ca\u653e\uff1a\u9700\u8981\u6355\u83b7\u4e09\u4e2a\u4e0d\u540c\u7684\u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u753b\u56fe\uff0c\u7ed3\u675f\u753b\u56fe\uff1a\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a\u753b\u56fe\u7684\u6807\u8bb0\u4f4d drawing")),(0,i.kt)("p",null,"\u597d\uff0c\u5f00\u59cb coding \u5427\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport numpy as np\n\ndrawing = False  # \u662f\u5426\u5f00\u59cb\u753b\u56fe\nmode = True  # True\uff1a\u753b\u77e9\u5f62\uff0cFalse\uff1a\u753b\u5706\nstart = (-1, -1)\n\ndef mouse_event(event, x, y, flags, param):\n    global start, drawing, mode\n\n    # \u5de6\u952e\u6309\u4e0b\uff1a\u5f00\u59cb\u753b\u56fe\n    if event == cv2.EVENT_LBUTTONDOWN:\n        drawing = True\n        start = (x, y)\n    # \u9f20\u6807\u79fb\u52a8\uff0c\u753b\u56fe\n    elif event == cv2.EVENT_MOUSEMOVE:\n        if drawing:\n            if mode:\n                cv2.rectangle(img, start, (x, y), (0, 255, 0), 1)\n            else:\n                cv2.circle(img, (x, y), 5, (0, 0, 255), -1)\n    # \u5de6\u952e\u91ca\u653e\uff1a\u7ed3\u675f\u753b\u56fe\n    elif event == cv2.EVENT_LBUTTONUP:\n        drawing = False\n        if mode:\n            cv2.rectangle(img, start, (x, y), (0, 255, 0), 1)\n        else:\n            cv2.circle(img, (x, y), 5, (0, 0, 255), -1)\n\n\nimg = np.zeros((512, 512, 3), np.uint8)\ncv2.namedWindow('image')\ncv2.setMouseCallback('image', mouse_event)\n\nwhile(True):\n    cv2.imshow('image', img)\n    # \u6309\u4e0b m \u5207\u6362\u6a21\u5f0f\n    if cv2.waitKey(1) == ord('m'):\n        mode = not mode\n    elif cv2.waitKey(1) == 27:\n        break\n")),(0,i.kt)("p",null,"\u6548\u679c\u5e94\u8be5\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_mouse_drawing_rectangle_circle.jpg",alt:null})),(0,i.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8981\u7528\u9f20\u6807\u7ed8\u56fe\uff0c\u9700\u8981\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"cv2.setMouseCallback()"),"\u5b9a\u4e49\u56de\u8c03\u51fd\u6570\uff0c\u7136\u540e\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u6839\u636e\u4e0d\u540c\u7684 event \u4e8b\u4ef6\uff0c\u6267\u884c\u4e0d\u540c\u7684\u529f\u80fd\u3002")),(0,i.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,i.kt)("p",null,"1.\uff08\u9009\u505a\uff09\u5b9e\u73b0\u7528\u9f20\u6807\u753b\u77e9\u5f62\uff0c\u8ddf\u5b9e\u4f8b\u5dee\u4e0d\u591a\uff0c\u4f46\u53ea\u5b9e\u65f6\u753b\u4e00\u4e2a\uff0c\u7c7b\u4f3c\u4e0b\u9762\u52a8\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://cos.codec.wang/cv2_live_draw_rectangle.gif",alt:"\u5b9e\u65f6\u753b\u4e00\u4e2a\u77e9\u5f62"})),(0,i.kt)("p",null,"2.\uff08\u9009\u505a\uff09\u505a\u4e00\u4e2a\u5728\u767d\u8272\u9762\u677f\u4e0a\u7ed8\u56fe\u7684\u7b80\u5355\u7a0b\u5e8f\uff0c\u53ef\u7528\u6ed1\u52a8\u6761\u8c03\u6574\u989c\u8272\u548c\u7b14\u5237\u5927\u5c0f\u3002"),(0,i.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Extra-06-Drawing-with-Mouse"},"\u672c\u8282\u6e90\u7801")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_gui/py_mouse_handling/py_mouse_handling.html"},"Mouse as a Paint-Brush"))))}u.isMDXComponent=!0}}]);