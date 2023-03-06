const numbers = [50, 85, -30, 3, 15];

// const greaterNumber = numbers.reduce((acc, curr) => {
//     let greater = acc;
//     if (curr > acc) greater = curr;
//     return greater;
// })


const greaterNumber = numbers.reduce((bigger, number) => bigger > number ? bigger : number);
console.log(greaterNumber);