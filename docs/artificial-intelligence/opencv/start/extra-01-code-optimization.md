# 番外篇：代码性能优化

学习如何评估和优化代码性能。

完成一项任务很重要，高效地完成更重要。图像处理是对矩阵的操作，数据量巨大。如果代码写的不好，性能差距将很大，所以这节我们来了解下如何评估和提升代码性能。

## 评估代码运行时间

```python
import cv2

start = cv2.getTickCount()
# 这里写测试代码...
end = cv2.getTickCount()
print((end - start) / cv2.getTickFrequency())
```

这段代码就是用来测量程序运行时间的（单位：s），其中`cv2.getTickCount()`函数得到电脑启动以来的时钟周期数，`cv2.getTickFrequency()`返回你电脑的主频，前后相减再除以主频就是你代码的运行时间（这样解释并不完全准确，但能理解就行）。另外，也可以用 Python 中的 time 模块计时：

```python
import time

start = time.clock()
# 这里写测试代码...
end = time.clock()
print(end - start)
```

:::tip
如果你使用的是 [IPython](https://baike.baidu.com/item/ipython) 或 [Jupyter Notebook](https://baike.baidu.com/item/Jupyter) 开发环境，性能分析将会非常方便，详情请参考：[Timing and Profiling in IPython](http://pynash.org/2013/03/06/timing-and-profiling/)
:::

## 优化原则

- 数据元素少时用 Python 语法，数据元素多时用 Numpy：

```python
x = 10
z = np.uint8([10])

# 尝试比较下面三句话各自的运行时间
y = x * x * x   # (1.6410249677846285e-06)
y = x**3        # (2.461537451676943e-06)
y = z * z * z   # 最慢 (3.1179474387907945e-05)
```

所以 Numpy 的运行速度并不一定比 Python 本身语法快，元素数量较少时，请用 Python 本身格式。

- 尽量避免使用循环，尤其嵌套循环，因为极其慢！！！
- 优先使用 OpenCV/Numpy 中封装好的函数
- 尽量将数据向量化，变成 Numpy 的数据格式
- 尽量避免数组的复制操作

## 接口文档

- [cv2.getTickCount\(\)](https://docs.opencv.org/4.0.0/db/de0/group__core__utils.html#gae73f58000611a1af25dd36d496bf4487)
- [cv2.getTickFrequency\(\)](https://docs.opencv.org/4.0.0/db/de0/group__core__utils.html#ga705441a9ef01f47acdc55d87fbe5090c)

## 引用

- [本节源码](https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Extra-01-Code-Optimization)
- [Python Optimization Techniques](https://wiki.python.org/moin/PythonSpeed/PerformanceTips)
- [Timing and Profiling in IPython](http://pynash.org/2013/03/06/timing-and-profiling/)
- [Advanced Numpy](http://www.scipy-lectures.org/advanced/advanced_numpy/index.html#advanced-numpy)
