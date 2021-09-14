// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение 55 из массива 
// a1. Возвратите это значение.

let arr = [1, 2, 3, 4, 55, 6, 7];
let out = document.querySelector('.out-1');
let b1 = document.querySelector('#btn');
b1.onclick = f1;
function f1() {
    let index = 0;

    index = arr.indexOf(55);
    out.innerHTML = arr[index];
}


const B1 = document.querySelector("#btn");
const out1 = document.querySelector(".out-1");

let a1 = [1, 2, 4, 55, 7];
B1.addEventListener("click", f1);
function f1() {
    let inp = +document.querySelector('#inp').value;
    const index = a1.indexOf(inp);
    if (index !== -1) {
        out1.innerHTML = a1[index] + ' Есть такая цифра';

    }
    else {
        out1.innerHTML = 'Такого элемента не существует'
    }
}

/*   -----------------------------------         Следующая задача         ---------------------------             */
let arr = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "ReactNative", isDone: false },
    { id: 5, title: "Redux", isDone: false }
];

// let out = document.querySelector('.out-1');
// out.innerHTML = arr[1];

let btn = document.querySelector('#btn');
btn.onclick = f1;
function f1() {
    let inp = +document.querySelector('#inp').value;


    for (let i = 0; i < arr.length; i++) {

        if (inp == arr[i].id) {

            arr.splice(i, 1);
        }
    }
    console.log(arr);
}



let arr = [1, 2, 3, 4, 5];
for (let item of arr) {
    console.log(item);
}

/*   -----------------------------------         Следующая задача         ---------------------------             */
for (i of arr2) {
    console.log(i);
}

console.log(arr2[4]);
arr2.pop();
console.log(arr2);
console.log(arr2.push('Клубника', 'Морковь', 'Малина', 'Смородина'));
console.log(arr2);
arr2.splice(2, 2);
console.log(arr2);
arr2.splice()
arr2.splice(4, 2);
console.log(arr2);
arr2.push('Черника', 'Брусника', 'Крыжовник');
console.log(arr2);
// console.log(arr2.splice(4, 4));
arr2.splice(4, 4);
console.log(arr2);
arr2.reverse();
console.log(arr2);
// arr2.join('- Vegetables - ');
arr2.splice(2, 2, 'Финики', 'Ранетки');
console.log(arr2);
let arr2 = ['Груша', 'Абрикос', 'Слива', 'Вишня', 'Яблоко'];
arr2.push('Клубника', 'Морковь', 'Малина', 'Смородина');
console.log(arr2);
console.log(arr2.push('Клубника', 'Морковь', 'Малина', 'Смородина'));
console.log(arr2);

/*   -----------------------------------         Следующая задача         ---------------------------             */

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
    let toNum = Number(elem);
    sum = sum + toNum;

}
console.log(sum);

/*   -----------------------------------         Следующая задача         ---------------------------             */

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;
for (let elem of arr) {
    let toNum = +(elem);
    sum = sum + toNum;

}
console.log(sum);