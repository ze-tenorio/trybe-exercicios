// src/app.js

const express = require('express');
const teams = require('./utils/teams');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const apiCredentials = require('./middlewares/apiCredentials');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const limiter = rateLimit({
  max: 100, // num maximo de reqs
  windowMs: 15 * 60 * 100, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
  message: "Muitas requisições originadas desta IP" // msg personalizada de erro
})

let nextId = 3;

app.use(morgan('dev'));
app.use(express.json());
app.use(apiCredentials);
app.use('emblems', express.static('public'));
app.use(cors());
app.use(helmet());
app.use(limiter);


app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

app.use((req, res) => res.sendStatus(404));

module.exports = app;