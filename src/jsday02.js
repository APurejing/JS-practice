function Person(name) {
    var _age;
    function setAge(n) {
        _age = n;
    }
    function getAge() {
    return _age;
    }

    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    };
};


var p1 = Person('张三');
p1.setAge(25);
p1.getAge()



// 语句和表达式

var a = 1;
var b = 2;
var c = a + b;
var d = !!a;

!!a;

while(true) {
    console.log('循环')
}

switch (key) {
    case value:
        // todo
        break;
    case value2:

    default:
        break;



} var a = ( 5 > 1) ? 1 : 0;




do {
    console.log('一次循环')
} while (false);

while (false) {
    console.log('一次循环')
}


(function() {
    console.log('这是立即执行函数');
})();


var fi = function(num) {
    if(num===0){
        return 0;
    }if(num===1){
        return 1;
    }
        return fi(num-2) + fi(num-1);
}

fi(6)




var test = function() {
    console.log('函数表达式test')
}

function test() {
    console.log('函数关键字tets');
}

test();