// a = 3;
// b = 4;
// result = (a + b < 4) ? alert('Мало') : alert('Много');
// alert(result);

// let result;
// a = 3;
// b = 4;
// result = (a + b < 4) ? 'Мало' : 'Много';
// console.log(result);

let accessAllowed;
let age = prompt('What you fucking doing here?');
if (age > 18) {
    accessAllowed = 'Go';
}
else {
    accessAllowed = 'What you need here?';
}
alert(accessAllowed);

let request = prompt('Введите значение');
request = (request > 1) ? '1' : '-1';
alert(request);

let question = prompt('Введите цифру');
if (question > 0) {
    alert('1');
}
else if (question < 0) {
    alert('-1');
} else {
    alert('0');
}


let message = prompt('Какой ваш логин?');
message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ?
    'Нет логина' : '';

let message = prompt('Какой ваш логин?');
let login;
login = (message == 'Сотрудник') ? alert('Привет') : (message == 'Директор') ? alert('Здравствуйте') : (message == '') ?
    alert('Нет логина') : alert('');

let x = 3;
x = -x;
console.log(x);
let y = -4;
y = y;
console.log(y);

console.log(6 % 4);
console.log(5 % 2);
console.log(10 % 3);
let x = 'strana';
let y = 3;
console.log(x + y);
console.log(typeof (x + y));
console.log(typeof (x));
console.log(typeof (y));
console.log(typeof (null));
console.log(typeof (NaN));
console.log(typeof (undefined));