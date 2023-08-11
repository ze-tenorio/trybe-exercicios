const express = require('express');
const { readMovies } = require('./fsUtils');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const selectedMovie = movies.find((movie) => movie.id === Number(id))
  res.status(200).json({ selectedMovie });
})

module.exports = app;