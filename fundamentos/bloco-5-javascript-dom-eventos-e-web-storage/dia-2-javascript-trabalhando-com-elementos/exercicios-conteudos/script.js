// let para = "Eu sou irmão do elementoOndeVoceEsta";

// let irmao = document.createElement('section');
// irmao.innerText = para;

// pai.appendChild(irmao);

// let para1 = "Eu sou filho do elementoOndeVoceEsta";

// let irmao1 = document.createElement('section');
// irmao1.innerText = para1;

// elementoOndeVoceEsta.appendChild(irmao1);

// let para2 = "Eu sou o segundo filho do elementoOndeVoceEsta";

// let irmao2 = document.createElement('section');
// irmao2.innerText = para2;
// irmao2.className = 'ingredients-list-item';

// elementoOndeVoceEsta.appendChild(irmao2);

// let ingredientListItems = document.querySelectorAll('.ingredients-list-item');

// for (let index = 0; index < ingredientListItems.length; index += 1){
//     if (ingredientListItems[index].innerText.includes('segundo')){
//         elementoOndeVoceEsta.removeChild(ingredientListItems[index]);
//     }
// }

// const pai = document.getElementById('pai');

// for (let index = pai.childNodes.length -1; index >= 0; index -= 1) {
//     const currentChildren = pai.childNodes[index];
//     if (currentChildren.id !== 'elementoOndeVoceEsta') {
//         currentChildren.remove();
//     }
// }

// const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
// segundoEUltimoFilhoDoFilho.remove();

// const pai = document.getElementById('pai');

// for (let index = 0; index < pai.childNodes.length -1; index += 1) {
//   const currentChildren = pai.childNodes[index];
//   console.log(currentChildren);
//   if (currentChildren.id !== 'elementoOndeVoceEsta') {
//     currentChildren.remove();
//   }
// }
// console.log(pai.childNodes.length);
// const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
// segundoEUltimoFilhoDoFilho.remove();

// for (let index = 9 -1; index >= 0; index -= 1) {
//     console.log(index);
// }

// const pai = document.getElementById('pai');

//     for (let index = 0; index < pai.childNodes.length - 1; index += 1) {
//       const currentChildren = pai.childNodes[index];
//       console.log(pai.childNodes.length);
//       console.log(currentChildren);
//       if (currentChildren.id !== 'elementoOndeVoceEsta') {
//         currentChildren.remove();
//       }
//     }

//     const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
//     segundoEUltimoFilhoDoFilho.remove();

// //1 - Crie um irmão para elementoOndeVoceEsta.
let elementSection = document.createElement('section');
let pai = document.getElementById('pai');
pai.appendChild(elementSection);

// //2 - Crie um filho para elementoOndeVoceEsta.
let elementOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let elementSection2 = document.createElement('section');
elementOndeVoceEsta.appendChild(elementSection2);

// //3 -Crie um filho para primeiroFilhoDoFilho 
let elementSection3 = document.createElement('section');
let elementFirstSon = document.getElementById('primeiroFilhoDoFilho');
elementSection3.className = 'teste3';
elementFirstSon.appendChild(elementSection3);

// //4 - A partir desse filho criado, acesse terceiroFilho.
