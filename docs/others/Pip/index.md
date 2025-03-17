---
title: Pip基本操作
date: 2022-04-05 17:20:27
tags: [python, pip]
description: Python Pip自己的包上传
---

[PyPI · The Python Package Index](https://pypi.org/)

# 查看本地环境

## 查看镜像源

```bash
pip config list
```

## pip国内的一些镜像

- 阿里云 [](https://mirrors.aliyun.com/pypi/simple/)[https://mirrors.aliyun.com/pypi/simple/](https://mirrors.aliyun.com/pypi/simple/)
- 中国科技大学 [](https://pypi.mirrors.ustc.edu.cn/simple/)[https://pypi.mirrors.ustc.edu.cn/simple/](https://pypi.mirrors.ustc.edu.cn/simple/)
- 豆瓣(douban) [](http://pypi.douban.com/simple/)[http://pypi.douban.com/simple/](http://pypi.douban.com/simple/)
- 清华大学 [](https://pypi.tuna.tsinghua.edu.cn/simple/)[https://pypi.tuna.tsinghua.edu.cn/simple/](https://pypi.tuna.tsinghua.edu.cn/simple/)
- 中国科学技术大学 [](http://pypi.mirrors.ustc.edu.cn/simple/)[http://pypi.mirrors.ustc.edu.cn/simple/](http://pypi.mirrors.ustc.edu.cn/simple/)

## 修改源方法：

### 临时使用：

可以在使用pip的时候在后面加上-i参数，指定pip源

```
pip install scrapy -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### 永久修改：

**linux** 修改 `~/.pip/pip.conf` (没有就创建一个)， 内容如下：

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```

**windows** 直接在`user`目录中创建一个`pip`目录，如：`C:\\Users\\xx\\pip`，新建文件`pip.ini`，内容如下

```
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
```

# 第一步：注册一个PyPi帐号

在上边的注册网站上注册一个自已的帐号，注册好后在邮箱激活，一般注册流程都是这么操作了，这里就不多说了。

# 第二步：在github上创建一个项目

如果你还没有使用过github源码托管网站，可以先注册一个github的帐户再创建项目，我一般创建项目用的是官网提供的桌面工具Github Desktop.

Github Desktop的下载地址：[](https://desktop.github.com/)[https://desktop.github.com](https://desktop.github.com/)

github注册和创建新项目，这里也不说了，程序员的基本功。

# 第三步：编写自已的python项目

我这里只有一个`timetool.py`和`pathtool.py`两个文件

先建一个目录，比如`magetool`，这个里边放的是你的项目代码

在这个`magetool`目录里,新建一个`__init__.py`，这个文件里可以什么都不用写，然后就是你要发布的`.py`文件

# 第四步：编写setup.py文件

这里重点说明一下这个`setup.py`文件，因为整个`pip`项目的发布和上传都是基于这个`setup.py`文件完成的。

大家可以看一下我示例项目的`setup.py`是怎么写的，其实我也是从网上下载别人写好的。

```bash
#!/usr/bin/env python
#-*- coding:utf-8 -*-
from setuptools import setup, find_packages

setup(
	name = "magetool",
	version = "0.1.0",
	keywords = ("pip", "pathtool","timetool", "magetool", "mage"),
	description = "time and path tool",
	long_description = "time and path tool",
	license = "MIT Licence",
	url = "https://github.com/fengmm521/pipProject",
	author = "mage",
	author_email = "mage@woodcol.com",
	packages = find_packages(),
	include_package_data = True,
	platforms = "any",
	install_requires = []
)
```

## setup.py中重要的参数有5个：

### name

`name = “magetool”`，这个`name`参数后边的就是你的项目代码所在目录，也是你`pip`要上传的项目名称，其他人用`pip install xxx`来安装时，后边的`xxx`就是你的这个`magetool`

### version

`version = “0.1.0”`，你工具的版本号，后期你工具更新了，要用pip来更新包的时候，会更新比当前版本号高的新版本。

下边是pip 更新包的命令

```bash
pip install --upgrade <包的名字>
pip install -U <包的名字>
```

### packages

`packages = find_packages()`，这个参数是导入目录下的所有`__init__.py`包

### install_requires

`install_requires = []`，这是一个数组，里边包含的是咱的pip项目引用到的第三方库，如果你的项目有用到第三方库，要在这里添上第三方库的包名，如果用的第三方版本不是最新版本，还要有版本号。

# 第五步：打包自已的项目

在代码编写完成，自已测试后没有问题了，就可以打包了。 打包使用下边两个命令：

我使用的是第二个

```bash
python setup.py bdist_egg     # 生成类似 edssdk-0.0.1-py2.7.egg，支持 easy_install
python setup.py sdist         # 生成类似 edssdk-0.0.1.tar.gz，支持 pip
```

两个命令打包好之后都会生成`build`和`dist`两个目录，打包的文件会放在`dist`目录下，供后边上传到`PyPi`服务器

# 第六步：上传到PyPi服务器

在上传前，要建一个文件，`$HOME/.pypirc`，`$HOME`目录在`linux`或者`mac`系统下就是~/目录。在这里建一个`.pypirc`文件。里边的内容如下：

```bash
[distutils]
index-servers = pypi
[pypi]
username:你的PyPi用户名
password:你的PyPi密码
```

因为不能使用`python setup.py register`进行上传，使用这个上传会报一个410的错误。所以要使用`.pypirc`文件保存你的PyPi用户信息，这时使用下载的`twine`就可以直接上传了。

在别的地方找到的有说上传用`python setup.py sdist upload`命令，但在我这里用这个命令也会一直失败，所以我用下边的命令上传打包好的pip项目，我上传的是用第五步的，`python setup.py sdist`命令打包好的项目，

上传好打包的`pip`安装包:

```bash
twine upload dist/magetool-0.1.0.tar.gz
```

# 第七步：使用pip安装刚刚上传的包

pip安装包我这里就不多说了，这个一般用python的都会的

用pip安装上传的包:

```bash
pip install magetool --user
–user参数的意思是安装给当电脑的当前用户，要不然会要求系统管理员权限才能安装。加了–user之后就不用sudo的管理员权限了。
```