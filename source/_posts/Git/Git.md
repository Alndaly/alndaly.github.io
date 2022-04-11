---
title: Git基本操作
date: 2022-04-05 17:18:27
tags:
  - [git]
categories:
  - [技术]
description: Git相关文档
---

# Git 安装

Git 可以在 Git 官网下载，目前 Git 支持 Windows 和 Mac， 按默认选项安装即可。(不清楚下载地方的可以关注私信我)

安装教程可参照 廖雪峰老师的安装教程。

# 常用命令

`git config`
在git中，使用`git config` 命令来配置 git 的配置文件，git配置级别主要有3类：
1、仓库级别 local 本地 Git 仓库级别配置文件，作用于当前仓库。【优先级最高】
2、用户级别 global，全局配置文件，作用于所有用户。【优先级次之】
3、系统级别 system，作用于系统所有用户和所有库。【优先级最低】
`git config -l` 查看所有的配置信息，依次是系统级别、用户级别、仓库级别
`git config --local -l` 查看仓库配置
`git config --global -l` 查看用户配置
`git config --system -l` 查看系统配置
`git config` 添加配置文件
`git config --global user.email “You Email”`
`git config --global user.name “Your Name”`
`git config -e `编辑配置文件
`git config --local -e` 编辑仓库级别配置文件
`git config --global -e` 编辑用户级别配置文件
`git config --system -e` 编辑系统级别配置文件
`git clone`
`git clone` 复制仓库到新的目录
`git fetch`
`git fetch` 创建并更新本地远程分支
`git fetch origin` 手动指定要 fetch 的 remote,在不指定分支时通常默认为 master；
`git fetch origin master:temp` 如在本地新建一个temp分支，并将远程 origin 仓库的 master 分支代码下载到本地 temp 分支
`git diff temp` 比较本地代码与刚刚从远程下载下来的代码的区别
`git merge temp` 合并代码
`git branch -d temp` 不想要 tmp 分支，删除分支
`git pull`
`git pull` 将更新从远程仓库合并到当前分支。在默认模式下，`git pull` == `git fetch` + `git merge`。
`git pull` :

如 `git pull origin master`

`git pull `取回远程仓库某个分支的更新，再与本地的指定分支自动合并，可能会出现代码冲突。

`git fetch` 先获取远程仓库某个分支的更新，再执行 merge，相比 pull ，fetch 更可控。

`git add`

`git add -A` 添加所有文件到暂存区

`git add -u` 添加被修改(modified)和被删除(deleted)文件到暂存区，不包括新文件(new)

`git add .` 添加新文件(new)和被修改(modified)文件到暂存区，不包括被删除(deleted)文件

可以通过 `git status` 检查文件是否已添加完毕。

`git commit`

`git commit -m` "" 比较常见的用法，-m "填写更新记录"

`git commit -a -m` "" 提交所有已跟踪的执行修改或删除、新建的文件，即使没有执行 git add 添加到暂存区的文件。

`git commit --amend` 修改上一次提交，可以在不增加新的 commit-id 的情况下将新修改的代码追加到前一次 commit-id 中。如不小心提交了一版没有修改完成的版本上去，

还需要修改完善后再提交，又不想再次增加一个 commit-id 时，可以使用追加提交。

`git commit --help` 查看帮助

`git push`

`git push `将已经 commit 的文件推送到远程仓库的分支

`git push origin master` 推送到 master 分支

`git push --all origin` 推送本地仓库所有分支到远程仓库分支

`git push origin :master` 删除远程分支，等同于 `git push origin --delete master`

`git push -u origin master `将本地的 master 分支推送到 origin 主机，同时指定 origin 为默认主机。

`git remote`

`git remote -v` 查看远程仓库地址

`git remote set-url origin` 修改远程仓库地址

`git remote rm origin` 删除远程仓库地址

`git remote add origin [url]` 添加远程仓库地址

`git merge`

`git merge` 合并代码

`git merge --no-commit` 防止合并失败不自动提交

`git merge --no-ff` 不使用fast-forward方式合并，创建一个 merge 的 commit 信息。


一、版本回退  
我们用readme文件举例子，修改好内容之后，重新提交  
`git add readme.txt`  
`git commit -m "说明"`  

