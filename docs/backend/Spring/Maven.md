# Maven

## 概念

Maven作为一个构建工具，不仅能帮我们自动化构建，还能够抽象构建过程，提供构建任务实现;它跨平台，对外提供了一致的操作接口，这一切足以使它成为优秀的、流行的构建工具。

Maven不仅是构建工具，还是一个依赖管理工具和项目管理工具，它提供了中央仓库，能帮我自动下载构件。

## 安装

- 通用方法

[Maven - Download Apache Maven](http://maven.apache.org/download.cgi)

去[官网](https://maven.apache.org/download.cgi)选择想要的版本下载，然后将下载文件夹中的`bin`目录挂载到环境变量即可

- 简单方法

`mac`可以直接选择`brew install maven`

💡 如果开发IDE是IDEA，那么会自带maven。

💡 下载后的maven主目录如下。

```
├── LICENSE
├── NOTICE
├── README.txt
├── bin
├── boot
├── conf
└── lib
```

- `conf` `settings.xml`配置文件所在目录


## 常用命令

- **`mvn clean`** 表示运行清理操作（会默认把target文件夹中的数据清理）
- **`mvn clean compile`** 表示运行清理操作之后再运行编译，会将代码编译到target文件夹中。
- **`man clean test`** 表示运行清理和测试。
- **`mvn clean package`** 运行清理和打包。
- **`mvn clean install`** 运行清理和安装，会将打好的包安装到本地仓库中，以便其他的项目可以调用。
- **`mvn clean deploy`** 运行清理和发布（发布到私服上面）。


💡 上面的命令大部分都是连写的，大家也可以拆分分别执行，这是活的，看个人喜好以及使用需求。

## https代理

编辑`seeting.xml`文件 有时候你所在的公司基于安全因素考虑，要求你使用通过安全认证的代理访问因特网。

这种情况下，就需要为Maven配置HTTP代理，才能让它正常访问外部仓库，以下载所需要的资源。

首先确认自己无法直接访问公共的maven中央仓库，直接运行命令`ping repo1.maven.org`可以检查网络。

如果真的需要代理，先检查一下代理服务器是否畅通。比如现在有一个IP地址为218.14.227.197，端口为3128的代理服务，我们可以运行telnet 218.14.227.197 3128来检测该地址的该端口是否畅通。

```xml
<settings>  
  ...  
  <proxies>  
    <proxy>  
      <id>my-proxy</id>  
      <active>true</active>  
      <protocol>http</protocol>  
      <host>218.14.227.197</host>  
      <port>3128</port>  
      <!--  
        <username>***</username>  
        <password>***</password>  
        <nonProxyHosts>  
          repository.mycom.com|*.google.com  
        </nonProxyHosts>  
      -->  
    </proxy>  
  </proxies>  
  ...  
</settings> 
```

这段配置十分简单，proxies下可以有多个proxy元素，如果声明了多个proxy元素，则默认情况下第一个被激活的proxy会生效。

这里声明了一个id为my-proxy的代理，active的值为true表示激活该代理，protocol表示使用的代理协议，这里是http。

当然，最重要的是指定正确的主机名(host元素)和端口(port元素)。

上述xml配置中注释掉了username,password,nonProxyHosts几个元素。

当代理服务需要认证时，就需要配置username和password。nonProxyHost元素用来指定哪些主机不需要代理，可以使用"|"符号来分隔多个主机名。

此外，该配置也支持通配符，如:*.google.com表示所有以google.com结尾的域名访问都不要通过代理。

## maven的使用

maven的项目根目录会有一个pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.kinda</groupId>
    <artifactId>mybatis_helloWorld</artifactId>
    <version>1.0-SNAPSHOT</version>
    <properties>
        <maven.compiler.source>18</maven.compiler.source>
        <maven.compiler.target>18</maven.compiler.target>
    </properties>
    <packaging>jar</packaging>

    <dependencies>
        <!-- mybatis 核心 -->
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.7</version>
        </dependency>

        <!-- junit 测试 -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
            <scope>test</scope>
        </dependency>

        <!-- MySQL驱动 -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.0.8</version>
        </dependency>

				<dependency>
	        <groupId>实际项目</groupId>
	　　　　 <artifactId>模块</artifactId>
	　　　　 <version>版本</version>
	　　　　 <type>依赖类型</type>
	　　　　 <scope>依赖范围</scope>
	　　　　 <optional>依赖是否可选</optional>
	　　　　 <!—主要用于排除传递性依赖-->
	　　　　 <exclusions>
　　　　     <exclusion>
　　　　　　　    <groupId>…</groupId>
　　　　　　　　　 <artifactId>…</artifactId>
　　　　　　　</exclusion>
	　　　　 </exclusions>
		　　</dependency>

    </dependencies>

</project>
```

代码的第一行是XML头，指定了该xml文档的版本和编码方式。

- `project`是所有`pom.xml`的根元素，它还声明了一些POM相关的命名空间及xsd元素。
  - `modelVersion`指定了当前的POM模型的版本，对于Maven3来说，它只能是4.0.0 。
  - `packaging`指定打包方式，springboot用`jar`，现在很少用`war`了，如果是聚合项目，那么主`pom.xml`文件中此项应该配置为`pom`。
  - `groupId`, `artifactId`和`version`了。这三个元素定义了一个项目基本的坐标，在Maven的世界，任何的jar、pom或者jar都是以基于这些基本的坐标进行区分的。
    - `groupId`定义了项目属于哪个组，随意命名，比如谷歌公司的myapp项目，就取名为 com.google.myapp。
    - `artifactId`定义了当前Maven项目在组中唯一的ID,比如定义hello-world。
    - `version`指定了项目当前的版本0.0.1-SNAPSHOT, SNAPSHOT意为快照，说明该项目还处于开发中，是不稳定的。
  - `name`声明了一个对于用户更为友好的项目名称，虽然这不是必须的，但还是推荐为每个POM声明name,以方便信息交流。
  - `dependencies` 依赖配置。
    - `grounpId`、`artifactId`和`version` 依赖的基本坐标，对于任何一个依赖来说，基本坐标是最重要的，Maven根据坐标才能找到需要的依赖。
    - `type`依赖的类型，对于项目坐标定义的packaging。大部分情况下，该元素不必声明，其默认值为jar。
    - `scope`依赖的范围。
    - `optional`标记依赖是否可选。
    - `exclusions`用来排除传递性依赖。

## 聚合类maven项目

注意聚合类项目需要配置各个分包和主包。

```xml
<modules>
    <module>module1</module>
    <module>module2</module>
    <module>module3</module>
    <module>main-module</module>
</modules>

<packaging>pom</packaging>
```

## 归类依赖

有时候我们引入的很多依赖包，他们都来自同一个项目的不同模块，所以他们的版本号都一样，这时候我们可以用属性来统一管理版本号。

```xml
<project>  
    <modelVersion>4.0.0</modelVersion>  
    <groupId>com.juven.mvnbook.account</groupId>  
    <artifactId>accout-email</artifactId>  
    <version>1.0.0-SNAPSHOT</version>  
    <properties>  
        <springframework.version>1.5.6</springframework.version>  
    </properties>  
    <dependencies>  
        <dependency>  
            <groupId>org.springframework</groupId>  
            <artifactId>spring-core</artifactId>  
            <version>${springframework.version}</version>  
        </dependency>   
        <dependency>  
            <groupId>org.springframework</groupId>  
            <artifactId>spring-beans</artifactId>  
            <version>${springframework.version}</version>  
        </dependency>         
    </dependencies>  
</project>  
```

如图所示，先通过

```xml
</properties>
    这里定义你先要的版本
</properties>
```

来定义，然后在下面依赖使用`${}`来引入你的属性。

## 仓库

### 镜像仓库

如果仓库X可以提供仓库Y存储的所有内容，那么就可以认为X是Y的一个镜像。用过Maven的都知道，国外的中央仓库用起来太慢了，所以选择一个国内的镜像就很有必要，我推荐国内的阿里云镜像。 阿里云镜像：配置很简单，修改conf文件夹下的settings.xml文件，添加如下镜像配置

```xml
<mirrors>
    <mirror>
      <id>alimaven</id>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
      <mirrorOf>central</mirrorOf>        
    </mirror>
  </mirrors>
```

上例子中`mirror`的值为`central`表示该配置为中央库的镜像，任何对于中央仓库的请求都会转至该镜像，用户也可以用同样的方法配置其他仓库的镜像

这里介绍下`<mirrorOf>`配置的各种选项

- `<mirrorOf>*<mirrorOf>` 匹配所有远程仓库。
- `<mirrorOf>external:*<mirrorOf>` 匹配所有远程仓库，使用localhost的除外，使用file://协议的除外。也就是说，匹配所有不在本机上的远程仓库。
- `<mirrorOf>repo1,repo2<mirrorOf>` 匹配仓库repo1h和repo2，使用逗号分隔多个远程仓库。
- `<mirrorOf>*,!repo1<mirrorOf>` 匹配所有远程仓库，repo1除外，使用感叹号将仓库从匹配中排除。

### 自己上传到中央仓库（Github Packages）

暂略

### 仓库服务搜索

这里介绍2个提供仓库服务搜索的地址：

[Nexus Repository Manager](http://repository.sonatype.org/)

[mvnrepository](http://mvnrepository.com/)

