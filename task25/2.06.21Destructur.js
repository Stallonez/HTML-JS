let arr = ['vasya', x => x];
let arr = ['vasya', () => { }];
let [name, findArr] = arr;

const comment = [];

document.querySelector('.btn').onclick = () => {
    let value = document.querySelector('.inp').value;
    comment.push(value);
}

function draw() {
    let out = '';
    for (let i = 0; i < comment.length; i++) {
        out += `<li>${comment[i]}</li>`;
    }
    document.querySelector('ul').innerHTML = out;
}


// let $a = 1;
// let $b = 3;
// let $a = 2;



// Приведенный выше код можно упростить, написав let один раз и после него перечислив нужные переменные с их значениями, вот так:
let $a = 4; $b = 34; $c = 667;
console.log($c);


console.log($a);
console.log($b);

// Можно вначале объявить все переменные, а потом присваивать им значения:

// let $a, $b, $c; // Объявляем все три переменные

// Присваиваем переменным значения

// $a = 23;
// $b = 21;
// $c = 455;


let $r;
let $rd;
let $rs;

$r = [];
$rd = {};
$rs = [{}];
console.log($r);
console.log($rd);
console.log($rs);

let $d, $s, $p;
$d = [[[[]]]];
$s = x => x;
$p = () => { };

console.log($d);
console.log($s);
console.log($p);