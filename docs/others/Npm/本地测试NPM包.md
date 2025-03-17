:::info 起因

库包在开发或迭代后，不适合发布到线上进行调试（过程繁琐且会导致版本号膨胀）。

`npm link` 可以帮助我们模拟包安装后的状态，它会在系统中做一个快捷方式映射，让本地的包就好像 install 过一样，可以直接使用。

:::

## 操作步骤

### npm link

:::caution

注意，一旦重启电脑后，这一项可能会失效，需要重新link。

:::

首先在要上传的NPM包的`package.json`同级目录下进行`npm link`，这样会自动将该包链接到系统全局`node_modules`目录下，包名将会是你的`package.json`文件中的`name`。

### npm link [包名]

接下来在你需要用到这个包的地方进行`npm link [报名]`的方式链接刚才你绑定到全局node_modules目录下的包。

### npm unlink [包名]

测完后，进入用到测试包项目的`package.json`同级目录下进行`npm unlink [包名]`解除绑定。