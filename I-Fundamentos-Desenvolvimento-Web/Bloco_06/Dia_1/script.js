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
function selectDate() {
  const dateSelect = document.getElementById('start-date');
  dateSelect.addEventListener('change', function (event) {
    const date = event.target.value;
    checkDate(date);
  }); 
}

// Inicia as funções após o carregamento da página HTML
window.onload = function () {
  // Cria tags <option>
  optionCreate();
  selectDate();
}
