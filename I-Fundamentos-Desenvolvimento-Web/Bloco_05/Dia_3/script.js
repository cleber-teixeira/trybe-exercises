function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // 01. Cria uma função com os dias do calendário na <ul> com id="days".
 function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');
  
  for (let index = 0; index <dezDaysList.length ; index += 1) {
    const day = dezDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.classList.add('day');

    if (day === 24 || day === 25 || day === 31) {
      dayListItem.classList.add('holiday');
    } else if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayListItem.classList.add('friday');
    }

    dayListItem.innerHTML = day;  
    monthDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheMonth();

/*
02. Implementa uma função que recebe como parâmetro a string "Feriados" e cria dinamicamente um botão com o nome "Feriados".
  ▪ Adicione a este botão a ID "btn-holiday".
  ▪ Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function holidayButton (nameButton) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.innerText = nameButton;
  button.id = 'btn-holiday';
  buttonContainer.appendChild(button);
}
holidayButton('Feriados');

/* 
03. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
  ▪ É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
  */
 
 function selectColor() {
  const selectButton = document.querySelector('#btn-holiday');
  const selectHoliday = document.querySelectorAll('.holiday');
  const initialColor = 'rgb(238, 238, 238)';
  const newColor = 'rgb(115, 226, 200)';

  selectButton.addEventListener('click', function() {
    for (let index = 0; index < selectHoliday.length; index += 1) {
      if (selectHoliday[index].style.backgroundColor === newColor) {
        selectHoliday[index].style.backgroundColor = initialColor;
      } else {
        selectHoliday[index].style.backgroundColor = newColor;
      }
    }
  })
}

selectColor();
