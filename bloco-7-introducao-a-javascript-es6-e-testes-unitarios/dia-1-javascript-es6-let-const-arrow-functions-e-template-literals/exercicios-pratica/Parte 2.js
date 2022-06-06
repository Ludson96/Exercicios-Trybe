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
const maiorPalavra = string => {
  let palavras = string.split(' ');
  let palavraMaior = '';

  for (index of palavras) {
    if ( index.trim().length > palavraMaior.length) {
      palavraMaior = index.trim();
    }
  }
  console.log(`A palavra maior é: ${palavraMaior}`);
}

maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu');
