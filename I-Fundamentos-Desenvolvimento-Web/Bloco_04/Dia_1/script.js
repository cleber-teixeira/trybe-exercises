/*
01- Faça cinco programas, um para cada operação aritmética básica.
Seu programa deve ter duas variáveis, a e b , definidas no começo
com os valores que serão operados. Faça programas para:
Adição | Subtração | Multiplicação | Divisão | Módulo
*/

function ex01() {
  const a = parseInt(document.getElementById('a1').value);
  const b = parseInt(document.getElementById('b1').value);
  let adicao = a + b;
  let subtracao = a - b;
  let multiplicacao = a * b;
  let divisao = parseFloat(a / b).toFixed(2);
  let modulo = a % b;
  document.getElementById('adcao').innerHTML = `- A adição ${a} + ${b} é igual a ${adicao}`;
  document.getElementById('subtracao').innerHTML = `- A subtração ${a} - ${b} é igual a ${subtracao}`;
  document.getElementById('multiplicacao').innerHTML = `- A multiplicação ${a} * ${b} é igual a ${multiplicacao}`;
  document.getElementById('divisao').innerHTML = `- A divisão ${a} / ${b} é igual a ${divisao}`;
  document.getElementById('modulo').innerHTML = `- O resto da divisão entre ${a} e ${b} é igual a ${modulo}`;
}

/*
02- Faça um programa que retorne o maior de dois números.
Defina no começo do programa duas variáveis com os 
valores que serão comparados.
*/

function ex02() {
  const num1 = parseInt(document.getElementById('a2').value);
  const num2 = parseInt(document.getElementById('b2').value);
  if (num1 > num2) {
      document.getElementById('resultado2').innerHTML = `Sendo os valores "${num1}" e "${num2}", logo o valor "${num1}" é o maior.`;
  } else if (num1 < num2) {
    document.getElementById('resultado2').innerHTML = `Sendo os valores "${num1}" e "${num2}", logo o valor "${num2}" é o maior.`;
  } else {
    document.getElementById('resultado2').innerHTML = `Neste caso, não há maior valor`;
  }
}
