## UserDefault

### 设置值

```swift
UserDefaults.standard.set(encoded, forKey: "Items")
```

### 取出值

```swift
UserDefaults.standard.data(forKey: "Items")

// if it's an integer type, we can also use this way
UserDetails.standard.integer(forKey: "Items")

...
```

## `@AppStorage` wrapper

```swift
@AppStorage("tapCount") private var tapCount = 0
```

:::note
`@AppStorage`的方式只需如上注解，不用做其他任何事儿。值会自动保存。
:::