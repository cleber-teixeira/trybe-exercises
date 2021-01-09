/* 1- Para o primeiro exercício de hoje, faça um programa que,
dado um valor n qualquer, seja n > 1 , imprima na tela um
quadrado feito de asteriscos de lado de tamanho n.

Por exemplo:

n = 5

*****
*****
*****
*****
***** */

// Declara variável
let value = 5;
let square = '';

// Imprime um quadrado de asterisco
for (let index = 1; index <= value; index += 1) {
    square += '*';
}

console.log('O valor informado foi: ' + value);
console.log('');

for (let index = 1; index <= value; index += 1) {
    console.log(square);
}
