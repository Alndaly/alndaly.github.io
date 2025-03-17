# 17: 霍夫变换

![](http://cos.codec.wang/cv2_understand_hough_transform.jpg)

学习使用霍夫变换识别出图像中的直线和圆。图片等可到文末引用处下载。

## 目标

- 理解霍夫变换的实现
- 分别使用霍夫线变换和圆变换检测图像中的直线和圆
- OpenCV 函数：`cv2.HoughLines()`, `cv2.HoughLinesP()`, `cv2.HoughCircles()`

## 教程

### 理解霍夫变换

霍夫变换常用来在图像中提取直线和圆等几何形状，我来做个简易的解释：

![](http://cos.codec.wang/cv2_understand_hough_transform.jpg)

学过几何的都知道，直线可以分别用直角坐标系和极坐标系来表示：

![](http://cos.codec.wang/cv2_line_expression_in_coordinate.jpg)

那么经过某个点$(x_0, y_0)$的所有直线都可以用这个式子来表示：

$$
r_\theta=x_0\cdot\cos \theta+y_0\cdot\sin \theta
$$

也就是说每一个$(r, θ)$都表示一条经过$(x_0, y_0)$直线，那么同一条直线上的点必然会有同样的$(r, θ)$。如果将某个点所有的$(r, θ)$绘制成下面的曲线，那么同一条直线上的点的$(r, θ)$曲线会相交于一点：

![](http://cos.codec.wang/cv2_curve_of_r_theta.jpg)

OpenCV 中首先计算$(r, θ)$累加数，累加数超过一定值后就认为在同一直线上。

### 霍夫直线变换

OpenCV 中用`cv2.HoughLines()`在二值图上实现霍夫变换，函数返回的是一组直线的$(r, θ)$数据：

```python
import cv2
import numpy as np

# 1.加载图片，转为二值图
img = cv2.imread('shapes.jpg')
drawing = np.zeros(img.shape[:], dtype=np.uint8)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
edges = cv2.Canny(gray, 50, 150)

# 2.霍夫直线变换
lines = cv2.HoughLines(edges, 0.8, np.pi / 180, 90)
```

函数中：

- 参数 1：要检测的二值图（一般是阈值分割或边缘检测后的图）
- 参数 2：距离 r 的精度，值越大，考虑越多的线
- 参数 3：角度 θ 的精度，值越小，考虑越多的线
- 参数 4：累加数阈值，值越小，考虑越多的线

```python
# 3.将检测的线画出来（注意是极坐标噢）
for line in lines:
    rho, theta = line[0]
    a = np.cos(theta)
    b = np.sin(theta)
    x0 = a * rho
    y0 = b * rho
    x1 = int(x0 + 1000 * (-b))
    y1 = int(y0 + 1000 * (a))
    x2 = int(x0 - 1000 * (-b))
    y2 = int(y0 - 1000 * (a))

    cv2.line(drawing, (x1, y1), (x2, y2), (0, 0, 255))
```

![](http://cos.codec.wang/cv2_hough_line_function.jpg)

### 统计概率霍夫直线变换

前面的方法又称为标准霍夫变换，它会计算图像中的每一个点，计算量比较大，另外它得到的是整一条线（r 和 θ），并不知道原图中直线的端点。所以提出了统计概率霍夫直线变换\(Probabilistic Hough Transform\)，是一种改进的霍夫变换：

```python
drawing = np.zeros(img.shape[:], dtype=np.uint8)
# 3.统计概率霍夫线变换
lines = cv2.HoughLinesP(edges, 0.8, np.pi / 180, 90,
                        minLineLength=50, maxLineGap=10)
```

前面几个参数跟之前的一样，有两个可选参数：

- `minLineLength`：最短长度阈值，比这个长度短的线会被排除
- `maxLineGap`：同一直线两点之间的最大距离

```python
# 3.将检测的线画出来
for line in lines:
    x1, y1, x2, y2 = line[0]
    cv2.line(drawing, (x1, y1), (x2, y2), (0, 255, 0), 1, lineType=cv2.LINE_AA)
```

`cv2.LINE_AA`在之前绘图功能中讲解过，表示抗锯齿线型。

![](http://cos.codec.wang/cv2_hough_lines_p_function.jpg)

### 霍夫圆变换

霍夫圆变换跟直线变换类似，只不过线是用$(r, θ)$表示，圆是用$(x_center, y_center, r)$来表示，从二维变成了三维，数据量变大了很多；所以一般使用霍夫梯度法减少计算量，对该算法感兴趣的同学可参考：[Circle Hough Transform](https://en.wikipedia.org/wiki/Circle_Hough_Transform)

```python
drawing = np.zeros(img.shape[:], dtype=np.uint8)
# 2.霍夫圆变换
circles = cv2.HoughCircles(edges, cv2.HOUGH_GRADIENT, 1, 20, param2=30)
circles = np.int0(np.around(circles))
```

其中，

- 参数 2：变换方法，一般使用霍夫梯度法，详情：[HoughModes](https://docs.opencv.org/3.3.1/d7/dbd/group__imgproc.html#ga073687a5b96ac7a3ab5802eb5510fe65)
- 参数 3 dp=1：表示霍夫梯度法中累加器图像的分辨率与原图一致
- 参数 4：两个不同圆圆心的最短距离
- 参数 5：param2 跟霍夫直线变换中的累加数阈值一样

```python
# 将检测的圆画出来
for i in circles[0, :]:
    cv2.circle(drawing, (i[0], i[1]), i[2], (0, 255, 0), 2)  # 画出外圆
    cv2.circle(drawing, (i[0], i[1]), 2, (0, 0, 255), 3)  # 画出圆心
```

![](http://cos.codec.wang/cv2_hough_circles_function.jpg)

## 小结

- 霍夫变换用来提取图像中的直线和圆等几何形状。
- 霍夫直线变换：`cv2.HoughLines()`（整条直线）, `cv2.HoughLinesP()`。
- 霍夫圆变换：`cv2.HoughCircles()`。

## 引用

- [本节源码](https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/17-Hough-Transform)
- [Hough Line Transform](http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_houghlines/py_houghlines.html)
- [Hough Circle Transform](http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_houghcircles/py_houghcircles.html)
- [Hough transform](https://en.wikipedia.org/wiki/Hough_transform)
- [经典霍夫变换（Hough Transform）](https://blog.csdn.net/YuYunTan/article/details/80141392)
