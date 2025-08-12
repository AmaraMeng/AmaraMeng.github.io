---
title: 14. 类
icon: boke
date: 2025-07-31 15:11:04
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

## 1. 面向对象

将程序任务涉及到的事物抽象为一个个的对象，以这些对象为中心来写程序。

### 1.1 什么是类？

**类** 和 **实例**

物以类聚，人以群分

- 狗是一类动物，具有相同、相似属性。（类）
- 两只狗，半斤和八两，出生后不会互相影响，彼此是独立的个体。（实例）
- 当类改变的时候，实例也会受到影响；但实例改变时，不会影响其他实例或者整个类。



### 1.2 对象，你找到了吗？

![](./14-class.assets/image-20250807133509004.png)

1. 下面是一段错误代码，`dog_x` 和 `cat_x` 分别是狗和猫的位置坐标，在检测到用户输入为 “move” 时，让猫和狗都前进 10 的长度。

原代码如下，请修改：

```python
dog_x = 0
cat_x = 0

def dog_move():
    dog_x = dog_x + 10

def cat_move():
    cat_x = cat_x + 10

user_input = input()

if user_input == 'move':
    dog_move()
    cat_move()
```



个人修改如下：

```python
dog_x = 0
cat_x = 0

def dog_move():
    global dog_x
    dog_x = dog_x + 10
    return dog_x

def cat_move():
    global cat_x
    cat_x = cat_x + 10
    return cat_x

user_input = input()

if user_input == 'move':
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
    dog_move()
    cat_move()
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
   
```

复盘：

- 为什么要加上 global？因为 `dog_x` 是全局变量，如果不加上 global，函数内的 `dog_x` 会被视为局部变量，无法修改全局变量的值。
- return 可以不加，因为已经声明为全局变量了，后面输出可以直接使用。



2. 下面是另一位同学的错误修改，请找出错误：

```python
def dog_move():
    dog_x = 0
    dog_x = dog_x + 10


def cat_move():
    cat_x = 0
    cat_x = cat_x + 10


user_input = input('输入指令:')

if user_input == 'move':
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
    dog_move()
    cat_move()
    print('dog:{}, cat:{}'.format(dog_x, cat_x))
```

错误一：局部变量在函数外不能使用；

错误二：每次调用函数，`dog_x`  和 `cat_x`  都会被重置为 0，因此每次调用函数的时候，输出结果都是 10，一直在原地踏步。



3. 现在，除了猫和狗，还要加一个大象，让它也像猫狗一样前进 10。注意：不要机械的写代码，要好好感受一下写代码的时候有什么情绪，这对后续对象的理解有帮助。

感受：类似的东西在重复添加。我们上面定义了三个相似的函数，功能一样，只是**变量** 名称不一样，没必要创造这么多函数。例如：程序注册新用户，需要用户名、手机号、密码，那是不是要为每一个用户都创建一个函数来储存呢？

```python
# 我们现在有三个用户要注册，每个用户都要填写用户名、手机号、密码
# 如果我们不优化代码，那可能会像下面这样写：

def register_user1():
    username1 = input("请输入用户1的用户名：")
    phone1 = input("请输入用户1的手机号：")
    password1 = input("请输入用户1的密码：")
    print("用户1注册成功！用户名：{}，手机号：{}".format(username1, phone1))


def register_user2():
    username2 = input("请输入用户2的用户名：")
    phone2 = input("请输入用户2的手机号：")
    password2 = input("请输入用户2的密码：")
    print("用户2注册成功！用户名：{}，手机号：{}".format(username2, phone2))


def register_user3():
    username3 = input("请输入用户3的用户名：")
    phone3 = input("请输入用户3的手机号：")
    password3 = input("请输入用户3的密码：")
    print("用户3注册成功！用户名：{}，手机号：{}".format(username3, phone3))


# 现在我们要依次注册这三个用户
register_user1()
register_user2()
register_user3()
```

## 2. 一个例子：面向对象的方法

### 2.1 面向对象代码框架

接下来，我们要使用面向对象的方法来实现前面动物听到用户输入指令 `move` 就往前跑的功能。

```python
class Animal():
    def __init__(self):
        self.x = 0
        
    def move(self):
        self.x = self.x + 10

dog = Animal()
cat = Animal()

user_input = input('输入指令：')

if user_input == 'move':
    dog.move()
    cat.move()
    print('Dog position:', dog.x)
    print('Cat position:', cat.x)
```

上述代码包含几个内容：

