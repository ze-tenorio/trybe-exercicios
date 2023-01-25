//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

//preciso de uma string para ser invertida
let word = 'banana';
//preciso criar uma estrutura que percorra todas as letras da string de trás pra frente
let newWord = "";
for (let index = word.length - 1; index >= 0; index -= 1) {
    //preciso que essa estrutura escreva uma letra de cada vez juntas
    newWord += word[index];
}
//preciso exibir a nova palavra
console.log(newWord);

