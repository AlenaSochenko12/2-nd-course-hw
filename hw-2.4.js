//задание 1
for (let i=0;i<2;i++) {
    console.log('Привет');
}
//задание 2
for (let i=1;i<=5;i++) {
    console.log(i);
}
//задание 3
for (let i=7;i<=22;i++) {
    console.log(i);
}
//задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}
for (let summary in obj) {
    console.log (`${summary} — зарплата ${obj[summary]} долларов.`)
}
//задание 5
let n = 1000;
let num = 0;
do {
    n = n/2;
    num++;
} while (n >= 50)
console.log(n);
console.log(num);
//задание 6
let friday = 4;
while (friday <= 31) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7;
}