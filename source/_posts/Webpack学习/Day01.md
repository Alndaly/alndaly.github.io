---
title: WebpackDay01
date: 2022-04-05 17:31:27
tags:
  - [Webpack]
  - [前端]
categories:
  - [技术]
description: 前端打包工具Webpack学习第一天
---

# 代码分离方法

## 入口起点

> 使用 [`entry`](https://webpack.docschina.org/configuration/entry-context) 配置手动地分离代码。

`webpack.config.js`

```js
 const path = require('path');

 module.exports = {
  entry: './src/index.js',
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
   output: {
    filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
   },
 };
```

**这种方式存在一些隐患**：

- 如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。
-  这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。


## 防止重复

> 使用 [Entry dependencies](https://webpack.docschina.org/configuration/entry-context/#dependencies) 或者 [`SplitChunksPlugin`](https://webpack.docschina.org/plugins/split-chunks-plugin) 去重和分离 chunk

### 入口依赖

```js
 const path = require('path');

 module.exports = {
   mode: 'development',
   entry: {
     index: {
       import: './src/index.js',
       dependOn: 'shared',
     },
     another: {
       import: './src/another-module.js',
       dependOn: 'shared',
     },
     shared: 'lodash',
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
  optimization: {
    runtimeChunk: 'single',
  },
 };
```

### SplitChunksPlugin

```js
  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      another: './src/another-module.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
   optimization: {
     splitChunks: {
       chunks: 'all',
     },
   },
  };
```

## 动态导入

> 通过模块的内联函数调用来分离代码。

**src/index.js**

```js
async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
 }

 getComponent().then((component) => {
   document.body.appendChild(component);
 });
```

# 代码包分析

[webpack-bundle-analyzer工具](https://github.com/webpack-contrib/webpack-bundle-analyzer)

![](https://cloud.githubusercontent.com/assets/302213/20628702/93f72404-b338-11e6-92d4-9a365550a701.gif)