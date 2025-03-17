"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[8710],{14:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53","title":"yolov8\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53","description":"\u672c\u6587\u7684\u6587\u4ef6\u5939\u540d\u5b57\u547d\u540d\u4ee5\u53ca\u683c\u5c40\u90fd\u53ef\u4ee5\u968f\u610f\u4fee\u6539\uff08\u524d\u63d0\u662f\u4f60\u61c2\u6574\u4e2a\u903b\u8f91\uff09","source":"@site/docs/artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53.md","sourceDirName":"artificial-intelligence/yolov8","slug":"/artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53","permalink":"/docs/artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53.md","tags":[],"version":"current","lastUpdatedAt":1742213220000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"yolov8\u7ed3\u5408opencv\u5b9e\u65f6\u68c0\u6d4b\u7269\u4f53\u5e76\u4e14\u505a\u51fa\u81ea\u5b9a\u4e49\u54cd\u5e94","permalink":"/docs/artificial-intelligence/yolov8/yovov8\u7ed3\u5408opencv"},"next":{"title":"\u4ecb\u7ecd","permalink":"/docs/backend"}}');var l=s(5105),a=s(3881);const t={},d="yolov8\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53",o={},c=[{value:"\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939<code>kinda</code>\u4f5c\u4e3a\u6839\u76ee\u5f55",id:"\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939kinda\u4f5c\u4e3a\u6839\u76ee\u5f55",level:2},{value:"\u65b0\u5efa\u6587\u4ef6\u5939<code>dataset</code>\u5b58\u653e\u6807\u7b7e\u548c\u56fe\u7247\u6587\u4ef6",id:"\u65b0\u5efa\u6587\u4ef6\u5939dataset\u5b58\u653e\u6807\u7b7e\u548c\u56fe\u7247\u6587\u4ef6",level:2},{value:"<code>dataset</code>\u76ee\u5f55\u4e0b\u65b0\u5efa<code>image</code>\u6587\u4ef6\u5939",id:"dataset\u76ee\u5f55\u4e0b\u65b0\u5efaimage\u6587\u4ef6\u5939",level:2},{value:"<code>image</code>\u76ee\u5f55\u4e0b\u65b0\u5efa<code>train</code>\u3001<code>val</code>\u3001<code>test</code>\u6587\u4ef6\u5939",id:"image\u76ee\u5f55\u4e0b\u65b0\u5efatrainvaltest\u6587\u4ef6\u5939",level:2},{value:"<code>dataset</code>\u76ee\u5f55\u4e0b\u65b0\u5efa<code>labels</code>\u6587\u4ef6\u5939",id:"dataset\u76ee\u5f55\u4e0b\u65b0\u5efalabels\u6587\u4ef6\u5939",level:2},{value:"<code>labels</code>\u76ee\u5f55\u4e0b\u65b0\u5efa<code>train</code>\u3001<code>val</code>\u3001<code>test</code>\u6587\u4ef6\u5939",id:"labels\u76ee\u5f55\u4e0b\u65b0\u5efatrainvaltest\u6587\u4ef6\u5939",level:2},{value:"<code>kinda</code>\u76ee\u5f55\u4e0b\u65b0\u5efa<code>dataset.yaml</code>\u6587\u4ef6",id:"kinda\u76ee\u5f55\u4e0b\u65b0\u5efadatasetyaml\u6587\u4ef6",level:2},{value:"\u521b\u5efa\u6807\u7b7e",id:"\u521b\u5efa\u6807\u7b7e",level:2},{value:"\u7f16\u8f91\u6807\u7b7e",id:"\u7f16\u8f91\u6807\u7b7e",level:2},{value:"\u7ed8\u5236\u6846\u7ebf",id:"\u7ed8\u5236\u6846\u7ebf",level:2},{value:"\u9009\u62e9\u6807\u7b7e",id:"\u9009\u62e9\u6807\u7b7e",level:2},{value:"\u5bfc\u51fayolo\u683c\u5f0f\u6807\u6ce8\u6587\u4ef6(txt\u683c\u5f0f)",id:"\u5bfc\u51fayolo\u683c\u5f0f\u6807\u6ce8\u6587\u4ef6txt\u683c\u5f0f",level:2},{value:"\u6700\u7ec8\u6587\u4ef6\u5939\u7ed3\u6784\u5982\u4e0b",id:"\u6700\u7ec8\u6587\u4ef6\u5939\u7ed3\u6784\u5982\u4e0b",level:2},{value:"\u5f00\u59cb\u8bad\u7ec3",id:"\u5f00\u59cb\u8bad\u7ec3",level:2},{value:"\u9884\u6d4b",id:"\u9884\u6d4b",level:2},{value:"\u7ed3\u679c\u5206\u6790",id:"\u7ed3\u679c\u5206\u6790",level:2}];function r(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"yolov8\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53",children:"yolov8\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u672c\u6587\u7684\u6587\u4ef6\u5939\u540d\u5b57\u547d\u540d\u4ee5\u53ca\u683c\u5c40\u90fd\u53ef\u4ee5\u968f\u610f\u4fee\u6539\uff08\u524d\u63d0\u662f\u4f60\u61c2\u6574\u4e2a\u903b\u8f91\uff09"}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939kinda\u4f5c\u4e3a\u6839\u76ee\u5f55",children:["\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939",(0,l.jsx)(n.code,{children:"kinda"}),"\u4f5c\u4e3a\u6839\u76ee\u5f55"]}),"\n",(0,l.jsxs)(n.h2,{id:"\u65b0\u5efa\u6587\u4ef6\u5939dataset\u5b58\u653e\u6807\u7b7e\u548c\u56fe\u7247\u6587\u4ef6",children:["\u65b0\u5efa\u6587\u4ef6\u5939",(0,l.jsx)(n.code,{children:"dataset"}),"\u5b58\u653e\u6807\u7b7e\u548c\u56fe\u7247\u6587\u4ef6"]}),"\n",(0,l.jsxs)(n.h2,{id:"dataset\u76ee\u5f55\u4e0b\u65b0\u5efaimage\u6587\u4ef6\u5939",children:[(0,l.jsx)(n.code,{children:"dataset"}),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,l.jsx)(n.code,{children:"image"}),"\u6587\u4ef6\u5939"]}),"\n",(0,l.jsxs)(n.h2,{id:"image\u76ee\u5f55\u4e0b\u65b0\u5efatrainvaltest\u6587\u4ef6\u5939",children:[(0,l.jsx)(n.code,{children:"image"}),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,l.jsx)(n.code,{children:"train"}),"\u3001",(0,l.jsx)(n.code,{children:"val"}),"\u3001",(0,l.jsx)(n.code,{children:"test"}),"\u6587\u4ef6\u5939"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u4e0d\u4e00\u5b9a\u8981\u5168\u90e8\u5efa\u7acb\uff0c\u770b\u4e2a\u4eba\u9700\u6c42"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"train \u8bad\u7ec3\u6570\u636e"}),"\n",(0,l.jsx)(n.li,{children:"val \u9a8c\u8bc1\u6570\u636e"}),"\n",(0,l.jsx)(n.li,{children:"test \u6d4b\u8bd5\u6570\u636e"}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"dataset\u76ee\u5f55\u4e0b\u65b0\u5efalabels\u6587\u4ef6\u5939",children:[(0,l.jsx)(n.code,{children:"dataset"}),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,l.jsx)(n.code,{children:"labels"}),"\u6587\u4ef6\u5939"]}),"\n",(0,l.jsxs)(n.h2,{id:"labels\u76ee\u5f55\u4e0b\u65b0\u5efatrainvaltest\u6587\u4ef6\u5939",children:[(0,l.jsx)(n.code,{children:"labels"}),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,l.jsx)(n.code,{children:"train"}),"\u3001",(0,l.jsx)(n.code,{children:"val"}),"\u3001",(0,l.jsx)(n.code,{children:"test"}),"\u6587\u4ef6\u5939"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fd9\u51e0\u4e2a\u6587\u4ef6\u5939\u540e\u7eed\u7528\u6765\u5b58\u653evolo\u683c\u5f0f\u6807\u7b7e\u6570\u636e\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"kinda\u76ee\u5f55\u4e0b\u65b0\u5efadatasetyaml\u6587\u4ef6",children:[(0,l.jsx)(n.code,{children:"kinda"}),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,l.jsx)(n.code,{children:"dataset.yaml"}),"\u6587\u4ef6"]}),"\n",(0,l.jsx)(n.p,{children:"\u6587\u4ef6\u6570\u636e\u683c\u5f0f\u5982\u4e0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"# Train/val/test sets as 1) dir: path/to/imgs, 2) file: path/to/imgs.txt, or 3) list: [path/to/imgs1, path/to/imgs2, ..]\npath: ../datasets/coco128  # dataset root dir\ntrain: images/train2017  # train images (relative to 'path') 128 images\nval: images/train2017  # val images (relative to 'path') 128 images\ntest:  # test images (optional)\n\n# Classes (80 COCO classes)\nnames:\n  0: person\n  1: bicycle\n  2: car\n  ...\n  77: teddy bear\n  78: hair drier\n  79: toothbrush\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u521b\u5efa\u6807\u7b7e",children:"\u521b\u5efa\u6807\u7b7e"}),"\n",(0,l.jsxs)(n.p,{children:["\u63a8\u8350\u56fe\u7247\u6807\u6ce8\u5de5\u5177[makesense]",(0,l.jsx)(n.a,{href:"https://www.makesense.ai",children:"https://www.makesense.ai"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://oss.kinda.info/image/202304042012171.png",alt:""})}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u6279\u91cf\u5bfc\u5165\u56fe\u7247"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u662f\u68c0\u6d4b\u7269\u4f53\u90a3\u4e48\u9009\u62e9",(0,l.jsx)(n.code,{children:"Object Detection"}),"\uff0c\u5982\u679c\u662f\u56fe\u7247\u5206\u7c7b\u4efb\u52a1\u90a3\u4e48\u9009\u62e9",(0,l.jsx)(n.code,{children:"Image recognition"})]}),"\n",(0,l.jsx)(n.h2,{id:"\u7f16\u8f91\u6807\u7b7e",children:"\u7f16\u8f91\u6807\u7b7e"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8fd9\u4e00\u6b65\u53ef\u4ee5\u5148\u505a\uff0c\u4e5f\u53ef\u4ee5\u968f\u7740\u7ed8\u5236\u6846\u7ebf\u540e\u7eed\u589e\u52a0\u6807\u7b7e\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Edit Labels"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://oss.kinda.info/image/202304042014082.png",alt:""})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://oss.kinda.info/image/202304042015890.png",alt:""})}),"\n",(0,l.jsx)(n.h2,{id:"\u7ed8\u5236\u6846\u7ebf",children:"\u7ed8\u5236\u6846\u7ebf"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://oss.kinda.info/image/202304042017879.png",alt:""})}),"\n",(0,l.jsx)(n.h2,{id:"\u9009\u62e9\u6807\u7b7e",children:"\u9009\u62e9\u6807\u7b7e"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://oss.kinda.info/image/202304042018532.png",alt:""})}),"\n",(0,l.jsx)(n.h2,{id:"\u5bfc\u51fayolo\u683c\u5f0f\u6807\u6ce8\u6587\u4ef6txt\u683c\u5f0f",children:"\u5bfc\u51fayolo\u683c\u5f0f\u6807\u6ce8\u6587\u4ef6(txt\u683c\u5f0f)"}),"\n",(0,l.jsx)(n.p,{children:"Export Annotations"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://oss.kinda.info/image/202304042018834.png",alt:""})}),"\n",(0,l.jsx)(n.p,{children:"\u5177\u4f53txt\u6587\u4ef6\u5982\u4e0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-txt",children:"0 0.481719 0.634028 0.690625 0.713278\n0 0.741094 0.524306 0.314750 0.933389\n27 0.364844 0.795833 0.078125 0.400000\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6700\u7ec8\u6587\u4ef6\u5939\u7ed3\u6784\u5982\u4e0b",children:"\u6700\u7ec8\u6587\u4ef6\u5939\u7ed3\u6784\u5982\u4e0b"}),"\n",(0,l.jsx)(n.p,{children:"\u6ce8\u610f: \u6bcf\u5f20\u56fe\u7247\u548c\u5176\u5bf9\u5e94\u7684label\u6587\u4ef6\u547d\u540d\u5fc5\u987b\u4e00\u81f4\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:".\n\u251c\u2500\u2500 dataset.yaml\n\u2514\u2500\u2500 datasets\n    \u251c\u2500\u2500 images\n    \u2502   \u251c\u2500\u2500 train\n    \u2502   \u2502   \u251c\u2500\u2500 01.jpg\n    \u2502   \u2502   \u251c\u2500\u2500 02.jpg\n    \u2502   \u2502   \u251c\u2500\u2500 03.jpg\n    \u2502   \u2502   \u2514\u2500\u2500 04.jpg\n    \u2502   \u2514\u2500\u2500 val\n    \u2502       \u251c\u2500\u2500 01.jpg\n    \u2502       \u251c\u2500\u2500 02.jpg\n    \u2502       \u251c\u2500\u2500 03.jpg\n    \u2502       \u2514\u2500\u2500 04.jpg\n    \u2514\u2500\u2500 labels\n        \u251c\u2500\u2500 train\n        \u2502   \u251c\u2500\u2500 01.txt\n        \u2502   \u251c\u2500\u2500 02.txt\n        \u2502   \u251c\u2500\u2500 03.txt\n        \u2502   \u2514\u2500\u2500 04.txt\n        \u251c\u2500\u2500 train.cache\n        \u251c\u2500\u2500 val\n        \u2502   \u251c\u2500\u2500 01.txt\n        \u2502   \u251c\u2500\u2500 02.txt\n        \u2502   \u251c\u2500\u2500 03.txt\n        \u2502   \u2514\u2500\u2500 04.txt\n        \u2514\u2500\u2500 val.cache\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5f00\u59cb\u8bad\u7ec3",children:"\u5f00\u59cb\u8bad\u7ec3"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"from ultralytics import YOLO\n\n# Create a new YOLO model from scratch\nmodel = YOLO('yolov8n.yaml')\n\n# Load a pretrained YOLO model (recommended for training)\nmodel = YOLO('yolov8n.pt')  # load an official model\n\n# Train the model using the 'dataset.yaml' dataset for 3 epochs\nresults = model.train(data='dataset.yaml', epochs=3)\n\n# Evaluate the model's performance on the validation set\nresults = model.val()\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u9884\u6d4b",children:"\u9884\u6d4b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"# Predict with the model\nresults = model('https://ultralytics.com/images/bus.jpg')  # predict on an image\n"})}),"\n",(0,l.jsxs)(n.admonition,{type:"note",children:[(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u5173\u95edmodel\u51fd\u6570\u7684\u6253\u5370"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:"results = model('https://ultralytics.com/images/bus.jpg', stream=False, verbose=False)  # predict on an image\n"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"verbose"})," \u8fd9\u4e00\u53c2\u6570\u8868\u793a\u662f\u5426\u663e\u793a\u5185\u7f6e\u7684\u7ed3\u679c\u6253\u5370\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"stream"})," \u8fd9\u4e00\u53c2\u6570\u7528\u6765\u51b3\u5b9a\u662f\u5426\u4f7f\u7528",(0,l.jsx)(n.code,{children:"cuda"}),"\uff0c\u5982\u679c\u662fmac\u4e00\u822c\u4e0d\u5f00\u542f\uff0c\u6709n\u5361\u7684\u60c5\u51b5\u4e0b\u5f00\u542f\u80fd\u6781\u5927\u7684\u52a0\u901f\u9884\u6d4b\u3002"]}),"\n"]})]}),"\n",(0,l.jsx)(n.h2,{id:"\u7ed3\u679c\u5206\u6790",children:"\u7ed3\u679c\u5206\u6790"}),"\n",(0,l.jsxs)(n.p,{children:["\u4e0a\u8ff0",(0,l.jsx)(n.code,{children:"model"}),"\u51fd\u6570\u5f97\u5230\u7684\u7ed3\u679c\u5982\u4e0b"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"[ultralytics.yolo.engine.results.Results object with attributes:\n \n _keys: ('boxes', 'masks', 'probs')\n boxes: ultralytics.yolo.engine.results.Boxes object\n keys: ['boxes']\n masks: None\n names: {0: 'person', 1: 'bicycle', 2: 'car', 3: 'motorcycle', 4: 'airplane', 5: 'bus', 6: 'train', 7: 'truck', 8: 'boat', 9: 'traffic light', 10: 'fire hydrant', 11: 'stop sign', 12: 'parking meter', 13: 'bench', 14: 'bird', 15: 'cat', 16: 'dog', 17: 'horse', 18: 'sheep', 19: 'cow', 20: 'elephant', 21: 'bear', 22: 'zebra', 23: 'giraffe', 24: 'backpack', 25: 'umbrella', 26: 'handbag', 27: 'tie', 28: 'suitcase', 29: 'frisbee', 30: 'skis', 31: 'snowboard', 32: 'sports ball', 33: 'kite', 34: 'baseball bat', 35: 'baseball glove', 36: 'skateboard', 37: 'surfboard', 38: 'tennis racket', 39: 'bottle', 40: 'wine glass', 41: 'cup', 42: 'fork', 43: 'knife', 44: 'spoon', 45: 'bowl', 46: 'banana', 47: 'apple', 48: 'sandwich', 49: 'orange', 50: 'broccoli', 51: 'carrot', 52: 'hot dog', 53: 'pizza', 54: 'donut', 55: 'cake', 56: 'chair', 57: 'couch', 58: 'potted plant', 59: 'bed', 60: 'dining table', 61: 'toilet', 62: 'tv', 63: 'laptop', 64: 'mouse', 65: 'remote', 66: 'keyboard', 67: 'cell phone', 68: 'microwave', 69: 'oven', 70: 'toaster', 71: 'sink', 72: 'refrigerator', 73: 'book', 74: 'clock', 75: 'vase', 76: 'scissors', 77: 'teddy bear', 78: 'hair drier', 79: 'toothbrush'}\n orig_img: array([[[122, 148, 172],\n         [120, 146, 170],\n         [125, 153, 177],\n         ...,\n         [157, 170, 184],\n         [158, 171, 185],\n         [158, 171, 185]],\n \n        [[127, 153, 177],\n         [124, 150, 174],\n         [127, 155, 179],\n         ...,\n         [158, 171, 185],\n         [159, 172, 186],\n         [159, 172, 186]],\n \n        [[128, 154, 178],\n         [126, 152, 176],\n         [126, 154, 178],\n         ...,\n         [158, 171, 185],\n         [158, 171, 185],\n         [158, 171, 185]],\n \n        ...,\n \n        [[185, 185, 191],\n         [182, 182, 188],\n         [179, 179, 185],\n         ...,\n         [114, 107, 112],\n         [115, 105, 111],\n         [116, 106, 112]],\n \n        [[157, 157, 163],\n         [180, 180, 186],\n         [185, 186, 190],\n         ...,\n         [107,  97, 103],\n         [102,  92,  98],\n         [108,  98, 104]],\n \n        [[112, 112, 118],\n         [160, 160, 166],\n         [169, 170, 174],\n         ...,\n         [ 99,  89,  95],\n         [ 96,  86,  92],\n         [102,  92,  98]]], dtype=uint8)\n orig_shape: (1080, 810)\n path: '/Users/kinda/Desktop/yolov8/bus.jpg'\n probs: None\n speed: {'preprocess': 0.5681514739990234, 'inference': 73.98080825805664, 'postprocess': 0.5743503570556641}]\n"})}),"\n",(0,l.jsx)(n.p,{children:"results\u5217\u8868\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5bf9\u8c61\u90fd\u6709\u5982\u4e0b\u53c2\u6570"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"_keys \u7ed3\u679c\u5b57\u5178\u4e2d\u7684\u952e\u5217\u8868\uff0c\u5305\u62ec boxes\uff08\u8fb9\u754c\u6846\uff09\u3001masks\uff08\u63a9\u819c\uff09\u548c probs\uff08\u7f6e\u4fe1\u5ea6\uff09"}),"\n",(0,l.jsx)(n.li,{children:"boxes \u4e00\u4e2a\u8fb9\u754c\u6846\u5bf9\u8c61\uff0c\u5305\u542b\u68c0\u6d4b\u5230\u7684\u8fb9\u754c\u6846\u7684\u5750\u6807\u3001\u7f6e\u4fe1\u5ea6\u548c\u7c7b\u522b\u4fe1\u606f\u7b49\u3002"}),"\n",(0,l.jsx)(n.li,{children:"keys \u4e00\u4e2a\u63a9\u819c\u5bf9\u8c61\uff0c\u5982\u679c\u6a21\u578b\u8fd4\u56de\u7684\u662f\u5b9e\u4f8b\u5206\u5272\u7ed3\u679c\uff0c\u5219\u5305\u542b\u6bcf\u4e2a\u5b9e\u4f8b\u7684\u63a9\u819c\u4fe1\u606f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"masks \u4e00\u4e2a\u7f6e\u4fe1\u5ea6\u6570\u7ec4\uff0c\u5982\u679c\u6a21\u578b\u8fd4\u56de\u7684\u662f\u5206\u7c7b\u7ed3\u679c\uff0c\u5219\u5305\u542b\u6bcf\u4e2a\u7c7b\u522b\u7684\u7f6e\u4fe1\u5ea6\u503c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"names \u4e00\u4e2a\u7c7b\u522b\u540d\u79f0\u5b57\u5178\uff0c\u5305\u542b\u6a21\u578b\u8bc6\u522b\u7684\u6bcf\u4e2a\u7c7b\u522b\u7684\u540d\u79f0\u3002"}),"\n",(0,l.jsx)(n.li,{children:"orig_img \u8f93\u5165\u56fe\u50cf\u7684\u539f\u59cb\u50cf\u7d20\u77e9\u9635\u3002"}),"\n",(0,l.jsx)(n.li,{children:"orig_shape \u8f93\u5165\u56fe\u50cf\u7684\u539f\u59cb\u5c3a\u5bf8\u3002"}),"\n",(0,l.jsx)(n.li,{children:"path \u8f93\u5165\u56fe\u50cf\u7684\u6587\u4ef6\u8def\u5f84\u6216URL\u3002"}),"\n",(0,l.jsx)(n.li,{children:"probs \u4e00\u4e2a\u7f6e\u4fe1\u5ea6\u6570\u7ec4\uff0c\u5982\u679c\u6a21\u578b\u8fd4\u56de\u7684\u662f\u5206\u7c7b\u7ed3\u679c\uff0c\u5219\u5305\u542b\u6bcf\u4e2a\u7c7b\u522b\u7684\u7f6e\u4fe1\u5ea6\u503c\u3002"}),"\n",(0,l.jsx)(n.li,{children:"speed \u4e00\u4e2a\u5b57\u5178\uff0c\u5305\u542b\u6bcf\u4e2a\u5904\u7406\u6b65\u9aa4\u7684\u5904\u7406\u65f6\u95f4\uff0c\u5305\u62ec preprocess\uff08\u9884\u5904\u7406\u65f6\u95f4\uff09\u3001inference\uff08\u63a8\u7406\u65f6\u95f4\uff09\u548c postprocess\uff08\u540e\u5904\u7406\u65f6\u95f4\uff09\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u4e2d\u7684",(0,l.jsx)(n.code,{children:"boxes"}),"\u53c8\u542b\u6709\u5982\u4e0b\u53c2\u6570"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"boxes\uff1a\u68c0\u6d4b\u5230\u7684\u7269\u4f53\u7684\u8fb9\u754c\u6846\u5750\u6807\uff0c\u6bcf\u4e2a\u8fb9\u754c\u6846\u90fd\u7531\u5de6\u4e0a\u89d2\u548c\u53f3\u4e0b\u89d2\u7684\u5750\u6807\u3001\u7f6e\u4fe1\u5ea6\u548c\u7c7b\u522b\u6807\u7b7e\u7ec4\u6210\u3002"}),"\n",(0,l.jsx)(n.li,{children:"cls\uff1a\u6bcf\u4e2a\u8fb9\u754c\u6846\u5bf9\u5e94\u7684\u7c7b\u522b\u6807\u7b7e\u3002"}),"\n",(0,l.jsx)(n.li,{children:"conf\uff1a\u6bcf\u4e2a\u8fb9\u754c\u6846\u7684\u7f6e\u4fe1\u5ea6\u5206\u6570\u3002"}),"\n",(0,l.jsx)(n.li,{children:"data\uff1a\u4e0eboxes\u5c5e\u6027\u76f8\u540c\uff0c\u8868\u793a\u68c0\u6d4b\u5230\u7684\u7269\u4f53\u7684\u8fb9\u754c\u6846\u5750\u6807\u3001\u7f6e\u4fe1\u5ea6\u548c\u7c7b\u522b\u6807\u7b7e\u3002"}),"\n",(0,l.jsx)(n.li,{children:"id\uff1a\u672a\u5b9a\u4e49\u3002"}),"\n",(0,l.jsx)(n.li,{children:"is_track\uff1a\u662f\u5426\u4e3a\u8ddf\u8e2a\u4efb\u52a1\u3002"}),"\n",(0,l.jsx)(n.li,{children:"orig_shape\uff1a\u539f\u59cb\u56fe\u50cf\u7684\u5927\u5c0f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"shape\uff1a\u5bf9\u8c61\u6570\u636e\u7684\u5927\u5c0f\u3002"}),"\n",(0,l.jsx)(n.li,{children:"xywh\uff1a\u68c0\u6d4b\u5230\u7684\u7269\u4f53\u7684\u8fb9\u754c\u6846\u5750\u6807\uff0c\u6bcf\u4e2a\u8fb9\u754c\u6846\u90fd\u7531\u4e2d\u5fc3\u5750\u6807\u3001\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u548c\u7c7b\u522b\u6807\u7b7e\u7ec4\u6210\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["xywhn\uff1a\u5c06xywh\u5f52\u4e00\u5316\u5230",(0,l.jsx)(n.code,{children:"[0,1]"}),"\u4e4b\u95f4\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"xyxy\uff1a\u68c0\u6d4b\u5230\u7684\u7269\u4f53\u7684\u8fb9\u754c\u6846\u5750\u6807\uff0c\u6bcf\u4e2a\u8fb9\u754c\u6846\u90fd\u7531\u5de6\u4e0a\u89d2\u548c\u53f3\u4e0b\u89d2\u7684\u5750\u6807\u548c\u7c7b\u522b\u6807\u7b7e\u7ec4\u6210\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}},3881:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(8101);const l={},a=i.createContext(l);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);