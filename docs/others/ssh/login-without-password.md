# SSH 三步解决免密登录

## 客户端生成公私钥

本地客户端生成公私钥：（一路回车默认即可）

```shell
ssh-keygen
```

上面这个命令会在用户目录.ssh文件夹下创建公私钥

```shell
cd ~/.ssh
ls
```

对应下会多出两个密钥：

id_rsa （私钥）

id_rsa.pub (公钥)

## 上传公钥到服务器

这里测试用的服务器地址为：192.168.235.22
用户为：root

```shell
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.235.22
```

上面这条命令是写到服务器上的ssh目录下去了

```shell
cd ~/.ssh
vim authorized_keys
```

可以看到客户端写入到服务器的 id_rsa.pub （公钥）内容。

## 测试免密登录

客户端通过ssh连接远程服务器，就可以免密登录了。

```shell
ssh root@192.168.235.22
```

:::caution
注意，如果本地有多个密钥，则要`-i`指定密钥进行免密登录

```shell
ssh root@192.168.235.22 -i path/to/rsa
```
:::