let password = 'Qwerty1234';
let check = prompt ("Введите пароль");
if (password == check) {
    console.log ("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

let c = prompt ("Введите любое число");
if (c > 0 && c < 10) {
    console.log ("Верно");
} else {
    console.log("Неверно");
}

let d = prompt ("Введите первое число");
let e = prompt ("Введите второе число");
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

let a = '2';
let b = '3'; 
let f = Number(a);
let v = Number(b);
alert(f + v);

let monthNumber = prompt ("Введите номер месяца");
switch (monthNumber) {
    case '1':
        console.log("зима");
        break;
    case '2':
        console.log("зима");
        break;
    case '3':
        console.log("весна");
        break;
    case '4':
        console.log("весна");
        break;
    case '5':
        console.log("весна");
        break;
    case '6':
        console.log("лето");
        break;
    case '7':
        console.log("лето");
        break;
    case '8':
        console.log("лето");
        break;
    case '9':
        console.log("осень");
        break;
    case '10':
        console.log("осень");
        break;
    case '11':
        console.log("осень");
        break;
    case '12':
        console.log("зима");
        break;
    default: break; 
}