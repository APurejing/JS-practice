/* 
JavaScript核心语法两个部分：
1. 基本的语法构造：如操作符、控制结构、语句
2. 标准库：一系列具有各种功能的对象，如Array、Date、Math等。
*/

/* 
各种宿主提供额外的API供JavaScript调用。以浏览器为例，可分为三类：
1. 浏览器控制类：操作浏览器
2. DOM类：操作网页的各种元素
3. Web类：实现互联网的各种功能
 （如果宿主环境是服务器，则会提供各种操作系统的API：
如：文件操作API、网络通信API等等，都可以在Node环境中找到）
*/

// 基本语法
// 语句
// JavaScript程序的执行单位为行

// 赋值语句：
var a = 1 + 2;

// 写在一行也可以
var a = 1 + 2; var b = 'abc';

// 分号前没有任何内容，JavaScript引擎将其视为空语句。如下是三个空语句：
;;; 
 
// 变量
// 变量是对“值”的具名引用。如果只声明变量没有赋值，则变量值是undefined，一个特殊的值，表示“无定义”。不用var声明语句也是有效的，但不利于表达意图，且容易创建全局变量。如果变量没声明就使用，JavaScript会报错 变量未定义。
x
// ReferenceError: x is not defined

// 可以在同一条var命令中声明多个变量。
var a, b;

// JavaScript是一种动态类型语言，也就是说，变量的类型没有限制，变量可以随时更改类型。
var a = 1;
a = 'hello';

// 如果使用var重新声明一个已存在的变量是无效的，但如果第二次声明时还进行了赋值，则会覆盖掉前面的值。
var x = 1;
var x;
x
// 1
var x = 2;
x
// 2

// 变量提升（hoisting）
// JavaScript引擎的工作方式是，先解析代码，获取所有被声明的变量，再一行行运行。因此所有的变量声明语句都会被提升到代码的头部。
console.log(a)
var a = 1;
//真正运行的是：
var a;
console.log(a);
a = 1;
// 结果显示undefined，表示变量a已声明，但还未赋值。

// 标识符（identifier）
// 用来识别各种值的合法名称，对大小写敏感（a和A不同）。最常见的标识符就是变量名以及函数名。
/* 
标识符命名规则：
1.第一个字符可以是任意Unicode字母（英文及其他语言的字母）以及美元符号“$”和下划线“_”。（π可以，但数字不可以）
2.第二个字符及其他字符除了Unicode字母、美元符号和下划线还可以用数字。（不能包含 *、#、+、-或连词线）
3.保留字不能用作标识符：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield。
*/
/* 注释
单行注释// 
多行注释
为兼容Html代码注释，< !--和 在行首的-- 也被视为合法单行注释
*/

// 区块
// JavaScript使用{ } 将多个相关语句组合在一起，称为区块（block）。
// ！！！和作用域（scope）意义不同

// 条件语句
// if结构和switch结构

// if结构 
if (布尔值) {
语句;
}
// 或者
if (布尔值) 语句;

// if...else结构
if (m === 3) {
// 满足条件时执行的语句
} else {
// 不满足条件时执行的语句
}

// 多个连用：(else代码块总是与离自己最近的if语句配对)
if (m === 0) {
// ...
} else if (m === 1) {
// ...
} else if (m === 2) {
// ...
} else {
// ...
}

// switch结构 
// 多个if...else连在一起使用时可以转换为更方便的switch结构。

switch (fruit) {
case "banana":
// ...
break;
case "apple":
// ...
break;
default:
// ...
}
// break语句不能少 

// 三元运算符 
/*
(条件) ? 表达式1 : 表达式2
如果条件为true，则返回表达式1的值，否则返回表达式2的值。
*/

// 循环语句
//while循环 
/*
只要条件为真，则循环执行。
while (条件) {
语句;
}
// 或者
while (条件) { 语句; }
*/

// for循环 
/*
指定循环的起点、终点和终止条件。
for (初始化表达式; 条件; 递增表达式) {
语句
}
*/
var x = 3;
for (var i = 0; i < x; i++) {
console.log(i);
}

// do...while循环
/*
和while类似，唯一区别是先运行一次循环体，然后判断循环条件。
 do {
语句
} while (条件);
*/

// break语句和continue语句
// break语句用于跳出代码块或循环，continue语句用于立即终止本轮循环，返回循环结构的头部开始下一轮循环。

// 标签（label）
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ',j=' + j);
    } 
  }
  /*
  上面代码为一个双重循环区块，break命令后面加上了top标签（注意，top不用加引号），满足条件时，直接跳出双层循环。如果break语句后面不使用标签，则只能跳出内层循环，进入下一次的外层循环。

标签也可以用于跳出代码块。
*/
foo: {
  console.log(1);
  break foo;
  console.log('本行不会输出');
}
console.log(2);
// 1
// 2
//上面代码执行到break foo，就会跳出区块。continue语句也可以与标签配合使用。


// 数据类型：七种：
/* 
数值 number
字符串 string
布尔值 boolean
undefined
null
object：狭义对象object、数组array、函数function
Symbol
*/

/*确定值类型的方法（三种）
typeof运算符
instanceof运算符
Object.prototype.toString方法




// 如果一个运算子是字符串，另一个运算子是非字符串，这时非字符串会转成字符串，再连接在一起。

1 + 'a' // "1a"
false + 'a' // "falsea"
// 由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。

'3' + 4 + 5 // "345"
3 + 4 + '5' // "75"
// 除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。

1 - '2' // -1
1 * '2' // 2
1 / '2' // 0.5

// 如果运算子是对象，必须先转成原始类型的值，然后再相加。

var obj = { p: 1 };
obj + 2 // "[object Object]2"

var obj = { p: 1 };
obj.valueOf() // { p: 1 }

var obj = { p: 1 };
obj.valueOf().toString() // "[object Object]"

//自定义valueOf方法或toString方法
var obj = {
  valueOf: function () {
    return 1;
  }
};

obj + 2 // 3

var obj = {
  toString: function () {
    return 'hello';
  }
};

obj + 2 // "hello2"

// 有一个特例，如果运算子是一个Date对象的实例，那么会优先执行toString方法。

var obj = new Date();
obj.valueOf = function () { return 1 };
obj.toString = function () { return 'hello' };

obj + 2 // "hello2"

// 余数运算符（%）返回前一个运算子被后一个运算子除，所得的余数。
// 但结果的正负号由第一个运算子的正负号决定
-1 % 2 // -1
1 % -2 // 1

// 错误的写法
function isOdd(n) {
  return n % 2 === 1;
}
isOdd(-5) // false
isOdd(-4) // false

// 正确的写法（绝对值函数）
function isOdd(n) {
  return Math.abs(n % 2) === 1;
}
isOdd(-5) // true
isOdd(-4) // false

// 运算之后，变量的值发生变化，这种效应叫做运算的副作用（side effect）。自增和自减运算符是仅有的两个具有副作用的运算符，其他运算符都不会改变变量的值。

// 自增和自减运算符有一个需要注意的地方，就是放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；放在变量之前，会先进行自增/自减操作，再返回变量操作后的值。

var x = 1;
var y = 1;

x++ // 1
++y // 2


// 3 -> 00000011
// 4 => 00000100
// 7    00000111