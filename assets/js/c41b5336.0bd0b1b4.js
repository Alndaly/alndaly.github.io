"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3462],{73187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>g,toc:()=>r});var l=n(87462),o=(n(67294),n(3905));n(16758);const a={},s=void 0,g={unversionedId:"others/python-skill",id:"others/python-skill",title:"python-skill",description:"logging\u6a21\u5757\u7684\u57fa\u5c42level\u65e0\u6cd5\u8986\u76d6\u95ee\u9898",source:"@site/docs/others/python-skill.md",sourceDirName:"others",slug:"/others/python-skill",permalink:"/docs/others/python-skill",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/python-skill.md",tags:[],version:"current",lastUpdatedAt:1681142816,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{},sidebar:"anyThing",previous:{title:"python\u7684os\u6a21\u5757",permalink:"/docs/others/os"},next:{title:"SSH \u4e09\u6b65\u89e3\u51b3\u514d\u5bc6\u767b\u5f55",permalink:"/docs/others/ssh/login-without-password"}},i={},r=[{value:"<code>logging</code>\u6a21\u5757\u7684\u57fa\u5c42level\u65e0\u6cd5\u8986\u76d6\u95ee\u9898",id:"logging\u6a21\u5757\u7684\u57fa\u5c42level\u65e0\u6cd5\u8986\u76d6\u95ee\u9898",level:2},{value:"\u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84",id:"\u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84",level:2},{value:"\u83b7\u53d6\u7236\u7ea7\u7684\u7236\u7ea7\u7684\u76ee\u5f55\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84",id:"\u83b7\u53d6\u7236\u7ea7\u7684\u7236\u7ea7\u7684\u76ee\u5f55\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84",level:2}],p={toc:r};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"logging\u6a21\u5757\u7684\u57fa\u5c42level\u65e0\u6cd5\u8986\u76d6\u95ee\u9898"},(0,o.kt)("inlineCode",{parentName:"h2"},"logging"),"\u6a21\u5757\u7684\u57fa\u5c42level\u65e0\u6cd5\u8986\u76d6\u95ee\u9898"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{12}","{12}":!0},"import logging\nfrom logging.handlers import QueueHandler\nimport os\n\nclass MyLogger(object):\n  def __init__(self,logger):\n    # \u5224\u65ad\u662f\u5426\u5b58\u5728log\u6587\u4ef6\u5939\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u521b\u5efa\n    if(not os.path.exists(os.path.abspath('./logs'))):\n        os.mkdir(os.path.abspath('./logs'))\n    self.logger = logging.getLogger(logger)\n    self.fmt=logging.Formatter('%(asctime)s - %(name)s - %(levelname)s -%(message)s ')\n    logging.root.setLevel(logging.NOTSET)\n    #logging.basicConfig(level=logging.NOTSET)\n \n \n  def getlog(self):\n \n    ch=logging.StreamHandler()\n    fh = logging.handlers.RotatingFileHandler(os.path.abspath('./logs/test.log'), maxBytes=20000, backupCount=5)\n \n    ch.setFormatter(self.fmt)\n    fh.setFormatter(self.fmt)\n \n    ch.setLevel(logging.INFO)\n    fh.setLevel(logging.INFO)\n \n    self.logger.addHandler(ch)\n    self.logger.addHandler(fh)\n    return self.logger\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"from logging.handlers import QueueHandler"),"\u8fd9\u4e00\u884c\u662f\u4e3a\u4e86\u5f15\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"logging.handlers"),"\uff0c\u907f\u514d\u4e0b\u6587\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"logging.handlers.RotatingFileHandler"),"\u62a5\u9519\u3002")),(0,o.kt)("h2",{id:"\u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84"},"\u83b7\u53d6\u5f53\u524d\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pathlib import Path\nimport os\n\nBASE_DIR = Path(__file__).resolve()\n")),(0,o.kt)("h2",{id:"\u83b7\u53d6\u7236\u7ea7\u7684\u7236\u7ea7\u7684\u76ee\u5f55\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84"},"\u83b7\u53d6\u7236\u7ea7\u7684\u7236\u7ea7\u7684\u76ee\u5f55\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pathlib import Path\nimport os\n\nBASE_DIR = Path(__file__).resolve().parent.parent\n")))}d.isMDXComponent=!0}}]);