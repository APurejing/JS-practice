// 原型链

// 声明函数的方法
/*
1. 字面量
    var o1 = {name:'o1'};
    var o2 = new Object({name:'o2});
2. 通过构造函数
    var M = function(name){this.name=name;};
    var o3 = new M('o3');
3. 通过Object.create方法创建
    var p = {name:'p'};
    var o4 = Object.create(p);

new 后面就可以叫做构造函数
*/
var o1 = {name:'o1'};
var o2 = new Object({name:'o2'});
var M = function(name){this.name=name;};
var o3 = new M('o3');
var p = {name:'p'};
var o4 = Object.create(p);


/*
new运算符的工作原理
使用new命令时，它后面的函数依次执行下面的步骤。
创建一个空对象，作为将要返回的对象实例。
将这个空对象的原型，指向构造函数的prototype属性。
将这个空对象赋值给函数内部的this关键字。
开始执行构造函数内部的代码。

构造函数被执行，执行时，相应参数被传入，同时上下文（this）会被指定为这个新实例。new foo等同于new foo()，只能用在不传递任何参数的情况
如果构造函数返回了一个“对象”，那么这个对象会取代new出来的结果。
如果构造函数没有返回对象，new出来的结果为第一步创建的对象
 */
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
    // 将 arguments 对象转为数组
    var args = [].slice.call(arguments);
    // 取出构造函数
    var constructor = args.shift();
    // 创建一个空对象，继承构造函数的 prototype 属性
    var context = Object.create(constructor.prototype);
    // 执行构造函数
    var result = constructor.apply(context, args);
    // 如果返回结果是对象，就直接返回，否则返回 context 对象
    return (typeof result === 'object' && result != null) ? result : context;
}
  
// 实例
var actor = _new(Person, '张三', 28);