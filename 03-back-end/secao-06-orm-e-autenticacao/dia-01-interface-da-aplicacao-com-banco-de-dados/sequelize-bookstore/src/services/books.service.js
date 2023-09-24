const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const createBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const removeBook = async (id) => {
  const book = await Book.destroy(
    { where: { id } }
  );
  return book;
};

const updateBook = async (id, newBookData) => {
  const { title, author, pageQuantity } = newBookData;
  const updatedBook = await Book.update(
    { title, author, pageQuantity },
    { where: { id } }
  );
  return updatedBook;
}

module.exports = {
  getAll,
  getById,
  createBook,
  removeBook,
  updateBook,
};