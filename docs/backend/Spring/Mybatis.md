# Mybatis

:::note
项目的文件放置

一般java文件都放在`src/main/java` 。

配置文件都放在`src/main/resources`。
:::

# 特性

- 定制化SQL

即可以自己手写SQL语句。

- 支持存储过程
- 支持高级映射

即POJO实体类和数据库字段的映射方式可以自定义哦。

- 封装了JDBC代码，和结果集的处理过程，再也不用手写JDBC代码和结果集处理啦。

# 官方仓库&文档

[https://github.com/mybatis/mybatis-3](https://github.com/mybatis/mybatis-3)

# 对比其他持久层框架

- JDBC
    - 对于已经打包部署的项目，需要重新编辑代码再打包部署，非常麻烦。
    - SQL夹杂在JAVA代码中，会导致硬编码内伤。
    - 维护不易。
    - 代码冗长。
- Hibernate 和 JPA
    - 操作非常简便，开发效率非常高。
    - 程序中的长难复杂SQL需要绕过框架。
    - 内部自动生产SQL，不易做特殊优化。
    - 基于全映射的全自动框架，大量字段的POJO进行部分映射时比较困难。
    - 反射操作太多，导致数据库性能下降。
- MyBatis
    - 轻量级，性能出色。
    - SQL和JAVA编码分开，功能边界清晰。JAVA代码专注业务，SQL语句专注数据。
    - 开发效率稍逊，但能接受。

# 快速开始

## Maven

根据你自己项目的类型创建具体Maven项目即可。

```xml
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
        <version>4.12</version>
        <scope>test</scope>
    </dependency>

    <!-- MySQL驱动 -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.16</version>
    </dependency>
</dependencies>

```

## 核心配置文件（最少配置）

习惯上命名：`mybatis-config.xml`，非强制。

整合`Spring`的时候可以省略。这里目的为了能运行即可，详细配置内容看后续。

**作用**：

1.  配置链接数据库的环境 
2. 配置`MyBatis`

**放置位置**：src/main/resources

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>

    <!--
        配置链接数据库的环境
        default : 选择那个环境有效
     -->
    <environments default="development">
        <environment id="development">

            <!-- 事务管理器 -->
            <transactionManager type="JDBC"></transactionManager>

            <!-- 数据源 即连接池-->
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://192.168.23.128:3306/ssm?useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;characterEncoding=utf-8amp;autoReconnect=true"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>
    </environments>

    <!-- 引入 MyBatis 的映射文件 : 存放SQL语句 和 POJO的映射方式 -->
    <mappers>
        <mapper resource="mappers/UserMapper.xml"></mapper>
    </mappers>
</configuration>

```

## Mapper 接口

相当于DAO，但是不用创建实现类，MyBatis会创建代理类，并执行映射文件当中的SQL。

**起名规则**：实体类的名字 + Mapper

```java
package com.atguigu.mybatis.mapper;

public interface UserMapper {
    int insertUser();
}
```

## 映射文件

Mapper 接口当中的一个抽象方法 对应 映射文件当中的一个SQL语句。

**起名规则**：POJO名字 + Mapper.xml 

**放置位置**：src/main/resources/UserMapper.xml

这里我们写一条固定的插入SQL，参数如何传递请请看后方比较详细的笔记。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!-- namespace ：对应的mapper接口 -->
<mapper namespace="com.atguigu.mybatis.mapper.UserMapper">
    <!--
        id : 对应接口的方法名称.
    -->
    <select id="insertUser">
        INSERT INTO t_user VALUES (NULL, 'admin', '123456', 23, '男', '12345@qq.com');
    </select>
</mapper>
```

## 测试功能

从开始到创建 `SqlSessionFactory` 只用创建一次即可，因此可以单独封装即可。

`openSession()` 获得 `SqlSession` 默认是不自动提交事务，因此需要自己手动提交。

```java
package com.atguigu.mybatis;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;
import com.atguigu.mybatis.mapper.UserMapper;

import java.io.IOException;
import java.io.InputStream;

public class MyBatisTest {
    @Test
    public void testInsert() throws IOException {
        // 获取核心配置文件的输入流
        InputStream resourceAsStream = Resources.getResourceAsStream("mybatis-config.xml");

        // 获取SqlSessionFactoryBuilder 对象 -> 工厂构建器
        SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();

        // 创建 SqlSession 工厂 -> 创建会话
        SqlSessionFactory sqlSessionFactory = sqlSessionFactoryBuilder.build(resourceAsStream);

        // 获取 会话 对象 -> MyBatis 提供的操作数据库的对象
        SqlSession sqlSession = sqlSessionFactory.openSession();

        // 获得Mapper接口的代理类 -> 操纵Mapper类执行数据库操作
        UserMapper userMapper = sqlSession.getMapper(UserMapper.class);

        // 执行SQL操作
        Integer rows = userMapper.insertUser();
        System.out.println("rows = " + rows);

        // 提交事务 -> 事务是默认开启的
        sqlSession.commit();

        // 关闭资源
        sqlSession.close();
    }
}
```

## log4j

### 日志级别

- `FATAL`（致命）
- `ERROR`（错误）
- `WARN`（警告）
- `INFO`（信息）
- `DEBUG`（调试）

```xml
<!-- log4j -->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">

<log4j:configuration xmlns:log4j="http://jakarta.apache.org/log4j/">

    <appender name="STDOUT" class="org.apache.log4j.ConsoleAppender">
        <param name="Encoding" value="UTF-8"/>
        <layout class="org.apache.log4j.PatternLayout">
            <param name="ConversionPattern" value="%-5d %d{MM-dd HH:mm:ss,SSS} %m (%F:%L) \n"/>
        </layout>
    </appender>

    <logger name="java.sql">
        <level value="debug"/>
    </logger>
    <logger name="org.apache.ibatis" >
        <level value="info"/>
    </logger>

    <!-- 默认配置，级别为debug 且根据name为log.console和 log.file两个appender输出-->
    <root>
        <level value="debug"/>
        <appender-ref ref="STDOUT"/>
    </root>
</log4j:configuration>
```

# 核心配置文件详解

## environments

可以配置多个环境，比如测试环境和开发环境。

使用`id`区分，不能重复。

```xml
    <environments default="development">

        <environment id="development">

            <!-- 事务管理器 -->
            <transactionManager type="JDBC"></transactionManager>

            <!-- 数据源 即连接池-->
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://192.168.23.128:3306/ssm?useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;characterEncoding=utf-8amp;autoReconnect=true"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>

        <environment id="test">

            <!-- 事务管理器 -->
            <transactionManager type="JDBC"></transactionManager>

            <!-- 数据源 即连接池-->
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://192.168.23.128:3306/ssm?useSSL=false&amp;serverTimezone=Asia/Shanghai&amp;characterEncoding=utf-8amp;autoReconnect=true"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>

    </environments>
```

### transactionManager

事务管理器，使用type来设置事务管理方式。

- type:
    - JDBC：表示使用JDBC原生事务管理方式，即可以手动的开启关闭事务，手动的提交和回滚。
    - MANAGED：被管理的，例如交给Spring管理。

### DataSource

设置数据源，使用type 设置数据源的类型。

- type
    - POOLED：使用数据库连接池
    - UNPOOLED：不使用数据库连接池，链接直接重新创建
    - JNDI：表示使用上下文当中的数据源（了解下）

## properties

> 引入`jdbc.properties`
> 

`resources` 下创建 `jdbc.properties` 文件

```
jdbc.url=jdbc:mysql://192.168.23.128:3306/ssm?useSSL=false&serverTimezone=Asia/Shanghai&characterEncoding=utf-8&autoReconnect=true
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.user=root
jdbc.password=123456
```

核心配置文件当中引入

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>

    <!-- 引入 properties 文件 -->
    <properties resource="jdbc.properties"></properties>

    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.user}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>

    <mappers>
        <mapper resource="mappers/UserMapper.xml"></mapper>
    </mappers>
