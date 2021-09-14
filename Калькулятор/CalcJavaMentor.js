// function calculator(string) {
//     function calcPlus(a, b) {
//         return a + b;
//     }
//     function calcMinus(a, b) {
//         return a - b;
//     }
//     function calcMultiplication(a, b) {
//         return a * b;
//     }
//     function calcDivision(a, b) {
//         return a / b;
//     }
// }

function multi(a, b) {
    return a * b && b * a;
}
console.log(multi(3, 5));

function division(a, b) {
    return a / b;
}
console.log(division(2, 8));

function calcPlus(a, b) {
    return a + b;
}

console.log(calcPlus(2, 8));

function calcMinus(a, b) {
    return a - b;
}

console.log(calcMinus(2, 8));

const RomantoArabicDigit = (str) => {
    if (str[0] === '-') return 'neg';
    if (str === 'I') {
        return 1;
    } else if (str === 'II') {
        return 2;
    } else if (str === 'III') {
        return 3;
    } else if (str === 'IV') {
        return 4;
    } else if (str === 'V') {
        return 5;
    } else if (str === 'VI') {
        return 6;
    } else if (str === 'VII') {
        return 7;
    } else if (str === 'VIII') {
        return 8;
    } else if (str === 'IX') {
        return 9;
    } else if (str === 'X') {
        return 10;
    } else {
        return 'other'
    }
}

console.log(RomantoArabicDigit('II'));

const arabicToRoman = (num) => {
    if (num[0] === '-') return 'neg';
    if (num === 1) {
        return 'I';
    } else if (num === 2) {
        return 'II';
    } else if (num === 3) {
        return 'III';
    } else if (num === 4) {
        return 'IV';
    } else if (num === 5) {
        return 'V';
    } else if (num === 6) {
        return 'VI';
    } else if (num === 7) {
        return 'VII';
    } else if (num === 8) {
        return 'VIII';
    } else if (num === 9) {
        return 'IX';
    } else if (num === 10) {
        return 'X';
    } else {
        return 'other'
    }
}

function limitNum(str) {
    if (+str > 0 && +str <= 10) {
        return str;
    }
    else {
        return false;
    }
}

console.log(limitNum(-1));

const calc = {
    '+': (a, b) => +parseInt(a + b).toFixed(2),
    '-': (a, b) => +parseInt(a - b).toFixed(2),
    '*': (a, b) => +parseInt(a * b).toFixed(2),
    '/': (a, b) => +a === 0 || +b === 0 ? 0 : +parseInt(a / b)
}




let roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
let arabic = arr;
console.log(arabic);

function Calc(a, b) {
    if (operator == "+") {
        return a + b;
    }
    if (operator == "-") {
        return a - b;
    }
    if (operator == "*") {
        return a * b;
    }
    if (operator == "/") {
        return a / b;
    }
}

module.exports = calculator; // Не трогайте эту строчку