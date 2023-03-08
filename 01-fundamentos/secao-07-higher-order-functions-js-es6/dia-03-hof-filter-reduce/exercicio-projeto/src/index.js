const { books } = require('../data/library');

// Requisito 1 iniciando
const fantasyOrScienceFiction = () => {
  const newArr = books.filter((b) => b.genre === 'Fantasia' || b.genre === 'Ficção Científica');
  return newArr;
};

const oldBooksOrdered = (year) => {
  const newArr = books.filter((book) => year - book.releaseYear > 60);
  return newArr.sort((a, b) => (year - b.releaseYear) - (year - a.releaseYear));
};

const booksByAuthorBirthYear = (birthYear) => {
  const newArr = books.filter((b) => b.author.birthYear === birthYear);
  return newArr.map((book) => book.name);
};

const fantasyOrScienceFictionAuthors = () => {
  const newArr = books.filter((b) => b.genre === 'Ficção Científica' || b.genre === 'Fantasia');
  const newBooksArr = newArr.map((b) => b.author.name).sort();
  return newBooksArr;
};

const oldBooks = (year) => books.filter((b) => year - b.releaseYear > 60).map((b) => b.name);

const authorWith3DotsOnName = () => {
  const newArr = books.map((b) => b.author.name);
  const rightAuthor = newArr.find((a) => a[1] === '.' && a[4] === '.' && a[7] === '.');
  return books.find((book) => book.author.name === rightAuthor).name;
};

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
