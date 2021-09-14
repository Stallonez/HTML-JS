document.querySelector('.i-1').onkeypress = function (event) {
    console.log('keypress');
    console.log('charCode: ' + event.charCode);
    console.log('code: ' + event.code); // code остается прежним в отличие от key, вне зависимости от переключения языка, code покаывает всегда верхний регистр
    console.log('keyCode: ' + event.keyCode);
    console.log('key: ' + event.key); // key изменяется от переключения раскладки языка и показывает даже регистр символа
}

document.querySelector('.i-1').onkeydown = function (event) {
    console.log('keydown');
    console.log('charCode: ' + event.charCode);
    console.log('code: ' + event.code); // code остается прежним в отличие от key, вне зависимости от переключения языка, code покаывает всегда верхний регистр
    console.log('keyCode: ' + event.keyCode);
    console.log('key: ' + event.key); // key изменяется от переключения раскладки языка и показывает даже регистр символа
    if (event.key == 'CapsLock') {
        document.querySelector('.ch-1').checked = true;
    }
    else {
        document.querySelector('.ch-1').checked = false;
    }
}


document.querySelector('.i-1').onkeyup = function (event) {
    console.log('keyup');
    console.log('charCode: ' + event.charCode);
    console.log('code: ' + event.code); // code остается прежним в отличие от key, вне зависимости от переключения языка, code покаывает всегда верхний регистр
    console.log('keyCode: ' + event.keyCode);
    console.log('key: ' + event.key); // key изменяется от переключения раскладки языка и показывает даже регистр символа
}

document.querySelector('.i-2').onkeypress = function (event) {
    console.log('keypress');
    console.log('charCode: ' + event.charCode);
    console.log('code: ' + event.code); // code остается прежним в отличие от key, вне зависимости от переключения языка, code покаывает всегда верхний регистр
    console.log('keyCode: ' + event.keyCode);
    console.log('key: ' + event.key); // key изменяется от переключения раскладки языка и показывает даже регистр символа
    const a = {
        q: 'w',
        w: 'e',
    }
    document.querySelector('.i-2').value += a[event.key];
    return false;
}