</configuration>
```

## typeAliases

类型别名，设置了之后，在 `Mapper` 的 `resultType` 属性中可以使用简单类型别名，能够比较方便。

- `typeAlias`
    - `type` 设置需要起别名的类型
    - `alias` 设置某个类型的别名（如果不写，那么默认就是类名且不区分大小写）
- `package` 指定一个包下面的别名, 且不区分大小写 **注意，跟上方的typeAlias不能一起使用**

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>

    <!-- 引入 properties 文件 -->
    <properties resource="jdbc.properties"></properties>

    <!-- 别名 -->
    <typeAliases>
        <typeAlias type="com.atguigu.mybatis.pojo.User" alias="user"></typeAlias>

        <!-- 也可以指定一个包下面的别名, 且不区分大小写, 跟上方 typeLias 不能同时使用 -->
        <package name="com.atguigu.mybatis.pojo"></package>
    </typeAliases>

    <!-- ... -->
</configuration>
```

在 Mapper.xml 文件中使用

```xml
<select id="getAllUser" resultType="user">
    SELECT * FROM t_user;
</select>
```

## settings

核心全局设置, 下面只介绍几个常用的

### 下划线转驼峰

```xml
<settings>
    <!-- 下划线 自动映射 驼峰 -->
    <setting name="mapUnderscoreToCamelCase" value="true"/>
</settings>
```

### 延迟加载

如果某个查询不想使用懒加载，则在 `association` 和 `collection` 标签当中设置 `fetchType` 即可。

```xml
<settings>
    <!-- 延迟加载
        LazyLoadingEnabled: true，开启延迟加载
        aggressiveLazyLoading: false, 开启按需加载
    -->
    <setting name="lazyLoadingEnabled" value="true"/>
    <setting name="aggressiveLazyLoading" value="false"/>
</settings>
```

## mappers

分为**单个引入**和**包扫描**的方式

```xml
<mappers>
    <mapper resource="mappers/UserMapper.xml"></mapper>
    <!--
        包扫描方式, 两个条件
        1. Mapper 接口和 Mapper.xml 必须在一个包下
        2. Mapper 接口必须和 Mapper.xml 名字一致
     -->
    <package name="com.atguigu.mybatis.mapper"/>
</mappers>
```

