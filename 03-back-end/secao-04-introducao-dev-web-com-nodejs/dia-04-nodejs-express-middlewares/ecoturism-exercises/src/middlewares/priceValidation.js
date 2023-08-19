const validatePrice = (req, res, next) => {
  const activity = req.body;
  const price = 'price';
  if (!(price in activity)) return res.status(400).json({ message: 'O campo price é obrigatório' });
  if (isNaN(activity.price) || activity.price < 0) return res.status(400).json({ message: 'O campo price deve ser um número maior ou igual a zero' });
  next();
}

module.exports = validatePrice;