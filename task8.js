let array = [3, 6, 4, 9, 2, 1, 5, 7, 8];

function even(arr) {
    let even = arr.filter((arr) => arr % 2 === 0);
    let sum = 0;
    for (let item of even) {
        sum += item;
    }
    return sum;
}
let result = even(array);
console.log(result);