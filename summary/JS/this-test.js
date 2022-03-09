// this指向问题

const globalFunc = function () {
  console.log('全局作用域声明的函数，this指向--', this);
};

globalFunc(); // window

obj.objFunc();

const name = obj.name;

const obj = {
  objFunc: function () {
    console.log('对象属性为方法时，调用该方法，this指向--', this);
  },
  name: 123
};

const b = obj.objFunc;

b();

// this面试题

function foo() {
  console.log(this.bar);
}
var bar = 'bar1';
var o2 = { bar: 'bar2', foo: foo };
var o3 = { bar: 'bar3', foo: foo };

foo(); // foo.call(window);
o2.foo(); // foo.call(o2);
foo();
