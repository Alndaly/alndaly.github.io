---
title: mitmproxy不同的模式
tags: [python, 爬虫]
description: 爬虫相关文档
---

文档链接: https://docs.mitmproxy.org/stable/concepts-modes/

## 配合其他的代理使用

假设上游代理地址是`http://[host]:[port]`

```shell
mitmweb --mode upstream:http://[host]:[port] -s ups.py
```

- `--mode` 模式
- `-s` python脚本