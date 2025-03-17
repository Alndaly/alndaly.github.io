---
title: 前端调试
---

:::tip
Chrome小技巧：关于Chrome能够进行强制刷新的条件，打开控制台。

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202209141807718.png)
:::

## 使用 Command

:::info
我们直接可以直接看到的 `DevTools` 的功能，其实只是有限的一部分，怎么去探索更多的功能呢？

Command 菜单可以帮助我们快速找到那些被隐藏起来的功能，这也是它本身必不可少的原因。

如果你使用过 `WebStorm` 中的 `Find Action` (查找动作) 或者 `Visual Studio Code` 中的 `Command Palette` 的话，那么在 `DevTools` 中的 `Command` 菜单也与之类似
在 `Chrome` 的调试打开的情况下 按下 `[Ctrl]+[Shift]+[P]` (Mac:`[⌘]+[Shift]+[P]` )
:::

### 截屏的新姿势

当你只想对一个特别的 `DOM` 节点进行截图时，你可能需要使用其他工具弄半天，但现在你直接选中那个节点，打开 `Command` 菜单并且使用 节点截图 的就可以了。

不只是这样，你同样可以用这种方式 全屏截图 - 通过 `Capture full size screenshot` 命令。请注意，这里说的是全屏，并不是嵌入页面的一部分。一般来说这可是得使用浏览器插件才能做到的事情！

:::caution
节点截图有时会失效，全屏截图暂时没有遇到问题，建议大家使用后者。
:::

### 快速切换面板

`DevTools` 使用双面板布局，形式一般是：元素面板 + 资源面板 ，它根据屏幕可用的部分，经常将不同面板横向或者纵向的排列，以适合阅读的方式展示出来。但有时候我们并不喜欢默认的布局。

