// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'vinho', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  const salada = [...fruit, ...additional];
  return salada;
};

console.log(fruitSalad(specialFruit, additionalItens));