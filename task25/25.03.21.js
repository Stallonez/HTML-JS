// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше 
// нуля и меньше 10-ти.

let arr = [1, 12, 8, 23, 7, -5, -3, 100, 120, -150, true];

for (let i of arr) {
    if (i > 0 && !(typeof (i) == "boolean") && i < 10) {
        console.log(i);
    }
    // console.log(i);
}

let arr = [1, 12, 8, 23, 7, -5, -3, 100, 120, -150, true];

for (let i of arr) {
    if (i > 0 && !(typeof (i) == "boolean") && i < 10) {
        console.log(i);
    }
    // console.log(i);
}

//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
let str = 'талгат';
let letterByIndex1 = str[0]; //т
let letterByIndex2 = str.charAt(3); //г

//1
let newString = str.charAt(0).toUpperCase() + str.slice(1);

//2
let str2 = str[0].toUpperCase() + str.substr(1)

//3
let str3 = str.charAt(0).toUpperCase() + str.slice(1, 2) + str[2].toUpperCase() + str.slice(3)
console.log(str3)

//1
// String.prototype.firstLetterToUpperCase = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
let str = 'талгат';
let newString = str.charAt(0).toUpperCase() + str.slice(1);

console.log(newString);


//1
// String.prototype.firstLetterToUpperCase = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
let str = 'талгат';
let letterByIndex1 = str[0]; //т
let letterByIndex2 = str.charAt(3); //г

console.log(letterByIndex1, letterByIndex2)
let newString = str.charAt(0).toUpperCase() + str.slice(1);
console.log(newString);

//     return this.charAt(0).toUpperCase() + this.slice(1);
// }
let str = 'талгат';
let letterByIndex1 = str[0]; //т
let letterByIndex2 = str.charAt(3); //г

//1
let newString = str.charAt(0).toUpperCase() + str.slice(1);

//2
let str2 = str[0].toUpperCase() + str.substr(1)

//3
let str3 = str.charAt(0).toUpperCase() + str.slice(1, 2) + str[2].toUpperCase() + str.slice(3)
console.log(str3)

// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду 
// месяца попадает это число (в первую, вторую или третью).

function checkDate(dayNum) {
    if (dayNum >= 1 && dayNum <= 10) {
        console.log('Записываем в первую декаду');
    }
    else if (dayNum >= 11 && dayNum <= 20) {
        console.log('Записываем во вторую декаду');
    }
    else if (dayNum >= 21 && dayNum <= 31) {
        console.log('Записываем в третью декаду');
    }
    else {
        console.log('Такой даты не существует');
    }
}
// checkDate(12);
console.log(checkDate(8), checkDate(15), checkDate(30), checkDate(105));

function checkDate() {
    let day = +prompt('Введите дату');

    if (day >= 1 && day <= 10) {
        alert('Записываем в первую декаду');
    }
    else if (day >= 11 && day <= 20) {
        alert('Записываем во вторую декаду');
    }
    else if (day >= 21 && day <= 31) {
        alert('Записываем в третью декаду');
    }
    else {
        alert('Такой даты не существует');
    }
}

function checkDate() {
    let day = +prompt('Введите дату');
    let resultForAlert = (day >= 1 && day <= 10) ? 'Записываем в первую декаду' :
        (day >= 11 && day <= 20) ? 'Записываем во вторую декаду' :
            (day >= 21 && day <= 31) ? 'Записываем в третью декаду' : 'Такой даты не существует';
    alert(resultForAlert);
}

// вот второй вариант последней задачи





