## 基础使用

```swift
@State private var username = ""

...
TextField("请输入用户名", text: $username)
    .font(.custom("LXGWWenKaiGBScreen", size: 15))
...
```

## 进阶使用

```swift
@State private var username: String = ""
@FocusState private var emailFieldIsFocused: Bool = false

var body: some View {
    TextField(
        "User name (email address)",
        text: $username
    )
    .focused($emailFieldIsFocused) // 聚焦状态
    .onSubmit {
        validate(name: username)
    } // 提交事件
    .textInputAutocapitalization(.never) // 取消自动大写
    .disableAutocorrection(true) // 取消自动纠正
    .border(.secondary) // 边框

    Text(username)
        .foregroundColor(emailFieldIsFocused ? .red : .blue)
}
```