/*
02 - Para o segundo exercício, some todos os valores contidos
no array e imprima o resultado;
*/

// Define as variáveis
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

// Percorre o array realizando a soma dos valores do array
for (let index = 0; index < numbers.length; index += 1) {
  result = result + numbers[index];
}

console.log(result);
