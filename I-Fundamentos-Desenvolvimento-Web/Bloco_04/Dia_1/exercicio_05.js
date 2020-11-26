/*
05- Faça um programa que defina três variáveis com os valores
dos três ângulos internos de um triângulo. Retorne true se os
ângulos representarem os ângulos de um triângulo e false caso
contrário.
    - Para os ângulos serem de um triângulo válido, a soma dos
    três deve ser 180 graus. Caso os ângulos estejam inválidos,
    o programa deve retornar uma mensagem de erro.
*/

//Declaração das variáveis
let lado1 = 30;
let lado2 = 50;
let lado3 = 100;

//Verifica a soma dos ângulos se é igual a 180º
if (lado1 < 180 && lado2 < 180 && lado3 < 180) {
    if (lado1 + lado2 + lado3 === 180) {
        console.log(true);
        console.log('Parabéns! Você encontrou o Triângulo!')
    } else {
        console.log(false);
        console.log('Para ser um Triângulo a soma dos ângulos deve ser 180.')
    }
} else {
     console.log('Valor inválido! Digite três valores menores que 180.');
}
