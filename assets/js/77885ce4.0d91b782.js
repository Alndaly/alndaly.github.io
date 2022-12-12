"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[5389],{16045:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));a(16758);const s={},r=void 0,l={unversionedId:"frontend/Swift/SwiftUi/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e",id:"frontend/Swift/SwiftUi/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e",title:"\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e",description:"\u6ce8\u610f\uff0cstruct\u672c\u8eab\u5c5e\u6027\u6b63\u5e38\u60c5\u51b5\u4e0b\u662f\u4e0d\u53ef\u88ab\u66f4\u6539\u7684\uff08\u9664\u4e86mutating\u524d\u7f00\uff09\u3002",source:"@site/docs/frontend/Swift/SwiftUi/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e.md",sourceDirName:"frontend/Swift/SwiftUi",slug:"/frontend/Swift/SwiftUi/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e",permalink:"/docs/frontend/Swift/SwiftUi/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/Swift/SwiftUi/\u4e0d\u540c\u7684View\u5171\u4eab\u6570\u636e.md",tags:[],version:"current",lastUpdatedAt:1670837247,formattedLastUpdatedAt:"2022\u5e7412\u670812\u65e5",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"\u591a\u4e2aclassName\u7684\u60c5\u51b5",permalink:"/docs/frontend/React/multiClass"},next:{title:"SwiftUI\u7ec4\u4ef6",permalink:"/docs/category/swiftui\u7ec4\u4ef6"}},o={},d=[{value:"\u7ed9\u9700\u8981\u88ab\u5171\u4eab\u7684\u6570\u636e\u589e\u52a0<code>@Published</code>\uff0c\u540c\u65f6\u8ba9struct\u5b9e\u73b0<code>ObservableObject</code>\u534f\u8bae",id:"\u7ed9\u9700\u8981\u88ab\u5171\u4eab\u7684\u6570\u636e\u589e\u52a0published\u540c\u65f6\u8ba9struct\u5b9e\u73b0observableobject\u534f\u8bae",level:2},{value:"\u7ed9View\u4e2d\u7684\u53d8\u91cf\u5c5e\u6027\u589e\u52a0<code>@StateObject</code>",id:"\u7ed9view\u4e2d\u7684\u53d8\u91cf\u5c5e\u6027\u589e\u52a0stateobject",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"\u5d4c\u5957\u4f7f\u7528",id:"\u5d4c\u5957\u4f7f\u7528",level:2}],c={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0cstruct\u672c\u8eab\u5c5e\u6027\u6b63\u5e38\u60c5\u51b5\u4e0b\u662f\u4e0d\u53ef\u88ab\u66f4\u6539\u7684\uff08\u9664\u4e86mutating\u524d\u7f00\uff09\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u53cc\u5411\u7ed1\u5b9a\u5b9e\u9645\u4e0a\u662fswift\u68c0\u6d4b\u5230\u5bf9\u5e94struct\u7684\u5c5e\u6027\u53d8\u4e86\u4ee5\u540e\u91cd\u65b0\u6e32\u67d3\u6574\u4e2astruct\uff0c\u8fd9\u542c\u8d77\u6765\u5f88\u6d6a\u8d39\u6027\u80fd\u4f46\u5b9e\u9645\u4e0a\u975e\u5e38\u5feb\u901f\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728\u4e0d\u540c\u7684View\u4e2d\u5171\u4eab\u76f8\u540c\u7684\u6570\u636e\u4f7f\u7528@State\u7684\u8bdd\uff0c\u90a3\u4e48\u6bcf\u4e2aView\u4e2d\u5c06\u4f1a\u90fd\u65b0\u5efa\u4e00\u4e2aStruct\u5bf9\u5e94\u7684\u5c5e\u6027\uff0c\u6545\u800c\u4e0d\u540cView\u4e2d\u7684\u6570\u636e\u662f\u4e0d\u4e92\u901a\u7684\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u6b64\u65f6\u9700\u8981\u6539\u4e3aClass\uff0c\u56e0\u4e3aClass\u4e2d\u7684\u5c5e\u6027\u662f\u53ef\u4ee5\u4fee\u6539\u7684\uff0c\u5373\u4f7f\u662f\u5e38\u91cf\u4e5f\u53ef\u4ee5\u88ab\u4fee\u6539\u3002")),(0,n.kt)("h2",{id:"\u7ed9\u9700\u8981\u88ab\u5171\u4eab\u7684\u6570\u636e\u589e\u52a0published\u540c\u65f6\u8ba9struct\u5b9e\u73b0observableobject\u534f\u8bae"},"\u7ed9\u9700\u8981\u88ab\u5171\u4eab\u7684\u6570\u636e\u589e\u52a0",(0,n.kt)("inlineCode",{parentName:"h2"},"@Published"),"\uff0c\u540c\u65f6\u8ba9struct\u5b9e\u73b0",(0,n.kt)("inlineCode",{parentName:"h2"},"ObservableObject"),"\u534f\u8bae"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'class User: ObservableObject {\n    @Published var firstName = "Bilbo"\n    @Published var lastName = "Baggins"\n}\n')),(0,n.kt)("h2",{id:"\u7ed9view\u4e2d\u7684\u53d8\u91cf\u5c5e\u6027\u589e\u52a0stateobject"},"\u7ed9View\u4e2d\u7684\u53d8\u91cf\u5c5e\u6027\u589e\u52a0",(0,n.kt)("inlineCode",{parentName:"h2"},"@StateObject")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"@StateObject var user = User()\n")),(0,n.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'class User: ObservableObject {\n    var firstName = "Bilbo"\n    var lastName = "Baggins"\n}\n\nstruct ContentView: View {\n    @StateObject var user = User()\n\n    var body: some View {\n        VStack {\n            Text("Your name is \\(user.firstName) \\(user.lastName).")\n\n            TextField("First name", text: $user.firstName)\n            TextField("Last name", text: $user.lastName)\n        }\n    }\n}\n\n')),(0,n.kt)("h2",{id:"\u5d4c\u5957\u4f7f\u7528"},"\u5d4c\u5957\u4f7f\u7528"),(0,n.kt)("p",null,"\u5728\u4e0d\u540c\u7684View\u4e2d\u5982\u679c\u8981\u76f4\u63a5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"@StateObject var user = User()"),"\u5c5e\u6027\u7684\u8bdd\uff0c\u90a3\u9700\u8981\u7684\u5305\u88c5\u5668\u5e94\u8be5\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"@ObservedObject"),"\u3002"))}u.isMDXComponent=!0}}]);