# 02: 基本元素 - 图片

![](http://cos.codec.wang/cv2_image_coordinate_channels.jpg)

学习如何加载图片，显示并保存图片。图片等可到文末引用处下载。

## 目标

- 加载图片，显示图片，保存图片
- OpenCV 函数：`cv2.imread()`, `cv2.imshow()`, `cv2.imwrite()`

## 教程

大部分人可能都知道电脑上的彩色图是以 RGB(Red/Green/Blue: 红/绿/蓝) 颜色模式显示的，但 OpenCV 中彩色图是以 BGR 通道顺序存储的，灰度图只有一个通道。

图像坐标的起始点是在左上角，所以行对应的是 y，列对应的是 x：

![](http://cos.codec.wang/cv2_image_coordinate_channels.jpg)

### 加载图片

使用`cv2.imread()`来读入一张图片：

```python
import cv2

# 加载灰度图
img = cv2.imread('lena.jpg', 0)
```

- 参数 1：图片的文件名
  - 如果图片放在当前文件夹下，直接写文件名就行，如'lena.jpg'
  - 否则需要给出绝对路径，如'D:\OpenCVSamples\lena.jpg'
- 参数 2：读入方式，省略即采用默认值
  - `cv2.IMREAD_COLOR`：彩色图，默认值 (1)
  - `cv2.IMREAD_GRAYSCALE`：灰度图 (0)
  - `cv2.IMREAD_UNCHANGED`：包含透明通道的彩色图 (-1)

:::tip

路径中不能有中文噢，并且没有加载成功的话是不会报错的，`print(img)`的结果为 None，后面处理才会报错，算是个小坑。

:::

### 显示图片

使用`cv2.imshow()`显示图片，窗口会自适应图片的大小：

```python
cv2.imshow('lena', img)
cv2.waitKey(0)
```

参数 1 是窗口的名字，参数 2 是要显示的图片。不同窗口之间用窗口名区分，所以窗口名相同就表示是同一个窗口，显示结果如下：

![](http://cos.codec.wang/cv2_show_lena_gray.jpg)

`cv2.waitKey()`是让程序暂停的意思，参数是等待时间，单位毫秒 ms。时间一到，会继续执行接下来的程序，传入 0 的话表示一直等待。等待期间也可以获取用户的按键输入：`k = cv2.waitKey(0)`（[练习 1](#练习)）。

我们也可以先用`cv2.namedWindow()`创建一个窗口，之后再显示图片：

```python
# 先定义窗口，后显示图片
cv2.namedWindow('lena2', cv2.WINDOW_NORMAL)
cv2.imshow('lena2', img)
cv2.waitKey(0)
```

参数 1 依旧是窗口的名字，参数 2 默认是`cv2.WINDOW_AUTOSIZE`，表示窗口大小自适应图片，也可以设置为`cv2.WINDOW_NORMAL`，表示窗口大小可调整。图片比较大的时候，可以考虑用后者。

### 保存图片

使用`cv2.imwrite()`保存图片，参数 1 是包含后缀名的文件名：

```python
cv2.imwrite('lena_gray.jpg', img)
```

Nice，是不是很简单呐，再接再厉噢\(●'◡'●\)

## 小结

- `cv2.imread()`读入图片、`cv2.imshow()`显示图片、`cv2.imwrite()`保存图片。

## 练习

1. 打开 lena.jpg 并显示，如果按下's'，就保存图片为'lena_save.bmp'，否则就结束程序。
2. Matplotlib 是 Python 中常用的一个绘图库，请学习[番外篇：无损保存和 Matplotlib 使用](./extra-02-high-quality-save-and-matplotlib)。

## 接口文档

- [Mat Object](https://docs.opencv.org/4.0.0/d3/d63/classcv_1_1Mat.html)
- [cv2.imread\(\)](https://docs.opencv.org/4.0.0/d4/da8/group__imgcodecs.html#ga288b8b3da0892bd651fce07b3bbd3a56)
- [cv2.imshow\(\)](https://docs.opencv.org/4.0.0/d7/dfc/group__highgui.html#ga453d42fe4cb60e5723281a89973ee563)
- [cv2.imwrite\(\)](https://docs.opencv.org/4.0.0/d4/da8/group__imgcodecs.html#gabbc7ef1aa2edfaa87772f1202d67e0ce)
- [cv.namedWindow\(\)](https://docs.opencv.org/4.0.0/d7/dfc/group__highgui.html#ga5afdf8410934fd099df85c75b2e0888b)

## 引用

- [本节源码](https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/02-Basic-Element-Image)
- [Getting Started with Images](http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_gui/py_image_display/py_image_display.html)
