---
title: Docker容器的使用
---

## 拉取容器

`pull`

```bash
docker pull ubuntu
```

- `ubuntu`ubuntu镜像

## 启动容器

### 启动刚拉取的容器

```bash
docker run -it --name runoob ubuntu:15.10 /bin/bash
```

- `i`交互式操作
- `t`终端
- `d`后台运行
- `P`将容器内部使用的网络端口**随机**映射到我们使用的主机上
- `p`设置自定义本机映射端口
- `-name runoob` 标识命名容器runoob
- `-network test-net`表明容器连接那个网络
- `-rm`容器退出时自动清理容器内部的文件系统
- `h HOSTNAME`或者`-hostname=HOSTNAME`
- `-dns=IP_ADDRESS`添加 DNS 服务器到容器的 `/etc/resolv.conf` 中，让容器用这个服务器来解析所有不在 `/etc/hosts` 中的主机名
- `-dns-search=DOMAIN`设定容器的搜索域，当设定搜索域为 `.example.com` 时，在搜索一个名为 `host` 的主机时，`DNS` 不仅搜索 `host`，还会搜索 `host.example.com`。

如果在容器启动时没有指定 **--dns** 和 **--dns-search**，Docker 会默认用宿主主机上的 /etc/resolv.conf 来配置容器的 DNS。

- `ubuntu`ubuntu镜像
- `15.10`版本号（如果不指定版本号，将默认`latest`最新版本）
- `/bin/bash`放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。

### 启动已经关闭的容器

查看所有的容器命令如下：

```bash
docker ps -a
```

使用 `docker start` 启动一个已停止的容器：

```bash
docker start <容器 ID>
```

## 查看运行中的容器

```bash
docker ps -a
```

## 停止一个容器

```bash
docker stop <容器 ID>
```

停止的容器可以通过 docker restart 重启

```bash
docker restart <容器 ID>
```

## 进入容器

```bash
docker attach <容器 ID>
```

```bash
docker exec <容器 ID>
```

`attach`进入容器后退出容器会导致容器的停止，`exec`则不会

## 导出容器

```bash
docker export <容器 ID> > ubuntu.tar
```

## 导入容器

```bash
docker import http://example.com/exampleimage.tgz example/imagerepo
```

## 删除容器

注意删除容器时，容器必须是停止状态，否则会报错

```bash
docker rm -f <容器 ID>
```

**下面的命令可以清理掉所有处于终止状态的容器。**

```bash
docker container prune
```

## 查看Docker端口映射

```bash
docker ps -a
```

上述可以看到所有镜像的端口映射

```bash
docker port <容器 ID>
docker port <容器 名称>
```

上述两种方式可以快捷看到指定对应容器的端口映射

## 查看日志输出

```bash
docker logs -f <容器 ID>
```

- `f`让 `docker logs` 像使用 `tail -f` 一样来输出容器内部的标准输出。

## 查看容器详情

```bash
docker inspect <容器 名称>
```

上述会返回一个JSON 文件记录着Docker容器的配置和状态信息。