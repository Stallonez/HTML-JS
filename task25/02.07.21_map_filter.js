let a = [3, 5, 12, 200, 1, 0, -2];
let b = a.map(function (item, index) {
    console.log(item);
    return index * 2;
})

console.log(b);
let c = a.filter(function (item, index) {
    if (item / 2 == 0) {
        return item;
    }
})
console.log(c);
// callback это функция, которая передается внутрь как условие. Это функция которая будет вызвана для каждого элемента

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function (elem) {
    return elem.length > 6
});

console.log(result);

let av = "Fdfdfer";
av.toLowerCase();
console.log(av);