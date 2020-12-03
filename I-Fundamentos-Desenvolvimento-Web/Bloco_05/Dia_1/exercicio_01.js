/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()

5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

/*
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
*/
function changeParagraphText () {
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerText = 'Daqui a dois anos me vejo bem sucedido com tudo que estou aprendendo na Trybe.';
}
changeParagraphText();
/* 
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
*/
function changeSquareColor() {
    let square = document.getElementsByClassName('main-content')[0];
    square.style.backgroundColor = 'rgb(76 , 164 , 109)';
}
changeSquareColor();
/*
3. Crie uma função que mude a cor do quadrado vermelho para branco.
*/
function changeSquareColor2() {
    let square = document.getElementsByClassName('center-content')[0];
    square.style.backgroundColor = 'rgb(255 , 255 , 255)';
}
changeSquareColor2();
/*
4. Crie uma função que corrija o texto da tag <h1>.
*/