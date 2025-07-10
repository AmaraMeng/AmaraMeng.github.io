---
title: 13. 函数
icon: boke
date: 2025-07-03 14:01:00
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

## 1. 函数的概念

### 1.1 数学函数与计算机函数

数学函数：y = f(x)

计算机函数：代码片段

- 一段具有特定功能的、可重复使用的代码。
- 用函数名表示并通过函数名完成调用。

### 1.2 使用函数的意义

- 代码的重复利用（实际上也会把代码导入进来，但是肉眼上看只需要函数名）；
- 减少程序中代码的重复量，使代码更加容易被理解；
- 让代码更易于维护与更新，只需修改封装的函数代码，其他调用的地方都会随之修改。

## 2. 函数的使用

函数可分为内置函数和用户自定义函数：

内置函数：

- Python 编程语言中已经被定好功能的函数。
- 可以直接调用来执行特定的任务。

用户自定义函数：

- 函数的功能和使用方法都由用户决定。

### 2.1 内置函数

输出函数：`print()` 

获取用户输入的函数：`input()` 

类型转换函数：`int()` , `float()` , `str()` 等。



```python
a = abs(-1)
print(a)

b = int('12')
c = 13
print(b+c)

#-------output-------
1
25
```



### 2.2 内置标准函数库— math 函数

除了内置函数外，Python 还有内置的标准函数库。

当我们把这些额外的函数库导入到我们的程序里时，我们可以用这些函数库中提供的方法。

访问这些函数时需要以 **库名.函数名**  的方式来应用。



**常用 math 函数总结**

| 常用函数               | 作用          | 常见用途       |
| ---------------------- | ------------- | -------------- |
| `pi`, `e`              | 常数          | 圆形、指数运算 |
| `sqrt`                 | 平方根        | 几何、方差     |
| `pow`                  | 幂运算        | 计算 x^y       |
| `exp`                  | e 的幂        | 指数增长       |
| `log`                  | 对数          | 信息论、熵     |
| `factorial`            | 阶乘          | 排列组合       |
| `gcd`                  | 最大公约数    | 分数约简       |
| `fabs`                 | 绝对值        | 距离           |
| `floor`, `ceil`        | 向下/向上取整 | 分段           |
| `trunc`                | 截断          | 舍去小数       |
| `sin`, `cos`, `tan`    | 三角函数      | 角度、波形     |
| `asin`, `acos`, `atan` | 反三角        | 计算角度       |
| `radians`, `degrees`   | 度 ↔ 弧度     | 单位转换       |
| `isclose`              | 浮点数比较    | 相等判断       |
| `hypot`                | 斜边          | 距离           |



#### 2.2.1 `math.pi`  和  `math.e` 

```python
import math

print('π = ', math.pi)     # π =  3.141592653589793
print('e = ', math.e)      # e =  2.718281828459045
```

`math.pi` 在计算圆面积、圆周长时常用。

 `math.e`  在指数运算、自然对数等场景常用。



#### 2.2.2 `math.sqrt(x)` 开平方

```python
import math

x = 16
result = math.sqrt(x)
print(f'{x} 的平方根是 {result}')    # 4.0
```

等价于 `x ** 0.5` ，但是`math.sqrt(x)` 的可读性更好。



#### 2.2.3 `math.pow(x, y)` 幂

```python
import math

result = math.pow(2, 3)
print('2 的 3 次幂 = ', result)      # 8.0
```

与内置的 `**` 运算符类似，但 `math.pow()` 总是返回 **`float` ** 。



#### 2.2.4 `math.exp(x)`  e 的几次幂

```python
import math

result = math.exp(2)
print('e 的 2 次幂 = ', result)      # 7.38905609893065
```

计算指数增长很常用，比如复利、连续增长。



#### 2.2.5 `math.log(x[ , base])` （源代码显示，实际 `math.log(x, base)` ）

```python
import math

print(math.log(8, 2))      # 3.0 以2为底， 2^3 = 8
print(math.log(10))        # ln(10) 自然对数，不写以 e 为底
```

`math.log(x)` → 自然对数（以 e 为底）

`math.log10(x)` → 以 10 为底

`math.log2(x)` → 以 2 为底 （Python 3.3+）



#### 2.2.6 `math.factorial(x)` 阶乘

```python
import math

print(math.factorial(5))    # 120， 指的是 5！ = 5 * 4 * 3 * 2 * 1 
```

常用于组合、排列、概率



#### 2.2.7 `math.gcd(a, b)`  最大公约数

```python
import math

print(math.gcd(12, 18))    # 6
```

求最大公约数，常用于分数约简等。



