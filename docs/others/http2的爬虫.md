---
title: httpx[http2]
---

httpx需要Python3.6+（使用异步请求需要Python3.8+）

## 安装

```shell
pip install httpx
```

如果需要使用HTTP/2，则需要安装http2的相关依赖

```shell
pip install httpx[http2]
```

## 使用

httpx与requests库的基本使用方法几乎是一模一样的

```python
import httpx
r = httpx.get('https://httpbin.org/get')
print(r)
```

### 类似的，我们也可以使用POST, PUT, DELETE, HEAD和OPTIONS等请求方法，如下

```python
r = httpx.post('https://httpbin.org/post', data={'key': 'value'})
r = httpx.put('https://httpbin.org/put', data={'key': 'value'})
r = httpx.delete('https://httpbin.org/delete')
r = httpx.head('https://httpbin.org/get')
r = httpx.options('https://httpbin.org/get')
```

## 带有请求头和请求参数的请求

```python
import httpx
headers = {'user-agent': 'my-app/1.0.0'}
params = {'key1': 'value1', 'key2': 'value2'}
url = 'https://httpbin.org/get'
r = httpx.get(url, headers=headers, params=params)
print(r)
print(r.status_code) # 状态码
print(r.encoding) # 文本编码
print(r.text)
print(r.json())
```

## 请求带有cookies

```python
import httpx
url = 'http://httpbin.org/cookies'
cookies = {'color': 'green'}
r = httpx.get(url, cookies=cookies)
print(r.json()) # {'cookies': {'color': 'green'}}
```

## 设置超时时间

```python
import httpx
r = httpx.get('http://httpbin.org', timeout=0.001)
print(r)
```

超过设置时间则报`httpx.ConnectTimeout: timed out`

## 证书/代理配置

```python
proxies = {"http://":"http://localhost:8899"}
client = httpx.Client(http2=True, verify=False, proxies=proxies)

client.post()
client.get()
```