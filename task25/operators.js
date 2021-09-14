// унарный минус меняет знак числа на противоположный;
let x = 4;
x = -x; // унарный минус;
console.log(x);

// Оператор взятия остатка
let a = 11;
let b = 3;
console.log(a % b); // это остаток от целочисленного деления;

// Возведение в степень **;
let a = 4;
let b = 2;
console.log(a ** b);
// В выражении a ** b оператор возведения в степень умножает a на само себя b раз.

// Сложение строк при помощи бинарного +
let str = 'my' + 'dream';
console.log(str);
// Обратите внимание, если хотя бы один операнд является строкой, то второй будет также 
// преобразован в строку.
let ab = '2';
let bc = 3;
console.log(ab + bc); // type string
console.log(4 + '2'); // type string




console.log("" - 1 + 0);
console.log("" + 1 + 0);
console.log(true + true);
console.log(typeof (true + false));
console.log(true + false);
console.log(6 / '3');
console.log(typeof (6 / '3'));
console.log('2' * '3');
console.log(typeof ('2' * '3'));
console.log(4 + 5 + 'px');
console.log(typeof (4 + 5 + 'px'));
console.log(('$' + 4 + 5));
console.log("4" - 2);
console.log(typeof ("4" - 2));
console.log("4px" - 2);
console.log(typeof ("4px" - 2));
console.log(7 / 0);
console.log(typeof (7 / 0));
console.log("  -9  " + 5);
console.log(typeof ("  -9  " + 5));
console.log("  -9  " - 5);
console.log(typeof ("  -9  " - 5));
console.log(null + 1);
console.log(typeof (null + 1));
console.log(undefined + 1);
console.log(typeof (undefined + 1));
console.log(" \t \n" - 2);
console.log(typeof (" \t \n" - 2));
console.log(a = (1 + 2), 3 + 4);
console.log(a = 1 + 2, 3 + 4);

let e = 3 + 5;
let b = 4 + 4;
console.log(e + b);
console.log(e, b);

let abc = 2;
let x = 1 + (abc *= 2);
console.log(x);

let hour = 2;
let hourSum = hour *= 4;
console.log(hourSum);