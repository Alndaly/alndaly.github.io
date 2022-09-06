---
title: Swift发送网络请求
tags: [swift, url]
categories:
    - [技术]
description: ios开发文档
---

:::info

现有的版本苹果推荐使用 NSURLSession 来替换 NSURLConnection 完成网路请求相关操作.NSURLSession 的使用非常简单，先根据会话对象创建一个请求 Task，然后执行该 Task 即可。 

:::

## URL+URLSession

### 例子

```swift
import SwiftUI
import CoreData
let url = URL(string: "https://api.muxiaoguo.cn/api/yiyan?api_key=c589aa12a29b1360&")!

let task = URLSession.shared.dataTask(with: url) {(data, response, error) in
    guard let data = data else { return }
    print(String(data: data, encoding: .utf8)!)
}

task.resume()
```

## 发送请求

1. 确定请求路径
2. 创建请求对象
3. 创建会话对象
4. 根据会话对象创建请求任务
5. 执行 Task
6. 当得到服务器返回的响应后，解析数据（XML|JSON|HTTP）

### 发送GET请求

#### 示例代码

```swift

```

### 发送POST请求

#### 示例代码

```swift
```

