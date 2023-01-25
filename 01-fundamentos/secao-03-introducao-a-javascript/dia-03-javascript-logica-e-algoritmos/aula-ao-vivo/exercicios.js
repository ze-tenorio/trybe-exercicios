// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma total de 1 a 50 é:

let soma = 0;

for (let index = 1; index <= 50; index += 1) {
    soma += index;
}

console.log(soma);

//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let divisiveis = 0;

for (let index = 2; index <= 150; index += 1) {
    if (index % 3 === 0) {
        divisiveis += 1;
    }
}

if (divisiveis === 50) {
    console.log("Mensagem secreta");
}

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let player1Choice = 'papel'
let player2Choice = 'pedra'

if (player1Choice === player2Choice) {
    console.log("A Ties");
} else if (player1Choice === 'tesoura' && player2Choice === 'papel' || player1Choice === 'papel' && player2Choice === 'pedra' || player1Choice === 'pedra' && player2Choice === 'tesoura') {
    console.log("Player 1 won");
} else {
    console.log("Player 2 won");
}

//4 -
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idadePessoa = 17;

//if (idadePessoa >= 18) {
//     console.log("A pessoa é maior de idade");
// }

idadePessoa >= 18 ? console.log("A pessoa é maior de idade") : console.log("A pessoa não é maior de idade");

// 5 -
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarolzita = 24; 
let idadeFlavio = 28;
let idadeNoel = 42;

if (idadeCarolzita < idadeFlavio && idadeCarolzita <idadeNoel) {
    console.log("Carolzita é a mais nova.")
} else if (idadeFlavio < idadeCarolzita && idadeFlavio < idadeNoel) {
    console.log("Flávio é o mais novo.")
} else {
    console.log("Noel é o mais novo.")
}