---
title: opencv基础方法
---

## 读取图片

:::note
opencv读取图片后默认图片的编码是BGR而不是RGB。
:::

```python
img = cv2.imread('test.png')
```

## 颜色空间转换函数

```python
img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
```

`BGR2GRAY`，`BGR`是之前的颜色空间序列，`GRAY`是转变之后的颜色空间序列。

## 图像阈值处理

```python
img = cv2.imread('test.png')
ret, thresh = cv2.threshold(img, 127, 50, cv2.THRESH_BINARY)
```

`threshold`四个参数依次为：

- `src`: 表示的是图片源
- `thresh`: 表示的是阈值（起始值）
- `maxval`: 表示的是最大值
- `type`: 表示的是这里划分的时候使用的是什么类型的算法，常用值为`0`（`cv2.THRESH_BINARY`）

## 填充操作

```python
cv2.copyMakeBorder(src, top, bottom, left, right, borderType, value)
```

`copyMakeBorder`几个参数依次为：

- `src`: 源图像。
- `top`: 顶部方向上的像素数的边框宽度。
- `bottom`: 底部方向上的像素数的边框宽度。
- `left`: 左侧像素的边界宽度。
- `right`: 沿正确方向的像素数的边框宽度。
- `borderType`: 边界类型。
- `value`: 一个可选参数。