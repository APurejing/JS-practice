// 题目犹豫的地方

// var，let，const

// 自增操作 i++；等效于 i = i + 1；

/*
代码	输出
\'	单引号
\"	双引号
\\	反斜杠
\n	换行符
\r	回车符
\t	制表符
\b	退格
\f	换页符
*/

// 了解字符串的不变性
// 在 JavaScript 中，字符串（String）的值是不可变的（immutable），这意味着一旦字符串被创建就不能被改变。

// 例如，下面的代码：

// let myStr = "Bob";
// myStr[0] = "J";
// 是不会把变量 myStr 的值改变成 Job 的，因为变量 myStr 是不可变的。 注意，这并不意味着 myStr 永远不能被改变，只是字符串字面量 string literal 的各个字符不能被改变。 改变 myStr 的唯一方法是重新给它赋一个值，例如：

// let myStr = "Bob";
// myStr = "Job";


/**记录集合
给定一个对象，用来表示部分音乐专辑收藏。 每张专辑都有几个属性和一个唯一的 id 号作为键值。 并非所有专辑都有完整的信息。

以 updateRecords 函数开始，这个函数需要一个对象 records，包含一个音乐专辑集合，一个 id，一个 prop（如 artist 或 tracks），和一个 value。 使用下面的规则完成函数来修改传递给函数的对象。

函数必须始终返回整个音乐专辑集合对象。
如果 prop 不是 tracks 并且 value 不是一个空字符串， 将专辑的 prop 更新或设置为 value。
如果 prop 是 tracks 但专辑没有 tracks 属性，则应创建空数组并为其添加 value。
如果 prop 是 tracks 并且 value 不是一个空字符串，将 value 添加到专辑现有 tracks 数组的末尾。
如果 value 是空字符串，从专辑里删除指定的 prop。
注意： 用 recordCollection 对象做为测试参数对象。 */

// Setup
// 给定一个对象，用来表示部分音乐专辑收藏。 每张专辑都有几个属性和一个唯一的 id 号作为键值。 并非所有专辑都有完整的信息。

// 以 updateRecords 函数开始，这个函数需要一个对象 records，包含一个音乐专辑集合，一个 id，一个 prop（如 artist 或 tracks），和一个 value。 使用下面的规则完成函数来修改传递给函数的对象。

// 函数必须始终返回整个音乐专辑集合对象。
// 如果 prop 不是 tracks 并且 value 不是一个空字符串， 将专辑的 prop 更新或设置为 value。
// 如果 prop 是 tracks 但专辑没有 tracks 属性，则应创建空数组并为其添加 value。
// 如果 prop 是 tracks 并且 value 不是一个空字符串，将 value 添加到专辑现有 tracks 数组的末尾。
// 如果 value 是空字符串，从专辑里删除指定的 prop。
// 注意： 用 recordCollection 对象做为测试参数对象。


var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        'tracks': []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


//    Solution 2 (Click to Show/Hide)
var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === '') {
        delete records[id][prop];
    } else if (prop === 'tracks') {
        records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
        records[id][prop].push(value);
    } else {
        records[id][prop] = value;
    }
    return records;
}

// 递归

// 生成随机小数很棒，但随机数更有用的地方在于生成随机整数。

// 用 Math.random() 生成一个随机小数。
// 把这个随机小数乘以 20。
// 用 Math.floor() 向下取整，获得它最近的整数。
// 记住 Math.random() 永远不会返回 1。同时因为我们是在向下取整，所以最终我们获得的结果不可能有 20。 这确保了我们获得了一个在 0 到 19 之间的整数。

// 把操作连缀起来，代码类似于下面：

// Math.floor(Math.random() * 20);
// 我们先调用 Math.random()，把它的结果乘以 20，然后把上一步的结果传给 Math.floor()，最终通过向下取整获得最近的整数。
// Math.floor(Math.random() * (max - min + 1)) + min生成某个范围内的随机整数

// parseInt() 函数解析一个字符串并返回一个整数。 
// parseInt(string, radix);它还可以传入第二个参数，指定了字符串中数字的基数。 基数可以是 2 到 36 之间的整数。


/**
 * 条件运算符（ conditional operator,）（也称为三元运算符（ ternary operator））的就像写成一行的 if-else 表达式

语法是：a ? b : c, where a 是条件，当条件返回 true 的时候运行代码 b，当条件返回 false 的时候运行代码 c。

以下函数使用 if/else 语句来检查条件：

function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
这可以使用三元运算符重写：

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}

 */