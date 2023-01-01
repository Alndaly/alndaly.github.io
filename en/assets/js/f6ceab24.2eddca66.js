"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1991],{73514:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));t(16758);const o={},i=void 0,p={unversionedId:"backend/Spring/Mybatis-Generator",id:"backend/Spring/Mybatis-Generator",title:"Mybatis-Generator",description:"pom.xml\u914d\u7f6e",source:"@site/docs/backend/Spring/Mybatis-Generator.md",sourceDirName:"backend/Spring",slug:"/backend/Spring/Mybatis-Generator",permalink:"/en/docs/backend/Spring/Mybatis-Generator",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/backend/Spring/Mybatis-Generator.md",tags:[],version:"current",lastUpdatedAt:1672546497,formattedLastUpdatedAt:"Jan 1, 2023",frontMatter:{},sidebar:"backEndSidebar",previous:{title:"Maven",permalink:"/en/docs/backend/Spring/Maven"},next:{title:"Mybatis",permalink:"/en/docs/backend/Spring/Mybatis"}},s={},c=[{value:"pom.xml\u914d\u7f6e",id:"pomxml\u914d\u7f6e",level:2},{value:"\u914d\u7f6eGenerator title=generatorConfig.xml",id:"\u914d\u7f6egenerator-titlegeneratorconfigxml",level:2},{value:"\u914d\u7f6e\u6587\u4ef6\u589e\u52a0mybatis\u914d\u7f6e",id:"\u914d\u7f6e\u6587\u4ef6\u589e\u52a0mybatis\u914d\u7f6e",level:2}],l={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pomxml\u914d\u7f6e"},"pom.xml\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=pom.xml",title:"pom.xml"},"\x3c!-- \u589e\u52a0\u4f9d\u8d56 --\x3e\n<dependency>\n    <groupId>org.mybatis.generator</groupId>\n    <artifactId>mybatis-generator-core</artifactId>\n    <version>1.3.2</version>\n    <type>jar</type>\n    <scope>provided</scope>\n</dependency>\n\x3c!-- \u589e\u52a0\u63d2\u4ef6 --\x3e\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-maven-plugin</artifactId>\n        </plugin>\n        \x3c!-- MyBatis generator \u81ea\u52a8\u751f\u6210\u4ee3\u7801\u63d2\u4ef6 --\x3e\n        <plugin>\n            <groupId>org.mybatis.generator</groupId>\n            <artifactId>mybatis-generator-maven-plugin</artifactId>\n            <version>1.4.1</version>\n            <configuration>\n                <configurationFile>${basedir}/src/main/resources/generator/generatorConfig.xml</configurationFile>\n                <overwrite>true</overwrite>\n                <verbose>true</verbose>\n            </configuration>\n            \x3c!-- \u914d\u7f6e\u6570\u636e\u5e93\u8fde\u63a5\u53caMyBatis generator core\u4f9d\u8d56\u751f\u6210mapper\u65f6\u4f7f\u7528 --\x3e\n            <dependencies>\n                <dependency>\n                    <groupId>mysql</groupId>\n                    <artifactId>mysql-connector-java</artifactId>\n                    <version>8.0.31</version>\n                </dependency>\n                <dependency>\n                    <groupId>org.mybatis.generator</groupId>\n                    <artifactId>mybatis-generator-core</artifactId>\n                    <version>1.4.1</version>\n                </dependency>\n            </dependencies>\n        </plugin>\n    </plugins>\n</build>\n")),(0,r.kt)("h2",{id:"\u914d\u7f6egenerator-titlegeneratorconfigxml"},"\u914d\u7f6eGenerator title=generatorConfig.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE generatorConfiguration\n        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"\n        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">\n\n<generatorConfiguration>\n    <context id="MysqlContext" targetRuntime="MyBatis3" defaultModelType="flat">\n        \x3c!-- jdbc\u8fde\u63a5\u7684\u76f8\u5173\u914d\u7f6e--\x3e\n        <jdbcConnection driverClass="\u6570\u636e\u5e93\u9a71\u52a8\u8fde\u63a5\u5f15\u64ce"\n                        connectionURL="\u6570\u636e\u5e93\u8fde\u63a5\u5730\u5740"\n                        userId="\u6570\u636e\u5e93\u8fde\u63a5\u8d26\u53f7"\n                        password="\u6570\u636e\u5e93\u8fde\u63a5\u5bc6\u7801">\n        </jdbcConnection>\n\n        \x3c!-- model\u5c42 --\x3e\n        <javaModelGenerator targetPackage="model\u5c42\u5305\u540d" targetProject="src/main/java"/>\n        \x3c!-- resources\u4e2d\u7684mapper xml\u6587\u4ef6 --\x3e\n        <sqlMapGenerator targetPackage="resources\u4e2d\u7684xml mapper\u5c42\u6587\u4ef6\u5939\u540d\u5b57" targetProject="src/main/resources"/>\n        \x3c!-- mapper\u5c42 --\x3e\n        <javaClientGenerator targetPackage="mapper\u5c42\u5305\u540d\uff08dao\uff09" targetProject="src/main/java"\n                             type="XMLMAPPER"/>\n        \x3c!-- \u9700\u8981\u5f15\u5165\u7684\u6570\u636e\u8868 --\x3e\n        <table tableName="user"></table>\n    </context>\n</generatorConfiguration>\n')),(0,r.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6\u589e\u52a0mybatis\u914d\u7f6e"},"\u914d\u7f6e\u6587\u4ef6\u589e\u52a0mybatis\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=application.yml",title:"application.yml"},"mybatis:\n  mapper-locations: classpath:/mapper/**/*.xml\n")),(0,r.kt)("p",null,"\u5165\u53e3\u6587\u4ef6\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplication\n@MapperScan("com.kinda.springBootDemo.mapper") // mapper\u5305\u4f4d\u7f6e\n@RestController\npublic class SpringBootDemoApplication {\n\n    public static void main(String[] args) {\n        ConfigurableApplicationContext configurableApplicationContext = SpringApplication.run(SpringBootDemoApplication.class, args);\n        String[] beans = configurableApplicationContext.getBeanDefinitionNames();\n    }\n\n}\n')))}d.isMDXComponent=!0}}]);