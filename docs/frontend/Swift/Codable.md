:::note
Codeable其实就是Ecodable和Decodable两个协议的组合。

本身的作用一般用来自动进行JSON/XML或者其他的数据和Swift类之间的互相转化。
:::

`Encodable` 这个协议用在那些需要被编码的类型上。如果遵守了这个协议，并且这个类的所有属性都是 `Encodable` 的， 编译器就会自动的生成相关的实现。如果不是，或者说你需要自定义一些东西，就需要自己实现了。

`Decodable`这个协议跟 `Encodable` 相反，它表示那些能够被解档的类型。跟 `Encodable` 一样,编译器也会自动为你生成相关的实现，前提是所有属性都是`Decodable` 的.

这两个协议的实现都很简单，内部都只有一个方法

```swift
public protocol Encodable {
    func encode(to encoder: Encoder) throws
}
```

```swift
public protocol Decodable {
    init(from decoder: Decoder) throws
}
```

## 普通的`Codable`

```swift
class User: ObservableObject, Codable{
    var name = "Paul Hudsonn"
}
```

## `Codable`嵌套

```swift
struct Response: Codable {
    var results: [Result]
}

struct Result: Codable {
    var trackId: Int
    var trackName: String
    var collectionName: String
}
```

## `Codable`结合`@Published`

自动解析的同时又能够保持数据的全局共享。

`@Publish`注解会给属性增加很多的方法，给属性增加`@Publish`的同时并不会自动给其所属的类也增加`@Publish`，此时实现Codable除了增加注解之外，还需要手动去实现`Codable`。

1. 给属性增加`@Publush`注解

```swift
@Published var name = "Paul Hudsonn"
```

2. 增加CodingKey作为Codable的Key

```swift
enum CodingKeys: CodingKey {
    case name
}
```

3. 增加`init`方法，注意这个方法要加上`required`前缀表示必须。

```swift
required init(from decoder: Decoder) throws {
    let container = try decoder.container(keyedBy: CodingKeys.self)
    name = try container.decode(String.self, forKey: .name)
}
```

4. 增加`encode`方法

```swift
func encode(to encoder: Encoder) throws {
    var container = encoder.container(keyedBy: CodingKeys.self)
    try container.encode(name, forKey: .name)
}
```

实例

```swift
class User: ObservableObject, Codable{
    enum CodingKeys: CodingKey {
        case name
    }
    @Published var name = "Paul Hudsonn"
    required init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        name = try container.decode(String.self, forKey: .name)
    }
    func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encode(name, forKey: .name)
    }
}
```