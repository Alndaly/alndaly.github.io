"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1329],{65979:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=t(87462),i=(t(67294),t(3905));t(16758);const l={},r=void 0,p={unversionedId:"others/design-pattern/\u521b\u5efa\u578b\u6a21\u5f0f",id:"others/design-pattern/\u521b\u5efa\u578b\u6a21\u5f0f",title:"\u521b\u5efa\u578b\u6a21\u5f0f",description:"\u521b\u5efa\u578b\u6a21\u5f0f",source:"@site/docs/others/design-pattern/\u521b\u5efa\u578b\u6a21\u5f0f.md",sourceDirName:"others/design-pattern",slug:"/others/design-pattern/\u521b\u5efa\u578b\u6a21\u5f0f",permalink:"/docs/others/design-pattern/\u521b\u5efa\u578b\u6a21\u5f0f",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/others/design-pattern/\u521b\u5efa\u578b\u6a21\u5f0f.md",tags:[],version:"current",lastUpdatedAt:1670683071,formattedLastUpdatedAt:"2022\u5e7412\u670810\u65e5",frontMatter:{},sidebar:"anyThing",previous:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/docs/category/\u8bbe\u8ba1\u6a21\u5f0f"},next:{title:"\u7ed3\u6784\u578b\u6a21\u5f0f",permalink:"/docs/others/design-pattern/\u7ed3\u6784\u578b\u6a21\u5f0f"}},s={},o=[{value:"\u521b\u5efa\u578b\u6a21\u5f0f",id:"\u521b\u5efa\u578b\u6a21\u5f0f",level:2},{value:"\u5de5\u5382\u6a21\u5f0f",id:"\u5de5\u5382\u6a21\u5f0f",level:3},{value:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f",id:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f",level:3},{value:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",id:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f",level:3},{value:"\u62bd\u8c61\u5de5\u5382",id:"\u62bd\u8c61\u5de5\u5382",level:4},{value:"\u4e24\u4e2a\u5de5\u5382\u7c7b\u5b9e\u73b0\u62bd\u8c61\u5de5\u5382\uff1a",id:"\u4e24\u4e2a\u5de5\u5382\u7c7b\u5b9e\u73b0\u62bd\u8c61\u5de5\u5382",level:4},{value:"\u901a\u8fc7\u4e0d\u540c\u7684\u5de5\u5382\u4f1a\u5f97\u5230\u4e0d\u540c\u7684\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61",id:"\u901a\u8fc7\u4e0d\u540c\u7684\u5de5\u5382\u4f1a\u5f97\u5230\u4e0d\u540c\u7684\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61",level:4},{value:"\u5355\u4f8b\u6a21\u5f0f",id:"\u5355\u4f8b\u6a21\u5f0f",level:3},{value:"\u9884\u52a0\u8f7d",id:"\u9884\u52a0\u8f7d",level:4},{value:"\u61d2\u52a0\u8f7d",id:"\u61d2\u52a0\u8f7d",level:4},{value:"\u5efa\u9020\u8005\u6a21\u5f0f/\u751f\u6210\u5668\u6a21\u5f0f(builder\u6a21\u5f0f)",id:"\u5efa\u9020\u8005\u6a21\u5f0f\u751f\u6210\u5668\u6a21\u5f0fbuilder\u6a21\u5f0f",level:3},{value:"\u539f\u578b\u6a21\u5f0f",id:"\u539f\u578b\u6a21\u5f0f",level:3}],c={toc:o};function u(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u521b\u5efa\u578b\u6a21\u5f0f"},"\u521b\u5efa\u578b\u6a21\u5f0f"),(0,i.kt)("h3",{id:"\u5de5\u5382\u6a21\u5f0f"},"\u5de5\u5382\u6a21\u5f0f"),(0,i.kt)("p",null,"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u521b\u5efa\u5bf9\u8c61\u7684\u7c7b\uff0c\u7531\u8fd9\u4e2a\u7c7b\u6765\u5c01\u88c5\u5b9e\u4f8b\u5316\u5bf9\u8c61\u7684\u884c\u4e3a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class SimplePizzaFactory {\n       public Pizza CreatePizza(String ordertype) {\n              Pizza pizza = null;\n              if (ordertype.equals("cheese")) {\n                     pizza = new CheesePizza();\n              } else if (ordertype.equals("greek")) {\n                     pizza = new GreekPizza();\n              } else if (ordertype.equals("pepper")) {\n                     pizza = new PepperPizza();\n              }\n              return pizza;\n       }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b58\u5728\u95ee\u9898"),"\uff1a"),(0,i.kt)("p",null,"\u7c7b\u7684\u521b\u5efa\u4f9d\u8d56\u5de5\u5382\u7c7b\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u60f3\u8981\u62d3\u5c55\u7a0b\u5e8f\uff0c\u5fc5\u987b\u5bf9\u5de5\u5382\u7c7b\u8fdb\u884c\u4fee\u6539\uff0c\u8fd9\u8fdd\u80cc\u4e86\u5f00\u95ed\u539f\u5219\u3002"),(0,i.kt)("admonition",{title:"\u5f00\u95ed\u539f\u5219",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b"),"\u9886\u57df\u4e2d\uff0c",(0,i.kt)("strong",{parentName:"p"},"\u5f00\u95ed\u539f\u5219"),"\u89c4\u5b9a\u201c\u8f6f\u4ef6\u4e2d\u7684\u5bf9\u8c61\uff08\u7c7b\uff0c\u6a21\u5757\uff0c\u51fd\u6570\u7b49\u7b49\uff09\u5e94\u8be5\u5bf9\u4e8e\u6269\u5c55\u662f\u5f00\u653e\u7684\uff0c\u4f46\u662f\u5bf9\u4e8e\u4fee\u6539\u662f\u5c01\u95ed\u7684\u201d\uff0c\u8fd9\u610f\u5473\u7740\u4e00\u4e2a\u5b9e\u4f53\u662f\u5141\u8bb8\u5728\u4e0d\u6539\u53d8\u5b83\u7684\u6e90\u4ee3\u7801\u7684\u524d\u63d0\u4e0b\u53d8\u66f4\u5b83\u7684\u884c\u4e3a\u3002")),(0,i.kt)("h3",{id:"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f"},"\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f"),(0,i.kt)("p",null,"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u521b\u5efa\u5bf9\u8c61\u7684\u62bd\u8c61\u65b9\u6cd5\uff0c\u7531\u5b50\u7c7b\u51b3\u5b9a\u8981\u5b9e\u4f8b\u5316\u7684\u7c7b\u3002\u5de5\u5382\u65b9\u6cd5\u6a21\u5f0f\u5c06\u5bf9\u8c61\u7684\u5b9e\u4f8b\u5316\u63a8\u8fdf\u5230\u5b50\u7c7b\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"OrderPizza"),"\u4e2d\u6709\u4e2a\u62bd\u8c61\u7684\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"abstract Pizza createPizza();\n")),(0,i.kt)("p",null,"\u4e24\u4e2a\u5de5\u5382\u7c7b\u7ee7\u627f",(0,i.kt)("inlineCode",{parentName:"p"},"OrderPizza"),"\u5e76\u5b9e\u73b0\u62bd\u8c61\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class LDOrderPizza extends OrderPizza {\n  Pizza createPizza(String ordertype) {\n    Pizza pizza = null;\n    if (ordertype.equals("cheese")) {\n      pizza = new LDCheesePizza();\n    } else if (ordertype.equals("pepper")) {\n      pizza = new LDPepperPizza();\n    }\n    return pizza;\n  }\n}\npublic class NYOrderPizza extends OrderPizza {\n    Pizza createPizza(String ordertype) {\n        Pizza pizza = null;\n        if (ordertype.equals("cheese")) {\n            pizza = new NYCheesePizza();\n        } else if (ordertype.equals("pepper")) {\n            pizza = new NYPepperPizza();\n        }\n        return pizza;\n    }\n}\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0d\u540c\u7684\u5de5\u5382\u4f1a\u5f97\u5230\u4e0d\u540c\u7684\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\uff0cPizzaStroe\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class PizzaStroe {\n       public static void main(String[] args) {\n              OrderPizza mOrderPizza;\n              mOrderPizza = new NYOrderPizza();\n       }\n}\n")),(0,i.kt)("h3",{id:"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f"},"\u62bd\u8c61\u5de5\u5382\u6a21\u5f0f"),(0,i.kt)("h4",{id:"\u62bd\u8c61\u5de5\u5382"},"\u62bd\u8c61\u5de5\u5382"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface ProductFactory {\n    Product manufacture();\n}\n")),(0,i.kt)("h4",{id:"\u4e24\u4e2a\u5de5\u5382\u7c7b\u5b9e\u73b0\u62bd\u8c61\u5de5\u5382"},"\u4e24\u4e2a\u5de5\u5382\u7c7b\u5b9e\u73b0\u62bd\u8c61\u5de5\u5382\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * \u5177\u4f53\u5de5\u5382A\n */\npublic class FactoryA implements ProductFactory{\n    @Override\n    public Product manufacture() {\n        System.out.println("\u5177\u4f53\u5de5\u5382A");\n        return new ProductA();\n    }\n}\n\npackage com.llb.factory.factoryMethod;\n\n/**\n * \u5177\u4f53\u5de5\u5382B\n */\npublic class FactoryB implements ProductFactory{\n    @Override\n    public Product manufacture() {\n        System.out.println("\u5177\u4f53\u5de5\u5382B");\n        return new ProductB();\n    }\n}\n')),(0,i.kt)("h4",{id:"\u901a\u8fc7\u4e0d\u540c\u7684\u5de5\u5382\u4f1a\u5f97\u5230\u4e0d\u540c\u7684\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61"},"\u901a\u8fc7\u4e0d\u540c\u7684\u5de5\u5382\u4f1a\u5f97\u5230\u4e0d\u540c\u7684\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * \u5177\u4f53\u4ea7\u54c1A\n */\npublic class ProductA implements Product{\n    @Override\n    public void show() {\n        System.out.println("\u5177\u4f53\u4ea7\u54c1A");\n    }\n}\n\npackage com.llb.factory.factoryMethod;\n\n/**\n * \u5177\u4f53\u4ea7\u54c1B\n */\npublic class ProductB implements Product{\n    @Override\n    public void show() {\n        System.out.println("\u5177\u4f53\u4ea7\u54c1B");\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b58\u5728\u95ee\u9898\uff1a")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e00\u4e2a\u5177\u4f53\u5de5\u5382\u53ea\u751f\u4ea7\u4e00\u4e2a\u5177\u4f53\u4ea7\u54c1\uff0c\u5f53\u5de5\u5382\u548c\u4ea7\u54c1\u589e\u591a\uff0c\u7c7b\u4e5f\u589e\u591a\uff0c\u7cfb\u7edf\u590d\u6742\u5ea6\u4e0a\u5347\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u9700\u8981\u66f4\u6362\u5177\u4f53\u5de5\u5382\u91cc\u9762\u751f\u4ea7\u7684\u5177\u4f53\u4ea7\u54c1\u8fd8\u662f\u8981\u66f4\u6539\u539f\u6709\u4ee3\u7801\uff0c\u8fd9\u5c31\u8fdd\u53cd\u4e86\u5f00\u95ed\u539f\u5219\uff1b")),(0,i.kt)("h3",{id:"\u5355\u4f8b\u6a21\u5f0f"},"\u5355\u4f8b\u6a21\u5f0f"),(0,i.kt)("h4",{id:"\u9884\u52a0\u8f7d"},"\u9884\u52a0\u8f7d"),(0,i.kt)("p",null,"\u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u9884\u5148\u52a0\u8f7d\u3002\u518d\u8fdb\u4e00\u6b65\u89e3\u91ca\u5c31\u662f\u8fd8\u6ca1\u6709\u4f7f\u7528\u8be5\u5355\u4f8b\u5bf9\u8c61\uff0c\u4f46\u662f\uff0c\u8be5\u5355\u4f8b\u5bf9\u8c61\u5c31\u5df2\u7ecf\u88ab\u52a0\u8f7d\u5230\u5185\u5b58\u4e86\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class PreloadSingleton {\n       public static PreloadSingleton instance = new PreloadSingleton();\n       //\u5176\u4ed6\u7684\u7c7b\u65e0\u6cd5\u5b9e\u4f8b\u5316\u5355\u4f8b\u7c7b\u7684\u5bf9\u8c61\n       private PreloadSingleton() {\n       };\n       public static PreloadSingleton getInstance() {\n              return instance;\n       }\n}\n\n")),(0,i.kt)("p",null,"\u7f3a\u70b9\u5f88\u660e\u663e\uff0c\u6ca1\u6709\u4f7f\u7528\u8be5\u5355\u4f8b\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5c31\u88ab\u52a0\u8f7d\u5230\u4e86\u5185\u5b58\uff0c\u4f1a\u9020\u6210\u5185\u5b58\u7684\u6d6a\u8d39\u3002"),(0,i.kt)("h4",{id:"\u61d2\u52a0\u8f7d"},"\u61d2\u52a0\u8f7d"),(0,i.kt)("p",null,"\u5230\u7528\u5230\u5bf9\u5e94\u7684\u5b9e\u4f8b\u7684\u65f6\u5019\u518d\u53bb\u52a0\u8f7d\u5bf9\u8c61\u653e\u5230\u5185\u5b58\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n       private static Singleton instance=null;\n       private Singleton(){\n       };\n       public static Singleton getInstance()\n       {\n         if(instance==null)\n         {\n           instance=new Singleton();\n         }\n         return instance;\n       }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u61d2\u52a0\u8f7d\u4e0e\u7ebf\u7a0b\u5b89\u5168")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"java"),"\u521d\u59cb\u5316\u4e00\u4e2a\u5bf9\u8c61\u5206\u4e09\u6b65"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"memory=allocate();//1:\u521d\u59cb\u5316\u5185\u5b58\u7a7a\u95f4\nctorInstance(memory);//2:\u521d\u59cb\u5316\u5bf9\u8c61\ninstance=memory();//3:\u8bbe\u7f6einstance\u6307\u5411\u521a\u5206\u914d\u7684\u5185\u5b58\u5730\u5740\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u7531\u4e8eJVM\u4e3a\u4e86\u63d0\u9ad8\u7a0b\u5e8f\u6267\u884c\u6027\u80fd\uff0c\u4f1a\u5bf9\u6ca1\u6709\u4f9d\u8d56\u5173\u7cfb\u7684\u4ee3\u7801\u8fdb\u884c\u91cd\u6392\u5e8f\uff0c\u4e0a\u97622\u548c3\u884c\u4ee3\u7801\u53ef\u80fd\u88ab\u91cd\u65b0\u6392\u5e8f\u3002\u6211\u4eec\u7528\u4e24\u4e2a\u7ebf\u7a0b\u6765\u8bf4\u660e\u7ebf\u7a0b\u662f\u4e0d\u5b89\u5168\u7684\u3002\u7ebf\u7a0bA\u548c\u7ebf\u7a0bB\u90fd\u521b\u5efa\u5bf9\u8c61\u3002\u5176\u4e2d\uff0cA2\u548cA3\u7684\u91cd\u6392\u5e8f\uff0c\u5c06\u5bfc\u81f4\u7ebf\u7a0bB\u5728B1\u5904\u5224\u65ad\u51fainstance\u4e0d\u4e3a\u7a7a\uff0c\u7ebf\u7a0bB\u63a5\u4e0b\u6765\u5c06\u8bbf\u95eeinstance\u5f15\u7528\u7684\u5bf9\u8c61\u3002\u6b64\u65f6\uff0c\u7ebf\u7a0bB\u5c06\u4f1a\u8bbf\u95ee\u5230\u4e00\u4e2a\u8fd8\u672a\u521d\u59cb\u5316\u7684\u5bf9\u8c61\uff08\u7ebf\u7a0b\u4e0d\u5b89\u5168\uff09\u3002")),(0,i.kt)("admonition",{title:"\u4fdd\u8bc1\u61d2\u52a0\u8f7d\u7684\u7ebf\u7a0b\u5b89\u5168",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u9996\u5148\u60f3\u5230\u7684\u5c31\u662f\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"synchronized"),"\u5173\u952e\u5b57\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"synchronized"),"\u52a0\u8f7d",(0,i.kt)("inlineCode",{parentName:"p"},"getInstace()"),"\u51fd\u6570\u4e0a\u786e\u5b9e\u4fdd\u8bc1\u4e86\u7ebf\u7a0b\u7684\u5b89\u5168\u3002\u4f46\u662f\uff0c\u5982\u679c\u8981\u7ecf\u5e38\u7684\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"getInstance()"),"\u65b9\u6cd5\uff0c\u4e0d\u7ba1\u6709\u6ca1\u6709\u521d\u59cb\u5316\u5b9e\u4f8b\uff0c\u90fd\u4f1a\u5524\u9192\u548c\u963b\u585e\u7ebf\u7a0b\u3002\u4e3a\u4e86\u907f\u514d\u7ebf\u7a0b\u7684\u4e0a\u4e0b\u6587\u5207\u6362\u6d88\u8017\u5927\u91cf\u65f6\u95f4\uff0c\u5982\u679c\u5bf9\u8c61\u5df2\u7ecf\u5b9e\u4f8b\u5316\u4e86\uff0c\u6211\u4eec\u6ca1\u6709\u5fc5\u8981\u518d\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"synchronized"),"\u52a0\u9501\uff0c\u76f4\u63a5\u8fd4\u56de\u5bf9\u8c61\u3002"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Singleton {\n       private static Singleton instance = null;\n       private Singleton() {\n       };\n       public static synchronized Singleton getInstance() {\n              if (instance == null) {\n                     instance = new Singleton();\n              }\n              return instance;\n       }\n}\n")),(0,i.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"sychronized"),"\u52a0\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"if(instance==null)"),"\u5224\u65ad\u8bed\u53e5\u91cc\u9762\uff0c\u4fdd\u8bc1",(0,i.kt)("inlineCode",{parentName:"p"},"instance"),"\u672a\u5b9e\u4f8b\u5316\u7684\u65f6\u5019\u624d\u52a0\u9501"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Singleton {\n       private static Singleton instance = null;\n       private Singleton() {\n       };\n       public static Singleton getInstance() {\n              if (instance == null) {\n                     synchronized (Singleton.class) {\n                           if (instance == null) {\n                                  instance = new Singleton();\n                           }\n                     }\n              }\n              return instance;\n       }\n}\n")),(0,i.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u7ecf\u8fc7\u4e0a\u9762\u7684\u8ba8\u8bba\u77e5\u9053",(0,i.kt)("inlineCode",{parentName:"p"},"new"),"\u4e00\u4e2a\u5bf9\u8c61\u7684\u4ee3\u7801\u662f\u65e0\u6cd5\u4fdd\u8bc1\u987a\u5e8f\u6027\u7684\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u53e6\u4e00\u4e2a\u5173\u952e\u5b57",(0,i.kt)("inlineCode",{parentName:"p"},"volatile"),"\u4fdd\u8bc1\u5bf9\u8c61\u5b9e\u4f8b\u5316\u8fc7\u7a0b\u7684\u987a\u5e8f\u6027\u3002"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class Singleton {\n       private static volatile Singleton instance = null;\n       private Singleton() {\n       };\n       public static synchronized Singleton getInstance() {\n              if (instance == null) {\n                     synchronized (instance) {\n                           if (instance == null) {\n                                  instance = new Singleton();\n                           }\n                     }\n              }\n              return instance;\n       }\n}\n")),(0,i.kt)("p",{parentName:"admonition"},"\u5230\u6b64\uff0c\u6211\u4eec\u5c31\u4fdd\u8bc1\u4e86\u61d2\u52a0\u8f7d\u7684\u7ebf\u7a0b\u5b89\u5168\u3002")),(0,i.kt)("h3",{id:"\u5efa\u9020\u8005\u6a21\u5f0f\u751f\u6210\u5668\u6a21\u5f0fbuilder\u6a21\u5f0f"},"\u5efa\u9020\u8005\u6a21\u5f0f/\u751f\u6210\u5668\u6a21\u5f0f(builder\u6a21\u5f0f)"),(0,i.kt)("p",null,"\u5c01\u88c5\u4e00\u4e2a\u590d\u6742\u5bf9\u8c61\u6784\u9020\u8fc7\u7a0b\uff0c\u5e76\u5141\u8bb8\u6309\u6b65\u9aa4\u6784\u9020\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06\u751f\u6210\u5668\u6a21\u5f0f\u7406\u89e3\u4e3a\uff0c\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u5bf9\u8c61\u9700\u8981\u5efa\u7acb\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u662f\u7531\u591a\u4e2a\u7ec4\u4ef6\uff08Component\uff09\u7ec4\u5408\u800c\u6210\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u7684\u5efa\u7acb\u90fd\u6bd4\u8f83\u590d\u6742\uff0c\u4f46\u8fd0\u7528\u7ec4\u4ef6\u6765\u5efa\u7acb\u6240\u9700\u7684\u5bf9\u8c61\u975e\u5e38\u7b80\u5355\uff0c\u6240\u4ee5\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u6784\u5efa\u590d\u6742\u7ec4\u4ef6\u7684\u6b65\u9aa4\u4e0e\u8fd0\u7528\u7ec4\u4ef6\u6784\u5efa\u5bf9\u8c61\u5206\u79bb\uff0c\u4f7f\u7528builder\u6a21\u5f0f\u53ef\u4ee5\u5efa\u7acb\u3002\u6216\u8005\u662f\u5bf9\u8c61\u7684\u53d8\u91cf\u8fc7\u591a\uff0c\u5982\u679c\u4ee5\u6784\u9020\u5668\u7684\u65b9\u5f0f\u751f\u6210\u4f1a\u6709\u5f88\u957f\u5f88\u957f\u7684\u4e00\u4e32\u4ee3\u7801\uff0c\u96be\u4ee5\u8bc6\u522b\u987a\u5e8f\uff0c\u5bb9\u6613\u51fa\u9519\uff0cset\u65b9\u5f0f\u867d\u7136\u4e0d\u6613\u51fa\u9519\uff0c\u4f46\u662f\u4ee3\u7801\u91cf\u8fc7\u5927\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Student {\n\n    private final String name;\n    private final int id;\n    private final int age;\n    private final int height;\n\n    private Student(StudentBuilder studentBuilder) {\n        this.name = studentBuilder.name;\n        this.id = studentBuilder.id;\n        this.age = studentBuilder.age;\n        this.height = studentBuilder.height;\n    }\n\n    public static class StudentBuilder\n    {\n        private String name;\n        private int id;\n        private int age;\n        private int height;\n\n        public StudentBuilder(String name,int id)\n        {\n            this.name = name;\n            this.id = id;\n        }\n\n        public StudentBuilder age(int age)\n        {\n            this.age=age;\n            return this;\n        }\n\n        public StudentBuilder height(int height)\n        {\n            this.height = height;\n            return this;\n        }\n\n        public Student build()\n        {\n            return new Student(this);\n        }\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public int getId() {\n        return id;\n    }\n\n    public int getAge() {\n        return age;\n    }\n\n    public int getHeight() {\n        return height;\n    }\n\n    @Override\n    public String toString() {\n        return "Student{" +\n                "name=\'" + name + \'\\\'\' +\n                ", id=" + id +\n                ", age=" + age +\n                ", height=" + height +\n                \'}\';\n    }\n\n    public static void main(String[] args) {\n        Student student = new StudentBuilder("codingway",111).age(18).height(2).build();\n        System.out.println(student.toString());\n    }\n}\n')),(0,i.kt)("h3",{id:"\u539f\u578b\u6a21\u5f0f"},"\u539f\u578b\u6a21\u5f0f"),(0,i.kt)("p",null,"\u901a\u8fc7\u590d\u5236\u73b0\u6709\u5b9e\u4f8b\u6765\u521b\u5efa\u65b0\u7684\u5b9e\u4f8b\uff0c\u65e0\u9700\u77e5\u9053\u76f8\u5e94\u7c7b\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u7b80\u5355\u5730\u7406\u89e3\uff0c\u5176\u5b9e\u5c31\u662f\u5f53\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u6307\u5b9a\u7684\u5bf9\u8c61\u65f6\uff0c\u6211\u4eec\u521a\u597d\u6709\u4e00\u4e2a\u8fd9\u6837\u7684\u5bf9\u8c61\uff0c\u4f46\u662f\u53c8\u4e0d\u80fd\u76f4\u63a5\u4f7f\u7528\uff0c\u6211\u4f1aclone\u4e00\u4e2a\u4e00\u6bdb\u4e00\u6837\u7684\u65b0\u5bf9\u8c61\u6765\u4f7f\u7528\uff1b\u57fa\u672c\u4e0a\u8fd9\u5c31\u662f\u539f\u578b\u6a21\u5f0f\u3002\u5173\u952e\u5b57\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Clone"),"\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5bf9\u8c61\u7684\u521b\u5efa\u8fc7\u7a0b\u5f80\u5f80\u9700\u8981\u4e00\u5b9a\u65f6\u95f4\uff0c\u76f4\u63a5clone\u4f1a\u4f18\u5316\u8fd9\u90e8\u5206\u521b\u5efa\u6240\u82b1\u8d39\u7684\u65f6\u95f4\u3002\u8fd8\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u7528\u9014\u5c31\u662f\u4fdd\u62a4\u6027\u62f7\u8d1d\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd4\u56de\u4e00\u4e2a\u62f7\u8d1d\u5bf9\u8c61\u7684\u5f62\u5f0f\uff0c\u5b9e\u73b0\u53ea\u8bfb\u7684\u9650\u5236\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Prototype implements Cloneable {  \n     public Object clone() throws CloneNotSupportedException {  \n         Prototype proto = (Prototype) super.clone();  \n         return proto;  \n     }  \n}  \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f8b\u5b50\uff1a")),(0,i.kt)("p",null,"\u4e0d\u4f7f\u7528clone\uff0c\u53d1\u9001\u5341\u4e2a\u90ae\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n  int i = 0;\n  int MAX_COUNT = 10;\n  EventTemplate et = new EventTemplate("9\u6708\u4efd\u4fe1\u7528\u5361\u8d26\u5355", "\u56fd\u5e86\u62bd\u5956\u6d3b\u52a8...");\n  long start = System.currentTimeMillis();\n  while (i < MAX_COUNT) {\n    // \u4ee5\u4e0b\u662f\u6bcf\u5c01\u90ae\u4ef6\u4e0d\u540c\u7684\u5730\u65b9\n    Mail mail = new Mail(et);\n    mail.setContent(getRandString(5) + ",\u5148\u751f\uff08\u5973\u58eb\uff09:\u4f60\u7684\u4fe1\u7528\u5361\u8d26\u5355..." + mail.getTail());\n    mail.setReceiver(getRandString(5) + "@" + getRandString(8) + ".com");\n    // \u7136\u540e\u53d1\u9001\u90ae\u4ef6\n    sendMail(mail);\n    i++;\n  }\n  long end = System.currentTimeMillis();\n  System.out.println("\u7528\u65f6:" + (end - start));\n}\n\n// \u7528\u65f6:10001\n')),(0,i.kt)("p",null,"\u4f7f\u7528clone\uff0c\u53d1\u9001\u5341\u4e2a\u90ae\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n  int i = 0;\n  int MAX_COUNT = 10;\n  EventTemplate et = new EventTemplate("9\u6708\u4efd\u4fe1\u7528\u5361\u8d26\u5355", "\u56fd\u5e86\u62bd\u5956\u6d3b\u52a8...");\n  long start=System.currentTimeMillis();\n  Mail mail = new Mail(et);         \n  while (i < MAX_COUNT) {\n    Mail cloneMail = mail.clone();\n    mail.setContent(getRandString(5) + ",\u5148\u751f\uff08\u5973\u58eb\uff09:\u4f60\u7684\u4fe1\u7528\u5361\u8d26\u5355..."\n                    + mail.getTail());\n    mail.setReceiver(getRandString(5) + "@" + getRandString(8) + ".com");\n    sendMail(cloneMail);\n    i++;\n  }\n  long end=System.currentTimeMillis();\n  System.out.println("\u7528\u65f6:"+(end-start));\n}\n\n// \u7528\u65f6:1001\n')))}u.isMDXComponent=!0}}]);