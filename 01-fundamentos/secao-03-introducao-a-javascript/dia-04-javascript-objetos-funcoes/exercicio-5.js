//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const num1 = 12;
const num2 = 16;

function greaterNumber(num1, num2) {
    let greaterNumber;
    if (num1 > num2) {
        greaterNumber = num1;
    } else {
        greaterNumber = num2;
    }
    return greaterNumber;
}

console.log(greaterNumber(num1, num2));

