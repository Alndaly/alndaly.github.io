---
title: Docker镜像的使用
---

当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载。

## 列出镜像列表

```bash
docker images
```

| REPOSITORY | TAG | IMAGE ID | CREATED | SIZE |
| --- | --- | --- | --- | --- |
| ubuntu | 14.04 | 90d5884b1ee0 | 5 days ago | 188 MB |
| mysql | 5.6 | f2e8d6c772c0 | 3 weeks ago | 324.6 MB |

## 展示的列表中的含义

- REPOSITORY：表示镜像的仓库源
- TAG：镜像的标签
- IMAGE ID：镜像ID
- CREATED：镜像创建时间
- SIZE：镜像大小

## 查找镜像

```bash
docker search <镜像 名称>
```

## 删除镜像

```bash
docker rmi <镜像 名称>
```

## 创建镜像

### 更新镜像

从已经创建的容器中更新镜像，并且提交这个镜像

1. 使用镜像来创建一个容器

```bash
docker run -t -i ubuntu:15.10 /bin/bash
```

1. 在运行的容器内使用 `apt-get update`命令进行更新。
2. 此时的容器，是按我们的需求更改的容器。我们可以通过命令 `docker commit`来提交容器副本。

```bash
docker commit -m="has update" -a="runoob" e218edb10161 runoob/ubuntu:v2
```

- m: 提交的描述信息
- a: 指定镜像作者
- e218edb10161：容器 ID
- runoob/ubuntu:v2: 指定要创建的目标镜像名

### 构建镜像

使用 `Dockerfile` 指令来创建一个新的镜像

```bash
docker build -t runoob/centos:6.7 .
```

- t ：指定要创建的目标镜像名
- . ：Dockerfile 文件所在目录，可以指定Dockerfile 的绝对路径

## 设置镜像标签

```bash
docker tag 860c279d2fec runoob/centos:dev
```