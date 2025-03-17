---
title: List组件
---

### 基础用法

```swift
List{
    Text("列表的第一项")
    Text("列表的第二项")
}
```

![](https://oss.kinda.info/image/202212112113167.png)

### 我们也可以在List中配合ForEach生成列表

```swift
List{
    Text("Static row 1")
    Text("Static row 2")

    ForEach(0..<5) {
        Text("Dynamic row \($0)")
    }

    Text("Static row 3")
    Text("Static row 4")
}
```

![](https://oss.kinda.info/image/202212112117372.png)

### List配合Section可以形成分块的列表

```swift
 List{
    Section("Section 1") {
        Text("Static row 1")
        Text("Static row 2")
    }

    Section("Section 2") {
        ForEach(0..<5) {
            Text("Dynamic row \($0)")
        }
    }

    Section("Section 3") {
        Text("Static row 3")
        Text("Static row 4")
    }
}
```

![](https://oss.kinda.info/image/202212112122292.png)

### List结合对象数组

#### 外层直接传参数

```swift
let names = ["lina", "kinda", "dona", "hack"]
```

```swift
List(names, id: \.self){
    Text($0)
}
```

![](https://oss.kinda.info/image/202212112128448.png)

#### 内层ForEach使用

```swift
let names = ["lina", "kinda", "dona", "hack"]
```

```swift
List{
    Text("First one")
    ForEach(names, id: \.self){
        Text($0)
    }
    Text("Seconnd one")
}
```

![](https://oss.kinda.info/image/202212112136247.png)

#### 修改外观样式触边

```swift
List(names, id: \.self){
    Text($0)
}
.listStyle(.grouped)
```

![](https://oss.kinda.info/image/202212112133505.png)