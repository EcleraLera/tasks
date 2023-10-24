// task1
let consonant = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];
let vowels = ['а', 'у', 'о', 'ы', 'э', 'я', 'ю', 'ё', 'и', 'е'];

function count(str) {
    let strinfOfLetters = str;
    let letters = Array.from(strinfOfLetters);
    let con = 0;
    let vow = 0;
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < consonant.length; j++) {
            if (letters[i] === consonant[j]) {
                con += 1;
            }
        }
        for (let j = 0; j < vowels.length; j++) {
            if (letters[i] === vowels[j]) {
                vow += 1;
            }
        }
    }
    return `consonant: ${con}, vowels: ${vow}`;
}

let count1 = count(`виктор`)
console.log(count1);


// task2
function partition(str) {
    let result = str.split('>>>');
    return result[1];
}

let result1 = partition('Приве>>>рмугм');
console.log(result1);


// task3
function sumArray(arr) {
    let max = Math.max.apply(null, arr);
    let min = Math.min.apply(null, arr);
    return max + min; 
}
let sum = sumArray([1, 5, 3, 7, 8, 6]);
console.log(sum);


// task4
let array = [{"id":1,"title":"The Shawshank Redemption","release_year":1994,"genre":"Drama","rating":9,"budget":25000000},{"id":2,"title":"The Godfather","release_year":1972,"genre":"Crime","rating":9,"budget":6500000},{"id":3,"title":"The Godfather: Part II","release_year":1974,"genre":"Crime","rating":9,"budget":13000000}];

function film(arr) { 
    return arr.map(x => x.title).join(', ');
}

let filmTitles = film(array);
console.log(filmTitles);


// task5
let array = [{"id":1,"title":"The Shawshank Redemption","release_year":1994,"genre":"Drama","rating":9,"budget":25000000},{"id":2,"title":"The Godfather","release_year":1972,"genre":"Crime","rating":9,"budget":6500000},{"id":3,"title":"The Godfather: Part II","release_year":1974,"genre":"Crime","rating":9,"budget":13000000}];

function film(arr) {
   return arr.filter(kino => kino.release_year > 1990).map(item => item.title);
}

let filmTitles = film(array);
console.log(filmTitles);


// task6
let array1 = ["лук"];
let array2 = ["чеснок"];
let array3 = ["морковка"];

function arrays(arr1, arr2, arr3) {
    return arr1.concat(arr2, arr3);
    
}

let array = arrays(array1,array2,array3);
console.log(array);


// task7
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


// task8
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


// task9
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

