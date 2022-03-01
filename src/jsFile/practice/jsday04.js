var type = function (o){
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
  };
  
  ['Null',
   'Undefined',
   'Object',
   'Array',
   'String',
   'Number',
   'Boolean',
   'Function',
   'RegExp'
  ].forEach(function (t) {
    type['is' + t] = function (o) {
      return type(o) === t.toLowerCase();
    };
  });
  
  type.isObject({}) // true
  type.isNumber(NaN) // true
  type.isRegExp(/abc/) // true


/*
属性描述对象提供6个元属性。

（1）value

value是该属性的属性值，默认为undefined。

（2）writable

writable是一个布尔值，表示属性值（value）是否可改变（即是否可写），默认为true。

（3）enumerable

enumerable是一个布尔值，表示该属性是否可遍历，默认为true。如果设为false，会使得某些操作（比如for...in循环、Object.keys()）跳过该属性。

（4）configurable

configurable是一个布尔值，表示属性的可配置性，默认为true。如果设为false，将阻止某些操作改写属性描述对象，比如无法删除该属性，也不得改变各种元属性（value属性除外）。也就是说，configurable属性控制了属性描述对象的可写性。

（5）get

get是一个函数，表示该属性的取值函数（getter），默认为undefined。

（6）set

set是一个函数，表示该属性的存值函数（setter），默认为undefined。


*/

/*
    value: 123,
    writable:false,
    enumerable: true,
    configurable: false,
    get: undefined,
    set: undefined
*/