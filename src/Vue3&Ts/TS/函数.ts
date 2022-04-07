// 原函数样式
function add(x, y) {
  return x + y;
}
//ts函数样式
function add1(x: number, y: number): number {
  return x + y;
}

// 可选参数后面不能再添加确定的参数
function add2(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}

// 函数类型
const add3 = (x: number, y: number, z?: number): number => {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
};

let add4: (x: number, y: number, z?: number) => number = add;

interface Isum {
  (x: number, y: number, z?: number): number;
}
let add5: Isum = add;
