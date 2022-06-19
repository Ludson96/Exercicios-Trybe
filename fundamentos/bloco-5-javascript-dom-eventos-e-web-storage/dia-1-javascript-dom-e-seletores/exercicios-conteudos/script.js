// //Conteúdos = "Parte 2 - Seletores de elementos"

// document.getElementById("page-title").innerText = "Poderoso Chefão";

// document.getElementById("page-title").style.color = "blue";

// document.getElementById('second-paragraph').innerText = "Alterando o segundo paragrafo";

// document.getElementById('second-paragraph').style.color = "green"

// document.getElementsByClassName('paragrafo')[0].style.color = 'red';

// document.getElementsByClassName('paragrafo')[1].style.color = 'blue';

// document.getElementsByTagName('h4')[0].style.color = 'green'

// //Conteúdos = "Parte 3 - Quqla seletor usar?"

// Header
document.getElementsByTagName('header')[0].style.backgroundColor = '#00B069';
document.getElementsByTagName('h1')[0].style.color = 'white';

//"Urgente e Importante"
document.getElementsByTagName('div')[0].style.backgroundColor = '#FF9F84';
document.getElementsByTagName('h3')[0].style.color = 'white';
document.getElementsByTagName('h3')[0].style.backgroundColor = '#A500F3';

//"Urgente e Não-Importante"
document.getElementsByTagName('div')[1].style.backgroundColor = '#FF9F84';
document.getElementsByTagName('h3')[1].style.color = 'white';
document.getElementsByTagName('h3')[1].style.backgroundColor = '#A500F3';

//"Não-Urgente e Importante"
document.getElementsByTagName('div')[2].style.backgroundColor = '#F9DB5E';
document.getElementsByTagName('h3')[2].style.color = 'white';
document.getElementsByTagName('h3')[2].style.backgroundColor = '#232525';

//"Não-Urgente e Não-Importante"
document.getElementsByTagName('div')[3].style.backgroundColor = '#F9DB5E';
document.getElementsByTagName('h3')[3].style.color = 'white';
document.getElementsByTagName('h3')[3].style.backgroundColor = '#232525';

//Footer
document.getElementsByTagName('footer')[0].style.backgroundColor = '#003533';
document.getElementsByTagName('footer')[0].style.color = 'white';