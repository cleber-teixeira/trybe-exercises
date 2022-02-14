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
  let divisao = a / b;
  let modulo = a % b;
  document.getElementById('adcao').innerHTML = `A adição ${a} + ${b} é igual a ${adicao}`;
  document.getElementById('subtracao').innerHTML = `A subtração ${a} - ${b} é igual a ${subtracao}`;
  document.getElementById('multiplicacao').innerHTML = `A multiplicação ${a} * ${b} é igual a ${multiplicacao}`;
  document.getElementById('divisao').innerHTML = ` A divisão ${a} / ${b} é igual a ${divisao}`;
  document.getElementById('modulo').innerHTML = ` O resto da divisão entre ${a} e ${b} é igual a ${modulo}`;
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
      document.getElementById('resultado2').innerHTML = `Sendo os valores ${num1} e ${num2}, logo o valor ${num1} é o maior.`;
  } else if (num1 < num2) {
    document.getElementById('resultado2').innerHTML = `Sendo os valores ${num1} e ${num2}, logo o valor ${num2} é o maior.`;
  } else {
    document.getElementById('resultado2').innerHTML = `Neste caso, não há maior valor`;
  }
}

/*
  03- Faça um programa que retorne o maior de três números.
  Defina no começo do programa três variáveis com os 
  valores que serão comparados.
*/

function ex03() {
  const num1 = parseInt(document.getElementById('a3').value);
  const num2 = parseInt(document.getElementById('b3').value);
  const num3 = parseInt(document.getElementById('c3').value);
  if (num1 > num2 && num1 > num3) {
      document.getElementById('resultado3').innerHTML = `Sendo os valores ${num1}, ${num2} e ${num3}, logo o valor ${num1} é o maior.`;
  } else if (num2 > num1 && num2 > num3) {
    document.getElementById('resultado3').innerHTML = `Sendo os valores ${num1}, ${num2} e ${num3}, logo o valor ${num2} é o maior.`;
  } else if (num3 > num1 && num3 > num2) {
    document.getElementById('resultado3').innerHTML = `Sendo os valores ${num1}, ${num2} e ${num3}, logo o valor ${num3} é o maior.`;
  } else {
    document.getElementById('resultado3').innerHTML = `Neste caso, não há maior valou, ou não foi identificado algum valor`;
  }
}

/* 
  04- Faça um programa que, dado um valor definido numa variável,
  retorne "positive" se esse valor for positivo, "negative" se 
  for negativo e "zero" caso contrário.
*/

function ex04() {
  const num = parseInt(document.getElementById('a4').value);
  if (num > 0) {
    document.getElementById('resultado4').innerHTML = 'positive';
  } else if (num < 0) {
    document.getElementById('resultado4').innerHTML = 'negative';
  } else if (num === 0) {
    document.getElementById('resultado4').innerHTML = 'zero';
  } else {
    document.getElementById('resultado4').innerHTML = '<span>ERRO!</span> Nenhum valor encontrado.';
  }
}

/*
  05- Faça um programa que defina três variáveis com os valores
  dos três ângulos internos de um triângulo. Retorne true se os
  ângulos representarem os ângulos de um triângulo e false caso
  contrário.

    - Para os ângulos serem de um triângulo válido, a soma dos
    três deve ser 180 graus. Caso os ângulos estejam inválidos,
    o programa deve retornar uma mensagem de erro.
*/

function ex05() {
  const num1 = parseInt(document.getElementById('a5').value);
  const num2 = parseInt(document.getElementById('b5').value);
  const num3 = parseInt(document.getElementById('c5').value);
  //Verifica a soma dos ângulos se é igual a 180º
  if (num1 < 180 && num2 < 180 && num3 < 180) {
      if (num1 + num2 + num3 === 180) {
        document.getElementById('resultado5').innerHTML = '&rarr; true &larr; <br> Parabéns! Você encontrou o Triângulo!';
      } else {
        document.getElementById('resultado5').innerHTML = '&rarr; false &larr; <br> Para ser um Triângulo a soma dos ângulos deve ser 180.';
      }
  } else {
    document.getElementById('resultado5').innerHTML = 'Valor inválido! Digite três valores menores que 180.';
  }
}

/*
  06- Escreva um programa que receba o nome de uma peça 
  de xadrez e retorne os movimentos que ela faz.

    * Como desafio, faça o programa funcionar tanto se
    receber o nome de uma peça com letras maiúsculas
    quanto com letras minúsculas, sem aumentar a
    quantidade de condicionais.

    * Como dica, você pode pesquisar uma função que faz
    uma string ficar com todas as letras minúsculas
    (lower case) .

    * Se a peça passada for inválida, o programa deve
    retornar uma mensagem de erro.
    
    *Exemplo: bishop -> diagonals
*/

