"use strict";

//задание 1
for (var i = 0; i < 2; i++) {
  console.log('Привет');
} //задание 2


for (var _i = 1; _i <= 5; _i++) {
  console.log(_i);
} //задание 3


for (var _i2 = 7; _i2 <= 22; _i2++) {
  console.log(_i2);
} //задание 4


var obj = {
  'Коля': 200,
  'Вася': 300,
  'Петя': 400
};

for (var summary in obj) {
  console.log("".concat(summary, " \u2014 \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430 ").concat(obj[summary], " \u0434\u043E\u043B\u043B\u0430\u0440\u043E\u0432."));
} //задание 5


var n = 1000;
var num = 0;

do {
  n = n / 2;
  num++;
} while (n >= 50);

console.log(n);
console.log(num); //задание 6

var friday = 4;

while (friday <= 31) {
  console.log("\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u043F\u044F\u0442\u043D\u0438\u0446\u0430, ".concat(friday, "-\u0435 \u0447\u0438\u0441\u043B\u043E. \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442."));
  friday += 7;
}