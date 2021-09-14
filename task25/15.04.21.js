// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

// let str = ' a ar@ ya.ru';
// for (let elem of str) {
//     console.log(elem);
// }

// let arr = [];

// for (let i = 0; i < str.length; i++) {
//     if (str[i] == ' ') {
//         null;
//         // alert('убери пробел')
//     }
//     else {
//         arr.push(str[i]);
//     }
//     // console.log(str[i]);
// }
// console.log(arr.join(''));
// // console.log(str.length);
// // let str2 = str.split('#');
// // console.log(str2);



// Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через 
// substr, substring, slice).

// Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем 
// первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем 
// содержимое переменной str.

// let str = 'я учу javascript! я учу javascript!я учу javascript!я учу javascript!я учу javascript!';
// let str2 = 'я учу';
// function strOut(str, n) {
//     // let userData = str.length;
//     let result = str.slice(0, n + 1) + '...';
//     console.log(result);
//     return result;

// }

// let str = 'я учу javascript! я учу javascript!я учу javascript!я учу javascript!я учу javascript!';
// let str2 = 'я учу';
// function strOut(n) {
//     // let userData = str.length;
//     let result = this.slice(0, n + 1) + '...';
//     console.log(result);
//     return result;
// }
// String.prototype.nazvanie = strOut;
// let abc = 'sdffffffffffffffffffffffffffffffffff';
// abc.nazvanie(5);
// console.log(abc);
// let bca = abc.nazvanie(5);
// console.log(bca);

// strOut(str, 7) // она должна вернуть строку Я учу...

// let arr = ["t", "e", "s", "t"];

// // alert(arr.slice(1, 2)); // e,s (копирует с 1 до 3)

// // alert(arr.slice(-2)); // s,t (копирует с -2 до конца)
// let arrUnreturn = alert(arr.slice(1, 2));
// let arrReturn2 = arr.slice(1, 2);
// console.log(arrReturn2);

// function retUrn() {
//     return 'stroka';
// }
// let a = retUrn;



// function unretUrn() {
//     alert('stroka');
// }
// let b = unretUrn;
// console.log(a(), b());

// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src. 
// let img1 = document.querySelector('#a-1');
// let src = 'https://icon2.cleanpng.com/20180704/jpi/kisspng-agar-io-cell-imgur-theni-5b3d7ac575d1d8.8406782815307557814826.jpg';
// let src2 = img1.src;
// img1.addEventListener('click', aleRT);
// // let img2 = document.querySelector('#2').onclick = aleRT;
// // let img3 = document.querySelector('#3').onclick = aleRT;
// function aleRT() {
//     // alert(img1.src);
//     if (img1.src == src2) {
//         img1.src = src;
//     }
//     else {
//         img1.src = src2;
//     }

// }

// let hero = {
//     name: 'Ivor',
//     health: 10,
//     power: 1,
//     level: 1,
//     medicine: 0,
//     armor: 0,
// }
// let store = {
//     armor: 1,
//     gun: 1,
//     medicine: 0,
// }
// let creep_level_1 = {
//     health: 2,
//     power: 1,
// }

// let healthElem = document.querySelector('#health');
// let powerElem = document.querySelector('#power');
// let levelElem = document.querySelector('#level');
// let btnElem = document.querySelector('#shoot');


// healthElem.innerHTML += hero.health;
// powerElem.innerHTML += hero.power;
// levelElem.innerHTML += hero.level;
// btnElem.addEventListener('click', shoot);

// function shoot() {
//     hero.health = hero.health - creep_level_1.power;

//     creep_level_1.health = creep_level_1.health - hero.power;
//     console.log(hero, creep_level_1);
//     if (creep_level_1.health == 0) {
//         hero.level = hero.level + 1;
//     }

// }

// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

// let arr = [];
// let a = 'x';
// arr.push(a);
// console.log(arr);
// arr.push(a.repeat(2));
// arr.push(a.repeat(3));
// console.log(arr);

// Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает
//  значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) 
//  сделает массив ['x', 'x', 'x', 'x', 'x']. 

// function arrayFill(fill, amount) {
//     let arr = [];
//     // arr = push(fill);
//     while (amount != 0) {
//         amount--;
//         arr.push(fill);
//     }
//     console.log(arr);
// }
// arrayFill('x', 7)

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10
// let arr = [1, 3, 4, 5, 6, 8, 9];
// let sum = 0;
// let count = 0;

// for (let elem of arr) {
//     sum += elem; // sum = sum + elem; // ошибка sum = elem++
//     count++;
//     if (sum > 10) {
//         break;
//     }

// }
// console.log(sum);
// console.log(count);

// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// let arr = [1, 2, 3, 5, 6, 7];
// let arr2 = [];
// arr.forEach((elem, index) => {
//     arr2.push(arr.pop());
//     console.log(index);
// });
// console.log(arr2);


let arr = [1, 2, 3, 5, 6, 7];
let arr2 = [];

for (let i = arr.length; i == 0; i--) {
    arr2.push(arr[i]);
}
console.log(arr2);

// while (arr.length) {
//     arr2.push(arr.pop());
// }
// console.log(arr2);













