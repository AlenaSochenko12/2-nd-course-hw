const printSeason = (a) => {
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
    } else {
        console.log('Формат ввода неверный');
    }
}

const printWords = () => {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    
    alert(list.map(x => " " + x));

    let question = prompt('Чему равнялся первый элемент массива?');
    let question2 = prompt('Чему равнялся последний элемент массива?');
    if (question === list[0] && question2 === list[6]) {
        alert('Поздравляю, вы угадали оба элемента!');
    } else if (question === list[0] || question2 === list[6]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно!');
    }
}