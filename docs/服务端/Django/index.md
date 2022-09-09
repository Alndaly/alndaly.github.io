---
title: Django快速搭建后端
date: 2022-04-08 23:35:27
tags: [Django]
description: Django后端。
---

## 官方文档（含教程）

[Django](https://www.djangoproject.com/)

[Home - Django REST framework](https://www.django-rest-framework.org/)

## 基本操作（终端中执行）

新建一个Django项目

```bash
django-admin startproject mysite
```

新建一个接口组

```bash
django-admin startapp test_app
```

启动Django项目

```bash
python manage.py runserver
```

创建管理员账户

```bash
python manage.py createsuperuser
```

## rest_framework

```python
INSTALLED_APPS = [
		'rest_framework', #增加这一行
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

## 解决时区问题

在`settings.py`中修改

```python
TIME_ZONE = 'Asia/Shanghai' #时区改成上海
# USE_TZ = True #这行注释
```

## 解决跨域

在`settings.py`中修改

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',  # 这里增加允许跨域请求头配置
]

MIDDLEWARE = [
		#中间件修改成如下
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

## Django默认样式不好看

在`settings.py`中修改

```python
INSTALLED_APPS = [
    'simpleui', #增加这一行
    'mall.apps.MallConfig',
    'rest_framework',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',  # 这里增加允许跨域请求头配置
]
```

<aside> 💡 simpleui的一些基本配置⬇️，在`settings.py`中增加

</aside>

```python
# 去掉默认Logo或换成自己Logo链接
SIMPLEUI_LOGO = '<https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109211712667.png>'
# 默认语言换成中文
LANGUAGE_CODE = 'zh-hans'
```

## Django的时间返回中间带`T`

`settings.py`中增加如下配置

```python
REST_FRAMEWORK = {
    'DATETIME_FORMAT': "%Y-%m-%d %H:%M:%S",
}
```

## 数据库配置

```python
DATABASES = {
    'default': {
        'OPTIONS': {'charset': 'utf8mb4'},
        'ENGINE': 'django.db.backends.mysql',  # 数据库引擎
        'NAME': 'mall',  # 数据库名称
        'USER': 'root',  # 连接数据库的用户名称
        'PASSWORD': 'root',  # 用户密码
        'HOST': 'localhost',  # 访问的数据库的主机的ip地址
        'PORT': '3306',  # 默认mysql访问端口
    },
}
```

## Mysql转Django模型类

创建一个Django项目

```javascript
django-admin startproject ‘xxxx‘
```

修改setting文件，在setting里面设置你要连接的数据库类型和连接名称，地址之类，和创建新项目的时候一致

```javascript
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'sqlexam',
        'USER': 'root',
        'PASSWORD': 'root12345',
        'HOST': '127.0.0.1',
        'PORT': 3306
    }
}
```

接下来就可以根据数据库数据生成对应的models模型文件

1、生成模型文件

```javascript
python3 manage.py inspectdb
```

2、将模型文件导入到app当中

创建app

```javascript
python3 manage.py startapp 'app名字'
```

将模型导入创建的app中

```javascript
python3 manage.py inspectdb > app/models.py
```

# 修改数据库

## 方法一

1. 在nivicat中直接直接改动数据结构

2. 在终端中执行

   ```python
   python manage.py inspectdb
   ```

   