![](https://upload-images.jianshu.io/upload_images/21452414-8619843d359e464a.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200)

返回结果
我们可以多修改几次，来试一下版本回退功能  

![](https://upload-images.jianshu.io/upload_images/21452414-934dca2c8cf7697e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200)

修改之后的git log,按Q推出

回到上一个版本`git reset --hard HEAD^`  

![](https://upload-images.jianshu.io/upload_images/21452414-660b9a45ac97a052.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200)
终端截图
![](https://upload-images.jianshu.io/upload_images/21452414-6a040fe5e32e04e5.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200)

cat命令查看文件内容

以此类推回到上上个版本就是`git reset --hard HEAD^^`  
当往上的版本比较多，比如往上50个版本的时候我们用`git reset --hard HEAD~50`

退回以后出现一个奇怪的事情，我们再执行`git log`命令发现看不到第三版了  

![](https://upload-images.jianshu.io/upload_images/21452414-9da314cc6a740f47.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200)

git log结果

这时，我们想要回到第三版需要用以下命令来  
`git rest hard 63ef`  
`63ef`是第三次提交时的版本号，我们没必要去写全，git会自动检索，但也不能只写一两位。因为版本号多了会有重复的。  

![](https://upload-images.jianshu.io/upload_images/21452414-9803aaf3afe72e31.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200)

恢复到第三版

-   问题①:如果我们没有记录被恢复版本的版本号,怎么找回呢?

Git提供了一个命令`git reflog`,通过这个命令我们可以看到每次git的操作记录

-   问题②:如果我们通过git回到第一版,那么`git log`命令还能看到第二版吗?

小结:

-   HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`
    
-   穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。
    
-   要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。


**直接拉取并覆盖本地的所有代码**
两个电脑同时对git上的项目进行跟新时，不免要用到将git上的代码拉取到本地更新本地代码的操作，鉴于自己对git使用的还不是很熟练，所以就直接采取暴力的方法，直接拉取并覆盖本地的所有代码，命令如下

```sh
git fetch --all
git reset --hard origin/master
git pull
```

# Difference between ^ and ~
## Rules of thumb

-   Use `~` most of the time — to go back a number of generations, usually what you want
-   Use `^` on merge commits — because they have two or more (immediate) parents

Mnemonics:

-   Tilde `~` is almost linear in appearance and wants to go backward in a straight line
-   Caret `^` suggests an interesting segment of a tree or a fork in the road

## Tilde

The [“Specifying Revisions” section of the `git rev-parse` documentation](https://git-scm.com/docs/git-rev-parse#Documentation/git-rev-parse.txt-emltrevgtltngtemegemmaster3em) defines `~` as

> **`<rev>~<n>`, e.g. `master~3`**  
> A suffix `~<n>` to a revision parameter means the commit object that is the _n_thgeneration ancestor of the named commit object, following only the first parents. For example, `<rev>~3` is equivalent to `<rev>^^^` which is equivalent to `<rev>^1^1^1` …

You can get to parents of any commit, not just `HEAD`. You can also move back through generations: for example, `master~2` means the grandparent of the tip of the master branch, favoring the first parent on merge commits.

## Caret

Git history is nonlinear: a directed acyclic graph (DAG) or tree. For a commit with only one parent, `rev~` and `rev^` mean the same thing. The caret selector becomes useful with merge commits because each one is the child of two or more parents — and strains language borrowed from biology.

`HEAD^` means the first _immediate_ parent of the tip of the current branch. `HEAD^` is short for `HEAD^1`, and you can also address `HEAD^2` and so on as appropriate. The [same section of the `git rev-parse` documentation](https://git-scm.com/docs/git-rev-parse#Documentation/git-rev-parse.txt-emltrevgtemegemHEADv1510em) defines it as

> **`<rev>^`, _e.g._ `HEAD^`, `v1.5.1^0`**  
> A suffix `^` to a revision parameter means the first parent of that commit object. `^<n>`means the _n_th parent ([_e.g._] `<rev>^` is equivalent to `<rev>^1`). As a special rule, `<rev>^0` means the commit itself and is used when `<rev>` is the object name of a tag object that refers to a commit object.

## Examples

These specifiers or selectors can be chained arbitrarily, _e.g._, `topic~3^2` in English is the second parent of the merge commit that is the great-grandparent (three generations back) of the current tip of the branch `topic`.

The [aforementioned section of the `git rev-parse` documentation](https://git-scm.com/docs/git-rev-parse#_specifying_revisions) traces many paths through a notional git history. Time flows generally downward. Commits D, F, B, and A are merge commits.

> Here is an illustration, by Jon Loeliger. Both commit nodes B and C are parents of commit node A. Parent commits are ordered left-to-right. (N.B. The `git log --graph` command displays history in the opposite order.)
>
> ```sh
> G   H   I   J
> \ /     \ /
> D   E   F
> \  |  / \
>  \ | /   |
>   \|/    |
>    B     C
>     \   /
>      \ /
>       A
> 
> A =      = A^0
> B = A^   = A^1     = A~1
> C = A^2
> D = A^^  = A^1^1   = A~2
> E = B^2  = A^^2
> F = B^3  = A^^3
> G = A^^^ = A^1^1^1 = A~3
> H = D^2  = B^^2    = A^^^2  = A~2^2
> I = F^   = B^3^    = A^^3^
> J = F^2  = B^3^2   = A^^3^2
> ```

Run the code below to create a git repository whose history matches the quoted illustration.

```perl
#! /usr/bin/env perl

use strict;
use warnings;
use subs qw/ postorder /;
use File::Temp qw/ mkdtemp /;

my %sha1;
my %parents = (
  A => [ qw/ B C /               ],
  B => [ qw/     D E F /         ],
  C => [ qw/         F /         ],
  D => [ qw/           G H /     ],
  F => [ qw/               I J / ],
);

sub postorder {
  my($root,$hash) = @_;
  my @parents = @{ $parents{$root} || [] };
  postorder($_, $hash) for @parents;
  return if $sha1{$root};
  @parents = map "-p $sha1{$_}", @parents;
  chomp($sha1{$root} = `git commit-tree @parents -m "$root" $hash`);
  die "$0: git commit-tree failed" if $?;
  system("git tag -a -m '$sha1{$root}' '$root' '$sha1{$root}'") == 0 or die "$0: git tag failed";
}

$0 =~ s!^.*/!!;  # / fix Stack Overflow highlighting
my $repo = mkdtemp "repoXXXXXXXX";
chdir $repo or die "$0: chdir: $!";
system("git init") == 0               or die "$0: git init failed";
chomp(my $tree = `git write-tree`);      die "$0: git write-tree failed" if $?;

postorder 'A', $tree;
system "git update-ref HEAD   $sha1{A}"; die "$0: git update-ref failed" if $?;
system "git update-ref master $sha1{A}"; die "$0: git update-ref failed" if $?;

# for browsing history - http://blog.kfish.org/2010/04/git-lola.html
system "git config alias.lol  'log --graph --decorate --pretty=oneline --abbrev-commit'";
system "git config alias.lola 'log --graph --decorate --pretty=oneline --abbrev-commit --all'";
```

It adds aliases in the new throwaway repo only for [`git lol` and `git lola`](http://blog.kfish.org/2010/04/git-lola.html) so you can view history as in

```sh
$ git lol
*   29392c8 (HEAD -> master, tag: A) A
|\
| * a1ef6fd (tag: C) C
| |
|  \
*-. \   8ae20e9 (tag: B) B
|\ \ \
| | |/
| | *   03160db (tag: F) F
| | |\
| | | * 9df28cb (tag: J) J
| | * 2afd329 (tag: I) I
| * a77cb1f (tag: E) E
*   cd75703 (tag: D) D
|\
| * 3043d25 (tag: H) H
* 4ab0473 (tag: G) G
```

Note that on your machine the SHA-1 object names will differ from those above, but the tags allow you to address commits by name and check your understanding.

```sh
$ git log -1 --format=%f $(git rev-parse A^)
B
$ git log -1 --format=%f $(git rev-parse A~^3~)
I
$ git log -1 --format=%f $(git rev-parse A^2~)
F
```

The [“Specifying Revisions” in the `git rev-parse` documentation](https://git-scm.com/docs/git-rev-parse#_specifying_revisions) is full of great information and is worth an in-depth read. See also [Git Tools - Revision Selection](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection) from the book [_Pro Git_](https://git-scm.com/book/en/v2/).

## Order of Parent Commits

The commit [89e4fcb0dd](https://github.com/git/git/commit/89e4fcb0dd01b42e82b8f27f9a575111a26844df) from git’s own history is a merge commit, as `git show 89e4fcb0dd`indicates with the Merge header line that displays the immediate ancestors’ object names.

>  ```sh
>  commit 89e4fcb0dd01b42e82b8f27f9a575111a26844df
>  Merge: c670b1f876 649bf3a42f b67d40adbb
>  Author: Junio C Hamano <gitster@pobox.com>
>  Date:   Mon Oct 29 10:15:31 2018 +0900
>  
>   Merge branches 'bp/reset-quiet' and 'js/mingw-http-ssl' into nd/config-split […]
>  ```

We can confirm the ordering by asking `git rev-parse` to show 89e4fcb0dd’s immediate parents in sequence.

```sh
$ git rev-parse 89e4fcb0dd^1 89e4fcb0dd^2 89e4fcb0dd^3
c670b1f876521c9f7cd40184bf7ed05aad843433
649bf3a42f344e71b1b5a7f562576f911a1f7423
b67d40adbbaf4f5c4898001bf062a9fd67e43368
```

Querying the non-existent fourth parent results in an error.

```sh
$ git rev-parse 89e4fcb0dd^4
89e4fcb0dd^4
fatal: ambiguous argument '89e4fcb0dd^4': unknown revision or path not in the working tree.
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
```

If you want to extract the parents only, use [pretty format](https://git-scm.com/docs/git-log#_pretty_formats) `%P` for the full hashes

```sh
$ git log -1 --pretty=%P 89e4fcb0dd
c670b1f876521c9f7cd40184bf7ed05aad843433 649bf3a42f344e71b1b5a7f562576f911a1f7423 b67d40adbbaf4f5c4898001bf062a9fd67e43368
```

or `%p` for abbreviated parents.

```sh
$ git log -1 --pretty=%p 89e4fcb0dd
c670b1f876 649bf3a42f b67d40adbb
```

# 个性化自定义git命令别名
文件名：.gitconfig_1
```note
[init]
	defaultBranch = main
[user]
	name = Alndaly
	email = 1142704468@qq.com
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[alias] 
	lm = log --color --date=format:'%Y-%m-%d %H:%M:%S' --author='Alndaly' --pretty=format:'%Cred%h%Creset -%C(yellow)%d%C(cyan) %s %Cgreen(%cd) %C(bold white)<%an>%Creset' --abbrev-commit --graph
	ls = log --color --date=format:'%Y-%m-%d %H:%M:%S' --pretty=format:'%Cred%h%Creset -%C(yellow)%d%C(cyan) %s %Cgreen(%cd) %C(bold white)<%an>%Creset' --abbrev-commit --graph
```
文件名：.gitconfig_2
```note
[init]
	defaultBranch = main
[user]
	name = Smiling22
	email = lucky.always.h@gmail.com
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
[alias] 
	lm = log --color --date=format:'%Y-%m-%d %H:%M:%S' --author='Alndaly' --pretty=format:'%Cred%h%Creset -%C(yellow)%d%C(cyan) %s %Cgreen(%cd) %C(bold white)<%an>%Creset' --abbrev-commit --graph
	ls = log --color --date=format:'%Y-%m-%d %H:%M:%S' --pretty=format:'%Cred%h%Creset -%C(yellow)%d%C(cyan) %s %Cgreen(%cd) %C(bold white)<%an>%Creset' --abbrev-commit --graph
```


## The default branch has been renamed!（当远程分支改了名字）

main is now named master

If you have a local clone, you can update it by running the following commands.

```sh
git branch -m main master
git fetch origin
git branch -u origin/master master
git remote set-head origin -a
```

![GitFlow Workflow](/Users/alnda/Developer/hexo-blog/source/_posts/Git/GitFlow Workflow.md)
![Forking Workflow](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/20220405171749.md)

# Resetting, Checking Out & Reverting

The `[git reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)`, `[git checkout](https://www.atlassian.com/git/tutorials/using-branches/git-checkout)`, and `[git revert](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)` commands are some of the most useful tools in your Git toolbox. They all let you undo some kind of change in your repository, and the first two commands can be used to manipulate either commits or individual files.

Because they’re so similar, it’s very easy to mix up which command should be used in any given development scenario. In this article, we’ll compare the most common configurations of `git reset`, `git checkout`, and `git revert`. Hopefully, you’ll walk away with the confidence to navigate your repository using any of these commands.

![The three trees of Git](https://wac-cdn.atlassian.com/dam/jcr:0c5257d5-ff01-4014-af12-faf2aec53cc3/01.svg?cdnVersion=116)

It helps to think about each command in terms of their effect on the three state management mechanisms of a Git repository: the working directory, the staged snapshot, and the commit history. These components are sometimes known as "The three trees" of Git. We explore the three trees in depth on the `[git reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)` page. Keep these mechanisms in mind as you read through this article.

A checkout is an operation that moves the `HEAD` ref pointer to a specified commit. To demonstrate this consider the following example.

![Move the HEAD ref pointer to a specified commit](https://wac-cdn.atlassian.com/dam/jcr:8d616ece-8cee-4fde-bdee-4b280a0a8334/01%20git-sequence-transparent%20kopiera.png?cdnVersion=116)

This example demonstrates a sequence of commits on the `main` branch. The `HEAD` ref and `main` branch ref currently point to commit d. Now let us execute `git checkout b`

![Sequence of commits on the master branch](https://wac-cdn.atlassian.com/dam/jcr:f45c4a34-8968-4c81-83cf-d55ebf01a447/02%20git-checkout-transparent%20kopiera.png?cdnVersion=116)

This is an update to the "Commit History" tree. The `git checkout` command can be used in a commit, or file level scope. A file level checkout will change the file's contents to those of the specific commit.

A revert is an operation that takes a specified commit and creates a new commit which inverses the specified commit. `git revert`can only be run at a commit level scope and has no file level functionality.

A reset is an operation that takes a specified commit and resets the "three trees" to match the state of the repository at that specified commit. A reset can be invoked in three different modes which correspond to the three trees.

Checkout and reset are generally used for making local or private 'undos'. They modify the history of a repository that can cause conflicts when pushing to remote shared repositories. Revert is considered a safe operation for 'public undos' as it creates new history which can be shared remotely and doesn't overwrite history remote team members may be dependent on.

## Git Reset vs Revert vs Checkout reference

The table below sums up the most common use cases for all of these commands. Be sure to keep this reference handy, as you’ll undoubtedly need to use at least some of them during your Git career.

Command

Scope

Common use cases

`git reset`

Commit-level

Discard commits in a private branch or throw away uncommited changes

`git reset`

File-level

Unstage a file

`git checkout`

Commit-level

Switch between branches or inspect old snapshots

`git checkout`

File-level

Discard changes in the working directory

`git revert`

Commit-level

Undo commits in a public branch

`git revert`

File-level

(N/A)

## Commit Level Operations

The parameters that you pass to `git reset` and `git checkout`determine their scope. When you don’t include a file path as a parameter, they operate on whole commits. That’s what we’ll be exploring in this section. Note that `git revert` has no file-level counterpart.

### Reset A Specific Commit

On the commit-level, resetting is a way to move the tip of a branch to a different commit. This can be used to remove commits from the current branch. For example, the following command moves the `hotfix` branch backwards by two commits.

```sh
git checkout hotfix git reset HEAD~2
```

The two commits that were on the end of `hotfix` are now dangling, or orphaned commits. This means they will be deleted the next time Git performs a garbage collection. In other words, you’re saying that you want to throw away these commits. This can be visualized as the following:

![Resetting the hotfix branch to HEAD-2](https://wac-cdn.atlassian.com/dam/jcr:e8a43261-2460-4783-9731-1197dc8959ab/03-04%20Reset%20a%20specific%20commit.png?cdnVersion=116)

This usage of `git reset` is a simple way to undo changes that haven’t been shared with anyone else. It’s your go-to command when you’ve started working on a feature and find yourself thinking, “Oh crap, what am I doing? I should just start over.”

In addition to moving the current branch, you can also get `git reset` to alter the staged snapshot and/or the working directory by passing it one of the following flags:

-   `--soft` – The staged snapshot and working directory are not altered in any way.
-   `--mixed` – The staged snapshot is updated to match the specified commit, but the working directory is not affected. This is the default option.
-   `--hard` – The staged snapshot and the working directory are both updated to match the specified commit.  
    

It’s easier to think of these modes as defining the scope of a `git reset` operation. For further detailed information visit the `[git reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)` page.

### Checkout old commits

The `git checkout` command is used to update the state of the repository to a specific point in the projects history. When passed with a branch name, it lets you switch between branches.

 `git checkout hotfix`

Internally, all the above command does is move `HEAD` to a different branch and update the working directory to match. Since this has the potential to overwrite local changes, Git forces you to commit or [stash](https://www.atlassian.com/git/tutorials/saving-changes/git-stash) any changes in the working directory that will be lost during the checkout operation. Unlike `git reset`, `git checkout` doesn’t move any branches around.

![Moving HEAD from master to hotfix](https://wac-cdn.atlassian.com/dam/jcr:7dffc21e-29c6-4bfd-acd1-2965fcdd923e/05-06%20Checkout%20old%20commits.png?cdnVersion=116)

You can also check out arbitrary commits by passing the commit reference instead of a branch. This does the exact same thing as checking out a branch: it moves the `HEAD` reference to the specified commit. For example, the following command will check out the grandparent of the current commit:

 `git checkout HEAD~2`

![Moving `HEAD` to an arbitrary commit](https://wac-cdn.atlassian.com/dam/jcr:9b4d9562-7ed1-441c-bbd1-1897bea5676e/07.svg?cdnVersion=116)

This is useful for quickly inspecting an old version of your project. However, since there is no branch reference to the current `HEAD`, this puts you in a detached `HEAD` state. This can be dangerous if you start adding new commits because there will be no way to get back to them after you switch to another branch. For this reason, you should always create a new branch before adding commits to a detached `HEAD`.

### Undo Public Commits with Revert

Reverting undoes a commit by creating a new commit. This is a safe way to undo changes, as it has no chance of re-writing the commit history. For example, the following command will figure out the changes contained in the 2nd to last commit, create a new commit undoing those changes, and tack the new commit onto the existing project.

```sh
git checkout hotfix git revert HEAD~2
```

This can be visualized as the following:

![Reverting the 2nd to last commit](https://wac-cdn.atlassian.com/dam/jcr:f02c67ca-d7b8-47f8-98f8-e0017dc9f7c5/08-09%20Undo%20public%20commits.svg?cdnVersion=116)

Contrast this with `git reset`, which _does_ alter the existing commit history. For this reason, `git revert` should be used to undo changes on a public branch, and `git reset` should be reserved for undoing changes on a private branch.

You can also think of `git revert` as a tool for undoing _committed_changes, while `git reset HEAD` is for undoing _uncommitted_changes.

Like `git checkout`, `git revert` has the potential to overwrite files in the working directory, so it will ask you to commit or [stash changes](https://www.atlassian.com/git/tutorials/saving-changes/git-stash) that would be lost during the revert operation.

## File-level Operations

The `git reset` and `git checkout` commands also accept an optional file path as a parameter. This dramatically alters their behavior. Instead of operating on entire snapshots, this forces them to limit their operations to a single file.

### Git Reset A Specific File

When invoked with a file path, `git reset` updates the _staged snapshot_ to match the version from the specified commit. For example, this command will fetch the version of `foo.py` in the 2nd-to-last commit and stage it for the next commit:

```sh
git reset HEAD~2 foo.py
```

As with the commit-level version of `git reset`, this is more commonly used with `HEAD` rather than an arbitrary commit. Running `git reset HEAD foo.py` will unstage `foo.py`. The changes it contains will still be present in the working directory.

![Moving a file from the commit history into the staged snapshot](https://wac-cdn.atlassian.com/dam/jcr:1a010f5a-c90d-49ee-a0e6-31054433e2d4/07.svg?cdnVersion=116)

The `--soft`, `--mixed`, and `--hard` flags do not have any effect on the file-level version of `git reset`, as the staged snapshot is _always_ updated, and the working directory is _never_ updated.

### Git Checkout File

Checking out a file is similar to using `git reset` with a file path, except it updates the _working directory_ instead of the stage. Unlike the commit-level version of this command, this does not move the `HEAD` reference, which means that you won’t switch branches.

![Moving a file from the commit history into the working directory](https://wac-cdn.atlassian.com/dam/jcr:cc252fc0-fc76-4740-8458-9c0d7af94bca/08.svg?cdnVersion=116)

For example, the following command makes `foo.py` in the working directory match the one from the 2nd-to-last commit:
**（要将特定的文件而不是所有文件退回某个版本时）**
```sh
git checkout HEAD~2 foo.py
```

Just like the commit-level invocation of `git checkout`, this can be used to inspect old versions of a project—but the scope is limited to the specified file.

If you stage and commit the checked-out file, this has the effect of “reverting” to the old version of that file. Note that this removes _all_ of the subsequent changes to the file, whereas the `git revert` command undoes only the changes introduced by the specified commit.

Like `git reset`, this is commonly used with `HEAD` as the commit reference. For instance, `git checkout HEAD foo.py` has the effect of discarding unstaged changes to `foo.py`. This is similar behavior to `git reset HEAD --hard`, but it operates only on the specified file.

## Summary

You should now have all the tools you could ever need to undo changes in a Git repository. The `[git reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)`, `[git checkout](https://www.atlassian.com/git/tutorials/using-branches/git-checkout)`, and `[git revert](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)`commands can be confusing, but when you think about their effects on the working directory, staged snapshot, and commit history, it should be easier to discern which command fits the development task at hand.