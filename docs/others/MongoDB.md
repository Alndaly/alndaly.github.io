---
title: MongoDB
---

## 一些tips

当前MongoDb没有官方的包提供给ubuntu22.04版本。


Ubuntu 22.04已经将libssl升级到了3并且不兼容libssl1.1。

你可以通过给ubuntu源码增加一行如下强制安装libssl1.1。

```
echo "deb http://security.ubuntu.com/ubuntu focal-security main" | sudo tee /etc/apt/sources.list.d/focal-security.list

sudo apt-get update
sudo apt-get install libssl1.1
```

然后用终端命令安装mongodb-org。

再删除刚刚创建的focal-security的列表文件。

```shell
sudo rm /etc/apt/sources.list.d/focal-security.list
```

:::caution
这种方式直接修改了ubuntu的apt源文件，存在风险，后面遇到更好的方法会补充。
:::