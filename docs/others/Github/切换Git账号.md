---
title: 切换Git账号
date: 2022-04-05 17:16:27
tags: [git]
description: Git相关文档
---

## 开启ssh-agent服务

```shell
eval "$(ssh-agent -s)"
```

## 把刚刚生成的ssh key加入到ssh-agent中
```shell
ssh-add ~/.ssh/id_rsa_zjm
```

## 测试账号更换是否成功
```shell
ssh git@github.com
```