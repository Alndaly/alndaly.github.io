---
title: Docker容器连接
---

## 构建网络

```bash
docker network create -d bridge test-net
```

- `d`：参数指定 Docker 网络类型，有 `bridge`、`overlay`。

其中 `overlay` 网络类型用于 Swarm mode，在本小节中你可以忽略它。

## 连接容器

运行两个容器加入上述`test-net`网络

```bash
docker run -itd --name test1 --network test-net ubuntu /bin/bash
```

```bash
docker run -itd --name test2 --network test-net ubuntu /bin/bash
```