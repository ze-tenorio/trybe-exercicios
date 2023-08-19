const validateDesc = (req, res, next) => {
  const activity = req.body;
  const reqProperties = ['createdAt', 'rating', 'difficulty'];
  if (!('description' in activity)) return res.status(400).json({ message: 'O campo description é obrigatório' });
  reqProperties.forEach((prop) => {
    if (!(prop in activity.description)) return res.status(400).json({ message: `O campo ${prop} é obrigatório` })
  });
  next();
}

module.exports = validateDesc;