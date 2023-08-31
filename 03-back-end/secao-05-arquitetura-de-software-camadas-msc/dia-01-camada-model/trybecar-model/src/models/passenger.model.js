const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [passengers] = await connection.execute(
    'SELECT * FROM passengers',
  );
  return camelize(passengers);
};

const findById = async (id) => {
  const [[passenger]] = await connection.execute(
    'SELECT * FROM passengers WHERE id = ?',
    [id],
  );
  return camelize(passenger);
};

const remove = async (id) => {
  await connection.execute(
    'DELETE FROM passengers WHERE id = ?', 
    [id],
  );
};

module.exports = { findAll, findById, remove };