const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.use(express.json());

// ================================================================================ //
// // 🚀 Exercício 4
// Crie uma função de leitura do JSON com o modulo fs.
const moviePath = path.resolve(__dirname, './movies.json');

async function readJSON() {
  try {
    const contentJSON = await fs.readFile(moviePath, 'utf-8');
    const movies = JSON.parse(contentJSON);
    return movies;
  } catch (error) {
    console.error('algo de errado não esta certo', error.message);
  }
}
// ================================================================================ //

// ================================================================================ //
// 🚀 Exercício 5
// // Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.
app.get('/movies/:id', async (req, res) => {
 try {
    const movies = await readJSON();
    const movie = movies.find(({ id }) => id === Number(req.params.id));
res.status(200).json(movie);
 } catch (err) {
   res.status(500).send({ message: err.message });
 }
});
// ================================================================================ //

// ================================================================================ //
// 🚀 Exercício 6
// // Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.
app.get('/movies', async (req, res) => {
  try {
    const movies = await readJSON();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
// ================================================================================ //

// ================================================================================ //
// // 🚀 Exercício 7
// // Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.
app.post('/movies', async (req, res) => {
  try {
    const movies = await readJSON();
    const newMovie = req.body;
    movies.push(newMovie);
    res.status(201).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
// ================================================================================ //

// ================================================================================ //
// // 🚀 Exercício 8
// // Crie um endpoint do tipo PUT com a rota /movies/:id, que possa editar informações de um filme do JSON.
app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readJSON();

    const movieAltered = movies.find((m) => m.id === Number(id));

    movieAltered.movie = movie;
    movieAltered.price = price;
    res.status(200).json(movieAltered);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
// ================================================================================ //

// ================================================================================ //
// // 🚀 Exercício 9
// // Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.
app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readJSON();

    const filteredMovies = movies.filter((m) => m.id === Number(id));
    
    res.status(204).send(filteredMovies);
  } catch (err) {
    res.status(500).send('aaaa', { message: err.message });
  }
});
// ================================================================================ //

module.exports = app;