let two = document.querySelector('.two');
two.style.width = '130px';
let atribute = document.querySelector('.atr');
console.log(atribute.getAttribute('id'));

two.style.color = 'white';

console.log(two.style);

two.classList.add('three');
two.classList.add('four');
console.log(two.classList);
two.classList.remove('two');
console.log(two.classList);

let toggle = document.querySelector('.toggle');
toggle.onclick = function () {
    this.classList.toggle('five');
}

console.log(two.getAttribute('data'));

let hip_hop = document.querySelector('.hiphop');
hip_hop.onclick = function () {
    classList.toggle('five');
}
console.log(document.querySelector('link').getAttribute('href'));
console.log(document.querySelector('link').getAttribute('rel'));

toggle.setAttribute('data-num', 6);

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}

let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add('ten');
console.log(a);

document.querySelector('.test').appendChild(a);

// для того, чтобы хранить данные в HTML-объектах, либо их состояние, либо какие-то свойства, не предусмотренные программистами, которые создавали HTML и CSS, был специально разработан такой инструмент, как атрибуты 
// для того, чтобы HTML5 мы создавали корректные атрибуты, требуется, чтобы перед ними была приставка data