//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

//criar variável que armazena o tamanho do triangulo
let n = 5;

//criar variável que armazena a mensagem a ser imprimida
let triangle = '';

//criar uma estrutura que imprima 1 asterisco somado de outro por linha
for (let indexLinha = 1; indexLinha <= n; indexLinha++) {
    triangle += '*';
    console.log(triangle);
}