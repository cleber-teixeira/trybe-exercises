// A fórmula para calcular velocidade média é distância / tempo.

const { questionInt } = require('readline-sync');

function velocidade() {
  const distancia = questionInt('Informe a distância(m): ');
  const tempo = questionInt('Informe tempo(s): ');

  const result = distancia/tempo;

  return console.log(`A velocidade média é: ${result}`);
};

velocidade();
