---
title: Curl命令使用
tags: [curl]
description: Curl相关文档
---

:::info
curl是一个非常实用的、用来与服务器之间传输数据的工具；支持的协议包括 (DICT, FILE, FTP, FTPS, GOPHER, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, POP3, POP3S, RTMP, RTSP, SCP, SFTP, SMTP, SMTPS, TELNET and TFTP)，curl设计为无用户交互下完成工作；
:::

:::info
curl提供了一大堆非常有用的功能，包括代理访问、用户认证、ftp上传下载、HTTP POST、SSL连接、cookie支持、断点续传...。
:::

 
## curl命令语法：

```shell
curl [options] [URL...]
```

## curl命令参数详解：

由于linux curl功能十分强大，所以命令参数十分多，下表只是筛选出来的部分参数，更多参数请运行“man curl”命令查看。

### url

- `url` 

:::info**需要抓取多个URL时用下面通配符的方式**

1. http://{www,ftp,mail}.aiezu.com；
2. http://aiezu.com/images/[001-999].jpg；
3. http://aiezu.com/images/[1-999].html；
4. ftp://aiezu.com/file[a-z].txt
:::

### 请求方法

- `-X "POST/GET"`

#### 范例

```shell
curl -X POST https://www.example.com
```

### POST请求

:::tip
使用`-d`参数以后，HTTP 请求会自动加上标头`Content-Type : application/x-www-form-urlencoded`。并且会自动将请求转为 `POST` 方法，因此可以省略`-X POST`。
:::

:::tip
`--data-urlencode`参数等同于`-d`，发送 POST 请求的数据体，区别在于会自动将发送的数据进行 URL 编码。
:::

- `-d "string"`
- `--data-urlencode "string"`

#### 范例

```shell
curl -d 'login=emma＆password=123' -X POST https://google.com/login
# 或者
curl -d 'login=emma' -d 'password=123' -X POST  https://google.com/login
```

:::tip
curl可以读取本地文本文件的数据发起post请求，具体范例如下
:::

```shell
curl -d '@data.txt' https://google.com/login
```

发送的数据hello world之间有一个空格，需要进行 URL 编码。

```shell
curl --data-urlencode 'comment=hello world' https://google.com/login
```

### 文件上传

- `-F 'file=@filePath;filename=fileName;type=type;'`

#### 范例

指定 `MIME` 类型为`image/png`，否则 `curl` 会把 MIME 类型设为`application/octet-stream`。

```shell
curl -F 'file=@photo.png;filename=me.png;type=image/png' https://google.com/profile
```

### 请求头

- `-H "name: value"`
- `--header "name: value"`

添加一个http header(http请求头)；

- `-H "name:"`
- `--header "name:"	`

移除一个http header(http请求头)；

- `-A "string"`
- `--user-agent "string"`

设置Http请求头“User-Agent”，服务器通过“User-Agent”可以判断客户端使用的浏览器名称和操作系统类型，伪造此参数能导致服务器做出错误判断。
也可以使用“-H”, “--header option”设置此选项；

- `-e <URL>`
- `--referer <URL>`

设置访问时的来源页面，告诉http服务从哪个页面进入到此页面；

#### 范例

```shell
curl -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' https://google.com
```

### 响应头

- `-I`
- `--head`

只输出HTTP-header，不获取内容(HTTP/FTP/FILE)。

用于HTTP服务时，获取页面的http头（如：curl -I http://aiezu.com）

用于FTP/FILE时，将会获取文件大小、最后修改时间（如：curl -I file://test.txt）

- `-i`
- `--include`	

输出HTTP头和返回内容

- `-D <file>`
- `--dump-header <file>	`

转储http响应头到指定文件

### cookie

- `-b name=data`
- `--cookie name=data`

发送cookie数据到HTTP服务器，数据格式为："NAME1=VALUE1; NAME2=VALUE2"；

如果行中没有“=”，将把参数值当作cookie文件名；

这个cookie数据可以是由服务器的http响应头“Set-Cookie:”行发送过来的；

- `-c filename`
- `--cookie-jar file name`

完成操作后将服务器返回的cookies保存到指定的文件；

指定参数值为“-”将定向到标准输出“如控制台”；

- `-j`
- `--junk-session-cookies`

告诉curl放弃所有的"session cookies"；

相当于重启浏览器；

#### 范例

```shell
curl -b 'foo=bar' https://google.com
```

```shell
curl -b 'foo1=bar;foo2=bar2' https://google.com
```

```shell
curl -b cookies.txt https://www.google.com
```

```shell
curl -c cookies.txt https://www.google.com
```

### 代理

- `-x host:port`
- `-x [protocol://[user:pwd@][host][:port]`
- `--proxy [protocol]://[user:pwd@][host][:port]`

使用HTTP代理访问；如果未指定端口，默认使用8080端口;

protocol默认为http_proxy，其他可能的值包括：

http_proxy、HTTPS_PROXY、socks4、socks4a、socks5；


- `-p`
- `--proxytunnel`

将“-x”参数的代理，作为通道的方式去代理非HTTP协议，如ftp；

- `--socks4 <host[:port]>`
- `--socks4a <host[:port]>`
- `--socks5 <host[:port]>`

使用SOCKS4代理；

使用SOCKS4A代理；

使用SOCKS5代理；

此参数会覆盖“-x”参数；


#### 范例

```shell
curl -x socks5://james:cats@myproxy.com:8080 https://www.example.com
```

```shell
curl -x james:cats@myproxy.com:8080 https://www.example.com
```

### 跟随重定向

#### 范例

- `-L`

```shell
curl -L -d 'tweet=hi' https://api.twitter.com/tweet
```

### 调试

- `-v`
- `--trace`

:::tip
`--trace`参数也可以用于调试，还会输出原始的二进制数据。
:::

#### 范例

```shell
curl -v https://www.example.com
```

### 文件保存

- `-o filaName`
- `-O`

:::tip
`-O`参数将服务器回应保存成文件，并将 URL 的最后部分当作文件名。
:::

#### 范例

```shell
curl -o example.html https://www.example.com
```

```shell
curl -O https://www.example.com/foo/bar.html
```

### 模拟网速

- `--limit-rate`

```shell
curl --limit-rate 200k https://google.com
```

### Basic Auth

- `--username`
- `-u`

#### 范例

```shell
curl --user username:password https://example.com
curl -u username:password https://example.com
```