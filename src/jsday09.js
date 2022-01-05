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


// rest 操作符


/**解构赋值是 ES6 引入的新语法，用来从数组和对象中提取值，并优雅地对变量进行赋值。

有如下 ES5 代码：

const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
name 的值应该是字符串 John Doe， age 的值应该是数字 34。

下面是使用 ES6 解构赋值语句，实现相同效果：

const { name, age } = user;
同样，name 的值应该是字符串 John Doe， age 的值应该是数字 34。

在这里，自动创建 name 和 age 变量，并将 user 对象相应属性的值赋值给它们。 这个方法简洁多了。

你可以从对象中提取尽可能多或很少的值。 */

const person = {
    name: '小盖',
    grade: 'female',
    age: 18
};

const name = person.name;
const grade = person.grade;
const age =  person.age;


const {name, grade, age} = person;

const { name: myName, ...gradeAndAge } = person;

const arr = [1, 2,3, 4, 5];
const [a, b, c, d, e] = arr;
const [a, ...bcd, e] = arr;

const group = {
    unit: {
        unitId: '1',
        unitName: '单元1',
        createTime: '2022-01-03'
    }
};

const { unit: {
    unitId,
    unitName: name,
    createTime: time
} } = group;


//  map Array.prototype.map
const arr = [1,2,3,4]; // new Array();

const arr1 = arr.map((item) => {
    return item + 1;
});

const arr2 = arr.map(function(item,index,arr){
    //  index 
})

const personList = [
    {
        name: '1',
        age: 1
    },
    {
        name: '2',
        age: 2
    }
]
const  personNameList = personList.map(function(item, index, arr) {
    return {
        name: item.name,
        age: item.age,
        cutom: '新'
    }
});



const arr1 = arr.map(function() {});

//   some every

const numList = [1, 2,3,4]
const isAllNumGaterThan4 = numList.every(function(item, index) {
    return item === 4;
});


// reduce

const arr4 = [1, 2, 3, 4];

let sum  = 0
for (let i = 0; i < arr4.length; i++) {
    sum  = sum + arr[i];
}
console.log('sum--', sum);

const sum1 = arr4.reduce(function(previousValue, item, index, arr) {
    return previousValue + item;
}, 0)


// 使用模板字符串的反引号的语法创建一个包含条目（li）字符串的数组。 每个条目应该是 result 对象 failure 属性的数组内的元素，并具有 class 属性，值为 text-warning。 makeList 函数应该返回列表项字符串的数组。

// 使用遍历方法（可以是任意形式的循环）输出指定值（如下）。

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]

// Solutions
// Solution 1 (Click to Show/Hide)
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  // change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // change code above this line
  return failureItems;
}

const failuresList = makeList(result.failure);


// Solution 2 (Click to Show/Hide)
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  // change code below this line
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line
  return failureItems;
}
const failuresList = makeList(result.failure);

const profileUpdate = function(profileData) {
    const { name, age } = profileData;
}



const profileData1 = function(  {name, age} ) {

}