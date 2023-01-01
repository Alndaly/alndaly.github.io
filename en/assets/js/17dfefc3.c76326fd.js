"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7269],{56127:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=e(87462),r=(e(67294),e(3905));e(16758);const i={title:"Swift\u4e0b\u6807\u811a\u672c"},s=void 0,o={unversionedId:"frontend/Swift/basic/\u4e0b\u6807\u811a\u672c",id:"frontend/Swift/basic/\u4e0b\u6807\u811a\u672c",title:"Swift\u4e0b\u6807\u811a\u672c",description:"\u4e0b\u6807\u811a\u672c \u53ef\u4ee5\u5b9a\u4e49\u5728\u7c7b\uff08Class\uff09\u3001\u7ed3\u6784\u4f53\uff08structure\uff09\u548c\u679a\u4e3e\uff08enumeration\uff09\u8fd9\u4e9b\u76ee\u6807\u4e2d\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u662f\u8bbf\u95ee\u5bf9\u8c61\u3001\u96c6\u5408\u6216\u5e8f\u5217\u7684\u5feb\u6377\u65b9\u5f0f\uff0c\u4e0d\u9700\u8981\u518d\u8c03\u7528\u5b9e\u4f8b\u7684\u7279\u5b9a\u7684\u8d4b\u503c\u548c\u8bbf\u95ee\u65b9\u6cd5\u3002",source:"@site/docs/frontend/Swift/basic/\u4e0b\u6807\u811a\u672c.md",sourceDirName:"frontend/Swift/basic",slug:"/frontend/Swift/basic/\u4e0b\u6807\u811a\u672c",permalink:"/en/docs/frontend/Swift/basic/\u4e0b\u6807\u811a\u672c",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/frontend/Swift/basic/\u4e0b\u6807\u811a\u672c.md",tags:[],version:"current",lastUpdatedAt:1672546497,formattedLastUpdatedAt:"Jan 1, 2023",frontMatter:{title:"Swift\u4e0b\u6807\u811a\u672c"},sidebar:"frontEndSidebar",previous:{title:"Swift\u5224\u65ad\u8bed\u53e5",permalink:"/en/docs/frontend/Swift/basic/ifelse"},next:{title:"Swift\u51fd\u6570",permalink:"/en/docs/frontend/Swift/basic/\u51fd\u6570"}},l={},d=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"\u4e0b\u6807\u811a\u672c\u9009\u9879",id:"\u4e0b\u6807\u811a\u672c\u9009\u9879",level:2}],u={toc:d};function p(n){let{components:t,...e}=n;return(0,r.kt)("wrapper",(0,a.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e0b\u6807\u811a\u672c \u53ef\u4ee5\u5b9a\u4e49\u5728\u7c7b\uff08Class\uff09\u3001\u7ed3\u6784\u4f53\uff08structure\uff09\u548c\u679a\u4e3e\uff08enumeration\uff09\u8fd9\u4e9b\u76ee\u6807\u4e2d\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u662f\u8bbf\u95ee\u5bf9\u8c61\u3001\u96c6\u5408\u6216\u5e8f\u5217\u7684\u5feb\u6377\u65b9\u5f0f\uff0c\u4e0d\u9700\u8981\u518d\u8c03\u7528\u5b9e\u4f8b\u7684\u7279\u5b9a\u7684\u8d4b\u503c\u548c\u8bbf\u95ee\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u7528\u4e0b\u6807\u811a\u672c\u8bbf\u95ee\u4e00\u4e2a\u6570\u7ec4(Array)\u5b9e\u4f8b\u4e2d\u7684\u5143\u7d20\u53ef\u4ee5\u8fd9\u6837\u5199 someArray","[index]"," \uff0c\u8bbf\u95ee\u5b57\u5178(Dictionary)\u5b9e\u4f8b\u4e2d\u7684\u5143\u7d20\u53ef\u4ee5\u8fd9\u6837\u5199 someDictionary","[key]","\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u540c\u4e00\u4e2a\u76ee\u6807\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2a\u4e0b\u6807\u811a\u672c\uff0c\u901a\u8fc7\u7d22\u5f15\u503c\u7c7b\u578b\u7684\u4e0d\u540c\u6765\u8fdb\u884c\u91cd\u8f7d\uff0c\u800c\u4e14\u7d22\u5f15\u503c\u7684\u4e2a\u6570\u53ef\u4ee5\u662f\u591a\u4e2a\u3002"),(0,r.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"subscript(index: Int) -> Int {\n    get {\n        // \u7528\u4e8e\u4e0b\u6807\u811a\u672c\u503c\u7684\u58f0\u660e\n    }\n    set(newValue) {\n        // \u6267\u884c\u8d4b\u503c\u64cd\u4f5c\n    }\n}\n")),(0,r.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'class daysofaweek {\n    private var days = ["Sunday", "Monday", "Tuesday", "Wednesday",\n        "Thursday", "Friday", "saturday"]\n    subscript(index: Int) -> String {\n        get {\n            return days[index]   // \u58f0\u660e\u4e0b\u6807\u811a\u672c\u7684\u503c\n        }\n        set(newValue) {\n            self.days[index] = newValue   // \u6267\u884c\u8d4b\u503c\u64cd\u4f5c\n        }\n    }\n}\nvar p = daysofaweek()\n\nprint(p[0])\nprint(p[1])\nprint(p[2])\nprint(p[3])\n')),(0,r.kt)("h2",{id:"\u4e0b\u6807\u811a\u672c\u9009\u9879"},"\u4e0b\u6807\u811a\u672c\u9009\u9879"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0b\u6807\u811a\u672c\u5141\u8bb8\u4efb\u610f\u6570\u91cf\u7684\u5165\u53c2\u7d22\u5f15\uff0c\u5e76\u4e14\u6bcf\u4e2a\u5165\u53c2\u7c7b\u578b\u4e5f\u6ca1\u6709\u9650\u5236\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4e0b\u6807\u811a\u672c\u7684\u8fd4\u56de\u503c\u4e5f\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4e0b\u6807\u811a\u672c\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\u53c2\u6570\u548c\u53ef\u53d8\u53c2\u6570\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4e00\u4e2a\u7c7b\u6216\u7ed3\u6784\u4f53\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u9700\u8981\u63d0\u4f9b\u591a\u4e2a\u4e0b\u6807\u811a\u672c\u5b9e\u73b0\uff0c\u5728\u5b9a\u4e49\u4e0b\u6807\u811a\u672c\u65f6\u901a\u8fc7\u4f20\u5165\u53c2\u6570\u7684\u7c7b\u578b\u8fdb\u884c\u533a\u5206\uff0c\u4f7f\u7528\u4e0b\u6807\u811a\u672c\u65f6\u4f1a\u81ea\u52a8\u5339\u914d\u5408\u9002\u7684\u4e0b\u6807\u811a\u672c\u5b9e\u73b0\u8fd0\u884c\uff0c\u8fd9\u5c31\u662f",(0,r.kt)("strong",{parentName:"p"},"\u4e0b\u6807\u811a\u672c\u7684\u91cd\u8f7d"),"\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct Matrix {\n    let rows: Int, columns: Int\n    var print: [Double]\n    init(rows: Int, columns: Int) {\n        self.rows = rows\n        self.columns = columns\n        print = Array(repeating: 0.0, count: rows * columns)\n    }\n    subscript(row: Int, column: Int) -> Double {\n        get {\n            return print[(row * columns) + column]\n        }\n        set {\n            print[(row * columns) + column] = newValue\n        }\n    }\n}\n// \u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684 3 \u884c 3 \u5217\u7684Matrix\u5b9e\u4f8b\nvar mat = Matrix(rows: 3, columns: 3)\n\n// \u901a\u8fc7\u4e0b\u6807\u811a\u672c\u8bbe\u7f6e\u503c\nmat[0,0] = 1.0\nmat[0,1] = 2.0\nmat[1,0] = 3.0\nmat[1,1] = 5.0\n\n// \u901a\u8fc7\u4e0b\u6807\u811a\u672c\u83b7\u53d6\u503c\nprint("\\(mat[0,0])")\nprint("\\(mat[0,1])")\nprint("\\(mat[1,0])")\nprint("\\(mat[1,1])")\n')))}p.isMDXComponent=!0}}]);