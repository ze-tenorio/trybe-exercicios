//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let primeNumbers = [];
//tenho que percorrer todos os números entre 2 e 50
for (let index = 2; index <= 50; index += 1) {
    let isPrime = true;
//tenho que percorrer todos os divisores entre 2 e 50
    for (let indexD = 2; indexD < index; indexD += 1) {
//se qualquer divisor entre 1 e ele mesmo der resto 0 não é primo!
      if (index % indexD === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
        primeNumbers.push(index);
    }
}

let biggestPrime = 0;

for (let index = 0; index < primeNumbers.length; index += 1) {
    if (primeNumbers[index] > biggestPrime) {
        biggestPrime = primeNumbers[index];
    }
}

console.log(primeNumbers);
console.log(biggestPrime);
//tenho que garantir que o número que estou verificando é divisível somente por ele mesmo e por 1
//tenho que verificar qual foi o maior número primo verificado
//tenho que imprimir no console o maior