- 类：一群有相似性的事物的集合，对应 Python 里的 class
- 对象：集合中的一个事物，对应 class 里生成的一个 object，比如代码中的 dog 和 cat。（其实就是上文提到的实例）
- 属性：对象的某个静态特征，是自身携带的，比如代码中的 x
- 函数：对象（实例）的某个动态能力，比如上述代码中的 `move()` 函数。



![](./14-class.assets/image-20250807140619593.png)



### 2.2 `_ _ init_ _(self)` 函数

自动调用函数

```python
class Animal():
    def __init__(self):                # 在一个对象生成时会被自动调用的函数
        self.x = 0
```

验证的代码如下：

```python
class Animal():
    def __init__(self):
        print('init function called')
        
dog = Animal()

#-------output-------
init function called
```

上述代码中，没有调用 `_ _init_ _()` 这个函数，但是将 dog 定义在 Animal 这个类别里的时候自动运行了这个函数，即自动调用的函数。类似于一出生就自带的天赋技能。



例子一：创建游戏角色。

每个角色一出生就会自动拥有一些天赋技能，这些技能不是手动添加的，而是角色一出生系统就帮你准备好了。

```python
class GameCharacter():
    def __init__(self):
        print('角色已创建，天赋技能已激活！')

hero = GameCharacter()

#-------output-------
角色已创建，天赋技能已激活！
```

例子二：

就像我们人类在一诞生的时候，没人教我们怎么呼吸、怎么让心脏跳动——这些能力是与生俱来的，是“出生那一刻就自动开始执行”的。Python 中的 __init__ 方法（函数），就像“呼吸”和“心跳”一样。当我们创建一个新的对象（生命、实例化）时，它会自动执行，不需要我们手动去调用。

```python
class Human():
    def __init__(self):
        print('一个新生命诞生了，正在自动启动呼吸和心跳系统。')

baby = Human()

#-------output-------
一个新生命诞生了，正在自动启动呼吸和心跳系统。
```



### 2.3 `move(self)`  函数

`move(self)` 函数就是和我们前面将的基本函数的意思、功能是一样的。

只不过这里面是属于类里面的功能函数。



### 2.4 类当中的 self

#### 2.4.1 非正式讲解1

```python
class Animal():
    def __init__(self):
        self.x = 0
        
    def move(self):
        self.x = self.x + 10

dog = Animal()

if user_input == 'move':
    dog.move()
print('Dog position:', dog.x)
```

`self` 指的是本身，在 `Animal()` 内部，指的就是  `Animal()` ，当把  `Animal()`  赋值给 `dog` 时，`dog = Animal = self` 。

因此：

- `self.x`  → `Animal().x ` → `dog.x` ，这也就解释了 `dog.x` 可以作为一个变量输出。
- 要调用 `Animal()` 里的函数，是 `Animal().move()` ，又因为上述的等价原因， `Animal().move()` = `dog.move()` 。
- 类里面的每个函数都要加上 `self` ，代表都属于类的一员，如同家族的族徽，代表都属于家族的一员。
- 有了 `self` 这个族徽，意味着家族的资源都可以互相使用。例如：家族的百万棋盘，所有家族成员都可以直接使用，如果不是同一家族的就得看情况了。所以当类里面存在变量，包括各个函数的变量，如果在变量的前面加上 `self(self.x)` ，则在类中，所有函数都可以随时调用变量 `self.x` ，在函数内外都可以访问。

注意：

- 在常规函数中，每个函数都是独立的。函数和函数之间的变量，不能互相调用，除非使用全局变量 `global` 来解决。
- 在类中的函数同理，也是独立的，函数与函数之间的变量依然不能直接共有，需要借助 `self` 来实现类里面的函数变量共用。

这里给出一个类中没有使用 `self` 创建变量，导致无法相互调用的例子：

```python
class Demo():
    def function1(self):
        string = 'Hello World'
        print(string)
        
    def function2(self):
        print(string)

demo = Demo()
demo.function1()
demo.function2()     # 此处会报错 name 'string' is not defined
```

上述代码加上 `self` 就可以了：

```python
class Demo():
    def function1(self):
        self.string = 'Hello World'
        print(self.string)

    def function2(self):
        print(self.string)

demo = Demo()
demo.function1()
demo.function2()  

#-------output-------
Hello World
Hello World
```

#### 2.4.2 非正式讲解2

![](./14-class.assets/image-20250807150100511.png)

**注意： ** 

**在类里面的函数，第一个参数都必须写 `self` !** 



