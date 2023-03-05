const books = require('./data/books');

const nameAndAge = () => books.map((b) => {
  const age = b.releaseYear - b.author.birthYear;
  const newObj = {
    author: b.author.name,
    age,
  };
  return newObj;
}).sort((a, b) => a.age - b.age);

module.exports = { nameAndAge };
