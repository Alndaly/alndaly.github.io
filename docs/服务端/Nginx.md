---
title: Nginx相关
---

:::info

Nginx联合创始人安德鲁·阿列克谢夫（Andrew Alexeev）曾说：Nginx是为对Apache性能不满意的人而构建的。随着Internet需求的变化，Web服务器的工作也在变化。Nginx的构建比以往任何时候都更有效率，更可扩展，更安全，更强大。

本文提供了Nginx的基本概念及知识。以开发者必备的Nginx基础知识为主，罗列了一些Nginx教程，希望对大家有所帮助。**

:::

:::note
-   Nginx 使用基于事件驱动架构，使得其可以支持数以百万级别的 TCP 连接。
-   高度的模块化和自由软件许可证使得第三方模块层出不穷（这是个开源的时代啊）。
-   Nginx 是一个跨平台服务器，可以运行在 Linux、Windows、FreeBSD、Solaris、AIX、Mac OS 等操作系统上。
-   这些优秀的设计带来的极大的稳定性。
:::

## 配置Nginx http自动跳转https

```conf {3-5} title="nginx.conf"
server{
    ...
    if ($scheme = http) {
        rewrite ^(.*) https://$host$1 permanent;
    }
    ...
}

```

## Nginx转发后会默认会自动去掉请求头中带有下划线的参数

解决方法如下：

在nginx里的nginx.conf配置文件中的http部分中添加如下配置：

> 记得带上结尾的分号！

```conf
underscores_in_headers on; （默认 underscores_in_headers 为off）
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200716093635506.png)

## Nginx转发


### 前言

Location 是 Nginx 中一个非常核心的配置，这篇重点讲解一下 Location 的配置问题以及一些注意事项。

### 语法

关于 Location，举个简单的配置例子：

```conf
http {
  server {
      listen 80;
    	server_name www.yayujs.com;
    	location / {
      	root /home/www/ts/;
	      index index.html;
    	}
  }
}
```

大致的意思是，当你访问 `www.yayujs.com` 的 `80` 端口的时候，返回 `/home/www/ts/index.html` 文件。

我们看下 Location 的具体语法：

```conf
location [ = | ~ | ~* | ^~ ] uri { ... }
```

重点看方括号中的 `[ = | ~ | ~* | ^~ ]`，其中 `|` 分隔的内容表示你可能会用到的语法，其中：

-   `=` 表示精确匹配，比如：

```conf
location = /test {
  return 200 "hello";
}

# /test ok
# /test/ not ok
# /test2 not ok
# /test/2 not ok
```

-   `~` 表示区分大小写的正则匹配，比如：

```conf
location ~ ^/test$ {
  [ configuration ]
}

# /test ok
# /Test not ok
# /test/ not ok
# /test2 not ok
```

-   `~*` 表示不区分大小写的正则匹配

```conf
location ~* ^/test$ {
	[ configuration ]
}

# /test ok
# /Test ok
# /test/ not ok
# /test2 not ok
```

-   `^~` 表示 uri 以某个字符串开头

```conf
location ^~ /images/ {
	[ configuration ]
}

# /images/1.gif ok
```

而当你不使用这些语法的时候，只写 uri 的时候：

`/` 表示通用匹配：

```conf
location / {
	[ configuration ]
}

# /index.html ok
```

```
location /test {
    [ configuration ]
}

