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
