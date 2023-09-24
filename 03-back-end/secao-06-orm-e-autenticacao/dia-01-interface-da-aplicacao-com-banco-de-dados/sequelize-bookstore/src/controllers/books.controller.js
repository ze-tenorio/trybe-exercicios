const BookService = require('../services/books.service');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookService.getById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  try {
    const newBook = await BookService.createBook(title, author, pageQuantity);
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

const removeBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookService.removeBook(id);
    if (book === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json({ message: 'Book deleted' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const newBookData = req.body;
  try {
    const book = await BookService.updateBook(id, newBookData);
    if (book[0] === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

module.exports = {
  getAll,
  getById,
  createBook,
  removeBook,
  updateBook,
}