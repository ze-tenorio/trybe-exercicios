const validateUser = (req, res, next) => {
  const user = req.body;
  const reqProperties = ['email', 'password', 'firstName', 'phone'];
  if (!(reqProperties.every((prop) => prop in user))) return res.status(401).json({ message: "Campos ausentes!" });
  next();
}

module.exports = validateUser;