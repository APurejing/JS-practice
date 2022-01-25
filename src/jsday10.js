// 编写一个函数 sumTo(n) 计算 1 + 2 + ... + n 的和。

// 循环
function sumTo(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        console.log('i--'+i,'n--'+n);
        result = result + i;
        console.log("--"+result);
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
        return n + sumTo(n-1);
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
    return (n != 1) ? n * factorial(n-1): 1;
}


function fib(n) {
    return (n > 1) ? fib(n-1) + fib(n -2) : n
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