你是否想过要重置 Dev`Tools 呢？将 样式面板 从 html预览 的底部移动到右边或者周围其他的位置呢？是的，这就是下面要介绍的 😉

打开 `Commands` 菜单并且输入 `layout` ，你会看到 2 到 3 个可供选择的项(这里不再显示你已经激活的选项)：

- 使用横向面板布局
- 使用纵向面板布局
- 使用自动面板布局

### 快速切换主题

经常在电脑前一坐就是一天，所以我不能忍受一直看着白闪闪的屏幕。而且突然出现的强光也让人讨厌：我们一直都在黑暗的空间中工作，突然太阳出来了，照在你的 `DevTools` 上，导致你什么都看不到！

这个时候主题就派上了用场了：在`Commands`菜单中寻找与`theme`相关的选项，实现明亮&暗黑两种主题之间的切换：

## `console` 中的 `$`

`$` 作为 `jQuery` 的选择器，承载了一代前端的太多记忆，但是你可能没有想到的是，在我们使用 `Dev Tools` 进行调试的时候，`$` 也有大放异彩的一天呢？

### `$0`

在 `Chrome` 的 `Elements` 面板中， `$0` 是对我们当前选中的 `html` 节点的引用。

理所当然，`$1` 是对上一次我们选择的节点的引用，`$2` 是对在那之前选择的节点的引用，等等。一直到 `$4`

你可以尝试一些相关操作(例如: `$1.appendChild($0)`)

![](https://img-blog.csdnimg.cn/img_convert/5ad1e56d5c42ce5466600c4b8f8e8885.gif)

### `$`字符

如果你没有在 -  中定义过 `$` 变量 (例如 `jQuery` )的话，它在 `console` 中就是对这一大串函数 `document.querySelector` 的别名。

### `$_`

调试的过程中，你经常会通过打印查看一些变量的值，但如果你想看一下上次执行的结果呢？再输一遍表达式吗？

这时候 `$_` 就派上了用场，`$_` 是对上次执行的结果的引用 ：

![](https://img-blog.csdnimg.cn/img_convert/0bca807d9deec05255ce85ecebe7152b.png)

### `$i`

现在的前端开发过程，离不开各种 `npm` 插件，但你可能没有想过，有一天我们竟然可以在 `Dev Tools` 里面来使用 `npm` 插件！

有时你只是想玩玩新出的 `npm` 包，现在不用再大费周章去建一个项目测试了，只需要在 Chrome插件: [Console Importer](https://chrome.google.com/webstore/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie/related) 的帮助之下，快速的在 `console` 中引入和测试一些 npm 库。

运行 `$i('lodash')` 或者 `$i('moment')` 几秒钟后，你就可以获取到 `lodash` / `momentjs` 了:

![](https://img-blog.csdnimg.cn/img_convert/3d024f732fa38e7e8d0e3797aeaf6e6b.gif)

## 条件断点

这样的情况下，你可以设置一个条件断点：

- 右击行号，选择 `Add conditional breakpoint`(添加条件断点)

- 或者右击一个已经设置的断点并且选择 `Edit breakpoint`(编辑断点)

- 然后输入一个执行结果为 `true` 或者 `false` 的表达式（它的值其实不需要完全为 `true` 或者 `false` 尽管那个弹出框的描述是这样说的）。

在这个表达式中你可以使用任何这段代码可以获取到的值（当前行的作用域）。

如果条件成立，这个断点就会暂停代码的执行：

![](https://img-blog.csdnimg.cn/img_convert/db0ad6b7bf07a12f1d470ef124aec1c3.gif)

## `copying` & `saving`

### `copy(...)`

你可以通过全局的方法 `copy()` 在 `console` 里 `copy` 任何你能拿到的资源，包括我们在后面会提到的那些变量。例如 `copy($_)` 或 `copy($0)`

### `Store as global` (存储为一个全局变量)

如果你在 `console` 中打印了一堆数据 (例如你在 `App` 中计算出来的一个数组) ，然后你想对这些数据做一些额外的操作比如我们刚刚说的 `copy` (在不影响它原来值的情况下) 。 那就可以将它转换成一个全局变量，只需要 右击 它，并选择 `Store as global variable` (保存为全局变量) 选项。

第一次使用的话，它会创建一个名为 `temp1` 的变量，第二次创建 `temp2，第三次` … 。通过使用这些变量来操作对应的数据，不用再担心影响到他们原来的值:

![](https://img-blog.csdnimg.cn/img_convert/8cafc1aee91a315c3452cc838dca66b1.gif)

### 保存堆栈信息( `Stack trace` )

大多数情况下都不是一个人开发一个项目，而是一个团队协作，那么 如何准确的描述问题，就成为了沟通的关键 ，这时候 `console` 打印出来的堆栈跟踪的信息对你和同事来说就起大作用了，可以省去很多沟通成本，所以你可以直接把堆栈跟踪的信息保存为一个文件，而不只是截图发给对方：

![](https://img-blog.csdnimg.cn/img_convert/1bd259b360c222571b0ef630e32395db.gif)

### 直接`Copy HTML`

几乎所有人都知道，右击或者点击在 `HTML` 元素边上的省略号 (…) 就可以将它 `copy` 到剪贴板中，但是你不知道的是：古老的`[ctrl]+[c]`大法依旧可用！

### `console`中骚操作

我最开始接触前端的时候，学会用的就是 `console.log` ，甚至现在，大部分情况也还在用它调试，但是，在不同的场景下，除了 `log` ，其实有更好的选择。

#### `console.assert`

在 MDN 中是这样定义的

```JavaScript
console.assert(assertion, obj1 [, obj2, ..., objN]);
console.assert(assertion, msg [, subst1, ..., substN]); // c-like message formatting
```

当我们传入的第一个参数为 假 时，`console.assert` 打印跟在这个参数后面的值。

这个方法适用于什么情况呢？举个栗子：

通过它，你可以摆脱令人讨厌的 `if` 表达式，还可以获得堆栈信息。

请注意，如果你使用的 `NodeJS` 版本 ≤ 10.0 ， `console.assert` 可能会中断后面代码的执行，但是在 .10 的版本中被修复了(当然，在浏览器中不存在这个问题)

#### 增强 `log` 的阅读体验

有时即使你 `console.log` 一个简单的变量，你可能会忘记（或混淆）哪一个是那个。那当你有不同的变量需要打印的时候，阅读起来会更费劲。

假如有这么一堆你想要输出但看起来并不易读的数据

“哪一个值对应哪一个变量来着？”

为了让它变得更加易读，你可以打印一个对象 - 只需将所有 `console.log` 的参数包装在大括号中。感谢 `ECMAScript 2015` 中引入了` enhanced object literal`(增强对象文字面量) ，所以加上 `{}` 已经是你需要做的全部事情了：

#### `console.table`

`console.table` 这个小技巧在开发者中可能并没有多少人知道: 如果有一个 数组 (或者是 类数组 的对象，或者就是一个 对象 )需要打印，你可以使用 `console.table` 方法将它以一个漂亮的表格的形式打印出来。它不仅会根据数组中包含的对象的所有属性，去计算出表中的列名，而且这些列都是可以 缩放 甚至 还可以排序!!!

如果你觉得展示的列太多了，使用第二个参数，传入你想要展示的列的名字:

对于后台而言，只有 `node` 版本大于 10 以上， `console.table` 才能起作用

#### `console.dir`

有时候你想要打印一个 `DOM` 节点。 `console.log` 会将这个交互式的元素渲染成像是从 Elem`ents 中剪切出来的一样。如果说你想要查看 这个节点所关联到的真实的js对象 呢？并且想要查看他的 属性 等等？

