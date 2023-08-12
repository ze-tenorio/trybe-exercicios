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
};

const editMovie = async (id, movieDetails) => {
  const movies = await readMovies();
  const editedMovie = {id, ...movieDetails};
  const editedMovies = movies.map((movie) => {
    if (movie.id === id) {
      return editedMovie;
    }
    return movie;
  });
  await fs.writeFile('./src/movies.json', JSON.stringify(editedMovies));
  return editedMovie;
};

const removeMovie = async (id) => {
  const movies = await readMovies();
  const newMovies = movies.filter((movie) => movie.id !== id);
  await fs.writeFile('./src/movies.json', JSON.stringify(newMovies));
};

module.exports = {
  readMovies,
  writeMovie,
  editMovie,
  removeMovie,
}