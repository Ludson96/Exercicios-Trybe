const { response } = require('express');
const { bookService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log('Mensagem de erro do getAll: ',e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getById(id);
    if (book) return res.status(200).json(book);
    return res.status(404).json({ message: "Book not found" });
  } catch (e) {
    console.log('Mensagem de erro do getById: ',e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
  getById,
}