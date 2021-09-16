/* Exercício 6
  6. Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida

    1. A fórmula para calcular velocidade média é distância / tempo .

    2. Armazene o script no arquivo velocidade.js.

    3. Agora, permita que o script seja executado através do comando npm run velocidade . Para isso, crie a chave velocidade dentro do objeto scripts no package.json .

    4. Utilize o readline-sync para solicitar os dados à pessoa.

    5. Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com números inteiros.
*/

// A fórmula para calcular velocidade média é distância / tempo.

const { questionInt } = require('readline-sync');

const velocidade = () => {
  const distancia = questionInt('Informe a distância(m): ');
  const tempo = questionInt('Informe tempo(s): ');

  const result = distancia / tempo;

  return console.log(`A velocidade média é: ${result}`);
};

velocidade();
