//задание 1

let arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 10) {
        console.log(arr[i]);
        break;
    }
    console.log(arr[i]);
}

//задание 2

let array = [1, 5, 4, 10, 0, 3];
console.log(array.indexOf(4));

//задание 3

let arraythird = [1, 3, 5, 10, 20];
arraythird.join(' ');

//задание 4

const result = []
for (let i = 0; i < 3; i++) {
  const someArr = [1, 1, 1]
  result.push(someArr);
}
console.log(result);

//задание 5

let arrayfive = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    arrayfive.push(2);
}
console.log(arrayfive);

//задание 6

let arraysix = [9, 8, 7, 'a', 6, 5];
arraysix.sort();
arraysix.pop();
console.log(arraysix);

//задание 7

let arrayseven = [9, 8, 7, 6, 5];
let number = Number(prompt('Введите число'));
if (arrayseven.includes(number)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//задание 8

let str = 'abcdef';
let arrayeight = str.split('');
arrayeight.reverse();
console.log(arrayeight.join(''));

//задание 9

let arrnine = [[1, 2, 3,],[4, 5, 6]];
console.log(arrnine.join());

//задание 10

let arrten = [4, 7, 2, 5, 9, 10, 1, 3];
for (let i = 0; i < arrten.length; i++) {
    if (i < arrten.length - 1) {
        console.log(arrten[i] + arrten[i + 1]);
    } else {
        break;
    }
}

//задание 11

let arreleven = [4, 7, 2, 5, 9, 10, 1, 3];
let result = arreleven.map(item => (item**2));
console.log(result);

//задание 12

const getLengthWords = (strings) => {
    for (let i = 0; i < strings.length; i++) {
        console.log(strings[i].length);
    }
}
getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);

//задание 13

function filterPositive(array) {
    const negative = array.filter(el => el < 0);
    console.log(negative);
}
  
  filterPositive([-1, 0, 5, -10, 56]);
  filterPositive([-25, 25, 0, -1000, -2]);