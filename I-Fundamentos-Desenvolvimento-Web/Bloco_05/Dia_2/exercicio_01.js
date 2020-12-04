// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let titleH1 = document.createElement('h1');
titleH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(titleH1);

// 2. Adicione a tag div com a classe main-content como filho da tag body;
let divMainContent = document.createElement('div');
divMainContent.className = 'main-content';
document.body.appendChild(divMainContent);

// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divCenterContent = document.createElement('div');
divCenterContent.className = 'center-content';
divMainContent.appendChild(divCenterContent);

// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let tagP = document.createElement('p');
tagP.innerText = 'O DOM (Document Object Model) é uma interface que representa como os HTML e XML são lidos pelo browser. Após a leitura do documento HTML pelo browser, o DOM cria um objeto que faz uma representação do documento e define meios de como essa estrutura pode ser acessada, dessa forma podemos utilizar o JavaScript para manipular o DOM e assim alterar o estilo e o conteúdo de nossa página.';
divCenterContent.appendChild(tagP);

// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let divLeftContent = document.createElement('div');
divLeftContent.className = 'left-content';
divMainContent.appendChild(divLeftContent);

// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let divRightContent = document.createElement('div');
divRightContent.className = 'right-content';
divMainContent.appendChild(divRightContent);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
let imgSmall = document.createElement('img');
imgSmall.className = 'small-image';
imgSmall.src = 'https://picsum.photos/200';
divLeftContent.appendChild(imgSmall);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let unorderedList = document.createElement('ul');
for (let index = 0; index < numbers.length; index += 1) {
    let num = numbers[index];
    let liContent = document.createElement('li');
    liContent.innerText = num;
    unorderedList.appendChild(liContent);
}
divRightContent.appendChild(unorderedList);

// 9. Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.
for (index= 1; index <= 3; index += 1) {
    let tagH3 = document.createElement ('h3');
    divMainContent.appendChild(tagH3);
}
