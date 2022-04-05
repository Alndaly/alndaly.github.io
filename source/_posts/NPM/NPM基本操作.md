---
title: NPM基本操作
date: 2022-04-05 17:21:27
tags:
  - [NPM]
  - [Node]
categories:
  - [技术]
description: NPM的一些基本操作
---

# 自己的包的上传

1.  先把下载包的服务器地址切换为NPM官方服务器，注意这一步很重要！
2.  输入`npm login` 回车，根据提示输入账号、密码、邮箱，输入密码的时候不会显示出来，直接输就可以了。
3.  创建一个要打包的文件夹，进入到文件夹。
4.  运行`npm init`初始化一个`package.json`文件，根据提示输入包名，入口。这里没写的或者要修改也可以到`package.json`文件进行修改。
5.  在你创建的文件夹里新建两个文件: `index.js`和`README.md`，`index.js`文件就是你要导出的内容。
6.  `README.md`就是一个包的介绍,可以写怎么下载,怎么使用
7.  包写好后,运行`npm publish 文件夹名称`发布，注意`npm publish`后面这个是你的包文件夹名称不是`package.json`里的`name`，为了统一，文件夹名称和包名最好还是写一样的。
8.  发布成功后,到[NPM官网](https://www.npmjs.com/)搜索就可以搜到了。

# 查看本地NPM镜像

1.查看镜像源

`npm get registry`

2.切换官方源

`npm config set registry <http://registry.npmjs.org`>

3.切换淘宝源（最新版）

`npm config set registry <https://registry.npmmirror.com`>

4.使用临时镜像源，当安装依赖不想切换源地址时，仅安装当前依赖可以使用

`npm install xxx（依赖名） --registry=https://xxx（源地址）`

