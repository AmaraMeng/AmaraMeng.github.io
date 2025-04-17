---
title: 5. 列表
icon: boke
date: 2025-04-17 14:34:02
author: Ran
category:
    - python
tag:
    - python
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

## 1. 列表的基本语法

- 使用中括号 `[]` 表示列表
- 列表内元素用逗号 `,` 隔开（注意：逗号为英文输入法下的逗号 `,` ）

```python
student1 = ['Ran', 'class1', 18, 20250417]
student2 = ['Peppa', 'class2', 8, 20250418]
```

## 2. 列表的三大性质

- 有序性
- 可变性
- 支持任意数据类型

（详见：2. 数据类型 中的列表部分）

## 3. 字符串强制转换成列表

当字符串被强制转换成列表时，每个字符都会被拆分成单独的元素，示例如下：

```python
user_input = input('>>>:')
print(list(user_input))

#-------output-------
>>>:[123, 456, peppa, Gorge]
['[', '1', '2', '3', ',', ' ', '4', '5', '6', ',', ' ', 'p', 'e', 'p', 'p', 'a', ',', ' ', 'G', 'o', 'r', 'g', 'e', ']']
```

上述示例可看出，字符串 `[123, 456, peppa, Gorge]` 转换成列表后，每个字符都被拆分成单独的元素。

可以利用这个特性，将字符串内容强制转换成列表。

```python
string_to_list = list('peppapig')
print(string_to_list)

#-------output-------
['p', 'e', 'p', 'p', 'a', 'p', 'i', 'g']
```



## 4. 列表元素的提取

```python
grade = [98, 99, 95, 80]

#98
print(grade[0])

#178
print(grade[0]+grade[3])

# [98, 95]
print(grade[::2])

# [99, 80]
print(grade[1::2])

# [80, 95, 99, 98]
print(grade[::-1])

#-------output-------
98
178
[98, 95]
[99, 80]
[80, 95, 99, 98]
```

```python
numbers = [0,1,2,3,4,5,6,7,8,9]
print(numbers[2:6])

print(numbers[1:7:2])

#-------output-------
[2, 3, 4, 5]
[1, 3, 5]
```



## 5. 列表的切片赋值

::: code-tabs 

@tab 情况一

```python
In [1]: list('Python')
Out[1]: ['P', 'y', 't', 'h', 'o', 'n']

In [2]: name = list('Python')

In [3]: name
Out[3]: ['P', 'y', 't', 'h', 'o', 'n']

In [4]: name[2:]
Out[4]: ['t', 'h', 'o', 'n']

In [5]: list('abc')
Out[5]: ['a', 'b', 'c']

In [6]: name[2:] = list('abc')

In [7]: name
Out[7]: ['P', 'y', 'a', 'b', 'c']      #新赋值的内容将旧内容覆盖，并非按照元素个数填充

```

@tab 情况二

```python
In [9]: numbers = [1, 5]

In [10]: numbers[1:1]                    #指 1 和 5 中间空的位置
Out[10]: []

In [11]: numbers[1:1] = [2, 3, 4]

In [12]: numbers
Out[12]: [1, 2, 3, 4, 5]

In [13]: numbers[1:4] = []

In [14]: numbers
Out[14]: [1, 5]

```



:::

![](./05-list.assets/image-20250417152252175.png)



**Answer:**

```python
numbers = [1,2,3,5,6]
position = input("Enter position:")
value = input("Enter value:")
numbers[int(position):int(position)] = [int(value)]      #注意数据类型
print(numbers)

#-------output-------
Enter position:3
Enter value:4
[1, 2, 3, 4, 5, 6]
```

## 6. 列表的特定位置插入元素 `.insert(index, element)`

前面小试牛刀部分实现了数据插入，现用  `.insert(index, element)` 实现。

- `index` 指定要插入元素的位置。索引从 0  开始。若指定的索引超过了列表的当前长度，不会报错，元素会被添加到列表的末尾。
- `element` 是想到插入列表中的元素。

```python
numbers = [1,2,3,5,6]
numbers.insert(3, 4)            #此处只能在一个位置插入，也不可跳着插入，插入的元素作为一个整体，即，可以插入[4, 4, 4]                                 #得到结果 [1, 2, 3, [4, 4, 4], 5, 6]，而不能得到 [1, 2, 3, 4, 4, 4, 5, 6]
print(numbers)

#-------output-------
[1, 2, 3, 4, 5, 6]
```



## 7. 列表的长度

在 Python 中，列表是一种可变的数据结构。要获取列表中国的元素个数，可以使用内置函数 `len()` 。

```python
student_list = ['peppa', 'gorge', 'mummy', 'daddy', 1, 3, 5]
print(len(student_list))

#-------output-------
7
```



## 8. 列表元素的修改

```python
name = ['peppa', 'gorge', 'mummy', 'daddy']
print('before:', name)

name[0] = 'peppapig'
print('after:', name)

#-------output-------
before: ['peppa', 'gorge', 'mummy', 'daddy']
after: ['peppapig', 'gorge', 'mummy', 'daddy']
```















