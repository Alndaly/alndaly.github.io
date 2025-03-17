---
title: 模型调优-删除异常值（箱型图）
date: 2022-04-06 20:30:27
tags: [数据分析, python]
description: Python做数据分析
---

## 1.箱线图

**箱形图**（Box plot），是一种用作显示一组数据分散情况资料的[统计图](https://zh.wikipedia.org/wiki/统计图)。

![箱型图](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202204071304169.png)

箱线图可以深入了解数据的分布特性，上图说明了箱线图的不同特征。

其中**非异常值最常见的定义是[Q1 - 1.5xIQR, Q3 + 1.5xIQR]**，如果是区间外的值就被视为outlier并显示在图上。

- Q1：第一四分位数
- median：是中位数
- Q3：第三四分位数
- IQR：四分位间距

## 2.随机生成数据

- 随机生成一组以正态分布均值等于10的数据

```python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
# 解决中文乱码问题
plt.rcParams['font.sans-serif'] = ['Simhei']

data = np.random.normal(loc = 10, scale = 1, size = 1000)
sns.distplot(data, bins=100, color='r')
```

如下图：正态的标准化直方图于密度估计

![正态分布直方图](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202204071305649.png)

## 3.寻找异常值

- 找到异常值所在范围：`[Q1 - 1.5 x IQR, Q3 + 1.5 x IQR]`
- 直接使用`matplotlib.pyplot.boxplot`的返回值whiskers获取两极端的非异常数据点
- 绘图后获取它们，当绘制箱线图完成时，使用`get_ydata()`方法
- 它的返回值返回一个二维数组，第二个元素就是我们想要的值（上边缘和下边缘）

```python
fig = plt.figure(figsize=(10,8))
ax1 = fig.add_subplot(1,2,1)
bp = ax1.boxplot(data)

lower_whisker = [item.get_ydata()[1] for item in bp['whiskers']][0]
upper_whisker = [item.get_ydata()[1] for item in bp['whiskers']][1]
print("上边缘：", upper_whisker)
print("下边缘：", lower_whisker)
print("非异常范围：", [lower_whisker,upper_whisker])

##### 寻找异常值 #####
outlier = data[(data < lower_whisker) | (data > upper_whisker)]
print("异常值（离散值）：", outlier)
"""
上边缘： 12.610201767794644
下边缘： 7.4427962773205625
非异常范围： [7.4427962773205625, 12.610201767794644]
异常值（离散值）： [13.10837006  7.14081742 12.71635149 12.66670042  7.25470382  6.8162954 7.05752588]
"""
```

## 4.删除异常值

```python
##### 删除异常值 ######
not_outlier = data[(data > lower_whisker) & (data < upper_whisker)]

##### 重新检查是否还有异常值 #####
ax2 = fig.add_subplot(1,2,2,sharey =ax1)
ax2.boxplot(not_outlier,
            boxprops={'color':'red'},
            #设置上下边缘的显示样式
            capprops={'color':'green', 'lw':4, 'ls':'--'},
            #设置异常值的显示样式
            flierprops={'marker':'*', 'markersize': 8})
ax1.set_xlabel('删除异常值前')
ax2.set_xlabel('删除异常值后')
```

![删除异常值前后对比](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202204071306550.png)

## 总结

上面的例子以一维数组展开操作，如果你的是二维数组，你想解决这类问题或者有多个箱线图，想批量删除异常值该怎么做，可以参考最后附上的相关参考，希望对你有所帮助。

