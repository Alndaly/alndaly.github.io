"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8727],{33963:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var n=a(87462),p=(a(67294),a(3905));a(16758);const l={title:"python\u7684os\u6a21\u5757"},i=void 0,o={unversionedId:"others/os",id:"others/os",title:"python\u7684os\u6a21\u5757",description:"path\u5b50\u6a21\u5757",source:"@site/docs/others/os.md",sourceDirName:"others",slug:"/others/os",permalink:"/en/docs/others/os",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/master/docs/others/os.md",tags:[],version:"current",lastUpdatedAt:1680354179,formattedLastUpdatedAt:"Apr 1, 2023",frontMatter:{title:"python\u7684os\u6a21\u5757"},sidebar:"anyThing",previous:{title:"HTTP\u6216HTTPS\u5185\u7f51\u7a7f\u900f\u670d\u52a1",permalink:"/en/docs/others/intranet-penetration/frp"},next:{title:"python-skill",permalink:"/en/docs/others/python-skill"}},d={},r=[{value:"<code>path</code>\u5b50\u6a21\u5757",id:"path\u5b50\u6a21\u5757",level:2},{value:"<code>exists(path)</code>",id:"existspath",level:3},{value:"<code>isfile(path)</code>",id:"isfilepath",level:3},{value:"<code>isdir(path)</code>",id:"isdirpath",level:3},{value:"<code>basename(path)</code>",id:"basenamepath",level:3},{value:"<code>dirname(path)</code>",id:"dirnamepath",level:3},{value:"<code>split(path)</code>",id:"splitpath",level:3},{value:"<code>splitext(path)</code>",id:"splitextpath",level:3},{value:"<code>join(path, *paths)</code>",id:"joinpath-paths",level:3},{value:"<code>getsize(path)</code>",id:"getsizepath",level:3},{value:"\u76ee\u5f55\u64cd\u4f5c",id:"\u76ee\u5f55\u64cd\u4f5c",level:2},{value:"<code>listdir(path=&#39;.&#39;)</code>",id:"listdirpath",level:3},{value:"<code>mkdir(path, mode=0o777)</code>",id:"mkdirpath-mode0o777",level:3},{value:"<code>makedirs(path, mode=0o777)</code>",id:"makedirspath-mode0o777",level:3},{value:"<code>rmdir(path)</code>",id:"rmdirpath",level:3},{value:"<code>removedirs(path)</code>",id:"removedirspath",level:3},{value:"<code>remove(path)</code>",id:"removepath",level:3},{value:"\u590d\u5236\u6587\u4ef6",id:"\u590d\u5236\u6587\u4ef6",level:3},{value:"\u5220\u9664\u6587\u4ef6",id:"\u5220\u9664\u6587\u4ef6",level:3},{value:"\u5176\u4ed6<code>os</code>\u63a5\u53e3",id:"\u5176\u4ed6os\u63a5\u53e3",level:2},{value:"<code>getenv(key, default=None)</code>",id:"getenvkey-defaultnone",level:3},{value:"<code>get_exec_path(env=None)</code>",id:"get_exec_pathenvnone",level:3},{value:"<code>system(command)</code>",id:"systemcommand",level:3}],s={toc:r};function h(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"path\u5b50\u6a21\u5757"},(0,p.kt)("inlineCode",{parentName:"h2"},"path"),"\u5b50\u6a21\u5757"),(0,p.kt)("p",null,"\u6d89\u53ca\u4e0e\u78c1\u76d8\u6587\u4ef6\u64cd\u4f5c\uff0c\u6700\u5e38\u4f7f\u7528\u7684\u5f53\u5c5e",(0,p.kt)("inlineCode",{parentName:"p"},"path"),"\u6a21\u5757\u4e86\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"path"),"\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"os"),"\u7684\u5b50\u6a21\u5757\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,p.kt)("inlineCode",{parentName:"p"},"from os import path"),"\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,p.kt)("inlineCode",{parentName:"p"},"os.path"),"\u5c5e\u6027\u7684\u65b9\u5f0f\u4f7f\u7528\u3002\u672c\u6587\uff0c\u4e3a\u4e86\u4fdd\u6301\u4e00\u81f4\u6027\uff0c\u7edf\u4e00\u91c7\u7528\u540e\u8005\u7684\u4e66\u5199\u5f62\u5f0f\u3002"),(0,p.kt)("h3",{id:"existspath"},(0,p.kt)("inlineCode",{parentName:"h3"},"exists(path)")),(0,p.kt)("p",null,"\u68c0\u6d4b\u6587\u4ef6\u6216\u76ee\u5f55\u662f\u5426\u5b58\u5728\u3002\u5b58\u5728\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"p"},"True"),", \u4e0d\u5b58\u5728\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"p"},"False"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.path.exists("dog.jpeg")\n')),(0,p.kt)("h3",{id:"isfilepath"},(0,p.kt)("inlineCode",{parentName:"h3"},"isfile(path)")),(0,p.kt)("p",null,"\u5224\u65ad\u662f\u5426\u4e3a\u6587\u4ef6\u3002\u662f\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"p"},"True"),"\uff0c \u4e0d\u662f\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"p"},"False"),"\u3002\u4e5f\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u6587\u4ef6\u662f\u5426\u5b58\u5728\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.path.isfile("dogs/")\n')),(0,p.kt)("h3",{id:"isdirpath"},(0,p.kt)("inlineCode",{parentName:"h3"},"isdir(path)")),(0,p.kt)("p",null,"\u5224\u65ad\u662f\u5426\u4e3a\u76ee\u5f55\u3002\u662f\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"p"},"True"),"\uff0c\u4e0d\u662f\u8fd4\u56de",(0,p.kt)("inlineCode",{parentName:"p"},"False"),"\u3002\u4e5f\u53ef\u4ee5\u7528\u6765\u5224\u65ad\u76ee\u5f55\u662f\u5426\u5b58\u5728\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.path.isdir("dogs/")\n')),(0,p.kt)("h3",{id:"basenamepath"},(0,p.kt)("inlineCode",{parentName:"h3"},"basename(path)")),(0,p.kt)("p",null,"\u8fd4\u56de\u4e0d\u5305\u542b\u6240\u5728\u76ee\u5f55\u7684\u6587\u4ef6\u540d\uff08\u542b\u6269\u5c55\uff09\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.path.basename("dir1/dir2/file.ext")\n')),(0,p.kt)("h3",{id:"dirnamepath"},(0,p.kt)("inlineCode",{parentName:"h3"},"dirname(path)")),(0,p.kt)("p",null,"\u8fd4\u56de\u6587\u4ef6\u6240\u5728\u76ee\u5f55\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.path.dirname("dir1/dir2/file.ext")\n')),(0,p.kt)("h3",{id:"splitpath"},(0,p.kt)("inlineCode",{parentName:"h3"},"split(path)")),(0,p.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5143\u7ec4\u3002\u5143\u7ec4\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u6587\u4ef6\u6240\u5728\u76ee\u5f55\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e3a\u6587\u4ef6\u540d\uff08\u542b\u6269\u5c55\uff09\u3002\u7b49\u6548\u4e8e",(0,p.kt)("inlineCode",{parentName:"p"},"(dirname(path), basename(path))"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.path.split("dir1/dir2/file.ext")\n')),(0,p.kt)("h3",{id:"splitextpath"},(0,p.kt)("inlineCode",{parentName:"h3"},"splitext(path)")),(0,p.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5143\u7ec4\u3002\u5143\u7ec4\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u6587\u4ef6\u6240\u5728\u76ee\u5f55\u548c\u6587\u4ef6\u540d\uff08\u4e0d\u542b\u6269\u5c55\uff09\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e3a\u6269\u5c55\u540d\uff08\u5305\u542b",(0,p.kt)("inlineCode",{parentName:"p"},"."),"\uff09\u3002\u5e38\u7528\u6765\u8bfb\u53d6\u6216\u66f4\u6539\u6587\u4ef6\u6269\u5c55\u540d\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.path.splitext("dir1/dir2/file.ext")\n')),(0,p.kt)("h3",{id:"joinpath-paths"},(0,p.kt)("inlineCode",{parentName:"h3"},"join(path, *paths)")),(0,p.kt)("p",null,"\u5c06\u8def\u5f84\u4e0d\u540c\u90e8\u5206\u62fc\u63a5\u6210\u4e00\u4e2a\u5b8c\u6574\u7684\u8def\u5f84\u3002\u7b49\u6548\u4e8e",(0,p.kt)("inlineCode",{parentName:"p"},"os.sep.join([path, *paths])"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.path.join("dir1", "dir2", "file.ext")\n')),(0,p.kt)("h3",{id:"getsizepath"},(0,p.kt)("inlineCode",{parentName:"h3"},"getsize(path)")),(0,p.kt)("p",null,"\u8fd4\u56de\u6587\u4ef6\u5927\u5c0f\u3002\u5355\u4f4d\u5b57\u8282\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.path.getsize("dog.jpeg")\n')),(0,p.kt)("h2",{id:"\u76ee\u5f55\u64cd\u4f5c"},"\u76ee\u5f55\u64cd\u4f5c"),(0,p.kt)("h3",{id:"listdirpath"},(0,p.kt)("inlineCode",{parentName:"h3"},"listdir(path='.')")),(0,p.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5217\u8868\u3002\u5217\u8868\u4e3a\u7ed9\u5b9a\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u548c\u5b50\u76ee\u5f55\uff0c\u4f46\u4e0d\u5305\u542b\u7279\u6b8a\u76ee\u5f55",(0,p.kt)("inlineCode",{parentName:"p"},"."),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},".."),"\u3002"),(0,p.kt)("p",null,"\u9ed8\u8ba4\u4e3a\u5f53\u524d\u76ee\u5f55\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.listdir("dogs")[:5]\n')),(0,p.kt)("h3",{id:"mkdirpath-mode0o777"},(0,p.kt)("inlineCode",{parentName:"h3"},"mkdir(path, mode=0o777)")),(0,p.kt)("p",null,"\u521b\u5efa\u540d\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"path"),"\u7684\u76ee\u5f55\u3002\u5e76\u4ee5\u6570\u5b57\u5f62\u5f0f\u6307\u5b9a\u76ee\u5f55\u6743\u9650\uff0c\u9ed8\u8ba4\u6743\u9650\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"777"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.mkdir("newdir")\n')),(0,p.kt)("h3",{id:"makedirspath-mode0o777"},(0,p.kt)("inlineCode",{parentName:"h3"},"makedirs(path, mode=0o777)")),(0,p.kt)("p",null,"\u9012\u5f52\u65b9\u5f0f\u521b\u5efa\u8def\u5f84\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"path"),"\u7684\u76ee\u5f55\u3002\u5e76\u4ee5\u6570\u5b57\u5f62\u5f0f\u6307\u5b9a\u76ee\u5f55\u6743\u9650\uff0c\u9ed8\u8ba4\u6743\u9650\u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"777"),"\u3002\u53ef\u4ee5\u770b\u4f5c\u529f\u80fd\u66f4\u5f3a\u5927\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"mkdir"),"\uff0c\u5b83\u4f1a\u81ea\u52a8\u521b\u5efa\u53f6\u5b50\u8282\u70b9\u76ee\u5f55\u7684\u6240\u6709\u4e0a\u7ea7\u76ee\u5f55\uff0c\u800c",(0,p.kt)("inlineCode",{parentName:"p"},"mkdir"),"\u5fc5\u987b\u5728\u4e0a\u7ea7\u76ee\u5f55\u5df2\u7ecf\u5b58\u5728\u60c5\u51b5\u4e0b\uff0c\u624d\u80fd\u521b\u5efa\u53f6\u5b50\u8282\u70b9\u7684\u76ee\u5f55\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.makedirs("parent/child/newdir")\n')),(0,p.kt)("h3",{id:"rmdirpath"},(0,p.kt)("inlineCode",{parentName:"h3"},"rmdir(path)")),(0,p.kt)("p",null,"\u5220\u9664\u76ee\u5f55\u3002\u76ee\u5f55\u5fc5\u987b\u5b58\u5728\uff0c\u5e76\u4e14\u53ea\u80fd\u5220\u9664\u7a7a\u76ee\u5f55\u3002\u4e0d\u5b58\u5728\u6216\u4e0d\u4e3a\u7a7a\uff0c\u90fd\u4f1a\u5f02\u5e38\u3002\u8981\u60f3\u9012\u5f52\u5220\u9664\u6574\u4e2a\u76ee\u5f55\u6811\uff0c\u8bf7\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"shutil.rmtree()"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.rmdir("newdir")\n')),(0,p.kt)("h3",{id:"removedirspath"},(0,p.kt)("inlineCode",{parentName:"h3"},"removedirs(path)")),(0,p.kt)("p",null,"\u9012\u5f52\u5220\u9664\u76ee\u5f55\u3002\u76ee\u5f55\u5fc5\u987b\u5b58\u5728\uff0c\u5e76\u4e14\u53ea\u80fd\u5220\u9664\u7a7a\u76ee\u5f55\u3002\u4e0d\u5b58\u5728\u6216\u4e0d\u4e3a\u7a7a\uff0c\u90fd\u4f1a\u5f02\u5e38\u3002\u4e0e",(0,p.kt)("inlineCode",{parentName:"p"},"rmdir"),"\u4e0d\u540c\u7684\u662f\uff0c\u5728\u5220\u9664\u4e86\u53f6\u5b50\u8282\u70b9\u76ee\u5f55\u540e\uff0c\u4f1a\u9010\u6b21\u5220\u9664\u4e0a\u7ea7\u76ee\u5f55\uff0c\u76f4\u5230\u9047\u5230\u4e0d\u4e3a\u7a7a\u7684\u76ee\u5f55\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.removedirs("parent/child/newdir")\n')),(0,p.kt)("h3",{id:"removepath"},(0,p.kt)("inlineCode",{parentName:"h3"},"remove(path)")),(0,p.kt)("p",null,"\u5220\u9664\u6587\u4ef6\u3002\u4e0d\u80fd\u5220\u9664\u76ee\u5f55\uff0c\u7ed9\u5b9a\u8def\u5f84\u5fc5\u987b\u4e3a\u6587\u4ef6\uff0c\u5426\u5219\u4f1a\u5f02\u5e38\u3002"),(0,p.kt)("p",null,"Warm Suggestion: \u4ee5\u4e0b\u590d\u5236\u6587\u4ef6\u7684\u64cd\u4f5c\uff0c\u63a8\u8350\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"shutil.copyfile"),"\u3002"),(0,p.kt)("h3",{id:"\u590d\u5236\u6587\u4ef6"},"\u590d\u5236\u6587\u4ef6"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'with open("dog.jpeg", "rb") as f:\n    content = f.read()\n    with open("dog.copy.jpeg", "wb") as f2:\n        f2.write(content)\n')),(0,p.kt)("h3",{id:"\u5220\u9664\u6587\u4ef6"},"\u5220\u9664\u6587\u4ef6"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.remove("dog.copy.jpeg")\n')),(0,p.kt)("h2",{id:"\u5176\u4ed6os\u63a5\u53e3"},"\u5176\u4ed6",(0,p.kt)("inlineCode",{parentName:"h2"},"os"),"\u63a5\u53e3"),(0,p.kt)("h3",{id:"getenvkey-defaultnone"},(0,p.kt)("inlineCode",{parentName:"h3"},"getenv(key, default=None)")),(0,p.kt)("p",null,"\u83b7\u53d6\u73af\u5883\u53d8\u91cf\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'os.getenv("PATH")\n')),(0,p.kt)("h3",{id:"get_exec_pathenvnone"},(0,p.kt)("inlineCode",{parentName:"h3"},"get_exec_path(env=None)")),(0,p.kt)("p",null,"\u8fd4\u56de\u7528\u4e8e\u641c\u7d22\u53ef\u6267\u884c\u6587\u4ef6\u7684\u76ee\u5f55\u5217\u8868\u3002\u770b\u4ee5\u770b\u4f5c\u662f",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),"\u73af\u5883\u53d8\u91cf\u7684\u5217\u8868\u5f62\u5f0f\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},"os.get_exec_path()\n")),(0,p.kt)("h3",{id:"systemcommand"},(0,p.kt)("inlineCode",{parentName:"h3"},"system(command)")),(0,p.kt)("p",null,"\u5728\u5f53\u524d\u8fdb\u7a0b\u4e2d\uff0c\u542f\u52a8\u5b50\u8fdb\u7a0b\uff0c\u6267\u884c\u547d\u4ee4",(0,p.kt)("inlineCode",{parentName:"p"},"command"),"\uff08\u5b57\u7b26\u4e32\uff09\uff0c\u4e3b\u8fdb\u7a0b\u4f1a\u963b\u585e\uff0c\u76f4\u5230\u5b50\u8fdb\u7a0b\u6267\u884c\u5b8c\u6210\u3002\u8fd9\u662f\u901a\u8fc7\u8c03\u7528\u6807\u51c6C\u51fd\u6570",(0,p.kt)("inlineCode",{parentName:"p"},"system()"),"\u6765\u5b9e\u73b0\u7684\uff0c\u5e76\u4e14\u5177\u6709\u76f8\u540c\u7684\u9650\u5236\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'if os.name == "nt":\n    command = "dir"\nelse:\n    command = "ls -l"\n\nos.system(command)\n')))}h.isMDXComponent=!0}}]);