"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[7509],{3881:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>r});var s=a(8101);const c={},t=s.createContext(c);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(t.Provider,{value:n},e.children)}},6293:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"frontend/async\u548cawait","title":"async\u548cawait:\u8ba9\u5f02\u6b65\u7f16\u7a0b\u66f4\u7b80\u5355","description":"async/await \u57fa\u7840","source":"@site/docs/frontend/async\u548cawait.md","sourceDirName":"frontend","slug":"/frontend/async\u548cawait","permalink":"/en/docs/frontend/async\u548cawait","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/async\u548cawait.md","tags":[],"version":"current","lastUpdatedAt":1742213220000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5","permalink":"/en/docs/frontend/WxMiniprogram/\u8bf7\u6c42\u5de5\u5177\u65b9\u6cd5"},"next":{"title":"\u95ed\u5305","permalink":"/en/docs/frontend/closure"}}');var c=a(5105),t=a(3881);const i={},r="async\u548cawait:\u8ba9\u5f02\u6b65\u7f16\u7a0b\u66f4\u7b80\u5355",l={},o=[{value:"async/await \u57fa\u7840",id:"asyncawait-\u57fa\u7840",level:2},{value:"async \u5173\u952e\u5b57",id:"async-\u5173\u952e\u5b57",level:3},{value:"await\u5173\u952e\u5b57",id:"await\u5173\u952e\u5b57",level:3},{value:"\u4f7f\u7528 async/await \u91cd\u5199 promise \u4ee3\u7801",id:"\u4f7f\u7528-asyncawait-\u91cd\u5199-promise-\u4ee3\u7801",level:2},{value:"\u5b83\u5230\u5e95\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",id:"\u5b83\u5230\u5e95\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:3},{value:"\u6dfb\u52a0\u9519\u8bef\u5904\u7406",id:"\u6dfb\u52a0\u9519\u8bef\u5904\u7406",level:3},{value:"\u7b49\u5f85Promise.all()",id:"\u7b49\u5f85promiseall",level:2},{value:"async/await\u7684\u7f3a\u9677",id:"asyncawait\u7684\u7f3a\u9677",level:2},{value:"Async/await \u7684\u7c7b\u65b9\u6cd5",id:"asyncawait-\u7684\u7c7b\u65b9\u6cd5",level:2},{value:"\u6d4f\u89c8\u5668\u7684\u652f\u6301",id:"\u6d4f\u89c8\u5668\u7684\u652f\u6301",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"async\u548cawait\u8ba9\u5f02\u6b65\u7f16\u7a0b\u66f4\u7b80\u5355",children:"async\u548cawait:\u8ba9\u5f02\u6b65\u7f16\u7a0b\u66f4\u7b80\u5355"})}),"\n",(0,c.jsx)(n.h2,{id:"asyncawait-\u57fa\u7840",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#asyncawait_%E5%9F%BA%E7%A1%80",title:"Permalink to async/await \u57fa\u7840",children:"async/await \u57fa\u7840"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528 async / await \u6709\u4e24\u4e2a\u90e8\u5206\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"async-\u5173\u952e\u5b57",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#async_%E5%85%B3%E9%94%AE%E5%AD%97",title:"Permalink to async \u5173\u952e\u5b57",children:"async \u5173\u952e\u5b57"})}),"\n",(0,c.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u6211\u4eec\u4f7f\u7528\xa0",(0,c.jsx)(n.code,{children:"async"}),"\xa0\u5173\u952e\u5b57\uff0c\u628a\u5b83\u653e\u5728\u51fd\u6570\u58f0\u660e\u4e4b\u524d\uff0c\u4f7f\u5176\u6210\u4e3a\xa0",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function",children:"async function"}),"\u3002\u5f02\u6b65\u51fd\u6570\u662f\u4e00\u4e2a\u77e5\u9053\u600e\u6837\u4f7f\u7528\xa0",(0,c.jsx)(n.code,{children:"await"})," \u5173\u952e\u5b57\u8c03\u7528\u5f02\u6b65\u4ee3\u7801\u7684\u51fd\u6570\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5c1d\u8bd5\u5728\u6d4f\u89c8\u5668\u7684JS\u63a7\u5236\u53f0\u4e2d\u952e\u5165\u4ee5\u4e0b\u884c\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'function hello() { return "Hello" };\nhello();\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u8fd4\u56de\u201cHello\u201d \u2014\u2014\xa0\u6ca1\u4ec0\u4e48\u7279\u522b\u7684\uff0c\u5bf9\u5427\uff1f"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u5c06\u5176\u53d8\u6210\u5f02\u6b65\u51fd\u6570\u5462\uff1f\u8bf7\u5c1d\u8bd5\u4ee5\u4e0b\u65b9\u6cd5\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'async function hello() { return "Hello" };\nhello();\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u54c8\u3002\u73b0\u5728\u8c03\u7528\u8be5\u51fd\u6570\u4f1a\u8fd4\u56de\u4e00\u4e2a promise\u3002\u8fd9\u662f\u5f02\u6b65\u51fd\u6570\u7684\u7279\u5f81\u4e4b\u4e00 \u2014\u2014 \u5b83\u4fdd\u8bc1\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4e3a promise\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\u8868\u8fbe\u5f0f\uff08\u53c2\u89c1\xa0",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function",children:"async function expression"}),"\xa0\uff09\uff0c\u5982\u4e0b\u6240\u793a:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'let hello = async function() { return "Hello" };\nhello();\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u7bad\u5934\u51fd\u6570\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'let hello = async () => { return "Hello" };\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u4e9b\u90fd\u57fa\u672c\u4e0a\u662f\u4e00\u6837\u7684\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u8981\u5b9e\u9645\u4f7f\u7528promise\u5b8c\u6210\u65f6\u8fd4\u56de\u7684\u503c\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:".then()"}),"\u5757\uff0c\u56e0\u4e3a\u5b83\u8fd4\u56de\u7684\u662f promise\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"hello().then((value) => console.log(value))\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u751a\u81f3\u53ea\u662f\u7b80\u5199\u5982"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"hello().then(console.log)\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u5c31\u50cf\u6211\u4eec\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0\u4e2d\u770b\u5230\u7684\u90a3\u6837\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5c06\xa0",(0,c.jsx)(n.code,{children:"async"}),"\xa0\u5173\u952e\u5b57\u52a0\u5230\u51fd\u6570\u7533\u660e\u4e2d\uff0c\u53ef\u4ee5\u544a\u8bc9\u5b83\u4eec\u8fd4\u56de\u7684\u662f promise\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u8fd4\u56de\u503c\u3002\u6b64\u5916\uff0c\u5b83\u907f\u514d\u4e86\u540c\u6b65\u51fd\u6570\u4e3a\u652f\u6301\u4f7f\u7528\xa0await\xa0\u5e26\u6765\u7684\u4efb\u4f55\u6f5c\u5728\u5f00\u9500\u3002\u5728\u51fd\u6570\u58f0\u660e\u4e3a\xa0",(0,c.jsx)(n.code,{children:"async"}),"\xa0\u65f6\uff0cJavaScript\u5f15\u64ce\u4f1a\u6dfb\u52a0\u5fc5\u8981\u7684\u5904\u7406\uff0c\u4ee5\u4f18\u5316\u4f60\u7684\u7a0b\u5e8f\u3002\u723d\uff01"]}),"\n",(0,c.jsx)(n.h3,{id:"await\u5173\u952e\u5b57",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#await%E5%85%B3%E9%94%AE%E5%AD%97",title:"Permalink to await\u5173\u952e\u5b57",children:"await\u5173\u952e\u5b57"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5f53\xa0",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await",children:"await"}),"\xa0\u5173\u952e\u5b57\u4e0e\u5f02\u6b65\u51fd\u6570\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u5b83\u7684\u771f\u6b63\u4f18\u52bf\u5c31\u53d8\u5f97\u660e\u663e\u4e86 \u2014\u2014 \u4e8b\u5b9e\u4e0a\uff0c\xa0",(0,c.jsx)(n.strong,{children:"await\xa0\u53ea\u5728\u5f02\u6b65\u51fd\u6570\u91cc\u9762\u624d\u8d77\u4f5c\u7528"}),"\u3002\u5b83\u53ef\u4ee5\u653e\u5728\u4efb\u4f55\u5f02\u6b65\u7684\uff0c\u57fa\u4e8e promise \u7684\u51fd\u6570\u4e4b\u524d\u3002\u5b83\u4f1a\u6682\u505c\u4ee3\u7801\u5728\u8be5\u884c\u4e0a\uff0c\u76f4\u5230 promise \u5b8c\u6210\uff0c\u7136\u540e\u8fd4\u56de\u7ed3\u679c\u503c\u3002\u5728\u6682\u505c\u7684\u540c\u65f6\uff0c\u5176\u4ed6\u6b63\u5728\u7b49\u5f85\u6267\u884c\u7684\u4ee3\u7801\u5c31\u6709\u673a\u4f1a\u6267\u884c\u4e86\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5728\u8c03\u7528\u4efb\u4f55\u8fd4\u56dePromise\u7684\u51fd\u6570\u65f6\u4f7f\u7528\xa0",(0,c.jsx)(n.strong,{children:"await"}),"\uff0c\u5305\u62ecWeb API\u51fd\u6570\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'async function hello() {\n  return greeting = await Promise.resolve("Hello");\n};\n\nhello().then(alert);\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4e0a\u9762\u7684\u793a\u4f8b\u4e0d\u662f\u5f88\u6709\u7528\uff0c\u4f46\u5b83\u786e\u5b9e\u5c55\u793a\u4e86\u8bed\u6cd5\u3002\u8ba9\u6211\u4eec\u7ee7\u7eed\uff0c\u770b\u4e00\u4e2a\u771f\u5b9e\u793a\u4f8b\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u4f7f\u7528-asyncawait-\u91cd\u5199-promise-\u4ee3\u7801",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E4%BD%BF%E7%94%A8_asyncawait_%E9%87%8D%E5%86%99_promise_%E4%BB%A3%E7%A0%81",title:"Permalink to \xa0\u4f7f\u7528 async/await \u91cd\u5199 promise \u4ee3\u7801",children:"\u4f7f\u7528 async/await \u91cd\u5199 promise \u4ee3\u7801"})}),"\n",(0,c.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u56de\u987e\u4e00\u4e0b\u6211\u4eec\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0\u4e2d\u7b80\u5355\u7684\xa0fetch \u793a\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"fetch('coffee.jpg')\n.then(response => response.blob())\n.then(myBlob => {\n  let objectURL = URL.createObjectURL(myBlob);\n  let image = document.createElement('img');\n  image.src = objectURL;\n  document.body.appendChild(image);\n})\n.catch(e => {\n  console.log('There has been a problem with your fetch operation: ' + e.message);\n});\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5230\u73b0\u5728\u4e3a\u6b62\uff0c\u4f60\u5e94\u8be5\u5bf9 promises \u53ca\u5176\u5de5\u4f5c\u65b9\u5f0f\u6709\u4e00\u4e2a\u8f83\u597d\u7684\u7406\u89e3\u3002\u8ba9\u6211\u4eec\u5c06\u5176\u8f6c\u6362\u4e3a\u4f7f\u7528async / await\u770b\u770b\u5b83\u4f7f\u4e8b\u60c5\u53d8\u5f97\u7b80\u5355\u4e86\u591a\u5c11\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"async function myFetch() {\n  let response = await fetch('coffee.jpg');\n  let myBlob = await response.blob();\n\n  let objectURL = URL.createObjectURL(myBlob);\n  let image = document.createElement('img');\n  image.src = objectURL;\n  document.body.appendChild(image);\n}\n\nmyFetch()\n.catch(e => {\n  console.log('There has been a problem with your fetch operation: ' + e.message);\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5b83\u4f7f\u4ee3\u7801\u7b80\u5355\u591a\u4e86\uff0c\u66f4\u5bb9\u6613\u7406\u89e3 \u2014\u2014 \u53bb\u9664\u4e86\u5230\u5904\u90fd\u662f\xa0",(0,c.jsx)(n.code,{children:".then()"}),"\xa0\u4ee3\u7801\u5757\uff01"]}),"\n",(0,c.jsxs)(n.p,{children:["\u7531\u4e8e\xa0",(0,c.jsx)(n.code,{children:"async"}),"\xa0\u5173\u952e\u5b57\u5c06\u51fd\u6570\u8f6c\u6362\u4e3a promise\uff0c\u60a8\u53ef\u4ee5\u91cd\u6784\u4ee5\u4e0a\u4ee3\u7801 \u2014\u2014 \u4f7f\u7528 promise \u548c await \u7684\u6df7\u5408\u65b9\u5f0f\uff0c\u5c06\u51fd\u6570\u7684\u540e\u534a\u90e8\u5206\u62bd\u53d6\u5230\u65b0\u4ee3\u7801\u5757\u4e2d\u3002\u8fd9\u6837\u505a\u53ef\u4ee5\u66f4\u7075\u6d3b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"async function myFetch() {\n  let response = await fetch('coffee.jpg');\n  return await response.blob();\n}\n\nmyFetch().then((blob) => {\n  let objectURL = URL.createObjectURL(blob);\n  let image = document.createElement('img');\n  image.src = objectURL;\n  document.body.appendChild(image);\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u81ea\u5df1\u8f93\u5165\u793a\u4f8b\uff0c\u6216\u8fd0\u884c\u6211\u4eec\u7684 ",(0,c.jsx)(n.a,{href:"https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await.html",children:"live example"})," \uff08\u53e6\u8bf7\u53c2\u9605",(0,c.jsx)(n.a,{href:"https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await.html",children:"source code"}),"\uff09\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5b83\u5230\u5e95\u662f\u5982\u4f55\u5de5\u4f5c\u7684",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E5%AE%83%E5%88%B0%E5%BA%95%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%EF%BC%9F",title:"Permalink to \u5b83\u5230\u5e95\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f",children:"\u5b83\u5230\u5e95\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff1f"})}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u4f1a\u6ce8\u610f\u5230\u6211\u4eec\u5df2\u7ecf\u5c06\u4ee3\u7801\u5c01\u88c5\u5728\u51fd\u6570\u4e2d\uff0c\u5e76\u4e14\u6211\u4eec\u5728\xa0",(0,c.jsx)(n.code,{children:"function"}),"\xa0\u5173\u952e\u5b57\u4e4b\u524d\u5305\u542b\u4e86\xa0",(0,c.jsx)(n.code,{children:"async"}),"\xa0\u5173\u952e\u5b57\u3002\u8fd9\u662f\u5fc5\u8981\u7684 \u2013\u2013\xa0\u60a8\u5fc5\u987b\u521b\u5efa\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\u6765\u5b9a\u4e49\u4e00\u4e2a\u4ee3\u7801\u5757\uff0c\u5728\u5176\u4e2d\u8fd0\u884c\u5f02\u6b65\u4ee3\u7801; await\xa0\u53ea\u80fd\u5728\u5f02\u6b65\u51fd\u6570\u5185\u90e8\u5de5\u4f5c\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728",(0,c.jsx)(n.code,{children:"myFetch()"}),"\u51fd\u6570\u5b9a\u4e49\u4e2d\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u4ee3\u7801\u4e0e\u5148\u524d\u7684 promise \u7248\u672c\u975e\u5e38\u76f8\u4f3c\uff0c\u4f46\u5b58\u5728\u4e00\u4e9b\u5dee\u5f02\u3002\u4e0d\u9700\u8981\u9644\u52a0\xa0",(0,c.jsx)(n.code,{children:".then()"})," \u4ee3\u7801\u5757\u5230\u6bcf\u4e2apromise-based\u65b9\u6cd5\u7684\u7ed3\u5c3e\uff0c\u4f60\u53ea\u9700\u8981\u5728\u65b9\u6cd5\u8c03\u7528\u524d\u6dfb\u52a0 await \u5173\u952e\u5b57\uff0c\u7136\u540e\u628a\u7ed3\u679c\u8d4b\u7ed9\u53d8\u91cf\u3002await \u5173\u952e\u5b57\u4f7fJavaScript\u8fd0\u884c\u65f6\u6682\u505c\u4e8e\u6b64\u884c\uff0c\u5141\u8bb8\u5176\u4ed6\u4ee3\u7801\u5728\u6b64\u671f\u95f4\u6267\u884c\uff0c\u76f4\u5230\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u8fd4\u56de\u5176\u7ed3\u679c\u3002\u4e00\u65e6\u5b8c\u6210\uff0c\u60a8\u7684\u4ee3\u7801\u5c06\u7ee7\u7eed\u4ece\u4e0b\u4e00\u884c\u5f00\u59cb\u6267\u884c\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"let response = await fetch('coffee.jpg');\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u89e3\u6790\u5668\u4f1a\u5728\u6b64\u884c\u4e0a\u6682\u505c\uff0c\u76f4\u5230\u5f53\u670d\u52a1\u5668\u8fd4\u56de\u7684\u54cd\u5e94\u53d8\u5f97\u53ef\u7528\u65f6\u3002\u6b64\u65f6\xa0",(0,c.jsx)(n.code,{children:"fetch()"}),"\xa0\u8fd4\u56de\u7684 promise \u5c06\u4f1a\u5b8c\u6210\uff08fullfilled\uff09\uff0c\u8fd4\u56de\u7684 response \u4f1a\u88ab\u8d4b\u503c\u7ed9\xa0",(0,c.jsx)(n.code,{children:"response"})," \u53d8\u91cf\u3002\u4e00\u65e6\u670d\u52a1\u5668\u8fd4\u56de\u7684\u54cd\u5e94\u53ef\u7528\uff0c\u89e3\u6790\u5668\u5c31\u4f1a\u79fb\u52a8\u5230\u4e0b\u4e00\u884c\uff0c\u4ece\u800c\u521b\u5efa\u4e00\u4e2a",(0,c.jsx)(n.code,{children:"[Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)"}),"\u3002Blob\u8fd9\u884c\u4e5f\u8c03\u7528\u57fa\u4e8e\u5f02\u6b65promise\u7684\u65b9\u6cd5\uff0c\u56e0\u6b64\u6211\u4eec\u4e5f\u5728\u6b64\u5904\u4f7f\u7528",(0,c.jsx)(n.code,{children:"await"}),"\u3002\u5f53\u64cd\u4f5c\u7ed3\u679c\u8fd4\u56de\u65f6\uff0c\u6211\u4eec\u5c06\u5b83\u4ece",(0,c.jsx)(n.code,{children:"myFetch()"}),"\u51fd\u6570\u4e2d\u8fd4\u56de\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u610f\u5473\u7740\u5f53\u6211\u4eec\u8c03\u7528",(0,c.jsx)(n.code,{children:"myFetch()"}),"\u51fd\u6570\u65f6\uff0c\u5b83\u4f1a\u8fd4\u56de\u4e00\u4e2apromise\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5c06",(0,c.jsx)(n.code,{children:".then()"}),"\u94fe\u63a5\u5230\u5b83\u7684\u672b\u5c3e\uff0c\u5728\u5176\u4e2d\u6211\u4eec\u5904\u7406\u663e\u793a\u5728\u5c4f\u5e55\u4e0a\u7684",(0,c.jsx)(n.code,{children:"blob"}),"\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4f60\u53ef\u80fd\u5df2\u7ecf\u89c9\u5f97\u201c\u8fd9\u771f\u7684\u5f88\u9177\uff01\u201d\uff0c\u4f60\u662f\u5bf9\u7684 \u2014\u2014 \u7528\u66f4\u5c11\u7684.",(0,c.jsx)(n.code,{children:"then()"}),"\u5757\u6765\u5c01\u88c5\u4ee3\u7801\uff0c\u540c\u65f6\u5b83\u770b\u8d77\u6765\u5f88\u50cf\u540c\u6b65\u4ee3\u7801\uff0c\u6240\u4ee5\u5b83\u975e\u5e38\u76f4\u89c2\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u6dfb\u52a0\u9519\u8bef\u5904\u7406",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E6%B7%BB%E5%8A%A0%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86",title:"Permalink to \u6dfb\u52a0\u9519\u8bef\u5904\u7406",children:"\u6dfb\u52a0\u9519\u8bef\u5904\u7406"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u4f60\u60f3\u6dfb\u52a0\u9519\u8bef\u5904\u7406\uff0c\u4f60\u6709\u51e0\u4e2a\u9009\u62e9\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u5c06\u540c\u6b65\u7684\xa0",(0,c.jsx)(n.code,{children:"[try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)"}),"\xa0\u7ed3\u6784\u548c\xa0",(0,c.jsx)(n.code,{children:"async/await"})," \u4e00\u8d77\u4f7f\u7528 \u3002\u6b64\u793a\u4f8b\u6269\u5c55\u4e86\u6211\u4eec\u4e0a\u9762\u5c55\u793a\u7684\u7b2c\u4e00\u4e2a\u7248\u672c\u4ee3\u7801\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"async function myFetch() {\n  try {\n    let response = await fetch('coffee.jpg');\n    let myBlob = await response.blob();\n\n    let objectURL = URL.createObjectURL(myBlob);\n    let image = document.createElement('img');\n    image.src = objectURL;\n    document.body.appendChild(image);\n  } catch(e) {\n    console.log(e);\n  }\n}\n\nmyFetch();\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"catch() {}"}),"\xa0\u4ee3\u7801\u5757\u4f1a\u63a5\u6536\u4e00\u4e2a\u9519\u8bef\u5bf9\u8c61\xa0",(0,c.jsx)(n.code,{children:"e"}),"\xa0; \u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u5c06\u5176\u8bb0\u5f55\u5230\u63a7\u5236\u53f0\uff0c\u5b83\u5c06\u5411\u6211\u4eec\u63d0\u4f9b\u8be6\u7ec6\u7684\u9519\u8bef\u6d88\u606f\uff0c\u663e\u793a\u9519\u8bef\u88ab\u629b\u51fa\u7684\u4ee3\u7801\u4e2d\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u4f7f\u7528\u6211\u4eec\u4e0a\u9762\u5c55\u793a\u7684\u7b2c\u4e8c\u4e2a\uff08\u91cd\u6784\uff09\u4ee3\u7801\u7248\u672c\uff0c\u4f60\u6700\u597d\u7ee7\u7eed\u6df7\u5408\u65b9\u5f0f\u5e76\u5c06\xa0",(0,c.jsx)(n.code,{children:".catch()"}),"\xa0\u5757\u94fe\u63a5\u5230\xa0",(0,c.jsx)(n.code,{children:".then()"}),"\xa0\u8c03\u7528\u7684\u672b\u5c3e\uff0c\u5c31\u50cf\u8fd9\u6837\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"async function myFetch() {\n  let response = await fetch('coffee.jpg');\n  return await response.blob();\n}\n\nmyFetch().then((blob) => {\n  let objectURL = URL.createObjectURL(blob);\n  let image = document.createElement('img');\n  image.src = objectURL;\n  document.body.appendChild(image);\n})\n.catch((e) =>\n  console.log(e)\n);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u662f\u56e0\u4e3a\xa0",(0,c.jsx)(n.code,{children:".catch()"}),"\xa0\u5757\u5c06\u6355\u83b7\u6765\u81ea\u5f02\u6b65\u51fd\u6570\u8c03\u7528\u548cpromise\u94fe\u4e2d\u7684\u9519\u8bef\u3002\u5982\u679c\u60a8\u5728\u6b64\u5904\u4f7f\u7528\u4e86",(0,c.jsx)(n.code,{children:"try/catch"}),"\xa0\u4ee3\u7801\u5757\uff0c\u5219\u5728\u8c03\u7528\xa0",(0,c.jsx)(n.code,{children:"myFetch()"}),"\xa0\u51fd\u6570\u65f6\uff0c\u60a8\u4ecd\u53ef\u80fd\u4f1a\u6536\u5230\u672a\u5904\u7406\u7684\u9519\u8bef\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728GitHub\u4e0a\u627e\u5230\u8fd9\u4e24\u4e2a\u793a\u4f8b\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await-try-catch.html",children:"simple-fetch-async-await-try-catch.html"})," (\u53c2\u89c1\xa0",(0,c.jsx)(n.a,{href:"https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await-try-catch.html",children:"\u6e90\u7801"}),")"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await-promise-catch.html",children:"simple-fetch-async-await-promise-catch.html"})," (\u53c2\u89c1\xa0",(0,c.jsx)(n.a,{href:"https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await-promise-catch.html",children:"\u6e90\u7801"}),")"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u7b49\u5f85promiseall",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E7%AD%89%E5%BE%85promise.all",title:"Permalink to \u7b49\u5f85Promise.all()",children:"\u7b49\u5f85Promise.all()"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"async / await"}),"\xa0\u5efa\u7acb\u5728\xa0",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",children:"promises"}),"\xa0\u4e4b\u4e0a\uff0c\u56e0\u6b64\u5b83\u4e0epromises\u63d0\u4f9b\u7684\u6240\u6709\u529f\u80fd\u517c\u5bb9\u3002\u8fd9\u5305\u62ec",(0,c.jsx)(n.code,{children:"[Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)"}),"\xa0\u2013\u2013 \u4f60\u5b8c\u5168\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\xa0",(0,c.jsx)(n.code,{children:"await"})," ",(0,c.jsx)(n.code,{children:"Promise.all()"}),"\xa0\u5c06\u6240\u6709\u7ed3\u679c\u8fd4\u56de\u5230\u53d8\u91cf\u4e2d\uff0c\u5c31\u50cf\u540c\u6b65\u4ee3\u7801\u4e00\u6837\u3002\u8ba9\u6211\u4eec\u518d\u6b21\u56de\u5230",(0,c.jsx)(n.a,{href:"https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-all.html",children:"\u4e0a\u4e00\u7bc7\u4e2d\u770b\u5230\u7684\u4f8b\u5b50"}),"\u3002\u5728\u5355\u72ec\u7684\u9009\u9879\u5361\u4e2d\u6253\u5f00\u5b83\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u4e0e\u4e0b\u9762\u663e\u793a\u7684\u65b0\u7248\u672c\u8fdb\u884c\u6bd4\u8f83\u548c\u5bf9\u6bd4\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5c06\u5176\u8f6c\u6362\u4e3a async / await\uff08\u8bf7\u53c2\u9605\xa0",(0,c.jsx)(n.a,{href:"https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-all-async-await.html",children:"\u6837\u4f8b"}),"\xa0\u548c\xa0",(0,c.jsx)(n.a,{href:"https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-all-async-await.html",children:"\u6e90\u7801"}),"\uff09\uff0c\u73b0\u5728\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"async function fetchAndDecode(url, type) {\n  let response = await fetch(url);\n\n  let content;\n\n  if(type === 'blob') {\n    content = await response.blob();\n  } else if(type === 'text') {\n    content = await response.text();\n  }\n\n  return content;\n}\n\nasync function displayContent() {\n  let coffee = fetchAndDecode('coffee.jpg', 'blob');\n  let tea = fetchAndDecode('tea.jpg', 'blob');\n  let description = fetchAndDecode('description.txt', 'text');\n\n  let values = await Promise.all([coffee, tea, description]);\n\n  let objectURL1 = URL.createObjectURL(values[0]);\n  let objectURL2 = URL.createObjectURL(values[1]);\n  let descText = values[2];\n\n  let image1 = document.createElement('img');\n  let image2 = document.createElement('img');\n  image1.src = objectURL1;\n  image2.src = objectURL2;\n  document.body.appendChild(image1);\n  document.body.appendChild(image2);\n\n  let para = document.createElement('p');\n  para.textContent = descText;\n  document.body.appendChild(para);\n}\n\ndisplayContent()\n.catch((e) =>\n  console.log(e)\n);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\xa0",(0,c.jsx)(n.code,{children:"fetchAndDecode()"}),"\xa0\u51fd\u6570\u53ea\u8fdb\u884c\u4e86\u4e00\u4e01\u70b9\u7684\u4fee\u6539\u5c31\u8f6c\u6362\u6210\u4e86\u5f02\u6b65\u51fd\u6570\u3002\u8bf7\u770b",(0,c.jsx)(n.code,{children:"Promise.all()"}),"\xa0\u884c\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"let values = await Promise.all([coffee, tea, description]);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc\uff0c\u901a\u8fc7\u4f7f\u7528",(0,c.jsx)(n.code,{children:"await"}),"\uff0c\u6211\u4eec\u80fd\u591f\u5728\u4e09\u4e2apromise\u7684\u7ed3\u679c\u90fd\u53ef\u7528\u7684\u65f6\u5019\uff0c\u653e\u5165",(0,c.jsx)(n.code,{children:"values"}),"\u6570\u7ec4\u4e2d\u3002\u8fd9\u770b\u8d77\u6765\u975e\u5e38\u50cf\u540c\u6b65\u4ee3\u7801\u3002\u6211\u4eec\u9700\u8981\u5c06\u6240\u6709\u4ee3\u7801\u5c01\u88c5\u5728\u4e00\u4e2a\u65b0\u7684\u5f02\u6b65\u51fd\u6570",(0,c.jsx)(n.code,{children:"displayContent()"}),"\xa0\u4e2d\uff0c\u5c3d\u7ba1\u6ca1\u6709\u51cf\u5c11\u5f88\u591a\u4ee3\u7801\uff0c\u4f46\u80fd\u591f\u5c06\u5927\u90e8\u5206\u4ee3\u7801\u4ece\xa0",(0,c.jsx)(n.code,{children:".then()"}),"\xa0\u4ee3\u7801\u5757\u79fb\u51fa\uff0c\u4f7f\u4ee3\u7801\u5f97\u5230\u4e86\u7b80\u5316\uff0c\u66f4\u6613\u8bfb\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u9519\u8bef\u5904\u7406\uff0c\u6211\u4eec\u5728\xa0",(0,c.jsx)(n.code,{children:"displayContent()"}),"\xa0\u8c03\u7528\u4e2d\u5305\u542b\u4e86\u4e00\u4e2a\xa0",(0,c.jsx)(n.code,{children:".catch()"}),"\xa0\u4ee3\u7801\u5757;\u8fd9\u5c06\u5904\u7406\u4e24\u4e2a\u51fd\u6570\u4e2d\u51fa\u73b0\u7684\u9519\u8bef\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6ce8\u610f"}),": \u4e5f\u53ef\u4ee5\u5728\u5f02\u6b65\u51fd\u6570\u4e2d\u4f7f\u7528\u540c\u6b65\xa0",(0,c.jsx)(n.code,{children:"[finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_clause)"}),"\xa0\u4ee3\u7801\u5757\u4ee3\u66ff\xa0",(0,c.jsx)(n.code,{children:"[.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)"})," \u5f02\u6b65\u4ee3\u7801\u5757\uff0c\u4ee5\u663e\u793a\u64cd\u4f5c\u5982\u4f55\u8fdb\u884c\u7684\u6700\u7ec8\u62a5\u544a\u2014\u2014\u60a8\u53ef\u4ee5\u5728\u6211\u4eec\u7684\xa0",(0,c.jsx)(n.a,{href:"https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-finally-async-await.html",children:"live example"}),"\xa0\uff08\u67e5\u770b",(0,c.jsx)(n.a,{href:"https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-finally-async-await.html",children:"\u6e90\u4ee3\u7801"}),"\uff09\u4e2d\u770b\u5230\u8fd9\u4e00\u70b9\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"asyncawait\u7684\u7f3a\u9677",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#asyncawait%E7%9A%84%E7%BC%BA%E9%99%B7",title:"Permalink to async/await\u7684\u7f3a\u9677",children:"async/await\u7684\u7f3a\u9677"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e86\u89e3",(0,c.jsx)(n.code,{children:"Async/await"}),"\u662f\u975e\u5e38\u6709\u7528\u7684\uff0c\u4f46\u8fd8\u6709\u4e00\u4e9b\u7f3a\u70b9\u9700\u8981\u8003\u8651\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"Async/await"}),"\xa0\u8ba9\u4f60\u7684\u4ee3\u7801\u770b\u8d77\u6765\u662f\u540c\u6b65\u7684\uff0c\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\uff0c\u4e5f\u4f7f\u5f97\u5b83\u7684\u884c\u4e3a\u66f4\u52a0\u5730\u540c\u6b65\u3002 ",(0,c.jsx)(n.code,{children:"await"}),"\xa0\u5173\u952e\u5b57\u4f1a\u963b\u585e\u5176\u540e\u7684\u4ee3\u7801\uff0c\u76f4\u5230promise\u5b8c\u6210\uff0c\u5c31\u50cf\u6267\u884c\u540c\u6b65\u64cd\u4f5c\u4e00\u6837\u3002\u5b83\u786e\u5b9e\u53ef\u4ee5\u5141\u8bb8\u5176\u4ed6\u4efb\u52a1\u5728\u6b64\u671f\u95f4\u7ee7\u7eed\u8fd0\u884c\uff0c\u4f46\u60a8\u81ea\u5df1\u7684\u4ee3\u7801\u88ab\u963b\u585e\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u610f\u5473\u7740\u60a8\u7684\u4ee3\u7801\u53ef\u80fd\u4f1a\u56e0\u4e3a\u5927\u91cf",(0,c.jsx)(n.code,{children:"await"}),"\u7684promises\u76f8\u7ee7\u53d1\u751f\u800c\u53d8\u6162\u3002\u6bcf\u4e2a",(0,c.jsx)(n.code,{children:"await"}),"\u90fd\u4f1a\u7b49\u5f85\u524d\u4e00\u4e2a\u5b8c\u6210\uff0c\u800c\u4f60\u5b9e\u9645\u60f3\u8981\u7684\u662f\u6240\u6709\u7684\u8fd9\u4e9bpromises\u540c\u65f6\u5f00\u59cb\u5904\u7406\uff08\u5c31\u50cf\u6211\u4eec\u6ca1\u6709\u4f7f\u7528",(0,c.jsx)(n.code,{children:"async/await"}),"\u65f6\u90a3\u6837\uff09\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6709\u4e00\u79cd\u6a21\u5f0f\u53ef\u4ee5\u7f13\u89e3\u8fd9\u4e2a\u95ee\u9898\u2014\u2014\u901a\u8fc7\u5c06\xa0",(0,c.jsx)(n.code,{children:"Promise"}),"\xa0\u5bf9\u8c61\u5b58\u50a8\u5728\u53d8\u91cf\u4e2d\u6765\u540c\u65f6\u5f00\u59cb\u5b83\u4eec\uff0c\u7136\u540e\u7b49\u5f85\u5b83\u4eec\u5168\u90e8\u6267\u884c\u5b8c\u6bd5\u3002\u8ba9\u6211\u4eec\u770b\u4e00\u4e9b\u8bc1\u660e\u8fd9\u4e2a\u6982\u5ff5\u7684\u4f8b\u5b50\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6211\u4eec\u6709\u4e24\u4e2a\u53ef\u7528\u7684\u4f8b\u5b50 \u2014\u2014\xa0",(0,c.jsx)(n.a,{href:"https://mdn.github.io/learning-area/javascript/asynchronous/async-await/slow-async-await.html",children:"slow-async-await.html"}),"\uff08\u53c2\u89c1",(0,c.jsx)(n.a,{href:"https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/slow-async-await.html",children:"source code"}),"\uff09\u548c",(0,c.jsx)(n.a,{href:"https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html",children:"fast-async-await.html"}),"\uff08\u53c2\u89c1",(0,c.jsx)(n.a,{href:"https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/fast-async-await.html",children:"source code"}),"\uff09\u3002\u5b83\u4eec\u90fd\u4ee5\u81ea\u5b9a\u4e49promise\u51fd\u6570\u5f00\u59cb\uff0c\u8be5\u51fd\u6570\u4f7f\u7528",(0,c.jsx)(n.code,{children:"setTimeout()"}),"\xa0\u8c03\u7528\u4f2a\u9020\u5f02\u6b65\u8fdb\u7a0b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'function timeoutPromise(interval) {\n  return new Promise((resolve, reject) => {\n    setTimeout(function(){\n      resolve("done");\n    }, interval);\n  });\n};\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u7136\u540e\u6bcf\u4e2a\u5305\u542b\u4e00\u4e2a\xa0",(0,c.jsx)(n.code,{children:"timeTest()"}),"\xa0\u5f02\u6b65\u51fd\u6570\uff0c\u7b49\u5f85\u4e09\u4e2a\xa0",(0,c.jsx)(n.code,{children:"timeoutPromise()"}),"\xa0\u8c03\u7528\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"async function timeTest() {\n  ...\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6bcf\u4e00\u4e2a\u90fd\u4ee5\u8bb0\u5f55\u5f00\u59cb\u65f6\u95f4\u7ed3\u675f\uff0c\u67e5\u770b\xa0",(0,c.jsx)(n.code,{children:"timeTest()"}),"\xa0promise \u9700\u8981\u591a\u957f\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\uff0c\u7136\u540e\u8bb0\u5f55\u7ed3\u675f\u65f6\u95f4\u5e76\u62a5\u544a\u64cd\u4f5c\u603b\u5171\u9700\u8981\u591a\u957f\u65f6\u95f4\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'let startTime = Date.now();\ntimeTest().then(() => {\n  let finishTime = Date.now();\n  let timeTaken = finishTime - startTime;\n  alert("Time taken in milliseconds: " + timeTaken);\n})\n'})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"timeTest()"}),"\xa0\u51fd\u6570\u5728\u6bcf\u79cd\u60c5\u51b5\u4e0b\u90fd\u4e0d\u540c\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728",(0,c.jsx)(n.a,{href:"https://mdn.github.io/learning-area/javascript/asynchronous/async-await/slow-async-await.html",children:"slow-async-await.html"}),"\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"timeTest()"}),"\xa0\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"async function timeTest() {\n  await timeoutPromise(3000);\n  await timeoutPromise(3000);\n  await timeoutPromise(3000);\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u76f4\u63a5\u7b49\u5f85\u6240\u6709\u4e09\u4e2atimeoutPromise\uff08\uff09\u8c03\u7528\uff0c\u4f7f\u6bcf\u4e2a\u8c03\u75283\u79d2\u949f\u3002\u540e\u7eed\u7684\u6bcf\u4e00\u4e2a\u90fd\u88ab\u8feb\u7b49\u5230\u6700\u540e\u4e00\u4e2a\u5b8c\u6210 - \u5982\u679c\u4f60\u8fd0\u884c\u7b2c\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4f60\u4f1a\u770b\u5230\u5f39\u51fa\u6846\u62a5\u544a\u7684\u603b\u8fd0\u884c\u65f6\u95f4\u5927\u7ea6\u4e3a9\u79d2\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5728",(0,c.jsx)(n.a,{href:"https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html",children:"fast-async-await.html"}),"\u793a\u4f8b\u4e2d\uff0c",(0,c.jsx)(n.code,{children:"timeTest()"}),"\xa0\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"async function timeTest() {\n  const timeoutPromise1 = timeoutPromise(3000);\n  const timeoutPromise2 = timeoutPromise(3000);\n  const timeoutPromise3 = timeoutPromise(3000);\n\n  await timeoutPromise1;\n  await timeoutPromise2;\n  await timeoutPromise3;\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u4e09\u4e2aPromise\u5bf9\u8c61\u5b58\u50a8\u5728\u53d8\u91cf\u4e2d\uff0c\u8fd9\u6837\u53ef\u4ee5\u540c\u65f6\u542f\u52a8\u5b83\u4eec\u5173\u8054\u7684\u8fdb\u7a0b\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u7b49\u5f85\u4ed6\u4eec\u7684\u7ed3\u679c - \u56e0\u4e3apromise\u90fd\u5728\u57fa\u672c\u4e0a\u540c\u65f6\u5f00\u59cb\u5904\u7406\uff0cpromise\u5c06\u540c\u65f6\u5b8c\u6210;\u5f53\u60a8\u8fd0\u884c\u7b2c\u4e8c\u4e2a\u793a\u4f8b\u65f6\uff0c\u60a8\u5c06\u770b\u5230\u5f39\u51fa\u6846\u62a5\u544a\u603b\u8fd0\u884c\u65f6\u95f4\u4ec5\u8d85\u8fc73\u79d2\uff01"}),"\n",(0,c.jsx)(n.p,{children:"\u60a8\u5fc5\u987b\u4ed4\u7ec6\u6d4b\u8bd5\u60a8\u7684\u4ee3\u7801\uff0c\u5e76\u5728\u6027\u80fd\u5f00\u59cb\u53d7\u635f\u65f6\u7262\u8bb0\u8fd9\u4e00\u70b9\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u53e6\u4e00\u4e2a\u5c0f\u5c0f\u7684\u4e0d\u4fbf\u662f\u4f60\u5fc5\u987b\u5c06\u7b49\u5f85\u6267\u884c\u7684promise\u5c01\u88c5\u5728\u5f02\u6b65\u51fd\u6570\u4e2d\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"asyncawait-\u7684\u7c7b\u65b9\u6cd5",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#asyncawait_%E7%9A%84%E7%B1%BB%E6%96%B9%E6%B3%95",title:"Permalink to Async/await \u7684\u7c7b\u65b9\u6cd5",children:"Async/await \u7684\u7c7b\u65b9\u6cd5"})}),"\n",(0,c.jsxs)(n.p,{children:["\u6700\u540e\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u7c7b/\u5bf9\u8c61\u65b9\u6cd5\u524d\u9762\u6dfb\u52a0",(0,c.jsx)(n.code,{children:"async"}),"\uff0c\u4ee5\u4f7f\u5b83\u4eec\u8fd4\u56depromises\uff0c\u5e76",(0,c.jsx)(n.code,{children:"await"}),"\u5b83\u4eec\u5185\u90e8\u7684promises\u3002\u67e5\u770b ",(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#ecmascript_2015_classes",children:"ES class code we saw in our object-oriented JavaScript article"}),"\uff0c\u7136\u540e\u67e5\u770b\u4f7f\u7528\u5f02\u6b65\u65b9\u6cd5\u7684\u4fee\u6539\u7248\u672c\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"class Person {\n  constructor(first, last, age, gender, interests) {\n    this.name = {\n      first,\n      last\n    };\n    this.age = age;\n    this.gender = gender;\n    this.interests = interests;\n  }\n\n  async greeting() {\n    return await Promise.resolve(`Hi! I'm ${this.name.first}`);\n  };\n\n  farewell() {\n    console.log(`${this.name.first} has left the building. Bye for now!`);\n  };\n}\n\nlet han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7b2c\u4e00\u4e2a\u5b9e\u4f8b\u65b9\u6cd5\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"han.greeting().then(console.log);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u6d4f\u89c8\u5668\u7684\u652f\u6301",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%94%AF%E6%8C%81",title:"Permalink to \u6d4f\u89c8\u5668\u7684\u652f\u6301",children:"\u6d4f\u89c8\u5668\u7684\u652f\u6301"})}),"\n",(0,c.jsx)(n.p,{children:"\u51b3\u5b9a\u662f\u5426\u4f7f\u7528 async/await \u65f6\u7684\u4e00\u4e2a\u8003\u8651\u56e0\u7d20\u662f\u652f\u6301\u65e7\u6d4f\u89c8\u5668\u3002\u5b83\u4eec\u9002\u7528\u4e8e\u5927\u591a\u6570\u6d4f\u89c8\u5668\u7684\u73b0\u4ee3\u7248\u672c\uff0c\u4e0epromise\u76f8\u540c; \u4e3b\u8981\u7684\u652f\u6301\u95ee\u9898\u5b58\u5728\u4e8eInternet Explorer\u548cOpera Mini\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u4f7f\u7528async/await\u4f46\u662f\u62c5\u5fc3\u65e7\u7684\u6d4f\u89c8\u5668\u652f\u6301\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u4f7f\u7528",(0,c.jsx)(n.a,{href:"https://babeljs.io/",children:"BabelJS"}),"\u5e93 \u2014\u2014 \u8fd9\u5141\u8bb8\u4f60\u4f7f\u7528\u6700\u65b0\u7684JavaScript\u7f16\u5199\u5e94\u7528\u7a0b\u5e8f\uff0c\u8ba9Babel\u627e\u51fa\u7528\u6237\u6d4f\u89c8\u5668\u9700\u8981\u7684\u66f4\u6539\u3002\u5728\u9047\u5230\u4e0d\u652f\u6301async/await \u7684\u6d4f\u89c8\u5668\u65f6\uff0cBabel\u7684 polyfill \u53ef\u4ee5\u81ea\u52a8\u63d0\u4f9b\u9002\u7528\u4e8e\u65e7\u7248\u6d4f\u89c8\u5668\u7684\u5b9e\u73b0\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u603b\u7ed3",children:(0,c.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E6%80%BB%E7%BB%93",title:"Permalink to \u603b\u7ed3",children:"\u603b\u7ed3"})}),"\n",(0,c.jsx)(n.p,{children:"async/await\u63d0\u4f9b\u4e86\u4e00\u79cd\u5f88\u597d\u7684\uff0c\u7b80\u5316\u7684\u65b9\u6cd5\u6765\u7f16\u5199\u66f4\u6613\u4e8e\u9605\u8bfb\u548c\u7ef4\u62a4\u7684\u5f02\u6b65\u4ee3\u7801\u3002\u5373\u4f7f\u6d4f\u89c8\u5668\u652f\u6301\u5728\u64b0\u5199\u672c\u6587\u65f6\u6bd4\u5176\u4ed6\u5f02\u6b65\u4ee3\u7801\u673a\u5236\u66f4\u53d7\u9650\u5236\uff0c\u4f46\u65e0\u8bba\u662f\u73b0\u5728\u8fd8\u662f\u5c06\u6765\uff0c\u90fd\u503c\u5f97\u5b66\u4e60\u548c\u8003\u8651\u4f7f\u7528\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}}}]);