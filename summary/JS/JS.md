1. JS 数据类型（8 种）：
   字符串、数字、布尔、undefined、null、大整数、符号、对象
   string、number、boolean、undefined、null、bigint、symbol、object

---

2. 原型链是什么
   举例，

   > a.\_\_proto\_**\_ === Object.prototype,a 的原型是 Object.prototype
   > 举例，a 是一个 array/date/function...，
   > a.\_\_proto\_\_** === Array.prototype
   > Array.\_\_proto\_**\_ === Object.prototype
   > a 有两层原型，a 的原型是 Array.prototype,a 的原型的原型是 Object.prototype,
   > 于是通过隐藏属性\_\_**proto\_\_\_\_形成一个链条
   > a ===> Array.prototype ===> Object.prototype
   > 这就是原型链

   **怎么创建一个自己的原型链：**

   > const x = Object.create(原型)
   > // 或
   > const x = new 构造函数()

解决了什么问题：

> 在没有 Class 的情况下实现继承
>
> 1.  a 是 Array 的实例，a 拥有 Array.prototype 里的属性
> 2.  Array 继承了 Object
> 3.  a 是 Object 的间接实例，a 拥有 Object.prototype 里的属性.
>     这样一来，a 就拥有 Array.prototype 里的属性，又拥有 Object.prototype 里的属性

优点：简单优雅
缺点：跟 class 相比，不支持私有属性
如何解决缺点：使用 ES6 引入的 class

> class F{
> #scope = 'f'
> }
> a = new F()
> // undefined
> console.log(a.scope)

---

插播问题： 继承（两个 class 的关系，class A extends B）和原型链（A 拥有 Array 的属性 length，这叫做实例化，不叫继承。但 a.valueof 是从 Object.prototype 上继承的属性，跟 a 没有关系，是 Array 继承 Object）

---

3. 代码中的 this 是多少 https://zhuanlan.zhihu.com/p/23804247
   this 是 call 的第一个参数,倒着看找最后一次调用
   > f(p) --> f.call(undefined,p) --> window
   > o.c.f(p) --> f.call(o.c, p) --> o.c

---

4.  JS 的 new 做了什么（建议写博客甩链接）https://zhuanlan.zhihu.com/p/23987456

    - 1. 创建临时对象
    - 2. 绑定原型
    - 3. 指定 this = 临时对象
    - 4. 执行构造函数
    - 5. 返回临时对象

---

5. JS 的立即执行函数是什么
   **是什么：** 声明一个匿名函数，然后立即执行它。这种做法就是立即执行函数。
   **怎么做：** (举例，下面每一行代码都是一个立即执行函数)

   > （function() {alert('我是匿名函数')}()) // 用括号把整个表达式包起来
   > (function() {alert('我是匿名函数')}) () // 用括号把函数包起来
   > !function() {alert('我是匿名函数')}() // 求反，不在意返回值是什么，只想通过语法检查
   > +function() {alert('我是匿名函数')}()
   > -function() {alert('我是匿名函数')}()
   > ~function() {alert('我是匿名函数')}()
   > void function() {alert('我是匿名函数')}()
   > new function() {alert('我是匿名函数')}()
   > var x = function() {alert('我是匿名函数')}()

   **解决了什么问题：** 在 ES6 之前，只能通过它来**创建局部作用域**
   **优点：** 兼容性好
   **缺点：** 丑
   **怎么解决缺点：** 使用 ES6 的 block+let 语法

   > {
   > let a = '我是局部变量啦'
   > console.log(a);
   > }
   > console.log(a);

---

6. JS 的闭包是什么？怎么用？
   **是什么** 闭包是 JS 的一种语法特性
   闭包 = 函数 + 自由变量 // 非全局变量、非函数本身的局部变量。对于一个函数来说，变量分为全局变量、本地变量、自由变量
   **怎么做：**
   把如下这种代码放在**非全局环境** 中，就是闭包（的应用）

   > let count
   > function add() {
   > count += 1;
   > }

   举例：

   > var die = function(){
   > let lives = 3
   > return () => { lives -= 1 }
   > }()
   > die() // lives -= 1

**解决了什么问题** 1.避免污染全局环境 2.提供对局部变量的间接访问（只能 count += 1 不能 count -= 1） 3.维持变量，使其不被垃圾回收
优点：简单，好用
缺点：使用不当可能造成内存泄漏

---

7. JS 如何实现类
8. JS 如何实现继承
