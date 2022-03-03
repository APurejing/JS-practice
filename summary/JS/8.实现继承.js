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

// 被 ban 的代码如何替换，就说下面三句：

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
