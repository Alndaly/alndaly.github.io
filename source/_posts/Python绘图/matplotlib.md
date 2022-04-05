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