> `resouces` 下创建对应的目录放`mapper.xml`文件

:::tip
其实是打包完成之后类文件和映射文件都会到同一个目录下。
:::

# IDEA 核心配置模板

常用配置模板设置

# 获取参数

有两种方式

- 占位符方式 `${}`
- 字符串拼接方式 `#{}`，会自动加上`‘’`

## 单个字面量类型（基本数据类型）

:::tip
注意如果选择使用`${}`，要加单引号。
:::

```java
public User getUserByUsername(String username);
```

```xml
<!-- 占位符方式 -->
<select id="getUserByUsername" resultType="user">
    SELECT * FROM t_user WHERE username = #{username};
</select>

<!-- 字符串拼接方式 -->
<select id="getUserByUsername" resultType="user">
    SELECT * FROM t_user WHERE username = '${username}';
</select>
```

## 多个字面量类型（基本数据类型）

当 `Mapper` 接口中有多个参数的时候，`MyBatis` 会创建`Map`，并使用不同的两种方式。

- param
    - 下标从1开始
- arg
    - 下标从0开始

上述两者均可混合使用。

```java
User checkLogin(String username, String password);
```

```xml
<select id="checkLogin" resultType="user">
    SELECT * FROM t_user WHERE username = #{param1} and password = #{param2};
</select>

<select id="checkLogin" resultType="user">
    SELECT * FROM t_user WHERE username = #{arg0} and password = #{arg1};
</select>
```

## Map参数

```java
/**
 * {username: "xxxx"}
 * {password: "xxxx"}
 * @param map
 * @return
 */
User checkLoginByMap(Map<String, Object> map);
```

```xml
<!-- User checkLoginByMap(Map<String, Object> map); -->
<select id="checkLoginByMap" resultType="user">
    SELECT * FROM t_user WHERE username = #{username} and password = #{password};
</select>
```

## 实体类类型参数

```java
package com.kinda.mybatis.pojo;

public class User {
    private Integer id;
    private String username;
    private String password;
    private Integer age;
    private String gender;
    private String email;

    public User(Integer id, String username, String password, Integer age, String gender, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public User() {
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
```

必须有 `getter` / `setter`。

单个POJO会形成一个`Map`，getter/setter函数去掉get/set后，把首字母改为小写即作为`Key`,  `getter` 函数返回的值作为 `value` 。

:::note
属性只跟 `getter`/`setter` 有关系。即如果没有对应的属性，但是存在正常`getter`的情况，也是可以的。
:::

```java
void insertUser(User user);
```

```xml
<select id="insertUser">
    INSERT INTO t_user VALUES (NULL, #{username}, #{password}, #{age}, #{gender}, #{email})
</select>
```

## mapper接口方法参数上进行@Param注解（最常用）

你只能用 `{username, param1, password, param2 }` 这四个在配置文件当中。

```java
User checkLogin(@Param("username") String username, @Param("password") String password);
```

```
<select id="checkLogin" resultType="user">
    SELECT * FROM t_user WHERE username = #{username} and password = #{password};
</select>
```

# 查询功能详解

## 单一项返回

:::note
设置 resultType 即可，可以使用别名。

