---
title: Anaconda环境配置/基本操作
date: 2022-04-05 17:20:27
tags: [python, anaconda]
description: Python Anaconda 虚拟环境相关文档
---

# 环境切换

## 一、先创建一个新的虚拟环境

```shell
#创建一个名称为my__test
conda create --name my__test python=3.7
```

## 二、激活虚拟环境

```shell
conda activate my_test
```

## 三、切换环境

1、查看已有的虚拟环境

```shell
conda env list
```

![](https://pic2.zhimg.com/80/v2-2855cfd302e331d8c9a1ee1dfd84d925_1440w.jpg)

2、切换到想要的虚拟环境，这里我切换到my_test

```shell
conda activate my_test
```

3、在当前环境里安装ipykernel

```shell
conda install ipykernel
```

![](https://pic4.zhimg.com/80/v2-3fe468e3a7647d138d6054a0c1c641bb_1440w.jpg)

4、python -m ipykernel install --name my_test

![](https://pic1.zhimg.com/80/v2-abb56915ea64e5583f1dea223876144c_1440w.jpg)

5、打开jupyter新建一个notebook,如下所示：

![](https://pic3.zhimg.com/80/v2-b6ccaa26c129ca4d0e284b645f74bbde_1440w.jpg)


## 四、导出已有环境

```shell
conda env export > environment.yaml
```

## 五、根据环境文件直接创建环境

```shell
conda env create -f environment.yaml
```

## 六、根据环境文件更新环境

```shell
conda env update --name environmentName  --file environment.yaml --prune
```

# 更新升级

## 更新conda

先执行

```shell
conda update conda
```

把conda更新到最新版

```shell
conda update anaconda
```

然后输入，把anaconda更新的新版。

## 更新某一python环境所有的库

切换到对应python环境

```shell
conda activate python_environment
```

执行

```shell
conda update --all
```

## 针对更新速度缓慢的问题我自己测试目前有两种解决办法：

1.使用全局代理
2.添加国内镜像源

全局代理这个办法，这里不做讲解了，需要使用的朋友可以自己去研究一下。这里说一下添加国内镜像源的方法。

```shell
conda config --add channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
```

2.设置启动设置好的国内镜像源

```shell
conda config --set show_channel_urls yes
```

3.查看是否添加上了源

```text
conda config --show
```

![](https://pic1.zhimg.com/80/v2-f7e47bb903a26d77bdb47c7c4932cc24_1440w.jpg)

这个是默认的，如果你添加成功了，会在上面出现两个刚才添加的地址

如果镜像源失效了，或者想换成其他的源，怎么删除呢？

```shell
conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/pkgs/free/
```

```shell
conda config --remove channels https://mirrors.ustc.edu.cn/anaconda/pkgs/main/
```

这样就可以删除了。

出现更新慢的问题的，先把代理或者源设置好，然后就可以更新你的Anaconda了。看到这里估计可能会有人放弃了，太麻烦了，又得找代理，又得用国内镜像的，太费劲了，当然还有一种更简单粗暴的方式，卸载掉目前用的版本，安装个最新版的。但是配置好的环境应该都没有了，我没敢尝试这样的方法。如果大家有更好的办法解决Anaconda升级的问题，欢迎一起讨论一下，这个给遇到升级问题的小伙伴们一个参考，不足之处请指正。