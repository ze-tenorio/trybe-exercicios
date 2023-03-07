// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'granola', 'leite ninho'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));