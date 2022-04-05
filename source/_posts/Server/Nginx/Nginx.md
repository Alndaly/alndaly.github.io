---
title: Nginx转发后会默认会自动去掉请求头中带有下划线的参数
date: 2022-04-05 11:35:19
tags:
  - [nginx]
categories:
  - [技术]
description: Nginx相关文档
---

## Nginx转发后会默认会自动去掉请求头中带有下划线的参数
解决方法如下：

在nginx里的nginx.conf配置文件中的http部分中添加如下配置：
> 记得带上结尾的分号！
```conf
underscores_in_headers on; （默认 underscores_in_headers 为off）
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200716093635506.png)