#### 2.2.8 `math.fabs(x)` 绝对值，返回浮点数

```python
import math

print(math.fabs(-7))    # 7.0
```

类似内置 `abs()` ，只是 `math.fabs` 返回浮点数。



#### 2.2.9 `math.floor(x)` 和 `math.ceil(x)` 

```python
import math

x = 3.7

print(math.floor(x))     # 3
print(math.ceil(x))      # 4
```

`floor` 常用于取不超过给定值的最大整数。

`ceil` 用于取不小于给定值的最小整数。



#### 2.2.10 `math.trunc(x)` 截断小数部分

```python
import math

x = -3.7

print(math.trunc(x))     # -3
```

类似 `int()` 转换，直接去掉小数部分，**不四舍五入**。



#### 2.2.11 三角函数 sin cos tan

```python
import math

angle = math.pi / 2        # 90度
print(math.sin(angle))     # 1.0
print(math.cos(angle))     # 6.123233995736766e-17 ≈ 0
print(math.tan(angle))     # 非常大，趋于无穷
```



注意角度要先转换成弧度：`radians = degrees(角度) × π / 180` 。

遵循数学库的通用标准

π/2 弧度 = 90 度

π 弧度 = 180 度

因此利用公式， `line4` 也可以写为 `print(math.sin(90 * math.pi / 180))     # 1.0` 。

也可以利用函数 `angle = math.radians(degress)` ，将度数转化为弧度 `print(math.sin(math.radians(90)))  `。



#### 2.2.12 反三角函数 asin acos atan

```python
import math

x = 0.5
angle = math.asin(x)
print('asin(0.5) = ', angle, '弧度')
print('≈', math.degrees(angle), '度')

#-------output-------
asin(0.5) =  0.5235987755982989 弧度
≈ 30.000000000000004 度
```



#### 2.2.13 `math.hypot(x, y)` 

```python
import math

print(math.hypot(3, 4))    # 5.0
```

常用于2D平面距离计算。





### 2.3  内置标准函数库— random 函数



#### 2.3.1 1️⃣ 基础随机数生成



| 函数                             | 用途                                         | 解释                 |
| -------------------------------- | -------------------------------------------- | -------------------- |
| `random()`                       | 生成 0.0 \~ 1.0 之间的随机小数               | 左闭右开 \[0.0, 1.0) |
| `uniform(a, b)`                  | 生成 a \~ b 之间的随机小数                   | 左闭右闭 \[a, b]     |
| `randint(a, b)`                  | 生成 a \~ b 之间的随机整数                   | 左闭右闭 \[a, b]     |
| `randrange(start, stop[, step])` | 从 range(start, stop, step) 中随机选一个整数 | 类似 `range()`       |



```python
import random

print(random.random())

print(random.uniform(1, 10))

print(random.randint(1, 10))

print(random.randrange(0, 100, 5))

#-------output-------
0.7533060472818913
4.265715521633123
8
5
```



保留小数时，可以用前面学到的格式化方法，也可以用`round` 。

```python
print(round(10.111, 2)) # 四舍五入，保留两位小数

#-------output-------
10.11
```



#### 2.3.2 2️⃣ 随机选择与打乱



| 函数                | 用途                          | 解释                   |
| ------------------- | ----------------------------- | ---------------------- |
| `choice(seq)`       | 从序列中随机选 1 个元素       | 列表、元组、字符串都行 |
| `choices(seq, k=N)` | 从序列中随机选 N 个（可重复） | 有放回抽样             |
| `sample(seq, k=N)`  | 从序列中随机选 N 个（不重复） | 无放回抽样             |
| `shuffle(seq)`      | 将序列原地打乱                | 修改原列表             |



```python
import random

items = ['apple', 'banana', 'orange', 'pear']

print(random.choice(items))     # 随机选一个

print(random.choices(items, k=3))    # 随机选 3 个，可重复

print(random.sample(items, 3))     # 随机选 3 个，不重复

#-------output-------
orange
['orange', 'pear', 'orange']
['orange', 'apple', 'pear']
```



```python
import random

numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)     # 原地打乱
print(numbers)

#-------output-------
[4, 1, 3, 5, 2]
```



#### 2.3.3 3️⃣ 随机分布函数（稍进阶）



| 函数                         | 用途           | 解释 |
| ---------------------------- | -------------- | ---- |
| `betavariate(alpha, beta)`   | Beta 分布      |      |
| `expovariate(lambd)`         | 指数分布       |      |
| `gauss(mu, sigma)`           | 高斯正态分布   |      |
| `normalvariate(mu, sigma)`   | 正态分布       |      |
| `lognormvariate(mu, sigma)`  | 对数正态分布   |      |
| `vonmisesvariate(mu, kappa)` | von Mises 分布 |      |
| `gammavariate(alpha, beta)`  | Gamma 分布     |      |



