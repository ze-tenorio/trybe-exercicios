//Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

//armazenar um valor qualquer maior que 1
let n = 6;

//armazenar as linhas
let linha = '';

//criar uma estrutura para imprimir n asteriscos na tela
for (let indexLinha = 1; indexLinha <= n; indexLinha++) {
    if (linha.length <= n) {
        linha += '*';
        if (linha.length === n) {
            for (let indexColuna = 1; indexColuna <= n; indexColuna++) {
                console.log(linha);
            }
        }
    }
    
    
}

//criar uma estrutura que repita 4 vezes a instruçao acima