function ex06() {
const pecaDeXadrez = document.getElementById('a6').value;
switch (pecaDeXadrez.toLowerCase()) {
    case 'rei' || 'rei':
      document.getElementById('resultado6').innerHTML = 'O rei movimenta uma casa em qualquer direção.';
        break;
    case 'rainha':
      document.getElementById('resultado6').innerHTML = 'A rainha movimenta na diagonal e na horizontal.';
        break;
    case 'peão':
      document.getElementById('resultado6').innerHTML = 'O peão avança uma ou duas casas a primeira vez depois apenas uma.';
        break;
    case 'bispo':
      document.getElementById('resultado6').innerHTML = 'O bispo movimenta na diagonal.';
        break;
    case 'cavalo':
      document.getElementById('resultado6').innerHTML = 'O cavalo pode se movimentar em L saltando sobre outras peças.';
        break;
    case 'torre':
      document.getElementById('resultado6').innerHTML = 'A torre movimenta na horizontal ou vertical.';
        break;
    default:
      document.getElementById('resultado6').innerHTML = 'Erro, peça inválida!';
        break;
};
}

/* 
  07- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
    * Porcentagem >= 90 → A
    * Porcentagem >= 80 → B
    * Porcentagem >= 70 → C
    * Porcentagem >= 60 → D
    * Porcentagem >= 50 → E
    * Porcentagem < 50 → F
    * O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

function ex07() {
  const nota = parseInt(document.getElementById('a7').value);
  if (nota < 0 || nota > 100) {
    document.getElementById('resultado7').innerHTML = '<span>ERRO!</span> Nota inválida!';
  } else if (nota >= 90) {
    document.getElementById('resultado7').innerHTML = 'Nota: <span>A</span>';
  } else if (nota >= 80) {
    document.getElementById('resultado7').innerHTML = 'Nota: <span>B</span>';
  } else if (nota >= 70) {
    document.getElementById('resultado7').innerHTML = 'Nota: <span>C</span>';
  } else if (nota >= 60) {
    document.getElementById('resultado7').innerHTML = 'Nota: <span>D</span>';
  } else if (nota >= 50) {
    document.getElementById('resultado7').innerHTML = 'Nota: <span>E</span>';
  } else {
    document.getElementById('resultado7').innerHTML = 'Nota: <span>F</span>';
  }
}

/*
  08- Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for 'par'. Caso contrário, ele retorna false.

    * Bônus: use somente um if.
*/

function ex08() {
  const num = [parseInt(document.getElementById('a8').value), parseInt(document.getElementById('b8').value), parseInt(document.getElementById('c8').value)];
  for (let index = 0; index < 3; index += 1) {
    console.log(num[index]);
    if (num[index]%2 === 0) {
      document.getElementById('resultado8').innerHTML = '<p><span>&rarr; true &larr;</span></p><p><em>Existe um número <span>par</span> !</em></p>';
      index = 3;
    } else {
      document.getElementById('resultado8').innerHTML = '<p><span>&rarr; false &larr;</span></p><p><em>Não existe nenhum número <span>par</span> !</em></p>';
    }
  }
}

/*
  09- Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for 'ímpar'. Caso contrário, ele retorna false.

    * Bônus: use somente um if.
*/

function ex09() {
  const num = [parseInt(document.getElementById('a9').value), parseInt(document.getElementById('b9').value), parseInt(document.getElementById('c9').value)];
  for (let index = 0; index < 3; index += 1) {
    console.log(num[index]);
    if (num[index]%2 !== 0) {
      document.getElementById('resultado9').innerHTML = '<p><span>&rarr; true &larr;</span></p><p><em>Existe um número <span>ímpar</span> !</em></p>';
      index = 3;
    } else {
      document.getElementById('resultado9').innerHTML = '<p><span>&rarr; false &larr;</span></p><p><em>Não existe nenhum número <span>ímpar</span> !</em></p>';
    }
  }
}

/*
  10- Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o valor de custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

    * Atente que, sobre o custo do produto, incide um imposto de 20%.
    * Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
    * O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

      - valorCustoTotal = valorCusto + impostoSobreOCusto
      - lucro = valorVenda - valorCustoTotal (lucro de um produto)

    * Bônus: use somente um if.
*/

