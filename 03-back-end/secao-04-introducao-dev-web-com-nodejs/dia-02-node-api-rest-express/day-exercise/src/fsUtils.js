const { error } = require('console');

const fs = require('fs').promises;

const readMovies = async () => {
  try{
    const data = await fs.readFile('./src/movies.json');
    const movies = JSON.parse(data)
    return movies;
  } catch(err) {
    error(err.message);
  }
}

const writeMovie = async (movieDetails) => {
  const data = await fs.readFile('./src/movies.json');
  const movies = JSON.parse(data)
  const allIds = movies.map((movie) => Number(movie.id));
  const id = Math.max(...allIds) + 1;
  const newMovie = { id, ...movieDetails };
  const newMovies = [...movies, newMovie];
  await fs.writeFile('./src/movies.json', JSON.stringify(newMovies));
  return newMovie;
}

module.exports = {
  readMovies,
  writeMovie,
}