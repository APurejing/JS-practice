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
