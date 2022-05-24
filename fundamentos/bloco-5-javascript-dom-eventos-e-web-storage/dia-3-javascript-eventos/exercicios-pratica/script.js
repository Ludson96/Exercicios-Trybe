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

  // //🚀 Exercício 1: O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

// //Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  const nDaysWeek = document.getElementById('days')

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const nDays = dezDaysList[index];
    const nDaysList = document.createElement('li');
    nDaysList.innerHTML = nDays;
    nDaysList.className = 'day'
    
    nDaysWeek.appendChild(nDaysList);
  }

  // // Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
  document.getElementsByClassName('day')[25].className = 'day holiday';
  document.getElementsByClassName('day')[26].className = 'day holiday friday';
  document.getElementsByClassName('day')[32].className = 'day holiday';

  // // Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
  document.getElementsByClassName('day')[5].className = 'day friday';
  document.getElementsByClassName('day')[12].className = 'day friday';
  document.getElementsByClassName('day')[19].className = 'day friday';

// //🚀 Exercício 2: Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados"

// // Adicione a este botão a ID "btn-holiday".
function feriado(feriados) {}

// //Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
const newButton = document.createElement('input');
newButton.type = 'button';
newButton.value = 'Feriados';
let divBtn = document.querySelector('.buttons-container');
divBtn.appendChild(newButton);
newButton.id = 'btn-holiday';

// //