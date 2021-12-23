/*
标准库

Object 对象
属性描述对象
Array 对象
包装对象
Boolean 对象
Number 对象
String 对象
Math 对象
Date 对象
RegExp 对象
JSON 对象
*/

// Object的静态方法：
Object.keys()
Object.getOwnPropertyNames()
//对象属性模型的相关方法
Object.getOwnPropertyDescriptor() // 获取某个属性的描述对象。
Object.defineProperty() // 通过描述对象，定义某个属性。
Object.defineProperties() // 通过描述对象，定义多个属性
// 控制对象状态的方法
Object.preventExtensions()// 防止对象扩展。
Object.isExtensible() // 判断对象是否可扩展。
Object.seal() // 禁止对象配置。
Object.isSealed() // 判断一个对象是否可配置。
Object.freeze() // 冻结一个对象。
Object.isFrozen() //判断一个对象是否被冻结。
// 原型链相关方法
Object.create() // 该方法可以指定原型对象和属性，返回一个新的对象。
Object.getPrototypeOf() // 获取对象的Prototype对象。

// 除了静态方法，还有不少方法定义在Object.prototype对象。它们称为实例方法，所有Object的实例对象都继承了这些方法。

// Object实例对象的方法，主要有以下六个。

Object.prototype.valueOf() // 返回当前对象对应的值。
Object.prototype.toString() // 返回当前对象对应的字符串形式。应用于判断数据类型
Object.prototype.toLocaleString() // 返回当前对象对应的本地字符串形式。
Object.prototype.hasOwnProperty() // 判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
Object.prototype.isPrototypeOf() // 判断当前对象是否为另一个对象的原型。
Object.prototype.propertyIsEnumerable() // 判断某个属性是否可枚举。

// 如果Object方法的参数是一个对象，它总是返回该对象，即不用转换。
function isObject(value) {
    return value === Object(value);
  }
  
  isObject([]) // true
  isObject(true) // false

// 不同数据类型的Object.prototype.toString方法返回值如下。

// 数值：返回[object Number]。
// 字符串：返回[object String]。
// 布尔值：返回[object Boolean]。
// undefined：返回[object Undefined]。
// null：返回[object Null]。
// 数组：返回[object Array]。
// arguments 对象：返回[object Arguments]。
// 函数：返回[object Function]。
// Error 对象：返回[object Error]。
// Date 对象：返回[object Date]。
// RegExp 对象：返回[object RegExp]。
// 其他对象：返回[object Object]。

// 属性描述对象的六个元属性
/* 
{
    value: 123,          属性值
    writable: false,     布尔值，属性值value是否可改变
    enumerable: true,    布尔值，该属性是否可遍历
    configurable: false, 布尔值，属性描述对象的可写性
    get: undefined,      该属性的取值函数getter
    set: undefined       该属性的存值函数setter
}
*/

Object.keys([]) // []
Object.getOwnPropertyNames([]) // [ 'length' ]

Object.keys(Object.prototype) // []
Object.getOwnPropertyNames(Object.prototype)
// ['hasOwnProperty',
//  'valueOf',
//  'constructor',
//  'toLocaleString',
//  'isPrototypeOf',
//  'propertyIsEnumerable',
//  'toString']

// 如果一个属性的enumerable为false，下面三个操作不会取到该属性。

// for..in循环
// Object.keys方法
// JSON.stringify方法
// 因此，enumerable可以用来设置“秘密”属性。
/*
for...in循环包括继承的属性，Object.keys方法不包括继承的属性。
如果需要获取对象自身的所有属性，不管是否可遍历，可以使用Object.getOwnPropertyNames方法。
另外，JSON.stringify方法会排除enumerable为false的属性，有时可以利用这一点。
如果对象的 JSON 格式输出要排除某些属性，就可以把这些属性的enumerable设为false。
*/

// 除了直接定义以外，属性还可以用存取器（accessor）定义。
// 其中，存值函数称为setter，使用属性描述对象的set属性；取值函数称为getter，使用属性描述对象的get属性。
var obj = Object.defineProperty({}, 'p', {
    get: function () {
      return 'getter';
    },
    set: function (value) {
      console.log('setter: ' + value);
    }
});
  
  obj.p // "getter"
  obj.p = 123 // "setter: 123"

  // 写法二
var obj = {
    get p() {
      return 'getter';
    },
    set p(value) {
      console.log('setter: ' + value);
    }
};
/*
第一种写法，属性p的configurable和enumerable都为false，从而导致属性p是不可遍历的；
第二种写法，属性p的configurable和enumerable都为true，因此属性p是可遍历的。实际开发中，写法二更常用。

注意，取值函数get不能接受参数，存值函数set只能接受一个参数（即属性的值）。

存取器往往用于，属性的值依赖对象内部数据的场合。 
*/
var obj ={
    $n : 5,
    get next() { return this.$n++ },
    set next(n) {
      if (n >= this.$n) this.$n = n;
      else throw new Error('新的值必须大于当前值');
    }
  };
  
  obj.next // 5
  
  obj.next = 10;
  obj.next // 10
  
  obj.next = 5;
  // Uncaught Error: 新的值必须大于当前值

//   通过Object.defineProperty方法来拷贝属性。
// hasOwnProperty那一行用来过滤掉继承的属性，否则可能会报错，因为Object.getOwnPropertyDescriptor读不到继承属性的属性描述对象。
var extend = function (to, from) {
    for (var property in from) {
      if (!from.hasOwnProperty(property)) continue;
      Object.defineProperty(
        to,
        property,
        Object.getOwnPropertyDescriptor(from, property)
      );
    }
  
    return to;
  }
  
  extend({}, { get a(){ return 1 } })
  // { get a(){ return 1 } })


  // 控制对象状态
  // 有时需要冻结对象的读写状态，防止对象被改变。JavaScript 提供了三种冻结方法。
  // 最弱的一种是Object.preventExtensions，其次是Object.seal，最强的是Object.freeze。
  /*
  Object.preventExtensions方法  使得一个对象无法再添加新的属性。
  Object.isExtensible方法用于检查一个对象是否使用了Object.preventExtensions方法。也就是说，检查是否可以为一个对象添加属性。
  */