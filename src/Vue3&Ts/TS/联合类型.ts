let str = 'str';

// union types
let numberOrString: number | string;
numberOrString = 'abc';
numberOrString = 12;
// 只能访问联合类型共有的属性方法,例如
numberOrString.toString();
