"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[434],{35370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));n(16758);const r={},d=void 0,o={unversionedId:"frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/TextField",id:"frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/TextField",title:"TextField",description:"\u57fa\u7840\u4f7f\u7528",source:"@site/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/TextField.md",sourceDirName:"frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61",slug:"/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/TextField",permalink:"/en/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/TextField",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/TextField.md",tags:[],version:"current",lastUpdatedAt:1675524891,formattedLastUpdatedAt:"Feb 4, 2023",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"Text",permalink:"/en/docs/frontend/Swift/SwiftUi/\u5e38\u7528\u5bf9\u8c61/Text"},next:{title:"\u62bd\u5c49View",permalink:"/en/docs/frontend/Swift/SwiftUi/\u62bd\u5c49View"}},s={},l=[{value:"\u57fa\u7840\u4f7f\u7528",id:"\u57fa\u7840\u4f7f\u7528",level:2},{value:"\u8fdb\u9636\u4f7f\u7528",id:"\u8fdb\u9636\u4f7f\u7528",level:2}],f={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u7840\u4f7f\u7528"},"\u57fa\u7840\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'@State private var username = ""\n\n...\nTextField("\u8bf7\u8f93\u5165\u7528\u6237\u540d", text: $username)\n    .font(.custom("LXGWWenKaiGBScreen", size: 15))\n...\n')),(0,a.kt)("h2",{id:"\u8fdb\u9636\u4f7f\u7528"},"\u8fdb\u9636\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'@State private var username: String = ""\n@FocusState private var emailFieldIsFocused: Bool = false\n\nvar body: some View {\n    TextField(\n        "User name (email address)",\n        text: $username\n    )\n    .focused($emailFieldIsFocused) // \u805a\u7126\u72b6\u6001\n    .onSubmit {\n        validate(name: username)\n    } // \u63d0\u4ea4\u4e8b\u4ef6\n    .textInputAutocapitalization(.never) // \u53d6\u6d88\u81ea\u52a8\u5927\u5199\n    .disableAutocorrection(true) // \u53d6\u6d88\u81ea\u52a8\u7ea0\u6b63\n    .border(.secondary) // \u8fb9\u6846\n\n    Text(username)\n        .foregroundColor(emailFieldIsFocused ? .red : .blue)\n}\n')))}u.isMDXComponent=!0}}]);