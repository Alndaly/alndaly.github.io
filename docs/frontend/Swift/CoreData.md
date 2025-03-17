## 快速开始

1. 新建Model

![](https://oss.kinda.info/image/202212201449843.png)

2. 设置Model

![](https://oss.kinda.info/image/202212201450214.png)

3. 新建DataController

准备好Model数据，**此时并没有加载**

```swift
let container = NSPersistentContainer(name: "notify")
```

加载数据

```swift
container.loadPersistentStores{ description, error in
    if let error = error {
        print("Core Data fail to load, \(error.localizedDescription)")
    }
}
```

```swift
import CoreData
import Foundation

class DataController: ObservableObject {
    let container = NSPersistentContainer(name: "notify")
    
    init(){
        container.loadPersistentStores{ description, error in
            if let error = error {
                print("Core Data fail to load, \(error.localizedDescription)")
            }
        }
    }
}
```

4. App中绑定

```swift {10, 15}
import SwiftUI

@main
struct notifyApp: App {
    
    // 注册生命周期
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    // 绑定CoreData
    @StateObject private var dataController = DataController()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, dataController.container.viewContext)
        }
    }
}
```

5. View中使用

```swift
@FetchRequest(entity: Notify.entity(),sortDescriptors: []) var notifies: FetchedResults<Notify>
```

保存数据

```swift
let notify = Notify(context: moc)
notify.title = "demo Title"
notify.id = UUID()
try? moc.save()
```

删除数据

```swift
offset = 1
let notify = notifies[offset]
moc.delete(notify)
```

## 一些报错

```
Thread 1: "executeFetchRequest:error: A fetch request must have an entity."
```

在有多个实体的情况下，`@FetchRequest`需要注明entity参数使用的是那个entity，只有一个entity的时候可以省略，如下所示。

```swift
@FetchRequest(entity: Finance.entity(),  sortDescriptors: []) var finance: FetchedResults<Finance>
```