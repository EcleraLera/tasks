const array = [3, 6, 4, 9, 2, 1, 5, 7, 8];

function odd(arr) {
    const odd = arr.filter((arr) => arr % 2 !== 0);
    let sum = 0;
    for (let item of odd) {
        sum += item;
    }
    return sum;
}
const result = odd(array);
console.log(result);