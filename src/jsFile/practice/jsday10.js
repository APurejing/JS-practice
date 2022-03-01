// 编写一个函数 sumTo(n) 计算 1 + 2 + ... + n 的和。

// 循环
function sumTo(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        console.log('i--' + i, 'n--' + n);
        result = result + i;
        console.log("--" + result);
    }
    return result;
}

sumTo(3);
sumTo(10);
sumTo(100);

// 递归
function sumTo(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumTo(n - 1);
    }
}

sumTo(3);
console.log('3');
sumTo(10);

sumTo(100);

// 等差数列

function sumTo(n) {
    return n * (n + 1) / 2;
}



function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}


function fib(n) {
    return (n > 1) ? fib(n - 1) + fib(n - 2) : n
}

function printList(list) {
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        return element
    }
}

function sumAll(...args) { // 数组名为 args
    console.log(args);
    console.log(Array.isArray(args));
    let sum = 0;

    for (let arg of args) {
        console.log('--' + arg);
        sum += arg
    };

    return sum;
}

sumAll(1, 2, 3)


const array1 = [1, 2, 4, 6, 9];
const map1 = array1.map(x => x + 3);
console.log(map1);

let showArg = () => alert(arguments[0]);
showArg();



//  编写一个像 sum(a)(b) = a+b 这样工作的 sum 函数。
function sum(a) {
    return function (b) {
        return a + b;
    };
}

/**我们有一个内建的数组方法 arr.filter(f)。它通过函数 f 过滤元素。如果它返回 true，那么该元素会被返回到结果数组中。

制造一系列“即用型”过滤器：

inBetween(a, b) —— 在 a 和 b 之间或与它们相等（包括）。
inArray([...]) —— 包含在给定的数组中。
用法如下所示：

arr.filter(inBetween(3,6)) —— 只挑选范围在 3 到 6 的值。
arr.filter(inArray([1,2,3])) —— 只挑选与 [1,2,3] 中的元素匹配的元素 */

function inBetween(a, b) {
    return function (x) {
        console.log('--' + x);
        return x >= a && x <= b;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.filter(inBetween(3, 6));

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inArray([1, 2, 10]))); // 1,2


const filterCallback = (value, index, arr) => {
    console.log('filter遍历--', value, index, arr);
    console.log('当前这次遍历，判断条件--', value > 1);
    return value > 1;
}

const arr = [1, 2, 3];

const filterArr = arr.filter(filterCallback);

console.log(filterArr);

arr.filter(function (x) {
    return x >= 5;
})



function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}


const getCallBack = (arr) => {
    return (value, index, arr) => {
 

        console.log('filter的回调');
    };
    
}

const filterCallback = getCallBack([1, 2,3]);

const aar1 = [1,2,3]

const filterCallback = (value, index, arr, extraArr) => {
    arr1
    console.log('filter的回调');
};

arr.filter(filterCallback);

arr.filter(function(value,index, arr) {
    console.log('filter回调')
});


let arr = [1, 2, 3, 4, 5, 6, 7];


arr.filter(inArray([1, 2, 12]));


const arr1 = arr.filter((value, index, array) => {


    return [1, 2, 10].includes(value);
});


const arr1 = arr.filter((value, index, array) => {


    return [1, 2, 11].includes(value);
});

const arr1 = arr.filter((value, index, array) => {


    return [1, 2, 12].includes(value);
});


//  arr 数组
// condition 判断函数
const filter =  function(arr,condition) {


    /**
     * filter([1,2,3,4], (value) => {
    //  value是不是能整除2
    //  是，返回true；不是，返回false
    return value % 2 === 0;
});
     */

    arr = [1,2,3,4];
    condtion = (value) => {
        //  value是不是能整除2
        //  是，返回true；不是，返回false
        return value % 2 === 0;
    };


    let result = [];
    for (let i = 0; i < arr.length; i++) {


        //  i是表示在访问第几个元素
        const value = arr[i];

        if (condition(value)) {
            //  当前value是偶数
            result.push(value);
        }
        
    }


    return result;
}

const testArr = filter([1,2,3,4], (value) => {
    //  value是不是能整除2
    //  是，返回true；不是，返回false
    return value % 2 === 0;
});


console.log('testArr--', testArr);



function getNumLength(num) {
    for
    //
}



const reverseNum = (num) => {

    return
}

const reverseNum = reverseNum(1234);

reverseNum === 4321;