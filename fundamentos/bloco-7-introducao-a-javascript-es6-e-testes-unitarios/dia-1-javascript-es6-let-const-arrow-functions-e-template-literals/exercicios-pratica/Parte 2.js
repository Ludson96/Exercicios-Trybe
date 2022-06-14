/// // 1 - Crie uma função que receba um número e retorne seu fatorial.
// const fatorial = number => {
//   let valorFatorado = 0;
//   for (let index = 1; index < number; index += 1) {
//     valorFatorado += number * (number - index);
//   }
//   return valorFatorado;
// }

// console.log(fatorial(4));

// // 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
// const maiorPalavra = string => {
//   let palavras = string.split(' ');
//   let palavraMaior = '';

//   for (index of palavras) {
//     if ( index.trim().length > palavraMaior.length) {
//       palavraMaior = index.trim();
//     }
//   }
//   console.log(`A palavra maior é: ${palavraMaior}`);
// }

// maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu');

// // 3 - 🚀 Crie uma página que contenha: botão contador de clicks
// const getBtn = document.getElementById('btn');
// const getVisit = document.getElementById('visit');
// let clickCount = 0;

// const contadorClicks = event => {
//   if (event.target) {
//     clickCount += 1;
//     getVisit.innerHTML = clickCount;
//   }
// }

// getBtn.addEventListener('click', contadorClicks);

// /// 4 -  

// let count = 0;

// function converte() {
//   let determinada = 'Tryber x aqui!';
//   for (index in determinada) {
//     if (determinada[index] === 'x') {
//       determinada[index] = 'Bebeto';
//       console.log(index);
//     }
//   }
//   return determinada;
// }

// console.log(converte('Bebeto'));

// let determinada = 'Tryber x aqui!';
// determinada = 'bebeto'

// console.log(determinada);


// // 2 - 
// const longestWord = (string) => {
//   const separada = string.split(' ');
//   // let palavraMaior = '';
//   for (let word of separada) {
//     console.log(`Esse é o index: ${word.length}`);
//     }
//   // return palavraMaior;
// }

// console.log(longestWord('Antônio foi no banheiroaaaaaa e não sabemos o que'));