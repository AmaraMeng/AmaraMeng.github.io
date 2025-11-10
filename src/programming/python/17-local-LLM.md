---
title: 17. 本地大模型对接（Ollama、LM Studio）
icon: boke
date: 2025-11-10 15:07:26
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

此处可以回忆对战游戏里接入 API 模型的操作，那么 `main.py` 函数是否还需要修改？—— 不需要修改，只要保证 `main.py` 可以正常的接收大模型返回的特定结果即可。

我们只需要保证，使用任何大模型时返回的结果、类型与先前的大模型一致，即可无损实现！

## 1. 安装 Ollama、LM Studio

- Ollama: https://ollama.com/
- LM Studio: https://lmstudio.ai/

## 2. Ollama 实现

### 2.1 本地实现

1. 安装 **Ollama** 库：

    ```python
    pip install ollama
    ```

    ![成功安装](./17-local-LLM.assets/image-20251110153257512.png)

    通过终端输入 `ollama` 查看功能：

    ![](./17-local-LLM.assets/image-20251110153407441.png)

    通过上面显示的命令  `ollama list` 查看已下载模型。

    ![](./17-local-LLM.assets/image-20251110153519720.png)

    

2. 开始和模型基础聊天

    ```python
    from ollama import chat
    from ollama import ChatResponse
    
    # 模型可以更改成自己已经下载的模型
    response: ChatResponse = chat(model='gemma3', messages=[
      {
        'role': 'user',
        'content': 'Why is the sky blue?',
      },
    ])
    print(response['message']['content'])
    # or access fields directly from the response object
    print(response.message.content)
    ```

自己操作如下：

```python
from ollama import chat
from ollama import ChatResponse

response: ChatResponse = chat(model='deepseek-r1:8b', messages=[
  {
    'role': 'user',
    'content': '为什么天空是蓝色?',
  },
])
print(response['message']['content'])
# or access fields directly from the response object
print(response.message.content)

#------- output -------
# 这个回答包含了思维链和回答
天空呈现蓝色，是**太阳光在穿过地球大气层时发生散射**的结果。

以下是详细的解释：

1.  **太阳光是复合光：** 太阳光照射到地球上时，我们看到的阳光是白色或白色的，但它实际上是由多种不同颜色的光组成的“复合光”。就像用棱镜可以将阳光分解成红、橙、黄、绿、蓝、靛、紫七色光谱。

2.  **大气层的作用：** 当太阳光进入地球大气层时，会遇到大气中的气体分子（主要是氮气和氧气）、水蒸气、尘埃等微小颗粒。

3.  **光的散射：** 光在穿过介质（如空气）时，会向各个方向分散传播，这就是光的散射现象。
    *   **选择性散射：** 大气层对不同颜色（波长）的光的散射强度是不同的。光的波长越短，越容易被微小的粒子（如大气分子）散射；波长越长，则散射越弱。
    *   **蓝光和紫光的波长较短：** 太阳光光谱中，蓝色和紫色光的波长相对较短。这些短波长的光遇到大气层中的氮气和氧气分子时，最容易发生**瑞利散射**（一种选择性散射）。

4.  **为什么是蓝色而不是紫色？**
    *   虽然紫光的波长比蓝光更短，散射更强，但它并不是主导颜色。
    *   人眼对不同颜色光的敏感度也不同。人眼对**蓝光**的敏感度比紫光要高。
    *   太阳光光谱中蓝色光的强度也相对较高。
    *   因此，虽然紫光也被强烈散射，但**蓝光**散射的总量和人眼的感知结合，使得我们看到的天空呈现出**明亮的蓝色**。

**简单来说：**

太阳发出的白光穿过大气层时，空气分子等微小粒子更喜欢“挡住”并散射掉波长短的蓝光和紫光。这些散射开来的蓝光从各个方向进入我们的眼睛，让我们觉得天空是蓝色的。波长较长的红光、橙光等则散射较少，更容易穿透大气层到达地面，这就是为什么日出日落时天空会出现红、橙等颜色的原因。
天空呈现蓝色，是**太阳光在穿过地球大气层时发生散射**的结果。

以下是详细的解释：

1.  **太阳光是复合光：** 太阳光照射到地球上时，我们看到的阳光是白色或白色的，但它实际上是由多种不同颜色的光组成的“复合光”。就像用棱镜可以将阳光分解成红、橙、黄、绿、蓝、靛、紫七色光谱。

2.  **大气层的作用：** 当太阳光进入地球大气层时，会遇到大气中的气体分子（主要是氮气和氧气）、水蒸气、尘埃等微小颗粒。

3.  **光的散射：** 光在穿过介质（如空气）时，会向各个方向分散传播，这就是光的散射现象。
    *   **选择性散射：** 大气层对不同颜色（波长）的光的散射强度是不同的。光的波长越短，越容易被微小的粒子（如大气分子）散射；波长越长，则散射越弱。
    *   **蓝光和紫光的波长较短：** 太阳光光谱中，蓝色和紫色光的波长相对较短。这些短波长的光遇到大气层中的氮气和氧气分子时，最容易发生**瑞利散射**（一种选择性散射）。

4.  **为什么是蓝色而不是紫色？**
    *   虽然紫光的波长比蓝光更短，散射更强，但它并不是主导颜色。
    *   人眼对不同颜色光的敏感度也不同。人眼对**蓝光**的敏感度比紫光要高。
    *   太阳光光谱中蓝色光的强度也相对较高。
    *   因此，虽然紫光也被强烈散射，但**蓝光**散射的总量和人眼的感知结合，使得我们看到的天空呈现出**明亮的蓝色**。

**简单来说：**

太阳发出的白光穿过大气层时，空气分子等微小粒子更喜欢“挡住”并散射掉波长短的蓝光和紫光。这些散射开来的蓝光从各个方向进入我们的眼睛，让我们觉得天空是蓝色的。波长较长的红光、橙光等则散射较少，更容易穿透大气层到达地面，这就是为什么日出日落时天空会出现红、橙等颜色的原因。

```

### 2.2 局域网方法

便于后期在其他设备上运行本地大模型，从而节省自己电脑的算力

1. 获取 IP 地址

    在安装了 Ollama 的电脑上找，首先需要打开如下选项：

    ![](./17-local-LLM.assets/image-20251110160208004.png)

    **方法一：**

    ![](./17-local-LLM.assets/image-20251110154942109.png)

    **方法二：**

    打开终端输入 `ipconfig` 即可。

    ​	![](./17-local-LLM.assets/image-20251110160606519.png)

2. 参考官网教程 API 方法

    https://docs.ollama.com/api

    

​	









