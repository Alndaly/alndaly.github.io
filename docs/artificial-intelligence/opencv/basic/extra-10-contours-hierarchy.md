# 番外篇：轮廓层级

![](http://cos.codec.wang/cv2_understand_hierarchy.jpg)

了解轮廓间的层级关系。图片等可到文末引用处[文末引用出](#引用)下载。

前面我们使用`cv2.findContours()`寻找轮廓时，参数 3 表示轮廓的寻找方式\(RetrievalModes\)，当时我们传入的是 cv2.RETR_TREE，它表示什么意思呢？另外，函数返回值 hierarchy 有什么用途呢？下面我们就来研究下这两个问题。

## 理解轮廓层级

很多情况下，图像中的形状之间是有关联的，比如说下图：

![](http://cos.codec.wang/cv2_understand_hierarchy.jpg)

图中总共有 8 条轮廓，2 和 2a 分别表示外层和里层的轮廓，3 和 3a 也是一样。从图中看得出来：

- 轮廓 0/1/2 是最外层的轮廓，我们可以说它们处于同一轮廓等级：0 级
- 轮廓 2a 是轮廓 2 的子轮廓，反过来说 2 是 2a 的父轮廓，轮廓 2a 算一个等级：1 级
- 同样 3 是 2a 的子轮廓，轮廓 3 处于一个等级：2 级
- 类似的，3a 是 3 的子轮廓，等等…………

这里面 OpenCV 关注的就是两个概念：同一轮廓等级和轮廓间的子属关系。

## OpenCV 中轮廓等级的表示

如果我们打印出`cv2.findContours()`函数的返回值 hierarchy，会发现它是一个包含 4 个值的数组：**\[Next, Previous, First Child, Parent\]**

- _Next：与当前轮廓处于同一层级的下一条轮廓_

举例来说，前面图中跟 0 处于同一层级的下一条轮廓是 1，所以 Next=1；同理，对轮廓 1 来说，Next=2；那么对于轮廓 2 呢？没有与它同一层级的下一条轮廓了，此时 Next=-1。

- _Previous：与当前轮廓处于同一层级的上一条轮廓_

跟前面一样，对于轮廓 1 来说，Previous=0；对于轮廓 2，Previous=1；对于轮廓 1，没有上一条轮廓了，所以 Previous=-1。

- _First Child：当前轮廓的第一条子轮廓_

比如对于轮廓 2，第一条子轮廓就是轮廓 2a，所以 First Child=2a；对轮廓 3a，First Child=4。

- _Parent：当前轮廓的父轮廓_

比如 2a 的父轮廓是 2，Parent=2；轮廓 2 没有父轮廓，所以 Parent=-1。

下面我们通过代码验证一下：

```python
import cv2

# 1.读入图片
img = cv2.imread('hierarchy.jpg')
img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(img_gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

# 2.寻找轮廓
image, contours, hierarchy = cv2.findContours(thresh, cv2.RETR_TREE, 2)

# 3.绘制轮廓
print(len(contours),hierarchy)  # 8 条
cv2.drawContours(img, contours, -1, (0, 0, 255), 2)
```

:::tip
OpenCV 中找到的轮廓序号跟前面讲的不同噢，如下图：
:::

![](http://cos.codec.wang/cv2_hierarchy_RETR_TREE.jpg)

现在既然我们了解了层级的概念，那么类似 cv2.RETR_TREE 的轮廓寻找方式又是啥意思呢？

## 轮廓寻找方式

OpenCV 中有四种轮廓寻找方式[RetrievalModes](https://docs.opencv.org/3.3.1/d3/dc0/group__imgproc__shape.html#ga819779b9857cc2f8601e6526a3a5bc71)，下面分别来看下：

### 1. RETR_LIST

这是最简单的一种寻找方式，它不建立轮廓间的子属关系，也就是所有轮廓都属于同一层级。这样，hierarchy 中的后两个值\[First Child, Parent\] 都为-1。比如同样的图，我们使用 cv2.RETR_LIST 来寻找轮廓：

```python
_, _, hierarchy = cv2.findContours(thresh, cv2.RETR_LIST, 2)
print(hierarchy)
# 结果如下
[[[ 1 -1 -1 -1]
  [ 2  0 -1 -1]
  [ 3  1 -1 -1]
  [ 4  2 -1 -1]
  [ 5  3 -1 -1]
  [ 6  4 -1 -1]
  [ 7  5 -1 -1]
  [-1  6 -1 -1]]]
```

因为没有从属关系，所以轮廓 0 的下一条是 1，1 的下一条是 2……

:::tip
如果你不需要轮廓层级信息的话，cv2.RETR_LIST 更推荐使用，因为性能更好。
:::

### 2. RETR_TREE

cv2.RETR_TREE 就是之前我们一直在使用的方式，它会完整建立轮廓的层级从属关系，前面已经详细说明过了。

### 3. RETR_EXTERNAL

这种方式只寻找最高层级的轮廓，也就是它只会找到前面我们所说的 3 条 0 级轮廓：

```python
_, contours, hierarchy = cv2.findContours(thresh, cv2.RETR_EXTERNAL, 2)
print(len(contours), hierarchy, sep='\n')
# 结果如下
3
[[[ 1 -1 -1 -1]
  [ 2  0 -1 -1]
  [-1  1 -1 -1]]]
```

![](http://cos.codec.wang/cv2_hierarchy_RETR_EXTERNAL.jpg)

### 4. RETR_CCOMP

相比之下 cv2.RETR_CCOMP 比较难理解，但其实也很简单：它把所有的轮廓只分为 2 个层级，不是外层的就是里层的。结合代码和图片，我们来理解下：

```python
_, contours, hierarchy = cv2.findContours(thresh, cv2.RETR_CCOMP, 2)
print(hierarchy)
# 结果如下
[[[ 1 -1 -1 -1]
  [ 2  0 -1 -1]
  [ 4  1  3 -1]
  [-1 -1 -1  2]
  [ 6  2  5 -1]
  [-1 -1 -1  4]
  [ 7  4 -1 -1]
  [-1  6 -1 -1]]]
```

![](http://cos.codec.wang/cv2_hierarchy_RETR_CCOMP.jpg)

:::caution
使用这个参数找到的轮廓序号与之前不同。
:::

图中括号里面 1 代表外层轮廓，2 代表里层轮廓。比如说对于轮廓 2，Next 就是 4，Previous 是 1，它有里层的轮廓 3，所以 First Child=3，但因为只有两个层级，它本身就是外层轮廓，所以 Parent=-1。大家可以针对其他的轮廓自己验证一下。

## 练习

1. 如下图，找到 3 个圆环的内环，然后填充成\(180,215,215\) 这种颜色：

![](http://cos.codec.wang/cv2_hierarchy_fill_holes.jpg)

## 引用

- [本节源码](https://github.com/codecwang/OpenCV-Python-Tutorial/tree/master/Extra-10-Contours-Hierarchy)
- [Contours Hierarchy](http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_contours/py_contours_hierarchy/py_contours_hierarchy.html#contours-hierarchy)
