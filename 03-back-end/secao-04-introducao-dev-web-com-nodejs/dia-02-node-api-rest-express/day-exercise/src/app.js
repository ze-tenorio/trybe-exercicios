const express = require('express');
const { readMovies, writeMovie, editMovie, removeMovie } = require('./fsUtils');

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

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const searchedId = Number(id);
  const movieDetails = req.body;
  const editedMovie = await editMovie(searchedId, movieDetails);
  res.status(200).json({ editedMovie });
})

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const deletedId = Number(id);
  await removeMovie(deletedId);
  res.status(200).end();
})

module.exports = app;