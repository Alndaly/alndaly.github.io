"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[7797],{3881:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(8101);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}},5168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"frontend/Swift/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e","title":"\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e","description":"\u6ce8\u610f\uff0cstruct\u672c\u8eab\u5c5e\u6027\u6b63\u5e38\u60c5\u51b5\u4e0b\u662f\u4e0d\u53ef\u88ab\u66f4\u6539\u7684\uff08\u9664\u4e86mutating\u524d\u7f00\uff09\u3002","source":"@site/docs/frontend/Swift/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e.md","sourceDirName":"frontend/Swift","slug":"/frontend/Swift/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e","permalink":"/docs/frontend/Swift/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e","draft":false,"unlisted":false,"editUrl":"https://github.com/Alndaly/alndaly.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/Swift/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e.md","tags":[],"version":"current","lastUpdatedAt":1742396220000,"frontMatter":{},"sidebar":"frontEndSidebar","previous":{"title":"Swift\u95ed\u5305","permalink":"/docs/frontend/Swift/basic/\u95ed\u5305"},"next":{"title":"\u672c\u5730\u901a\u77e5","permalink":"/docs/frontend/Swift/\u672c\u5730\u901a\u77e5"}}');var r=n(5105),i=n(3881);const a={},c=void 0,d={},o=[{value:"\u7ed9\u9700\u8981\u88ab\u5171\u4eab\u7684\u6570\u636e\u589e\u52a0<code>@Published</code>\uff0c\u540c\u65f6\u8ba9struct\u5b9e\u73b0<code>ObservableObject</code>\u534f\u8bae",id:"\u7ed9\u9700\u8981\u88ab\u5171\u4eab\u7684\u6570\u636e\u589e\u52a0published\u540c\u65f6\u8ba9struct\u5b9e\u73b0observableobject\u534f\u8bae",level:2},{value:"\u7ed9View\u4e2d\u7684\u53d8\u91cf\u5c5e\u6027\u589e\u52a0<code>@StateObject</code>",id:"\u7ed9view\u4e2d\u7684\u53d8\u91cf\u5c5e\u6027\u589e\u52a0stateobject",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"\u5d4c\u5957\u4f7f\u7528",id:"\u5d4c\u5957\u4f7f\u7528",level:2}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"\u6ce8\u610f\uff0cstruct\u672c\u8eab\u5c5e\u6027\u6b63\u5e38\u60c5\u51b5\u4e0b\u662f\u4e0d\u53ef\u88ab\u66f4\u6539\u7684\uff08\u9664\u4e86mutating\u524d\u7f00\uff09\u3002"}),(0,r.jsx)(t.p,{children:"\u53cc\u5411\u7ed1\u5b9a\u5b9e\u9645\u4e0a\u662fswift\u68c0\u6d4b\u5230\u5bf9\u5e94struct\u7684\u5c5e\u6027\u53d8\u4e86\u4ee5\u540e\u91cd\u65b0\u6e32\u67d3\u6574\u4e2astruct\uff0c\u8fd9\u542c\u8d77\u6765\u5f88\u6d6a\u8d39\u6027\u80fd\u4f46\u5b9e\u9645\u4e0a\u975e\u5e38\u5feb\u901f\u3002"}),(0,r.jsx)(t.p,{children:"\u5982\u679c\u5728\u4e0d\u540c\u7684View\u4e2d\u5171\u4eab\u76f8\u540c\u7684\u6570\u636e\u4f7f\u7528@State\u7684\u8bdd\uff0c\u90a3\u4e48\u6bcf\u4e2aView\u4e2d\u5c06\u4f1a\u90fd\u65b0\u5efa\u4e00\u4e2aStruct\u5bf9\u5e94\u7684\u5c5e\u6027\uff0c\u6545\u800c\u4e0d\u540cView\u4e2d\u7684\u6570\u636e\u662f\u4e0d\u4e92\u901a\u7684\u3002"}),(0,r.jsx)(t.p,{children:"\u6b64\u65f6\u9700\u8981\u6539\u4e3aClass\uff0c\u56e0\u4e3aClass\u4e2d\u7684\u5c5e\u6027\u662f\u53ef\u4ee5\u4fee\u6539\u7684\uff0c\u5373\u4f7f\u662f\u5e38\u91cf\u4e5f\u53ef\u4ee5\u88ab\u4fee\u6539\u3002"})]}),"\n",(0,r.jsxs)(t.h2,{id:"\u7ed9\u9700\u8981\u88ab\u5171\u4eab\u7684\u6570\u636e\u589e\u52a0published\u540c\u65f6\u8ba9struct\u5b9e\u73b0observableobject\u534f\u8bae",children:["\u7ed9\u9700\u8981\u88ab\u5171\u4eab\u7684\u6570\u636e\u589e\u52a0",(0,r.jsx)(t.code,{children:"@Published"}),"\uff0c\u540c\u65f6\u8ba9struct\u5b9e\u73b0",(0,r.jsx)(t.code,{children:"ObservableObject"}),"\u534f\u8bae"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'class User: ObservableObject {\n    @Published var firstName = "Bilbo"\n    @Published var lastName = "Baggins"\n}\n'})}),"\n",(0,r.jsxs)(t.h2,{id:"\u7ed9view\u4e2d\u7684\u53d8\u91cf\u5c5e\u6027\u589e\u52a0stateobject",children:["\u7ed9View\u4e2d\u7684\u53d8\u91cf\u5c5e\u6027\u589e\u52a0",(0,r.jsx)(t.code,{children:"@StateObject"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"@StateObject var user = User()\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u5b9e\u4f8b",children:"\u5b9e\u4f8b"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'class User: ObservableObject {\n    var firstName = "Bilbo"\n    var lastName = "Baggins"\n}\n\nstruct ContentView: View {\n    @StateObject var user = User()\n\n    var body: some View {\n        VStack {\n            Text("Your name is \\(user.firstName) \\(user.lastName).")\n\n            TextField("First name", text: $user.firstName)\n            TextField("Last name", text: $user.lastName)\n        }\n    }\n}\n\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u5d4c\u5957\u4f7f\u7528",children:"\u5d4c\u5957\u4f7f\u7528"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u4e0d\u540c\u7684View\u4e2d\u5982\u679c\u8981\u76f4\u63a5\u4f7f\u7528",(0,r.jsx)(t.code,{children:"@StateObject var user = User()"}),"\u5c5e\u6027\u7684\u8bdd\uff0c\u90a3\u9700\u8981\u7684\u5305\u88c5\u5668\u5e94\u8be5\u7528",(0,r.jsx)(t.code,{children:"@ObservedObject"}),"\u3002"]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);