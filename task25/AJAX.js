let xhttp = new XMLHttpRequest();
let a = 0;
console.log(xhttp);
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText);
    }
}

/* open позволяет мне начать отправку запроса. Этот метод включает три параметра: способ запуска и куда отправлять запрос, 
третий булеан - необязательный. В общем метод open позволяет запустить сам запрос, третий параметр в нем необязательный, он определяет, 
как выполняется запрос синхронно или асинхронно. Запускать синхронно запрос очень не рекомендуется*/
xhttp.open("GET", "https://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1", true);

xhttp.send();

function myFunction(data) {
    a = data;
    console.log(data);
}

let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction2(this.responseText);
    }
}

xhttp2.open("POST", "https://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1", true);
/* Для отправки методом ПОСТ, мы должны выполнить конфигурацию заголовков. Конфигурация заголовков запроса показывает, как отправлять
данные, какие данные, как их обрабатывать, поэтому я пишу то, что не писал для ГЕТ запросов */
xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// в методе send я буду указывать какие параметры я буду передавать 
xhttp2.send('auth=DdC33D7d2C2a7&action=1');

function myFunction2(data) {
    console.log('POST');
    a = data;
    console.log(data);
}