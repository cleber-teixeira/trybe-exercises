/* 06- Escreva um programa que receba o nome de uma peça de 
    xadrez e retorne os movimentos que ela faz.
    * Como desafio, faça o programa funcionar tanto se
    receber o nome de uma peça com letras maiúsculas
    quanto com letras minúsculas, sem aumentar a
    quantidade de condicionais.
    * Como dica, você pode pesquisar uma função que faz
    uma string ficar com todas as letras minúsculas
    (lower case) .
    * Se a peça passada for inválida, o programa deve
    retornar uma mensagem de erro.
    
    *Exemplo: bishop -> diagonals */

    // Declaração da variável
    let pecaDeXadrez = 'Peão';

    // Retorna os movimentos das peças
    switch (pecaDeXadrez.toLowerCase()) {
        case 'rei' || 'rei':
            console.log('O rei pode avançar uma casa em qualquer direção.');
            break;
        case 'rainha':
            console.log('A rainha pode avançar na diagonal e na horizontal.');
            break;
        case 'peão':
            console.log('O peão pode avançar uma ou duas casas a primeira vez depois apenas uma.');
            break;
        case 'bispo':
            console.log('O bispo avança na diagonal.');
            break;
        case 'cavalo':
            console.log('O cavalo pode se movimentar em L saltando sobre outras peças.');
            break;
        case 'torre':
            console.log('A torre pode avançar na horizontal ou vertical.');
            break;
        default:
            console.log('Erro, peça inválida!');
            break;
    };
