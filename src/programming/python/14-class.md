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



## 6. 类的私有属性

why 私有？例如手机密码，面部识别等，只有自己才能访问这些信息。同样，python 的类中，需要保护一些内部数据，不希望从外部就能轻易访问和修改，此时就会用到**私有属性**。

### 6.1 什么是私有属性？

在 Python 中，以双下划线（`__` ）开头的属性为私有属性，保护类内部的重要数据。我们不是希望别人完全访问不到这些数据，而是希望别人通过类的方法来间接的访问或修改这些数据，这样就能在方法中进行额外的逻辑控制，比如检查输入是否正确、访问记录日志等。

### 6.2 现实举例：手机密码与解锁

代码提示：

```python
# 创建一个手机对象，设置密码为：'123456'，私密数据为：我的秘密照片和聊天记录
my_phone = Phone("123456", "我的秘密照片和聊天记录")

# 我尝试直接访问数据，结果会失败（不能直接访问私有属性）
# print(my_phone.__data)  # 错误！无法访问，报错：AttributeError: 'Phone' object has no attribute '__data'

# 正确的访问方法：使用类提供的方法（函数）进行调用私有属性的值
data = my_phone.unlock("123456")  # 输入正确的密码
print("手机中的数据是：", data)

data = my_phone.unlock("wrong_password")  # 输入错误的密码
print("手机中的数据是：", data)
```

个人代码：

```python
class Phone():
    def __init__(self, password, data):
        self.__password = password
        self.__data = data

    def unlock(self, password):
        if password == self.__password:
            print(f'手机中的数据是：{self.__data}')
        else:
            print('密码输入错误，请重新输入！')



my_phone = Phone("123456", "我的秘密照片和聊天记录")

print(my_phone.__data)

my_phone.unlock("123456")

my_phone.unlock("wrong_password")
```



修改优化：

- 代码中更适合用 return ，而非 print，print 只是把内容显示出来而已。

```python
class Phone():
    def __init__(self, password, data):
        self.__password = password          # 私有属性，不能直接访问
        self.__data = data                  # 私有属性，保护数据

    def unlock(self, password):
        # 通过 unlock 的方法访问私有数据，进行逻辑控制
        if password == self.__password:
            print('密码正确，手机已解锁！')
            return self.__data                   # return 返回私密数据
        else:
            print('密码输入错误，请重新输入！')
            return None



# 创建新的手机对象
my_phone = Phone("123456", "我的秘密照片和聊天记录")

# 尝试直接访问数据，会报错
# print(my_phone.__data)

# 正确访问方法
data = my_phone.unlock("123456")
print('手机中的数据是：', data)

data = my_phone.unlock("wrong_password")
print('手机中的数据是：', data)

#-------output-------
密码正确，手机已解锁！
手机中的数据是： 我的秘密照片和聊天记录
密码输入错误，请重新输入！
手机中的数据是： None
```



**小贴士：** 

1. 手机密码相当于类的私有属性，外人不能轻易查看，相对应的数据也是私有属性。
2. 手机解锁的动作，相当于类规定的方法，通过这个方法可以访问未被公开的数据，这个方法也决定了哪些可以公开，哪些受到保护。



### 6.3 为何使用私有属性？

安全性：防止外人随意打开

隐私性：防止外人随意查看内容

保护性：防止里面的内容损毁

控制性：有钥匙或密码，能决定什么时候打开，什么时候关上



### 6.4 如何访问私有属性？

Python 的私有属性并非绝对私有，可以通过特殊方法访问（不建议）

```python
# 通过特殊语法访问
print(my_phone._Phone__data)    # 输出为：我的秘密照片和聊天记录
```

还可以通过这种方法来修改属性值：

```python
# 修改私有数据
my_phone._Phone__data = '新的数据'
print(my_phone._Phone__data)

#-------output-------
新的数据
```

在实际开发中，不建议这么做，这种特殊访问方式仅在调试或者特殊情况下使用。



## 7. 小试牛刀



![](./14-class.assets/image-20250819144744848.png)

::: code-tabs

@tab Answer

```python
class MagicBag():
    def __init__(self, name, items = [], bag_capacity = 5):
        self.name = name
        self.__items = items
        self.__bag_capacity = bag_capacity

    def add_item(self, item):
        if self.__bag_capacity >= 1:                    # 需要注意一下容量的范围
            self.__items.append(item)
            self.__bag_capacity -= 1
            return self.__items, self.__bag_capacity
        else:
            print('背包已满，无法添加！')

    def remove_item(self, item):
        if item in self.__items:
            self.__items.remove(item)
            self.__bag_capacity += 1
            print(f'{self.name}的背包中的{item}已移除')
            return self.__items, self.__bag_capacity
        else:
            print('没有找到该物品。')

    def show_items(self):
        print(f'当前背包中有：{self.__items}')

# ====== 测试代码 ======
if __name__ == "__main__":
    # 创建一个魔法背包对象
    bag = MagicBag("勇者阿光")

    # 添加 5 个物品
    bag.add_item("木剑")
    bag.add_item("皮甲")
    bag.add_item("回复药水")
    bag.add_item("火把")
    bag.add_item("干粮")

    # 再添加第 6 个物品，应该提示背包已满
    bag.add_item("铁剑")

    # 展示当前背包内容
    bag.show_items()

    # 移除一个物品
    bag.remove_item("火把")

    # 再次展示背包内容
    bag.show_items()

    # 尝试直接访问背包的私有属性（会报错）
    try:
        print(bag.__items)  # AttributeError
    except AttributeError as e:
        print("直接访问私有属性失败：", e)

    # （补充演示，不推荐这么做）通过名称改写可以访问私有属性
    # print("偷偷访问私有属性：", bag._MagicBag__items)
```



