---
title: Typora编写语法
date: 2025-03-11 15:38:39
author: Ran
isOriginal: true
icon: boke
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## 1. 标题编写

::: md-demo 标题示范

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

> 文章中不需要一级标题，一般从二级标题开始，因为前面 title 会被识别为文章标题，因此正文中的一级标题无法显示出来。

::: 

## 2. 代码块

::: md-demo 代码块示范

1. Markdown 语法

```python
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

2. python 代码

```python
import random

number_to_guess = random.randint(1, 100)
guess_count = 0
max_tries = 10

print("猜数字游戏开始！尝试猜测一个在 1 到 100 之间的数字。你有 10 次机会。")

while guess_count < max_tries:
    guess_str = input("请输入你的猜测：")
    if not guess_str.isdigit():
        print("请输入一个有效数字！")
        continue
    guess = int(guess_str)
    guess_count += 1

    if guess < number_to_guess:
        print("太低了！再试一次。")
    elif guess > number_to_guess:
        print("太高了！再试一次。")
    else:
        print(f"恭喜！你猜对了数字 {number_to_guess}！你总共猜了 {guess_count} 次。")
        break
if guess != number_to_guess:
    print(f"很遗憾，你的机会已用完。正确的数字是 {number_to_guess}。")
```

3. java 代码

```java
public class HelloWorld {
    public static void main(String[] args) {
        // 输出 Hello Bornforthis 到控制台
        System.out.println("Hello, Bornforthis!");
    }
}
```

:::



## 3. 链接插入

::: md-demo 链接插入示范

`[链接名称](链接)`  此处为语法格式，按照此格式输入形成下文：

[Pythia网站](pythiaroot.com)

:::



## 4. 图片插入

::: md-demo 图片插入示范

`[图片描述](图片链接地址)`

图片直接复制即可，中括号 `[]`内修改图片描述即可。

![阿尔法](./variable.assets/image-20250311154721247.png)



![bgpic](./variable.assets/bgpic.jpg)

:::



## 5. 有序序列

::: md-demo

1. 赵
2. 钱
3. 孙
    1. 你好赵
    2. 你好钱
    3. 你好孙
4. 李

:::

## 6. 无序序列

::: md-demo

- 大中华地区
    - 解放碑
    - 人民路
- 步行街
- 解放路

:::

## 7. 数学公式

### 7.1 基础演示

$$ xxx $$

$$
xxx
$$
可以通过在 `$ `之前使用`\`或在 `$` 字符后添加空格来完成转义

加空格显示为：$a = 1$ 是一个 Tex 方程，而 前面加上`\` 则只是一串字符，即 \$a = 1$。

### 7.2 行内语法

::: md-demo

Euler's identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.

:::

### 7.3 显示语法

:::md-demo
$$
\frac{\partial^r}{\partial\omega^r}\left(\frac{y^{\omega}}{\omega}\right)
=\left(\frac{y^{\omega}}{\omega}\right)\left\{(\log y)^r+\sum_{i=1}^r\frac{(-1)^i r\cdots(r-i+1)(\log y)^{r-i}}{\omega^i}\right\}
$$


:::