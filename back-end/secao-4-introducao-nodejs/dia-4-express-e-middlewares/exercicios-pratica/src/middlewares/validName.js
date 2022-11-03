const validName = (req, res) => {
  const { name } = req.body
  if (!name)  return res.status(400).json({ message: 'O campo name é obrigatorio' });
  if (name.length < 4) return res.status(400).json({ message: 'O campo nam deve ter pelo menos 4 caracteres'});
} 

module.exports = validName;