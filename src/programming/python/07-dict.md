---
title: 7. 字典
icon: boke
date: 2025-05-13 15:35:23
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

## 1.如何创建一个电话簿

![](./07-dict.assets/image-20250513153704154.png)

```python
name = ['蓉儿', '棠棠', '小悦', '蓉宝', 'aiyuechuang', 'Bornforthis']
phone_number = [18000000000, 18100000000, 18200000000, 18300000000, 18400000000, 18500000000]

# 获取输入
name_input = input('Enter your search name: ')

name_index = name.index(name_input)
phone_get = phone_number[name_index]

print(f'The {name_input} phone number is: {phone_get}.')

#-------output-------
Enter your search name: aiyuechuang
The aiyuechuang phone number is: 18400000000.
```



思考：如何用一个列表实现呢？

```python
phone_book = ['蓉儿', 18000000000, '棠棠', 18100000000, '小悦', 18200000000, '蓉宝', 18300000000, 'aiyuechuang', 18400000000, 'Bornforthis', 18500000000]

# 获取输入
name_input = input('Enter your search name: ')
name_index = phone_book.index(name_input)
phone_get = phone_book[name_index+1]

print(f'The {name_input} phone number is: {phone_get}.')

#-------output-------
Enter your search name: aiyuechuang
The aiyuechuang phone number is: 18400000000.
```











