const express = require('express');
const app = express();

const { addActivity, addUser } = require('./utils/fsUtils');
const validateDesc = require('./middlewares/descriptionValidation');
const validateName = require('./middlewares/nameValidation');
const validatePrice = require('./middlewares/priceValidation');
const validateRating = require('./middlewares/ratingValidation');
const validateDiff = require('./middlewares/difficultyValidation');
const validateUser = require('./middlewares/userValidation');
const validateToken = require('./middlewares/tokenValidation');

app.use(express.json());

app.post('/activities', validateToken, validateName, validatePrice, validateDesc, validateRating, validateDiff, async (req, res) => {
  const activity = req.body;
  const activities = await addActivity(activity);
  res.status(201).json({ message: `Atividade cadastrada com sucesso! ${JSON.stringify(activities)}`})
});

app.post('/signup', validateUser, async (req, res) => {
  const user = req.body;
  const userToken = await addUser(user);
  res.status(200).json({ token: userToken });
})

module.exports = app;