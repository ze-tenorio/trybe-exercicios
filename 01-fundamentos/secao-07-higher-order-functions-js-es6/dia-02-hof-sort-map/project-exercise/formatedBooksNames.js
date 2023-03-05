const books = require('./data/books');

const formatedBookNames = () => books.map((b) => `${b.name} - ${b.genre} - ${b.author.name}`);

console.log(formatedBookNames());

module.exports = { formatedBookNames };
