// src/app.js

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const teamsRouter = require('./routes/teamsRouter');

const app = express();
const limiter = rateLimit({
  max: 100, // num maximo de reqs
  windowMs: 15 * 60 * 100, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: "Muitas requisições originadas desta IP" // msg personalizada de erro
})

app.use(morgan('dev'));
app.use(express.json());
app.use('emblems', express.static('public'));
app.use(cors());
app.use(helmet());
app.use(limiter);

app.use('/teams', teamsRouter);

app.use((err, _req, _res, next) => {
  console.log(err.stack);
  next(err);
})

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
})

module.exports = app;