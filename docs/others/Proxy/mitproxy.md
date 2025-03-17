---
title: mitmproxy代理/爬虫
date: 2022-04-05 15:15:27
tags: [python, 爬虫]
description: 爬虫相关文档
---

> 官网地址：https://mitmproxy.org

## 1.安装

**MAC：**

```shell
brew install mitmproxy
```

**MAC/WINDOWS/LINUX**

```shell
pip install mitmproxy
```

## 2.开启监测

开启mitmproxy的设备：

```shell
mitmproxy -p 端口号
```

有三种方式可以开启mitmproxy监测

-   **mitmproxy** 终端可交互界面
-   **mitmweb** 浏览器版GUI可交互界面
-   **mitmdump** 终端输出（不可交互）

## 3.网络环境配置

> 被监测的设备（一般是你的手机）和开启mitmproxy的设备（一般是电脑）要在同一片局域网内。

手机进入局域网后（可以通过连接热点）后 ，在热点模块里开启自定义代理，端口号指定同开启mitmproxy服务时确定的端口号。

**手机（此处IOS举例）具体操作：**

Settings=>WLAN=>局域网网络（一般也就是你的热点）右侧感叹号=>Configure Proxy=>Manaul（填入你开启mitmproxy监测服务的设备的ip以及端口号）

此时访问任何站点由于没有证书，都会显示证书不可信任
接下来访问(http://mitm.it) 下载配置文件（此处一定要先进入开启mitmproxy的设备所在局域网并且设置好代理后才可以正常访问这个站点！）。

在设置里下载证书

**Settings=>General=>VPN&DeviceManagement=>mitmproxy=>Install**

启用证书（注意，下载证书还不够！一定要开启！）

**Settings=>General=>About=>Certificate Trust Settings=>开启mitmproxy**

之后访问网站就会正常，同时电脑终端也可以看到请求

如果要针对不同请求做不同处理/记录日志，则可以通过python脚本的方式

**脚本范例：**

```python
#addon.py

from mitmproxy import http

def request(flow: http.HTTPFlow):
    # redirect to different host
    if flow.request.pretty_host == "example.com":
        flow.request.host = "mitmproxy.org"
    # answer from proxy
    elif flow.request.path.endswith("/brew"):
    	flow.response = http.HTTPResponse.make(
            418, **b**"I'm a teapot",
        )
```

启动方式：

```shell
mitmproxy -s ./app.py
```