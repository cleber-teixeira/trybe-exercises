/*
03- Faça um programa que retorne o maior de três números.
Defina no começo do programa três variáveis com os 
valores que serão comparados.
*/

//Declaração de variáveis
let n1 = 70;
let n2 = 60;
let n3 = 100;

//Compara maior número
if (n1 > n2 && n1 > n3) {
    console.log('Sendo os valores "' + n1 + '", "' + n2 + '" e "' + n3 + '", logo o valor "' + n1 + '" é o maior.');
} else if (n2 > n1 && n2 > n3) {
    console.log('Sendo os valores "' + n1 + '", "' + n2 + '" e "' + n3 + '", logo o valor "' + n2 + '" é o maior.');
} else {
    console.log('Sendo os valores "' + n1 + '", "' + n2 + '" e "' + n3 + '", logo o valor "' + n3 + '" é o maior.');
}
