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
// //Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function feriado(feriados) {
  const newButton = document.createElement('input');
  newButton.type = 'button';
  newButton.value = feriados;
  let divBtn = document.querySelector('.buttons-container');
  divBtn.appendChild(newButton);
  newButton.id = 'btn-holiday';
}

feriado('Feriados')

// //🚀 Exercício 3: Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".

// // É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)
let getHolidayButton = document.querySelector('#btn-holiday')
function mostraFeriados() {
  let holiday = document.querySelectorAll('.holiday');

  for (index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor == 'white') {
      holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      holiday[index].style.backgroundColor = 'white';
    }
  }
}

getHolidayButton.addEventListener('click', mostraFeriados)

// //🚀 Exercício 4: Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

// // Adicione a este botão o ID "btn-friday".

// // Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function fryday(dia) {
  const newButton = document.createElement('input');
  newButton.type = 'button';
  newButton.value = dia;
  let divFri = document.querySelector('.buttons-container');
  divFri.appendChild(newButton);
  newButton.id = 'btn-friday';
}

fryday('Sexta-feira');

// //🚀 Exercício 5: Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

// // É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
let getBtnFriday = document.getElementById('btn-friday');
let dezFridays = [4, 11, 18, 25]

getBtnFriday.addEventListener('click', function () {
  let getText = document.querySelectorAll('.friday');
  for (let index = 0; index < getText.length; index += 1) {
    if (getText[index].innerHTML != 'SEXOU o/') {
      getText[index].innerHTML = 'SEXOU o/';
    } else {
      getText[index].innerHTML = dezFridays[index];
    }
  }
});

// //🚀 Exercício 6: Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// // Dica - Propriedade: event.target.
const getDay = document.querySelectorAll('.day');

function zoomIn(event) {
  event.target.style.fontSize = '30px';
}

function zoomOut(event) {
  event.target.style.fontSize = '20px';
}

for (let index = 0; index < getDay.length; index += 1) {
  getDay[index].addEventListener('mouseover', zoomIn);
}

for (let index = 0; index < getDay.length; index += 1) {
  getDay[index].addEventListener('mouseleave', zoomOut);
}

// //🚀 Exercício 7: Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

// // O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
const getTarefa = document.querySelector('.my-tasks');

function tarefas(tarefa){
  let setTarefa = document.createElement('span')
  getTarefa.appendChild(setTarefa)
  setTarefa.innerHTML = tarefa;
}

tarefas('Cozinhar');

// //🚀 Exercício 8: Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.

// //O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.

// //O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks
function selectAssignment(cor){
  let setLegend = document.createElement('div')
  getTarefa.appendChild(setLegend)
  setLegend.style.backgroundColor = cor;
  setLegend.className = 'task'
}

selectAssignment('yellow');

function selectAssignment2(cor){
  let setLegend = document.createElement('div')
  getTarefa.appendChild(setLegend)
  setLegend.style.backgroundColor = cor;
  setLegend.className = 'task'
}

selectAssignment('red');

// //🚀 Exercício 9: Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.

// //Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
let getElement = document.querySelector('.task');

function selectedTarefa(event) {
  if (event.target.classList == 'task selected') {
    event.target.classList.remove('selected');
  } else {
    event.target.classList.add('selected');
  }
}

getElement.addEventListener('click',selectedTarefa);

// //🚀 Exercício 10: Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

// //Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).

function colorizado(event) {
  let bgcustom = document.getElementsByClassName('selected')[0];
  const cssSelected = getComputedStyle(bgcustom, null);

  let bgColor = cssSelected.getPropertyValue('background-color');
  if (event.target.style.backgroundColor != bgColor ){
  event.target.style.backgroundColor = bgColor;
  } else {
    event.target.style.backgroundColor = 'rgb(238,238,238)';
  }
}

for (let index = 0; index < getDay.length; index += 1) {
getDay[index].addEventListener('click', colorizado);
}

// //🚀 Bônus: Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

// //Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".

// //Ao pressionar a tecla "enter" o evento também deverá ser disparado
function addCom() {
  let getInput = document.getElementById('task-input').value;
  let newCom = document.createElement('li');
  newCom.innerHTML = getInput;
  let getUl = document.getElementsByTagName('ul')[3];
  getUl.appendChild(newCom);
  document.getElementById('task-input').value = ' ';
}

let getAdicionar = document.getElementById('btn-add');
getAdicionar.addEventListener('click', addCom);
getAdicionar.addEventListener(event.'Enter')

