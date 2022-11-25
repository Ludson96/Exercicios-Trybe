const { bookService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log('Mensagem de erro do getAll: ',e.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
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
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = bookService.createBook({title, author, pageQuantity});
    return res.status(201).json(newBook);
  } catch (e) {
    console.error('Mensagem de erro de createBook', e.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const bookUpdated = await bookService.updateBook(id, title, author, pageQuantity);
    console.log('Atualização: ', bookUpdated);
    return res.status(200).json('Livro atualizado com sucesso');
  } catch (e) {
    console.error('Mensagem de erro do updateBook: ', e.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookDeleted = await bookService.deleteBook(id);
    console.log('Delete: ', bookDeleted);
    return res.status(204).json({ message: 'Livro deletado com sucesso' });
  } catch (e) {
    console.error('Mensagem de erro de deleteBook: ', e.message);
    return res.status(500).json({ message: 'Algo deu errado’' });
  }
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}