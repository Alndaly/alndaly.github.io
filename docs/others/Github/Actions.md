---
title: Github Actions自动化部署
---

:::info
频繁的手动进行`yarn build`，连接服务器，部署项目过于麻烦，Github提供的Actions可以很好的进行这一部署过程的自动化。
:::

:::warning
注意信息的安全，考虑到这一点，尽量避免在公开库使用与服务器相关的SSH。
:::

## 创建SSH密钥

```shell
ssh-keygen -m PEM -t rsa -b 4096 
```

## 将密钥部署到服务器

### 一键自动部署

```shell
ssh-copy-id -i [公钥文件路径] [服务器账户]@[服务器地址] 
```

## 测试

```shell
ssh -i [私钥文件路径] [服务器账户]@[服务器地址]
```

- `-i` 指定私钥文件路径（不加这一参数默认情况下会使用`~/.ssh/id_rsa`文件）

## Actions范例

```yml title='deploy.yml'
name: Build And Deploy To Aliyun ECS
on:                               # 该 CI/CD 触发时的事件
  push:                           # 只要push代码 就触发流程，更多触发事件请参考官方文档
    branches: [ master ]
  pull_request:
    branches: [ master ]    
jobs:                             # 需要执行的任务，可以有多个任务，所有的 job 都是并行的，但往往会有依赖关系
  build:
    runs-on: ubuntu-latest        # github分配的运行平台，2-core CPU/7 GB of RAM memory/14 GB of SSD disk space
    steps:                        # 某个任务的一系列步骤,如前端需要安装依赖，编译打包代码等等
    - uses: actions/checkout@v2          #选择一个 现有的action，执行你的操作
      with:
        persist-credentials: false
        ref: master
        submodules: true
    - name: Install Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '16.x'
    - name: Install npm dependencies
      run: npm install
    - name: Run build task
      run: npm run build --if-present
    - name: Deploy to aliyun server        # 为 step 指定一个名称，将会在 github action 的控制台中显示
      uses: easingthemes/ssh-deploy@v2.1.5      #可以访问的仓库，实现的上传服务器步骤被封装在此action
      env:
        SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}  #这个是阿里云的私钥
        ARGS: "-avzr --delete"
        SOURCE: "dist/"
        REMOTE_HOST: ${{ secrets.REMOTE_HOST }}    #阿里云的 ip
        REMOTE_USER: ${{ secrets.REMOTE_USER }}    #阿里云用户
        TARGET: ${{ secrets.TARGET }}     #被部署的服务器路径 
```