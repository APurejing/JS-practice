// 强制转换主要指使用Number()、String()和Boolean()三个函数，手动将各种类型的值，分别转换成数字、字符串或者布尔值。
// 数值：转换后还是原来的值
Number(324) // 324

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0


parseInt('42 cats') // 42
Number('42 cats') // NaN

parseInt('\t\v\r12.34\n') // 12
Number('\t\v\r12.34\n') // 12.34

// Number方法的参数是对象时，将返回NaN，除非是包含单个数值的数组。valueOf和toString方法，都是可以自定义的。
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5

// Boolean()函数可以将任意类型的值转为布尔值
/*
除了以下五个值的转换结果为false，其他的值全部为true。

undefined
null
0（包含-0和+0）
NaN
''（空字符串）
*/

// 自动转换
/*
自动转换的规则：预期什么类型的值，就调用该类型的转换函数。
比如，某个位置预期为字符串，就调用String()函数进行转换。如果该位置既可以是字符串，也可能是数值，那么默认转为数值。
*/

// Error实例对象 必须有message属性
/*
message：错误提示信息
name：错误名称（非标准属性）
stack：错误的堆栈（非标准属性）
*/
if (error.name) {
    console.log(error.name + ': ' + error.message);
  }



function throwit() {
    throw new Error('');
}
  
function catchit() {
    try {
        throwit();
    } catch(e) {
        console.log(e.stack); // print stack trace
    }
}
  
catchit()
  // Error
  //    at throwit (~/examples/throwcatch.js:9:11)
  //    at catchit (~/examples/throwcatch.js:3:9)
  //    at repl:1:5

  //原生错误类型  存在Error的6个派生对象。都是构造函数

  /*
  SyntaxError对象是解析代码时发生的语法错误。
  ReferenceError对象是引用一个不存在的变量时发生的错误。
  RangeError对象是一个值超出有效范围时发生的错误。
  TypeError对象是变量或参数不是预期类型时发生的错误。
  URIError对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数。
  EvalError eval函数没有被正确执行  不再使用，保留
  */
  var err1 = new Error('出错了！');
  var err2 = new RangeError('出错了，变量超出有效范围！');
  var err3 = new TypeError('出错了，变量类型无效！');
  
  err1.message // "出错了！"
  err2.message // "出错了，变量超出有效范围！"
  err3.message // "出错了，变量类型无效！"



openFile();

try {
  writeFile(Data);
} catch(e) {
  handleError(e);
} finally {
  closeFile();
}



function f() {
    try {
      console.log(0);
      throw 'bug';
    } catch(e) {
      console.log(1);
      return true; // 这句原本会延迟到 finally 代码块结束再执行
      console.log(2); // 不会运行
    } finally {
      console.log(3);
      return false; // 这句会覆盖掉前面那句 return
      console.log(4); // 不会运行
    }
  
    console.log(5); // 不会运行
  }
  
  var result = f();
  // 0
  // 1
  // 3
  
  result
  // false


/* 
switch...case结构要求，在每一个case的最后一行必须是break语句，
否则会接着运行下一个case。这样不仅容易忘记，还会造成代码的冗长。
而且，switch...case不使用大括号，不利于代码形式的统一。
此外，这种结构类似于goto语句，容易造成程序流程的混乱，使得代码结构混乱不堪，不符合面向对象编程的原则。
*/
function doAction(action) {
    switch (action) {
        case 'hack':
            return 'hack';
        case 'slash':
            return 'slash';
        case 'run':
            return 'run';
        default:
            throw new Error('Invalid action.');
    }
}

// 改写
function doAction(action) {
    var actions = {
        'hack': function () {
            return 'hack';
        },
        'slash': function () {
            return 'slash';
        },
        'run': function () {
            return 'run';
        }
    };

    if (typeof actions[action] !== 'function') {
    throw new Error('Invalid action.');
    }
return actions[action]();
}

/* 
console的常见用途有两个。
调试程序，显示网页代码运行时的错误信息。
提供了一个命令行接口，用来与网页代码互动。

console.log方法支持以下占位符，不同类型的数据必须使用对应的占位符。
%s 字符串
%d 整数
%i 整数
%f 浮点数
%o 对象的链接
%c CSS 格式字符串
*/

console.assert(false, '判断条件不成立')
// Assertion failed: 判断条件不成立

// 相当于
try {
  if (!false) {
    throw new Error('判断条件不成立');
  }
} catch(e) {
  console.error(e);
}



/*
console 对象的静态方法
console.log()，console.info()，console.debug()
console.warn()，console.error()
console.table()
console.count()
console.dir()，console.dirxml()
console.assert()
console.time()，console.timeEnd()
console.group()，console.groupEnd()，console.groupCollapsed()
console.trace()，console.clear()
*/

/*
控制台命令行API
$_  返回上一个表达式的值
$0 - $4 控制台保存了最近5个在 Elements 面板选中的 DOM 元素，$0代表倒数第一个（最近一个），$1代表倒数第二个，以此类推直到$4
$(selector)   返回第一个匹配的元素，等同于document.querySelector()。注意，如果页面脚本对$有定义，则会覆盖原始的定义。
$$(selector)  返回选中的 DOM 对象，等同于document.querySelectorAll
$x(path)  方法返回一个数组，包含匹配特定 XPath 表达式的所有 DOM 元素
inspect(object) 方法打开相关面板，并选中相应的元素，显示它的细节。
getEventListeners(object)方法返回一个对象，该对象的成员为object登记了回调函数的各种事件（比如click或keydown），每个事件对应一个数组，数组的成员为该事件的回调函数。
keys(object)方法返回一个数组，包含object的所有键名。
values(object)方法返回一个数组，包含object的所有键值。
monitorEvents(object[, events])方法监听特定对象上发生的特定事件。事件发生时，会返回一个Event对象，包含该事件的相关信息。 
unmonitorEvents方法用于停止监听。

命令行 API 还提供以下方法。

clear()：清除控制台的历史。
copy(object)：复制特定 DOM 元素到剪贴板。
dir(object)：显示特定对象的所有属性，是console.dir方法的别名。
dirxml(object)：显示特定对象的 XML 形式，是console.dirxml方法的别名。
*/