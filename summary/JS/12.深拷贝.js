// 方法一：用JSON
/**答题要点：
 * 1.不支持Date、正则、undefined、函数等数据
 * 2.不支持引用（即环状结构）
 * 3.必须说自己还会方法二
 */

// 把a对象序列化变成字符串，再反序列化变成对象
const b = JSON.parse(JSON.stringify(a));

// 方法二：用递归
/**要点：
 * 1.递归
 * 2.判断类型
 * 3.检查环
 * 4.不拷贝原型上的属性
 */

// 这段代码的不足
/**在里面加一句
 * a.self = a 自引用的环
 *
 */
const deepClone = (a) => {
  // 不考虑iframe
  if (a instanceof Object) {
    let result = undefined;
    // object
    if (a instanceof Function) {
      if (a.prototype) {
        // 普通函数
        result = function () {
          return a.apply(this, arguments);
        };
      } else {
        // 箭头函数
        result = (...args) => {
          return a(...args);
        };
      }
    } else if (a instanceof Array) {
      result = [];
    } else if (a instanceof Date) {
      result = new Date(a - 0); // 日期减0会得到一个数字，时间戳
    } else if (a instanceof RegExp) {
      result = new RegExp(a.source, a.flags);
    } else {
      result = {};
    }
    for (let key in a) {
      result[key] = deepClone(a[key]);
    }
    return result;
  } else {
    // string number boolean null undefined symbol bigint
    return a;
  }
};

const a = {
  number: 1,
  bool: false,
  str: 'hi',
  empty1: undefined,
  empty2: null,
  array: [
    { name: 'frank', age: 18 },
    { name: 'jacky', age: 19 }
  ],
  date: new Date(2000, 0, 1, 20, 30, 0),
  regex: /\.(j|t)sx/i,
  obj: { name: 'frank', age: 18 },
  f1: (a, b) => a + b,
  f2: function (a, b) {
    return a + b;
  }
};
