// Object
let user = new Object(); // “构造函数”创建空对象
let user = {};  // 字面量创建空对象

let user = {
    name: "John",
    age: 30,
};
// 读取文件属性 可以使用.访问属性值(多词属性不可以使用.操作，如“like birds”)
alert(user.name);
alert(user.age);
// 添加一个布尔类型的属性值
user.isAdmin = true
// 移除属性
delete user.age;
// 多字词语也可以作为属性名，但必须加引号
let user = {
    name: "John",
    age: 30,
    "like birds": true,
};

// 点符号要求key是有效的变量标识符。
// 这意味着：不包含空格，不以数字开头，也不包含特殊字符（允许使用 $ 和 _）。
// 解决方法：引用方括号。方括号中的字符串要放在引号中，单引号或双引号都可以。
let user = {};
user ["like birds"] = true;
alert(user["like birds"]); // true
delete user ["like birds"];

let key = "likes birds";
user[key] = true;

let user = {
    name: "John",
    age: 30
};

// 当创建一个对象时，我们可以在对象字面量中使用方括号。这叫做 计算属性。
let fruit = prompt("Which fruit to buy?","apple");

let bag = {
    [fruit]: 5, // 属性名是从 fruit 变量中得到的
};

alert(bag.apple); // 5  如果fruit="apple",bag将变为{apple: 5}


let fruit = 'apple';
let bag = {
    [fruit + 'Computers']: 5  // bag.appleComputers = 5
};
//  当属性名是已知且简单的时候，就使用点符号。
//  如果我们需要一些更复杂的内容，那么就用方括号。


// 属性值简写
function makeUser(name,age) {
    return {
        name,  // name: name 属性名和变量名一致的时候可以缩写，且可以与正常方式混用
        age, // age: age
    }
}

let user = makeUser('John', 30);
alert(user.name);


// for...in循环
let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // 属性键的值
    alert( user[key] ); // John, 30, true
  }


  // this对象方法
  let user = {
      name: "John",
      age: 30
  };

  user.sayHi = function() {
      alert("Hello");
  }

  user.sayHi();



  let user = {name: "John"};
  let admin = {name: "Admin"};

  function sayHi() {
      alert(this.name);
  }

  user.f = sayHi;
  admin.f = sayHi;

  user.f(); // John（this == user）
  admin.f(); // Admin（this == admin）

  admin['f'](); // Admin（使用点符号或方括号语法来访问这个方法，都没有关系。）


//   箭头函数没有自己的this，访问到的this都是从外部获取的
let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user.sayHi(); // Ilya???