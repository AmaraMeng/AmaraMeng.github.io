---
title: 6. 元组
icon: boke
date: 2025-05-08 15:18:17
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



## 1. 创建元组

```python
tup = ('毒药', '感冒药', '解药')
print(tup, type(tup))

#-------output-------
('毒药', '感冒药', '解药') <class 'tuple'>
```

::: important 元组和列表的区别

- 列表的元素用 `[]` 包裹，元组的元素用 `()` 包裹。
- 可变性：列表的元素可以修改、添加或删除；元组不可变，创建后无法修改。

:::



## 2. 元组的拼接

```python
tup1 = (1, 2, 3)
tup2 = (4, 5, 6)
new_tup = tup1 + tup2
print(new_tup)

#-------output-------
(1, 2, 3, 4, 5, 6)
```



## 3. 元组的获取

```python
tup = (3, 'bornforthis', 22, 'aiyuechuang', 12, 'huangjiarongbao', 8)

# Q1 提取字符串 bornforthis
print(tup[1])

# Q2 提取 8，三种方法
print(tup[-1])
print(tup[6])
print(tup[len(tup)-1])

# Q3 提取 （'bornforthis'， 22）
print(tup[1:3])

# Q4 提取 (3, 22, 12, 8)
print(tup[::2])

# Q5 提取 ('bornforthis','aiyuechuang', 'huangjiarongbao')
print(tup[1::2])

# Q6 提取 (22, 'huangjiarongbao')
print(tup[2::3])

# Q7 提取 (8, 'huangjiarongbao', 12, 'aiyuechuang', 22, 'bornforthis', 3)
print(tup[::-1])

# Q8 提取 ('huangjiarongbao', 12, 'aiyuechuang')
print(tup[-2:-5:-1])
```



## 4. 只有一个元素的元组

当元组内只有一个元素时，如 `tup = (1)`  ， `tup = (‘a’)` ，查看该变量的数据类型，会显示出该元素本身的数据类型 `int` ，`string` ，原因在于计算机将外面的括号识别为运算符号的括号（如： `(1+2) * (2+1) = 3*3 = 9` ， `3` 的括号被省略了）。解决方法就是在该元素后加一个逗号 `,` 进行区分，代码如下：

```python
tup = ('a', )
print(type(tup), len(tup))

#-------output-------
<class 'tuple'> 1
```

































