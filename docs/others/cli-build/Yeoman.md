---
title: Yeoman, 一个通用的脚手架系统
sidebar_position: 2
---

## `Yeoman`：一个通用的脚手架系统

`Yeoman`最初发布于2012年，它是一款高效、开源的`Web`应用脚手架（`scaffolding`）软件，意在精简软件的开发过程。脚手架软件用于实现项目中多种不同的工具和接口的协同使用，优化项目的生成过程。允许创建任何类型的应用程序（`Web`，`Java`，`Python`，`C＃`等)。

`Yeoman` 实际上是三个工具的总和：

- `yo` --- 脚手架，自动生成工具
- `grunt`、`gulp` --- 构建工具
- `bower`、`npm` --- 包管理工具

使用`Yeoman`搭建脚手架非常简单，`Yeoman`提供了`yeoman-generator`让我们快速生成一个脚手架模板，我们可以通过各类`Generator`实现任何类型的项目搭建，下面我们来试一下

### `Yeoman`基础使用

Yeoman 是一套构建系统，在这里我们搭建脚手架需要使用的就是 yo

#### 全局范围安装`yo`

```shell
npm install yo --global # or yarn global add yo
```

#### 安装对应的`generator`

yo 搭配不同 generator-xxx 可以创建对应的项目，例如 generator-webapp、generator-node、generator-vue 等等，这里我们使用 generator-node 来演示操作。

```shell
$ npm install generator-node --global # or yarn global add generator-node
```

#### 通过`yo`运行`generator`

```shell
$ mkdir yo-project
$ cd yo-project
$ yo node
```

这样我们就通过`yo`+`generator-node`快捷搭建一个`node`项目，目录结构如下

```
yo-project
├─ .editorconfig
├─ .eslintignore
├─ .travis.yml
├─ .yo-rc.json
├─ LICENSE
├─ README.md
├─ lib
│  ├─ __tests__
│  │  └─ testCli.test.js
│  └─ index.js
├─ package-lock.json
└─ package.json       
```

