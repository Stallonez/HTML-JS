const tmpArray = Array(3).fill('');
console.log(tmpArray);

const tempArr = Array(7).fill('*');
console.log(tempArr);
let arr = new Array(6);
console.log(arr, arr.length);
let nArr = new Array(20000).fill(1);
console.log(nArr);
console.log(nArr.length);
let b = new Function;
console.log(b);
let a = new String;
console.log(a);
let c = new Object;
console.log(c);

let arr = new Array(6);
console.log(arr, arr.length);
let nArr = new Array(20000).fill(1);
let newArr = Array.from({ length: 20 }, (_, i) => i + 1);
console.log(newArr);
console.log(newArr.length);
const sString = Array.from('string');
console.log(sString);