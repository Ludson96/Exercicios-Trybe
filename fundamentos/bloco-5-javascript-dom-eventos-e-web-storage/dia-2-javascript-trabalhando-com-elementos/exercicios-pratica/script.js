// //1 - 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let h1 = document.createElement('h1');
h1.innerText = "Exercício 5.2 - Javascript DOM";
document.body.appendChild(h1);

// //2 - 🚀 Adicione a tag main com a classe main-content como filho da tag body;

let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

// //3 - 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2

let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

// //4 - 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let p = document.createElement('p');
p.innerText = "4 - coloque algum texto"
section.appendChild(p);

// //5 - 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let section2 =document.createElement('section');
section2.className = 'left-content';
main.appendChild(section2);

// //6 - 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);

// //7 - 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

let img = document.createElement('img');
img.src = 'https://picsum.photos/200'
img.className = 'small-image';
section2.appendChild(img);

// //8 - 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 

let ul = document.createElement('ul');
section3.appendChild(ul);
let crescente = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
'Sete', 'Oito', 'Nove', 'Dez'];

for (let num in crescente) {
    
    let criacaoLi = document.createElement('li');
    criacaoLi.innerText = crescente[num];
    ul.appendChild(criacaoLi);
}

// //9 - 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 1; index <= 3; index += 1) {
    const criacaoH3 = document.createElement('h3');
    main.appendChild(criacaoH3)
}

// //Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// //1 - 🚀 Adicione a classe title na tag h1 criada;

h1.className = 'title';

// //2 - 🚀 Adicione a classe description nas 3 tags h3 criadas;
const h3 = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
    h3[index].className = 'description';
}

// //3 - 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

main.removeChild(section2);

// //4 - 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

document.querySelector('.right-content').style.marginRight = 'auto'; 

// //5 - 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

document.querySelector('.center-content').style.backgroundColor = 'green';

// //6 - 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

ul.lastChild.remove();
ul.lastChild.remove();