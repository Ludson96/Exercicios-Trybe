// //Conteúdos = "Objetos"

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
//     medals: { 
//         golden: 2,
//         silver: 3 },
// };

// //2 - console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// //4 - console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// //5 - console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// //Conteúdos = "for/in e for/of"

// //1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

// for(let nome in names){
//     console.log('Olá, ' + names[nome]);
// }

// //2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(var carro in car){
//       console.log(carro, car[carro]);
//   }

// //Exercícios = "Parte 1 - Ojetos e For/In"

// //1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log('Bem-vinda, ' + info.personagem);

// //2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info.recorrente = 'Sim';

//   console.log(info);

// //3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim',
//   };

//   for(let disney in info){
//       console.log(disney);
//   }

// //4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };

//   for(let disney in info){
//       console.log(info[disney]);
//   }

// //5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };

//   let info2 = {
//       personagem: 'Tio Patinhas',
//       origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//       nota: 'O último MacPatinhas',
//       recorrente: 'Sim',
//   };

//   for(let disney in info){
//       if(disney === 'recorrente' && info[disney] === 'Sim' && info2[disney] === 'Sim'){
//           console.log('Ambos recorrentes');
//       } else {
//           console.log(info[disney] + ' e '+  info2[disney]);
//       }
//   }

// //🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

  // //🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

//   let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   });

//   console.log(leitor.livrosFavoritos[1]);

// //🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   leitor.livrosFavoritos.push({
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//       });
    

//   console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');

// //Exercícios = Parte 2 - Funções

// //1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function verificaPalindromo(palindromo){
//     const reverso = palindromo.split('').reverse().join('');
//     if(reverso === palindromo){
//         console.log('1');
//         return true;
//     } else {
//         console.log('2');
//         return false;
//     }
// }

// verificaPalindromo('teste')

// //2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor

// function indiceArray(array) {
//     let indiceMaior = 0;
//     for(let index in array){
//         if(array[index] > array[indiceMaior]) {
//             indiceMaior = index;
//         }
//     }
//     return ('Meu indice maior é: ' + indiceMaior);
// }

// console.log(indiceArray([2, 3, 6, 7, 10, 1]));

// //3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function indiceArray(array) {
//     let indiceMenor = 0;
//     for(let index in array){
//         if(array[index] < array[indiceMenor]) {
//             indiceMenor = index;
//         }
//     }
//     return ('Meu indice menor é: ' + indiceMenor);
// }

// console.log(indiceArray([2, 4, 6, 7, 10, 0, -3]));

// //4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function maiorNome(nome){

//   let maiorPalavra = [];

//   for(let i in nome){
//       if(nome[i].length > maiorPalavra.length){
//           maiorPalavra = nome[i];
//       }
//   }

//   return ('A maior palavra é: ' + maiorPalavra);

// }

// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// //5 - 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// // Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// // Valor esperado no retorno da função: 2.
// function repetido(array) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (index = 0; index < array.length; index += 1) {
//     let verificaNumero = numeros[index];
//     for (index2 = 0; index2 < array.length; index2 += 1) {
//       if (verificaNumero === array[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;

//     }
//   }
// }

// //6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// function somatorio(n) {
//   let somado = 0;
//   for (index = 0; index <= n; index += 1) {
//     somado += index;
//   }
//   return somado;
// }

// console.log(somatorio(5));

// //7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// function verificaFimPalavra(word, ending) {
//   let resposta = 0;
//   for (index = 1; index < ending.length; index += 1) {
//     if (word[word.length - index] === ending[ending.length - index]){
//       resposta = true;
//     } else {
//       resposta = false;
//     }
//   }
//   return resposta;

// }

// console.log(verificaFimPalavra('joaofernando', 'fernan'));