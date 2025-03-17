---
title: HTTP或HTTPS内网穿透服务
date: 2022-04-24 23:50:59
tags: [内网穿透, nginx, frp, supervisor]
description: supervisor+frp+nginx搭建HTTP/HTTPS内网穿透服务
---
# supervisor+frp+nginx搭建HTTP/HTTPS内网穿透服务

> frp开源仓库：https://github.com/fatedier/frp
>
> supervisor开源仓库：https://github.com/Supervisor/supervisor
>
> nginx开源仓库：https://github.com/nginx/nginx

## 前言

在做微信小程序的时候发现每次都要传文件到服务器上，然后再跑起来服务，调用接口的时候想看日志还得要去服务器上看，整个流程实在是非常的麻烦，程序员的懒本质让我去想了一下该怎么处理这个问题，结合之前用过的frp可以做内网穿透，那么能不能用nginx转发到frp的服务端口呢？

## 服务端配置

### frp配置

服务端`frps.ini`文件

```ini
[common]
; 开放的tcp信号传输端口
bind_port = 7000
; 接收http服务的端口
vhost_http_port = 8091
; 用来验证是自己的信号的token
auth_token = token

# frp管理后台端口，请按自己需求更改
dashboard_port = 7500
# frp管理后台用户名和密码，请改成自己的
dashboard_user = admin
dashboard_pwd = password1
enable_prometheus = true

# frp日志配置
log_file = /var/log/frps.log
log_level = info
log_max_days = 3
```

### supervisor配置

`supervisor.conf`配置载入子文件夹中的所有`.ini`文件

```
[include]
files = supervisord.d/*.ini
```

`frps.ini`文件配置如下

```ini
[program:frps]
;启动用户
user=root
;启动路径
directory=/root/frp_0.42.0_linux_amd64
;具体命令
command=/usr/bin/zsh -c './frps -c ./frps.ini'
;是否开机自启动
autostart=true
;遇到错误是否重启
autorestart=true
```

### nginx配置

```conf
user root;
worker_processes  1;
error_log  logs/error.log  info;

# pid  logs/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    # 防止带有下划线的请求头被忽略
    underscores_in_headers on;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                     '$status $body_bytes_sent "$http_referer" '
                     '"$http_user_agent" "$http_x_forwarded_for"';

    # access_log  logs/access.log  main;

    sendfile        on;
    # tcp_nopush     on;

    keepalive_timeout  65;
    client_max_body_size 10m;  
    # gzip  on;
    # HTTP server
    server {
        listen  80;
        server_name  your.domain.com;
        return 301 https://your.domain.com$request_uri;
    }
    # HTTPS server
    server {
        listen       443 ssl;
        server_name  alnda.cn;

        ssl_certificate      /ssl/cert/ssl.cn.pem;
        ssl_certificate_key  /ssl/cert/ssl.cn.key;

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  10m;
    
        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;
        location /frp/ {
            proxy_pass http://127.0.0.1:8006/;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto https;
            proxy_set_header X-Forwarded-Host $remote_addr;
        }
        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
}

```

## 本地（客户端）配置

### frp配置

客户端`frpc.ini`文件

```ini
[common]
; 你的远程服务器ip地址
server_addr = 43.231.52.81
; 远程的服务器开放信号端口
server_port = 7000
; 用来验证是你的服务器的token，和服务器上的保持一致
auth_token = token	

[web]
type = http
local_port = 8000
custom_domains = 127.0.0.1
```

通过如下命令启动

```sh
./frpc -c ./frpc.ini
```

## 结果

由于nginx开启啦https，所以访问服务器域名即可访问到本地服务

开始快乐的穿透模式吧！

还可以用来做调试哦～