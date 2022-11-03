const express = require('express');
const validSignup = require('./middlewares/validSignup');
const generateToken = require('./middlewares/crypto');

const app = express();

app.use(express.json());

app.post('/activities', (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!'})
})

app.post('/signup', validSignup, (_req, res) => {
  const token = generateToken();
  res.status(200).json({ token: token })
})

module.exports = app;