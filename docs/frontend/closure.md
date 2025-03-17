---
title: 闭包
---

## 词法作用域

在JavaScript中，每个运行的函数，代码块 `{...}` 以及整个脚本，都有一个被称为词法环境（Lexical Environment）的内部（隐藏）的关联对象。

词法环境对象由两部分组成：

- 环境记录（Environment Record），一个存储所有局部变量作为其属性（包括一些其他信息，例如this的值）的对象。
- 对外部词法环境的引用，与外部代码相关联。

一个“变量”只是环境记录这个特殊的内部对象的一个属性。“获取或修改变量”意味着“获取或修改词法环境的一个属性”。

## 例子

```js
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.log(counter()); //1
console.log(counter()); //2
console.log(counter()); //3

let counter1 = makeCounter();
console.log(counter1()); //1

```

## 解释

![202211251729758](https://oss.kinda.info/image/202211251729758.png)

在脚本开始运行时，词法环境已经预先填充了所有声明的变量，但是普通的变量（通过`let`、`const`、`var`等声明的）会处于一个`Uninitialized`的状态。这是一种特殊的内部状态，这意味着引擎知道变量，但是在用let声明前，不能引用它。几乎就像变量不存在一样。在let等出现了之后，他才被赋予了一个`undefined`的状态，此时便可以使用了。

在一个函数运行时，在调用刚开始时，会自动创建一个**新的词法环境**以存储这个调用的局部变量和参数。

`counter.[[Environment]]` 有对 `{count: 0}` 词法环境的引用。这就是函数记住它创建于何处的方式，与函数被在哪儿调用无关。`[[Environment]]` 引用在函数创建时被设置并**永久保存**。

当后续多次调用`counter`时，由于对应的词法环境对象（`counter`）依然可达，所以在内存中依然存在，故而count的值依然保持着加一后的数值。

只有在counter被清理了之后，对应内存才会被清理。

```js
counter = null;
```

当调用 `counter()` 时，会为该调用创建一个新的词法环境，并且其外部词法环境引用获取于 `counter.[[Environment]]`。

所以`counter`和`couter1`所拥有的词法环境是不一样的，故而对`count`有不一样的引用。