"use strict";

var printSeason = function printSeason(a) {
  if (a == 1 || a == 2 || a == 12) {
    console.log('Зима');
  } else if (a >= 3 && a <= 5) {
    console.log('Весна');
  } else if (a >= 6 && a <= 8) {
    console.log('Лето');
  } else if (a >= 9 && a <= 11) {
    console.log('Осень');
  } else if (a < 1 || a > 12) {
    console.log('Введенное число не может быть номером месяца');
  }
};