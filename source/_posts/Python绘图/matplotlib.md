---
title: matplotlib
date: 2022-04-05 15:38:27
tags:
  - [matplotlib]
categories:
  - [技术]
description: Python绘图相关文档
---

# bar绘图并且加上数字

```python
def plotBar(name, y_label, title, file_name):
	data_group = data.groupby([name, 'emd_lable2']).size().unstack(level=1)
	x = np.arange(len(data_group.index))  # the label locations
	width = 0.35  # the width of the bars

	fig, ax = plt.subplots()
	rects1 = ax.bar(x - width/2, data_group[0], width, label='未付费')
	rects2 = ax.bar(x + width/2, data_group[1], width, label='付费')

	# Add some text for labels, title and custom x-axis tick labels, etc.
  # y_label正常情况下都是“人数”
	ax.set_ylabel(y_label)
	ax.set_title("不同{}付费情况".format(title))
	ax.set_xticks(x, data_group.index)

	ax.bar_label(rects1, padding=3)
	ax.bar_label(rects2, padding=3)

	fig.tight_layout()

	# 显示label
	plt.legend()

	plt.show()
	fig.savefig(file_name)
```

# 获取当前图片的画布并下载到本地

AxesSubplot如何保存成图片

```python
fig = AxesSubplot.get_figure()
fig.savefig("output.png")
```

# 更改图片的大小以及格式

## 比较方便的方法（开头统一处理）

```python
import numpy as np
import pandas as pd

import seaborn as sns
import matplotlib.pyplot as plt
%matplotlib inline
#from matplotlib.font_manager import FontManager

#fm = FontManager()
#fonts = set(f.name for f in fm.ttflist)
config = {
    "font.family": 'serif',
    "font.serif": ['Songti SC'],
    "font.size": 18,
    "font.sans-serif": [''],
    "figure.figsize": (16,9),
    "mathtext.fontset": 'stix',
}
plt.rcParams.update(config)
```

## 方法

1. 初始化期间在 `figure()` 方法中设置 `figsize`
2. 设置 `rcParams` 来更改 Matplotlib 中图形的大小
3. `set_figheight()` [和](https://www.delftstack.com/zh/howto/matplotlib/how-to-change-the-size-and-format-of-a-figure-in-matplotlib/#set_figheight-%E5%92%8C-set_figwidth-%E4%B8%80%E8%B5%B7%E8%AE%BE%E7%BD%AE-matplotlib-%E5%9B%BE%E5%BD%A2%E5%A4%A7%E5%B0%8F) `set_figwidth()` 一起设置 Matplotlib 图形大小
4. `set_size_inches()` 方法来更改 Matplotlib 图形大小
5. 在 Matplotlib 中更改图形格式

我们可以使用 `set_figheight()` 和 `set_figwidth()` 和 `set_size_inches()` 方法来更改 Matplotlib 中的图形大小。我们也可以通过在 `figure()` 方法和 `rcParams` 中设置 `figsize` 来改变 Matplotlib 中的图形大小。同样，要更改图形格式，我们只需在 `savefig()` 方法中更改图像文件的扩展名。

## 初始化期间在 `figure()` 方法中设置 `figsize`

我们可以在初始化期间通过 `figure()` 方法设置 `figsize` 参数的值，该参数以英寸为单位指定图形的宽度和高度。

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 0.5)
m = 1
c = 2
y = m*x + c

plt.figure(figsize=(6,4))
plt.plot(x, y)
plt.title("y=mx+c")
plt.xlabel('x-axis')
plt.ylabel('y-axis')

plt.show()
```

输出：

![https://www.delftstack.com/img/Matplotlib/set figsize using figsize parameter.png](https://www.delftstack.com/img/Matplotlib/set%20figsize%20using%20figsize%20parameter.png)

`figsize` 参数的默认值为 `[6.4，4.8]`。

## 设置 `rcParams` 来更改 `Matplotlib` 中图形的大小

我们可以更改存储在 `matplotlib.rcParams` 字典中的默认 `figure.figsize` 值，以更改 Matplotlib 中的图形大小。

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10,20)
m = 1
c = 2
y = m*x + c

plt.rcParams["figure.figsize"] = (8, 6)
plt.plot(x, y)
plt.title("y=mx+c")
plt.xlabel('x-axis')
plt.ylabel('y-axis')

plt.show()
```

输出：

