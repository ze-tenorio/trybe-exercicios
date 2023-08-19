const validateDiff = (req, res, next) => {
  const activity = req.body;
  const diff = activity.description.difficulty;
  if (!(diff === 'Fácil' || diff === 'Médio' || diff === 'Difícil')) return res.status(400).json({ message: "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  next();
}

module.exports = validateDiff;