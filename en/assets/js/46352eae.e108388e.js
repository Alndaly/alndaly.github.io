"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3529],{72180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var s=n(87462),i=(n(67294),n(3905));n(16758);const a={title:"Github Actions\u81ea\u52a8\u5316\u90e8\u7f72"},l=void 0,o={unversionedId:"others/Github/Actions",id:"others/Github/Actions",title:"Github Actions\u81ea\u52a8\u5316\u90e8\u7f72",description:"\u9891\u7e41\u7684\u624b\u52a8\u8fdb\u884cyarn build\uff0c\u8fde\u63a5\u670d\u52a1\u5668\uff0c\u90e8\u7f72\u9879\u76ee\u8fc7\u4e8e\u9ebb\u70e6\uff0cGithub\u63d0\u4f9b\u7684Actions\u53ef\u4ee5\u5f88\u597d\u7684\u8fdb\u884c\u8fd9\u4e00\u90e8\u7f72\u8fc7\u7a0b\u7684\u81ea\u52a8\u5316\u3002",source:"@site/docs/others/Github/Actions.md",sourceDirName:"others/Github",slug:"/others/Github/Actions",permalink:"/en/docs/others/Github/Actions",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/Github/Actions.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"Github Actions\u81ea\u52a8\u5316\u90e8\u7f72"},sidebar:"anyThing",previous:{title:"Docker\u955c\u50cf\u7684\u4f7f\u7528",permalink:"/en/docs/others/Docker/Docker\u955c\u50cf\u7684\u4f7f\u7528"},next:{title:"Git\u547d\u4ee4\u884c\u6280\u5de7",permalink:"/en/docs/others/Github/Git\u547d\u4ee4\u884c\u6280\u5de7"}},r={},u=[{value:"\u521b\u5efaSSH\u5bc6\u94a5",id:"\u521b\u5efassh\u5bc6\u94a5",level:2},{value:"\u5c06\u5bc6\u94a5\u90e8\u7f72\u5230\u670d\u52a1\u5668",id:"\u5c06\u5bc6\u94a5\u90e8\u7f72\u5230\u670d\u52a1\u5668",level:2},{value:"\u4e00\u952e\u81ea\u52a8\u90e8\u7f72",id:"\u4e00\u952e\u81ea\u52a8\u90e8\u7f72",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"Actions\u8303\u4f8b",id:"actions\u8303\u4f8b",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u9891\u7e41\u7684\u624b\u52a8\u8fdb\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"yarn build"),"\uff0c\u8fde\u63a5\u670d\u52a1\u5668\uff0c\u90e8\u7f72\u9879\u76ee\u8fc7\u4e8e\u9ebb\u70e6\uff0cGithub\u63d0\u4f9b\u7684Actions\u53ef\u4ee5\u5f88\u597d\u7684\u8fdb\u884c\u8fd9\u4e00\u90e8\u7f72\u8fc7\u7a0b\u7684\u81ea\u52a8\u5316\u3002")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u4fe1\u606f\u7684\u5b89\u5168\uff0c\u8003\u8651\u5230\u8fd9\u4e00\u70b9\uff0c\u5c3d\u91cf\u907f\u514d\u5728\u516c\u5f00\u5e93\u4f7f\u7528\u4e0e\u670d\u52a1\u5668\u76f8\u5173\u7684SSH\u3002")),(0,i.kt)("h2",{id:"\u521b\u5efassh\u5bc6\u94a5"},"\u521b\u5efaSSH\u5bc6\u94a5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen -m PEM -t rsa -b 4096 \n")),(0,i.kt)("h2",{id:"\u5c06\u5bc6\u94a5\u90e8\u7f72\u5230\u670d\u52a1\u5668"},"\u5c06\u5bc6\u94a5\u90e8\u7f72\u5230\u670d\u52a1\u5668"),(0,i.kt)("h3",{id:"\u4e00\u952e\u81ea\u52a8\u90e8\u7f72"},"\u4e00\u952e\u81ea\u52a8\u90e8\u7f72"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-copy-id -i [\u516c\u94a5\u6587\u4ef6\u8def\u5f84] [\u670d\u52a1\u5668\u8d26\u6237]@[\u670d\u52a1\u5668\u5730\u5740] \n")),(0,i.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ssh -i [\u79c1\u94a5\u6587\u4ef6\u8def\u5f84] [\u670d\u52a1\u5668\u8d26\u6237]@[\u670d\u52a1\u5668\u5730\u5740]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-i")," \u6307\u5b9a\u79c1\u94a5\u6587\u4ef6\u8def\u5f84\uff08\u4e0d\u52a0\u8fd9\u4e00\u53c2\u6570\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"~/.ssh/id_rsa"),"\u6587\u4ef6\uff09")),(0,i.kt)("h2",{id:"actions\u8303\u4f8b"},"Actions\u8303\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title='deploy.yml'",title:"'deploy.yml'"},'name: Build And Deploy To Aliyun ECS\non:                               # \u8be5 CI/CD \u89e6\u53d1\u65f6\u7684\u4e8b\u4ef6\n  push:                           # \u53ea\u8981push\u4ee3\u7801 \u5c31\u89e6\u53d1\u6d41\u7a0b\uff0c\u66f4\u591a\u89e6\u53d1\u4e8b\u4ef6\u8bf7\u53c2\u8003\u5b98\u65b9\u6587\u6863\n    branches: [ master ]\n  pull_request:\n    branches: [ master ]    \njobs:                             # \u9700\u8981\u6267\u884c\u7684\u4efb\u52a1\uff0c\u53ef\u4ee5\u6709\u591a\u4e2a\u4efb\u52a1\uff0c\u6240\u6709\u7684 job \u90fd\u662f\u5e76\u884c\u7684\uff0c\u4f46\u5f80\u5f80\u4f1a\u6709\u4f9d\u8d56\u5173\u7cfb\n  build:\n    runs-on: ubuntu-latest        # github\u5206\u914d\u7684\u8fd0\u884c\u5e73\u53f0\uff0c2-core CPU/7 GB of RAM memory/14 GB of SSD disk space\n    steps:                        # \u67d0\u4e2a\u4efb\u52a1\u7684\u4e00\u7cfb\u5217\u6b65\u9aa4,\u5982\u524d\u7aef\u9700\u8981\u5b89\u88c5\u4f9d\u8d56\uff0c\u7f16\u8bd1\u6253\u5305\u4ee3\u7801\u7b49\u7b49\n    - uses: actions/checkout@v2          #\u9009\u62e9\u4e00\u4e2a \u73b0\u6709\u7684action\uff0c\u6267\u884c\u4f60\u7684\u64cd\u4f5c\n      with:\n        persist-credentials: false\n        ref: master\n        submodules: true\n    - name: Install Node.js\n      uses: actions/setup-node@v1\n      with:\n        node-version: \'16.x\'\n    - name: Install npm dependencies\n      run: npm install\n    - name: Run build task\n      run: npm run build --if-present\n    - name: Deploy to aliyun server        # \u4e3a step \u6307\u5b9a\u4e00\u4e2a\u540d\u79f0\uff0c\u5c06\u4f1a\u5728 github action \u7684\u63a7\u5236\u53f0\u4e2d\u663e\u793a\n      uses: easingthemes/ssh-deploy@v2.1.5      #\u53ef\u4ee5\u8bbf\u95ee\u7684\u4ed3\u5e93\uff0c\u5b9e\u73b0\u7684\u4e0a\u4f20\u670d\u52a1\u5668\u6b65\u9aa4\u88ab\u5c01\u88c5\u5728\u6b64action\n      env:\n        SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}  #\u8fd9\u4e2a\u662f\u963f\u91cc\u4e91\u7684\u79c1\u94a5\n        ARGS: "-avzr --delete"\n        SOURCE: "dist/"\n        REMOTE_HOST: ${{ secrets.REMOTE_HOST }}    #\u963f\u91cc\u4e91\u7684 ip\n        REMOTE_USER: ${{ secrets.REMOTE_USER }}    #\u963f\u91cc\u4e91\u7528\u6237\n        TARGET: ${{ secrets.TARGET }}     #\u88ab\u90e8\u7f72\u7684\u670d\u52a1\u5668\u8def\u5f84 \n')))}c.isMDXComponent=!0}}]);