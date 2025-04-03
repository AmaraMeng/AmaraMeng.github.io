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

### 4.9 index()

寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 `index()` 返回目标单词的第一个字符下标。

如果查询的字符或单词不存在，则报错。

::: info index()  vs.  find()

`index()` 在找不到指定字符/字符串时会报错，提供文件信息和位置，便于定位被搜索的字符串的位置，那么在文件或代码较多的情况下，使用 `index()` 可以帮助精准定位。但报错会引发程序运行停止，若不希望程序中止，则需要确保检索的字符/字符串一定存在于被检索的字符串中。



`find()` 的可控性更强，搜索不到时，会返回值 `-1` ，但是程序不会停止，在发布或面向用户场景下更为合适。

:::



::: code-tabs

@tab 1. 查找字符 o 第一次出现的位置

```python
string = "bornforthis"
index_result = string.index("o")
print(index_result)

#-------output-------
1
```

@tab 2. 查找字符 a 第一次出现的位置

```python
string = "bornforthis"
index_result = string.index("a")
print(index_result)

#-------output-------
Traceback (most recent call last):
  File "D:\Coder\test 1\test 1.1.py", line 2, in <module>
    index_result = string.index("a")
ValueError: substring not found
```

@tab 3. 子字符串 for 第一次出现的位置

```python
string = "bornforthis"
index_result = string.index("for")
print(index_result)

#-------output-------
4
```

@tab  4. 子字符串 aivc 第一次出现的位置

```python
string = "bornforthis"
index_result = string.index("aivc")
print(index_result)

#-------output-------
Traceback (most recent call last):
  File "D:\Coder\test 1\test 1.1.py", line 2, in <module>
    index_result = string.index("aivc")
ValueError: substring not found
```



:::



:::  note 使用场景

```python
string = "Experiment-record.xlsx"
index_result = string.index('.')
filename = string[:index_result]
suffix = string[index_result+1:]
print(filename)
print(suffix)

#-------output-------
Experiment-record
xlsx
```

:::

::: note 使用场景练习

```python
line = "ID=1234;NAME=Tom;AGE=25"
name_start = line.index('NAME=')
name_end = line.index(';AGE')
name = line[name_start+5:name_end]

print(name_start)
print(name_end)
print(name)

#-------output-------
8
16
Tom
```



:::

### 4.10 isdigit()

判断字符串是不是纯数字字符串，字符串中但凡有个字符是非数字，则返回 False 。

::: code-tabs

@tab 判断是否纯数字

```python
string = "12345678"
isdigit_result = string.isdigit()
print(isdigit_result)

#-------output-------
True
```

@tab 若数字中出现空格

```python
string = "1234 5678"
isdigit_result = string.isdigit()
print(isdigit_result)

#-------output-------
False
```



:::



### 4.11 isalpha()

判断字符串是不是纯字母字符串，字符串中但凡有一个非字母的，则返回 False 。

::: code-tabs

@tab 判断是否全为字母

```python
string = "Impeppapig"
isalpha_result = string.isalpha()
print(isalpha_result)

#-------output-------
True
```

@tab 出现空格

```python
string = "Im peppa pig"
isalpha_result = string.isalpha()
print(isalpha_result)

#-------output-------
False
```



:::



### 4.12 isalnum()

判断字符串是否纯数字、纯字母、纯数字字母字符串，字符串中如果包含任何非数字或字母字符，则返回 False 。

::: code-tabs

@tab 判断是否全为数字字母

```python
code = "peppapig1"
valid_code = code.isalnum()
print(valid_code)

#-------output-------
True
```

@tab 出现空格

```python
code = "peppa pig1"
valid_code = code.isalnum()
print(valid_code)

#-------output-------
False
```



:::

### 4.13 isupper()

判断字符串是否全大写字母组成。

::: code-tabs

@tab 1. 判断是否全大写字母

```python
name = "PEPPERPIG"
isupper_name = name.isupper()
print(isupper_name)

#-------output-------
True
```

@tab 2. 出现空格、其他符号

```python
name = "PEPPER PIG1-"
isupper_name = name.isupper()
print(isupper_name)

#-------output-------
True
```

@tab 3. 混合大小写

```python
name = "PEPPERpig"
isupper_name = name.isupper()
print(isupper_name)

#-------output-------
False
```

@tab 4. 全小写字母

