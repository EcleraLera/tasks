function sumArray(arr) {
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    return max + min; 
}
let sum = sumArray([1, 5, 3, 7, 8, 6]);
console.log(sum);