#### 2.4.3 正式讲解：什么是 self ？



![](./14-class.assets/image-20250807150135498.png)

#### 2.4.4 self 存在的意义

- 原因一：代表自己
- 原因二：资源共享，没有 self 不能实现资源共享。

以下代码可以看出，dog 和 self 实际为同一个变量：

```python
class Animal():
    def __init__(self):
        self.x = 0
        print(f'self address: {self}')

dog = Animal()
print(f'dog address: {dog}')

#-------output-------
self address: <__main__.Animal object at 0x000001FB0AC48F40>
dog address: <__main__.Animal object at 0x000001FB0AC48F40>
```



### 2.5 `_ _init_ _` 初始化参数

#### 2.5.1背景

类似宝宝出生前想名字

```python
class Baby():
    def __init__(self, name):
        """
        初始化宝宝对象时，必须提供名字，
        就像是大人提前为宝宝取好名字，并在必要时办理出生证明。
        """

        self.name = name    # 宝宝的名字，相当于出生证明中的名字

    def introduce(self):
        """
        宝宝的自我介绍，展示初始化时设置的属性
        """

        print(f'大家好，我叫{self.name}')

# 宝宝出生前，大人为其取好了名字
baby1 = Baby(name='棠棠')    # 实例化
baby1.introduce()           # 输出介绍

#-------output-------
大家好，我叫棠棠
```



`_ _init_ _` 函数的所有参数，全部在类的实例化时传入。即上述代码中的 `baby1 = Baby(name='棠棠') ` 。



#### 2.5.2 为什么要写 `self.XXX = XXX` ？背后发生了什么？

问题一：为什么传进参数 name，还要把 name 赋值给 self.name

问题二：为什么不直接 name = name ，还要用 self

问题三：为什么“点”后面的变量名称和参数同名，不同名可以吗？



回答一：从外面引入一个参数，需要找到一个地方存放，所以需要使用 `self.name = name` 进行存放。

回答二：并且，这个函数需要在类内的函数间共用，因此需要一个地方来存放这个共用的函数，并且加上 self 使其能共用

回答三：叫其他变量名可以，但是本身变量名是“见名知意”，且指代的是同一个东西，因此不需要再想一个合适的变量名。示例如下：

```python
class Baby():
    def __init__(self, name):

        self.name = name
        self.username = name
        print(f'init name: {self.name}, username: {self.username}')
    
baby1 = Baby('棠棠')

#-------output-------
init name: 棠棠, username: 棠棠
```



小结：

![](./14-class.assets/image-20250807153945373.png)



![](./14-class.assets/image-20250807154105539.png)



#### 2.5.3 参数设定后必须传入

在初始化时，如果设定了参数，那么将类实例化时必须将该参数传入，否则会报错。

```python
class Baby():
    def __init__(self, name):

        self.name = name
        self.username = name
        print(f'init name: {self.name}, username: {self.username}')

baby1 = Baby()

#-------output-------
TypeError: __init__() missing 1 required positional argument: 'name'
```



#### 2.5.4 传入多个参数

```python
class Baby():
    def __init__(self, name, gender):

        self.name = name
        self.gender = gender

    def introduce(self):
        print(f'大家好，我叫 {self.name}, 我是一个{self.gender}宝宝。')

baby1 = Baby(name = '棠棠', gender = '女')
baby1.introduce()

baby2 = Baby('锦奕', '男')
baby2.introduce()

#-------output-------
大家好，我叫 棠棠, 我是一个女宝宝。
大家好，我叫 锦奕, 我是一个男宝宝。
```



#### 2.5.5 设置默认值

```python
class Baby():
    def __init__(self, name = '小悦', gender = '男'):
        print(f'大家好，我叫{name}, 我是一个{gender}宝宝。')

baby1 = Baby()

#-------output-------
大家好，我叫小悦, 我是一个男宝宝。
```

设置默认值的要求和函数一样，一旦设置了默认值，后面就必须都设置默认值，否则会报错。

默认值也可以设置为 `None` ，具体如何设置要看使用需求。



上述代码可以进一步优化：

```python
class Baby():
    def __init__(self, name, gender = None):

        self.name = name
        self.gender = gender

    def introduce(self):
        if self.gender:
            print(f'大家好，我叫{self.name}，是一个{self.gender}宝宝。')
        else:
            print(f'大家好，我叫{self.name}，性别待定。')

baby1 = Baby(name = '棠棠', gender = '女')
baby1.introduce()

baby2 = Baby('锦奕', '男')
baby2.introduce()

baby3 = Baby(name = '宝宝')
baby3.introduce()

#-------output-------
大家好，我叫棠棠，是一个女宝宝。
大家好，我叫锦奕，是一个男宝宝。
大家好，我叫宝宝，性别待定。
```



