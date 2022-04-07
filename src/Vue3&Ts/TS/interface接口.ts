// 赋值时变量的shape必须和接口完全一致

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: 'zs',
  age: 18
};

// 设置可选项时
interface Person1 {
  name: string;
  age?: number;
}

let person1: Person1 = {
  name: 'ls'
};

// 设置只读属性
interface Person2 {
  readonly id: number;
  name: string;
  age?: number;
}

let person2: Person2 = {
  id: 1,
  name: 'xw'
};
// 此时下方输入报错
// person2.id = 1
