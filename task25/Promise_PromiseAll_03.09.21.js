// fetch это обертка над промисами, промис позволяет работать с асинхронными данными
// объект промис принимает функцию с двумя параметрами resolve и reject, названия здесь произвольные
// resolve - это параметр, который получается, когда промис возвращает результат как мы задумали, reject - когда у него не получается


// я посылаю запрос ниже
let a = new Promise((resolve, reject) => {
    fetch("https://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1")
        // и когда он выполнится выше, мы выполняем коллбэк функцию 1, потом
        .then(data => {
            resolve(data.text());
        })
    // потом колбэк функцию 2
})
let b = new Promise((resolve, reject) => {
    fetch("https://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=2&name=Apollo")
        // и когда он выполнится выше, мы выполняем коллбэк функцию 1, потом
        .then(data => {
            resolve(data.text());
        })
    // потом колбэк функцию 2
})

Promise.all([a, b]).then(value => {
    console.log(value);
    console.log(value[0]);
    console.log(value[1]);
})

// a.then(data => { вот так без Promise.all
//     console.log(data);
// })
// b.then(data => {
//     console.log(data);
// })