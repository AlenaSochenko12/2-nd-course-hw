let a = 10;
alert (a);

a = 20;
alert (a);

let year = 2007;
alert (year);

let creator = 'Brendan Eich';
alert (creator);

let c = 10;
let b = 2;
alert (c + b);
alert (c - b);
alert (c * b);
alert (c / b);

let result = 2**5;
alert (result);

let d = 9;
let e = 2;
alert (d % e);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt ("Сколько вам лет?");
alert (age);

let user = {
    name: 'Alex',
    age: 18,
    isAdmin: true
}
user['city of residence'] = 20;
user.age = 20;
delete user['city of residence'];
let info = prompt ("Какую информацию хотите узнать о пользователе?");
alert (user[info]);

let username = prompt ("Ваше имя: ");
alert (`Привет, ${username}!`);