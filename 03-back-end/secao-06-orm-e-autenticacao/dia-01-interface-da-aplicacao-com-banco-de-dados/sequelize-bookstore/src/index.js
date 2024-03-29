const express = require('express');
const BookController = require('./controllers/books.controller');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.getById);

app.post('/books', BookController.createBook);

app.put('/books/:id', BookController.updateBook);

app.delete('/books/:id', BookController.removeBook);