---
title: Dockerfile配置
---

Docker可以通过读取Dockerfile中的指令自动构建镜像。Dockerfile是一个文本文档，其中包含了用户创建镜像的所有命令和说明。

## 变量

变量用 `$variable_name` 或者 `${variable_name}` 表示

`${variable:-word}`表示如果`variable`设置，则结果将是该值。如果`variable`未设置，`word`则将是结果。
`${variable:+word}`表示如果`variable`设置则为`word`结果，否则为空字符串。
变量前加 `\` 可以转义成普通字符串：`\$foo` or `\${foo}`，表示转换为`$foo`和`${foo}`文字。

## FROM

初始化一个新的构建阶段，并设置基础映像：

```
FROM [--platform=<platform>] <image> [AS <name>]
FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]
FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]
```

单个dockfile可以多次出现 `FROM` ，以使用之前的构建阶段作为另一个构建阶段的依赖项
`AS name`表示为构建阶段命名，在后续`FROM`和`COPY --from=<name>`说明中可以使用这个名词，引用此阶段构建的映像
`digest`其实就是就是根据镜像内容产生的一个ID，只要镜像的内容不变`digest`也不会变
`tag`或`digest`值是可选的。如果您省略其中任何一个，构建器默认使用一个`latest`标签。如果找不到该`tag`值，构建器将返回错误。
`--platform`标志可用于在`FROM`引用多平台镜像的情况下指定平台。例如，`linux/amd64`、`linux/arm64`、 或`windows/amd64`

## RUN

将在当前镜像之上的新层中执行命令，在`docker buil`d时运行

```
RUN /bin/bash -c 'source $HOME/.bashrc; \
echo $HOME'
```

`RUN`有两种形式：

- `RUN <command>shell` 形式，命令在 shell 中运行，默认/bin/sh -c在 Linux 或cmd /S /CWindows 上）
- `RUN ["executable", "param1", "param2"]`（执行形式）

说明：

可以使用`\`（反斜杠）将单个`RUN`指令延续到下一行
`RUN`在下一次构建期间，指令缓存不会自动失效。可以使用`--no-cache`标志使指令缓存无效
Dockerfile的指令每执行一次都会在docker上新建一层。所以过多无意义的层，会造成镜像膨胀过大，可以使用`&&`符号连接命令，这样执行后，只会创建 1 层镜像


## CMD

运行程序，在`docker run`时运行，但是和`RUN`命令不同，`RUN`是在`docker build`时运行

```
FROM ubuntu
CMD ["/usr/bin/wc","--help"]
```

支持三种格式

- `CMD ["executable","param1","param2"]` 使用 `exec` 执行，推荐方式；
- `CMD command param1 param2` 在 `/bin/sh` 中执行，提供给需要交互的应用；
- `CMD ["param1","param2"]` 提供给 `ENTRYPOINT` 的默认参数；

:::caution
指定启动容器时执行的命令，每个Dockerfile只能有一条`CMD`命令。如果指定了多条命令，只有最后一条会被执行。

如果用户启动容器时候指定了运行的命令，则会覆盖掉`CMD`指定的命令。
:::

## ENTRYPOINT

`ENTRYPOINT`和`CMD`一样，都是在指定容器启动程序及参数，不过它不会被`docker run`的命令行参数指定的指令所覆盖。如果要覆盖的话，需要通过`docker run --entrypoint`来指定。

它有2种格式：

- `ENTRYPOINT ["executable", "param1", "param2"]`
- `ENTRYPOINT command param1 param2`

当指定了`ENTRYPOINT`后，`CMD`的内容作为参数传给`ENTRYPOINT`指令，实际执行时，将变为：

```
<ENTRYPOINT> <CMD>
```

## EXPOSE

```
EXPOSE <port> [<port>/<protocol>...]
```

Docker容器在运行时侦听指定的网络端口。可以指定端口是监听TCP还是UDP，如果不指定协议，默认为TCP。

该`EXPOSE`指令实际上并未发布端口。要在运行容器时实际发布端口，`docker run -P`来发布和映射一个或多个端口。

默认情况下，`EXPOSE`假定`TCP`。您还可以指定`UDP`：

```
EXPOSE 80/udp
```

## VOLUME

创建一个具有指定名称的挂载数据卷

```
VOLUME ["/var/log/"]
VOLUME /var/log
```

它的主要作用是：

- 避免重要的数据，因容器重启而丢失
- 避免容器不断变大

## WORKDIR

工作目录，如果`WORKDIR`不存在，即使它没有在后续Dockerfile指令中使用，它也会被创建。

`docker build`构建镜像过程中，每一个`RUN`命令都会新建一层。只有通过`WORKDIR`创建的目录才会一直存在。

可以设置多个`WORKDIR`，如果提供了相对路径，它将相对于前一条`WORKDIR`指令的路径。例如：

```
WORKDIR /a
WORKDIR b
WORKDIR c
RUN pwd 
```

最终`pwd`命令的输出是`/a/b/c`.

该`WORKDIR`指令可以解析先前使用`ENV`，例如：

```
ENV DIRPATH=/path
WORKDIR $DIRPATH/$DIRNAME
RUN pwd
```

最终`pwd`命令的输出是`/path/$DIRNAME`

## ADD

复制新文件、目录或远程文件`URL <src>`，并将它们添加到`<dest>`中。

`<src>`可以指定多个资源，但如果它们是文件或目录，则它们的路径被解释为相对于构建上下文的源，也就是`WORKDIR`。

每个都`<src>`可能包含通配符，匹配将使用Go的filepath.Match规则。例如：

添加所有以`hom`开头的文件：

```
ADD hom* /mydir/
```

在下面的示例中，`?`被替换为任何单个字符，例如`home.txt`。

```
ADD hom?.txt /mydir/
```

`<dest>`是一个绝对路径，或相对`WORKDIR`的相对路径。

## COPY

语法同`ADD`一致，复制拷贝文件。

`COPY`指令和`ADD`指令的唯一区别在于：是否支持从远程URL获取资源。`COPY`指令只能从执行`docker build`所在的主机上读取资源并复制到镜像中。而`ADD`指令还支持通过URL从远程服务器读取资源并复制到镜像中。

相同需求时，推荐使用`COPY`指令。`ADD`指令更擅长读取本地tar文件并解压缩。

## USER

设置用户名（或`UID`）和可选的用户组（或`GID`）

```
USER <user>[:<group>]
USER <UID>[:<GID>]
```
