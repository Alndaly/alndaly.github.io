## 清晰查看所有自己的和别人的提交日志

```shell title=.gitconfig
[user]
        name = Github账户名称
        email = Github账户邮箱
[alias]
        lm = log --color --date=format:'%Y-%m-%d %H:%M:%S' --author='YOUR NAME' --    pretty=format:'%Cred%h%Creset -%C(yellow)%d%C(cyan) %s %Cgreen(%cd) %C(bold     white)<%an>%Creset' --abbrev-commit --graph
        ls = log --color --date=format:'%Y-%m-%d %H:%M:%S' --pretty=format:'%Cre    d%h%Creset -%C(yellow)%d%C(cyan) %s %Cgreen(%cd) %C(bold white)<%an>%Creset'     --abbrev-commit --graph
```