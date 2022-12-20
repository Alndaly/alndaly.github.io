"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8206],{82454:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var t=a(87462),o=(a(67294),a(3905));a(16758);const l={},d=void 0,r={unversionedId:"frontend/Swift/Codable",id:"frontend/Swift/Codable",title:"Codable",description:"Codeable\u5176\u5b9e\u5c31\u662fEcodable\u548cDecodable\u4e24\u4e2a\u534f\u8bae\u7684\u7ec4\u5408\u3002",source:"@site/docs/frontend/Swift/Codable.md",sourceDirName:"frontend/Swift",slug:"/frontend/Swift/Codable",permalink:"/docs/frontend/Swift/Codable",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/Swift/Codable.md",tags:[],version:"current",lastUpdatedAt:1671519357,formattedLastUpdatedAt:"2022\u5e7412\u670820\u65e5",frontMatter:{},sidebar:"frontEndSidebar",previous:{title:"\u591a\u4e2aclassName\u7684\u60c5\u51b5",permalink:"/docs/frontend/React/multiClass"},next:{title:"CoreData",permalink:"/docs/frontend/Swift/CoreData"}},i={},c=[{value:"\u666e\u901a\u7684<code>Codable</code>",id:"\u666e\u901a\u7684codable",level:2},{value:"<code>Codable</code>\u5d4c\u5957",id:"codable\u5d4c\u5957",level:2},{value:"<code>Codable</code>\u7ed3\u5408<code>@Published</code>",id:"codable\u7ed3\u5408published",level:2}],s={toc:c};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Codeable\u5176\u5b9e\u5c31\u662fEcodable\u548cDecodable\u4e24\u4e2a\u534f\u8bae\u7684\u7ec4\u5408\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u672c\u8eab\u7684\u4f5c\u7528\u4e00\u822c\u7528\u6765\u81ea\u52a8\u8fdb\u884cJSON/XML\u6216\u8005\u5176\u4ed6\u7684\u6570\u636e\u548cSwift\u7c7b\u4e4b\u95f4\u7684\u4e92\u76f8\u8f6c\u5316\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Encodable")," \u8fd9\u4e2a\u534f\u8bae\u7528\u5728\u90a3\u4e9b\u9700\u8981\u88ab\u7f16\u7801\u7684\u7c7b\u578b\u4e0a\u3002\u5982\u679c\u9075\u5b88\u4e86\u8fd9\u4e2a\u534f\u8bae\uff0c\u5e76\u4e14\u8fd9\u4e2a\u7c7b\u7684\u6240\u6709\u5c5e\u6027\u90fd\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"Encodable")," \u7684\uff0c \u7f16\u8bd1\u5668\u5c31\u4f1a\u81ea\u52a8\u7684\u751f\u6210\u76f8\u5173\u7684\u5b9e\u73b0\u3002\u5982\u679c\u4e0d\u662f\uff0c\u6216\u8005\u8bf4\u4f60\u9700\u8981\u81ea\u5b9a\u4e49\u4e00\u4e9b\u4e1c\u897f\uff0c\u5c31\u9700\u8981\u81ea\u5df1\u5b9e\u73b0\u4e86\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Decodable"),"\u8fd9\u4e2a\u534f\u8bae\u8ddf ",(0,o.kt)("inlineCode",{parentName:"p"},"Encodable")," \u76f8\u53cd\uff0c\u5b83\u8868\u793a\u90a3\u4e9b\u80fd\u591f\u88ab\u89e3\u6863\u7684\u7c7b\u578b\u3002\u8ddf ",(0,o.kt)("inlineCode",{parentName:"p"},"Encodable")," \u4e00\u6837,\u7f16\u8bd1\u5668\u4e5f\u4f1a\u81ea\u52a8\u4e3a\u4f60\u751f\u6210\u76f8\u5173\u7684\u5b9e\u73b0\uff0c\u524d\u63d0\u662f\u6240\u6709\u5c5e\u6027\u90fd\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"Decodable")," \u7684."),(0,o.kt)("p",null,"\u8fd9\u4e24\u4e2a\u534f\u8bae\u7684\u5b9e\u73b0\u90fd\u5f88\u7b80\u5355\uff0c\u5185\u90e8\u90fd\u53ea\u6709\u4e00\u4e2a\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public protocol Encodable {\n    func encode(to encoder: Encoder) throws\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"public protocol Decodable {\n    init(from decoder: Decoder) throws\n}\n")),(0,o.kt)("h2",{id:"\u666e\u901a\u7684codable"},"\u666e\u901a\u7684",(0,o.kt)("inlineCode",{parentName:"h2"},"Codable")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'class User: ObservableObject, Codable{\n    var name = "Paul Hudsonn"\n}\n')),(0,o.kt)("h2",{id:"codable\u5d4c\u5957"},(0,o.kt)("inlineCode",{parentName:"h2"},"Codable"),"\u5d4c\u5957"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"struct Response: Codable {\n    var results: [Result]\n}\n\nstruct Result: Codable {\n    var trackId: Int\n    var trackName: String\n    var collectionName: String\n}\n")),(0,o.kt)("h2",{id:"codable\u7ed3\u5408published"},(0,o.kt)("inlineCode",{parentName:"h2"},"Codable"),"\u7ed3\u5408",(0,o.kt)("inlineCode",{parentName:"h2"},"@Published")),(0,o.kt)("p",null,"\u81ea\u52a8\u89e3\u6790\u7684\u540c\u65f6\u53c8\u80fd\u591f\u4fdd\u6301\u6570\u636e\u7684\u5168\u5c40\u5171\u4eab\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@Publish"),"\u6ce8\u89e3\u4f1a\u7ed9\u5c5e\u6027\u589e\u52a0\u5f88\u591a\u7684\u65b9\u6cd5\uff0c\u7ed9\u5c5e\u6027\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"@Publish"),"\u7684\u540c\u65f6\u5e76\u4e0d\u4f1a\u81ea\u52a8\u7ed9\u5176\u6240\u5c5e\u7684\u7c7b\u4e5f\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"@Publish"),"\uff0c\u6b64\u65f6\u5b9e\u73b0Codable\u9664\u4e86\u589e\u52a0\u6ce8\u89e3\u4e4b\u5916\uff0c\u8fd8\u9700\u8981\u624b\u52a8\u53bb\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"Codable"),"\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7ed9\u5c5e\u6027\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"li"},"@Publush"),"\u6ce8\u89e3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'@Published var name = "Paul Hudsonn"\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u589e\u52a0CodingKey\u4f5c\u4e3aCodable\u7684Key")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"enum CodingKeys: CodingKey {\n    case name\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"li"},"init"),"\u65b9\u6cd5\uff0c\u6ce8\u610f\u8fd9\u4e2a\u65b9\u6cd5\u8981\u52a0\u4e0a",(0,o.kt)("inlineCode",{parentName:"li"},"required"),"\u524d\u7f00\u8868\u793a\u5fc5\u987b\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"required init(from decoder: Decoder) throws {\n    let container = try decoder.container(keyedBy: CodingKeys.self)\n    name = try container.decode(String.self, forKey: .name)\n}\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"li"},"encode"),"\u65b9\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func encode(to encoder: Encoder) throws {\n    var container = encoder.container(keyedBy: CodingKeys.self)\n    try container.encode(name, forKey: .name)\n}\n")),(0,o.kt)("p",null,"\u5b9e\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'class User: ObservableObject, Codable{\n    enum CodingKeys: CodingKey {\n        case name\n    }\n    @Published var name = "Paul Hudsonn"\n    required init(from decoder: Decoder) throws {\n        let container = try decoder.container(keyedBy: CodingKeys.self)\n        name = try container.decode(String.self, forKey: .name)\n    }\n    func encode(to encoder: Encoder) throws {\n        var container = encoder.container(keyedBy: CodingKeys.self)\n        try container.encode(name, forKey: .name)\n    }\n}\n')))}p.isMDXComponent=!0}}]);