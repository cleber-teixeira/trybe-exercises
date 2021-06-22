//A fórmula para calcular o IMC é peso / altura² .
// const peso = 85;
// const altura = 1.75;

const { questionFloat } = require('readline-sync');

function imc() {
  const peso = questionFloat('Qual o seu peso? (kg) ');
  const altura = questionFloat('Qual a sua altura? (m) ');
  const result = (peso / Math.pow(altura, 2)).toFixed(2);
  if(result < 18.5) {
    return console.log(`IMC: ${result}, Situação: Abaixo do peso (magreza)`);
  }
  if(result < 24.9) {
    return console.log(`IMC: ${result}, Situação: Peso normal`);
  }
  if(result < 29.9) {
    return console.log(`IMC: ${result}, Situação: Acima do peso (sobrepeso)`);
  }
  if(result < 34.9) {
    return console.log(`IMC: ${result}, Situação: Obesidade grau I`);
  }
  if(result < 39.9) {
    return console.log(`IMC: ${result}, Situação: Obesidade grau II`);
  }
  return console.log(`IMC: ${result}, Situação: Obesidade grau III e IV`);
};

imc();
