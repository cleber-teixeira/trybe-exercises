/* Exercício 1
  1. Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.

  2. A fórmula para calcular o IMC é peso / altura ^ 2 .

    Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.

  3. Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
  
  4. Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura.

  5. Armazene o script no arquivo imc.js .

  6. Agora, permita que o script seja executado através do comando npm run imc

    * O novo script criado deve conter o comando que chama o node para executar o arquivo imc.js .

  7. Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.

    1. Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?

    2. Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas 'Qual seu peso?' e 'Qual sua altura?' no terminal.

  8. Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

    1. O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats.

    2. Encontrou a função? Show! Agora utilize-a para solicitar o input de peso.

  9. Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

  * Considere a seguinte tabela para classificar a situação do IMC:

  | IMC                                       | Situação                  |
  | ----------------------------------------- | ------------------------- |
  | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
  | Entre 18,5 e 24,9                         | Peso normal               |
  | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
  | Entre 30,0 e 34,9                         | Obesidade grau I          |
  | Entre 35,0 e 39,9                         | Obesidade grau II         |
  | 40,0 e acima                              | Obesidade graus III e IV  |
*/

//A fórmula para calcular o IMC é peso / altura² .
// const peso = 85;
// const altura = 1.75;

const { questionFloat } = require('readline-sync');

function imc() {
  const peso = questionFloat('Qual o seu peso? (kg) ');
  const altura = questionFloat('Qual a sua altura? (m) ');
  const result = (peso / Math.pow(altura, 2)).toFixed(2);

  if (result < 18.5) {
    return console.log(`IMC: ${result}, Situação: Abaixo do peso (magreza)`);
  }
  if (result < 24.9) {
    return console.log(`IMC: ${result}, Situação: Peso normal`);
  }
  if (result < 29.9) {
    return console.log(`IMC: ${result}, Situação: Acima do peso (sobrepeso)`);
  }
  if (result < 34.9) {
    return console.log(`IMC: ${result}, Situação: Obesidade grau I`);
  }
  if (result < 39.9) {
    return console.log(`IMC: ${result}, Situação: Obesidade grau II`);
  }
  return console.log(`IMC: ${result}, Situação: Obesidade grau III e IV`);
}

imc();
