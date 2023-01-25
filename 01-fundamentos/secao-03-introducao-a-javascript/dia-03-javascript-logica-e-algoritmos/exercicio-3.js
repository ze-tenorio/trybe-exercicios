let array = ['java', 'javascript', 'python', 'html', 'css'];

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

//criar uma variavel para armazenar a maior palavra
let maiorPalavra = '';
//criar uma estrutura que passe por todos os elementos do array
for (let index = 0; index < array.length; index += 1) {
//determinar dentro dessa estrutura qual foi a maior palavra
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}
//criar uma variavel para armazenar a menor palavra
let menorPalavra = maiorPalavra;
//criar uma estrutura que passe por todos os elementos do array
for (let index = 0; index < array.length; index += 1) {
    //determinar dentro dessa estrutura qual foi a menor palavra
        if (array[index].length < menorPalavra.length) {
            menorPalavra = array[index];
        }
    }
//imprimir a maior palavra
console.log(maiorPalavra);
//imprimir a menor palavra
console.log(menorPalavra);