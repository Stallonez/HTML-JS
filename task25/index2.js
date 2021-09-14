// function abc(a) {
//     return a * 12;
// }

// abc(2);
// console.log(abc(2));

// function abc2(b) {
//     return function () {
//         b * 2;
//         return b = abc(3);
//     }

// }
// console.log(abc2(2));





// const str = "машина красного цвета";
// const word = "красного";
// const [startPart, endPart] = str.split(word);

// const splitByFirstMatch = (str, word) => {
//     const beginIndex = str.indexOf(word);

//     if (beginIndex === - 1) {
//         return null;
//     }

//     const before = str.slice(0, beginIndex);
//     const after = str.slice(beginIndex + word.length);

//     return { before, after };
// };

let worker = {
    name: 'Danil',
    surname: 'Danilov',
    profession: 'trackdriver',
    hobbie: 'reading'
}
console.log(worker);
console.log(Object);

let keys = Object.keys(worker);
console.log(keys);

let values = Object.values(worker);
console.log(values);
console.log(typeof values);

let entries = Object.entries(worker);
console.log(typeof entries);
console.log(Array.isArray(entries));

entries.map(([index, item]) => {
    console.log(index, item);
})






