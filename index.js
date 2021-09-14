// класс - это обертка над прототипным наследованием
let a = {
    a1: 'object a'
}
let b = {
    b1: 'object b'
}

b.__proto__ = a;

console.log(a);
console.log(b);