在那样的情况下，就可以使用`console.dir`:

#### 给 `logs` 加上时间戳

我们总是需要打印各式各样的信息，之前我们讨论了如何让输出的信息更加直观，但是如果我们需要打印相关的时间信息呢？这就用到了计时的相关操作。

如果你想要给你的应用中发生的事件加上一个确切的时间记录，开启 `timestamps` 。你可以在设置(在调试工具中的 `⋮` 下拉中找到它，或者按下 `F1` )中来开启或者使用 `Commands Menu`：

#### 给你的 `console.log` 加上 `CSS` 样式

如果你给打印文本加上 `%c` 那么 `console.log` 的第二个参数就变成了`CSS` 规则！这个特性可以让你的日志脱颖而出(例如 `Facebook` 在你打开 `console` 的时候所做的一样)

```JavaScript
let str='stop'
console.log(`%c${ str }`,'color:red;font-size:36px')
```

#### 使用实时表达式

在本文形成的不久前，`DevTools` 在 `Console` 面板中引入了一个非常漂亮的附加功能，这是一个名为 `Live expression` 的工具

只需按下 “眼睛” 符号，你就可以在那里定义任何 `JavaScript` 表达式。 它会不断更新，所以表达的结果将永远，存在 😃

同时支持定义好几个：

```JavaScript
onclick = e => console.log(e)
```

## 元素面板

### 通过 `h` 来隐藏元素

按一下`h`就可以隐藏你在元素面板中选择的元素。再次按下`h`可以使它出现。某些的时候这很有用：例如你想截图，但你想去掉里面的敏感信息。

### 拖动 & 放置 元素

当你想看看页面的某一部分在 `DOM` 树的不同位置的显示效果时，只需要拖动放置它(到指定的位置)，就像在机器上的其他任何地方一样 😃

### 使用 `control` (按钮) 来移动元素!

如果你只是想移动你当前选中的元素，在 DOM 结构中往上挪一点或者往下挪一点，而不是拖动和放置，你同样可以使用`[ctrl]+[⬆]`/`[ctrl]+[⬇]` (`[⌘]+[⬆]`/`[⌘]+[⬇]`on Mac).

### 元素面板中类似于基础编辑器的操作

从某一点来看，我们可以拖动，放置，编辑，复制(当然，以及使用 `[ctrl]+[v]` 来粘贴)， 所以我们可以在元素面板里把 HTML 结构搞得一团糟。在任意一个编辑器中都有一个标准，那么如何撤回你的操作呢？

使用`[ctrl]+[z]`(`[⌘]+[z]` on Mac)撤销我们的任何改动。 使用`[ctrl]+[shift]+[z]`重新编辑我们的任何修改。

### `Shadow editor` 阴影编辑器

