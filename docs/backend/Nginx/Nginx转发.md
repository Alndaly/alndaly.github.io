## Nginx转发

### 前言

`Location`是`Nginx`中一个非常核心的配置，这篇重点讲解一下`Location`的配置问题以及一些注意事项。

### 语法

关于`Location`，举个简单的配置例子：

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

大致的意思是，当你访问`www.yayujs.com`的`80`端口的时候，返回`/home/www/ts/index.html`文件。

我们看下`Location`的具体语法：

```conf
location [ = | ~ | ~* | ^~ ] uri { ... }
```

重点看方括号中的 `[ = | ~ | ~* | ^~ ]`，其中 `|` 分隔的内容表示你可能会用到的语法，其中：

- `=`表示精确匹配，比如：

```conf
location = /test {
  return 200 "hello";
}

# /test ok
# /test/ not ok
# /test2 not ok
# /test/2 not ok
```

- `~`表示区分大小写的正则匹配，比如：

```conf
location ~ ^/test$ {
  [ configuration ]
}

# /test ok
# /Test not ok
# /test/ not ok
# /test2 not ok
```

- `~*`表示不区分大小写的正则匹配

```conf
location ~* ^/test$ {
	[ configuration ]
}

# /test ok
# /Test ok
# /test/ not ok
# /test2 not ok
```

- `^~`表示`uri`以某个字符串开头

```conf
location ^~ /images/ {
	[ configuration ]
}

# /images/1.gif ok
```

而当你不使用这些语法的时候，只写`uri`的时候：

`/`表示通用匹配：

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

当存在多个`location`的时候，他们的匹配顺序引用 [Nginx 官方文档](https://link.juejin.cn/?target=http%3A%2F%2Fnginx.org%2Fen%2Fdocs%2Fhttp%2Fngx_http_core_module.html%23location)就是：

> A location can either be defined by a prefix string, or by a regular expression. Regular expressions are specified with the preceding “~*” modifier (for case-insensitive matching), or the “~” modifier (for case-sensitive matching). To find location matching a given request, nginx first checks locations defined using the prefix strings (prefix locations). Among them, the location with the longest matching prefix is selected and remembered. Then regular expressions are checked, in the order of their appearance in the configuration file. The search of regular expressions terminates on the first match, and the corresponding configuration is used. If no match with a regular expression is found then the configuration of the prefix location remembered earlier is used.

> If the longest matching prefix location has the “^~” modifier then regular expressions are not checked.

> Also, using the “=” modifier it is possible to define an exact match of URI and location. If an exact match is found, the search terminates. For example, if a “/” request happens frequently, defining “location = /” will speed up the processing of these requests, as search terminates right after the first comparison. Such a location cannot obviously contain nested locations.

翻译整理后就是：

`location`的定义分为两种：

- 前缀字符串（`prefix string`）
- 正则表达式（`regular expression`），具体为前面带`~*`和`~`修饰符的

而匹配 location 的顺序为：

1. 检查使用前缀字符串的`locations`，在使用前缀字符串的`locations`中选择最长匹配的，并将结果进行储存
2. 如果符合带有`=`修饰符的URI，则立刻停止匹配
3. 如果符合带有`^~`修饰符的URI，则也立刻停止匹配。
4. 然后按照定义文件的顺序，检查正则表达式，匹配到就停止
5. 当正则表达式匹配不到的时候，使用之前储存的前缀字符串

再总结一下就是：

在顺序上，前缀字符串顺序不重要，按照匹配长度来确定，正则表达式则按照定义顺序。

在优先级上，`=`修饰符最高`^~`次之，再者是正则，最后是前缀字符串匹配。

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
```

### `root`与`alias`的区别

当我们这样设置`root`的时候：

```conf
location /i/ {
    root /data/w3;
}
```

当请求`/i/top.gif`，`/data/w3/i/top.gif`会被返回。

当我们这样设置`alias`的时候：

```conf
location /i/ {
    alias /data/w3/images/;
}
```

当请求`/i/top.gif`，`/data/w3/images/top.gif`会被返回。

乍一看两者很像，但细一看，就能看出两者的区别，`root`是直接拼接`root` + `location`而alias是用`alias`替换`location`，所以`root`中最后的路径里有`/i/`，而 alias 中最后的路径里没有`/i/` 。

所以如果你这样使用`allias`定义一个路径：

```conf
location /images/ {
    alias /data/w3/images/;
}
```

其实使用`root`会更好：

```
location /images/ {
    root /data/w3;
}
```

### `server`和`location`中的`root`

`server`和`location`中都可以使用`root`，举个例子：

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

简单的来说，就是就近原则，如果`location`中能匹配到，就是用`location`中的`root`配置，忽略`server`中的`root`，当`location`中匹配不到的时候，则使用`server`中的`root`配置。