```python
import random

print(random.gauss(0, 1))            # 均值0，标准差1的正态分布
print(random.normalvariate(0, 1))    # 同样生成正态分布，与上一个生成的正态分布的方法不一样
print(random.expovariate(1.5))       # 指数分布

#-------output-------
0.28990359456330556
0.18178579651038132
0.27150452972659767
```

输出的结果是一组数据中随机选了一个输出，如果需要输出多个数据，可以借助 for 循环：

```python
import random

lst = []
for _ in range(5):      # 生成 5 个数据，因为 i 后续用不到，可以用下划线代替
    lst.append(random.gauss(0, 1))
print(lst)

#-------output-------
[1.7322778531816645, 1.5177947097095652, -1.4917899545932514, 0.7663045647487722, -0.0974832602527749]
```



**场景使用：**

需要安装 `matplotlib` 包，安装失败的话需要关闭代理后再尝试。

```python
import random
import matplotlib.pyplot as plt

# 生成 1000 个指数分布随机数
expo_nums = [random.expovariate(1.5) for _ in range(1000)]

# 画直方图
plt.hist(expo_nums, bins=30, density=True, edgecolor='black')
plt.title('Exponential Distribution (lambda=1.5)')
plt.xlabel('Value')
plt.ylabel('Density')
plt.show()
```

输出结果如下：

![](./13-functions.assets/image-20250703160410295.png)

## 3. 函数的定义

### 3.1 定义一个函数

`def` 是 `define` 的缩写，表示定义一个函数。

格式如下：

`def 函数名称():` 

​	`函数内的语句` 

当我们需要这个函数的时候，直接写 `函数名称+()` 即可。

**注意函数名称中间不要有空格，可以用下划线代替。**

```python
def HelloUser():
    print("Hello")

HelloUser()

#-------output-------
Hello
```



### 3.2 利用参数向函数传递信息

#### 3.2.1 传递一个参数

函数名称后的括号内可以输入参数，定义函数时可以对参数进行命名，调用函数时在括号内输入该参数的内容即可。

```python
def HelloUser(username):             #括号内为参数
    print("Hello! " + username)

HelloUser("lilei")                   #调用函数

#-------output-------
Hello! lilei
```



#### 3.2.2 传递多个参数

```python
def TestGrade(name, grade):
    print(name + '的成绩是' + grade + '。')

TestGrade('李雷', '99')

#-------output-------
李雷的成绩是99。
```



解决参数可能传反的问题：

若调用参数时，输入的是 `TestGrade(99, '李雷')` ，那么在执行 `print(name + '的成绩是' + str(grade) + '。')` 的时候就会报错，因为 `name` 中传入的是整型而非字符串，没有进行强制转换就无法拼接，那么为了防止传错参数，我们在调用的时候可以在参数前加上变量名。

```python
def TestGrade(name, grade):
    print(name + '的成绩是' + str(grade) + '。')

TestGrade(grade=99, name= '李雷')

#-------output-------
李雷的成绩是99。
```

类似的将变量名引入进行指定，参见 `format` 部分。



注意：开始指定参数变量后，后面的参数都需要指定，但前面的参数可以不指定。

```python
def TestGrade(age, name, grade):
    print(f'{age}岁的{name}的成绩是{grade} 。')

TestGrade(18, name = '李雷', grade = 99)     # 从第2个位置开始指定变量名了，之后的参数都需指定，但是可以看到第1个位置的无需指定。

#-------output-------
18岁的李雷的成绩是99。
```





### 3.3 Quiz

定义一个函数，含有三个参数，前两个是数字，第三个是运算符，需要得到前两个数字通过输入的运算符得到的结果。

方法一：

`if … elif`

```python
def calculate(num1, num2, operator):
    if operator == '+':
        print(f'{num1}加{num2}是{num1 + num2}')
    elif operator == '-':
        print(f'{num1}减{num2}是{num1 - num2}')
    elif operator == '*':
        print(f'{num1}乘{num2}是{num1 * num2}')
    elif operator == '/':
        print(f'{num1}除{num2}是{num1 / num2}')
    else:
        print('输入错误，请重新输入！')

calculate(1,2, '+')

#-------output-------
1加2是3
```



方法二：

`eval()` 

```python
def calculate(num1, num2, operator):
    print(num1, operator, num2, '=', eval(str(num1) + operator + str(num2)))

calculate(1, 2, '/')

#-------output-------
1 / 2 = 0.5
```

