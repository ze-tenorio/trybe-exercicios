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

module.exports = {
  readMovies,
}