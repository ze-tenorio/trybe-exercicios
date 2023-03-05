const books = require('./data/books');

const formatedAuthorNamesBirth = () => books.map((b) => `${b.author.name} - ${b.author.birthYear}`);

module.exports = { formatedAuthorNamesBirth };
