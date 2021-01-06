// Função para criar tags <option> na tag <select> com os estados brasileiros
function optionCreate () {
  // Array com objetos contendo as informações de UF e Estado
  const state = [{key: "", value: "selecione um estado"}, {key: "AC", value: "Acre"}, {key: "AL", value: "Alagoas"}, {key: "AP", value: "Amapá"}, {key: "AM", value: "Amazonas"}, {key: "BA", value: "Bahia"}, {key: "CE", value: "Ceará"}, {key: "DF", value: "Distrito Federal"}, {key: "ES", value: "Espírito Santo"}, {key: "GO", value: "Goiás"}, {key: "MA", value: "Maranhão" }, {key: "MT", value: "Mato Grosso"}, {key: "MS", value: "Mato Grosso do Sul"}, {key: "MG", value: "Minas Gerais"}, {key: "PA", value: "Pará"}, {key: "PB", value: "Paraíba"}, {key: "PR", value: "Paraná"}, {key: "PE", value: "Pernambuco"}, {key: "PI", value: "Piauí"}, {key: "RJ", value: "Rio de Janeiro"}, {key: "RN", value: "Rio Grande do Norte"}, {key: "RS", value: "Rio Grande do Sul"}, {key: "RO", value: "Rondônia"}, {key: "RR", value: "Roraima"}, {key: "SC", value: "Santa Catarina"}, {key: "SP", value: "São Paulo"}, {key: "SE", value: "Sergipe"}, {key: "TO", value: "Tocantins"}];
  // Seleciona a tag <select> no html
  const selectState = document.getElementById('select-state');
  // Laço de repetição para percorrer pelo array identificando os estados
  for (let index = 0; index < state.length; index += 1) {
    const createOption = document.createElement('option');
    // Atribui o texto com o nome do estado
    createOption.innerText = state[index].value;
    // Atribui à propriedade 'value' o valor UF na tag <option>
    createOption.value = state[index].key;
    // Aribui a tag <option> à tag <select>
    selectState.appendChild(createOption);
    if (index === 0) {
      // adiciona uma classe à primeira opção
      createOption.classList.add('state-select');
    }
  }
}

// Função para validar a data
function checkDate(date) {
  // const date = getElementById('start-date').value;
  if (date.length === 10) {
    if (date[2] === '/' && date[5] === '/') {
      if (date.slice(0, 2) > 0 && date.slice(0, 2) <= 31) {
        if (date.slice(3, 5) > 0 && date.slice(3, 5) <= 12) {
          if (date.slice(6, 10) >= 0) {
            true
          } else {
            alert('ERRO! Data ou formato (dd/mm/aaaa) incorreto!');        
          }
        } else {
          alert('ERRO! Data ou formato (dd/mm/aaaa) incorreto!');
        }
      } else {
        alert('ERRO! Data ou formato (dd/mm/aaaa) incorreto!');
      }
    } else {
      alert('ERRO! Data ou formato (dd/mm/aaaa) incorreto!');
    }
  } else {
    alert('ERRO! Data ou formato (dd/mm/aaaa) incorreto!');
  }
}

// Função para receber a data e chamar a função de validação
/* function selectDate() {
  const dateSelect = document.getElementById('start-date');
  dateSelect.addEventListener('change', function (event) {
    const date = event.target.value;
    checkDate(date);
  }); 
} */

// Função para executar a função checkDate e preventDefault
function notStartDefault(event) {
  const date = document.getElementById('start-date').value;
  checkDate(date);
  divCreate();
  event.preventDefault();
}

// Função para executar função notStartDefout do botão 'Enviar'
function actionBtn(){
  const btn = document.getElementById('submit-btn');
  btn.addEventListener('click', notStartDefault);
}

// Função para criar uma <div> e preencher com os dados do formulário
function divCreate() {
  // Obtem as referências dos valores
  const page = document.body;
  const name = document.getElementById('input-name').value;
  const email = document.getElementById('input-email').value;
  const cpf = document.getElementById('input-cpf').value;
  const address = document.getElementById('input-address').value;
  const city = document.getElementById('input-city').value;
  const state = document.getElementById('select-state').value;
  const home = document.getElementsByName('tipo');
  let vHome;
  for (let index = 0; index < home.length; index += 1) {
    if (home[index].checked) {
      vHome = home[index].value;
    }
  }
  const resume = document.getElementById('resume').value;
  const jobPosition = document.getElementById('job-position').value;
  const description = document.getElementById('description').value;
  const startDate = document.getElementById('start-date').value;
  // Cria a <div>
  const div = document.createElement('div');
  div.id = 'div-data';
  div.classList.add('container');
  div.classList.add('block');
  // Atribui os dados à <div>
  div.innerHTML = `<h1 class="title is-4">Formulário de Cadastro de Currículo &#128196;</h1>
  <hr><h2 class="subtitle is-4">Dados Pessoais:</h2>
  <p class="p-data"><strong>Nome:</strong> ${name}</p>
  <p class="p-data"><strong>E-mail:</strong> ${email}</p>
  <p class="p-data"><strong>CPF:</strong> ${cpf}</p>
  <p class="p-data"><strong>Endereço:</strong> ${address}</p>
  <p class="p-data"><strong>Cidade:</strong> ${city}</p>
  <p class="p-data"><strong>Estado:</strong> ${state}</p>
  <p class="p-data"><strong>Moradia:</strong> ${vHome}</p><hr>
  <h2 class="subtitle is-4">Dados do seu último emprego:</h2>
  <p class="p-data"><strong>Resumo do currículo:</strong> ${resume}</p>
  <p class="p-data"><strong>Cargo:</strong> ${jobPosition}</p>
  <p class="p-data"><strong>Descrição do cargo:</strong> ${description}</p>
  <p class="p-data"><strong>Data de início:</strong> ${startDate}</p><hr>`;
  // Atribui a <div> à página
  page.appendChild(div);
}

// Inicia as funções após o carregamento da página HTML
window.onload = function () {
  // Cria tags <option>
  optionCreate();
  // Evento botão 'Enviar'
  actionBtn();
}
