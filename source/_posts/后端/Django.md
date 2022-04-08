---
title: Django快速搭建后端
date: 2022-04-08 23:35:27
tags:
  - [Django]
  - [后端]
categories:
  - [技术]
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