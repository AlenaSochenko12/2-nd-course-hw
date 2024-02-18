//задание 1

let str = 'js';
console.log(str.toUpperCase());

//задание 2

let results = [];
const searchStart = (array, string) => {
    array.forEach((arr) => {
        if (arr.toLowerCase().includes(string.toLowerCase())) {
            results.push(arr);
        }
    });
    console.log(results);
    results.length = 0;
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

//задание 3

let a = 32.58884;
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));

//задание 4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//задание 5

const random = (minValue, maxValue) => {
    console.log(Math.floor(Math.random() * (maxValue - minValue + 1) + minValue));
}

random(0, 10);

//задание 6

let result = [];

const getRandomArrNumbers = (b) => {
    let c = Math.floor(b / 2);
    for (let i = 0; i < c; i++) {
        result.push(Math.floor(Math.random() * (b + 1)));
    }
    console.log(result);
    result.length = 0;
}
getRandomArrNumbers(7);
getRandomArrNumbers(12);

//задание 7

const randoms = (minValue, maxValue) => {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    console.log(Math.floor(Math.random() * (maxValue - minValue + 1) + minValue));
}

randoms(a = prompt('Введите первое число'), b = prompt('Введите второе число'));

//задание 8

let currentDate = new Date();
console.log(currentDate);

//задание 9

let dateNow = new Date();
dateNow.setDate(dateNow.getDate() + 73);
console.log(dateNow);

//задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let hour = myDate.getHours();
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
let time = "Время: " + hour + ":" + minute + ":" + second;

console.log(fullDate);
console.log(time);