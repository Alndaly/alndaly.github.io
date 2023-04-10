"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1369],{74025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var l=a(87462),n=(a(67294),a(3905));a(16758);const i={},o="yolov8\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53",d={unversionedId:"artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53",id:"artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53",title:"yolov8\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53",description:"\u672c\u6587\u7684\u6587\u4ef6\u5939\u540d\u5b57\u547d\u540d\u4ee5\u53ca\u683c\u5c40\u90fd\u53ef\u4ee5\u968f\u610f\u4fee\u6539\uff08\u524d\u63d0\u662f\u4f60\u61c2\u6574\u4e2a\u903b\u8f91\uff09",source:"@site/docs/artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53.md",sourceDirName:"artificial-intelligence/yolov8",slug:"/artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53",permalink:"/docs/artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/artificial-intelligence/yolov8/\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53.md",tags:[],version:"current",lastUpdatedAt:1681142816,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{},sidebar:"ai",previous:{title:"mac\u4f7f\u7528GPU\u7684\u4e00\u4e9b\u95ee\u9898",permalink:"/docs/artificial-intelligence/tensorflow/mac\u4f7f\u7528GPU\u7684\u4e00\u4e9b\u95ee\u9898"}},s={},r=[{value:"\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939<code>kinda</code>\u4f5c\u4e3a\u6839\u76ee\u5f55",id:"\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939kinda\u4f5c\u4e3a\u6839\u76ee\u5f55",level:2},{value:"\u65b0\u5efa\u6587\u4ef6\u5939<code>dataset</code>\u5b58\u653e\u6807\u7b7e\u548c\u56fe\u7247\u6587\u4ef6",id:"\u65b0\u5efa\u6587\u4ef6\u5939dataset\u5b58\u653e\u6807\u7b7e\u548c\u56fe\u7247\u6587\u4ef6",level:2},{value:"<code>dataset</code>\u76ee\u5f55\u4e0b\u65b0\u5efa<code>image</code>\u6587\u4ef6\u5939",id:"dataset\u76ee\u5f55\u4e0b\u65b0\u5efaimage\u6587\u4ef6\u5939",level:2},{value:"<code>image</code>\u76ee\u5f55\u4e0b\u65b0\u5efa<code>train</code>\u3001<code>val</code>\u3001<code>test</code>\u6587\u4ef6\u5939",id:"image\u76ee\u5f55\u4e0b\u65b0\u5efatrainvaltest\u6587\u4ef6\u5939",level:2},{value:"<code>dataset</code>\u76ee\u5f55\u4e0b\u65b0\u5efa<code>labels</code>\u6587\u4ef6\u5939",id:"dataset\u76ee\u5f55\u4e0b\u65b0\u5efalabels\u6587\u4ef6\u5939",level:2},{value:"<code>labels</code>\u76ee\u5f55\u4e0b\u65b0\u5efa<code>train</code>\u3001<code>val</code>\u3001<code>test</code>\u6587\u4ef6\u5939",id:"labels\u76ee\u5f55\u4e0b\u65b0\u5efatrainvaltest\u6587\u4ef6\u5939",level:2},{value:"<code>kinda</code>\u76ee\u5f55\u4e0b\u65b0\u5efa<code>dataset.yaml</code>\u6587\u4ef6",id:"kinda\u76ee\u5f55\u4e0b\u65b0\u5efadatasetyaml\u6587\u4ef6",level:2},{value:"\u521b\u5efa\u6807\u7b7e",id:"\u521b\u5efa\u6807\u7b7e",level:2},{value:"\u7f16\u8f91\u6807\u7b7e",id:"\u7f16\u8f91\u6807\u7b7e",level:2},{value:"\u7ed8\u5236\u6846\u7ebf",id:"\u7ed8\u5236\u6846\u7ebf",level:2},{value:"\u9009\u62e9\u6807\u7b7e",id:"\u9009\u62e9\u6807\u7b7e",level:2},{value:"\u5bfc\u51fayolo\u683c\u5f0f\u6807\u6ce8\u6587\u4ef6(txt\u683c\u5f0f)",id:"\u5bfc\u51fayolo\u683c\u5f0f\u6807\u6ce8\u6587\u4ef6txt\u683c\u5f0f",level:2},{value:"\u6700\u7ec8\u6587\u4ef6\u5939\u7ed3\u6784\u5982\u4e0b",id:"\u6700\u7ec8\u6587\u4ef6\u5939\u7ed3\u6784\u5982\u4e0b",level:2},{value:"\u5f00\u59cb\u8bad\u7ec3",id:"\u5f00\u59cb\u8bad\u7ec3",level:2},{value:"\u9884\u6d4b",id:"\u9884\u6d4b",level:2}],p={toc:r};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yolov8\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53"},"yolov8\u81ea\u5b9a\u4e49\u8bc6\u522b\u7269\u4f53"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u7684\u6587\u4ef6\u5939\u540d\u5b57\u547d\u540d\u4ee5\u53ca\u683c\u5c40\u90fd\u53ef\u4ee5\u968f\u610f\u4fee\u6539\uff08\u524d\u63d0\u662f\u4f60\u61c2\u6574\u4e2a\u903b\u8f91\uff09")),(0,n.kt)("h2",{id:"\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939kinda\u4f5c\u4e3a\u6839\u76ee\u5f55"},"\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939",(0,n.kt)("inlineCode",{parentName:"h2"},"kinda"),"\u4f5c\u4e3a\u6839\u76ee\u5f55"),(0,n.kt)("h2",{id:"\u65b0\u5efa\u6587\u4ef6\u5939dataset\u5b58\u653e\u6807\u7b7e\u548c\u56fe\u7247\u6587\u4ef6"},"\u65b0\u5efa\u6587\u4ef6\u5939",(0,n.kt)("inlineCode",{parentName:"h2"},"dataset"),"\u5b58\u653e\u6807\u7b7e\u548c\u56fe\u7247\u6587\u4ef6"),(0,n.kt)("h2",{id:"dataset\u76ee\u5f55\u4e0b\u65b0\u5efaimage\u6587\u4ef6\u5939"},(0,n.kt)("inlineCode",{parentName:"h2"},"dataset"),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,n.kt)("inlineCode",{parentName:"h2"},"image"),"\u6587\u4ef6\u5939"),(0,n.kt)("h2",{id:"image\u76ee\u5f55\u4e0b\u65b0\u5efatrainvaltest\u6587\u4ef6\u5939"},(0,n.kt)("inlineCode",{parentName:"h2"},"image"),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,n.kt)("inlineCode",{parentName:"h2"},"train"),"\u3001",(0,n.kt)("inlineCode",{parentName:"h2"},"val"),"\u3001",(0,n.kt)("inlineCode",{parentName:"h2"},"test"),"\u6587\u4ef6\u5939"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u4e0d\u4e00\u5b9a\u8981\u5168\u90e8\u5efa\u7acb\uff0c\u770b\u4e2a\u4eba\u9700\u6c42")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"train \u8bad\u7ec3\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"val \u9a8c\u8bc1\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"test \u6d4b\u8bd5\u6570\u636e")),(0,n.kt)("h2",{id:"dataset\u76ee\u5f55\u4e0b\u65b0\u5efalabels\u6587\u4ef6\u5939"},(0,n.kt)("inlineCode",{parentName:"h2"},"dataset"),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,n.kt)("inlineCode",{parentName:"h2"},"labels"),"\u6587\u4ef6\u5939"),(0,n.kt)("h2",{id:"labels\u76ee\u5f55\u4e0b\u65b0\u5efatrainvaltest\u6587\u4ef6\u5939"},(0,n.kt)("inlineCode",{parentName:"h2"},"labels"),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,n.kt)("inlineCode",{parentName:"h2"},"train"),"\u3001",(0,n.kt)("inlineCode",{parentName:"h2"},"val"),"\u3001",(0,n.kt)("inlineCode",{parentName:"h2"},"test"),"\u6587\u4ef6\u5939"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8fd9\u51e0\u4e2a\u6587\u4ef6\u5939\u540e\u7eed\u7528\u6765\u5b58\u653evolo\u683c\u5f0f\u6807\u7b7e\u6570\u636e\u6587\u4ef6\u3002")),(0,n.kt)("h2",{id:"kinda\u76ee\u5f55\u4e0b\u65b0\u5efadatasetyaml\u6587\u4ef6"},(0,n.kt)("inlineCode",{parentName:"h2"},"kinda"),"\u76ee\u5f55\u4e0b\u65b0\u5efa",(0,n.kt)("inlineCode",{parentName:"h2"},"dataset.yaml"),"\u6587\u4ef6"),(0,n.kt)("p",null,"\u6587\u4ef6\u6570\u636e\u683c\u5f0f\u5982\u4e0b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"# Train/val/test sets as 1) dir: path/to/imgs, 2) file: path/to/imgs.txt, or 3) list: [path/to/imgs1, path/to/imgs2, ..]\npath: ../datasets/coco128  # dataset root dir\ntrain: images/train2017  # train images (relative to 'path') 128 images\nval: images/train2017  # val images (relative to 'path') 128 images\ntest:  # test images (optional)\n\n# Classes (80 COCO classes)\nnames:\n  0: person\n  1: bicycle\n  2: car\n  ...\n  77: teddy bear\n  78: hair drier\n  79: toothbrush\n")),(0,n.kt)("h2",{id:"\u521b\u5efa\u6807\u7b7e"},"\u521b\u5efa\u6807\u7b7e"),(0,n.kt)("p",null,"\u63a8\u8350\u56fe\u7247\u6807\u6ce8\u5de5\u5177","[makesense]",(0,n.kt)("a",{parentName:"p",href:"https://www.makesense.ai"},"https://www.makesense.ai")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202304042012171.png",alt:null})),(0,n.kt)("p",null,"\u53ef\u4ee5\u6279\u91cf\u5bfc\u5165\u56fe\u7247"),(0,n.kt)("p",null,"\u5982\u679c\u662f\u68c0\u6d4b\u7269\u4f53\u90a3\u4e48\u9009\u62e9",(0,n.kt)("inlineCode",{parentName:"p"},"Object Detection"),"\uff0c\u5982\u679c\u662f\u56fe\u7247\u5206\u7c7b\u4efb\u52a1\u90a3\u4e48\u9009\u62e9",(0,n.kt)("inlineCode",{parentName:"p"},"Image recognition")),(0,n.kt)("h2",{id:"\u7f16\u8f91\u6807\u7b7e"},"\u7f16\u8f91\u6807\u7b7e"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e00\u6b65\u53ef\u4ee5\u5148\u505a\uff0c\u4e5f\u53ef\u4ee5\u968f\u7740\u7ed8\u5236\u6846\u7ebf\u540e\u7eed\u589e\u52a0\u6807\u7b7e\u3002")),(0,n.kt)("p",null,"Edit Labels"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202304042014082.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202304042015890.png",alt:null})),(0,n.kt)("h2",{id:"\u7ed8\u5236\u6846\u7ebf"},"\u7ed8\u5236\u6846\u7ebf"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202304042017879.png",alt:null})),(0,n.kt)("h2",{id:"\u9009\u62e9\u6807\u7b7e"},"\u9009\u62e9\u6807\u7b7e"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202304042018532.png",alt:null})),(0,n.kt)("h2",{id:"\u5bfc\u51fayolo\u683c\u5f0f\u6807\u6ce8\u6587\u4ef6txt\u683c\u5f0f"},"\u5bfc\u51fayolo\u683c\u5f0f\u6807\u6ce8\u6587\u4ef6(txt\u683c\u5f0f)"),(0,n.kt)("p",null,"Export Annotations"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://oss.kinda.info/image/202304042018834.png",alt:null})),(0,n.kt)("p",null,"\u5177\u4f53txt\u6587\u4ef6\u5982\u4e0b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"0 0.481719 0.634028 0.690625 0.713278\n0 0.741094 0.524306 0.314750 0.933389\n27 0.364844 0.795833 0.078125 0.400000\n")),(0,n.kt)("h2",{id:"\u6700\u7ec8\u6587\u4ef6\u5939\u7ed3\u6784\u5982\u4e0b"},"\u6700\u7ec8\u6587\u4ef6\u5939\u7ed3\u6784\u5982\u4e0b"),(0,n.kt)("p",null,"\u6ce8\u610f: \u6bcf\u5f20\u56fe\u7247\u548c\u5176\u5bf9\u5e94\u7684label\u6587\u4ef6\u547d\u540d\u5fc5\u987b\u4e00\u81f4\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 dataset.yaml\n\u2514\u2500\u2500 datasets\n    \u251c\u2500\u2500 images\n    \u2502   \u251c\u2500\u2500 train\n    \u2502   \u2502   \u251c\u2500\u2500 01.jpg\n    \u2502   \u2502   \u251c\u2500\u2500 02.jpg\n    \u2502   \u2502   \u251c\u2500\u2500 03.jpg\n    \u2502   \u2502   \u2514\u2500\u2500 04.jpg\n    \u2502   \u2514\u2500\u2500 val\n    \u2502       \u251c\u2500\u2500 01.jpg\n    \u2502       \u251c\u2500\u2500 02.jpg\n    \u2502       \u251c\u2500\u2500 03.jpg\n    \u2502       \u2514\u2500\u2500 04.jpg\n    \u2514\u2500\u2500 labels\n        \u251c\u2500\u2500 train\n        \u2502   \u251c\u2500\u2500 01.txt\n        \u2502   \u251c\u2500\u2500 02.txt\n        \u2502   \u251c\u2500\u2500 03.txt\n        \u2502   \u2514\u2500\u2500 04.txt\n        \u251c\u2500\u2500 train.cache\n        \u251c\u2500\u2500 val\n        \u2502   \u251c\u2500\u2500 01.txt\n        \u2502   \u251c\u2500\u2500 02.txt\n        \u2502   \u251c\u2500\u2500 03.txt\n        \u2502   \u2514\u2500\u2500 04.txt\n        \u2514\u2500\u2500 val.cache\n")),(0,n.kt)("h2",{id:"\u5f00\u59cb\u8bad\u7ec3"},"\u5f00\u59cb\u8bad\u7ec3"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from ultralytics import YOLO\n\n# Create a new YOLO model from scratch\nmodel = YOLO('yolov8n.yaml')\n\n# Load a pretrained YOLO model (recommended for training)\nmodel = YOLO('yolov8n.pt')  # load an official model\n\n# Train the model using the 'dataset.yaml' dataset for 3 epochs\nresults = model.train(data='dataset.yaml', epochs=3)\n\n# Evaluate the model's performance on the validation set\nresults = model.val()\n")),(0,n.kt)("h2",{id:"\u9884\u6d4b"},"\u9884\u6d4b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Predict with the model\nresults = model('https://ultralytics.com/images/bus.jpg')  # predict on an image\n")))}m.isMDXComponent=!0}}]);