```python
name = "pepperpig"
isupper_name = name.isupper()
print(isupper_name)

#-------output-------
False
```



:::

### 4.14 islower()

判断字符串是否全小写字母组成。

::: code-tabs

@tab 1. 是否全小写

```python
name = "pepper pig1-=、"
islower_name = name.islower()
print(islower_name)

#-------output-------
True
```

@tab 2. 大小写混合

```python
name = "PEPPERpig"
islower_name = name.islower()
print(islower_name)

#-------output-------
False
```

@tab 3. 全部大写

```python
name = "PEPPERPIG"
islower_name = name.islower()
print(islower_name)

#-------output-------
False
```



:::

### 4.15 isspace()

判断字符串是否全部由空格组成。

::: code-tabs

@tab **空格**字符串

```python
input1 = "   "
isspace_input1 = input1.isspace()
print(isspace_input1)

#-------output-------
True
```

@tab **空**字符串

```python
input1 = ""
isspace_input1 = input1.isspace()
print(isspace_input1)

#-------output-------
False
```

@tab 非空格字符串

```python
input1 = "123asd-=["
isspace_input1 = input1.isspace()
print(isspace_input1)

#-------output-------
False
```



:::

### 4.16 strip()



::: code-tabs

@tab 1. 清除字符串前后（两侧）空格

```python
string = "     I'm pepper pig.     "
strip_string = string.strip()
print("Original string:", string)
print("String after stripping:", strip_string)

#-------output-------
Original string:      I'm pepper pig.     
String after stripping: I'm pepper pig.
```

@tab 2. 指定两侧需要清除的字符串（需连续）

```python
string = "----I'm pepper pig.----"
strip_string = string.strip("-")
print("Original string:", string)
print("String after stripping:", strip_string)

#-------output-------
Original string: ----I'm pepper pig.----
String after stripping: I'm pepper pig.
```



:::

::: code-tabs

@tabs 1. 清除两侧指定字符串，且指定的字符串中间间隔其他字符

```python
string = "---  -I'm pepper pig.--  ?--"
strip_string = string.strip("-")
print("Original string:", string)
print("String after stripping:", strip_string)

#-------output-------
Original string: ---  -I'm pepper pig.--  ?--
String after stripping:   -I'm pepper pig.--  ?
```

@tab 2. 解决方案

```python
string = "---  -I'm pepper pig.--  ?--"
strip_string = string.strip(" -?")      #把要去掉的都扔在里面，不分先后顺序
print("Original string:", string)
print("String after stripping:", strip_string)

#-------output-------
Original string: ---  -I'm pepper pig.--  ?--
String after stripping: I'm pepper pig.
```



:::



### 4.17 lstrip()

去掉左侧，()内包含的所有字符的连续字符串。

::: code-tabs

@tab 1. 去掉左侧空格

```python
string = "    I'm pepper pig.    "
lstrip_string = string.lstrip()
print("Original string:", string)
print("String after stripping:", lstrip_string)

#-------output-------
Original string:     I'm pepper pig.    
String after stripping: I'm pepper pig.    
```

@tab 2. 去掉左侧字符

```python
string = "-----I'm pepper pig.-----"
lstrip_string = string.lstrip("-")
print("Original string:", string)
print("String after stripping:", lstrip_string)

#-------output-------
Original string: -----I'm pepper pig.-----
String after stripping: I'm pepper pig.-----
```

@tab 去掉左侧多种字符

```python
string = "--!--?-I'm pepper pig.-!---?-"
lstrip_string = string.lstrip("?-!")
print("Original string:", string)
print("String after stripping:", lstrip_string)

#-------output-------
Original string: --!--?-I'm pepper pig.-!---?-
String after stripping: I'm pepper pig.-!---?-
```



:::

### 4.18 rstrip()

去掉右侧，()内包含的所有字符的连续字符串。

使用方法同 `lstrip()`



### 4.19 replace()

`.replace(old, newm count)` 括号内第一个位置传入需要替换的 ”旧字符“ ，第二个位置传入要替换的 ”新字符“ ，默认替换全部，count 控制替换次数。

```python
string = "I'm pepper pig."
replace_result = string.replace(" ", "!")
print("原本的字符串:", string)
print("替换后的字符串:", replace_result)

#-------output-------
原本的字符串: I'm pepper pig.
替换后的字符串: I'm!pepper!pig.
```













