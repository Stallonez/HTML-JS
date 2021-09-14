class Header {
    constructor(img, h1, h2) {
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
    }
    render(x) {
        // x - куда отрисовать заголовок
        // console.log(this.h1);
        let out = '';
        out += `<img src="${this.src}" alt="" class="logo">`;
        out += `<h1>${this.h1}</h1>`;
        out += `<h2>${this.h2}</h2>`;
        document.getElementById(x).innerHTML = out;

    }
}

const img = 'http://builtwithreact.io/img/share-logo.jpg';

let header = new Header(img, 'Hello', 'world');
// console.log(header);
header.render('header');

// конструктор - это функция, которая запустится, когда я из класса буду создавать объект
// класс -> объект
// метод -> рисует // render (что рисовать, куда рисовать)
class Footer {
    constructor(h3, h4, h5) {
        this.h3 = h3;
        this.h4 = h4;
        this.h5 = h5;
    }
    render(abc) {
        let out = '';
        out = out + `<h3>${this.h3}</h3>`;
        out = out + `<h4>${this.h4}</h4>`;
        out = out + `<h5>${this.h5}</h5>`;
        document.getElementById(abc).innerHTML = out;
    }
}

let footer = new Footer('Заголовок3', 'Заголовок4', 'Заголовок5');
console.log(footer);
footer.render('footer');

// Внутрь класса можно добавлять свои функции, которые будут выполнять определенные действия, 
// так называемые методы