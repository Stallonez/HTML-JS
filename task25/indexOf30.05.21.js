// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);
// while (idx != -1) {
//     indices.push(idx);
//     idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// [0, 2, 4]

// let arrEmpty = [];
// let arr = [1, 2, 7, 9, 4, 3, 5, 8];
// let elem = 7;
// let search = arr.indexOf(elem);
// while (search != -1) {
//     arrEmpty.push(search);
//     search = arr.indexOf(elem, search + 1);
// }

// console.log(arrEmpty);

const a = [3, 6, 7, 8, 9, 7, 5, 2];
console.table(a);
console.log('массив a: ' + a.indexOf(7));
const b = ['hi', 'hello'];
// if (a.indexOf(7) !== -1) {
//     console.log('yes');
// }
// else {
//     console.log('no');
// }

console.log('массив b: ' + b.indexOf('hell'));

function indexOfEmul(ar, item, from = 0) {
    for (let i = from; i < ar.length; i++) {
        if (ar[i] === item) {
            return i;
        }
    }
    return -1;
}
