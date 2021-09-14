// Массивы часть 2
// что такое length это индекс последнего элемента плюс 1
// let arr = [1, 2, 3, 4];
// console.log(arr);
// let t = arr[0];
// arr[0] = arr[3];
// arr[3] = t;
// console.log(arr);

// let copy = arr[0];
// arr[0] = arr[arr.length - 1];
// arr[arr.length - 1] = t;
// console.log(arr);
// console.log(arr[888]);


function f13() {
    for (let i = 0; i < ar13.length; i++) {
        let newElem = i + '-' + ar13[i];
        copy.push(newElem);
        // ar13 = ar13[0] + ' ' + ar13[1] + ' ' + ar13[2] + ' ' + 
    }
    out13.innerHTML = copy;
}
let out13 = document.querySelector('.out-13');
document.querySelector('.b-13').onclick = f13;

/// task 16
let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

function f16() {
    // очищаем массивы - если функция будет запускаться еще раз
    ar16_odd = [];
    ar16_even = [];

    // перебираем исходный массив
    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 === 0) {
            // если число четное то добавляем в even
            ar16_even[ar16_even.length] = ar16[i];
        }
        else {
            ar16_odd[ar16_odd.length] = ar16[i];
        }
    }

    // все массивы заполнены. Их нужно вывести.
    // выводим первый
    let out = '';
    for (let i = 0; i < ar16_even.length; i++) {
        out += ar16_even[i] + ' ';
    }
    document.querySelector('.out-16-even').innerHTML = out;
    // выводим второй
    out = '';
    for (let i = 0; i < ar16_odd.length; i++) {
        out += ar16_odd[i] + ' ';
    }
    document.querySelector('.out-16-odd').innerHTML = out;
}

document.querySelector('.b-16').onclick = f16;

function f16() {
    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 == 0) {
            ar16_even = ar16[i] + ' ';
        }
        if (ar16[i] % 2 == 1) {
            ar16_odd = ar16[i] + ' ';
        }
    }
    out16_odd.innerHTML = ar16_odd;
    out16_even.innerHTML = ar16_even;
}
let out16_odd = document.querySelector('.out-16-odd');
let out16_even = document.querySelector('.out-16-even');
document.querySelector('.b-16').onclick = f16;

let arr2 = [2, 4, 6, 8];
console.log(arr2);
let container = arr2[0];
arr2[0] = arr2[2];
arr2[2] = container;
console.log(arr2);

let b = [2, 7, 34, 21, 4, 53, 5, 9];
let max = b[0];
for (let i = 0; i < b.length; i++) {
    if (b[i] > max) {
        max = b[i];
    }
}
console.log('max: ' + max);