function ex10() {
  const custo = document.getElementById('a10').value;
  const venda = document.getElementById('b10').value;
  if (custo < 0 || custo === '' || venda < 0 || venda === '') {
    document.getElementById('resultado10').innerHTML = '<span>ERRO!</span> Valor inválido.';  
  } else {
    const imposto = parseFloat(custo) * 0.2;
    const valorCustoTotal = parseFloat(custo) + imposto;
    const lucro = parseFloat(venda) - valorCustoTotal;
    const lucroTotal = parseFloat(lucro * 1000).toFixed(2);
    document.getElementById('resultado10').innerHTML = `Ao vender mil desses produtos a empresa terá um lucro de <em><span>R$ ${lucroTotal}</span></em>`;
  }
}

/*
  11- Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

    * A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
  
      - INSS
        * Salário bruto até R$ 1.556,94: alíquota de 8%
        * Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        * Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        * Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
  
      - IR
        * Até R$ 1.903,98: isento de imposto de renda
        * De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        * De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        * De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        * Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
*/

function ex11() {
  // Receber valor referente ao salário bruto
  const salarioBruto = parseFloat(document.getElementById('a11').value);
  // Declarar variáveis
  let aliquotaInss;
  let impostoDeRenda;
  let salarioBase;
  let salarioLiquido;
  // Validar a entrada de dados
  const validar = parseFloat(document.getElementById('a11').value);
  console.log(validar);
  if (validar < 0 || validar === '') {
    document.getElementById('resultado11').innerHTML = '<span>ERRO!</span> Valor inválido.';
  // Identificar a taxa do INSS
  } else if (salarioBruto <= 1556.94) {
    console.log('passando aqui 281');
    aliquotaInss = parseFloat(salarioBruto * 0.08).toFixed(2);
    salarioBase = salarioBruto - aliquotaInss;
  } else if (salarioBruto <= 2594.92) {
    aliquotaInss = parseFloat(salarioBruto * 0.09).toFixed(2);
    salarioBase = salarioBruto - aliquotaInss;
  } else if (salarioBruto <= 5189.82) {
    aliquotaInss = parseFloat(salarioBruto * 0.11).toFixed(2);
    salarioBase = salarioBruto - aliquotaInss;
  } else {
    aliquotaInss = parseFloat(570.88).toFixed(2);
    salarioBase = salarioBruto - aliquotaInss;
  }
  
  // Identificar o Imposto de Renda (IR)
  if (salarioBase <= 1903.98) {
    salarioLiquido = parseFloat(salarioBase).toFixed(2);
    document.getElementById('resultado11').innerHTML = `Salário Líquido = <span>R$ ${salarioLiquido}</span><br>Taxa INSS = <span>R$ ${aliquotaInss}</span><br>Imposto de Renda = <span>Isento</span>`;
  } else if (salarioBase <= 2826.65) {
    impostoDeRenda = parseFloat((salarioBase * 0.075) - 142.80).toFixed(2);
    salarioLiquido = parseFloat(salarioBase - impostoDeRenda).toFixed(2);
    document.getElementById('resultado11').innerHTML = `Salário Líquido = <span>R$ ${salarioLiquido}</span><br>Taxa INSS = <span>R$ ${aliquotaInss}</span><br>Imposto de Renda = <span>R$ ${impostoDeRenda}</span>`;
  } else if (salarioBase <= 3751.05) {
    impostoDeRenda = parseFloat((salarioBase * 0.15) - 354.80).toFixed(2);
    salarioLiquido = parseFloat(salarioBase - impostoDeRenda).toFixed(2);
    document.getElementById('resultado11').innerHTML = `Salário Líquido = <span>R$ ${salarioLiquido}</span><br>Taxa INSS = <span>R$ ${aliquotaInss}</span><br>Imposto de Renda = <span>R$ ${impostoDeRenda}</span>`;
  } else if (salarioBase <= 4664.68) {
    impostoDeRenda = parseFloat((salarioBase * 0.225) - 636.13).toFixed(2);
    salarioLiquido = parseFloat(salarioBase - impostoDeRenda).toFixed(2);
    document.getElementById('resultado11').innerHTML = `Salário Líquido = <span>R$ ${salarioLiquido}</span><br>Taxa INSS = <span>R$ ${aliquotaInss}</span><br>Imposto de Renda = <span>R$ ${impostoDeRenda}</span>`;
  } else {
    impostoDeRenda = parseFloat((salarioBase * 0.275) - 869.36).toFixed(2);
    salarioLiquido = parseFloat(salarioBase - impostoDeRenda).toFixed(2);
    document.getElementById('resultado11').innerHTML = `Salário Líquido = <span>R$ ${salarioLiquido}</span><br>Taxa INSS = <span>R$ ${aliquotaInss}</span><br>Imposto de Renda = <span>R$ ${impostoDeRenda}</span>`;
  }
}
