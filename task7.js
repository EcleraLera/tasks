let numbers = [4, 5, 7, 2, 6, 7];

function amount(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

let result = amount(numbers);
console.log(result);