/** 写博客 不完整
 要点：

知道要在原型上写
知道 all 的参数和返回值
知道用数组来记录结果
知道只要有一个 reject 就整体 reject */

Promise.prototype.all2 = (promiseList) => {
  return new Promise((resolve, reject) => {
    const result = [];
    const length = promiseList.length;
    let count = 0;
    const exit = () => {};

    promiseList.map((promise, index) => {
      promise.then(
        (data) => {
          result[index] = data;
          count += 1;
          if (count === length - 1) {
            resolve(result);
          }
        },
        (r) => {
          reject(r);
        }
      );
    });
  });
};
