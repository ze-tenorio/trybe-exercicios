//Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if(numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbersAlt = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbersAlt.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if(numbersAlt[index] > numbersAlt[secondIndex]) {
            let position = numbersAlt[index];
            numbersAlt[index] = numbersAlt[secondIndex];
            numbersAlt[secondIndex] = position;
        }
    }
}

console.log(numbersAlt);

//Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte.

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

for (let index = 1; index < numbers1.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (secondIndex == index - 1) {
            numbers2.push(numbers1[secondIndex] * numbers1[index])
        }
    }
}

console.log(numbers2);