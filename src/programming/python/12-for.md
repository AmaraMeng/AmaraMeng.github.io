---
title: 12. for
icon: boke
date: 2025-06-13 13:34:13
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

## 1. for 的语法

```python
for 变量 in 可迭代对象：
	循环体代码
```



代码：

代码中 `x` 是**临时变量**。

```python
for x in [1, 2, 3]:
    print(x)

print('循环结束后，x 的值为：', x)

#-------output-------
1
2
3
循环结束后，x 的值为： 3
```

例子：

```python
student_list = ['李雷', '韩梅梅', '马冬梅']
for student in student_list:
    print(student)
    
#-------output-------
李雷
韩梅梅
马冬梅
```

## 2. while 循环实现 for 循环

上述代码用 while 循环如何实现？

```python
student_list = ['李雷', '韩梅梅', '马冬梅']
i = 0

while i < len(student_list):
    print(student_list[i])
    i += 1
```



## 3. 小试牛刀

![](./12-for.assets/image-20250613134457686.png)

**Answer:** 

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

index = 0
for num in numbers:
    new_num = num ** 2
    numbers[index] = new_num
    index += 1

print(numbers)

#-------output-------
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

思路：问题拆解

step1: 明确提取方法：取下标

step2: 下标如何生成

step3: 提取



![](./12-for.assets/image-20250613135817316.png)





**Answer:**

方法一：

```python
student_list = ['李雷', '韩梅梅', '马冬梅']

for student in student_list:
    print(student_list.index(student), student)
    
#-------output-------
0 李雷
1 韩梅梅
2 马冬梅
```

方法二：

```python
student_list = ['李雷', '韩梅梅', '马冬梅']

index = 0
for st in student_list:
    print(index, st)
    index += 1
```

优化：

若需要输出

```python
stid_0 李雷
stid_1 韩梅梅
stid_2 马冬梅
```

则代码可以改为：

```python
student_list = ['李雷', '韩梅梅', '马冬梅']

index = 0
for st in student_list:
    print(f'stid_{index} {st}')
    index += 1
```



## 4. range()

当需要生成一系列连续数字时，例如遍历列表、控制循环次数等。Python 提供了一个简单又高效的工具—— `range()` 函数，专门用于生成 ==不可变==（immutable）的数字序列，尤其配合 `for` 循环进行迭代操作。

### 4.1 基本用法

`range()` 函数最多可以接收三个参数：`start` 起始值，`stop` 终止值， `step` 步长，下面详细解释这些参数：

- `start` ：数字序列的起始值，默认是 0 ；
- `stop` ：数字序列停止的地方，但注意**不包含这个值**；
- `step` ：每个数字之间的差值（步长），默认值是 1.

代码如下：

```python
for i in range(5):
    print(i)
    
#-------output-------
0
1
2
3
4
```

指定开始结束：

```python
for i in range(2, 6):
    print(i)
    
#-------output-------
2
3
4
5
```

指定间隔：

```python
for i in range(1, 10, 2):
    print(i)

#-------output-------
1
3
5
7
9
```

例子：生成一个列表包含 0 到 100

方法一：

```python
lst = []

for i in range(0, 101):
    lst.append(i)                # 注意不能用 lst = lst.append(i) ，因为 .append() 是直接修改原列表
print(lst)
```

方法二：

```python
print(list(range(0, 101)))
```



因此上文输出带序号的元素可以用 `range()` 完成：

```python
student_list = ['李雷', '韩梅梅', '马冬梅']

for student in range(len(student_list)):
    print(student_list[student])
```













