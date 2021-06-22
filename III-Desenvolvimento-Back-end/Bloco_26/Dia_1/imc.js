//A fórmula para calcular o IMC é peso / altura² .
// const peso = 85;
// const altura = 1.75;

const { questionFloat } = require('readline-sync');

function imc() {
  const peso = questionFloat('Qual o seu peso? (kg) ');
  const altura = questionFloat('Qual a sua altura? (m) ');
  const result = (peso / Math.pow(altura, 2)).toFixed(2);
  return console.log(`IMC: ${result}`);
};

imc();
