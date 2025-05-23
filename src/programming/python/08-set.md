---
title: 8. 集合
icon: boke
date: 2025-05-22 15:35:36
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

## 1. 如何创建集合

集合的创建主要有两种方式，可以看具体情况选择使用。

### 1.1 直接使用花括号 `{}` 创建集合

当我们知道集合中的元素时，可以直接使用花括号 `{}` 来定义集合。需要注意的是，集合中的元素是无序的，每次打印时显示的顺序可能不同。

```python
set = {1, 2, 4, 5, 8}
print(set)

#-------output-------
{1, 2, 4, 5, 8}
```

### 1.2 使用 `set()` 函数创建集合

如果我们有一个列表或者其他可迭代对象，想要将其转化为集合，可以使用 `set()` 函数。这样做不仅可以创建集合，还能自动去除重复的元素。

```python
set1 = set([1, 2, 4, 1, 2, 8, 5, 5])
set2 = set([1, 9, 3, 2, 5])
print(set1)
print(set2)

#-------output-------
{1, 2, 4, 5, 8}
{1, 2, 3, 5, 9}
```

## 2. 集合的交集

交集（Intersection）：交集操作返回两个集合中都出现的元素，Python 中集合的交集使用 `&` 运算符来实现。

```python
set1 = {1, 2, 4, 5, 8}
set2 = {1, 2, 3, 5, 9}
print(set1 & set2)

#-------output-------
{1, 2, 5}
```

## 3. 集合的并集

并集（Union) ：并集操作返回两个集合中所有的元素，相同的元素只保留一次，可以使用 `|` 运算符来求并集。

```python
set1 = {1, 2, 4, 5, 8}
set2 = {1, 2, 3, 5, 9}
print(set1 | set2)

#-------output-------
{1, 2, 3, 4, 5, 8, 9}
```



```python
basket1= {'生花生', '盐焗花生', '蜂蜜花生'}
basket2 = {'盐焗花生', '香辣花生', '烤花生'}
all_peanuts = basket1 | basket2
print(all_peanuts)

#-------output-------
{'烤花生', '蜂蜜花生', '生花生', '香辣花生', '盐焗花生'}
```



## 4. 集合的差集

差集（Difference）：差集操作返回存在于第一个集合中，但不存在于第二个集合中的元素，用 `-` 运算符实现差集运算。

```python
set1 = {1, 2, 4, 5, 8}
set2 = {1, 2, 3, 5, 9}
print(set1-set2)


basket1= {'生花生', '盐焗花生', '蜂蜜花生'}
basket2 = {'盐焗花生', '香辣花生', '烤花生'}
unique_to_basket1 = basket1 - basket2
print(unique_to_basket1)

#-------output-------
{8, 4}
{'生花生', '蜂蜜花生'}
```





