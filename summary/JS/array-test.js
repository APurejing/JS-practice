//  二维数组

// const twoDimensionArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// [1,2,3,4,5,6,7,8,9]

// const flatArr = (arr) => {
//   const result = [];
//   for(i = 0; i < arr.length; i++){
//     const item = arr[i];
//     for(j = 0; j < item.length; j++){
//       result.push(item[j]);
//     }
//   }

//   return result;
// };

// const result = flatArr(twoDimensionArr);
// console.log(result);

//  多维数组拍平

const fiveDimensionArr = [
  [[[[1, 2, 3]]]],
  [3, 4],
  [
    [
      [
        [1, 2, 3],
        [4, 5, 6]
      ]
    ]
  ]
];

// 用栈来记录
const flatArr = (multiDimensionArr) => {
  const stack = [...multiDimensionArr];
  const res = [];

  while (stack.length) {
    // pop value from stack
    console.log('stack--', JSON.stringify(stack));
    const next = stack.pop();
    console.log('next--', JSON.stringify(next));
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
};

const result = flatArr(fiveDimensionArr);

console.log(result);
