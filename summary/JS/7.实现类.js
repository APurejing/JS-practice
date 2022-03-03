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
