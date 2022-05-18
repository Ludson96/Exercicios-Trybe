// //Exercícios = "Agora a prática"

// // 1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.Com base nessas informações, crie um algoritmo que retorne o fatorial de 10

// const a = 10;
// var resultado = a;

// for(i = 1; i < a; i += 1){

// resultado *= a-i;
// }

// console.log(resultado);

// //2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'banana';
// let invertido = '' ;

// for (i = 1; i <= word.length; i += 1){
//     invertido += word[word.length - i];
// }

// console.log(invertido);

// //3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let smallestWord = array[0];
// // let smallestWord = [];
// let maiorPalavra = [];

// for(let i = 0; i < array.length; i += 1){
//     if(array[i].length > maiorPalavra.length){
//         maiorPalavra = array[i];
//     }
// }

// for(let index = 0; index < array.length; index += 1) {
//     if (array[index].length < smallestWord.length) {
//         smallestWord = array[index];
//     }
// }


// console.log('A maior palavra é: ' + maiorPalavra);
// console.log('A menor palavra é: ' + smallestWord );

// //4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// let biggestPrimeNumber = 0;

// for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);