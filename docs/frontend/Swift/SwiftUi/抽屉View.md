```swift
import SwiftUI

struct NewView: View {
    @Environment(\.dismiss) var dismiss
    var body: some View{
        Button("dismiss"){
            // 手动操作退出当前View
            dismiss()
        }
    }
}

struct OriginView: View {
    @State private var showingSheet = false
    var body: some View {
        Button("Show Sheet"){
            showingSheet.toggle()
        }
        .sheet(isPresented: $showingSheet) {
            NewView()
        }
    }
}

struct OriginView_Previews: PreviewProvider {
    static var previews: some View {
        OriginView()
    }
}

```

![](https://oss.kinda.info/image/202212131517510.png)

![](https://oss.kinda.info/image/202212131517124.png)