# /test ok
# /test2 ok
# /test/ ok
```

### 匹配顺序

当存在多个 location 的时候，他们的匹配顺序引用 [Nginx 官方文档](https://link.juejin.cn/?target=http%3A%2F%2Fnginx.org%2Fen%2Fdocs%2Fhttp%2Fngx_http_core_module.html%23location)就是：

> A location can either be defined by a prefix string, or by a regular expression. Regular expressions are specified with the preceding “~*” modifier (for case-insensitive matching), or the “~” modifier (for case-sensitive matching). To find location matching a given request, nginx first checks locations defined using the prefix strings (prefix locations). Among them, the location with the longest matching prefix is selected and remembered. Then regular expressions are checked, in the order of their appearance in the configuration file. The search of regular expressions terminates on the first match, and the corresponding configuration is used. If no match with a regular expression is found then the configuration of the prefix location remembered earlier is used.

> If the longest matching prefix location has the “^~” modifier then regular expressions are not checked.

> Also, using the “=” modifier it is possible to define an exact match of URI and location. If an exact match is found, the search terminates. For example, if a “/” request happens frequently, defining “location = /” will speed up the processing of these requests, as search terminates right after the first comparison. Such a location cannot obviously contain nested locations.

翻译整理后就是：

location 的定义分为两种：

-   前缀字符串（prefix string）
-   正则表达式（regular expression），具体为前面带 `~*` 和 `~` 修饰符的

而匹配 location 的顺序为：

1.  检查使用前缀字符串的 locations，在使用前缀字符串的 locations 中选择最长匹配的，并将结果进行储存
2.  如果符合带有 `=` 修饰符的 URI，则立刻停止匹配
3.  如果符合带有 `^~` 修饰符的 URI，则也立刻停止匹配。
4.  然后按照定义文件的顺序，检查正则表达式，匹配到就停止
5.  当正则表达式匹配不到的时候，使用之前储存的前缀字符串

再总结一下就是：

在顺序上，前缀字符串顺序不重要，按照匹配长度来确定，正则表达式则按照定义顺序。

在优先级上，`=` 修饰符最高，`^~` 次之，再者是正则，最后是前缀字符串匹配。

我们举几个简单的例子复习下：

```conf
server {
    location /doc {
        [ configuration A ]
    }
    location /docu {
        [ configuration B ]
    }
}

# 请求 /document 使用 configuration B
# 虽然 /doc 也能匹配到，但在顺序上，前缀字符串顺序不重要，按照匹配长度来确定
```

```conf
server {
    location ~ ^/doc {
        [ configuration A ]
    }
    location ~ ^/docu {
        [ configuration B ]
    }
}

# 请求 /document 使用 configuration A
# 虽然 ~ ^/docu 也能匹配到，但正则表达式则按照定义顺序
复制代码
```

```conf
server {
    location ^~ /doc {
        [ configuration A ]
    }
    location ~ ^/docu {
        [ configuration B ]
    }
}

# 请求 /document 使用 configuration A
# 虽然 ~ ^/docu 也能匹配到，但 ^~ 的优先级更高
```

```conf
server {
    location /document {
        [ configuration A ]
    }
    location ~ ^/docu {
        [ configuration B ]
    }
}

