const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;
  if (!(teams.some((team) => team.id === Number(id)))) {
    res.status(404).send({ message: 'time não encontrado'});
  }
  next();
};

module.exports = existingId;