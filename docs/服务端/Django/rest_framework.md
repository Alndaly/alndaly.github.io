---
title: rest_framework基本操作
---

## 一般情况下`views.py`需要引入的库

```python
from django.shortcuts import render
from django.shortcuts import render
import logging
from rest_framework.views import Response
from rest_framework.views import APIView
from .serializers import *
from rest_framework.decorators import api_view
from .models import *
```

## 序列化

在每一个接口组下新建`serializers.py`文件

```python
from rest_framework.serializers import Serializer
from rest_framework import serializers
from .models import Data

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = '__all__'
```
