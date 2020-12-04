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
