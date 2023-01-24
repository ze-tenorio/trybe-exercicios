//Some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}

//Calcule e imprima a média aritmética dos valores contidos no array;
let media = soma / numbers.length;

console.log(media);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (maiorNumero < numbers[index]) {
        maiorNumero = numbers[index];
    }
}

console.log(maiorNumero);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

let impares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impares += 1;
    }
}

console.log(impares);

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumero = maiorNumero;

for (let index = 0; index < numbers.length; index += 1) {
    if (menorNumero > numbers[index]) {
        menorNumero = numbers[index];
    }
}

console.log(menorNumero);