可以通过在 `Style` 面板中点击靠近 `box-shadow` 属性或者 `text-shadow` 属性的 阴影方形符号 来打开它

### `Timing function editor` 定时函数编辑器

也称为 `Cubic bezier`(贝塞尔) 编辑器。贝塞尔曲线是一串用来定义 `CSS` 的动画速度在整个动画过程中如何变化的 魔法数值 。我们将其定义为 `transition-timing-function` 或者 `animation-timing-function` `CSS` 属性。

像之前说的 `Color picker` 和 `Shadow editor` 一样，直接点击我们刚刚提到的属性(`或者他们的简写形式：trasition，` `animation` - `请注意：如果timing` 函数的值没有设置在这个简写的形式中，这个符号不会显示出来)边上的曲线符号：

### 在元素面板中展开所有的子节点

一个一个的去点击级联的 `▶` 按钮太慢了，不如使用右击节点后的 `expand recursively` 命令：

### 查看元素伪类 `css` 样式

例如我想查看元素触发 `hover` 时的 `css` 样式。先选中该元素，然后按下图操作：

![](https://img-blog.csdnimg.cn/198dd02ad8974086a230199b0d1a04b3.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAL17or7fovpPlhaXmmLXnp7AkLw==,size_12,color_FFFFFF,t_70,g_se,x_16)

### `contentEditable=“true”`

在控制台输入 `document.body.contentEditable="true"`，就可以对页面直接进行编辑。

![](https://img-blog.csdnimg.cn/a628f57615f44941bd2903a05eeec9f4.gif)

### 查看 `placeholder` 样式

![](https://img-blog.csdnimg.cn/3df1dcab2a8c404094a13df67f8df263.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAL17or7fovpPlhaXmmLXnp7AkLw==,size_10,color_FFFFFF,t_70,g_se,x_16)

![](https://img-blog.csdnimg.cn/20875a70ba0c44ac90577f4a5f5fd8a4.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAL17or7fovpPlhaXmmLXnp7AkLw==,size_17,color_FFFFFF,t_70,g_se,x_16)

现在可以查看元素的 `placeholder` 样式了：

![](https://img-blog.csdnimg.cn/bec52ca14dda44038947a45b2afc97fd.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAL17or7fovpPlhaXmmLXnp7AkLw==,size_20,color_FFFFFF,t_70,g_se,x_16)

###  查看元素绑定事件

鼠标移到 `handler` 上，可查看具体的函数代码。

![](https://img-blog.csdnimg.cn/img_convert/abd8ebea8cd6896ca0c198e41fe8bd51.png)

## `Workspace` 技巧

### 在 `Chrome` 中修改你的文件

有时在代码执行的位置也是最容易编辑代码的位置（对于前端来说也就是浏览器）。如果你把项目的文件夹直接拖到 `Source` `面板，DevTools` 会将你做出的修改同步到系统的文件中。

### `Workspace` 支持即时同步样式

正如我们刚才所说，一旦设置好了 `DevTools workspace`，就可以在 `Sources` 面板中编辑 `HTML` 和 `JavaScript`（或者甚至是 `TypeScript`，如果你有`sourcemaps`）文件，按 `ctrl + s` 后它将被保存 在文件系统中。

但是在样式方面它提供了更好的支持。 因为即使你只是在 “元素” 面板的 “样式” 部分中编辑样式规则，它也会立即同步。

### 为新选择器选择目标位置

如果要向现有选择器添加新样式，很容易：只需在 “元素” 面板的 “样式” 部分中找到该选择器，然后开始编写 `CSS。` 但如果还没有这样的选择器，则需要按下`New Style Rule` 按钮。

当你使用工作区时，新样式规则的默认定位为 - `inspector-stylesheet：1` 如果你不想规则在这个位置显示，只需按住 `New Style Rule` 按钮，就可以看到一个列出所有 CSS 文件的选项。选择目的地，新规则就会保存在那里！

### `Workspace` 允许 `CSS` 注入！

设置工作区后，浏览器中所做的更改不仅会持久的保存到文件系统中，而且，CSS 的更改保存在文件系统后，立即就被浏览器选中并显示在你的页面上。并不需要手动刷新。

敲黑板：我们 没有使用额外的工具 - 没有 `webpack` 的热更新模块或者其他东西 - 只有一个本地服务以及 `DevTools workspace` 而已。

## `Drawer` 常识

:::tip

说到 `Drawer` 大部分的朋友可能都很陌生，那 `Drawer` 是个什么东西？ `Chrome DevTools` 有很多部分，被分为9个 `tab` (俗称选项卡) ( `Elements` ， `Console` ， `Sources` ， `Network` ， 等等…)

:::

但是，那仅仅是它的一部分而已！有一组平行的选项卡，被隐藏在主窗口之下。这个组合被称为 `Drawer`

### 如何打开 `Drawer` ?

当你在 `DevTools（任何选项卡）中时，按` `[esc]` 来显示它，再次按 `[esc]` 隐藏它：

默认情况下，您会看到一个 `console` 选项卡。 与主面板的 `console` 完全相同。 这就是为什么主面板会显示除了 console 之外的每个主要标签（ `Elements` `，Sources` `，Network` …）- 因为在主面板中显示 `console` 没有意义。

这样的`console`很方便，例如在 `Elements` 选项卡打开时，我们同时可以看到 `console` 面板。但是在 `Drawer` 中其实还隐藏了更多细节。

### 检查代码 `coverage`

`DevTools`的`coverage`工具可以跟踪当前加载的`JS` 和 `CSS` 文件的哪些行正在被执行，并显示未使用字节的百分比 。

它用绿色的线条标记运行和用红色的线条标记未运行 。 举个例子：

### 检查你修改的内容

通过浏览器进行设计和调整 `css` ：能够在代码执行的地方进行调试是方便又有趣的开发方式。 但在某些时候，你可能希望将 已更改的内容 与 最初加载的样式表 进行比较。

![](https://img-blog.csdnimg.cn/22b594043cae4f9abbcce7fcbe8c2a9f.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAL17or7fovpPlhaXmmLXnp7AkLw==,size_19,color_FFFFFF,t_70,g_se,x_16)

## `Network` 的骚操作

### 隐藏 `network overview`

你经常查看 `Network` 面板是为了:

我想看看请求的时间轴信息

我就想看看请求列表- 确认下请求状态，资源大小和响应结果呢

我赌你是后者，如果是这样，那么 `Overview` 的部分就没有任何理由占用 `Network` 接近一半的空间

如果没有 `timeline` 我们可以点击右上角的`☀`来关闭`overview`

![](https://img-blog.csdnimg.cn/821727adf0e242c18a466783cf64c85e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAL17or7fovpPlhaXmmLXnp7AkLw==,size_20,color_FFFFFF,t_70,g_se,x_16)

### 请求过滤

`Network` 面板中的过滤器输入框接受字符串或正则表达式，对应显示匹配的请求。 但是你也可以使用它来过滤很多属性。

只需输入 例如 `method` 或者 `mime-type` :

如果想要显示所有可能的关键字，在空白的输入框按下 `[ctrl] + [space]`

### 自定义请求表

在请求表中，你可以看到有关每个请求的几条信息，例如：`Status`， `Type`， `Initiator`， `Size` 和 `Time`。但是你同样可以添加更多(例如 我经常添加 `Method`)。更多：

![](https://img-blog.csdnimg.cn/80ded0545f6b4ada92027989e2033488.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAL17or7fovpPlhaXmmLXnp7AkLw==,size_19,color_FFFFFF,t_70,g_se,x_16)

你可以添加所有 `Network` 面板里展示出来的信息。

要自定义显示哪些列，右键单击请求表标题上的任意位置。

请注意，`Response Headers` 是一个有更多选项的完整的子菜单，甚至可以定义你自己的选项。

### 重新发送 `XHR` 的请求

如何重新发送 `XHR` 的请求？刷新页面？太老套了，试试这么做：

![](https://img-blog.csdnimg.cn/e8c3049b47364a4ab8b9bc5c4d147d8c.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAL17or7fovpPlhaXmmLXnp7AkLw==,size_14,color_FFFFFF,t_70,g_se,x_16)