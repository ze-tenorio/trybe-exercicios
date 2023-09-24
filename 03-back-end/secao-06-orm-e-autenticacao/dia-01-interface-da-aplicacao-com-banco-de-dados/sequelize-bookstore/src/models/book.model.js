const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });
  (async () => {
    await sequelize.sync();
  })();
  return Book;
};

module.exports = BookModel;

