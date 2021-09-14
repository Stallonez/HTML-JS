// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна 
// сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант 
// равенства переменных не рассматриваем.

// let a21 = 3;
// let a22 = 5;
// let b_2 = document.querySelector('#b-2');
// let out_2 = document.querySelector('#out-2')
// b_2.addEventListener('click', func);
// function func() {
//     if (a22 > a21) {
//         out_2.innerHTML = a22;
//     }
//     else {
//         out_2.innerHTML = a21;
//     }

// }



// Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год
// своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в .out-4 
// число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let b4 = document.querySelector('.b4');

let out4 = document.querySelector('.out4');
b4.onclick = f4;
function f4() {
    let i4 = document.querySelector('.i4');
    out4.innerHTML = (+i4.value > 18) ? 1 : 0;
}