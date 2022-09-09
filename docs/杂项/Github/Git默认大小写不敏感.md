---
title: Git 大小写不敏感引发的问题
date: 2022-04-07 23:35:27
tags: [git]
description: Git相关文档
---

# Git 大小写不敏感引发的问题

![【Git系列】Git 大小写不敏感引发的血案](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c2eae29e98142dfb3584c2317e9328a~tplv-k3u1fbpfcp-zoom-crop-mark:1304:1304:1304:734.image)

## 前言

> 由于当年太年轻，资历不够深！！！导致文件命名不规范，现在想更正文件夹名字（`common => COMMON`），结果发现一个很奇特的现象！ git 对文件(夹)名的大小写不敏感！！！！引发了一些问题。最终经过查阅资料得以解决，遂！写下这篇帖子记录一下。走~跟着渣渣一起吃着花生 🥜 喝着啤酒 🍺 燥起来~

![13.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c755d04984c446708721485b8bff8d28~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

## demo 部分目录结构

- `master` 分支的代码及文件目录情况

  ```bash
  # master分支原始目录
  .
  ├── main.js
  └── src
      └── components
          └── common
              ├── FootCell
              │   └── index.vue
              ├── Pagination
              │   └── index.vue
              ├── Table
              │   └── index.vue
              └── TitleCell
                  └── index.vue
  ```
  
  ```js
  // main.js
  const files = require.context('../components/common', true, /\.vue$/)
  ```

## 准备工作

### 模拟多用户

- `user1` 分支：`feature/user1`

- `user2` 分支：`feature/user2`

  此时分别有两个用户`user1`和`user2`在各自的电脑上拉取了这个项目。

# 骚操作开始 第一种

> 文件名的变更未同步到远端，但是引用路径却同步到远端了！

- `user1` 不知道 `git` 大小写不敏感,`user2` 可知可不知，反正最后都!会!知!道!!!

  ![09.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22443ba58c794d919058c0879836bfad~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

## [user1]向远端同步变更

### 更改文件名 + 更改引用路径

> 因为 这里 `git` 大小写不敏感所以只进行文件名变更(大小写)的话，不会被 `git` 检测到，所以必须要改动一个文件，让 `git` 检测到变更。才能进行`commit`!刚好文件名的变更导致了引用路径也需要变更！因此本次可以进行提交

- 由于被绿太狠了，心情不太好就开始了骚操作坑队友！`common => COMMON`结果如下：

  ```bash
    # common => COMMON
    .
    ├── main.js
    └── src
        └── components
            └── COMMON
                ├── FootCell
                │   └── index.vue
                ├── Pagination
                │   └── index.vue
                ├── Table
                │   └── index.vue
                └── TitleCell
                    └── index.vue
  复制代码
  ```

  ```js
  // main.js
  const files = require.context('../components/common', true, /\.vue$/)
  ```
  

最后并把代码提交到了远端,并且告诉 `user2` 代码有更新

## [user2]的响应

### `pull` 代码

- `user2`于是乎就先`pull`然后`merge`了一下，把 `user1` 的代码同步到自己的分支，结果如下：

  ```bash
    # 此时 common => common 没有变化！！！
    .
    ├── main.js
    └── src
        └── components
            └── common
                ├── FootCell
                │   └── index.vue
                ├── Pagination
                │   └── index.vue
                ├── Table
                │   └── index.vue
                └── TitleCell
                    └── index.vue
  ```
  
```js
  // main.js 有变化！！！
  const files = require.context('../components/COMMON', true, /\.vue$/)
```

  这个时候，“~~报应~~”来的太突然，项目报错了！引用的路径是`COMMON`而实际项目的路径是`common`

  ![18.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a073f83286924f99bf704bead00db36e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

- 然后`user2`就好奇为啥会是这种情况,文件名没有变化？？于是乎开启了探索之路~~

### 探索问题

> 因为`user1`被绿了一波，心情不好搞事情，害得`user2`引发了 bug，但是刚好激发了`user2`的好奇心。

- 为啥`user1`的是 `COMMON`,到我这里是 `common`？？？

  最后`user2`查到了答案！ 原来是 `git` 对文件名的大小写不敏感，才会引发这个问题。好了那么接下来就是这么去解决这个问题呢？？

**温馨提示**

> 因为 `git` 默认不区分大小写，所以如果只更改文件名的话 `git` 并不会检测到文件有变化，固！无法进行 `commit`，所有这次测试在更改文件名的时候附带的改动了其他地方，以便提交！

### 解决问题

既然`user2`已经知道了 `git` 默认大小写不敏感，那就让他敏感呗。多简单！

## [user2]更新变更

### 1. 开启 敏感模式

```bash
git config core.ignorecase false # 让你变的敏感
```

![21.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7bcd4ced859947e79225ba37c62c01b6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

> 其实`user1`压根就没有把文件名更改同步到到远端!(所以开头才说，他不知道 `git` 大小写不敏感!但是文件引用路径变更了，这个就导致其他人`(user2)`因为文件路径改变导致项目报错)

### 2. 切换分支，拉取最新代码

- 切分支 `checkout`

  ```bash
  git che master
  ```
  
- 拉代码 `pull`

  ```bash
  git pull
  ```
  
> 这个时候就会发现项目无法启动，因为 `main.js` 中的文件路径引用已经由 `common => COMMON` 了，但实际文件名依旧是 `common`

### 3. 手动更改文件名

- `common` => `COMMON`

  ![19_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/19_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)

### 4. 暂存、提交、push、切分支、merge 到 feature/user2 分支

- 暂存 `add`

  ```bash
  git add .
  ```
  
- 提交 `commit`

  ```bash
  git commit -m user2手动同步更新文件名
  ```
  
  ![20_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f6c3930f274425b8a8f7e851d6d1a15~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)
  
- 推送 `push`

  ```bash
  # 这一步是替user1，将文件名变更同步到远端，供user3……等使用
  #（此时如果其他用户是之前拉取的分支那么也会出现本篇文章所描述的问题！）
  # 方法嘛~~ 就是当前文章~~哈哈哈
  git push
  ```
  
- 切分支 `checkout`

  ```bash
  git che feature/user2
  ```
  
  ![08_D_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d1bcad27960452eb1a6c49ae8b58c9a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)
  
  ![09_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61453f98e4ea4a508027ecc39cbae4cd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)
  
- `merge` master 到 `feature/user2` 分支

  ```bash
  git merge master
  ```
  

![10_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5949cfb1676b41ef9d44b58f3f173259~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

![11_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/811b5a7041f54b08a2b4b0ab47be5460~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

### 查看 `commit` 记录

![12_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4d3ab1becd9c45c3b9caeba5a2b1c3be~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

# 骚操作开始 第二种

> 文件名变更实际已经同步到远端了，且引用路径也同步到了远端！

- 这次`user1` 知道 `git` 大小写不敏感, `user2` 同样可知可不知，于是一开始就逼迫她，让她变得敏感再敏感！

  ![16.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/490d0d4ad6094906b2265b12dde0797f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

## [user1]向远端同步变更

- `user1` 的分支：`feature/user1`

### 1. 让她敏感敏感再敏感

```bash
git config core.ignorecase false # emmmmm……俺敏感了
```

### 2. 更改文件名 & 文件引用路径

- `common => COMMON`

- 更改引用路径

  ```js
  // 旧
  const files = require.context('../components/common', true, /\.vue$/)
  
  // 新
  const files = require.context('../components/COMMON', true, /\.vue$/)
  ```

### 3. 暂存（add）& 提交(commit)

- 暂存 `add`

  ```bash
  git add .
  ```
  
- 提交 `commit`

  ```bash
  git commit -m <msg>
  ```

### 4. 切换分支

- `git checkout master`

  ![08_D_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/08_D_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)

  ![09_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd6b53edeb94401c877e27e2ab7d397d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

### 4.merge 到 master 并 pull 向远端

- `merge` 结果如下：

  ```bash
  git merge feature/user1 # user1的分支合并到本地master
  ```
  
  ![10_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0411bb699b343a9a588d424481eb5ff~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)
  
  ![11_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3bc59c816414a0d81c6b08ce98b8fe5~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)
  
- 推送 `push`

  ```bash
  git push # 推送到远端master
  ```

## [user2]更新变更

- `user2` 的分支：`feature/user2`

### 1. 开启 敏感模式·情况一

```bash
git config core.ignorecase false
```

### 2. 切分支 & pull 代码

- 切分支 `checkout`

  ```bash
  git checkout master
  ```
  
- 拉代码 `pull`

  ```bash
  git pull # 更新 master 分支
  ```
  
- 结果如下：

  ```bash
  # 结果 error
  KaKa:test2  xxx$ git pull
  更新 5f318b9..5174f2e
  error: 工作区中下列未跟踪的文件将会因为合并操作而被覆盖：
          src/components/COMMON/FootCell/index.vue
          src/components/COMMON/Pagination/index.vue
          src/components/COMMON/Table/index.vue
          src/components/COMMON/TitleCell/index.vue
  请在合并前移动或删除。
  正在终止
  ```
  
  > 注意！上面那个问题一旦触发，那么你接下来所有的操作比如 `check`,`switch`,`pull`等操作都会报这个错误！！

  其实上面已经告诉你怎么操作了，按照提示 `删除`或者`移动`原有的`common文件夹`,然后再`pull`(`check`,`switch`)即可解决

  - 结果如下图：

    `common`文件名已经变更为`COMMON`

    ![11_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34243070d2a24aeca70341c0df0b05d6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

### 3. 切换分支 & merge 代码

如果上一步问题解决了那么这一步就没什么异常了，`user2` 的分支代码已经被更新了

- 切分支 `checkout`

  ```bash
  git checkout feature/user2
  ```
  
- `merge` 代码

  ```bash
  git merge master # 更新 feature/user2 分支
  ```

### 4 查看 `commit` 记录

- 如下图：

  ![15_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/15_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)

### 5 恭喜同步成功

![33.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08ade974c64e4ad19f2fe72f6d90886c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

### 1 关闭 敏感模式·情况二

```bash
git config core.ignorecase true # git 默认不敏感
```

### 2. 切分支 & pull 代码

- 切分支 `checkout`

  ```bash
  git checkout master
  ```
  
- 拉代码 `pull`

  ```bash
  git pull # 更新 master 分支
  ```
  

结果如下图：

![13_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4aa62317a0d45b996b4346f0c55bc28~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

惊不惊喜意不意外？

![40.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/637c79a4d8e244e7b1823eb5c6bb4e4a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

虽然远端的文件名已经由`common` => `COMMON`,但是当`user2` 执行`pull`的时候本地的文件名依旧还是老的`common`

### 3. 更改文件名、切换分支、merge master

- 先更改文件名
  `common` => `COMMON`

- 再切换分支：

  ```bash
  git checkout feature/user2
  ```
  
  `COMMON文件夹`变成空的了
  
  ![08_D_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/08_D_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)
  
  ![09_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/09_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)
  
- 最后执行 `merge` 后的变化如下：

  ```bash
  git merge master
  ```
  

`COMMON文件夹`又有内容了

![14_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f391d8a96f248bc962b63bede21d5fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

### 4. 查看 `commit`

- 记录如下：

  ![15_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/15_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)

### 5. 恭喜同步成功

![03.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88c5e8f29c454bd6820cc72bf3de7417~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

# 另外一种方式 git rm

- 删除文件夹 `rm`

  ```bash
  git rm <文件夹路径> -r # -r 表示递归
  ```
  
- 删除文件 `rm`

  ```bash
  git rm <文件路径>
  ```

## [user1]向远端同步变更

### 1. 开启 敏感模式·情况一

```bash
git config core.ignorecase false
```

### 2. 制作副本

```
common` => `common copy
```

复制副本以后不能直接将 `common copy` 改成 `COMMON` (此时 `common` 还存在)

### 3. 使用 rm 删除 common 文件夹

```bash
 git rm ./src/components/common -r # -r 表示递归
```

### 4. 还原名字

- `common copy` => `COMMON`

  看到这里有的同学该问了为啥不拷贝副本 `common copy` 以后立马直接对其变更名字(`common copy => COMMON`),然后执行`第3步`操作呢？？？？问的好啊。鼓掌 👏

  ![16_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11277325b5004da78d9b5c49d802515e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

  看到这个结果·····

  ![06.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e312d8e54524e1bbde83ea6add468a0~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

  其实本人也是很想这么操作的，可是现在回头想想，在不区分大小写的情况下:

  ```js
  common === COMMON // true,
  ```
  

所以上面的提示是没有问题的 我个人认为

### 5. 暂存、commit、merge 到 master、推到远端

在这一步 你将遇到如下错误信息导致切换分支失败 (跟上面的还不太一样)

- `check` 出问题

  ```bash
  KaKa:test xxxx$ git che master
  
  error: 工作区中下列未跟踪的文件将会因为检出操作而被覆盖：
          src/components/common/FootCell/index.vue
          src/components/common/Pagination/index.vue
          src/components/common/Table/index.vue
          src/components/common/TitleCell/index.vue
  请在切换分支前移动或删除。
  正在终止
  ```
  
  此时的项目结构是这样子的：
  
  ~~~bash
  .
  ├── README.md
  ├── main.js
  └── src
      └── components
          └── COMMON  <= # 重点！这里!!! 并没有 common
              ├── FootCell
              │   └── index.vue
              ├── Pagination
              │   └── index.vue
              ├── Table
              │   └── index.vue
              └── TitleCell
                  └── index.vue
  ~~~
  
  并没有`common`文件夹！!那么就无解了？？但是否定的！那我们就:
  
  - 把`COMMON`=> `common`
  
  - 再删除`common`
  
    ![22_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/22_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)![23_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e34a54996c1047b1ad5323ac80d6eb63~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)
  
  - 最后执行 `git check master`
  
  忽略执行删除后的文件变更，直接 `git checkout master`
  
- `merge` 出问题

  ```bash
  KaKa-3:test xxxx$ git merge feature/user1
  
  更新 5f318b9..24b399d
  error: 工作区中下列未跟踪的文件将会因为合并操作而被覆盖：
          src/components/COMMON/FootCell/index.vue
          src/components/COMMON/Pagination/index.vue
          src/components/COMMON/Table/index.vue
          src/components/COMMON/TitleCell/index.vue
  请在合并前移动或删除。
  正在终止
  ```
  
  并没有`COMMON`,处理方法同上:
  
  - 把`common`=> `COMMON`
  - 再删除`COMMON`
    ![24_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/24_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)![23_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/efb8b56621944f0da593a1f6e99e3477~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)
  - 最后`git merge feature/user1`就可以了~

### 6. 查看 `commit` 记录

- 如下图： ![17_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a361ed790bf94b7691f468c63c080841~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

### 1. 关闭 敏感模式·情况二

```bash
git config core.ignorecase true
```

### 2. 更改文件名

- `common` => `COMMON`

  然而尴尬的一幕它发生了！！！如下图：

  ![11_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/928907269477471d856d2496dce8e50e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

  ![10_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/10_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)

  卧槽！ `Git` 并没有检测到 文件有变化！

### 3. 卒!

- 这种情况要么放弃，要么开启敏感模式！如果开启那就是`情况一`了

  ![46.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e41e7a1c4e5c4673ac3a42d6bdf680ae~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

## [user2]更新变更

- 此时 `user2`的`master` 分支初始目录如下：

  ```bash
  .
  ├── README.md
  ├── main.js
  └── src
      └── components
          └── common
              ├── FootCell
              │   └── index.vue
              ├── Pagination
              │   └── index.vue
              ├── Table
              │   └── index.vue
              └── TitleCell
                  └── index.vue
  ```

### 1. 开启 敏感模式·情况一

```bash
git config core.ignorecase false
```

### 2. pull 最新代码

```bash
KaKa:test2  xxxx$ git pull
更新 5f318b9..24b399d
error: 工作区中下列未跟踪的文件将会因为合并操作而被覆盖：
        src/components/COMMON/FootCell/index.vue
        src/components/COMMON/Pagination/index.vue
        src/components/COMMON/Table/index.vue
        src/components/COMMON/TitleCell/index.vue
请在合并前移动或删除。
正在终止
```

不出所料 会跟开头讲的 状况一致，这里就不重复赘述了，参考上面的即可解决。

### 3. 查看 `commit` 记录

- 如下图:

  ![17_git大小写不敏感引发的问题](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fc4f8cfc7d548b9801ea7fb7f854e72~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)

### 1. 关闭 敏感模式·情况二

```bash
git config core.ignorecase true
```

### 2. `pull` 最新代码

- 如下图

  ![18_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/18_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)

  同前面所说,变更都过来了，唯独文件名由于本地的大小写不敏感，所以没有自动变更名字

### 3. 手动更改文件名

```
common` => `COMMON
```

### 4. 切换分支，mer master 代码

- 切分支 `checkout`

  ```bash
  git checkout feature/user2
  ```
  
- `merge` 代码

  ```bash
  git merge master
  ```

### 5. 查看 `commit` 记录

- 如下图:

  ![17_git大小写不敏感引发的问题](https://raw.githubusercontent.com/Popxie/kaka-img-repo/master/img/blogs/17_git%E5%A4%A7%E5%B0%8F%E5%86%99%E4%B8%8D%E6%95%8F%E6%84%9F%E5%BC%95%E5%8F%91%E7%9A%84%E9%97%AE%E9%A2%98.png)

## 总结

综上的出来的结论就是多人协作开发的时候存在已下情况

- 第一种方式 `user1` 两种， `user2` 两种，总共四种情况。且文件都被标记为A

  - 都未开启敏感模式（绝大多数都是这个情况）
    这种情况可想而知，远端的文件名一直都是 common 而非 COMMON，所有人乃至以后都会一直存在这个问题（自己本地需要去手动的更改文件名），
  - 都开启了敏感模式
    这种情况 `user2` 在同步更新 `master` 分支代码的时候会遇到 `error`，根据提示删除或移动文件位置即可！（删除最简单直观）
  - 修改方(`user1`)开起了敏感模式，被通知方(`user2`)未开启 虽然文件名已经被改动且同步到了远端，但是当 user2 （master）拉取的时候会发现自己本地的文件名依旧是 common 未改动。这个时候只需要手动的去更改文件名，然后 `merge` 到 `user2` 的分支即可
  - 修改方(`user1`)未开启敏感模式，被通知方(`user2`)开启了
    `user1` 自以为文件名已经更改成功且同步到了远端，实际并没有同步到远端，`user2` 自己手动更改，更改后 `push` 到远端，这样所有人的文件引用路径错误问题都能得到解决

- 第二种方式

  通过`git rm` 这个操作来处理。通过这种方式变更文件会被标记为R

## 结束语

已上所有内容都是经过好几遍测试，一遍实践一遍记录的形式来撰写的，最后也反复检查了好几遍，目测没有什么问题，如果有问题了就请留言告知吧~

![47.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43b9c2f3777647d1a0650f753e57cfd9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.image)