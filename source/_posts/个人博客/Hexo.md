---
title: 利用 Github Actions 自动部署 Hexo 博客
date: 2022-04-05 18:13:27
tags:
  - [Hexo]
  - [Git]
  - [Actions]
categories:
  - [技术]
description: Github Actions 可以很方便实现 CI/CD 工作流，类似 Travis 的用法，来帮我们完成一些工作，比如实现自动化测试、打包、部署等操作。当我们运行 Jobs 时，它会创建一个容器 (runner)，容器支持：Ubuntu、Windows 和 MacOS 等系统，在容器中我们可以安装软件，利用安装的软件帮我们处理一些数据，然后把处理好的数据推送到某个地方。
---

# 利用 Github Actions 自动部署 Hexo 博客

## 介绍

Github Actions 可以很方便实现 CI/CD 工作流，类似 Travis 的用法，来帮我们完成一些工作，比如实现自动化测试、打包、部署等操作。当我们运行 Jobs 时，它会创建一个容器 (runner)，容器支持：Ubuntu、Windows 和 MacOS 等系统，在容器中我们可以安装软件，利用安装的软件帮我们处理一些数据，然后把处理好的数据推送到某个地方。

本文将介绍利用 Github Actions 实现自动部署 hexo 到 Github Pages，在之前我们需要写完文章执行 `hexo generate --deploy` 来部署，当你文章比较多的时候，可能还需要等待很久，而且还可能会遇到本地安装的 Node.js 版本与 Hexo 不兼容的问题，目前我就是因为电脑的 Node.js 版本升到 v14 版本导致与 Hexo 不兼容部署不了，才来捣腾 Github Actions 功能的。利用 Github Actions 你将会没有这些烦恼。

## 前提

### 创建所需仓库

1. 创建 `blog` 仓库用来存放 Hexo 项目
2. 创建 `your.github.io` 仓库用来存放静态博客页面



### 生成部署密钥

一路按回车直到生成成功

```
$ ssh-keygen -f github-deploy-key
```

当前目录下会有 `github-deploy-key` 和 `github-deploy-key.pub` 两个文件。

### 配置部署密钥

复制 `github-deploy-key` 文件内容，在 `blog` 仓库 `Settings -> Secrets -> Add a new secret` 页面上添加。

1. 在 `Name` 输入框填写 `HEXO_DEPLOY_PRI`。
2. 在 `Value` 输入框填写 `github-deploy-key` 文件内容。

