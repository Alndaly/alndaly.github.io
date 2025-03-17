---
title: 服务端渲染
---

https://github.com/facebook/docusaurus/issues/5273

:::note
任何组件引用都要换成`require`的方式放在`BrowserOnly`组件内部。（`import`方式因为代码只能放在顶层，故而会出问题）如下所示

```jsx
import BrowserOnly from '@docusaurus/BrowserOnly';

function MyComponent(props) {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        const LibComponent =
          require('some-lib-that-accesses-window').LibComponent;
        return <LibComponent {...props} />;
      }}
    </BrowserOnly>
  );
}
```
:::
