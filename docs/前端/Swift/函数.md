---
title: Swift函数
---

## 函数定义

```swift
func funcname([key]:[value]) -> returntype
{
   Statement1
   Statement2
   ……
   Statement N
   return parameters
}
```

示例：

```swift
func runoob(site: String) -> String {
    return (site)
}
print(runoob(site: "www.runoob.com"))
```

## 函数参数

```swift
func runoob(name: String, site: String) -> String {
    return name + site
}
print(runoob(name: "菜鸟教程：", site: "www.runoob.com"))
print(runoob(name: "Google：", site: "www.google.com"))
```

## 不带参数的函数

```swift
func funcname() -> returntype {
   return data
}
```

## 元组作为函数返回值

:::note
元组与数组类似，不同的是，元组中的元素可以是任意类型，使用的是圆括号。
:::

```swift
func minMax(array: [Int]) -> (min: Int, max: Int) {
    var currentMin = array[0]
    var currentMax = array[0]
    for value in array[1..<array.count] {
        if value < currentMin {
            currentMin = value
        } else if value > currentMax {
            currentMax = value
        }
    }
    return (currentMin, currentMax)
}

let bounds = minMax(array: [8, -6, 2, 109, 3, 71])
print("最小值为 \(bounds.min) ，最大值为 \(bounds.max)")
```

:::caution
可选元组类型如(Int, Int)?与元组包含可选类型如(Int?, Int?)是不同的.可选的元组类型，整个元组是可选的，而不只是元组中的每个元素值。
:::

## 没有返回值函数

```swift
func runoob(site: String) {
    print("菜鸟教程官网：\(site)")
}
runoob(site: "http://www.runoob.com")
```

## 函数参数名称

### 内部参数名

```swift
func sample(number: Int) {
   println(number)
}
```

### 外部参数名

```swift
func pow(firstArg a: Int, secondArg b: Int) -> Int {
   var res = a
   for _ in 1..<b {
      res = res * a
   }
   print(res)
   return res
}
pow(firstArg:5, secondArg:3)
```

:::caution
如果提供了外部参数名，那么函数在被调用时，必须使用外部参数名。
:::

## 可变参数(...)

可变参数可以接受零个或多个值。函数调用时，你可以用可变参数来指定函数参数，其数量是不确定的。

可变参数通过在变量类型名后面加入（...）的方式来定义。

```swift
func getMember<N>(member: N...){
    print(member)
}
getMember(member: "das","dasq","dasdas")
```

## 常量，变量及I/O参数

一般默认在函数中定义的参数都是常量参数，也就是这个参数你只可以查询使用，不能改变它的值。
如果想要声明一个变量参数，可以在**参数定义前**加 inout 关键字，这样就可以改变这个参数的值了。

```swift
func getName(_ name: inout String){

}
```

:::info
一般默认的参数传递都是传值调用的，而不是传引用。所以传入的参数在函数内改变，并不影响原来的那个参数。传入的只是这个参数的副本。

当传入的参数作为输入输出参数时，需要在参数名前加`&`符，表示这个值可以被函数修改。（**可以理解为`&x`是对x的引用而不是复制了x**）
:::

示例：

```swift
func swapTwoInts(_ a: inout Int, _ b: inout Int) {
    let temporaryA = a
    a = b
    b = temporaryA
}


var x = 1
var y = 5
swapTwoInts(&x, &y)
print("x 现在的值 \(x), y 现在的值 \(y)")
```

## 函数类型及使用

在 Swift 中，使用函数类型就像使用其他类型一样。例如，你可以定义一个类型为函数的常量或变量，并将适当的函数赋值给它：

```swift
var addition: (Int, Int) -> Int = sum
```

解析:

"定义一个叫做 addition 的变量，参数与返回值类型均是 Int ，并让这个新变量指向 sum 函数"。

sum 和 addition 有同样的类型，所以以上操作是合法的。

现在，你可以用 addition 来调用被赋值的函数了：

```swift
func sum(a: Int, b: Int) -> Int {
   return a + b
}
var addition: (Int, Int) -> Int = sum
print("输出结果: \(addition(40, 89))")
```

## 函数类型作为参数类型、函数类型作为返回类型

```swift
func sum(a: Int, b: Int) -> Int {
    return a + b
}
var addition: (Int, Int) -> Int = sum
print("输出结果: \(addition(40, 89))")

func another(addition: (Int, Int) -> Int, a: Int, b: Int) {
    print("输出结果: \(addition(a, b))")
}
another(addition: sum, a: 10, b: 20)
```

## 函数嵌套

```swift
func calcDecrement(forDecrement total: Int) -> () -> Int {
   var overallDecrement = 0
   func decrementer() -> Int {
      overallDecrement -= total
      return overallDecrement
   }
   return decrementer
}
let decrem = calcDecrement(forDecrement: 30)
print(decrem())
```