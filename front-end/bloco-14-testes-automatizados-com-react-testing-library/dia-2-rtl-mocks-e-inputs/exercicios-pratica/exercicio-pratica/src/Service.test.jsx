const servide = require('./Service');

describe('Exercicio 1', () => {
  it('Testes para a função de número aleatório', () => {
   servide.retornaNumeroAleatorio = jest.fn().mockReturnValue(10)

    expect(servide.retornaNumeroAleatorio()).toBe(10);
  })
})