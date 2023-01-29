//armazenar o número romano que quero avaliado
let romanNumber = 'LVX'

//armazenar o retorno
let decimalNumber = 0;

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

//loop que percorre a string romanNumber de trás pra frente
for (let iRoman = romanNumber.length - 1; iRoman >= 0; iRoman -= 1) {
    //condicionais
    if (romanNumbersValues[romanNumber[iRoman]] >= decimalNumber) {
        decimalNumber += romanNumbersValues[romanNumber[iRoman]]
    } else {
        decimalNumber -= romanNumbersValues[romanNumber[iRoman]];
    }
}

console.log(decimalNumber);