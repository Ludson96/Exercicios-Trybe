// // 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
const sum = (...b) => b.reduce((acc, curr) => acc + curr);

console.log(sum(5, 5, 5, 5, 5, 5));
