---
title: Nginx相关
---

## 配置Nginx http自动跳转https

```conf {3-5} title="nginx.conf"
server{
    ...
    if ($scheme = http) {
        rewrite ^(.*) https://$host$1 permanent;
    }
    ...
}

```