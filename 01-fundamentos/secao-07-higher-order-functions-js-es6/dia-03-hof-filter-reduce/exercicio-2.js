const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// solucao usando apenas reduce

const evensSum = (arr) => arr.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);

console.log(evensSum(numbers));

// solucando usando filter e reduce

const evensSumWithFilter = (arr) => arr.filter((number) => number % 2 === 0).reduce((acc, curr) => acc + curr, 0);

console.log(evensSumWithFilter(numbers));