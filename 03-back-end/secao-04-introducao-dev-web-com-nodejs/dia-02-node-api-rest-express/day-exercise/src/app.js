const express = require('express');
const { readMovies, writeMovie } = require('./fsUtils');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const selectedMovie = movies.find((movie) => movie.id === Number(id))
  res.status(200).json({ selectedMovie });
})

app.get('/movies', async (req, res) => {
  const movies = await readMovies();
  res.status(200).json({ movies });
})

app.post('/movies', async (req, res) => {
  const movieDetails = req.body;
  const newMovie = await writeMovie(movieDetails);
  res.status(200).json({ newMovie });
})

module.exports = app;