"use strict";

//задание 1
var printNumber = function printNumber(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
};

console.log(printNumber(8, 4));
console.log(printNumber(6, 6));
console.log(printNumber(4, 8)); //задание 2

var printEven = function printEven(a) {
  if (a % 2 == 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
};

console.log(printEven(6));
console.log(printEven(5)); //задание 3

var printSquare = function printSquare(a) {
  console.log(a * a);
};

var printSquare2 = function printSquare2(b) {
  return b * b;
};

printSquare(5);
console.log(printSquare2(6)); //задание 4

var helloFriend = function helloFriend() {
  var question = prompt('Сколько вам лет?');

  if (question >= 0 && question <= 12) {
    console.log('Привет, друг!');
  } else if (question >= 13) {
    console.log('Добро пожаловать!');
  } else if (question < 0) {
    console.log('Вы ввели неправильное значение');
  }
};

helloFriend(); //задание 5

var checkNumbers = function checkNumbers(a, b) {
  var c = Number(a);
  var d = Number(b);
  var checkA = isNaN(c);
  var checkB = isNaN(d);

  if (checkA || checkB) {
    console.log('Одно или оба значения не являются числом');
  } else {
    return a * b;
  }
};

checkNumbers(check1 = prompt('Введите первое число'), check2 = prompt('Введите второе число')); //задание 6

var cubeNumber = function cubeNumber(a) {
  var b = Number(a);
  var checkA = isNaN(b);

  if (!checkA) {
    var cube = Math.pow(b, 3);
    console.log("".concat(b, " \u0432 \u043A\u0443\u0431\u0435 \u0440\u0430\u0432\u043D\u044F\u0435\u0442\u0441\u044F ").concat(cube));
  } else {
    console.log('Переданный параметр не является числом');
  }
};

cubeNumber(a = prompt('Введите число')); //задание 7

function getArea() {
  return Math.PI * Math.pow(this.radius, 2);
}

function getPerimeter() {
  return 2 * Math.PI * this.radius;
}

var circle1 = {
  radius: 4,
  area: getArea,
  perimeter: getPerimeter
};
var circle2 = {
  radius: 10,
  area: getArea,
  perimeter: getPerimeter
};
console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());