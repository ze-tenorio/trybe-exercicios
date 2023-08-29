const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'Ok!'});
});

app.use('/people', peopleRoutes);

module.exports = app;