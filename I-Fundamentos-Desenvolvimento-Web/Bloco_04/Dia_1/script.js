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

