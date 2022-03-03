// 1.使用 Set（面试已经禁止这种了，因为太简单)
const a1 = [1, 2, 2, 3, 3, 3];
const uniq = function (a) {
  return Array.from(new Set(a));
};

uniq(a1);

// 类似的：
const uniq = function (a) {
  return [...new Set(a)];
};
uniq(a1);

// 第二种，禁用set，使用计数排序算法

const a1 = [1, 2, 2, 3, 3, 3];

const uniq = function (a) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    let number = a[i];
    if (number === undefined) {
      continue;
    }
    if (map.has(number)) {
      continue;
    }
    map.set(number, true);
  }
  return [...map.keys()]; // 不准用object.keys的话，遍历数组push进空数组
};
