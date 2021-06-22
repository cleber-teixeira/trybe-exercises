//A fórmula para calcular o IMC é peso / altura² .

const peso = 85;
const altura = 1.75;

function imc(p, a) {
  const result = (p / Math.pow(a, 2)).toFixed(2);
  return console.log(`IMC: ${result}`);
};

imc(peso, altura);
