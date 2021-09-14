// document.querySelector('.b-6').onclick = f6;

// document.querySelector('.one').onclick = (e) => {
//     console.log(e);
//     console.log('click');
// }
// document.querySelector('.two').ondblclick = (e) => {
//     console.log(e);
//     console.log('click');
// }
// document.querySelector('.two').oncontextmenu = (e) => {
//     console.log(e);
//     console.log('right button');
//     return false;
// }

// let w = 75;
// document.querySelector('.three').onmousemove = (e) => {
//     document.querySelector('.three').style.width = w + 'px';
//     w++;
// }

// document.querySelector('.three').onmouseenter = (e) => {
//     document.querySelector('.three').style.background = 'red';
//     console.log(1);
// }

// document.querySelector('.three').onmouseleave = (e) => {
//     document.querySelector('.three').style.background = 'green';
//     console.log(2);
// }
// document.querySelector('.three').onmousedown = (e) => {
//     document.querySelector('.three').style.background = 'orange';
//     console.log(3);
// }
// document.querySelector('.three').onmouseup = (e) => {
//     document.querySelector('.three').style.background = 'blue';
//     console.log(4);
// }

// Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран 
// содержимое блока (только текст). Вывод осуществляется в out-1.

// document.querySelector('.div-1').onclick = () => {
//     let out1 = document.querySelector('.out-1');
//     out1.innerHTML = document.querySelector('.div-1').innerHTML;
// }

/*
1.Дан блок.div-5.active. Добавьте на него событие двойной клик, по
которому удаляется класс active если он есть и
добавляется если такого класса нет. */

/*в СSS запись
.div-5.active
означает любой элемент которому присвоены два класса. Например
 <div class="div-5 active"></div>*/

// let div5 = document.querySelector('.div-5');
// console.log(div5);
// div5.ondblclick = t5;
// function t5() {
//     console.log(div5.classList);
//     if (div5.classList.contains("active")) {
//         div5.classList.remove("active");
//     }
//     else {
//         div5.classList.add("active");
//     }
// }