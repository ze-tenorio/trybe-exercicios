const validateName = (req, res, next) => {
  const activity = req.body;
  const name = 'name';
  if (!(name in activity)) return res.status(400).json({ message: 'O campo name é obrigatório' });
  if (activity.name.length <= 4) return res.status(400).json({ message: 'O campo name deve ter pelo menos 4 caracteres' });
  next();
}

module.exports = validateName;