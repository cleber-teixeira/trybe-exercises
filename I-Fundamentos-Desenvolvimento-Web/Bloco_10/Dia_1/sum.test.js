const sum = require('./sum');

describe('Parte 1', () => {
  test(`1. A função sum(a, b) retorna a soma do parâmetro
  a com o b`, () => {
    expect(sum(2, 3)).toEqual(5);
  });

  test('2. Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('3. Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test(`4. Teste se a função sum lança um erro quando os
  parametros são 4 e "5" (string)`, () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  test(`Teste se a mensagem de erro é "parameters must be
  numbers" quando realizar a chamada sum(4, "5")`, () => {
    expect(() => { sum(4, "5") })
    .toThrowError(new Error('parameters must be numbers'));
  });
});
