const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'aplication/json'}
};

const fetchJoke = (API_URL, myObject) => {
  // Adicionar lógica aqui!
  .then(response => console.log(response));
};

window.onload = () => fetchJoke();