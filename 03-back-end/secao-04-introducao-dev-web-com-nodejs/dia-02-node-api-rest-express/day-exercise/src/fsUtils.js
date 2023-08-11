const { error } = require('console');

const fs = require('fs').promises;

const readMovies = async () => {
  try{
    const allMovies = await fs.readFile('./movies.json');
    return allMovies;
  } catch(err) {
    error(err.message);
  }
}

module.exports = {
  readMovies,
}