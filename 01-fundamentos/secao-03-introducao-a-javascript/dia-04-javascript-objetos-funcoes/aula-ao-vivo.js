//Crie uma função para dar boas vindas

function boasVindas(nome) {
    return "Boas vindas, " + nome;
}

console.log(boasVindas('Flávio'))

//Crie uma função para somar dois números

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(10, 50));

//Crie uma função que calcule os números de um jogo de vôlei
//Vitória=2pts
//Empate=1pt

function calcularPontos(victorys, draws) {
    let points;
    points = (victorys * 2) + draws;
    return points;
}

console.log(calcularPontos(10, 5));

//Objeto cardápio

let mcItens = {
    //key: value
    'Big Mac': 20,
    'Big Tasty': 30,
    'Batata': 20,
    'Refrigerante': 5,
    'Suco': 4
}

//Objeto pessoa

let person = {
    firstName: 'Flávio',
    lastName: 'Silva',
    favoriteMovies: ['Avengers', 'Interstellar', 'Harry Potter'],
}

console.log(person.favoriteMovies[1]);

//Adiciona uma chave nova
person['doceFavorito'] = 'Bolo de Chocolate';

//Adiciona uma chave nova de outro jeito
person.city = 'Taubaté';

//Adiciona um objeto dentro de outro objeto
person.address = {
    rua: 'Rua Turma 30',
    numero: 30,
    complemento: 'Turma do balacobaco e cheirosa'
}

console.log(person.firstName + ' mora na ' + person.address.rua +  ' em ' + person.city);

//Brincando de criar

let myComputer = {
    brand: 'Apple',
    type: 'Notebook',
    model: 'Macbook Pro 13',
    name: 'Macbook Pro de José'
}

console.log("Qual a marca do notebook do Zé? " + myComputer.brand)

console.log('------------------')

//Iterar sobre o objeto

//For in

for (let keys in person) {
    console.log(person[keys])
}

//For of

let iterable = [10, 20, 30, 40, 50];

for (let iterator of iterable) {
    console.log(iterator);
}

let iterable2 = 'Olá Trybers';

for (let letters of iterable2) {
    console.log(letters);
}