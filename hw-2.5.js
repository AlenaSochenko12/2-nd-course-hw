"use strict";
//задание 1

const printNumber = (a, b) => {
    if (a >= b) {
        return a;
    } else {
        return b;
    }    
}

console.log(printNumber(8,4));
console.log(printNumber(6,6));
console.log(printNumber(4,8));

//задание 2

const printEven = (a) => {
    if (a % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(printEven(6));
console.log(printEven(5));

//задание 3

const printSquare = (a) => {
    console.log(a * a);
}

const printSquare2 = (b) => {
    return b * b;
}

printSquare(5);
console.log(printSquare2(6));

//задание 4

const helloFriend = () => {
    let question = prompt('Сколько вам лет?');
    if (question >= 0 && question <= 12) {
        console.log('Привет, друг!');
    } else if (question >= 13) {
        console.log('Добро пожаловать!');
    } else if (question < 0) {
        console.log('Вы ввели неправильное значение');
    }
}

helloFriend();

//задание 5

const checkNumbers = (a, b) => {
    if ((a !== null &&  a.trim().length === 0) || (b !== null &&  b.trim().length === 0)) {
        console.log('Одно или оба значения не являются числом');
    }
    let c = Number(a);
    let d = Number(b);
    let checkA = isNaN(c);
    let checkB = isNaN(d);
    if (checkA || checkB) {
        console.log('Одно или оба значения не являются числом');
    } else {
        return a * b;
    }
}

checkNumbers(check1 = prompt('Введите первое число'), check2 = prompt('Введите второе число'));

//задание 6

const cubeNumber = (a) => {
    if (a !== null &&  a.trim().length === 0) {
        console.log('Переданный параметр не является числом');
    } 
    else {
        let b = Number(a);
        let checkA = isNaN(b);
        if (!checkA) {
            let cube = b**3;
            console.log(`${b} в кубе равняется ${cube}`);
        } 
        else {
            console.log('Переданный параметр не является числом');
        }
    }
   
}

cubeNumber(a = prompt('Введите число'));

//задание 7

function getArea () {
    return Math.PI * this.radius**2;
}
function getPerimeter () {
    return 2 * Math.PI * this.radius;
}

let circle1 = {
    radius: 4,
    area: getArea,
    perimeter: getPerimeter,
};

let circle2 = {
    radius: 10,
    area: getArea,
    perimeter: getPerimeter,
};

console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());