如何优化？

```python
def calculate(num1, num2, operator):
    result = f'{num1} {operator} {num2}'        # 利用 f 将其拼接
    print(f'{result} = {eval(result)}')         # 将拼接好的直接用 eval 计算

calculate(1, 2, '/')

#-------output-------
1 / 2 = 0.5
```

用 `eval` 的问题：只能进行简单的加减乘除运算。



### 3.4 函数设置默认值

一般我们在写函数时，可以设置默认值，便于用户在不提供具体参数值时正常使用函数，避免发生因为没有传入参数而产生的报错。另一种情况就是：函数的参数可选，此时也需要设置默认参数。

主要用途：

- 为函数提供一个逻辑兜底：如果调用者不传递参数或者不满足某些条件，我们也希望函数能有一个合理的“默认行为”。
- 使参数具有可选性：有些参数并不是每次都需要提供，这时给它们设置默认值能简化函数的调用。

示例如下：

```python
def greet(name='小明'):    # 简单的问候函数，如果不传入 name 参数，则使用默认值“小明”。
    print(f'你好，{name}!')

# 调用示例
greet()
greet('张三')

#-------output-------
你好，小明!
你好，张三!
```



注意：若只需要设置部分参数的默认值，则和前面调用函数时，引入变量的逻辑相同，未设置默认值的放前，设置默认值的放后，否则会报错。

错误示例：

```python
def greet(name='小明', age):   
    print(f'你好，{age}岁的{name}!')
```

正确用法：

```python
def greet(age, name='小明',):
    print(f'你好，{age}岁的{name}!')

# 调用示例
greet(18)
greet(20, '张三')

#-------output-------
你好，18岁的小明!
你好，20岁的张三!
```



用 `None` 作为默认值：

- 有时我们想要将某个参数设置为可选，但不清除具体应该给它设置哪个默认值。
- 希望在函数内部通过判断是否真的传递这个参数。

```python
def process_data(data=None):                          # 若没有传入数据，使用默认文件的数据，否则处理传入的数据
    if data is None:
        print("未提供 data 参数，使用默认数据！")
        # 这里就可以读取默认文件或默认数据
        data = [1, 2, 3, 4]
    print(f'正在处理：{data}')

# 调用示例
process_data()                       # 未提供 data 参数，使用默认数据
process_data(['a', 'b', 'c'])

#-------output-------
未提供 data 参数，使用默认数据！
正在处理：[1, 2, 3, 4]
正在处理：['a', 'b', 'c']
```



问题：参数是可变的数据类型，若用户没有传入参数，使用默认值，那么多次调用时会互相影响。

```python
def append_item(item, my_list=[]):
    my_list.append(item)
    return my_list

# 调用函数
result1 = append_item(1)   # 第一次调用，my_list=[1]
print(result1)

result2 = append_item(2)    # 第二次调用，列表里已经有 [1] 了
print(result2)              # 输出为 [1, 2]，意外的把第一次调用追加进来了

result3 = append_item(3)    # 第三次调用，继续累加
print(result3)              # 输出 [1, 2, 3]

#-------output-------
[1]
[1, 2]
[1, 2, 3]
```



**如何解决这个问题？** 

尝试一：错误

```python
def append_item(item, my_list=[]):
    my_list = []                # 增加这一步
    my_list.append(item)
    return my_list
```

如果在函数内更改，那么不管是使用默认值和自定义值都会被这句命令覆盖掉。

**解决方法：** 

```python
def append_item(item, my_list=None):
    if my_list is None:                 # 先判断用户有没有传入参数，若没有传入参数，再设置默认值
        my_list = []
    my_list.append(item)
    return my_list


# 调用函数
result1 = append_item(1)  
print(result1)

result2 = append_item(2)   
print(result2)              

result3 = append_item(3)    
print(result3)             

#-------output-------
[1]
[2]
[3]
```



其他正确情况举例：

```python
def append_item(item, my_list=[]):
    my_list.append(item)
    return my_list


# 情况1:重新自定义传入的列表，不使用默认值，多次调用不会影响
result1 = append_item(10, ['a', 'b'])
print(result1)

result2 = append_item(20, ['c', 'd'])
print(result2)

# 情况2：单独传入自定义列表，多次调用的目的就是为了逐步增加
lst = ['a', 'b']
result3 = append_item(100, lst)
print(result3)

result4 = append_item(200, lst)
print(result4)

#-------output-------
['a', 'b', 10]
['c', 'd', 20]
['a', 'b', 100]
['a', 'b', 100, 200]
```





















