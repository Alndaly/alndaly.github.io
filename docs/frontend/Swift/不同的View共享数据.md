:::note
注意，struct本身属性正常情况下是不可被更改的（除了mutating前缀）。

双向绑定实际上是swift检测到对应struct的属性变了以后重新渲染整个struct，这听起来很浪费性能但实际上非常快速。

如果在不同的View中共享相同的数据使用@State的话，那么每个View中将会都新建一个Struct对应的属性，故而不同View中的数据是不互通的。

此时需要改为Class，因为Class中的属性是可以修改的，即使是常量也可以被修改。
:::

## 给需要被共享的数据增加`@Published`，同时让struct实现`ObservableObject`协议

```swift
class User: ObservableObject {
    @Published var firstName = "Bilbo"
    @Published var lastName = "Baggins"
}
```

## 给View中的变量属性增加`@StateObject`

```swift
@StateObject var user = User()
```

## 实例

```swift
class User: ObservableObject {
    var firstName = "Bilbo"
    var lastName = "Baggins"
}

struct ContentView: View {
    @StateObject var user = User()

    var body: some View {
        VStack {
            Text("Your name is \(user.firstName) \(user.lastName).")

            TextField("First name", text: $user.firstName)
            TextField("Last name", text: $user.lastName)
        }
    }
}

```

## 嵌套使用

在不同的View中如果要直接使用`@StateObject var user = User()`属性的话，那需要的包装器应该用`@ObservedObject`。