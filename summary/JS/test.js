const arr = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10];

const flatArr = (mulArr) => {
  const stack = [...mulArr];
  const res = [];

  while (stack.length) {
    const next = stack.pop();

    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }

  return res.reverse();
};

const result = flatArr(arr);
console.log(result);
