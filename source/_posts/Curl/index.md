---
title: Curl命令使用
date: 2022-08-28 15:45:27
tags:
  - [curl]
categories:
  - [技术]
description: Curl相关文档
---

```shell
crul -[选项] [URL]
```


## 代理访问

```shell
curl --proxy [protocol]://[host][:port] https://alnda.cn
curl -x http://127.0.0.1:5000 https://alnda.cn
```

## 显示连接信息

```shell
curl -v www.baidu.com
curl -I www.baidu.com #只显示返回的头信息
```

## 带参数的连接

```shell
curl -d 'user=xiaoruan&age=22' http://127.0.0.1/index.html
```

## 指定请求方式

```shell
curl -XGET www.baidu.com
```

## 将请求返回输入到某一个文件中

```shell
curl www.baidu.com -o fileName
curl www.baidu.com -O 文件将会生成在同级目录下且和url相同名字
```