### 2.6 类实例化时：指定传参和位置传参

类的传入的三种原则：

1. 全部不指定参数

    ```python
    baby1 = Baby('棠棠', '女')
    ```

    

2. 全部指定参数

    ```python
    baby1 = Baby(name = '棠棠', gender = '女')
    ```

    

3. 部分指定参数，只能从前面不指定，一旦开始指定，后续参数都要指定，否则会报错。

    ```python
    baby1 = Baby('棠棠', gender = '女')
    ```

    下述情况会报错：

    ```python
    baby1 = Baby(name = '棠棠', '女')
    ```

    

4. 参数也可以通过变量传递进去

    ```python
    name = input("Enter your name: ")
    gender = input("Enter your gender: ")
    age = input("Enter your age: ")
    weight = input("Enter your weight: ")
    baby1 = Baby(name, gender, age, weight)
    baby2 = Baby(name=name, gender=gender, age=age, weight=weight)
    ```

    baby2 里面，`=` 左面是类内包含的变量名，`=` 右面是作为变量名，通过指定的方式传入到里面，两者长的一样，其实是不同的。



## 3. 小试牛刀

### 3.1 宠物管理系统

**题目要求：** 请你用面向对象的方式编写一个宠物管理系统的雏形，完成以下功能：

1. **创建一个类 `Pet`**
    - 属性：
        - `name`（宠物名字，字符串）
        - `age`（宠物年龄，整数）
        - `species`（宠物种类，字符串，比如“狗”、“猫”）
    - 方法：
        - `show_info()`：打印宠物的基本信息（格式自定义）。
        - `birthday()`：宠物过生日，年龄加 1，并打印“xxx 过生日啦，现在 xxx 岁了！”
2. **编写主程序**
    - 创建 2 个不同的宠物对象（属性不同）
    - 分别调用 `show_info()` 方法展示它们的基本信息
    - 给其中一个宠物调用一次 `birthday()` 方法，并再次展示它的信息

运行示例（仅供参考）：

```python
小白 这只狗今年 2 岁。
小黑 这只猫今年 3 岁。
小白 过生日啦，现在 3 岁了！
小白 这只狗今年 3 岁。
小黑 这只猫今年 3 岁。
```



回答：

```python
class Pet():
    def __init__(self,name,age, species):
        self.name = name
        self.age = age
        self.species = species

    def show_info(self):
        print(f'Pet Info: 姓名: {self.name}, 年龄: {self.age}, 种族: {self.species}')

    def birthday(self):
        self.age += 1
        print(f'{self.name}过生日啦！今年{self.age}岁了~')


cat = Pet('阿尔法', 6, 'cat')
cat.show_info()
cat.birthday()

dog = Pet('半斤', 1, 'dog')
dog.show_info()
dog.birthday()

#-------output-------
Pet Info: 姓名: 阿尔法, 年龄: 6, 种族: cat
阿尔法过生日啦！今年7岁了~
Pet Info: 姓名: 半斤, 年龄: 1, 种族: dog
半斤过生日啦！今年2岁了~
```



---

 ### 3.2 银行账户管理系统

**题目要求：** 请你使用面向对象的方式，设计一个简单的银行账户类，完成以下功能：

1. **创建一个类 `BankAccount`**
    - 属性：
        - `owner`（账户持有人姓名，字符串）
        - `balance`（账户余额，浮点数，默认 0）
    - 方法：
        - `show_balance()`：打印当前账户余额。
        - `deposit(amount)`：存钱到账户，金额必须大于 0，否则提示“存款金额必须大于 0”。
        - `withdraw(amount)`：取钱，金额必须大于 0 且不能超过当前余额，否则提示“余额不足或金额无效”。
2. **主程序**
    - 创建一个账户对象（姓名自定义，初始余额可以为 0）。
    - 进行一次存款操作（金额自定义）。
    - 进行一次取款操作（金额自定义）。
    - 最后显示账户余额。

运行示例（仅供参考）：

```
账户持有人：张三
当前余额：￥0.0
存入 ￥1000.0 成功！
当前余额：￥1000.0
取出 ￥500.0 成功！
当前余额：￥500.0
```



回答：

