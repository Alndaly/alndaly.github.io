---
title: Nginx技巧和一些问题
---

## 配置`Nginx` `http`自动跳转`https`

```conf {3-5} title="nginx.conf"
server{
    ...
    if ($scheme = http) {
        rewrite ^(.*) https://$host$1 permanent;
    }
    ...
}

```

## Nginx转发后会默认会自动去掉请求头中带有下划线的参数

解决方法如下：

在nginx里的nginx.conf配置文件中的http部分中添加如下配置：

> 记得带上结尾的分号！

```conf
underscores_in_headers on; （默认 underscores_in_headers 为off）
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200716093635506.png)

## Nginx 中文路径乱码问题

```conf {5}
server {
	listen 80;
	#listen [::]:80 default_server;

	charset utf-8; 
	# SSL configuration
	#
	listen 443 ssl;
	#listen [::]:443 ssl default_server;

}
```

## 前端单页面（spa）应用子路由刷新后会404

> 为什么会出现404?
 
我们先来看一下我们给到后端的dist文件

可以看到dist下只有一个`index.html`文件及一些静态资源，这个是因为Vue是单页应用(SPA)，只有一个`index.html`作为入口文件，其它的路由都是通过JS来进行跳转。

接着我们再来分析一下后端`nginx`的配置。

```conf
server {
  // 监听80端口
  listen 80;
  // 定义你的站点名称
  server_name website.com;
  // 根据请求 URI 设置配置
  location / {
      // 站点根目录，这里为 vue 构建出来的 dist 目录
      root   /www/dist;
      // 站点初始页为index.html 或 index.htm
      index  index.html index.htm;
  }
}
```

我们现在可以根据`nginx`配置得出，当我们在地址栏输入`website.com`时，这时会打开我们`dist`目录下的`index.html`文件，然后我们在跳转路由进入到`website.com/login`。

关键在这里，当我们在`website.com/login`页执行刷新操作，nginx location 是没有相关配置的，所以就会出现`404`的情况。

> 为什么hash模式下没有问题?

router hash 模式我们都知道是用符号`#`表示的，如`website.com/#/login`,`hash`的值为`#/login`。

它的特点在于：`hash`虽然出现在URL中，但不会被包括在HTTP请求中，对服务端完全没有影响，因此改变`hash`不会重新加载页面。

hash模式下，仅`hash`符号之前的内容会被包含在请求中，如`website.com/#/login`只有`website.com`会被包含在请求中，因此对于服务端来说，即使没有配置location，也不会返回404错误。

**单页应用(SPA)概念**

> 我们前面有提到单页应用，那什么是单页应用呢？

单页应用（single-page application），缩写SPA 是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，而非传统的从服务器重新加载整个新页面。这种方法避免了页面之间切换打断用户体验，使应用程序更像一个桌面应用程序。在单页应用中，所有必要的代码（HTML、JavaScript和CSS）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面。尽管可以用位置散列或HTML5历史API来提供应用程序中单独逻辑页面的感知和导航能力，但页面在过程中的任何时间点都不会重新加载，也不会将控制转移到其他页面

大白话来讲：

一个杯子，早上装的牛奶，中午装的是开水，晚上装的是茶，我们可以发现，变的始终是内容，而容器还是那个容器

当然，每种技术都有其利弊，单页应用也是如此：

- 利:
  - 无刷新体验，这个应该是最显著的有点，由于路由分发直接在浏览器端完成，页面是不刷新，对用户的响应非常及时，因此提升了用户体验。
  - 完全的前端组件化，前端开发不再以页面为单位，更多地采用组件化的思想，代码结构和组织方式更加规范化，便于修改和调整。

- 弊:
  - 首屏较长，要在一个页面上为用户提供产品的所有功能，在这个页面加载的时候，首先要加载大量的静态资源，这个加载时间相对比较长。
  - 不利于 SEO，单页页面，数据在前端渲染，就意味着没有SEO，或者需要使用变通的方案。

### Router的实现

为了让大家加深大家对Router的理解，这里我们实现一个最简洁的Router

#### hash模式

核心通过**监听url中的hash**来进行路由跳转

```js
// 定义 Router
class Router {
    constructor () {
        this.routes = {}; // 存放路由path及callback
        this.currentUrl = '';
        
        // 监听路由change调用相对应的路由回调
        window.addEventListener('load', this.refresh, false);
        window.addEventListener('hashchange', this.refresh, false);
    }
    
    route(path, callback){
        this.routes[path] = callback;
    }
    
    push(path) {
        this.routes[path] && this.routes[path]()
    }
}
 
// 使用 router
window.miniRouter = new Router();
miniRouter.route('/', () => console.log('page1'))
miniRouter.route('/page2', () => console.log('page2'))
 
miniRouter.push('/') // page1
miniRouter.push('/page2') // page2
```

#### history 模式

history 模式核心借用 HTML5 history api，api 提供了丰富的 router 相关属性

先了解一个几个相关的api

- `history.pushState` 浏览器历史纪录添加记录

- `history.replaceState` 修改浏览器历史纪录中当前纪录

- `history.popState` 当 history 发生变化时触发

```js
// 定义 Router
class Router {
    constructor () {
        this.routes = {};
        this.listerPopState()
    }
    
    init(path) {
        history.replaceState({path: path}, null, path);
        this.routes[path] && this.routes[path]();
    }
    
    route(path, callback){
        this.routes[path] = callback;
    }
    
    push(path) {
        history.pushState({path: path}, null, path);
        this.routes[path] && this.routes[path]();
    }
    
    listerPopState () {
        window.addEventListener('popstate' , e => {
            const path = e.state && e.state.path;
            this.routers[path] && this.routers[path]()
        })
    }
}
 
// 使用 Router
 
window.miniRouter = new Router();
miniRouter.route('/', ()=> console.log('page1'))
miniRouter.route('/page2', ()=> console.log('page2'))
 
// 跳转
miniRouter.push('/page2')  // page2
```

### 解决404

看到这里我相信大部分同学都能想到怎么解决问题了，产生问题的本质是因为我们的路由是通过JS来执行视图切换的，当我们进入到子路由时刷新页面，web容器没有相对应的页面此时会出现404，所以我们只需要配置将任意页面都重定向到`index.html`，把路由交由前端处理。

还是以 nginx 为例，更多版本的大家可以前往[官网](https://router.vuejs.org/zh/guide/essentials/history-mode.html)查看

```conf
location / {
  try_files $uri $uri/ /index.html;
}
```

这里有一个小细节，如果出现真的 404 页面了呢？比如 `website.com/notfound`

因为这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 index.html 文件。为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面

```js
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '*', component: NotFoundComponent }
  ]
})
```