@tab init修改

```python
class MagicBag():
    def __init__(self, name):
        self.name = name
        self.__items = []
        self.__bag_capacity = 5
```



@tab add_item修改

```python
	def add_item(self, item):
        if len(self.__items) >= self.__capacity:
            print('背包已满，无法添加：', item)
            return                # return 有结束代码的作用，因此如果背包满了，则不会继续执行后面的代码，因此不需要 else
        # 否则添加物品到列表 
        self.__items.append(item)
        print(f'成功添加物品：{item}')
```



@tab remove_item修改

```python
	    def remove_item(self, item):
        if item not in self.__items:
            print('没有找到该物品', item)
            return
        # 移除指定物品
        self.__items.remove(item)
        print(f'成功移除物品：{item}')
```



@tab show_items修改

```python
    def show_items(self):
        if not self.__items:
            print('背包是空的')
        else:
            print(f'{self.name}的背包中有：{self.__items}')
```



@tab补充代码

```python
    def __repr__(self):
        '''调试用的对象显示，不会暴露私有属性名'''
        return f'MagicBag(name = {self.name}, items_count = {len(self.__items)}, capacity = {self.__bag_capacity})'
```



::: 



## 8. 类内部的变量如何共用

在类中，需要定义一些固定不变的变量，比如常量。这些常量每个对象都会用到，是否需要每次创建对象时都构建一次呢？

不需要！

只要在类的内部合适的位置定义好，就能实现类内变量共用。



### 8.1 类中的常量（类变量）

类似社团有统一的口号，python 中也有统一的口号，我们成为类变量。只需要定义一次，所有对象可以共享。

```python
class Entity:
    WELCOME_STR = '欢迎来到 Python 学习社团！'     # 类变量（常量）

    def __init__(self, name):
        self.name = name

    def say_welcome(self):
        print(f'{self.name}说：{self.WELCOME_STR}')


entity_a = Entity('Alice')
entity_b = Entity('Bob')

entity_a.say_welcome()
entity_b.say_welcome()

# 类变量也可以直接用类名访问
print(Entity.WELCOME_STR)

#-------output-------
Alice说：欢迎来到 Python 学习社团！
Bob说：欢迎来到 Python 学习社团！
欢迎来到 Python 学习社团！
```



### 8.2 函数之间的局部变量无法共用

现实生活中，人们的私有物品不能共用，函数也一样，只能在函数内部使用，无法被其他函数直接访问。

```python
def function_a():
    a = 10 
    print(f'function_a 的变量 a 是：', a)
    
def function_b():
    print(a)   # 这里会报错，因为无法访问function_a 的局部变量 a
```



加上一个全局变量就能共用，例如：

```python
BOOK_NAME = '跟AI悦创学习最前沿的编程思维和人工智能'      # 全局变量，任何函数都能造访

def function_a():
    print(f'function_a 正在读书：', BOOK_NAME)

def function_b():
    print('function_b 正在读书：', BOOK_NAME)   

function_a()
function_b()
```



### 8.3 类内部变量各个函数随意调用

示例如下：

```python
class Family:
    def __init__(self):
        self.bridge = ['草莓', '巧克力', '牛奶', '水果', '蛋糕']

    def dad_take_food(self):
        food = self.bridge.pop()
        print('爸爸拿走了：', food)

    def mam_take_food(self):
        food = self.bridge.pop()
        print('妈妈拿走了：', food)

    def child_take_food(self):
        food = self.bridge.pop()
        print('孩子拿走了：', food)
        

family = Family()
family.dad_take_food()
family.mam_take_food()
family.child_take_food()
print(family.bridge)
['草莓', '巧克力']

#-------output-------
爸爸拿走了： 蛋糕
妈妈拿走了： 水果
孩子拿走了： 牛奶
```



**使用全局变量的影响** 

不使用 self 而使用全局变量的问题：全局变量会被更改。

```python
count = 0

def increment():
    global count
    count += 1
    
def get_count():
    return count

increment()
print(get_count())    # 输出为1，而不是0
```





**小结与回顾** 

| 变量类型 | 定义位置                   | 作用域                 | 举个生活中的例子               |
| -------- | -------------------------- | ---------------------- | ------------------------------ |
| 局部变量 | 函数内部                   | 本函数内有效           | 自己的私人用品，别人不能随意拿 |
| 全局变量 | 函数外部                   | 所有函数都有效         | 公共的物品，比如图书馆的书     |
| 类变量   | 类的内部，方法之外         | 类内所有对象都有效     | 社团共有的口号                 |
| 实例变量 | 类的方法内，通过`self`定义 | 单个对象内所有方法有效 | 家庭内部共享的冰箱             |





