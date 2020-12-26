// Limpar o leitor com um click duplo
const clearButton = document.querySelector('.limpar');
clearButton.addEventListener('dblclick', function () {
  const inputResultado = document.querySelector('.inputResult');
  inputResultado.value = "";
});