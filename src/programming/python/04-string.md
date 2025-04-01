---
title: 4. 字符串
icon: boke
date: 2025-03-27 20:02:55
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
headerDepth: 5
comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---

## 1. 字符串的创建

三种方法：

1. 单引号
2. 双引号
3. 三个单引号（三个双引号）

- 单引号、双引号

```python
string = 'I am born for this.'    #英文表达
#string = 'I'm born for this.'     # I am 缩写成 I‘m，与表示字符串的引号冲突，错误。
string = "I'm born for this."     # 正确表达
print(string)

#-------output-------
I'm born for this.
```

问题：无法直接输出段落。

```python
string = "我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创\
\
浅者见浅，深者见深——黄家宝\
\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\
\
先实现功能，再去优化，否则一切会很乱。——AI悦创\
\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"
print(string)

#-------output-------    在每行末尾增加反斜杠，虽然能解决单/双引号无法输出段落的问题，但输出的内容没有格式。
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
```

- 三个单引号（三个双引号）

    特点：段落**原样输出**。

    ```python
    string = """我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
    
    浅者见浅，深者见深——黄家宝
    
    起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。
    
    先实现功能，再去优化，否则一切会很乱。——AI悦创
    
    凡是你不能清晰写下来的东西，都是你还没有真正理解的东西"""
    print(string)
    
    #-------output-------
    我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
    
    浅者见浅，深者见深——黄家宝
    
    起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。
    
    先实现功能，再去优化，否则一切会很乱。——AI悦创
    
    凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
    ```

## 2. 字符串的长度

```python
paragraph = "Hello, Ran!"
print(len(paragraph))

#-------output-------
11
```

字符串是从1开始数，下标从左到右是从0开始，==注意区分==。因此，字符串长度 - 1 = 下标最大值。

## 3. 字符串的获取

1. 获取单个字符

    ```python
    string = "bornforthis"
    select = string[10]                 # 方法一： 1. 注意是方括号；2. 方括号内为字符串下标；3. 从左向右的下标
    select = string[-1]                 # 方法二： 从右向左的下标
    select = string[len(string)-1]      # 方法三： 取最后一位，可以参考长度和下标的转换
    print(select)
    
    #-------output-------
    s
    ```

2. 获取一串连续字符

    - 方法一：从左向右取下标

        ```python
        string = "bornforthis"
        select = string[0: 4]      #中括号内第一位数字表示字符串开始位置的下标，第二位数字表示结束位置的下标+1，用数学解释即 [0, 4)
        print(select)
        
        #-------output-------
        born
        ```

    - 方法二：从右向左取下标（右数第一位下标是 ``-1` 如何实现 `end + 1`？）

        ::: code-tabs

        @tab 错误取负数下标

        ```python
        string2 = "bornforthis"
        select2 = string2[-4:-1]
        print(select2)
        
        #-------output-------
        thi
        ```

        @tab 正确取负数下标

        ```python
        string2 = "bornforthis"
        select2 = string2[-4:]      #-4 是负数下标，end 处空白默认从左向右取到字符串的最后，就不需要考虑 end + 1 没有对应下标的问题，end 部分未指定，则默认从左向右取
        print(select2)
        
        #-------output-------
        this
        ```

        :::

3. 获取等间隔的字符

    ```python
    string = "0123456789"
    select = string[1: len(string): 2]      #语法：select = string[start: end: step] step指步长，即走几步 or 两相邻字符下标相减
    print(select)
    
    string2 = "bornforthis"
    select2 = string2[0: len(string2): 3]
    print(select2)
    
    select3 = string2[1: len(string2): 3]
    print(select3)
    
    #-------output-------
    13579
    bnri
    ofts
    ```

    若要取的字符串开头/结尾是整段的字符串的开头/结尾，则可以省略 start 和 end，不是整段字符串开头/结尾则不能省略下标。

    ```python
    string = "0123456789"
    select = string[1:: 2]
    print(select)
    
    string2 = "bornforthis"
    select2 = string2[:: 3]
    print(select2)
    select3 = string2[1:: 3]
    print(select3)
    
    #-------output-------
    13579
    bnri
    ofts
    ```

    负数下标的提取（下标从右向左）

    ```python
    string = "0123456789"
    select = string[-1: -11: -1]    #可简写成 select = string[:: -1] 步长 -1 表示从右向左取（-），每次走1步，只有步长方向和start-end方向一致时才能输出结果
    print(select)
    
    #-------output-------
    9876543210
    ```

    思考流程：

    ![](./04-string.assets/string-start-end-step.svg)

## 4. 字符串的内置方法

### 4.1 upper()

将字符串内容全部变为大写。

```python
string = "bornforthis"
upper_string = string.upper()
print(upper_string)

