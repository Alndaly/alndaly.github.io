---
title: python的os模块
---

## `path`子模块
涉及与磁盘文件操作，最常使用的当属`path`模块了。`path`是`os`的子模块，可以通过`from os import path`使用，也可以直接通过`os.path`属性的方式使用。本文，为了保持一致性，统一采用后者的书写形式。

### `exists(path)`

检测文件或目录是否存在。存在返回`True`, 不存在返回`False`。

```python
os.path.exists("dog.jpeg")
```

### `isfile(path)`

判断是否为文件。是返回`True`， 不是返回`False`。也可以用来判断文件是否存在。

```python
os.path.isfile("dogs/")
```

### `isdir(path)`

判断是否为目录。是返回`True`，不是返回`False`。也可以用来判断目录是否存在。

```python
os.path.isdir("dogs/")
```

### `basename(path)`

返回不包含所在目录的文件名（含扩展）。

```python
os.path.basename("dir1/dir2/file.ext")
```

### `dirname(path)`

返回文件所在目录。

```python
os.path.dirname("dir1/dir2/file.ext")
```

### `split(path)`

返回一个元组。元组第一个元素为文件所在目录，第二个元素为文件名（含扩展）。等效于`(dirname(path), basename(path))`。

```python
os.path.split("dir1/dir2/file.ext")
```

### `splitext(path)`

返回一个元组。元组第一个元素为文件所在目录和文件名（不含扩展），第二个元素为扩展名（包含`.`）。常用来读取或更改文件扩展名。

```python
os.path.splitext("dir1/dir2/file.ext")
```

### `join(path, *paths)`

将路径不同部分拼接成一个完整的路径。等效于`os.sep.join([path, *paths])`。

```python
os.path.join("dir1", "dir2", "file.ext")
```

### `getsize(path)`

返回文件大小。单位字节。

```python
os.path.getsize("dog.jpeg")
```

## 目录操作

### `listdir(path='.')`

返回一个列表。列表为给定目录下所有文件和子目录，但不包含特殊目录`.`和`..`。

默认为当前目录。

```python
os.listdir("dogs")[:5]
```

### `mkdir(path, mode=0o777)`

创建名为`path`的目录。并以数字形式指定目录权限，默认权限为`777`。

```python
os.mkdir("newdir")
```

### `makedirs(path, mode=0o777)`

递归方式创建路径为`path`的目录。并以数字形式指定目录权限，默认权限为`777`。可以看作功能更强大的`mkdir`，它会自动创建叶子节点目录的所有上级目录，而`mkdir`必须在上级目录已经存在情况下，才能创建叶子节点的目录。

```python
os.makedirs("parent/child/newdir")
```

### `rmdir(path)`

删除目录。目录必须存在，并且只能删除空目录。不存在或不为空，都会异常。要想递归删除整个目录树，请使用`shutil.rmtree()`。

```python
os.rmdir("newdir")
```

### `removedirs(path)`

递归删除目录。目录必须存在，并且只能删除空目录。不存在或不为空，都会异常。与`rmdir`不同的是，在删除了叶子节点目录后，会逐次删除上级目录，直到遇到不为空的目录。

```python
os.removedirs("parent/child/newdir")
```

### `remove(path)`

删除文件。不能删除目录，给定路径必须为文件，否则会异常。

Warm Suggestion: 以下复制文件的操作，推荐使用`shutil.copyfile`。

### 复制文件

```python
with open("dog.jpeg", "rb") as f:
    content = f.read()
    with open("dog.copy.jpeg", "wb") as f2:
        f2.write(content)
```
### 删除文件

```python
os.remove("dog.copy.jpeg")
```

## 其他`os`接口

### `getenv(key, default=None)`

获取环境变量。

```python
os.getenv("PATH")
```

### `get_exec_path(env=None)`

返回用于搜索可执行文件的目录列表。看以看作是`PATH`环境变量的列表形式。

```python
os.get_exec_path()
```

### `system(command)`

在当前进程中，启动子进程，执行命令`command`（字符串），主进程会阻塞，直到子进程执行完成。这是通过调用标准C函数`system()`来实现的，并且具有相同的限制。

```python
if os.name == "nt":
    command = "dir"
else:
    command = "ls -l"

os.system(command)
```