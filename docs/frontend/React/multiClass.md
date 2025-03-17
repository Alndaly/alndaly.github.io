---
title: 多个className的情况
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import MyComponentTsx from '!!raw-loader!./index.tsx';
import MyComponentLess from '!!raw-loader!./index.scss';

可以使用模版字符串

<Tabs>
    <TabItem value="tsx" label="index.tsx" default>
        <CodeBlock language="jsx">{MyComponentTsx}</CodeBlock>
    </TabItem>
    <TabItem value="scss" label="index.scss">
        <CodeBlock language="scss">{MyComponentLess}</CodeBlock>
    </TabItem>
</Tabs>