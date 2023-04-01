"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1223],{65614:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));n(16758);const s={title:"Swift\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42",tags:["swift","url"],categories:[["\u6280\u672f"]],description:"ios\u5f00\u53d1\u6587\u6863"},r=void 0,l={unversionedId:"frontend/Swift/basic/\u8bf7\u6c42",id:"frontend/Swift/basic/\u8bf7\u6c42",title:"Swift\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42",description:"ios\u5f00\u53d1\u6587\u6863",source:"@site/docs/frontend/Swift/basic/\u8bf7\u6c42.md",sourceDirName:"frontend/Swift/basic",slug:"/frontend/Swift/basic/\u8bf7\u6c42",permalink:"/docs/frontend/Swift/basic/\u8bf7\u6c42",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/frontend/Swift/basic/\u8bf7\u6c42.md",tags:[{label:"swift",permalink:"/docs/tags/swift"},{label:"url",permalink:"/docs/tags/url"}],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"2023\u5e744\u67081\u65e5",frontMatter:{title:"Swift\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42",tags:["swift","url"],categories:[["\u6280\u672f"]],description:"ios\u5f00\u53d1\u6587\u6863"},sidebar:"frontEndSidebar",previous:{title:"Swift\u7ee7\u627f",permalink:"/docs/frontend/Swift/basic/\u7ee7\u627f"},next:{title:"Swift\u95ed\u5305",permalink:"/docs/frontend/Swift/basic/\u95ed\u5305"}},o={},d=[{value:"URL+URLSession",id:"urlurlsession",level:2},{value:"\u4f8b\u5b501",id:"\u4f8b\u5b501",level:3},{value:"\u4f8b\u5b502",id:"\u4f8b\u5b502",level:3},{value:"\u53d1\u9001\u8bf7\u6c42",id:"\u53d1\u9001\u8bf7\u6c42",level:2},{value:"\u53d1\u9001GET\u8bf7\u6c42",id:"\u53d1\u9001get\u8bf7\u6c42",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:4},{value:"\u53d1\u9001POST\u8bf7\u6c42",id:"\u53d1\u9001post\u8bf7\u6c42",level:3},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801-1",level:4}],c={toc:d};function u(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u73b0\u6709\u7684\u7248\u672c\u82f9\u679c\u63a8\u8350\u4f7f\u7528 NSURLSession \u6765\u66ff\u6362 NSURLConnection \u5b8c\u6210\u7f51\u8def\u8bf7\u6c42\u76f8\u5173\u64cd\u4f5c.NSURLSession \u7684\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u5148\u6839\u636e\u4f1a\u8bdd\u5bf9\u8c61\u521b\u5efa\u4e00\u4e2a\u8bf7\u6c42 Task\uff0c\u7136\u540e\u6267\u884c\u8be5 Task \u5373\u53ef\u3002 ")),(0,i.kt)("h2",{id:"urlurlsession"},"URL+URLSession"),(0,i.kt)("h3",{id:"\u4f8b\u5b501"},"\u4f8b\u5b501"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'import SwiftUI\nimport CoreData\n\n\nlet url = URL(string: "https://api.muxiaoguo.cn/api/yiyan?api_key=c589aa12a29b1360&")!\n\nlet task = URLSession.shared.dataTask(with: url) {(data, response, error) in\n    guard let data = data else { return }\n    print(String(data: data, encoding: .utf8)!)\n}\n\ntask.resume()\n')),(0,i.kt)("h3",{id:"\u4f8b\u5b502"},"\u4f8b\u5b502"),(0,i.kt)("p",null,"\u8bf7\u6c42\u5e76\u89e3\u6790JSON\u6570\u636e\u5230Swift\u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'import SwiftUI\n\nstruct Response: Codable {\n    var results: [Result]\n}\n\nstruct Result: Codable {\n    var trackId: Int\n    var trackName: String\n    var collectionName: String\n}\n\nstruct ContentView: View {\n   @State private var results = [Result]()\n    \n    func loadData() async{\n        guard let url = URL(string: "https://itunes.apple.com/search?term=taylor+swift&entity=song") else {\n            print("Invalid URL")\n            return\n        }\n        do {\n            let (data, _) =  try await URLSession.shared.data(from: url)\n            print(data)\n            if let decodeResponse = try? JSONDecoder().decode(Response.self, from: data){\n                results = decodeResponse.results\n            }\n        }catch{\n            print("Invalid data")\n        }\n    }\n    var body: some View {\n        List(results, id: \\.trackId){ item in\n            VStack(alignment: .leading){\n                Text(item.trackName)\n                    .font(.headline)\n                Text(item.collectionName)\n            }\n        }\n        .task {\n            await loadData()\n        }\n    }\n}\n\nstruct ContentView_Previews: PreviewProvider {\n    static var previews: some View {\n        ContentView()\n    }\n}\n')),(0,i.kt)("h2",{id:"\u53d1\u9001\u8bf7\u6c42"},"\u53d1\u9001\u8bf7\u6c42"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u786e\u5b9a\u8bf7\u6c42\u8def\u5f84"),(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8bf7\u6c42\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4f1a\u8bdd\u5bf9\u8c61"),(0,i.kt)("li",{parentName:"ol"},"\u6839\u636e\u4f1a\u8bdd\u5bf9\u8c61\u521b\u5efa\u8bf7\u6c42\u4efb\u52a1"),(0,i.kt)("li",{parentName:"ol"},"\u6267\u884c Task"),(0,i.kt)("li",{parentName:"ol"},"\u5f53\u5f97\u5230\u670d\u52a1\u5668\u8fd4\u56de\u7684\u54cd\u5e94\u540e\uff0c\u89e3\u6790\u6570\u636e\uff08XML|JSON|HTTP\uff09")),(0,i.kt)("h3",{id:"\u53d1\u9001get\u8bf7\u6c42"},"\u53d1\u9001GET\u8bf7\u6c42"),(0,i.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"")),(0,i.kt)("h3",{id:"\u53d1\u9001post\u8bf7\u6c42"},"\u53d1\u9001POST\u8bf7\u6c42"),(0,i.kt)("h4",{id:"\u793a\u4f8b\u4ee3\u7801-1"},"\u793a\u4f8b\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"")))}u.isMDXComponent=!0}}]);