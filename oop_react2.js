class Leader {
    constructor(h1, h2) {
        this.h1 = h1;
        this.h2 = h2;
    }
    render(x) {
        let fill_up = '';
        fill_up += `<h1>${this.h1}</h1>`;
        fill_up += `<h2>${this.h2}</h2>`;
        document.getElementById(x).innerHTML = fill_up;
    }
    static hello(a) { // Статические элементы можно вызвать, не создавая экземпляры, не создавая объектов
        console.log('work static method ' + a);
    }
}

const header = new Leader('Hello Beatiful Nature', 'Some Best Views');
header.render('header-in');
header.hero = 'Go go go'
console.log(header);

class Header2 extends Leader {
    constructor(h1, h2, hero) {
        super(h1, h2)
        this._hero = hero;
    }
    get hero() {
        return this._hero;
    }
    set hero(c) {
        this._hero = c;
    }
}

const header2 = new Header2('Самые живописные уголки мира', 'Чудесные каньоны и водопады', 'Все направления');

// header2._hero = 3.1415;
header2.hero = 'Google';
console.log(header2.hero);

header2.render('header-in');

console.log(header2);

Leader.hello('hi'); // Сейчас же я обращаюсь к статическому свойству через объект






































// function f(){console.log('ping..')}

// setInterval(f, 500)

// function setNewAlarmTime() {
//     let input = document.querySelector("#alarmtime")


// let btn = document.querySelector("#set-alarm-btn")
// btn.onclick = 

// class Header {
//     constructor(img, h1, h2) {
//         this.src = img;
//         this.h1 = h1;
//         this.h2 = h2;
//     }
//     render(x) {
//         // x - куда отрисовать заголовок
//         // console.log(this.h1);
//         let out = '';
//         out += `<img src="${this.src}" alt="" class="logo">`;
//         out += `<h1>${this.h1}</h1>`;
//         out += `<h2>${this.h2}</h2>`;
//         document.getElementById(x).innerHTML = out;

//     }
// }

// const img = 'http://builtwithreact.io/img/share-logo.jpg';

// let header = new Header(img, 'Hello', 'world');
// // console.log(header);
// header.render('header');

// // конструктор - это функция, которая запустится, когда я из класса буду создавать объект
// // класс -> объект
// // метод -> рисует // render (что рисовать, куда рисовать)
// class Footer {
//     constructor(h3, h4, h5) {
//         this.h3 = h3;
//         this.h4 = h4;
//         this.h5 = h5;
//     }
//     render(abc) {
//         let out = '';
//         out = out + `<h3>${this.h3}</h3>`;
//         out = out + `<h4>${this.h4}</h4>`;
//         out = out + `<h5>${this.h5}</h5>`;
//         document.getElementById(abc).innerHTML = out;
//     }
// }

// let footer = new Footer('Заголовок3', 'Заголовок4', 'Заголовок5');
// console.log(footer);
// footer.render('footer');