如何查找自己需要的 `generator` 呢？我们可以去官网 `generators` 列表搜索 [点此进入](https://yeoman.io/generators/)

![](https://pic2.zhimg.com/v2-10fcd2921be142b2e51c1102206f150d_r.jpg)

这种使用方式真的非常的简单方便，但是它的问题也很明显--不够灵活，毕竟不同的团队在使用的技术栈上都有所差异，如果我们想搭建自己想要的项目结构要怎么处理呢？ 接着往下看

### 自定义`Generator`

自定义`Generator`实际上就是创建一个特定结构的`npm`包，这个特定的结构是这样的

```
generator-xxx ............ 自定义项目目录  
├─ generators ............ 生成器目录   
│  └─ app ................ 默认生成器目录      
│     └─ index.js ........ 默认生成器实现
└─ package.json .......... 模块包配置文件
```

或者这样的

```
generator-xxx   
├─ app           
│  └─ index.js     
├─ router        
│  └─ index.js   
└─ package.json  
```

这里我们需要注意的是，项目的名称必须是 `generator-<name>` 格式，才可以正常被 `yo` 识别出来，例如上面举例使用的 `generator-node`。

#### 创建项目

```shell
mkdir generator-simple # 创建项目
cd generator-simple    # 进入项目目录
```

#### 初始化 npm

```shell
npm init # or yarn init
```

一路 enter 之后我们就生成好了 package.json，不过我们还需要额外检查一下：

- `name`属性值须是`generator-`
- `keyword`中必须包含`yeoman-generator`
- `files`属性要指向项目的模板目录。

完成上面的工作之后我们看一下`package.json`是个什么样子

```json
{
  "name": "generator-simple",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo "Error: no test specified" && exit 1"
  },
  "keywords": [ 
    "yeoman-generator" 
  ],
  "files": [
    "generators"
  ],
  "author": "ITEM",
  "license": "MIT"
}
```

:::caution
这里如果使用的是第二种目录结构，那么`package.json`中需要做点修改
:::

```json
{
  "files": [
    "app",
    "router"
  ]
}
```

#### 安装 `yeoman-generator`

`yeoman-generator` 是 `Yeoman` 提供的一个 `Generator` 基类，让我们在创建自定义 `Generator` 的时候更加便捷。

```shell
npm install yeoman-generator --save # or yarn add yeoman-generator 
```

#### `Generator` 基类的使用说明

在介绍 `Generator` 基类之前，我们先来实现一个简单的

首先打开核心入口文件，编辑内容如下

```js
// ～/generators/app/index.js

// 此文件作为 Generator 的核心入口
// 需要导出一个继承自 Yeoman Generator 的类型
// Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
// 我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // add your own methods
  method1() {
    console.log('I am a custom method');
  }
  method2() {
    console.log('I am a custom method2');
  }
};
```

完成之后，我们通过 `npm link` 的方式把项目链接到全局

```shell
npm link # or yarn link
```

这样我们就可以在全局去访问到 `generator-simple` 项目了，我们来试一下

```shell
yo simple
```

看一下控制台的输出

```
I am a custom method1
I am a custom method2
```

OK，是我们想要的结果

:::caution
如果运行`yo simple`出现下面的错误
:::

```
This generator (simple:app) 
requires yeoman-environment at least 3.0.0, current version is 2.10.3,
try reinstalling latest version of 'yo' or use '--ignore-version-check' option
```

可以这样处理：

方案一

```shell
# 卸载当前版本
npm uninstall yeoman-generator
# 安装低版本的包
npm i yeoman-generator@4.13.0
# 执行
yo simple
```

方案二

```
# 全局安装模块
npm i -g yeoman-environment
# 新的执行方式(yoe没有打错)
yoe run simple
```

从上面我们可以看到我们自定义方法是自动顺序执行，`Generator`基类也提供了一些顺序执行的方法，类似于生命周期一样，我们看一下有哪些

- `initializing` -- 初始化方法（检查状态、获取配置等）
- `prompting` -- 获取用户交互数据（`this.prompt()`）
- `configuring` -- 编辑和配置项目的配置文件
- `default` -- 如果 Generator 内部还有不符合任意一个任务队列任务名的方法，将会被放在`default`这个任务下进行运行
- `writing` -- 填充预置模板
- `conflicts` -- 处理冲突（仅限内部使用）
- `install` -- 进行依赖的安装（eg：`npm`，`bower`）
- `end` -- 最后调用，做一些 clean 工作

#### 开始我们的自定义`Generator`

我们借助`Generator`提供的方法，我们对入口文件改造一下

```js
// ～/generators/app/index.js

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // yo 会自动调用该方法
  writing () {
    // 我们使用 Generator 提供的 fs 模块尝试往目录中写入文件
    this.fs.write(
      // destinationPath() 基于项目地址
      this.destinationPath('temp.txt'), // 写入地址
      Math.random().toString() // 写入内容
    )
  }
};
```

运行一下看看

```shell
$ yo simple
```

这个时候，控制台输出出`create temp.txt`，我们打印一下目录结构

```
generator-simple      
├─ generators         
│  └─ app             
│     └─ index.js     
├─ package-lock.json  
├─ package.json       
└─ temp.txt .............. writing 中创建的文件  
```

打开新创建的`temp.txt`瞅瞅

```txt
0.8115477932475306
```

可以看到文件中写入了一串随机数。

在实际使用的时候，我们需要通过模板去创建多个文件，这个时候我们就需要这样处理

首先，创建模板文件目录`./generators/app/templates/`，并在文件夹中新增一个模板文件`temp.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- yo 支持 ejs 语法 -->
  <title><%= title %></title>
</head>
<body>
  <% if (success) { %>
    <h1>这里是模版文件<%= title %></h1>
  <% } %>
</body>
</html>
```

然后，修改一下入口文件

```js
// ～/generators/app/index.js

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // yo 会自动调用该方法
  writing () {
    // 我们使用 Generator 提供的 fs 模块尝试往目录中写入文件
    // this.fs.write(
    //   this.destinationPath('temp.txt'),
    //   Math.random().toString()
    // )

    // 模版文件路径，默认指向 templates
    const tempPath = this.templatePath('temp.html')
    // 输出目标路径
    const output = this.destinationPath('index.html')
    // 模板数据上下文
    const context = { title: 'Hello ITEM ~', success: true}

    this.fs.copyTpl(tempPath, output, context)
  }
};
```

完成之后，`yo simple`运行一下，这样我们就在根目录下得到了`index.html`，打开看看

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- 支持 ejs 语法 -->
  <title>Hello ITEM ~</title>
</head>
<body>
  
    <h1>这里是模版文件Hello ITEM ~</h1>

</body>
</html>
```

`ejs`写入的变量，都已经被数据成功替换了 ✌️

接下来，我们要如何通过命令行交互获取用户自定义的一些数据，例如：项目名称、版本号等等。

这个就需要借助`Generator`提供的`Promting`来处理命令行的一些交互

```js
// ～/generators/app/index.js

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  // 在此方法中可以调用父类的 prompt() 方法与用户进行命令行询问
  prompting(){
    return this.prompt([
      {
        type: 'input', // 交互类型
        name: 'name', 
        message: 'Your project name', // 询问信息
        default: this.appname // 项目目录名称，这里是 generator-simple
      }
    ])
    .then(answers => {
      console.log(answers) // 打印输入内容
      this.answers = answers // 存入结果，可以在后面使用
    })
  }
  // yo 会自动调用该方法
  writing () {
    ......
  }
};
```
保存之后，再运行`yo simpl`

![](https://pic4.zhimg.com/v2-fc7186ba1f37aad38797a809e937bd57_r.jpg)

我们看到命令行询问了 `Your Project name ?`，在用户输入完成之后，我们拿到了`anwsers`，这样我们就可以在接下来的流程里面去使用这个结果。

```js
// ～/generators/app/index.js
...
// 模板数据上下文
 writing () {
    ...
    // 模板数据上下文
    const context = { title: this.answers.name, success: true}

    this.fs.copyTpl(tempPath, output, context)
  }
...
```

再运行一下`yo simple`，查看输出的`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- 支持 ejs 语法 -->
  <title>my-project</title>
</head>
<body>
  
    <h1>这里是模版文件my-project</h1>
  
</body>
</html>
```

我们可以看到用户输入的内容 `{ name: 'my-project' }` 已经显示在我们的 `index.html` 里面了

点此打开[`generator-simple](https://github.com/T-Roc/generator-simple)`源码地址