```python
class BankAccount():
    def __init__(self, name, balance = 0.00):
        self.name = name
        self.balance = balance

    def show_balance(self):
        print(f'{self.name}的账户当前余额为{self.balance}。')

    def deposit(self, amount):
        if amount <= 0:
            print('存款金额必须大于0')
        else:
            self.balance += amount
            print(f'{self.name}的账户已存入{amount}元，当前余额{self.balance}元。')
    def withdraw(self, amount):
        if amount >0 and amount <= self.balance:                 # 可以写成 0<amount<=self.balance
            self.balance -= amount
            print(f'{self.name}的账户取出{amount}元，当前余额{self.balance}元。')
        else:
            print('余额不足或取款金额无效')

 # 创建张三的账户
Zhangsan = BankAccount('张三')
Zhangsan.show_balance()

# 存入1000元
Zhangsan.deposit(1000)

# 取出100元
Zhangsan.withdraw(100)

# 显示最后余额
Zhangsan.show_balance()

#-------output-------
张三的账户当前余额为0.0。
张三的账户已存入1000元，当前余额1000.0元。
张三的账户取出100元，当前余额900.0元。
张三的账户当前余额为900.0。
```



### 3.3 题目：交互式银行账户系统（扩展版）

**题目要求：** 在上一个 `BankAccount` 类的基础上，编写一个**交互式控制台程序**，让用户可以自己输入指令完成存款、取款、查看余额、退出系统等操作。

1. **类 `BankAccount`**（和之前基本一样）：

    - `owner`（账户持有人姓名）
    - `balance`（账户余额，默认 0）
    - `show_balance()`：显示余额
    - `deposit(amount)`：存款
    - `withdraw(amount)`：取款

2. **主程序交互功能**：

    - 用户输入账户持有人姓名（创建账户）

    - 进入循环菜单：

        ```
        请选择操作：
        1. 存款
        2. 取款
        3. 查看余额
        4. 退出
        ```

    - 根据用户输入的选项执行对应功能

    - 用户输入 `4` 时退出系统

3. **运行示例（参考）：**

    ```python
    请输入账户持有人姓名：张三
    账户已创建，当前余额为 ￥0.0
    
    请选择操作：
    1. 存款
    2. 取款
    3. 查看余额
    4. 退出
    请输入选项：1
    请输入存款金额：1000
    存入 ￥1000.0 成功！
    
    请选择操作：
    1. 存款
    2. 取款
    3. 查看余额
    4. 退出
    请输入选项：3
    账户持有人：张三
    当前余额：￥1000.0
    ```



回答：

版本一：

```python
class BankAccount():
    def __init__(self, name, balance = 0.00):
        self.name = name
        self.balance = balance

    def show_balance(self):
        print(f'{self.name}的账户当前余额为{self.balance}。')

    def deposit(self, amount):
        if amount <= 0:
            print('存款金额必须大于0')
        else:
            self.balance += amount
            print(f'{self.name}的账户已存入{amount}元，当前余额{self.balance}元。')
    def withdraw(self, amount):
        if amount >0 and amount <= self.balance:                 # 可以写成 0<amount<=self.balance
            self.balance -= amount
            print(f'{self.name}的账户取出{amount}元，当前余额{self.balance}元。')
        else:
            print('余额不足或取款金额无效')

# 创建账户
name_input = input('请输入账户姓名：')

while name_input == '张三':
    account1 = BankAccount(name_input)

    # 显示提示语
    print()
    print('请选择操作：')
    print('1. 存款')
    print('2. 取款')
    print('3. 查看余额')
    print('4. 退出')

    # 获得用户指令
    choice = input('请输入选项：')
    if choice == '1':
        amount = float(input('请输入存款金额：'))
        account1.deposit(amount)
    if choice == '2':
        amount = float(input('请输入取款金额：'))
        account1.withdraw(amount)
    if choice == '3':
        account1.show_balance()
    if choice == '4':
        del account1
        print('账户已退出。')
```



问题：存款后信息无法保留

原因：存款之后，因为是 `while` 循环，所以又回到了 `line 26` 那里重新创建账户，所以改动无法留存。



