---
title: 15. 虚拟环境
icon: boke
date: 2025-09-25 15:10:26
author: Ran
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## 1. 虚拟环境

### 1.1 为什么需要虚拟环境

**背景：**

电脑的特性是，当一个 APP 存在多个版本的时候，只能卸载前一个版本，再安装其他版本，不同版本间有冲突。

**问题：**

目前有 10 个项目，都需要用到一个名叫 MR 的库，但是 project 1 需要用到 MR 1.0 版本，project 2 需要用到 MR 2.0 版本， project 3 需要用到 MR 2.6 版本。开展不同项目的时候，多次卸载安装是不现实的，因此需要给不同的项目配备不同的环境，实现 MR 多版本共存。

**解决方案：**

以 Python 为例，在大 Python 框架下，包含这 10 个项目，可以创建 10 个完备的 小 Python 框架，这 10个 小 Python 框架具有 大Python 框架具有的各种功能，可以在里面搭载不同的 MR库的版本。

类似的，`anaconda` 也起到了 大 Python 框架的作用，可以理解为包含多个环境/多个软件的平台。Anaconda 可实现虚拟环境功能，还能管理不同的 Python 版本，并集成了一些其他软件。

### 1.2 如何创建虚拟环境

1. 创建一个文件夹，用来创建虚拟环境，例如在 D 盘里创建 `environment_test` 文件夹。

    ![](./15-environment.assets/image-20250925154157944.png)

2. 打开终端

    ::: tabs

    

    @tab 方法一

    在该文件夹内点击右键，选择在终端中打开。（不推荐）

    ![](./15-environment.assets/image-20250925154307504.png)

    @tab 方法二

    点击上方目录栏，输入 `cmd` 打开系统自带的终端。 

    ![](./15-environment.assets/image-20250925154346073.png)

    ![系统终端](./15-environment.assets/image-20250925154510593.png)

    @tab 方法三

    使用`ConEmu` 创建虚拟环境。

    ![](./15-environment.assets/image-20250925154729944.png)

    ![终端](./15-environment.assets/image-20250925154821750.png)

    :::

3. 创建虚拟环境

    以 ConEmu 为例。

    输入并运行代码 `python -m venv 虚拟环境名称`  ，那么在 `environment_test` 文件夹里就会出现这个环境。

    ![](./15-environment.assets/image-20250925155124569.png)

    注意：此时输入命令 `pip list` 看到的是大环境下安装的包，并不是该虚拟环境下安装的包，因此需要启动该虚拟环境。

    ![](./15-environment.assets/image-20250925155346664.png)



4. 启动虚拟环境

    在对应文件夹的路径下，运行命令 `.\虚拟环境名称\Scripts\activate`  。

    ![](./15-environment.assets/image-20250925155745730.png)

    上述图片表示虚拟环境启动成功。

5. 在虚拟环境中使用 Jupyter Notebook

    Jupyter Notebook 是一个包，因此可以从终端进行安装，并启动。安装依旧是 `pip install jupyter notebook` 。

    安装好后，在终端中输入 jupyter notebook 就可启动，弹出网页。

    ![](./15-environment.assets/image-20250925160531235.png)

    

    







