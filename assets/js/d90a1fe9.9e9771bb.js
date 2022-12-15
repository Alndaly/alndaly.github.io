"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7621],{44576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=t(87462),r=(t(67294),t(3905));t(16758);const l={},i="Maven",o={unversionedId:"backend/Spring/Maven",id:"backend/Spring/Maven",title:"Maven",description:"\u6982\u5ff5",source:"@site/docs/backend/Spring/Maven.md",sourceDirName:"backend/Spring",slug:"/backend/Spring/Maven",permalink:"/docs/backend/Spring/Maven",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/backend/Spring/Maven.md",tags:[],version:"current",lastUpdatedAt:1671085410,formattedLastUpdatedAt:"2022\u5e7412\u670815\u65e5",frontMatter:{},sidebar:"backEndSidebar",previous:{title:"\u54cd\u5e94(Response)",permalink:"/docs/backend/Node/Koa/\u54cd\u5e94"},next:{title:"Mybatis-Generator",permalink:"/docs/backend/Spring/Mybatis-Generator"}},p={},m=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"https\u4ee3\u7406",id:"https\u4ee3\u7406",level:2},{value:"maven\u7684\u4f7f\u7528",id:"maven\u7684\u4f7f\u7528",level:2},{value:"\u5f52\u7c7b\u4f9d\u8d56",id:"\u5f52\u7c7b\u4f9d\u8d56",level:2},{value:"\u4ed3\u5e93",id:"\u4ed3\u5e93",level:2},{value:"\u955c\u50cf\u4ed3\u5e93",id:"\u955c\u50cf\u4ed3\u5e93",level:3},{value:"\u4ed3\u5e93\u670d\u52a1\u641c\u7d22",id:"\u4ed3\u5e93\u670d\u52a1\u641c\u7d22",level:3}],d={toc:m};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maven"},"Maven"),(0,r.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,r.kt)("p",null,"Maven\u4f5c\u4e3a\u4e00\u4e2a\u6784\u5efa\u5de5\u5177\uff0c\u4e0d\u4ec5\u80fd\u5e2e\u6211\u4eec\u81ea\u52a8\u5316\u6784\u5efa\uff0c\u8fd8\u80fd\u591f\u62bd\u8c61\u6784\u5efa\u8fc7\u7a0b\uff0c\u63d0\u4f9b\u6784\u5efa\u4efb\u52a1\u5b9e\u73b0;\u5b83\u8de8\u5e73\u53f0\uff0c\u5bf9\u5916\u63d0\u4f9b\u4e86\u4e00\u81f4\u7684\u64cd\u4f5c\u63a5\u53e3\uff0c\u8fd9\u4e00\u5207\u8db3\u4ee5\u4f7f\u5b83\u6210\u4e3a\u4f18\u79c0\u7684\u3001\u6d41\u884c\u7684\u6784\u5efa\u5de5\u5177\u3002"),(0,r.kt)("p",null,"Maven\u4e0d\u4ec5\u662f\u6784\u5efa\u5de5\u5177\uff0c\u8fd8\u662f\u4e00\u4e2a\u4f9d\u8d56\u7ba1\u7406\u5de5\u5177\u548c\u9879\u76ee\u7ba1\u7406\u5de5\u5177\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e2d\u592e\u4ed3\u5e93\uff0c\u80fd\u5e2e\u6211\u81ea\u52a8\u4e0b\u8f7d\u6784\u4ef6\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u7528\u65b9\u6cd5")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://maven.apache.org/download.cgi"},"Maven - Download Apache Maven")),(0,r.kt)("p",null,"\u53bb",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"\u5b98\u7f51"),"\u9009\u62e9\u60f3\u8981\u7684\u7248\u672c\u4e0b\u8f7d\uff0c\u7136\u540e\u5c06\u4e0b\u8f7d\u6587\u4ef6\u5939\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"bin"),"\u76ee\u5f55\u6302\u8f7d\u5230\u73af\u5883\u53d8\u91cf\u5373\u53ef"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b80\u5355\u65b9\u6cd5")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mac"),"\u53ef\u4ee5\u76f4\u63a5\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"brew install maven")),(0,r.kt)("p",null,"\ud83d\udca1 \u5982\u679c\u5f00\u53d1IDE\u662fIDEA\uff0c\u90a3\u4e48\u4f1a\u81ea\u5e26maven\u3002"),(0,r.kt)("p",null,"\ud83d\udca1 \u4e0b\u8f7d\u540e\u7684maven\u4e3b\u76ee\u5f55\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 LICENSE\n\u251c\u2500\u2500 NOTICE\n\u251c\u2500\u2500 README.txt\n\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 boot\n\u251c\u2500\u2500 conf\n\u2514\u2500\u2500 lib\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"conf")," ",(0,r.kt)("inlineCode",{parentName:"li"},"settings.xml"),"\u914d\u7f6e\u6587\u4ef6\u6240\u5728\u76ee\u5f55")),(0,r.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"mvn clean"))," \u8868\u793a\u8fd0\u884c\u6e05\u7406\u64cd\u4f5c\uff08\u4f1a\u9ed8\u8ba4\u628atarget\u6587\u4ef6\u5939\u4e2d\u7684\u6570\u636e\u6e05\u7406\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"mvn clean compile"))," \u8868\u793a\u8fd0\u884c\u6e05\u7406\u64cd\u4f5c\u4e4b\u540e\u518d\u8fd0\u884c\u7f16\u8bd1\uff0c\u4f1a\u5c06\u4ee3\u7801\u7f16\u8bd1\u5230target\u6587\u4ef6\u5939\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"man clean test"))," \u8868\u793a\u8fd0\u884c\u6e05\u7406\u548c\u6d4b\u8bd5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"mvn clean package"))," \u8fd0\u884c\u6e05\u7406\u548c\u6253\u5305\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"mvn clean install"))," \u8fd0\u884c\u6e05\u7406\u548c\u5b89\u88c5\uff0c\u4f1a\u5c06\u6253\u597d\u7684\u5305\u5b89\u88c5\u5230\u672c\u5730\u4ed3\u5e93\u4e2d\uff0c\u4ee5\u4fbf\u5176\u4ed6\u7684\u9879\u76ee\u53ef\u4ee5\u8c03\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"mvn clean deploy"))," \u8fd0\u884c\u6e05\u7406\u548c\u53d1\u5e03\uff08\u53d1\u5e03\u5230\u79c1\u670d\u4e0a\u9762\uff09\u3002")),(0,r.kt)("p",null,"\ud83d\udca1 \u4e0a\u9762\u7684\u547d\u4ee4\u5927\u90e8\u5206\u90fd\u662f\u8fde\u5199\u7684\uff0c\u5927\u5bb6\u4e5f\u53ef\u4ee5\u62c6\u5206\u5206\u522b\u6267\u884c\uff0c\u8fd9\u662f\u6d3b\u7684\uff0c\u770b\u4e2a\u4eba\u559c\u597d\u4ee5\u53ca\u4f7f\u7528\u9700\u6c42\u3002"),(0,r.kt)("h2",{id:"https\u4ee3\u7406"},"https\u4ee3\u7406"),(0,r.kt)("p",null,"\u7f16\u8f91",(0,r.kt)("inlineCode",{parentName:"p"},"seeting.xml"),"\u6587\u4ef6 \u6709\u65f6\u5019\u4f60\u6240\u5728\u7684\u516c\u53f8\u57fa\u4e8e\u5b89\u5168\u56e0\u7d20\u8003\u8651\uff0c\u8981\u6c42\u4f60\u4f7f\u7528\u901a\u8fc7\u5b89\u5168\u8ba4\u8bc1\u7684\u4ee3\u7406\u8bbf\u95ee\u56e0\u7279\u7f51\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c31\u9700\u8981\u4e3aMaven\u914d\u7f6eHTTP\u4ee3\u7406\uff0c\u624d\u80fd\u8ba9\u5b83\u6b63\u5e38\u8bbf\u95ee\u5916\u90e8\u4ed3\u5e93\uff0c\u4ee5\u4e0b\u8f7d\u6240\u9700\u8981\u7684\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u786e\u8ba4\u81ea\u5df1\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u516c\u5171\u7684maven\u4e2d\u592e\u4ed3\u5e93\uff0c\u76f4\u63a5\u8fd0\u884c\u547d\u4ee4",(0,r.kt)("inlineCode",{parentName:"p"},"ping\xa0repo1.maven.org"),"\u53ef\u4ee5\u68c0\u67e5\u7f51\u7edc\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u771f\u7684\u9700\u8981\u4ee3\u7406\uff0c\u5148\u68c0\u67e5\u4e00\u4e0b\u4ee3\u7406\u670d\u52a1\u5668\u662f\u5426\u7545\u901a\u3002\u6bd4\u5982\u73b0\u5728\u6709\u4e00\u4e2aIP\u5730\u5740\u4e3a218.14.227.197\uff0c\u7aef\u53e3\u4e3a3128\u7684\u4ee3\u7406\u670d\u52a1\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd0\u884ctelnet\xa0218.14.227.197\xa03128\u6765\u68c0\u6d4b\u8be5\u5730\u5740\u7684\u8be5\u7aef\u53e3\u662f\u5426\u7545\u901a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<settings>\xa0\xa0\n\xa0\xa0...\xa0\xa0\n\xa0\xa0<proxies>\xa0\xa0\n\xa0\xa0\xa0\xa0<proxy>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0<id>my-proxy</id>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0<active>true</active>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0<protocol>http</protocol>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0<host>218.14.227.197</host>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0<port>3128</port>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\x3c!--\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<username>***</username>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<password>***</password>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<nonProxyHosts>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0repository.mycom.com|*.google.com\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</nonProxyHosts>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0--\x3e\xa0\xa0\n\xa0\xa0\xa0\xa0</proxy>\xa0\xa0\n\xa0\xa0</proxies>\xa0\xa0\n\xa0\xa0...\xa0\xa0\n</settings>\xa0\n")),(0,r.kt)("p",null,"\u8fd9\u6bb5\u914d\u7f6e\u5341\u5206\u7b80\u5355\uff0cproxies\u4e0b\u53ef\u4ee5\u6709\u591a\u4e2aproxy\u5143\u7d20\uff0c\u5982\u679c\u58f0\u660e\u4e86\u591a\u4e2aproxy\u5143\u7d20\uff0c\u5219\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7b2c\u4e00\u4e2a\u88ab\u6fc0\u6d3b\u7684proxy\u4f1a\u751f\u6548\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u58f0\u660e\u4e86\u4e00\u4e2aid\u4e3amy-proxy\u7684\u4ee3\u7406\uff0cactive\u7684\u503c\u4e3atrue\u8868\u793a\u6fc0\u6d3b\u8be5\u4ee3\u7406\uff0cprotocol\u8868\u793a\u4f7f\u7528\u7684\u4ee3\u7406\u534f\u8bae\uff0c\u8fd9\u91cc\u662fhttp\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u6700\u91cd\u8981\u7684\u662f\u6307\u5b9a\u6b63\u786e\u7684\u4e3b\u673a\u540d(host\u5143\u7d20)\u548c\u7aef\u53e3(port\u5143\u7d20)\u3002"),(0,r.kt)("p",null,"\u4e0a\u8ff0xml\u914d\u7f6e\u4e2d\u6ce8\u91ca\u6389\u4e86username,password,nonProxyHosts\u51e0\u4e2a\u5143\u7d20\u3002"),(0,r.kt)("p",null,'\u5f53\u4ee3\u7406\u670d\u52a1\u9700\u8981\u8ba4\u8bc1\u65f6\uff0c\u5c31\u9700\u8981\u914d\u7f6eusername\u548cpassword\u3002nonProxyHost\u5143\u7d20\u7528\u6765\u6307\u5b9a\u54ea\u4e9b\u4e3b\u673a\u4e0d\u9700\u8981\u4ee3\u7406\uff0c\u53ef\u4ee5\u4f7f\u7528"|"\u7b26\u53f7\u6765\u5206\u9694\u591a\u4e2a\u4e3b\u673a\u540d\u3002'),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u8be5\u914d\u7f6e\u4e5f\u652f\u6301\u901a\u914d\u7b26\uff0c\u5982:*.google.com\u8868\u793a\u6240\u6709\u4ee5google.com\u7ed3\u5c3e\u7684\u57df\u540d\u8bbf\u95ee\u90fd\u4e0d\u8981\u901a\u8fc7\u4ee3\u7406\u3002"),(0,r.kt)("h2",{id:"maven\u7684\u4f7f\u7528"},"maven\u7684\u4f7f\u7528"),(0,r.kt)("p",null,"maven\u7684\u9879\u76ee\u6839\u76ee\u5f55\u4f1a\u6709\u4e00\u4e2apom.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>org.kinda</groupId>\n    <artifactId>mybatis_helloWorld</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <properties>\n        <maven.compiler.source>18</maven.compiler.source>\n        <maven.compiler.target>18</maven.compiler.target>\n    </properties>\n    <packaging>jar</packaging>\n\n    <dependencies>\n        \x3c!-- mybatis \u6838\u5fc3 --\x3e\n        <dependency>\n            <groupId>org.mybatis</groupId>\n            <artifactId>mybatis</artifactId>\n            <version>3.5.7</version>\n        </dependency>\n\n        \x3c!-- junit \u6d4b\u8bd5 --\x3e\n        <dependency>\n            <groupId>junit</groupId>\n            <artifactId>junit</artifactId>\n            <version>4.13.2</version>\n            <scope>test</scope>\n        </dependency>\n\n        \x3c!-- MySQL\u9a71\u52a8 --\x3e\n        <dependency>\n            <groupId>mysql</groupId>\n            <artifactId>mysql-connector-java</artifactId>\n            <version>5.0.8</version>\n        </dependency>\n\n                <dependency>\n    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<groupId>\u5b9e\u9645\u9879\u76ee</groupId>\n    \u3000\u3000\u3000\u3000\xa0<artifactId>\u6a21\u5757</artifactId>\n    \u3000\u3000\u3000\u3000\xa0<version>\u7248\u672c</version>\n    \u3000\u3000\u3000\u3000\xa0<type>\u4f9d\u8d56\u7c7b\u578b</type>\n    \u3000\u3000\u3000\u3000\xa0<scope>\u4f9d\u8d56\u8303\u56f4</scope>\n    \u3000\u3000\u3000\u3000\xa0<optional>\u4f9d\u8d56\u662f\u5426\u53ef\u9009</optional>\n    \u3000\u3000\u3000\u3000\xa0<!\u2014\u4e3b\u8981\u7528\u4e8e\u6392\u9664\u4f20\u9012\u6027\u4f9d\u8d56--\x3e\n    \u3000\u3000\u3000\u3000\xa0<exclusions>\n\u3000\u3000\u3000\u3000\xa0\xa0\xa0\xa0\xa0<exclusion>\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\xa0\xa0\xa0\xa0<groupId>\u2026</groupId>\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\xa0<artifactId>\u2026</artifactId>\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000</exclusion>\n    \u3000\u3000\u3000\u3000\xa0</exclusions>\n        \u3000\u3000</dependency>\n\n    </dependencies>\n\n</project>\n')),(0,r.kt)("p",null,"\u4ee3\u7801\u7684\u7b2c\u4e00\u884c\u662fXML\u5934\uff0c\u6307\u5b9a\u4e86\u8be5xml\u6587\u6863\u7684\u7248\u672c\u548c\u7f16\u7801\u65b9\u5f0f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project"),"\u662f\u6240\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml"),"\u7684\u6839\u5143\u7d20\uff0c\u5b83\u8fd8\u58f0\u660e\u4e86\u4e00\u4e9bPOM\u76f8\u5173\u7684\u547d\u540d\u7a7a\u95f4\u53caxsd\u5143\u7d20\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"modelVersion"),"\u6307\u5b9a\u4e86\u5f53\u524d\u7684POM\u6a21\u578b\u7684\u7248\u672c\uff0c\u5bf9\u4e8eMaven3\u6765\u8bf4\uff0c\u5b83\u53ea\u80fd\u662f4.0.0 \u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"groupId"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"artifactId"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"version"),"\u4e86\u3002\u8fd9\u4e09\u4e2a\u5143\u7d20\u5b9a\u4e49\u4e86\u4e00\u4e2a\u9879\u76ee\u57fa\u672c\u7684\u5750\u6807\uff0c\u5728Maven\u7684\u4e16\u754c\uff0c\u4efb\u4f55\u7684jar\u3001pom\u6216\u8005jar\u90fd\u662f\u4ee5\u57fa\u4e8e\u8fd9\u4e9b\u57fa\u672c\u7684\u5750\u6807\u8fdb\u884c\u533a\u5206\u7684\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"groupId"),"\u5b9a\u4e49\u4e86\u9879\u76ee\u5c5e\u4e8e\u54ea\u4e2a\u7ec4\uff0c\u968f\u610f\u547d\u540d\uff0c\u6bd4\u5982\u8c37\u6b4c\u516c\u53f8\u7684myapp\u9879\u76ee\uff0c\u5c31\u53d6\u540d\u4e3a\xa0com.google.myapp\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"artifactId"),"\u5b9a\u4e49\u4e86\u5f53\u524dMaven\u9879\u76ee\u5728\u7ec4\u4e2d\u552f\u4e00\u7684ID,\u6bd4\u5982\u5b9a\u4e49hello-world\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version"),"\u6307\u5b9a\u4e86\u9879\u76ee\u5f53\u524d\u7684\u7248\u672c0.0.1-SNAPSHOT, SNAPSHOT\u610f\u4e3a\u5feb\u7167\uff0c\u8bf4\u660e\u8be5\u9879\u76ee\u8fd8\u5904\u4e8e\u5f00\u53d1\u4e2d\uff0c\u662f\u4e0d\u7a33\u5b9a\u7684\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),"\u58f0\u660e\u4e86\u4e00\u4e2a\u5bf9\u4e8e\u7528\u6237\u66f4\u4e3a\u53cb\u597d\u7684\u9879\u76ee\u540d\u79f0\uff0c\u867d\u7136\u8fd9\u4e0d\u662f\u5fc5\u987b\u7684\uff0c\u4f46\u8fd8\u662f\u63a8\u8350\u4e3a\u6bcf\u4e2aPOM\u58f0\u660ename,\u4ee5\u65b9\u4fbf\u4fe1\u606f\u4ea4\u6d41\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dependencies")," \u4f9d\u8d56\u914d\u7f6e\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grounpId"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"artifactId"),"\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"version")," \u4f9d\u8d56\u7684\u57fa\u672c\u5750\u6807\uff0c\u5bf9\u4e8e\u4efb\u4f55\u4e00\u4e2a\u4f9d\u8d56\u6765\u8bf4\uff0c\u57fa\u672c\u5750\u6807\u662f\u6700\u91cd\u8981\u7684\uff0cMaven\u6839\u636e\u5750\u6807\u624d\u80fd\u627e\u5230\u9700\u8981\u7684\u4f9d\u8d56\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),"\u4f9d\u8d56\u7684\u7c7b\u578b\uff0c\u5bf9\u4e8e\u9879\u76ee\u5750\u6807\u5b9a\u4e49\u7684packaging\u3002\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u8be5\u5143\u7d20\u4e0d\u5fc5\u58f0\u660e\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3ajar\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope"),"\u4f9d\u8d56\u7684\u8303\u56f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"optional"),"\u6807\u8bb0\u4f9d\u8d56\u662f\u5426\u53ef\u9009\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exclusions"),"\u7528\u6765\u6392\u9664\u4f20\u9012\u6027\u4f9d\u8d56\u3002")))))),(0,r.kt)("h2",{id:"\u5f52\u7c7b\u4f9d\u8d56"},"\u5f52\u7c7b\u4f9d\u8d56"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u5f15\u5165\u7684\u5f88\u591a\u4f9d\u8d56\u5305\uff0c\u4ed6\u4eec\u90fd\u6765\u81ea\u540c\u4e00\u4e2a\u9879\u76ee\u7684\u4e0d\u540c\u6a21\u5757\uff0c\u6240\u4ee5\u4ed6\u4eec\u7684\u7248\u672c\u53f7\u90fd\u4e00\u6837\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u53ef\u4ee5\u7528\u5c5e\u6027\u6765\u7edf\u4e00\u7ba1\u7406\u7248\u672c\u53f7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<project>\xa0\xa0\n\xa0\xa0\xa0\xa0<modelVersion>4.0.0</modelVersion>\xa0\xa0\n\xa0\xa0\xa0\xa0<groupId>com.juven.mvnbook.account</groupId>\xa0\xa0\n\xa0\xa0\xa0\xa0<artifactId>accout-email</artifactId>\xa0\xa0\n\xa0\xa0\xa0\xa0<version>1.0.0-SNAPSHOT</version>\xa0\xa0\n\xa0\xa0\xa0\xa0<properties>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<springframework.version>1.5.6</springframework.version>\xa0\xa0\n\xa0\xa0\xa0\xa0</properties>\xa0\xa0\n\xa0\xa0\xa0\xa0<dependencies>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<dependency>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<groupId>org.springframework</groupId>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<artifactId>spring-core</artifactId>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<version>${springframework.version}</version>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</dependency>\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<dependency>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<groupId>org.springframework</groupId>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<artifactId>spring-beans</artifactId>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<version>${springframework.version}</version>\xa0\xa0\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</dependency>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0</dependencies>\xa0\xa0\n</project>\xa0\xa0\n")),(0,r.kt)("p",null,"\u5982\u56fe\u6240\u793a\uff0c\u5148\u901a\u8fc7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"</properties>\n    \u8fd9\u91cc\u5b9a\u4e49\u4f60\u5148\u8981\u7684\u7248\u672c\n</properties>\n")),(0,r.kt)("p",null,"\u6765\u5b9a\u4e49\uff0c\u7136\u540e\u5728\u4e0b\u9762\u4f9d\u8d56\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"${}"),"\u6765\u5f15\u5165\u4f60\u7684\u5c5e\u6027\u3002"),(0,r.kt)("h2",{id:"\u4ed3\u5e93"},"\u4ed3\u5e93"),(0,r.kt)("h3",{id:"\u955c\u50cf\u4ed3\u5e93"},"\u955c\u50cf\u4ed3\u5e93"),(0,r.kt)("p",null,"\u5982\u679c\u4ed3\u5e93X\u53ef\u4ee5\u63d0\u4f9b\u4ed3\u5e93Y\u5b58\u50a8\u7684\u6240\u6709\u5185\u5bb9\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u8ba4\u4e3aX\u662fY\u7684\u4e00\u4e2a\u955c\u50cf\u3002\u7528\u8fc7Maven\u7684\u90fd\u77e5\u9053\uff0c\u56fd\u5916\u7684\u4e2d\u592e\u4ed3\u5e93\u7528\u8d77\u6765\u592a\u6162\u4e86\uff0c\u6240\u4ee5\u9009\u62e9\u4e00\u4e2a\u56fd\u5185\u7684\u955c\u50cf\u5c31\u5f88\u6709\u5fc5\u8981\uff0c\u6211\u63a8\u8350\u56fd\u5185\u7684\u963f\u91cc\u4e91\u955c\u50cf\u3002 \u963f\u91cc\u4e91\u955c\u50cf\uff1a\u914d\u7f6e\u5f88\u7b80\u5355\uff0c\u4fee\u6539conf\u6587\u4ef6\u5939\u4e0b\u7684settings.xml\u6587\u4ef6\uff0c\u6dfb\u52a0\u5982\u4e0b\u955c\u50cf\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<mirrors>\n\xa0\xa0\xa0\xa0<mirror>\n\xa0\xa0\xa0\xa0\xa0\xa0<id>alimaven</id>\n\xa0\xa0\xa0\xa0\xa0\xa0<name>aliyun\xa0maven</name>\n\xa0\xa0\xa0\xa0\xa0\xa0<url>http://maven.aliyun.com/nexus/content/groups/public/</url>\n\xa0\xa0\xa0\xa0\xa0\xa0<mirrorOf>central</mirrorOf>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\n\xa0\xa0\xa0\xa0</mirror>\n\xa0\xa0</mirrors>\n")),(0,r.kt)("p",null,"\u4e0a\u4f8b\u5b50\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"mirror"),"\u7684\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"central"),"\u8868\u793a\u8be5\u914d\u7f6e\u4e3a\u4e2d\u592e\u5e93\u7684\u955c\u50cf\uff0c\u4efb\u4f55\u5bf9\u4e8e\u4e2d\u592e\u4ed3\u5e93\u7684\u8bf7\u6c42\u90fd\u4f1a\u8f6c\u81f3\u8be5\u955c\u50cf\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u7528\u540c\u6837\u7684\u65b9\u6cd5\u914d\u7f6e\u5176\u4ed6\u4ed3\u5e93\u7684\u955c\u50cf"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4ecb\u7ecd\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"<mirrorOf>"),"\u914d\u7f6e\u7684\u5404\u79cd\u9009\u9879"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<mirrorOf>*<mirrorOf>")," \u5339\u914d\u6240\u6709\u8fdc\u7a0b\u4ed3\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<mirrorOf>external:*<mirrorOf>")," \u5339\u914d\u6240\u6709\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u4f7f\u7528localhost\u7684\u9664\u5916\uff0c\u4f7f\u7528file://\u534f\u8bae\u7684\u9664\u5916\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5339\u914d\u6240\u6709\u4e0d\u5728\u672c\u673a\u4e0a\u7684\u8fdc\u7a0b\u4ed3\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<mirrorOf>repo1,repo2<mirrorOf>")," \u5339\u914d\u4ed3\u5e93repo1h\u548crepo2\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694\u591a\u4e2a\u8fdc\u7a0b\u4ed3\u5e93\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<mirrorOf>*,!repo1<mirrorOf>")," \u5339\u914d\u6240\u6709\u8fdc\u7a0b\u4ed3\u5e93\uff0crepo1\u9664\u5916\uff0c\u4f7f\u7528\u611f\u53f9\u53f7\u5c06\u4ed3\u5e93\u4ece\u5339\u914d\u4e2d\u6392\u9664\u3002")),(0,r.kt)("h3",{id:"\u4ed3\u5e93\u670d\u52a1\u641c\u7d22"},"\u4ed3\u5e93\u670d\u52a1\u641c\u7d22"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4ecb\u7ecd2\u4e2a\u63d0\u4f9b\u4ed3\u5e93\u670d\u52a1\u641c\u7d22\u7684\u5730\u5740\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://repository.sonatype.org/"},"Nexus Repository Manager")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://mvnrepository.com/"},"mvnrepository")))}s.isMDXComponent=!0}}]);