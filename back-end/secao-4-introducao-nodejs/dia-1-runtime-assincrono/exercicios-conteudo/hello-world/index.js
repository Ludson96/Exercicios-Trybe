// // Exercicio 01

// const readline = require('readline-sync');

// const name = readline.question('Qual o seu nome? ');
// const age = readline.questionInt('Qual a sua idade? ');

// console.log(`Olá, ${name}. Você tem ${age} de idade`);


// // Codigo para ler o arquivo de textp
// const fs = require('fs').promises;

// async function main() {
//   try {
//     const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//   }
// }

// main()

// // Código para escrever arquivo de texto
// const fs = require('fs').promises;

// async function main() {
//   try {
//     await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
//     console.log('Arquivo escrito com sucesso!');
//   } catch (err) {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   }
// }

// main()