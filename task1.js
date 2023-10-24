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

