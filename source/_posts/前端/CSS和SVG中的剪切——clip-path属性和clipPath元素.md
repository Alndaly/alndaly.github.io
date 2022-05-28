---
title: CSS和SVG中的剪切——clip-path属性和<clipPath>元素 
date: 2022-05-29 00:45:23
tags:
  - [web]
  - [css]
categories:
  - [技术]
description: CSS和SVG有很多共同之处。CSS有很多特性都是从SVG中引入过来的。其中就有“剪切”的特性。CSS和SVG都允许我们对一个元素进行非矩形的剪切。在这篇文章中，将介绍CSS和SVG中的剪切技术。
---



# CSS和SVG中的剪切——clip-path属性和<clipPath>元素 

[SVG](https://www.w3cplus.com/svg-tutorial)

[clip-path](https://www.w3cplus.com/blog/tags/431.html)

[clipPath](https://www.w3cplus.com/blog/tags/432.html)

> 本文由[大漠](http://www.w3cplus.com/)根据[SaraSoueidan](http://twitter.com/SaraSoueidan)的《[Clipping in CSS and SVG – The clip-path Property and  Element](http://sarasoueidan.com/blog/css-svg-clipping/)》所译，整个译文带有我们自己的理解与思想，如果译得不好或有不对之处还请同行朋友指点。如需转载此译文，需注明原作者相关信息http://sarasoueidan.com/blog/css-svg-clipping/。
>
> ——作者：[SaraSoueidan](http://twitter.com/SaraSoueidan)
>
> ——译者：[大漠](http://www.w3cplus.com/)

CSS和SVG有很多共同之处。CSS有很多特性都是从SVG中引入过来的。其中就有“剪切”的特性。CSS和SVG都允许我们对一个元素进行非矩形的剪切。在这篇文章中，将介绍CSS和SVG中的剪切技术。

特别声明：本文提供的DEMO可能在你的浏览器中不能正常的演示，你应该查看这个[表格](https://github.com/awgreenblatt/css-graphics)了解更多相关的信息。你在阅读这篇文章之时没有必要查看提供的DEMO。不是所有的剪切特性都可以实现或者说只能实现部分剪切特性。本文的最大目的是告诉你CSS和SVG中的剪切是如何工作？仅用来做为参考。在文章中的代码不带有任何浏览器的私有前缀，但在示例中还是带了浏览器的私有前缀。

## 剪切是什么

剪切是一个图形化操作，你可以部分或者完全隐藏一个元素。**被剪切的元素可以是一个容器也可以是一个图像元素。**元素的哪些部分显示或隐藏是由剪切的路径来决定的。

![CSS和SVG中的剪切](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1407/clip-path-1.jpg)

**剪切路径**定义了一个区域，在这个区域内的内容将会显示，而不在这个区域内的内容不会显示。这个区域被称之为“裁剪区域”。只要在这个区域之外的任何元素都不会显示。包括元素的内容、背景、边框、文本、轮廓等，甚至还包括他的子元素。

> 剪切的元素可以是任何容器和图片元素。

剪切路径的概念就相当于在元素上定义了一个视窗。它决定了元素哪些部分在这个“视窗”中显示，哪些部分不在这个“视窗”中显示。但他不会影响自身文档流和其他文档流，因为他通常还是以一个矩形区域显示在其他文档流前面，哪怕是剪切出来的区域是不规则的矩形。如果你想改变周围内容元素围绕剪切出来的图形，那就需要使用[CSS的图形](http://www.w3.org/TR/css-shapes/)属性。如果你对这方面知识感兴趣，可以阅读我早前写的[相关](http://alistapart.com/article/css-shapes-101)[文章](http://sarasoueidan.com/blog/css-shapes/)。

> 有关于CSS3 Shapes相关中文教程，可以阅读早前翻译的两篇文章：
>
> - [使用CSS Shapes的Regions创建更好的阅读体验](http://www.w3cplus.com/css3/css-regions-with-shapes-for-readability.html)
> - [CSS Shapes 101](http://www.w3cplus.com/css3/css-shapes-101.html)

## CSS中的剪切——`clip-path`属性

`clip-path`属性是[CSS Masking模块](http://www.w3.org/TR/2014/WD-css-masking-1-20140213/)的一部分。自从2000年以来，剪切都只是SVG中的一部分，现在将这个功能引入到CSS的Msking模块中，所以现在可以对HTML元素和SVG元素进行剪切。

`clip-path`属性是指定一个应用到元素上的剪切路径。应用在SVG中`<clipPath>`元素上的属性值可以完全运用在`clip-path`的属性上。你还可以使用CSS Shapes模块中的[基本形状](http://dev.w3.org/csswg/css-shapes-2/#ltbasic-shapegt)来定义剪切路径。这些形状你可以使用形状函数来创建。这些形状态函数包括`polygon()`、`circle()`、`inset()`(用来定义嵌入的矩形)和`ellipse()`。

使用`clip-path`属性将一个剪切路径运用在一个元素上非常的简单：

```css
/* SVG中的clipPath的使用 */
.element {
    clip-path: url(#svgClipPathID);
}

/* 使用CSS中的基本图形函数 */
.element {
    clip-path: polygon(...); /* 或者其他的图形函数 */
}
```

例如，我们使用`polygon()`函数定义一个多边形的剪切路径，并且把这个路径应用到一个图像上，代码看起来像这样：

```css
img {
    clip-path: polygon(626px 463px,765px 236px,687px 31px,271px 100px,70px 10px,49px 250px,133px 406px,374px 462px,529px 393px);
}
```

应用上面的代码之后，图像显示成这样：

[![CSS和SVG中的剪切](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1407/clip-path-2.jpg)](http://codepen.io/airen/pen/wglAe)

[查看DEMO](http://codepen.io/airen/pen/wglAe)

基本图形函数允许我们创建一定数量的图形，其中最复杂的就是多边形。如果你想创建一个更为复杂的图形，而且图形看起来不是用直线画出来的，这个时候你就需要使用SVG的`<clipPath>`元素。正如`<clipPath>`元素名称所暗示的一样，你可以使用这个元素绘制任意路径的图形。这也意味着，你可以使用`<clipPath>`元素绘制出任意图形来做为一个剪切路径。

在我们第二个示例中，使用SVG的`clipPath`定义一个路径，这个剪切路径看起来像这样：

```html
<svg height="0" width="0">
    <defs>
        <clipPath id="svgPath">
            <path fill="#FFFFFF" stroke="#000000" stroke-width="1.5794" stroke-miterlimit="10" d="M215,100.3c97.8-32.6,90.5-71.9,336-77.6　c92.4-2.1,98.1,81.6,121.8,116.4c101.7,149.9,53.5,155.9,14.7,178c-96.4,54.9,5.4,269-257,115.1c-57-33.5-203,46.3-263.7,20.1
    c-33.5-14.5-132.5-45.5-95-111.1C125.9,246.6,98.6,139.1,215,100.3z"/>
        </clipPath>
    </defs>
</svg>
```

这剪切路径看起来就像一个黑色的描边圈了一个不规则的图形，这是一个简单的剪切路径，不带有任何的填充。

![CSS和SVG中的剪切](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1407/clip-path-3.jpg)

在下一部分中，我们将着重讨论SVG的`<clipPath>`元素。但现在，我们来看看如何将定义好的路径运用到图片上：

```css
img {
    clip-path: url(#svgPath);
}
```

最终效果如下所示：

[![CSS和SVG中的剪切](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1407/clip-path-4.jpg)](http://codepen.io/airen/pen/Buais)

[查看DEMO](http://codepen.io/airen/pen/Buais)

事实上，`<clipPath>`元素包括很多个基本图形（`<rect>`，`<circle>`等），`<path>`元素，甚至是`<text>`元素。

如果在`<clipPath>`里面通过`<text>`指定文本，那么这个文本就会当成是一个剪切路径，不管文是否可见，文本外的区域都将被剪切掉。

注意，你可以使用任何文本做为剪切路径。这为实现很多效果开启了一扇大门。你可以使用动画图片（比如，gif）,甚至是视频，然后选择你需要的文本进行剪切。这里是没有任何限制的。

下面的示例，就是使用文本做为剪切路径：

```html
<svg height="0" width="0">
    <defs>
        <clipPath id="svgTextPath">
            <text x="0" y="300" textLength="800px" lengthAdjust="spacing" font-family="Vollkorn" font-size="230px" font-weight="700" font-style="italic"> Blossom </text>
        </clipPath>
    </defs>
</svg>
```

SVG中的`<text>`最酷的特点就是可以使用自定义字体，就像HTML文本。在我们的示例中使用了Google Web Fonts中的[Vollkorn](http://www.google.com/fonts/specimen/Vollkorn)字体。使用`textLength`属性，将文本的宽度设置的和图片宽度一样， 并且通过`x`和`y`来定位文本。注意，`x`和`y`坐标确认了文本左下角的位置（也就是文本的基线baseline）。

使用上面的文本路径剪切图来的图片效果如下：

[![CSS和SVG中的剪切](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1407/clip-path-5.jpg)](http://codepen.io/airen/pen/vyEzH)

[查看DEMO](http://codepen.io/airen/pen/vyEzH)

正如我们前面提到的，你还可以在`<clipPath>`中使用多个图形形状。在下一节中，将会深入介绍`<clipPath>`，这里我们先简单的了解。在这个示例中，我们使用了多个`<circle>`形状，他们大小不同，位置不同。

```html
<svg height="0" width="0">
    <defs>
        <clipPath id="svgPath">
            <circle stroke="#000000" stroke-miterlimit="10" cx="50" cy="50" r="40" />
            <circle stroke="#000000" stroke-miterlimit="10" cx="193.949" cy="235" r="74.576"/>
            <circle stroke="#000000" stroke-miterlimit="10" cx="426.576" cy="108.305" r="47.034"/>
            <circle stroke="#000000" stroke-miterlimit="10" cx="346.915" cy="255.763" r="43.644"/>
            <circle stroke="#000000" stroke-miterlimit="10" cx="255.39" cy="82.882" r="35.17"/>
            <!-- more circles... -->
        </clipPath>
    </defs>
</svg>
```

此时，图像只会在圆中显示，圆外就不会显示：

[![CSS和SVG中的剪切](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1407/clip-path-6.jpg)](http://codepen.io/airen/pen/dfIry)

[查看DEMO](http://codepen.io/airen/pen/dfIry)

正如我们这篇文章中介绍的，你可以使用`clip-path`属性应用在SVG元素绘制的路径。在上面演示的示例，剪切路径都是应用在HTML中的`<img>`元素上。在接下来的示例中，将演示的是一个剪切路径用于`<svg>`的根元素。同样是樱花图片，使用下面SVG的中的`<image>`来引用。

SVG中的`<image>`元素用来引用一个完整的SVG或像素图像。如果你在`<image>`中引用的SVG图像，设置的`width`和`height`属性，将会用来设置SVG视窗的大小。如果你引用的是像素图像（我们这里的例子就是这样做的），图像将会自动缩放到指定的`width`和`height`。所以我们要确认好他们的长宽比例，避免图像扭曲。

当你创建一个SVG时，你可以在`<svg>`元素上指定其宽度和高度的大小，用于创建一个窗口。任何超过这个窗口的内容都将不会显示出来。你可以通过`<clipPath>`元素定制一个窗口。

```html
<svg height="500" width="800">
    <image xlink:href="flowers.jpg" x="0" y="0" width="800" height="500"/>
    <defs>
        <clipPath id="theSVGPath">
            <rect x="0" y="0" stroke="#000000" stroke-miterlimit="10" width="108" height="500"/>
            <rect x="121.5" y="25.5" stroke="#000000" stroke-miterlimit="10" width="55" height="455"/>
            <rect x="192.5" y="9.5" stroke="#000000" stroke-miterlimit="10" width="60" height="484"/>
            <rect x="271.5" y="44.5" stroke="#000000" stroke-miterlimit="10" width="63" height="416"/>
            <rect x="349.5" y="25.5" stroke="#000000" stroke-miterlimit="10" width="208" height="447"/>
            <rect x="574.5" y="44.5" stroke="#000000" stroke-miterlimit="10" width="60" height="446"/>
            <rect x="644.5" y="9.5" stroke="#000000" stroke-miterlimit="10" width="68" height="471"/>
            <rect x="736.5" y="18.5" stroke="#000000" stroke-miterlimit="10" width="49" height="462"/>
        </clipPath>
    </defs>
</svg>
```

使用`clip-path`将定义好的`<clipPath>`运用到`<svg>`元素上：

```css
svg {
    clip-path: url(#theSVGPath);
}
```

[![CSS和SVG中的剪切](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1407/clip-path-7.jpg)](http://codepen.io/airen/pen/ghfoE)

[查看DEMO](http://codepen.io/airen/pen/ghfoE)

更多有关于在SVG上使用`clip-path`的示例将会在下面介绍`<clipPath>`部分介绍。

### 一个剪切路径的参考盒子

除了剪切路径本身，还可以给剪切路径应用一个`<basic-shape>`定义一个剪切路径的参考盒子。也就是说，可以使用一个剪切的基本函数创建一个剪切路径。其中参考盒子只能使用CSS的`clip-path`来指定形状路径，而不能使用SVG的`<clipPath>`。对于SVG的`<clipPath>`参考盒子是一个`border-box`元素。

因此剪切路径的参考盒子用`<basic-shape>`来指定。如果是一个HTML元素被剪切，可以使用四种盒模型：`margin-box`、`border-box`、`padding-box`和`content-box`。每种盒模型都有其自己的解释。

如果`<basic-path>`制作的剪切路径运用在一个SVG元素上，参考盒子可以设置为下面三种的其中一种：

- **`fill-box`：**使用对像的边缘做为参考盒子
- **`stroke-box`：**使用路径做为参考盒子
- **`view-box`：**如果没有指定`viewBox`将使用最近的SVG视窗做为参考盒子。如果`viewBox`的确创建了，则会根据`viewBox`的原点坐标和维度来创建参考盒子

如果为SVG元素设置CSS盒模型中的任何一种做为参考盒子，则会使用`fill-box`值；如果你使用SVG来做为一个HTML元素的参考盒子，则会使用`border-box`盒模型。

```css
.element {
    clip-path: polygon(...) padding-box;
}
```

如果参考盒子没有使用`clip-path`来指定——也就是没有定义任何形状——浏览器将会使用指定的盒子的边缘，包括圆角图形（比如说使用了`border-radius`）做为剪切路径。

例如，使用下面的代码片段，使用了`border-radius`指定了一个圆角的剪切路径：

```css
.el {
    clip-path: border-box;
    border-radius: 25%;
}
```

**注意，在写这篇文章之时，使用`border-box`指定一个参考盒子，在webkit内核中还无法得以支持，因为它还没有运用于实战当中。**

### 叠加情况、指针事件和动画下的`clip-path`的注意事项

特别注意，要知道，如果任何都设置默认值，`clip-path`属性将会创建一个类似于透明元素。

此外，根据Masking规范，鼠标事件在图形的`clipped-out`区域外是无效的。这意味着，如果没有做剪切，鼠标事件还是有效的。这一部规范中做了详细的描述，只是实现方式不同。

![CSS和SVG中的剪切](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1407/clip-path-8.jpg)

绿色区域表示可以响应鼠标事件。左图表示的是标签规范的行为，右图表示非标签规范行为。

为了演示，我在前面示例的基础上，给图片添加了一个`div`容器，使用了SVG的`<clipPath>`制作剪切路径。如果没有使用剪切，你可以看到图像有边框。添加一个`hover`效果，鼠标经过图片时，图片会带有一定的透明度。

如果使用Chrome浏览器（35.0.1916.153版本测试），就算鼠标在图像的剪切之外的区域，图片也会有一琮的透明度。这种行为就是符合标准规范的一种行为。

在Firefox浏览器(30.0版本测试)，除了在可视区域图像不会响应鼠标事件。这意味着，鼠标移到图像剪切区域之外，会失去鼠标事件。（图像不带有透明度）

我必须得说，我更喜欢符合规范规范的那种行为，不知道你喜欢的是哪种行为？

[查看DEMO](http://codepen.io/airen/pen/wqIhC)

剪切路径还可以使用动画效果。如果使用SVG的`<clipPath>`制作剪切路径，可以在其内部设置动画（下一节中将会详细介绍）。如果剪切路径是使用的基本图形函数创建，则何以运用CSS3的`animation`或者`transition`属性。至于如何使用基本图形创建一个动画的路径，感兴趣的可以阅读我前面写的一篇文章：《[Animating CSS Shapes with CSS Animations & Transitions](http://sarasoueidan.com/blog/animating-css-shapes/)》。

## SVG中的剪切——`<clipPath>`元素

在SVG中使用`<clipPath>`元素来定义剪切元素的剪切路径。如果不想使用CSS的`clip-path`来定义元素的剪切路径，可以使用SVG中的`clip-path`属性。

> 你看过或读过我写的“Styling and Animating Scalable Vector Graphics with CSS”的幻灯片？如果没有，你应该看看里面介绍的，如何使用SVG的属性和CSS样式来美化SVG元素。你可以点击[这里](http://sarasoueidan.com/blog/cssconf-2014-talk)阅读.

```html
<svg>
    <defs>
        <clipPath id="myClippingPath">
            <!-- ... -->
        </clipPath>
    </defs>
    <!-- the element you want to apply the clipPath to can be any SVG element -->
    <g id="my-graphic" clip-path="url(#myClippingPath)">
        <!-- ... -->
    </g>
</svg>
```

### `<clipPath>`的内容

我们前面提到过，可以在SVG中的`<clipPath>`内创建任意数量的基本形状，`<path>`和`<text>`元素。它甚至还可以包括很多其他的东西，这正也是SVG很有意思的地方。

`<clipPath>`元素中的内容可以是描述性的（如`<title>`，`<desc>`，`<metadata>`）。也可以是图形（如:`<circle>`, `<ellipse>`, `<line>`, `<path>`, `<polygon>`, `<polyline>`, `<rect>`或者`<text>`）。一个`<clipPath>`可以包含一个`<use>`元素或者`<script>`。注意，在`<clipPath>`元素中使用`<use>`元素，只能引用一些简单的SVG的图形（前面提到的）,例如，它在`<clipPath>`内不能用于群体的参照，它是没办法正常工作的。

最后一部分，但并不是最重要的一部分。`<clipPath>`可以包括一个使用`<animate>`, `<animateColor>`, `<animateMotion>`,`<animateTransform>`或 `<set>`创建的动画。这为很多创造打开了一扇门，只要你敢想，就能做。

使用多个`<circle>`制作的剪路径，并且添加了一个简单的动画效果来做为示例演示。每个`<circle>`都有一个简单的动画。为了保证示例的简单，在所有圆上都使用了同一个简单的动画效果。当然，你可以为每个圆创建不同的动画效果。演示示例的代码如下：

```
<svg height="0" width="0">
    <defs>
        <clipPath id="svgPath">
            <circle stroke="#000000" stroke-miterlimit="10" cx="50" cy="50" r="40">
                <animate attributeName="r" attributeType="XML" from="0" to="250" begin="0s" dur="3s" fill="freeze"  repeatCount="indefinite"/>
            </circle>
            <circle stroke="#000000" stroke-miterlimit="10" cx="193.949" cy="235" r="74.576">
                <animate attributeName="r" attributeType="XML" from="0" to="250" begin="0s" dur="3s" fill="freeze" repeatCount="indefinite"/>
            </circle>
            <!-- ... -->
        </clipPath>
    </defs>
</svg> 
```

这个动画就只指定了每个圆的尺寸大小，圆的半径从0到250px，总共花了3秒时间，并且设置了动画播放次数是无限次。

点击下面的按钮查看示例，使用Chrome或者Safari点击查看案例之前，得告诉您，示例还存在一个bug（详细介绍请点击[这里](https://code.google.com/p/chromium/issues/detail?id=391604)），所以我建议您使用Firefox查看示例，直到这个Bug已修复。

[查看DEMO](http://codepen.io/airen/pen/GAgqw)

请注意，`<clipPath>`的内容也不能包括`<g>`。例如我们给多个圆`<circle>`放在一个组里`<g>`，那么它不能正常工作，剪切路径不会运用到图片上。

```html
<svg height="0" width="0">
    <defs>
        <clipPath id="svgPath"> <!-- WILL NOT WORK -->
            <g> <!-- WILL NOT WORK -->
                <circle stroke="#000000" stroke-miterlimit="10" cx="193.949" cy="235" r="74.576"/>
                <circle stroke="#000000" stroke-miterlimit="10" cx="426.576" cy="108.305" r="47.034"/>
                <!-- ... -->
            </g>
        </clipPath>
    </defs>
</svg>
```

### `clipPathUnits`属性

`<clipPath>`元素包括很多个属性，比如`id`,`class`,`transform`和像`fill`和`stroke`这样的[显示属性](http://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermPresentationAttribute)以及[其他更多属性](http://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#SVGStylingProperties)。其中最有用的是`clipPathUnits`属性。

`clipPathUnits`主要用来给`<clipPath>`元素内容指定一个坐标系统。它具有两个值：`objectBoundingBox`和`userSpaceOnUse`，其中`userSpaceOnUse`是默认值。

```
clipPathUnits = "userSpaceOnUse | objectBoundingBox"
```

#### `userSpaceOnUse`

当`clipPath`元素是用来当作参考物时，`clipPath`元素内容是以用户坐标系统作为参考点。（例如：`clipPath`元素的用户坐标系统是通过`clip-path`属性来引用）。

用户坐标系统（局部坐标系统）是目前激活的坐标系统，主要用来如何定位坐标和长度。一个HTML元素的坐标和CSS的盒模型有关，但不同的是SVG元素没有这样的盒模型。

对于CSS盒子的布局，用户的坐标原点就在盒子的左上角，而且一个单位就是一个像素，视窗也可以根据盒子的宽度按百分比计算。我想你对这方面应该非常的熟悉。如果你有一个`<clipPath>`元素包含了一个`<circle>`，而且这个`<circle>`的中心点在`cx=100`和`cy=100`。那么这个中心点就是距盒子左边100px和顶边100px的交汇处。

如果元素是一个SVG元素，因此他是没一个类似于CSS盒模型的东西，用户的坐标原点是距`<svg>`元素视窗左上角最近的一个地方。一般情况之下，最近的视窗的建立，他的宽度和高度接近于`<svg>`的祖先元素。如果你不嵌套`<svg>`元素，它就是你创建的`<svg>`元素。

注意，SVG元素的坐标系统可以使用`viewBox`属性进行修改，其他属性可能有助于改变坐标系统。这一部分的内容超出了本文的内容范围。所以在本文中，我假设`viewBox`没有进行过任何的修改。因此浏览器使用的默认坐标系统原点是在`<svg>`元素的左上角，大小也等于`<svg>`元素。

#### `objectBoundingBox`

坐标系统的原点是在元素的边框盒子的左上角顶点处，同样适于剪切路径。这个边框是SVG元素对象的边框(它只是包含了一个或多个几何图形形状)和一个HTML元素设置`border-box`的盒模型是相关联的。

这个值对`SVG`元素非常有用，因为它允许你应用的元素自身的边界做为剪切路径。下图显示一个图像应用SVG的剪切路径显示的效果，他们分别使用了`userSpaceOnUse`和`objectBoundingBox`。灰色的边框表示的是`SVG`元素创建的一个视窗。右图中的图像，我添加了一个灰色的边框用来表示剪切后的图像边框。

![CSS和SVG中的剪切](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1407/clip-path-9.jpg)

在左图中，剪切路径的坐系统定位在SVG的视窗上。当使用了`objectBoundingBox`属性之后，图像自身的边框就会做为剪切路径的坐标系统。

有一点需要特别的注意：**当你设置了`objectBoundingBox`值后，`<clipPath>`元素中的内容必须在指定的坐标[0,1]内。**坐标系统将成为一个单元系统，剪切出来的形状都在这个`clipPath`分值内。

![CSS和SVG中的剪切](http://www.w3cplus.com/sites/default/files/styles/print_image/public/blogs/2014/1407/clip-path-10.jpg)

例如，如果剪切路径包含一个`<circle>`元素，而且他定位在圆的中心上：

```html
<clipPath>
    <circle cx="350" cy="350" r="300" />
</clipPath>
```

圆的位置(半径)会用分数表示：

```html
<clipPath clipPathUnits="objectBoundingBox">
    <circle cx=".5" cy=".5" r=".45" />
</clipPath>
```

在这种情况下，分数就像百分比。

### `<clipPath>`笔记

`<clipPath>`元素不会直接在页面上呈现，他唯一的作用就是可以通过`clip-path`来引用。`display`属性不能运用于`<clipPath>`元素上，因此，就算`display`设置`none`外的其他值，`<clipPath>`元素也不会直接呈现。

还记得我前面提到HTML元素剪切后的鼠标事件吗？相同的标准定义的行为却不同。鼠标事件在SVG的剪切区域外是无效。规范后面提到，可以让SVG定义新属性来控制剪切。

Firefox浏览器实现了相同非标准行为，在剪切区域之外不支持鼠标事件。

尽管Chrome为HTML元素的`clip-path`属笥实现标准行为，当你在一个`<svg>`元素上使用`<clipPath>`时，实现的行为是一样的。只有Firefox在可视区域能响应鼠标事件，我不知道这是一个特性还是一个Bug。

在接下来的示例中，一个SVG的`<clipPath>`应用在一个SVG的`<image>`上。这个剪切路径我们前面使用过，图像剪成很多个矩形。当你的鼠标悬浮在图像上，图像具有一定的透明度。

```css
image {
    clip-path: url(#svgPath);
}
image:hover {
    opacity: .5;
}
```

[查看DEMO](http://codepen.io/airen/pen/iDHfn)

请注意，一个空的剪切路径同样会被`clip-path`应用在元素上。

## 总结

剪切是一种图形化操作，允许我们在一个矩形的页面中创建不规则图形。实际上剪切和CSS的Shapes是一对完美的搭档。如果你有阅读过我[早前写的关于CSS的Shapes的文章](http://alistapart.com/article/css-shapes-101)，你就会看到很多实例中使用了`clip-path`属性。一旦CSS的Shapes可以[运用于SVG的路径上](http://dev.w3.org/csswg/css-shapes-2/#referencing-svg-shapes)（[CSS Shapes Module Level 2](http://dev.w3.org/csswg/css-shapes-2/)）,除了CSS的基本形状之外，CSS的Shapes和剪切配合可以让我们在视觉上制作出引人注目的设计，打破矩形的限制。

著作权归作者所有。
商业转载请联系作者获得授权,非商业转载请注明出处。
原文: https://www.w3cplus.com/css3/css-svg-clipping.html © [w3cplus.com](https://www.w3cplus.com/)