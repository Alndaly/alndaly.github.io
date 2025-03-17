## `logging`模块的基层level无法覆盖问题

```python {12}
import logging
from logging.handlers import QueueHandler
import os

class MyLogger(object):
  def __init__(self,logger):
    # 判断是否存在log文件夹，如果不存在则创建
    if(not os.path.exists(os.path.abspath('./logs'))):
        os.mkdir(os.path.abspath('./logs'))
    self.logger = logging.getLogger(logger)
    self.fmt=logging.Formatter('%(asctime)s - %(name)s - %(levelname)s -%(message)s ')
    logging.root.setLevel(logging.NOTSET)
    #logging.basicConfig(level=logging.NOTSET)
 
 
  def getlog(self):
 
    ch=logging.StreamHandler()
    fh = logging.handlers.RotatingFileHandler(os.path.abspath('./logs/test.log'), maxBytes=20000, backupCount=5)
 
    ch.setFormatter(self.fmt)
    fh.setFormatter(self.fmt)
 
    ch.setLevel(logging.INFO)
    fh.setLevel(logging.INFO)
 
    self.logger.addHandler(ch)
    self.logger.addHandler(fh)
    return self.logger
```

:::note
`from logging.handlers import QueueHandler`这一行是为了引入`logging.handlers`，避免下文中的`logging.handlers.RotatingFileHandler`报错。
:::

## 获取当前文件绝对路径

```python
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve()
```

## 获取父级的父级的目录文件绝对路径

```python
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent
```