//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

//1- vou precisar armazenar o fatorial de 10
//2- vou precisar criar uma estrutura para calcular o 10 multiplicado por todos seus antecessores até o 0
//3- vou precisar imprimir na tela o fatorial de 10

//1- criar uma variável que armazene o valor total das multiplicações
let fatorial10 = 1;
//2- criar uma estrutura for que vá de 10 a 0
for (let index = 10; index > 0; index -= 1) {
    //3- criar um cálculo que multiplique o valor total pelo número anterior
    fatorial10 = fatorial10 * index;
}
//4- exibir o valor
console.log(fatorial10);