当SQL语句返回多条记录的时候，会报：`TooManyResultException` 的错误。[关联提醒](https://www.notion.so/Mybatis-2bf77acf1f134d4eaddc05f2d7c17f71)
:::

```java
User getUserById(@Param("id") String id)
```

```xml
<select id="getUserById" resultType="user">
    SELECT * FROM t_user WHERE id = #{id}
</select>
```

## 多项返回

:::tip
设置 resultType 依然为 POJO 的类型。
:::


⚠️ 注意，若返回结果不止一项，那么一定不能只用实体类去接受，一定要用List。但如果返回只有一项，既可以用实体类接受，也可以用List接受。

```java
List<User> getAllUser();
```

```xml
<select id="getAllUser" resultType="user">
    SELECT * FROM t_user;
</select>
```

## 单行单列

MyBatis 为 java中常用的类型设置了类型别名。

int → java.lang.Integer 

string → java.lang.String 

_int → int 

map → java.utils.Map;

```java
Integer getCount();
```

```xml
<select id="getCount" resultType="int">
    SELECT count(1) FROM t_user;
</select>
```

## 查询到Map

查询的结果没有对应的实体类的时候，就可以使用`Map`集合。

`resultType` 设置成 `map` 即可。

:::tip
查询为null 的字段是不会放到Map集合里面。
:::

```java
Map<String, Object> getUserById(@Param("id") String id);
```

```xml
<select id="getUserById" resultType="map">
    SELECT * FROM t_user WHERE id = ${id}
</select>
```

## 查询到多条记录（没有对应实体类的）

### 可以使用 `Map` 存放多条记录，需要使用到 `@MapKey` 注解

```java
@MapKey("id")
Map<String, Object> getAllUserToMap();
```

```xml
<select id="getAllUserToMap" resultType="map">
    SELECT * FROM t_user;
</select>
```

```
// Map<id, User>
{
  3={password=123, gender=男, id=3, age=23, email=12345@qq.com, username=root},
  4={password=123456, gender=男, id=4, age=23, email=12345@qq.com, username=admin},
  5={password=123456, gender=男, id=5, age=23, email=12345@qq.com, username=admin},
  6={password=123456, gender=男, id=6, age=20, email=geek_zh@163.com, username=zs}
}
```

### `List<Map>` 类型存放

```java
List<Map<String, Object>> getAllUser();
```

```xml
<select id="getUserById" resultType="map">
    SELECT * FROM t_user;
</select>
```

```
// List<Map<String, Object>>
[
  {password=123, gender=男, id=3, age=23, email=12345@qq.com, username=root},
  {password=123456, gender=男, id=4, age=23, email=12345@qq.com, username=admin},
  {password=123456, gender=男, id=5, age=23, email=12345@qq.com, username=admin},
  {password=123456, gender=男, id=6, age=20, email=geek_zh@163.com, username=zs}
]
```

# 特殊SQL

## 模糊查询

```java
List<User> getUserByLike(@Param("mohu") String mohu);
```

```xml
<select id="getUserByLike" resultType="user">
    SELECT * FROM t_user WHERE username like '%${mohu}%'
</select>

<select id="getUserByLike" resultType="user">
    SELECT * FROM t_user WHERE username like CONCAT('%', #{mohu}, '%');
</select>

<!-- 第三种方式：用的最多的方式的 -->
<select id="getUserByLike" resultType="user">
    SELECT * FROM t_user WHERE username like "%"#{mohu}"%"
</select>
```

## 批量删除 `in`

即传入的参数数量不确定 这里直接先构成一个字符串，再使用拼接方式传入即可。

```java
int deleteMore(@Param("ids") String ids);
```

```xml
<!-- ids = "1,2,3" -->
<delete id="deleteMore" resultType="int">
  DELETE FROM t_user WHERE id in (${ids})
</delete>
```

## 动态表名

表查询的字段相同，但是表名称不相同

```java
List<User> getUserList(@Param("tableName") String tableName);
```

```xml
<select id="getUserList" resultType="user">
  SELECT * FROM ${tableName};
</select>
```

## 获取自增主键

场景：比如一个班级表和一个学生表，在一个事务当中先创建一个班级（使用的是自增的主键）然后在这个班级里面添加若干的学生。

- `useGeneratedKeys` 表示当前添加功能使用自增的主键
- `keyProperty` 将添加的数据的自增主键为实体类参数的属性赋值

```java
Integer insertUser(User user);
```

```xml
<insert id="insertUser" resultType="int" useGeneratedKeys="true" keyProperty="id">
  INSERT INTO t_user VALUES(NULL, #{username}, #{password}, #{age}, #{gender}, #{email});
</insert>
```

# ResultMap

字段名和属性名不一致（可以尝试别名处理）

一对一或一对多的关系查询.

## 字段名和属性名不一致的情况

方式一：查询的时候使用别名（在xml中修改原生的sql语句，非常麻烦）

方式二：开启下划线 → 小驼峰的配置，在 `mybatis-config.xml` 文件当中添加如下配置。（**常用**）

```xml
<settings>
    <!-- 下划线 自动映射 驼峰 -->
    <setting name="mapUnderscoreToCamelCase" value="true"/>
</settings>
```

方式三：使用 `ResultMap` , 注意 `resultMap` 和 `resultType` 是二选一的。

### `resultMap`的子元素

- `id` 处理主键和属性字段的映射关系
- `result` 处理普通字段和属性的映射关系

### `resultMap`的子元素的属性

- column 对应的数据库中的字段
- property 对应的实体类中的字段

```java
Emp getEmpByEmpId(@Param("empId") Integer empId);
```

```xml
<mapper namespace="com.atguigu.mybatis.mapper.EmpMapper">

    <!-- 相同的属性和名称不用写也行的 -->
    <resultMap id="empResultMap" type="Emp">
        <!-- id 处理主键和属性字段的映射关系 -->
        <id column="emp_id" property="empId"></id>

        <!-- result 处理普通字段和属性的映射关系 -->
        <result column="emp_name" property="empName"></result>

    </resultMap>

    <!-- Emp getEmpByEmpId(@Param("empId") Integer empId); -->
    <select id="getEmpByEmpId" resultMap="empResultMap">
        SELECT * FROM t_emp WHERE emp_id = #{empId};
    </select>

</mapper>
```

## 多对一关系

多个`Emp` 对应一个 `Dept`

```java
public class Emp {
    private Integer empId;
    private String empName;
    private Integer age;
    private String gender;

    private Dept dept;

    // getter/setter/toString
}
```

### 方式一：级联方式处理 ，即一次连接出所有字段。

```java
Emp getEmpAndDeptByEmpId(@Param("empId") Integer empId);
```

```xml
<resultMap id="getEmpAndDeptByEmpId" type="Emp">
    <id column="emp_id" property="empId"></id>
    <result column="emp_name" property="empName"></result>

    <!-- 级联方式：多对一的映射关系 -->
    <result column="dept_id" property="dept.deptId"></result>
    <result column="dept_name" property="dept.deptName"></result>
</resultMap>

<select id="getEmpAndDeptByEmpId" resultMap="getEmpAndDeptByEmpId">
    SELECT *
    FROM t_emp
    LEFT JOIN t_dept
    ON t_emp.dept_id = t_dept.dept_id
    WHERE emp_id = #{empId};
</select>
```

### 方式二： `association` 标签。

- `association` : 专门处理多对一、一对一的映射关系（处理实体类类型的属性）。
- `property`: 设置需要处理映射关系的属性的属性名。
- `javaType`: 设置要处理的类型。

```xml
<resultMap id="getEmpAndDeptByEmpId" type="Emp">
    <id column="emp_id" property="empId"></id>
    <result column="emp_name" property="empName"></result>

    <!-- association : 专门处理多对一、一对一的映射关系 -->
    <association property="dept" javaType="Dept">
        <id column="dept_id" property="deptId"></id>
        <result column="dept_name" property="deptName"></result>
    </association>
</resultMap>

<select id="getEmpAndDeptByEmpId" resultMap="getEmpAndDeptByEmpId">
    SELECT *
    FROM t_emp
    LEFT JOIN t_dept
    ON t_emp.dept_id = t_dept.dept_id
    WHERE emp_id = #{empId};
</select>
```

### 方式三：分步查询，先查询出`Emp`，再根据`Emp`中`deptId` 查询 `Dept`

优点：可以延迟加载，但必须在核心配置文件设置全局配置，具体配置看配置文件的settings。

- EmpMapper.java

```java
/**
 * 分步查询的第一步
 * @param empId
 * @return
 */
Emp getEmpAndDeptByStepOne(@Param("empId") Integer empId);
```

- DeptMapper.java

```java
/**
 * 分步查询的第二步
 * @param deptId
 * @return
 */
Dept getEmpAndDeptByStepTwo(@Param("deptId") Integer deptId);
```

- EmpMapper.xml

```xml
<resultMap id="getEmpAndDeptByStepResultMap" type="Emp">
    <id column="emp_id" property="empId"></id>
    <result column="emp_name" property="empName"></result>

    <!--
        property: 关联的类型
        fetchType: eager 表示全局配置了懒加载，但是这里我还是想立即加载 如果是lazy表示延迟加载
        select: 第二步查询的唯一标识 去找对应方法的引用
        column: 第一步查询出来的外键
    -->
    <association property="dept" fetchType="eager"
                 select="com.atguigu.mybatis.mapper.DeptMapper.getEmpAndDeptByStepTwo"
                 column="dept_id" ></association>
</resultMap>

<!-- Emp getEmpAndDeptByStepOne(@Param("empId") Integer empId); -->
<select id="getEmpAndDeptByStepOne" resultMap="getEmpAndDeptByStepResultMap">
    SELECT * FROM t_emp WHERE emp_id = #{empId};
</select>
```

- DeptMapper.xml

```xml
<!-- Dept getEmpAndDeptByStepTwo(@Param("deptId") Integer deptId);
     这里没有使用 ResultMap, 因为开启了 下划线 转 驼峰的配置
-->
<select id="getEmpAndDeptByStepTwo" resultType="dept">
    SELECT * FROM t_dept WHERE dept_id = #{dept_id};
</select>
```

## 一对多关系

一个 Dept 对应多个 Emp

```java
public class Dept {
    private Integer deptId;
    private String deptName;

    private List<Emp> emps;

    // getter/setter/toString
}
```

方式一：`collection`

```java
Dept getDeptAndEmpsByDeptId(@Param("deptId") Integer deptId);
```

```xml
<resultMap id="getDeptAndEmpsByDeptIdResultMap" type="dept">
    <id column="dept_id" property="deptId"></id>
    <result column="dept_name" property="deptName"></result>

    <!--
        property: 关联的属性.
        ofType: 集合内部元素的类型.
     -->
    <collection property="emps" ofType="emp">
        <id column="emp_id" property="empId"></id>
        <result column="emp_name" property="empName"></result>
    </collection>
</resultMap>

<!-- Dept getDeptAndEmpsByDeptId(@Param("deptId") Integer deptId); -->
<select id="getDeptAndEmpsByDeptId" resultMap="getDeptAndEmpsByDeptIdResultMap">
    SELECT *
    FROM t_dept
    LEFT JOIN t_emp
    ON t_dept.dept_id = t_emp.dept_id
    WHERE t_dept.dept_id = #{deptId};
</select>

```

方式二：分步查询，先查询部门，再根据部门的id查询部门下的员工

- DeptMapper.java

```java
/**
 * 分步查询 查询部门以及部门中的员工的信息
 * @param deptId
 * @return
 */
Dept getDeptAndEmpdsStepOne(@Param("deptId") Integer deptId);
```

- EmpMapper.java

```java
/**
 * 分布查询的第二步：查询出一个部门下的员工
 * @param empId
 * @return
 */
Emp getDeptAndEmpdsStepTwo(@Param("empId") Integer empId);
```

- DeptMapper.xml

```xml
<resultMap id="getDeptAndEmpdsStepOneResultMap" type="dept">
    <id column="dept_id" property="deptId"></id>
    <result column="dept_name" property="deptName"></result>

    <!-- fetchType="eager" 关闭懒加载 -->
    <collection property="emps" fetchType="eager" ofType="emp"
                 select="com.atguigu.mybatis.mapper.EmpMapper.getDeptAndEmpdsStepTwo"
                 column="dept_id">

    </collection>
</resultMap>

<!-- Dept getDeptAndEmpdsStepOne(@Param("deptId") Integer deptId); -->
<select id="getDeptAndEmpdsStepOne" resultMap="getDeptAndEmpdsStepOneResultMap">
    SELECT *
    FROM t_dept
    WHERE dept_id = #{deptId};
</select>
```

- EmpMapper.xml

```xml
<!-- Emp getDeptAndEmpdsStepTwo(@Param("empId") Integer empId);
     这里没有使用resultMap, 因为已经开启了下划线转驼峰的配置
-->
<select id="getDeptAndEmpdsStepTwo" resultType="emp">
    SELECT *
    FROM t_emp
    WHERE emp_id = #{empId};
</select>
```

# 动态SQL

根据传入的参数动态的决定最后执行的SQL语句。

## `if`,`trim` ,`where`

- if 条件是否成立，成立则接上
- where 自动会补充where或者去掉SQL语句开头的and
- trim
    - prefix 前缀
    - suffix 后缀
    - suffixOverrides 后缀删除
    - prefixOverrides 前缀删除

```xml
<!-- List<Emp> getEmpByCondition(Emp emp); -->
<select id="getEmpByCondition" resultType="emp">
    SELECT *
    FROM t_emp
    <trim prefix="WHERE" suffixOverrides="AND">
        <if test="empName != null and empName != ''">
            emp_name LIKE "%"#{empName}"%" AND
        </if>
        <if test="age != null and age != ''">
            age = #{age} AND
        </if>
        <if test="gender != null and gender != ''">
            gender = #{gender} AND
        </if>
    </trim>
</select>
```

## `choose`, `when`, `otherwise` (`switch`)

:::note
这相当于 if… else… 结构，所以一旦上面的when不成立，下面的语句就不会执行了。
:::

```xml
<!-- List<Emp> getEmpByChoose(Emp emp); -->
<select id="getEmpByChoose" resultType="emp">
    SELECT *
    FROM t_emp
    <where>
        <choose>
            <when test="empName != null and empName != ''">
                emp_name = #{empName}
            </when>
            <when test="age != null and age != ''">
                age = #{age}
            </when>
        </choose>
    </where>
</select>

```

## `foreach`（批量插删）**重要**

:::note
经常用于批量添加和批量删除
:::

- collection 设置要循环的数组或者集合
- item 用一个字符串数组或集合中的每一个数据
- separator 间隔符号
- open 循环的所有内容以什么开始
- close 循环的所有内容以什么结束
- **批量插入**：

```xml
<!-- void insertMoreEmp(@Params("emps") List<Emp> emps); -->
<insert id="insertMoreEmp">
    INSERT INTO t_emp
    VALUES
    <foreach collection="emps" item="emp" separator=",">
        (NULL, #{emp.empName}, #{emp.age}, #{emp.gender}, null)
    </foreach>
</insert>
```

- **批量删除**：

```xml
<!-- void deleteMoreEmp(@Param("empIds") Integer[] empIds); -->
<delete id="deleteMoreEmp">
    DELETE FROM t_emp
    WHERE emp_id
    IN
    <foreach collection="empIds" item="empId" separator="," open="(" close=")">
        #{empId}
    </foreach>
</delete>
```

# SQL片段

将重复的SQL代码抽取出来被多个语句重复使用

```xml
<sql id="empColumns">
    emp_id, emp_name, age, gender, dept_id
</sql>

<!-- List<Emp> getEmpByCondition(Emp emp); -->
<select id="getEmpByCondition" resultType="emp">
    SELECT  <include refid="empColumns"></include>
    FROM t_emp
    <trim prefix="WHERE" suffixOverrides="AND">
        <if test="empName != null and empName != ''">
            emp_name LIKE "%"#{empName}"%" AND
        </if>
        <if test="age != null and age != ''">
            age = #{age} AND
        </if>
        <if test="gender != null and gender != ''">
            gender = #{gender} AND
        </if>
    </trim>
</select>
```

# 缓存

## 一级缓存

一级缓存是SqlSession级别的缓存（即同一个链接），通过同一个SqlSession查询的数据会被缓存，下次查询相同的数据就会从**缓存中直接获取，不会从数据库重新访问**。

以下四种情况会导致一级缓存失效：

1. 不同SqlSession对应不同一级缓存。（即不同SqlSession，即使是相同查询条件也无用）。
2. 同一个SqlSession但是查询条件不同。
3. 同一个SqlSession 两次查询期间执行了任何一次针对此表增删改操作。
4. 同一个SqlSession两次查询期间手动清空了缓存。
   
    ```java
    sqlSession.clearCache();
    ```
    

## 二级缓存

`SqlSessionFactory` 级别的，多个`SqlSession`可以共享。

### 开启（四个条件）

- 核心配置文件，设置全局属性配置 `cacheEnabled="true"`， 默认为 `true`，不需要设置

```xml
<settings>
  <setting cacheEnabled="true"></setting>
</settings>
```

- 在映射文件中设置`<cache />`

```xml
<mapper namespace="com.atguigu.mybatis.mapper.DynamicMapperSQLMapper">
    <cache />
    <!-- 余下代码 -->
</mapper>
```

- 二级缓存必须是在 `SQLSession` 关闭或提交之后有效。（即`SQLSession`关闭或提交后，一级缓存当中的数据才会保存到一级缓存中）
- 实体类必须实现 `Serializable` 接口。

### 二级缓存失效

只有一种情况

- 任意一次增删改会清空二级缓存。

### 二级缓存相关配置（简单了解即可）

在`mapper`配置文件中添加的`cache`标签可以设置一些厲性

- `eviction`属性：缓存回收策略，默认的是 `LRU`。
    - `LRU` (Least Recently Used) 最近最少使用的：移除最长时间不被使用的对象。
    - `FIFO` (First in First out) 先进先出：按对象进入缓存的顺序来移除它们。
    - `SOFT` 软引用：移除基于垃圾回收器状态和软引用规则的对象。
    - `WEAK` 弱引用：更积极地移除基于垃圾收集器状态和弱引用规则的对象。
- `flushInterval`属性：刷新间隔，单位秒
    - 默认情况是不设置，也就是没有刷新间隔，缓存仅仅调用语句时刷新
- `size`：引用数目，正整数（一般不设置，使用默认的即可）
    - 代表缓存最多可以存储多少个对象，太大容易导致内存溢出
- `readOnly`：只读，`true`/`false`
    - `true`：只读缓存，会给所有调用者返回缓存对家的相同实例。因此这些对象不能被修改。这提供了很大的性能优势。
    - `false`：读写缓存，返回缓存对象的拷贝（通过序列化），会慢一些，但是安全，所以默认这一选项是`false`。

## 缓存查询顺序

:::note
由大缓存到小缓存。
:::

1. 先查询二级缓存，因为二级缓存当中可能会有其他线程已经查询出来的数据。
2. 二级缓存没有命中，则再查询一级缓存。
3. 一级缓存也没有命中，则执行查询数据库。
4. `SQLSession`关闭之后，一级缓存当中的数据会写入到二级缓存。

## 整合第三方缓存 `EHCache`

:::tip
简单了解即可。

只针对二级缓存。
:::



# 逆向

⚠️ 一定注意，如果数据库修改了，要重新逆向生成的话，一定要先把之前生成的文件全部删除才行！！！不然他默认是追加不是覆盖！！！

- 正向工程：先创建Java实体类，由框架负责根据实体类生成数据库表。Hibernate 是支持正向工程的。
- 逆向工程：先创建数据库表，由框架负责根据数据库表反向生成如下资源：
1. Java实体类。
2. Mapper接口。
3. Mapper映射文件。

### BUG

可能会出现`java: 错误: 不支持发行版本 5`的报错，此时需要注意编译环境全部都要统一

⚠️ 初步看来 `jdk18`会报错，统一用`jdk1.8`，`lauguage level 7`。

- Project的jdk版本
  
    ![截屏2022-11-12 15.19.53.png](https://oss.kinda.info/image/202211161727823.png)
    
- Module的jdk版本
  
    ![截屏2022-11-12 15.19.25.png](https://oss.kinda.info/image/202211161727504.png)
    
- Java Compiler的jdk版本
  
    ![截屏2022-11-12 15.17.02.png](https://oss.kinda.info/image/202211161728671.png)
    

### 添加依赖和插件

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.atguigu.mybatis</groupId>
    <artifactId>mybatis_mbg</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>jar</packaging>
    <!--  依赖MyBatis核心包  -->
    <dependencies>
        <dependency>
            <groupId>org.mybatis</groupId>
            <artifactId>mybatis</artifactId>
            <version>3.5.7</version>
        </dependency>
        <!--  junit测试  -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.12</version>
            <scope>test</scope>
        </dependency>
        <!--  log4j日志  -->
        <dependency>
            <groupId>log4j</groupId>
            <artifactId>log4j</artifactId>
            <version>1.2.17</version>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.28</version>
        </dependency>
    </dependencies>
    <!--  控制Maven在构建过程中相关配置  -->
    <build>
        <!--  构建过程中用到的插件  -->
        <plugins>
            <!--  具体插件，逆向工程的操作是以构建过程中插件形式出现的  -->
            <plugin>
                <groupId>orgenerator</groupId>
                <artifactId>mybatis-generator-maven-plugin</artifactId>
                <version>1.3.0</version>
                <!--  插件的依赖  -->
                <dependencies>
                    <!--  逆向工程的核心依赖  -->
                    <dependency>
                        <groupId>org.mybatis.generator</groupId>
                        <artifactId>mybatis-generator-core</artifactId>
                        <version>1.3.2</version>
                    </dependency>
                    <!--  MySQL驱动  -->
                    <dependency>
                        <groupId>mysql</groupId>
                        <artifactId>mysql-connector-java</artifactId>
                        <version>8.0.28</version>
                    </dependency>
                </dependencies>
            </plugin>
        </plugins>
    </build>
</project>
```

### 创建Mybatis的核心配置文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <properties resource="jdbc.properties"></properties>
    <settings>
        <setting name="mapUnderscoreToCamelCase" value="true"/>
    </settings>
    <typeAliases>
        <package name=""/>
    </typeAliases>
    <!--配置连接数据库的环境-->
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <!--数据源-->
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.username}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <!--引入mybatis的映射文件-->
    <mappers>
        <package name=""/>
    </mappers>
</configuration>
```

### 创建逆向工程的核心配置文件

- `targetRuntime` ：选择生成的清晰简洁/奢华尊享
    - `MyBatis3` 奢华尊享 基本所有情况都可以
    - `MyBatis3Simple` 清晰简洁 只会写明单表

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
<generatorConfiguration>
		<!--
			targetRuntime: 执行生成的逆向工程的版本 
			MyBatis3Simple: 生成基本的CRUD(清新简洁版) 
			MyBatis3: 生成带条件的CRUD(奢华尊享版)
		-->

		<context id="DB2Tables" targetRuntime="MyBatis3">
		
				<!-- 数据库的连接信息 -->
				<jdbcConnection driverClass="com.mysql.cj.jdbc.Driver"
						serverTimezone=UTC"
						connectionURL="jdbc:mysql://localhost:3306/mybatis?
						userId="root"
					  password="123456">
		    </jdbcConnection>
		
				<!-- javaBean的生成策略-->
		    <javaModelGenerator targetPackage="com.atguigu.mybatis.pojo" targetProject="./src/main/java">
		        <property name="enableSubPackages" value="true" />
						<property name="trimStrings" value="true" />
				</javaModelGenerator>
		
				<!-- SQL映射文件的生成策略 -->
				<sqlMapGenerator targetPackage="com.atguigu.mybatis.mapper" targetProject="./src/main/resources">
		      <property name="enableSubPackages" value="true" />
		    </sqlMapGenerator>
		
				<!-- Mapper接口的生成策略 -->
		    <javaClientGenerator type="XMLMAPPER" targetPackage="com.atguigu.mybatis.mapper"  targetProject="./src/main/java">
					<property name="enableSubPackages" value="true" />
				</javaClientGenerator>

				<!-- 逆向分析的表 -->
				<!-- tableName设置为*号，可以对应所有表，此时不写domainObjectName --> 
				<!-- domainObjectName属性指定生成出来的实体类的类名 -->
		    <table tableName="t_emp" domainObjectName="Emp"/>
		    <table tableName="t_dept" domainObjectName="Dept"/>
		
		</context>
</generatorConfiguration>
```

# 分页插件

### `pom.xml`添加依赖

```xml
<!-- 分页插件 -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.2.0</version>
</dependency>
```

### 配置分页插件

在`mybatis-config.xml`核心配置文件添加 `plugin`

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>

    <properties resource="jdbc.properties"></properties>

    <typeAliases>
        <package name="com.atguigu.mybatis.pojo"/>
    </typeAliases>

    <plugins>
        <!-- 设置分页插件 -->
        <plugin interceptor="com.github.pagehelper.PageInterceptor"></plugin>
    </plugins>

    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"></transactionManager>
            <dataSource type="POOLED">
                <property name="driver" value="${jdbc.driver}"/>
                <property name="url" value="${jdbc.url}"/>
                <property name="username" value="${jdbc.user}"/>
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>

    <mappers>
        <package name="com.atguigu.mybatis.mapper"/>
    </mappers>
</configuration>
```

### 测试分页功能

```java
@Test
public void testPage() {
    SqlSession sqlSession = SqlSessionUtil.getSqlSession();
    DynamicMapperSQLMapper mapper = sqlSession.getMapper(DynamicMapperSQLMapper.class);

    // 查询功能之前开启分页, 第1页, 每页显示4条, 并且获取部分分页的信息
    // Page{count=true, pageNum=2, pageSize=4, startRow=4, endRow=8, total=0, pages=0, reasonable=null, pageSizeZero=null}[]
    Page<Object> page = PageHelper.startPage(2, 4);
    System.out.println(page);

    // 查询
    List<Emp> emps = mapper.getEmpByCondition(null);

    //输出分页信息
    // Page{count=true, pageNum=2, pageSize=4, startRow=4, endRow=8, total=25, pages=7, reasonable=false, pageSizeZero=false}[Emp{empId=5, empName='刘三', age=22, gender='男'}, .....]
    System.out.println(page);

    // 输出数据
    emps.forEach(System.out::println);

    // 生成导航页码信息, 更丰富页面信息
    PageInfo<Emp> pageInfo = new PageInfo<>(emps, 5);

    sqlSession.close();
}
```

:::tip
关注上方的`PageInfo` 即可，内部封装了很多分页相关的信息。
:::