## pom.xml配置

```xml title=pom.xml
<!-- 增加依赖 -->
<dependency>
    <groupId>org.mybatis.generator</groupId>
    <artifactId>mybatis-generator-core</artifactId>
    <version>1.3.2</version>
    <type>jar</type>
    <scope>provided</scope>
</dependency>
<!-- 增加插件 -->
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
        <!-- MyBatis generator 自动生成代码插件 -->
        <plugin>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-maven-plugin</artifactId>
            <version>1.4.1</version>
            <configuration>
                <configurationFile>${basedir}/src/main/resources/generator/generatorConfig.xml</configurationFile>
                <overwrite>true</overwrite>
                <verbose>true</verbose>
            </configuration>
            <!-- 配置数据库连接及MyBatis generator core依赖生成mapper时使用 -->
            <dependencies>
                <dependency>
                    <groupId>mysql</groupId>
                    <artifactId>mysql-connector-java</artifactId>
                    <version>8.0.31</version>
                </dependency>
                <dependency>
                    <groupId>org.mybatis.generator</groupId>
                    <artifactId>mybatis-generator-core</artifactId>
                    <version>1.4.1</version>
                </dependency>
            </dependencies>
        </plugin>
    </plugins>
</build>
```

## 配置Generator title=generatorConfig.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">

<generatorConfiguration>
    <context id="MysqlContext" targetRuntime="MyBatis3" defaultModelType="flat">
        <!-- jdbc连接的相关配置-->
        <jdbcConnection driverClass="数据库驱动连接引擎"
                        connectionURL="数据库连接地址"
                        userId="数据库连接账号"
                        password="数据库连接密码">
        </jdbcConnection>

        <!-- model层 -->
        <javaModelGenerator targetPackage="model层包名" targetProject="src/main/java"/>
        <!-- resources中的mapper xml文件 -->
        <sqlMapGenerator targetPackage="resources中的xml mapper层文件夹名字" targetProject="src/main/resources"/>
        <!-- mapper层 -->
        <javaClientGenerator targetPackage="mapper层包名（dao）" targetProject="src/main/java"
                             type="XMLMAPPER"/>
        <!-- 需要引入的数据表 -->
        <table tableName="user"></table>
    </context>
</generatorConfiguration>
```

## 配置文件增加mybatis配置

```yml title=application.yml
mybatis:
  mapper-locations: classpath:/mapper/**/*.xml
```

入口文件配置

```java 
@SpringBootApplication
@MapperScan("com.kinda.springBootDemo.mapper") // mapper包位置
@RestController
public class SpringBootDemoApplication {

    public static void main(String[] args) {
        ConfigurableApplicationContext configurableApplicationContext = SpringApplication.run(SpringBootDemoApplication.class, args);
        String[] beans = configurableApplicationContext.getBeanDefinitionNames();
    }

}
```