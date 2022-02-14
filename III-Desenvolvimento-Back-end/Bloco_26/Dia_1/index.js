/* Exercício 8
  8. Crie um arquivo index.js que pergunta qual script deve ser executado

    1. O script deve ser acionado através do comando npm start. ✅

    2. Utilize o readline-sync para realizar o input de dados. ✅

    3. Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis. ✅

    4. Ao digitar o número de um script e pressionar enter , o script deve ser executado. ✅

    5. Você pode utilizar o require para executar o script em questão. ✅
*/

const { questionInt } = require('readline-sync');

const scripts = [
  { msg: 'Calcular IMC', script: './imc.js' },
  { msg: 'Calcular Velocidade Média', script: './velocidade.js' },
  { msg: 'Jogo de Adivinhação', script: './sorteio.js' },
];

const menuScripts = (options) => {
  let menu = options.map((option, index) => `\n${index + 1} - ${option.msg}`).join('\n');

  const optionNumber = questionInt(
    `Digite um número correspondente ao script desejado:\n${menu}\n`) -1;

  const option = options[optionNumber];

  if (!option) return console.log('Número inválido. Saindo');

  require(option.script);
}

menuScripts(scripts);
