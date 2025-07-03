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

## 1. 函数的定义

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

### 2.1 使用一个函数（实现代码）

1. **内置函数** 

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



2. **内置标准函数库** 

除了内置函数外，Python 还有内置的标准函数库。

当我们把这些额外的函数库导入到我们的程序里时，我们可以用这些函数库中提供的方法。

访问这些函数时需要以 **库名.函数名**  的方式来应用。

- `math.pi`  和  `math.e` 

```python
import math

print('π = ', math.pi)     # π =  3.141592653589793
print('e = ', math.e)      # e =  2.718281828459045
```

`math.pi` 在计算圆面积、圆周长时常用。

 `math.e`  在指数运算、自然对数等场景常用。



- `math.sqrt(x)` 开平方

```python
import math

x = 16
result = math.sqrt(x)
print(f'{x} 的平方根是 {result}')    # 4.0
```

等价于 `x ** 0.5` ，但是`math.sqrt(x)` 的可读性更好。



- `math.pow(x, y)` 幂

```python
import math

result = math.pow(2, 3)
print('2 的 3 次幂 = ', result)      # 8.0
```

与内置的 `**` 运算符类似，但 `math.pow()` 总是返回 **`float` ** 。



- `math.exp(x)`  e 的几次幂

```python
import math

result = math.exp(2)
print('e 的 2 次幂 = ', result)      # 7.38905609893065
```

计算指数增长很常用，比如复利、连续增长。



- `math.log(x[ , base])` （源代码显示，实际 `math.log(x, base)` ）

```python
import math

print(math.log(8, 2))      # 3.0 以2为底， 2^3 = 8
print(math.log(10))        # ln(10) 自然对数，不写以 e 为底
```

`math.log(x)` → 自然对数（以 e 为底）

`math.log10(x)` → 以 10 为底

`math.log2(x)` → 以 2 为底 （Python 3.3+）



- `math.factorial(x)` 阶乘

```python
import math

print(math.factorial(5))    # 120， 指的是 5！ = 5 * 4 * 3 * 2 * 1 
```

常用于组合、排列、概率



- `math.gcd(a, b)`  最大公约数

```python
import math

print(math.gcd(12, 18))    # 6
```

求最大公约数，常用于分数约简等。



- `math.fabs(x)` 绝对值，返回浮点数

```python
import math

print(math.fabs(-7))    # 7.0
```

类似内置 `abs()` ，只是 `math.fabs` 返回浮点数。



- `math.floor(x)` 和 `math.ceil(x)` 

```python
import math

x = 3.7

print(math.floor(x))     # 3
print(math.ceil(x))      # 4
```

`floor` 常用于取不超过给定值的最大整数。

`ceil` 用于取不小于给定值的最小整数。



- `math.trunc(x)` 截断小数部分

```python
import math

x = -3.7

print(math.trunc(x))     # -3
```

类似 `int()` 转换，直接去掉小数部分，**不四舍五入**。



- 三角函数 sin cos tan

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



- 反三角函数 asin acos atan

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



- `math.hypot(x, y)` 

```python
import math

print(math.hypot(3, 4))    # 5.0
```

常用于2D平面距离计算。



### 2.2 常用 math 函数总结

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



### 2.3 常用 random 函数总结

| 函数                             | 用途                                         | 解释                 |
| -------------------------------- | -------------------------------------------- | -------------------- |
| `random()`                       | 生成 0.0 \~ 1.0 之间的随机小数               | 左闭右开 \[0.0, 1.0) |
| `uniform(a, b)`                  | 生成 a \~ b 之间的随机小数                   | 左闭右闭 \[a, b]     |
| `randint(a, b)`                  | 生成 a \~ b 之间的随机整数                   | 左闭右闭 \[a, b]     |
| `randrange(start, stop[, step])` | 从 range(start, stop, step) 中随机选一个整数 | 类似 `range()`       |

#### 2.3.1 1️⃣ 基础随机数生成

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



| 函数                | 用途                          | 解释                   |
| ------------------- | ----------------------------- | ---------------------- |
| `choice(seq)`       | 从序列中随机选 1 个元素       | 列表、元组、字符串都行 |
| `choices(seq, k=N)` | 从序列中随机选 N 个（可重复） | 有放回抽样             |
| `sample(seq, k=N)`  | 从序列中随机选 N 个（不重复） | 无放回抽样             |
| `shuffle(seq)`      | 将序列原地打乱                | 修改原列表             |



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



