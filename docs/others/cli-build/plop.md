---
title: plop, 一款小而美的脚手架工具
sidebar_position: 3
---

## `plop`：一款小而美的脚手架工具

`plop` 小在体积轻量，美在简单易用

更多使用方法`plop` 使用文档](https://github.com/plopjs/plop)

我们可以将其直接集成到项目中，解决一下重复性的活着需要标准化的创建工作，下面我们就来做个小案例，比如

**我们已经约定好了组件的创建规范：**

- 组件名称使用大驼峰
- 样式需要单独拧出来写
- 需要搭配说明文档

`plop` 的使用过程大致可以拆解为：

1. 安装`plop`，新增配置文件`plopfile.js`
2. 编辑`plop`配置文件
3. 创建模板文件
4. 执行创建任务

下面进入coding环节

### 安装`plop`

首先用我们的`zhurong-cli`初始化一个`vue`项目

```shell
# 全局安装
$ npm install zhurong-cli -g 
# 创建 vue 项目
$ zr create plop-demo
```

我们这里为了团队统一使用，`plop`直接就集成到项目之中

```shell
$ npm install plop --save-dev
```

项目目录下面创建`plop`的配置文件`plopfile.js`

### 编辑`plop`配置文件

```js
// ./plopfile.js

module.exports = plop => {
  plop.setGenerator('component', {
    // 描述
    description: 'create a component',
    // 询问组件的名称
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Your component name',
        default: 'MyComponent'
      }
    ],
    // 获取到回答内容后续的动作
    actions: [
      //每一个对象都是一个动作
      {
        type: 'add', // 代表添加文件
        // 被创建文件的路径及名称
        // name 为用户输入的结果，使用 {{}} 使用变量
        // properCase: plop 自带方法，将 name 转换为大驼峰
        path: 'src/components/{{ properCase name }}/index.vue',
        // 模板文件地址
        templateFile: 'plop-templates/component.vue.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{ properCase name }}/index.scss',
        templateFile: 'plop-templates/component.scss.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{ properCase name }}/README.md',
        templateFile: 'plop-templates/README.md.hbs'
      }
    ]
  })
}
```

上面用到`properCase`方法将`name`转化为大驼峰，其他格式还包括

- `camelCase`: changeFormatToThis
- `snakeCase`: change_format_to_this
- `dashCase/kebabCase`: change-format-to-this
- `dotCase`: change.format.to.this
- `pathCase`: change/format/to/this
- `properCase/pascalCase`: ChangeFormatToThis
- `lowerCase`: change format to this
- `sentenceCase`: Change format to this,
- `constantCase`: CHANGE_FORMAT_TO_THIS
- `titleCase`: Change Format To This

我们看到上面已经引用了模板文件，实际上我们还没创建，接着创建一下

### 创建模板文件

项目文件夹下面创建`plop-templates`文件夹，里面创建对应的模板文件

```
plop-templates         
├─ README.md.hbs ............... 说明文档模板     
├─ component.scss.hbs .......... 组件样式模板
└─ component.vue.hbs ........... 组件模板
```

模板引擎我们用到是`Handlebars`，更多语法说明[`Handlebars`中文网](https://www.handlebarsjs.cn/)

编辑`component.scss.hbs`

```
{{!-- ./plop-templates/component.scss.hbs --}}
{{!-- dashCase/kebabCase: change-format-to-this --}}
{{!-- name: 输入模板名称 --}}

.{{ dashCase name }} {

}
```

编辑 `component.vue.hbs`

```vue
{{!-- ./plop-templates/component.vue.hbs --}}

<template>
  <div class="{{ dashCase name }}">{{ name }}</div>
</template>

<script>
  export default {
    name: '{{ properCase name }}',
  }
</script>

<style lang="scss">
@import "./index.scss";

</style>
```

编辑 `README.md.hbs`

```
{{!-- ./plop-templates/README.md.hbs --}}

这里是组件 `{{ name }}` 的使用说明
```

补充说明：

- 这里模板都是最简单实现，实际生产中可以根据需求丰富模板内容
- 模板中的 `dashCase`、`properCase` 为变更 `name` 命令的显示规则，上文已经列表过
  - `dashCase`：变为横线链接 `aa-bb-cc`
  - `properCase`：变为大驼峰 `AaBbCc`
  - ...
- `Handlebars` 中使用变量，用 `{{}}` 包裹

### 执行创建任务

打开`package.json`

```json
// scripts 中 增加一条命令
...
"scripts": {
    ...
    "plop": "plop"
  },
...  
```

此时我们就可以使用`npm run plop`来创建组件了

![](https://pic1.zhimg.com/v2-59638cba2800fb41620c8e7330c009d8_r.jpg)

很快组件就创建完成了 ✅

![](https://pic2.zhimg.com/v2-0320df3b41fee452c373abe9142742ad_r.jpg)

此时看一下`components`文件夹下面

```
components         
├─ MyApp           
│  ├─ README.md    
│  ├─ index.scss   
│  └─ index.vue    
└─ HelloWorld.vue  
```

已经创建了`MyApp`的组件了，里面的文件我们也打开看看

打开`MyApp/index.vue`

```vue
<template>
  <div class="my-app">my-app</div>
</template>

<script>
  export default {
    name: 'MyApp',
  }
</script>

<style lang="scss">
@import "./index.scss";

</style>
```

打开`MyApp/index.scss`

```scss
.my-app {

}
```

打开`MyApp/README.md`

这里是组件`my-app`的使用说明

点此打开[plop-demo](https://github.com/T-Roc/plop-demo)源码地址