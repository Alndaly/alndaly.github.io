# SSL证书的生成与配置

> 本来我一直使用的腾讯云和阿里云的免费证书，直到知道certbot这个知识点，才发现原来还有这么方便的工具。

本文讲解基于Nginx的SSL证书的生成与配置

# **1. 安装 Certbot**

ubuntu

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx  # 如果用Nginx
sudo apt install certbot python3-certbot-apache  # 如果用Apache
```

macos

```bash
brew install certbot
```

# 2. 获取SSL证书

```bash
sudo certbot --nginx
```

这个脚本可以一键配置

你只需要跟着提示走一遍就好

# 3.自动续期

默认certbot会开启一个定时服务进行自动续期，不需要你再配置了

手动续期命令

```bash
sudo certbot renew --dry-run
```