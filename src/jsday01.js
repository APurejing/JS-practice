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

