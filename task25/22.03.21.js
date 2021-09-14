// Дан массив с числами.С помощью цикла проверьте, что в нем есть элемент со значением 5.
// Как только будет найден
// первый такой элемент - выведите 'Есть' и оборвите цикл.Если такого элемента нет -
//     ничего не выводите.
// let arr = [12, 23, 1, 45, 5, 22, 2];
// let arr2 = [12, 23, 1, 45, 22, 2];

// function f1(arr, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (b == arr[i]) {
//             console.log('Есть');
//             return;
//         }
//     }
//     console.log('no');
// }
// f1(arr, 7);
// f1(arr2, 1);


// let b = document.querySelector('#a1').textContent;
// let c = document.querySelector('#a2').textContent;
// let e = document.querySelector('#a3').textContent;
// let a = [+b, +c, +e];


// var max = Math.max(...a);
// console.log(max);

// switch (max) {
//     case +document.querySelector('#a1').textContent:
//         console.log('Oranges are $0.59 a pound.');
//         break;
// }

// var elems = document.getElementsByTagName('p');
// for (var i = 0; i < elems.length; i++) {
//     elems[i].addEventListener('click', func);
// }

// function func() {
//     var inp = document.querySelector('input');
//     inp.value = Number(inp.value) + 1;
// }

// let x = document.getElementById("mainDiv").childElementCount;
// console.log(x); //5
// let arr = []
// for (let i = 1; i <= x; i++) {
//     arr.push(document.getElementById(`a${i}`).innerHTML);
// }

// let max = Math.max(...arr);
// console.log(max) //14

// function myFunction() {
//     for (let i = 1; i <= x; i++) {
//         max == document.getElementById(`a${i}`).innerHTML ? document.getElementById(`a${i}`).style.color = "blue" : null;
//     }
// }

// При нажатии b - 1 выполняете функцию f1.Функция должна вывести в out - 1 значение 55 из массива a1.
// Возвратите это значение.

// При нажатии b - 5 выполняете функцию f5.Функция должна вывести в out - 5 четные значения из массива a5.
// Для перебора используем цикл.