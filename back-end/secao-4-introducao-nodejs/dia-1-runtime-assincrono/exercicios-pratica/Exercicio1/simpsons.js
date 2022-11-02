// // Exercicio 6
// // A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

// const fs = require('fs').promises;

// async function readCharacter() {
//   const jsonContent = await fs.readFile('./simpsons.json');
//   const allCharacter = JSON.parse(jsonContent);
  
//   const string = allCharacter.map((c) => {
//     console.log(`${c.id} - ${c.name}`);
//   })
// }

// async function main() {
//   await readCharacter();
// }

// main();
// ===================================================================================

// ===================================================================================

// // B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

// const fs = require('fs').promises;
// const readline = require('readline-sync');

// async function readCharacter(person) {
//   const jsonContent = await fs.readFile('./simpsons.json');
//   const allCharacter = JSON.parse(jsonContent);

//   const personEscolhido = allCharacter.find((p) => Number(p.id) === person);

// }

// async function insertInput() {
//   const input = readline.questionInt('Digite um id: ');
//   await readCharacter(input);
// }

// function main() {
//   insertInput()
// }

// main();

// ===================================================================================

// ===================================================================================

// // C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.


// const fs = require('fs').promises;
// const readline = require('readline-sync');

// async function readCharacter(person) {
//   const jsonContent = await fs.writeFile('./simpsons.json', '');


// }

// function main() {
//   readCharacter()
// }

// main();

// ===================================================================================

// ===================================================================================

// // D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

// const fs = require('fs').promises;

// async function readCharacter() {
//   try {
//     const readJSON = await fs.readFile('./simpsons.json');
//     await fs.writeFile('./simpsonFamily.json', readJSON);
//   } catch(erro) {
//     console.error(`Erro ao escrever o arquivo: ${erro.message}`)
//   }
// }

// function main() {
//   readCharacter()
// }

// main();

// ===================================================================================

// ===================================================================================

// // E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

const fs = require('fs').promises;

async function readCharacter() {
  try {
    await fs.writeFile('./simpsonFamily.json',  JSON.stringify({
      "id": "11",
      "name": "Nelson Muntz"
    }));
  } catch(erro) {
    console.error(`Erro ao escrever o arquivo: ${erro.message}`)
   }
}

function main() {
  readCharacter()
}

main();

// ===================================================================================