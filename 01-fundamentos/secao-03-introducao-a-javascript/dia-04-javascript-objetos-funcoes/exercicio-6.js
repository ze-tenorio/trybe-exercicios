//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// const num1 = 27;
// const num2 = 39;
// const num3 = 32;

function greaterNumber() {
    const num1 = 27;
    const num2 = 39;
    const num3 = 32;
    
    let greaterNumber;
    if(num1 > num2 && num1 > num3) {
        greaterNumber = num1;
    } else if (num2 > num1 && num2 > num3) {
        greaterNumber = num2;
    } else {
        greaterNumber = num3;
    }
    return greaterNumber;
}

console.log(greaterNumber());