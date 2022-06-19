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

// const myFizzBuzz = require('./sum');

// describe('Exercicio 3', () => {
//   it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(15)).toBe('fizzbuzz');
//   })

//   it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(6)).toBe('fizz');
//   })

//   it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(10)).toBe('buzz');
//   })

//   it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz(7)).toBe(7);
//   })

//   it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
//     expect(myFizzBuzz('7')).toBe(false);
//   })
// })

// const { encode, decode } = require('./sum');

// describe('Exercicio 4', () => {
//   it('Teste se encode são funções', () => {
//     expect(encode).toBeDefined();
//   })

//   it('Teste se decode são funções', () => {
//     expect(typeof decode).toEqual('function');
//   })

//   it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
//     expect(encode('teste')).toBe('t2st2');
//   })

//   it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
//     expect(decode('1', '2', '3', '4', '5')).toBe('a', 'e', 'i', 'o', 'u');
//   })

//   it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
//     expect(encode('q', 'w', 'e', 'r', 't')).not.toBe('1', '2', '3', '4', '5');
//   })

//   it('Teste se as demais letras/números não são convertidos para cada caso;', () => {
//     expect(encode('6', '7', '8', '9', '0')).not.toBe('a', 'e', 'i', 'o', 'u');
//   })

//   it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
//     expect(encode('trybe').length).toBe(5);
//   })
// })

// const techList = require('./sum');

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });

// const hydrate = require('./sum');

// describe('Testa a função hydrate', () => {
//   it('Testa se a função hydrate é definida', () => {
//     expect(hydrate).toBeDefined();
//   });
//   it('Testa se hydrate é uma função', () => {
//     expect(typeof hydrate).toBe('function');
//   });
//   it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
//     expect(hydrate('1 cerveja')).toBe('1 copo de água');
//     expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
//     expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
//     expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
//     expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
//   });
// });
