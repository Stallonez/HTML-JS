// let sum = 0;
// let h = 0;
// while (h < 10) {
//     sum = sum + h;
//     h++;
//     console.log('h: ' + h);
//     console.log('sum ' + sum);
// }

// let sum = 0;
// let d = 0;
// while (d < 10) {
//     sum = sum + d;
//     d++
// }

// console.log(sum); 

let out = document.querySelector('#out');
let p = 0;
let outStr = '';
let flag = 3;
while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '&nbsp';
        }
        else {
            outStr += '*';
        }
        p1++;
    }
    flag--;
    outStr += '<br>';
    p++;
}

out.innerHTML = outStr;

// let out = document.querySelector('#out');
// let p = 0;
// let outStr = '';
// while (p < 4) {
//     let p1 = 0;
//     while (p1 < 4) {
//         outStr += '*';
//         p1++;
//     }
//     outStr += '<br>';
//     p++;
// }

// out.innerHTML = outStr;