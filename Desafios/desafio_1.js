//1) somar(3)(4)(5)

const somar = (num) => {
    return (num2) => {
        return (num3) => num + num2 + num3;
    }
}

let soma56 = somar(5)(6);
let soma1 = somar(1);

console.log(somar(3)(4)(5));
console.log(soma1(2)(3));
console.log(soma56(7));

// 2) calcular(3)(7)(fn)

const calcular = function (num) {
    return function (num2) {
        return function (fn) {
        return fn(num,num2);
        }
    }
}

const sum = (num,num2) => num + num2;
const sub = (num,num2) => num - num2;
const div = (num,num2) => num / num2;
const mult = (num,num2) => num*+ num2;

console.log(calcular(1)(2)(sum));
console.log(calcular(20)(10)(sub));
console.log(calcular(10)(5)(div));
console.log(calcular(50)(3)(mult));

// 3) Soma indefinida

const indefSum = (...numbers) => numbers.reduce((acc, act) => acc += act,0);

console.log(indefSum(1,2,3,4,5,6,7,8,9,10));

// this em function declaration => refere-se ao elemento que chamou a invacação

Array.prototype.lastElement = function () {
    console.log(this[this.length - 1]);
};

[1,2,3,600].lastElement();

// this em arrow function

Array.prototype.firstElement = () => {
    console.log(this[0]);
};

[1,2,3,600].firstElement();