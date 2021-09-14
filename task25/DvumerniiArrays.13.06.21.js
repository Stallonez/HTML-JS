//двумерные массивы
// let a = [4, 5, 6];
// let b = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// console.log(b);
// for (let i = 0; i < b.length; i++) {
//     console.log(b[i]);
//     let c = b[i]; // c - массив [1,2,3]
//     for (let k = 0; k < c.length; k++) {
//         console.log(c[k]);
//     }
// }
// for (let i = 0; i < b.length; i++) {
//     // console.log(b[i]);
//     let c = b[i]; // c - массив [1,2,3]
//     for (let k = c.length - 1; k >= 0; k--) {
//         console.log(c[k]);
//     }
// }

// let out = '';
// for (let i = 0; i < b.length; i++) {
//     for (let k = 0; k < b[i].length; k++) {
//         console.log(b[i][k]);
//         out += b[i][k];
//     }
//     out += '<hr>';
// }

// document.querySelector('.out').innerHTML = out;

// let out = '';
// for (let i = 0; i < b.length; i++) {
//     for (let k = 0; k < b[i].length; k++) {
//         // console.log(b[i][k]);
//         if (b[i][k] > 4) {
//             out += b[i][k];
//         }

//     }
//     out += '<hr>';
// }

// document.querySelector('.out').innerHTML = out;