function calculator(string) {
    function convertfromRoman(num) {
        let output = '';
        let numMap = [
            { limit: 'X', value: 10 },
            { limit: 'IX', value: 9 },
            { limit: 'VIII', value: 8 },
            { limit: 'VII', value: 7 },
            { limit: 'VI', value: 6 },
            { limit: 'V', value: 5 },
            { limit: 'IV', value: 4 },
            { limit: 'III', value: 3 },
            { limit: 'II', value: 2 },
            { limit: 'I', value: 1 },
        ];
        for (let i = 0; i < numMap.length; i++) {
            let value = numMap[i].value;
            let limit = numMap[i].limit;
            while (num >= limit) {
                output += value;
                num -= limit;
            }
        }
        return output;
    }
    console.log(convertfromRoman('III'));

    function convertToRoman(num) {
        let output = '';
        let numMap = [
            { limit: 10, value: 'X' },
            { limit: 9, value: 'IX' },
            { limit: 8, value: 'VIII' },
            { limit: 7, value: 'VII' },
            { limit: 6, value: 'VI' },
            { limit: 5, value: 'V' },
            { limit: 4, value: 'IV' },
            { limit: 3, value: 'III' },
            { limit: 2, value: 'II' },
            { limit: 1, value: 'I' },
        ];
        for (let i = 0; i < numMap.length; i++) {
            let value = numMap[i].value;
            let limit = numMap[i].limit;
            while (num >= limit) {
                output += value;
                num -= limit;
            }
        }
        return output;
    }

    console.log(convertToRoman(4));

    let a = parseInt(arr[0]) || convertToRoman(arr[0]);
    let b = parseInt(arr[2]) || convertToRoman(arr[2]);
    if (a < 1 || a > 10 || b < 1 || b > 10) {
        throw Error
    }

    let operator = arr[1];
    let result = "";

    if (operator == "+") {
        result = a + b;
    } else if (operator == "-") {
        result = a - b;
    } else if (operator == "*") {
        result = a * b;
    } else if (operator == "/") {
        if (a % b != 0) {
            let fix = a / b;
            fix = Math.floor(fix).toFixed(0);
            result = fix;
        } else if (b == 1) {
            result = a;
        } else {
            result = a / b;
        }
    }

    else {
        throw Error;
    }
    result = result.toString();
    if (a == convertToRoman(arr[0]) && b == convertToRoman(arr[2])) {
        return convertToRoman(result)
    } else if (a == convertToRoman(arr[0]) && b != convertToRoman(arr[2])) {
        throw Error;
    } else {
        return result;
    }// код пишите внутри этой функции
}

console.log(calculator('1+1'));

module.exports = calculator; // Не трогайте эту строчку

// Успешно решенное задание должно пройти все тесты на repl.it (описание работы с платформой см. ниже)
// Калькулятор умеет выполнять операции сложения, вычитания, умножения и деления с двумя числами: a + b, a - b, a * b, a / b. Данные передаются в виде одной строки!
// Калькулятор умеет работать как с арабскими (1,2,3,4,5…), так и с римскими (I,II,III,IV,V…) числами.
// Калькулятор должен принимать на вход числа от 1 до 10 включительно, не более. На выходе числа не ограничиваются по величине и могут быть любыми.
// Калькулятор умеет работать только с целыми числами.
// Результат на выходе всегда строка с целым числом. В делении учитываем только целую часть.
// Калькулятор умеет работать только с арабскими или римскими цифрами одновременно, при вводе пользователем строки вроде 3 + II калькулятор должен выбросить исключение и прекратить свою работу.
// Т.к. в римской системе нет нуля и отрицательных чисел - возвращаем пустую строку.
// При вводе пользователем неподходящих чисел приложение выбрасывает исключение и завершает свою работу.
// При вводе пользователем строки не соответствующей одной из вышеописанных арифметических операций приложение выбрасывает исключение и завершает свою работу.
// Пример работы программы
// calculate('1 + 2'); // '3'
// calculate('VI / III'); // 'II'
// calculate('VII / III'); // 'II'
// calculate('I + II'); // 'III'
// calculate('I - II'); // ''
// calculate('I + 1'); // throws Error
// calculate('I'); // throws Error
// calculate('1 + 1 + 1'); // throws Error
















