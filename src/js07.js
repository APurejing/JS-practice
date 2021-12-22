// 面向对象编程
/**
 * 对象是单个实物的抽象
 * 对象是一个容器，封装了属性（property）和方法（method）
 * 构造函数的特点有两个。
 * 函数体内部使用了this关键字，代表了所要生成的对象实例。
 * 生成对象的时候，必须使用new命令。
 * 为了保证构造函数必须与new命令一起使用，一个解决办法是，构造函数内部使用严格模式，即第一行加上use strict。一旦忘了使用new命令，直接调用构造函数就会报错。
 * 另一个解决办法，构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象。
 */
function Fubar(foo, bar) {
    if (!(this instanceof Fubar)) {
        return new Fubar(foo, bar);
    }

    this._foo = foo;
    this._bar = bar;
}

Fubar(1, 2)._foo // 1
    (new Fubar(1, 2))._foo // 1




// 构造函数继承  父类的原型方法不会被子类继承
function Parent1() {
    this.name = '这是Parent1定义的name';
}
function Child1() {
    Parent1.call(this);
    this.age = '这是Child1定义的age';
}


// 原型链继承  优点：复用父级方法  缺点：子类实例共享属性，所有属性方法只能复用父级，没有自己的属性，实例之间的属性相互影响
function Parent2() {
    this.name = '这是Parent2定义的name';
}
function Child2() {
    this.age = '这是Child2定义的age';
}
Child2.prototype = new Parent2();


// 组合继承  实现函数复用，保证每个实例之间的属性不会相互影响。缺点是父类属性继承两次，一次是子类型原型继承，一次是子类型实例继承，但实例继承的属性屏蔽了原型继承的属性。
function Parent3() {
    // this.name = '这是Parent3定义的name';
    this.arr = [1, 2, 3];
}
function Child3(name) {
    Parent3.call(this);
    this.name = name;
    this.age = '这是Child3定义的age';
}
Child3.prototype = new Parent3();

let child3_1 = new Child3('child3_1');
let child3_2 = new Child3('child3_2');



// 组合继承的优化1 减少父类函数调用的次数
function Parent4() {
    this.name = '这是Parent4定义的name';
}
function Child4() {
    Parent4.call(this);
    this.age = '这是Child4定义的age';
}
Child4.prototype = Parent4.prototype;  // 优化的部分，但共用了一个原型对象Parent4的constructor,无法区分实例是由父类创造的还是子类创造的



// 组合继承的优化2
function Parent5() {
    this.name = '这是Parent5定义的name';
}
function Child5() {
    Parent5.call(this);
    this.age = '这是Child5定义的age';
}
Child5.prototype = Object.create(Parent5.prototype); // 创建中间对象，把两个原型对象区分开，父类和子类原型对象的隔离
Child5.prototype.constructor = Child5;