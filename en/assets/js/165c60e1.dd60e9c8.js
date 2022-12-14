"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[2561],{39498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>w});var i=n(87462),s=(n(67294),n(3905));n(16758);const r={},a=void 0,o={unversionedId:"frontend/Swift/\u62bd\u5c49View",id:"frontend/Swift/\u62bd\u5c49View",title:"\u62bd\u5c49View",description:"",source:"@site/docs/frontend/Swift/\u62bd\u5c49View.md",sourceDirName:"frontend/Swift",slug:"/frontend/Swift/\u62bd\u5c49View",permalink:"/en/docs/frontend/Swift/\u62bd\u5c49View",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/Swift/\u62bd\u5c49View.md",tags:[],version:"current",lastUpdatedAt:1671012771,formattedLastUpdatedAt:"Dec 14, 2022",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"Swift\u95ed\u5305",permalink:"/en/docs/frontend/Swift/basic/\u95ed\u5305"},next:{title:"Vite\u57fa\u7840",permalink:"/en/docs/frontend/Vite/Day01/start"}},d={},w=[],l={toc:w};function c(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'import SwiftUI\n\nstruct NewView: View {\n    @Environment(\\.dismiss) var dismiss\n    var body: some View{\n        Button("dismiss"){\n            // \u624b\u52a8\u64cd\u4f5c\u9000\u51fa\u5f53\u524dView\n            dismiss()\n        }\n    }\n}\n\nstruct OriginView: View {\n    @State private var showingSheet = false\n    var body: some View {\n        Button("Show Sheet"){\n            showingSheet.toggle()\n        }\n        .sheet(isPresented: $showingSheet) {\n            NewView()\n        }\n    }\n}\n\nstruct OriginView_Previews: PreviewProvider {\n    static var previews: some View {\n        OriginView()\n    }\n}\n\n')),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://upload.kinda.info/image/202212131517510.png",alt:null})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://upload.kinda.info/image/202212131517124.png",alt:null})))}c.isMDXComponent=!0}}]);