---
title: conda系列操作
---

显示本机所有conda包

```shell
conda env list
```

创建环境并且安装对应的库

```shell
conda create -n [环境名称] [安装库名列表]
```

删除环境

```shell
conda remove -n [环境名称] -all
```

激活并进入对应环境

```shell
conda activate [环境名称]
```

克隆环境

```shell
conda create -n [新环境名称] --clone [被克隆环境的名称]
```

未激活环境中安装额外的包

```shell
conda install -n [环境名称] [安装库名列表]
```

已激活环境中安装额外的包

```shell
conda install [安装库名列表]
```

退出环境

```shell
conda deactivate
```

查看anaconda基本配置

```shell
conda config --show channels
```

恢复anaconda默认配置（可以通过这种方式恢复默认镜像之类）

```shell
conda config --remove-key channels
```
