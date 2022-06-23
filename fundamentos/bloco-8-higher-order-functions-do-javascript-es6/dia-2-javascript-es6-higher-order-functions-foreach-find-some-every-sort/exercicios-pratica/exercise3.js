const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};
// // 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
  return Object.values(expectedResult).find((element) => element.length === 26);
}


console.log(getNamedBook());