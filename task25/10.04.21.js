// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

// let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
// let out18 = document.querySelector('.out-18');
// function f18() {
//     for (let elem of ar18) {
//         Math.max(elem);
//         out18.innerHTML = elem;
//     }
// }
// // fun.apply(ar18);
// document.querySelector('.b-18').onclick = f18;



let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
let out18 = document.querySelector('.out-18');
function f18() {
    let max = Math.max.apply(null, ar18);
    out18.innerHTML = max;
}
// fun.apply(ar18);
document.querySelector('.b-18').onclick = f18;

let arr = [1, 5, 10, 111, 34, 100];
let max = Math.max.apply(null, arr);

console.log(max);

let arr2 = [1, 2, 4, 55, 675, 12, 11];
console.log(Math.max.apply(null, arr2));

let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
let max = Math.max(...ar18);
console.log(max);


let str = '5.2';
let num = parseFloat(str);

console.log(num); // выведет 5.2

let getToStr = '10.4';
let numFloat = parseFloat(getToStr);
console.log(numFloat);
