/**
 * 发布订阅模式
 */

// string[]  <= []
//  number[]
// object[]

// null => []

enum AnimalType {
  犬科 = '1',
  猫科 = '2'
}

let dogAnimalType: AnimalType = AnimalType.犬科;

type gender1 = 'female' | 'male';
type gender2 = 1 | 0;

interface Animal {
  breed: AnimalType;
}

interface Dog extends Animal {}

interface Cat extends Animal {
  walk: () => void;
  voice: () => string;
}

const cat1: Cat = {
  breed: AnimalType.猫科,
  walk: () => {
    console.log('猫在走');
  },
  voice: () => {
    console.log('猫在叫');
    return 'cat cat cat';
  }
};

interface Person {
  name: string;
  age: number;
  child: {
    name: string;
    age: number;
  }[];
}

type PersonKey = keyof Person;

type Direction = 'south' | 'earth';

const a: Direction = 'south';

const tom: Person = {
  name: 'tom',
  age: 1,
  child: []
};

interface Name {
  name: string;
}

interface Name {
  age: number | string | boolean;
}

// type Age = {
//   age: number;
// };

// type Gender = {
//   gender: string;
// };

// type AgeAndGender = Age & Gender;

// type AgeAndGender = {
//   age: number;
//   gender: string;
// }

interface Name {
  name: string;
}
interface Age {
  age: number;
}

type Person1 = Name & Age;

const person: Person1 = {
  name: '123',
  age: 12
};

// const abcd: AgeAndGender = {
//   age: 18,
//   gender: '123'
// };

//  定义一个接口

interface Register {}

type Man = {
  manName: string;
};

type Woman = {
  womanName: string;
  params: string[];
};

type Person2 = Man | Woman;

const person2: Person2 = {
  manName: '12'
};

// tuple
// 声明一个全局都可以使用的数据结构描述
// declare function Test1(param1: string, param2: number, param3: boolean): void;

// declare function Test2(...args: [string, number, boolean]): void;

// declare const Name: string;

type Test3 = (...args: [string, number, boolean]) => void;

interface Age {}
