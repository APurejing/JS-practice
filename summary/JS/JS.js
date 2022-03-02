// 7. JS如何实现类
// 两种方法：使用原型，使用 class
// 方法一：使用原型
function Dog(name) {
  this.name = name;
  this.legsNumber = 4;
}
Dog.prototype.kind = '狗';
Dog.prototype.say = function () {
  console.log(`汪汪汪~ 我是${this.name}，我有${this.legsNumber}条腿。`);
};
Dog.prototype.run = function () {
  console.log(`${this.legsNumber}条腿跑起来。`);
};
const d1 = new Dog('啸天'); // Dog 函数就是一个类
d1.say();

// 方法二：使用 class
class Dog {
  kind = '狗'; // 等价于在 constructor 里写 this.kind = '狗'
  constructor(name) {
    this.name = name;
    this.legsNumber = 4;
    // 思考：kind 放在哪，放在哪都无法实现上面的一样的效果
  }
  say() {
    console.log(`汪汪汪~ 我是${this.name}，我有${this.legsNumber}条腿。`);
  }
  run() {
    console.log(`${this.legsNumber}条腿跑起来。`);
  }
}
const d1 = new Dog('啸天');
d1.say();

// 8. JS 如何实现继承？
// 有两种方法：使用原型链，使用 class

// 方法一：使用原型链
function Animal(legsNumber) {
  this.legsNumber = legsNumber;
}
Animal.prototype.kind = '动物';

function Dog(name) {
  this.name = name;
  Animal.call(this, 4); // 关键代码1
}
Dog.prototype.__proto__ = Animal.prototype; // 关键代码2，但这句代码被禁用了，怎么办

Dog.prototype.kind = '狗';
Dog.prototype.say = function () {
  console.log(`汪汪汪~ 我是${this.name}，我有${this.legsNumber}条腿。`);
};

const d1 = new Dog('啸天'); // Dog 函数就是一个类
console.dir(d1);

// 如果面试官问被 ban 的代码如何替换，就说下面三句：

var f = function () {};
f.prototype = Animal.prototype;
Dog.prototype = new f();

// 方法二：使用 class
class Animal {
  constructor(legsNumber) {
    this.legsNumber = legsNumber;
  }
  run() {}
}
class Dog extends Animal {
  constructor(name) {
    super(4);
    this.name = name;
  }
  say() {
    console.log(`汪汪汪~ 我是${this.name}，我有${this.legsNumber}条腿。`);
  }
}

// 9.手写节流throttle、防抖debounce
const throttle = (fn, time) => {
  let isCding = false;
  return (...args) => {
    if (isCding) return;
    fn.call(undefined, ...args);
    isCding = true;
    setTimeout(() => {
      isCding = false;
    }, time);
  };
};

// 简洁版，删掉冷却中变量，直接用timer
const throttle = (fn, time) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      return;
    }
    fn.call(undefined, ...args);
    timer = setTimeout(() => {
      timer = null;
      x;
    }, time);
  };
};

const throwSkill = () => {
  console.log('放技能');
};

const advancedThrowSkill = throttle(throwSkill, 4000);

//

// 防抖（回城被打断）
const debounce = (fn, time) => {
  // 回城计时器backTime
  let backTime = null;
  return (...args) => {
    console.log('上个定时器存在吗--', backTime, backTime !== bull);
    if (backTime !== null) {
      clearTimeout(backTime); // 打断回城
    }
    // 重新回城
    backTime = setTimeout(() => {
      fn.call(undefined, ...args); // 回城后调用fn
      backTime = null;
    }, time);
  };
};
