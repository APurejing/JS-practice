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

