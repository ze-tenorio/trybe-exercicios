const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Seu nome é ${name}! Você tem ${age} anos!`);

// console.log('Hello, World!');