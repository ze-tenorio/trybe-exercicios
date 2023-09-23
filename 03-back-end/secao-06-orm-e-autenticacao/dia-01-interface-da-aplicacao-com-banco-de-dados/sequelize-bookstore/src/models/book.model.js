const BookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
  (async () => {
    await sequelize.sync();
  })();
  return Book;
};

module.exports = BookModel;

