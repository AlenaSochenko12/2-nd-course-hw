"use strict";

//задание 1
var arr = [1, 5, 4, 10, 0, 3];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 10) {
    console.log(arr[i]);
    break;
  }

  console.log(arr[i]);
} //задание 2


var array = [1, 5, 4, 10, 0, 3];
console.log(array.indexOf(4)); //задание 3

var arraythird = [1, 3, 5, 10, 20];
arraythird.join(' '); //задание 4

var result = [];

for (var _i = 0; _i < 3; _i++) {
  var someArr = [1, 1, 1];
  result.push(someArr);
}

console.log(result); //задание 5

var arrayfive = [1, 1, 1];

for (var _i2 = 0; _i2 < 3; _i2++) {
  arrayfive.push(2);
}

console.log(arrayfive); //задание 6

var arraysix = [9, 8, 7, 'a', 6, 5];
arraysix.sort();
arraysix.pop();
console.log(arraysix); //задание 7

var arrayseven = [9, 8, 7, 6, 5];
var number = Number(prompt('Введите число'));

if (arrayseven.includes(number)) {
  alert('Угадал');
} else {
  alert('Не угадал');
} //задание 8


var str = 'abcdef';
var arrayeight = str.split('');
arrayeight.reverse();
console.log(arrayeight.join('')); //задание 9

var arrnine = [[1, 2, 3], [4, 5, 6]];
console.log(arrnine.join()); //задание 10

var arrten = [4, 7, 2, 5, 9, 10, 1, 3];

for (var _i3 = 0; _i3 < arrten.length; _i3++) {
  if (_i3 < arrten.length - 1) {
    console.log(arrten[_i3] + arrten[_i3 + 1]);
  } else {
    break;
  }
} //задание 11


var arreleven = [4, 7, 2, 5, 9, 10, 1, 3]; //задание 12
//задание 13