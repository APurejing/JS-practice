// const test = (...argumentList) => {
//   console.log('传进来的参数--', argumentList, Array.isArray(argumentList));
//   console.log('解构一下', ...argumentList);
//   const fn = function () {};
//   fn.apply(undefined, argumentList);
//   fn.call(undefined, ...argumentList); // fn.call(undefined, 1, '2', true, {name: '123'})
// };

// test(1, '2', true, { name: '123' });

const doWork = (param1, param2) => {
  console.log('所有实际传进来的参数--', arguments);
  console.log('this--', this);
  console.log('我们定义函数逻辑用到的形式参数', param1, param2);
};

doWork.apply({ name: '自己定义的this对象' }, [1, 2, 3]);
doWork.call({ name: '自己定义的this对象' }, 1, 2, 3);
// doWork.apply(window, 1, 2);
