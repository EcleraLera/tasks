function partition(str) {
    let result = str.split('>>>');
    return result[1];
}

let result1 = partition('Приве>>>рмугм');
console.log(result1);