![img](https://sanonz.github.io/2020/deploy-a-hexo-blog-from-github-actions/add-secret@2x.png)

复制 `github-deploy-key.pub` 文件内容，在 `your.github.io` 仓库 `Settings -> Deploy keys -> Add deploy key` 页面上添加。

1. 在 `Title` 输入框填写 `HEXO_DEPLOY_PUB`。
2. 在 `Key` 输入框填写 `github-deploy-key.pub` 文件内容。
3. 勾选 `Allow write access` 选项。

![img](https://sanonz.github.io/2020/deploy-a-hexo-blog-from-github-actions/add-key@2x.png)

## 编写 Github Actions

### Workflow 模版

在 `blog` 仓库根目录下创建 `.github/workflows/deploy.yml` 文件，目录结构如下。

```
blog (repository)
└── .github
    └── workflows
        └── deploy.yml
```

在 `deploy.yml` 文件中粘贴以下内容。

```
name: CI

on:
  push:
    branches:
      - master

env:
  GIT_USER: Sanonz
  GIT_EMAIL: sanonz@126.com
  THEME_REPO: sanonz/hexo-theme-concise
  THEME_BRANCH: master
  DEPLOY_REPO: sanonz/sanonz.github.io
  DEPLOY_BRANCH: master

jobs:
  build:
    name: Build on node ${{ matrix.node_version }} and ${{ matrix.os }}
    runs-on: ubuntu-latest
    strategy:
      matrix:
        os: [ubuntu-latest]
        node_version: [12.x]

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Checkout theme repo
        uses: actions/checkout@v2
        with:
          repository: ${{ env.THEME_REPO }}
          ref: ${{ env.THEME_BRANCH }}
          path: themes/concise

      - name: Checkout deploy repo
        uses: actions/checkout@v2
        with:
          repository: ${{ env.DEPLOY_REPO }}
          ref: ${{ env.DEPLOY_BRANCH }}
          path: .deploy_git

      - name: Use Node.js ${{ matrix.node_version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node_version }}

      - name: Configuration environment
        env:
          HEXO_DEPLOY_PRI: ${{secrets.HEXO_DEPLOY_PRI}}
        run: |
          sudo timedatectl set-timezone "Asia/Shanghai"
          mkdir -p ~/.ssh/
          echo "$HEXO_DEPLOY_PRI" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts
          git config --global user.name $GIT_USER
          git config --global user.email $GIT_EMAIL
          cp _config.theme.yml themes/concise/_config.yml

      - name: Install dependencies
        run: |
          npm install

      - name: Deploy hexo
        run: |
          npm run deploy
```

### 模版参数说明

- *name* 为此 Action 的名字

- *on* 触发条件，当满足条件时会触发此任务，这里的 `on.push.branches.$.master` 是指当 `master` 分支收到 `push` 后执行任务。

- env

   

  为环境变量对象

  - *env.GIT_USER* 为 Hexo 编译后使用此 git 用户部署到仓库。
  - *env.GIT_EMAIL* 为 Hexo 编译后使用此 git 邮箱部署到仓库。
  - *env.THEME_REPO* 为您的 Hexo 所使用的主题的仓库，这里为 `sanonz/hexo-theme-concise`。
  - *env.THEME_BRANCH* 为您的 Hexo 所使用的主题仓库的版本，可以是：branch、tag 或者 SHA。
  - *env.DEPLOY_REPO* 为 Hexo 编译后要部署的仓库，例如：`sanonz/sanonz.github.io`。
  - *env.DEPLOY_BRANCH* 为 Hexo 编译后要部署到的分支，例如：master。

- jobs

   

  为此 Action 下的任务列表

  - *jobs.{job}.name* 任务名称

  - *jobs.{job}.runs-on* 任务所需容器，可选值：`ubuntu-latest`、`windows-latest`、`macos-latest`。

  - *jobs.{job}.strategy* 策略下可以写 `array` 格式，此 job 会遍历此数组执行。

  - jobs.{job}.steps

     

    一个步骤数组，可以把所要干的事分步骤放到这里。

    - *jobs.{job}.steps.$.name* 步骤名，编译时会会以 LOG 形式输出。
    - *jobs.{job}.steps.$.uses* 所要调用的 Action，可以到 https://github.com/actions 查看更多。
    - *jobs.{job}.steps.$.with* 一个对象，调用 Action 传的参数，具体可以查看所使用 Action 的说明。

### 第三方 Actions

使用第三方 Actions 语法 `{owner}/{repo}@{ref}` 或者 `{owner}/{repo}/{path}@{ref}` 例如：

```
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
```

一、调用 `actions/checkout@v2` 可以实现 Checkout 一个 git 仓库到容器。

例如 Checkout 当前仓库到本地，`with.repo` 不填写默认为当前仓库。

```
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
        # with:
          # repository: ${{ github.repository }}
```

例如 Checkout 第三方仓库 `git@github.com:sanonz/hexo-theme-concise.git` 的 `master` 分支到容器 `themes/concise` 目录。

```
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - with:
          repository: sanonz/hexo-theme-concise
          ref: master
          path: themes/concise
```

二、调用 `actions/setup-node@v1` 可以配置容器 Node.js 环境。

例如安装 Node.js 版本 v12 到容器中，`with.node-version` 可以指定 Node.js 版本。

```
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-node@v1
      - with:
          node-version: v12
```

可以在这里查找更多 Actions 以及使用方式 [官方 Actions 市场](https://github.com/marketplace?type=actions&query=checkout)。

### 配置文件

复制一份 https://github.com/sanonz/hexo-theme-concise/blob/master/_config.example.yml，放到 `blog` 根目录下，名为 `_config.theme.yml`，如果您已经配置过此文件，只需要把您的复制过来就行。

最终目录结构

```
blog (repository)
├── _config.theme.yml
└── .github
    └── workflows
        └── deploy.yml
```

把 `_config.theme.yml` 与 `deploy.yml` 文件推送到 `blog` 仓库，在此仓库 `Actions` 页面可以看到一个名字为 `CI` 的 Action。

### 执行任务

写一篇文章，`push` 到 `blog` 仓库的 `master` 分支，在此仓库 `Actions` 页面查看当前 task。

![img](https://sanonz.github.io/2020/deploy-a-hexo-blog-from-github-actions/run@2x.png)

当任务完成后查看您的博客 `https://your.github.io`，如果不出意外的话已经可以看到新添加的文章了。

## 小结

偷懒是人类发展的动力，人都有偷懒的想法，目的就是为了让自己能够活得更好，经过几千年的不断发展，现在人偷懒的方式无疑更加的先进。

至此结束，感谢阅读。