const validDescription = (req, res) => {
  const { description } = req.body;
  if (!description) res.status(400).json({ message: 'O campo description é obrigatório '});
  const chaves = ['rating', 'difficulty', 'createdAt'];
  if (!chaves.every((c) => c in description)) return res.status(400).json({ message: 'O campo description precisa ter os tres campos "rating", "difficulty" e "createdAt"'});
}

module.exports = validDescription;