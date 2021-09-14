// fetch всегда возвращает промис
fetch("https://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1")
    .then(data => {
        console.log(data);
        // console.log(data.text());
        //     data.text().then(data2 => {
        //         console.log(data2);
        // })
        return data.text();
    })
    .then(data => {
        console.log(data);
    })
// fetch("https://getpost.itgid.info/index2.php")
//     .then(data => data.text())
//     .then(data => {
//         console.log(data);
//     })


fetch("https://getpost.itgid.info/index2.php", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded', // отправка формы
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: "auth=DdC33D7d2C2a7&action=1" // body data type must match "Content-Type" header
})
    .then(response => response.text())
    .then(response => {
        console.log(response);
    })
// return await response.json(); // parses JSON response into native JavaScript objects
