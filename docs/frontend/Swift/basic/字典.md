---
title: Swift字典
description: swift字典相关的方法
---

:::info
Swift字典用来存储无序的相同类型数据的集合，会强制检测元素的类型，如果类型不同，则会报错。

Swift字典每个值（value）都关联唯一的键（key），键作为字典中的这个值数据的标识符。
:::

## 创建字典

```swift
var someDict = [KeyType: ValueType]()
```

示例：

```swift
var someDict:[Int: String] = [1: "One", 2: "Two", 3: "Three"]
```

## 访问字典

```swift
var someVar = someDict[key]
```

## 修改字典

**注意，updateValue函数返回的是原先的字典对象**

```swift
var someDict:[Int: String] = [1: "One", 2: "Two", 3: "Three"]
someDict.updateValue("One 新的值", forKey: 1)
```

也可以通过指定的key来修改字典的值

```swift
var someDict:[Int: String] = [1: "One", 2: "Two", 3: "Three"]
someDict[1] = "One 新的值"
```

## 移除Key-Value对

**注意，removeValue函数返回的是被删除的那个Value**

```swift
var someDict:[Int:String] = [1:"One", 2:"Two", 3:"Three"]
var removedValue = someDict.removeValue(forKey: 2)
```

## 遍历字典

```swift
var someDict:[Int:String] = [1:"One", 2:"Two", 3:"Three"]

for (key, value) in someDict {
   print("字典 key \(key) -  字典 value \(value)")
}
```

## 字典转换成数组

```swift
var someDict:[Int:String] = [1:"One", 2:"Two", 3:"Three"]

let dictKeys = [Int](someDict.keys)
let dictValues = [String](someDict.values)

print("输出字典的键(key)")

for (key) in dictKeys {
    print("\(key)")
}

print("输出字典的值(value)")

for (value) in dictValues {
    print("\(value)")
}
```

## 字典有多少个键值对(`Count`属性)

```swift
var someDict1:[Int:String] = [1:"One", 2:"Two", 3:"Three"]
var someDict2:[Int:String] = [4:"Four", 5:"Five"]

print("someDict1 含有 \(someDict1.count) 个键值对")
print("someDict2 含有 \(someDict2.count) 个键值对")
```

## 判断字典是否为空

```swift
var someDict1:[Int:String] = [1:"One", 2:"Two", 3:"Three"]
var someDict2:[Int:String] = [4:"Four", 5:"Five"]
var someDict3:[Int:String] = [Int:String]()

print("someDict1 = \(someDict1.isEmpty)")
print("someDict2 = \(someDict2.isEmpty)")
print("someDict3 = \(someDict3.isEmpty)")
```