```python
class BankAccount():
    def __init__(self, name, balance = 0.00):
        self.name = name
        self.balance = balance

    def show_balance(self):
        print(f'{self.name}的账户当前余额为{self.balance}。')

    def deposit(self, amount):
        if amount <= 0:
            print('存款金额必须大于0')
        else:
            self.balance += amount
            print(f'{self.name}的账户已存入{amount}元，当前余额{self.balance}元。')
    def withdraw(self, amount):
        if amount >0 and amount <= self.balance:                 # 可以写成 0<amount<=self.balance
            self.balance -= amount
            print(f'{self.name}的账户取出{amount}元，当前余额{self.balance}元。')
        else:
            print('余额不足或取款金额无效')

# 创建账户
name_input = input('请输入账户姓名：')
account1 = BankAccount(name_input)

while name_input:

    # 显示提示语
    print()
    print('请选择操作：')
    print('1. 存款')
    print('2. 取款')
    print('3. 查看余额')
    print('4. 退出')
# 获得用户指令
    choice = input('请输入选项：')

    if choice == '1':
        amount = float(input('请输入存款金额：'))
        account1.deposit(amount)
    if choice == '2':
        amount = float(input('请输入取款金额：'))
        account1.withdraw(amount)
    if choice == '3':
        account1.show_balance()
    if choice == '4':
        print('账户已退出。')
        name_input = False

#-------output-------
请输入账户姓名：张三

请选择操作：
1. 存款
2. 取款
3. 查看余额
4. 退出
请输入选项：1
请输入存款金额：1000
张三的账户已存入1000.0元，当前余额1000.0元。

请选择操作：
1. 存款
2. 取款
3. 查看余额
4. 退出
请输入选项：2
请输入取款金额：100
张三的账户取出100.0元，当前余额900.0元。

请选择操作：
1. 存款
2. 取款
3. 查看余额
4. 退出
请输入选项：3
张三的账户当前余额为900.0。

请选择操作：
1. 存款
2. 取款
3. 查看余额
4. 退出
请输入选项：4
账户已退出。
```



优化：将多个 `if` 连用改成 `elif` ，节省判断次数，因为多个 `if` 需要每个都判断一下，但是 `elif` 判断成立后，后面的就不会再执行了。

其他方法：

可以用 `while True`  和 `break` 搭配结束循环。



## 4. 类里面的函数传入参数

1. 传入一个参数

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self, times):
        print(f'{self.name}汪 ' * times)

my_dog = Dog('小黑')
my_dog.bark(3)

#-------output-------
小黑汪 小黑汪 小黑汪 
```



2.  传入多个参数

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self, times, newline):
        for _ in range(times):
            if newline:
                print(f'{self.name} 汪')
            else:
                print(f'{self.name} 汪 ', end=' ')

my_dog = Dog('小黑')

# 调用 bark 函数，传入两个函数，叫3次，并每次换行
print('每次换行：')
my_dog.bark(3, True)

# 叫3次，不换行
print('\n不换行： ')
my_dog.bark(3, False)

#-------output-------
每次换行：
小黑 汪
小黑 汪
小黑 汪

不换行： 
小黑 汪  小黑 汪  小黑 汪  
```



## 5. 通过实例化对象改属性值

修改前的信息：

```python
class Person:
    def __init__(self, name, gender = None, age = None, weight = None):
        self.name = name
        self.gender = gender
        self.age = age
        self.weight = weight

    def introduce(self):
        intro = f'大家好， 我叫 {self.name}。'
        if self.gender:
            if self.gender == '男':
                intro += '我是一个男孩。'
            else:
                intro += '我是一个女孩。'
        else:
            intro += '我的性别暂时保密哦~'
            
        if self.age:
            intro += f'我今年{self.age}岁了。'
        else:
            intro += '我的年龄保密~'

        print(intro)

person1 = Person(name= 'Bornforthis', gender= '男', age= 28, weight= 75)
person1.introduce()

#-------output-------
大家好， 我叫 Bornforthis。我是一个男孩。我今年28岁了。
```



修改：

通过直接变量赋值就可修改，如 `person1.weight = 80` 。

```python
return intro   # 上面函数不用 print 改成 return

person1 = Person(name= 'Bornforthis', gender= '男', age= 28, weight= 75)
person1.introduce()

print(person1.name, person1.gender, person1.age, person1.weight)

print('修改前：{}'.format(person1.introduce()))
person1.name = 'AI创悦'
person1.weight = 80
print('修改后：{}'.format(person1.introduce()))

#-------output-------
Bornforthis 男 28 75
修改前：大家好， 我叫 Bornforthis。我是一个男孩。我今年28岁了。 我的体重是 75 千克。
修改后：大家好， 我叫 AI创悦。我是一个男孩。我今年28岁了。 我的体重是 80 千克。
```





