### 8.4 类内部的函数互相调用

类内部的变量可以共享，那么类内部的函数也可以共享。

比如家里准备晚饭，有三个任务：

- 妈妈准备食材
- 爸爸烹饪
- 孩子摆放餐桌

此时，爸爸的任务中需要调用到妈妈任务中准备的食材。

#### 8.4.1 第一步：定义多个方法

```python
class FamilyDinner:
    def prepare_ingredients(self):
        print('妈妈正在准备食材：洗菜、切菜、准备调料。')
    
    def cook_food(self):
        print('爸爸开始烹饪了！')
        self.prepare_ingredients()     # 调用准备食材的方法
        print('爸爸正在烹饪菜肴：炒菜、煮汤。')
        
    def set_table(self):
        print('孩子正在摆放餐桌。')
```





#### 8.4.2 第二步：方法之间如何调用

```python
dinner = FamilyDinner()

dinner.cook_food()
dinner.set_table()

#-------output-------
爸爸开始烹饪了！
妈妈正在准备食材：洗菜、切菜、准备调料。
爸爸正在烹饪菜肴：炒菜、煮汤。
孩子正在摆放餐桌。
```

调用时，在需要调用的内部函数前添加 `self.` 即可实现类内部的函数调用，因此只需要使用类中的2个函数就可实现3个函数的功能。



#### 8.4.2 继承，是每个富二代的梦想「选学」

**提示**：接下来的继承内容，一时间看不懂学不会没有事的，完全不影响你入门 Python。

既然类是一群相似的对象的集合，那么可不可以是一群相似的类的集合呢？

接下来，我们来看第三个问题，既然类是一群相似的对象的集合，那么可不可以是一群相似的类的集合呢？

答案是，当然可以。只要抽象得好，类可以描述成任何事物的集合。当然你要小心、严谨地去定义它，不然一不小心就会引起第三次数学危机 XD（维基百科：[https://en.wikipedia.org/wiki/Russell%27s_paradox](https://en.wikipedia.org/wiki/Russell%27s_paradox)。

类的继承，顾名思义，指的是一个类既拥有另一个类的特征，也拥有不同于另一个类的独特特征。在这里的第一个类叫做子类，另一个叫做父类，特征其实就是类的属性和函数。

```python
class Entity():
    def __init__(self, object_type):
        print('parent class init called')
        self.object_type = object_type
    
    def get_context_length(self):
        raise Exception('get_context_length not implemented')     # 起到主动报错的作用
    
    def print_title(self):
        print(self.title)

class Document(Entity):
    def __init__(self, title, author, context):
        print('Document class init called')
        Entity.__init__(self, 'document')
        self.title = title
        self.author = author
        self.__context = context
    
    def get_context_length(self):
        return len(self.__context)
    
class Video(Entity):
    def __init__(self, title, author, video_length):
        print('Video class init called')
        Entity.__init__(self, 'video')
        self.title = title
        self.author = author
        self.__video_length = video_length
    
    def get_context_length(self):
        return self.__video_length

harry_potter_book = Document('Harry Potter(Book)', 'J. K. Rowling', '... Forever Do not believe any thing is capable of thinking independently ...')
harry_potter_movie = Video('Harry Potter(Movie)', 'J. K. Rowling', 120)

print(harry_potter_book.object_type)
print(harry_potter_movie.object_type)

harry_potter_book.print_title()
harry_potter_movie.print_title()

print(harry_potter_book.get_context_length())
print(harry_potter_movie.get_context_length())


# ---output---
Document class init called
parent class init called
Video class init called
parent class init called
document
video
Harry Potter(Book)
Harry Potter(Movie)
77
120
```

我们同样结合代码来学习这些概念。在这段代码中，Document 和 Video 它们有相似的地方，都有相应的标题、作者和内容等属性。我们可以从中抽象出一个叫做 Entity 的类，来作为它俩的父类。

首先需要注意的是构造函数。每个类都有构造函数，继承类在生成对象的时候，是不会自动调用父类的构造函数的，因此你必须在 `init()` 函数中显式调用父类的构造函数。它们的执行顺序是 子类的构造函数 -> 父类的构造函数。

其次需要注意父类 `get_context_length()` 函数。如果使用 Entity 直接生成对象，调用 `get_context_length()` 函数，就会 raise error 中断程序的执行。这其实是一种很好的写法，叫做函数重写，可以使子类必须重新写一遍 `get_context_length()` 函数，来覆盖掉原有函数。

最后需要注意到 `print_title()` 函数，这个函数定义在父类中，但是子类的对象可以毫无阻力地使用它来打印 title，这也就体现了继承的优势：减少重复的代码，降低系统的熵值（即复杂度）。

到这里，你对继承就有了比较详细的了解了，面向对象编程也可以说已经入门了。当然，如果你想达到更高的层次，大量练习编程，学习更多的细节知识，都是必不可少的。



























