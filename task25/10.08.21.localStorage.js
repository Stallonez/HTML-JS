//данные из файла index.js
window.addEventListener('storage', function (e) {
    console.log('change');
    document.querySelector('.out').textContent = localStorage.getItem('b1');
})
localStorage.setItem('data', 5);
console.log(localStorage.getItem('data'));

const a = [3, 4, 5];
localStorage.setItem('a', JSON.stringify(a));
let b = localStorage.getItem('a');
// b = JSON.parse(b);
console.log(b);
console.log(b[0]);
console.log(typeof b);

const c = {
    name: 'Vova',
    surname: 'Didich',
    age: 11
}
localStorage.setItem('c', JSON.stringify(c));
let d = localStorage.getItem('c');
d = JSON.parse(d);
console.log(c);
console.log(c.age);
console.log(typeof c);

const arr = [23, 33, 45, 56, 77];
localStorage.setItem('arr', arr);
let arrOut = localStorage.getItem('arr');
console.log(typeof arrOut);
console.log(arrOut[0]);

let arr2 = [1, 2, 3];
let obj = {
    w: 1,
    q: 21
}
localStorage.setItem('key2', JSON.stringify(obj));
console.log(localStorage.getItem('arr'));
let arr2Out = localStorage.getItem('arr2');
console.log(arr2Out);


// данные из файла index2.js
let count = 0;

document.querySelector('.ls').onclick = () => {
    count++;
    localStorage.setItem('b1', count)
}