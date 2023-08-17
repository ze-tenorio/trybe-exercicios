const teams = require('../utils/teams');

const existingId = (req, res, next) => {
  const { id } = req.params;
  if (teams.some((team) => team.id === Number(id))) {
    next();
  } else {
    res.status(400).send({ message: 'id not found'});
  }
};

module.exports = existingId;