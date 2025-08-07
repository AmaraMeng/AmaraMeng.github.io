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
class Baby:
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
class Baby:
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
class Baby:
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
class Baby:
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
class Baby:
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
class Baby:
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



### 2.6 类实例化时：指定传参数和位置传参

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

    













