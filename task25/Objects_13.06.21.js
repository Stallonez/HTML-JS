const univer = {
    "история": 4,
    "география": 5,
    "идеономика": 3
}
univer.биохимия = 5;
univer['геофизика'] = 4;
univer['литература'] = 2;
univer.латынь = 1;
console.log(univer);

const univerResult = [2, 3, 4];
univerResult[0] = 5;
console.log(univerResult);



const normalWork = ['токарь', 'инженер', 'геодезист'];
const work = [...normalWork, 'печник', 'электрик'];
console.log(work);

const worker = {
    "name": "Bob",
    "job": "lifter"
}

const macDack = {
    ...worker,
    "position": "clean manager"
}

console.log(macDack);

// rest
const num = (...args) => args;
console.log(num(1, 2));
console.log(num(1, 2, 5, 7, 9));

// деструктуризация
const arr = [33, 44, 55, 66, 77];
const [d1, , , , d2] = arr;
console.log(d1, d2);

const a = {
    "a": 5,
    "b": 'Hello',
    "z2": 1999,
    "y43": 'Hi',
    'villa de': 3040
}
// ключами могут быть выражения, строки, строки с пробелами и с спецсимволами, значения точно также как и в обычном массиве 
// могут быть: объект, другой массив, строка, число, функция
// ключ само по себе повторяться не может, поскольку при повторении ключа вы перезатрете предыдущее значение
console.log(a);
console.log(a.z2);
// если название ключа у вас лежит в переменной, то к ней можно обратиться через []
let k = 'y43';
// если я напишу 
// console.log(a.k); // то в массиве a будет искаться ключ k;
console.log(a[k]);
// присвоение ключа к массиву
a.yyyy = 555;
// изменение значения массива
a.b = 345;
console.log(a);

// document.querySelector('.out').innerHTML = a;
let out = '';
for (let key in a) {
    // out += key;
    // out += a[key] + ' ';
    out += key + ':' + a[key] + '<br>';
}
document.querySelector('.out').innerHTML = out;
// в обычном массиве индексы должны быть числами, а в ассоциативном индексами являются ключи

let a = {
    'name': 'Valya',
};
let b = new Obj('Valya2');
function Obj(name) {
    this.name = name;
}

class People {
    constructor(name) {
        this.name = name
    }
}

let c = new People('Valya3');

console.log(a, b, c);