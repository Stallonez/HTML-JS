// function myAlert(a) { 
//     let b = `<p class="orange">${a}</p>`
//     document.querySelector('.test').innerHTML = b;
// }
// myAlert('Hi');

function myAlert(a, c, d) {
    let b = `<p class="${c}">${a}</p>`
    document.querySelector(d).innerHTML = b;
}
myAlert('Hi', 'red', '.test');
myAlert('Hello', 'orange', '.test2');

// что такое Class? Class - это по сути шаблон, это возможность создавать какой-то набор штампов, с которыми я могу работать
class Alert {
    constructor(a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;

    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`
    }
}

/*Во первых мне необходимо запустить класс конструктор, но что такое constructor? constructor - это функция, которая запускается
при создании объекта на основе Класса, у меня уже есть constructor, И Я буду расширять возможности класса Alert2*/
class Alert2 extends Alert {
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon; // new property
    }
    showIconAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><span class="material-icons">${this.icon}</span>${this.message}</p>`
    }
    myAlert() {
        alert(this.message);
    }
}

let m = new Alert('My message', 'red', '.test');
console.log(m);
// методы внутри конструктора это по сути функции, которые туда запихнули; они могут манипулировать данными внутри класса
m.showAlert();

/* super это по сути конструктор в конструкторе класса который Наследуется от Предыдущего класса. 
super это Суперконструктор наследуемого класса, но он пишется в наследующем классе, чтобы там прописать те ключи
объекта, которые мы хотим передать*/

let m2 = new Alert2('My message', 'red', '.test', 'donut_small');
m2.showIconAlert();
m2.myAlert(this.message);