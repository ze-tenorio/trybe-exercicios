//armazenar o número romano que quero avaliado
let number = 'LXX'

//armazenar o retorno
let defaultNumber = 0;

//armazenar as letras e quanto vale cada uma
let romanNumbersValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

if (number.length === 1) {
    defaultNumber = romanNumbersValues[number];
} else {
    if (romanNumbersValues[number[0]] < romanNumbersValues[number[number.length - 1]]) {
        defaultNumber = romanNumbersValues[number[number.length - 1]] - romanNumbersValues[number[0]]; 
    } else {
        defaultNumber = romanNumbersValues[number[0]] + romanNumbersValues[number[number.length - 1]];
    }
}

console.log(defaultNumber);

//criar condicionais de quando uma letra que vale mais vem depois de uma que vale menos adiciona

//criar condicionais de quando uma letra que vale menos vem antes de uma que vale mais subtrai