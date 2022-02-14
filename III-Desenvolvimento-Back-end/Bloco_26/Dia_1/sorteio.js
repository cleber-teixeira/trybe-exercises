const { question, questionInt } = require('readline-sync');

function resultado(num, resp) {
  if (num !== resp) {
    return console.log(`Opa, não foi dessa vez. O número era ${resp}`);
  }
  return console.log('Parabéns, número correto!');
}

function sorteio() {
  const resp = parseInt(Math.random() * 10);
  const num = questionInt(
    'Tente adivinhar um número entre 0 e 10 (informe um número): '
  );

  resultado(num, resp);

  const reiniciar = question('Deseja jogar novamente? (s/n) ');
  if (reiniciar !== 's') return console.log('Hai! Saionará!');

  sorteio();
}

sorteio();
