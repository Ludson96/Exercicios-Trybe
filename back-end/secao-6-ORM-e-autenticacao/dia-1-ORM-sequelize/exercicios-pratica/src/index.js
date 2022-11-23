const express = require('express');
const { bookRouter } = require('./routers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/books', bookRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;