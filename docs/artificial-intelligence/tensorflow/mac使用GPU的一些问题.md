1. 安装conda
2. 下载环境

```shell
conda install -c apple tensorflow-deps
```

3. 安装tensorflow-gpu版本

```shell
pip install tensorflow-macos
pip install tensorflow-metal
```

:::note
注意，一定要严格符合下表格版本，否则会出问题。

|tensorflow-macos|tensorflow-metal|macOS version|Features|
|--|--|--|
|v2.5|0.1.2|12.0+|Pluggable device|
|v2.6|0.2.0|12.0+|Variable sequences for RNN layers|
|v2.7|0.3.0|12.0+|Custom op support|
|v2.8|0.4.0|12.0+|RNN performance improvements|
|v2.9|0.5.0|12.1+|Distributed training|
:::