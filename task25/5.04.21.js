let ar5 = [1, 2, 4, 7, 9, 10, true, false, NaN, undefined];
let out5 = document.querySelector('.out-5');
function f5() {
    let sum = 0;
    for (let i = 0; i < ar5.length; i++) {
        console.log(ar5[i], !isNaN(ar5[i]));
        if (typeof (ar5[i]) == 'number' || !isNaN(ar5[i])) {
            sum = ar5[i] + sum; // 0 = 0+1;
        }
    }
    out5.innerHTML = sum; // это запись

}
// out5.innerHTML = f5();
document.querySelector('.b-5').onclick = f5; // присвоил без вызова

// let a = f5(); // присвоил с вызовом
// console.log(a);

// let b = ar5.join('-');
// console.log(typeof (b));

let ar5 = [1, 2, 4, 7, 9, 10, true, false, NaN, undefined];
let out5 = document.querySelector('.out-5');
function f5() {
    for (let i = 0; i < ar5.length; i++) {
        console.log(ar5[i], !isNaN(ar5[i]));
        if (typeof (ar5[i]) == 'number' && !isNaN(ar5[i])) {
            sum = ar5[i] + sum; // 0 = 0+1;
        }
    }
    out5.innerHTML = sum; // это запись

}
// out5.innerHTML = f5();
document.querySelector('.b-5').onclick = f5

// тоже самое только или на и поменять

let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    ar7.push('vietnam', 'turkey', 'italy'); //
    out7.innerHTML = ar7;
    // console.log(ar7);
}
let out7 = document.querySelector('.out-7');
document.querySelector('.b-7').onclick = f7;




let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
let out7 = '';
function f7() {
    ar7.push('vietnam', 'turkey', 'italy'); //
    out7 = ar7;
    console.log(ar7);
}
document.querySelector('.out-7').innerHTML = out7;
document.querySelector('.b-7').onclick = f7;


