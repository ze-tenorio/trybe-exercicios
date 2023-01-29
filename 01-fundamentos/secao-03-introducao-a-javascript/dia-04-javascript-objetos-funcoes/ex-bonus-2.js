let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];


function arrayOfNumbers(vector) {
    //criar um novo array que receberá os números pares
    let arrayOfEvens = [];
    for (let numbers of vector) {
        for (let number of numbers) {
            if (number % 2 === 0) {
                arrayOfEvens.push(number);
            }
        }
    }
    return arrayOfEvens;
};

console.log(arrayOfNumbers(vector));