const validateRating = (req, res, next) => {
  const activity = req.body;
  const rate = activity.description.rating;
  if (isNaN(rate) || rate < 1 || rate > 5) return res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  next();
}

module.exports = validateRating;