![https://www.delftstack.com/img/Matplotlib/set figsize using rc parameter.png](https://www.delftstack.com/img/Matplotlib/set%20figsize%20using%20rc%20parameter.png)

## `set_figheight()` 和 `set_figwidth()` 一起设置 Matplotlib 图形大小

如果已经创建了图形，我们可以使用 `set_figheight()` 和 `set_figwidth()` 方法来确定图形的大小。

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10,20)
m = 1
c = 2
y = m*x + c

fig = plt.figure()
plt.plot(x, y)
plt.title("y=mx+c")
plt.xlabel('x-axis')
plt.ylabel('y-axis')
fig.set_figheight(6)
fig.set_figwidth(8)

plt.show()
```

输出：

![https://www.delftstack.com/img/Matplotlib/set figsize using set figsize using set_figheight and set_figwidth.png](https://www.delftstack.com/img/Matplotlib/set%20figsize%20using%20set%20figsize%20using%20set_figheight%20and%20set_figwidth.png)

这里，`set_figheight()` 方法设置图形的高度，而 `set_figwidth()` 方法设置图形的宽度。

## `set_size_inches()` 方法来更改 Matplotlib 图形大小

创建图形后，此方法还可以设置图形大小。

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10,20)
m = 1
c = 2
y = m*x + c

fig = plt.figure()
plt.plot(x, y)
plt.title("y=mx+c")
plt.xlabel('x-axis')
plt.ylabel('y-axis')
fig.set_size_inches(5, 5)

plt.show()
```

输出：

![https://www.delftstack.com/img/Matplotlib/set figsize using set figsize using set_size_inches.png](https://www.delftstack.com/img/Matplotlib/set%20figsize%20using%20set%20figsize%20using%20set_size_inches.png)

在这里，传递给 `set_size_inches()` 方法的参数分别表示图形的宽度和高度（以英寸为单位）。

## 在 Matplotlib 中更改图形格式

要更改图形格式，我们可以使用 `savefig()` 方法更改图像文件的扩展名。我们可以将图保存为不同的格式，例如 png，jpg，svg，pdf 等。

```python
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10,20)
m = 1
c = 2
y = m*x + c

fig = plt.figure()
plt.plot(x, y)
plt.title("y=mx+c")
plt.xlabel('x-axis')
plt.ylabel('y-axis')
fig.set_size_inches(5, 5)

plt.savefig("Figure saved in jpg format.jpg")
```

这会将图形保存为 jpg 格式。

# Python编写函数检查数值型特征项异常状态

## 引入包

```python
import seaborn as sns
import matplotlib.pyplot as plt
%matplotlib inline
#from matplotlib.font_manager import FontManager

#fm = FontManager()
#fonts = set(f.name for f in fm.ttflist)
config = {
    "font.family": 'serif',
    "font.serif": ['Songti SC'],
    "font.size": 15,
    "font.sans-serif": [''],
    "figure.figsize": (12,7),
    "mathtext.fontset": 'stix',
}
plt.rcParams.update(config)
```

## 编写函数

**此处这个data是个Dataframe**

```python
def checkOut(column_name):
    
    ax1 = plt.subplot(221)
    bp = ax1.boxplot(data[column_name])
    ax1.set_title('删除异常值前')
    lower_whisker = [item.get_ydata()[1] for item in bp['whiskers']][0]
    upper_whisker = [item.get_ydata()[1] for item in bp['whiskers']][1]
    print("上边缘：", upper_whisker)
    print("下边缘：", lower_whisker)
    print("非异常范围：", [lower_whisker,upper_whisker])
    
    ##### 寻找异常值 #####
    outlier = data[(data[column_name] > upper_whisker) | (data[column_name] < lower_whisker)][column_name]
    ##### 删除异常值 ######
    not_outlier = data[(data[column_name] <= upper_whisker) & (data[column_name] >= lower_whisker)][column_name]
    ax2 = plt.subplot(222)
    ##### 重新检查是否还有异常值 #####
    ax2.boxplot(not_outlier)
    ax2.set_title('删除异常值后')
    
    ax3 = plt.subplot(212)
    ax3 = sns.distplot(not_outlier, bins=100, color='r')
    
    plt.savefig('{}异常值检测与处理'.format(column_name)) # 保存图片 注意一定要先运行这一行在做plt.show画布显示，否则画布会是空的
    plt.show()
```

## 效果如下

```python
checkOut('pax_fcny')
```

![pax_fcny异常值检测以及处理](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/pax_fcny%E5%BC%82%E5%B8%B8%E5%80%BC%E6%A3%80%E6%B5%8B%E4%BB%A5%E5%8F%8A%E5%A4%84%E7%90%86.png)