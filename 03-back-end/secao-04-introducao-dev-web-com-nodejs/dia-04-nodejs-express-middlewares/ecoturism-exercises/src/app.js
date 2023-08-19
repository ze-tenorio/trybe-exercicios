const express = require('express');
const app = express();

const { addActivity } = require('./utils/fsUtils');
const validateDesc = require('./middlewares/descriptionValidation');
const validateName = require('./middlewares/nameValidation');
const validatePrice = require('./middlewares/priceValidation');
const validateRating = require('./middlewares/ratingValidation');
const validateDiff = require('./middlewares/difficultyValidation');

app.use(express.json());

app.post('/activities', validateName, validatePrice, validateDesc, validateRating, validateDiff, async (req, res) => {
  const activity = req.body;
  await addActivity(activity);
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!'})
});

module.exports = app;