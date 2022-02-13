/*
03 - Para o terceiro exercício, calcule e imprima a
média aritmética dos valores contidos no array;
*/

// Define as variáveis
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

// Percorre o array realizando a média dos valores do array
for (let index = 0; index < numbers.length; index += 1) {
  result = result + numbers[index];
}

console.log(result / numbers.length);
