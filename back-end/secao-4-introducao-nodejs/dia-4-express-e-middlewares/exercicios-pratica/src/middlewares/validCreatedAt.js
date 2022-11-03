const validCreatedAt = (req, res) => {
  const { createdAt } = req.body.description;
  const result = createdAt instanceof Date && !isNaN(createdAt);
  if(!result) return res.status(400).json({ message: "O campo createAt deve ter o formato\'dd/mm/aaaa\'"})
}

module.exports = validCreatedAt;