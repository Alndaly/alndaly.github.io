## Ubuntu密码重置

:::caution
这看起来更像是一个ubuntu的漏洞，需要注意！
:::

1. 重新启动，一直按SHIFT键来显示GRUB菜单
2. 选第二行Ubuntu的高级选项菜单，回车进入
3. 选第二行突出显示时，按e编辑Grub的启动提示符
4. 按e编辑Grub的启动提示符把ro后面改为`quit splash rw init=/bin/bash`
5. 修改完后，按ctrl+x或者F10启动系统
6. 启动系统之后，直接就是root用户身份在执行命令了

```shell
passwd xx
passwd
```

7. 重启系统即可

```shell
exec /sbin/init
```

## 在文件变动之后执行特定任务

### 安装`inotify-tools`和`gzip`

```shell
sudo apt-get install inotify-tools gzip
```

### 简单尝试

1. 新建incoming文件夹

```shell
mkdir incoming
```

2. 开始监测

```shell
inotifywatch -v incoming 
```

![](https://oss.weixiao.zuowu.cc/image/202303182021568.webp)

3. 新建一个终端窗口

```shell
cd incoming/
touch newfile
```

4. 回到原来的终端窗口

![](https://oss.weixiao.zuowu.cc/image/202303182021104.webp)

可以看到有很多事件被记录了

- “create” – 当目标文件夹中有文件被创建了
- “moved_to” – 当一个文件被移到当前文件夹
- ...

### 指定类型监测

**只监测文件创建和移动**

```shell
inotifywatch -v -e create -e moved_to incoming
```

### 执行任务

1. 创建文件夹

```shell
mkdir processed
```

2. 创建脚本`watch-incoming.sh`

```shell
#!/bin/bash
# directory of app
appDir=/app/chat
# the name of file
#fileName=find $appDir -name *.jar
#log
log=/app/chat/watch.log
#file type
fileType="jar"

/usr/bin/inotifywait -mr --timefmt '%d/%m/%y %H:%M' --format '%T %w %f' -e close_write $appDir/ | while read DATE TIME DIR FILE; do
 
FILECHANGE=${DIR}${FILE}
 
if [[ $FILECHANGE =~ $fileType ]]
then
        echo "At ${TIME} on ${DATE}, file $FILECHANGE was changed." >> $log
        $appDir/application.sh restart
fi
done
```

`-m`选项表示无限期的监控和更改。
`-r`选项表示递归监测。

```log title=watch.log
At 14:47 on 18/01/21, file /app/chat/chat-0.0.1-SNAPSHOT.jar was changed.
At 15:17 on 18/01/21, file /app/chat/chat-0.0.1-SNAPSHOT.jar was changed.
At 15:43 on 18/01/21, file /app/chat/chat-0.0.1-SNAPSHOT.jar was changed.
...
```

每次监测到新建或者移动事件后，都会将文件名称传入while循环中的FILENAME，接着执行do中的操作。
```