# 请求 /document 使用 configuration B
# 虽然 /document 也能匹配到，但正则的优先级更高
复制代码
```

### root 与 alias 的区别

当我们这样设置 `root` 的时候：

```conf
location /i/ {
    root /data/w3;
}
```

当请求 `/i/top.gif` ，`/data/w3/i/top.gif` 会被返回。

当我们这样设置 `alias` 的时候：

```conf
location /i/ {
    alias /data/w3/images/;
}
```

当请求 `/i/top.gif` ，`/data/w3/images/top.gif` 会被返回。

乍一看两者很像，但细一看，就能看出两者的区别，root 是直接拼接 `root` + `location` 而 alias 是用 `alias` 替换 `location`，所以 root 中最后的路径里有 `/i/`，而 alias 中最后的路径里没有  `/i/` 。

所以如果你这样使用 allias 定义一个路径：

```conf
location /images/ {
    alias /data/w3/images/;
}
```

其实使用 root 会更好：

```
location /images/ {
    root /data/w3;
}
```

### server 和 location 中的 root

server 和 location 中都可以使用 root，举个例子：

```conf
http {
  server {
      listen 80;
    	server_name www.yayujs.com;
    	root /home/www/website/;
    	location / {
      	root /home/www/ts/;
	      index index.html;
    	}
  }
}
```

如果两者都出现，是怎样的优先级呢？

简单的来说，就是就近原则，如果 location 中能匹配到，就是用 location 中的 root 配置，忽略 server 中的 root，当 location 中匹配不到的时候，则使用 server 中的 root 配置。


## **Nginx 基本概念**

### 正向代理与反向代理

为了便于理解，首先先来了解一下一些基础知识，nginx是一个高性能的反向代理服务器那么什么是反向代理呢？

代理是在服务器和客户端之间假设的一层服务器，代理将接收客户端的请求并将它转发给服务器，然后将服务端的响应转发给客户端。

不管是正向代理还是反向代理，实现的都是上面的功能。

如果你对OSI 七层模型与 TCP/IP 四层模型不是很熟悉可以再回顾下

> 正向代理

正向代理（forward）意思是一个位于客户端和原始服务器 (origin server) 之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标 (原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。

正向代理是为我们服务的，即为客户端服务的，客户端可以根据正向代理访问到它本身无法访问到的服务器资源。

正向代理对我们是透明的，对服务端是非透明的，即服务端并不知道自己收到的是来自代理的访问还是来自真实客户端的访问。

> 反向代理

反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。

反向代理是为服务端服务的，反向代理可以帮助服务器接收来自客户端的请求，帮助服务器做请求转发，负载均衡等。

反向代理对服务端是透明的，对我们是非透明的，即我们并不知道自己访问的是代理服务器，而服务器知道反向代理在为他服务。

### 负载均衡

如果请求数过大，单个服务器解决不了，我们增加服务器的数量，然后将请求分发到各个服务器上，将原先请求集中到单个服务器的情况改为请求分发到多个服务器上，就是负载均衡。

Upstream 指定后端服务器地址列表，在 server 中拦截响应请求，并将请求转发到 Upstream 中配置的服务器列表。

```conf
upstream balanceServer {    
		server 10.1.22.33:12345;    
		server 10.1.22.34:12345;
    server 10.1.22.35:12345;
}
server {    
		server_name  fe.server.com;    
		listen 80;    
		location /api {       
			proxy_pass <http://balanceServer>;  
		}
}
```

上面的配置只是指定了 nginx 需要转发的服务端列表，并没有指定分配策略。

默认情况下采用的是轮询策略，将所有客户端请求轮询分配给服务端。这种策略是可以正常工作的，但是如果其中某一台服务器压力太大，出现延迟，会影响所有分配在这台服务器下的用户。

**Nginx支持的负载均衡调度算法方式如下：**

**weight轮询(默认，常用)：**接收到的请求按照权重分配到不同的后端服务器，即使在使用过程中，某一台后端服务器宕机，Nginx会自动将该服务器剔除出队列，请求受理情况不会受到任何影响。这种方式下，可以给不同的后端服务器设置一个权重值(weight)，用于调整不同的服务器上请求的分配率；权重数据越大，被分配到请求的几率越大；该权重值，主要是针对实际工作环境中不同的后端服务器硬件配置进行调整的。ip_hash（常用）：每个请求按照发起客户端的ip的hash结果进行匹配，这样的算法下一个固定ip地址的客户端总会访问到同一个后端服务器，这也在一定程度上解决了集群部署环境下session共享的问题。

**fair：**智能调整调度算法，动态的根据后端服务器的请求处理到响应的时间进行均衡分配，响应时间短处理效率高的服务器分配到请求的概率高，响应时间长处理效率低的服务器分配到的请求少；结合了前两者的优点的一种调度算法。但是需要注意的是Nginx默认不支持fair算法，如果要使用这种调度算法，请安装upstream_fair模块。url_hash：按照访问的url的hash结果分配请求，每个请求的url会指向后端固定的某个服务器，可以在Nginx作为静态服务器的情况下提高缓存效率。同样要注意Nginx默认不支持这种调度算法，要使用的话需要安装Nginx的hash软件包。

### 动静分离

为了加快服务器的解析速度，可以把动态页面和静态页面交给不同的服务器来解析，加快解析速度，降低原来单个服务器的压力。

### Nginx常用命令

```shell
# 快速关闭Nginx，可能不保存相关信息，并迅速终止web服务
nginx -s stop
# 平稳关闭Nginx，保存相关信息，有安排的结束web服务
nginx -s quit
# 因改变了Nginx相关配置，需要重新加载配置而重载
nginx -s reload
# 重新打开日志文件
nginx -s reopen
# 为 Nginx 指定一个配置文件，来代替缺省的
nginx -c filename
# 不运行，而仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件
nginx -t
#  显示 nginx 的版本
nginx -v
# 显示 nginx 的版本，编译器版本和配置参数
nginx -V
# 格式换显示 nginx 配置参数2>&1 
nginx -V | xargs -n12>&1 
nginx -V | xargs -n1 | grep lua
```

**为什么选择Nginx**

Nginx是一款自由的、开源的、高性能的HTTP服务器和反向代理服务器；同时也是一个IMAP、POP3、SMTP代理服务器；Nginx可以作为一个HTTP服务器进行网站的发布处理，另外Nginx可以作为反向代理进行负载均衡的实现。在Nginx网站上，其功能包括：

-   HTTP和HTTPS（TLS / SSL / SNI）
-   超快速的Web服务器用于静态内容
-   FastCGI，WSGI，SCGI用于动态内容
-   具有负载平衡和缓存功能的加速Web代理
-   不间断实时二进制升级和配置
-   压缩和内容过滤器
-   虚拟主机
-   FLV和MP4的媒体流
-   带宽和连接策略
-   全面的访问控制
-   自定义日志
-   嵌入式脚本
-   带有TLS的SMTP / IMAP / POP3的邮件代理
-   逻辑，灵活，可扩展的配置
-   在Linux，FreeBSD，Mac OS X，Solaris和Windows上运行

## **Nginx有如下优势：**

### IO多路复用epoll（IO复用）

如何理解呢？举个例子吧！

有A、B、C三个老师，他们都遇到一个难题，要帮助一个班级的学生解决课堂作业。老师A采用从第一排开始一个学生一个学生轮流解答的方式去回答问题，老师A浪费了很多时间，并且有的学生作业还没有完成呢，老师就来了，反反复复效率极慢。老师B是一个忍者，他发现老师A的方法行不通，于是他使用了影分身术，分身出好几个自己同一时间去帮好几个同学回答问题，最后还没回答完，老师B消耗光了能量累倒了。

老师C比较精明，他告诉学生，谁完成了作业举手，有举手的同学他才去指导问题，他让学生主动发声，分开了“并发”。

这个老师C就是Nginx。

### 轻量级

-   功能模块少 - Nginx仅保留了HTTP需要的模块，其他都用插件的方式，后天添加
-   代码模块化 - 更适合二次开发，如阿里巴巴Tengine

### CPU亲和

把CPU核心和Nginx工作进程绑定，把每个worker进程固定在一个CPU上执行，减少切换CPU的cache miss，从而提高性能。

**Nginx配置**

```conf
#打开主配置文件，若你是用lnmp环境安装vim /usr/local/nginx/conf/nginx.conf
----------------------------------------
user #设置nginx服务的系统使用用户
worker_processes #工作进程数 一般情况与CPU核数保持一致
error_log #nginx的错误日志
pid #nginx启动时的pid
events {    
	worker_connections#每个进程允许最大连接数    
	use#nginx使用的内核模型
}
```

我们使用 nginx 的 http 服务，在配置文件 nginx.conf 中的 http 区域内，配置无数个 server ，每一个 server 对应这一个虚拟主机或者域名。

```conf
http {
    ... ...        #后面再详细介绍 http 配置项目    
		server {        
			listen 80                          #监听端口;        
			server_name localhost              #地址        
			location / {                       #访问首页路径            
				root /xxx/xxx/index.html       #默认目录            
				index index.html index.htm     #默认文件        
			}        
			error_page  500 504   /50x.html    #当出现以上状态码时从新定义到50x.html        
			location = /50x.html {             #当访问50x.html时            
				root /xxx/xxx/html             #50x.html 页面所在位置        
			}    
		}    
		server {        
			... ...    
		}
}
```