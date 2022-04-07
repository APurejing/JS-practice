// 原始数据类型
let isDone: boolean = false;
let age: number = 10;
let firstName: string = 'hello world';
let message: string = `支持模版字符串`;

let u: undefined = undefined;
let n: null = null;

// undefined和null可以赋值给别的数据类型
let num: number = undefined;

// any类型 可以任意调用方法和属性，容易产生错误。
let notSure: any = 4;
notSure = 'maybe a string';
notSure = true;

// 复杂数据类型
// Array
let arrOfNumbers: number[] = [1, 2, 3]; // 每一项都必须是number
arrOfNumbers.push(3);
// Tuple 限制项的个数及类型
let user: [string, number] = ['a', 10];
// 但可以使用数组方法突破项的个数限制，但不能使用其他类型
user.push(20);
