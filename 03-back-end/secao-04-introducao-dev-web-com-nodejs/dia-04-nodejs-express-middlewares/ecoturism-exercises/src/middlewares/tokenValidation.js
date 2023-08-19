const { getAllUsers } = require("../utils/fsUtils");

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const data = await getAllUsers();
  if (!(data.users.some((user) => user.token === authorization))) return res.status(401).json({ message: 'Token inválido!' });
  next();
}

module.exports = validateToken;