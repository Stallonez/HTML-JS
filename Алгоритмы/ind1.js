let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let start = -1;
let item = 4;
let end = arr.length;

while (end - start > 1) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
        console.log(middle);
    }
    if (arr[middle] > item) {
        end = middle;
    }
    else {
        start = middle;
    }
}
console.log(-1);
console.log(undefined === true);
console.log(undefined === false);

// function binarySearch(arr, item) {
//     let start = -1;
//     let end = arr.length;
//     let middle = Math.floor((start + end) / 2);
//     return item = middle;
// }
// console.log(binarySearch());













// let arr = [2, 67, 3, 6, 100, 34, 23, 12, 9];
// function linear(arr, item) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] === item) {
//             console.log(arr.length);
//             console.log(typeof i);
//             console.log(typeof arr);
//             return arr[i];
//         }
//     }
//     return null;
// }

// console.log(linear(arr, 9));
