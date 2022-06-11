// //🚀 1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// // 1 -Teste se o retorno de sum(4, 5) é 9
// const sum = require('./sum');
// describe('Teste do describe', () => {
//   it('Testando se o retorno de sum(4,5) é 9', () => {
//     expect(sum(4, 5)).toEqual(9);
//   });
// // // 2 - Teste se o retorno de sum(0, 0) é 0
//   it('Testando se o retorno de sum(0,0) é 0', () => {
//     expect(sum(0, 0)).toEqual(0);
//   });
// // // 3 - Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
//   it('Testando se a função sum lança um erro qunando os parâmetros são 4 e "5"', () => {
//     expect(() => sum(4, '5')).toThrow(Error);
//   });
// // // 4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
//   it('Testando se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
//     expect(() => sum(4, '5')).toThrow('parameters must be numbers');
//   });
// });

// // 🚀 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// const myRemove = require('./sum');

// describe('Exercicio 2', () => {
//   it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//   });

//   it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//   });

//   it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
//   });
// });