#-------output-------
BORNFORTHIS
```

### 4.2 lower()

将字符串内容全部变为小写。

```python
string = "BORNFORTHIS"
lower_string = string.lower()
print(lower_string)

#-------output-------
bornforthis
```

### 4.3 capitalize()

将字符串首字母大写。（只对第一个字母大写，其他后面的字母变为小写）

```python
string = "bornForthis to Aivc"
capitalize_string = string.capitalize()
print(capitalize_string)

#-------output-------
Bornforthis to aivc
```

### 4.4 title()

将字符串中每个单词的首字母大写，其余字符都转换成小写。

::: code-tabs

@tab 1. 每个单词首字母大写

```python
string = "bornforthis to aivc"
title_string = string.title()
print(title_string)

#-------output-------
Bornforthis To Aivc
```

@tab 2. 各种分隔符依旧首字母大写

```python
string = "bornforthis-to-aivc"
title_string = string.title()
print(title_string)

#-------output-------
Bornforthis-To-Aivc
```

@tab 3. 大小写字母混合，除首字母外其余均小写

```python
string = "boRnforThis to aIvc"
title_string = string.title()
print(title_string)

#-------output-------
Bornforthis To Aivc
```



:::

### 4.5 startswith()

检测字符串是否以特定字符或单词开头，返回布尔值。

::: code-tabs

@tab 1. 是否 b 开头

```python
string = "bornforthis"
startswith_string= string.startswith("b")
print(startswith_string)

#-------output-------
True
```

@tab 2. 是否 bo 开头

```python
string = "bornforthis"
startswith_string= string.startswith("bo")
print(startswith_string)

#-------output-------
True
```

@tab 3. 是否 p 开头

```python
string = "bornforthis"
startswith_string= string.startswith("p")
print(startswith_string)

#-------output-------
False
```

@tab 4. 是否 b1 开头

```python
string = "bornforthis"
startswith_string= string.startswith("b1")
print(startswith_string)

#-------output-------
False
```



:::

### 4.6 endswith()

检测字符串是否以特定的字符或单词结尾，返回布尔值。

::: code-tabs

@tab 1. 是否 s 结尾

```python
string = "bornforthis"
endswith_string= string.endswith("s")
print(endswith_string)

#-------output-------
Ture
```

@tab 2. 是否 is 结尾

```python
string = "bornforthis"
endswith_string= string.endswith("is")
print(endswith_string)

#-------output-------
Ture
```

@tab 3. 是否 i 结尾

```python
string = "bornforthis"
endswith_string= string.endswith("i")
print(endswith_string)

#-------output-------
False
```

@tab 4. 是否 s6 结尾

```python
string = "bornforthis"
endswith_string= string.endswith("s6")
print(endswith_string)

#-------output-------
False
```



:::

### 4.7 count()

统计特定字符或单词在目标字符串中存在的次数。

::: code-tabs

@tab 1. 字母 r 出现的次数

```python
string = "bornforthis"
count_string= string.count("r")
print(count_string)

#-------output-------
2
```

@tab 2. 字母 or 出现的次数

```python
string = "bornforthis"
count_string= string.count("or")
print(count_string)

#-------output-------
2
```

@tab 3. 字母 a 出现的次数（字符串中无）

```python
string = "bornforthis"
count_string= string.count("a")
print(count_string)

#-------output-------
0
```

@tab 4. 字符串 ap 出现的次数

```python
string = "bornforthis"
count_string= string.count("ap")
print(count_string)

#-------output-------
0
```



:::

### 4.8 find()

寻找目标字符或单词在特定字符串中，第一次出现的下标。也就是说，有重复，也之返回第一次出现的下标；

若查找单词，则返回目标单词第一个字符的下标；

若查询的内容不存在，则返回 `-1`。

::: code-tabs

@tab 1. 字符 o 第一次出现的位置

```python
string = "bornforthis"
find_string= string.find("o")
print(find_string)

#-------output-------
1
```

@tab 2. 字符 a 第一次出现的位置

```python
string = "bornforthis"
find_string= string.find("a")
print(find_string)

#-------output-------
-1
```

@tab 3. 子字符串 for 第一次出现的位置

```python
string = "bornforthis"
find_string= string.find("for")
print(find_string)

#-------output-------
4
```

@tab 4. 子字符串 aivc 第一次出现的位置

```python
string = "bornforthis"
find_string= string.find("aivc")
print(find_string)

#-------output-------
-1
```



:::















