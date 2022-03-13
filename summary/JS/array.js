let fruits = ['Apple', 'Banana'];

let first = fruits[0];
let last = fruits[fruits.length - 1];

fruits.forEach(function (item, index, array) {
  console.log('this is -- ' + item, index);
});

// 添加元素到数组的尾部
let newLength = fruits.push('Orange');

// 删除数组末尾的元素
let last1 = fruits.pop();

// 删除数组头部元素
let first1 = fruits.shift();

// 添加元素到数组头部
let newLength1 = fruits.unshift('Strawberry');

// 找出某个元素在数组中的索引
fruits.push('Mango');
let pos = fruits.indexOf('Banana');

// 通过索引删除某个元素
let removedItem = fruits.splice(pos, 1);
console.log(fruits);

const test = (...args) => {
  console.log('接收到的参数--', args);
};

test(1, '123', true);
