---
title: Button组件
---

## 基础用法

```swift
Button {
    print("...")
    // more actions
} label: {
    Text("Button Label")
}
```

## 修改样式

```swift
Button {
    print("...")
    // more actions
} label: {
    Text("Button Label")
}
    .font(.system(size: 17)) // 字体大小
    .foregroundColor(.black) // 字体颜色
    .bold() // 字体加粗
    .frame(minWidth: 0, maxWidth: .infinity)  // 元素大小
    .background(.white)  // 按钮背景色
    .cornerRadius(8)  // 按钮圆弧
```