//Declaração de variáveis
let n1 = 19;
let n2 = 60;
let n3 = 23;
let result = 0;

//Compara maior número
if (n1 > n2) {
    result = n1;
} else if (n2 > n3) {
    result = n2;
} else {
    result = n3;
}

//Resultado
console.log('Sendo os valores "' + n1 + '", "' + n2 + '" e "' + n3 + '", logo o valor "' + result + '" é o maior.');