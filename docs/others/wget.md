## wget爬取整个网站

```shell
wget -r -p -np -k -E https://www.springcloud.cc/spring-boot.html
```

- `-r` 递归抓取
- `-k` 抓取之后修正链接，适合本地浏览
- `-m`  镜像，就是整站抓取
- `-e robots=off` 忽略robots协议，强制、流氓抓取
- `-k`  将绝对URL链接转换为本地相对URL
- `-E` 将所有text/html文档以.html扩展名保存
- `-np` 递归下载是不搜索上层目录
- `-p` 下载网页所需要的所有文件（图片，js脚本，css）