function calculator(str) {
    let num_str_Arr;
    let res;

    if (str.split(' ').length === 3) {
        num_str_Arr = str.split(' ');
    } else {
        throw new Error('not right values')
    }

    num_str_Arr = str.split(' ');
    let firstTest = isNaN(+num_str_Arr[0]) && isNaN(+num_str_Arr[2]);
    let secondTest = isNaN(+num_str_Arr[0]) === isNaN(+num_str_Arr[2])

    if (firstTest) {
        if (isNaN(+num_str_Arr[0])) {
            let convertNumbers = getResForArabic(num_str_Arr[0], num_str_Arr[2]);
            let actResult = getActForNums(+convertNumbers[0], num_str_Arr[1], +convertNumbers[1]);
            const result = getResForArabic(actResult);
            return result;
        } else {
            throw new Error('different data');
        }
    } else {
        if (secondTest) {
            const result = getActForNums(+num_str_Arr[0], num_str_Arr[1], +num_str_Arr[2])
            return result;
        } else {
            throw new Error('different data');
        }
    }


}

function getActForNums(a, operation, b) {
    if ((a > 10 || isNaN(a)) || (b > 10 || isNaN(b)) || (a === 0 || b === 0)) throw new Error('Некорректное значение');
    console.log(a, b);
    switch (operation) {
        case '+': {
            return String(a + b);
        }
        case '-': {
            return String(a - b);
        }
        case '*': {
            return String(a * b);
        }
        case '/': {
            return String(Math.floor(a / b));
        }
        default: throw new Error('Некорректный операнд')
    }
}

function getResForArabic(a, b = '') {
    const arabic = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

    if (b === '') {
        let finishResult = a > 10 ? getDoubleDigitRoman(a) : (a > 0) ? roman[arabic.indexOf(a.toString())] : ''
        return finishResult;
    } else {
        let resultForFirstNum = arabic[roman.indexOf(a)]
        let resultForSecondNum = arabic[roman.indexOf(b)]
        return [resultForFirstNum, resultForSecondNum]
    }
}

function getDoubleDigitRoman(num) {
    if (isNaN(num))
        return NaN;
    let digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
    console.log(roman);
};

console.log(calculator('VIII * II'));
console.log(calculator('1 + 0'));


module.exports = calculator; // Не трогайте эту строчку